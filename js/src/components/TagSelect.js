import React, { Component } from "react";

class TagSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [
				"car",
				"public-transport",
				"groceries",
				"eating-out",
				"communication",
				"transfer",
				"entertainment",
				"rent",
				"donations",
				"taxes",
				"household",
				"studying",
				"clothing",
				"fitness",
				"health",
				"personal-care",
				"subscriptions",
				"cash-withdrawel",
				"income",
				"misc",
				"insurance",
				"travel"
			]
		};
	}

	onChange(e) {
		const v = e.target.value;
		if (v.length > 0) {
			this.props.onTagSelect(v);
		}
	}

	render() {
		var tags = this.state.tags;
		tags.sort();

		// make a guess
		const guess = window.classifier.categorize(
			this.props.data.receiver + " " + this.props.data.reference
		);

		return (
			<select onChange={this.onChange.bind(this)} defaultValue={guess}>
				<option value="">Please choose:</option>
				{tags.map((tag, idx) => {
					return (
						<option key={"opt-" + idx} value={tag}>
							{tag}
						</option>
					);
				})}
			</select>
		);
	}
}

export default TagSelect;
