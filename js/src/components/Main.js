import React, { Component } from "react";
import Papa from "papaparse";
import Row from "./Row";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			from: null,
			till: null,
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
				console.table(csv.slice(7));
				this.setState({
					from: csv[2][1],
					till: csv[3][1],
					data: csv.slice(7)
				});
			}
		});
	}

	render() {
		return (
			<center>
				<h1>💵</h1>
				<p>
					<input
						type="file"
						onChange={this.handleFileUpload.bind(this)}
					/>
				</p>

				<p>
					<b>From:</b> {this.state.from}, <b>Till:</b>{" "}
					{this.state.till}
				</p>

				<table border="1">
					<thead>
						<tr>
							<th>Date</th>
							<th>Receiver</th>
							<th>Reference</th>
							<th>Amount</th>
						</tr>
					</thead>
					<tbody>
						{this.state.data.map((d, idx) => {
							return <Row key={"row-" + idx} data={d} />;
						})}
					</tbody>
				</table>
			</center>
		);
		react;
	}
}

export default Main;
