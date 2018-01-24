import React, { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<center>
				<h1>💵</h1>
				{this.props.children}
			</center>
		);
	}
}

export default App;
