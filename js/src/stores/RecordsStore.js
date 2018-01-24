import alt from "../alt";
import RecordsActions from "../actions/RecordsActions";

class RecordsStore {
	constructor() {
		this.bindActions(RecordsActions);
	}

	insertSuccess(tx, r) {
		console.log(r);
	}

	insertEroor(tx, e) {
		console.error(e);
	}
}

export default alt.createStore(RecordsStore);
