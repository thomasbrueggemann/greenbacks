import React, { Component } from "react";
import TagSelect from "./TagSelect";

class Row extends Component {
	render() {
		const date = this.props.data[0];
		const receiver = this.props.data[3];
		const reference = this.props.data[4];
		const amount = parseFloat(this.props.data[7].replace(",", "."));

		// set amount class
		var amountClass = "";
		if (amount > 0) {
			amountClass = "text-green";
		} else if (amount < 0) {
			amountClass = "text-red";
		}

		return (
			<tr>
				<td>{date}</td>
				<td>{receiver}</td>
				<td>{reference}</td>
				<td className={amountClass}>{amount}€</td>
				<td>
					<TagSelect />
				</td>
			</tr>
		);
	}
}

export default Row;
