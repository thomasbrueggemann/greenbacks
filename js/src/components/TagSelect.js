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
				"misc"
			]
		};
	}

	onChange(e) {
		this.props.onTagSelect(e.target.value);
	}

	render() {
		var tags = this.state.tags;
		tags.sort();
		return (
			<select onChange={this.onChange.bind(this)}>
				{tags.map((tag, idx) => {
					return <option key={"opt-" + idx}>{tag}</option>;
				})}
			</select>
		);
	}
}

export default TagSelect;
