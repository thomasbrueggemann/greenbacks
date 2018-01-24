import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import Main from "./components/Main";
import Import from "./components/Import";

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main} />
		<Route path="/import" component={Import} />
	</Route>
);
