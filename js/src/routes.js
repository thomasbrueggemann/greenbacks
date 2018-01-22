import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import Main from "./components/Main";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
	</Route>
);
