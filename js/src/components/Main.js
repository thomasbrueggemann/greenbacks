import React, { Component } from "react";

class Main extends Component {
	handleFileUpload(e) {
		console.log(e);
	}

	render() {
		return (
			<div>
				<h1>💵</h1>
				<input type="file" onChange={this.handleFileUpload(e)} />
			</div>
		);
	}
}

export default Main;
