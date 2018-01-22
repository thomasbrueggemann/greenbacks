import alt from "../alt";
import axios from "axios";

class FlightsActions {
	constructor() {
		this.generateActions(
			"getFlightsSuccess",
			"getFlightsFail",
			"setLoading"
		);
	}

	// SET LOADING
	setLoading(loading) {
		this.actions.setLoading({
			loading: loading
		});
	}

	// GET TEASER
	getFlights(origin, leaving, returning) {
		this.actions.setLoading({
			loading: true
		});

		// fetch flights
		axios({
			method: "get",
			//"http://localhost:5000/flights?origin=" +
			url:
				"https://api.trevvio.com/flights?origin=" +
				origin +
				"&leaving=" +
				leaving +
				"&returning=" +
				returning
		})
			.then(this.actions.getFlightsSuccess)
			.catch(this.actions.getFlightsFail);
	}
}

export default alt.createActions(FlightsActions);
