import React, { Component } from "react";
import TagSelect from "./TagSelect";
import moment from "moment";

class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {
			duplicate: false,
			tag: null
		};
	}

	componentDidMount() {
		window.db
			.select()
			.from(window.records)
			.where(window.records.hash.eq(this.props.data.hash))
			.exec()
			.then(results => {
				if (results.length > 0) {
					this.setState({
						duplicate: true
					});
				}
			});
	}

	onTagSelect(tag) {
		this.props.onTagSelect(this.props.data.hash, tag);
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
				<td>{moment(date).format("DD.MM.YYYY")}</td>
				<td>{receiver}</td>
				<td>{reference}</td>
				<td className={amountClass}>{amount}€</td>
				<td>
					{this.state.duplicate === false ? (
						<TagSelect
							data={this.props.data}
							onTagSelect={this.onTagSelect.bind(this)}
						/>
					) : null}
				</td>
			</tr>
		);
	}
}

export default Row;
