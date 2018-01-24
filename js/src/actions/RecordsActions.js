import alt from "../alt";
import md5 from "md5";
import moment from "moment";
import lf from "lovefield";

var _DB;

class RecordsActions {
	constructor() {
		this.generateActions("insertSuccess", "insertError");

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

		// connect to database
		schemaBuilder.connect().then(db => {
			_DB = db;
		});
	}

	insert(record, tag) {
		var item = _DB.getSchema().table("Record");

		var row = item.createRow({
			hash: JSON.stringify(JSON.stringify(record)),
			date: moment(record.data, "DD.MM.YYYY"),
			receiver: record.received,
			reference: record.reference,
			amount: record.amount,
			tag: tag
		});

		_DB
			.insertOrReplace()
			.into(item)
			.values([row])
			.exec();
	}
}

export default alt.createActions(RecordsActions);
