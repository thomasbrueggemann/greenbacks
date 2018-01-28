import React, { Component } from "react";
import { Link } from "react-router";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			records: []
		};
	}

	componentDidMount() {
		window.db
			.select()
			.from(window.records)
			.exec()
			.then(results => {
				if (results.length > 0) {
					this.setState({
						records: results
					});
				}
			});
	}

	render() {
		var tags = {};
		var total = 0;

		this.state.records.forEach(record => {
			if (record.amount < 0) {
				if (!(record.tag in tags)) {
					tags[record.tag] = 0;
				}

				tags[record.tag] += record.amount;
				total += record.amount;
			}
		});
		console.table(tags);

		return (
			<div>
				<Link to="/import">Import</Link>

				<table>
					<tbody>
						{Object.keys(tags).map(tag => {
							return (
								<tr key={tag}>
									<td>{tag}</td>
									<td>{parseInt(tags[tag])}€</td>
									<td>
										{parseInt(tags[tag] / total * 100)}%
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Main;
