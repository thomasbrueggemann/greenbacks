import React, { Component } from "react";
import Papa from "papaparse";
import Row from "./Row";
import RecordsActions from "../actions/RecordsActions";
import RecordsStore from "../stores/RecordsStore";

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
				const csv = results.data;
				this.setState({
					data: csv.slice(7)
				});
			}
		});
	}

	/**
	 * Perform the import to web sql database
	 * @return {[type]} [description]
	 */
	doImport() {
		this.state.data.forEach(r => {
			RecordsActions.insert(
				{
					date: r[0],
					receiver: r[3],
					reference: r[4],
					amount: parseFloat(r[7].replace(",", "."))
				},
				"test"
			);
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
						{this.state.data.map((d, idx) => {
							var record = {
								date: d[0],
								receiver: d[3],
								reference: d[4],
								amount: parseFloat(d[7].replace(",", "."))
							};
							return <Row key={"row-" + idx} data={record} />;
						})}
					</tbody>
				</table>

				<button onClick={this.doImport.bind(this)}>Import</button>
			</div>
		);
	}
}

export default Main;
