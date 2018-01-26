import alt from "../alt";
import md5 from "md5";
import moment from "moment";
import lf from "lovefield";

class RecordsActions {
	constructor() {
		this.generateActions("loadResults");
	}

	/**
	 * Inserts a bank statement record into the web sql database
	 * @param  {[type]} record [description]
	 * @param  {[type]} tag    [description]
	 * @return {[type]}        [description]
	 */
	insert(record, tag) {
		var row = window.records.createRow({
			hash: md5(JSON.stringify(record)),
			date: moment(record.date, "DD.MM.YYYY").toDate(),
			receiver: record.receiver,
			reference: record.reference,
			amount: record.amount,
			tag: tag
		});

		window.db
			.insertOrReplace()
			.into(window.records)
			.values([row])
			.exec();
	}

	/**
	 * Load records
	 * @return {[type]} [description]
	 */
	load() {
		// connect to database
		window.db
			.select()
			.from(window.records)
			.exec()
			.then(this.actions.loadResults);
	}
}

export default alt.createActions(RecordsActions);
