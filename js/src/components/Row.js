import React, { Component } from "react";
import TagSelect from "./TagSelect";
import md5 from "md5";

class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {
			duplicate: false
		};
	}

	componentDidMount() {
		var hash = md5(JSON.stringify(this.props.data));

		window.db
			.select()
			.from(window.records)
			.where(window.records.hash.eq(hash))
			.exec()
			.then(results => {
				if (results.length > 0) {
					this.setState({
						duplicate: true
					});
				}
			});
	}

	render() {
		const { date, receiver, reference, amount } = this.props.data;

		var amountClass = "";
		var trClass = "";

		if (this.state.duplicate === true) {
			trClass = "tr-duplicate";
		} else {
			// set amount class
			if (amount > 0) {
				amountClass = "text-green";
			} else if (amount < 0) {
				amountClass = "text-red";
			}
		}

		return (
			<tr className={trClass}>
				<td>{date}</td>
				<td>{receiver}</td>
				<td>{reference}</td>
				<td className={amountClass}>{amount}€</td>
				<td>{this.state.duplicate === false ? <TagSelect /> : null}</td>
			</tr>
		);
	}
}

export default Row;
