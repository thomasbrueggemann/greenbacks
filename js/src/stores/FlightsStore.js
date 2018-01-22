import alt from "../alt";
import FlightsActions from "../actions/FlightsActions";

class FlightsStore {
	constructor() {
		this.bindActions(FlightsActions);

		this.loading = false;
		this.flights = [];
	}

	// SET LOADING
	setLoading(data) {
		this.loading = !!data.loading;
	}

	// GET FLIGHTS SUCCESS
	getFlightsSuccess(response) {
		this.flights = response.data;
		this.loading = false;
	}

	// GET FLIGHTS FAIL
	getFlightsFail(err) {
		this.loading = false;
		console.error(err);
	}
}

export default alt.createStore(FlightsStore);
