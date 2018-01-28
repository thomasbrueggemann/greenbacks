import React, { Component } from "react";
import Papa from "papaparse";
import Row from "./Row";
import md5 from "md5";
import moment from "moment";
import lf from "lovefield";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	/**
	 * Load the CSV file
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	handleFileUpload(e) {
		const file = e.target.files[0];
		Papa.parse(file, {
			config: {
				encoding: "UTF-8"
			},
			complete: results => {
				const csv = results.data.slice(7);
				this.setState({
					data: csv.map(r => {
						var d = {
							date: moment(r[0], "DD.MM.YYYY").toDate(),
							receiver: r[3],
							reference: r[4],
							amount: parseFloat(r[7].replace(",", "."))
						};

						var hash = md5(JSON.stringify(d));
						d["hash"] = hash;

						return d;
					})
				});
			}
		});
	}

	/**
	 * Perform the import to web sql database
	 * @return {[type]} [description]
	 */
	doImport() {
		var rows = this.state.data
			.filter(r => {
				return "tag" in r && !!r.tag;
			})
			.map(record => {
				// train classifier
				window.classifier.learn(
					record.receiver + " " + record.reference,
					record.tag
				);

				return window.records.createRow(record);
			});

		window.db
			.insertOrReplace()
			.into(window.records)
			.values(rows)
			.exec();

		localStorage.setItem(
			"classifier",
			JSON.stringify(window.classifier.toJson())
		);
	}

	/**
	 * Triggers whenever the user selects a new tag
	 * @param  {[type]} hash [description]
	 * @param  {[type]} tag  [description]
	 * @return {[type]}      [description]
	 */
	onTagSelect(hash, tag) {
		var records = this.state.data.map(r => {
			if (r.hash == hash) {
				r.tag = tag;
			}
			return r;
		});

		this.setState({
			data: records
		});
	}

	/**
	 * Render method
	 * @return {JSX} the JSX markup
	 */
	render() {
		return (
			<div>
				<p>
					<input
						type="file"
						onChange={this.handleFileUpload.bind(this)}
					/>
				</p>

				<table border="1">
					<thead>
						<tr>
							<th>Date</th>
							<th>Receiver</th>
							<th>Reference</th>
							<th>Amount</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((record, idx) => {
							return (
								<Row
									key={"row-" + idx}
									data={record}
									onTagSelect={this.onTagSelect.bind(this)}
								/>
							);
						})}
					</tbody>
				</table>

				<button onClick={this.doImport.bind(this)}>Import</button>
			</div>
		);
	}
}

export default Main;
