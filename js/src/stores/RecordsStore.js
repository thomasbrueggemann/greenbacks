import alt from "../alt";
import RecordsActions from "../actions/RecordsActions";

class RecordsStore {
	constructor() {
		this.bindActions(RecordsActions);

		this.records = [];
	}

	loadResults(results) {
		console.log(results);
		this.records = results;
	}
}

export default alt.createStore(RecordsStore);
