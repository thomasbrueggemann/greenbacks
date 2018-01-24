import React, { Component } from "react";
import Papa from "papaparse";
import Row from "./Row";
import RecordsActions from "../actions/RecordsActions";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

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
							return <Row key={"row-" + idx} data={d} />;
						})}
					</tbody>
				</table>

				<button onClick={this.doImport.bind(this)}>Import</button>
			</div>
		);
	}
}

export default Main;
