import React from "react";
import { Router, Route, hashHistory } from "react-router";
import ReactDOM from "react-dom";
import routes from "./routes";
import lf from "lovefield";
import bayes from "bayes";

window.classifier = bayes();
if (localStorage.getItem("classifier")) {
	window.classifier = bayes.fromJson(
		JSON.parse(localStorage.getItem("classifier"))
	);
}

var schemaBuilder = lf.schema.create("records", 1);
schemaBuilder
	.createTable("Record")
	.addColumn("hash", lf.Type.STRING)
	.addColumn("date", lf.Type.DATE_TIME)
	.addColumn("receiver", lf.Type.STRING)
	.addColumn("reference", lf.Type.STRING)
	.addColumn("amount", lf.Type.REAL)
	.addColumn("tag", lf.Type.STRING)
	.addPrimaryKey(["hash"]);

schemaBuilder.connect().then(db => {
	window.db = db;
	window.records = db.getSchema().table("Record");

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
});
