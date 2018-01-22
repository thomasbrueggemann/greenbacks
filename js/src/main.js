import React from "react";
import { Router, Route, hashHistory } from "react-router";
import ReactDOM from "react-dom";
import routes from "./routes";

// render the DOM
ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById("app")
);
// listen to location changes
hashHistory.listen(location => {
	if (location.action === "PUSH") {
		console.info("New route:", location.pathname);
	}
});
