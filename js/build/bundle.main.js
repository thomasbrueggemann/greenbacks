(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _md5 = require("md5");

var _md52 = _interopRequireDefault(_md5);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _lovefield = require("lovefield");

var _lovefield2 = _interopRequireDefault(_lovefield);

var RecordsActions = (function () {
	function RecordsActions() {
		_classCallCheck(this, RecordsActions);

		this.generateActions("loadResults");
	}

	/**
  * Inserts a bank statement record into the web sql database
  * @param  {[type]} record [description]
  * @param  {[type]} tag    [description]
  * @return {[type]}        [description]
  */

	_createClass(RecordsActions, [{
		key: "insert",
		value: function insert(record, tag) {
			var row = window.records.createRow({
				hash: (0, _md52["default"])(JSON.stringify(record)),
				date: (0, _moment2["default"])(record.date, "DD.MM.YYYY").toDate(),
				receiver: record.receiver,
				reference: record.reference,
				amount: record.amount,
				tag: tag
			});

			window.db.insertOrReplace().into(window.records).values([row]).exec();
		}

		/**
   * Load records
   * @return {[type]} [description]
   */
	}, {
		key: "load",
		value: function load() {
			// connect to database
			window.db.select().from(window.records).exec().then(this.actions.loadResults);
		}
	}]);

	return RecordsActions;
})();

exports["default"] = _alt2["default"].createActions(RecordsActions);
module.exports = exports["default"];

},{"../alt":2,"lovefield":15,"md5":16,"moment":17}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _alt = require("alt");

var _alt2 = _interopRequireDefault(_alt);

exports["default"] = new _alt2["default"]();
module.exports = exports["default"];

},{"alt":"alt"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var App = (function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), "constructor", this).call(this, props);
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"center",
				null,
				_react2["default"].createElement(
					"h1",
					null,
					"💵"
				),
				this.props.children
			);
		}
	}]);

	return App;
})(_react.Component);

exports["default"] = App;
module.exports = exports["default"];

},{"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _papaparse = require("papaparse");

var _papaparse2 = _interopRequireDefault(_papaparse);

var _Row = require("./Row");

var _Row2 = _interopRequireDefault(_Row);

var _actionsRecordsActions = require("../actions/RecordsActions");

var _actionsRecordsActions2 = _interopRequireDefault(_actionsRecordsActions);

var _storesRecordsStore = require("../stores/RecordsStore");

var _storesRecordsStore2 = _interopRequireDefault(_storesRecordsStore);

var _md5 = require("md5");

var _md52 = _interopRequireDefault(_md5);

var Main = (function (_Component) {
	_inherits(Main, _Component);

	function Main(props) {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).call(this, props);
		this.state = {
			data: []
		};
	}

	/**
  * Load the CSV file
  * @param  {[type]} e [description]
  * @return {[type]}   [description]
  */

	_createClass(Main, [{
		key: "handleFileUpload",
		value: function handleFileUpload(e) {
			var _this = this;

			var file = e.target.files[0];
			_papaparse2["default"].parse(file, {
				config: {
					encoding: "UTF-8"
				},
				complete: function complete(results) {
					var csv = results.data.slice(7);
					_this.setState({
						data: csv.map(function (r) {
							var d = {
								date: r[0],
								receiver: r[3],
								reference: r[4],
								amount: parseFloat(r[7].replace(",", "."))
							};

							var hash = (0, _md52["default"])(JSON.stringify(d));
							d["hash"] = hash;

							return d;
						})
					});
				}
			});
		}

		/**
   * Perform the import to web sql database
   * @return {[type]} [description]
   */
	}, {
		key: "doImport",
		value: function doImport() {
			this.state.data.filter(function (r) {
				return "tag" in r && !!r.tag;
			}).forEach(function (r) {
				_actionsRecordsActions2["default"].insert(r, "test");
			});
		}

		/**
   * Triggers whenever the user selects a new tag
   * @param  {[type]} hash [description]
   * @param  {[type]} tag  [description]
   * @return {[type]}      [description]
   */
	}, {
		key: "onTagSelect",
		value: function onTagSelect(hash, tag) {
			var records = this.state.data.map(function (r) {
				if (r.hash == hash) {
					r.tag = tag;
				}
				return r;
			});

			this.setState({
				data: records
			});
		}

		/**
   * Render method
   * @return {JSX} the JSX markup
   */
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					"p",
					null,
					_react2["default"].createElement("input", {
						type: "file",
						onChange: this.handleFileUpload.bind(this)
					})
				),
				_react2["default"].createElement(
					"table",
					{ border: "1" },
					_react2["default"].createElement(
						"thead",
						null,
						_react2["default"].createElement(
							"tr",
							null,
							_react2["default"].createElement(
								"th",
								null,
								"Date"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Receiver"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Reference"
							),
							_react2["default"].createElement(
								"th",
								null,
								"Amount"
							),
							_react2["default"].createElement("th", null)
						)
					),
					_react2["default"].createElement(
						"tbody",
						null,
						this.state.data.map(function (record, idx) {
							return _react2["default"].createElement(_Row2["default"], {
								key: "row-" + idx,
								data: record,
								onTagSelect: _this2.onTagSelect.bind(_this2)
							});
						})
					)
				),
				_react2["default"].createElement(
					"button",
					{ onClick: this.doImport.bind(this) },
					"Import"
				)
			);
		}
	}]);

	return Main;
})(_react.Component);

exports["default"] = Main;
module.exports = exports["default"];

},{"../actions/RecordsActions":1,"../stores/RecordsStore":10,"./Row":6,"md5":16,"papaparse":18,"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var Main = (function (_Component) {
	_inherits(Main, _Component);

	function Main() {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Main, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					_reactRouter.Link,
					{ to: "/import" },
					"Import"
				)
			);
		}
	}]);

	return Main;
})(_react.Component);

exports["default"] = Main;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TagSelect = require("./TagSelect");

var _TagSelect2 = _interopRequireDefault(_TagSelect);

var Row = (function (_Component) {
	_inherits(Row, _Component);

	function Row(props) {
		_classCallCheck(this, Row);

		_get(Object.getPrototypeOf(Row.prototype), "constructor", this).call(this, props);
		this.state = {
			duplicate: false,
			tag: null
		};
	}

	_createClass(Row, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this = this;

			window.db.select().from(window.records).where(window.records.hash.eq(this.props.data.hash)).exec().then(function (results) {
				if (results.length > 0) {
					_this.setState({
						duplicate: true
					});
				}
			});
		}
	}, {
		key: "onTagSelect",
		value: function onTagSelect(tag) {
			this.props.onTagSelect(this.props.data.hash, tag);
		}
	}, {
		key: "render",
		value: function render() {
			var _props$data = this.props.data;
			var date = _props$data.date;
			var receiver = _props$data.receiver;
			var reference = _props$data.reference;
			var amount = _props$data.amount;

			var amountClass = "";
			var trClass = "";

			if (this.state.duplicate === true) {
				trClass = "tr-duplicate";
			} else {
				// set amount class
				if (amount > 0) {
					amountClass = "text-green";
				} else if (amount < 0) {
					amountClass = "text-red";
				}
			}

			return _react2["default"].createElement(
				"tr",
				{ className: trClass },
				_react2["default"].createElement(
					"td",
					null,
					date
				),
				_react2["default"].createElement(
					"td",
					null,
					receiver
				),
				_react2["default"].createElement(
					"td",
					null,
					reference
				),
				_react2["default"].createElement(
					"td",
					{ className: amountClass },
					amount,
					"€"
				),
				_react2["default"].createElement(
					"td",
					null,
					this.state.duplicate === false ? _react2["default"].createElement(_TagSelect2["default"], {
						data: this.props.data,
						onTagSelect: this.onTagSelect.bind(this)
					}) : null
				)
			);
		}
	}]);

	return Row;
})(_react.Component);

exports["default"] = Row;
module.exports = exports["default"];

},{"./TagSelect":7,"react":"react"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var TagSelect = (function (_Component) {
	_inherits(TagSelect, _Component);

	function TagSelect(props) {
		_classCallCheck(this, TagSelect);

		_get(Object.getPrototypeOf(TagSelect.prototype), "constructor", this).call(this, props);
		this.state = {
			tags: ["car", "public-transport", "groceries", "eating-out", "communication", "transfer", "entertainment", "rent", "donations", "taxes", "household", "studying", "clothing", "fitness", "health", "personal-care", "subscriptions", "cash-withdrawel", "income", "misc"]
		};
	}

	_createClass(TagSelect, [{
		key: "onChange",
		value: function onChange(e) {
			this.props.onTagSelect(e.target.value);
		}
	}, {
		key: "render",
		value: function render() {
			var tags = this.state.tags;
			tags.sort();
			return _react2["default"].createElement(
				"select",
				{ onChange: this.onChange.bind(this) },
				tags.map(function (tag, idx) {
					return _react2["default"].createElement(
						"option",
						{ key: "opt-" + idx },
						tag
					);
				})
			);
		}
	}]);

	return TagSelect;
})(_react.Component);

exports["default"] = TagSelect;
module.exports = exports["default"];

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require("./routes");

var _routes2 = _interopRequireDefault(_routes);

var _lovefield = require("lovefield");

var _lovefield2 = _interopRequireDefault(_lovefield);

var _bayes = require("bayes");

var _bayes2 = _interopRequireDefault(_bayes);

window.classifier = (0, _bayes2["default"])();
if (localStorage.getItem("classifier")) {
	window.classifier = _bayes2["default"].fromJson(JSON.parse(localStorage.getItem("classifier")));
}

window.addEventListener("beforeunload", function (event) {
	console.log("On Before Unload");
	localStorage.setItem("classifier", JSON.stringify(window.classifier.toJSON()));
}, false);

var schemaBuilder = _lovefield2["default"].schema.create("records", 1);
schemaBuilder.createTable("Record").addColumn("hash", _lovefield2["default"].Type.STRING).addColumn("date", _lovefield2["default"].Type.DATE_TIME).addColumn("receiver", _lovefield2["default"].Type.STRING).addColumn("reference", _lovefield2["default"].Type.STRING).addColumn("amount", _lovefield2["default"].Type.REAL).addColumn("tag", _lovefield2["default"].Type.STRING).addPrimaryKey(["hash"]);

schemaBuilder.connect().then(function (db) {
	window.db = db;
	window.records = db.getSchema().table("Record");

	// render the DOM
	_reactDom2["default"].render(_react2["default"].createElement(
		_reactRouter.Router,
		{ history: _reactRouter.hashHistory },
		_routes2["default"]
	), document.getElementById("app"));

	// listen to location changes
	_reactRouter.hashHistory.listen(function (location) {
		if (location.action === "PUSH") {
			console.info("New route:", location.pathname);
		}
	});
});

},{"./routes":9,"bayes":11,"lovefield":15,"react":"react","react-dom":"react-dom","react-router":"react-router"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _componentsApp = require("./components/App");

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsMain = require("./components/Main");

var _componentsMain2 = _interopRequireDefault(_componentsMain);

var _componentsImport = require("./components/Import");

var _componentsImport2 = _interopRequireDefault(_componentsImport);

exports["default"] = _react2["default"].createElement(
	_reactRouter.Route,
	{ path: "/", component: _componentsApp2["default"] },
	_react2["default"].createElement(_reactRouter.IndexRoute, { component: _componentsMain2["default"] }),
	_react2["default"].createElement(_reactRouter.Route, { path: "/import", component: _componentsImport2["default"] })
);
module.exports = exports["default"];

},{"./components/App":3,"./components/Import":4,"./components/Main":5,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _alt = require("../alt");

var _alt2 = _interopRequireDefault(_alt);

var _actionsRecordsActions = require("../actions/RecordsActions");

var _actionsRecordsActions2 = _interopRequireDefault(_actionsRecordsActions);

var RecordsStore = (function () {
	function RecordsStore() {
		_classCallCheck(this, RecordsStore);

		this.bindActions(_actionsRecordsActions2["default"]);

		this.records = [];
	}

	_createClass(RecordsStore, [{
		key: "loadResults",
		value: function loadResults(results) {
			console.log(results);
			this.records = results;
		}
	}]);

	return RecordsStore;
})();

exports["default"] = _alt2["default"].createStore(RecordsStore);
module.exports = exports["default"];

},{"../actions/RecordsActions":1,"../alt":2}],11:[function(require,module,exports){
/*
    Expose our naive-bayes generator function
 */
module.exports = function (options) {
  return new Naivebayes(options)
}

// keys we use to serialize a classifier's state
var STATE_KEYS = module.exports.STATE_KEYS = [
  'categories', 'docCount', 'totalDocuments', 'vocabulary', 'vocabularySize',
  'wordCount', 'wordFrequencyCount', 'options'
];

/**
 * Initializes a NaiveBayes instance from a JSON state representation.
 * Use this with classifier.toJson().
 *
 * @param  {String} jsonStr   state representation obtained by classifier.toJson()
 * @return {NaiveBayes}       Classifier
 */
module.exports.fromJson = function (jsonStr) {
  var parsed;
  try {
    parsed = JSON.parse(jsonStr)
  } catch (e) {
    throw new Error('Naivebayes.fromJson expects a valid JSON string.')
  }
  // init a new classifier
  var classifier = new Naivebayes(parsed.options)

  // override the classifier's state
  STATE_KEYS.forEach(function (k) {
    if (!parsed[k]) {
      throw new Error('Naivebayes.fromJson: JSON string is missing an expected property: `'+k+'`.')
    }
    classifier[k] = parsed[k]
  })

  return classifier
}

/**
 * Given an input string, tokenize it into an array of word tokens.
 * This is the default tokenization function used if user does not provide one in `options`.
 *
 * @param  {String} text
 * @return {Array}
 */
var defaultTokenizer = function (text) {
  //remove punctuation from text - remove anything that isn't a word char or a space
  var rgxPunctuation = /[^(a-zA-ZA-Яa-я0-9_)+\s]/g

  var sanitized = text.replace(rgxPunctuation, ' ')

  return sanitized.split(/\s+/)
}

/**
 * Naive-Bayes Classifier
 *
 * This is a naive-bayes classifier that uses Laplace Smoothing.
 *
 * Takes an (optional) options object containing:
 *   - `tokenizer`  => custom tokenization function
 *
 */
function Naivebayes (options) {
  // set options object
  this.options = {}
  if (typeof options !== 'undefined') {
    if (!options || typeof options !== 'object' || Array.isArray(options)) {
      throw TypeError('NaiveBayes got invalid `options`: `' + options + '`. Pass in an object.')
    }
    this.options = options
  }

  this.tokenizer = this.options.tokenizer || defaultTokenizer

  //initialize our vocabulary and its size
  this.vocabulary = {}
  this.vocabularySize = 0

  //number of documents we have learned from
  this.totalDocuments = 0

  //document frequency table for each of our categories
  //=> for each category, how often were documents mapped to it
  this.docCount = {}

  //for each category, how many words total were mapped to it
  this.wordCount = {}

  //word frequency table for each category
  //=> for each category, how frequent was a given word mapped to it
  this.wordFrequencyCount = {}

  //hashmap of our category names
  this.categories = {}
}

/**
 * Initialize each of our data structure entries for this new category
 *
 * @param  {String} categoryName
 */
Naivebayes.prototype.initializeCategory = function (categoryName) {
  if (!this.categories[categoryName]) {
    this.docCount[categoryName] = 0
    this.wordCount[categoryName] = 0
    this.wordFrequencyCount[categoryName] = {}
    this.categories[categoryName] = true
  }
  return this
}

/**
 * train our naive-bayes classifier by telling it what `category`
 * the `text` corresponds to.
 *
 * @param  {String} text
 * @param  {String} class
 */
Naivebayes.prototype.learn = function (text, category) {
  var self = this

  //initialize category data structures if we've never seen this category
  self.initializeCategory(category)

  //update our count of how many documents mapped to this category
  self.docCount[category]++

  //update the total number of documents we have learned from
  self.totalDocuments++

  //normalize the text into a word array
  var tokens = self.tokenizer(text)

  //get a frequency count for each token in the text
  var frequencyTable = self.frequencyTable(tokens)

  /*
      Update our vocabulary and our word frequency count for this category
   */

  Object
  .keys(frequencyTable)
  .forEach(function (token) {
    //add this word to our vocabulary if not already existing
    if (!self.vocabulary[token]) {
      self.vocabulary[token] = true
      self.vocabularySize++
    }

    var frequencyInText = frequencyTable[token]

    //update the frequency information for this word in this category
    if (!self.wordFrequencyCount[category][token])
      self.wordFrequencyCount[category][token] = frequencyInText
    else
      self.wordFrequencyCount[category][token] += frequencyInText

    //update the count of all words we have seen mapped to this category
    self.wordCount[category] += frequencyInText
  })

  return self
}

/**
 * Determine what category `text` belongs to.
 *
 * @param  {String} text
 * @return {String} category
 */
Naivebayes.prototype.categorize = function (text) {
  var self = this
    , maxProbability = -Infinity
    , chosenCategory = null

  var tokens = self.tokenizer(text)
  var frequencyTable = self.frequencyTable(tokens)

  //iterate thru our categories to find the one with max probability for this text
  Object
  .keys(self.categories)
  .forEach(function (category) {

    //start by calculating the overall probability of this category
    //=>  out of all documents we've ever looked at, how many were
    //    mapped to this category
    var categoryProbability = self.docCount[category] / self.totalDocuments

    //take the log to avoid underflow
    var logProbability = Math.log(categoryProbability)

    //now determine P( w | c ) for each word `w` in the text
    Object
    .keys(frequencyTable)
    .forEach(function (token) {
      var frequencyInText = frequencyTable[token]
      var tokenProbability = self.tokenProbability(token, category)

      // console.log('token: %s category: `%s` tokenProbability: %d', token, category, tokenProbability)

      //determine the log of the P( w | c ) for this word
      logProbability += frequencyInText * Math.log(tokenProbability)
    })

    if (logProbability > maxProbability) {
      maxProbability = logProbability
      chosenCategory = category
    }
  })

  return chosenCategory
}

/**
 * Calculate probability that a `token` belongs to a `category`
 *
 * @param  {String} token
 * @param  {String} category
 * @return {Number} probability
 */
Naivebayes.prototype.tokenProbability = function (token, category) {
  //how many times this word has occurred in documents mapped to this category
  var wordFrequencyCount = this.wordFrequencyCount[category][token] || 0

  //what is the count of all words that have ever been mapped to this category
  var wordCount = this.wordCount[category]

  //use laplace Add-1 Smoothing equation
  return ( wordFrequencyCount + 1 ) / ( wordCount + this.vocabularySize )
}

/**
 * Build a frequency hashmap where
 * - the keys are the entries in `tokens`
 * - the values are the frequency of each entry in `tokens`
 *
 * @param  {Array} tokens  Normalized word array
 * @return {Object}
 */
Naivebayes.prototype.frequencyTable = function (tokens) {
  var frequencyTable = Object.create(null)

  tokens.forEach(function (token) {
    if (!frequencyTable[token])
      frequencyTable[token] = 1
    else
      frequencyTable[token]++
  })

  return frequencyTable
}

/**
 * Dump the classifier's state as a JSON string.
 * @return {String} Representation of the classifier.
 */
Naivebayes.prototype.toJson = function () {
  var state = {}
  var self = this
  STATE_KEYS.forEach(function (k) {
    state[k] = self[k]
  })

  var jsonStr = JSON.stringify(state)

  return jsonStr
}




},{}],12:[function(require,module,exports){
var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;

},{}],13:[function(require,module,exports){
(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();

},{}],14:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],15:[function(require,module,exports){
if(!self.window){window=self;}
(function(){'use strict';function aa(){return function(){}}function ba(a){return function(b){this[a]=b}}function g(a){return function(){return this[a]}}function k(a){return function(){return a}}var m,da=this;function n(a){return void 0!==a}function ea(){}
function fa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ga(a){return null!=a}function ha(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}function ia(a){return"string"==typeof a}function ja(a){return"function"==fa(a)}function ka(a){return a[la]||(a[la]=++ma)}var la="closure_uid_"+(1E9*Math.random()>>>0),ma=0;function na(a,b,c){return a.call.apply(a.bind,arguments)}
function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function pa(a,b,c){pa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return pa.apply(null,arguments)}
function qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}function q(a,b){a=a.split(".");var c=da;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&n(b)?c[d]=b:c=c[d]&&Object.prototype.hasOwnProperty.call(c,d)?c[d]:c[d]={}}
function r(a,b){function c(){}c.prototype=b.prototype;a.hb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vg=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function ra(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ra);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(ra,Error);ra.prototype.name="CustomError";var ta=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ua(a,b){var c=0;a=ta(String(a)).split(".");b=ta(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=va(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||va(0==f[2].length,0==h[2].length)||va(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c}function va(a,b){return a<b?-1:a>b?1:0};function wa(a,b,c){this.pg=c;this.Of=a;this.Kg=b;this.qd=0;this.fd=null}wa.prototype.get=function(){var a;0<this.qd?(this.qd--,a=this.fd,this.fd=a.next,a.next=null):a=this.Of();return a};wa.prototype.put=function(a){this.Kg(a);this.qd<this.pg&&(this.qd++,a.next=this.fd,this.fd=a)};var xa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(ia(a))return ia(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ia(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=ia(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Aa=Array.prototype.reduce?function(a,b,c,d){d&&(b=pa(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;ya(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ba=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ia(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function Ca(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}function Da(a){for(var b=[],c=0;c<a;c++)b[c]=0;return b}function Ea(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==fa(d))for(var e=0;e<d.length;e+=8192)for(var f=Ea.apply(null,Ca(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b};function Fa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};var Ga;a:{var Ha=da.navigator;if(Ha){var Ia=Ha.userAgent;if(Ia){Ga=Ia;break a}}Ga=""}function t(a){return-1!=Ga.indexOf(a)};function Ja(){return t("Safari")&&!(Ka()||t("Coast")||t("Opera")||t("Edge")||t("Silk")||t("Android"))}function Ka(){return(t("Chrome")||t("CriOS"))&&!t("Edge")};function La(a){da.setTimeout(function(){throw a;},0)}var Ma;
function Oa(){var a=da.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!t("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=pa(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!t("Trident")&&!t("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.Fe;c.Fe=null;a()}};return function(a){d.next={Fe:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){da.setTimeout(a,0)}};function Pa(){this.Bd=this.oc=null}var Ra=new wa(function(){return new Qa},function(a){a.reset()},100);Pa.prototype.add=function(a,b){var c=Ra.get();c.set(a,b);this.Bd?this.Bd.next=c:this.oc=c;this.Bd=c};Pa.prototype.remove=function(){var a=null;this.oc&&(a=this.oc,this.oc=this.oc.next,this.oc||(this.Bd=null),a.next=null);return a};function Qa(){this.next=this.scope=this.Td=null}Qa.prototype.set=function(a,b){this.Td=a;this.scope=b;this.next=null};
Qa.prototype.reset=function(){this.next=this.scope=this.Td=null};function Sa(a,b){Ta||Ua();Va||(Ta(),Va=!0);Wa.add(a,b)}var Ta;function Ua(){if(-1!=String(da.Promise).indexOf("[native code]")){var a=da.Promise.resolve(void 0);Ta=function(){a.then(Xa)}}else Ta=function(){var a=Xa;!ja(da.setImmediate)||da.Window&&da.Window.prototype&&!t("Edge")&&da.Window.prototype.setImmediate==da.setImmediate?(Ma||(Ma=Oa()),Ma(a)):da.setImmediate(a)}}var Va=!1,Wa=new Pa;function Xa(){for(var a;a=Wa.remove();){try{a.Td.call(a.scope)}catch(b){La(b)}Ra.put(a)}Va=!1};function u(a,b){this.Ta=0;this.nf=void 0;this.Vc=this.dc=this.D=null;this.ed=this.Rd=!1;if(a!=ea)try{var c=this;a.call(b,function(a){Ya(c,2,a)},function(a){Ya(c,3,a)})}catch(d){Ya(this,3,d)}}function Za(){this.next=this.context=this.ic=this.Ic=this.child=null;this.Ed=!1}Za.prototype.reset=function(){this.context=this.ic=this.Ic=this.child=null;this.Ed=!1};var $a=new wa(function(){return new Za},function(a){a.reset()},100);function ab(a,b,c){var d=$a.get();d.Ic=a;d.ic=b;d.context=c;return d}
function v(a){if(a instanceof u)return a;var b=new u(ea);Ya(b,2,a);return b}function bb(a){return new u(function(b,c){c(a)})}function cb(a,b,c){db(a,b,c,null)||Sa(qa(b,a))}function eb(a){return new u(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},l=0,p;l<a.length;l++)p=a[l],cb(p,qa(f,l),h);else b(e)})}function w(){var a,b,c=new u(function(c,e){a=c;b=e});return new fb(c,a,b)}
u.prototype.then=function(a,b,c){return gb(this,ja(a)?a:null,ja(b)?b:null,c)};u.prototype.then=u.prototype.then;u.prototype.$goog_Thenable=!0;u.prototype.ve=function(a,b){return gb(this,null,a,b)};function hb(a,b){a.dc||2!=a.Ta&&3!=a.Ta||ib(a);a.Vc?a.Vc.next=b:a.dc=b;a.Vc=b}
function gb(a,b,c,d){var e=ab(null,null,null);e.child=new u(function(a,h){e.Ic=b?function(c){try{var e=b.call(d,c);a(e)}catch(L){h(L)}}:a;e.ic=c?function(b){try{var e=c.call(d,b);!n(e)&&b instanceof jb?h(b):a(e)}catch(L){h(L)}}:h});e.child.D=a;hb(a,e);return e.child}u.prototype.Qg=function(a){this.Ta=0;Ya(this,2,a)};u.prototype.Rg=function(a){this.Ta=0;Ya(this,3,a)};
function Ya(a,b,c){0==a.Ta&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.Ta=1,db(c,a.Qg,a.Rg,a)||(a.nf=c,a.Ta=b,a.D=null,ib(a),3!=b||c instanceof jb||kb(a,c)))}function db(a,b,c,d){if(a instanceof u)return hb(a,ab(b||ea,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(h){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var f=a.then;if(ja(f))return lb(a,f,b,c,d),!0}catch(h){return c.call(d,h),!0}return!1}
function lb(a,b,c,d,e){function f(a){l||(l=!0,d.call(e,a))}function h(a){l||(l=!0,c.call(e,a))}var l=!1;try{b.call(a,h,f)}catch(p){f(p)}}function ib(a){a.Rd||(a.Rd=!0,Sa(a.Vf,a))}function mb(a){var b=null;a.dc&&(b=a.dc,a.dc=b.next,b.next=null);a.dc||(a.Vc=null);return b}
u.prototype.Vf=function(){for(var a;a=mb(this);){var b=this.Ta,c=this.nf;if(3==b&&a.ic&&!a.Ed){var d;for(d=this;d&&d.ed;d=d.D)d.ed=!1}if(a.child)a.child.D=null,nb(a,b,c);else try{a.Ed?a.Ic.call(a.context):nb(a,b,c)}catch(e){ob.call(null,e)}$a.put(a)}this.Rd=!1};function nb(a,b,c){2==b?a.Ic.call(a.context,c):a.ic&&a.ic.call(a.context,c)}function kb(a,b){a.ed=!0;Sa(function(){a.ed&&ob.call(null,b)})}var ob=La;function jb(a){ra.call(this,a)}r(jb,ra);jb.prototype.name="cancel";
function fb(a,b,c){this.ha=a;this.resolve=b;this.reject=c};function pb(a,b,c,d){c=c||function(a,b){return a==b};d=d||function(b){return a[b]};for(var e=a.length,f=b.length,h=[],l=0;l<e+1;l++)h[l]=[],h[l][0]=0;for(var p=0;p<f+1;p++)h[0][p]=0;for(l=1;l<=e;l++)for(p=1;p<=f;p++)c(a[l-1],b[p-1])?h[l][p]=h[l-1][p-1]+1:h[l][p]=Math.max(h[l-1][p],h[l][p-1]);for(var L=[],l=e,p=f;0<l&&0<p;)c(a[l-1],b[p-1])?(L.unshift(d(l-1,p-1)),l--,p--):h[l-1][p]>h[l][p-1]?l--:p--;return L}function qb(a){return Aa(arguments,function(a,c){return a+c},0)}
function rb(a){return qb.apply(null,arguments)/arguments.length}function sb(a){var b=arguments.length;if(2>b)return 0;var c=rb.apply(null,arguments);return qb.apply(null,za(arguments,function(a){return Math.pow(a-c,2)}))/(b-1)}function tb(a){return Math.sqrt(sb.apply(null,arguments))};var ub="StopIteration"in da?da.StopIteration:{message:"StopIteration",stack:""};function vb(){}vb.prototype.next=function(){throw ub;};vb.prototype.pc=function(){return this};function wb(a){if(a instanceof vb)return a;if("function"==typeof a.pc)return a.pc(!1);if(ha(a)){var b=0,c=new vb;c.next=function(){for(;;){if(b>=a.length)throw ub;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}
function xb(a,b){if(ha(a))try{ya(a,b,void 0)}catch(c){if(c!==ub)throw c;}else{a=wb(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ub)throw c;}}}function yb(a){if(Ba(arguments,function(a){return!a.length})||!arguments.length)return new vb;var b=new vb,c=arguments,d=Da(c.length);b.next=function(){if(d){for(var a=za(d,function(a,b){return c[b][a]}),b=d.length-1;0<=b;b--){if(d[b]<c[b].length-1){d[b]++;break}if(0==b){d=null;break}d[b]=0}return a}throw ub;};return b};function zb(a,b){this.l={};this.a=[];this.Ua=this.Eb=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}m=zb.prototype;m.zc=g("Eb");m.qa=function(){Ab(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.l[this.a[b]]);return a};function Bb(a){Ab(a);return a.a.concat()}m.Pa=function(a){return Eb(this.l,a)};m.jd=function(){return 0==this.Eb};
m.clear=function(){this.l={};this.Ua=this.Eb=this.a.length=0};m.remove=function(a){return Eb(this.l,a)?(delete this.l[a],this.Eb--,this.Ua++,this.a.length>2*this.Eb&&Ab(this),!0):!1};function Ab(a){if(a.Eb!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Eb(a.l,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.Eb!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Eb(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}m.get=function(a,b){return Eb(this.l,a)?this.l[a]:b};
m.set=function(a,b){Eb(this.l,a)||(this.Eb++,this.a.push(a),this.Ua++);this.l[a]=b};m.addAll=function(a){var b;if(a instanceof zb)b=Bb(a),a=a.qa();else{b=[];var c=0,d;for(d in a)b[c++]=d;a=Fa(a)}for(c=0;c<b.length;c++)this.set(b[c],a[c])};m.forEach=function(a,b){for(var c=Bb(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};m.clone=function(){return new zb(this)};
m.pc=function(a){Ab(this);var b=0,c=this.Ua,d=this,e=new vb;e.next=function(){if(c!=d.Ua)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw ub;var e=d.a[b++];return a?e:d.l[e]};return e};function Eb(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function Fb(){return t("iPhone")&&!t("iPod")&&!t("iPad")};function Gb(a,b){var c=Hb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ib=t("Opera"),Jb=t("Trident")||t("MSIE"),Kb=t("Edge"),Lb=t("Gecko")&&!(-1!=Ga.toLowerCase().indexOf("webkit")&&!t("Edge"))&&!(t("Trident")||t("MSIE"))&&!t("Edge"),Mb=-1!=Ga.toLowerCase().indexOf("webkit")&&!t("Edge"),Nb=t("Macintosh"),Ob=t("Windows"),Pb=t("Android"),Qb=Fb(),Rb=t("iPad"),Sb=t("iPod"),Tb;
a:{var Ub="",Vb=function(){var a=Ga;if(Lb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Kb)return/Edge\/([\d\.]+)/.exec(a);if(Jb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mb)return/WebKit\/(\S+)/.exec(a);if(Ib)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Vb&&(Ub=Vb?Vb[1]:"");if(Jb){var Wb,Xb=da.document;Wb=Xb?Xb.documentMode:void 0;if(null!=Wb&&Wb>parseFloat(Ub)){Tb=String(Wb);break a}}Tb=Ub}var Yb=Tb,Hb={};function Zb(a){return Gb(a,function(){return 0<=ua(Yb,a)})};var $b=function(){var a;return Ob?(a=/Windows NT ([0-9.]+)/,(a=a.exec(Ga))?a[1]:"0"):Nb?(a=/10[_.][0-9_.]+/,(a=a.exec(Ga))?a[0].replace(/_/g,"."):"10"):Pb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Ga))?a[1]:""):Qb||Rb||Sb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Ga))?a[1].replace(/_/g,"."):""):""}();var ac=Fb()||t("iPod"),bc=t("iPad");/*

 Copyright 2015 The Lovefield Project Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function cc(){var a;!(a=Ja()&&!Zb(10))&&(a=bc||ac)&&(a=!(0<=ua($b,10)));this.ae=a;this.fg=!(this.ae||Jb&&!Zb(10));!Jb||Zb(11);this.Ug=Ka()||Ja();this.ug=n(window.Map)&&n(window.Map.prototype.values)&&n(window.Map.prototype.forEach)&&!this.ae;this.vg=n(window.Set)&&n(window.Set.prototype.values)&&n(window.Set.prototype.forEach)&&!this.ae}var dc;function ec(){n(dc)||(dc=new cc);return dc};function x(){this.l=new zb;Object.defineProperty(this,"size",{get:function(){return this.l.zc()}})}x.prototype.clear=function(){this.l.clear()};x.prototype.clear=x.prototype.clear;x.prototype.delete=function(a){return this.l.remove(a)};x.prototype["delete"]=x.prototype.delete;x.prototype.forEach=function(a,b){return this.l.forEach(a,b)};x.prototype.forEach=x.prototype.forEach;x.prototype.get=function(a){return this.l.get(a)};x.prototype.get=x.prototype.get;x.prototype.has=function(a){return this.l.Pa(a)};
x.prototype.has=x.prototype.has;x.prototype.set=function(a,b){return this.l.set(a,b)};x.prototype.set=x.prototype.set;var fc=ec().ug;function y(){return fc?new window.Map:new x}function gc(a){if(a instanceof x)return Bb(a.l);var b=0,c=Array(a.size);a.forEach(function(a,e){c[b++]=e});return c}function z(a){if(a instanceof x)return a.l.qa();var b=0,c=Array(a.size);a.forEach(function(a){c[b++]=a});return c};/*

 Copyright 2014 The Lovefield Project Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function hc(a,b){this.sa=a;this.m=b||this.Ke()}var ic=0;m=hc.prototype;m.id=g("sa");m.Ke=function(){return{}};m.wf=g("m");m.Ja=function(){return{id:this.sa,value:this.wf()}};m.nb=function(a){return"#"==a.substr(-1)?this.sa:null};function jc(a){return new hc(a.id,a.value)}function kc(a){return new hc(ic++,a||{})}function lc(a){if(null==a)return null;a=new Uint8Array(a);for(var b="",c=0;c<a.length;++c)var d=a[c].toString(16),b=b+(2>d.length?"0"+d:d);return b};var mc={};q("lf.TransactionType",mc);mc.READ_ONLY=0;mc.READ_WRITE=1;function A(a,b,c,d,e){this.wd=a;this.jg=b;this.Tg=c;this.Qf=d;this.Jf=e}q("lf.TransactionStats",A);A.prototype.Og=g("wd");A.prototype.success=A.prototype.Og;A.prototype.ig=g("jg");A.prototype.insertedRowCount=A.prototype.ig;A.prototype.Sg=g("Tg");A.prototype.updatedRowCount=A.prototype.Sg;A.prototype.Pf=g("Qf");A.prototype.deletedRowCount=A.prototype.Pf;A.prototype.If=g("Jf");A.prototype.changedTableCount=A.prototype.If;function nc(a,b){this.yd=a;this.Ra=b||null;this.S=w();this.wd=!1;this.za=null}nc.prototype.ka=function(){return(0==this.yd?this.sc():oc(this)).then(function(a){this.wd=!0;return a}.bind(this))};function oc(a){try{pc(a.Ra)}catch(b){return bb(b)}return qc(a).then(function(a){this.Ra.ka();return a}.bind(a))}function qc(a){rc(a);sc(a);return a.sc()}
function rc(a){a.Ra.ib.forEach(function(a,c){c=this.Ra.da().get(c);c=this.I(c.getName(),c.kb.bind(c),0);var b=z(a.xa).map(function(a){return a.id()});0<b.length&&c.remove(b).ve(this.Te,this);a=z(a.la).map(function(a){return a[1]}).concat(z(a.wa));c.put(a).ve(this.Te,this)},a)}function sc(a){tc(a.Ra).forEach(function(a){var b=this.I(a.getName(),jc,1);b.remove([]);b.put(a.Ja())},a)}nc.prototype.Te=function(a){this.S.reject(a)};
nc.prototype.Y=function(){if(null===this.za)if(this.wd)if(0==this.yd)this.za=new A(!0,0,0,0,0);else{var a=0,b=0,c=0,d=0;this.Ra.ib.forEach(function(e){d++;a+=e.wa.size;c+=e.la.size;b+=e.xa.size});this.za=new A(!0,a,c,b,d)}else this.za=new A(!1,0,0,0,0);return this.za};function uc(a){this.Lg=a}uc.prototype.toString=g("Lg");var vc=new uc("backstore"),wc=new uc("cache"),xc=new uc("indexstore"),yc=new uc("engine"),zc=new uc("runner"),Ac=new uc("observerregistry"),Bc=new uc("schema");function Cc(a){if(a.qa&&"function"==typeof a.qa)return a.qa();if(ia(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Fa(a)};function Dc(a){this.l=new zb;a&&this.addAll(a)}function Ec(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ka(a):b.substr(0,1)+a}m=Dc.prototype;m.zc=function(){return this.l.zc()};m.add=function(a){this.l.set(Ec(a),a)};m.addAll=function(a){a=Cc(a);for(var b=a.length,c=0;c<b;c++)this.add(a[c])};m.remove=function(a){return this.l.remove(Ec(a))};m.clear=function(){this.l.clear()};m.jd=function(){return this.l.jd()};m.contains=function(a){return this.l.Pa(Ec(a))};m.qa=function(){return this.l.qa()};
m.clone=function(){return new Dc(this)};m.pc=function(){return this.l.pc(!1)};function Fc(a){this.Xb=new Dc(a);Object.defineProperty(this,"size",{get:function(){return this.Xb.zc()}})}Fc.prototype.add=function(a){this.Xb.add(a)};Fc.prototype.add=Fc.prototype.add;Fc.prototype.clear=function(){this.Xb.clear()};Fc.prototype.clear=Fc.prototype.clear;Fc.prototype.delete=function(a){return this.Xb.remove(a)};Fc.prototype["delete"]=Fc.prototype.delete;Fc.prototype.forEach=function(a,b){this.Xb.qa().forEach(a,b)};Fc.prototype.has=function(a){return this.Xb.contains(a)};
Fc.prototype.has=Fc.prototype.has;var Gc=ec().vg;function B(a){return Gc?n(a)?new window.Set(a):new window.Set:new Fc(a)}function C(a){if(a instanceof Fc)return a.Xb.qa();var b=0,c=Array(a.size);a.forEach(function(a){c[b++]=a});return c}function Hc(a,b){if(b.size>a.size)return!1;var c=!0;b.forEach(function(b){c=c&&a.has(b)});return c};function Ic(a,b){this.sa=a;this.m=b||{}}function Jc(a){var b=B();a.forEach(function(a){b.add(a>>9)});return C(b)}Ic.prototype.W=g("sa");function Kc(a,b){b.forEach(function(a){this.m[a.id()]=a.Ja()},a)}function Lc(a,b){b.forEach(function(a){delete this.m[a]},a)}Ic.prototype.Ja=function(){return{id:this.sa,value:JSON.stringify(this.m)}};function Mc(a){return new Ic(a.id,JSON.parse(a.value))};function Nc(a,b,c){this.Z=a;this.Gb=b;this.pf=c}m=Nc.prototype;m.get=function(a){if(0==a.length)return this.Vd();var b=this.Gb;return Oc(this,a).then(function(c){return a.map(function(a){var d=c.get(a>>9);return b(d.m[a])})})};function Oc(a,b){var c=y(),d=w();a=Jc(b).map(function(a){return new u(function(b,d){var e;try{e=this.Z.get(a)}catch(p){d(p);return}e.onerror=d;e.onsuccess=function(a){a=Mc(a.target.result);c.set(a.W(),a);b()}},this)},a);eb(a).then(function(){d.resolve(c)});return d.ha}
m.Vd=function(){return new u(function(a,b){var c=[],d;try{d=this.Z.openCursor()}catch(e){b(e);return}d.onerror=b;d.onsuccess=function(){var b=d.result;if(b){var f=Mc(b.value).m,h;for(h in f)c.push(this.Gb(f[h]));b.continue()}else a(c)}.bind(this)},this)};m.Tb=function(a){return new u(function(b,c){var d;try{d=a()}catch(e){c(e);return}d.onsuccess=b;d.onerror=c},this)};
m.put=function(a){if(0==a.length)return v();var b=y();a.forEach(function(a){var c=a.id()>>9,e=b.get(c)||null;null===e&&(e=this.pf(this.Z.name,c));Kc(e,[a]);b.set(c,e)},this);a=z(b).map(function(a){return this.Tb(function(){return this.Z.put(a.Ja())}.bind(this))},this);return eb(a)};
m.remove=function(a){if(0==a.length)return this.Tb(function(){return this.Z.clear()}.bind(this));var b=y();a.forEach(function(a){var c=a>>9,e=b.get(c)||null;null===e&&(e=this.pf(this.Z.name,c));Lc(e,[a]);b.set(c,e)},this);a=z(b).map(function(a){return this.Tb(function(){return 0==Object.keys(a.m).length?this.Z.delete(a.W()):this.Z.put(a.Ja())}.bind(this))},this);return eb(a)};function Pc(a,b,c){a=a.b(wc);var d=[c<<9,(c+1<<9)-1];b=a.Va(b,d[0],d[1]);c=new Ic(c);Kc(c,b);return c}
function Qc(a,b){return new Ic(b)};function Rc(a){this.V=a.b(wc);this.C=a.b(xc);this.g=a.b(Bc)}Rc.prototype.update=function(a){a.forEach(function(a){Sc(this,a);Uc(this,a)},this)};function Uc(a,b){var c=b.getName();b.xa.forEach(function(a,b){this.V.remove(c,b)},a);b.wa.forEach(function(a){this.V.set(c,a)},a);b.la.forEach(function(a){this.V.set(c,a[1])},a)}function Sc(a,b){var c=a.g.table(b.getName());Vc(b).forEach(function(a){Wc(this,c,a)},a)}
function Wc(a,b,c){var d=a.C.lc.get(b.getName())||[],e=0;d.forEach(function(a){try{Xc(a,c),e++}catch(h){throw d.slice(0,e).forEach(function(a){Xc(a,[c[1],c[0]])},this),h;}},a)}function Xc(a,b){var c=null===b[1]?void 0:b[1].nb(a.getName()),d=null===b[0]?void 0:b[0].nb(a.getName());if(!n(d)&&n(c))a.add(c,b[1].id());else if(n(d)&&n(c)){if(null===c||null===d){if(c==d)return}else if(0==a.jb().compare(d,c))return;a.add(c,b[1].id());a.remove(d,b[0].id())}else n(d)&&!n(c)&&a.remove(d,b[0].id())};var Yc={};q("lf.ConstraintAction",Yc);Yc.RESTRICT=0;Yc.CASCADE=1;var Zc={};q("lf.ConstraintTiming",Zc);Zc.IMMEDIATE=0;Zc.DEFERRABLE=1;var $c={};q("lf.Order",$c);$c.DESC=0;$c.ASC=1;var ad={};q("lf.Type",ad);ad.ARRAY_BUFFER=0;ad.BOOLEAN=1;ad.DATE_TIME=2;ad.INTEGER=3;ad.NUMBER=4;ad.STRING=5;ad.OBJECT=6;var bd={0:null,1:!1,2:Object.freeze(new Date(0)),3:0,4:0,5:"",6:null};q("lf.type.DEFAULT_VALUES",bd);function D(a,b){this.code=a;this.message="http://google.github.io/lovefield/error_lookup/src/error_lookup.html?c="+a;if(1<arguments.length)for(var c=1;c<=Math.min(4,arguments.length-1);++c)this.message+="&p"+(c-1)+"="+encodeURIComponent(String(arguments[c]).slice(0,64))}r(D,Error);function cd(){this.l=y();this.size=0}m=cd.prototype;m.has=function(a){return this.l.has(a)};m.set=function(a,b){var c=this.l.get(a)||null;null===c&&(c=B(),this.l.set(a,c));c.has(b)||(c.add(b),this.size++);return this};m.Wb=function(a,b){var c=this.l.get(a)||null;null===c&&(c=B(),this.l.set(a,c));b.forEach(function(a){c.has(a)||(c.add(a),this.size++)},this);return this};m.be=function(a){a.keys().forEach(function(b){var c=a.get(b);this.Wb(b,c)},this);return this};
m.delete=function(a,b){var c=this.l.get(a)||null;if(null===c)return!1;if(b=c.delete(b))--this.size,0==c.size&&this.l.delete(a);return b};m.get=function(a){a=this.l.get(a)||null;return null===a?null:C(a)};m.clear=function(){this.l.clear();this.size=0};m.keys=function(){return gc(this.l)};m.values=function(){var a=[];this.l.forEach(function(b){a.push.apply(a,C(b))});return a};function dd(a){this.C=a.b(xc);this.g=a.b(Bc);this.V=a.b(wc);this.$c=null}function ed(a,b,c){var d=b.Mb.xg;c.forEach(function(a){d.forEach(function(b){if(null==a.m[b.getName()])throw new D(202,b.j());},this)},a)}function fd(a,b,c,d){b.Mb.Ud.forEach(function(a){a.timing==d&&gd(this,a,c)},a)}function gd(a,b,c){var d=hd(a,b);c.forEach(function(a){if(id(a[0],a[1],b.name)&&(a=a[1].nb(b.name),null!==a&&!d.Pa(a)))throw new D(203,b.name);},a)}
function hd(a,b){null===a.$c&&(a.$c=y());var c=a.$c.get(b.name)||null;null===c&&(c=a.g.table(b.Xa)[b.Jc].Ca(),c=a.C.get(c.j()),a.$c.set(b.name,c));return c}function id(a,b,c){return(null===a?null!==b:null===b)||a.nb(c)!=b.nb(c)}function jd(a,b,c,d){b=kd(a.g.info(),b.getName(),0);null!==b&&(b=b.filter(function(a){return a.timing==d}),0!=b.length&&ld(a,b,c,function(a,b,c){if(b.Pa(c))throw new D(203,a.name);}))}
function md(a,b,c){b=kd(a.g.info(),b.getName(),1);if(null===b)return null;var d=new cd;ld(a,b,c,function(a,b,c){b=b.get(c);0<b.length&&d.Wb(a.Ge,b)});return d}function nd(a,b,c){var d=new cd;ld(a,c,b,function(a,b,c,l){b.get(c).forEach(function(b){d.set(b,{Sd:a,Cg:l[1]})})});return d}function ld(a,b,c,d){b.forEach(function(a){var b=this.C.get(a.name),e=hd(this,a);c.forEach(function(c){if(id(c[0],c[1],e.getName())){var f=c[0].nb(e.getName());d(a,b,f,c)}},this)},a)}
function od(a,b,c,d){0!=c.length&&(c=c.map(function(a){return[null,a]}),fd(a,b,c,d))}function pd(a,b,c,d){0!=c.length&&(fd(a,b,c,d),jd(a,b,c,d))}function qd(a,b,c,d){0!=c.length&&(c=c.map(function(a){return[a,null]}),jd(a,b,c,d))}
function rd(a,b,c){var d={ue:[],rf:new cd},e=new cd;e.Wb(b.getName(),c.map(function(a){return a.id()}));do{var f=new cd;e.keys().forEach(function(a){var b=this.g.table(a);a=e.get(a).map(function(a){return[this.V.get(a),null]},this);b=md(this,b,a);null!==b&&(d.ue.unshift.apply(d.ue,b.keys()),f.be(b))},a);e=f;d.rf.be(e)}while(0<e.size);return d};function sd(a){this.wa=y();this.la=y();this.xa=y();this.A=a}m=sd.prototype;m.getName=g("A");m.add=function(a){if(this.xa.has(a.id())){var b=[this.xa.get(a.id()),a];this.la.set(a.id(),b);this.xa.delete(a.id())}else this.wa.set(a.id(),a)};m.modify=function(a){var b=a[1],c=a[0].id();this.wa.has(c)?this.wa.set(c,b):(this.la.has(c)&&(a=[this.la.get(a[0].id())[0],b]),this.la.set(c,a))};
m.delete=function(a){if(this.wa.has(a.id()))this.wa.delete(a.id());else if(this.la.has(a.id())){var b=this.la.get(a.id())[0];this.la.delete(a.id());this.xa.set(a.id(),b)}else this.xa.set(a.id(),a)};m.be=function(a){a.wa.forEach(function(a){this.add(a)},this);a.la.forEach(function(a){this.modify(a)},this);a.xa.forEach(function(a){this.delete(a)},this)};
function Vc(a){var b=[];a.wa.forEach(function(a){b.push([null,a])});a.la.forEach(function(a){b.push(a)});a.xa.forEach(function(a){b.push([a,null])});return b}m.toString=function(){return"["+gc(this.wa).toString()+"], ["+gc(this.la).toString()+"], ["+gc(this.xa).toString()+"]"};function td(a){var b=new sd(a.A);a.wa.forEach(function(a){b.delete(a)});a.xa.forEach(function(a){b.add(a)});a.la.forEach(function(a){b.modify([a[1],a[0]])});return b}
m.jd=function(){return 0==this.wa.size&&0==this.xa.size&&0==this.la.size};function ud(a,b){this.aa=y();b.forEach(function(a){this.aa.set(a.getName(),a)},this);this.g=a.b(Bc);this.V=a.b(wc);this.C=a.b(xc);this.Aa=new dd(a);this.gd=new Rc(a);this.ib=y()}function tc(a){var b=[];gc(a.ib).map(function(a){return this.aa.get(a)},a).forEach(function(a){a.Cb()&&(a.Da().forEach(function(a){b.push(this.C.get(a.j()))},this),b.push(this.C.get(a.getName()+".#")))},a);return b}m=ud.prototype;m.da=g("aa");
m.Ab=function(a,b){vd(this,a);ed(this.Aa,a,b);od(this.Aa,a,b,0);for(var c=0;c<b.length;c++)wd(this,a,[null,b[c]])};function wd(a,b,c){var d=b.getName(),e=a.ib.get(d)||new sd(d);a.ib.set(d,e);try{Wc(a.gd,b,c)}catch(h){throw h;}b=c[0];var f=c[1];null===b&&null!==f?(a.V.set(d,f),e.add(f)):null!==b&&null!==f?(a.V.set(d,f),e.modify(c)):null!==b&&null===f&&(a.V.remove(d,b.id()),e.delete(b))}
m.update=function(a,b){vd(this,a);ed(this.Aa,a,b);b=b.map(function(a){return[this.V.get(a.id()),a]},this);xd(this,a,b);pd(this.Aa,a,b,0);b.forEach(function(b){wd(this,a,b)},this)};m.Wd=function(a,b){vd(this,a);ed(this.Aa,a,b);for(var c=0;c<b.length;c++){var d=b[c],e=null,f,h=a.Mb.sd;if(null===h)f=null;else{f=this.Aa;var h=h.j(),l=d.nb(h);f=f.C.get(h).get(l);f=0==f.length?null:f[0]}null!=f?(e=this.V.get(f),d.sa=f,pd(this.Aa,a,[[e,d]],0)):od(this.Aa,a,[d],0);wd(this,a,[e,d])}};
m.remove=function(a,b){vd(this,a);yd(this,a,b);qd(this.Aa,a,b,0);for(var c=0;c<b.length;c++)wd(this,a,[b[c],null])};function xd(a,b,c){b=kd(a.g.info(),b.getName(),1);if(null!==b){var d=nd(a.Aa,c,b);d.keys().forEach(function(a){d.get(a).forEach(function(b){var c=this.g.table(b.Sd.Ge),d=this.V.get(a),e=c.kb(d.Ja());e.m[b.Sd.vb]=b.Cg.m[b.Sd.Jc];wd(this,c,[d,e])},this)},a)}}
function yd(a,b,c){if(null!==kd(a.g.info(),b.getName(),1)){b=rd(a.Aa,b,c);var d=b.rf;b.ue.forEach(function(a){var b=this.g.table(a);a=d.get(a).map(function(a){return this.V.get(a)},this);qd(this.Aa,b,a,0);a.forEach(function(a){wd(this,b,[a,null])},this)},a)}}function pc(a){a.ib.forEach(function(a){var b=this.aa.get(a.getName());od(this.Aa,b,z(a.wa),1);qd(this.Aa,b,z(a.xa),1);pd(this.Aa,b,z(a.la),1)},a)}m.ka=aa();m.Jb=function(){var a=z(this.ib).map(function(a){return td(a)});this.gd.update(a)};
function vd(a,b){if(!a.aa.has(b.getName()))throw new D(106,b.getName());};function E(a,b,c,d){this.from=a;this.o=b;this.ea=this.from==F?!1:c;this.na=this.o==F?!1:d}var F=new (aa());E.prototype.toString=function(){return(this.ea?"(":"[")+(this.from==F?"unbound":this.from)+", "+(this.o==F?"unbound":this.o)+(this.na?")":"]")};function zd(a){if(Ad(a))return[];var b=null,c=null;a.from==F||(b=new E(F,a.from,!1,!a.ea));a.o==F||(c=new E(a.o,F,!a.na,!1));return[b,c].filter(function(a){return null!==a})}E.prototype.reverse=function(){return new E(this.o,this.from,this.na,this.ea)};
function Bd(a,b){var c=Cd(a.from,b.from,!0,a.ea,b.ea);if(0==c)return!0;var d=-1==c?a:b;a=1==c?a:b;return d.o==F||d.o>a.from||d.o==a.from&&!d.na&&!a.ea}function Dd(){return new E(F,F,!1,!1)}function Ad(a){return a.from==F&&a.o==F}function Ed(a){return a.from==a.o&&a.from!=F&&!a.ea&&!a.na}E.prototype.contains=function(a){var b=this.o==F||a<this.o||a==this.o&&!this.na;return(this.from==F||a>this.from||a==this.from&&!this.ea)&&b};
function Cd(a,b,c,d,e){function f(a){return c?a:1==a?-1:1}d=d||!1;e=e||!1;return a==F?b==F?(d?!e:e)?d?f(1):f(-1):0:f(-1):b==F?f(1):a<b?-1:a==b?(d?!e:e)?d?f(1):f(-1):0:1}function Fd(a,b){var c=Cd(a.from,b.from,!0,a.ea,b.ea);0==c&&(c=Cd(a.o,b.o,!1,a.na,b.na));return c}function Gd(a){if(0==a.length)return[];a.sort(Fd);for(var b=Array(a.length+1),c=0;c<b.length;c++)b[c]=0==c?new E(F,a[c].from,!1,!0):c==b.length-1?new E(a[c-1].o,F,!0,!1):new E(a[c-1].o,a[c].from,!0,!0);return b};function Hd(a){this.kc=[];n(a)&&this.add(a)}Hd.prototype.toString=function(){return this.kc.map(function(a){return a.toString()}).join(",")};Hd.prototype.Pa=function(a){return this.kc.some(function(b){return b.contains(a)})};Hd.prototype.qa=g("kc");
Hd.prototype.add=function(a){if(0!=a.length)if(a=this.kc.concat(a),1==a.length)this.kc=a;else{a.sort(Fd);for(var b=[],c=a[0],d=1;d<a.length;++d)if(Bd(c,a[d])){var e=a[d],f=Dd();if(c.from!=F&&e.from!=F){var h=Cd(c.from,e.from,!0);1!=h?(f.from=c.from,f.ea=0!=h?c.ea:c.ea&&e.ea):(f.from=e.from,f.ea=e.ea)}c.o!=F&&e.o!=F&&(h=Cd(c.o,e.o,!1),-1!=h?(f.o=c.o,f.na=0!=h?c.na:c.na&&e.na):(f.o=e.o,f.na=e.na));c=f}else b.push(c),c=a[d];b.push(c);this.kc=b}};
function Id(a,b){var c=[];a.qa().map(function(a){return b.qa().map(function(b){var c;if(Bd(a,b)){c=Dd();var d=Cd(a.from,b.from,!0),d=0==d?a.ea?a:b:-1!=d?a:b;c.from=d.from;c.ea=d.ea;a.o==F||b.o==F?b=a.o==F?b:a:(d=Cd(a.o,b.o,!1),b=0==d?a.na?a:b:-1==d?a:b);c.o=b.o;c.na=b.na}else c=null;return c})}).forEach(function(a){c=c.concat(a)});return new Hd(c.filter(function(a){return null!==a}))};function G(a,b){this.entries=a;this.M=B(b);this.$a=null}G.prototype.u=function(){return C(this.M)};function Jd(a){return a.entries.map(function(a){return a.va.m})}function Kd(a){return a.entries.map(function(a){return a.va.id()})}function Ld(a,b){return a.$a.get(b.j())}var Md=null;function Nd(){null===Md&&(Md=new G([],[]));return Md}
function Od(a){if(0==a.length)return Nd();for(var b=a.reduce(function(a,b){return a+b.entries.length},0),c=Array(b),d=0,b=a.map(function(a){var b=y();a.entries.forEach(function(a){c[d++]=a;b.set(a.id,a)});return b}),e=y(),f=0;f<c.length;f++)b.every(function(a){return a.has(c[f].id)})&&e.set(c[f].id,c[f]);return new G(z(e),C(a[0].M))}function Pd(a){if(0==a.length)return Nd();var b=y();a.forEach(function(a){a.entries.forEach(function(a){b.set(a.id,a)})});return new G(z(b),C(a[0].M))}
function Qd(a,b){var c=1<b.length;a=a.map(function(a){return new Rd(a,c)});return new G(a,b)}function Rd(a,b){this.va=a;this.id=Sd++;this.Yd=b}var Sd=0;function H(a,b){var c=b.Ka;return null!==c&&a.va.m.hasOwnProperty(c)?a.va.m[c]:a.Yd?a.va.m[Td(b.I())][b.getName()]:a.va.m[b.getName()]}function Ud(a,b,c){var d=b.Ka;if(null!=d)a.va.m[d]=c;else if(a.Yd){var d=Td(b.I()),e=a.va.m[d];null==e&&(e={},a.va.m[d]=e);e[b.getName()]=c}else a.va.m[b.getName()]=c}
function Vd(a,b,c,d){function e(a,b){if(a.Yd){a=a.va.m;for(var c in a)f[c]=a[c]}else f[b[0]]=a.va.m}var f={};e(a,b);e(c,d);a=new hc(-1,f);return new Rd(a,!0)};q("lf.bind",function(a){return new Wd(a)});function Wd(a){this.fa=a}q("lf.Binder",Wd);Wd.prototype.Ca=g("fa");function Xd(){this.Ze=Yd();var a=Zd();this.Ob=y();this.Ob.set(1,$d());this.Ob.set(2,ae());this.Ob.set(4,a);this.Ob.set(3,a);this.Ob.set(5,be());this.Ob.set(6,ce())}var de;function ee(){null!=de||(de=new Xd);return de}function fe(a,b,c){a=a.Ob.get(b)||null;if(null===a)throw new D(550);c=a.get(c)||null;if(null===c)throw new D(550);return c}
function Yd(){function a(a){return a}var b=y();b.set(1,function(a){return null===a?null:a?1:0});b.set(2,function(a){return null===a?null:a.getTime()});b.set(3,a);b.set(4,a);b.set(5,a);return b}function $d(){var a=y();a.set("eq",function(a,c){return a==c});a.set("neq",function(a,c){return a!=c});return a}
function Zd(){var a=$d();a.set("between",function(a,c){return null===a||null===c[0]||null===c[1]?!1:a>=c[0]&&a<=c[1]});a.set("gte",function(a,c){return null===a||null===c?!1:a>=c});a.set("gt",function(a,c){return null===a||null===c?!1:a>c});a.set("in",function(a,c){return-1!=c.indexOf(a)});a.set("lte",function(a,c){return null===a||null===c?!1:a<=c});a.set("lt",function(a,c){return null===a||null===c?!1:a<c});return a}
function be(){var a=Zd();a.set("match",function(a,c){return null===a||null===c?!1:(new RegExp(c)).test(a)});return a}function ce(){var a=y();a.set("eq",function(a,c){if(null!==c)throw new D(550);return null===a});a.set("neq",function(a,c){if(null!==c)throw new D(550);return null!==a});return a}
function ae(){var a=y();a.set("between",function(a,c){return null===a||null===c[0]||null===c[1]?!1:a.getTime()>=c[0].getTime()&&a.getTime()<=c[1].getTime()});a.set("eq",function(a,c){return(null===a?-1:a.getTime())==(null===c?-1:c.getTime())});a.set("gte",function(a,c){return null===a||null===c?!1:a.getTime()>=c.getTime()});a.set("gt",function(a,c){return null===a||null===c?!1:a.getTime()>c.getTime()});a.set("in",function(a,c){return c.some(function(b){return b.getTime()==a.getTime()})});a.set("lte",
function(a,c){return null===a||null===c?!1:a.getTime()<=c.getTime()});a.set("lt",function(a,c){return null===a||null===c?!1:a.getTime()<c.getTime()});a.set("neq",function(a,c){return(null===a?-1:a.getTime())!=(null===c?-1:c.getTime())});return a};function I(){this.h=this.D=null}var ge=[];I.prototype.getParent=g("D");I.prototype.bb=function(){for(var a=this;null!==a.getParent();)a=a.getParent();return a};function he(a){for(var b=0;null!==a.getParent();)b++,a=a.getParent();return b}function J(a){return a.h||ge}function ie(a,b){return J(a)[b]||null}function je(a,b,c){b.D=a;null===a.h?a.h=[b]:a.h.splice(c,0,b)}function K(a,b){b.D=a;null===a.h?a.h=[b]:a.h.push(b)}
function ke(a,b){var c=a.h&&a.h[b];return c?(c.D=null,a.h.splice(b,1),0==a.h.length&&(a.h=null),c):null}I.prototype.removeChild=function(a){return ke(this,J(this).indexOf(a))};function le(a,b,c){ie(a,c).D=null;b.D=a;a.h[c]=b}function me(a,b,c){!1!==b.call(c,a)&&J(a).forEach(function(a){me(a,b,c)})};function ne(){I.call(this);this.sa=pe++}r(ne,I);var pe=0;ne.prototype.W=g("sa");function qe(a,b,c){ne.call(this);this.J=a;this.value=b;this.F=c;this.vc=fe(ee(),this.J.G(),this.F);this.Wa=!1;this.cc=b}r(qe,ne);m=qe.prototype;m.Nb=function(){var a=new qe(this.J,this.value,this.F);a.cc=this.cc;a.vd(this.Wa);var b=this.W();a.sa=b;return a};m.lb=function(a){return null!=a?(a.push(this.J),a):[this.J]};m.u=function(a){a=null!=a?a:B();a.add(this.J.I());return a};m.vd=ba("Wa");
function re(a){var b=!1;a.value instanceof Wd||(b="array"==fa(a.value)?!a.value.some(function(a){return a instanceof Wd}):!0);if(!b)throw new D(501);}m.eval=function(a){re(this);if("in"==this.F)return se(this,a);var b=a.entries.filter(function(a){return this.vc(H(a,this.J),this.value)!=this.Wa},this);return new G(b,a.u())};
m.bind=function(a){if(this.cc instanceof Wd){var b=this.cc.Ca();if(a.length<=b)throw new D(510);this.value=a[b]}else"array"==fa(this.cc)&&(this.value=this.cc.map(function(b){if(b instanceof Wd){var c=b.Ca();if(a.length<=c)throw new D(510);return a[b.Ca()]}return b}))};function se(a,b){var c=B(a.value),d=function(a){return null===a?!1:c.has(a)!=this.Wa}.bind(a);a=b.entries.filter(function(a){return d(H(a,this.J))},a);return new G(a,b.u())}
m.toString=function(){return"value_pred("+this.J.j()+" "+this.F+(this.Wa?"(complement)":"")+" "+this.value+")"};m.ld=function(){re(this);return null!==this.value&&("between"==this.F||"in"==this.F||"eq"==this.F||"gt"==this.F||"gte"==this.F||"lt"==this.F||"lte"==this.F)};
m.we=function(){var a=null;if("between"==this.F)a=new E(te(this,this.value[0]),te(this,this.value[1]),!1,!1);else{if("in"==this.F)return a=this.value.map(function(a){return new E(a,a,!1,!1)}),new Hd(this.Wa?Gd(a):a);a=te(this,this.value);a="eq"==this.F?new E(a,a,!1,!1):"gte"==this.F?new E(a,F,!1,!1):"gt"==this.F?new E(a,F,!0,!1):"lte"==this.F?new E(F,a,!1,!1):new E(F,a,!1,!0)}return new Hd(this.Wa?zd(a):[a])};function te(a,b){return 2==a.J.G()?b.getTime():b};function ue(a){this.ba=a;this.Wc=this.Ga=null}function ve(a,b){null===a.Ga&&null!=a.w&&(a.Ga=we(a.w));return a.Ga.get(b)||null}function we(a){var b=y();me(a,function(a){b.set(a.W(),a)});return b}function xe(a,b){b.w&&(a.w=b.w.Nb());a.Wc=b}ue.prototype.bind=function(){return this};function ye(a,b){a=a.w;null!=a&&me(a,function(a){a instanceof qe&&a.bind(b)})};function ze(a){ue.call(this,a)}r(ze,ue);function Ae(a){var b="";a.forEach(function(c,d){b+=c.J.j()+" ";b+=1==c.order?"ASC":"DESC";d<a.length-1&&(b+=", ")});return b}ze.prototype.da=function(){return B(this.from)};ze.prototype.clone=function(){var a=new ze(this.ba);xe(a,this);this.f&&(a.f=this.f.slice());this.from&&(a.from=this.from.slice());a.X=this.X;a.L=this.L;this.N&&(a.N=this.N.slice());this.ra&&(a.ra=this.ra.slice());this.Sb&&(a.Sb=this.Sb);this.Zb&&(a.Zb=this.Zb);a.eb=this.eb;return a};
ze.prototype.bind=function(a){ze.hb.bind.call(this,a);null!=this.Sb&&(this.X=a[this.Sb.Ca()]);null!=this.Zb&&(this.L=a[this.Zb.Ca()]);ye(this,a);return this};function Be(a,b){this.Ha=a;this.aa=b}Be.prototype.bb=g("Ha");Be.prototype.da=g("aa");function Ce(a){var b=B();a.forEach(function(a){a.da().forEach(b.add.bind(b))});return b};function De(a,b){this.global=a;this.Oa=a.b(vc);this.td=b.map(function(a){return a.context});this.jf=b.map(function(a){return a.je});this.Md=Ce(this.jf);this.xe=Ee(this);this.Db=w()}function Ee(a){return a.td.some(function(a){return!(a instanceof ze)})?1:0}m=De.prototype;
m.exec=function(){function a(){var f=d.shift();if(f){var h=e[c.length];return f.bb().exec(b,h).then(function(b){c.push(b[0]);return a()})}return v()}var b=0==this.xe?void 0:new ud(this.global,this.Md),c=[],d=this.jf.slice(),e=this.td;return a().then(function(){this.ja=this.Oa.Fb(this.xe,C(this.Md),b);return this.ja.ka()}.bind(this)).then(function(){this.ge(c);return c}.bind(this),function(a){null!=b&&b.Jb();throw a;})};m.G=g("xe");m.da=g("Md");m.W=function(){return ka(this)};m.ge=aa();
m.Y=function(){var a=null;null!=this.ja&&(a=this.ja.Y());return null===a?new A(!1,0,0,0,0):a};function Fe(a,b){De.call(this,a,b);this.Ib=a.b(Ac)}r(Fe,De);Fe.prototype.getPriority=k(0);Fe.prototype.ge=function(a){this.td.forEach(function(b,c){Ge(this.Ib,b,a[c])},this)};function He(a,b){this.c=a;this.Ib=a.b(Ac);this.Ia=a.b(zc);this.gd=new Rc(a);this.ib=b;var c=a.b(Bc);a=this.ib.map(function(a){return c.table(a.getName())});this.aa=B(a);this.Db=w()}m=He.prototype;m.exec=function(){this.gd.update(this.ib);this.Mc();return v()};m.G=k(1);m.da=g("aa");m.W=function(){return ka(this)};m.getPriority=k(1);m.Mc=function(){var a=Ie(this.Ib,this.aa);0!=a.length&&(a=new Fe(this.c,a),Je(this.Ia,a))};function Ke(a){this.c=a;this.Oa=a.b(vc);this.Ia=a.b(zc)}Ke.prototype.ee=function(a){a=new He(this.c,a);Je(this.Ia,a)};function M(a,b){this.Ua=a;this.i=b;this.Za=y()}q("lf.backstore.FirebaseRawBackStore",M);M.prototype.cd=g("i");M.prototype.dd=function(){throw new D(351);};function Le(a,b){var c=w(),d=a;b.length&&(d=a.child(b));d.once("value",function(a){c.resolve(a.val())},function(a){c.reject(a)});return c.ha}function Me(a,b,c){function d(a){a?e.reject(a):e.resolve()}c=c||!1;var e=w();c?a.set(b,d):a.update(b,d);return e.ha}
M.prototype.Ea=function(a){return Le(this.i,"@rev/R").then(function(a){this.Sa=a;return Le(this.i,"@table")}.bind(this)).then(function(b){var c=0,d;for(d in b)this.Za.set(d,b[d]),b[d]>c&&(c=b[d]);a.oa().forEach(function(a){this.Za.has(a.getName())||(b[a.getName()]=++c)},this);d=this.i.child("@table");return Me(d,b)}.bind(this))};
function Ne(a,b,c){var d=a.Za.get(b);return null!=d?function(){var a={},b=w();this.i.orderByChild("T").equalTo(d).once("value",function(d){d.forEach(function(b){var d=c(b.val());a[parseInt(b.key(),10)]=d});b.resolve(a)});return b.ha}.call(a).then(function(a){a["@rev"]={R:++this.Sa};return Me(this.i,a)}.bind(a)):v()}M.prototype.tc=function(a){return Ne(this,a,k(null)).then(function(){this.Za.delete(a);return Me(this.i.child("@table/"+a),null,!0)}.bind(this))};M.prototype.dropTable=M.prototype.tc;
M.prototype.qc=function(a,b,c){return Ne(this,a,function(a){var d=a.P;d[b]=c;return{R:this.Sa+1,T:a.T,P:d}}.bind(this))};M.prototype.addTableColumn=M.prototype.qc;M.prototype.uc=function(a,b){return Ne(this,a,function(a){var c=a.P;delete c[b];return{R:this.Sa+1,T:a.T,P:c}}.bind(this))};M.prototype.dropTableColumn=M.prototype.uc;M.prototype.Lc=function(a,b,c){return Ne(this,a,function(a){var d=a.P;d[c]=d[b];delete d[b];return{R:this.Sa+1,T:a.T,P:d}}.bind(this))};M.prototype.renameTableColumn=M.prototype.Lc;
M.prototype.xb=function(){throw new D(351);};M.prototype.createRow=M.prototype.xb;M.prototype.Cc=g("Ua");M.prototype.getVersion=M.prototype.Cc;M.prototype.ec=function(a){var b=w();a=this.Za.get(a);this.i.orderByChild("T").equalTo(a).once("value",function(a){var c=[];a.forEach(function(a){c.push(a.val().P)});b.resolve(c)});return b.ha};M.prototype.dump=function(){var a={},b=gc(this.Za).map(function(b){return this.ec(b).then(function(c){a[b]=c})}.bind(this));return eb(b).then(function(){return a})};
M.prototype.dump=M.prototype.dump;function Oe(a,b,c){nc.call(this,b,c);this.i=a}r(Oe,nc);Oe.prototype.I=function(a){return this.i.Ac(a)};
Oe.prototype.sc=function(){if(0==this.yd)return this.S.resolve(),this.S.ha;var a=this.Ra.ib;if(0==a.size)this.S.resolve();else{var b=this.i.Sa+1;this.i.Sa=b;var c={"@rev":{R:b}};a.forEach(function(a,e){var d=this.i.Za.get(e);a.wa.forEach(function(a,e){c[e]={R:b,T:d,P:a.m}});a.la.forEach(function(a,e){c[e]={R:b,T:d,P:a[1].m}});a.xa.forEach(function(a,b){c[b]=null})},this);this.i.i.update(c,function(c){null===c?this.S.resolve():(this.i.Sa=b-1,c=z(a).map(function(a){return Pe(this.i,a.getName())},this),
eb(c).then(this.S.reject.bind(this.S),this.S.reject.bind(this.S)))}.bind(this))}return this.S.ha};function Qe(){this.Ba=y()}function Re(a,b){if(0==b.length)return z(a.Ba);var c=[];b.forEach(function(a){a=this.Ba.get(a)||null;null===a||c.push(a)},a);return c}Qe.prototype.getData=g("Ba");Qe.prototype.get=function(a){return v(Re(this,a))};function Se(a,b){b.forEach(function(a){this.Ba.set(a.id(),a)},a)}Qe.prototype.put=function(a){Se(this,a);return v()};function Te(a,b){0==b.length||b.length==a.Ba.size?a.Ba.clear():b.forEach(function(a){this.Ba.delete(a)},a)}
Qe.prototype.remove=function(a){Te(this,a);return v()};function Ue(a){return 0==a.Ba.size?0:gc(a.Ba).reduce(function(a,c){return a>c?a:c},0)};function Ve(a,b){this.g=a;this.Df=b;this.Kc=y();this.Sa=-1;this.M=y();this.Za=y();this.Jd=null}m=Ve.prototype;
m.Ea=function(a){this.i=this.Df.child(this.g.name());var b=a||function(){return v()};return Le(this.i,"@db/version").then(function(a){return null===a?Me(this.i,We(this),!0).then(function(){var a=new M(0,this.i);return b(a)}.bind(this)).then(function(){return this.Ea()}.bind(this)):a==this.g.version()?Le(this.i,"@rev/R").then(function(a){this.Sa=a;return Le(this.i,"@table")}.bind(this)).then(function(a){for(var b in a)this.Za.set(b,a[b]);a=this.g.oa().map(function(a){return Pe(this,a.getName())},this);
return eb(a)}.bind(this)).then(function(){Xe(this);Ye(this);return v()}.bind(this)):this.he(a,b).then(function(){return this.Ea()}.bind(this))}.bind(this))};m.he=function(a,b){var c=new M(a,this.i);return c.Ea(this.g).then(function(){return v()}.bind(this)).then(function(){return b(c)}).then(function(){var a=this.i.child("@db");return Me(a,{version:this.g.version()},!0)}.bind(this))};
function Ye(a){a.i.off();a.i.on("child_removed",a.zg.bind(a));a.Kd&&(a.Kd.off(),a.Kc.clear());a.Kd=a.i.orderByChild("R").startAt(a.Sa+1);a.Kd.on("value",a.ee.bind(a))}function Xe(a){ic=z(a.M).map(function(a){return Ue(a)}).reduce(function(a,c){return a>c?a:c},0)+1}m.zg=function(a){var b=a.val(),c=this.Kc.get(b.T)||null;null===c&&(c=B(),this.Kc.set(b.T,c));c.add(parseInt(a.key(),10))};
m.ee=function(a){var b=a.child("@rev/R").val();null!=b&&b!=this.Sa&&(this.Sa=b,a=Ze(this,a),a.forEach(function(a){var b=this.M.get(a.getName()),c=gc(a.xa);0<c.length&&Te(b,c);var f=z(a.wa);a.la.forEach(function(a){f.push(a[1])});Se(b,f)},this),0<a.length&&this.Gc(a),Ye(this))};
function Ze(a,b){var c=B(),d=y();a.Za.forEach(function(a,b){var e=this.M.get(b),f=new sd(b);this.Kc.has(a)&&(b=C(this.Kc.get(a)),b.forEach(function(a){c.add(a)}),Re(e,b).forEach(function(a){f.delete(a)}));d.set(a,f)}.bind(a));b.forEach(function(a){if("@rev"!=a.key()){var b=parseInt(a.key(),10);if(!c.has(b)){var e=a.val();a=d.get(e.T);var l=this.M.get(a.getName()),e=this.g.table(a.getName()).kb({id:b,value:e.P});l.getData().has(b)?a.modify([Re(l,[b])[0],e]):a.add(e)}}}.bind(a));return z(d).filter(function(a){return!a.jd()})}
function Pe(a,b){var c=w(),d=a.Za.get(b),e=a.g.table(b);a.i.orderByChild("T").equalTo(d).once("value",function(a){var d=new Qe,f=[];a.forEach(function(a){f.push(e.kb({id:parseInt(a.key(),10),value:a.val().P}))});Se(d,f);this.M.set(b,d);c.resolve()}.bind(a));return c.ha}function We(a){var b={};b["@db"]={version:a.g.version()};b["@rev"]={R:1};a.Sa=1;b["@table"]={};a.g.oa().forEach(function(a,d){a=a.getName();b["@table"][a]=d;this.M.set(a,new Qe);this.Za.set(a,d)},a);return b}
m.Fb=function(a,b,c){return new Oe(this,a,c)};m.Ac=function(a){var b=this.M.get(a)||null;if(null!==b)return b;throw new D(101,a);};m.close=aa();m.subscribe=ba("Jd");m.Gc=function(a){null!=this.Jd&&this.Jd(a)};function N(a,b,c,d){this.i=b;this.ja=c;this.Ua=a;this.Uc=d}q("lf.backstore.IndexedDBRawBackStore",N);N.prototype.cd=g("i");N.prototype.getRawDBInstance=N.prototype.cd;N.prototype.dd=g("ja");N.prototype.getRawTransaction=N.prototype.dd;N.prototype.tc=function(a){return new u(function(b,c){try{this.i.deleteObjectStore(a)}catch(d){c(d);return}b()},this)};N.prototype.dropTable=N.prototype.tc;
function $e(a,b,c,d){return new u(function(a,f){var e;try{var l=this.ja.objectStore(b);e=l.openCursor()}catch(p){f(p);return}e.onsuccess=function(){var b=e.result;b?(c(b),b.continue()):(d(l),a())};e.onerror=f},a)}function af(a){return a instanceof ArrayBuffer?lc(a):a instanceof Date?a.getTime():a}
function bf(a,b,c){function d(a){var b=Mc(a.value),d=b.m,e;for(e in d){var f=jc(d[e]);c(f);d[e]=f.Ja()}a.update(b.Ja())}function e(a){var b=jc(a.value);c(b);a.update(b.Ja())}return $e(a,b,a.Uc?d:e,aa())}N.prototype.qc=function(a,b,c){var d=af(c);return bf(this,a,function(a){a.m[b]=d})};N.prototype.addTableColumn=N.prototype.qc;N.prototype.uc=function(a,b){return bf(this,a,function(a){delete a.m[b]})};N.prototype.dropTableColumn=N.prototype.uc;
N.prototype.Lc=function(a,b,c){return bf(this,a,function(a){a.m[c]=a.m[b];delete a.m[b]})};N.prototype.renameTableColumn=N.prototype.Lc;function cf(a,b){var c=[];return new u(function(a,e){var d;try{d=this.ja.objectStore(b).openCursor()}catch(h){e(h);return}d.onsuccess=function(){var b=d.result;if(b){if(this.Uc){var e=Mc(b.value).m,f;for(f in e)c.push(e[f])}else c.push(b.value);b.continue()}else a(c)}.bind(this);d.onerror=e},a)}N.prototype.xb=function(a){var b={},c;for(c in a)b[c]=af(a[c]);return kc(b)};
N.prototype.createRow=N.prototype.xb;N.prototype.Cc=g("Ua");N.prototype.getVersion=N.prototype.Cc;N.prototype.dump=function(){for(var a=this.i.objectStoreNames,b=[],c=0;c<a.length;++c){var d=a.item(c);b.push(this.ec(d))}return eb(b).then(function(b){var c={};b.forEach(function(b,d){c[a.item(d)]=b});return c})};N.prototype.dump=N.prototype.dump;N.prototype.ec=function(a){return cf(this,a).then(function(a){return a.map(function(a){return a.value})})};function df(a,b){this.Z=a;this.Gb=b}df.prototype.get=function(a){if(0==a.length)return null!=this.Z.getAll?ef(this):ff(this);a=a.map(function(a){return new u(function(b,d){var c;try{c=this.Z.get(a)}catch(f){d(f);return}c.onerror=d;c.onsuccess=function(a){b(this.Gb(a.target.result))}.bind(this)},this)},this);return eb(a)};
function ff(a){return new u(function(a,c){var b=[],e;try{e=this.Z.openCursor()}catch(f){c(f);return}e.onerror=c;e.onsuccess=function(){var c=e.result;c?(b.push(this.Gb(c.value)),c.continue()):a(b)}.bind(this)},a)}function ef(a){return new u(function(a,c){var b;try{b=this.Z.getAll()}catch(e){c(e);return}b.onerror=c;b.onsuccess=function(){var c=b.result.map(function(a){return this.Gb(a)},this);a(c)}.bind(this)},a)}
df.prototype.Tb=function(a){return new u(function(b,c){var d;try{d=a()}catch(e){c(e);return}d.onsuccess=b;d.onerror=c},this)};df.prototype.put=function(a){if(0==a.length)return v();a=a.map(function(a){return this.Tb(function(){return this.Z.put(a.Ja())}.bind(this))},this);return eb(a)};
df.prototype.remove=function(a){return new u(function(b,c){var d=this.Z.count();d.onsuccess=function(d){if(0==a.length||d.target.result==a.length)return this.Tb(function(){return this.Z.clear()}.bind(this)).then(b,c);d=a.map(function(a){return this.Tb(function(){return this.Z.delete(a)}.bind(this))},this);eb(d).then(b,c)}.bind(this);d.onerror=c},this)};function gf(a,b,c,d,e){nc.call(this,c,e);this.c=a;this.ja=b;this.Uc=d;this.ja.oncomplete=this.S.resolve.bind(this.S);this.ja.onabort=this.S.reject.bind(this.S)}r(gf,nc);gf.prototype.I=function(a,b,c){return this.Uc?(c=null!=c?c:0,a=this.ja.objectStore(a),new Nc(a,b,0==c?qa(Pc,this.c):Qc)):new df(this.ja.objectStore(a),b)};gf.prototype.sc=function(){return this.S.ha};function hf(a,b){this.c=a;this.g=b;this.Gd=b.ke.Sf||!1}m=hf.prototype;
m.Ea=function(a){var b=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;if(null==b)throw new D(352);var c=a||function(){return v()};return new u(function(a,e){var d;try{d=b.open(this.g.name(),this.g.version())}catch(h){e(h);return}d.onerror=function(a){a=a.target.error;e(new D(361,a.name,a.message))};d.onupgradeneeded=function(a){jf(this,c,a).then(aa(),e)}.bind(this);d.onsuccess=function(b){this.i=b.target.result;this.qe().then(function(b){ic=Math.max(ic,b+1);a(this.i)}.bind(this))}.bind(this)},
this)};function jf(a,b,c){var d=c.target.result;c=new N(c.oldVersion,d,c.target.transaction,a.Gd);kf(d);a.g.oa().forEach(qa(a.Lf,d),a);return b(c)}function kf(a){for(var b=[],c=0;c<a.objectStoreNames.length;++c){var d=a.objectStoreNames.item(c);-1!=d.indexOf(".")&&b.push(d)}b.forEach(function(b){try{a.deleteObjectStore(b)}catch(f){}})}
m.Lf=function(a,b){a.objectStoreNames.contains(b.getName())||a.createObjectStore(b.getName(),{keyPath:"id"});b.Cb()&&(b.Da().forEach(function(b){mf(a,b.j())},this),mf(a,nf(b)))};function mf(a,b){a.objectStoreNames.contains(b)||a.createObjectStore(b,{keyPath:"id"})}m.Fb=function(a,b,c){b=this.i.transaction(of(b),0==a?"readonly":"readwrite");return new gf(this.c,b,a,this.Gd,c)};
function of(a){var b=B();a.forEach(function(a){b.add(a.getName());a.Cb()&&(a.Da().forEach(function(a){b.add(a.j())}),b.add(nf(a)))});return C(b)}
m.qe=function(a){function b(){if(0==d.length)return v();var a=d.shift();return c(a).then(b)}function c(b){return new u(function(c,d){var l;try{l=(a||e.transaction([b])).objectStore(b).openCursor(null,"prev")}catch(ca){d(ca);return}l.onsuccess=function(a){(a=a.target.result)&&(f=Math.max(f,h(a)));c(f)};l.onerror=function(){c(f)}})}var d=this.g.oa().map(function(a){return a.getName()}),e=this.i,f=0,h=function(a){return this.Gd?(a=Mc(a.value),Object.keys(a.m).reduce(function(a,b){return Math.max(a,b)},
0)):a.key}.bind(this);return new u(function(a){b().then(function(){a(f)})})};m.close=function(){this.i.close()};m.Ac=function(){throw new D(511);};m.subscribe=aa();m.Gc=aa();function pf(a,b,c){nc.call(this,b,c);this.Z=a;0==b&&this.S.resolve()}r(pf,nc);pf.prototype.I=function(a){return this.Z.Ac(a)};pf.prototype.sc=function(){this.S.resolve();return this.S.ha};function qf(a){this.g=a;this.M=y()}m=qf.prototype;m.Ea=function(){this.g.oa().forEach(this.gg,this);return v()};m.Ac=function(a){var b=this.M.get(a)||null;if(null===b)throw new D(101,a);return b};m.Fb=function(a,b,c){return new pf(this,a,c)};function rf(a,b){if(!a.M.has(b)){var c=new Qe;a.M.set(b,c)}}m.gg=function(a){rf(this,a.getName());a.Cb()&&(a.Da().forEach(function(a){rf(this,a.j())},this),rf(this,nf(a)))};m.close=aa();m.subscribe=aa();m.Gc=aa();function sf(a){qf.call(this,a);this.pd=null}r(sf,qf);sf.prototype.subscribe=function(a){null===this.pd&&(this.pd=a)};sf.prototype.Gc=function(a){null===this.pd||this.pd(a)};function tf(a,b,c){this.ja=a;this.A='"'+b+'"';this.Gb=c}tf.prototype.get=function(a){var b=this.Gb;return uf(this.ja,"SELECT id, value FROM "+this.A+" "+(0==a.length?"":"WHERE id IN ("+a.join(",")+")"),[],function(a){for(var c=a.rows.length,e=Array(c),f=0;f<c;++f)e[f]=b({id:a.rows.item(f).id,value:JSON.parse(a.rows.item(f).value)});return e})};
tf.prototype.put=function(a){if(0==a.length)return v();var b="INSERT OR REPLACE INTO "+this.A+"(id, value) VALUES (?, ?)";a.forEach(function(a){uf(this.ja,b,[a.id(),JSON.stringify(a.m)])},this);return v()};tf.prototype.remove=function(a){uf(this.ja,"DELETE FROM "+this.A+" "+(0==a.length?"":"WHERE id IN ("+a.join(",")+")"),[]);return v()};function vf(a,b,c){nc.call(this,b,c);this.i=a;this.M=y();this.Nd=[]}r(vf,nc);function wf(a){return a.replace(".","__d__").replace("#","__s__")}vf.prototype.I=function(a,b){var c=this.M.get(a)||null;null===c&&(c=new tf(this,wf(a),b),this.M.set(a,c));return c};function uf(a,b,c,d){var e=w();a.Nd.push({Ng:b,Dg:c,transform:d,S:e});return e.ha}
vf.prototype.sc=function(){var a=null,b=this.S.reject.bind(this.S),c=function(a,b){this.S.reject(b)}.bind(this),d=[],e=function(b,h){if(null!==a){var f=h;null!=a.transform&&null!=h&&(f=a.transform(h));d.push(f);a.S.resolve(f)}0<this.Nd.length?(a=h=this.Nd.shift(),b.executeSql(h.Ng,h.Dg,e,c)):this.S.resolve(d)}.bind(this);0==this.yd?this.i.readTransaction(e,b):this.i.transaction(e,b);return this.S.ha};function O(a,b,c){this.i=c;this.c=a;this.Ua=b}q("lf.backstore.WebSqlRawBackStore",O);O.prototype.cd=g("i");O.prototype.getRawDBInstance=O.prototype.cd;O.prototype.dd=function(){throw new D(356);};O.prototype.getRawTransaction=O.prototype.dd;function xf(a){return new vf(a.i,1,new ud(a.c,B()))}O.prototype.tc=function(a){var b=xf(this);uf(b,"DROP TABLE "+a,[]);return b.ka()};O.prototype.dropTable=O.prototype.tc;
O.prototype.ec=function(a){var b=xf(this);uf(b,"SELECT id, value FROM "+a,[]);return b.ka().then(function(a){for(var b=a[0].rows.length,c=Array(b),f=0;f<b;++f)c[f]={id:a[0].rows.item(f).id,value:JSON.parse(a[0].rows.item(f).value)};return v(c)})};function yf(a,b,c){var d=xf(a),e="UPDATE "+b+" SET value=? WHERE id=?";return a.ec(b).then(function(a){a.forEach(function(a){a=c(a);uf(d,e,[JSON.stringify(a.value),a.id])});return d.ka()})}
O.prototype.qc=function(a,b,c){var d=af(c);return yf(this,a,function(a){a.value[b]=d;return a})};O.prototype.addTableColumn=O.prototype.qc;O.prototype.uc=function(a,b){return yf(this,a,function(a){delete a.value[b];return a})};O.prototype.dropTableColumn=O.prototype.uc;O.prototype.Lc=function(a,b,c){return yf(this,a,function(a){a.value[c]=a.value[b];delete a.value[b];return a})};O.prototype.renameTableColumn=O.prototype.Lc;O.prototype.xb=function(a){var b={},c;for(c in a)b[c]=af(a[c]);return kc(b)};
O.prototype.createRow=O.prototype.xb;O.prototype.Cc=g("Ua");O.prototype.getVersion=O.prototype.Cc;function zf(a){uf(a,'SELECT tbl_name FROM sqlite_master WHERE type="table"',[],function(a){for(var b=Array(a.rows.length),d=0;d<b.length;++d)b[d]=a.rows.item(d).tbl_name;return b})}
O.prototype.dump=function(){var a=w(),b=xf(this);zf(b);var c={};b.ka().then(function(b){b=b[0].filter(function(a){return"__lf_ver"!=a&&"__WebKitDatabaseInfoTable__"!=a}).map(function(a){return this.ec(a).then(function(b){c[a]=b})},this);eb(b).then(function(){a.resolve(c)})}.bind(this));return a.ha};O.prototype.dump=O.prototype.dump;function Af(a,b,c){this.c=a;this.g=b;this.Mg=c||1}m=Af.prototype;m.Ea=function(a){if(null==window.openDatabase)throw new D(353);var b=a||function(){return v()};return new u(function(a,d){var c=window.openDatabase(this.g.name(),"",this.g.name(),this.Mg);if(null!=c)this.i=c,Bf(this,b).then(function(){this.qe().then(a,d)}.bind(this),function(a){if(a instanceof D)throw a;throw new D(354,a.message);});else throw new D(354);},this)};
function Bf(a,b){var c=w(),d=new vf(a.i,1,new ud(a.c,B()));uf(d,"CREATE TABLE IF NOT EXISTS __lf_ver(id INTEGER PRIMARY KEY, v INTEGER)",[]);uf(d,"SELECT v FROM __lf_ver WHERE id = 0",[]);d.ka().then(function(a){var d=0;a[1].rows.length&&(d=a[1].rows.item(0).v);d<this.g.version()?this.he(b,d).then(c.resolve.bind(c)):d>this.g.version()?c.reject(new D(108)):c.resolve()}.bind(a),c.reject.bind(c));return c.ha}m.Fb=function(a,b,c){if(null!=this.i)return new vf(this.i,a,c);throw new D(2);};m.close=aa();
m.Ac=function(){throw new D(512);};m.subscribe=function(){throw new D(355);};m.Gc=function(){throw new D(355);};m.he=function(a,b){return Cf(this).then(function(){return a(new O(this.c,b,this.i))}.bind(this))};
function Cf(a){var b=a.g.oa(),c=new vf(a.i,1,new ud(a.c,B())),d=new vf(a.i,1,new ud(a.c,B()));uf(c,"INSERT OR REPLACE INTO __lf_ver VALUES (0, ?)",[a.g.version()]);zf(c);return c.ka().then(function(a){var c=a[1];c.filter(function(a){return-1!=a.indexOf("__d__")}).forEach(function(a){uf(d,"DROP TABLE "+('"'+a+'"'),[])});var e=[],l=[],p=[];b.map(function(a){-1==c.indexOf(a.getName())&&e.push(a.getName());a.Cb&&(a.Da().forEach(function(a){a=wf(a.j());e.push(a);l.push(a)}),a=wf(nf(a)),e.push(a),p.push(a))});
e.forEach(function(a){uf(d,"CREATE TABLE "+('"'+a+'"')+"(id INTEGER PRIMARY KEY, value TEXT)",[])});return d.ka()})}m.qe=function(){var a=0,b=w(),c=function(b){var c=new vf(this.i,0);uf(c,"SELECT MAX(id) FROM "+('"'+b+'"'),[]);return c.ka().then(function(b){b=b[0].rows.item(0)["MAX(id)"];a=Math.max(b,a)})}.bind(this),d=this.g.oa().map(function(a){return c(a.getName())});eb(d).then(function(){ic=Math.max(ic,a+1);b.resolve()},function(a){b.reject(a)});return b.ha};function Df(a){this.l=y();this.$b=y();a.oa().forEach(function(a){this.$b.set(a.getName(),B())},this)}m=Df.prototype;m.set=function(a,b){this.l.set(b.id(),b);this.$b.get(a).add(b.id())};m.Wb=function(a,b){var c=this.$b.get(a);b.forEach(function(a){this.l.set(a.id(),a);c.add(a.id())},this)};m.get=function(a){return this.l.get(a)||null};function Ef(a,b){return b.map(function(a){return this.get(a)},a)}
m.Va=function(a,b,c){var d=[],e=Math.min(b,c),f=Math.max(b,c);a=this.$b.get(a);if(a.size<f-e)a.forEach(function(a){a>=e&&a<=f&&(a=this.l.get(a),d.push(a))},this);else for(b=e;b<=f;++b)a.has(b)&&(c=this.l.get(b),d.push(c));return d};m.remove=function(a,b){this.l.delete(b);this.$b.get(a).delete(b)};m.zc=function(a){return null!=a?this.$b.get(a).size:this.l.size};m.clear=function(){this.l.clear();this.$b.clear()};function Ff(a,b,c){var d=0,e=a.length;for(c=c||Gf;d<e;){var f=d+e>>1;0>c(a[f],b)?d=f+1:e=f}return d==e&&a[d]==b?d:~d}function Gf(a,b){return a-b}function Hf(a,b,c){c=Ff(a,b,c);return 0>c?(a.splice(-(c+1),0,b),!0):!1};function If(a,b,c,d){a=b?a.reverse():a;if(null==c&&null==d)return a;c=Math.min(n(c)?c:a.length,a.length);if(0==c)return[];d=Math.min(d||0,a.length);return a.slice(d,d+c)};function Jf(){this.ia=0;this.Fc=null}Jf.prototype.add=function(a,b){this.ia+=b;this.Fc=null===this.Fc?a:a>this.Fc?a:this.Fc};Jf.prototype.remove=function(a,b){this.ia-=b};Jf.prototype.clear=function(){this.ia=0};function Kf(a,b){a.clear();b.forEach(function(a){this.ia+=a.ia},a)};function Lf(a,b,c,d){this.A=a;this.$=b;this.yf=c;this.za=new Jf;if(d){a=511;a*=a*a;if(d.length>=a)throw new D(6,a);d=Mf(this,d);this.ua=d=Nf(d)}else this.clear()}var Of=[];m=Lf.prototype;m.getName=g("A");m.toString=function(){return this.ua.toString()};m.add=function(a,b){this.ua=this.ua.Ab(a,b)};m.set=function(a,b){this.ua=this.ua.Ab(a,b,!0)};m.remove=function(a,b){this.ua=this.ua.remove(a,b)};m.get=function(a){return this.ua.get(a)};
m.Zc=function(a){if(null==a)return this.Y().ia;if(a instanceof E){if(Ad(a))return this.Y().ia;if(Ed(a))return this.get(a.from).length}return this.Va([a]).length};m.Y=g("za");m.Vd=function(a,b,c,d){c=Array(a);this.ua.fill({offset:b?this.za.ia-a-d:d,count:a,te:0},c);return b?c.reverse():c};
m.Va=function(a,b,c,d){var e=Pf(this.ua).a[0];if(!n(e)||0==c)return Of;b=b||!1;c=null!=c?Math.min(c,this.za.ia):this.za.ia;d=d||0;var f=Math.min(Math.max(this.za.ia-d,0),c);if(0==f)return Of;if(!n(a)||1==a.length&&a[0]instanceof E&&Ad(a[0]))return this.Vd(f,b,c,d);a=this.$.uf(a);var h=Array(b?this.za.ia:f),l={count:0,X:h.length,reverse:b,L:d},p=1<this.jb().Zd();a.forEach(function(a){for(var b=this.$.ud(a),b=this.$.Xd(a)?e:b[0],b=this.ua.Yf(b),c=0;null!=b&&l.count<l.X;){if(p){for(var d=b,f=a,L=l,Db=
h,Tc=d.s.jb(),oe=-1,Na=0;Na<d.a.length;++Na)if(Tc.Bb(d.a[Na],f)){oe=Na;break}if(-1!=oe)for(Na=oe;Na<d.a.length&&L.count<L.X;++Na)Tc.Bb(d.a[Na],f)&&Qf(d,L,Db,Na)}else b.Va(a,l,h);0!=l.L||b.kd(a)?c=0:c++;b=2==c?null:b.next()}},this);h.length>l.count&&h.splice(l.count,h.length-l.count);return b?If(h,b,c,d):h};m.clear=function(){this.ua=Rf(this);this.za.clear()};m.Pa=function(a){return this.ua.Pa(a)};m.min=function(){return this.Hb(this.$.min.bind(this.$))};m.max=function(){return this.Hb(this.$.max.bind(this.$))};
function Sf(a,b,c){if(!a.$.Od(b.a[c]))if(1<b.a[c].length){if(null===b.a[c][0])return null}else return null;return[b.a[c],a.yf?[b.B[c]]:b.B[c]]}m.Hb=function(a){var b;a:{b=Pf(this.ua);var c=0;do if(c>=b.a.length)b=b.ya,c=0;else{var d=Sf(this,b,c);if(null!==d){b=d;break a}c++}while(null!==b);b=null}a:{c=Tf(this.ua);d=c.a.length-1;do if(0>d)c=c.qb,d=0;else{var e=Sf(this,c,d);if(null!==e){c=e;break a}d--}while(null!==c);c=null}return null===b||null===c?null:1==a(b[0],c[0])?b:c};m.Ma=g("yf");m.jb=g("$");
m.Qa=function(a,b){return null!=a?0==this.$.compare(a,b):!1};m.Ja=function(){for(var a=[],b=Pf(this.ua);b;)a.push(new hc(b.sa,[b.a,b.B])),b=b.ya;return a};function Uf(a,b,c,d){a=new Lf(b,a,c);d=Vf(d,a);a.ua=d;return a}function Wf(a,b){this.sa=a;this.s=b;this.mb=0;this.ya=this.qb=this.D=null;this.a=[];this.B=[];this.h=[];this.Yf=1==b.jb().Zd()?this.Pe:this.Oe}function Rf(a){return new Wf(ic++,a)}function P(a){return 0==a.mb}m=Wf.prototype;m.next=g("ya");
function Xf(a){function b(a){return null!=a?a.sa.toString():"_"}var c=a.sa+"["+a.a.join("|")+"]",d=a.h.map(function(a){return a.sa}).join("|"),e=a.B.join("/"),f=b(a.qb)+"{",f=P(a)?f+e:f+d,f=f+"}"+b(a.D);a.ya&&(a=Xf(a.ya),c=c+"  "+a[0],f=f+"  "+a[1]);return[c,f]}m.toString=function(){var a="",b=Xf(this),a=a+(b[0]+"\n"+b[1]+"\n");this.h.length&&(a+=this.h[0].toString());return a};function Pf(a){return P(a)?a:Pf(a.h[0])}function Tf(a){return P(a)?a:Tf(a.h[a.h.length-1])}
function Yf(a,b){b&&(b.qb=a);a&&(a.ya=b)}function Mf(a,b){for(var c=b.length,d=0,e=a=Rf(a);0<c;){var f=768<=c?511:257<=c&&511>=c?c:257,h=b.slice(d,d+f);a.a=h.map(function(a){return a.key});a.B=h.map(function(a){return a.value});d+=f;c-=f;0<c&&(f=Rf(a.s),Yf(a,f),a=f)}return e}function Zf(a){var b=a[0],c=Rf(b.s);c.mb=b.mb+1;c.h=a;for(b=0;b<a.length;++b)a[b].D=c,0<b&&c.a.push(a[b].a[0]);return c}
function Nf(a){var b=a,c=[];do c.push(b),b=b.ya;while(b);if(512>=c.length)b=Zf(c);else{var d=c.length,e=0,b=Rf(a.s);for(b.mb=a.mb+2;0<d;){a=768<=d?511:257<=d&&511>=d?d:257;var f=c.slice(e,e+a),h=Zf(f);h.D=b;b.h.length&&(b.a.push(f[0].a[0]),Yf(b.h[b.h.length-1],h));b.h.push(h);e+=a;d-=a}}return b}m.get=function(a){var b=$f(this,a);if(P(this)){var c=Of;this.s.Qa(this.a[b],a)&&(c=c.concat(this.B[b]));return c}b=this.s.Qa(this.a[b],a)?b+1:b;return this.h[b].get(a)};
m.Pa=function(a){var b=$f(this,a);return this.s.Qa(this.a[b],a)?!0:P(this)?!1:this.h[b].Pa(a)};m.remove=function(a,b){ag(this,a,-1,b);return null===this.D?(a=this,1==this.h.length&&(a=this.h[0],a.D=null),a):this};function bg(a){return P(a)?a.a[0]:bg(a.h[0])}function cg(a){a.a=[];for(var b=1;b<a.h.length;++b)a.a.push(bg(a.h[b]))}
function ag(a,b,c,d){var e=$f(a,b),f=P(a);if(!f){var h=a.s.Qa(a.a[e],b)?e+1:e;if(ag(a.h[h],b,h,d))cg(a);else return!1}else if(!a.s.Qa(a.a[e],b))return!1;if(a.a.length>e&&a.s.Qa(a.a[e],b)){if(n(d)&&!a.s.Ma()&&f&&(h=a.B[e],d=Ff(h,d,void 0),0>d?d=!1:(h.splice(d,1),d=!0),d&&a.s.Y().remove(b,1),a.B[e].length))return!1;a.a.splice(e,1);f&&(f=a.s.Ma()?1:a.B[e].length,a.B.splice(e,1),a.s.Y().remove(b,f))}if(256>a.a.length&&null!==a.D){a:{if(a.ya&&256<a.ya.a.length)b=a.ya,e=d=0,f=a.a.length+1;else if(a.qb&&
256<a.qb.a.length)b=a.qb,d=a.qb.a.length-1,e=P(a)?d:d+1,f=0;else{b=!1;break a}a.a.splice(f,0,b.a[d]);b.a.splice(d,1);d=P(a)?a.B:a.h;P(a)?h=b.B:(h=b.h,h[e].D=a);d.splice(f,0,h[e]);h.splice(e,1);P(b)||(cg(b),cg(a));b=!0}b||eg(a,c)}return!0}
function eg(a,b){var c,d,e;a.ya&&511>a.ya.a.length?(c=a.ya,e=d=0):a.qb&&(c=a.qb,d=c.a.length,e=P(c)?c.B.length:c.h.length);d=[d,0].concat(a.a);Array.prototype.splice.apply(c.a,d);d=null;P(a)?d=a.B:(d=a.h,d.forEach(function(a){a.D=c}));d=[e,0].concat(d);Array.prototype.splice.apply(P(c)?c.B:c.h,d);Yf(a.qb,a.ya);P(c)||cg(c);-1!=b&&(a.D.a.splice(b,1),a.D.h.splice(b,1))}
m.Ab=function(a,b,c){var d=$f(this,a);if(P(this)){if(this.s.Qa(this.a[d],a)){if(c)this.s.Y().remove(a,this.s.Ma()?1:this.B[d].length),this.B[d]=this.s.Ma()?b:[b];else{if(this.s.Ma())throw new D(201,this.s.getName(),JSON.stringify(a));if(!Hf(this.B[d],b))throw new D(109);}this.s.Y().add(a,1);return this}this.a.splice(d,0,a);this.B.splice(d,0,this.s.Ma()?b:[b]);this.s.Y().add(a,1);512==this.a.length?(d=Rf(this.s),a=Rf(this.s),a.mb=1,a.a=[this.a[256]],a.h=[this,d],a.D=this.D,this.D=a,d.a=this.a.splice(256),
d.B=this.B.splice(256),d.D=a,Yf(d,this.ya),Yf(this,d),d=a):d=this;return d}d=this.s.Qa(this.a[d],a)?d+1:d;a=this.h[d].Ab(a,b,c);P(a)||1!=a.a.length||(this.a.splice(d,0,a.a[0]),a.h[1].D=this,a.h[0].D=this,this.h.splice(d,1,a.h[1]),this.h.splice(d,0,a.h[0]));return 512==this.a.length?fg(this):this};
function fg(a){var b=Rf(a.s),c=Rf(a.s);b.D=a.D;b.mb=a.mb+1;b.a=[a.a[256]];b.h=[a,c];a.a.splice(256,1);c.D=b;c.mb=a.mb;c.a=a.a.splice(256);c.h=a.h.splice(257);c.h.forEach(function(a){a.D=c});a.D=b;Yf(c,a.ya);Yf(a,c);return b}function $f(a,b){for(var c=0,d=a.a.length,e=a.s.jb();c<d;){var f=c+d>>1;-1==e.compare(a.a[f],b)?c=f+1:d=f}return c}m.Pe=function(a){if(!P(this)){var b=$f(this,a);this.s.Qa(this.a[b],a)&&b++;return this.h[b].Pe(a)}return this};
m.Oe=function(a){if(!P(this)){var b=$f(this,a);this.s.Qa(this.a[b],a)&&(a.some(function(a){return a==F})||b++);return this.h[b].Oe(a)}return this};
m.Va=function(a,b,c){function d(a){return a[0]?a[1]?0:1:-1}var e=this.s.jb(),f=0,h=this.a.length-1,l=this.a,p=d(e.wb(l[f],a)),L=d(e.wb(l[h],a));if(1!=p&&(-1!=p||-1!=L)){var sa=function(a,b){b=a+b>>1;return b==a?b+1:b},ca=function(b,c,f){if(b>=c)return 0==f?c:-1;var h=d(e.wb(l[b],a));if(0==h)return b;if(1==h)return-1;h=sa(b,c);if(h==c)return 0==f?c:-1;var p=d(e.wb(l[h],a));return 0==p?ca(b,h,p):-1==p?ca(h+1,c,f):ca(b+1,h,p)},Cb=function(b,c){if(b>=c)return b;var f=d(e.wb(l[c],a));if(0==f)return c;
if(-1==f)return b;f=sa(b,c);if(f==c)return b;var h=d(e.wb(l[f],a));return 0==h?Cb(f,c):1==h?Cb(b,f-1):-1};0!=p&&(f=ca(f+1,h,L));-1!=f&&(h=Cb(f,h),-1!=h&&h>=f&&gg(this,b,c,f,h+1))}};function Qf(a,b,c,d){if(a.s.Ma())!b.reverse&&b.L?b.L--:c[b.count++]=a.B[d];else for(var e=0;e<a.B[d].length&&b.count<c.length;++e)!b.reverse&&b.L?b.L--:c[b.count++]=a.B[d][e]}function gg(a,b,c,d,e){for(;d<e&&(b.reverse||!(b.count>=b.X));++d)Qf(a,b,c,d)}
m.fill=function(a,b){if(P(this))for(var c=0;c<this.B.length&&0<a.count;++c)if(0<a.offset){if(a.offset-=this.s.Ma()?1:this.B[c].length,0>a.offset)for(var d=this.B[c].length+a.offset;d<this.B[c].length&&0<a.count;++d)b[a.te++]=this.B[c][d],a.count--}else if(this.s.Ma())b[a.te++]=this.B[c],a.count--;else for(d=0;d<this.B[c].length&&0<a.count;++d)b[a.te++]=this.B[c][d],a.count--;else for(c=0;c<this.h.length&&0<a.count;++c)this.h[c].fill(a,b)};
function Vf(a,b){var c=b.Y();a=a.map(function(a){var d=new Wf(a.id(),b);d.a=a.m[0];d.B=a.m[1];d.a.forEach(function(a,e){c.add(a,b.Ma()?1:d.B[e].length)});return d});for(var d=0;d<a.length-1;++d)Yf(a[d],a[d+1]);return 1<a.length?Nf(a[0]):a[0]}m.kd=function(a){return this.s.jb().kd(this.a[0],a)};function hg(a){this.Xc=0==a?ig:jg;this.ce=0==a?function(a){return null!=a?a.reverse():null}:function(a){return a||null};this.ie=0==a?kg:lg}function jg(a,b){return a>b?1:a<b?-1:0}function ig(a,b){return jg(b,a)}function lg(a,b){return Fd(a,b)}function kg(a,b){return Fd(b,a)}m=hg.prototype;m.wb=function(a,b){b=this.ce(b);var c=[b.from==F,b.o==F];if(!c[0]){var d=this.Xc(a,b.from);c[0]=b.ea?1==d:-1!=d}c[1]||(d=this.Xc(a,b.o),c[1]=b.na?-1==d:1!=d);return c};m.compare=function(a,b){return this.Xc(a,b)};
m.min=function(a,b){return a<b?1:a==b?0:-1};m.max=function(a,b){return a>b?1:a==b?0:-1};m.Bb=function(a,b){a=this.wb(a,b);return a[0]&&a[1]};m.kd=function(a,b){return this.Bb(a,b)};m.uf=function(a){return a.filter(function(a){return null!==a}).sort(function(a,c){return this.ie(a,c)}.bind(this))};m.Xd=function(a){return this.ce(a).from==F};m.ud=function(a){a=this.ce(a);return[a.from,a.o]};m.Od=function(a){return null!==a};m.Zd=k(1);
m.toString=function(){return this.compare==ig?"SimpleComparator_DESC":"SimpleComparator_ASC"};function mg(a){hg.call(this,a);this.Xc=0==a?ng:og}r(mg,hg);function og(a,b){return null===a?null===b?0:-1:null===b?1:jg(a,b)}function ng(a,b){return og(b,a)}mg.prototype.Bb=function(a,b){return null===a?Ad(b):mg.hb.Bb.call(this,a,b)};mg.prototype.Hb=function(a,b){return null===a?null===b?0:-1:null===b?1:null};mg.prototype.min=function(a,b){var c=this.Hb(a,b);null===c&&(c=mg.hb.min.call(this,a,b));return c};
mg.prototype.max=function(a,b){var c=this.Hb(a,b);null===c&&(c=mg.hb.max.call(this,a,b));return c};function pg(a){this.pa=a.map(function(a){return new hg(a)})}function qg(a,b,c,d){for(var e=0,f=0;f<a.pa.length&&0==e;++f)e=d(a.pa[f],b[f],c[f]);return e}m=pg.prototype;m.compare=function(a,b){return qg(this,a,b,function(a,b,e){return b==F||e==F?0:a.compare(b,e)})};m.min=function(a,b){return qg(this,a,b,function(a,b,e){return a.min(b,e)})};m.max=function(a,b){return qg(this,a,b,function(a,b,e){return a.max(b,e)})};
m.wb=function(a,b){for(var c=[!0,!0],d=0;d<this.pa.length&&(c[0]||c[1]);++d){var e=this.pa[d].wb(a[d],b[d]);c[0]=c[0]&&e[0];c[1]=c[1]&&e[1]}return c};m.Bb=function(a,b){for(var c=!0,d=0;d<this.pa.length&&c;++d)c=this.pa[d].Bb(a[d],b[d]);return c};m.kd=function(a,b){return this.pa[0].Bb(a[0],b[0])};
m.uf=function(a){var b=a.filter(function(a){return a.every(ga)});a=Array(this.pa.length);for(var c=0;c<a.length;c++)a[c]=b.map(function(a){return a[c]});a.forEach(function(a,b){a.sort(function(a,c){return this.pa[b].ie(a,c)}.bind(this))},this);b=Array(b.length);for(c=0;c<b.length;c++)b[c]=a.map(function(a){return a[c]});return b.sort(function(a,b){for(var c=0,d=0;d<this.pa.length&&0==c;++d)c=this.pa[d].ie(a[d],b[d]);return c}.bind(this))};m.Xd=function(a){return this.pa[0].Xd(a[0])};
m.ud=function(a){var b=a.map(function(a,b){return this.pa[b].ud(a)[0]},this);a=a.map(function(a,b){return this.pa[b].ud(a)[1]},this);return[b,a]};m.Od=function(a){return a.every(function(a,c){return this.pa[c].Od(a)},this)};m.Zd=function(){return this.pa.length};function rg(a){pg.call(this,a);this.pa=a.map(function(a){return new mg(a)})}r(rg,pg);function sg(a){if(1==a.f.length)return new hg(a.f[0].order);var b=a.f.map(function(a){return a.order});return a.f.some(function(a){return a.ba.hc()})?new rg(b):new pg(b)};function tg(a){this.fa=a;this.ob=B();this.Oc=new Jf;this.za=new Jf}m=tg.prototype;m.getName=function(){return this.fa.getName()};m.add=function(a,b){null===a?(this.ob.add(b),this.Oc.add(a,1)):this.fa.add(a,b)};m.set=function(a,b){null===a?(this.ob.clear(),this.Oc.clear(),this.add(a,b)):this.fa.set(a,b)};m.remove=function(a,b){null===a?b?(this.ob.delete(b),this.Oc.remove(a,1)):(this.ob.clear(),this.Oc.clear()):this.fa.remove(a,b)};m.get=function(a){return null===a?C(this.ob):this.fa.get(a)};m.Zc=function(a){return this.fa.Zc(a)};
m.Y=function(){Kf(this.za,[this.fa.Y(),this.Oc]);return this.za};m.Va=function(a,b,c,d){b=this.fa.Va(a,b,c,d);return null!=a?b:b.concat(C(this.ob))};m.clear=function(){this.ob.clear();this.fa.clear()};m.Pa=function(a){return null===a?0!=this.ob.size:this.fa.Pa(a)};m.min=function(){return this.fa.min()};m.max=function(){return this.fa.max()};m.Ja=function(){return[new hc(-2,C(this.ob))].concat(this.fa.Ja())};m.jb=function(){return this.fa.jb()};
function ug(a,b){for(var c=-1,d=0;d<b.length;++d)if(-2==b[d].id()){c=d;break}if(-1==c)throw new D(102);d=b[c].m;b=b.slice(0);b.splice(c,1);a=a(b);var e=new tg(a);d.forEach(function(a){e.ob.add(a)});return e}m.Ma=function(){return this.fa.Ma()};function vg(a){this.A=a;this.sb=B();this.$=new hg(1)}m=vg.prototype;m.getName=g("A");m.add=function(a){if("number"!=typeof a)throw new D(103);this.sb.add(a)};m.set=function(a,b){this.add(a,b)};m.remove=function(a){this.sb.delete(a)};m.get=function(a){return this.Pa(a)?[a]:[]};m.min=function(){return this.Hb(this.$.min.bind(this.$))};m.max=function(){return this.Hb(this.$.max.bind(this.$))};
m.Hb=function(a){if(0==this.sb.size)return null;var b=C(this.sb).reduce(function(b,d){return null===b||1==a(d,b)?d:b},null);return[b,[b]]};m.Zc=function(){return this.sb.size};m.Va=function(a,b,c,d){var e=a||[Dd()];a=C(this.sb).filter(function(a){return e.some(function(b){return this.$.Bb(a,b)},this)},this);return If(a,b,c,d)};m.clear=function(){this.sb.clear()};m.Pa=function(a){return this.sb.has(a)};m.Ja=function(){return[new hc(0,C(this.sb))]};m.jb=g("$");
function wg(a,b){var c=new vg(a);b[0].m.forEach(function(a){c.add(a,a)});return c}m.Ma=k(!0);m.Y=function(){var a=new Jf;a.ia=this.sb.size;return a};function xg(a){this.Oa=a.b(vc);this.C=a.b(xc);this.V=a.b(wc)}xg.prototype.Ea=function(a){var b=a.oa(),c=function(){if(0==b.length)return v();var a=b.shift();return(a.Cb()?yg(this,a):zg(this,a)).then(c)}.bind(this);return c()};function zg(a,b){var c=a.Oa.Fb(0,[b]);a=c.I(b.getName(),b.kb.bind(b),0).get([]).then(function(a){this.V.Wb(b.getName(),a);Ag(this,b,a)}.bind(a));c.ka();return a}
function Ag(a,b,c){var d=a.C.lc.get(b.getName())||[];c.forEach(function(a){d.forEach(function(b){var c=a.nb(b.getName());b.add(c,a.id())})})}function yg(a,b){var c=a.Oa.Fb(0,[b]),d=c.I(b.getName(),b.kb,0).get([]).then(function(a){this.V.Wb(b.getName(),a)}.bind(a));a=b.Da().map(function(a){return Bg(this,a,c)},a).concat(Cg(a,b,c));c.ka();return eb(a.concat(d))}
function Bg(a,b,c){c=c.I(b.j(),jc,1);var d=sg(b);return c.get([]).then(function(a){if(0<a.length){if(Dg(b)){var c=Uf.bind(void 0,d,b.j(),b.Dc);a=ug(c,a)}else a=Uf(d,b.j(),b.Dc,a);this.C.set(b.mc,a)}}.bind(a))}function Cg(a,b,c){return c.I(nf(b),jc,1).get([]).then(function(a){0<a.length&&(a=wg(nf(b),a),this.C.set(b.getName(),a))}.bind(a))};function Eg(){this.Z=y();this.lc=y()}Eg.prototype.Ea=function(a){a.oa().forEach(function(a){var b=[];this.lc.set(a.getName(),b);var d=nf(a);if(null===this.get(d)){var e=new vg(d);b.push(e);this.Z.set(d,e)}a.Da().forEach(function(a){var c;c=sg(a);c=new Lf(a.j(),c,a.Dc);c=Dg(a)&&1==a.f.length?new tg(c):c;b.push(c);this.Z.set(a.j(),c)},this)},this);return v()};Eg.prototype.get=function(a){return this.Z.get(a)||null};
Eg.prototype.set=function(a,b){var c=this.lc.get(a)||null;null===c&&(c=[],this.lc.set(a,c));a=null;for(var d=0;d<c.length;d++)if(c[d].getName()==b.getName()){a=d;break}null!==a&&0<c.length?c.splice(a,1,b):c.push(b);this.Z.set(b.getName(),b)};function Fg(a,b){var c=[],d=null,e=null;me(a,function(a){var f=b(a);null==a.getParent()?e=f:K(d,f);var l=a.getParent();null!==l&&J(l).length==J(d).length&&(l=c.indexOf(d),-1!=l&&c.splice(l,1));1<J(a).length&&c.push(f);d=null===a.h?c[c.length-1]:f});return e}function Gg(a){return Hg(a,function(a){return null===a.h})}
function Ig(a){var b=a.getParent(),c=0;null!==b&&(c=J(b).indexOf(a),b.removeChild(a));var d=J(a).slice();d.forEach(function(d,f){a.removeChild(d);null===b||je(b,d,c+f)});return{parent:b,children:d}}function Jg(a,b){J(a).slice().forEach(function(c){a.removeChild(c);K(b,c)});K(a,b)}function Kg(a){var b=ie(a,0);Ig(a);Jg(b,a);return b}
function Lg(a,b,c){var d=ie(a,0),e=J(d).slice();if(!e.some(function(a){return b(a)}))return a;Ig(a);e.forEach(function(e,h){if(b(e)){var f=c(a);ke(d,h);K(f,e);je(d,f,h)}});return d}function Mg(a,b,c,d){var e=a.getParent();null!==e&&(a=J(e).indexOf(a),ke(e,a),je(e,c,a));J(b).slice().forEach(function(a){b.removeChild(a);K(d,a)});return c}function Hg(a,b,c){function d(a){b(a)&&e.push(a);null!=c&&c(a)||J(a).forEach(d)}var e=[];d(a);return e}
function Ng(a,b){var c=b||function(a){return a.toString()+"\n"},d="";me(a,function(a){for(var b=0;b<he(a);b++)d+="-";d+=c(a)});return d};function Og(a){ne.call(this);this.pb=a;this.Wa=!1}r(Og,ne);m=Og.prototype;m.Nb=function(){return Fg(this,function(a){if(a instanceof Og){var b=new Og(a.pb);b.Wa=a.Wa;a=a.W();b.sa=a;return b}return a.Nb()})};m.lb=function(a){var b=a||[];me(this,function(a){a!=this&&a.lb(b)}.bind(this));a=B(b);return C(a)};m.u=function(a){var b=null!=a?a:B();me(this,function(a){a!=this&&a.u(b)}.bind(this));return b};m.vd=function(a){this.Wa!=a&&(this.Wa=a,this.pb="and"==this.pb?"or":"and",J(this).forEach(function(b){return b.vd(a)}))};
m.eval=function(a){var b=J(this).map(function(b){return b.eval(a)});return Pg(this,b)};function Pg(a,b){return"and"==a.pb?Od(b):Pd(b)}m.toString=function(){return"combined_pred_"+this.pb.toString()};m.we=function(){if("or"==this.pb){var a=new Hd;J(this).forEach(function(b){b=b.we().qa();a.add(b)});return a}return new Hd};m.ld=function(){return"or"==this.pb?Qg(this):!1};
function Qg(a){var b=null;return J(a).every(function(a){if(!(a instanceof qe&&a.ld()))return!1;null===b&&(b=a.J);return b.j()==a.J.j()})};function Rg(a,b,c){ne.call(this);this.ga=a;this.ma=b;this.F=c;this.de=null;a=ee();this.vc=fe(a,this.ga.G(),this.F);this.ng=a.Ze.get(this.ga.G())||null}r(Rg,ne);m=Rg.prototype;m.Nb=function(){var a=new Rg(this.ga,this.ma,this.F),b=this.W();a.sa=b;return a};m.lb=function(a){return null!=a?(a.push(this.ga),a.push(this.ma),a):[this.ga,this.ma]};m.u=function(a){a=null!=a?a:B();a.add(this.ga.I());a.add(this.ma.I());return a};
m.reverse=function(){var a=this.F;switch(this.F){case "gt":a="lt";break;case "lt":a="gt";break;case "gte":a="lte";break;case "lte":a="gte"}return new Rg(this.ma,this.ga,a)};m.eval=function(a){var b=a.entries.filter(function(a){var b=H(a,this.ga);a=H(a,this.ma);return this.vc(b,a)},this);return new G(b,a.u())};m.toString=function(){return"join_pred("+this.ga.j()+" "+this.F+" "+this.ma.j()+")"};
function Sg(a,b,c){var d;-1!=b.u().indexOf(Td(a.ga.I()))?(d=b,b=c):d=c;if(d.entries.length>b.entries.length){a:{c=a.ga;a.ga=a.ma;a.ma=c;switch(a.F){case "gt":c="lt";break;case "lt":c="gt";break;case "gte":c="lte";break;case "lte":c="gte";break;default:break a}a.F=c;a.vc=fe(ee(),a.ga.G(),a.F)}return[b,d]}return[d,b]}function Tg(a){var b={};a.lb().forEach(function(a){b[a.getName()]=null});return b}
function Ug(a,b,c){null===a.de&&(a.de=Tg(a.ma.I()));var d=new Rd(new hc(-1,a.de),!1);return Vd(b,c,d,[Td(a.ma.I())])}
function Vg(a,b,c,d){var e=[b,c];d||(e=Sg(a,b,c));b=e[0];c=e[1];var e=b,f=c,h=a.ga,l=a.ma;d&&(e=c,f=b,h=a.ma,l=a.ga);var p=new cd,L=[];e.entries.forEach(function(a){var b=String(H(a,h));p.set(b,a)});var sa=e.u(),ca=f.u();f.entries.forEach(function(a){var b=H(a,l),c=String(b);null!==b&&p.has(c)?p.get(c).forEach(function(b){b=Vd(a,ca,b,sa);L.push(b)}):d&&L.push(Ug(this,a,ca))}.bind(a));a=b.u().concat(c.u());return new G(L,a)}
function Wg(a,b,c,d,e){function f(a,b){b=new Rd(b,1<sa.length);a=Vd(a,ca,b,sa);L.push(a)}var h=d.dg.I(),l=b,p=c;-1!=b.u().indexOf(Td(h))&&(l=c,p=b);var L=[],sa=p.u(),ca=l.u();l.entries.forEach(function(a){var b=this.ng(H(a,d.wg)),b=d.index.get(b);0!=b.length&&(d.index.Ma()?f(a,e.get(b[0])):Ef(e,b).forEach(f.bind(null,a)))},a);a=l.u().concat(p.u());return new G(L,a)};function Xg(a,b,c){return null===b?new qe(a,b,c):n(b.j)?new Rg(a,b,c):new qe(a,b,c)};var Yg={};q("lf.schema.DataStoreType",Yg);Yg.INDEXED_DB=0;Yg.MEMORY=1;Yg.LOCAL_STORAGE=2;Yg.FIREBASE=3;Yg.WEB_SQL=4;Yg.OBSERVABLE_STORE=5;function Zg(a,b,c,d){this.mc=a;this.name=b;this.Dc=c;this.f=d}Zg.prototype.j=function(){return this.mc+"."+this.name};function Dg(a){return a.f.some(function(a){return a.ba.hc()})}function Q(a,b,c,d){this.A=a;this.ta=c;this.K=b;this.rd=d;this.Ka=null}q("lf.schema.Table",Q);Q.prototype.getName=g("A");Q.prototype.getName=Q.prototype.getName;
function Td(a){return a.Ka||a.A}Q.prototype.rc=function(a){var b=new this.constructor(this.A);b.Ka=a;b.Ig=this.Ig;return b};Q.prototype.as=Q.prototype.rc;Q.prototype.createRow=Q.prototype.xb;Q.prototype.deserializeRow=Q.prototype.kb;Q.prototype.Da=g("ta");Q.prototype.getIndices=Q.prototype.Da;Q.prototype.lb=g("K");Q.prototype.getColumns=Q.prototype.lb;Q.prototype.getConstraint=Q.prototype.Ne;Q.prototype.Cb=g("rd");Q.prototype.persistentIndex=Q.prototype.Cb;function nf(a){return a.A+".#"};function R(a,b){this.child=a;this.Lb=b;this.Ka=null}m=R.prototype;m.getName=function(){return this.Lb+"("+this.child.getName()+")"};m.j=function(){return this.Lb+"("+this.child.j()+")"};m.I=function(){return this.child.I()};m.toString=function(){return this.j()};m.G=function(){return this.child.G()};m.Da=function(){return[]};m.Ca=k(null);m.hc=k(!1);m.rc=function(a){this.Ka=a;return this};R.prototype.as=R.prototype.rc;
function $g(a){for(var b=[a];a instanceof R;)b.push(a.child),a=a.child;return b}function ah(a){this.Ka=a||null;this.U=new Q("#UnknownTable",[],[],!1)}m=ah.prototype;m.getName=k("*");m.j=function(){return this.getName()};m.toString=function(){return this.j()};m.I=g("U");m.G=k(4);m.Da=function(){return[]};m.Ca=k(null);m.hc=k(!1);q("lf.fn.avg",function(a){return new R(a,"AVG")});function bh(a){return new R(a||new ah,"COUNT")}q("lf.fn.count",bh);function ch(a){return new R(a,"DISTINCT")}q("lf.fn.distinct",ch);q("lf.fn.max",function(a){return new R(a,"MAX")});q("lf.fn.min",function(a){return new R(a,"MIN")});q("lf.fn.stddev",function(a){return new R(a,"STDDEV")});q("lf.fn.sum",function(a){return new R(a,"SUM")});q("lf.fn.geomean",function(a){return new R(a,"GEOMEAN")});function S(a,b){I.call(this);this.Uf=b}r(S,I);S.prototype.exec=function(a,b){switch(this.Uf){case 1:return dh(this,a,b);case 0:return eh(this,a,b);default:return fh(this,a,b)}};S.prototype.toString=k("dummy_node");S.prototype.Pc=function(){return this.toString()};function fh(a,b,c){return new u(function(a){a(this.ca([],b,c))}.bind(a))}function dh(a,b,c){return ie(a,0).exec(b,c).then(function(a){return this.ca(a,b,c)}.bind(a))}
function eh(a,b,c){var d=J(a).map(function(a){return a.exec(b,c)});return eb(d).then(function(a){var d=[];a.forEach(function(a){for(var b=0;b<a.length;++b)d.push(a[b])});return this.ca(d,b,c)}.bind(a))};function gh(a){S.call(this,0,1);this.Ce=a}r(gh,S);gh.prototype.toString=function(){return"aggregation("+this.Ce.map(function(a){return a.j()}).toString()+")"};gh.prototype.ca=function(a){a.forEach(function(a){hh(new ih(a,this.Ce))},this);return a};function ih(a,b){this.Na=a;this.K=b}
function hh(a){a.K.forEach(function(a){a=$g(a).reverse();for(var b=1;b<a.length;b++){var d=a[b],e=$g(d).slice(-1)[0],f=d.child instanceof R?Ld(this.Na,d.child):this.Na;if(null!==f.$a&&f.$a.has(d.j()))break;f=jh(d.Lb,f,e);e=this.Na;null===e.$a&&(e.$a=y());e.$a.set(d.j(),f)}},a)}
function jh(a,b,c){var d=null;switch(a){case "MIN":d=kh(b,c,function(a,b){return b<a?b:a});break;case "MAX":d=kh(b,c,function(a,b){return b>a?b:a});break;case "DISTINCT":d=lh(b,c);break;case "COUNT":d=mh(b,c);break;case "SUM":d=nh(b,c);break;case "AVG":a=mh(b,c);0<a&&(d=nh(b,c)/a);break;case "GEOMEAN":d=oh(b,c);break;default:d=ph(b,c)}return d}function kh(a,b,c){return a.entries.reduce(function(a,e){e=H(e,b);return null===e?a:null===a?e:c(a,e)},null)}
function mh(a,b){return b instanceof ah?a.entries.length:a.entries.reduce(function(a,d){return a+(null===H(d,b)?0:1)},0)}function nh(a,b){return kh(a,b,function(a,b){return b+a})}function ph(a,b){var c=[];a.entries.forEach(function(a){a=H(a,b);null===a||c.push(a)});return 0==c.length?null:tb.apply(null,c)}function oh(a,b){var c=0;a=a.entries.reduce(function(a,e){e=H(e,b);if(0==e||null===e)return a;c++;return a+Math.log(e)},0);return 0==c?null:Math.pow(Math.E,a/c)}
function lh(a,b){var c=y();a.entries.forEach(function(a){var d=H(a,b);c.set(d,a)});return new G(z(c),a.u())};function qh(a,b){this.Ha=a;this.aa=b}qh.prototype.bb=g("Ha");qh.prototype.da=g("aa");function rh(){I.call(this)}r(rh,I);function sh(a,b){I.call(this);this.table=a;this.values=b}r(sh,rh);function th(a,b){sh.call(this,a,b)}r(th,sh);function uh(a){I.call(this);this.table=a}r(uh,rh);uh.prototype.toString=function(){return"delete("+this.table.getName()+")"};function vh(a){I.call(this);this.table=a}r(vh,rh);vh.prototype.toString=function(){return"update("+this.table.getName()+")"};
function wh(a){I.call(this);this.O=a}r(wh,rh);wh.prototype.toString=function(){return"select("+this.O.toString()+")"};function xh(a){I.call(this);this.table=a}r(xh,rh);xh.prototype.toString=function(){var a="table_access("+this.table.getName();null===this.table.Ka||(a+=" as "+this.table.Ka);return a+")"};function yh(){I.call(this)}r(yh,rh);yh.prototype.toString=k("cross_product");function zh(a,b){I.call(this);this.f=a;this.Pb=b}r(zh,rh);
zh.prototype.toString=function(){var a="project("+this.f.toString();if(null!==this.Pb)var b=this.Pb.map(function(a){return a.j()}).join(", "),a=a+(", groupBy("+b+")");return a+")"};function Ah(a){I.call(this);this.N=a}r(Ah,rh);Ah.prototype.toString=function(){return"order_by("+Ae(this.N)+")"};function Bh(a){I.call(this);this.f=a}r(Bh,rh);Bh.prototype.toString=function(){return"aggregation("+this.f.toString()+")"};function Ch(a){I.call(this);this.f=a}r(Ch,rh);
Ch.prototype.toString=function(){return"group_by("+this.f.toString()+")"};function Dh(a){I.call(this);this.X=a}r(Dh,rh);Dh.prototype.toString=function(){return"limit("+this.X+")"};function Eh(a){I.call(this);this.L=a}r(Eh,rh);Eh.prototype.toString=function(){return"skip("+this.L+")"};function Fh(a,b){I.call(this);this.O=a;this.Rb=b}r(Fh,rh);Fh.prototype.toString=function(){return"join(type: "+(this.Rb?"outer":"inner")+", "+this.O.toString()+")"};function Gh(){};function Hh(){}r(Hh,Gh);Hh.prototype.gb=function(a){this.H=a;this.ub(this.H);return this.H};Hh.prototype.ub=function(a){if(a instanceof wh){var b=Ih(this,a.O),b=Jh(this,b);Mg(a,a,b[0],b[1]);a==this.H&&(this.H=b[0]);a=b[0]}J(a).forEach(function(a){this.ub(a)},this)};function Ih(a,b){if(0==J(b).length||"and"!=b.pb)return[b];a=J(b).slice().map(function(a){b.removeChild(a);return Ih(this,a)},a);return Ea(a)}
function Jh(a,b){var c=null,d=null;b.map(function(a,b){a=new wh(a);0==b?c=a:K(d,a);d=a},a);return[c,d]};function Kh(){}r(Kh,Gh);Kh.prototype.gb=function(a,b){if(3>b.from.length)return a;this.H=a;this.ub(this.H);return this.H};Kh.prototype.ub=function(a){if(a instanceof yh)for(;2<J(a).length;){for(var b=new yh,c=0;2>c;c++){var d=ke(a,0);K(b,d)}je(a,b,0)}J(a).forEach(function(a){this.ub(a)},this)};function Lh(){S.call(this,0,0)}r(Lh,S);Lh.prototype.toString=k("cross_product");Lh.prototype.ca=function(a){var b=a[0],c=a[1];a=[];for(var d=b.u(),e=c.u(),f=0;f<b.entries.length;f++)for(var h=0;h<c.entries.length;h++){var l=Vd(b.entries[f],d,c.entries[h],e);a.push(l)}b=b.u().concat(c.u());return[new G(a,b)]};function Mh(a,b){De.call(this,a,b);this.Ia=a.b(zc);this.Ib=a.b(Ac)}r(Mh,De);Mh.prototype.getPriority=k(2);Mh.prototype.ge=function(a){0==this.G()?Nh(this,a):this.Mc()};function Nh(a,b){a.td.forEach(function(a,d){a instanceof ze&&Ge(this.Ib,a,b[d])},a)}Mh.prototype.Mc=function(){var a=Ie(this.Ib,this.da());0!=a.length&&(a=new Fe(this.global,a),Je(this.Ia,a))};function Oh(a){ue.call(this,a)}r(Oh,ue);Oh.prototype.da=function(){var a=B();a.add(this.from);Ph(this,this.from.getName(),a);return a};function Ph(a,b,c){var d=Qh(a.ba.info(),b,1);Qh(a.ba.info(),b).forEach(c.add.bind(c));d.forEach(function(a){Ph(this,a.getName(),c)},a)}Oh.prototype.clone=function(){var a=new Oh(this.ba);xe(a,this);a.from=this.from;return a};Oh.prototype.bind=function(a){Oh.hb.bind.call(this,a);ye(this,a);return this};function Rh(a){ue.call(this,a)}r(Rh,ue);Rh.prototype.da=function(){var a=B();a.add(this.La);var b=this.ba.info();Sh(this.La.getName(),b.gf).forEach(a.add.bind(a));this.ac&&Qh(b,this.La.getName()).forEach(a.add.bind(a));return a};Rh.prototype.clone=function(){var a=new Rh(this.ba);xe(a,this);a.La=this.La;this.values&&(a.values=this.values instanceof Wd?this.values:this.values.slice());a.ac=this.ac;a.bc=this.bc;return a};
Rh.prototype.bind=function(a){Rh.hb.bind.call(this,a);this.bc&&(this.values=this.bc instanceof Wd?a[this.bc.Ca()]:this.bc.map(function(b){return b instanceof Wd?a[b.Ca()]:b}));return this};function Th(a){ue.call(this,a)}r(Th,ue);Th.prototype.da=function(){var a=B();a.add(this.table);var b=this.set.map(function(a){return a.J.j()}),c=this.ba.info();Uh(c,b).forEach(a.add.bind(a));Vh(c,b).forEach(a.add.bind(a));return a};Th.prototype.clone=function(){var a=new Th(this.ba);xe(a,this);a.table=this.table;a.set=this.set?Wh(this.set):this.set;return a};Th.prototype.bind=function(a){Th.hb.bind.call(this,a);this.set.forEach(function(b){-1!=b.Tc&&(b.value=a[b.Tc])});ye(this,a);return this};
function Wh(a){return a.map(function(a){var b={},d;for(d in a)b[d]=a[d];return b})};function Xh(a,b){if(null==b)return"NULL";switch(a){case 1:return b?1:0;case 3:case 4:return b;case 0:return"'"+lc(b)+"'";default:return"'"+b.toString()+"'"}}function Yh(a,b){var c=a.ac?"INSERT OR REPLACE":"INSERT",d=a.La.lb(),c=c+(" INTO "+a.La.getName()+"("),c=c+d.map(function(a){return a.getName()}).join(", "),c=c+") VALUES (";return a.values.map(function(a){var e=d.map(function(c){var d=a.m[c.getName()];return b?null!=d?"#":"NULL":Xh(c.G(),d)});return c+e.join(", ")+");"}).join("\n")}
function Zh(a){switch(a){case "between":return"BETWEEN";case "eq":return"=";case "gte":return">=";case "gt":return">";case "in":return"IN";case "lte":return"<=";case "lt":return"<";case "match":return"LIKE";case "neq":return"<>";default:return"UNKNOWN"}}function $h(a,b,c,d){return a instanceof Wd?"?"+a.Ca().toString():d?null!=a?"#":"NULL":"match"==b?"'"+a.toString()+"'":"in"==b?"("+a.map(function(a){return Xh(c,a)}).join(", ")+")":"between"==b?Xh(c,a[0])+" AND "+Xh(c,a[1]):Xh(c,a).toString()}
function ai(a,b){return J(a).map(function(a){return"("+bi(a,b)+")"}).join("and"==a.pb?" AND ":" OR ")}function ci(a){return[a.ga.j(),Zh(a.F),a.ma.j()].join(" ")}function bi(a,b){if(a instanceof qe){var c=a.J.j(),d=Zh(a.F);a=$h(a.value,a.F,a.J.G(),b);return"="==d&&"NULL"==a?[c,"IS NULL"].join(" "):"<>"==d&&"NULL"==a?[c,"IS NOT NULL"].join(" "):[c,d,a].join(" ")}if(a instanceof Og)return ai(a,b);if(a instanceof Rg)return ci(a);throw new D(357,typeof a);}
function di(a,b){return(a=bi(a,b))?" WHERE "+a:""}function ei(a,b){var c="UPDATE "+a.table.getName()+" SET ",c=c+a.set.map(function(a){var b=a.J.j()+" = ";return-1!=a.Tc?b+"?"+a.Tc.toString():b+Xh(a.J.G(),a.value).toString()}).join(", ");a.w&&(c+=di(a.w,b));return c+";"}
function fi(a,b){var c="*";a.f.length&&(c=a.f.map(function(a){return a.Ka?a.j()+" AS "+a.Ka:a.j()}).join(", "));c="SELECT "+c+" FROM ";null!=a.eb&&0!=a.eb.size?c+=gi(a,b):(c+=a.from.map(hi).join(", "),a.w&&(c+=di(a.w,b)));a.N&&(b=a.N.map(function(a){return a.J.j()+(0==a.order?" DESC":" ASC")}).join(", "),c+=" ORDER BY "+b);a.ra&&(b=a.ra.map(function(a){return a.j()}).join(", "),c+=" GROUP BY "+b);a.X&&(c+=" LIMIT "+a.X.toString());a.L&&(c+=" SKIP "+a.L.toString());return c+";"}
function hi(a){return Td(a)!=a.getName()?a.getName()+" AS "+Td(a):a.getName()}function gi(a,b){for(var c=Hg(a.w,function(a){return a instanceof Rg}),d=c.map(ci),e=hi(a.from[0]),f=1;f<a.from.length;f++)var h=hi(a.from[f]),e=a.eb.has(c[d.length-f].W())?e+(" LEFT OUTER JOIN "+h):e+(" INNER JOIN "+h),e=e+(" ON ("+d[d.length-f]+")");a=a.w;a=0<J(a).length?ie(a,0):a;a instanceof Rg||(e+=" WHERE "+bi(a,b));return e}
function ii(a,b){b=b||!1;a=a.query.clone();if(a instanceof Rh)return Yh(a,b);if(a instanceof Oh){var c="DELETE FROM "+a.from.getName();a.w&&(c+=di(a.w,b));return c+";"}if(a instanceof Th)return ei(a,b);if(a instanceof ze)return fi(a,b);throw new D(358,typeof a);};function T(a,b){this.global=a;this.Hg=a.b(yc);this.Ia=a.b(zc);this.query=b}q("lf.query.BaseBuilder",T);T.prototype.exec=function(){try{this.ab()}catch(a){return bb(a)}return new u(function(a,b){var c=new Mh(this.global,[this.Bc()]);Je(this.Ia,c).then(function(b){a(Jd(b[0]))},b)},this)};T.prototype.exec=T.prototype.exec;T.prototype.Wf=function(){var a=function(a){return a.Pc(this.query)+"\n"}.bind(this);return Ng(ji(this).bb(),a)};T.prototype.explain=T.prototype.Wf;
T.prototype.bind=function(a){this.query.bind(a);return this};T.prototype.bind=T.prototype.bind;T.prototype.Pg=function(a){return ii(this,a)};T.prototype.toSql=T.prototype.Pg;T.prototype.ab=aa();function ji(a){if(null==a.hf){var b;b=a.Hg;var c=a.query,d=b.qg.create(c);b=b.Eg.create(d,c);a.hf=b}return a.hf}T.prototype.Bc=function(){return{context:this.query.clone(),je:ji(this)}};function ki(a){T.call(this,a,new Oh(a.b(Bc)))}r(ki,T);q("lf.query.DeleteBuilder",ki);ki.prototype.from=function(a){if(null!=this.query.from)throw new D(515);this.query.from=a;return this};ki.prototype.from=ki.prototype.from;ki.prototype.w=function(a){this.Fd();this.query.w=a;return this};ki.prototype.where=ki.prototype.w;ki.prototype.Fd=function(){if(null==this.query.from)throw new D(548);if(null!=this.query.w)throw new D(516);};
ki.prototype.ab=function(){ki.hb.ab.call(this);if(null==this.query.from)throw new D(517);};function li(a,b){T.call(this,a,new Rh(a.b(Bc)));this.query.ac=b||!1}r(li,T);q("lf.query.InsertBuilder",li);li.prototype.ab=function(){li.hb.ab.call(this);var a=this.query;if(null==a.La||null==a.values)throw new D(518);if(a.ac&&null===a.La.Mb.sd)throw new D(519);};li.prototype.La=function(a){if(null!=this.query.La)throw new D(520);this.query.La=a;return this};li.prototype.into=li.prototype.La;
li.prototype.values=function(a){if(null!=this.query.values)throw new D(521);a instanceof Wd||a.some(function(a){return a instanceof Wd})?this.query.bc=a:this.query.values=a;return this};li.prototype.values=li.prototype.values;function mi(a){return ni("and",Array.prototype.slice.call(arguments))}q("lf.op.and",mi);q("lf.op.or",function(a){return ni("or",Array.prototype.slice.call(arguments))});function ni(a,b){var c=new Og(a);b.forEach(function(a){K(c,a)});return c}q("lf.op.not",function(a){a.vd(!0);return a});function U(a,b){T.call(this,a,new ze(a.b(Bc)));this.Me=this.Ad=!1;this.query.f=b;oi(this);pi(this)}r(U,T);q("lf.query.SelectBuilder",U);U.prototype.ab=function(){U.hb.ab.call(this);var a=this.query;if(null==a.from)throw new D(522);if(n(a.Sb)&&!n(a.X)||n(a.Zb)&&!n(a.L))throw new D(523);null!=this.query.ra?qi(this):ri(this)};function oi(a){var b=a.query.f.filter(function(a){return a instanceof R&&"DISTINCT"==a.Lb},a);if(0!=b.length&&(1!=b.length||1!=a.query.f.length))throw new D(524);}
function qi(a){if(a.query.ra.some(function(a){a=a.G();return 6==a||0==a}))throw new D(525);}function ri(a){var b=a.query.f.some(function(a){return a instanceof R},a);a=a.query.f.some(function(a){return!(a instanceof R)},a)||0==a.query.f.length;if(b&&a)throw new D(526);}function pi(a){a.query.f.forEach(function(a){if(a instanceof R&&!si(a.Lb,a.G()))throw new D(527,a.j());},a)}function ti(a,b){if(null==a.query.from)throw new D(b);}
U.prototype.from=function(a){if(this.Me)throw new D(515);this.Me=!0;null==this.query.from&&(this.query.from=[]);this.query.from.push.apply(this.query.from,Array.prototype.slice.call(arguments));return this};U.prototype.from=U.prototype.from;U.prototype.w=function(a){ti(this,548);if(this.Ad)throw new D(516);this.Ad=!0;ui(this,a);return this};U.prototype.where=U.prototype.w;function ui(a,b){null!=a.query.w&&(b=mi(b,a.query.w));a.query.w=b}
U.prototype.hg=function(a,b){ti(this,542);if(this.Ad)throw new D(547);this.query.from.push(a);ui(this,b);return this};U.prototype.innerJoin=U.prototype.hg;U.prototype.og=function(a,b){ti(this,542);if(!(b instanceof Rg))throw new D(541);if(this.Ad)throw new D(547);this.query.from.push(a);null==this.query.eb&&(this.query.eb=B());var c=b;Td(a)!=Td(b.ma.I())&&(c=b.reverse());this.query.eb.add(c.W());ui(this,c);return this};U.prototype.leftOuterJoin=U.prototype.og;
U.prototype.X=function(a){if(null!=(this.query.X||this.query.Sb))throw new D(528);if(a instanceof Wd)this.query.Sb=a;else{if(0>a)throw new D(531);this.query.X=a}return this};U.prototype.limit=U.prototype.X;U.prototype.L=function(a){if(null!=(this.query.L||this.query.Zb))throw new D(529);if(a instanceof Wd)this.query.Zb=a;else{if(0>a)throw new D(531);this.query.L=a}return this};U.prototype.skip=U.prototype.L;
U.prototype.N=function(a,b){ti(this,549);null==this.query.N&&(this.query.N=[]);this.query.N.push({J:a,order:null!=b?b:1});return this};U.prototype.orderBy=U.prototype.N;U.prototype.ra=function(a){ti(this,549);if(null!=this.query.ra)throw new D(530);null==this.query.ra&&(this.query.ra=[]);this.query.ra.push.apply(this.query.ra,Array.prototype.slice.call(arguments));return this};U.prototype.groupBy=U.prototype.ra;
function si(a,b){switch(a){case "COUNT":case "DISTINCT":return!0;case "AVG":case "GEOMEAN":case "STDDEV":case "SUM":return 4==b||3==b;case "MAX":case "MIN":return 4==b||3==b||5==b||2==b}return!1}U.prototype.clone=function(){var a=new U(this.global,this.query.f);a.query=this.query.clone();a.query.Wc=null;return a};U.prototype.clone=U.prototype.clone;function vi(a,b){T.call(this,a,new Th(a.b(Bc)));this.query.table=b}r(vi,T);q("lf.query.UpdateBuilder",vi);vi.prototype.set=function(a,b){a={Tc:b instanceof Wd?b.Ca():-1,J:a,value:b};null!=this.query.set?this.query.set.push(a):this.query.set=[a];return this};vi.prototype.set=vi.prototype.set;vi.prototype.w=function(a){this.Fd();this.query.w=a;return this};vi.prototype.where=vi.prototype.w;vi.prototype.Fd=function(){if(null!=this.query.w)throw new D(516);};
vi.prototype.ab=function(){vi.hb.ab.call(this);if(null==this.query.set)throw new D(532);if(this.query.set.some(function(a){return a.value instanceof Wd}))throw new D(501);};function wi(a){this.query=a;this.Ha=null}wi.prototype.gc=function(){null===this.Ha&&(this.Ha=this.ad());return this.Ha};function xi(a){wi.call(this,a)}r(xi,wi);xi.prototype.ad=function(){return this.query.ac?new th(this.query.La,this.query.values):new sh(this.query.La,this.query.values)};function yi(a){wi.call(this,a)}r(yi,wi);yi.prototype.ad=function(){var a=new vh(this.query.table),b=null!=this.query.w?new wh(this.query.w.Nb()):null,c=new xh(this.query.table);null===b?K(a,c):(K(b,c),K(a,b));return a};function zi(a,b,c){this.Ha=a;this.le=b;this.Vb=c}zi.prototype.gc=function(){this.Vb.forEach(function(a){this.Ha=a.gb(this.Ha,this.le)},this);return this.Ha};function Ai(a,b){wi.call(this,a);this.Vb=b}r(Ai,wi);Ai.prototype.ad=function(){var a=new uh(this.query.from),b=null!=this.query.w?new wh(this.query.w.Nb()):null,c=new xh(this.query.from);null===b?K(a,c):(K(b,c),K(a,b));return(new zi(a,this.query,this.Vb)).gc()};function Bi(){}r(Bi,Gh);Bi.prototype.gb=function(a,b){if(2>b.from.length)return a;this.H=a;this.ub(this.H,b);return this.H};Bi.prototype.ub=function(a,b){if(a instanceof wh&&a.O instanceof Rg){var c=a.O.W(),d=ie(a,0);d instanceof yh&&(c=null!=b.eb&&b.eb.has(c),c=new Fh(a.O,c),Mg(a,d,c,c),a==this.H&&(this.H=c),a=c)}J(a).forEach(function(a){this.ub(a,b)},this)};function Ci(){this.Sc=B()}r(Ci,Gh);Ci.prototype.gb=function(a,b){if(!n(b.w))return a;this.Sc.clear();this.H=a;this.ub(this.H,b);this.Sc.clear();return this.H};Ci.prototype.ub=function(a,b){var c=function(a){J(a).forEach(d)}.bind(this),d=function(a){if(!this.Sc.has(a)){if(a instanceof wh){var e=a.O.u(),h=function(a){return Di(this,a,e)}.bind(this),h=Ei(this,b,a,h);this.Sc.add(a);h!=a&&(null===h.getParent()&&(this.H=h),d(h))}c(a)}}.bind(this);d(a)};
function Ei(a,b,c,d){var e=c;if(Fi(b,c))e=Kg(c),Ei(a,b,c,d);else if(Gi(c)){var f=[],e=Lg(c,d,function(a){a=new wh(a.O);f.push(a);return a});f.forEach(function(a){Ei(this,b,a,d)},a)}return e}function Di(a,b,c){var d=B();Gg(b).forEach(function(a){d.add(a.table)},a);b instanceof xh&&d.add(b.table);return Hc(d,c)}function Gi(a){a=ie(a,0);return a instanceof yh||a instanceof Fh}
function Fi(a,b){var c=ie(b,0);if(!(c instanceof wh))return!1;if(null==a.eb)return!0;b=b.O instanceof Rg;a=a.eb.has(c.O.W());return b||!a};function Hi(a,b){wi.call(this,a);this.Vb=b;this.kf=this.cf=this.tf=this.ff=this.De=this.Se=this.sf=this.Je=this.vf=null}r(Hi,wi);
Hi.prototype.ad=function(){Ii(this);2<=this.query.from.length&&(this.Je=new yh);this.sf=null!=this.query.w?new wh(this.query.w.Nb()):null;this.query.N&&(this.ff=new Ah(this.query.N));null!=this.query.L&&0<this.query.L&&(this.tf=new Eh(this.query.L));null!=this.query.X&&(this.cf=new Dh(this.query.X));null!=this.query.ra&&(this.Se=new Ch(this.query.ra));Ji(this);this.kf=new zh(this.query.f||[],this.query.ra||null);var a=Ki(this);return(new zi(a,this.query,this.Vb)).gc()};
function Ki(a){for(var b=[a.cf,a.tf,a.kf,a.ff,a.De,a.Se,a.sf,a.Je],c=-1,d=null,e=0;e<b.length;e++){var f=b[e];null!==f&&(null===d?d=f:K(b[c],f),c=e)}a.vf.forEach(function(a){K(b[c],a)});return d}function Ii(a){a.vf=a.query.from.map(function(a){return new xh(a)},a)}function Ji(a){var b=a.query.f.filter(function(a){return a instanceof R});null!=a.query.N&&a.query.N.forEach(function(a){a.J instanceof R&&b.push(a.J)});0<b.length&&(a.De=new Bh(b))};function Li(){this.re=[new Hh,new Kh,new Ci,new Bi];this.Pd=[new Hh]}Li.prototype.create=function(a){var b;if(a instanceof Rh)b=new xi(a);else if(a instanceof Oh)b=new Ai(a,this.Pd);else if(a instanceof ze)b=new Hi(a,this.re);else if(a instanceof Th)b=new yi(a);else throw new D(513);b=b.gc();return new qh(b,a.da())};function Mi(a){S.call(this,0,1);this.U=a}r(Mi,S);Mi.prototype.toString=function(){return"delete("+this.U.getName()+")"};Mi.prototype.ca=function(a,b){a=a[0].entries.map(function(a){return a.va});b.remove(this.U,a);return[Nd()]};function Ni(a,b){S.call(this,0,-1);this.table=b;this.C=a.b(xc)}r(Ni,S);Ni.prototype.toString=function(){return"get_row_count("+this.table.getName()+")"};Ni.prototype.ca=function(){var a=this.C.get(nf(this.table)),b=new G([],[this.table.getName()]),c=bh(),a=a.Y().ia;null===b.$a&&(b.$a=y());b.$a.set(c.j(),a);return[b]};function Oi(a,b){S.call(this,0,-1);this.V=a.b(wc);this.C=a.b(xc);this.table=b}r(Oi,S);Oi.prototype.toString=function(){var a="table_access("+this.table.getName();null===this.table.Ka||(a+=" as "+this.table.Ka);return a+")"};Oi.prototype.ca=function(){var a=this.C.get(nf(this.table)).Va();return[Qd(Ef(this.V,a),[Td(this.table)])]};function Pi(a){this.c=a}r(Pi,Gh);Pi.prototype.gb=function(a,b){this.H=a;if(!this.Hd(b))return a;a=Hg(a,function(a){return a instanceof Oi})[0];b=new Ni(this.c,a.table);Mg(a,a,b,b);return this.H};Pi.prototype.Hd=function(a){return 1==a.f.length&&1==a.from.length&&null==a.w&&null==a.X&&null==a.L&&null==a.ra?(a=a.f[0],a instanceof R&&"COUNT"==a.Lb&&a.child instanceof ah):!1};function Qi(a){S.call(this,0,1);this.Re=a}r(Qi,S);Qi.prototype.toString=function(){return"groupBy("+this.Re.map(function(a){return a.j()}).toString()+")"};Qi.prototype.ca=function(a){return Ri(this,a[0])};function Ri(a,b){var c=new cd,d=function(a){return this.Re.map(function(b){return H(a,b)},this).join(",")}.bind(a);b.entries.forEach(function(a){c.set(d(a),a)},a);return c.keys().map(function(a){return new G(c.get(a),b.u())},a)};function Si(a,b,c){S.call(this,0,0);this.C=a.b(xc);this.V=a.b(wc);this.O=b;this.Rb=c;this.Dd="eq"==this.O.F?0:2;this.Ue=null}r(Si,S);var Ti=["hash","index_nested_loop","nested_loop"];Si.prototype.toString=function(){return"join(type: "+(this.Rb?"outer":"inner")+", impl: "+Ti[this.Dd]+", "+this.O.toString()+")"};
Si.prototype.ca=function(a){switch(this.Dd){case 0:return[Vg(this.O,a[0],a[1],this.Rb)];case 1:return[Wg(this.O,a[0],a[1],this.Ue,this.V)];default:var b=this.O,c=a[0];a=a[1];var d=this.Rb,e=[c,a];d||(e=Sg(b,c,a));c=e[0];a=e[1];for(var e=[],f=c.u(),h=a.u(),l=c.entries.length,p=a.entries.length,L=p+256-1>>8,sa=0;sa<L;){for(var ca=0;ca<l;ca++){var Cb=!1,dg=H(c.entries[ca],b.ga);if(null!==dg)for(var Wi=Math.min(sa+1<<8,p),Db=sa<<8;Db<Wi;Db++)if(b.vc(dg,H(a.entries[Db],b.ma))){var Cb=!0,Tc=Vd(c.entries[ca],
f,a.entries[Db],h);e.push(Tc)}d&&!Cb&&e.push(Ug(b,c.entries[ca],f))}sa++}b=c.u().concat(a.u());return[new G(e,b)]}};function Ui(a,b){a.Dd=1;var c=a.C.get(b.Ca().j());a.Ue={dg:b,wg:b==a.O.ga?a.O.ma:a.O.ga,index:c}};function Vi(a){S.call(this,0,-1);this.lf=a}r(Vi,S);Vi.prototype.toString=function(){return"no_op_step("+this.lf[0].u().join(",")+")"};Vi.prototype.ca=g("lf");function Xi(){}r(Xi,Gh);Xi.prototype.gb=function(a,b){this.H=a;if(!this.Hd(b))return a;Hg(a,function(a){return a instanceof Si}).forEach(this.Gg,this);return this.H};Xi.prototype.Hd=function(a){return 1<a.from.length};
Xi.prototype.Gg=function(a){if("eq"==a.O.F&&!a.Rb){var b=function(b){if(!(b instanceof Oi))return null;b=Td(b.table)==Td(a.O.ma.I())?a.O.ma:a.O.ga;return null===b.Ca()?null:b},c=b(ie(a,0)),b=b(ie(a,1));if(null!==c||null!==b){b=null===b?c:b;Ui(a,b);var d=new G([],[Td(b.I())]);le(a,new Vi([d]),b==c?0:1)}}};function Yi(a){a=a.map(function(a){return a.qa()});a=yb.apply(null,a);var b=[];xb(a,function(a){b.push(a)});return b}function Zi(a){this.Qb=a}Zi.prototype.bd=function(){return 1==this.Qb.f.length?[Dd()]:[this.Qb.f.map(function(){return Dd()})]};function $i(a,b){this.Qb=a;this.Ga=b;this.Ld=this.af=null}
function aj(a,b){var c=y();a.Ga.keys().forEach(function(a){var d=this.Ga.get(a).map(function(a){return ve(b,a)},this),f=new Hd([Dd()]);d.forEach(function(a){f=Id(f,a.we())});c.set(a,f)},a);return c}$i.prototype.bd=function(a){if(this.af==a)return this.Ld;for(var b=aj(this,a),c=this.Qb.f.length-1;0<=c;c--){var d=this.Qb.f[c];if(null!==(b.get(d.ba.getName())||null))break;b.set(d.ba.getName(),new Hd([Dd()]))}this.Ld=1==this.Qb.f.length?z(b)[0].qa():Yi(bj(this,b));this.af=a;return this.Ld};
function bj(a,b){var c=y(),d=0;a.Qb.f.forEach(function(a){c.set(a.ba.getName(),d);d++});return gc(b).sort(function(a,b){return c.get(a)-c.get(b)}).map(function(a){return b.get(a)})};function cj(a,b){this.xd=b;this.C=a.b(xc)}function dj(a){a=a.C.get(nf(a.xd));return Math.floor(.02*a.Y().ia)}function ej(a,b,c){c=c.filter(a.kg,a);if(0==c.length)return null;a=fj(a,c);if(0==a.length)return null;if(1==a.length)return a[0];var d=Number.MAX_VALUE;return a.reduce(function(a,c){var e=gj(c,b);return e<d?(d=e,c):a},null)}
function fj(a,b){return a.xd.Da().map(function(a){a=new hj(this.C,a);ij(a,b);return a},a).filter(function(a){if(null===a.Ga)a=!1;else{for(var b=!1,c=!0,f=0;f<a.cb.f.length;f++){var h=a.Ga.has(a.cb.f[f].ba.getName());if(b&&h){c=!1;break}h||(b=!0)}a=c}return a})}cj.prototype.kg=function(a){return a instanceof qe?!a.ld()||a.J.I()!=this.xd||"in"==a.F&&a.value.length>dj(this)?!1:!0:a instanceof Og?a.ld()&&ie(a,0).J.I()==this.xd?J(a).length<=dj(this):!1:!1};
function hj(a,b){this.C=a;this.cb=b;this.eg=B(this.cb.f.map(function(a){return a.ba.getName()}));this.$d=this.Ga=null}function jj(a){null===a.$d&&(a.$d=new $i(a.cb,a.Ga));return a.$d}function ij(a,b){b.forEach(function(a){var b=a.lb()[0].getName();this.eg.has(b)&&(null===this.Ga&&(this.Ga=new cd),this.Ga.set(b,a.W()))},a)}function gj(a,b){b=jj(a).bd(b);var c=a.C.get(a.cb.j());return b.reduce(function(a,b){return a+c.Zc(b)},0)};function kj(a,b,c,d){S.call(this,0,-1);this.C=a.b(xc);this.index=b;this.$e=c;this.pe=d;this.Rc=this.Qc=!1}r(kj,S);kj.prototype.toString=function(){return"index_range_scan("+this.index.j()+", ?, "+(this.pe?"reverse":"natural")+(this.Qc?", limit:?":"")+(this.Rc?", skip:?":"")+")"};kj.prototype.Pc=function(a){var b=this.toString(),c=this.$e.bd(a),b=b.replace("?",c.toString());this.Qc&&(b=b.replace("?",a.X.toString()));this.Rc&&(b=b.replace("?",a.L.toString()));return b};
kj.prototype.ca=function(a,b,c){a=this.$e.bd(c);b=this.C.get(this.index.j());c=(1==a.length&&a[0]instanceof E&&Ed(a[0])?If(b.get(a[0].from),!1,this.Qc?c.X:void 0,this.Rc?c.L:void 0):b.Va(a,this.pe,this.Qc?c.X:void 0,this.Rc?c.L:void 0)).map(function(a){return new hc(a,{})},this);return[Qd(c,[this.index.mc])]};function lj(){S.call(this,0,0)}r(lj,S);lj.prototype.toString=k("multi_index_range_scan()");
lj.prototype.ca=function(a){var b=y();a.forEach(function(a){a.entries.forEach(function(a){b.set(a.va.id(),a)})});var c=z(b);return[new G(c,a[0].u())]};function mj(a){S.call(this,0,1);this.jc=a}r(mj,S);mj.prototype.toString=k("select(?)");mj.prototype.Pc=function(a){a=ve(a,this.jc);return this.toString().replace("?",a.toString())};mj.prototype.ca=function(a,b,c){return[ve(c,this.jc).eval(a[0])]};function nj(a,b){S.call(this,0,1);this.V=a.b(wc);this.U=b}r(nj,S);nj.prototype.toString=function(){return"table_access_by_row_id("+this.U.getName()+")"};nj.prototype.ca=function(a){return[Qd(Ef(this.V,Kd(a[0])),[Td(this.U)])]};function oj(a){this.c=a}r(oj,Gh);oj.prototype.gb=function(a,b){this.H=a;Hg(a,function(a){return a instanceof Oi}).forEach(function(a){var c=pj(a);if(0!=c.length){var e=ej(new cj(this.c,a.table),b,c.map(function(a){return ve(b,a.jc)}));if(null!==e){var f=y();c.forEach(function(a){f.set(a.jc,a)},this);this.H=qj(this,e,f,a)}}},this);return this.H};function pj(a){var b=[];for(a=a.getParent();a;){if(a instanceof mj)b.push(a);else if(a instanceof Si)break;a=a.getParent()}return b}
function qj(a,b,c,d){(null===b.Ga?[]:b.Ga.values()).map(function(a){return c.get(a)}).forEach(Ig);b=new kj(a.c,b.cb,jj(b),!1);a=new nj(a.c,d.table);K(a,b);Mg(d,d,a,b);return b.bb()};function rj(a,b){S.call(this,0,-1);this.C=a.b(xc);this.U=b}r(rj,S);rj.prototype.toString=function(){return"insert("+this.U.getName()+")"};rj.prototype.ca=function(a,b,c){sj(this.U,c.values,this.C);b.Ab(this.U,c.values);return[Qd(c.values,[this.U.getName()])]};function sj(a,b,c){a=a.Mb.sd;if(null===a?0:a.f[0].autoIncrement){var d=a.f[0].ba.getName();c=c.get(a.j()).Y().Fc;var e=null===c?0:c;b.forEach(function(a){if(0==a.m[d]||null==a.m[d])e++,a.m[d]=e})}}
function tj(a,b){S.call(this,0,-1);this.C=a.b(xc);this.U=b}r(tj,S);tj.prototype.toString=function(){return"insert_replace("+this.U.getName()+")"};tj.prototype.ca=function(a,b,c){sj(this.U,c.values,this.C);b.Wd(this.U,c.values);return[Qd(c.values,[this.U.getName()])]};function uj(){S.call(this,0,1)}r(uj,S);uj.prototype.toString=k("limit(?)");uj.prototype.Pc=function(a){return this.toString().replace("?",a.X.toString())};uj.prototype.ca=function(a,b,c){a[0].entries.splice(c.X);return a};function vj(a){S.call(this,0,1);this.N=a}r(vj,S);m=vj.prototype;m.toString=function(){return"order_by("+Ae(this.N)+")"};m.ca=function(a){if(1==a.length){var b;b=a[0];for(var c=null,d=0;d<this.N.length;d++){var e=ch(this.N[d].J);if(null!==b.$a&&b.$a.has(e.j())){c=e;break}}b=c;(null===b?a[0]:Ld(a[0],b)).entries.sort(this.Tf.bind(this))}else a.sort(this.Jg.bind(this));return a};
m.$=function(a,b){var c,d,e,f=-1;do f++,e=this.N[f].J,c=this.N[f].order,d=a(e),e=b(e);while(d==e&&f+1<this.N.length);a=d<e?-1:d>e?1:0;return 1==c?a:-a};m.Jg=function(a,b){return this.$(function(b){return b instanceof R?Ld(a,b):H(a.entries[a.entries.length-1],b)},function(a){return a instanceof R?Ld(b,a):H(b.entries[b.entries.length-1],a)})};m.Tf=function(a,b){return this.$(function(b){return H(a,b)},function(a){return H(b,a)})};function wj(a,b){this.Na=a;this.K=b}function xj(a){return a.K.some(function(a){return a instanceof R},a)?yj(a):zj(a)}function yj(a){if(1==a.K.length&&"DISTINCT"==a.K[0].Lb)return a=Ld(a.Na,a.K[0]).entries.map(function(a){var b=new Rd(new hc(-1,{}),1<this.Na.M.size);Ud(b,this.K[0],H(a,this.K[0].child));return b},a),new G(a,[]);var b=new Rd(new hc(-1,{}),1<a.Na.M.size);a.K.forEach(function(a){var c=a instanceof R?Ld(this.Na,a):H(this.Na.entries[0],a);Ud(b,a,c)},a);return new G([b],a.Na.u())}
function zj(a){var b=Array(a.Na.entries.length),c=1<a.Na.M.size;a.Na.entries.forEach(function(a,e){b[e]=new Rd(new hc(a.va.id(),{}),c);this.K.forEach(function(c){Ud(b[e],c,H(a,c))},this)},a);return new G(b,a.Na.u())}function Aj(a,b){var c=a.map(function(a){return xj(new wj(a,b)).entries[0]});return new G(c,a[0].u())};function Bj(a,b){S.call(this,0,1);this.f=a;this.Pb=b}r(Bj,S);Bj.prototype.toString=function(){var a="project("+this.f.toString();if(null!==this.Pb)var b=this.Pb.map(function(a){return a.j()}).join(", "),a=a+(", groupBy("+b+")");return a+")"};Bj.prototype.ca=function(a){0==a.length?a=[Nd()]:1==a.length?(a=a[0],a=[0==this.f.length?a:xj(new wj(a,this.f))]):a=[Aj(a,this.f)];return a};function Cj(a){return a.f.some(function(a){return a instanceof R})||null!==a.Pb};function Dj(){S.call(this,0,1)}r(Dj,S);Dj.prototype.toString=k("skip(?)");Dj.prototype.Pc=function(a){return this.toString().replace("?",a.L.toString())};Dj.prototype.ca=function(a,b,c){return[new G(a[0].entries.slice(c.L),a[0].u())]};function Ej(){}r(Ej,Gh);Ej.prototype.gb=function(a,b){if(!n(b.X)&&!n(b.L))return a;var c=Fj(a);if(null===c)return a;Hg(a,function(a){return a instanceof uj||a instanceof Dj}).forEach(function(a){a instanceof uj?c.Qc=!0:c.Rc=!0;Ig(a)},this);return c.bb()};function Fj(a){a=Hg(a,function(a){return a instanceof kj},function(a){return a instanceof Bj&&Cj(a)||a instanceof vj||1!=J(a).length||a instanceof mj});return 0<a.length?a[0]:null};function Gj(a){this.c=a}r(Gj,Gh);Gj.prototype.gb=function(a,b){this.H=a;var c=Hj(this,b);if(0==c.length)return this.H;var d,e=0;do d=c[e++],a=Ij(this,d,b);while(null===a&&e<c.length);if(null===a)return this.H;b=Jj(this,a[0].cb.mc);return null===b?this.H:this.H=Kj(this,d,b,a)};function Hj(a,b){return Hg(a.H,function(a){if(!(a instanceof mj))return!1;a=ve(b,a.jc);return a instanceof Og&&"or"==a.pb})}function Jj(a,b){return Hg(a.H,function(a){return a instanceof Oi&&a.table.getName()==b})[0]||null}
function Ij(a,b,c){b=ve(c,b.jc);var d=b.u();if(1!=d.size)return null;var d=C(d)[0],e=new cj(a.c,d),f=null;return J(b).every(function(a){a=ej(e,c,[a]);null===a||(null===f?f=[a]:f.push(a));return null!==a})?f:null}function Kj(a,b,c,d){var e=new nj(a.c,c.table),f=new lj;K(e,f);d.forEach(function(a){a=new kj(this.c,a.cb,jj(a),!1);K(f,a)},a);Ig(b);Mg(c,c,e,f);return f.bb()};function Lj(a){this.c=a}r(Lj,Gh);Lj.prototype.gb=function(a,b){b=Mj(a,b);if(null===b)return a;a:{var c=b;a=Nj(ie(b,0));if(null!==a){var d;d=b.N;for(var e=null,f=a.table.Da(),h=0;h<f.length&&null===e;h++)e=Oj(f[h],d);d=e;if(null===d){a=c;break a}c=new kj(this.c,d.cb,new Zi(d.cb),d.Xe);d=new nj(this.c,a.table);K(d,c);Ig(b);c=Mg(a,a,d,c)}a=c}a==b&&(a=b,c=Pj(ie(b,0)),null!==c&&(d=Oj(c.index,b.N),null!==d&&(c.pe=d.Xe,a=Ig(b).parent)));return a.bb()};
function Pj(a){a=Hg(a,function(a){return a instanceof kj},function(a){return 1!=J(a).length});return 0<a.length?a[0]:null}function Nj(a){a=Hg(a,function(a){return a instanceof Oi},function(a){return 1!=J(a).length});return 0<a.length?a[0]:null}function Mj(a,b){return n(b.N)?Hg(a,function(a){return a instanceof vj})[0]:null}function Oj(a,b){if(a.f.length!=b.length||!b.every(function(b,d){return b.J.getName()==a.f[d].ba.getName()}))return null;b=Qj(b,a);return b[0]||b[1]?{cb:a,Xe:b[1]}:null}
function Qj(a,b){var c=a.reduce(function(a,b){return a<<1|(0==b.order?0:1)},0),d=b.f.reduce(function(a,b){return a<<1|(0==b.order?0:1)},0),c=c^d;return[0==c,c==Math.pow(2,Math.max(a.length,b.f.length))-1]};function Rj(a,b,c){this.Ha=a;this.le=b;this.Vb=c}Rj.prototype.gc=function(){this.Vb.forEach(function(a){this.Ha=a.gb(this.Ha,this.le)},this);return this.Ha};function Sj(a){S.call(this,0,1);this.U=a}r(Sj,S);Sj.prototype.toString=function(){return"update("+this.U.getName()+")"};Sj.prototype.ca=function(a,b,c){a=a[0].entries.map(function(a){var b=this.U.kb(a.va.Ja());c.set.forEach(function(a){b.m[a.J.getName()]=a.value},this);return b},this);b.update(this.U,a);return[Nd()]};function Tj(a){this.c=a;this.re=[new Xi,new oj(this.c),new Gj(this.c),new Lj(this.c),new Ej,new Pi(this.c)];this.Pd=[new oj(this.c)]}Tj.prototype.create=function(a,b){var c=a.bb();if(c instanceof th||c instanceof sh)return Uj(this,a,b);if(c instanceof zh||c instanceof Dh||c instanceof Eh)return Uj(this,a,b,this.re);if(c instanceof uh||c instanceof vh)return Uj(this,a,b,this.Pd);throw new D(8);};
function Uj(a,b,c,d){a=Fg(b.bb(),a.tg.bind(a));null!=d&&(a=(new Rj(a,c,d)).gc());return new Be(a,b.da())}
Tj.prototype.tg=function(a){if(a instanceof zh)return new Bj(a.f,a.Pb);if(a instanceof Ch)return new Qi(a.f);if(a instanceof Bh)return new gh(a.f);if(a instanceof Ah)return new vj(a.N);if(a instanceof Eh)return new Dj;if(a instanceof Dh)return new uj;if(a instanceof wh)return new mj(a.O.W());if(a instanceof yh)return new Lh;if(a instanceof Fh)return new Si(this.c,a.O,a.Rb);if(a instanceof xh)return new Oi(this.c,a.table);if(a instanceof uh)return new Mi(a.table);if(a instanceof vh)return new Sj(a.table);
if(a instanceof th)return new tj(this.c,a.table);if(a instanceof sh)return new rj(this.c,a.table);throw new D(514);};function Vj(a){this.qg=new Li;this.Eg=new Tj(a)};function Wj(){this.df=y()}function Xj(a,b){var c=a.df.get(b.getName())||null;null===c&&(c=new Yj,a.df.set(b.getName(),c));return c}function Zj(a,b,c,d){c.forEach(function(a){a=Xj(this,a);0==d?(a.fb=null,a.wc=b):3==d?(null===a.Yb&&(a.Yb=B()),a.Yb.add(b),null===a.Ya&&(a.Ya=B()),a.Ya.delete(b)):1==d?(null===a.Ya&&(a.Ya=B()),a.Ya.add(b)):2==d&&(a.fb=b)},a)}
function ak(a,b,c,d){var e=!0;c.forEach(function(a){if(e){a=Xj(this,a);var c=null===a.Ya||0==a.Ya.size;e=0==d?(null===a.Yb||0==a.Yb.size)&&c&&null===a.wc&&null!==a.fb&&a.fb==b:3==d?null===a.wc&&null===a.fb&&null!==a.Ya&&a.Ya.has(b):1==d?null===a.fb:c&&(null===a.fb||a.fb==b)}},a);return e}function bk(a,b,c,d){var e=ak(a,b,c,d);e&&Zj(a,b,c,d);return e}Wj.prototype.releaseLock=function(a,b){b.forEach(function(b){Xj(this,b).releaseLock(a)},this)};
function ck(a,b){b.forEach(function(a){Xj(this,a).fb=null},a)}function Yj(){this.Yb=this.Ya=this.fb=this.wc=null}Yj.prototype.releaseLock=function(a){this.wc==a&&(this.wc=null);this.fb==a&&(this.fb=null);null===this.Ya||this.Ya.delete(a);null===this.Yb||this.Yb.delete(a)};function dk(){this.Ub=new ek;this.Ec=new Wj}function Je(a,b){(2>b.getPriority()||2>b.getPriority())&&ck(a.Ec,b.da());a.Ub.Ab(b);fk(a);return b.Db.ha}function fk(a){for(var b=a.Ub.qa(),c=0;c<b.length;c++){var d=b[c];if(0==d.G()?gk(a,d,1,3):gk(a,d,2,0)){a.Ub.remove(d);var e=a;d.exec().then(e.Bg.bind(e,d),e.Ag.bind(e,d))}}}function gk(a,b,c,d){var e=!1;bk(a.Ec,b.W(),b.da(),c)&&(e=bk(a.Ec,b.W(),b.da(),d));return e}dk.prototype.Bg=function(a,b){this.Ec.releaseLock(a.W(),a.da());a.Db.resolve(b);fk(this)};
dk.prototype.Ag=function(a,b){this.Ec.releaseLock(a.W(),a.da());a.Db.reject(b);fk(this)};function ek(){this.Ub=[]}ek.prototype.Ab=function(a){Hf(this.Ub,a,function(a,c){var b=a.getPriority()-c.getPriority();return 0==b?a.W()-c.W():b})};ek.prototype.qa=function(){return this.Ub.slice()};ek.prototype.remove=function(a){var b=this.Ub;a=xa(b,a);var c;(c=0<=a)&&Array.prototype.splice.call(b,a,1);return c};function hk(){this.Nc=y()}var ik;function jk(){ik||(ik=new hk);return ik}hk.prototype.clear=function(){this.Nc.clear()};hk.prototype.clear=hk.prototype.clear;hk.prototype.rb=function(a,b){this.Nc.set(a.toString(),b);return b};hk.prototype.registerService=hk.prototype.rb;hk.prototype.b=function(a){var b=this.Nc.get(a.toString())||null;if(null===b)throw new D(7,a.toString());return b};hk.prototype.getService=hk.prototype.b;hk.prototype.md=function(a){return this.Nc.has(a.toString())};
hk.prototype.isRegistered=hk.prototype.md;function kk(){var a=jk();return gc(a.Nc)};function lk(a,b,c,d){return null!=a?null!=b?mk(a,b,c,d):nk(a):ok()}function pk(a){var b="";try{b=JSON.stringify(a)}catch(c){}return b}function qk(a){var b=jk();a=new uc("ns_"+a);return b.md(a)?b.b(a):null}function ok(){var a={};kk().forEach(function(b){"ns_"==b.substring(0,3)&&(b=b.substring(3),a[b]=qk(b).b(Bc).version())});return pk(a)}function nk(a){a=qk(a);var b={};if(null!=a){var c=a.b(xc);a.b(Bc).oa().forEach(function(a){b[a.getName()]=c.get(nf(a)).Y().ia})}return pk(b)}
function mk(a,b,c,d){var e=qk(a);a=[];if(null!=e){var f=null;try{f=e.b(Bc).table(b)}catch(h){}null!=f&&(b=e.b(xc),e=e.b(wc),c=b.get(nf(f)).Va(void 0,!1,c,d),c.length&&(a=Ef(e,c).map(function(a){return a.m})))}return pk(a)};function rk(a,b){this.Qd=ee();this.me=a;this.od=b;this.K=sk(this)}function sk(a){if(0<a.me.f.length)return a.me.f;var b=[];a.me.from.forEach(function(a){a.lb().forEach(function(a){b.push(a)})});return b}rk.prototype.$=function(a,b){return this.K.every(function(c){return 6==c.G()||0==c.G()?H(a,c)===H(b,c):fe(this.Qd,c.G(),"eq")(H(a,c),H(b,c))},this)};
function tk(a,b,c){var d=null===b?[]:b.entries,e=pb(d,c.entries,a.$.bind(a),function(a){return d[a]});b=[];for(var f=0,h=0;h<d.length;h++){var l=d[h];e[f]==l?f++:(l=a.od.splice(f,1),l=uk(h,l,0,a.od),b.push(l))}e=pb(d,c.entries,a.$.bind(a),function(a,b){return c.entries[b]});for(h=f=0;h<c.entries.length;h++)l=c.entries[h],e[f]==l?f++:(a.od.splice(h,0,l.va.m),l=uk(h,[],1,a.od),b.push(l));return b}function uk(a,b,c,d){return{addedCount:c,index:a,object:d,removed:b,type:"splice"}};function vk(){this.fc=y()}vk.prototype.Cd=function(a,b){var c=ka(a.query).toString(),d=this.fc.get(c)||null;null===d&&(d=new wk(a),this.fc.set(c,d));d.Cd(b)};vk.prototype.ne=function(a,b){a=ka(a.query).toString();var c=this.fc.get(a)||null;c.ne(b);0<c.Hc.size||this.fc.delete(a)};function Ie(a,b){var c=B();b.forEach(function(a){c.add(a.getName())});var d=[];a.fc.forEach(function(a){a=a.Bc();a.context.from.some(function(a){return c.has(a.getName())})&&d.push(a)});return d}
function Ge(a,b,c){b=ka(null!=b.Wc?b.Wc:b).toString();a=a.fc.get(b)||null;null!==a&&xk(a,c)}function wk(a){this.Hf=a;this.Hc=B();this.yg=[];this.bf=null;this.Rf=new rk(a.query,this.yg)}wk.prototype.Cd=function(a){this.Hc.has(a)||this.Hc.add(a)};wk.prototype.ne=function(a){return this.Hc.delete(a)};wk.prototype.Bc=function(){var a=this.Hf;return{context:a.query,je:ji(a)}};function xk(a,b){var c=tk(a.Rf,a.bf,b);a.bf=b;0<c.length&&a.Hc.forEach(function(a){a(c)})};function yk(a,b){var c=a.b(Bc),d=b||{};b=new Df(c);a.rb(wc,b);b=null;var e=!1;null!=d.storeType?b=d.storeType:(b=ec(),b=b.fg?0:b.Ug?4:1);switch(b){case 0:b=new hf(a,c);break;case 1:b=new qf(c);break;case 5:b=new sf(c);break;case 4:b=new Af(a,c,d.webSqlDbSize);break;case 3:b=new Ve(c,d.firebase);e=!0;break;default:throw new D(300);}a.rb(vc,b);var f=new Eg;a.rb(xc,f);return b.Ea(d.onUpgrade).then(function(){var b=new Vj(a);a.rb(yc,b);b=new dk;a.rb(zc,b);b=new vk;a.rb(Ac,b);return f.Ea(c)}).then(function(){if(e){var b=
new Ke(a);b.Oa.subscribe(b.ee.bind(b))}d.enableInspector&&(window.top["#lfInspect"]=lk);return(new xg(a)).Ea(c)})};function zk(a){this.c=a;this.g=a.b(Bc);this.aa=B(this.g.oa());this.Db=w()}function Ak(a){var b=a.c.b(xc),c=a.c.b(wc),d={};a.g.oa().forEach(function(a){var e=b.get(nf(a)).Va(),e=Ef(c,e).map(function(a){return a.m});d[a.getName()]=e});return{name:a.g.name(),version:a.g.version(),tables:d}}m=zk.prototype;m.exec=function(){var a=Ak(this),a=new Rd(new hc(-1,a),!0);return v([new G([a],[])])};m.G=k(0);m.da=g("aa");m.W=function(){return ka(this)};m.getPriority=k(0);function Bk(a,b){this.c=a;this.g=a.b(Bc);this.aa=B(this.g.oa());this.Db=w();this.Ba=b;this.Oa=a.b(vc);this.V=a.b(wc);this.C=a.b(xc)}m=Bk.prototype;
m.exec=function(){if(!(this.Oa instanceof hf||this.Oa instanceof qf||this.Oa instanceof Af))throw new D(300);var a;a:{a=this.g.oa();for(var b=0;b<a.length;++b)if(0<this.C.get(nf(a[b])).Y().ia){a=!1;break a}a=!0}if(!a)throw new D(110);if(this.g.name()!=this.Ba.name||this.g.version()!=this.Ba.version)throw new D(111);if(null==this.Ba.tables)throw new D(112);return Ck(this)};m.G=k(1);m.da=g("aa");m.W=function(){return ka(this)};m.getPriority=k(0);
function Ck(a){var b=new ud(a.c,a.aa),b=a.Oa.Fb(a.G(),C(a.aa),b),c;for(c in a.Ba.tables){var d=a.g.table(c),e=a.Ba.tables[c].map(function(a){return d.xb(a)}),f=b.I(c,d.kb,0);a.V.Wb(c,e);var h=a.C.lc.get(c)||[];e.forEach(function(a){h.forEach(function(b){var c=a.nb(b.getName());b.add(c,a.id())})});f.put(e)}return b.ka()};function Dk(a,b){this.c=a;this.Oa=a.b(vc);this.Ia=a.b(zc);this.Ib=a.b(Ac);this.aa=B(b);this.Ra=new ud(this.c,this.aa);this.Db=w();this.xc=w();this.ze=w()}m=Dk.prototype;m.exec=function(){this.ze.resolve();return this.xc.ha};m.G=k(1);m.da=g("aa");m.W=function(){return ka(this)};m.getPriority=k(2);function Ek(a){Je(a.Ia,a);return a.ze.ha}
function Fk(a,b){b=b.Bc();return b.je.bb().exec(a.Ra,b.context).then(function(a){return Jd(a[0])},function(a){this.Ra.Jb();var b=new jb(a.name);this.xc.reject(b);throw a;}.bind(a))}m.ka=function(){this.ja=this.Oa.Fb(this.G(),C(this.aa),this.Ra);this.ja.ka().then(function(){this.Mc();this.xc.resolve()}.bind(this),function(a){this.Ra.Jb();this.xc.reject(a)}.bind(this));return this.Db.ha};m.Jb=function(){this.Ra.Jb();this.xc.resolve();return this.Db.ha};
m.Mc=function(){var a=Ie(this.Ib,this.aa);0!=a.length&&(a=new Fe(this.c,a),Je(this.Ia,a))};m.Y=function(){var a=null;null!=this.ja&&(a=this.ja.Y());return null===a?new A(!1,0,0,0,0):a};function V(a){this.c=a;this.Ia=a.b(zc);this.Kb=null;this.Ta=0;0==Gk.size&&(Gk.set(0,B([1,4])),Gk.set(1,B([2])),Gk.set(2,B([3,5,6])),Gk.set(3,B([2,7])),Gk.set(4,B([7])),Gk.set(5,B([7])),Gk.set(6,B([7])))}q("lf.proc.Transaction",V);var Gk=y();function Hk(a,b){var c=Gk.get(a.Ta)||null;if(null===c||!c.has(b))throw new D(107,a.Ta,b);a.Ta=b}
V.prototype.exec=function(a){Hk(this,4);var b=[];try{a.forEach(function(a){a.ab();b.push(a.Bc())},this)}catch(c){return Hk(this,7),bb(c)}this.Kb=new Mh(this.c,b);return Je(this.Ia,this.Kb).then(function(a){Hk(this,7);return a.map(function(a){return Jd(a)})}.bind(this),function(a){Hk(this,7);throw a;}.bind(this))};V.prototype.exec=V.prototype.exec;V.prototype.Ff=function(a){Hk(this,1);this.Kb=new Dk(this.c,a);return Ek(this.Kb).then(function(){Hk(this,2)}.bind(this))};V.prototype.begin=V.prototype.Ff;
V.prototype.Ef=function(a){Hk(this,3);try{a.ab()}catch(b){return Hk(this,7),bb(b)}return Fk(this.Kb,a).then(function(a){Hk(this,2);return a}.bind(this),function(a){Hk(this,7);throw a;}.bind(this))};V.prototype.attach=V.prototype.Ef;V.prototype.ka=function(){Hk(this,5);return this.Kb.ka().then(function(){Hk(this,7)}.bind(this))};V.prototype.commit=V.prototype.ka;V.prototype.Jb=function(){Hk(this,6);return this.Kb.Jb().then(function(){Hk(this,7)}.bind(this))};V.prototype.rollback=V.prototype.Jb;
V.prototype.Y=function(){if(7!=this.Ta)throw new D(105);return this.Kb.Y()};V.prototype.stats=V.prototype.Y;function W(a){this.c=a;this.g=a.b(Bc);this.hd=!1}q("lf.proc.Database",W);W.prototype.Ea=function(a){this.c.rb(Bc,this.g);return yk(this.c,a).then(function(){this.hd=!0;this.Ia=this.c.b(zc);return this}.bind(this))};W.prototype.init=W.prototype.Ea;W.prototype.zb=g("g");W.prototype.getSchema=W.prototype.zb;function Ik(a){if(!a.hd)throw new D(2);}W.prototype.select=function(a){Ik(this);return new U(this.c,1!=arguments.length||null!=arguments[0]?Array.prototype.slice.call(arguments):[])};
W.prototype.select=W.prototype.select;W.prototype.Ab=function(){Ik(this);return new li(this.c)};W.prototype.insert=W.prototype.Ab;W.prototype.Wd=function(){Ik(this);return new li(this.c,!0)};W.prototype.insertOrReplace=W.prototype.Wd;W.prototype.update=function(a){Ik(this);return new vi(this.c,a)};W.prototype.update=W.prototype.update;W.prototype.delete=function(){Ik(this);return new ki(this.c)};W.prototype["delete"]=W.prototype.delete;
W.prototype.observe=function(a,b){Ik(this);this.c.b(Ac).Cd(a,b)};W.prototype.observe=W.prototype.observe;W.prototype.unobserve=function(a,b){Ik(this);this.c.b(Ac).ne(a,b)};W.prototype.unobserve=W.prototype.unobserve;W.prototype.Nf=function(){Ik(this);return new V(this.c)};W.prototype.createTransaction=W.prototype.Nf;W.prototype.close=function(){try{this.c.b(vc).close()}catch(a){}this.c.clear();this.hd=!1};W.prototype.close=W.prototype.close;
W.prototype.Xf=function(){Ik(this);var a=new zk(this.c);return Je(this.Ia,a).then(function(a){return Jd(a[0])[0]})};W.prototype["export"]=W.prototype.Xf;W.prototype.import=function(a){Ik(this);a=new Bk(this.c,a);return Je(this.Ia,a).then(k(null))};W.prototype["import"]=W.prototype.import;function X(a,b,c,d,e,f){this.U=a;this.A=b;this.Ye=c;this.We=d;this.xf=e;this.Ka=f||null}q("lf.schema.BaseColumn",X);m=X.prototype;m.getName=g("A");m.j=function(){return Td(this.U)+"."+this.A};m.toString=function(){return this.j()};m.I=g("U");m.G=g("xf");X.prototype.getType=X.prototype.G;X.prototype.Da=function(){null==this.ta&&(this.ta=[],this.I().Da().forEach(function(a){-1!=a.f.map(function(a){return a.ba.getName()}).indexOf(this.A)&&this.ta.push(a)},this));return this.ta};
X.prototype.Ca=function(){if(!n(this.fa)){var a=this.Da().filter(function(a){return 1!=a.f.length?!1:a.f[0].ba.getName()==this.getName()},this);this.fa=0<a.length?a[0]:null}return this.fa};X.prototype.hc=g("We");X.prototype.isNullable=X.prototype.hc;X.prototype.Dc=g("Ye");X.prototype.Qa=function(a){return Xg(this,a,"eq")};X.prototype.eq=X.prototype.Qa;X.prototype.ef=function(a){return Xg(this,a,"neq")};X.prototype.neq=X.prototype.ef;X.prototype.rg=function(a){return Xg(this,a,"lt")};
X.prototype.lt=X.prototype.rg;X.prototype.sg=function(a){return Xg(this,a,"lte")};X.prototype.lte=X.prototype.sg;X.prototype.ag=function(a){return Xg(this,a,"gt")};X.prototype.gt=X.prototype.ag;X.prototype.bg=function(a){return Xg(this,a,"gte")};X.prototype.gte=X.prototype.bg;X.prototype.match=function(a){return Xg(this,a,"match")};X.prototype.match=X.prototype.match;X.prototype.Gf=function(a,b){return Xg(this,[a,b],"between")};X.prototype.between=X.prototype.Gf;
X.prototype.cg=function(a){return Xg(this,a,"in")};X.prototype["in"]=X.prototype.cg;X.prototype.mg=function(){return this.Qa(null)};X.prototype.isNull=X.prototype.mg;X.prototype.lg=function(){return this.ef(null)};X.prototype.isNotNull=X.prototype.lg;X.prototype.rc=function(a){return new X(this.U,this.A,this.Ye,this.We,this.xf,a)};X.prototype.as=X.prototype.rc;function Jk(a){this.g=a;this.Id=new cd;this.oe=new cd;this.gf=new cd;this.Ie=y();this.h=new cd;this.Ee=new cd;this.mf=new cd;this.He=new cd;Kk(this)}function Kk(a){a.g.oa().forEach(function(a){var b=a.getName();a.Mb.Ud.forEach(function(c){this.gf.set(b,this.g.table(c.Xa));this.h.set(c.Xa,a);0==c.action?(this.oe.set(c.Xa,c),this.mf.set(c.Xa,a)):(this.Id.set(c.Xa,c),this.Ee.set(c.Xa,a));this.Ie.set(a.getName()+"."+c.vb,c.Xa);this.He.set(c.Xa+"."+c.Jc,a.getName())},this)},a)}
function kd(a,b,c){if(null!=c)return 1==c?a.Id.get(b):a.oe.get(b);c=a.Id.get(b);a=a.oe.get(b);return null===c&&null===a?null:(c||[]).concat(a||[])}function Sh(a,b){a=b.get(a);return null===a?[]:a}function Uh(a,b){var c=B();b.forEach(function(a){(a=this.Ie.get(a))&&c.add(a)},a);return C(c).map(function(a){return this.g.table(a)},a)}function Qh(a,b,c){return null!=c?0==c?Sh(b,a.mf):Sh(b,a.Ee):Sh(b,a.h)}
function Vh(a,b){var c=B();b.forEach(function(a){(a=this.He.get(a))&&a.forEach(function(a){c.add(a)})},a);return C(c).map(function(a){return this.g.table(a)},a)};function Lk(a,b,c){this.sd=a;this.xg=b;this.Ud=c}q("lf.schema.Constraint",Lk);Lk.prototype.$f=g("sd");Lk.prototype.getPrimaryKey=Lk.prototype.$f;Lk.prototype.Zf=g("Ud");Lk.prototype.getForeignKeys=Lk.prototype.Zf;function Mk(a,b,c){var d=a.ref.split(".");if(2!=d.length)throw new D(540,c);this.Ge=b;this.vb=a.local;this.Xa=d[0];this.Jc=d[1];this.name=b+"."+c;this.action=a.action;this.timing=a.timing};function Y(a){Nk(a);this.Qd=ee();this.A=a;this.K=y();this.zd=B();this.nc=B();this.nd=B();this.Fa=null;this.ta=y();this.rd=!1;this.yb=[]}q("lf.schema.TableBuilder",Y);function Ok(a){this.name=a.name;this.order=a.order;this.autoIncrement=a.autoIncrement}var Pk=B([0,6]);function Nk(a){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(a))throw new D(502,a);}function Qk(a,b){if(b==a.A)throw new D(546,b);if(a.K.has(b)||a.ta.has(b)||a.nc.has(b))throw new D(503,a.A+"."+b);}
function Rk(a,b){var c=!1;b.forEach(function(a){var b=this.K.get(a.name);c=c||a.autoIncrement;if(a.autoIncrement&&3!=b)throw new D(504);},a);if(c&&1<b.length)throw new D(505);}function Sk(a){if(null!==a.Fa){var b=a.ta.get(a.Fa).map(function(a){return a.name}),c=0;if(a.yb.some(function(a,e){c=e;return-1!=b.indexOf(a.vb)},a))throw new D(543,a.yb[c].name);}}
function Tk(a){if(null!==a.Fa){var b=function(a){return a.name},c=JSON.stringify(a.ta.get(a.Fa).map(b));a.ta.forEach(function(a,e){if(e!=this.Fa&&(a=a.map(b),JSON.stringify(a)==c))throw new D(544,this.A+"."+e);},a)}}function Uk(a){null===a.Fa||a.ta.get(a.Fa).forEach(function(a){if(this.nd.has(a.name))throw new D(545,this.A+"."+a.name);},a)}Y.prototype.zf=function(a,b){Nk(a);Qk(this,a);this.K.set(a,b);Pk.has(b)&&this.Be([a]);return this};Y.prototype.addColumn=Y.prototype.zf;
Y.prototype.Bf=function(a,b){var c=this.A;this.Fa="pk"+(c[0].toUpperCase()+c.substring(1));Nk(this.Fa);Qk(this,this.Fa);a=Vk(this,a,!0,void 0,b);Rk(this,a);1==a.length&&this.zd.add(a[0].name);this.nc.add(this.Fa);this.ta.set(this.Fa,a);return this};Y.prototype.addPrimaryKey=Y.prototype.Bf;
Y.prototype.Af=function(a,b){Nk(a);Qk(this,a);b=new Mk(b,this.A,a);n(b.action)||(b.action=0);n(b.timing)||(b.timing=0);if(1==b.action&&1==b.timing)throw new D(506);if(!this.K.has(b.vb))throw new D(540,a);this.yb.push(b);this.Ae(a,[b.vb],this.zd.has(b.vb));return this};Y.prototype.addForeignKey=Y.prototype.Af;Y.prototype.Cf=function(a,b){Nk(a);Qk(this,a);b=Vk(this,b,!0);1==b.length&&(this.zd.add(b[0].name),Wk(this,b[0].name));this.ta.set(a,b);this.nc.add(a);return this};Y.prototype.addUnique=Y.prototype.Cf;
function Wk(a,b){a.yb.forEach(function(a){a.vb==b&&this.nc.add(a.name.split(".")[1])},a)}Y.prototype.Be=function(a){Vk(this,a,!1).forEach(function(a){this.nd.add(a.name)},this);return this};Y.prototype.addNullable=Y.prototype.Be;Y.prototype.Ae=function(a,b,c,d){Nk(a);Qk(this,a);b=Vk(this,b,!0,d);c&&this.nc.add(a);this.ta.set(a,b);return this};Y.prototype.addIndex=Y.prototype.Ae;Y.prototype.Cb=ba("rd");Y.prototype.persistentIndex=Y.prototype.Cb;
Y.prototype.zb=function(){Sk(this);Tk(this);Uk(this);return new (Xk(this))};Y.prototype.getSchema=Y.prototype.zb;function Vk(a,b,c,d,e){var f=b,f="string"==typeof b[0]?b.map(function(a){return new Ok({name:a,order:null!=d?d:1,autoIncrement:e||!1})}):b.map(function(a){return new Ok(a)});f.forEach(function(a){if(!this.K.has(a.name))throw new D(508,this.A,a.name);if(c){var b=this.K.get(a.name);if(0==b||6==b)throw new D(509,this.A,a.name);}},a);return f}
function Xk(a){function b(){function b(b){return a.ta.get(b).map(function(a){return{ba:this[a.name],order:a.order,autoIncrement:a.autoIncrement}},this)}var d=gc(a.K).map(function(b){this[b]=new X(this,b,a.zd.has(b),a.nd.has(b),a.K.get(b));return this[b]},this),e=gc(a.ta).map(function(c){return new Zg(a.A,c,a.nc.has(c),b.call(this,c))},this);Q.call(this,a.A,d,e,a.rd);var f=null===a.Fa?null:new Zg(a.A,a.Fa,!0,b.call(this,a.Fa)),h=d.filter(function(b){return!a.nd.has(b.getName())});this.Mb=new Lk(f,
h,a.yb);this.qf=Yk(a,d,e)}r(b,Q);b.prototype.xb=function(a){return new this.qf(ic++,a)};b.prototype.createRow=b.prototype.xb;b.prototype.kb=function(a){var b={};this.lb().forEach(function(c){var d=c.getName();c=c.G();var e=a.value[d];if(0==c)if(c=e,null!=c&&""!=c){0!=c.length%2&&(c="0"+c);for(var e=new ArrayBuffer(c.length/2),l=new Uint8Array(e),p=0,L=0;p<c.length;p+=2)l[L++]=parseInt(c.substr(p,2),16);c=e}else c=null;else c=2==c?null!=e?new Date(e):null:e;b[d]=c},this);return new this.qf(a.id,b)};
b.prototype.deserializeRow=b.prototype.kb;b.prototype.Ne=g("Mb");b.prototype.getConstraint=b.prototype.Ne;return b}
function Yk(a,b,c){function d(a,d){this.K=b;this.ta=c;hc.call(this,a,d)}r(d,hc);d.prototype.Ke=function(){var a={};this.K.forEach(function(b){a[b.getName()]=b.hc()?null:bd[b.G()]});return a};d.prototype.wf=function(){var a={};this.K.forEach(function(b){var c=b.getName();b=b.G();var d=this.m[c];a[c]=0==b?null!=d?lc(d):null:2==b?null!=d?d.getTime():null:6==b?null!=d?d:null:d},this);return a};var e=function(a){var b=this.K.get(a.getName()),c=this.Qd.Ze.get(b)||null;return function(b){return c(b[a.getName()])}}.bind(a),
f=function(a){var b=a.map(function(a){return e(a.ba)});return function(a){return b.map(function(b){return b(a)})}}.bind(a),h={};c.forEach(function(a){var b=a.j();a=1==a.f.length?e(a.f[0].ba):f(a.f);h[b]=a});d.prototype.nb=function(a){return-1!=a.indexOf("#")?this.id():h.hasOwnProperty(a)?h[a](this.m):null};return d};function Zk(a,b){this.g=new Z(a,b);this.tb=y();this.yc=!1;this.i=null;this.Yc=!1}q("lf.schema.Builder",Zk);function $k(a,b){b.yb.forEach(function(a){var c=a.Xa;if(!this.tb.has(c))throw new D(536,a.name);var c=this.tb.get(c).zb(),e=a.Jc;if(!c.hasOwnProperty(e))throw new D(537,a.name);if(b.zb()[a.vb].G()!=c[e].G())throw new D(538,a.name);if(!c[e].Dc())throw new D(539,a.name);},a)}
Zk.prototype.Kf=function(a){a.yb.forEach(function(a){this.tb.get(a.Xa).yb.forEach(function(b){if(b.vb==a.Jc)throw new D(534,a.name);},this)},this)};function al(a){a.yc||(a.tb.forEach(function(a){$k(this,a);a=a.zb();this.g.M.set(a.getName(),a)},a),z(a.tb).forEach(a.Kf,a),bl(a),a.tb.clear(),a.yc=!0)}function cl(a,b,c){b.ye||(b.ye=!0,b.fe=!0,b.Le.forEach(function(a){a=c.get(a);if(!a.ye)cl(this,a,c);else if(a.fe&&b!=a)throw new D(533);},a));b.fe=!1}
function bl(a){var b=y();a.g.M.forEach(function(a,d){b.set(d,new dl(d))},a);a.tb.forEach(function(a,d){a.yb.forEach(function(a){b.get(a.Xa).Le.add(d)})});z(b).forEach(function(a){cl(this,a,b)},a)}function dl(a){this.fe=this.ye=!1;this.Le=B();this.mc=a}Zk.prototype.zb=function(){this.yc||al(this);return this.g};Zk.prototype.getSchema=Zk.prototype.zb;Zk.prototype.Qe=function(){var a=new uc("ns_"+this.g.name()),b=jk(),c;b.md(a)?c=b.b(a):(c=new hk,b.rb(a,c));return c};Zk.prototype.getGlobal=Zk.prototype.Qe;
Zk.prototype.connect=function(a){if(this.Yc||null!==this.i&&this.i.hd)throw new D(113);this.Yc=!0;if(null===this.i){var b=this.Qe();b.md(Bc)||b.rb(Bc,this.zb());this.i=new W(b)}return this.i.Ea(a).then(function(a){this.Yc=!1;return a}.bind(this),function(a){this.Yc=!1;throw a;}.bind(this))};Zk.prototype.connect=Zk.prototype.connect;Zk.prototype.Mf=function(a){if(this.tb.has(a))throw new D(503,a);if(this.yc)throw new D(535);this.tb.set(a,new Y(a));return this.tb.get(a)};Zk.prototype.createTable=Zk.prototype.Mf;
Zk.prototype.se=function(a){if(this.yc)throw new D(535);this.g.se(a);return this};Zk.prototype.setPragma=Zk.prototype.se;function Z(a,b){this.A=a;this.Ua=b;this.M=y();this.ke={Sf:!1}}q("lf.schema.DatabaseSchema",Z);Z.prototype.name=g("A");Z.prototype.name=Z.prototype.name;Z.prototype.version=g("Ua");Z.prototype.version=Z.prototype.version;Z.prototype.oa=function(){return z(this.M)};Z.prototype.tables=Z.prototype.oa;Z.prototype.table=function(a){if(!this.M.has(a))throw new D(101,a);return this.M.get(a)};
Z.prototype.table=Z.prototype.table;Z.prototype.info=function(){this.Ve||(this.Ve=new Jk(this));return this.Ve};Z.prototype.Fg=g("ke");Z.prototype.pragma=Z.prototype.Fg;Z.prototype.se=ba("ke");q("lf.schema.create",function(a,b){return new Zk(a,b)});u.prototype.catch=u.prototype.ve;u.prototype["catch"]=u.prototype.catch;
try{if(module){module.exports=lf;}}catch(e){}}.bind(window))();


},{}],16:[function(require,module,exports){
(function(){
  var crypt = require('crypt'),
      utf8 = require('charenc').utf8,
      isBuffer = require('is-buffer'),
      bin = require('charenc').bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();

},{"charenc":12,"crypt":13,"is-buffer":14}],17:[function(require,module,exports){
//! moment.js
//! version : 2.20.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        }
        else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function mod(n, x) {
    return ((n % x) + x) % x;
}

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            var aliasedRequire = require;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {}
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, tmpLocale, parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, expectedWeekday, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100, h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    switch (units) {
        case 'year': output = monthDiff(this, that) / 12; break;
        case 'month': output = monthDiff(this, that); break;
        case 'quarter': output = monthDiff(this, that) / 3; break;
        case 'second': output = (this - that) / 1e3; break; // 1000
        case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
        case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
        case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
        case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default: output = this - that;
    }

    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true;
    var m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this._d.valueOf()).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function clone$1 () {
    return createDuration(this);
}

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function sign(x) {
    return ((x > 0) - (x < 0)) || +x;
}

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    var totalSign = total < 0 ? '-' : '';
    var ymSign = sign(this._months) !== sign(total) ? '-' : '';
    var daysSign = sign(this._days) !== sign(total) ? '-' : '';
    var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return totalSign + 'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.clone          = clone$1;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.20.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

// currently HTML5 input type only supports 24-hour formats
hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',                             // <input type="date" />
    TIME: 'HH:mm',                                  // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
    WEEK: 'YYYY-[W]WW',                             // <input type="week" />
    MONTH: 'YYYY-MM'                                // <input type="month" />
};

return hooks;

})));

},{}],18:[function(require,module,exports){
/*!
	Papa Parse
	v4.3.6
	https://github.com/mholt/PapaParse
	License: MIT
*/
(function(root, factory)
{
	if (typeof define === 'function' && define.amd)
	{
		// AMD. Register as an anonymous module.
		define([], factory);
	}
	else if (typeof module === 'object' && typeof exports !== 'undefined')
	{
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	}
	else
	{
		// Browser globals (root is window)
		root.Papa = factory();
	}
}(this, function()
{
	'use strict';

	var global = (function () {
		// alternative method, similar to `Function('return this')()`
		// but without using `eval` (which is disabled when
		// using Content Security Policy).

		if (typeof self !== 'undefined') { return self; }
		if (typeof window !== 'undefined') { return window; }
		if (typeof global !== 'undefined') { return global; }

		// When running tests none of the above have been defined
		return {};
	})();


	var IS_WORKER = !global.document && !!global.postMessage,
		IS_PAPA_WORKER = IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search),
		LOADED_SYNC = false, AUTO_SCRIPT_PATH;
	var workers = {}, workerIdCounter = 0;

	var Papa = {};

	Papa.parse = CsvToJson;
	Papa.unparse = JsonToCsv;

	Papa.RECORD_SEP = String.fromCharCode(30);
	Papa.UNIT_SEP = String.fromCharCode(31);
	Papa.BYTE_ORDER_MARK = '\ufeff';
	Papa.BAD_DELIMITERS = ['\r', '\n', '"', Papa.BYTE_ORDER_MARK];
	Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
	Papa.SCRIPT_PATH = null;	// Must be set by your code if you use workers and this lib is loaded asynchronously

	// Configurable chunk sizes for local and remote files, respectively
	Papa.LocalChunkSize = 1024 * 1024 * 10;	// 10 MB
	Papa.RemoteChunkSize = 1024 * 1024 * 5;	// 5 MB
	Papa.DefaultDelimiter = ',';			// Used if not specified and detection fails

	// Exposed for testing and development only
	Papa.Parser = Parser;
	Papa.ParserHandle = ParserHandle;
	Papa.NetworkStreamer = NetworkStreamer;
	Papa.FileStreamer = FileStreamer;
	Papa.StringStreamer = StringStreamer;
	Papa.ReadableStreamStreamer = ReadableStreamStreamer;

	if (global.jQuery)
	{
		var $ = global.jQuery;
		$.fn.parse = function(options)
		{
			var config = options.config || {};
			var queue = [];

			this.each(function(idx)
			{
				var supported = $(this).prop('tagName').toUpperCase() === 'INPUT'
								&& $(this).attr('type').toLowerCase() === 'file'
								&& global.FileReader;

				if (!supported || !this.files || this.files.length === 0)
					return true;	// continue to next input element

				for (var i = 0; i < this.files.length; i++)
				{
					queue.push({
						file: this.files[i],
						inputElem: this,
						instanceConfig: $.extend({}, config)
					});
				}
			});

			parseNextFile();	// begin parsing
			return this;		// maintains chainability


			function parseNextFile()
			{
				if (queue.length === 0)
				{
					if (isFunction(options.complete))
						options.complete();
					return;
				}

				var f = queue[0];

				if (isFunction(options.before))
				{
					var returned = options.before(f.file, f.inputElem);

					if (typeof returned === 'object')
					{
						if (returned.action === 'abort')
						{
							error('AbortError', f.file, f.inputElem, returned.reason);
							return;	// Aborts all queued files immediately
						}
						else if (returned.action === 'skip')
						{
							fileComplete();	// parse the next file in the queue, if any
							return;
						}
						else if (typeof returned.config === 'object')
							f.instanceConfig = $.extend(f.instanceConfig, returned.config);
					}
					else if (returned === 'skip')
					{
						fileComplete();	// parse the next file in the queue, if any
						return;
					}
				}

				// Wrap up the user's complete callback, if any, so that ours also gets executed
				var userCompleteFunc = f.instanceConfig.complete;
				f.instanceConfig.complete = function(results)
				{
					if (isFunction(userCompleteFunc))
						userCompleteFunc(results, f.file, f.inputElem);
					fileComplete();
				};

				Papa.parse(f.file, f.instanceConfig);
			}

			function error(name, file, elem, reason)
			{
				if (isFunction(options.error))
					options.error({name: name}, file, elem, reason);
			}

			function fileComplete()
			{
				queue.splice(0, 1);
				parseNextFile();
			}
		}
	}


	if (IS_PAPA_WORKER)
	{
		global.onmessage = workerThreadReceivedMessage;
	}
	else if (Papa.WORKERS_SUPPORTED)
	{
		AUTO_SCRIPT_PATH = getScriptPath();

		// Check if the script was loaded synchronously
		if (!document.body)
		{
			// Body doesn't exist yet, must be synchronous
			LOADED_SYNC = true;
		}
		else
		{
			document.addEventListener('DOMContentLoaded', function () {
				LOADED_SYNC = true;
			}, true);
		}
	}




	function CsvToJson(_input, _config)
	{
		_config = _config || {};
		var dynamicTyping = _config.dynamicTyping || false;
		if (isFunction(dynamicTyping)) {
			_config.dynamicTypingFunction = dynamicTyping;
			// Will be filled on first row call
			dynamicTyping = {};
		}
		_config.dynamicTyping = dynamicTyping;

		if (_config.worker && Papa.WORKERS_SUPPORTED)
		{
			var w = newWorker();

			w.userStep = _config.step;
			w.userChunk = _config.chunk;
			w.userComplete = _config.complete;
			w.userError = _config.error;

			_config.step = isFunction(_config.step);
			_config.chunk = isFunction(_config.chunk);
			_config.complete = isFunction(_config.complete);
			_config.error = isFunction(_config.error);
			delete _config.worker;	// prevent infinite loop

			w.postMessage({
				input: _input,
				config: _config,
				workerId: w.id
			});

			return;
		}

		var streamer = null;
		if (typeof _input === 'string')
		{
			if (_config.download)
				streamer = new NetworkStreamer(_config);
			else
				streamer = new StringStreamer(_config);
		}
		else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on))
		{
			streamer = new ReadableStreamStreamer(_config);
		}
		else if ((global.File && _input instanceof File) || _input instanceof Object)	// ...Safari. (see issue #106)
			streamer = new FileStreamer(_config);

		return streamer.stream(_input);
	}






	function JsonToCsv(_input, _config)
	{
		var _output = '';
		var _fields = [];

		// Default configuration

		/** whether to surround every datum with quotes */
		var _quotes = false;

		/** whether to write headers */
		var _writeHeader = true;

		/** delimiting character */
		var _delimiter = ',';

		/** newline character(s) */
		var _newline = '\r\n';

		/** quote character */
		var _quoteChar = '"';

		unpackConfig();

		var quoteCharRegex = new RegExp(_quoteChar, 'g');

		if (typeof _input === 'string')
			_input = JSON.parse(_input);

		if (_input instanceof Array)
		{
			if (!_input.length || _input[0] instanceof Array)
				return serialize(null, _input);
			else if (typeof _input[0] === 'object')
				return serialize(objectKeys(_input[0]), _input);
		}
		else if (typeof _input === 'object')
		{
			if (typeof _input.data === 'string')
				_input.data = JSON.parse(_input.data);

			if (_input.data instanceof Array)
			{
				if (!_input.fields)
					_input.fields =  _input.meta && _input.meta.fields;

				if (!_input.fields)
					_input.fields =  _input.data[0] instanceof Array
									? _input.fields
									: objectKeys(_input.data[0]);

				if (!(_input.data[0] instanceof Array) && typeof _input.data[0] !== 'object')
					_input.data = [_input.data];	// handles input like [1,2,3] or ['asdf']
			}

			return serialize(_input.fields || [], _input.data || []);
		}

		// Default (any valid paths should return before this)
		throw 'exception: Unable to serialize unrecognized input';


		function unpackConfig()
		{
			if (typeof _config !== 'object')
				return;

			if (typeof _config.delimiter === 'string'
				&& _config.delimiter.length === 1
				&& Papa.BAD_DELIMITERS.indexOf(_config.delimiter) === -1)
			{
				_delimiter = _config.delimiter;
			}

			if (typeof _config.quotes === 'boolean'
				|| _config.quotes instanceof Array)
				_quotes = _config.quotes;

			if (typeof _config.newline === 'string')
				_newline = _config.newline;

			if (typeof _config.quoteChar === 'string')
				_quoteChar = _config.quoteChar;

			if (typeof _config.header === 'boolean')
				_writeHeader = _config.header;
		}


		/** Turns an object's keys into an array */
		function objectKeys(obj)
		{
			if (typeof obj !== 'object')
				return [];
			var keys = [];
			for (var key in obj)
				keys.push(key);
			return keys;
		}

		/** The double for loop that iterates the data and writes out a CSV string including header row */
		function serialize(fields, data)
		{
			var csv = '';

			if (typeof fields === 'string')
				fields = JSON.parse(fields);
			if (typeof data === 'string')
				data = JSON.parse(data);

			var hasHeader = fields instanceof Array && fields.length > 0;
			var dataKeyedByField = !(data[0] instanceof Array);

			// If there a header row, write it first
			if (hasHeader && _writeHeader)
			{
				for (var i = 0; i < fields.length; i++)
				{
					if (i > 0)
						csv += _delimiter;
					csv += safe(fields[i], i);
				}
				if (data.length > 0)
					csv += _newline;
			}

			// Then write out the data
			for (var row = 0; row < data.length; row++)
			{
				var maxCol = hasHeader ? fields.length : data[row].length;

				for (var col = 0; col < maxCol; col++)
				{
					if (col > 0)
						csv += _delimiter;
					var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
					csv += safe(data[row][colIdx], col);
				}

				if (row < data.length - 1)
					csv += _newline;
			}

			return csv;
		}

		/** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
		function safe(str, col)
		{
			if (typeof str === 'undefined' || str === null)
				return '';

			str = str.toString().replace(quoteCharRegex, _quoteChar+_quoteChar);

			var needsQuotes = (typeof _quotes === 'boolean' && _quotes)
							|| (_quotes instanceof Array && _quotes[col])
							|| hasAny(str, Papa.BAD_DELIMITERS)
							|| str.indexOf(_delimiter) > -1
							|| str.charAt(0) === ' '
							|| str.charAt(str.length - 1) === ' ';

			return needsQuotes ? _quoteChar + str + _quoteChar : str;
		}

		function hasAny(str, substrings)
		{
			for (var i = 0; i < substrings.length; i++)
				if (str.indexOf(substrings[i]) > -1)
					return true;
			return false;
		}
	}

	/** ChunkStreamer is the base prototype for various streamer implementations. */
	function ChunkStreamer(config)
	{
		this._handle = null;
		this._paused = false;
		this._finished = false;
		this._input = null;
		this._baseIndex = 0;
		this._partialLine = '';
		this._rowCount = 0;
		this._start = 0;
		this._nextChunk = null;
		this.isFirstChunk = true;
		this._completeResults = {
			data: [],
			errors: [],
			meta: {}
		};
		replaceConfig.call(this, config);

		this.parseChunk = function(chunk)
		{
			// First chunk pre-processing
			if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk))
			{
				var modifiedChunk = this._config.beforeFirstChunk(chunk);
				if (modifiedChunk !== undefined)
					chunk = modifiedChunk;
			}
			this.isFirstChunk = false;

			// Rejoin the line we likely just split in two by chunking the file
			var aggregate = this._partialLine + chunk;
			this._partialLine = '';

			var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);

			if (this._handle.paused() || this._handle.aborted())
				return;

			var lastIndex = results.meta.cursor;

			if (!this._finished)
			{
				this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
				this._baseIndex = lastIndex;
			}

			if (results && results.data)
				this._rowCount += results.data.length;

			var finishedIncludingPreview = this._finished || (this._config.preview && this._rowCount >= this._config.preview);

			if (IS_PAPA_WORKER)
			{
				global.postMessage({
					results: results,
					workerId: Papa.WORKER_ID,
					finished: finishedIncludingPreview
				});
			}
			else if (isFunction(this._config.chunk))
			{
				this._config.chunk(results, this._handle);
				if (this._paused)
					return;
				results = undefined;
				this._completeResults = undefined;
			}

			if (!this._config.step && !this._config.chunk) {
				this._completeResults.data = this._completeResults.data.concat(results.data);
				this._completeResults.errors = this._completeResults.errors.concat(results.errors);
				this._completeResults.meta = results.meta;
			}

			if (finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted))
				this._config.complete(this._completeResults, this._input);

			if (!finishedIncludingPreview && (!results || !results.meta.paused))
				this._nextChunk();

			return results;
		};

		this._sendError = function(error)
		{
			if (isFunction(this._config.error))
				this._config.error(error);
			else if (IS_PAPA_WORKER && this._config.error)
			{
				global.postMessage({
					workerId: Papa.WORKER_ID,
					error: error,
					finished: false
				});
			}
		};

		function replaceConfig(config)
		{
			// Deep-copy the config so we can edit it
			var configCopy = copy(config);
			configCopy.chunkSize = parseInt(configCopy.chunkSize);	// parseInt VERY important so we don't concatenate strings!
			if (!config.step && !config.chunk)
				configCopy.chunkSize = null;  // disable Range header if not streaming; bad values break IIS - see issue #196
			this._handle = new ParserHandle(configCopy);
			this._handle.streamer = this;
			this._config = configCopy;	// persist the copy to the caller
		}
	}


	function NetworkStreamer(config)
	{
		config = config || {};
		if (!config.chunkSize)
			config.chunkSize = Papa.RemoteChunkSize;
		ChunkStreamer.call(this, config);

		var xhr;

		if (IS_WORKER)
		{
			this._nextChunk = function()
			{
				this._readChunk();
				this._chunkLoaded();
			};
		}
		else
		{
			this._nextChunk = function()
			{
				this._readChunk();
			};
		}

		this.stream = function(url)
		{
			this._input = url;
			this._nextChunk();	// Starts streaming
		};

		this._readChunk = function()
		{
			if (this._finished)
			{
				this._chunkLoaded();
				return;
			}

			xhr = new XMLHttpRequest();

			if (this._config.withCredentials)
			{
				xhr.withCredentials = this._config.withCredentials;
			}

			if (!IS_WORKER)
			{
				xhr.onload = bindFunction(this._chunkLoaded, this);
				xhr.onerror = bindFunction(this._chunkError, this);
			}

			xhr.open('GET', this._input, !IS_WORKER);
			// Headers can only be set when once the request state is OPENED
			if (this._config.downloadRequestHeaders)
			{
				var headers = this._config.downloadRequestHeaders;

				for (var headerName in headers)
				{
					xhr.setRequestHeader(headerName, headers[headerName]);
				}
			}

			if (this._config.chunkSize)
			{
				var end = this._start + this._config.chunkSize - 1;	// minus one because byte range is inclusive
				xhr.setRequestHeader('Range', 'bytes='+this._start+'-'+end);
				xhr.setRequestHeader('If-None-Match', 'webkit-no-cache'); // https://bugs.webkit.org/show_bug.cgi?id=82672
			}

			try {
				xhr.send();
			}
			catch (err) {
				this._chunkError(err.message);
			}

			if (IS_WORKER && xhr.status === 0)
				this._chunkError();
			else
				this._start += this._config.chunkSize;
		}

		this._chunkLoaded = function()
		{
			if (xhr.readyState != 4)
				return;

			if (xhr.status < 200 || xhr.status >= 400)
			{
				this._chunkError();
				return;
			}

			this._finished = !this._config.chunkSize || this._start > getFileSize(xhr);
			this.parseChunk(xhr.responseText);
		}

		this._chunkError = function(errorMessage)
		{
			var errorText = xhr.statusText || errorMessage;
			this._sendError(errorText);
		}

		function getFileSize(xhr)
		{
			var contentRange = xhr.getResponseHeader('Content-Range');
			if (contentRange === null) { // no content range, then finish!
					return -1;
					}
			return parseInt(contentRange.substr(contentRange.lastIndexOf('/') + 1));
		}
	}
	NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
	NetworkStreamer.prototype.constructor = NetworkStreamer;


	function FileStreamer(config)
	{
		config = config || {};
		if (!config.chunkSize)
			config.chunkSize = Papa.LocalChunkSize;
		ChunkStreamer.call(this, config);

		var reader, slice;

		// FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
		// But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
		var usingAsyncReader = typeof FileReader !== 'undefined';	// Safari doesn't consider it a function - see issue #105

		this.stream = function(file)
		{
			this._input = file;
			slice = file.slice || file.webkitSlice || file.mozSlice;

			if (usingAsyncReader)
			{
				reader = new FileReader();		// Preferred method of reading files, even in workers
				reader.onload = bindFunction(this._chunkLoaded, this);
				reader.onerror = bindFunction(this._chunkError, this);
			}
			else
				reader = new FileReaderSync();	// Hack for running in a web worker in Firefox

			this._nextChunk();	// Starts streaming
		};

		this._nextChunk = function()
		{
			if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview))
				this._readChunk();
		}

		this._readChunk = function()
		{
			var input = this._input;
			if (this._config.chunkSize)
			{
				var end = Math.min(this._start + this._config.chunkSize, this._input.size);
				input = slice.call(input, this._start, end);
			}
			var txt = reader.readAsText(input, this._config.encoding);
			if (!usingAsyncReader)
				this._chunkLoaded({ target: { result: txt } });	// mimic the async signature
		}

		this._chunkLoaded = function(event)
		{
			// Very important to increment start each time before handling results
			this._start += this._config.chunkSize;
			this._finished = !this._config.chunkSize || this._start >= this._input.size;
			this.parseChunk(event.target.result);
		}

		this._chunkError = function()
		{
			this._sendError(reader.error);
		}

	}
	FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
	FileStreamer.prototype.constructor = FileStreamer;


	function StringStreamer(config)
	{
		config = config || {};
		ChunkStreamer.call(this, config);

		var string;
		var remaining;
		this.stream = function(s)
		{
			string = s;
			remaining = s;
			return this._nextChunk();
		}
		this._nextChunk = function()
		{
			if (this._finished) return;
			var size = this._config.chunkSize;
			var chunk = size ? remaining.substr(0, size) : remaining;
			remaining = size ? remaining.substr(size) : '';
			this._finished = !remaining;
			return this.parseChunk(chunk);
		}
	}
	StringStreamer.prototype = Object.create(StringStreamer.prototype);
	StringStreamer.prototype.constructor = StringStreamer;


	function ReadableStreamStreamer(config)
	{
		config = config || {};

		ChunkStreamer.call(this, config);

		var queue = [];
		var parseOnData = true;

		this.stream = function(stream)
		{
			this._input = stream;

			this._input.on('data', this._streamData);
			this._input.on('end', this._streamEnd);
			this._input.on('error', this._streamError);
		}

		this._nextChunk = function()
		{
			if (queue.length)
			{
				this.parseChunk(queue.shift());
			}
			else
			{
				parseOnData = true;
			}
		}

		this._streamData = bindFunction(function(chunk)
		{
			try
			{
				queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));

				if (parseOnData)
				{
					parseOnData = false;
					this.parseChunk(queue.shift());
				}
			}
			catch (error)
			{
				this._streamError(error);
			}
		}, this);

		this._streamError = bindFunction(function(error)
		{
			this._streamCleanUp();
			this._sendError(error.message);
		}, this);

		this._streamEnd = bindFunction(function()
		{
			this._streamCleanUp();
			this._finished = true;
			this._streamData('');
		}, this);

		this._streamCleanUp = bindFunction(function()
		{
			this._input.removeListener('data', this._streamData);
			this._input.removeListener('end', this._streamEnd);
			this._input.removeListener('error', this._streamError);
		}, this);
	}
	ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
	ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;


	// Use one ParserHandle per entire CSV file or string
	function ParserHandle(_config)
	{
		// One goal is to minimize the use of regular expressions...
		var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;

		var self = this;
		var _stepCounter = 0;	// Number of times step was called (number of rows parsed)
		var _input;				// The input being parsed
		var _parser;			// The core parser being used
		var _paused = false;	// Whether we are paused or not
		var _aborted = false;	// Whether the parser has aborted or not
		var _delimiterError;	// Temporary state between delimiter detection and processing results
		var _fields = [];		// Fields are from the header row of the input, if there is one
		var _results = {		// The last results returned from the parser
			data: [],
			errors: [],
			meta: {}
		};

		if (isFunction(_config.step))
		{
			var userStep = _config.step;
			_config.step = function(results)
			{
				_results = results;

				if (needsHeaderRow())
					processResults();
				else	// only call user's step function after header row
				{
					processResults();

					// It's possbile that this line was empty and there's no row here after all
					if (_results.data.length === 0)
						return;

					_stepCounter += results.data.length;
					if (_config.preview && _stepCounter > _config.preview)
						_parser.abort();
					else
						userStep(_results, self);
				}
			};
		}

		/**
		 * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
		 * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
		 * when an input comes in multiple chunks, like from a file.
		 */
		this.parse = function(input, baseIndex, ignoreLastRow)
		{
			if (!_config.newline)
				_config.newline = guessLineEndings(input);

			_delimiterError = false;
			if (!_config.delimiter)
			{
				var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines);
				if (delimGuess.successful)
					_config.delimiter = delimGuess.bestDelimiter;
				else
				{
					_delimiterError = true;	// add error after parsing (otherwise it would be overwritten)
					_config.delimiter = Papa.DefaultDelimiter;
				}
				_results.meta.delimiter = _config.delimiter;
			}
			else if(isFunction(_config.delimiter))
			{
				_config.delimiter = _config.delimiter(input);
				_results.meta.delimiter = _config.delimiter;
			}

			var parserConfig = copy(_config);
			if (_config.preview && _config.header)
				parserConfig.preview++;	// to compensate for header row

			_input = input;
			_parser = new Parser(parserConfig);
			_results = _parser.parse(_input, baseIndex, ignoreLastRow);
			processResults();
			return _paused ? { meta: { paused: true } } : (_results || { meta: { paused: false } });
		};

		this.paused = function()
		{
			return _paused;
		};

		this.pause = function()
		{
			_paused = true;
			_parser.abort();
			_input = _input.substr(_parser.getCharIndex());
		};

		this.resume = function()
		{
			_paused = false;
			self.streamer.parseChunk(_input);
		};

		this.aborted = function ()
		{
			return _aborted;
		};

		this.abort = function()
		{
			_aborted = true;
			_parser.abort();
			_results.meta.aborted = true;
			if (isFunction(_config.complete))
				_config.complete(_results);
			_input = '';
		};

		function processResults()
		{
			if (_results && _delimiterError)
			{
				addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \''+Papa.DefaultDelimiter+'\'');
				_delimiterError = false;
			}

			if (_config.skipEmptyLines)
			{
				for (var i = 0; i < _results.data.length; i++)
					if (_results.data[i].length === 1 && _results.data[i][0] === '')
						_results.data.splice(i--, 1);
			}

			if (needsHeaderRow())
				fillHeaderFields();

			return applyHeaderAndDynamicTyping();
		}

		function needsHeaderRow()
		{
			return _config.header && _fields.length === 0;
		}

		function fillHeaderFields()
		{
			if (!_results)
				return;
			for (var i = 0; needsHeaderRow() && i < _results.data.length; i++)
				for (var j = 0; j < _results.data[i].length; j++)
					_fields.push(_results.data[i][j]);
			_results.data.splice(0, 1);
		}

		function shouldApplyDynamicTyping(field) {
			// Cache function values to avoid calling it for each row
			if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
				_config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
			}
			return (_config.dynamicTyping[field] || _config.dynamicTyping) === true
		}

		function parseDynamic(field, value)
		{
			if (shouldApplyDynamicTyping(field))
			{
				if (value === 'true' || value === 'TRUE')
					return true;
				else if (value === 'false' || value === 'FALSE')
					return false;
				else
					return tryParseFloat(value);
			}
			return value;
		}

		function applyHeaderAndDynamicTyping()
		{
			if (!_results || (!_config.header && !_config.dynamicTyping))
				return _results;

			for (var i = 0; i < _results.data.length; i++)
			{
				var row = _config.header ? {} : [];

				for (var j = 0; j < _results.data[i].length; j++)
				{
					var field = j;
					var value = _results.data[i][j];

					if (_config.header)
						field = j >= _fields.length ? '__parsed_extra' : _fields[j];

					value = parseDynamic(field, value);

					if (field === '__parsed_extra')
					{
						row[field] = row[field] || [];
						row[field].push(value);
					}
					else
						row[field] = value;
				}

				_results.data[i] = row;

				if (_config.header)
				{
					if (j > _fields.length)
						addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, i);
					else if (j < _fields.length)
						addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, i);
				}
			}

			if (_config.header && _results.meta)
				_results.meta.fields = _fields;
			return _results;
		}

		function guessDelimiter(input, newline, skipEmptyLines)
		{
			var delimChoices = [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP];
			var bestDelim, bestDelta, fieldCountPrevRow;

			for (var i = 0; i < delimChoices.length; i++)
			{
				var delim = delimChoices[i];
				var delta = 0, avgFieldCount = 0, emptyLinesCount = 0;
				fieldCountPrevRow = undefined;

				var preview = new Parser({
					delimiter: delim,
					newline: newline,
					preview: 10
				}).parse(input);

				for (var j = 0; j < preview.data.length; j++)
				{
					if (skipEmptyLines && preview.data[j].length === 1 && preview.data[j][0].length === 0) {
						emptyLinesCount++
						continue
					}
					var fieldCount = preview.data[j].length;
					avgFieldCount += fieldCount;

					if (typeof fieldCountPrevRow === 'undefined')
					{
						fieldCountPrevRow = fieldCount;
						continue;
					}
					else if (fieldCount > 1)
					{
						delta += Math.abs(fieldCount - fieldCountPrevRow);
						fieldCountPrevRow = fieldCount;
					}
				}

				if (preview.data.length > 0)
					avgFieldCount /= (preview.data.length - emptyLinesCount);

				if ((typeof bestDelta === 'undefined' || delta < bestDelta)
					&& avgFieldCount > 1.99)
				{
					bestDelta = delta;
					bestDelim = delim;
				}
			}

			_config.delimiter = bestDelim;

			return {
				successful: !!bestDelim,
				bestDelimiter: bestDelim
			}
		}

		function guessLineEndings(input)
		{
			input = input.substr(0, 1024*1024);	// max length 1 MB

			var r = input.split('\r');

			var n = input.split('\n');

			var nAppearsFirst = (n.length > 1 && n[0].length < r[0].length);

			if (r.length === 1 || nAppearsFirst)
				return '\n';

			var numWithN = 0;
			for (var i = 0; i < r.length; i++)
			{
				if (r[i][0] === '\n')
					numWithN++;
			}

			return numWithN >= r.length / 2 ? '\r\n' : '\r';
		}

		function tryParseFloat(val)
		{
			var isNumber = FLOAT.test(val);
			return isNumber ? parseFloat(val) : val;
		}

		function addError(type, code, msg, row)
		{
			_results.errors.push({
				type: type,
				code: code,
				message: msg,
				row: row
			});
		}
	}





	/** The core parser implements speedy and correct CSV parsing */
	function Parser(config)
	{
		// Unpack the config object
		config = config || {};
		var delim = config.delimiter;
		var newline = config.newline;
		var comments = config.comments;
		var step = config.step;
		var preview = config.preview;
		var fastMode = config.fastMode;
		var quoteChar = config.quoteChar || '"';

		// Delimiter must be valid
		if (typeof delim !== 'string'
			|| Papa.BAD_DELIMITERS.indexOf(delim) > -1)
			delim = ',';

		// Comment character must be valid
		if (comments === delim)
			throw 'Comment character same as delimiter';
		else if (comments === true)
			comments = '#';
		else if (typeof comments !== 'string'
			|| Papa.BAD_DELIMITERS.indexOf(comments) > -1)
			comments = false;

		// Newline must be valid: \r, \n, or \r\n
		if (newline != '\n' && newline != '\r' && newline != '\r\n')
			newline = '\n';

		// We're gonna need these at the Parser scope
		var cursor = 0;
		var aborted = false;

		this.parse = function(input, baseIndex, ignoreLastRow)
		{
			// For some reason, in Chrome, this speeds things up (!?)
			if (typeof input !== 'string')
				throw 'Input must be a string';

			// We don't need to compute some of these every time parse() is called,
			// but having them in a more local scope seems to perform better
			var inputLen = input.length,
				delimLen = delim.length,
				newlineLen = newline.length,
				commentsLen = comments.length;
			var stepIsFunction = isFunction(step);

			// Establish starting state
			cursor = 0;
			var data = [], errors = [], row = [], lastCursor = 0;

			if (!input)
				return returnable();

			if (fastMode || (fastMode !== false && input.indexOf(quoteChar) === -1))
			{
				var rows = input.split(newline);
				for (var i = 0; i < rows.length; i++)
				{
					var row = rows[i];
					cursor += row.length;
					if (i !== rows.length - 1)
						cursor += newline.length;
					else if (ignoreLastRow)
						return returnable();
					if (comments && row.substr(0, commentsLen) === comments)
						continue;
					if (stepIsFunction)
					{
						data = [];
						pushRow(row.split(delim));
						doStep();
						if (aborted)
							return returnable();
					}
					else
						pushRow(row.split(delim));
					if (preview && i >= preview)
					{
						data = data.slice(0, preview);
						return returnable(true);
					}
				}
				return returnable();
			}

			var nextDelim = input.indexOf(delim, cursor);
			var nextNewline = input.indexOf(newline, cursor);
			var quoteCharRegex = new RegExp(quoteChar+quoteChar, 'g');

			// Parser loop
			for (;;)
			{
				// Field has opening quote
				if (input[cursor] === quoteChar)
				{
					// Start our search for the closing quote where the cursor is
					var quoteSearch = cursor;

					// Skip the opening quote
					cursor++;

					for (;;)
					{
						// Find closing quote
						var quoteSearch = input.indexOf(quoteChar, quoteSearch+1);

						//No other quotes are found - no other delimiters
						if (quoteSearch === -1)
						{
							if (!ignoreLastRow) {
								// No closing quote... what a pity
								errors.push({
									type: 'Quotes',
									code: 'MissingQuotes',
									message: 'Quoted field unterminated',
									row: data.length,	// row has yet to be inserted
									index: cursor
								});
							}
							return finish();
						}

						// Closing quote at EOF
						if (quoteSearch === inputLen-1)
						{
							var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
							return finish(value);
						}

						// If this quote is escaped, it's part of the data; skip it
						if (input[quoteSearch+1] === quoteChar)
						{
							quoteSearch++;
							continue;
						}

						// Closing quote followed by delimiter
						if (input[quoteSearch+1] === delim)
						{
							row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
							cursor = quoteSearch + 1 + delimLen;
							nextDelim = input.indexOf(delim, cursor);
							nextNewline = input.indexOf(newline, cursor);
							break;
						}

						// Closing quote followed by newline
						if (input.substr(quoteSearch+1, newlineLen) === newline)
						{
							row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
							saveRow(quoteSearch + 1 + newlineLen);
							nextDelim = input.indexOf(delim, cursor);	// because we may have skipped the nextDelim in the quoted field

							if (stepIsFunction)
							{
								doStep();
								if (aborted)
									return returnable();
							}

							if (preview && data.length >= preview)
								return returnable(true);

							break;
						}


						// Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
						errors.push({
							type: 'Quotes',
							code: 'InvalidQuotes',
							message: 'Trailing quote on quoted field is malformed',
							row: data.length,	// row has yet to be inserted
							index: cursor
						});

						quoteSearch++;
						continue;

					}

					continue;
				}

				// Comment found at start of new line
				if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments)
				{
					if (nextNewline === -1)	// Comment ends at EOF
						return returnable();
					cursor = nextNewline + newlineLen;
					nextNewline = input.indexOf(newline, cursor);
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// Next delimiter comes before next newline, so we've reached end of field
				if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1))
				{
					row.push(input.substring(cursor, nextDelim));
					cursor = nextDelim + delimLen;
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// End of row
				if (nextNewline !== -1)
				{
					row.push(input.substring(cursor, nextNewline));
					saveRow(nextNewline + newlineLen);

					if (stepIsFunction)
					{
						doStep();
						if (aborted)
							return returnable();
					}

					if (preview && data.length >= preview)
						return returnable(true);

					continue;
				}

				break;
			}


			return finish();


			function pushRow(row)
			{
				data.push(row);
				lastCursor = cursor;
			}

			/**
			 * Appends the remaining input from cursor to the end into
			 * row, saves the row, calls step, and returns the results.
			 */
			function finish(value)
			{
				if (ignoreLastRow)
					return returnable();
				if (typeof value === 'undefined')
					value = input.substr(cursor);
				row.push(value);
				cursor = inputLen;	// important in case parsing is paused
				pushRow(row);
				if (stepIsFunction)
					doStep();
				return returnable();
			}

			/**
			 * Appends the current row to the results. It sets the cursor
			 * to newCursor and finds the nextNewline. The caller should
			 * take care to execute user's step function and check for
			 * preview and end parsing if necessary.
			 */
			function saveRow(newCursor)
			{
				cursor = newCursor;
				pushRow(row);
				row = [];
				nextNewline = input.indexOf(newline, cursor);
			}

			/** Returns an object with the results, errors, and meta. */
			function returnable(stopped)
			{
				return {
					data: data,
					errors: errors,
					meta: {
						delimiter: delim,
						linebreak: newline,
						aborted: aborted,
						truncated: !!stopped,
						cursor: lastCursor + (baseIndex || 0)
					}
				};
			}

			/** Executes the user's step function and resets data & errors. */
			function doStep()
			{
				step(returnable());
				data = [], errors = [];
			}
		};

		/** Sets the abort flag */
		this.abort = function()
		{
			aborted = true;
		};

		/** Gets the cursor position */
		this.getCharIndex = function()
		{
			return cursor;
		};
	}


	// If you need to load Papa Parse asynchronously and you also need worker threads, hard-code
	// the script path here. See: https://github.com/mholt/PapaParse/issues/87#issuecomment-57885358
	function getScriptPath()
	{
		var scripts = document.getElementsByTagName('script');
		return scripts.length ? scripts[scripts.length - 1].src : '';
	}

	function newWorker()
	{
		if (!Papa.WORKERS_SUPPORTED)
			return false;
		if (!LOADED_SYNC && Papa.SCRIPT_PATH === null)
			throw new Error(
				'Script path cannot be determined automatically when Papa Parse is loaded asynchronously. ' +
				'You need to set Papa.SCRIPT_PATH manually.'
			);
		var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
		// Append 'papaworker' to the search string to tell papaparse that this is our worker.
		workerUrl += (workerUrl.indexOf('?') !== -1 ? '&' : '?') + 'papaworker';
		var w = new global.Worker(workerUrl);
		w.onmessage = mainThreadReceivedMessage;
		w.id = workerIdCounter++;
		workers[w.id] = w;
		return w;
	}

	/** Callback when main thread receives a message */
	function mainThreadReceivedMessage(e)
	{
		var msg = e.data;
		var worker = workers[msg.workerId];
		var aborted = false;

		if (msg.error)
			worker.userError(msg.error, msg.file);
		else if (msg.results && msg.results.data)
		{
			var abort = function() {
				aborted = true;
				completeWorker(msg.workerId, { data: [], errors: [], meta: { aborted: true } });
			};

			var handle = {
				abort: abort,
				pause: notImplemented,
				resume: notImplemented
			};

			if (isFunction(worker.userStep))
			{
				for (var i = 0; i < msg.results.data.length; i++)
				{
					worker.userStep({
						data: [msg.results.data[i]],
						errors: msg.results.errors,
						meta: msg.results.meta
					}, handle);
					if (aborted)
						break;
				}
				delete msg.results;	// free memory ASAP
			}
			else if (isFunction(worker.userChunk))
			{
				worker.userChunk(msg.results, handle, msg.file);
				delete msg.results;
			}
		}

		if (msg.finished && !aborted)
			completeWorker(msg.workerId, msg.results);
	}

	function completeWorker(workerId, results) {
		var worker = workers[workerId];
		if (isFunction(worker.userComplete))
			worker.userComplete(results);
		worker.terminate();
		delete workers[workerId];
	}

	function notImplemented() {
		throw 'Not implemented.';
	}

	/** Callback when worker thread receives a message */
	function workerThreadReceivedMessage(e)
	{
		var msg = e.data;

		if (typeof Papa.WORKER_ID === 'undefined' && msg)
			Papa.WORKER_ID = msg.workerId;

		if (typeof msg.input === 'string')
		{
			global.postMessage({
				workerId: Papa.WORKER_ID,
				results: Papa.parse(msg.input, msg.config),
				finished: true
			});
		}
		else if ((global.File && msg.input instanceof File) || msg.input instanceof Object)	// thank you, Safari (see issue #106)
		{
			var results = Papa.parse(msg.input, msg.config);
			if (results)
				global.postMessage({
					workerId: Papa.WORKER_ID,
					results: results,
					finished: true
				});
		}
	}

	/** Makes a deep copy of an array or object (mostly) */
	function copy(obj)
	{
		if (typeof obj !== 'object')
			return obj;
		var cpy = obj instanceof Array ? [] : {};
		for (var key in obj)
			cpy[key] = copy(obj[key]);
		return cpy;
	}

	function bindFunction(f, self)
	{
		return function() { f.apply(self, arguments); };
	}

	function isFunction(func)
	{
		return typeof func === 'function';
	}

	return Papa;
}));

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvYWN0aW9ucy9SZWNvcmRzQWN0aW9ucy5qcyIsIi9Vc2Vycy90aG9tYXMvQ29kZS9ncmVlbmJhY2tzL2pzL3NyYy9hbHQuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9JbXBvcnQuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9NYWluLmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL2NvbXBvbmVudHMvUm93LmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL2NvbXBvbmVudHMvVGFnU2VsZWN0LmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL21haW4uanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvcm91dGVzLmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL3N0b3Jlcy9SZWNvcmRzU3RvcmUuanMiLCJub2RlX21vZHVsZXMvYmF5ZXMvbGliL25haXZlX2JheWVzLmpzIiwibm9kZV9tb2R1bGVzL2NoYXJlbmMvY2hhcmVuYy5qcyIsIm5vZGVfbW9kdWxlcy9jcnlwdC9jcnlwdC5qcyIsIm5vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG92ZWZpZWxkL2Rpc3QvbG92ZWZpZWxkLm1pbi5qcyIsIm5vZGVfbW9kdWxlcy9tZDUvbWQ1LmpzIiwibm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMiLCJub2RlX21vZHVsZXMvcGFwYXBhcnNlL3BhcGFwYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OzttQkNBZ0IsUUFBUTs7OzttQkFDUixLQUFLOzs7O3NCQUNGLFFBQVE7Ozs7eUJBQ1osV0FBVzs7OztJQUVwQixjQUFjO0FBQ1IsVUFETixjQUFjLEdBQ0w7d0JBRFQsY0FBYzs7QUFFbEIsTUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztFQUNwQzs7Ozs7Ozs7O2NBSEksY0FBYzs7U0FXYixnQkFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ25CLE9BQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLFFBQUksRUFBRSxzQkFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLFFBQUksRUFBRSx5QkFBTyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUNoRCxZQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7QUFDekIsYUFBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO0FBQzNCLFVBQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtBQUNyQixPQUFHLEVBQUUsR0FBRztJQUNSLENBQUMsQ0FBQzs7QUFFSCxTQUFNLENBQUMsRUFBRSxDQUNQLGVBQWUsRUFBRSxDQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNwQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNiLElBQUksRUFBRSxDQUFDO0dBQ1Q7Ozs7Ozs7O1NBTUcsZ0JBQUc7O0FBRU4sU0FBTSxDQUFDLEVBQUUsQ0FDUCxNQUFNLEVBQUUsQ0FDUixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNwQixJQUFJLEVBQUUsQ0FDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztHQUNqQzs7O1FBdkNJLGNBQWM7OztxQkEwQ0wsaUJBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7O21CQy9DaEMsS0FBSzs7OztxQkFFTixzQkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDRlMsT0FBTzs7OztJQUVsQyxHQUFHO1dBQUgsR0FBRzs7QUFDRyxVQUROLEdBQUcsQ0FDSSxLQUFLLEVBQUU7d0JBRGQsR0FBRzs7QUFFUCw2QkFGSSxHQUFHLDZDQUVELEtBQUssRUFBRTtFQUNiOztjQUhJLEdBQUc7O1NBS0Ysa0JBQUc7QUFDUixVQUNDOzs7SUFDQzs7OztLQUFXO0lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0lBQ1osQ0FDUjtHQUNGOzs7UUFaSSxHQUFHOzs7cUJBZU0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDakJlLE9BQU87Ozs7eUJBQ3ZCLFdBQVc7Ozs7bUJBQ1osT0FBTzs7OztxQ0FDSSwyQkFBMkI7Ozs7a0NBQzdCLHdCQUF3Qjs7OzttQkFDakMsS0FBSzs7OztJQUVmLElBQUk7V0FBSixJQUFJOztBQUNFLFVBRE4sSUFBSSxDQUNHLEtBQUssRUFBRTt3QkFEZCxJQUFJOztBQUVSLDZCQUZJLElBQUksNkNBRUYsS0FBSyxFQUFFO0FBQ2IsTUFBSSxDQUFDLEtBQUssR0FBRztBQUNaLE9BQUksRUFBRSxFQUFFO0dBQ1IsQ0FBQztFQUNGOzs7Ozs7OztjQU5JLElBQUk7O1NBYU8sMEJBQUMsQ0FBQyxFQUFFOzs7QUFDbkIsT0FBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsMEJBQUssS0FBSyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFNLEVBQUU7QUFDUCxhQUFRLEVBQUUsT0FBTztLQUNqQjtBQUNELFlBQVEsRUFBRSxrQkFBQSxPQUFPLEVBQUk7QUFDcEIsU0FBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsV0FBSyxRQUFRLENBQUM7QUFDYixVQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNsQixXQUFJLENBQUMsR0FBRztBQUNQLFlBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1YsZ0JBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2QsaUJBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsY0FBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDOztBQUVGLFdBQUksSUFBSSxHQUFHLHNCQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxRQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUVqQixjQUFPLENBQUMsQ0FBQztPQUNULENBQUM7TUFDRixDQUFDLENBQUM7S0FDSDtJQUNELENBQUMsQ0FBQztHQUNIOzs7Ozs7OztTQU1PLG9CQUFHO0FBQ1YsT0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBTSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ1osV0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzdCLENBQUMsQ0FDRCxPQUFPLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDYix1Q0FBZSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztHQUNKOzs7Ozs7Ozs7O1NBUVUscUJBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN0QixPQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDdEMsUUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtBQUNuQixNQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNaO0FBQ0QsV0FBTyxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUM7O0FBRUgsT0FBSSxDQUFDLFFBQVEsQ0FBQztBQUNiLFFBQUksRUFBRSxPQUFPO0lBQ2IsQ0FBQyxDQUFDO0dBQ0g7Ozs7Ozs7O1NBTUssa0JBQUc7OztBQUNSLFVBQ0M7OztJQUNDOzs7S0FDQztBQUNDLFVBQUksRUFBQyxNQUFNO0FBQ1gsY0FBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7T0FDMUM7S0FDQztJQUVKOztPQUFPLE1BQU0sRUFBQyxHQUFHO0tBQ2hCOzs7TUFDQzs7O09BQ0M7Ozs7UUFBYTtPQUNiOzs7O1FBQWlCO09BQ2pCOzs7O1FBQWtCO09BQ2xCOzs7O1FBQWU7T0FDZiw0Q0FBTTtPQUNGO01BQ0U7S0FDUjs7O01BQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBSztBQUNyQyxjQUNDO0FBQ0MsV0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLEFBQUM7QUFDbEIsWUFBSSxFQUFFLE1BQU0sQUFBQztBQUNiLG1CQUFXLEVBQUUsT0FBSyxXQUFXLENBQUMsSUFBSSxRQUFNLEFBQUM7U0FDeEMsQ0FDRDtPQUNGLENBQUM7TUFDSztLQUNEO0lBRVI7O09BQVEsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDOztLQUFnQjtJQUNyRCxDQUNMO0dBQ0Y7OztRQWpISSxJQUFJOzs7cUJBb0hLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQzNIYyxPQUFPOzs7OzJCQUNuQixjQUFjOztJQUU3QixJQUFJO1dBQUosSUFBSTs7VUFBSixJQUFJO3dCQUFKLElBQUk7OzZCQUFKLElBQUk7OztjQUFKLElBQUk7O1NBQ0gsa0JBQUc7QUFDUixVQUNDOzs7SUFDQzs7T0FBTSxFQUFFLEVBQUMsU0FBUzs7S0FBYztJQUMzQixDQUNMO0dBQ0Y7OztRQVBJLElBQUk7OztxQkFVSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNiYyxPQUFPOzs7O3lCQUNsQixhQUFhOzs7O0lBRTdCLEdBQUc7V0FBSCxHQUFHOztBQUNHLFVBRE4sR0FBRyxDQUNJLEtBQUssRUFBRTt3QkFEZCxHQUFHOztBQUVQLDZCQUZJLEdBQUcsNkNBRUQsS0FBSyxFQUFFO0FBQ2IsTUFBSSxDQUFDLEtBQUssR0FBRztBQUNaLFlBQVMsRUFBRSxLQUFLO0FBQ2hCLE1BQUcsRUFBRSxJQUFJO0dBQ1QsQ0FBQztFQUNGOztjQVBJLEdBQUc7O1NBU1MsNkJBQUc7OztBQUNuQixTQUFNLENBQUMsRUFBRSxDQUNQLE1BQU0sRUFBRSxDQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDbkQsSUFBSSxFQUFFLENBQ04sSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2hCLFFBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdkIsV0FBSyxRQUFRLENBQUM7QUFDYixlQUFTLEVBQUUsSUFBSTtNQUNmLENBQUMsQ0FBQztLQUNIO0lBQ0QsQ0FBQyxDQUFDO0dBQ0o7OztTQUVVLHFCQUFDLEdBQUcsRUFBRTtBQUNoQixPQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7R0FDbEQ7OztTQUVLLGtCQUFHO3FCQUNzQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7T0FBckQsSUFBSSxlQUFKLElBQUk7T0FBRSxRQUFRLGVBQVIsUUFBUTtPQUFFLFNBQVMsZUFBVCxTQUFTO09BQUUsTUFBTSxlQUFOLE1BQU07O0FBRXpDLE9BQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUNyQixPQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRWpCLE9BQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO0FBQ2xDLFdBQU8sR0FBRyxjQUFjLENBQUM7SUFDekIsTUFBTTs7QUFFTixRQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDZixnQkFBVyxHQUFHLFlBQVksQ0FBQztLQUMzQixNQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN0QixnQkFBVyxHQUFHLFVBQVUsQ0FBQztLQUN6QjtJQUNEOztBQUVELFVBQ0M7O01BQUksU0FBUyxFQUFFLE9BQU8sQUFBQztJQUN0Qjs7O0tBQUssSUFBSTtLQUFNO0lBQ2Y7OztLQUFLLFFBQVE7S0FBTTtJQUNuQjs7O0tBQUssU0FBUztLQUFNO0lBQ3BCOztPQUFJLFNBQVMsRUFBRSxXQUFXLEFBQUM7S0FBRSxNQUFNOztLQUFPO0lBQzFDOzs7S0FDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxLQUFLLEdBQzlCO0FBQ0MsVUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUFDO0FBQ3RCLGlCQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7T0FDeEMsR0FDQyxJQUFJO0tBQ0o7SUFDRCxDQUNKO0dBQ0Y7OztRQTdESSxHQUFHOzs7cUJBZ0VNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ25FZSxPQUFPOzs7O0lBRWxDLFNBQVM7V0FBVCxTQUFTOztBQUNILFVBRE4sU0FBUyxDQUNGLEtBQUssRUFBRTt3QkFEZCxTQUFTOztBQUViLDZCQUZJLFNBQVMsNkNBRVAsS0FBSyxFQUFFO0FBQ2IsTUFBSSxDQUFDLEtBQUssR0FBRztBQUNaLE9BQUksRUFBRSxDQUNMLEtBQUssRUFDTCxrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLFlBQVksRUFDWixlQUFlLEVBQ2YsVUFBVSxFQUNWLGVBQWUsRUFDZixNQUFNLEVBQ04sV0FBVyxFQUNYLE9BQU8sRUFDUCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLGVBQWUsRUFDZixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixNQUFNLENBQ047R0FDRCxDQUFDO0VBQ0Y7O2NBM0JJLFNBQVM7O1NBNkJOLGtCQUFDLENBQUMsRUFBRTtBQUNYLE9BQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDdkM7OztTQUVLLGtCQUFHO0FBQ1IsT0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDM0IsT0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osVUFDQzs7TUFBUSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUM7SUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUs7QUFDdkIsWUFBTzs7UUFBUSxHQUFHLEVBQUUsTUFBTSxHQUFHLEdBQUcsQUFBQztNQUFFLEdBQUc7TUFBVSxDQUFDO0tBQ2pELENBQUM7SUFDTSxDQUNSO0dBQ0Y7OztRQTNDSSxTQUFTOzs7cUJBOENBLFNBQVM7Ozs7Ozs7O3FCQ2hETixPQUFPOzs7OzJCQUNrQixjQUFjOzt3QkFDcEMsV0FBVzs7OztzQkFDYixVQUFVOzs7O3lCQUNkLFdBQVc7Ozs7cUJBQ1IsT0FBTzs7OztBQUV6QixNQUFNLENBQUMsVUFBVSxHQUFHLHlCQUFPLENBQUM7QUFDNUIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO0FBQ3ZDLE9BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQU0sUUFBUSxDQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDOUMsQ0FBQztDQUNGOztBQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FDdEIsY0FBYyxFQUNkLFVBQVMsS0FBSyxFQUFFO0FBQ2YsUUFBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hDLGFBQVksQ0FBQyxPQUFPLENBQ25CLFlBQVksRUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FDMUMsQ0FBQztDQUNGLEVBQ0QsS0FBSyxDQUNMLENBQUM7O0FBRUYsSUFBSSxhQUFhLEdBQUcsdUJBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsYUFBYSxDQUNYLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FDckIsU0FBUyxDQUFDLE1BQU0sRUFBRSx1QkFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ2pDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsdUJBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUNwQyxTQUFTLENBQUMsVUFBVSxFQUFFLHVCQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDckMsU0FBUyxDQUFDLFdBQVcsRUFBRSx1QkFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ3RDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsdUJBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNqQyxTQUFTLENBQUMsS0FBSyxFQUFFLHVCQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDaEMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsRUFBSTtBQUNsQyxPQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNmLE9BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7O0FBR2hELHVCQUFTLE1BQU0sQ0FDZDs7SUFBUSxPQUFPLDBCQUFjOztFQUFrQixFQUMvQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFDOzs7QUFHRiwwQkFBWSxNQUFNLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDOUIsTUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUMvQixVQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7R0FDOUM7RUFDRCxDQUFDLENBQUM7Q0FDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O3FCQ3JEZSxPQUFPOzs7OzJCQUNTLGNBQWM7OzZCQUNoQyxrQkFBa0I7Ozs7OEJBQ2pCLG1CQUFtQjs7OztnQ0FDakIscUJBQXFCOzs7O3FCQUd2Qzs7R0FBTyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsNEJBQU07Q0FDOUIsNERBQVksU0FBUyw2QkFBTyxHQUFHO0NBQy9CLHVEQUFPLElBQUksRUFBQyxTQUFTLEVBQUMsU0FBUywrQkFBUyxHQUFHO0NBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7O21CQ1ZPLFFBQVE7Ozs7cUNBQ0csMkJBQTJCOzs7O0lBRWhELFlBQVk7QUFDTixVQUROLFlBQVksR0FDSDt3QkFEVCxZQUFZOztBQUVoQixNQUFJLENBQUMsV0FBVyxvQ0FBZ0IsQ0FBQzs7QUFFakMsTUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7RUFDbEI7O2NBTEksWUFBWTs7U0FPTixxQkFBQyxPQUFPLEVBQUU7QUFDcEIsVUFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyQixPQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN2Qjs7O1FBVkksWUFBWTs7O3FCQWFILGlCQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUM7Ozs7QUNoQjVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2N0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYWx0IGZyb20gXCIuLi9hbHRcIjtcbmltcG9ydCBtZDUgZnJvbSBcIm1kNVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgbGYgZnJvbSBcImxvdmVmaWVsZFwiO1xuXG5jbGFzcyBSZWNvcmRzQWN0aW9ucyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZ2VuZXJhdGVBY3Rpb25zKFwibG9hZFJlc3VsdHNcIik7XG5cdH1cblxuXHQvKipcblx0ICogSW5zZXJ0cyBhIGJhbmsgc3RhdGVtZW50IHJlY29yZCBpbnRvIHRoZSB3ZWIgc3FsIGRhdGFiYXNlXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gcmVjb3JkIFtkZXNjcmlwdGlvbl1cblx0ICogQHBhcmFtICB7W3R5cGVdfSB0YWcgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRpbnNlcnQocmVjb3JkLCB0YWcpIHtcblx0XHR2YXIgcm93ID0gd2luZG93LnJlY29yZHMuY3JlYXRlUm93KHtcblx0XHRcdGhhc2g6IG1kNShKU09OLnN0cmluZ2lmeShyZWNvcmQpKSxcblx0XHRcdGRhdGU6IG1vbWVudChyZWNvcmQuZGF0ZSwgXCJERC5NTS5ZWVlZXCIpLnRvRGF0ZSgpLFxuXHRcdFx0cmVjZWl2ZXI6IHJlY29yZC5yZWNlaXZlcixcblx0XHRcdHJlZmVyZW5jZTogcmVjb3JkLnJlZmVyZW5jZSxcblx0XHRcdGFtb3VudDogcmVjb3JkLmFtb3VudCxcblx0XHRcdHRhZzogdGFnXG5cdFx0fSk7XG5cblx0XHR3aW5kb3cuZGJcblx0XHRcdC5pbnNlcnRPclJlcGxhY2UoKVxuXHRcdFx0LmludG8od2luZG93LnJlY29yZHMpXG5cdFx0XHQudmFsdWVzKFtyb3ddKVxuXHRcdFx0LmV4ZWMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2FkIHJlY29yZHNcblx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRsb2FkKCkge1xuXHRcdC8vIGNvbm5lY3QgdG8gZGF0YWJhc2Vcblx0XHR3aW5kb3cuZGJcblx0XHRcdC5zZWxlY3QoKVxuXHRcdFx0LmZyb20od2luZG93LnJlY29yZHMpXG5cdFx0XHQuZXhlYygpXG5cdFx0XHQudGhlbih0aGlzLmFjdGlvbnMubG9hZFJlc3VsdHMpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKFJlY29yZHNBY3Rpb25zKTtcbiIsImltcG9ydCBBbHQgZnJvbSBcImFsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y2VudGVyPlxuXHRcdFx0XHQ8aDE+8J+StTwvaDE+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9jZW50ZXI+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFwYSBmcm9tIFwicGFwYXBhcnNlXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IFJlY29yZHNBY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL1JlY29yZHNBY3Rpb25zXCI7XG5pbXBvcnQgUmVjb3Jkc1N0b3JlIGZyb20gXCIuLi9zdG9yZXMvUmVjb3Jkc1N0b3JlXCI7XG5pbXBvcnQgbWQ1IGZyb20gXCJtZDVcIjtcblxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkYXRhOiBbXVxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogTG9hZCB0aGUgQ1NWIGZpbGVcblx0ICogQHBhcmFtICB7W3R5cGVdfSBlIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdGhhbmRsZUZpbGVVcGxvYWQoZSkge1xuXHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblx0XHRQYXBhLnBhcnNlKGZpbGUsIHtcblx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRlbmNvZGluZzogXCJVVEYtOFwiXG5cdFx0XHR9LFxuXHRcdFx0Y29tcGxldGU6IHJlc3VsdHMgPT4ge1xuXHRcdFx0XHRjb25zdCBjc3YgPSByZXN1bHRzLmRhdGEuc2xpY2UoNyk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGRhdGE6IGNzdi5tYXAociA9PiB7XG5cdFx0XHRcdFx0XHR2YXIgZCA9IHtcblx0XHRcdFx0XHRcdFx0ZGF0ZTogclswXSxcblx0XHRcdFx0XHRcdFx0cmVjZWl2ZXI6IHJbM10sXG5cdFx0XHRcdFx0XHRcdHJlZmVyZW5jZTogcls0XSxcblx0XHRcdFx0XHRcdFx0YW1vdW50OiBwYXJzZUZsb2F0KHJbN10ucmVwbGFjZShcIixcIiwgXCIuXCIpKVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0dmFyIGhhc2ggPSBtZDUoSlNPTi5zdHJpbmdpZnkoZCkpO1xuXHRcdFx0XHRcdFx0ZFtcImhhc2hcIl0gPSBoYXNoO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gZDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQZXJmb3JtIHRoZSBpbXBvcnQgdG8gd2ViIHNxbCBkYXRhYmFzZVxuXHQgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdGRvSW1wb3J0KCkge1xuXHRcdHRoaXMuc3RhdGUuZGF0YVxuXHRcdFx0LmZpbHRlcihyID0+IHtcblx0XHRcdFx0cmV0dXJuIFwidGFnXCIgaW4gciAmJiAhIXIudGFnO1xuXHRcdFx0fSlcblx0XHRcdC5mb3JFYWNoKHIgPT4ge1xuXHRcdFx0XHRSZWNvcmRzQWN0aW9ucy5pbnNlcnQociwgXCJ0ZXN0XCIpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogVHJpZ2dlcnMgd2hlbmV2ZXIgdGhlIHVzZXIgc2VsZWN0cyBhIG5ldyB0YWdcblx0ICogQHBhcmFtICB7W3R5cGVdfSBoYXNoIFtkZXNjcmlwdGlvbl1cblx0ICogQHBhcmFtICB7W3R5cGVdfSB0YWcgIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdG9uVGFnU2VsZWN0KGhhc2gsIHRhZykge1xuXHRcdHZhciByZWNvcmRzID0gdGhpcy5zdGF0ZS5kYXRhLm1hcChyID0+IHtcblx0XHRcdGlmIChyLmhhc2ggPT0gaGFzaCkge1xuXHRcdFx0XHRyLnRhZyA9IHRhZztcblx0XHRcdH1cblx0XHRcdHJldHVybiByO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRkYXRhOiByZWNvcmRzXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVuZGVyIG1ldGhvZFxuXHQgKiBAcmV0dXJuIHtKU1h9IHRoZSBKU1ggbWFya3VwXG5cdCAqL1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImZpbGVcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZVVwbG9hZC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvcD5cblxuXHRcdFx0XHQ8dGFibGUgYm9yZGVyPVwiMVwiPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPkRhdGU8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+UmVjZWl2ZXI8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+UmVmZXJlbmNlPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPkFtb3VudDwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aCAvPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmRhdGEubWFwKChyZWNvcmQsIGlkeCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxSb3dcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJyb3ctXCIgKyBpZHh9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhPXtyZWNvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRvblRhZ1NlbGVjdD17dGhpcy5vblRhZ1NlbGVjdC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5kb0ltcG9ydC5iaW5kKHRoaXMpfT5JbXBvcnQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL2ltcG9ydFwiPkltcG9ydDwvTGluaz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWdTZWxlY3QgZnJvbSBcIi4vVGFnU2VsZWN0XCI7XG5cbmNsYXNzIFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRkdXBsaWNhdGU6IGZhbHNlLFxuXHRcdFx0dGFnOiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHdpbmRvdy5kYlxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQuZnJvbSh3aW5kb3cucmVjb3Jkcylcblx0XHRcdC53aGVyZSh3aW5kb3cucmVjb3Jkcy5oYXNoLmVxKHRoaXMucHJvcHMuZGF0YS5oYXNoKSlcblx0XHRcdC5leGVjKClcblx0XHRcdC50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdFx0XHRpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRkdXBsaWNhdGU6IHRydWVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRvblRhZ1NlbGVjdCh0YWcpIHtcblx0XHR0aGlzLnByb3BzLm9uVGFnU2VsZWN0KHRoaXMucHJvcHMuZGF0YS5oYXNoLCB0YWcpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgZGF0ZSwgcmVjZWl2ZXIsIHJlZmVyZW5jZSwgYW1vdW50IH0gPSB0aGlzLnByb3BzLmRhdGE7XG5cblx0XHR2YXIgYW1vdW50Q2xhc3MgPSBcIlwiO1xuXHRcdHZhciB0ckNsYXNzID0gXCJcIjtcblxuXHRcdGlmICh0aGlzLnN0YXRlLmR1cGxpY2F0ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0dHJDbGFzcyA9IFwidHItZHVwbGljYXRlXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHNldCBhbW91bnQgY2xhc3Ncblx0XHRcdGlmIChhbW91bnQgPiAwKSB7XG5cdFx0XHRcdGFtb3VudENsYXNzID0gXCJ0ZXh0LWdyZWVuXCI7XG5cdFx0XHR9IGVsc2UgaWYgKGFtb3VudCA8IDApIHtcblx0XHRcdFx0YW1vdW50Q2xhc3MgPSBcInRleHQtcmVkXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBjbGFzc05hbWU9e3RyQ2xhc3N9PlxuXHRcdFx0XHQ8dGQ+e2RhdGV9PC90ZD5cblx0XHRcdFx0PHRkPntyZWNlaXZlcn08L3RkPlxuXHRcdFx0XHQ8dGQ+e3JlZmVyZW5jZX08L3RkPlxuXHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXthbW91bnRDbGFzc30+e2Ftb3VudH3igqw8L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuZHVwbGljYXRlID09PSBmYWxzZSA/IChcblx0XHRcdFx0XHRcdDxUYWdTZWxlY3Rcblx0XHRcdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfVxuXHRcdFx0XHRcdFx0XHRvblRhZ1NlbGVjdD17dGhpcy5vblRhZ1NlbGVjdC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFRhZ1NlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0YWdzOiBbXG5cdFx0XHRcdFwiY2FyXCIsXG5cdFx0XHRcdFwicHVibGljLXRyYW5zcG9ydFwiLFxuXHRcdFx0XHRcImdyb2Nlcmllc1wiLFxuXHRcdFx0XHRcImVhdGluZy1vdXRcIixcblx0XHRcdFx0XCJjb21tdW5pY2F0aW9uXCIsXG5cdFx0XHRcdFwidHJhbnNmZXJcIixcblx0XHRcdFx0XCJlbnRlcnRhaW5tZW50XCIsXG5cdFx0XHRcdFwicmVudFwiLFxuXHRcdFx0XHRcImRvbmF0aW9uc1wiLFxuXHRcdFx0XHRcInRheGVzXCIsXG5cdFx0XHRcdFwiaG91c2Vob2xkXCIsXG5cdFx0XHRcdFwic3R1ZHlpbmdcIixcblx0XHRcdFx0XCJjbG90aGluZ1wiLFxuXHRcdFx0XHRcImZpdG5lc3NcIixcblx0XHRcdFx0XCJoZWFsdGhcIixcblx0XHRcdFx0XCJwZXJzb25hbC1jYXJlXCIsXG5cdFx0XHRcdFwic3Vic2NyaXB0aW9uc1wiLFxuXHRcdFx0XHRcImNhc2gtd2l0aGRyYXdlbFwiLFxuXHRcdFx0XHRcImluY29tZVwiLFxuXHRcdFx0XHRcIm1pc2NcIlxuXHRcdFx0XVxuXHRcdH07XG5cdH1cblxuXHRvbkNoYW5nZShlKSB7XG5cdFx0dGhpcy5wcm9wcy5vblRhZ1NlbGVjdChlLnRhcmdldC52YWx1ZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHRhZ3MgPSB0aGlzLnN0YXRlLnRhZ3M7XG5cdFx0dGFncy5zb3J0KCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0+XG5cdFx0XHRcdHt0YWdzLm1hcCgodGFnLCBpZHgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPG9wdGlvbiBrZXk9e1wib3B0LVwiICsgaWR4fT57dGFnfTwvb3B0aW9uPjtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ1NlbGVjdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XG5pbXBvcnQgbGYgZnJvbSBcImxvdmVmaWVsZFwiO1xuaW1wb3J0IGJheWVzIGZyb20gXCJiYXllc1wiO1xuXG53aW5kb3cuY2xhc3NpZmllciA9IGJheWVzKCk7XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGFzc2lmaWVyXCIpKSB7XG5cdHdpbmRvdy5jbGFzc2lmaWVyID0gYmF5ZXMuZnJvbUpzb24oXG5cdFx0SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsYXNzaWZpZXJcIikpXG5cdCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcImJlZm9yZXVubG9hZFwiLFxuXHRmdW5jdGlvbihldmVudCkge1xuXHRcdGNvbnNvbGUubG9nKFwiT24gQmVmb3JlIFVubG9hZFwiKTtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcblx0XHRcdFwiY2xhc3NpZmllclwiLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkod2luZG93LmNsYXNzaWZpZXIudG9KU09OKCkpXG5cdFx0KTtcblx0fSxcblx0ZmFsc2Vcbik7XG5cbnZhciBzY2hlbWFCdWlsZGVyID0gbGYuc2NoZW1hLmNyZWF0ZShcInJlY29yZHNcIiwgMSk7XG5zY2hlbWFCdWlsZGVyXG5cdC5jcmVhdGVUYWJsZShcIlJlY29yZFwiKVxuXHQuYWRkQ29sdW1uKFwiaGFzaFwiLCBsZi5UeXBlLlNUUklORylcblx0LmFkZENvbHVtbihcImRhdGVcIiwgbGYuVHlwZS5EQVRFX1RJTUUpXG5cdC5hZGRDb2x1bW4oXCJyZWNlaXZlclwiLCBsZi5UeXBlLlNUUklORylcblx0LmFkZENvbHVtbihcInJlZmVyZW5jZVwiLCBsZi5UeXBlLlNUUklORylcblx0LmFkZENvbHVtbihcImFtb3VudFwiLCBsZi5UeXBlLlJFQUwpXG5cdC5hZGRDb2x1bW4oXCJ0YWdcIiwgbGYuVHlwZS5TVFJJTkcpXG5cdC5hZGRQcmltYXJ5S2V5KFtcImhhc2hcIl0pO1xuXG5zY2hlbWFCdWlsZGVyLmNvbm5lY3QoKS50aGVuKGRiID0+IHtcblx0d2luZG93LmRiID0gZGI7XG5cdHdpbmRvdy5yZWNvcmRzID0gZGIuZ2V0U2NoZW1hKCkudGFibGUoXCJSZWNvcmRcIik7XG5cblx0Ly8gcmVuZGVyIHRoZSBET01cblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9Pntyb3V0ZXN9PC9Sb3V0ZXI+LFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG5cdCk7XG5cblx0Ly8gbGlzdGVuIHRvIGxvY2F0aW9uIGNoYW5nZXNcblx0aGFzaEhpc3RvcnkubGlzdGVuKGxvY2F0aW9uID0+IHtcblx0XHRpZiAobG9jYXRpb24uYWN0aW9uID09PSBcIlBVU0hcIikge1xuXHRcdFx0Y29uc29sZS5pbmZvKFwiTmV3IHJvdXRlOlwiLCBsb2NhdGlvbi5wYXRobmFtZSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcbmltcG9ydCBJbXBvcnQgZnJvbSBcIi4vY29tcG9uZW50cy9JbXBvcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgKFxuXHQ8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG5cdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtNYWlufSAvPlxuXHRcdDxSb3V0ZSBwYXRoPVwiL2ltcG9ydFwiIGNvbXBvbmVudD17SW1wb3J0fSAvPlxuXHQ8L1JvdXRlPlxuKTtcbiIsImltcG9ydCBhbHQgZnJvbSBcIi4uL2FsdFwiO1xuaW1wb3J0IFJlY29yZHNBY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL1JlY29yZHNBY3Rpb25zXCI7XG5cbmNsYXNzIFJlY29yZHNTdG9yZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYmluZEFjdGlvbnMoUmVjb3Jkc0FjdGlvbnMpO1xuXG5cdFx0dGhpcy5yZWNvcmRzID0gW107XG5cdH1cblxuXHRsb2FkUmVzdWx0cyhyZXN1bHRzKSB7XG5cdFx0Y29uc29sZS5sb2cocmVzdWx0cyk7XG5cdFx0dGhpcy5yZWNvcmRzID0gcmVzdWx0cztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoUmVjb3Jkc1N0b3JlKTtcbiIsIi8qXG4gICAgRXhwb3NlIG91ciBuYWl2ZS1iYXllcyBnZW5lcmF0b3IgZnVuY3Rpb25cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICByZXR1cm4gbmV3IE5haXZlYmF5ZXMob3B0aW9ucylcbn1cblxuLy8ga2V5cyB3ZSB1c2UgdG8gc2VyaWFsaXplIGEgY2xhc3NpZmllcidzIHN0YXRlXG52YXIgU1RBVEVfS0VZUyA9IG1vZHVsZS5leHBvcnRzLlNUQVRFX0tFWVMgPSBbXG4gICdjYXRlZ29yaWVzJywgJ2RvY0NvdW50JywgJ3RvdGFsRG9jdW1lbnRzJywgJ3ZvY2FidWxhcnknLCAndm9jYWJ1bGFyeVNpemUnLFxuICAnd29yZENvdW50JywgJ3dvcmRGcmVxdWVuY3lDb3VudCcsICdvcHRpb25zJ1xuXTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhIE5haXZlQmF5ZXMgaW5zdGFuY2UgZnJvbSBhIEpTT04gc3RhdGUgcmVwcmVzZW50YXRpb24uXG4gKiBVc2UgdGhpcyB3aXRoIGNsYXNzaWZpZXIudG9Kc29uKCkuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBqc29uU3RyICAgc3RhdGUgcmVwcmVzZW50YXRpb24gb2J0YWluZWQgYnkgY2xhc3NpZmllci50b0pzb24oKVxuICogQHJldHVybiB7TmFpdmVCYXllc30gICAgICAgQ2xhc3NpZmllclxuICovXG5tb2R1bGUuZXhwb3J0cy5mcm9tSnNvbiA9IGZ1bmN0aW9uIChqc29uU3RyKSB7XG4gIHZhciBwYXJzZWQ7XG4gIHRyeSB7XG4gICAgcGFyc2VkID0gSlNPTi5wYXJzZShqc29uU3RyKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOYWl2ZWJheWVzLmZyb21Kc29uIGV4cGVjdHMgYSB2YWxpZCBKU09OIHN0cmluZy4nKVxuICB9XG4gIC8vIGluaXQgYSBuZXcgY2xhc3NpZmllclxuICB2YXIgY2xhc3NpZmllciA9IG5ldyBOYWl2ZWJheWVzKHBhcnNlZC5vcHRpb25zKVxuXG4gIC8vIG92ZXJyaWRlIHRoZSBjbGFzc2lmaWVyJ3Mgc3RhdGVcbiAgU1RBVEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKCFwYXJzZWRba10pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFpdmViYXllcy5mcm9tSnNvbjogSlNPTiBzdHJpbmcgaXMgbWlzc2luZyBhbiBleHBlY3RlZCBwcm9wZXJ0eTogYCcraysnYC4nKVxuICAgIH1cbiAgICBjbGFzc2lmaWVyW2tdID0gcGFyc2VkW2tdXG4gIH0pXG5cbiAgcmV0dXJuIGNsYXNzaWZpZXJcbn1cblxuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCBzdHJpbmcsIHRva2VuaXplIGl0IGludG8gYW4gYXJyYXkgb2Ygd29yZCB0b2tlbnMuXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IHRva2VuaXphdGlvbiBmdW5jdGlvbiB1c2VkIGlmIHVzZXIgZG9lcyBub3QgcHJvdmlkZSBvbmUgaW4gYG9wdGlvbnNgLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdGV4dFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbnZhciBkZWZhdWx0VG9rZW5pemVyID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgLy9yZW1vdmUgcHVuY3R1YXRpb24gZnJvbSB0ZXh0IC0gcmVtb3ZlIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSB3b3JkIGNoYXIgb3IgYSBzcGFjZVxuICB2YXIgcmd4UHVuY3R1YXRpb24gPSAvW14oYS16QS1aQS3Qr2Et0Y8wLTlfKStcXHNdL2dcblxuICB2YXIgc2FuaXRpemVkID0gdGV4dC5yZXBsYWNlKHJneFB1bmN0dWF0aW9uLCAnICcpXG5cbiAgcmV0dXJuIHNhbml0aXplZC5zcGxpdCgvXFxzKy8pXG59XG5cbi8qKlxuICogTmFpdmUtQmF5ZXMgQ2xhc3NpZmllclxuICpcbiAqIFRoaXMgaXMgYSBuYWl2ZS1iYXllcyBjbGFzc2lmaWVyIHRoYXQgdXNlcyBMYXBsYWNlIFNtb290aGluZy5cbiAqXG4gKiBUYWtlcyBhbiAob3B0aW9uYWwpIG9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmc6XG4gKiAgIC0gYHRva2VuaXplcmAgID0+IGN1c3RvbSB0b2tlbml6YXRpb24gZnVuY3Rpb25cbiAqXG4gKi9cbmZ1bmN0aW9uIE5haXZlYmF5ZXMgKG9wdGlvbnMpIHtcbiAgLy8gc2V0IG9wdGlvbnMgb2JqZWN0XG4gIHRoaXMub3B0aW9ucyA9IHt9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFpdmVCYXllcyBnb3QgaW52YWxpZCBgb3B0aW9uc2A6IGAnICsgb3B0aW9ucyArICdgLiBQYXNzIGluIGFuIG9iamVjdC4nKVxuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICB0aGlzLnRva2VuaXplciA9IHRoaXMub3B0aW9ucy50b2tlbml6ZXIgfHwgZGVmYXVsdFRva2VuaXplclxuXG4gIC8vaW5pdGlhbGl6ZSBvdXIgdm9jYWJ1bGFyeSBhbmQgaXRzIHNpemVcbiAgdGhpcy52b2NhYnVsYXJ5ID0ge31cbiAgdGhpcy52b2NhYnVsYXJ5U2l6ZSA9IDBcblxuICAvL251bWJlciBvZiBkb2N1bWVudHMgd2UgaGF2ZSBsZWFybmVkIGZyb21cbiAgdGhpcy50b3RhbERvY3VtZW50cyA9IDBcblxuICAvL2RvY3VtZW50IGZyZXF1ZW5jeSB0YWJsZSBmb3IgZWFjaCBvZiBvdXIgY2F0ZWdvcmllc1xuICAvLz0+IGZvciBlYWNoIGNhdGVnb3J5LCBob3cgb2Z0ZW4gd2VyZSBkb2N1bWVudHMgbWFwcGVkIHRvIGl0XG4gIHRoaXMuZG9jQ291bnQgPSB7fVxuXG4gIC8vZm9yIGVhY2ggY2F0ZWdvcnksIGhvdyBtYW55IHdvcmRzIHRvdGFsIHdlcmUgbWFwcGVkIHRvIGl0XG4gIHRoaXMud29yZENvdW50ID0ge31cblxuICAvL3dvcmQgZnJlcXVlbmN5IHRhYmxlIGZvciBlYWNoIGNhdGVnb3J5XG4gIC8vPT4gZm9yIGVhY2ggY2F0ZWdvcnksIGhvdyBmcmVxdWVudCB3YXMgYSBnaXZlbiB3b3JkIG1hcHBlZCB0byBpdFxuICB0aGlzLndvcmRGcmVxdWVuY3lDb3VudCA9IHt9XG5cbiAgLy9oYXNobWFwIG9mIG91ciBjYXRlZ29yeSBuYW1lc1xuICB0aGlzLmNhdGVnb3JpZXMgPSB7fVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgZWFjaCBvZiBvdXIgZGF0YSBzdHJ1Y3R1cmUgZW50cmllcyBmb3IgdGhpcyBuZXcgY2F0ZWdvcnlcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNhdGVnb3J5TmFtZVxuICovXG5OYWl2ZWJheWVzLnByb3RvdHlwZS5pbml0aWFsaXplQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnlOYW1lKSB7XG4gIGlmICghdGhpcy5jYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0pIHtcbiAgICB0aGlzLmRvY0NvdW50W2NhdGVnb3J5TmFtZV0gPSAwXG4gICAgdGhpcy53b3JkQ291bnRbY2F0ZWdvcnlOYW1lXSA9IDBcbiAgICB0aGlzLndvcmRGcmVxdWVuY3lDb3VudFtjYXRlZ29yeU5hbWVdID0ge31cbiAgICB0aGlzLmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXSA9IHRydWVcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIHRyYWluIG91ciBuYWl2ZS1iYXllcyBjbGFzc2lmaWVyIGJ5IHRlbGxpbmcgaXQgd2hhdCBgY2F0ZWdvcnlgXG4gKiB0aGUgYHRleHRgIGNvcnJlc3BvbmRzIHRvLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdGV4dFxuICogQHBhcmFtICB7U3RyaW5nfSBjbGFzc1xuICovXG5OYWl2ZWJheWVzLnByb3RvdHlwZS5sZWFybiA9IGZ1bmN0aW9uICh0ZXh0LCBjYXRlZ29yeSkge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICAvL2luaXRpYWxpemUgY2F0ZWdvcnkgZGF0YSBzdHJ1Y3R1cmVzIGlmIHdlJ3ZlIG5ldmVyIHNlZW4gdGhpcyBjYXRlZ29yeVxuICBzZWxmLmluaXRpYWxpemVDYXRlZ29yeShjYXRlZ29yeSlcblxuICAvL3VwZGF0ZSBvdXIgY291bnQgb2YgaG93IG1hbnkgZG9jdW1lbnRzIG1hcHBlZCB0byB0aGlzIGNhdGVnb3J5XG4gIHNlbGYuZG9jQ291bnRbY2F0ZWdvcnldKytcblxuICAvL3VwZGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIGRvY3VtZW50cyB3ZSBoYXZlIGxlYXJuZWQgZnJvbVxuICBzZWxmLnRvdGFsRG9jdW1lbnRzKytcblxuICAvL25vcm1hbGl6ZSB0aGUgdGV4dCBpbnRvIGEgd29yZCBhcnJheVxuICB2YXIgdG9rZW5zID0gc2VsZi50b2tlbml6ZXIodGV4dClcblxuICAvL2dldCBhIGZyZXF1ZW5jeSBjb3VudCBmb3IgZWFjaCB0b2tlbiBpbiB0aGUgdGV4dFxuICB2YXIgZnJlcXVlbmN5VGFibGUgPSBzZWxmLmZyZXF1ZW5jeVRhYmxlKHRva2VucylcblxuICAvKlxuICAgICAgVXBkYXRlIG91ciB2b2NhYnVsYXJ5IGFuZCBvdXIgd29yZCBmcmVxdWVuY3kgY291bnQgZm9yIHRoaXMgY2F0ZWdvcnlcbiAgICovXG5cbiAgT2JqZWN0XG4gIC5rZXlzKGZyZXF1ZW5jeVRhYmxlKVxuICAuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAvL2FkZCB0aGlzIHdvcmQgdG8gb3VyIHZvY2FidWxhcnkgaWYgbm90IGFscmVhZHkgZXhpc3RpbmdcbiAgICBpZiAoIXNlbGYudm9jYWJ1bGFyeVt0b2tlbl0pIHtcbiAgICAgIHNlbGYudm9jYWJ1bGFyeVt0b2tlbl0gPSB0cnVlXG4gICAgICBzZWxmLnZvY2FidWxhcnlTaXplKytcbiAgICB9XG5cbiAgICB2YXIgZnJlcXVlbmN5SW5UZXh0ID0gZnJlcXVlbmN5VGFibGVbdG9rZW5dXG5cbiAgICAvL3VwZGF0ZSB0aGUgZnJlcXVlbmN5IGluZm9ybWF0aW9uIGZvciB0aGlzIHdvcmQgaW4gdGhpcyBjYXRlZ29yeVxuICAgIGlmICghc2VsZi53b3JkRnJlcXVlbmN5Q291bnRbY2F0ZWdvcnldW3Rva2VuXSlcbiAgICAgIHNlbGYud29yZEZyZXF1ZW5jeUNvdW50W2NhdGVnb3J5XVt0b2tlbl0gPSBmcmVxdWVuY3lJblRleHRcbiAgICBlbHNlXG4gICAgICBzZWxmLndvcmRGcmVxdWVuY3lDb3VudFtjYXRlZ29yeV1bdG9rZW5dICs9IGZyZXF1ZW5jeUluVGV4dFxuXG4gICAgLy91cGRhdGUgdGhlIGNvdW50IG9mIGFsbCB3b3JkcyB3ZSBoYXZlIHNlZW4gbWFwcGVkIHRvIHRoaXMgY2F0ZWdvcnlcbiAgICBzZWxmLndvcmRDb3VudFtjYXRlZ29yeV0gKz0gZnJlcXVlbmN5SW5UZXh0XG4gIH0pXG5cbiAgcmV0dXJuIHNlbGZcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hhdCBjYXRlZ29yeSBgdGV4dGAgYmVsb25ncyB0by5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHRleHRcbiAqIEByZXR1cm4ge1N0cmluZ30gY2F0ZWdvcnlcbiAqL1xuTmFpdmViYXllcy5wcm90b3R5cGUuY2F0ZWdvcml6ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICAgICwgbWF4UHJvYmFiaWxpdHkgPSAtSW5maW5pdHlcbiAgICAsIGNob3NlbkNhdGVnb3J5ID0gbnVsbFxuXG4gIHZhciB0b2tlbnMgPSBzZWxmLnRva2VuaXplcih0ZXh0KVxuICB2YXIgZnJlcXVlbmN5VGFibGUgPSBzZWxmLmZyZXF1ZW5jeVRhYmxlKHRva2VucylcblxuICAvL2l0ZXJhdGUgdGhydSBvdXIgY2F0ZWdvcmllcyB0byBmaW5kIHRoZSBvbmUgd2l0aCBtYXggcHJvYmFiaWxpdHkgZm9yIHRoaXMgdGV4dFxuICBPYmplY3RcbiAgLmtleXMoc2VsZi5jYXRlZ29yaWVzKVxuICAuZm9yRWFjaChmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcblxuICAgIC8vc3RhcnQgYnkgY2FsY3VsYXRpbmcgdGhlIG92ZXJhbGwgcHJvYmFiaWxpdHkgb2YgdGhpcyBjYXRlZ29yeVxuICAgIC8vPT4gIG91dCBvZiBhbGwgZG9jdW1lbnRzIHdlJ3ZlIGV2ZXIgbG9va2VkIGF0LCBob3cgbWFueSB3ZXJlXG4gICAgLy8gICAgbWFwcGVkIHRvIHRoaXMgY2F0ZWdvcnlcbiAgICB2YXIgY2F0ZWdvcnlQcm9iYWJpbGl0eSA9IHNlbGYuZG9jQ291bnRbY2F0ZWdvcnldIC8gc2VsZi50b3RhbERvY3VtZW50c1xuXG4gICAgLy90YWtlIHRoZSBsb2cgdG8gYXZvaWQgdW5kZXJmbG93XG4gICAgdmFyIGxvZ1Byb2JhYmlsaXR5ID0gTWF0aC5sb2coY2F0ZWdvcnlQcm9iYWJpbGl0eSlcblxuICAgIC8vbm93IGRldGVybWluZSBQKCB3IHwgYyApIGZvciBlYWNoIHdvcmQgYHdgIGluIHRoZSB0ZXh0XG4gICAgT2JqZWN0XG4gICAgLmtleXMoZnJlcXVlbmN5VGFibGUpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICB2YXIgZnJlcXVlbmN5SW5UZXh0ID0gZnJlcXVlbmN5VGFibGVbdG9rZW5dXG4gICAgICB2YXIgdG9rZW5Qcm9iYWJpbGl0eSA9IHNlbGYudG9rZW5Qcm9iYWJpbGl0eSh0b2tlbiwgY2F0ZWdvcnkpXG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2tlbjogJXMgY2F0ZWdvcnk6IGAlc2AgdG9rZW5Qcm9iYWJpbGl0eTogJWQnLCB0b2tlbiwgY2F0ZWdvcnksIHRva2VuUHJvYmFiaWxpdHkpXG5cbiAgICAgIC8vZGV0ZXJtaW5lIHRoZSBsb2cgb2YgdGhlIFAoIHcgfCBjICkgZm9yIHRoaXMgd29yZFxuICAgICAgbG9nUHJvYmFiaWxpdHkgKz0gZnJlcXVlbmN5SW5UZXh0ICogTWF0aC5sb2codG9rZW5Qcm9iYWJpbGl0eSlcbiAgICB9KVxuXG4gICAgaWYgKGxvZ1Byb2JhYmlsaXR5ID4gbWF4UHJvYmFiaWxpdHkpIHtcbiAgICAgIG1heFByb2JhYmlsaXR5ID0gbG9nUHJvYmFiaWxpdHlcbiAgICAgIGNob3NlbkNhdGVnb3J5ID0gY2F0ZWdvcnlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGNob3NlbkNhdGVnb3J5XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHByb2JhYmlsaXR5IHRoYXQgYSBgdG9rZW5gIGJlbG9uZ3MgdG8gYSBgY2F0ZWdvcnlgXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB0b2tlblxuICogQHBhcmFtICB7U3RyaW5nfSBjYXRlZ29yeVxuICogQHJldHVybiB7TnVtYmVyfSBwcm9iYWJpbGl0eVxuICovXG5OYWl2ZWJheWVzLnByb3RvdHlwZS50b2tlblByb2JhYmlsaXR5ID0gZnVuY3Rpb24gKHRva2VuLCBjYXRlZ29yeSkge1xuICAvL2hvdyBtYW55IHRpbWVzIHRoaXMgd29yZCBoYXMgb2NjdXJyZWQgaW4gZG9jdW1lbnRzIG1hcHBlZCB0byB0aGlzIGNhdGVnb3J5XG4gIHZhciB3b3JkRnJlcXVlbmN5Q291bnQgPSB0aGlzLndvcmRGcmVxdWVuY3lDb3VudFtjYXRlZ29yeV1bdG9rZW5dIHx8IDBcblxuICAvL3doYXQgaXMgdGhlIGNvdW50IG9mIGFsbCB3b3JkcyB0aGF0IGhhdmUgZXZlciBiZWVuIG1hcHBlZCB0byB0aGlzIGNhdGVnb3J5XG4gIHZhciB3b3JkQ291bnQgPSB0aGlzLndvcmRDb3VudFtjYXRlZ29yeV1cblxuICAvL3VzZSBsYXBsYWNlIEFkZC0xIFNtb290aGluZyBlcXVhdGlvblxuICByZXR1cm4gKCB3b3JkRnJlcXVlbmN5Q291bnQgKyAxICkgLyAoIHdvcmRDb3VudCArIHRoaXMudm9jYWJ1bGFyeVNpemUgKVxufVxuXG4vKipcbiAqIEJ1aWxkIGEgZnJlcXVlbmN5IGhhc2htYXAgd2hlcmVcbiAqIC0gdGhlIGtleXMgYXJlIHRoZSBlbnRyaWVzIGluIGB0b2tlbnNgXG4gKiAtIHRoZSB2YWx1ZXMgYXJlIHRoZSBmcmVxdWVuY3kgb2YgZWFjaCBlbnRyeSBpbiBgdG9rZW5zYFxuICpcbiAqIEBwYXJhbSAge0FycmF5fSB0b2tlbnMgIE5vcm1hbGl6ZWQgd29yZCBhcnJheVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5OYWl2ZWJheWVzLnByb3RvdHlwZS5mcmVxdWVuY3lUYWJsZSA9IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgdmFyIGZyZXF1ZW5jeVRhYmxlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmICghZnJlcXVlbmN5VGFibGVbdG9rZW5dKVxuICAgICAgZnJlcXVlbmN5VGFibGVbdG9rZW5dID0gMVxuICAgIGVsc2VcbiAgICAgIGZyZXF1ZW5jeVRhYmxlW3Rva2VuXSsrXG4gIH0pXG5cbiAgcmV0dXJuIGZyZXF1ZW5jeVRhYmxlXG59XG5cbi8qKlxuICogRHVtcCB0aGUgY2xhc3NpZmllcidzIHN0YXRlIGFzIGEgSlNPTiBzdHJpbmcuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlcHJlc2VudGF0aW9uIG9mIHRoZSBjbGFzc2lmaWVyLlxuICovXG5OYWl2ZWJheWVzLnByb3RvdHlwZS50b0pzb24gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IHt9XG4gIHZhciBzZWxmID0gdGhpc1xuICBTVEFURV9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBzdGF0ZVtrXSA9IHNlbGZba11cbiAgfSlcblxuICB2YXIganNvblN0ciA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKVxuXG4gIHJldHVybiBqc29uU3RyXG59XG5cblxuXG4iLCJ2YXIgY2hhcmVuYyA9IHtcbiAgLy8gVVRGLTggZW5jb2RpbmdcbiAgdXRmODoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gY2hhcmVuYy5iaW4uc3RyaW5nVG9CeXRlcyh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShjaGFyZW5jLmJpbi5ieXRlc1RvU3RyaW5nKGJ5dGVzKSkpO1xuICAgIH1cbiAgfSxcblxuICAvLyBCaW5hcnkgZW5jb2RpbmdcbiAgYmluOiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxuICAgICAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHN0ciA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICBzdHIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKSk7XG4gICAgICByZXR1cm4gc3RyLmpvaW4oJycpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFyZW5jO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZTY0bWFwXG4gICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJyxcblxuICBjcnlwdCA9IHtcbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiBsZWZ0XG4gICAgcm90bDogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8IGIpIHwgKG4gPj4+ICgzMiAtIGIpKTtcbiAgICB9LFxuXG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gcmlnaHRcbiAgICByb3RyOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgKDMyIC0gYikpIHwgKG4gPj4+IGIpO1xuICAgIH0sXG5cbiAgICAvLyBTd2FwIGJpZy1lbmRpYW4gdG8gbGl0dGxlLWVuZGlhbiBhbmQgdmljZSB2ZXJzYVxuICAgIGVuZGlhbjogZnVuY3Rpb24obikge1xuICAgICAgLy8gSWYgbnVtYmVyIGdpdmVuLCBzd2FwIGVuZGlhblxuICAgICAgaWYgKG4uY29uc3RydWN0b3IgPT0gTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjcnlwdC5yb3RsKG4sIDgpICYgMHgwMEZGMDBGRiB8IGNyeXB0LnJvdGwobiwgMjQpICYgMHhGRjAwRkYwMDtcbiAgICAgIH1cblxuICAgICAgLy8gRWxzZSwgYXNzdW1lIGFycmF5IGFuZCBzd2FwIGFsbCBpdGVtc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKVxuICAgICAgICBuW2ldID0gY3J5cHQuZW5kaWFuKG5baV0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcblxuICAgIC8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIGFueSBsZW5ndGggb2YgcmFuZG9tIGJ5dGVzXG4gICAgcmFuZG9tQnl0ZXM6IGZ1bmN0aW9uKG4pIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW107IG4gPiAwOyBuLS0pXG4gICAgICAgIGJ5dGVzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGJpZy1lbmRpYW4gMzItYml0IHdvcmRzXG4gICAgYnl0ZXNUb1dvcmRzOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgd29yZHMgPSBbXSwgaSA9IDAsIGIgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyssIGIgKz0gOClcbiAgICAgICAgd29yZHNbYiA+Pj4gNV0gfD0gYnl0ZXNbaV0gPDwgKDI0IC0gYiAlIDMyKTtcbiAgICAgIHJldHVybiB3b3JkcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBiaWctZW5kaWFuIDMyLWJpdCB3b3JkcyB0byBhIGJ5dGUgYXJyYXlcbiAgICB3b3Jkc1RvQnl0ZXM6IGZ1bmN0aW9uKHdvcmRzKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBiID0gMDsgYiA8IHdvcmRzLmxlbmd0aCAqIDMyOyBiICs9IDgpXG4gICAgICAgIGJ5dGVzLnB1c2goKHdvcmRzW2IgPj4+IDVdID4+PiAoMjQgLSBiICUgMzIpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGhleCBzdHJpbmdcbiAgICBieXRlc1RvSGV4OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgaGV4ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldID4+PiA0KS50b1N0cmluZygxNikpO1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gJiAweEYpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgaGV4IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBoZXhUb0J5dGVzOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGMgPSAwOyBjIDwgaGV4Lmxlbmd0aDsgYyArPSAyKVxuICAgICAgICBieXRlcy5wdXNoKHBhcnNlSW50KGhleC5zdWJzdHIoYywgMiksIDE2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgYmFzZS02NCBzdHJpbmdcbiAgICBieXRlc1RvQmFzZTY0OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgYmFzZTY0ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspXG4gICAgICAgICAgaWYgKGkgKiA4ICsgaiAqIDYgPD0gYnl0ZXMubGVuZ3RoICogOClcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKGJhc2U2NG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+IDYgKiAoMyAtIGopKSAmIDB4M0YpKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBiYXNlNjQucHVzaCgnPScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2U2NC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJhc2UtNjQgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGJhc2U2NFRvQnl0ZXM6IGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgICAgLy8gUmVtb3ZlIG5vbi1iYXNlLTY0IGNoYXJhY3RlcnNcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5yZXBsYWNlKC9bXkEtWjAtOStcXC9dL2lnLCAnJyk7XG5cbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwLCBpbW9kNCA9IDA7IGkgPCBiYXNlNjQubGVuZ3RoO1xuICAgICAgICAgIGltb2Q0ID0gKytpICUgNCkge1xuICAgICAgICBpZiAoaW1vZDQgPT0gMCkgY29udGludWU7XG4gICAgICAgIGJ5dGVzLnB1c2goKChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkgLSAxKSlcbiAgICAgICAgICAgICYgKE1hdGgucG93KDIsIC0yICogaW1vZDQgKyA4KSAtIDEpKSA8PCAoaW1vZDQgKiAyKSlcbiAgICAgICAgICAgIHwgKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSkpID4+PiAoNiAtIGltb2Q0ICogMikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBjcnlwdDtcbn0pKCk7XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsImlmKCFzZWxmLndpbmRvdyl7d2luZG93PXNlbGY7fVxuKGZ1bmN0aW9uKCl7J3VzZSBzdHJpY3QnO2Z1bmN0aW9uIGFhKCl7cmV0dXJuIGZ1bmN0aW9uKCl7fX1mdW5jdGlvbiBiYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dGhpc1thXT1ifX1mdW5jdGlvbiBnKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0aGlzW2FdfX1mdW5jdGlvbiBrKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhfX12YXIgbSxkYT10aGlzO2Z1bmN0aW9uIG4oYSl7cmV0dXJuIHZvaWQgMCE9PWF9ZnVuY3Rpb24gZWEoKXt9XG5mdW5jdGlvbiBmYShhKXt2YXIgYj10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1iKWlmKGEpe2lmKGEgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm5cImFycmF5XCI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7aWYoXCJbb2JqZWN0IFdpbmRvd11cIj09YylyZXR1cm5cIm9iamVjdFwiO2lmKFwiW29iamVjdCBBcnJheV1cIj09Y3x8XCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RoJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5zcGxpY2UmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcInNwbGljZVwiKSlyZXR1cm5cImFycmF5XCI7aWYoXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT1jfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5jYWxsJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJjYWxsXCIpKXJldHVyblwiZnVuY3Rpb25cIn1lbHNlIHJldHVyblwibnVsbFwiO1xuZWxzZSBpZihcImZ1bmN0aW9uXCI9PWImJlwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmNhbGwpcmV0dXJuXCJvYmplY3RcIjtyZXR1cm4gYn1mdW5jdGlvbiBnYShhKXtyZXR1cm4gbnVsbCE9YX1mdW5jdGlvbiBoYShhKXt2YXIgYj1mYShhKTtyZXR1cm5cImFycmF5XCI9PWJ8fFwib2JqZWN0XCI9PWImJlwibnVtYmVyXCI9PXR5cGVvZiBhLmxlbmd0aH1mdW5jdGlvbiBpYShhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYX1mdW5jdGlvbiBqYShhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PWZhKGEpfWZ1bmN0aW9uIGthKGEpe3JldHVybiBhW2xhXXx8KGFbbGFdPSsrbWEpfXZhciBsYT1cImNsb3N1cmVfdWlkX1wiKygxRTkqTWF0aC5yYW5kb20oKT4+PjApLG1hPTA7ZnVuY3Rpb24gbmEoYSxiLGMpe3JldHVybiBhLmNhbGwuYXBwbHkoYS5iaW5kLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBvYShhLGIsYyl7aWYoIWEpdGhyb3cgRXJyb3IoKTtpZigyPGFyZ3VtZW50cy5sZW5ndGgpe3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO0FycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGMsZCk7cmV0dXJuIGEuYXBwbHkoYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBwYShhLGIsYyl7cGE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9uYTpvYTtyZXR1cm4gcGEuYXBwbHkobnVsbCxhcmd1bWVudHMpfVxuZnVuY3Rpb24gcWEoYSxiKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGI9Yy5zbGljZSgpO2IucHVzaC5hcHBseShiLGFyZ3VtZW50cyk7cmV0dXJuIGEuYXBwbHkodGhpcyxiKX19ZnVuY3Rpb24gcShhLGIpe2E9YS5zcGxpdChcIi5cIik7dmFyIGM9ZGE7YVswXWluIGN8fCFjLmV4ZWNTY3JpcHR8fGMuZXhlY1NjcmlwdChcInZhciBcIithWzBdKTtmb3IodmFyIGQ7YS5sZW5ndGgmJihkPWEuc2hpZnQoKSk7KSFhLmxlbmd0aCYmbihiKT9jW2RdPWI6Yz1jW2RdJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYyxkKT9jW2RdOmNbZF09e319XG5mdW5jdGlvbiByKGEsYil7ZnVuY3Rpb24gYygpe31jLnByb3RvdHlwZT1iLnByb3RvdHlwZTthLmhiPWIucHJvdG90eXBlO2EucHJvdG90eXBlPW5ldyBjO2EucHJvdG90eXBlLmNvbnN0cnVjdG9yPWE7YS5WZz1mdW5jdGlvbihhLGMsZil7Zm9yKHZhciBkPUFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMiksZT0yO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZFtlLTJdPWFyZ3VtZW50c1tlXTtyZXR1cm4gYi5wcm90b3R5cGVbY10uYXBwbHkoYSxkKX19O2Z1bmN0aW9uIHJhKGEpe2lmKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKUVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMscmEpO2Vsc2V7dmFyIGI9RXJyb3IoKS5zdGFjaztiJiYodGhpcy5zdGFjaz1iKX1hJiYodGhpcy5tZXNzYWdlPVN0cmluZyhhKSl9cihyYSxFcnJvcik7cmEucHJvdG90eXBlLm5hbWU9XCJDdXN0b21FcnJvclwiO3ZhciB0YT1TdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudHJpbSgpfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csXCJcIil9O1xuZnVuY3Rpb24gdWEoYSxiKXt2YXIgYz0wO2E9dGEoU3RyaW5nKGEpKS5zcGxpdChcIi5cIik7Yj10YShTdHJpbmcoYikpLnNwbGl0KFwiLlwiKTtmb3IodmFyIGQ9TWF0aC5tYXgoYS5sZW5ndGgsYi5sZW5ndGgpLGU9MDswPT1jJiZlPGQ7ZSsrKXt2YXIgZj1hW2VdfHxcIlwiLGg9YltlXXx8XCJcIjtkb3tmPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGYpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07aD0vKFxcZCopKFxcRCopKC4qKS8uZXhlYyhoKXx8W1wiXCIsXCJcIixcIlwiLFwiXCJdO2lmKDA9PWZbMF0ubGVuZ3RoJiYwPT1oWzBdLmxlbmd0aClicmVhaztjPXZhKDA9PWZbMV0ubGVuZ3RoPzA6cGFyc2VJbnQoZlsxXSwxMCksMD09aFsxXS5sZW5ndGg/MDpwYXJzZUludChoWzFdLDEwKSl8fHZhKDA9PWZbMl0ubGVuZ3RoLDA9PWhbMl0ubGVuZ3RoKXx8dmEoZlsyXSxoWzJdKTtmPWZbM107aD1oWzNdfXdoaWxlKDA9PWMpfXJldHVybiBjfWZ1bmN0aW9uIHZhKGEsYil7cmV0dXJuIGE8Yj8tMTphPmI/MTowfTtmdW5jdGlvbiB3YShhLGIsYyl7dGhpcy5wZz1jO3RoaXMuT2Y9YTt0aGlzLktnPWI7dGhpcy5xZD0wO3RoaXMuZmQ9bnVsbH13YS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKCl7dmFyIGE7MDx0aGlzLnFkPyh0aGlzLnFkLS0sYT10aGlzLmZkLHRoaXMuZmQ9YS5uZXh0LGEubmV4dD1udWxsKTphPXRoaXMuT2YoKTtyZXR1cm4gYX07d2EucHJvdG90eXBlLnB1dD1mdW5jdGlvbihhKXt0aGlzLktnKGEpO3RoaXMucWQ8dGhpcy5wZyYmKHRoaXMucWQrKyxhLm5leHQ9dGhpcy5mZCx0aGlzLmZkPWEpfTt2YXIgeGE9QXJyYXkucHJvdG90eXBlLmluZGV4T2Y/ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbD09Yz8wOjA+Yz9NYXRoLm1heCgwLGEubGVuZ3RoK2MpOmM7aWYoaWEoYSkpcmV0dXJuIGlhKGIpJiYxPT1iLmxlbmd0aD9hLmluZGV4T2YoYixjKTotMTtmb3IoO2M8YS5sZW5ndGg7YysrKWlmKGMgaW4gYSYmYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LHlhPUFycmF5LnByb3RvdHlwZS5mb3JFYWNoP2Z1bmN0aW9uKGEsYixjKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPWlhKGEpP2Euc3BsaXQoXCJcIik6YSxmPTA7ZjxkO2YrKylmIGluIGUmJmIuY2FsbChjLGVbZl0sZixhKX0semE9QXJyYXkucHJvdG90eXBlLm1hcD9mdW5jdGlvbihhLGIsYyl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhLFxuYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPUFycmF5KGQpLGY9aWEoYSk/YS5zcGxpdChcIlwiKTphLGg9MDtoPGQ7aCsrKWggaW4gZiYmKGVbaF09Yi5jYWxsKGMsZltoXSxoLGEpKTtyZXR1cm4gZX0sQWE9QXJyYXkucHJvdG90eXBlLnJlZHVjZT9mdW5jdGlvbihhLGIsYyxkKXtkJiYoYj1wYShiLGQpKTtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9Yzt5YShhLGZ1bmN0aW9uKGMsaCl7ZT1iLmNhbGwoZCxlLGMsaCxhKX0pO3JldHVybiBlfSxCYT1BcnJheS5wcm90b3R5cGUuc29tZT9mdW5jdGlvbihhLGIsYyl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGU9aWEoYSk/YS5zcGxpdChcIlwiKTphLGY9MDtmPGQ7ZisrKWlmKGYgaW4gZSYmYi5jYWxsKGMsZVtmXSxmLGEpKXJldHVybiEwO3JldHVybiExfTtcbmZ1bmN0aW9uIENhKGEsYixjKXtyZXR1cm4gMj49YXJndW1lbnRzLmxlbmd0aD9BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLGIpOkFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsYixjKX1mdW5jdGlvbiBEYShhKXtmb3IodmFyIGI9W10sYz0wO2M8YTtjKyspYltjXT0wO3JldHVybiBifWZ1bmN0aW9uIEVhKGEpe2Zvcih2YXIgYj1bXSxjPTA7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyl7dmFyIGQ9YXJndW1lbnRzW2NdO2lmKFwiYXJyYXlcIj09ZmEoZCkpZm9yKHZhciBlPTA7ZTxkLmxlbmd0aDtlKz04MTkyKWZvcih2YXIgZj1FYS5hcHBseShudWxsLENhKGQsZSxlKzgxOTIpKSxoPTA7aDxmLmxlbmd0aDtoKyspYi5wdXNoKGZbaF0pO2Vsc2UgYi5wdXNoKGQpfXJldHVybiBifTtmdW5jdGlvbiBGYShhKXt2YXIgYj1bXSxjPTAsZDtmb3IoZCBpbiBhKWJbYysrXT1hW2RdO3JldHVybiBifTt2YXIgR2E7YTp7dmFyIEhhPWRhLm5hdmlnYXRvcjtpZihIYSl7dmFyIElhPUhhLnVzZXJBZ2VudDtpZihJYSl7R2E9SWE7YnJlYWsgYX19R2E9XCJcIn1mdW5jdGlvbiB0KGEpe3JldHVybi0xIT1HYS5pbmRleE9mKGEpfTtmdW5jdGlvbiBKYSgpe3JldHVybiB0KFwiU2FmYXJpXCIpJiYhKEthKCl8fHQoXCJDb2FzdFwiKXx8dChcIk9wZXJhXCIpfHx0KFwiRWRnZVwiKXx8dChcIlNpbGtcIil8fHQoXCJBbmRyb2lkXCIpKX1mdW5jdGlvbiBLYSgpe3JldHVybih0KFwiQ2hyb21lXCIpfHx0KFwiQ3JpT1NcIikpJiYhdChcIkVkZ2VcIil9O2Z1bmN0aW9uIExhKGEpe2RhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBhO30sMCl9dmFyIE1hO1xuZnVuY3Rpb24gT2EoKXt2YXIgYT1kYS5NZXNzYWdlQ2hhbm5lbDtcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEmJlwidW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cucG9zdE1lc3NhZ2UmJndpbmRvdy5hZGRFdmVudExpc3RlbmVyJiYhdChcIlByZXN0b1wiKSYmKGE9ZnVuY3Rpb24oKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSUZSQU1FXCIpO2Euc3R5bGUuZGlzcGxheT1cIm5vbmVcIjthLnNyYz1cIlwiO2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChhKTt2YXIgYj1hLmNvbnRlbnRXaW5kb3csYT1iLmRvY3VtZW50O2Eub3BlbigpO2Eud3JpdGUoXCJcIik7YS5jbG9zZSgpO3ZhciBjPVwiY2FsbEltbWVkaWF0ZVwiK01hdGgucmFuZG9tKCksZD1cImZpbGU6XCI9PWIubG9jYXRpb24ucHJvdG9jb2w/XCIqXCI6Yi5sb2NhdGlvbi5wcm90b2NvbCtcIi8vXCIrYi5sb2NhdGlvbi5ob3N0LGE9cGEoZnVuY3Rpb24oYSl7aWYoKFwiKlwiPT1kfHxhLm9yaWdpbj09ZCkmJmEuZGF0YT09XG5jKXRoaXMucG9ydDEub25tZXNzYWdlKCl9LHRoaXMpO2IuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhLCExKTt0aGlzLnBvcnQxPXt9O3RoaXMucG9ydDI9e3Bvc3RNZXNzYWdlOmZ1bmN0aW9uKCl7Yi5wb3N0TWVzc2FnZShjLGQpfX19KTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGEmJiF0KFwiVHJpZGVudFwiKSYmIXQoXCJNU0lFXCIpKXt2YXIgYj1uZXcgYSxjPXt9LGQ9YztiLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbigpe2lmKG4oYy5uZXh0KSl7Yz1jLm5leHQ7dmFyIGE9Yy5GZTtjLkZlPW51bGw7YSgpfX07cmV0dXJuIGZ1bmN0aW9uKGEpe2QubmV4dD17RmU6YX07ZD1kLm5leHQ7Yi5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudCYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIik/ZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKTtcbmIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbDtiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYik7Yj1udWxsO2EoKTthPW51bGx9O2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChiKX06ZnVuY3Rpb24oYSl7ZGEuc2V0VGltZW91dChhLDApfX07ZnVuY3Rpb24gUGEoKXt0aGlzLkJkPXRoaXMub2M9bnVsbH12YXIgUmE9bmV3IHdhKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBRYX0sZnVuY3Rpb24oYSl7YS5yZXNldCgpfSwxMDApO1BhLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1SYS5nZXQoKTtjLnNldChhLGIpO3RoaXMuQmQ/dGhpcy5CZC5uZXh0PWM6dGhpcy5vYz1jO3RoaXMuQmQ9Y307UGEucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBhPW51bGw7dGhpcy5vYyYmKGE9dGhpcy5vYyx0aGlzLm9jPXRoaXMub2MubmV4dCx0aGlzLm9jfHwodGhpcy5CZD1udWxsKSxhLm5leHQ9bnVsbCk7cmV0dXJuIGF9O2Z1bmN0aW9uIFFhKCl7dGhpcy5uZXh0PXRoaXMuc2NvcGU9dGhpcy5UZD1udWxsfVFhLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLlRkPWE7dGhpcy5zY29wZT1iO3RoaXMubmV4dD1udWxsfTtcblFhLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMubmV4dD10aGlzLnNjb3BlPXRoaXMuVGQ9bnVsbH07ZnVuY3Rpb24gU2EoYSxiKXtUYXx8VWEoKTtWYXx8KFRhKCksVmE9ITApO1dhLmFkZChhLGIpfXZhciBUYTtmdW5jdGlvbiBVYSgpe2lmKC0xIT1TdHJpbmcoZGEuUHJvbWlzZSkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikpe3ZhciBhPWRhLlByb21pc2UucmVzb2x2ZSh2b2lkIDApO1RhPWZ1bmN0aW9uKCl7YS50aGVuKFhhKX19ZWxzZSBUYT1mdW5jdGlvbigpe3ZhciBhPVhhOyFqYShkYS5zZXRJbW1lZGlhdGUpfHxkYS5XaW5kb3cmJmRhLldpbmRvdy5wcm90b3R5cGUmJiF0KFwiRWRnZVwiKSYmZGEuV2luZG93LnByb3RvdHlwZS5zZXRJbW1lZGlhdGU9PWRhLnNldEltbWVkaWF0ZT8oTWF8fChNYT1PYSgpKSxNYShhKSk6ZGEuc2V0SW1tZWRpYXRlKGEpfX12YXIgVmE9ITEsV2E9bmV3IFBhO2Z1bmN0aW9uIFhhKCl7Zm9yKHZhciBhO2E9V2EucmVtb3ZlKCk7KXt0cnl7YS5UZC5jYWxsKGEuc2NvcGUpfWNhdGNoKGIpe0xhKGIpfVJhLnB1dChhKX1WYT0hMX07ZnVuY3Rpb24gdShhLGIpe3RoaXMuVGE9MDt0aGlzLm5mPXZvaWQgMDt0aGlzLlZjPXRoaXMuZGM9dGhpcy5EPW51bGw7dGhpcy5lZD10aGlzLlJkPSExO2lmKGEhPWVhKXRyeXt2YXIgYz10aGlzO2EuY2FsbChiLGZ1bmN0aW9uKGEpe1lhKGMsMixhKX0sZnVuY3Rpb24oYSl7WWEoYywzLGEpfSl9Y2F0Y2goZCl7WWEodGhpcywzLGQpfX1mdW5jdGlvbiBaYSgpe3RoaXMubmV4dD10aGlzLmNvbnRleHQ9dGhpcy5pYz10aGlzLkljPXRoaXMuY2hpbGQ9bnVsbDt0aGlzLkVkPSExfVphLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuY29udGV4dD10aGlzLmljPXRoaXMuSWM9dGhpcy5jaGlsZD1udWxsO3RoaXMuRWQ9ITF9O3ZhciAkYT1uZXcgd2EoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFphfSxmdW5jdGlvbihhKXthLnJlc2V0KCl9LDEwMCk7ZnVuY3Rpb24gYWIoYSxiLGMpe3ZhciBkPSRhLmdldCgpO2QuSWM9YTtkLmljPWI7ZC5jb250ZXh0PWM7cmV0dXJuIGR9XG5mdW5jdGlvbiB2KGEpe2lmKGEgaW5zdGFuY2VvZiB1KXJldHVybiBhO3ZhciBiPW5ldyB1KGVhKTtZYShiLDIsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gYmIoYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7YyhhKX0pfWZ1bmN0aW9uIGNiKGEsYixjKXtkYihhLGIsYyxudWxsKXx8U2EocWEoYixhKSl9ZnVuY3Rpb24gZWIoYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5sZW5ndGgsZT1bXTtpZihkKWZvcih2YXIgZj1mdW5jdGlvbihhLGMpe2QtLTtlW2FdPWM7MD09ZCYmYihlKX0saD1mdW5jdGlvbihhKXtjKGEpfSxsPTAscDtsPGEubGVuZ3RoO2wrKylwPWFbbF0sY2IocCxxYShmLGwpLGgpO2Vsc2UgYihlKX0pfWZ1bmN0aW9uIHcoKXt2YXIgYSxiLGM9bmV3IHUoZnVuY3Rpb24oYyxlKXthPWM7Yj1lfSk7cmV0dXJuIG5ldyBmYihjLGEsYil9XG51LnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZ2IodGhpcyxqYShhKT9hOm51bGwsamEoYik/YjpudWxsLGMpfTt1LnByb3RvdHlwZS50aGVuPXUucHJvdG90eXBlLnRoZW47dS5wcm90b3R5cGUuJGdvb2dfVGhlbmFibGU9ITA7dS5wcm90b3R5cGUudmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2IodGhpcyxudWxsLGEsYil9O2Z1bmN0aW9uIGhiKGEsYil7YS5kY3x8MiE9YS5UYSYmMyE9YS5UYXx8aWIoYSk7YS5WYz9hLlZjLm5leHQ9YjphLmRjPWI7YS5WYz1ifVxuZnVuY3Rpb24gZ2IoYSxiLGMsZCl7dmFyIGU9YWIobnVsbCxudWxsLG51bGwpO2UuY2hpbGQ9bmV3IHUoZnVuY3Rpb24oYSxoKXtlLkljPWI/ZnVuY3Rpb24oYyl7dHJ5e3ZhciBlPWIuY2FsbChkLGMpO2EoZSl9Y2F0Y2goTCl7aChMKX19OmE7ZS5pYz1jP2Z1bmN0aW9uKGIpe3RyeXt2YXIgZT1jLmNhbGwoZCxiKTshbihlKSYmYiBpbnN0YW5jZW9mIGpiP2goYik6YShlKX1jYXRjaChMKXtoKEwpfX06aH0pO2UuY2hpbGQuRD1hO2hiKGEsZSk7cmV0dXJuIGUuY2hpbGR9dS5wcm90b3R5cGUuUWc9ZnVuY3Rpb24oYSl7dGhpcy5UYT0wO1lhKHRoaXMsMixhKX07dS5wcm90b3R5cGUuUmc9ZnVuY3Rpb24oYSl7dGhpcy5UYT0wO1lhKHRoaXMsMyxhKX07XG5mdW5jdGlvbiBZYShhLGIsYyl7MD09YS5UYSYmKGE9PT1jJiYoYj0zLGM9bmV3IFR5cGVFcnJvcihcIlByb21pc2UgY2Fubm90IHJlc29sdmUgdG8gaXRzZWxmXCIpKSxhLlRhPTEsZGIoYyxhLlFnLGEuUmcsYSl8fChhLm5mPWMsYS5UYT1iLGEuRD1udWxsLGliKGEpLDMhPWJ8fGMgaW5zdGFuY2VvZiBqYnx8a2IoYSxjKSkpfWZ1bmN0aW9uIGRiKGEsYixjLGQpe2lmKGEgaW5zdGFuY2VvZiB1KXJldHVybiBoYihhLGFiKGJ8fGVhLGN8fG51bGwsZCkpLCEwO3ZhciBlO2lmKGEpdHJ5e2U9ISFhLiRnb29nX1RoZW5hYmxlfWNhdGNoKGgpe2U9ITF9ZWxzZSBlPSExO2lmKGUpcmV0dXJuIGEudGhlbihiLGMsZCksITA7ZT10eXBlb2YgYTtpZihcIm9iamVjdFwiPT1lJiZudWxsIT1hfHxcImZ1bmN0aW9uXCI9PWUpdHJ5e3ZhciBmPWEudGhlbjtpZihqYShmKSlyZXR1cm4gbGIoYSxmLGIsYyxkKSwhMH1jYXRjaChoKXtyZXR1cm4gYy5jYWxsKGQsaCksITB9cmV0dXJuITF9XG5mdW5jdGlvbiBsYihhLGIsYyxkLGUpe2Z1bmN0aW9uIGYoYSl7bHx8KGw9ITAsZC5jYWxsKGUsYSkpfWZ1bmN0aW9uIGgoYSl7bHx8KGw9ITAsYy5jYWxsKGUsYSkpfXZhciBsPSExO3RyeXtiLmNhbGwoYSxoLGYpfWNhdGNoKHApe2YocCl9fWZ1bmN0aW9uIGliKGEpe2EuUmR8fChhLlJkPSEwLFNhKGEuVmYsYSkpfWZ1bmN0aW9uIG1iKGEpe3ZhciBiPW51bGw7YS5kYyYmKGI9YS5kYyxhLmRjPWIubmV4dCxiLm5leHQ9bnVsbCk7YS5kY3x8KGEuVmM9bnVsbCk7cmV0dXJuIGJ9XG51LnByb3RvdHlwZS5WZj1mdW5jdGlvbigpe2Zvcih2YXIgYTthPW1iKHRoaXMpOyl7dmFyIGI9dGhpcy5UYSxjPXRoaXMubmY7aWYoMz09YiYmYS5pYyYmIWEuRWQpe3ZhciBkO2ZvcihkPXRoaXM7ZCYmZC5lZDtkPWQuRClkLmVkPSExfWlmKGEuY2hpbGQpYS5jaGlsZC5EPW51bGwsbmIoYSxiLGMpO2Vsc2UgdHJ5e2EuRWQ/YS5JYy5jYWxsKGEuY29udGV4dCk6bmIoYSxiLGMpfWNhdGNoKGUpe29iLmNhbGwobnVsbCxlKX0kYS5wdXQoYSl9dGhpcy5SZD0hMX07ZnVuY3Rpb24gbmIoYSxiLGMpezI9PWI/YS5JYy5jYWxsKGEuY29udGV4dCxjKTphLmljJiZhLmljLmNhbGwoYS5jb250ZXh0LGMpfWZ1bmN0aW9uIGtiKGEsYil7YS5lZD0hMDtTYShmdW5jdGlvbigpe2EuZWQmJm9iLmNhbGwobnVsbCxiKX0pfXZhciBvYj1MYTtmdW5jdGlvbiBqYihhKXtyYS5jYWxsKHRoaXMsYSl9cihqYixyYSk7amIucHJvdG90eXBlLm5hbWU9XCJjYW5jZWxcIjtcbmZ1bmN0aW9uIGZiKGEsYixjKXt0aGlzLmhhPWE7dGhpcy5yZXNvbHZlPWI7dGhpcy5yZWplY3Q9Y307ZnVuY3Rpb24gcGIoYSxiLGMsZCl7Yz1jfHxmdW5jdGlvbihhLGIpe3JldHVybiBhPT1ifTtkPWR8fGZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTtmb3IodmFyIGU9YS5sZW5ndGgsZj1iLmxlbmd0aCxoPVtdLGw9MDtsPGUrMTtsKyspaFtsXT1bXSxoW2xdWzBdPTA7Zm9yKHZhciBwPTA7cDxmKzE7cCsrKWhbMF1bcF09MDtmb3IobD0xO2w8PWU7bCsrKWZvcihwPTE7cDw9ZjtwKyspYyhhW2wtMV0sYltwLTFdKT9oW2xdW3BdPWhbbC0xXVtwLTFdKzE6aFtsXVtwXT1NYXRoLm1heChoW2wtMV1bcF0saFtsXVtwLTFdKTtmb3IodmFyIEw9W10sbD1lLHA9ZjswPGwmJjA8cDspYyhhW2wtMV0sYltwLTFdKT8oTC51bnNoaWZ0KGQobC0xLHAtMSkpLGwtLSxwLS0pOmhbbC0xXVtwXT5oW2xdW3AtMV0/bC0tOnAtLTtyZXR1cm4gTH1mdW5jdGlvbiBxYihhKXtyZXR1cm4gQWEoYXJndW1lbnRzLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGErY30sMCl9XG5mdW5jdGlvbiByYihhKXtyZXR1cm4gcWIuYXBwbHkobnVsbCxhcmd1bWVudHMpL2FyZ3VtZW50cy5sZW5ndGh9ZnVuY3Rpb24gc2IoYSl7dmFyIGI9YXJndW1lbnRzLmxlbmd0aDtpZigyPmIpcmV0dXJuIDA7dmFyIGM9cmIuYXBwbHkobnVsbCxhcmd1bWVudHMpO3JldHVybiBxYi5hcHBseShudWxsLHphKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5wb3coYS1jLDIpfSkpLyhiLTEpfWZ1bmN0aW9uIHRiKGEpe3JldHVybiBNYXRoLnNxcnQoc2IuYXBwbHkobnVsbCxhcmd1bWVudHMpKX07dmFyIHViPVwiU3RvcEl0ZXJhdGlvblwiaW4gZGE/ZGEuU3RvcEl0ZXJhdGlvbjp7bWVzc2FnZTpcIlN0b3BJdGVyYXRpb25cIixzdGFjazpcIlwifTtmdW5jdGlvbiB2Yigpe312Yi5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3Rocm93IHViO307dmIucHJvdG90eXBlLnBjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIHdiKGEpe2lmKGEgaW5zdGFuY2VvZiB2YilyZXR1cm4gYTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnBjKXJldHVybiBhLnBjKCExKTtpZihoYShhKSl7dmFyIGI9MCxjPW5ldyB2YjtjLm5leHQ9ZnVuY3Rpb24oKXtmb3IoOzspe2lmKGI+PWEubGVuZ3RoKXRocm93IHViO2lmKGIgaW4gYSlyZXR1cm4gYVtiKytdO2IrK319O3JldHVybiBjfXRocm93IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO31cbmZ1bmN0aW9uIHhiKGEsYil7aWYoaGEoYSkpdHJ5e3lhKGEsYix2b2lkIDApfWNhdGNoKGMpe2lmKGMhPT11Yil0aHJvdyBjO31lbHNle2E9d2IoYSk7dHJ5e2Zvcig7OyliLmNhbGwodm9pZCAwLGEubmV4dCgpLHZvaWQgMCxhKX1jYXRjaChjKXtpZihjIT09dWIpdGhyb3cgYzt9fX1mdW5jdGlvbiB5YihhKXtpZihCYShhcmd1bWVudHMsZnVuY3Rpb24oYSl7cmV0dXJuIWEubGVuZ3RofSl8fCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiBuZXcgdmI7dmFyIGI9bmV3IHZiLGM9YXJndW1lbnRzLGQ9RGEoYy5sZW5ndGgpO2IubmV4dD1mdW5jdGlvbigpe2lmKGQpe2Zvcih2YXIgYT16YShkLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGNbYl1bYV19KSxiPWQubGVuZ3RoLTE7MDw9YjtiLS0pe2lmKGRbYl08Y1tiXS5sZW5ndGgtMSl7ZFtiXSsrO2JyZWFrfWlmKDA9PWIpe2Q9bnVsbDticmVha31kW2JdPTB9cmV0dXJuIGF9dGhyb3cgdWI7fTtyZXR1cm4gYn07ZnVuY3Rpb24gemIoYSxiKXt0aGlzLmw9e307dGhpcy5hPVtdO3RoaXMuVWE9dGhpcy5FYj0wO3ZhciBjPWFyZ3VtZW50cy5sZW5ndGg7aWYoMTxjKXtpZihjJTIpdGhyb3cgRXJyb3IoXCJVbmV2ZW4gbnVtYmVyIG9mIGFyZ3VtZW50c1wiKTtmb3IodmFyIGQ9MDtkPGM7ZCs9Mil0aGlzLnNldChhcmd1bWVudHNbZF0sYXJndW1lbnRzW2QrMV0pfWVsc2UgYSYmdGhpcy5hZGRBbGwoYSl9bT16Yi5wcm90b3R5cGU7bS56Yz1nKFwiRWJcIik7bS5xYT1mdW5jdGlvbigpe0FiKHRoaXMpO2Zvcih2YXIgYT1bXSxiPTA7Yjx0aGlzLmEubGVuZ3RoO2IrKylhLnB1c2godGhpcy5sW3RoaXMuYVtiXV0pO3JldHVybiBhfTtmdW5jdGlvbiBCYihhKXtBYihhKTtyZXR1cm4gYS5hLmNvbmNhdCgpfW0uUGE9ZnVuY3Rpb24oYSl7cmV0dXJuIEViKHRoaXMubCxhKX07bS5qZD1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLkVifTtcbm0uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmw9e307dGhpcy5VYT10aGlzLkViPXRoaXMuYS5sZW5ndGg9MH07bS5yZW1vdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIEViKHRoaXMubCxhKT8oZGVsZXRlIHRoaXMubFthXSx0aGlzLkViLS0sdGhpcy5VYSsrLHRoaXMuYS5sZW5ndGg+Mip0aGlzLkViJiZBYih0aGlzKSwhMCk6ITF9O2Z1bmN0aW9uIEFiKGEpe2lmKGEuRWIhPWEuYS5sZW5ndGgpe2Zvcih2YXIgYj0wLGM9MDtiPGEuYS5sZW5ndGg7KXt2YXIgZD1hLmFbYl07RWIoYS5sLGQpJiYoYS5hW2MrK109ZCk7YisrfWEuYS5sZW5ndGg9Y31pZihhLkViIT1hLmEubGVuZ3RoKXtmb3IodmFyIGU9e30sYz1iPTA7YjxhLmEubGVuZ3RoOylkPWEuYVtiXSxFYihlLGQpfHwoYS5hW2MrK109ZCxlW2RdPTEpLGIrKzthLmEubGVuZ3RoPWN9fW0uZ2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIEViKHRoaXMubCxhKT90aGlzLmxbYV06Yn07XG5tLnNldD1mdW5jdGlvbihhLGIpe0ViKHRoaXMubCxhKXx8KHRoaXMuRWIrKyx0aGlzLmEucHVzaChhKSx0aGlzLlVhKyspO3RoaXMubFthXT1ifTttLmFkZEFsbD1mdW5jdGlvbihhKXt2YXIgYjtpZihhIGluc3RhbmNlb2YgemIpYj1CYihhKSxhPWEucWEoKTtlbHNle2I9W107dmFyIGM9MCxkO2ZvcihkIGluIGEpYltjKytdPWQ7YT1GYShhKX1mb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuc2V0KGJbY10sYVtjXSl9O20uZm9yRWFjaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1CYih0aGlzKSxkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj10aGlzLmdldChlKTthLmNhbGwoYixmLGUsdGhpcyl9fTttLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB6Yih0aGlzKX07XG5tLnBjPWZ1bmN0aW9uKGEpe0FiKHRoaXMpO3ZhciBiPTAsYz10aGlzLlVhLGQ9dGhpcyxlPW5ldyB2YjtlLm5leHQ9ZnVuY3Rpb24oKXtpZihjIT1kLlVhKXRocm93IEVycm9yKFwiVGhlIG1hcCBoYXMgY2hhbmdlZCBzaW5jZSB0aGUgaXRlcmF0b3Igd2FzIGNyZWF0ZWRcIik7aWYoYj49ZC5hLmxlbmd0aCl0aHJvdyB1Yjt2YXIgZT1kLmFbYisrXTtyZXR1cm4gYT9lOmQubFtlXX07cmV0dXJuIGV9O2Z1bmN0aW9uIEViKGEsYil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGIpfTtmdW5jdGlvbiBGYigpe3JldHVybiB0KFwiaVBob25lXCIpJiYhdChcImlQb2RcIikmJiF0KFwiaVBhZFwiKX07ZnVuY3Rpb24gR2IoYSxiKXt2YXIgYz1IYjtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsYSk/Y1thXTpjW2FdPWIoYSl9O3ZhciBJYj10KFwiT3BlcmFcIiksSmI9dChcIlRyaWRlbnRcIil8fHQoXCJNU0lFXCIpLEtiPXQoXCJFZGdlXCIpLExiPXQoXCJHZWNrb1wiKSYmISgtMSE9R2EudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwid2Via2l0XCIpJiYhdChcIkVkZ2VcIikpJiYhKHQoXCJUcmlkZW50XCIpfHx0KFwiTVNJRVwiKSkmJiF0KFwiRWRnZVwiKSxNYj0tMSE9R2EudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwid2Via2l0XCIpJiYhdChcIkVkZ2VcIiksTmI9dChcIk1hY2ludG9zaFwiKSxPYj10KFwiV2luZG93c1wiKSxQYj10KFwiQW5kcm9pZFwiKSxRYj1GYigpLFJiPXQoXCJpUGFkXCIpLFNiPXQoXCJpUG9kXCIpLFRiO1xuYTp7dmFyIFViPVwiXCIsVmI9ZnVuY3Rpb24oKXt2YXIgYT1HYTtpZihMYilyZXR1cm4vcnZcXDooW15cXCk7XSspKFxcKXw7KS8uZXhlYyhhKTtpZihLYilyZXR1cm4vRWRnZVxcLyhbXFxkXFwuXSspLy5leGVjKGEpO2lmKEpiKXJldHVybi9cXGIoPzpNU0lFfHJ2KVs6IF0oW15cXCk7XSspKFxcKXw7KS8uZXhlYyhhKTtpZihNYilyZXR1cm4vV2ViS2l0XFwvKFxcUyspLy5leGVjKGEpO2lmKEliKXJldHVybi8oPzpWZXJzaW9uKVsgXFwvXT8oXFxTKykvLmV4ZWMoYSl9KCk7VmImJihVYj1WYj9WYlsxXTpcIlwiKTtpZihKYil7dmFyIFdiLFhiPWRhLmRvY3VtZW50O1diPVhiP1hiLmRvY3VtZW50TW9kZTp2b2lkIDA7aWYobnVsbCE9V2ImJldiPnBhcnNlRmxvYXQoVWIpKXtUYj1TdHJpbmcoV2IpO2JyZWFrIGF9fVRiPVVifXZhciBZYj1UYixIYj17fTtmdW5jdGlvbiBaYihhKXtyZXR1cm4gR2IoYSxmdW5jdGlvbigpe3JldHVybiAwPD11YShZYixhKX0pfTt2YXIgJGI9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gT2I/KGE9L1dpbmRvd3MgTlQgKFswLTkuXSspLywoYT1hLmV4ZWMoR2EpKT9hWzFdOlwiMFwiKTpOYj8oYT0vMTBbXy5dWzAtOV8uXSsvLChhPWEuZXhlYyhHYSkpP2FbMF0ucmVwbGFjZSgvXy9nLFwiLlwiKTpcIjEwXCIpOlBiPyhhPS9BbmRyb2lkXFxzKyhbXlxcKTtdKykoXFwpfDspLywoYT1hLmV4ZWMoR2EpKT9hWzFdOlwiXCIpOlFifHxSYnx8U2I/KGE9Lyg/OmlQaG9uZXxDUFUpXFxzK09TXFxzKyhcXFMrKS8sKGE9YS5leGVjKEdhKSk/YVsxXS5yZXBsYWNlKC9fL2csXCIuXCIpOlwiXCIpOlwiXCJ9KCk7dmFyIGFjPUZiKCl8fHQoXCJpUG9kXCIpLGJjPXQoXCJpUGFkXCIpOy8qXG5cbiBDb3B5cmlnaHQgMjAxNSBUaGUgTG92ZWZpZWxkIFByb2plY3QgQXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuZnVuY3Rpb24gY2MoKXt2YXIgYTshKGE9SmEoKSYmIVpiKDEwKSkmJihhPWJjfHxhYykmJihhPSEoMDw9dWEoJGIsMTApKSk7dGhpcy5hZT1hO3RoaXMuZmc9ISh0aGlzLmFlfHxKYiYmIVpiKDEwKSk7IUpifHxaYigxMSk7dGhpcy5VZz1LYSgpfHxKYSgpO3RoaXMudWc9bih3aW5kb3cuTWFwKSYmbih3aW5kb3cuTWFwLnByb3RvdHlwZS52YWx1ZXMpJiZuKHdpbmRvdy5NYXAucHJvdG90eXBlLmZvckVhY2gpJiYhdGhpcy5hZTt0aGlzLnZnPW4od2luZG93LlNldCkmJm4od2luZG93LlNldC5wcm90b3R5cGUudmFsdWVzKSYmbih3aW5kb3cuU2V0LnByb3RvdHlwZS5mb3JFYWNoKSYmIXRoaXMuYWV9dmFyIGRjO2Z1bmN0aW9uIGVjKCl7bihkYyl8fChkYz1uZXcgY2MpO3JldHVybiBkY307ZnVuY3Rpb24geCgpe3RoaXMubD1uZXcgemI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmwuemMoKX19KX14LnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMubC5jbGVhcigpfTt4LnByb3RvdHlwZS5jbGVhcj14LnByb3RvdHlwZS5jbGVhcjt4LnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubC5yZW1vdmUoYSl9O3gucHJvdG90eXBlW1wiZGVsZXRlXCJdPXgucHJvdG90eXBlLmRlbGV0ZTt4LnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubC5mb3JFYWNoKGEsYil9O3gucHJvdG90eXBlLmZvckVhY2g9eC5wcm90b3R5cGUuZm9yRWFjaDt4LnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubC5nZXQoYSl9O3gucHJvdG90eXBlLmdldD14LnByb3RvdHlwZS5nZXQ7eC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmwuUGEoYSl9O1xueC5wcm90b3R5cGUuaGFzPXgucHJvdG90eXBlLmhhczt4LnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5sLnNldChhLGIpfTt4LnByb3RvdHlwZS5zZXQ9eC5wcm90b3R5cGUuc2V0O3ZhciBmYz1lYygpLnVnO2Z1bmN0aW9uIHkoKXtyZXR1cm4gZmM/bmV3IHdpbmRvdy5NYXA6bmV3IHh9ZnVuY3Rpb24gZ2MoYSl7aWYoYSBpbnN0YW5jZW9mIHgpcmV0dXJuIEJiKGEubCk7dmFyIGI9MCxjPUFycmF5KGEuc2l6ZSk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEsZSl7Y1tiKytdPWV9KTtyZXR1cm4gY31mdW5jdGlvbiB6KGEpe2lmKGEgaW5zdGFuY2VvZiB4KXJldHVybiBhLmwucWEoKTt2YXIgYj0wLGM9QXJyYXkoYS5zaXplKTthLmZvckVhY2goZnVuY3Rpb24oYSl7Y1tiKytdPWF9KTtyZXR1cm4gY307LypcblxuIENvcHlyaWdodCAyMDE0IFRoZSBMb3ZlZmllbGQgUHJvamVjdCBBdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5mdW5jdGlvbiBoYyhhLGIpe3RoaXMuc2E9YTt0aGlzLm09Ynx8dGhpcy5LZSgpfXZhciBpYz0wO209aGMucHJvdG90eXBlO20uaWQ9ZyhcInNhXCIpO20uS2U9ZnVuY3Rpb24oKXtyZXR1cm57fX07bS53Zj1nKFwibVwiKTttLkphPWZ1bmN0aW9uKCl7cmV0dXJue2lkOnRoaXMuc2EsdmFsdWU6dGhpcy53ZigpfX07bS5uYj1mdW5jdGlvbihhKXtyZXR1cm5cIiNcIj09YS5zdWJzdHIoLTEpP3RoaXMuc2E6bnVsbH07ZnVuY3Rpb24gamMoYSl7cmV0dXJuIG5ldyBoYyhhLmlkLGEudmFsdWUpfWZ1bmN0aW9uIGtjKGEpe3JldHVybiBuZXcgaGMoaWMrKyxhfHx7fSl9ZnVuY3Rpb24gbGMoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDthPW5ldyBVaW50OEFycmF5KGEpO2Zvcih2YXIgYj1cIlwiLGM9MDtjPGEubGVuZ3RoOysrYyl2YXIgZD1hW2NdLnRvU3RyaW5nKDE2KSxiPWIrKDI+ZC5sZW5ndGg/XCIwXCIrZDpkKTtyZXR1cm4gYn07dmFyIG1jPXt9O3EoXCJsZi5UcmFuc2FjdGlvblR5cGVcIixtYyk7bWMuUkVBRF9PTkxZPTA7bWMuUkVBRF9XUklURT0xO2Z1bmN0aW9uIEEoYSxiLGMsZCxlKXt0aGlzLndkPWE7dGhpcy5qZz1iO3RoaXMuVGc9Yzt0aGlzLlFmPWQ7dGhpcy5KZj1lfXEoXCJsZi5UcmFuc2FjdGlvblN0YXRzXCIsQSk7QS5wcm90b3R5cGUuT2c9ZyhcIndkXCIpO0EucHJvdG90eXBlLnN1Y2Nlc3M9QS5wcm90b3R5cGUuT2c7QS5wcm90b3R5cGUuaWc9ZyhcImpnXCIpO0EucHJvdG90eXBlLmluc2VydGVkUm93Q291bnQ9QS5wcm90b3R5cGUuaWc7QS5wcm90b3R5cGUuU2c9ZyhcIlRnXCIpO0EucHJvdG90eXBlLnVwZGF0ZWRSb3dDb3VudD1BLnByb3RvdHlwZS5TZztBLnByb3RvdHlwZS5QZj1nKFwiUWZcIik7QS5wcm90b3R5cGUuZGVsZXRlZFJvd0NvdW50PUEucHJvdG90eXBlLlBmO0EucHJvdG90eXBlLklmPWcoXCJKZlwiKTtBLnByb3RvdHlwZS5jaGFuZ2VkVGFibGVDb3VudD1BLnByb3RvdHlwZS5JZjtmdW5jdGlvbiBuYyhhLGIpe3RoaXMueWQ9YTt0aGlzLlJhPWJ8fG51bGw7dGhpcy5TPXcoKTt0aGlzLndkPSExO3RoaXMuemE9bnVsbH1uYy5wcm90b3R5cGUua2E9ZnVuY3Rpb24oKXtyZXR1cm4oMD09dGhpcy55ZD90aGlzLnNjKCk6b2ModGhpcykpLnRoZW4oZnVuY3Rpb24oYSl7dGhpcy53ZD0hMDtyZXR1cm4gYX0uYmluZCh0aGlzKSl9O2Z1bmN0aW9uIG9jKGEpe3RyeXtwYyhhLlJhKX1jYXRjaChiKXtyZXR1cm4gYmIoYil9cmV0dXJuIHFjKGEpLnRoZW4oZnVuY3Rpb24oYSl7dGhpcy5SYS5rYSgpO3JldHVybiBhfS5iaW5kKGEpKX1mdW5jdGlvbiBxYyhhKXtyYyhhKTtzYyhhKTtyZXR1cm4gYS5zYygpfVxuZnVuY3Rpb24gcmMoYSl7YS5SYS5pYi5mb3JFYWNoKGZ1bmN0aW9uKGEsYyl7Yz10aGlzLlJhLmRhKCkuZ2V0KGMpO2M9dGhpcy5JKGMuZ2V0TmFtZSgpLGMua2IuYmluZChjKSwwKTt2YXIgYj16KGEueGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5pZCgpfSk7MDxiLmxlbmd0aCYmYy5yZW1vdmUoYikudmUodGhpcy5UZSx0aGlzKTthPXooYS5sYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhWzFdfSkuY29uY2F0KHooYS53YSkpO2MucHV0KGEpLnZlKHRoaXMuVGUsdGhpcyl9LGEpfWZ1bmN0aW9uIHNjKGEpe3RjKGEuUmEpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5JKGEuZ2V0TmFtZSgpLGpjLDEpO2IucmVtb3ZlKFtdKTtiLnB1dChhLkphKCkpfSxhKX1uYy5wcm90b3R5cGUuVGU9ZnVuY3Rpb24oYSl7dGhpcy5TLnJlamVjdChhKX07XG5uYy5wcm90b3R5cGUuWT1mdW5jdGlvbigpe2lmKG51bGw9PT10aGlzLnphKWlmKHRoaXMud2QpaWYoMD09dGhpcy55ZCl0aGlzLnphPW5ldyBBKCEwLDAsMCwwLDApO2Vsc2V7dmFyIGE9MCxiPTAsYz0wLGQ9MDt0aGlzLlJhLmliLmZvckVhY2goZnVuY3Rpb24oZSl7ZCsrO2ErPWUud2Euc2l6ZTtjKz1lLmxhLnNpemU7Yis9ZS54YS5zaXplfSk7dGhpcy56YT1uZXcgQSghMCxhLGMsYixkKX1lbHNlIHRoaXMuemE9bmV3IEEoITEsMCwwLDAsMCk7cmV0dXJuIHRoaXMuemF9O2Z1bmN0aW9uIHVjKGEpe3RoaXMuTGc9YX11Yy5wcm90b3R5cGUudG9TdHJpbmc9ZyhcIkxnXCIpO3ZhciB2Yz1uZXcgdWMoXCJiYWNrc3RvcmVcIiksd2M9bmV3IHVjKFwiY2FjaGVcIikseGM9bmV3IHVjKFwiaW5kZXhzdG9yZVwiKSx5Yz1uZXcgdWMoXCJlbmdpbmVcIiksemM9bmV3IHVjKFwicnVubmVyXCIpLEFjPW5ldyB1YyhcIm9ic2VydmVycmVnaXN0cnlcIiksQmM9bmV3IHVjKFwic2NoZW1hXCIpO2Z1bmN0aW9uIENjKGEpe2lmKGEucWEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEucWEpcmV0dXJuIGEucWEoKTtpZihpYShhKSlyZXR1cm4gYS5zcGxpdChcIlwiKTtpZihoYShhKSl7Zm9yKHZhciBiPVtdLGM9YS5sZW5ndGgsZD0wO2Q8YztkKyspYi5wdXNoKGFbZF0pO3JldHVybiBifXJldHVybiBGYShhKX07ZnVuY3Rpb24gRGMoYSl7dGhpcy5sPW5ldyB6YjthJiZ0aGlzLmFkZEFsbChhKX1mdW5jdGlvbiBFYyhhKXt2YXIgYj10eXBlb2YgYTtyZXR1cm5cIm9iamVjdFwiPT1iJiZhfHxcImZ1bmN0aW9uXCI9PWI/XCJvXCIra2EoYSk6Yi5zdWJzdHIoMCwxKSthfW09RGMucHJvdG90eXBlO20uemM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sLnpjKCl9O20uYWRkPWZ1bmN0aW9uKGEpe3RoaXMubC5zZXQoRWMoYSksYSl9O20uYWRkQWxsPWZ1bmN0aW9uKGEpe2E9Q2MoYSk7Zm9yKHZhciBiPWEubGVuZ3RoLGM9MDtjPGI7YysrKXRoaXMuYWRkKGFbY10pfTttLnJlbW92ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sLnJlbW92ZShFYyhhKSl9O20uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmwuY2xlYXIoKX07bS5qZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmwuamQoKX07bS5jb250YWlucz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sLlBhKEVjKGEpKX07bS5xYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmwucWEoKX07XG5tLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYyh0aGlzKX07bS5wYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmwucGMoITEpfTtmdW5jdGlvbiBGYyhhKXt0aGlzLlhiPW5ldyBEYyhhKTtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWGIuemMoKX19KX1GYy5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEpe3RoaXMuWGIuYWRkKGEpfTtGYy5wcm90b3R5cGUuYWRkPUZjLnByb3RvdHlwZS5hZGQ7RmMucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5YYi5jbGVhcigpfTtGYy5wcm90b3R5cGUuY2xlYXI9RmMucHJvdG90eXBlLmNsZWFyO0ZjLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuWGIucmVtb3ZlKGEpfTtGYy5wcm90b3R5cGVbXCJkZWxldGVcIl09RmMucHJvdG90eXBlLmRlbGV0ZTtGYy5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihhLGIpe3RoaXMuWGIucWEoKS5mb3JFYWNoKGEsYil9O0ZjLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuWGIuY29udGFpbnMoYSl9O1xuRmMucHJvdG90eXBlLmhhcz1GYy5wcm90b3R5cGUuaGFzO3ZhciBHYz1lYygpLnZnO2Z1bmN0aW9uIEIoYSl7cmV0dXJuIEdjP24oYSk/bmV3IHdpbmRvdy5TZXQoYSk6bmV3IHdpbmRvdy5TZXQ6bmV3IEZjKGEpfWZ1bmN0aW9uIEMoYSl7aWYoYSBpbnN0YW5jZW9mIEZjKXJldHVybiBhLlhiLnFhKCk7dmFyIGI9MCxjPUFycmF5KGEuc2l6ZSk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2NbYisrXT1hfSk7cmV0dXJuIGN9ZnVuY3Rpb24gSGMoYSxiKXtpZihiLnNpemU+YS5zaXplKXJldHVybiExO3ZhciBjPSEwO2IuZm9yRWFjaChmdW5jdGlvbihiKXtjPWMmJmEuaGFzKGIpfSk7cmV0dXJuIGN9O2Z1bmN0aW9uIEljKGEsYil7dGhpcy5zYT1hO3RoaXMubT1ifHx7fX1mdW5jdGlvbiBKYyhhKXt2YXIgYj1CKCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuYWRkKGE+PjkpfSk7cmV0dXJuIEMoYil9SWMucHJvdG90eXBlLlc9ZyhcInNhXCIpO2Z1bmN0aW9uIEtjKGEsYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMubVthLmlkKCldPWEuSmEoKX0sYSl9ZnVuY3Rpb24gTGMoYSxiKXtiLmZvckVhY2goZnVuY3Rpb24oYSl7ZGVsZXRlIHRoaXMubVthXX0sYSl9SWMucHJvdG90eXBlLkphPWZ1bmN0aW9uKCl7cmV0dXJue2lkOnRoaXMuc2EsdmFsdWU6SlNPTi5zdHJpbmdpZnkodGhpcy5tKX19O2Z1bmN0aW9uIE1jKGEpe3JldHVybiBuZXcgSWMoYS5pZCxKU09OLnBhcnNlKGEudmFsdWUpKX07ZnVuY3Rpb24gTmMoYSxiLGMpe3RoaXMuWj1hO3RoaXMuR2I9Yjt0aGlzLnBmPWN9bT1OYy5wcm90b3R5cGU7bS5nZXQ9ZnVuY3Rpb24oYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIHRoaXMuVmQoKTt2YXIgYj10aGlzLkdiO3JldHVybiBPYyh0aGlzLGEpLnRoZW4oZnVuY3Rpb24oYyl7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3ZhciBkPWMuZ2V0KGE+PjkpO3JldHVybiBiKGQubVthXSl9KX0pfTtmdW5jdGlvbiBPYyhhLGIpe3ZhciBjPXkoKSxkPXcoKTthPUpjKGIpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixkKXt2YXIgZTt0cnl7ZT10aGlzLlouZ2V0KGEpfWNhdGNoKHApe2QocCk7cmV0dXJufWUub25lcnJvcj1kO2Uub25zdWNjZXNzPWZ1bmN0aW9uKGEpe2E9TWMoYS50YXJnZXQucmVzdWx0KTtjLnNldChhLlcoKSxhKTtiKCl9fSx0aGlzKX0sYSk7ZWIoYSkudGhlbihmdW5jdGlvbigpe2QucmVzb2x2ZShjKX0pO3JldHVybiBkLmhhfVxubS5WZD1mdW5jdGlvbigpe3JldHVybiBuZXcgdShmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ7dHJ5e2Q9dGhpcy5aLm9wZW5DdXJzb3IoKX1jYXRjaChlKXtiKGUpO3JldHVybn1kLm9uZXJyb3I9YjtkLm9uc3VjY2Vzcz1mdW5jdGlvbigpe3ZhciBiPWQucmVzdWx0O2lmKGIpe3ZhciBmPU1jKGIudmFsdWUpLm0saDtmb3IoaCBpbiBmKWMucHVzaCh0aGlzLkdiKGZbaF0pKTtiLmNvbnRpbnVlKCl9ZWxzZSBhKGMpfS5iaW5kKHRoaXMpfSx0aGlzKX07bS5UYj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXt2YXIgZDt0cnl7ZD1hKCl9Y2F0Y2goZSl7YyhlKTtyZXR1cm59ZC5vbnN1Y2Nlc3M9YjtkLm9uZXJyb3I9Y30sdGhpcyl9O1xubS5wdXQ9ZnVuY3Rpb24oYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIHYoKTt2YXIgYj15KCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjPWEuaWQoKT4+OSxlPWIuZ2V0KGMpfHxudWxsO251bGw9PT1lJiYoZT10aGlzLnBmKHRoaXMuWi5uYW1lLGMpKTtLYyhlLFthXSk7Yi5zZXQoYyxlKX0sdGhpcyk7YT16KGIpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5UYihmdW5jdGlvbigpe3JldHVybiB0aGlzLloucHV0KGEuSmEoKSl9LmJpbmQodGhpcykpfSx0aGlzKTtyZXR1cm4gZWIoYSl9O1xubS5yZW1vdmU9ZnVuY3Rpb24oYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIHRoaXMuVGIoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5aLmNsZWFyKCl9LmJpbmQodGhpcykpO3ZhciBiPXkoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGM9YT4+OSxlPWIuZ2V0KGMpfHxudWxsO251bGw9PT1lJiYoZT10aGlzLnBmKHRoaXMuWi5uYW1lLGMpKTtMYyhlLFthXSk7Yi5zZXQoYyxlKX0sdGhpcyk7YT16KGIpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5UYihmdW5jdGlvbigpe3JldHVybiAwPT1PYmplY3Qua2V5cyhhLm0pLmxlbmd0aD90aGlzLlouZGVsZXRlKGEuVygpKTp0aGlzLloucHV0KGEuSmEoKSl9LmJpbmQodGhpcykpfSx0aGlzKTtyZXR1cm4gZWIoYSl9O2Z1bmN0aW9uIFBjKGEsYixjKXthPWEuYih3Yyk7dmFyIGQ9W2M8PDksKGMrMTw8OSktMV07Yj1hLlZhKGIsZFswXSxkWzFdKTtjPW5ldyBJYyhjKTtLYyhjLGIpO3JldHVybiBjfVxuZnVuY3Rpb24gUWMoYSxiKXtyZXR1cm4gbmV3IEljKGIpfTtmdW5jdGlvbiBSYyhhKXt0aGlzLlY9YS5iKHdjKTt0aGlzLkM9YS5iKHhjKTt0aGlzLmc9YS5iKEJjKX1SYy5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGEpe2EuZm9yRWFjaChmdW5jdGlvbihhKXtTYyh0aGlzLGEpO1VjKHRoaXMsYSl9LHRoaXMpfTtmdW5jdGlvbiBVYyhhLGIpe3ZhciBjPWIuZ2V0TmFtZSgpO2IueGEuZm9yRWFjaChmdW5jdGlvbihhLGIpe3RoaXMuVi5yZW1vdmUoYyxiKX0sYSk7Yi53YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuVi5zZXQoYyxhKX0sYSk7Yi5sYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuVi5zZXQoYyxhWzFdKX0sYSl9ZnVuY3Rpb24gU2MoYSxiKXt2YXIgYz1hLmcudGFibGUoYi5nZXROYW1lKCkpO1ZjKGIpLmZvckVhY2goZnVuY3Rpb24oYSl7V2ModGhpcyxjLGEpfSxhKX1cbmZ1bmN0aW9uIFdjKGEsYixjKXt2YXIgZD1hLkMubGMuZ2V0KGIuZ2V0TmFtZSgpKXx8W10sZT0wO2QuZm9yRWFjaChmdW5jdGlvbihhKXt0cnl7WGMoYSxjKSxlKyt9Y2F0Y2goaCl7dGhyb3cgZC5zbGljZSgwLGUpLmZvckVhY2goZnVuY3Rpb24oYSl7WGMoYSxbY1sxXSxjWzBdXSl9LHRoaXMpLGg7fX0sYSl9ZnVuY3Rpb24gWGMoYSxiKXt2YXIgYz1udWxsPT09YlsxXT92b2lkIDA6YlsxXS5uYihhLmdldE5hbWUoKSksZD1udWxsPT09YlswXT92b2lkIDA6YlswXS5uYihhLmdldE5hbWUoKSk7aWYoIW4oZCkmJm4oYykpYS5hZGQoYyxiWzFdLmlkKCkpO2Vsc2UgaWYobihkKSYmbihjKSl7aWYobnVsbD09PWN8fG51bGw9PT1kKXtpZihjPT1kKXJldHVybn1lbHNlIGlmKDA9PWEuamIoKS5jb21wYXJlKGQsYykpcmV0dXJuO2EuYWRkKGMsYlsxXS5pZCgpKTthLnJlbW92ZShkLGJbMF0uaWQoKSl9ZWxzZSBuKGQpJiYhbihjKSYmYS5yZW1vdmUoZCxiWzBdLmlkKCkpfTt2YXIgWWM9e307cShcImxmLkNvbnN0cmFpbnRBY3Rpb25cIixZYyk7WWMuUkVTVFJJQ1Q9MDtZYy5DQVNDQURFPTE7dmFyIFpjPXt9O3EoXCJsZi5Db25zdHJhaW50VGltaW5nXCIsWmMpO1pjLklNTUVESUFURT0wO1pjLkRFRkVSUkFCTEU9MTt2YXIgJGM9e307cShcImxmLk9yZGVyXCIsJGMpOyRjLkRFU0M9MDskYy5BU0M9MTt2YXIgYWQ9e307cShcImxmLlR5cGVcIixhZCk7YWQuQVJSQVlfQlVGRkVSPTA7YWQuQk9PTEVBTj0xO2FkLkRBVEVfVElNRT0yO2FkLklOVEVHRVI9MzthZC5OVU1CRVI9NDthZC5TVFJJTkc9NTthZC5PQkpFQ1Q9Njt2YXIgYmQ9ezA6bnVsbCwxOiExLDI6T2JqZWN0LmZyZWV6ZShuZXcgRGF0ZSgwKSksMzowLDQ6MCw1OlwiXCIsNjpudWxsfTtxKFwibGYudHlwZS5ERUZBVUxUX1ZBTFVFU1wiLGJkKTtmdW5jdGlvbiBEKGEsYil7dGhpcy5jb2RlPWE7dGhpcy5tZXNzYWdlPVwiaHR0cDovL2dvb2dsZS5naXRodWIuaW8vbG92ZWZpZWxkL2Vycm9yX2xvb2t1cC9zcmMvZXJyb3JfbG9va3VwLmh0bWw/Yz1cIithO2lmKDE8YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIGM9MTtjPD1NYXRoLm1pbig0LGFyZ3VtZW50cy5sZW5ndGgtMSk7KytjKXRoaXMubWVzc2FnZSs9XCImcFwiKyhjLTEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoYXJndW1lbnRzW2NdKS5zbGljZSgwLDY0KSl9cihELEVycm9yKTtmdW5jdGlvbiBjZCgpe3RoaXMubD15KCk7dGhpcy5zaXplPTB9bT1jZC5wcm90b3R5cGU7bS5oYXM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubC5oYXMoYSl9O20uc2V0PWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sLmdldChhKXx8bnVsbDtudWxsPT09YyYmKGM9QigpLHRoaXMubC5zZXQoYSxjKSk7Yy5oYXMoYil8fChjLmFkZChiKSx0aGlzLnNpemUrKyk7cmV0dXJuIHRoaXN9O20uV2I9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmwuZ2V0KGEpfHxudWxsO251bGw9PT1jJiYoYz1CKCksdGhpcy5sLnNldChhLGMpKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5oYXMoYSl8fChjLmFkZChhKSx0aGlzLnNpemUrKyl9LHRoaXMpO3JldHVybiB0aGlzfTttLmJlPWZ1bmN0aW9uKGEpe2Eua2V5cygpLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGM9YS5nZXQoYik7dGhpcy5XYihiLGMpfSx0aGlzKTtyZXR1cm4gdGhpc307XG5tLmRlbGV0ZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubC5nZXQoYSl8fG51bGw7aWYobnVsbD09PWMpcmV0dXJuITE7aWYoYj1jLmRlbGV0ZShiKSktLXRoaXMuc2l6ZSwwPT1jLnNpemUmJnRoaXMubC5kZWxldGUoYSk7cmV0dXJuIGJ9O20uZ2V0PWZ1bmN0aW9uKGEpe2E9dGhpcy5sLmdldChhKXx8bnVsbDtyZXR1cm4gbnVsbD09PWE/bnVsbDpDKGEpfTttLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5sLmNsZWFyKCk7dGhpcy5zaXplPTB9O20ua2V5cz1mdW5jdGlvbigpe3JldHVybiBnYyh0aGlzLmwpfTttLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBhPVtdO3RoaXMubC5mb3JFYWNoKGZ1bmN0aW9uKGIpe2EucHVzaC5hcHBseShhLEMoYikpfSk7cmV0dXJuIGF9O2Z1bmN0aW9uIGRkKGEpe3RoaXMuQz1hLmIoeGMpO3RoaXMuZz1hLmIoQmMpO3RoaXMuVj1hLmIod2MpO3RoaXMuJGM9bnVsbH1mdW5jdGlvbiBlZChhLGIsYyl7dmFyIGQ9Yi5NYi54ZztjLmZvckVhY2goZnVuY3Rpb24oYSl7ZC5mb3JFYWNoKGZ1bmN0aW9uKGIpe2lmKG51bGw9PWEubVtiLmdldE5hbWUoKV0pdGhyb3cgbmV3IEQoMjAyLGIuaigpKTt9LHRoaXMpfSxhKX1mdW5jdGlvbiBmZChhLGIsYyxkKXtiLk1iLlVkLmZvckVhY2goZnVuY3Rpb24oYSl7YS50aW1pbmc9PWQmJmdkKHRoaXMsYSxjKX0sYSl9ZnVuY3Rpb24gZ2QoYSxiLGMpe3ZhciBkPWhkKGEsYik7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2lmKGlkKGFbMF0sYVsxXSxiLm5hbWUpJiYoYT1hWzFdLm5iKGIubmFtZSksbnVsbCE9PWEmJiFkLlBhKGEpKSl0aHJvdyBuZXcgRCgyMDMsYi5uYW1lKTt9LGEpfVxuZnVuY3Rpb24gaGQoYSxiKXtudWxsPT09YS4kYyYmKGEuJGM9eSgpKTt2YXIgYz1hLiRjLmdldChiLm5hbWUpfHxudWxsO251bGw9PT1jJiYoYz1hLmcudGFibGUoYi5YYSlbYi5KY10uQ2EoKSxjPWEuQy5nZXQoYy5qKCkpLGEuJGMuc2V0KGIubmFtZSxjKSk7cmV0dXJuIGN9ZnVuY3Rpb24gaWQoYSxiLGMpe3JldHVybihudWxsPT09YT9udWxsIT09YjpudWxsPT09Yil8fGEubmIoYykhPWIubmIoYyl9ZnVuY3Rpb24gamQoYSxiLGMsZCl7Yj1rZChhLmcuaW5mbygpLGIuZ2V0TmFtZSgpLDApO251bGwhPT1iJiYoYj1iLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1pbmc9PWR9KSwwIT1iLmxlbmd0aCYmbGQoYSxiLGMsZnVuY3Rpb24oYSxiLGMpe2lmKGIuUGEoYykpdGhyb3cgbmV3IEQoMjAzLGEubmFtZSk7fSkpfVxuZnVuY3Rpb24gbWQoYSxiLGMpe2I9a2QoYS5nLmluZm8oKSxiLmdldE5hbWUoKSwxKTtpZihudWxsPT09YilyZXR1cm4gbnVsbDt2YXIgZD1uZXcgY2Q7bGQoYSxiLGMsZnVuY3Rpb24oYSxiLGMpe2I9Yi5nZXQoYyk7MDxiLmxlbmd0aCYmZC5XYihhLkdlLGIpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gbmQoYSxiLGMpe3ZhciBkPW5ldyBjZDtsZChhLGMsYixmdW5jdGlvbihhLGIsYyxsKXtiLmdldChjKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2Quc2V0KGIse1NkOmEsQ2c6bFsxXX0pfSl9KTtyZXR1cm4gZH1mdW5jdGlvbiBsZChhLGIsYyxkKXtiLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5DLmdldChhLm5hbWUpLGU9aGQodGhpcyxhKTtjLmZvckVhY2goZnVuY3Rpb24oYyl7aWYoaWQoY1swXSxjWzFdLGUuZ2V0TmFtZSgpKSl7dmFyIGY9Y1swXS5uYihlLmdldE5hbWUoKSk7ZChhLGIsZixjKX19LHRoaXMpfSxhKX1cbmZ1bmN0aW9uIG9kKGEsYixjLGQpezAhPWMubGVuZ3RoJiYoYz1jLm1hcChmdW5jdGlvbihhKXtyZXR1cm5bbnVsbCxhXX0pLGZkKGEsYixjLGQpKX1mdW5jdGlvbiBwZChhLGIsYyxkKXswIT1jLmxlbmd0aCYmKGZkKGEsYixjLGQpLGpkKGEsYixjLGQpKX1mdW5jdGlvbiBxZChhLGIsYyxkKXswIT1jLmxlbmd0aCYmKGM9Yy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuW2EsbnVsbF19KSxqZChhLGIsYyxkKSl9XG5mdW5jdGlvbiByZChhLGIsYyl7dmFyIGQ9e3VlOltdLHJmOm5ldyBjZH0sZT1uZXcgY2Q7ZS5XYihiLmdldE5hbWUoKSxjLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5pZCgpfSkpO2Rve3ZhciBmPW5ldyBjZDtlLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZy50YWJsZShhKTthPWUuZ2V0KGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm5bdGhpcy5WLmdldChhKSxudWxsXX0sdGhpcyk7Yj1tZCh0aGlzLGIsYSk7bnVsbCE9PWImJihkLnVlLnVuc2hpZnQuYXBwbHkoZC51ZSxiLmtleXMoKSksZi5iZShiKSl9LGEpO2U9ZjtkLnJmLmJlKGUpfXdoaWxlKDA8ZS5zaXplKTtyZXR1cm4gZH07ZnVuY3Rpb24gc2QoYSl7dGhpcy53YT15KCk7dGhpcy5sYT15KCk7dGhpcy54YT15KCk7dGhpcy5BPWF9bT1zZC5wcm90b3R5cGU7bS5nZXROYW1lPWcoXCJBXCIpO20uYWRkPWZ1bmN0aW9uKGEpe2lmKHRoaXMueGEuaGFzKGEuaWQoKSkpe3ZhciBiPVt0aGlzLnhhLmdldChhLmlkKCkpLGFdO3RoaXMubGEuc2V0KGEuaWQoKSxiKTt0aGlzLnhhLmRlbGV0ZShhLmlkKCkpfWVsc2UgdGhpcy53YS5zZXQoYS5pZCgpLGEpfTttLm1vZGlmeT1mdW5jdGlvbihhKXt2YXIgYj1hWzFdLGM9YVswXS5pZCgpO3RoaXMud2EuaGFzKGMpP3RoaXMud2Euc2V0KGMsYik6KHRoaXMubGEuaGFzKGMpJiYoYT1bdGhpcy5sYS5nZXQoYVswXS5pZCgpKVswXSxiXSksdGhpcy5sYS5zZXQoYyxhKSl9O1xubS5kZWxldGU9ZnVuY3Rpb24oYSl7aWYodGhpcy53YS5oYXMoYS5pZCgpKSl0aGlzLndhLmRlbGV0ZShhLmlkKCkpO2Vsc2UgaWYodGhpcy5sYS5oYXMoYS5pZCgpKSl7dmFyIGI9dGhpcy5sYS5nZXQoYS5pZCgpKVswXTt0aGlzLmxhLmRlbGV0ZShhLmlkKCkpO3RoaXMueGEuc2V0KGEuaWQoKSxiKX1lbHNlIHRoaXMueGEuc2V0KGEuaWQoKSxhKX07bS5iZT1mdW5jdGlvbihhKXthLndhLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5hZGQoYSl9LHRoaXMpO2EubGEuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLm1vZGlmeShhKX0sdGhpcyk7YS54YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuZGVsZXRlKGEpfSx0aGlzKX07XG5mdW5jdGlvbiBWYyhhKXt2YXIgYj1bXTthLndhLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5wdXNoKFtudWxsLGFdKX0pO2EubGEuZm9yRWFjaChmdW5jdGlvbihhKXtiLnB1c2goYSl9KTthLnhhLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5wdXNoKFthLG51bGxdKX0pO3JldHVybiBifW0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIltcIitnYyh0aGlzLndhKS50b1N0cmluZygpK1wiXSwgW1wiK2djKHRoaXMubGEpLnRvU3RyaW5nKCkrXCJdLCBbXCIrZ2ModGhpcy54YSkudG9TdHJpbmcoKStcIl1cIn07ZnVuY3Rpb24gdGQoYSl7dmFyIGI9bmV3IHNkKGEuQSk7YS53YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuZGVsZXRlKGEpfSk7YS54YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuYWRkKGEpfSk7YS5sYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IubW9kaWZ5KFthWzFdLGFbMF1dKX0pO3JldHVybiBifVxubS5qZD1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLndhLnNpemUmJjA9PXRoaXMueGEuc2l6ZSYmMD09dGhpcy5sYS5zaXplfTtmdW5jdGlvbiB1ZChhLGIpe3RoaXMuYWE9eSgpO2IuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLmFhLnNldChhLmdldE5hbWUoKSxhKX0sdGhpcyk7dGhpcy5nPWEuYihCYyk7dGhpcy5WPWEuYih3Yyk7dGhpcy5DPWEuYih4Yyk7dGhpcy5BYT1uZXcgZGQoYSk7dGhpcy5nZD1uZXcgUmMoYSk7dGhpcy5pYj15KCl9ZnVuY3Rpb24gdGMoYSl7dmFyIGI9W107Z2MoYS5pYikubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFhLmdldChhKX0sYSkuZm9yRWFjaChmdW5jdGlvbihhKXthLkNiKCkmJihhLkRhKCkuZm9yRWFjaChmdW5jdGlvbihhKXtiLnB1c2godGhpcy5DLmdldChhLmooKSkpfSx0aGlzKSxiLnB1c2godGhpcy5DLmdldChhLmdldE5hbWUoKStcIi4jXCIpKSl9LGEpO3JldHVybiBifW09dWQucHJvdG90eXBlO20uZGE9ZyhcImFhXCIpO1xubS5BYj1mdW5jdGlvbihhLGIpe3ZkKHRoaXMsYSk7ZWQodGhpcy5BYSxhLGIpO29kKHRoaXMuQWEsYSxiLDApO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXdkKHRoaXMsYSxbbnVsbCxiW2NdXSl9O2Z1bmN0aW9uIHdkKGEsYixjKXt2YXIgZD1iLmdldE5hbWUoKSxlPWEuaWIuZ2V0KGQpfHxuZXcgc2QoZCk7YS5pYi5zZXQoZCxlKTt0cnl7V2MoYS5nZCxiLGMpfWNhdGNoKGgpe3Rocm93IGg7fWI9Y1swXTt2YXIgZj1jWzFdO251bGw9PT1iJiZudWxsIT09Zj8oYS5WLnNldChkLGYpLGUuYWRkKGYpKTpudWxsIT09YiYmbnVsbCE9PWY/KGEuVi5zZXQoZCxmKSxlLm1vZGlmeShjKSk6bnVsbCE9PWImJm51bGw9PT1mJiYoYS5WLnJlbW92ZShkLGIuaWQoKSksZS5kZWxldGUoYikpfVxubS51cGRhdGU9ZnVuY3Rpb24oYSxiKXt2ZCh0aGlzLGEpO2VkKHRoaXMuQWEsYSxiKTtiPWIubWFwKGZ1bmN0aW9uKGEpe3JldHVyblt0aGlzLlYuZ2V0KGEuaWQoKSksYV19LHRoaXMpO3hkKHRoaXMsYSxiKTtwZCh0aGlzLkFhLGEsYiwwKTtiLmZvckVhY2goZnVuY3Rpb24oYil7d2QodGhpcyxhLGIpfSx0aGlzKX07bS5XZD1mdW5jdGlvbihhLGIpe3ZkKHRoaXMsYSk7ZWQodGhpcy5BYSxhLGIpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdLGU9bnVsbCxmLGg9YS5NYi5zZDtpZihudWxsPT09aClmPW51bGw7ZWxzZXtmPXRoaXMuQWE7dmFyIGg9aC5qKCksbD1kLm5iKGgpO2Y9Zi5DLmdldChoKS5nZXQobCk7Zj0wPT1mLmxlbmd0aD9udWxsOmZbMF19bnVsbCE9Zj8oZT10aGlzLlYuZ2V0KGYpLGQuc2E9ZixwZCh0aGlzLkFhLGEsW1tlLGRdXSwwKSk6b2QodGhpcy5BYSxhLFtkXSwwKTt3ZCh0aGlzLGEsW2UsZF0pfX07XG5tLnJlbW92ZT1mdW5jdGlvbihhLGIpe3ZkKHRoaXMsYSk7eWQodGhpcyxhLGIpO3FkKHRoaXMuQWEsYSxiLDApO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXdkKHRoaXMsYSxbYltjXSxudWxsXSl9O2Z1bmN0aW9uIHhkKGEsYixjKXtiPWtkKGEuZy5pbmZvKCksYi5nZXROYW1lKCksMSk7aWYobnVsbCE9PWIpe3ZhciBkPW5kKGEuQWEsYyxiKTtkLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2QuZ2V0KGEpLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5nLnRhYmxlKGIuU2QuR2UpLGQ9dGhpcy5WLmdldChhKSxlPWMua2IoZC5KYSgpKTtlLm1bYi5TZC52Yl09Yi5DZy5tW2IuU2QuSmNdO3dkKHRoaXMsYyxbZCxlXSl9LHRoaXMpfSxhKX19XG5mdW5jdGlvbiB5ZChhLGIsYyl7aWYobnVsbCE9PWtkKGEuZy5pbmZvKCksYi5nZXROYW1lKCksMSkpe2I9cmQoYS5BYSxiLGMpO3ZhciBkPWIucmY7Yi51ZS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZy50YWJsZShhKTthPWQuZ2V0KGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5WLmdldChhKX0sdGhpcyk7cWQodGhpcy5BYSxiLGEsMCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3dkKHRoaXMsYixbYSxudWxsXSl9LHRoaXMpfSxhKX19ZnVuY3Rpb24gcGMoYSl7YS5pYi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWEuZ2V0KGEuZ2V0TmFtZSgpKTtvZCh0aGlzLkFhLGIseihhLndhKSwxKTtxZCh0aGlzLkFhLGIseihhLnhhKSwxKTtwZCh0aGlzLkFhLGIseihhLmxhKSwxKX0sYSl9bS5rYT1hYSgpO20uSmI9ZnVuY3Rpb24oKXt2YXIgYT16KHRoaXMuaWIpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGQoYSl9KTt0aGlzLmdkLnVwZGF0ZShhKX07XG5mdW5jdGlvbiB2ZChhLGIpe2lmKCFhLmFhLmhhcyhiLmdldE5hbWUoKSkpdGhyb3cgbmV3IEQoMTA2LGIuZ2V0TmFtZSgpKTt9O2Z1bmN0aW9uIEUoYSxiLGMsZCl7dGhpcy5mcm9tPWE7dGhpcy5vPWI7dGhpcy5lYT10aGlzLmZyb209PUY/ITE6Yzt0aGlzLm5hPXRoaXMubz09Rj8hMTpkfXZhciBGPW5ldyAoYWEoKSk7RS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4odGhpcy5lYT9cIihcIjpcIltcIikrKHRoaXMuZnJvbT09Rj9cInVuYm91bmRcIjp0aGlzLmZyb20pK1wiLCBcIisodGhpcy5vPT1GP1widW5ib3VuZFwiOnRoaXMubykrKHRoaXMubmE/XCIpXCI6XCJdXCIpfTtmdW5jdGlvbiB6ZChhKXtpZihBZChhKSlyZXR1cm5bXTt2YXIgYj1udWxsLGM9bnVsbDthLmZyb209PUZ8fChiPW5ldyBFKEYsYS5mcm9tLCExLCFhLmVhKSk7YS5vPT1GfHwoYz1uZXcgRShhLm8sRiwhYS5uYSwhMSkpO3JldHVybltiLGNdLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PWF9KX1FLnByb3RvdHlwZS5yZXZlcnNlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBFKHRoaXMubyx0aGlzLmZyb20sdGhpcy5uYSx0aGlzLmVhKX07XG5mdW5jdGlvbiBCZChhLGIpe3ZhciBjPUNkKGEuZnJvbSxiLmZyb20sITAsYS5lYSxiLmVhKTtpZigwPT1jKXJldHVybiEwO3ZhciBkPS0xPT1jP2E6YjthPTE9PWM/YTpiO3JldHVybiBkLm89PUZ8fGQubz5hLmZyb218fGQubz09YS5mcm9tJiYhZC5uYSYmIWEuZWF9ZnVuY3Rpb24gRGQoKXtyZXR1cm4gbmV3IEUoRixGLCExLCExKX1mdW5jdGlvbiBBZChhKXtyZXR1cm4gYS5mcm9tPT1GJiZhLm89PUZ9ZnVuY3Rpb24gRWQoYSl7cmV0dXJuIGEuZnJvbT09YS5vJiZhLmZyb20hPUYmJiFhLmVhJiYhYS5uYX1FLnByb3RvdHlwZS5jb250YWlucz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLm89PUZ8fGE8dGhpcy5vfHxhPT10aGlzLm8mJiF0aGlzLm5hO3JldHVybih0aGlzLmZyb209PUZ8fGE+dGhpcy5mcm9tfHxhPT10aGlzLmZyb20mJiF0aGlzLmVhKSYmYn07XG5mdW5jdGlvbiBDZChhLGIsYyxkLGUpe2Z1bmN0aW9uIGYoYSl7cmV0dXJuIGM/YToxPT1hPy0xOjF9ZD1kfHwhMTtlPWV8fCExO3JldHVybiBhPT1GP2I9PUY/KGQ/IWU6ZSk/ZD9mKDEpOmYoLTEpOjA6ZigtMSk6Yj09Rj9mKDEpOmE8Yj8tMTphPT1iPyhkPyFlOmUpP2Q/ZigxKTpmKC0xKTowOjF9ZnVuY3Rpb24gRmQoYSxiKXt2YXIgYz1DZChhLmZyb20sYi5mcm9tLCEwLGEuZWEsYi5lYSk7MD09YyYmKGM9Q2QoYS5vLGIubywhMSxhLm5hLGIubmEpKTtyZXR1cm4gY31mdW5jdGlvbiBHZChhKXtpZigwPT1hLmxlbmd0aClyZXR1cm5bXTthLnNvcnQoRmQpO2Zvcih2YXIgYj1BcnJheShhLmxlbmd0aCsxKSxjPTA7YzxiLmxlbmd0aDtjKyspYltjXT0wPT1jP25ldyBFKEYsYVtjXS5mcm9tLCExLCEwKTpjPT1iLmxlbmd0aC0xP25ldyBFKGFbYy0xXS5vLEYsITAsITEpOm5ldyBFKGFbYy0xXS5vLGFbY10uZnJvbSwhMCwhMCk7cmV0dXJuIGJ9O2Z1bmN0aW9uIEhkKGEpe3RoaXMua2M9W107bihhKSYmdGhpcy5hZGQoYSl9SGQucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMua2MubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnRvU3RyaW5nKCl9KS5qb2luKFwiLFwiKX07SGQucHJvdG90eXBlLlBhPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmtjLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIuY29udGFpbnMoYSl9KX07SGQucHJvdG90eXBlLnFhPWcoXCJrY1wiKTtcbkhkLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSl7aWYoMCE9YS5sZW5ndGgpaWYoYT10aGlzLmtjLmNvbmNhdChhKSwxPT1hLmxlbmd0aCl0aGlzLmtjPWE7ZWxzZXthLnNvcnQoRmQpO2Zvcih2YXIgYj1bXSxjPWFbMF0sZD0xO2Q8YS5sZW5ndGg7KytkKWlmKEJkKGMsYVtkXSkpe3ZhciBlPWFbZF0sZj1EZCgpO2lmKGMuZnJvbSE9RiYmZS5mcm9tIT1GKXt2YXIgaD1DZChjLmZyb20sZS5mcm9tLCEwKTsxIT1oPyhmLmZyb209Yy5mcm9tLGYuZWE9MCE9aD9jLmVhOmMuZWEmJmUuZWEpOihmLmZyb209ZS5mcm9tLGYuZWE9ZS5lYSl9Yy5vIT1GJiZlLm8hPUYmJihoPUNkKGMubyxlLm8sITEpLC0xIT1oPyhmLm89Yy5vLGYubmE9MCE9aD9jLm5hOmMubmEmJmUubmEpOihmLm89ZS5vLGYubmE9ZS5uYSkpO2M9Zn1lbHNlIGIucHVzaChjKSxjPWFbZF07Yi5wdXNoKGMpO3RoaXMua2M9Yn19O1xuZnVuY3Rpb24gSWQoYSxiKXt2YXIgYz1bXTthLnFhKCkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBiLnFhKCkubWFwKGZ1bmN0aW9uKGIpe3ZhciBjO2lmKEJkKGEsYikpe2M9RGQoKTt2YXIgZD1DZChhLmZyb20sYi5mcm9tLCEwKSxkPTA9PWQ/YS5lYT9hOmI6LTEhPWQ/YTpiO2MuZnJvbT1kLmZyb207Yy5lYT1kLmVhO2Eubz09Rnx8Yi5vPT1GP2I9YS5vPT1GP2I6YTooZD1DZChhLm8sYi5vLCExKSxiPTA9PWQ/YS5uYT9hOmI6LTE9PWQ/YTpiKTtjLm89Yi5vO2MubmE9Yi5uYX1lbHNlIGM9bnVsbDtyZXR1cm4gY30pfSkuZm9yRWFjaChmdW5jdGlvbihhKXtjPWMuY29uY2F0KGEpfSk7cmV0dXJuIG5ldyBIZChjLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PWF9KSl9O2Z1bmN0aW9uIEcoYSxiKXt0aGlzLmVudHJpZXM9YTt0aGlzLk09QihiKTt0aGlzLiRhPW51bGx9Ry5wcm90b3R5cGUudT1mdW5jdGlvbigpe3JldHVybiBDKHRoaXMuTSl9O2Z1bmN0aW9uIEpkKGEpe3JldHVybiBhLmVudHJpZXMubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhLm19KX1mdW5jdGlvbiBLZChhKXtyZXR1cm4gYS5lbnRyaWVzLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS52YS5pZCgpfSl9ZnVuY3Rpb24gTGQoYSxiKXtyZXR1cm4gYS4kYS5nZXQoYi5qKCkpfXZhciBNZD1udWxsO2Z1bmN0aW9uIE5kKCl7bnVsbD09PU1kJiYoTWQ9bmV3IEcoW10sW10pKTtyZXR1cm4gTWR9XG5mdW5jdGlvbiBPZChhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gTmQoKTtmb3IodmFyIGI9YS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYStiLmVudHJpZXMubGVuZ3RofSwwKSxjPUFycmF5KGIpLGQ9MCxiPWEubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPXkoKTthLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXtjW2QrK109YTtiLnNldChhLmlkLGEpfSk7cmV0dXJuIGJ9KSxlPXkoKSxmPTA7ZjxjLmxlbmd0aDtmKyspYi5ldmVyeShmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXMoY1tmXS5pZCl9KSYmZS5zZXQoY1tmXS5pZCxjW2ZdKTtyZXR1cm4gbmV3IEcoeihlKSxDKGFbMF0uTSkpfWZ1bmN0aW9uIFBkKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiBOZCgpO3ZhciBiPXkoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5zZXQoYS5pZCxhKX0pfSk7cmV0dXJuIG5ldyBHKHooYiksQyhhWzBdLk0pKX1cbmZ1bmN0aW9uIFFkKGEsYil7dmFyIGM9MTxiLmxlbmd0aDthPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUmQoYSxjKX0pO3JldHVybiBuZXcgRyhhLGIpfWZ1bmN0aW9uIFJkKGEsYil7dGhpcy52YT1hO3RoaXMuaWQ9U2QrKzt0aGlzLllkPWJ9dmFyIFNkPTA7ZnVuY3Rpb24gSChhLGIpe3ZhciBjPWIuS2E7cmV0dXJuIG51bGwhPT1jJiZhLnZhLm0uaGFzT3duUHJvcGVydHkoYyk/YS52YS5tW2NdOmEuWWQ/YS52YS5tW1RkKGIuSSgpKV1bYi5nZXROYW1lKCldOmEudmEubVtiLmdldE5hbWUoKV19ZnVuY3Rpb24gVWQoYSxiLGMpe3ZhciBkPWIuS2E7aWYobnVsbCE9ZClhLnZhLm1bZF09YztlbHNlIGlmKGEuWWQpe3ZhciBkPVRkKGIuSSgpKSxlPWEudmEubVtkXTtudWxsPT1lJiYoZT17fSxhLnZhLm1bZF09ZSk7ZVtiLmdldE5hbWUoKV09Y31lbHNlIGEudmEubVtiLmdldE5hbWUoKV09Y31cbmZ1bmN0aW9uIFZkKGEsYixjLGQpe2Z1bmN0aW9uIGUoYSxiKXtpZihhLllkKXthPWEudmEubTtmb3IodmFyIGMgaW4gYSlmW2NdPWFbY119ZWxzZSBmW2JbMF1dPWEudmEubX12YXIgZj17fTtlKGEsYik7ZShjLGQpO2E9bmV3IGhjKC0xLGYpO3JldHVybiBuZXcgUmQoYSwhMCl9O3EoXCJsZi5iaW5kXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBXZChhKX0pO2Z1bmN0aW9uIFdkKGEpe3RoaXMuZmE9YX1xKFwibGYuQmluZGVyXCIsV2QpO1dkLnByb3RvdHlwZS5DYT1nKFwiZmFcIik7ZnVuY3Rpb24gWGQoKXt0aGlzLlplPVlkKCk7dmFyIGE9WmQoKTt0aGlzLk9iPXkoKTt0aGlzLk9iLnNldCgxLCRkKCkpO3RoaXMuT2Iuc2V0KDIsYWUoKSk7dGhpcy5PYi5zZXQoNCxhKTt0aGlzLk9iLnNldCgzLGEpO3RoaXMuT2Iuc2V0KDUsYmUoKSk7dGhpcy5PYi5zZXQoNixjZSgpKX12YXIgZGU7ZnVuY3Rpb24gZWUoKXtudWxsIT1kZXx8KGRlPW5ldyBYZCk7cmV0dXJuIGRlfWZ1bmN0aW9uIGZlKGEsYixjKXthPWEuT2IuZ2V0KGIpfHxudWxsO2lmKG51bGw9PT1hKXRocm93IG5ldyBEKDU1MCk7Yz1hLmdldChjKXx8bnVsbDtpZihudWxsPT09Yyl0aHJvdyBuZXcgRCg1NTApO3JldHVybiBjfVxuZnVuY3Rpb24gWWQoKXtmdW5jdGlvbiBhKGEpe3JldHVybiBhfXZhciBiPXkoKTtiLnNldCgxLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YT9udWxsOmE/MTowfSk7Yi5zZXQoMixmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWE/bnVsbDphLmdldFRpbWUoKX0pO2Iuc2V0KDMsYSk7Yi5zZXQoNCxhKTtiLnNldCg1LGEpO3JldHVybiBifWZ1bmN0aW9uICRkKCl7dmFyIGE9eSgpO2Euc2V0KFwiZXFcIixmdW5jdGlvbihhLGMpe3JldHVybiBhPT1jfSk7YS5zZXQoXCJuZXFcIixmdW5jdGlvbihhLGMpe3JldHVybiBhIT1jfSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBaZCgpe3ZhciBhPSRkKCk7YS5zZXQoXCJiZXR3ZWVuXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jWzBdfHxudWxsPT09Y1sxXT8hMTphPj1jWzBdJiZhPD1jWzFdfSk7YS5zZXQoXCJndGVcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YT49Y30pO2Euc2V0KFwiZ3RcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YT5jfSk7YS5zZXQoXCJpblwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuLTEhPWMuaW5kZXhPZihhKX0pO2Euc2V0KFwibHRlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmE8PWN9KTthLnNldChcImx0XCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmE8Y30pO3JldHVybiBhfVxuZnVuY3Rpb24gYmUoKXt2YXIgYT1aZCgpO2Euc2V0KFwibWF0Y2hcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6KG5ldyBSZWdFeHAoYykpLnRlc3QoYSl9KTtyZXR1cm4gYX1mdW5jdGlvbiBjZSgpe3ZhciBhPXkoKTthLnNldChcImVxXCIsZnVuY3Rpb24oYSxjKXtpZihudWxsIT09Yyl0aHJvdyBuZXcgRCg1NTApO3JldHVybiBudWxsPT09YX0pO2Euc2V0KFwibmVxXCIsZnVuY3Rpb24oYSxjKXtpZihudWxsIT09Yyl0aHJvdyBuZXcgRCg1NTApO3JldHVybiBudWxsIT09YX0pO3JldHVybiBhfVxuZnVuY3Rpb24gYWUoKXt2YXIgYT15KCk7YS5zZXQoXCJiZXR3ZWVuXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jWzBdfHxudWxsPT09Y1sxXT8hMTphLmdldFRpbWUoKT49Y1swXS5nZXRUaW1lKCkmJmEuZ2V0VGltZSgpPD1jWzFdLmdldFRpbWUoKX0pO2Euc2V0KFwiZXFcIixmdW5jdGlvbihhLGMpe3JldHVybihudWxsPT09YT8tMTphLmdldFRpbWUoKSk9PShudWxsPT09Yz8tMTpjLmdldFRpbWUoKSl9KTthLnNldChcImd0ZVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphLmdldFRpbWUoKT49Yy5nZXRUaW1lKCl9KTthLnNldChcImd0XCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmEuZ2V0VGltZSgpPmMuZ2V0VGltZSgpfSk7YS5zZXQoXCJpblwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGMuc29tZShmdW5jdGlvbihiKXtyZXR1cm4gYi5nZXRUaW1lKCk9PWEuZ2V0VGltZSgpfSl9KTthLnNldChcImx0ZVwiLFxuZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmEuZ2V0VGltZSgpPD1jLmdldFRpbWUoKX0pO2Euc2V0KFwibHRcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YS5nZXRUaW1lKCk8Yy5nZXRUaW1lKCl9KTthLnNldChcIm5lcVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuKG51bGw9PT1hPy0xOmEuZ2V0VGltZSgpKSE9KG51bGw9PT1jPy0xOmMuZ2V0VGltZSgpKX0pO3JldHVybiBhfTtmdW5jdGlvbiBJKCl7dGhpcy5oPXRoaXMuRD1udWxsfXZhciBnZT1bXTtJLnByb3RvdHlwZS5nZXRQYXJlbnQ9ZyhcIkRcIik7SS5wcm90b3R5cGUuYmI9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcztudWxsIT09YS5nZXRQYXJlbnQoKTspYT1hLmdldFBhcmVudCgpO3JldHVybiBhfTtmdW5jdGlvbiBoZShhKXtmb3IodmFyIGI9MDtudWxsIT09YS5nZXRQYXJlbnQoKTspYisrLGE9YS5nZXRQYXJlbnQoKTtyZXR1cm4gYn1mdW5jdGlvbiBKKGEpe3JldHVybiBhLmh8fGdlfWZ1bmN0aW9uIGllKGEsYil7cmV0dXJuIEooYSlbYl18fG51bGx9ZnVuY3Rpb24gamUoYSxiLGMpe2IuRD1hO251bGw9PT1hLmg/YS5oPVtiXTphLmguc3BsaWNlKGMsMCxiKX1mdW5jdGlvbiBLKGEsYil7Yi5EPWE7bnVsbD09PWEuaD9hLmg9W2JdOmEuaC5wdXNoKGIpfVxuZnVuY3Rpb24ga2UoYSxiKXt2YXIgYz1hLmgmJmEuaFtiXTtyZXR1cm4gYz8oYy5EPW51bGwsYS5oLnNwbGljZShiLDEpLDA9PWEuaC5sZW5ndGgmJihhLmg9bnVsbCksYyk6bnVsbH1JLnByb3RvdHlwZS5yZW1vdmVDaGlsZD1mdW5jdGlvbihhKXtyZXR1cm4ga2UodGhpcyxKKHRoaXMpLmluZGV4T2YoYSkpfTtmdW5jdGlvbiBsZShhLGIsYyl7aWUoYSxjKS5EPW51bGw7Yi5EPWE7YS5oW2NdPWJ9ZnVuY3Rpb24gbWUoYSxiLGMpeyExIT09Yi5jYWxsKGMsYSkmJkooYSkuZm9yRWFjaChmdW5jdGlvbihhKXttZShhLGIsYyl9KX07ZnVuY3Rpb24gbmUoKXtJLmNhbGwodGhpcyk7dGhpcy5zYT1wZSsrfXIobmUsSSk7dmFyIHBlPTA7bmUucHJvdG90eXBlLlc9ZyhcInNhXCIpO2Z1bmN0aW9uIHFlKGEsYixjKXtuZS5jYWxsKHRoaXMpO3RoaXMuSj1hO3RoaXMudmFsdWU9Yjt0aGlzLkY9Yzt0aGlzLnZjPWZlKGVlKCksdGhpcy5KLkcoKSx0aGlzLkYpO3RoaXMuV2E9ITE7dGhpcy5jYz1ifXIocWUsbmUpO209cWUucHJvdG90eXBlO20uTmI9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgcWUodGhpcy5KLHRoaXMudmFsdWUsdGhpcy5GKTthLmNjPXRoaXMuY2M7YS52ZCh0aGlzLldhKTt2YXIgYj10aGlzLlcoKTthLnNhPWI7cmV0dXJuIGF9O20ubGI9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/KGEucHVzaCh0aGlzLkopLGEpOlt0aGlzLkpdfTttLnU9ZnVuY3Rpb24oYSl7YT1udWxsIT1hP2E6QigpO2EuYWRkKHRoaXMuSi5JKCkpO3JldHVybiBhfTttLnZkPWJhKFwiV2FcIik7XG5mdW5jdGlvbiByZShhKXt2YXIgYj0hMTthLnZhbHVlIGluc3RhbmNlb2YgV2R8fChiPVwiYXJyYXlcIj09ZmEoYS52YWx1ZSk/IWEudmFsdWUuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFdkfSk6ITApO2lmKCFiKXRocm93IG5ldyBEKDUwMSk7fW0uZXZhbD1mdW5jdGlvbihhKXtyZSh0aGlzKTtpZihcImluXCI9PXRoaXMuRilyZXR1cm4gc2UodGhpcyxhKTt2YXIgYj1hLmVudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnZjKEgoYSx0aGlzLkopLHRoaXMudmFsdWUpIT10aGlzLldhfSx0aGlzKTtyZXR1cm4gbmV3IEcoYixhLnUoKSl9O1xubS5iaW5kPWZ1bmN0aW9uKGEpe2lmKHRoaXMuY2MgaW5zdGFuY2VvZiBXZCl7dmFyIGI9dGhpcy5jYy5DYSgpO2lmKGEubGVuZ3RoPD1iKXRocm93IG5ldyBEKDUxMCk7dGhpcy52YWx1ZT1hW2JdfWVsc2VcImFycmF5XCI9PWZhKHRoaXMuY2MpJiYodGhpcy52YWx1ZT10aGlzLmNjLm1hcChmdW5jdGlvbihiKXtpZihiIGluc3RhbmNlb2YgV2Qpe3ZhciBjPWIuQ2EoKTtpZihhLmxlbmd0aDw9Yyl0aHJvdyBuZXcgRCg1MTApO3JldHVybiBhW2IuQ2EoKV19cmV0dXJuIGJ9KSl9O2Z1bmN0aW9uIHNlKGEsYil7dmFyIGM9QihhLnZhbHVlKSxkPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YT8hMTpjLmhhcyhhKSE9dGhpcy5XYX0uYmluZChhKTthPWIuZW50cmllcy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGQoSChhLHRoaXMuSikpfSxhKTtyZXR1cm4gbmV3IEcoYSxiLnUoKSl9XG5tLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJ2YWx1ZV9wcmVkKFwiK3RoaXMuSi5qKCkrXCIgXCIrdGhpcy5GKyh0aGlzLldhP1wiKGNvbXBsZW1lbnQpXCI6XCJcIikrXCIgXCIrdGhpcy52YWx1ZStcIilcIn07bS5sZD1mdW5jdGlvbigpe3JlKHRoaXMpO3JldHVybiBudWxsIT09dGhpcy52YWx1ZSYmKFwiYmV0d2VlblwiPT10aGlzLkZ8fFwiaW5cIj09dGhpcy5GfHxcImVxXCI9PXRoaXMuRnx8XCJndFwiPT10aGlzLkZ8fFwiZ3RlXCI9PXRoaXMuRnx8XCJsdFwiPT10aGlzLkZ8fFwibHRlXCI9PXRoaXMuRil9O1xubS53ZT1mdW5jdGlvbigpe3ZhciBhPW51bGw7aWYoXCJiZXR3ZWVuXCI9PXRoaXMuRilhPW5ldyBFKHRlKHRoaXMsdGhpcy52YWx1ZVswXSksdGUodGhpcyx0aGlzLnZhbHVlWzFdKSwhMSwhMSk7ZWxzZXtpZihcImluXCI9PXRoaXMuRilyZXR1cm4gYT10aGlzLnZhbHVlLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IEUoYSxhLCExLCExKX0pLG5ldyBIZCh0aGlzLldhP0dkKGEpOmEpO2E9dGUodGhpcyx0aGlzLnZhbHVlKTthPVwiZXFcIj09dGhpcy5GP25ldyBFKGEsYSwhMSwhMSk6XCJndGVcIj09dGhpcy5GP25ldyBFKGEsRiwhMSwhMSk6XCJndFwiPT10aGlzLkY/bmV3IEUoYSxGLCEwLCExKTpcImx0ZVwiPT10aGlzLkY/bmV3IEUoRixhLCExLCExKTpuZXcgRShGLGEsITEsITApfXJldHVybiBuZXcgSGQodGhpcy5XYT96ZChhKTpbYV0pfTtmdW5jdGlvbiB0ZShhLGIpe3JldHVybiAyPT1hLkouRygpP2IuZ2V0VGltZSgpOmJ9O2Z1bmN0aW9uIHVlKGEpe3RoaXMuYmE9YTt0aGlzLldjPXRoaXMuR2E9bnVsbH1mdW5jdGlvbiB2ZShhLGIpe251bGw9PT1hLkdhJiZudWxsIT1hLncmJihhLkdhPXdlKGEudykpO3JldHVybiBhLkdhLmdldChiKXx8bnVsbH1mdW5jdGlvbiB3ZShhKXt2YXIgYj15KCk7bWUoYSxmdW5jdGlvbihhKXtiLnNldChhLlcoKSxhKX0pO3JldHVybiBifWZ1bmN0aW9uIHhlKGEsYil7Yi53JiYoYS53PWIudy5OYigpKTthLldjPWJ9dWUucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307ZnVuY3Rpb24geWUoYSxiKXthPWEudztudWxsIT1hJiZtZShhLGZ1bmN0aW9uKGEpe2EgaW5zdGFuY2VvZiBxZSYmYS5iaW5kKGIpfSl9O2Z1bmN0aW9uIHplKGEpe3VlLmNhbGwodGhpcyxhKX1yKHplLHVlKTtmdW5jdGlvbiBBZShhKXt2YXIgYj1cIlwiO2EuZm9yRWFjaChmdW5jdGlvbihjLGQpe2IrPWMuSi5qKCkrXCIgXCI7Yis9MT09Yy5vcmRlcj9cIkFTQ1wiOlwiREVTQ1wiO2Q8YS5sZW5ndGgtMSYmKGIrPVwiLCBcIil9KTtyZXR1cm4gYn16ZS5wcm90b3R5cGUuZGE9ZnVuY3Rpb24oKXtyZXR1cm4gQih0aGlzLmZyb20pfTt6ZS5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgemUodGhpcy5iYSk7eGUoYSx0aGlzKTt0aGlzLmYmJihhLmY9dGhpcy5mLnNsaWNlKCkpO3RoaXMuZnJvbSYmKGEuZnJvbT10aGlzLmZyb20uc2xpY2UoKSk7YS5YPXRoaXMuWDthLkw9dGhpcy5MO3RoaXMuTiYmKGEuTj10aGlzLk4uc2xpY2UoKSk7dGhpcy5yYSYmKGEucmE9dGhpcy5yYS5zbGljZSgpKTt0aGlzLlNiJiYoYS5TYj10aGlzLlNiKTt0aGlzLlpiJiYoYS5aYj10aGlzLlpiKTthLmViPXRoaXMuZWI7cmV0dXJuIGF9O1xuemUucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7emUuaGIuYmluZC5jYWxsKHRoaXMsYSk7bnVsbCE9dGhpcy5TYiYmKHRoaXMuWD1hW3RoaXMuU2IuQ2EoKV0pO251bGwhPXRoaXMuWmImJih0aGlzLkw9YVt0aGlzLlpiLkNhKCldKTt5ZSh0aGlzLGEpO3JldHVybiB0aGlzfTtmdW5jdGlvbiBCZShhLGIpe3RoaXMuSGE9YTt0aGlzLmFhPWJ9QmUucHJvdG90eXBlLmJiPWcoXCJIYVwiKTtCZS5wcm90b3R5cGUuZGE9ZyhcImFhXCIpO2Z1bmN0aW9uIENlKGEpe3ZhciBiPUIoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5kYSgpLmZvckVhY2goYi5hZGQuYmluZChiKSl9KTtyZXR1cm4gYn07ZnVuY3Rpb24gRGUoYSxiKXt0aGlzLmdsb2JhbD1hO3RoaXMuT2E9YS5iKHZjKTt0aGlzLnRkPWIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRleHR9KTt0aGlzLmpmPWIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmplfSk7dGhpcy5NZD1DZSh0aGlzLmpmKTt0aGlzLnhlPUVlKHRoaXMpO3RoaXMuRGI9dygpfWZ1bmN0aW9uIEVlKGEpe3JldHVybiBhLnRkLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIShhIGluc3RhbmNlb2YgemUpfSk/MTowfW09RGUucHJvdG90eXBlO1xubS5leGVjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3ZhciBmPWQuc2hpZnQoKTtpZihmKXt2YXIgaD1lW2MubGVuZ3RoXTtyZXR1cm4gZi5iYigpLmV4ZWMoYixoKS50aGVuKGZ1bmN0aW9uKGIpe2MucHVzaChiWzBdKTtyZXR1cm4gYSgpfSl9cmV0dXJuIHYoKX12YXIgYj0wPT10aGlzLnhlP3ZvaWQgMDpuZXcgdWQodGhpcy5nbG9iYWwsdGhpcy5NZCksYz1bXSxkPXRoaXMuamYuc2xpY2UoKSxlPXRoaXMudGQ7cmV0dXJuIGEoKS50aGVuKGZ1bmN0aW9uKCl7dGhpcy5qYT10aGlzLk9hLkZiKHRoaXMueGUsQyh0aGlzLk1kKSxiKTtyZXR1cm4gdGhpcy5qYS5rYSgpfS5iaW5kKHRoaXMpKS50aGVuKGZ1bmN0aW9uKCl7dGhpcy5nZShjKTtyZXR1cm4gY30uYmluZCh0aGlzKSxmdW5jdGlvbihhKXtudWxsIT1iJiZiLkpiKCk7dGhyb3cgYTt9KX07bS5HPWcoXCJ4ZVwiKTttLmRhPWcoXCJNZFwiKTttLlc9ZnVuY3Rpb24oKXtyZXR1cm4ga2EodGhpcyl9O20uZ2U9YWEoKTtcbm0uWT1mdW5jdGlvbigpe3ZhciBhPW51bGw7bnVsbCE9dGhpcy5qYSYmKGE9dGhpcy5qYS5ZKCkpO3JldHVybiBudWxsPT09YT9uZXcgQSghMSwwLDAsMCwwKTphfTtmdW5jdGlvbiBGZShhLGIpe0RlLmNhbGwodGhpcyxhLGIpO3RoaXMuSWI9YS5iKEFjKX1yKEZlLERlKTtGZS5wcm90b3R5cGUuZ2V0UHJpb3JpdHk9aygwKTtGZS5wcm90b3R5cGUuZ2U9ZnVuY3Rpb24oYSl7dGhpcy50ZC5mb3JFYWNoKGZ1bmN0aW9uKGIsYyl7R2UodGhpcy5JYixiLGFbY10pfSx0aGlzKX07ZnVuY3Rpb24gSGUoYSxiKXt0aGlzLmM9YTt0aGlzLkliPWEuYihBYyk7dGhpcy5JYT1hLmIoemMpO3RoaXMuZ2Q9bmV3IFJjKGEpO3RoaXMuaWI9Yjt2YXIgYz1hLmIoQmMpO2E9dGhpcy5pYi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGMudGFibGUoYS5nZXROYW1lKCkpfSk7dGhpcy5hYT1CKGEpO3RoaXMuRGI9dygpfW09SGUucHJvdG90eXBlO20uZXhlYz1mdW5jdGlvbigpe3RoaXMuZ2QudXBkYXRlKHRoaXMuaWIpO3RoaXMuTWMoKTtyZXR1cm4gdigpfTttLkc9aygxKTttLmRhPWcoXCJhYVwiKTttLlc9ZnVuY3Rpb24oKXtyZXR1cm4ga2EodGhpcyl9O20uZ2V0UHJpb3JpdHk9aygxKTttLk1jPWZ1bmN0aW9uKCl7dmFyIGE9SWUodGhpcy5JYix0aGlzLmFhKTswIT1hLmxlbmd0aCYmKGE9bmV3IEZlKHRoaXMuYyxhKSxKZSh0aGlzLklhLGEpKX07ZnVuY3Rpb24gS2UoYSl7dGhpcy5jPWE7dGhpcy5PYT1hLmIodmMpO3RoaXMuSWE9YS5iKHpjKX1LZS5wcm90b3R5cGUuZWU9ZnVuY3Rpb24oYSl7YT1uZXcgSGUodGhpcy5jLGEpO0plKHRoaXMuSWEsYSl9O2Z1bmN0aW9uIE0oYSxiKXt0aGlzLlVhPWE7dGhpcy5pPWI7dGhpcy5aYT15KCl9cShcImxmLmJhY2tzdG9yZS5GaXJlYmFzZVJhd0JhY2tTdG9yZVwiLE0pO00ucHJvdG90eXBlLmNkPWcoXCJpXCIpO00ucHJvdG90eXBlLmRkPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEQoMzUxKTt9O2Z1bmN0aW9uIExlKGEsYil7dmFyIGM9dygpLGQ9YTtiLmxlbmd0aCYmKGQ9YS5jaGlsZChiKSk7ZC5vbmNlKFwidmFsdWVcIixmdW5jdGlvbihhKXtjLnJlc29sdmUoYS52YWwoKSl9LGZ1bmN0aW9uKGEpe2MucmVqZWN0KGEpfSk7cmV0dXJuIGMuaGF9ZnVuY3Rpb24gTWUoYSxiLGMpe2Z1bmN0aW9uIGQoYSl7YT9lLnJlamVjdChhKTplLnJlc29sdmUoKX1jPWN8fCExO3ZhciBlPXcoKTtjP2Euc2V0KGIsZCk6YS51cGRhdGUoYixkKTtyZXR1cm4gZS5oYX1cbk0ucHJvdG90eXBlLkVhPWZ1bmN0aW9uKGEpe3JldHVybiBMZSh0aGlzLmksXCJAcmV2L1JcIikudGhlbihmdW5jdGlvbihhKXt0aGlzLlNhPWE7cmV0dXJuIExlKHRoaXMuaSxcIkB0YWJsZVwiKX0uYmluZCh0aGlzKSkudGhlbihmdW5jdGlvbihiKXt2YXIgYz0wLGQ7Zm9yKGQgaW4gYil0aGlzLlphLnNldChkLGJbZF0pLGJbZF0+YyYmKGM9YltkXSk7YS5vYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5aYS5oYXMoYS5nZXROYW1lKCkpfHwoYlthLmdldE5hbWUoKV09KytjKX0sdGhpcyk7ZD10aGlzLmkuY2hpbGQoXCJAdGFibGVcIik7cmV0dXJuIE1lKGQsYil9LmJpbmQodGhpcykpfTtcbmZ1bmN0aW9uIE5lKGEsYixjKXt2YXIgZD1hLlphLmdldChiKTtyZXR1cm4gbnVsbCE9ZD9mdW5jdGlvbigpe3ZhciBhPXt9LGI9dygpO3RoaXMuaS5vcmRlckJ5Q2hpbGQoXCJUXCIpLmVxdWFsVG8oZCkub25jZShcInZhbHVlXCIsZnVuY3Rpb24oZCl7ZC5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPWMoYi52YWwoKSk7YVtwYXJzZUludChiLmtleSgpLDEwKV09ZH0pO2IucmVzb2x2ZShhKX0pO3JldHVybiBiLmhhfS5jYWxsKGEpLnRoZW4oZnVuY3Rpb24oYSl7YVtcIkByZXZcIl09e1I6Kyt0aGlzLlNhfTtyZXR1cm4gTWUodGhpcy5pLGEpfS5iaW5kKGEpKTp2KCl9TS5wcm90b3R5cGUudGM9ZnVuY3Rpb24oYSl7cmV0dXJuIE5lKHRoaXMsYSxrKG51bGwpKS50aGVuKGZ1bmN0aW9uKCl7dGhpcy5aYS5kZWxldGUoYSk7cmV0dXJuIE1lKHRoaXMuaS5jaGlsZChcIkB0YWJsZS9cIithKSxudWxsLCEwKX0uYmluZCh0aGlzKSl9O00ucHJvdG90eXBlLmRyb3BUYWJsZT1NLnByb3RvdHlwZS50Yztcbk0ucHJvdG90eXBlLnFjPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTmUodGhpcyxhLGZ1bmN0aW9uKGEpe3ZhciBkPWEuUDtkW2JdPWM7cmV0dXJue1I6dGhpcy5TYSsxLFQ6YS5ULFA6ZH19LmJpbmQodGhpcykpfTtNLnByb3RvdHlwZS5hZGRUYWJsZUNvbHVtbj1NLnByb3RvdHlwZS5xYztNLnByb3RvdHlwZS51Yz1mdW5jdGlvbihhLGIpe3JldHVybiBOZSh0aGlzLGEsZnVuY3Rpb24oYSl7dmFyIGM9YS5QO2RlbGV0ZSBjW2JdO3JldHVybntSOnRoaXMuU2ErMSxUOmEuVCxQOmN9fS5iaW5kKHRoaXMpKX07TS5wcm90b3R5cGUuZHJvcFRhYmxlQ29sdW1uPU0ucHJvdG90eXBlLnVjO00ucHJvdG90eXBlLkxjPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTmUodGhpcyxhLGZ1bmN0aW9uKGEpe3ZhciBkPWEuUDtkW2NdPWRbYl07ZGVsZXRlIGRbYl07cmV0dXJue1I6dGhpcy5TYSsxLFQ6YS5ULFA6ZH19LmJpbmQodGhpcykpfTtNLnByb3RvdHlwZS5yZW5hbWVUYWJsZUNvbHVtbj1NLnByb3RvdHlwZS5MYztcbk0ucHJvdG90eXBlLnhiPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEQoMzUxKTt9O00ucHJvdG90eXBlLmNyZWF0ZVJvdz1NLnByb3RvdHlwZS54YjtNLnByb3RvdHlwZS5DYz1nKFwiVWFcIik7TS5wcm90b3R5cGUuZ2V0VmVyc2lvbj1NLnByb3RvdHlwZS5DYztNLnByb3RvdHlwZS5lYz1mdW5jdGlvbihhKXt2YXIgYj13KCk7YT10aGlzLlphLmdldChhKTt0aGlzLmkub3JkZXJCeUNoaWxkKFwiVFwiKS5lcXVhbFRvKGEpLm9uY2UoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEpe3ZhciBjPVtdO2EuZm9yRWFjaChmdW5jdGlvbihhKXtjLnB1c2goYS52YWwoKS5QKX0pO2IucmVzb2x2ZShjKX0pO3JldHVybiBiLmhhfTtNLnByb3RvdHlwZS5kdW1wPWZ1bmN0aW9uKCl7dmFyIGE9e30sYj1nYyh0aGlzLlphKS5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuZWMoYikudGhlbihmdW5jdGlvbihjKXthW2JdPWN9KX0uYmluZCh0aGlzKSk7cmV0dXJuIGViKGIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYX0pfTtcbk0ucHJvdG90eXBlLmR1bXA9TS5wcm90b3R5cGUuZHVtcDtmdW5jdGlvbiBPZShhLGIsYyl7bmMuY2FsbCh0aGlzLGIsYyk7dGhpcy5pPWF9cihPZSxuYyk7T2UucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuaS5BYyhhKX07XG5PZS5wcm90b3R5cGUuc2M9ZnVuY3Rpb24oKXtpZigwPT10aGlzLnlkKXJldHVybiB0aGlzLlMucmVzb2x2ZSgpLHRoaXMuUy5oYTt2YXIgYT10aGlzLlJhLmliO2lmKDA9PWEuc2l6ZSl0aGlzLlMucmVzb2x2ZSgpO2Vsc2V7dmFyIGI9dGhpcy5pLlNhKzE7dGhpcy5pLlNhPWI7dmFyIGM9e1wiQHJldlwiOntSOmJ9fTthLmZvckVhY2goZnVuY3Rpb24oYSxlKXt2YXIgZD10aGlzLmkuWmEuZ2V0KGUpO2Eud2EuZm9yRWFjaChmdW5jdGlvbihhLGUpe2NbZV09e1I6YixUOmQsUDphLm19fSk7YS5sYS5mb3JFYWNoKGZ1bmN0aW9uKGEsZSl7Y1tlXT17UjpiLFQ6ZCxQOmFbMV0ubX19KTthLnhhLmZvckVhY2goZnVuY3Rpb24oYSxiKXtjW2JdPW51bGx9KX0sdGhpcyk7dGhpcy5pLmkudXBkYXRlKGMsZnVuY3Rpb24oYyl7bnVsbD09PWM/dGhpcy5TLnJlc29sdmUoKToodGhpcy5pLlNhPWItMSxjPXooYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBQZSh0aGlzLmksYS5nZXROYW1lKCkpfSx0aGlzKSxcbmViKGMpLnRoZW4odGhpcy5TLnJlamVjdC5iaW5kKHRoaXMuUyksdGhpcy5TLnJlamVjdC5iaW5kKHRoaXMuUykpKX0uYmluZCh0aGlzKSl9cmV0dXJuIHRoaXMuUy5oYX07ZnVuY3Rpb24gUWUoKXt0aGlzLkJhPXkoKX1mdW5jdGlvbiBSZShhLGIpe2lmKDA9PWIubGVuZ3RoKXJldHVybiB6KGEuQmEpO3ZhciBjPVtdO2IuZm9yRWFjaChmdW5jdGlvbihhKXthPXRoaXMuQmEuZ2V0KGEpfHxudWxsO251bGw9PT1hfHxjLnB1c2goYSl9LGEpO3JldHVybiBjfVFlLnByb3RvdHlwZS5nZXREYXRhPWcoXCJCYVwiKTtRZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB2KFJlKHRoaXMsYSkpfTtmdW5jdGlvbiBTZShhLGIpe2IuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLkJhLnNldChhLmlkKCksYSl9LGEpfVFlLnByb3RvdHlwZS5wdXQ9ZnVuY3Rpb24oYSl7U2UodGhpcyxhKTtyZXR1cm4gdigpfTtmdW5jdGlvbiBUZShhLGIpezA9PWIubGVuZ3RofHxiLmxlbmd0aD09YS5CYS5zaXplP2EuQmEuY2xlYXIoKTpiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5CYS5kZWxldGUoYSl9LGEpfVxuUWUucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXtUZSh0aGlzLGEpO3JldHVybiB2KCl9O2Z1bmN0aW9uIFVlKGEpe3JldHVybiAwPT1hLkJhLnNpemU/MDpnYyhhLkJhKS5yZWR1Y2UoZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT5jP2E6Y30sMCl9O2Z1bmN0aW9uIFZlKGEsYil7dGhpcy5nPWE7dGhpcy5EZj1iO3RoaXMuS2M9eSgpO3RoaXMuU2E9LTE7dGhpcy5NPXkoKTt0aGlzLlphPXkoKTt0aGlzLkpkPW51bGx9bT1WZS5wcm90b3R5cGU7XG5tLkVhPWZ1bmN0aW9uKGEpe3RoaXMuaT10aGlzLkRmLmNoaWxkKHRoaXMuZy5uYW1lKCkpO3ZhciBiPWF8fGZ1bmN0aW9uKCl7cmV0dXJuIHYoKX07cmV0dXJuIExlKHRoaXMuaSxcIkBkYi92ZXJzaW9uXCIpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hP01lKHRoaXMuaSxXZSh0aGlzKSwhMCkudGhlbihmdW5jdGlvbigpe3ZhciBhPW5ldyBNKDAsdGhpcy5pKTtyZXR1cm4gYihhKX0uYmluZCh0aGlzKSkudGhlbihmdW5jdGlvbigpe3JldHVybiB0aGlzLkVhKCl9LmJpbmQodGhpcykpOmE9PXRoaXMuZy52ZXJzaW9uKCk/TGUodGhpcy5pLFwiQHJldi9SXCIpLnRoZW4oZnVuY3Rpb24oYSl7dGhpcy5TYT1hO3JldHVybiBMZSh0aGlzLmksXCJAdGFibGVcIil9LmJpbmQodGhpcykpLnRoZW4oZnVuY3Rpb24oYSl7Zm9yKHZhciBiIGluIGEpdGhpcy5aYS5zZXQoYixhW2JdKTthPXRoaXMuZy5vYSgpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gUGUodGhpcyxhLmdldE5hbWUoKSl9LHRoaXMpO1xucmV0dXJuIGViKGEpfS5iaW5kKHRoaXMpKS50aGVuKGZ1bmN0aW9uKCl7WGUodGhpcyk7WWUodGhpcyk7cmV0dXJuIHYoKX0uYmluZCh0aGlzKSk6dGhpcy5oZShhLGIpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5FYSgpfS5iaW5kKHRoaXMpKX0uYmluZCh0aGlzKSl9O20uaGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgTShhLHRoaXMuaSk7cmV0dXJuIGMuRWEodGhpcy5nKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHYoKX0uYmluZCh0aGlzKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBiKGMpfSkudGhlbihmdW5jdGlvbigpe3ZhciBhPXRoaXMuaS5jaGlsZChcIkBkYlwiKTtyZXR1cm4gTWUoYSx7dmVyc2lvbjp0aGlzLmcudmVyc2lvbigpfSwhMCl9LmJpbmQodGhpcykpfTtcbmZ1bmN0aW9uIFllKGEpe2EuaS5vZmYoKTthLmkub24oXCJjaGlsZF9yZW1vdmVkXCIsYS56Zy5iaW5kKGEpKTthLktkJiYoYS5LZC5vZmYoKSxhLktjLmNsZWFyKCkpO2EuS2Q9YS5pLm9yZGVyQnlDaGlsZChcIlJcIikuc3RhcnRBdChhLlNhKzEpO2EuS2Qub24oXCJ2YWx1ZVwiLGEuZWUuYmluZChhKSl9ZnVuY3Rpb24gWGUoYSl7aWM9eihhLk0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gVWUoYSl9KS5yZWR1Y2UoZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT5jP2E6Y30sMCkrMX1tLnpnPWZ1bmN0aW9uKGEpe3ZhciBiPWEudmFsKCksYz10aGlzLktjLmdldChiLlQpfHxudWxsO251bGw9PT1jJiYoYz1CKCksdGhpcy5LYy5zZXQoYi5ULGMpKTtjLmFkZChwYXJzZUludChhLmtleSgpLDEwKSl9O1xubS5lZT1mdW5jdGlvbihhKXt2YXIgYj1hLmNoaWxkKFwiQHJldi9SXCIpLnZhbCgpO251bGwhPWImJmIhPXRoaXMuU2EmJih0aGlzLlNhPWIsYT1aZSh0aGlzLGEpLGEuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLk0uZ2V0KGEuZ2V0TmFtZSgpKSxjPWdjKGEueGEpOzA8Yy5sZW5ndGgmJlRlKGIsYyk7dmFyIGY9eihhLndhKTthLmxhLmZvckVhY2goZnVuY3Rpb24oYSl7Zi5wdXNoKGFbMV0pfSk7U2UoYixmKX0sdGhpcyksMDxhLmxlbmd0aCYmdGhpcy5HYyhhKSxZZSh0aGlzKSl9O1xuZnVuY3Rpb24gWmUoYSxiKXt2YXIgYz1CKCksZD15KCk7YS5aYS5mb3JFYWNoKGZ1bmN0aW9uKGEsYil7dmFyIGU9dGhpcy5NLmdldChiKSxmPW5ldyBzZChiKTt0aGlzLktjLmhhcyhhKSYmKGI9Qyh0aGlzLktjLmdldChhKSksYi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2MuYWRkKGEpfSksUmUoZSxiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2YuZGVsZXRlKGEpfSkpO2Quc2V0KGEsZil9LmJpbmQoYSkpO2IuZm9yRWFjaChmdW5jdGlvbihhKXtpZihcIkByZXZcIiE9YS5rZXkoKSl7dmFyIGI9cGFyc2VJbnQoYS5rZXkoKSwxMCk7aWYoIWMuaGFzKGIpKXt2YXIgZT1hLnZhbCgpO2E9ZC5nZXQoZS5UKTt2YXIgbD10aGlzLk0uZ2V0KGEuZ2V0TmFtZSgpKSxlPXRoaXMuZy50YWJsZShhLmdldE5hbWUoKSkua2Ioe2lkOmIsdmFsdWU6ZS5QfSk7bC5nZXREYXRhKCkuaGFzKGIpP2EubW9kaWZ5KFtSZShsLFtiXSlbMF0sZV0pOmEuYWRkKGUpfX19LmJpbmQoYSkpO3JldHVybiB6KGQpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4hYS5qZCgpfSl9XG5mdW5jdGlvbiBQZShhLGIpe3ZhciBjPXcoKSxkPWEuWmEuZ2V0KGIpLGU9YS5nLnRhYmxlKGIpO2EuaS5vcmRlckJ5Q2hpbGQoXCJUXCIpLmVxdWFsVG8oZCkub25jZShcInZhbHVlXCIsZnVuY3Rpb24oYSl7dmFyIGQ9bmV3IFFlLGY9W107YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2YucHVzaChlLmtiKHtpZDpwYXJzZUludChhLmtleSgpLDEwKSx2YWx1ZTphLnZhbCgpLlB9KSl9KTtTZShkLGYpO3RoaXMuTS5zZXQoYixkKTtjLnJlc29sdmUoKX0uYmluZChhKSk7cmV0dXJuIGMuaGF9ZnVuY3Rpb24gV2UoYSl7dmFyIGI9e307YltcIkBkYlwiXT17dmVyc2lvbjphLmcudmVyc2lvbigpfTtiW1wiQHJldlwiXT17UjoxfTthLlNhPTE7YltcIkB0YWJsZVwiXT17fTthLmcub2EoKS5mb3JFYWNoKGZ1bmN0aW9uKGEsZCl7YT1hLmdldE5hbWUoKTtiW1wiQHRhYmxlXCJdW2FdPWQ7dGhpcy5NLnNldChhLG5ldyBRZSk7dGhpcy5aYS5zZXQoYSxkKX0sYSk7cmV0dXJuIGJ9XG5tLkZiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbmV3IE9lKHRoaXMsYSxjKX07bS5BYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLk0uZ2V0KGEpfHxudWxsO2lmKG51bGwhPT1iKXJldHVybiBiO3Rocm93IG5ldyBEKDEwMSxhKTt9O20uY2xvc2U9YWEoKTttLnN1YnNjcmliZT1iYShcIkpkXCIpO20uR2M9ZnVuY3Rpb24oYSl7bnVsbCE9dGhpcy5KZCYmdGhpcy5KZChhKX07ZnVuY3Rpb24gTihhLGIsYyxkKXt0aGlzLmk9Yjt0aGlzLmphPWM7dGhpcy5VYT1hO3RoaXMuVWM9ZH1xKFwibGYuYmFja3N0b3JlLkluZGV4ZWREQlJhd0JhY2tTdG9yZVwiLE4pO04ucHJvdG90eXBlLmNkPWcoXCJpXCIpO04ucHJvdG90eXBlLmdldFJhd0RCSW5zdGFuY2U9Ti5wcm90b3R5cGUuY2Q7Ti5wcm90b3R5cGUuZGQ9ZyhcImphXCIpO04ucHJvdG90eXBlLmdldFJhd1RyYW5zYWN0aW9uPU4ucHJvdG90eXBlLmRkO04ucHJvdG90eXBlLnRjPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe3RyeXt0aGlzLmkuZGVsZXRlT2JqZWN0U3RvcmUoYSl9Y2F0Y2goZCl7YyhkKTtyZXR1cm59YigpfSx0aGlzKX07Ti5wcm90b3R5cGUuZHJvcFRhYmxlPU4ucHJvdG90eXBlLnRjO1xuZnVuY3Rpb24gJGUoYSxiLGMsZCl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsZil7dmFyIGU7dHJ5e3ZhciBsPXRoaXMuamEub2JqZWN0U3RvcmUoYik7ZT1sLm9wZW5DdXJzb3IoKX1jYXRjaChwKXtmKHApO3JldHVybn1lLm9uc3VjY2Vzcz1mdW5jdGlvbigpe3ZhciBiPWUucmVzdWx0O2I/KGMoYiksYi5jb250aW51ZSgpKTooZChsKSxhKCkpfTtlLm9uZXJyb3I9Zn0sYSl9ZnVuY3Rpb24gYWYoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcj9sYyhhKTphIGluc3RhbmNlb2YgRGF0ZT9hLmdldFRpbWUoKTphfVxuZnVuY3Rpb24gYmYoYSxiLGMpe2Z1bmN0aW9uIGQoYSl7dmFyIGI9TWMoYS52YWx1ZSksZD1iLm0sZTtmb3IoZSBpbiBkKXt2YXIgZj1qYyhkW2VdKTtjKGYpO2RbZV09Zi5KYSgpfWEudXBkYXRlKGIuSmEoKSl9ZnVuY3Rpb24gZShhKXt2YXIgYj1qYyhhLnZhbHVlKTtjKGIpO2EudXBkYXRlKGIuSmEoKSl9cmV0dXJuICRlKGEsYixhLlVjP2Q6ZSxhYSgpKX1OLnByb3RvdHlwZS5xYz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YWYoYyk7cmV0dXJuIGJmKHRoaXMsYSxmdW5jdGlvbihhKXthLm1bYl09ZH0pfTtOLnByb3RvdHlwZS5hZGRUYWJsZUNvbHVtbj1OLnByb3RvdHlwZS5xYztOLnByb3RvdHlwZS51Yz1mdW5jdGlvbihhLGIpe3JldHVybiBiZih0aGlzLGEsZnVuY3Rpb24oYSl7ZGVsZXRlIGEubVtiXX0pfTtOLnByb3RvdHlwZS5kcm9wVGFibGVDb2x1bW49Ti5wcm90b3R5cGUudWM7XG5OLnByb3RvdHlwZS5MYz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGJmKHRoaXMsYSxmdW5jdGlvbihhKXthLm1bY109YS5tW2JdO2RlbGV0ZSBhLm1bYl19KX07Ti5wcm90b3R5cGUucmVuYW1lVGFibGVDb2x1bW49Ti5wcm90b3R5cGUuTGM7ZnVuY3Rpb24gY2YoYSxiKXt2YXIgYz1bXTtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxlKXt2YXIgZDt0cnl7ZD10aGlzLmphLm9iamVjdFN0b3JlKGIpLm9wZW5DdXJzb3IoKX1jYXRjaChoKXtlKGgpO3JldHVybn1kLm9uc3VjY2Vzcz1mdW5jdGlvbigpe3ZhciBiPWQucmVzdWx0O2lmKGIpe2lmKHRoaXMuVWMpe3ZhciBlPU1jKGIudmFsdWUpLm0sZjtmb3IoZiBpbiBlKWMucHVzaChlW2ZdKX1lbHNlIGMucHVzaChiLnZhbHVlKTtiLmNvbnRpbnVlKCl9ZWxzZSBhKGMpfS5iaW5kKHRoaXMpO2Qub25lcnJvcj1lfSxhKX1OLnByb3RvdHlwZS54Yj1mdW5jdGlvbihhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpYltjXT1hZihhW2NdKTtyZXR1cm4ga2MoYil9O1xuTi5wcm90b3R5cGUuY3JlYXRlUm93PU4ucHJvdG90eXBlLnhiO04ucHJvdG90eXBlLkNjPWcoXCJVYVwiKTtOLnByb3RvdHlwZS5nZXRWZXJzaW9uPU4ucHJvdG90eXBlLkNjO04ucHJvdG90eXBlLmR1bXA9ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5pLm9iamVjdFN0b3JlTmFtZXMsYj1bXSxjPTA7YzxhLmxlbmd0aDsrK2Mpe3ZhciBkPWEuaXRlbShjKTtiLnB1c2godGhpcy5lYyhkKSl9cmV0dXJuIGViKGIpLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM9e307Yi5mb3JFYWNoKGZ1bmN0aW9uKGIsZCl7Y1thLml0ZW0oZCldPWJ9KTtyZXR1cm4gY30pfTtOLnByb3RvdHlwZS5kdW1wPU4ucHJvdG90eXBlLmR1bXA7Ti5wcm90b3R5cGUuZWM9ZnVuY3Rpb24oYSl7cmV0dXJuIGNmKHRoaXMsYSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWV9KX0pfTtmdW5jdGlvbiBkZihhLGIpe3RoaXMuWj1hO3RoaXMuR2I9Yn1kZi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiBudWxsIT10aGlzLlouZ2V0QWxsP2VmKHRoaXMpOmZmKHRoaXMpO2E9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsZCl7dmFyIGM7dHJ5e2M9dGhpcy5aLmdldChhKX1jYXRjaChmKXtkKGYpO3JldHVybn1jLm9uZXJyb3I9ZDtjLm9uc3VjY2Vzcz1mdW5jdGlvbihhKXtiKHRoaXMuR2IoYS50YXJnZXQucmVzdWx0KSl9LmJpbmQodGhpcyl9LHRoaXMpfSx0aGlzKTtyZXR1cm4gZWIoYSl9O1xuZnVuY3Rpb24gZmYoYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsYyl7dmFyIGI9W10sZTt0cnl7ZT10aGlzLloub3BlbkN1cnNvcigpfWNhdGNoKGYpe2MoZik7cmV0dXJufWUub25lcnJvcj1jO2Uub25zdWNjZXNzPWZ1bmN0aW9uKCl7dmFyIGM9ZS5yZXN1bHQ7Yz8oYi5wdXNoKHRoaXMuR2IoYy52YWx1ZSkpLGMuY29udGludWUoKSk6YShiKX0uYmluZCh0aGlzKX0sYSl9ZnVuY3Rpb24gZWYoYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsYyl7dmFyIGI7dHJ5e2I9dGhpcy5aLmdldEFsbCgpfWNhdGNoKGUpe2MoZSk7cmV0dXJufWIub25lcnJvcj1jO2Iub25zdWNjZXNzPWZ1bmN0aW9uKCl7dmFyIGM9Yi5yZXN1bHQubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLkdiKGEpfSx0aGlzKTthKGMpfS5iaW5kKHRoaXMpfSxhKX1cbmRmLnByb3RvdHlwZS5UYj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXt2YXIgZDt0cnl7ZD1hKCl9Y2F0Y2goZSl7YyhlKTtyZXR1cm59ZC5vbnN1Y2Nlc3M9YjtkLm9uZXJyb3I9Y30sdGhpcyl9O2RmLnByb3RvdHlwZS5wdXQ9ZnVuY3Rpb24oYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIHYoKTthPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlRiKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWi5wdXQoYS5KYSgpKX0uYmluZCh0aGlzKSl9LHRoaXMpO3JldHVybiBlYihhKX07XG5kZi5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuWi5jb3VudCgpO2Qub25zdWNjZXNzPWZ1bmN0aW9uKGQpe2lmKDA9PWEubGVuZ3RofHxkLnRhcmdldC5yZXN1bHQ9PWEubGVuZ3RoKXJldHVybiB0aGlzLlRiKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWi5jbGVhcigpfS5iaW5kKHRoaXMpKS50aGVuKGIsYyk7ZD1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5UYihmdW5jdGlvbigpe3JldHVybiB0aGlzLlouZGVsZXRlKGEpfS5iaW5kKHRoaXMpKX0sdGhpcyk7ZWIoZCkudGhlbihiLGMpfS5iaW5kKHRoaXMpO2Qub25lcnJvcj1jfSx0aGlzKX07ZnVuY3Rpb24gZ2YoYSxiLGMsZCxlKXtuYy5jYWxsKHRoaXMsYyxlKTt0aGlzLmM9YTt0aGlzLmphPWI7dGhpcy5VYz1kO3RoaXMuamEub25jb21wbGV0ZT10aGlzLlMucmVzb2x2ZS5iaW5kKHRoaXMuUyk7dGhpcy5qYS5vbmFib3J0PXRoaXMuUy5yZWplY3QuYmluZCh0aGlzLlMpfXIoZ2YsbmMpO2dmLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5VYz8oYz1udWxsIT1jP2M6MCxhPXRoaXMuamEub2JqZWN0U3RvcmUoYSksbmV3IE5jKGEsYiwwPT1jP3FhKFBjLHRoaXMuYyk6UWMpKTpuZXcgZGYodGhpcy5qYS5vYmplY3RTdG9yZShhKSxiKX07Z2YucHJvdG90eXBlLnNjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuUy5oYX07ZnVuY3Rpb24gaGYoYSxiKXt0aGlzLmM9YTt0aGlzLmc9Yjt0aGlzLkdkPWIua2UuU2Z8fCExfW09aGYucHJvdG90eXBlO1xubS5FYT1mdW5jdGlvbihhKXt2YXIgYj13aW5kb3cuaW5kZXhlZERCfHx3aW5kb3cubW96SW5kZXhlZERCfHx3aW5kb3cud2Via2l0SW5kZXhlZERCfHx3aW5kb3cubXNJbmRleGVkREI7aWYobnVsbD09Yil0aHJvdyBuZXcgRCgzNTIpO3ZhciBjPWF8fGZ1bmN0aW9uKCl7cmV0dXJuIHYoKX07cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsZSl7dmFyIGQ7dHJ5e2Q9Yi5vcGVuKHRoaXMuZy5uYW1lKCksdGhpcy5nLnZlcnNpb24oKSl9Y2F0Y2goaCl7ZShoKTtyZXR1cm59ZC5vbmVycm9yPWZ1bmN0aW9uKGEpe2E9YS50YXJnZXQuZXJyb3I7ZShuZXcgRCgzNjEsYS5uYW1lLGEubWVzc2FnZSkpfTtkLm9udXBncmFkZW5lZWRlZD1mdW5jdGlvbihhKXtqZih0aGlzLGMsYSkudGhlbihhYSgpLGUpfS5iaW5kKHRoaXMpO2Qub25zdWNjZXNzPWZ1bmN0aW9uKGIpe3RoaXMuaT1iLnRhcmdldC5yZXN1bHQ7dGhpcy5xZSgpLnRoZW4oZnVuY3Rpb24oYil7aWM9TWF0aC5tYXgoaWMsYisxKTthKHRoaXMuaSl9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpfSxcbnRoaXMpfTtmdW5jdGlvbiBqZihhLGIsYyl7dmFyIGQ9Yy50YXJnZXQucmVzdWx0O2M9bmV3IE4oYy5vbGRWZXJzaW9uLGQsYy50YXJnZXQudHJhbnNhY3Rpb24sYS5HZCk7a2YoZCk7YS5nLm9hKCkuZm9yRWFjaChxYShhLkxmLGQpLGEpO3JldHVybiBiKGMpfWZ1bmN0aW9uIGtmKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLm9iamVjdFN0b3JlTmFtZXMubGVuZ3RoOysrYyl7dmFyIGQ9YS5vYmplY3RTdG9yZU5hbWVzLml0ZW0oYyk7LTEhPWQuaW5kZXhPZihcIi5cIikmJmIucHVzaChkKX1iLmZvckVhY2goZnVuY3Rpb24oYil7dHJ5e2EuZGVsZXRlT2JqZWN0U3RvcmUoYil9Y2F0Y2goZil7fX0pfVxubS5MZj1mdW5jdGlvbihhLGIpe2Eub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhiLmdldE5hbWUoKSl8fGEuY3JlYXRlT2JqZWN0U3RvcmUoYi5nZXROYW1lKCkse2tleVBhdGg6XCJpZFwifSk7Yi5DYigpJiYoYi5EYSgpLmZvckVhY2goZnVuY3Rpb24oYil7bWYoYSxiLmooKSl9LHRoaXMpLG1mKGEsbmYoYikpKX07ZnVuY3Rpb24gbWYoYSxiKXthLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoYil8fGEuY3JlYXRlT2JqZWN0U3RvcmUoYix7a2V5UGF0aDpcImlkXCJ9KX1tLkZiPWZ1bmN0aW9uKGEsYixjKXtiPXRoaXMuaS50cmFuc2FjdGlvbihvZihiKSwwPT1hP1wicmVhZG9ubHlcIjpcInJlYWR3cml0ZVwiKTtyZXR1cm4gbmV3IGdmKHRoaXMuYyxiLGEsdGhpcy5HZCxjKX07XG5mdW5jdGlvbiBvZihhKXt2YXIgYj1CKCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuYWRkKGEuZ2V0TmFtZSgpKTthLkNiKCkmJihhLkRhKCkuZm9yRWFjaChmdW5jdGlvbihhKXtiLmFkZChhLmooKSl9KSxiLmFkZChuZihhKSkpfSk7cmV0dXJuIEMoYil9XG5tLnFlPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtpZigwPT1kLmxlbmd0aClyZXR1cm4gdigpO3ZhciBhPWQuc2hpZnQoKTtyZXR1cm4gYyhhKS50aGVuKGIpfWZ1bmN0aW9uIGMoYil7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGMsZCl7dmFyIGw7dHJ5e2w9KGF8fGUudHJhbnNhY3Rpb24oW2JdKSkub2JqZWN0U3RvcmUoYikub3BlbkN1cnNvcihudWxsLFwicHJldlwiKX1jYXRjaChjYSl7ZChjYSk7cmV0dXJufWwub25zdWNjZXNzPWZ1bmN0aW9uKGEpeyhhPWEudGFyZ2V0LnJlc3VsdCkmJihmPU1hdGgubWF4KGYsaChhKSkpO2MoZil9O2wub25lcnJvcj1mdW5jdGlvbigpe2MoZil9fSl9dmFyIGQ9dGhpcy5nLm9hKCkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldE5hbWUoKX0pLGU9dGhpcy5pLGY9MCxoPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLkdkPyhhPU1jKGEudmFsdWUpLE9iamVjdC5rZXlzKGEubSkucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIE1hdGgubWF4KGEsYil9LFxuMCkpOmEua2V5fS5iaW5kKHRoaXMpO3JldHVybiBuZXcgdShmdW5jdGlvbihhKXtiKCkudGhlbihmdW5jdGlvbigpe2EoZil9KX0pfTttLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5pLmNsb3NlKCl9O20uQWM9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRCg1MTEpO307bS5zdWJzY3JpYmU9YWEoKTttLkdjPWFhKCk7ZnVuY3Rpb24gcGYoYSxiLGMpe25jLmNhbGwodGhpcyxiLGMpO3RoaXMuWj1hOzA9PWImJnRoaXMuUy5yZXNvbHZlKCl9cihwZixuYyk7cGYucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuWi5BYyhhKX07cGYucHJvdG90eXBlLnNjPWZ1bmN0aW9uKCl7dGhpcy5TLnJlc29sdmUoKTtyZXR1cm4gdGhpcy5TLmhhfTtmdW5jdGlvbiBxZihhKXt0aGlzLmc9YTt0aGlzLk09eSgpfW09cWYucHJvdG90eXBlO20uRWE9ZnVuY3Rpb24oKXt0aGlzLmcub2EoKS5mb3JFYWNoKHRoaXMuZ2csdGhpcyk7cmV0dXJuIHYoKX07bS5BYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLk0uZ2V0KGEpfHxudWxsO2lmKG51bGw9PT1iKXRocm93IG5ldyBEKDEwMSxhKTtyZXR1cm4gYn07bS5GYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG5ldyBwZih0aGlzLGEsYyl9O2Z1bmN0aW9uIHJmKGEsYil7aWYoIWEuTS5oYXMoYikpe3ZhciBjPW5ldyBRZTthLk0uc2V0KGIsYyl9fW0uZ2c9ZnVuY3Rpb24oYSl7cmYodGhpcyxhLmdldE5hbWUoKSk7YS5DYigpJiYoYS5EYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7cmYodGhpcyxhLmooKSl9LHRoaXMpLHJmKHRoaXMsbmYoYSkpKX07bS5jbG9zZT1hYSgpO20uc3Vic2NyaWJlPWFhKCk7bS5HYz1hYSgpO2Z1bmN0aW9uIHNmKGEpe3FmLmNhbGwodGhpcyxhKTt0aGlzLnBkPW51bGx9cihzZixxZik7c2YucHJvdG90eXBlLnN1YnNjcmliZT1mdW5jdGlvbihhKXtudWxsPT09dGhpcy5wZCYmKHRoaXMucGQ9YSl9O3NmLnByb3RvdHlwZS5HYz1mdW5jdGlvbihhKXtudWxsPT09dGhpcy5wZHx8dGhpcy5wZChhKX07ZnVuY3Rpb24gdGYoYSxiLGMpe3RoaXMuamE9YTt0aGlzLkE9J1wiJytiKydcIic7dGhpcy5HYj1jfXRmLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5HYjtyZXR1cm4gdWYodGhpcy5qYSxcIlNFTEVDVCBpZCwgdmFsdWUgRlJPTSBcIit0aGlzLkErXCIgXCIrKDA9PWEubGVuZ3RoP1wiXCI6XCJXSEVSRSBpZCBJTiAoXCIrYS5qb2luKFwiLFwiKStcIilcIiksW10sZnVuY3Rpb24oYSl7Zm9yKHZhciBjPWEucm93cy5sZW5ndGgsZT1BcnJheShjKSxmPTA7ZjxjOysrZillW2ZdPWIoe2lkOmEucm93cy5pdGVtKGYpLmlkLHZhbHVlOkpTT04ucGFyc2UoYS5yb3dzLml0ZW0oZikudmFsdWUpfSk7cmV0dXJuIGV9KX07XG50Zi5wcm90b3R5cGUucHV0PWZ1bmN0aW9uKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiB2KCk7dmFyIGI9XCJJTlNFUlQgT1IgUkVQTEFDRSBJTlRPIFwiK3RoaXMuQStcIihpZCwgdmFsdWUpIFZBTFVFUyAoPywgPylcIjthLmZvckVhY2goZnVuY3Rpb24oYSl7dWYodGhpcy5qYSxiLFthLmlkKCksSlNPTi5zdHJpbmdpZnkoYS5tKV0pfSx0aGlzKTtyZXR1cm4gdigpfTt0Zi5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEpe3VmKHRoaXMuamEsXCJERUxFVEUgRlJPTSBcIit0aGlzLkErXCIgXCIrKDA9PWEubGVuZ3RoP1wiXCI6XCJXSEVSRSBpZCBJTiAoXCIrYS5qb2luKFwiLFwiKStcIilcIiksW10pO3JldHVybiB2KCl9O2Z1bmN0aW9uIHZmKGEsYixjKXtuYy5jYWxsKHRoaXMsYixjKTt0aGlzLmk9YTt0aGlzLk09eSgpO3RoaXMuTmQ9W119cih2ZixuYyk7ZnVuY3Rpb24gd2YoYSl7cmV0dXJuIGEucmVwbGFjZShcIi5cIixcIl9fZF9fXCIpLnJlcGxhY2UoXCIjXCIsXCJfX3NfX1wiKX12Zi5wcm90b3R5cGUuST1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuTS5nZXQoYSl8fG51bGw7bnVsbD09PWMmJihjPW5ldyB0Zih0aGlzLHdmKGEpLGIpLHRoaXMuTS5zZXQoYSxjKSk7cmV0dXJuIGN9O2Z1bmN0aW9uIHVmKGEsYixjLGQpe3ZhciBlPXcoKTthLk5kLnB1c2goe05nOmIsRGc6Yyx0cmFuc2Zvcm06ZCxTOmV9KTtyZXR1cm4gZS5oYX1cbnZmLnByb3RvdHlwZS5zYz1mdW5jdGlvbigpe3ZhciBhPW51bGwsYj10aGlzLlMucmVqZWN0LmJpbmQodGhpcy5TKSxjPWZ1bmN0aW9uKGEsYil7dGhpcy5TLnJlamVjdChiKX0uYmluZCh0aGlzKSxkPVtdLGU9ZnVuY3Rpb24oYixoKXtpZihudWxsIT09YSl7dmFyIGY9aDtudWxsIT1hLnRyYW5zZm9ybSYmbnVsbCE9aCYmKGY9YS50cmFuc2Zvcm0oaCkpO2QucHVzaChmKTthLlMucmVzb2x2ZShmKX0wPHRoaXMuTmQubGVuZ3RoPyhhPWg9dGhpcy5OZC5zaGlmdCgpLGIuZXhlY3V0ZVNxbChoLk5nLGguRGcsZSxjKSk6dGhpcy5TLnJlc29sdmUoZCl9LmJpbmQodGhpcyk7MD09dGhpcy55ZD90aGlzLmkucmVhZFRyYW5zYWN0aW9uKGUsYik6dGhpcy5pLnRyYW5zYWN0aW9uKGUsYik7cmV0dXJuIHRoaXMuUy5oYX07ZnVuY3Rpb24gTyhhLGIsYyl7dGhpcy5pPWM7dGhpcy5jPWE7dGhpcy5VYT1ifXEoXCJsZi5iYWNrc3RvcmUuV2ViU3FsUmF3QmFja1N0b3JlXCIsTyk7Ty5wcm90b3R5cGUuY2Q9ZyhcImlcIik7Ty5wcm90b3R5cGUuZ2V0UmF3REJJbnN0YW5jZT1PLnByb3RvdHlwZS5jZDtPLnByb3RvdHlwZS5kZD1mdW5jdGlvbigpe3Rocm93IG5ldyBEKDM1Nik7fTtPLnByb3RvdHlwZS5nZXRSYXdUcmFuc2FjdGlvbj1PLnByb3RvdHlwZS5kZDtmdW5jdGlvbiB4ZihhKXtyZXR1cm4gbmV3IHZmKGEuaSwxLG5ldyB1ZChhLmMsQigpKSl9Ty5wcm90b3R5cGUudGM9ZnVuY3Rpb24oYSl7dmFyIGI9eGYodGhpcyk7dWYoYixcIkRST1AgVEFCTEUgXCIrYSxbXSk7cmV0dXJuIGIua2EoKX07Ty5wcm90b3R5cGUuZHJvcFRhYmxlPU8ucHJvdG90eXBlLnRjO1xuTy5wcm90b3R5cGUuZWM9ZnVuY3Rpb24oYSl7dmFyIGI9eGYodGhpcyk7dWYoYixcIlNFTEVDVCBpZCwgdmFsdWUgRlJPTSBcIithLFtdKTtyZXR1cm4gYi5rYSgpLnRoZW4oZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWFbMF0ucm93cy5sZW5ndGgsYz1BcnJheShiKSxmPTA7ZjxiOysrZiljW2ZdPXtpZDphWzBdLnJvd3MuaXRlbShmKS5pZCx2YWx1ZTpKU09OLnBhcnNlKGFbMF0ucm93cy5pdGVtKGYpLnZhbHVlKX07cmV0dXJuIHYoYyl9KX07ZnVuY3Rpb24geWYoYSxiLGMpe3ZhciBkPXhmKGEpLGU9XCJVUERBVEUgXCIrYitcIiBTRVQgdmFsdWU9PyBXSEVSRSBpZD0/XCI7cmV0dXJuIGEuZWMoYikudGhlbihmdW5jdGlvbihhKXthLmZvckVhY2goZnVuY3Rpb24oYSl7YT1jKGEpO3VmKGQsZSxbSlNPTi5zdHJpbmdpZnkoYS52YWx1ZSksYS5pZF0pfSk7cmV0dXJuIGQua2EoKX0pfVxuTy5wcm90b3R5cGUucWM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWFmKGMpO3JldHVybiB5Zih0aGlzLGEsZnVuY3Rpb24oYSl7YS52YWx1ZVtiXT1kO3JldHVybiBhfSl9O08ucHJvdG90eXBlLmFkZFRhYmxlQ29sdW1uPU8ucHJvdG90eXBlLnFjO08ucHJvdG90eXBlLnVjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHlmKHRoaXMsYSxmdW5jdGlvbihhKXtkZWxldGUgYS52YWx1ZVtiXTtyZXR1cm4gYX0pfTtPLnByb3RvdHlwZS5kcm9wVGFibGVDb2x1bW49Ty5wcm90b3R5cGUudWM7Ty5wcm90b3R5cGUuTGM9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5Zih0aGlzLGEsZnVuY3Rpb24oYSl7YS52YWx1ZVtjXT1hLnZhbHVlW2JdO2RlbGV0ZSBhLnZhbHVlW2JdO3JldHVybiBhfSl9O08ucHJvdG90eXBlLnJlbmFtZVRhYmxlQ29sdW1uPU8ucHJvdG90eXBlLkxjO08ucHJvdG90eXBlLnhiPWZ1bmN0aW9uKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSliW2NdPWFmKGFbY10pO3JldHVybiBrYyhiKX07XG5PLnByb3RvdHlwZS5jcmVhdGVSb3c9Ty5wcm90b3R5cGUueGI7Ty5wcm90b3R5cGUuQ2M9ZyhcIlVhXCIpO08ucHJvdG90eXBlLmdldFZlcnNpb249Ty5wcm90b3R5cGUuQ2M7ZnVuY3Rpb24gemYoYSl7dWYoYSwnU0VMRUNUIHRibF9uYW1lIEZST00gc3FsaXRlX21hc3RlciBXSEVSRSB0eXBlPVwidGFibGVcIicsW10sZnVuY3Rpb24oYSl7Zm9yKHZhciBiPUFycmF5KGEucm93cy5sZW5ndGgpLGQ9MDtkPGIubGVuZ3RoOysrZCliW2RdPWEucm93cy5pdGVtKGQpLnRibF9uYW1lO3JldHVybiBifSl9XG5PLnByb3RvdHlwZS5kdW1wPWZ1bmN0aW9uKCl7dmFyIGE9dygpLGI9eGYodGhpcyk7emYoYik7dmFyIGM9e307Yi5rYSgpLnRoZW4oZnVuY3Rpb24oYil7Yj1iWzBdLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm5cIl9fbGZfdmVyXCIhPWEmJlwiX19XZWJLaXREYXRhYmFzZUluZm9UYWJsZV9fXCIhPWF9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWMoYSkudGhlbihmdW5jdGlvbihiKXtjW2FdPWJ9KX0sdGhpcyk7ZWIoYikudGhlbihmdW5jdGlvbigpe2EucmVzb2x2ZShjKX0pfS5iaW5kKHRoaXMpKTtyZXR1cm4gYS5oYX07Ty5wcm90b3R5cGUuZHVtcD1PLnByb3RvdHlwZS5kdW1wO2Z1bmN0aW9uIEFmKGEsYixjKXt0aGlzLmM9YTt0aGlzLmc9Yjt0aGlzLk1nPWN8fDF9bT1BZi5wcm90b3R5cGU7bS5FYT1mdW5jdGlvbihhKXtpZihudWxsPT13aW5kb3cub3BlbkRhdGFiYXNlKXRocm93IG5ldyBEKDM1Myk7dmFyIGI9YXx8ZnVuY3Rpb24oKXtyZXR1cm4gdigpfTtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxkKXt2YXIgYz13aW5kb3cub3BlbkRhdGFiYXNlKHRoaXMuZy5uYW1lKCksXCJcIix0aGlzLmcubmFtZSgpLHRoaXMuTWcpO2lmKG51bGwhPWMpdGhpcy5pPWMsQmYodGhpcyxiKS50aGVuKGZ1bmN0aW9uKCl7dGhpcy5xZSgpLnRoZW4oYSxkKX0uYmluZCh0aGlzKSxmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgRCl0aHJvdyBhO3Rocm93IG5ldyBEKDM1NCxhLm1lc3NhZ2UpO30pO2Vsc2UgdGhyb3cgbmV3IEQoMzU0KTt9LHRoaXMpfTtcbmZ1bmN0aW9uIEJmKGEsYil7dmFyIGM9dygpLGQ9bmV3IHZmKGEuaSwxLG5ldyB1ZChhLmMsQigpKSk7dWYoZCxcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIF9fbGZfdmVyKGlkIElOVEVHRVIgUFJJTUFSWSBLRVksIHYgSU5URUdFUilcIixbXSk7dWYoZCxcIlNFTEVDVCB2IEZST00gX19sZl92ZXIgV0hFUkUgaWQgPSAwXCIsW10pO2Qua2EoKS50aGVuKGZ1bmN0aW9uKGEpe3ZhciBkPTA7YVsxXS5yb3dzLmxlbmd0aCYmKGQ9YVsxXS5yb3dzLml0ZW0oMCkudik7ZDx0aGlzLmcudmVyc2lvbigpP3RoaXMuaGUoYixkKS50aGVuKGMucmVzb2x2ZS5iaW5kKGMpKTpkPnRoaXMuZy52ZXJzaW9uKCk/Yy5yZWplY3QobmV3IEQoMTA4KSk6Yy5yZXNvbHZlKCl9LmJpbmQoYSksYy5yZWplY3QuYmluZChjKSk7cmV0dXJuIGMuaGF9bS5GYj1mdW5jdGlvbihhLGIsYyl7aWYobnVsbCE9dGhpcy5pKXJldHVybiBuZXcgdmYodGhpcy5pLGEsYyk7dGhyb3cgbmV3IEQoMik7fTttLmNsb3NlPWFhKCk7XG5tLkFjPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEQoNTEyKTt9O20uc3Vic2NyaWJlPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEQoMzU1KTt9O20uR2M9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRCgzNTUpO307bS5oZT1mdW5jdGlvbihhLGIpe3JldHVybiBDZih0aGlzKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGEobmV3IE8odGhpcy5jLGIsdGhpcy5pKSl9LmJpbmQodGhpcykpfTtcbmZ1bmN0aW9uIENmKGEpe3ZhciBiPWEuZy5vYSgpLGM9bmV3IHZmKGEuaSwxLG5ldyB1ZChhLmMsQigpKSksZD1uZXcgdmYoYS5pLDEsbmV3IHVkKGEuYyxCKCkpKTt1ZihjLFwiSU5TRVJUIE9SIFJFUExBQ0UgSU5UTyBfX2xmX3ZlciBWQUxVRVMgKDAsID8pXCIsW2EuZy52ZXJzaW9uKCldKTt6ZihjKTtyZXR1cm4gYy5rYSgpLnRoZW4oZnVuY3Rpb24oYSl7dmFyIGM9YVsxXTtjLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4tMSE9YS5pbmRleE9mKFwiX19kX19cIil9KS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3VmKGQsXCJEUk9QIFRBQkxFIFwiKygnXCInK2ErJ1wiJyksW10pfSk7dmFyIGU9W10sbD1bXSxwPVtdO2IubWFwKGZ1bmN0aW9uKGEpey0xPT1jLmluZGV4T2YoYS5nZXROYW1lKCkpJiZlLnB1c2goYS5nZXROYW1lKCkpO2EuQ2ImJihhLkRhKCkuZm9yRWFjaChmdW5jdGlvbihhKXthPXdmKGEuaigpKTtlLnB1c2goYSk7bC5wdXNoKGEpfSksYT13ZihuZihhKSksZS5wdXNoKGEpLHAucHVzaChhKSl9KTtcbmUuZm9yRWFjaChmdW5jdGlvbihhKXt1ZihkLFwiQ1JFQVRFIFRBQkxFIFwiKygnXCInK2ErJ1wiJykrXCIoaWQgSU5URUdFUiBQUklNQVJZIEtFWSwgdmFsdWUgVEVYVClcIixbXSl9KTtyZXR1cm4gZC5rYSgpfSl9bS5xZT1mdW5jdGlvbigpe3ZhciBhPTAsYj13KCksYz1mdW5jdGlvbihiKXt2YXIgYz1uZXcgdmYodGhpcy5pLDApO3VmKGMsXCJTRUxFQ1QgTUFYKGlkKSBGUk9NIFwiKygnXCInK2IrJ1wiJyksW10pO3JldHVybiBjLmthKCkudGhlbihmdW5jdGlvbihiKXtiPWJbMF0ucm93cy5pdGVtKDApW1wiTUFYKGlkKVwiXTthPU1hdGgubWF4KGIsYSl9KX0uYmluZCh0aGlzKSxkPXRoaXMuZy5vYSgpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYyhhLmdldE5hbWUoKSl9KTtlYihkKS50aGVuKGZ1bmN0aW9uKCl7aWM9TWF0aC5tYXgoaWMsYSsxKTtiLnJlc29sdmUoKX0sZnVuY3Rpb24oYSl7Yi5yZWplY3QoYSl9KTtyZXR1cm4gYi5oYX07ZnVuY3Rpb24gRGYoYSl7dGhpcy5sPXkoKTt0aGlzLiRiPXkoKTthLm9hKCkuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLiRiLnNldChhLmdldE5hbWUoKSxCKCkpfSx0aGlzKX1tPURmLnByb3RvdHlwZTttLnNldD1mdW5jdGlvbihhLGIpe3RoaXMubC5zZXQoYi5pZCgpLGIpO3RoaXMuJGIuZ2V0KGEpLmFkZChiLmlkKCkpfTttLldiPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy4kYi5nZXQoYSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMubC5zZXQoYS5pZCgpLGEpO2MuYWRkKGEuaWQoKSl9LHRoaXMpfTttLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sLmdldChhKXx8bnVsbH07ZnVuY3Rpb24gRWYoYSxiKXtyZXR1cm4gYi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0KGEpfSxhKX1cbm0uVmE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9TWF0aC5taW4oYixjKSxmPU1hdGgubWF4KGIsYyk7YT10aGlzLiRiLmdldChhKTtpZihhLnNpemU8Zi1lKWEuZm9yRWFjaChmdW5jdGlvbihhKXthPj1lJiZhPD1mJiYoYT10aGlzLmwuZ2V0KGEpLGQucHVzaChhKSl9LHRoaXMpO2Vsc2UgZm9yKGI9ZTtiPD1mOysrYilhLmhhcyhiKSYmKGM9dGhpcy5sLmdldChiKSxkLnB1c2goYykpO3JldHVybiBkfTttLnJlbW92ZT1mdW5jdGlvbihhLGIpe3RoaXMubC5kZWxldGUoYik7dGhpcy4kYi5nZXQoYSkuZGVsZXRlKGIpfTttLnpjPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP3RoaXMuJGIuZ2V0KGEpLnNpemU6dGhpcy5sLnNpemV9O20uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmwuY2xlYXIoKTt0aGlzLiRiLmNsZWFyKCl9O2Z1bmN0aW9uIEZmKGEsYixjKXt2YXIgZD0wLGU9YS5sZW5ndGg7Zm9yKGM9Y3x8R2Y7ZDxlOyl7dmFyIGY9ZCtlPj4xOzA+YyhhW2ZdLGIpP2Q9ZisxOmU9Zn1yZXR1cm4gZD09ZSYmYVtkXT09Yj9kOn5kfWZ1bmN0aW9uIEdmKGEsYil7cmV0dXJuIGEtYn1mdW5jdGlvbiBIZihhLGIsYyl7Yz1GZihhLGIsYyk7cmV0dXJuIDA+Yz8oYS5zcGxpY2UoLShjKzEpLDAsYiksITApOiExfTtmdW5jdGlvbiBJZihhLGIsYyxkKXthPWI/YS5yZXZlcnNlKCk6YTtpZihudWxsPT1jJiZudWxsPT1kKXJldHVybiBhO2M9TWF0aC5taW4obihjKT9jOmEubGVuZ3RoLGEubGVuZ3RoKTtpZigwPT1jKXJldHVybltdO2Q9TWF0aC5taW4oZHx8MCxhLmxlbmd0aCk7cmV0dXJuIGEuc2xpY2UoZCxkK2MpfTtmdW5jdGlvbiBKZigpe3RoaXMuaWE9MDt0aGlzLkZjPW51bGx9SmYucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGIpe3RoaXMuaWErPWI7dGhpcy5GYz1udWxsPT09dGhpcy5GYz9hOmE+dGhpcy5GYz9hOnRoaXMuRmN9O0pmLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSxiKXt0aGlzLmlhLT1ifTtKZi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmlhPTB9O2Z1bmN0aW9uIEtmKGEsYil7YS5jbGVhcigpO2IuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLmlhKz1hLmlhfSxhKX07ZnVuY3Rpb24gTGYoYSxiLGMsZCl7dGhpcy5BPWE7dGhpcy4kPWI7dGhpcy55Zj1jO3RoaXMuemE9bmV3IEpmO2lmKGQpe2E9NTExO2EqPWEqYTtpZihkLmxlbmd0aD49YSl0aHJvdyBuZXcgRCg2LGEpO2Q9TWYodGhpcyxkKTt0aGlzLnVhPWQ9TmYoZCl9ZWxzZSB0aGlzLmNsZWFyKCl9dmFyIE9mPVtdO209TGYucHJvdG90eXBlO20uZ2V0TmFtZT1nKFwiQVwiKTttLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudWEudG9TdHJpbmcoKX07bS5hZGQ9ZnVuY3Rpb24oYSxiKXt0aGlzLnVhPXRoaXMudWEuQWIoYSxiKX07bS5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLnVhPXRoaXMudWEuQWIoYSxiLCEwKX07bS5yZW1vdmU9ZnVuY3Rpb24oYSxiKXt0aGlzLnVhPXRoaXMudWEucmVtb3ZlKGEsYil9O20uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnVhLmdldChhKX07XG5tLlpjPWZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIHRoaXMuWSgpLmlhO2lmKGEgaW5zdGFuY2VvZiBFKXtpZihBZChhKSlyZXR1cm4gdGhpcy5ZKCkuaWE7aWYoRWQoYSkpcmV0dXJuIHRoaXMuZ2V0KGEuZnJvbSkubGVuZ3RofXJldHVybiB0aGlzLlZhKFthXSkubGVuZ3RofTttLlk9ZyhcInphXCIpO20uVmQ9ZnVuY3Rpb24oYSxiLGMsZCl7Yz1BcnJheShhKTt0aGlzLnVhLmZpbGwoe29mZnNldDpiP3RoaXMuemEuaWEtYS1kOmQsY291bnQ6YSx0ZTowfSxjKTtyZXR1cm4gYj9jLnJldmVyc2UoKTpjfTtcbm0uVmE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9UGYodGhpcy51YSkuYVswXTtpZighbihlKXx8MD09YylyZXR1cm4gT2Y7Yj1ifHwhMTtjPW51bGwhPWM/TWF0aC5taW4oYyx0aGlzLnphLmlhKTp0aGlzLnphLmlhO2Q9ZHx8MDt2YXIgZj1NYXRoLm1pbihNYXRoLm1heCh0aGlzLnphLmlhLWQsMCksYyk7aWYoMD09ZilyZXR1cm4gT2Y7aWYoIW4oYSl8fDE9PWEubGVuZ3RoJiZhWzBdaW5zdGFuY2VvZiBFJiZBZChhWzBdKSlyZXR1cm4gdGhpcy5WZChmLGIsYyxkKTthPXRoaXMuJC51ZihhKTt2YXIgaD1BcnJheShiP3RoaXMuemEuaWE6ZiksbD17Y291bnQ6MCxYOmgubGVuZ3RoLHJldmVyc2U6YixMOmR9LHA9MTx0aGlzLmpiKCkuWmQoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXMuJC51ZChhKSxiPXRoaXMuJC5YZChhKT9lOmJbMF0sYj10aGlzLnVhLllmKGIpLGM9MDtudWxsIT1iJiZsLmNvdW50PGwuWDspe2lmKHApe2Zvcih2YXIgZD1iLGY9YSxMPWwsRGI9XG5oLFRjPWQucy5qYigpLG9lPS0xLE5hPTA7TmE8ZC5hLmxlbmd0aDsrK05hKWlmKFRjLkJiKGQuYVtOYV0sZikpe29lPU5hO2JyZWFrfWlmKC0xIT1vZSlmb3IoTmE9b2U7TmE8ZC5hLmxlbmd0aCYmTC5jb3VudDxMLlg7KytOYSlUYy5CYihkLmFbTmFdLGYpJiZRZihkLEwsRGIsTmEpfWVsc2UgYi5WYShhLGwsaCk7MCE9bC5MfHxiLmtkKGEpP2M9MDpjKys7Yj0yPT1jP251bGw6Yi5uZXh0KCl9fSx0aGlzKTtoLmxlbmd0aD5sLmNvdW50JiZoLnNwbGljZShsLmNvdW50LGgubGVuZ3RoLWwuY291bnQpO3JldHVybiBiP0lmKGgsYixjLGQpOmh9O20uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnVhPVJmKHRoaXMpO3RoaXMuemEuY2xlYXIoKX07bS5QYT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy51YS5QYShhKX07bS5taW49ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5IYih0aGlzLiQubWluLmJpbmQodGhpcy4kKSl9O20ubWF4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuSGIodGhpcy4kLm1heC5iaW5kKHRoaXMuJCkpfTtcbmZ1bmN0aW9uIFNmKGEsYixjKXtpZighYS4kLk9kKGIuYVtjXSkpaWYoMTxiLmFbY10ubGVuZ3RoKXtpZihudWxsPT09Yi5hW2NdWzBdKXJldHVybiBudWxsfWVsc2UgcmV0dXJuIG51bGw7cmV0dXJuW2IuYVtjXSxhLnlmP1tiLkJbY11dOmIuQltjXV19bS5IYj1mdW5jdGlvbihhKXt2YXIgYjthOntiPVBmKHRoaXMudWEpO3ZhciBjPTA7ZG8gaWYoYz49Yi5hLmxlbmd0aCliPWIueWEsYz0wO2Vsc2V7dmFyIGQ9U2YodGhpcyxiLGMpO2lmKG51bGwhPT1kKXtiPWQ7YnJlYWsgYX1jKyt9d2hpbGUobnVsbCE9PWIpO2I9bnVsbH1hOntjPVRmKHRoaXMudWEpO2Q9Yy5hLmxlbmd0aC0xO2RvIGlmKDA+ZCljPWMucWIsZD0wO2Vsc2V7dmFyIGU9U2YodGhpcyxjLGQpO2lmKG51bGwhPT1lKXtjPWU7YnJlYWsgYX1kLS19d2hpbGUobnVsbCE9PWMpO2M9bnVsbH1yZXR1cm4gbnVsbD09PWJ8fG51bGw9PT1jP251bGw6MT09YShiWzBdLGNbMF0pP2I6Y307bS5NYT1nKFwieWZcIik7bS5qYj1nKFwiJFwiKTtcbm0uUWE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbCE9YT8wPT10aGlzLiQuY29tcGFyZShhLGIpOiExfTttLkphPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdLGI9UGYodGhpcy51YSk7YjspYS5wdXNoKG5ldyBoYyhiLnNhLFtiLmEsYi5CXSkpLGI9Yi55YTtyZXR1cm4gYX07ZnVuY3Rpb24gVWYoYSxiLGMsZCl7YT1uZXcgTGYoYixhLGMpO2Q9VmYoZCxhKTthLnVhPWQ7cmV0dXJuIGF9ZnVuY3Rpb24gV2YoYSxiKXt0aGlzLnNhPWE7dGhpcy5zPWI7dGhpcy5tYj0wO3RoaXMueWE9dGhpcy5xYj10aGlzLkQ9bnVsbDt0aGlzLmE9W107dGhpcy5CPVtdO3RoaXMuaD1bXTt0aGlzLllmPTE9PWIuamIoKS5aZCgpP3RoaXMuUGU6dGhpcy5PZX1mdW5jdGlvbiBSZihhKXtyZXR1cm4gbmV3IFdmKGljKyssYSl9ZnVuY3Rpb24gUChhKXtyZXR1cm4gMD09YS5tYn1tPVdmLnByb3RvdHlwZTttLm5leHQ9ZyhcInlhXCIpO1xuZnVuY3Rpb24gWGYoYSl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gbnVsbCE9YT9hLnNhLnRvU3RyaW5nKCk6XCJfXCJ9dmFyIGM9YS5zYStcIltcIithLmEuam9pbihcInxcIikrXCJdXCIsZD1hLmgubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnNhfSkuam9pbihcInxcIiksZT1hLkIuam9pbihcIi9cIiksZj1iKGEucWIpK1wie1wiLGY9UChhKT9mK2U6ZitkLGY9ZitcIn1cIitiKGEuRCk7YS55YSYmKGE9WGYoYS55YSksYz1jK1wiICBcIithWzBdLGY9ZitcIiAgXCIrYVsxXSk7cmV0dXJuW2MsZl19bS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPVwiXCIsYj1YZih0aGlzKSxhPWErKGJbMF0rXCJcXG5cIitiWzFdK1wiXFxuXCIpO3RoaXMuaC5sZW5ndGgmJihhKz10aGlzLmhbMF0udG9TdHJpbmcoKSk7cmV0dXJuIGF9O2Z1bmN0aW9uIFBmKGEpe3JldHVybiBQKGEpP2E6UGYoYS5oWzBdKX1mdW5jdGlvbiBUZihhKXtyZXR1cm4gUChhKT9hOlRmKGEuaFthLmgubGVuZ3RoLTFdKX1cbmZ1bmN0aW9uIFlmKGEsYil7YiYmKGIucWI9YSk7YSYmKGEueWE9Yil9ZnVuY3Rpb24gTWYoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wLGU9YT1SZihhKTswPGM7KXt2YXIgZj03Njg8PWM/NTExOjI1Nzw9YyYmNTExPj1jP2M6MjU3LGg9Yi5zbGljZShkLGQrZik7YS5hPWgubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmtleX0pO2EuQj1oLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZX0pO2QrPWY7Yy09ZjswPGMmJihmPVJmKGEucyksWWYoYSxmKSxhPWYpfXJldHVybiBlfWZ1bmN0aW9uIFpmKGEpe3ZhciBiPWFbMF0sYz1SZihiLnMpO2MubWI9Yi5tYisxO2MuaD1hO2ZvcihiPTA7YjxhLmxlbmd0aDsrK2IpYVtiXS5EPWMsMDxiJiZjLmEucHVzaChhW2JdLmFbMF0pO3JldHVybiBjfVxuZnVuY3Rpb24gTmYoYSl7dmFyIGI9YSxjPVtdO2RvIGMucHVzaChiKSxiPWIueWE7d2hpbGUoYik7aWYoNTEyPj1jLmxlbmd0aCliPVpmKGMpO2Vsc2V7dmFyIGQ9Yy5sZW5ndGgsZT0wLGI9UmYoYS5zKTtmb3IoYi5tYj1hLm1iKzI7MDxkOyl7YT03Njg8PWQ/NTExOjI1Nzw9ZCYmNTExPj1kP2Q6MjU3O3ZhciBmPWMuc2xpY2UoZSxlK2EpLGg9WmYoZik7aC5EPWI7Yi5oLmxlbmd0aCYmKGIuYS5wdXNoKGZbMF0uYVswXSksWWYoYi5oW2IuaC5sZW5ndGgtMV0saCkpO2IuaC5wdXNoKGgpO2UrPWE7ZC09YX19cmV0dXJuIGJ9bS5nZXQ9ZnVuY3Rpb24oYSl7dmFyIGI9JGYodGhpcyxhKTtpZihQKHRoaXMpKXt2YXIgYz1PZjt0aGlzLnMuUWEodGhpcy5hW2JdLGEpJiYoYz1jLmNvbmNhdCh0aGlzLkJbYl0pKTtyZXR1cm4gY31iPXRoaXMucy5RYSh0aGlzLmFbYl0sYSk/YisxOmI7cmV0dXJuIHRoaXMuaFtiXS5nZXQoYSl9O1xubS5QYT1mdW5jdGlvbihhKXt2YXIgYj0kZih0aGlzLGEpO3JldHVybiB0aGlzLnMuUWEodGhpcy5hW2JdLGEpPyEwOlAodGhpcyk/ITE6dGhpcy5oW2JdLlBhKGEpfTttLnJlbW92ZT1mdW5jdGlvbihhLGIpe2FnKHRoaXMsYSwtMSxiKTtyZXR1cm4gbnVsbD09PXRoaXMuRD8oYT10aGlzLDE9PXRoaXMuaC5sZW5ndGgmJihhPXRoaXMuaFswXSxhLkQ9bnVsbCksYSk6dGhpc307ZnVuY3Rpb24gYmcoYSl7cmV0dXJuIFAoYSk/YS5hWzBdOmJnKGEuaFswXSl9ZnVuY3Rpb24gY2coYSl7YS5hPVtdO2Zvcih2YXIgYj0xO2I8YS5oLmxlbmd0aDsrK2IpYS5hLnB1c2goYmcoYS5oW2JdKSl9XG5mdW5jdGlvbiBhZyhhLGIsYyxkKXt2YXIgZT0kZihhLGIpLGY9UChhKTtpZighZil7dmFyIGg9YS5zLlFhKGEuYVtlXSxiKT9lKzE6ZTtpZihhZyhhLmhbaF0sYixoLGQpKWNnKGEpO2Vsc2UgcmV0dXJuITF9ZWxzZSBpZighYS5zLlFhKGEuYVtlXSxiKSlyZXR1cm4hMTtpZihhLmEubGVuZ3RoPmUmJmEucy5RYShhLmFbZV0sYikpe2lmKG4oZCkmJiFhLnMuTWEoKSYmZiYmKGg9YS5CW2VdLGQ9RmYoaCxkLHZvaWQgMCksMD5kP2Q9ITE6KGguc3BsaWNlKGQsMSksZD0hMCksZCYmYS5zLlkoKS5yZW1vdmUoYiwxKSxhLkJbZV0ubGVuZ3RoKSlyZXR1cm4hMTthLmEuc3BsaWNlKGUsMSk7ZiYmKGY9YS5zLk1hKCk/MTphLkJbZV0ubGVuZ3RoLGEuQi5zcGxpY2UoZSwxKSxhLnMuWSgpLnJlbW92ZShiLGYpKX1pZigyNTY+YS5hLmxlbmd0aCYmbnVsbCE9PWEuRCl7YTp7aWYoYS55YSYmMjU2PGEueWEuYS5sZW5ndGgpYj1hLnlhLGU9ZD0wLGY9YS5hLmxlbmd0aCsxO2Vsc2UgaWYoYS5xYiYmXG4yNTY8YS5xYi5hLmxlbmd0aCliPWEucWIsZD1hLnFiLmEubGVuZ3RoLTEsZT1QKGEpP2Q6ZCsxLGY9MDtlbHNle2I9ITE7YnJlYWsgYX1hLmEuc3BsaWNlKGYsMCxiLmFbZF0pO2IuYS5zcGxpY2UoZCwxKTtkPVAoYSk/YS5COmEuaDtQKGEpP2g9Yi5COihoPWIuaCxoW2VdLkQ9YSk7ZC5zcGxpY2UoZiwwLGhbZV0pO2guc3BsaWNlKGUsMSk7UChiKXx8KGNnKGIpLGNnKGEpKTtiPSEwfWJ8fGVnKGEsYyl9cmV0dXJuITB9XG5mdW5jdGlvbiBlZyhhLGIpe3ZhciBjLGQsZTthLnlhJiY1MTE+YS55YS5hLmxlbmd0aD8oYz1hLnlhLGU9ZD0wKTphLnFiJiYoYz1hLnFiLGQ9Yy5hLmxlbmd0aCxlPVAoYyk/Yy5CLmxlbmd0aDpjLmgubGVuZ3RoKTtkPVtkLDBdLmNvbmNhdChhLmEpO0FycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYy5hLGQpO2Q9bnVsbDtQKGEpP2Q9YS5COihkPWEuaCxkLmZvckVhY2goZnVuY3Rpb24oYSl7YS5EPWN9KSk7ZD1bZSwwXS5jb25jYXQoZCk7QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShQKGMpP2MuQjpjLmgsZCk7WWYoYS5xYixhLnlhKTtQKGMpfHxjZyhjKTstMSE9YiYmKGEuRC5hLnNwbGljZShiLDEpLGEuRC5oLnNwbGljZShiLDEpKX1cbm0uQWI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPSRmKHRoaXMsYSk7aWYoUCh0aGlzKSl7aWYodGhpcy5zLlFhKHRoaXMuYVtkXSxhKSl7aWYoYyl0aGlzLnMuWSgpLnJlbW92ZShhLHRoaXMucy5NYSgpPzE6dGhpcy5CW2RdLmxlbmd0aCksdGhpcy5CW2RdPXRoaXMucy5NYSgpP2I6W2JdO2Vsc2V7aWYodGhpcy5zLk1hKCkpdGhyb3cgbmV3IEQoMjAxLHRoaXMucy5nZXROYW1lKCksSlNPTi5zdHJpbmdpZnkoYSkpO2lmKCFIZih0aGlzLkJbZF0sYikpdGhyb3cgbmV3IEQoMTA5KTt9dGhpcy5zLlkoKS5hZGQoYSwxKTtyZXR1cm4gdGhpc310aGlzLmEuc3BsaWNlKGQsMCxhKTt0aGlzLkIuc3BsaWNlKGQsMCx0aGlzLnMuTWEoKT9iOltiXSk7dGhpcy5zLlkoKS5hZGQoYSwxKTs1MTI9PXRoaXMuYS5sZW5ndGg/KGQ9UmYodGhpcy5zKSxhPVJmKHRoaXMucyksYS5tYj0xLGEuYT1bdGhpcy5hWzI1Nl1dLGEuaD1bdGhpcyxkXSxhLkQ9dGhpcy5ELHRoaXMuRD1hLGQuYT10aGlzLmEuc3BsaWNlKDI1NiksXG5kLkI9dGhpcy5CLnNwbGljZSgyNTYpLGQuRD1hLFlmKGQsdGhpcy55YSksWWYodGhpcyxkKSxkPWEpOmQ9dGhpcztyZXR1cm4gZH1kPXRoaXMucy5RYSh0aGlzLmFbZF0sYSk/ZCsxOmQ7YT10aGlzLmhbZF0uQWIoYSxiLGMpO1AoYSl8fDEhPWEuYS5sZW5ndGh8fCh0aGlzLmEuc3BsaWNlKGQsMCxhLmFbMF0pLGEuaFsxXS5EPXRoaXMsYS5oWzBdLkQ9dGhpcyx0aGlzLmguc3BsaWNlKGQsMSxhLmhbMV0pLHRoaXMuaC5zcGxpY2UoZCwwLGEuaFswXSkpO3JldHVybiA1MTI9PXRoaXMuYS5sZW5ndGg/ZmcodGhpcyk6dGhpc307XG5mdW5jdGlvbiBmZyhhKXt2YXIgYj1SZihhLnMpLGM9UmYoYS5zKTtiLkQ9YS5EO2IubWI9YS5tYisxO2IuYT1bYS5hWzI1Nl1dO2IuaD1bYSxjXTthLmEuc3BsaWNlKDI1NiwxKTtjLkQ9YjtjLm1iPWEubWI7Yy5hPWEuYS5zcGxpY2UoMjU2KTtjLmg9YS5oLnNwbGljZSgyNTcpO2MuaC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuRD1jfSk7YS5EPWI7WWYoYyxhLnlhKTtZZihhLGMpO3JldHVybiBifWZ1bmN0aW9uICRmKGEsYil7Zm9yKHZhciBjPTAsZD1hLmEubGVuZ3RoLGU9YS5zLmpiKCk7YzxkOyl7dmFyIGY9YytkPj4xOy0xPT1lLmNvbXBhcmUoYS5hW2ZdLGIpP2M9ZisxOmQ9Zn1yZXR1cm4gY31tLlBlPWZ1bmN0aW9uKGEpe2lmKCFQKHRoaXMpKXt2YXIgYj0kZih0aGlzLGEpO3RoaXMucy5RYSh0aGlzLmFbYl0sYSkmJmIrKztyZXR1cm4gdGhpcy5oW2JdLlBlKGEpfXJldHVybiB0aGlzfTtcbm0uT2U9ZnVuY3Rpb24oYSl7aWYoIVAodGhpcykpe3ZhciBiPSRmKHRoaXMsYSk7dGhpcy5zLlFhKHRoaXMuYVtiXSxhKSYmKGEuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYT09Rn0pfHxiKyspO3JldHVybiB0aGlzLmhbYl0uT2UoYSl9cmV0dXJuIHRoaXN9O1xubS5WYT1mdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXtyZXR1cm4gYVswXT9hWzFdPzA6MTotMX12YXIgZT10aGlzLnMuamIoKSxmPTAsaD10aGlzLmEubGVuZ3RoLTEsbD10aGlzLmEscD1kKGUud2IobFtmXSxhKSksTD1kKGUud2IobFtoXSxhKSk7aWYoMSE9cCYmKC0xIT1wfHwtMSE9TCkpe3ZhciBzYT1mdW5jdGlvbihhLGIpe2I9YStiPj4xO3JldHVybiBiPT1hP2IrMTpifSxjYT1mdW5jdGlvbihiLGMsZil7aWYoYj49YylyZXR1cm4gMD09Zj9jOi0xO3ZhciBoPWQoZS53YihsW2JdLGEpKTtpZigwPT1oKXJldHVybiBiO2lmKDE9PWgpcmV0dXJuLTE7aD1zYShiLGMpO2lmKGg9PWMpcmV0dXJuIDA9PWY/YzotMTt2YXIgcD1kKGUud2IobFtoXSxhKSk7cmV0dXJuIDA9PXA/Y2EoYixoLHApOi0xPT1wP2NhKGgrMSxjLGYpOmNhKGIrMSxoLHApfSxDYj1mdW5jdGlvbihiLGMpe2lmKGI+PWMpcmV0dXJuIGI7dmFyIGY9ZChlLndiKGxbY10sYSkpO2lmKDA9PWYpcmV0dXJuIGM7XG5pZigtMT09ZilyZXR1cm4gYjtmPXNhKGIsYyk7aWYoZj09YylyZXR1cm4gYjt2YXIgaD1kKGUud2IobFtmXSxhKSk7cmV0dXJuIDA9PWg/Q2IoZixjKToxPT1oP0NiKGIsZi0xKTotMX07MCE9cCYmKGY9Y2EoZisxLGgsTCkpOy0xIT1mJiYoaD1DYihmLGgpLC0xIT1oJiZoPj1mJiZnZyh0aGlzLGIsYyxmLGgrMSkpfX07ZnVuY3Rpb24gUWYoYSxiLGMsZCl7aWYoYS5zLk1hKCkpIWIucmV2ZXJzZSYmYi5MP2IuTC0tOmNbYi5jb3VudCsrXT1hLkJbZF07ZWxzZSBmb3IodmFyIGU9MDtlPGEuQltkXS5sZW5ndGgmJmIuY291bnQ8Yy5sZW5ndGg7KytlKSFiLnJldmVyc2UmJmIuTD9iLkwtLTpjW2IuY291bnQrK109YS5CW2RdW2VdfWZ1bmN0aW9uIGdnKGEsYixjLGQsZSl7Zm9yKDtkPGUmJihiLnJldmVyc2V8fCEoYi5jb3VudD49Yi5YKSk7KytkKVFmKGEsYixjLGQpfVxubS5maWxsPWZ1bmN0aW9uKGEsYil7aWYoUCh0aGlzKSlmb3IodmFyIGM9MDtjPHRoaXMuQi5sZW5ndGgmJjA8YS5jb3VudDsrK2MpaWYoMDxhLm9mZnNldCl7aWYoYS5vZmZzZXQtPXRoaXMucy5NYSgpPzE6dGhpcy5CW2NdLmxlbmd0aCwwPmEub2Zmc2V0KWZvcih2YXIgZD10aGlzLkJbY10ubGVuZ3RoK2Eub2Zmc2V0O2Q8dGhpcy5CW2NdLmxlbmd0aCYmMDxhLmNvdW50OysrZCliW2EudGUrK109dGhpcy5CW2NdW2RdLGEuY291bnQtLX1lbHNlIGlmKHRoaXMucy5NYSgpKWJbYS50ZSsrXT10aGlzLkJbY10sYS5jb3VudC0tO2Vsc2UgZm9yKGQ9MDtkPHRoaXMuQltjXS5sZW5ndGgmJjA8YS5jb3VudDsrK2QpYlthLnRlKytdPXRoaXMuQltjXVtkXSxhLmNvdW50LS07ZWxzZSBmb3IoYz0wO2M8dGhpcy5oLmxlbmd0aCYmMDxhLmNvdW50OysrYyl0aGlzLmhbY10uZmlsbChhLGIpfTtcbmZ1bmN0aW9uIFZmKGEsYil7dmFyIGM9Yi5ZKCk7YT1hLm1hcChmdW5jdGlvbihhKXt2YXIgZD1uZXcgV2YoYS5pZCgpLGIpO2QuYT1hLm1bMF07ZC5CPWEubVsxXTtkLmEuZm9yRWFjaChmdW5jdGlvbihhLGUpe2MuYWRkKGEsYi5NYSgpPzE6ZC5CW2VdLmxlbmd0aCl9KTtyZXR1cm4gZH0pO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGgtMTsrK2QpWWYoYVtkXSxhW2QrMV0pO3JldHVybiAxPGEubGVuZ3RoP05mKGFbMF0pOmFbMF19bS5rZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zLmpiKCkua2QodGhpcy5hWzBdLGEpfTtmdW5jdGlvbiBoZyhhKXt0aGlzLlhjPTA9PWE/aWc6amc7dGhpcy5jZT0wPT1hP2Z1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP2EucmV2ZXJzZSgpOm51bGx9OmZ1bmN0aW9uKGEpe3JldHVybiBhfHxudWxsfTt0aGlzLmllPTA9PWE/a2c6bGd9ZnVuY3Rpb24gamcoYSxiKXtyZXR1cm4gYT5iPzE6YTxiPy0xOjB9ZnVuY3Rpb24gaWcoYSxiKXtyZXR1cm4gamcoYixhKX1mdW5jdGlvbiBsZyhhLGIpe3JldHVybiBGZChhLGIpfWZ1bmN0aW9uIGtnKGEsYil7cmV0dXJuIEZkKGIsYSl9bT1oZy5wcm90b3R5cGU7bS53Yj1mdW5jdGlvbihhLGIpe2I9dGhpcy5jZShiKTt2YXIgYz1bYi5mcm9tPT1GLGIubz09Rl07aWYoIWNbMF0pe3ZhciBkPXRoaXMuWGMoYSxiLmZyb20pO2NbMF09Yi5lYT8xPT1kOi0xIT1kfWNbMV18fChkPXRoaXMuWGMoYSxiLm8pLGNbMV09Yi5uYT8tMT09ZDoxIT1kKTtyZXR1cm4gY307bS5jb21wYXJlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuWGMoYSxiKX07XG5tLm1pbj1mdW5jdGlvbihhLGIpe3JldHVybiBhPGI/MTphPT1iPzA6LTF9O20ubWF4PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE+Yj8xOmE9PWI/MDotMX07bS5CYj1mdW5jdGlvbihhLGIpe2E9dGhpcy53YihhLGIpO3JldHVybiBhWzBdJiZhWzFdfTttLmtkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuQmIoYSxiKX07bS51Zj1mdW5jdGlvbihhKXtyZXR1cm4gYS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT1hfSkuc29ydChmdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLmllKGEsYyl9LmJpbmQodGhpcykpfTttLlhkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNlKGEpLmZyb209PUZ9O20udWQ9ZnVuY3Rpb24oYSl7YT10aGlzLmNlKGEpO3JldHVyblthLmZyb20sYS5vXX07bS5PZD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PWF9O20uWmQ9aygxKTtcbm0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb21wYXJlPT1pZz9cIlNpbXBsZUNvbXBhcmF0b3JfREVTQ1wiOlwiU2ltcGxlQ29tcGFyYXRvcl9BU0NcIn07ZnVuY3Rpb24gbWcoYSl7aGcuY2FsbCh0aGlzLGEpO3RoaXMuWGM9MD09YT9uZzpvZ31yKG1nLGhnKTtmdW5jdGlvbiBvZyhhLGIpe3JldHVybiBudWxsPT09YT9udWxsPT09Yj8wOi0xOm51bGw9PT1iPzE6amcoYSxiKX1mdW5jdGlvbiBuZyhhLGIpe3JldHVybiBvZyhiLGEpfW1nLnByb3RvdHlwZS5CYj1mdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT09YT9BZChiKTptZy5oYi5CYi5jYWxsKHRoaXMsYSxiKX07bWcucHJvdG90eXBlLkhiPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PT1hP251bGw9PT1iPzA6LTE6bnVsbD09PWI/MTpudWxsfTttZy5wcm90b3R5cGUubWluPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5IYihhLGIpO251bGw9PT1jJiYoYz1tZy5oYi5taW4uY2FsbCh0aGlzLGEsYikpO3JldHVybiBjfTtcbm1nLnByb3RvdHlwZS5tYXg9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLkhiKGEsYik7bnVsbD09PWMmJihjPW1nLmhiLm1heC5jYWxsKHRoaXMsYSxiKSk7cmV0dXJuIGN9O2Z1bmN0aW9uIHBnKGEpe3RoaXMucGE9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBoZyhhKX0pfWZ1bmN0aW9uIHFnKGEsYixjLGQpe2Zvcih2YXIgZT0wLGY9MDtmPGEucGEubGVuZ3RoJiYwPT1lOysrZillPWQoYS5wYVtmXSxiW2ZdLGNbZl0pO3JldHVybiBlfW09cGcucHJvdG90eXBlO20uY29tcGFyZT1mdW5jdGlvbihhLGIpe3JldHVybiBxZyh0aGlzLGEsYixmdW5jdGlvbihhLGIsZSl7cmV0dXJuIGI9PUZ8fGU9PUY/MDphLmNvbXBhcmUoYixlKX0pfTttLm1pbj1mdW5jdGlvbihhLGIpe3JldHVybiBxZyh0aGlzLGEsYixmdW5jdGlvbihhLGIsZSl7cmV0dXJuIGEubWluKGIsZSl9KX07bS5tYXg9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gcWcodGhpcyxhLGIsZnVuY3Rpb24oYSxiLGUpe3JldHVybiBhLm1heChiLGUpfSl9O1xubS53Yj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bITAsITBdLGQ9MDtkPHRoaXMucGEubGVuZ3RoJiYoY1swXXx8Y1sxXSk7KytkKXt2YXIgZT10aGlzLnBhW2RdLndiKGFbZF0sYltkXSk7Y1swXT1jWzBdJiZlWzBdO2NbMV09Y1sxXSYmZVsxXX1yZXR1cm4gY307bS5CYj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0hMCxkPTA7ZDx0aGlzLnBhLmxlbmd0aCYmYzsrK2QpYz10aGlzLnBhW2RdLkJiKGFbZF0sYltkXSk7cmV0dXJuIGN9O20ua2Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wYVswXS5CYihhWzBdLGJbMF0pfTtcbm0udWY9ZnVuY3Rpb24oYSl7dmFyIGI9YS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZXZlcnkoZ2EpfSk7YT1BcnJheSh0aGlzLnBhLmxlbmd0aCk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYVtjXT1iLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYVtjXX0pO2EuZm9yRWFjaChmdW5jdGlvbihhLGIpe2Euc29ydChmdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLnBhW2JdLmllKGEsYyl9LmJpbmQodGhpcykpfSx0aGlzKTtiPUFycmF5KGIubGVuZ3RoKTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKWJbY109YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGFbY119KTtyZXR1cm4gYi5zb3J0KGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD0wO2Q8dGhpcy5wYS5sZW5ndGgmJjA9PWM7KytkKWM9dGhpcy5wYVtkXS5pZShhW2RdLGJbZF0pO3JldHVybiBjfS5iaW5kKHRoaXMpKX07bS5YZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wYVswXS5YZChhWzBdKX07XG5tLnVkPWZ1bmN0aW9uKGEpe3ZhciBiPWEubWFwKGZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucGFbYl0udWQoYSlbMF19LHRoaXMpO2E9YS5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wYVtiXS51ZChhKVsxXX0sdGhpcyk7cmV0dXJuW2IsYV19O20uT2Q9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZXZlcnkoZnVuY3Rpb24oYSxjKXtyZXR1cm4gdGhpcy5wYVtjXS5PZChhKX0sdGhpcyl9O20uWmQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYS5sZW5ndGh9O2Z1bmN0aW9uIHJnKGEpe3BnLmNhbGwodGhpcyxhKTt0aGlzLnBhPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgbWcoYSl9KX1yKHJnLHBnKTtmdW5jdGlvbiBzZyhhKXtpZigxPT1hLmYubGVuZ3RoKXJldHVybiBuZXcgaGcoYS5mWzBdLm9yZGVyKTt2YXIgYj1hLmYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLm9yZGVyfSk7cmV0dXJuIGEuZi5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhLmJhLmhjKCl9KT9uZXcgcmcoYik6bmV3IHBnKGIpfTtmdW5jdGlvbiB0ZyhhKXt0aGlzLmZhPWE7dGhpcy5vYj1CKCk7dGhpcy5PYz1uZXcgSmY7dGhpcy56YT1uZXcgSmZ9bT10Zy5wcm90b3R5cGU7bS5nZXROYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmEuZ2V0TmFtZSgpfTttLmFkZD1mdW5jdGlvbihhLGIpe251bGw9PT1hPyh0aGlzLm9iLmFkZChiKSx0aGlzLk9jLmFkZChhLDEpKTp0aGlzLmZhLmFkZChhLGIpfTttLnNldD1mdW5jdGlvbihhLGIpe251bGw9PT1hPyh0aGlzLm9iLmNsZWFyKCksdGhpcy5PYy5jbGVhcigpLHRoaXMuYWRkKGEsYikpOnRoaXMuZmEuc2V0KGEsYil9O20ucmVtb3ZlPWZ1bmN0aW9uKGEsYil7bnVsbD09PWE/Yj8odGhpcy5vYi5kZWxldGUoYiksdGhpcy5PYy5yZW1vdmUoYSwxKSk6KHRoaXMub2IuY2xlYXIoKSx0aGlzLk9jLmNsZWFyKCkpOnRoaXMuZmEucmVtb3ZlKGEsYil9O20uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YT9DKHRoaXMub2IpOnRoaXMuZmEuZ2V0KGEpfTttLlpjPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmZhLlpjKGEpfTtcbm0uWT1mdW5jdGlvbigpe0tmKHRoaXMuemEsW3RoaXMuZmEuWSgpLHRoaXMuT2NdKTtyZXR1cm4gdGhpcy56YX07bS5WYT1mdW5jdGlvbihhLGIsYyxkKXtiPXRoaXMuZmEuVmEoYSxiLGMsZCk7cmV0dXJuIG51bGwhPWE/YjpiLmNvbmNhdChDKHRoaXMub2IpKX07bS5jbGVhcj1mdW5jdGlvbigpe3RoaXMub2IuY2xlYXIoKTt0aGlzLmZhLmNsZWFyKCl9O20uUGE9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hPzAhPXRoaXMub2Iuc2l6ZTp0aGlzLmZhLlBhKGEpfTttLm1pbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZhLm1pbigpfTttLm1heD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZhLm1heCgpfTttLkphPWZ1bmN0aW9uKCl7cmV0dXJuW25ldyBoYygtMixDKHRoaXMub2IpKV0uY29uY2F0KHRoaXMuZmEuSmEoKSl9O20uamI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mYS5qYigpfTtcbmZ1bmN0aW9uIHVnKGEsYil7Zm9yKHZhciBjPS0xLGQ9MDtkPGIubGVuZ3RoOysrZClpZigtMj09YltkXS5pZCgpKXtjPWQ7YnJlYWt9aWYoLTE9PWMpdGhyb3cgbmV3IEQoMTAyKTtkPWJbY10ubTtiPWIuc2xpY2UoMCk7Yi5zcGxpY2UoYywxKTthPWEoYik7dmFyIGU9bmV3IHRnKGEpO2QuZm9yRWFjaChmdW5jdGlvbihhKXtlLm9iLmFkZChhKX0pO3JldHVybiBlfW0uTWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mYS5NYSgpfTtmdW5jdGlvbiB2ZyhhKXt0aGlzLkE9YTt0aGlzLnNiPUIoKTt0aGlzLiQ9bmV3IGhnKDEpfW09dmcucHJvdG90eXBlO20uZ2V0TmFtZT1nKFwiQVwiKTttLmFkZD1mdW5jdGlvbihhKXtpZihcIm51bWJlclwiIT10eXBlb2YgYSl0aHJvdyBuZXcgRCgxMDMpO3RoaXMuc2IuYWRkKGEpfTttLnNldD1mdW5jdGlvbihhLGIpe3RoaXMuYWRkKGEsYil9O20ucmVtb3ZlPWZ1bmN0aW9uKGEpe3RoaXMuc2IuZGVsZXRlKGEpfTttLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5QYShhKT9bYV06W119O20ubWluPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuSGIodGhpcy4kLm1pbi5iaW5kKHRoaXMuJCkpfTttLm1heD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkhiKHRoaXMuJC5tYXguYmluZCh0aGlzLiQpKX07XG5tLkhiPWZ1bmN0aW9uKGEpe2lmKDA9PXRoaXMuc2Iuc2l6ZSlyZXR1cm4gbnVsbDt2YXIgYj1DKHRoaXMuc2IpLnJlZHVjZShmdW5jdGlvbihiLGQpe3JldHVybiBudWxsPT09Ynx8MT09YShkLGIpP2Q6Yn0sbnVsbCk7cmV0dXJuW2IsW2JdXX07bS5aYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNiLnNpemV9O20uVmE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YXx8W0RkKCldO2E9Qyh0aGlzLnNiKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGUuc29tZShmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy4kLkJiKGEsYil9LHRoaXMpfSx0aGlzKTtyZXR1cm4gSWYoYSxiLGMsZCl9O20uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnNiLmNsZWFyKCl9O20uUGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2IuaGFzKGEpfTttLkphPWZ1bmN0aW9uKCl7cmV0dXJuW25ldyBoYygwLEModGhpcy5zYikpXX07bS5qYj1nKFwiJFwiKTtcbmZ1bmN0aW9uIHdnKGEsYil7dmFyIGM9bmV3IHZnKGEpO2JbMF0ubS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2MuYWRkKGEsYSl9KTtyZXR1cm4gY31tLk1hPWsoITApO20uWT1mdW5jdGlvbigpe3ZhciBhPW5ldyBKZjthLmlhPXRoaXMuc2Iuc2l6ZTtyZXR1cm4gYX07ZnVuY3Rpb24geGcoYSl7dGhpcy5PYT1hLmIodmMpO3RoaXMuQz1hLmIoeGMpO3RoaXMuVj1hLmIod2MpfXhnLnByb3RvdHlwZS5FYT1mdW5jdGlvbihhKXt2YXIgYj1hLm9hKCksYz1mdW5jdGlvbigpe2lmKDA9PWIubGVuZ3RoKXJldHVybiB2KCk7dmFyIGE9Yi5zaGlmdCgpO3JldHVybihhLkNiKCk/eWcodGhpcyxhKTp6Zyh0aGlzLGEpKS50aGVuKGMpfS5iaW5kKHRoaXMpO3JldHVybiBjKCl9O2Z1bmN0aW9uIHpnKGEsYil7dmFyIGM9YS5PYS5GYigwLFtiXSk7YT1jLkkoYi5nZXROYW1lKCksYi5rYi5iaW5kKGIpLDApLmdldChbXSkudGhlbihmdW5jdGlvbihhKXt0aGlzLlYuV2IoYi5nZXROYW1lKCksYSk7QWcodGhpcyxiLGEpfS5iaW5kKGEpKTtjLmthKCk7cmV0dXJuIGF9XG5mdW5jdGlvbiBBZyhhLGIsYyl7dmFyIGQ9YS5DLmxjLmdldChiLmdldE5hbWUoKSl8fFtdO2MuZm9yRWFjaChmdW5jdGlvbihhKXtkLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGM9YS5uYihiLmdldE5hbWUoKSk7Yi5hZGQoYyxhLmlkKCkpfSl9KX1mdW5jdGlvbiB5ZyhhLGIpe3ZhciBjPWEuT2EuRmIoMCxbYl0pLGQ9Yy5JKGIuZ2V0TmFtZSgpLGIua2IsMCkuZ2V0KFtdKS50aGVuKGZ1bmN0aW9uKGEpe3RoaXMuVi5XYihiLmdldE5hbWUoKSxhKX0uYmluZChhKSk7YT1iLkRhKCkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBCZyh0aGlzLGEsYyl9LGEpLmNvbmNhdChDZyhhLGIsYykpO2Mua2EoKTtyZXR1cm4gZWIoYS5jb25jYXQoZCkpfVxuZnVuY3Rpb24gQmcoYSxiLGMpe2M9Yy5JKGIuaigpLGpjLDEpO3ZhciBkPXNnKGIpO3JldHVybiBjLmdldChbXSkudGhlbihmdW5jdGlvbihhKXtpZigwPGEubGVuZ3RoKXtpZihEZyhiKSl7dmFyIGM9VWYuYmluZCh2b2lkIDAsZCxiLmooKSxiLkRjKTthPXVnKGMsYSl9ZWxzZSBhPVVmKGQsYi5qKCksYi5EYyxhKTt0aGlzLkMuc2V0KGIubWMsYSl9fS5iaW5kKGEpKX1mdW5jdGlvbiBDZyhhLGIsYyl7cmV0dXJuIGMuSShuZihiKSxqYywxKS5nZXQoW10pLnRoZW4oZnVuY3Rpb24oYSl7MDxhLmxlbmd0aCYmKGE9d2cobmYoYiksYSksdGhpcy5DLnNldChiLmdldE5hbWUoKSxhKSl9LmJpbmQoYSkpfTtmdW5jdGlvbiBFZygpe3RoaXMuWj15KCk7dGhpcy5sYz15KCl9RWcucHJvdG90eXBlLkVhPWZ1bmN0aW9uKGEpe2Eub2EoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPVtdO3RoaXMubGMuc2V0KGEuZ2V0TmFtZSgpLGIpO3ZhciBkPW5mKGEpO2lmKG51bGw9PT10aGlzLmdldChkKSl7dmFyIGU9bmV3IHZnKGQpO2IucHVzaChlKTt0aGlzLlouc2V0KGQsZSl9YS5EYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGM7Yz1zZyhhKTtjPW5ldyBMZihhLmooKSxjLGEuRGMpO2M9RGcoYSkmJjE9PWEuZi5sZW5ndGg/bmV3IHRnKGMpOmM7Yi5wdXNoKGMpO3RoaXMuWi5zZXQoYS5qKCksYyl9LHRoaXMpfSx0aGlzKTtyZXR1cm4gdigpfTtFZy5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlouZ2V0KGEpfHxudWxsfTtcbkVnLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmxjLmdldChhKXx8bnVsbDtudWxsPT09YyYmKGM9W10sdGhpcy5sYy5zZXQoYSxjKSk7YT1udWxsO2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKWlmKGNbZF0uZ2V0TmFtZSgpPT1iLmdldE5hbWUoKSl7YT1kO2JyZWFrfW51bGwhPT1hJiYwPGMubGVuZ3RoP2Muc3BsaWNlKGEsMSxiKTpjLnB1c2goYik7dGhpcy5aLnNldChiLmdldE5hbWUoKSxiKX07ZnVuY3Rpb24gRmcoYSxiKXt2YXIgYz1bXSxkPW51bGwsZT1udWxsO21lKGEsZnVuY3Rpb24oYSl7dmFyIGY9YihhKTtudWxsPT1hLmdldFBhcmVudCgpP2U9ZjpLKGQsZik7dmFyIGw9YS5nZXRQYXJlbnQoKTtudWxsIT09bCYmSihsKS5sZW5ndGg9PUooZCkubGVuZ3RoJiYobD1jLmluZGV4T2YoZCksLTEhPWwmJmMuc3BsaWNlKGwsMSkpOzE8SihhKS5sZW5ndGgmJmMucHVzaChmKTtkPW51bGw9PT1hLmg/Y1tjLmxlbmd0aC0xXTpmfSk7cmV0dXJuIGV9ZnVuY3Rpb24gR2coYSl7cmV0dXJuIEhnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmh9KX1cbmZ1bmN0aW9uIElnKGEpe3ZhciBiPWEuZ2V0UGFyZW50KCksYz0wO251bGwhPT1iJiYoYz1KKGIpLmluZGV4T2YoYSksYi5yZW1vdmVDaGlsZChhKSk7dmFyIGQ9SihhKS5zbGljZSgpO2QuZm9yRWFjaChmdW5jdGlvbihkLGYpe2EucmVtb3ZlQ2hpbGQoZCk7bnVsbD09PWJ8fGplKGIsZCxjK2YpfSk7cmV0dXJue3BhcmVudDpiLGNoaWxkcmVuOmR9fWZ1bmN0aW9uIEpnKGEsYil7SihhKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24oYyl7YS5yZW1vdmVDaGlsZChjKTtLKGIsYyl9KTtLKGEsYil9ZnVuY3Rpb24gS2coYSl7dmFyIGI9aWUoYSwwKTtJZyhhKTtKZyhiLGEpO3JldHVybiBifVxuZnVuY3Rpb24gTGcoYSxiLGMpe3ZhciBkPWllKGEsMCksZT1KKGQpLnNsaWNlKCk7aWYoIWUuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYihhKX0pKXJldHVybiBhO0lnKGEpO2UuZm9yRWFjaChmdW5jdGlvbihlLGgpe2lmKGIoZSkpe3ZhciBmPWMoYSk7a2UoZCxoKTtLKGYsZSk7amUoZCxmLGgpfX0pO3JldHVybiBkfWZ1bmN0aW9uIE1nKGEsYixjLGQpe3ZhciBlPWEuZ2V0UGFyZW50KCk7bnVsbCE9PWUmJihhPUooZSkuaW5kZXhPZihhKSxrZShlLGEpLGplKGUsYyxhKSk7SihiKS5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5yZW1vdmVDaGlsZChhKTtLKGQsYSl9KTtyZXR1cm4gY31mdW5jdGlvbiBIZyhhLGIsYyl7ZnVuY3Rpb24gZChhKXtiKGEpJiZlLnB1c2goYSk7bnVsbCE9YyYmYyhhKXx8SihhKS5mb3JFYWNoKGQpfXZhciBlPVtdO2QoYSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBOZyhhLGIpe3ZhciBjPWJ8fGZ1bmN0aW9uKGEpe3JldHVybiBhLnRvU3RyaW5nKCkrXCJcXG5cIn0sZD1cIlwiO21lKGEsZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxoZShhKTtiKyspZCs9XCItXCI7ZCs9YyhhKX0pO3JldHVybiBkfTtmdW5jdGlvbiBPZyhhKXtuZS5jYWxsKHRoaXMpO3RoaXMucGI9YTt0aGlzLldhPSExfXIoT2csbmUpO209T2cucHJvdG90eXBlO20uTmI9ZnVuY3Rpb24oKXtyZXR1cm4gRmcodGhpcyxmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgT2cpe3ZhciBiPW5ldyBPZyhhLnBiKTtiLldhPWEuV2E7YT1hLlcoKTtiLnNhPWE7cmV0dXJuIGJ9cmV0dXJuIGEuTmIoKX0pfTttLmxiPWZ1bmN0aW9uKGEpe3ZhciBiPWF8fFtdO21lKHRoaXMsZnVuY3Rpb24oYSl7YSE9dGhpcyYmYS5sYihiKX0uYmluZCh0aGlzKSk7YT1CKGIpO3JldHVybiBDKGEpfTttLnU9ZnVuY3Rpb24oYSl7dmFyIGI9bnVsbCE9YT9hOkIoKTttZSh0aGlzLGZ1bmN0aW9uKGEpe2EhPXRoaXMmJmEudShiKX0uYmluZCh0aGlzKSk7cmV0dXJuIGJ9O20udmQ9ZnVuY3Rpb24oYSl7dGhpcy5XYSE9YSYmKHRoaXMuV2E9YSx0aGlzLnBiPVwiYW5kXCI9PXRoaXMucGI/XCJvclwiOlwiYW5kXCIsSih0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe3JldHVybiBiLnZkKGEpfSkpfTtcbm0uZXZhbD1mdW5jdGlvbihhKXt2YXIgYj1KKHRoaXMpLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gYi5ldmFsKGEpfSk7cmV0dXJuIFBnKHRoaXMsYil9O2Z1bmN0aW9uIFBnKGEsYil7cmV0dXJuXCJhbmRcIj09YS5wYj9PZChiKTpQZChiKX1tLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJjb21iaW5lZF9wcmVkX1wiK3RoaXMucGIudG9TdHJpbmcoKX07bS53ZT1mdW5jdGlvbigpe2lmKFwib3JcIj09dGhpcy5wYil7dmFyIGE9bmV3IEhkO0oodGhpcykuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIud2UoKS5xYSgpO2EuYWRkKGIpfSk7cmV0dXJuIGF9cmV0dXJuIG5ldyBIZH07bS5sZD1mdW5jdGlvbigpe3JldHVyblwib3JcIj09dGhpcy5wYj9RZyh0aGlzKTohMX07XG5mdW5jdGlvbiBRZyhhKXt2YXIgYj1udWxsO3JldHVybiBKKGEpLmV2ZXJ5KGZ1bmN0aW9uKGEpe2lmKCEoYSBpbnN0YW5jZW9mIHFlJiZhLmxkKCkpKXJldHVybiExO251bGw9PT1iJiYoYj1hLkopO3JldHVybiBiLmooKT09YS5KLmooKX0pfTtmdW5jdGlvbiBSZyhhLGIsYyl7bmUuY2FsbCh0aGlzKTt0aGlzLmdhPWE7dGhpcy5tYT1iO3RoaXMuRj1jO3RoaXMuZGU9bnVsbDthPWVlKCk7dGhpcy52Yz1mZShhLHRoaXMuZ2EuRygpLHRoaXMuRik7dGhpcy5uZz1hLlplLmdldCh0aGlzLmdhLkcoKSl8fG51bGx9cihSZyxuZSk7bT1SZy5wcm90b3R5cGU7bS5OYj1mdW5jdGlvbigpe3ZhciBhPW5ldyBSZyh0aGlzLmdhLHRoaXMubWEsdGhpcy5GKSxiPXRoaXMuVygpO2Euc2E9YjtyZXR1cm4gYX07bS5sYj1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8oYS5wdXNoKHRoaXMuZ2EpLGEucHVzaCh0aGlzLm1hKSxhKTpbdGhpcy5nYSx0aGlzLm1hXX07bS51PWZ1bmN0aW9uKGEpe2E9bnVsbCE9YT9hOkIoKTthLmFkZCh0aGlzLmdhLkkoKSk7YS5hZGQodGhpcy5tYS5JKCkpO3JldHVybiBhfTtcbm0ucmV2ZXJzZT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuRjtzd2l0Y2godGhpcy5GKXtjYXNlIFwiZ3RcIjphPVwibHRcIjticmVhaztjYXNlIFwibHRcIjphPVwiZ3RcIjticmVhaztjYXNlIFwiZ3RlXCI6YT1cImx0ZVwiO2JyZWFrO2Nhc2UgXCJsdGVcIjphPVwiZ3RlXCJ9cmV0dXJuIG5ldyBSZyh0aGlzLm1hLHRoaXMuZ2EsYSl9O20uZXZhbD1mdW5jdGlvbihhKXt2YXIgYj1hLmVudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGEpe3ZhciBiPUgoYSx0aGlzLmdhKTthPUgoYSx0aGlzLm1hKTtyZXR1cm4gdGhpcy52YyhiLGEpfSx0aGlzKTtyZXR1cm4gbmV3IEcoYixhLnUoKSl9O20udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImpvaW5fcHJlZChcIit0aGlzLmdhLmooKStcIiBcIit0aGlzLkYrXCIgXCIrdGhpcy5tYS5qKCkrXCIpXCJ9O1xuZnVuY3Rpb24gU2coYSxiLGMpe3ZhciBkOy0xIT1iLnUoKS5pbmRleE9mKFRkKGEuZ2EuSSgpKSk/KGQ9YixiPWMpOmQ9YztpZihkLmVudHJpZXMubGVuZ3RoPmIuZW50cmllcy5sZW5ndGgpe2E6e2M9YS5nYTthLmdhPWEubWE7YS5tYT1jO3N3aXRjaChhLkYpe2Nhc2UgXCJndFwiOmM9XCJsdFwiO2JyZWFrO2Nhc2UgXCJsdFwiOmM9XCJndFwiO2JyZWFrO2Nhc2UgXCJndGVcIjpjPVwibHRlXCI7YnJlYWs7Y2FzZSBcImx0ZVwiOmM9XCJndGVcIjticmVhaztkZWZhdWx0OmJyZWFrIGF9YS5GPWM7YS52Yz1mZShlZSgpLGEuZ2EuRygpLGEuRil9cmV0dXJuW2IsZF19cmV0dXJuW2QsYl19ZnVuY3Rpb24gVGcoYSl7dmFyIGI9e307YS5sYigpLmZvckVhY2goZnVuY3Rpb24oYSl7YlthLmdldE5hbWUoKV09bnVsbH0pO3JldHVybiBifVxuZnVuY3Rpb24gVWcoYSxiLGMpe251bGw9PT1hLmRlJiYoYS5kZT1UZyhhLm1hLkkoKSkpO3ZhciBkPW5ldyBSZChuZXcgaGMoLTEsYS5kZSksITEpO3JldHVybiBWZChiLGMsZCxbVGQoYS5tYS5JKCkpXSl9XG5mdW5jdGlvbiBWZyhhLGIsYyxkKXt2YXIgZT1bYixjXTtkfHwoZT1TZyhhLGIsYykpO2I9ZVswXTtjPWVbMV07dmFyIGU9YixmPWMsaD1hLmdhLGw9YS5tYTtkJiYoZT1jLGY9YixoPWEubWEsbD1hLmdhKTt2YXIgcD1uZXcgY2QsTD1bXTtlLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1TdHJpbmcoSChhLGgpKTtwLnNldChiLGEpfSk7dmFyIHNhPWUudSgpLGNhPWYudSgpO2YuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPUgoYSxsKSxjPVN0cmluZyhiKTtudWxsIT09YiYmcC5oYXMoYyk/cC5nZXQoYykuZm9yRWFjaChmdW5jdGlvbihiKXtiPVZkKGEsY2EsYixzYSk7TC5wdXNoKGIpfSk6ZCYmTC5wdXNoKFVnKHRoaXMsYSxjYSkpfS5iaW5kKGEpKTthPWIudSgpLmNvbmNhdChjLnUoKSk7cmV0dXJuIG5ldyBHKEwsYSl9XG5mdW5jdGlvbiBXZyhhLGIsYyxkLGUpe2Z1bmN0aW9uIGYoYSxiKXtiPW5ldyBSZChiLDE8c2EubGVuZ3RoKTthPVZkKGEsY2EsYixzYSk7TC5wdXNoKGEpfXZhciBoPWQuZGcuSSgpLGw9YixwPWM7LTEhPWIudSgpLmluZGV4T2YoVGQoaCkpJiYobD1jLHA9Yik7dmFyIEw9W10sc2E9cC51KCksY2E9bC51KCk7bC5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5uZyhIKGEsZC53ZykpLGI9ZC5pbmRleC5nZXQoYik7MCE9Yi5sZW5ndGgmJihkLmluZGV4Lk1hKCk/ZihhLGUuZ2V0KGJbMF0pKTpFZihlLGIpLmZvckVhY2goZi5iaW5kKG51bGwsYSkpKX0sYSk7YT1sLnUoKS5jb25jYXQocC51KCkpO3JldHVybiBuZXcgRyhMLGEpfTtmdW5jdGlvbiBYZyhhLGIsYyl7cmV0dXJuIG51bGw9PT1iP25ldyBxZShhLGIsYyk6bihiLmopP25ldyBSZyhhLGIsYyk6bmV3IHFlKGEsYixjKX07dmFyIFlnPXt9O3EoXCJsZi5zY2hlbWEuRGF0YVN0b3JlVHlwZVwiLFlnKTtZZy5JTkRFWEVEX0RCPTA7WWcuTUVNT1JZPTE7WWcuTE9DQUxfU1RPUkFHRT0yO1lnLkZJUkVCQVNFPTM7WWcuV0VCX1NRTD00O1lnLk9CU0VSVkFCTEVfU1RPUkU9NTtmdW5jdGlvbiBaZyhhLGIsYyxkKXt0aGlzLm1jPWE7dGhpcy5uYW1lPWI7dGhpcy5EYz1jO3RoaXMuZj1kfVpnLnByb3RvdHlwZS5qPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWMrXCIuXCIrdGhpcy5uYW1lfTtmdW5jdGlvbiBEZyhhKXtyZXR1cm4gYS5mLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYmEuaGMoKX0pfWZ1bmN0aW9uIFEoYSxiLGMsZCl7dGhpcy5BPWE7dGhpcy50YT1jO3RoaXMuSz1iO3RoaXMucmQ9ZDt0aGlzLkthPW51bGx9cShcImxmLnNjaGVtYS5UYWJsZVwiLFEpO1EucHJvdG90eXBlLmdldE5hbWU9ZyhcIkFcIik7US5wcm90b3R5cGUuZ2V0TmFtZT1RLnByb3RvdHlwZS5nZXROYW1lO1xuZnVuY3Rpb24gVGQoYSl7cmV0dXJuIGEuS2F8fGEuQX1RLnByb3RvdHlwZS5yYz1mdW5jdGlvbihhKXt2YXIgYj1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLkEpO2IuS2E9YTtiLklnPXRoaXMuSWc7cmV0dXJuIGJ9O1EucHJvdG90eXBlLmFzPVEucHJvdG90eXBlLnJjO1EucHJvdG90eXBlLmNyZWF0ZVJvdz1RLnByb3RvdHlwZS54YjtRLnByb3RvdHlwZS5kZXNlcmlhbGl6ZVJvdz1RLnByb3RvdHlwZS5rYjtRLnByb3RvdHlwZS5EYT1nKFwidGFcIik7US5wcm90b3R5cGUuZ2V0SW5kaWNlcz1RLnByb3RvdHlwZS5EYTtRLnByb3RvdHlwZS5sYj1nKFwiS1wiKTtRLnByb3RvdHlwZS5nZXRDb2x1bW5zPVEucHJvdG90eXBlLmxiO1EucHJvdG90eXBlLmdldENvbnN0cmFpbnQ9US5wcm90b3R5cGUuTmU7US5wcm90b3R5cGUuQ2I9ZyhcInJkXCIpO1EucHJvdG90eXBlLnBlcnNpc3RlbnRJbmRleD1RLnByb3RvdHlwZS5DYjtmdW5jdGlvbiBuZihhKXtyZXR1cm4gYS5BK1wiLiNcIn07ZnVuY3Rpb24gUihhLGIpe3RoaXMuY2hpbGQ9YTt0aGlzLkxiPWI7dGhpcy5LYT1udWxsfW09Ui5wcm90b3R5cGU7bS5nZXROYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuTGIrXCIoXCIrdGhpcy5jaGlsZC5nZXROYW1lKCkrXCIpXCJ9O20uaj1mdW5jdGlvbigpe3JldHVybiB0aGlzLkxiK1wiKFwiK3RoaXMuY2hpbGQuaigpK1wiKVwifTttLkk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGlsZC5JKCl9O20udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5qKCl9O20uRz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkLkcoKX07bS5EYT1mdW5jdGlvbigpe3JldHVybltdfTttLkNhPWsobnVsbCk7bS5oYz1rKCExKTttLnJjPWZ1bmN0aW9uKGEpe3RoaXMuS2E9YTtyZXR1cm4gdGhpc307Ui5wcm90b3R5cGUuYXM9Ui5wcm90b3R5cGUucmM7XG5mdW5jdGlvbiAkZyhhKXtmb3IodmFyIGI9W2FdO2EgaW5zdGFuY2VvZiBSOyliLnB1c2goYS5jaGlsZCksYT1hLmNoaWxkO3JldHVybiBifWZ1bmN0aW9uIGFoKGEpe3RoaXMuS2E9YXx8bnVsbDt0aGlzLlU9bmV3IFEoXCIjVW5rbm93blRhYmxlXCIsW10sW10sITEpfW09YWgucHJvdG90eXBlO20uZ2V0TmFtZT1rKFwiKlwiKTttLmo9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXROYW1lKCl9O20udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5qKCl9O20uST1nKFwiVVwiKTttLkc9ayg0KTttLkRhPWZ1bmN0aW9uKCl7cmV0dXJuW119O20uQ2E9ayhudWxsKTttLmhjPWsoITEpO3EoXCJsZi5mbi5hdmdcIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFIoYSxcIkFWR1wiKX0pO2Z1bmN0aW9uIGJoKGEpe3JldHVybiBuZXcgUihhfHxuZXcgYWgsXCJDT1VOVFwiKX1xKFwibGYuZm4uY291bnRcIixiaCk7ZnVuY3Rpb24gY2goYSl7cmV0dXJuIG5ldyBSKGEsXCJESVNUSU5DVFwiKX1xKFwibGYuZm4uZGlzdGluY3RcIixjaCk7cShcImxmLmZuLm1heFwiLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUihhLFwiTUFYXCIpfSk7cShcImxmLmZuLm1pblwiLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUihhLFwiTUlOXCIpfSk7cShcImxmLmZuLnN0ZGRldlwiLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUihhLFwiU1REREVWXCIpfSk7cShcImxmLmZuLnN1bVwiLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUihhLFwiU1VNXCIpfSk7cShcImxmLmZuLmdlb21lYW5cIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFIoYSxcIkdFT01FQU5cIil9KTtmdW5jdGlvbiBTKGEsYil7SS5jYWxsKHRoaXMpO3RoaXMuVWY9Yn1yKFMsSSk7Uy5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihhLGIpe3N3aXRjaCh0aGlzLlVmKXtjYXNlIDE6cmV0dXJuIGRoKHRoaXMsYSxiKTtjYXNlIDA6cmV0dXJuIGVoKHRoaXMsYSxiKTtkZWZhdWx0OnJldHVybiBmaCh0aGlzLGEsYil9fTtTLnByb3RvdHlwZS50b1N0cmluZz1rKFwiZHVtbXlfbm9kZVwiKTtTLnByb3RvdHlwZS5QYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvU3RyaW5nKCl9O2Z1bmN0aW9uIGZoKGEsYixjKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSl7YSh0aGlzLmNhKFtdLGIsYykpfS5iaW5kKGEpKX1mdW5jdGlvbiBkaChhLGIsYyl7cmV0dXJuIGllKGEsMCkuZXhlYyhiLGMpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2EoYSxiLGMpfS5iaW5kKGEpKX1cbmZ1bmN0aW9uIGVoKGEsYixjKXt2YXIgZD1KKGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5leGVjKGIsYyl9KTtyZXR1cm4gZWIoZCkudGhlbihmdW5jdGlvbihhKXt2YXIgZD1bXTthLmZvckVhY2goZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDsrK2IpZC5wdXNoKGFbYl0pfSk7cmV0dXJuIHRoaXMuY2EoZCxiLGMpfS5iaW5kKGEpKX07ZnVuY3Rpb24gZ2goYSl7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLkNlPWF9cihnaCxTKTtnaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImFnZ3JlZ2F0aW9uKFwiK3RoaXMuQ2UubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmooKX0pLnRvU3RyaW5nKCkrXCIpXCJ9O2doLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXthLmZvckVhY2goZnVuY3Rpb24oYSl7aGgobmV3IGloKGEsdGhpcy5DZSkpfSx0aGlzKTtyZXR1cm4gYX07ZnVuY3Rpb24gaWgoYSxiKXt0aGlzLk5hPWE7dGhpcy5LPWJ9XG5mdW5jdGlvbiBoaChhKXthLksuZm9yRWFjaChmdW5jdGlvbihhKXthPSRnKGEpLnJldmVyc2UoKTtmb3IodmFyIGI9MTtiPGEubGVuZ3RoO2IrKyl7dmFyIGQ9YVtiXSxlPSRnKGQpLnNsaWNlKC0xKVswXSxmPWQuY2hpbGQgaW5zdGFuY2VvZiBSP0xkKHRoaXMuTmEsZC5jaGlsZCk6dGhpcy5OYTtpZihudWxsIT09Zi4kYSYmZi4kYS5oYXMoZC5qKCkpKWJyZWFrO2Y9amgoZC5MYixmLGUpO2U9dGhpcy5OYTtudWxsPT09ZS4kYSYmKGUuJGE9eSgpKTtlLiRhLnNldChkLmooKSxmKX19LGEpfVxuZnVuY3Rpb24gamgoYSxiLGMpe3ZhciBkPW51bGw7c3dpdGNoKGEpe2Nhc2UgXCJNSU5cIjpkPWtoKGIsYyxmdW5jdGlvbihhLGIpe3JldHVybiBiPGE/YjphfSk7YnJlYWs7Y2FzZSBcIk1BWFwiOmQ9a2goYixjLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI+YT9iOmF9KTticmVhaztjYXNlIFwiRElTVElOQ1RcIjpkPWxoKGIsYyk7YnJlYWs7Y2FzZSBcIkNPVU5UXCI6ZD1taChiLGMpO2JyZWFrO2Nhc2UgXCJTVU1cIjpkPW5oKGIsYyk7YnJlYWs7Y2FzZSBcIkFWR1wiOmE9bWgoYixjKTswPGEmJihkPW5oKGIsYykvYSk7YnJlYWs7Y2FzZSBcIkdFT01FQU5cIjpkPW9oKGIsYyk7YnJlYWs7ZGVmYXVsdDpkPXBoKGIsYyl9cmV0dXJuIGR9ZnVuY3Rpb24ga2goYSxiLGMpe3JldHVybiBhLmVudHJpZXMucmVkdWNlKGZ1bmN0aW9uKGEsZSl7ZT1IKGUsYik7cmV0dXJuIG51bGw9PT1lP2E6bnVsbD09PWE/ZTpjKGEsZSl9LG51bGwpfVxuZnVuY3Rpb24gbWgoYSxiKXtyZXR1cm4gYiBpbnN0YW5jZW9mIGFoP2EuZW50cmllcy5sZW5ndGg6YS5lbnRyaWVzLnJlZHVjZShmdW5jdGlvbihhLGQpe3JldHVybiBhKyhudWxsPT09SChkLGIpPzA6MSl9LDApfWZ1bmN0aW9uIG5oKGEsYil7cmV0dXJuIGtoKGEsYixmdW5jdGlvbihhLGIpe3JldHVybiBiK2F9KX1mdW5jdGlvbiBwaChhLGIpe3ZhciBjPVtdO2EuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9SChhLGIpO251bGw9PT1hfHxjLnB1c2goYSl9KTtyZXR1cm4gMD09Yy5sZW5ndGg/bnVsbDp0Yi5hcHBseShudWxsLGMpfWZ1bmN0aW9uIG9oKGEsYil7dmFyIGM9MDthPWEuZW50cmllcy5yZWR1Y2UoZnVuY3Rpb24oYSxlKXtlPUgoZSxiKTtpZigwPT1lfHxudWxsPT09ZSlyZXR1cm4gYTtjKys7cmV0dXJuIGErTWF0aC5sb2coZSl9LDApO3JldHVybiAwPT1jP251bGw6TWF0aC5wb3coTWF0aC5FLGEvYyl9XG5mdW5jdGlvbiBsaChhLGIpe3ZhciBjPXkoKTthLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgZD1IKGEsYik7Yy5zZXQoZCxhKX0pO3JldHVybiBuZXcgRyh6KGMpLGEudSgpKX07ZnVuY3Rpb24gcWgoYSxiKXt0aGlzLkhhPWE7dGhpcy5hYT1ifXFoLnByb3RvdHlwZS5iYj1nKFwiSGFcIik7cWgucHJvdG90eXBlLmRhPWcoXCJhYVwiKTtmdW5jdGlvbiByaCgpe0kuY2FsbCh0aGlzKX1yKHJoLEkpO2Z1bmN0aW9uIHNoKGEsYil7SS5jYWxsKHRoaXMpO3RoaXMudGFibGU9YTt0aGlzLnZhbHVlcz1ifXIoc2gscmgpO2Z1bmN0aW9uIHRoKGEsYil7c2guY2FsbCh0aGlzLGEsYil9cih0aCxzaCk7ZnVuY3Rpb24gdWgoYSl7SS5jYWxsKHRoaXMpO3RoaXMudGFibGU9YX1yKHVoLHJoKTt1aC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImRlbGV0ZShcIit0aGlzLnRhYmxlLmdldE5hbWUoKStcIilcIn07ZnVuY3Rpb24gdmgoYSl7SS5jYWxsKHRoaXMpO3RoaXMudGFibGU9YX1yKHZoLHJoKTt2aC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cInVwZGF0ZShcIit0aGlzLnRhYmxlLmdldE5hbWUoKStcIilcIn07XG5mdW5jdGlvbiB3aChhKXtJLmNhbGwodGhpcyk7dGhpcy5PPWF9cih3aCxyaCk7d2gucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJzZWxlY3QoXCIrdGhpcy5PLnRvU3RyaW5nKCkrXCIpXCJ9O2Z1bmN0aW9uIHhoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLnRhYmxlPWF9cih4aCxyaCk7eGgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9XCJ0YWJsZV9hY2Nlc3MoXCIrdGhpcy50YWJsZS5nZXROYW1lKCk7bnVsbD09PXRoaXMudGFibGUuS2F8fChhKz1cIiBhcyBcIit0aGlzLnRhYmxlLkthKTtyZXR1cm4gYStcIilcIn07ZnVuY3Rpb24geWgoKXtJLmNhbGwodGhpcyl9cih5aCxyaCk7eWgucHJvdG90eXBlLnRvU3RyaW5nPWsoXCJjcm9zc19wcm9kdWN0XCIpO2Z1bmN0aW9uIHpoKGEsYil7SS5jYWxsKHRoaXMpO3RoaXMuZj1hO3RoaXMuUGI9Yn1yKHpoLHJoKTtcbnpoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPVwicHJvamVjdChcIit0aGlzLmYudG9TdHJpbmcoKTtpZihudWxsIT09dGhpcy5QYil2YXIgYj10aGlzLlBiLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5qKCl9KS5qb2luKFwiLCBcIiksYT1hKyhcIiwgZ3JvdXBCeShcIitiK1wiKVwiKTtyZXR1cm4gYStcIilcIn07ZnVuY3Rpb24gQWgoYSl7SS5jYWxsKHRoaXMpO3RoaXMuTj1hfXIoQWgscmgpO0FoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwib3JkZXJfYnkoXCIrQWUodGhpcy5OKStcIilcIn07ZnVuY3Rpb24gQmgoYSl7SS5jYWxsKHRoaXMpO3RoaXMuZj1hfXIoQmgscmgpO0JoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiYWdncmVnYXRpb24oXCIrdGhpcy5mLnRvU3RyaW5nKCkrXCIpXCJ9O2Z1bmN0aW9uIENoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLmY9YX1yKENoLHJoKTtcbkNoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiZ3JvdXBfYnkoXCIrdGhpcy5mLnRvU3RyaW5nKCkrXCIpXCJ9O2Z1bmN0aW9uIERoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLlg9YX1yKERoLHJoKTtEaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImxpbWl0KFwiK3RoaXMuWCtcIilcIn07ZnVuY3Rpb24gRWgoYSl7SS5jYWxsKHRoaXMpO3RoaXMuTD1hfXIoRWgscmgpO0VoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwic2tpcChcIit0aGlzLkwrXCIpXCJ9O2Z1bmN0aW9uIEZoKGEsYil7SS5jYWxsKHRoaXMpO3RoaXMuTz1hO3RoaXMuUmI9Yn1yKEZoLHJoKTtGaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImpvaW4odHlwZTogXCIrKHRoaXMuUmI/XCJvdXRlclwiOlwiaW5uZXJcIikrXCIsIFwiK3RoaXMuTy50b1N0cmluZygpK1wiKVwifTtmdW5jdGlvbiBHaCgpe307ZnVuY3Rpb24gSGgoKXt9cihIaCxHaCk7SGgucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEpe3RoaXMuSD1hO3RoaXMudWIodGhpcy5IKTtyZXR1cm4gdGhpcy5IfTtIaC5wcm90b3R5cGUudWI9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIHdoKXt2YXIgYj1JaCh0aGlzLGEuTyksYj1KaCh0aGlzLGIpO01nKGEsYSxiWzBdLGJbMV0pO2E9PXRoaXMuSCYmKHRoaXMuSD1iWzBdKTthPWJbMF19SihhKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMudWIoYSl9LHRoaXMpfTtmdW5jdGlvbiBJaChhLGIpe2lmKDA9PUooYikubGVuZ3RofHxcImFuZFwiIT1iLnBiKXJldHVybltiXTthPUooYikuc2xpY2UoKS5tYXAoZnVuY3Rpb24oYSl7Yi5yZW1vdmVDaGlsZChhKTtyZXR1cm4gSWgodGhpcyxhKX0sYSk7cmV0dXJuIEVhKGEpfVxuZnVuY3Rpb24gSmgoYSxiKXt2YXIgYz1udWxsLGQ9bnVsbDtiLm1hcChmdW5jdGlvbihhLGIpe2E9bmV3IHdoKGEpOzA9PWI/Yz1hOksoZCxhKTtkPWF9LGEpO3JldHVybltjLGRdfTtmdW5jdGlvbiBLaCgpe31yKEtoLEdoKTtLaC5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXtpZigzPmIuZnJvbS5sZW5ndGgpcmV0dXJuIGE7dGhpcy5IPWE7dGhpcy51Yih0aGlzLkgpO3JldHVybiB0aGlzLkh9O0toLnByb3RvdHlwZS51Yj1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgeWgpZm9yKDsyPEooYSkubGVuZ3RoOyl7Zm9yKHZhciBiPW5ldyB5aCxjPTA7Mj5jO2MrKyl7dmFyIGQ9a2UoYSwwKTtLKGIsZCl9amUoYSxiLDApfUooYSkuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLnViKGEpfSx0aGlzKX07ZnVuY3Rpb24gTGgoKXtTLmNhbGwodGhpcywwLDApfXIoTGgsUyk7TGgucHJvdG90eXBlLnRvU3RyaW5nPWsoXCJjcm9zc19wcm9kdWN0XCIpO0xoLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXt2YXIgYj1hWzBdLGM9YVsxXTthPVtdO2Zvcih2YXIgZD1iLnUoKSxlPWMudSgpLGY9MDtmPGIuZW50cmllcy5sZW5ndGg7ZisrKWZvcih2YXIgaD0wO2g8Yy5lbnRyaWVzLmxlbmd0aDtoKyspe3ZhciBsPVZkKGIuZW50cmllc1tmXSxkLGMuZW50cmllc1toXSxlKTthLnB1c2gobCl9Yj1iLnUoKS5jb25jYXQoYy51KCkpO3JldHVybltuZXcgRyhhLGIpXX07ZnVuY3Rpb24gTWgoYSxiKXtEZS5jYWxsKHRoaXMsYSxiKTt0aGlzLklhPWEuYih6Yyk7dGhpcy5JYj1hLmIoQWMpfXIoTWgsRGUpO01oLnByb3RvdHlwZS5nZXRQcmlvcml0eT1rKDIpO01oLnByb3RvdHlwZS5nZT1mdW5jdGlvbihhKXswPT10aGlzLkcoKT9OaCh0aGlzLGEpOnRoaXMuTWMoKX07ZnVuY3Rpb24gTmgoYSxiKXthLnRkLmZvckVhY2goZnVuY3Rpb24oYSxkKXthIGluc3RhbmNlb2YgemUmJkdlKHRoaXMuSWIsYSxiW2RdKX0sYSl9TWgucHJvdG90eXBlLk1jPWZ1bmN0aW9uKCl7dmFyIGE9SWUodGhpcy5JYix0aGlzLmRhKCkpOzAhPWEubGVuZ3RoJiYoYT1uZXcgRmUodGhpcy5nbG9iYWwsYSksSmUodGhpcy5JYSxhKSl9O2Z1bmN0aW9uIE9oKGEpe3VlLmNhbGwodGhpcyxhKX1yKE9oLHVlKTtPaC5wcm90b3R5cGUuZGE9ZnVuY3Rpb24oKXt2YXIgYT1CKCk7YS5hZGQodGhpcy5mcm9tKTtQaCh0aGlzLHRoaXMuZnJvbS5nZXROYW1lKCksYSk7cmV0dXJuIGF9O2Z1bmN0aW9uIFBoKGEsYixjKXt2YXIgZD1RaChhLmJhLmluZm8oKSxiLDEpO1FoKGEuYmEuaW5mbygpLGIpLmZvckVhY2goYy5hZGQuYmluZChjKSk7ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe1BoKHRoaXMsYS5nZXROYW1lKCksYyl9LGEpfU9oLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBhPW5ldyBPaCh0aGlzLmJhKTt4ZShhLHRoaXMpO2EuZnJvbT10aGlzLmZyb207cmV0dXJuIGF9O09oLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe09oLmhiLmJpbmQuY2FsbCh0aGlzLGEpO3llKHRoaXMsYSk7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIFJoKGEpe3VlLmNhbGwodGhpcyxhKX1yKFJoLHVlKTtSaC5wcm90b3R5cGUuZGE9ZnVuY3Rpb24oKXt2YXIgYT1CKCk7YS5hZGQodGhpcy5MYSk7dmFyIGI9dGhpcy5iYS5pbmZvKCk7U2godGhpcy5MYS5nZXROYW1lKCksYi5nZikuZm9yRWFjaChhLmFkZC5iaW5kKGEpKTt0aGlzLmFjJiZRaChiLHRoaXMuTGEuZ2V0TmFtZSgpKS5mb3JFYWNoKGEuYWRkLmJpbmQoYSkpO3JldHVybiBhfTtSaC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgUmgodGhpcy5iYSk7eGUoYSx0aGlzKTthLkxhPXRoaXMuTGE7dGhpcy52YWx1ZXMmJihhLnZhbHVlcz10aGlzLnZhbHVlcyBpbnN0YW5jZW9mIFdkP3RoaXMudmFsdWVzOnRoaXMudmFsdWVzLnNsaWNlKCkpO2EuYWM9dGhpcy5hYzthLmJjPXRoaXMuYmM7cmV0dXJuIGF9O1xuUmgucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7UmguaGIuYmluZC5jYWxsKHRoaXMsYSk7dGhpcy5iYyYmKHRoaXMudmFsdWVzPXRoaXMuYmMgaW5zdGFuY2VvZiBXZD9hW3RoaXMuYmMuQ2EoKV06dGhpcy5iYy5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGIgaW5zdGFuY2VvZiBXZD9hW2IuQ2EoKV06Yn0pKTtyZXR1cm4gdGhpc307ZnVuY3Rpb24gVGgoYSl7dWUuY2FsbCh0aGlzLGEpfXIoVGgsdWUpO1RoLnByb3RvdHlwZS5kYT1mdW5jdGlvbigpe3ZhciBhPUIoKTthLmFkZCh0aGlzLnRhYmxlKTt2YXIgYj10aGlzLnNldC5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuSi5qKCl9KSxjPXRoaXMuYmEuaW5mbygpO1VoKGMsYikuZm9yRWFjaChhLmFkZC5iaW5kKGEpKTtWaChjLGIpLmZvckVhY2goYS5hZGQuYmluZChhKSk7cmV0dXJuIGF9O1RoLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBhPW5ldyBUaCh0aGlzLmJhKTt4ZShhLHRoaXMpO2EudGFibGU9dGhpcy50YWJsZTthLnNldD10aGlzLnNldD9XaCh0aGlzLnNldCk6dGhpcy5zZXQ7cmV0dXJuIGF9O1RoLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe1RoLmhiLmJpbmQuY2FsbCh0aGlzLGEpO3RoaXMuc2V0LmZvckVhY2goZnVuY3Rpb24oYil7LTEhPWIuVGMmJihiLnZhbHVlPWFbYi5UY10pfSk7eWUodGhpcyxhKTtyZXR1cm4gdGhpc307XG5mdW5jdGlvbiBXaChhKXtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9e30sZDtmb3IoZCBpbiBhKWJbZF09YVtkXTtyZXR1cm4gYn0pfTtmdW5jdGlvbiBYaChhLGIpe2lmKG51bGw9PWIpcmV0dXJuXCJOVUxMXCI7c3dpdGNoKGEpe2Nhc2UgMTpyZXR1cm4gYj8xOjA7Y2FzZSAzOmNhc2UgNDpyZXR1cm4gYjtjYXNlIDA6cmV0dXJuXCInXCIrbGMoYikrXCInXCI7ZGVmYXVsdDpyZXR1cm5cIidcIitiLnRvU3RyaW5nKCkrXCInXCJ9fWZ1bmN0aW9uIFloKGEsYil7dmFyIGM9YS5hYz9cIklOU0VSVCBPUiBSRVBMQUNFXCI6XCJJTlNFUlRcIixkPWEuTGEubGIoKSxjPWMrKFwiIElOVE8gXCIrYS5MYS5nZXROYW1lKCkrXCIoXCIpLGM9YytkLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXROYW1lKCl9KS5qb2luKFwiLCBcIiksYz1jK1wiKSBWQUxVRVMgKFwiO3JldHVybiBhLnZhbHVlcy5tYXAoZnVuY3Rpb24oYSl7dmFyIGU9ZC5tYXAoZnVuY3Rpb24oYyl7dmFyIGQ9YS5tW2MuZ2V0TmFtZSgpXTtyZXR1cm4gYj9udWxsIT1kP1wiI1wiOlwiTlVMTFwiOlhoKGMuRygpLGQpfSk7cmV0dXJuIGMrZS5qb2luKFwiLCBcIikrXCIpO1wifSkuam9pbihcIlxcblwiKX1cbmZ1bmN0aW9uIFpoKGEpe3N3aXRjaChhKXtjYXNlIFwiYmV0d2VlblwiOnJldHVyblwiQkVUV0VFTlwiO2Nhc2UgXCJlcVwiOnJldHVyblwiPVwiO2Nhc2UgXCJndGVcIjpyZXR1cm5cIj49XCI7Y2FzZSBcImd0XCI6cmV0dXJuXCI+XCI7Y2FzZSBcImluXCI6cmV0dXJuXCJJTlwiO2Nhc2UgXCJsdGVcIjpyZXR1cm5cIjw9XCI7Y2FzZSBcImx0XCI6cmV0dXJuXCI8XCI7Y2FzZSBcIm1hdGNoXCI6cmV0dXJuXCJMSUtFXCI7Y2FzZSBcIm5lcVwiOnJldHVyblwiPD5cIjtkZWZhdWx0OnJldHVyblwiVU5LTk9XTlwifX1mdW5jdGlvbiAkaChhLGIsYyxkKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFdkP1wiP1wiK2EuQ2EoKS50b1N0cmluZygpOmQ/bnVsbCE9YT9cIiNcIjpcIk5VTExcIjpcIm1hdGNoXCI9PWI/XCInXCIrYS50b1N0cmluZygpK1wiJ1wiOlwiaW5cIj09Yj9cIihcIithLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gWGgoYyxhKX0pLmpvaW4oXCIsIFwiKStcIilcIjpcImJldHdlZW5cIj09Yj9YaChjLGFbMF0pK1wiIEFORCBcIitYaChjLGFbMV0pOlhoKGMsYSkudG9TdHJpbmcoKX1cbmZ1bmN0aW9uIGFpKGEsYil7cmV0dXJuIEooYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVyblwiKFwiK2JpKGEsYikrXCIpXCJ9KS5qb2luKFwiYW5kXCI9PWEucGI/XCIgQU5EIFwiOlwiIE9SIFwiKX1mdW5jdGlvbiBjaShhKXtyZXR1cm5bYS5nYS5qKCksWmgoYS5GKSxhLm1hLmooKV0uam9pbihcIiBcIil9ZnVuY3Rpb24gYmkoYSxiKXtpZihhIGluc3RhbmNlb2YgcWUpe3ZhciBjPWEuSi5qKCksZD1aaChhLkYpO2E9JGgoYS52YWx1ZSxhLkYsYS5KLkcoKSxiKTtyZXR1cm5cIj1cIj09ZCYmXCJOVUxMXCI9PWE/W2MsXCJJUyBOVUxMXCJdLmpvaW4oXCIgXCIpOlwiPD5cIj09ZCYmXCJOVUxMXCI9PWE/W2MsXCJJUyBOT1QgTlVMTFwiXS5qb2luKFwiIFwiKTpbYyxkLGFdLmpvaW4oXCIgXCIpfWlmKGEgaW5zdGFuY2VvZiBPZylyZXR1cm4gYWkoYSxiKTtpZihhIGluc3RhbmNlb2YgUmcpcmV0dXJuIGNpKGEpO3Rocm93IG5ldyBEKDM1Nyx0eXBlb2YgYSk7fVxuZnVuY3Rpb24gZGkoYSxiKXtyZXR1cm4oYT1iaShhLGIpKT9cIiBXSEVSRSBcIithOlwiXCJ9ZnVuY3Rpb24gZWkoYSxiKXt2YXIgYz1cIlVQREFURSBcIithLnRhYmxlLmdldE5hbWUoKStcIiBTRVQgXCIsYz1jK2Euc2V0Lm1hcChmdW5jdGlvbihhKXt2YXIgYj1hLkouaigpK1wiID0gXCI7cmV0dXJuLTEhPWEuVGM/YitcIj9cIithLlRjLnRvU3RyaW5nKCk6YitYaChhLkouRygpLGEudmFsdWUpLnRvU3RyaW5nKCl9KS5qb2luKFwiLCBcIik7YS53JiYoYys9ZGkoYS53LGIpKTtyZXR1cm4gYytcIjtcIn1cbmZ1bmN0aW9uIGZpKGEsYil7dmFyIGM9XCIqXCI7YS5mLmxlbmd0aCYmKGM9YS5mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5LYT9hLmooKStcIiBBUyBcIithLkthOmEuaigpfSkuam9pbihcIiwgXCIpKTtjPVwiU0VMRUNUIFwiK2MrXCIgRlJPTSBcIjtudWxsIT1hLmViJiYwIT1hLmViLnNpemU/Yys9Z2koYSxiKTooYys9YS5mcm9tLm1hcChoaSkuam9pbihcIiwgXCIpLGEudyYmKGMrPWRpKGEudyxiKSkpO2EuTiYmKGI9YS5OLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5KLmooKSsoMD09YS5vcmRlcj9cIiBERVNDXCI6XCIgQVNDXCIpfSkuam9pbihcIiwgXCIpLGMrPVwiIE9SREVSIEJZIFwiK2IpO2EucmEmJihiPWEucmEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmooKX0pLmpvaW4oXCIsIFwiKSxjKz1cIiBHUk9VUCBCWSBcIitiKTthLlgmJihjKz1cIiBMSU1JVCBcIithLlgudG9TdHJpbmcoKSk7YS5MJiYoYys9XCIgU0tJUCBcIithLkwudG9TdHJpbmcoKSk7cmV0dXJuIGMrXCI7XCJ9XG5mdW5jdGlvbiBoaShhKXtyZXR1cm4gVGQoYSkhPWEuZ2V0TmFtZSgpP2EuZ2V0TmFtZSgpK1wiIEFTIFwiK1RkKGEpOmEuZ2V0TmFtZSgpfWZ1bmN0aW9uIGdpKGEsYil7Zm9yKHZhciBjPUhnKGEudyxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFJnfSksZD1jLm1hcChjaSksZT1oaShhLmZyb21bMF0pLGY9MTtmPGEuZnJvbS5sZW5ndGg7ZisrKXZhciBoPWhpKGEuZnJvbVtmXSksZT1hLmViLmhhcyhjW2QubGVuZ3RoLWZdLlcoKSk/ZSsoXCIgTEVGVCBPVVRFUiBKT0lOIFwiK2gpOmUrKFwiIElOTkVSIEpPSU4gXCIraCksZT1lKyhcIiBPTiAoXCIrZFtkLmxlbmd0aC1mXStcIilcIik7YT1hLnc7YT0wPEooYSkubGVuZ3RoP2llKGEsMCk6YTthIGluc3RhbmNlb2YgUmd8fChlKz1cIiBXSEVSRSBcIitiaShhLGIpKTtyZXR1cm4gZX1cbmZ1bmN0aW9uIGlpKGEsYil7Yj1ifHwhMTthPWEucXVlcnkuY2xvbmUoKTtpZihhIGluc3RhbmNlb2YgUmgpcmV0dXJuIFloKGEsYik7aWYoYSBpbnN0YW5jZW9mIE9oKXt2YXIgYz1cIkRFTEVURSBGUk9NIFwiK2EuZnJvbS5nZXROYW1lKCk7YS53JiYoYys9ZGkoYS53LGIpKTtyZXR1cm4gYytcIjtcIn1pZihhIGluc3RhbmNlb2YgVGgpcmV0dXJuIGVpKGEsYik7aWYoYSBpbnN0YW5jZW9mIHplKXJldHVybiBmaShhLGIpO3Rocm93IG5ldyBEKDM1OCx0eXBlb2YgYSk7fTtmdW5jdGlvbiBUKGEsYil7dGhpcy5nbG9iYWw9YTt0aGlzLkhnPWEuYih5Yyk7dGhpcy5JYT1hLmIoemMpO3RoaXMucXVlcnk9Yn1xKFwibGYucXVlcnkuQmFzZUJ1aWxkZXJcIixUKTtULnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKCl7dHJ5e3RoaXMuYWIoKX1jYXRjaChhKXtyZXR1cm4gYmIoYSl9cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IE1oKHRoaXMuZ2xvYmFsLFt0aGlzLkJjKCldKTtKZSh0aGlzLklhLGMpLnRoZW4oZnVuY3Rpb24oYil7YShKZChiWzBdKSl9LGIpfSx0aGlzKX07VC5wcm90b3R5cGUuZXhlYz1ULnByb3RvdHlwZS5leGVjO1QucHJvdG90eXBlLldmPWZ1bmN0aW9uKCl7dmFyIGE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuUGModGhpcy5xdWVyeSkrXCJcXG5cIn0uYmluZCh0aGlzKTtyZXR1cm4gTmcoamkodGhpcykuYmIoKSxhKX07VC5wcm90b3R5cGUuZXhwbGFpbj1ULnByb3RvdHlwZS5XZjtcblQucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7dGhpcy5xdWVyeS5iaW5kKGEpO3JldHVybiB0aGlzfTtULnByb3RvdHlwZS5iaW5kPVQucHJvdG90eXBlLmJpbmQ7VC5wcm90b3R5cGUuUGc9ZnVuY3Rpb24oYSl7cmV0dXJuIGlpKHRoaXMsYSl9O1QucHJvdG90eXBlLnRvU3FsPVQucHJvdG90eXBlLlBnO1QucHJvdG90eXBlLmFiPWFhKCk7ZnVuY3Rpb24gamkoYSl7aWYobnVsbD09YS5oZil7dmFyIGI7Yj1hLkhnO3ZhciBjPWEucXVlcnksZD1iLnFnLmNyZWF0ZShjKTtiPWIuRWcuY3JlYXRlKGQsYyk7YS5oZj1ifXJldHVybiBhLmhmfVQucHJvdG90eXBlLkJjPWZ1bmN0aW9uKCl7cmV0dXJue2NvbnRleHQ6dGhpcy5xdWVyeS5jbG9uZSgpLGplOmppKHRoaXMpfX07ZnVuY3Rpb24ga2koYSl7VC5jYWxsKHRoaXMsYSxuZXcgT2goYS5iKEJjKSkpfXIoa2ksVCk7cShcImxmLnF1ZXJ5LkRlbGV0ZUJ1aWxkZXJcIixraSk7a2kucHJvdG90eXBlLmZyb209ZnVuY3Rpb24oYSl7aWYobnVsbCE9dGhpcy5xdWVyeS5mcm9tKXRocm93IG5ldyBEKDUxNSk7dGhpcy5xdWVyeS5mcm9tPWE7cmV0dXJuIHRoaXN9O2tpLnByb3RvdHlwZS5mcm9tPWtpLnByb3RvdHlwZS5mcm9tO2tpLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe3RoaXMuRmQoKTt0aGlzLnF1ZXJ5Lnc9YTtyZXR1cm4gdGhpc307a2kucHJvdG90eXBlLndoZXJlPWtpLnByb3RvdHlwZS53O2tpLnByb3RvdHlwZS5GZD1mdW5jdGlvbigpe2lmKG51bGw9PXRoaXMucXVlcnkuZnJvbSl0aHJvdyBuZXcgRCg1NDgpO2lmKG51bGwhPXRoaXMucXVlcnkudyl0aHJvdyBuZXcgRCg1MTYpO307XG5raS5wcm90b3R5cGUuYWI9ZnVuY3Rpb24oKXtraS5oYi5hYi5jYWxsKHRoaXMpO2lmKG51bGw9PXRoaXMucXVlcnkuZnJvbSl0aHJvdyBuZXcgRCg1MTcpO307ZnVuY3Rpb24gbGkoYSxiKXtULmNhbGwodGhpcyxhLG5ldyBSaChhLmIoQmMpKSk7dGhpcy5xdWVyeS5hYz1ifHwhMX1yKGxpLFQpO3EoXCJsZi5xdWVyeS5JbnNlcnRCdWlsZGVyXCIsbGkpO2xpLnByb3RvdHlwZS5hYj1mdW5jdGlvbigpe2xpLmhiLmFiLmNhbGwodGhpcyk7dmFyIGE9dGhpcy5xdWVyeTtpZihudWxsPT1hLkxhfHxudWxsPT1hLnZhbHVlcyl0aHJvdyBuZXcgRCg1MTgpO2lmKGEuYWMmJm51bGw9PT1hLkxhLk1iLnNkKXRocm93IG5ldyBEKDUxOSk7fTtsaS5wcm90b3R5cGUuTGE9ZnVuY3Rpb24oYSl7aWYobnVsbCE9dGhpcy5xdWVyeS5MYSl0aHJvdyBuZXcgRCg1MjApO3RoaXMucXVlcnkuTGE9YTtyZXR1cm4gdGhpc307bGkucHJvdG90eXBlLmludG89bGkucHJvdG90eXBlLkxhO1xubGkucHJvdG90eXBlLnZhbHVlcz1mdW5jdGlvbihhKXtpZihudWxsIT10aGlzLnF1ZXJ5LnZhbHVlcyl0aHJvdyBuZXcgRCg1MjEpO2EgaW5zdGFuY2VvZiBXZHx8YS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgV2R9KT90aGlzLnF1ZXJ5LmJjPWE6dGhpcy5xdWVyeS52YWx1ZXM9YTtyZXR1cm4gdGhpc307bGkucHJvdG90eXBlLnZhbHVlcz1saS5wcm90b3R5cGUudmFsdWVzO2Z1bmN0aW9uIG1pKGEpe3JldHVybiBuaShcImFuZFwiLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfXEoXCJsZi5vcC5hbmRcIixtaSk7cShcImxmLm9wLm9yXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5pKFwib3JcIixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX0pO2Z1bmN0aW9uIG5pKGEsYil7dmFyIGM9bmV3IE9nKGEpO2IuZm9yRWFjaChmdW5jdGlvbihhKXtLKGMsYSl9KTtyZXR1cm4gY31xKFwibGYub3Aubm90XCIsZnVuY3Rpb24oYSl7YS52ZCghMCk7cmV0dXJuIGF9KTtmdW5jdGlvbiBVKGEsYil7VC5jYWxsKHRoaXMsYSxuZXcgemUoYS5iKEJjKSkpO3RoaXMuTWU9dGhpcy5BZD0hMTt0aGlzLnF1ZXJ5LmY9YjtvaSh0aGlzKTtwaSh0aGlzKX1yKFUsVCk7cShcImxmLnF1ZXJ5LlNlbGVjdEJ1aWxkZXJcIixVKTtVLnByb3RvdHlwZS5hYj1mdW5jdGlvbigpe1UuaGIuYWIuY2FsbCh0aGlzKTt2YXIgYT10aGlzLnF1ZXJ5O2lmKG51bGw9PWEuZnJvbSl0aHJvdyBuZXcgRCg1MjIpO2lmKG4oYS5TYikmJiFuKGEuWCl8fG4oYS5aYikmJiFuKGEuTCkpdGhyb3cgbmV3IEQoNTIzKTtudWxsIT10aGlzLnF1ZXJ5LnJhP3FpKHRoaXMpOnJpKHRoaXMpfTtmdW5jdGlvbiBvaShhKXt2YXIgYj1hLnF1ZXJ5LmYuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgUiYmXCJESVNUSU5DVFwiPT1hLkxifSxhKTtpZigwIT1iLmxlbmd0aCYmKDEhPWIubGVuZ3RofHwxIT1hLnF1ZXJ5LmYubGVuZ3RoKSl0aHJvdyBuZXcgRCg1MjQpO31cbmZ1bmN0aW9uIHFpKGEpe2lmKGEucXVlcnkucmEuc29tZShmdW5jdGlvbihhKXthPWEuRygpO3JldHVybiA2PT1hfHwwPT1hfSkpdGhyb3cgbmV3IEQoNTI1KTt9ZnVuY3Rpb24gcmkoYSl7dmFyIGI9YS5xdWVyeS5mLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBSfSxhKTthPWEucXVlcnkuZi5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiEoYSBpbnN0YW5jZW9mIFIpfSxhKXx8MD09YS5xdWVyeS5mLmxlbmd0aDtpZihiJiZhKXRocm93IG5ldyBEKDUyNik7fWZ1bmN0aW9uIHBpKGEpe2EucXVlcnkuZi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBSJiYhc2koYS5MYixhLkcoKSkpdGhyb3cgbmV3IEQoNTI3LGEuaigpKTt9LGEpfWZ1bmN0aW9uIHRpKGEsYil7aWYobnVsbD09YS5xdWVyeS5mcm9tKXRocm93IG5ldyBEKGIpO31cblUucHJvdG90eXBlLmZyb209ZnVuY3Rpb24oYSl7aWYodGhpcy5NZSl0aHJvdyBuZXcgRCg1MTUpO3RoaXMuTWU9ITA7bnVsbD09dGhpcy5xdWVyeS5mcm9tJiYodGhpcy5xdWVyeS5mcm9tPVtdKTt0aGlzLnF1ZXJ5LmZyb20ucHVzaC5hcHBseSh0aGlzLnF1ZXJ5LmZyb20sQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLmZyb209VS5wcm90b3R5cGUuZnJvbTtVLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe3RpKHRoaXMsNTQ4KTtpZih0aGlzLkFkKXRocm93IG5ldyBEKDUxNik7dGhpcy5BZD0hMDt1aSh0aGlzLGEpO3JldHVybiB0aGlzfTtVLnByb3RvdHlwZS53aGVyZT1VLnByb3RvdHlwZS53O2Z1bmN0aW9uIHVpKGEsYil7bnVsbCE9YS5xdWVyeS53JiYoYj1taShiLGEucXVlcnkudykpO2EucXVlcnkudz1ifVxuVS5wcm90b3R5cGUuaGc9ZnVuY3Rpb24oYSxiKXt0aSh0aGlzLDU0Mik7aWYodGhpcy5BZCl0aHJvdyBuZXcgRCg1NDcpO3RoaXMucXVlcnkuZnJvbS5wdXNoKGEpO3VpKHRoaXMsYik7cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLmlubmVySm9pbj1VLnByb3RvdHlwZS5oZztVLnByb3RvdHlwZS5vZz1mdW5jdGlvbihhLGIpe3RpKHRoaXMsNTQyKTtpZighKGIgaW5zdGFuY2VvZiBSZykpdGhyb3cgbmV3IEQoNTQxKTtpZih0aGlzLkFkKXRocm93IG5ldyBEKDU0Nyk7dGhpcy5xdWVyeS5mcm9tLnB1c2goYSk7bnVsbD09dGhpcy5xdWVyeS5lYiYmKHRoaXMucXVlcnkuZWI9QigpKTt2YXIgYz1iO1RkKGEpIT1UZChiLm1hLkkoKSkmJihjPWIucmV2ZXJzZSgpKTt0aGlzLnF1ZXJ5LmViLmFkZChjLlcoKSk7dWkodGhpcyxjKTtyZXR1cm4gdGhpc307VS5wcm90b3R5cGUubGVmdE91dGVySm9pbj1VLnByb3RvdHlwZS5vZztcblUucHJvdG90eXBlLlg9ZnVuY3Rpb24oYSl7aWYobnVsbCE9KHRoaXMucXVlcnkuWHx8dGhpcy5xdWVyeS5TYikpdGhyb3cgbmV3IEQoNTI4KTtpZihhIGluc3RhbmNlb2YgV2QpdGhpcy5xdWVyeS5TYj1hO2Vsc2V7aWYoMD5hKXRocm93IG5ldyBEKDUzMSk7dGhpcy5xdWVyeS5YPWF9cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLmxpbWl0PVUucHJvdG90eXBlLlg7VS5wcm90b3R5cGUuTD1mdW5jdGlvbihhKXtpZihudWxsIT0odGhpcy5xdWVyeS5MfHx0aGlzLnF1ZXJ5LlpiKSl0aHJvdyBuZXcgRCg1MjkpO2lmKGEgaW5zdGFuY2VvZiBXZCl0aGlzLnF1ZXJ5LlpiPWE7ZWxzZXtpZigwPmEpdGhyb3cgbmV3IEQoNTMxKTt0aGlzLnF1ZXJ5Lkw9YX1yZXR1cm4gdGhpc307VS5wcm90b3R5cGUuc2tpcD1VLnByb3RvdHlwZS5MO1xuVS5wcm90b3R5cGUuTj1mdW5jdGlvbihhLGIpe3RpKHRoaXMsNTQ5KTtudWxsPT10aGlzLnF1ZXJ5Lk4mJih0aGlzLnF1ZXJ5Lk49W10pO3RoaXMucXVlcnkuTi5wdXNoKHtKOmEsb3JkZXI6bnVsbCE9Yj9iOjF9KTtyZXR1cm4gdGhpc307VS5wcm90b3R5cGUub3JkZXJCeT1VLnByb3RvdHlwZS5OO1UucHJvdG90eXBlLnJhPWZ1bmN0aW9uKGEpe3RpKHRoaXMsNTQ5KTtpZihudWxsIT10aGlzLnF1ZXJ5LnJhKXRocm93IG5ldyBEKDUzMCk7bnVsbD09dGhpcy5xdWVyeS5yYSYmKHRoaXMucXVlcnkucmE9W10pO3RoaXMucXVlcnkucmEucHVzaC5hcHBseSh0aGlzLnF1ZXJ5LnJhLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO3JldHVybiB0aGlzfTtVLnByb3RvdHlwZS5ncm91cEJ5PVUucHJvdG90eXBlLnJhO1xuZnVuY3Rpb24gc2koYSxiKXtzd2l0Y2goYSl7Y2FzZSBcIkNPVU5UXCI6Y2FzZSBcIkRJU1RJTkNUXCI6cmV0dXJuITA7Y2FzZSBcIkFWR1wiOmNhc2UgXCJHRU9NRUFOXCI6Y2FzZSBcIlNURERFVlwiOmNhc2UgXCJTVU1cIjpyZXR1cm4gND09Ynx8Mz09YjtjYXNlIFwiTUFYXCI6Y2FzZSBcIk1JTlwiOnJldHVybiA0PT1ifHwzPT1ifHw1PT1ifHwyPT1ifXJldHVybiExfVUucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IFUodGhpcy5nbG9iYWwsdGhpcy5xdWVyeS5mKTthLnF1ZXJ5PXRoaXMucXVlcnkuY2xvbmUoKTthLnF1ZXJ5LldjPW51bGw7cmV0dXJuIGF9O1UucHJvdG90eXBlLmNsb25lPVUucHJvdG90eXBlLmNsb25lO2Z1bmN0aW9uIHZpKGEsYil7VC5jYWxsKHRoaXMsYSxuZXcgVGgoYS5iKEJjKSkpO3RoaXMucXVlcnkudGFibGU9Yn1yKHZpLFQpO3EoXCJsZi5xdWVyeS5VcGRhdGVCdWlsZGVyXCIsdmkpO3ZpLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXthPXtUYzpiIGluc3RhbmNlb2YgV2Q/Yi5DYSgpOi0xLEo6YSx2YWx1ZTpifTtudWxsIT10aGlzLnF1ZXJ5LnNldD90aGlzLnF1ZXJ5LnNldC5wdXNoKGEpOnRoaXMucXVlcnkuc2V0PVthXTtyZXR1cm4gdGhpc307dmkucHJvdG90eXBlLnNldD12aS5wcm90b3R5cGUuc2V0O3ZpLnByb3RvdHlwZS53PWZ1bmN0aW9uKGEpe3RoaXMuRmQoKTt0aGlzLnF1ZXJ5Lnc9YTtyZXR1cm4gdGhpc307dmkucHJvdG90eXBlLndoZXJlPXZpLnByb3RvdHlwZS53O3ZpLnByb3RvdHlwZS5GZD1mdW5jdGlvbigpe2lmKG51bGwhPXRoaXMucXVlcnkudyl0aHJvdyBuZXcgRCg1MTYpO307XG52aS5wcm90b3R5cGUuYWI9ZnVuY3Rpb24oKXt2aS5oYi5hYi5jYWxsKHRoaXMpO2lmKG51bGw9PXRoaXMucXVlcnkuc2V0KXRocm93IG5ldyBEKDUzMik7aWYodGhpcy5xdWVyeS5zZXQuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZSBpbnN0YW5jZW9mIFdkfSkpdGhyb3cgbmV3IEQoNTAxKTt9O2Z1bmN0aW9uIHdpKGEpe3RoaXMucXVlcnk9YTt0aGlzLkhhPW51bGx9d2kucHJvdG90eXBlLmdjPWZ1bmN0aW9uKCl7bnVsbD09PXRoaXMuSGEmJih0aGlzLkhhPXRoaXMuYWQoKSk7cmV0dXJuIHRoaXMuSGF9O2Z1bmN0aW9uIHhpKGEpe3dpLmNhbGwodGhpcyxhKX1yKHhpLHdpKTt4aS5wcm90b3R5cGUuYWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5xdWVyeS5hYz9uZXcgdGgodGhpcy5xdWVyeS5MYSx0aGlzLnF1ZXJ5LnZhbHVlcyk6bmV3IHNoKHRoaXMucXVlcnkuTGEsdGhpcy5xdWVyeS52YWx1ZXMpfTtmdW5jdGlvbiB5aShhKXt3aS5jYWxsKHRoaXMsYSl9cih5aSx3aSk7eWkucHJvdG90eXBlLmFkPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IHZoKHRoaXMucXVlcnkudGFibGUpLGI9bnVsbCE9dGhpcy5xdWVyeS53P25ldyB3aCh0aGlzLnF1ZXJ5LncuTmIoKSk6bnVsbCxjPW5ldyB4aCh0aGlzLnF1ZXJ5LnRhYmxlKTtudWxsPT09Yj9LKGEsYyk6KEsoYixjKSxLKGEsYikpO3JldHVybiBhfTtmdW5jdGlvbiB6aShhLGIsYyl7dGhpcy5IYT1hO3RoaXMubGU9Yjt0aGlzLlZiPWN9emkucHJvdG90eXBlLmdjPWZ1bmN0aW9uKCl7dGhpcy5WYi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuSGE9YS5nYih0aGlzLkhhLHRoaXMubGUpfSx0aGlzKTtyZXR1cm4gdGhpcy5IYX07ZnVuY3Rpb24gQWkoYSxiKXt3aS5jYWxsKHRoaXMsYSk7dGhpcy5WYj1ifXIoQWksd2kpO0FpLnByb3RvdHlwZS5hZD1mdW5jdGlvbigpe3ZhciBhPW5ldyB1aCh0aGlzLnF1ZXJ5LmZyb20pLGI9bnVsbCE9dGhpcy5xdWVyeS53P25ldyB3aCh0aGlzLnF1ZXJ5LncuTmIoKSk6bnVsbCxjPW5ldyB4aCh0aGlzLnF1ZXJ5LmZyb20pO251bGw9PT1iP0soYSxjKTooSyhiLGMpLEsoYSxiKSk7cmV0dXJuKG5ldyB6aShhLHRoaXMucXVlcnksdGhpcy5WYikpLmdjKCl9O2Z1bmN0aW9uIEJpKCl7fXIoQmksR2gpO0JpLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe2lmKDI+Yi5mcm9tLmxlbmd0aClyZXR1cm4gYTt0aGlzLkg9YTt0aGlzLnViKHRoaXMuSCxiKTtyZXR1cm4gdGhpcy5IfTtCaS5wcm90b3R5cGUudWI9ZnVuY3Rpb24oYSxiKXtpZihhIGluc3RhbmNlb2Ygd2gmJmEuTyBpbnN0YW5jZW9mIFJnKXt2YXIgYz1hLk8uVygpLGQ9aWUoYSwwKTtkIGluc3RhbmNlb2YgeWgmJihjPW51bGwhPWIuZWImJmIuZWIuaGFzKGMpLGM9bmV3IEZoKGEuTyxjKSxNZyhhLGQsYyxjKSxhPT10aGlzLkgmJih0aGlzLkg9YyksYT1jKX1KKGEpLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy51YihhLGIpfSx0aGlzKX07ZnVuY3Rpb24gQ2koKXt0aGlzLlNjPUIoKX1yKENpLEdoKTtDaS5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXtpZighbihiLncpKXJldHVybiBhO3RoaXMuU2MuY2xlYXIoKTt0aGlzLkg9YTt0aGlzLnViKHRoaXMuSCxiKTt0aGlzLlNjLmNsZWFyKCk7cmV0dXJuIHRoaXMuSH07Q2kucHJvdG90eXBlLnViPWZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7SihhKS5mb3JFYWNoKGQpfS5iaW5kKHRoaXMpLGQ9ZnVuY3Rpb24oYSl7aWYoIXRoaXMuU2MuaGFzKGEpKXtpZihhIGluc3RhbmNlb2Ygd2gpe3ZhciBlPWEuTy51KCksaD1mdW5jdGlvbihhKXtyZXR1cm4gRGkodGhpcyxhLGUpfS5iaW5kKHRoaXMpLGg9RWkodGhpcyxiLGEsaCk7dGhpcy5TYy5hZGQoYSk7aCE9YSYmKG51bGw9PT1oLmdldFBhcmVudCgpJiYodGhpcy5IPWgpLGQoaCkpfWMoYSl9fS5iaW5kKHRoaXMpO2QoYSl9O1xuZnVuY3Rpb24gRWkoYSxiLGMsZCl7dmFyIGU9YztpZihGaShiLGMpKWU9S2coYyksRWkoYSxiLGMsZCk7ZWxzZSBpZihHaShjKSl7dmFyIGY9W10sZT1MZyhjLGQsZnVuY3Rpb24oYSl7YT1uZXcgd2goYS5PKTtmLnB1c2goYSk7cmV0dXJuIGF9KTtmLmZvckVhY2goZnVuY3Rpb24oYSl7RWkodGhpcyxiLGEsZCl9LGEpfXJldHVybiBlfWZ1bmN0aW9uIERpKGEsYixjKXt2YXIgZD1CKCk7R2coYikuZm9yRWFjaChmdW5jdGlvbihhKXtkLmFkZChhLnRhYmxlKX0sYSk7YiBpbnN0YW5jZW9mIHhoJiZkLmFkZChiLnRhYmxlKTtyZXR1cm4gSGMoZCxjKX1mdW5jdGlvbiBHaShhKXthPWllKGEsMCk7cmV0dXJuIGEgaW5zdGFuY2VvZiB5aHx8YSBpbnN0YW5jZW9mIEZofVxuZnVuY3Rpb24gRmkoYSxiKXt2YXIgYz1pZShiLDApO2lmKCEoYyBpbnN0YW5jZW9mIHdoKSlyZXR1cm4hMTtpZihudWxsPT1hLmViKXJldHVybiEwO2I9Yi5PIGluc3RhbmNlb2YgUmc7YT1hLmViLmhhcyhjLk8uVygpKTtyZXR1cm4gYnx8IWF9O2Z1bmN0aW9uIEhpKGEsYil7d2kuY2FsbCh0aGlzLGEpO3RoaXMuVmI9Yjt0aGlzLmtmPXRoaXMuY2Y9dGhpcy50Zj10aGlzLmZmPXRoaXMuRGU9dGhpcy5TZT10aGlzLnNmPXRoaXMuSmU9dGhpcy52Zj1udWxsfXIoSGksd2kpO1xuSGkucHJvdG90eXBlLmFkPWZ1bmN0aW9uKCl7SWkodGhpcyk7Mjw9dGhpcy5xdWVyeS5mcm9tLmxlbmd0aCYmKHRoaXMuSmU9bmV3IHloKTt0aGlzLnNmPW51bGwhPXRoaXMucXVlcnkudz9uZXcgd2godGhpcy5xdWVyeS53Lk5iKCkpOm51bGw7dGhpcy5xdWVyeS5OJiYodGhpcy5mZj1uZXcgQWgodGhpcy5xdWVyeS5OKSk7bnVsbCE9dGhpcy5xdWVyeS5MJiYwPHRoaXMucXVlcnkuTCYmKHRoaXMudGY9bmV3IEVoKHRoaXMucXVlcnkuTCkpO251bGwhPXRoaXMucXVlcnkuWCYmKHRoaXMuY2Y9bmV3IERoKHRoaXMucXVlcnkuWCkpO251bGwhPXRoaXMucXVlcnkucmEmJih0aGlzLlNlPW5ldyBDaCh0aGlzLnF1ZXJ5LnJhKSk7SmkodGhpcyk7dGhpcy5rZj1uZXcgemgodGhpcy5xdWVyeS5mfHxbXSx0aGlzLnF1ZXJ5LnJhfHxudWxsKTt2YXIgYT1LaSh0aGlzKTtyZXR1cm4obmV3IHppKGEsdGhpcy5xdWVyeSx0aGlzLlZiKSkuZ2MoKX07XG5mdW5jdGlvbiBLaShhKXtmb3IodmFyIGI9W2EuY2YsYS50ZixhLmtmLGEuZmYsYS5EZSxhLlNlLGEuc2YsYS5KZV0sYz0tMSxkPW51bGwsZT0wO2U8Yi5sZW5ndGg7ZSsrKXt2YXIgZj1iW2VdO251bGwhPT1mJiYobnVsbD09PWQ/ZD1mOksoYltjXSxmKSxjPWUpfWEudmYuZm9yRWFjaChmdW5jdGlvbihhKXtLKGJbY10sYSl9KTtyZXR1cm4gZH1mdW5jdGlvbiBJaShhKXthLnZmPWEucXVlcnkuZnJvbS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB4aChhKX0sYSl9ZnVuY3Rpb24gSmkoYSl7dmFyIGI9YS5xdWVyeS5mLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFJ9KTtudWxsIT1hLnF1ZXJ5Lk4mJmEucXVlcnkuTi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuSiBpbnN0YW5jZW9mIFImJmIucHVzaChhLkopfSk7MDxiLmxlbmd0aCYmKGEuRGU9bmV3IEJoKGIpKX07ZnVuY3Rpb24gTGkoKXt0aGlzLnJlPVtuZXcgSGgsbmV3IEtoLG5ldyBDaSxuZXcgQmldO3RoaXMuUGQ9W25ldyBIaF19TGkucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbihhKXt2YXIgYjtpZihhIGluc3RhbmNlb2YgUmgpYj1uZXcgeGkoYSk7ZWxzZSBpZihhIGluc3RhbmNlb2YgT2gpYj1uZXcgQWkoYSx0aGlzLlBkKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiB6ZSliPW5ldyBIaShhLHRoaXMucmUpO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIFRoKWI9bmV3IHlpKGEpO2Vsc2UgdGhyb3cgbmV3IEQoNTEzKTtiPWIuZ2MoKTtyZXR1cm4gbmV3IHFoKGIsYS5kYSgpKX07ZnVuY3Rpb24gTWkoYSl7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLlU9YX1yKE1pLFMpO01pLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiZGVsZXRlKFwiK3RoaXMuVS5nZXROYW1lKCkrXCIpXCJ9O01pLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIpe2E9YVswXS5lbnRyaWVzLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS52YX0pO2IucmVtb3ZlKHRoaXMuVSxhKTtyZXR1cm5bTmQoKV19O2Z1bmN0aW9uIE5pKGEsYil7Uy5jYWxsKHRoaXMsMCwtMSk7dGhpcy50YWJsZT1iO3RoaXMuQz1hLmIoeGMpfXIoTmksUyk7TmkucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJnZXRfcm93X2NvdW50KFwiK3RoaXMudGFibGUuZ2V0TmFtZSgpK1wiKVwifTtOaS5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkMuZ2V0KG5mKHRoaXMudGFibGUpKSxiPW5ldyBHKFtdLFt0aGlzLnRhYmxlLmdldE5hbWUoKV0pLGM9YmgoKSxhPWEuWSgpLmlhO251bGw9PT1iLiRhJiYoYi4kYT15KCkpO2IuJGEuc2V0KGMuaigpLGEpO3JldHVybltiXX07ZnVuY3Rpb24gT2koYSxiKXtTLmNhbGwodGhpcywwLC0xKTt0aGlzLlY9YS5iKHdjKTt0aGlzLkM9YS5iKHhjKTt0aGlzLnRhYmxlPWJ9cihPaSxTKTtPaS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1cInRhYmxlX2FjY2VzcyhcIit0aGlzLnRhYmxlLmdldE5hbWUoKTtudWxsPT09dGhpcy50YWJsZS5LYXx8KGErPVwiIGFzIFwiK3RoaXMudGFibGUuS2EpO3JldHVybiBhK1wiKVwifTtPaS5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkMuZ2V0KG5mKHRoaXMudGFibGUpKS5WYSgpO3JldHVybltRZChFZih0aGlzLlYsYSksW1RkKHRoaXMudGFibGUpXSldfTtmdW5jdGlvbiBQaShhKXt0aGlzLmM9YX1yKFBpLEdoKTtQaS5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXt0aGlzLkg9YTtpZighdGhpcy5IZChiKSlyZXR1cm4gYTthPUhnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBPaX0pWzBdO2I9bmV3IE5pKHRoaXMuYyxhLnRhYmxlKTtNZyhhLGEsYixiKTtyZXR1cm4gdGhpcy5IfTtQaS5wcm90b3R5cGUuSGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PWEuZi5sZW5ndGgmJjE9PWEuZnJvbS5sZW5ndGgmJm51bGw9PWEudyYmbnVsbD09YS5YJiZudWxsPT1hLkwmJm51bGw9PWEucmE/KGE9YS5mWzBdLGEgaW5zdGFuY2VvZiBSJiZcIkNPVU5UXCI9PWEuTGImJmEuY2hpbGQgaW5zdGFuY2VvZiBhaCk6ITF9O2Z1bmN0aW9uIFFpKGEpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5SZT1hfXIoUWksUyk7UWkucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJncm91cEJ5KFwiK3RoaXMuUmUubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmooKX0pLnRvU3RyaW5nKCkrXCIpXCJ9O1FpLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXtyZXR1cm4gUmkodGhpcyxhWzBdKX07ZnVuY3Rpb24gUmkoYSxiKXt2YXIgYz1uZXcgY2QsZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5SZS5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIEgoYSxiKX0sdGhpcykuam9pbihcIixcIil9LmJpbmQoYSk7Yi5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5zZXQoZChhKSxhKX0sYSk7cmV0dXJuIGMua2V5cygpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IEcoYy5nZXQoYSksYi51KCkpfSxhKX07ZnVuY3Rpb24gU2koYSxiLGMpe1MuY2FsbCh0aGlzLDAsMCk7dGhpcy5DPWEuYih4Yyk7dGhpcy5WPWEuYih3Yyk7dGhpcy5PPWI7dGhpcy5SYj1jO3RoaXMuRGQ9XCJlcVwiPT10aGlzLk8uRj8wOjI7dGhpcy5VZT1udWxsfXIoU2ksUyk7dmFyIFRpPVtcImhhc2hcIixcImluZGV4X25lc3RlZF9sb29wXCIsXCJuZXN0ZWRfbG9vcFwiXTtTaS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImpvaW4odHlwZTogXCIrKHRoaXMuUmI/XCJvdXRlclwiOlwiaW5uZXJcIikrXCIsIGltcGw6IFwiK1RpW3RoaXMuRGRdK1wiLCBcIit0aGlzLk8udG9TdHJpbmcoKStcIilcIn07XG5TaS5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7c3dpdGNoKHRoaXMuRGQpe2Nhc2UgMDpyZXR1cm5bVmcodGhpcy5PLGFbMF0sYVsxXSx0aGlzLlJiKV07Y2FzZSAxOnJldHVybltXZyh0aGlzLk8sYVswXSxhWzFdLHRoaXMuVWUsdGhpcy5WKV07ZGVmYXVsdDp2YXIgYj10aGlzLk8sYz1hWzBdO2E9YVsxXTt2YXIgZD10aGlzLlJiLGU9W2MsYV07ZHx8KGU9U2coYixjLGEpKTtjPWVbMF07YT1lWzFdO2Zvcih2YXIgZT1bXSxmPWMudSgpLGg9YS51KCksbD1jLmVudHJpZXMubGVuZ3RoLHA9YS5lbnRyaWVzLmxlbmd0aCxMPXArMjU2LTE+Pjgsc2E9MDtzYTxMOyl7Zm9yKHZhciBjYT0wO2NhPGw7Y2ErKyl7dmFyIENiPSExLGRnPUgoYy5lbnRyaWVzW2NhXSxiLmdhKTtpZihudWxsIT09ZGcpZm9yKHZhciBXaT1NYXRoLm1pbihzYSsxPDw4LHApLERiPXNhPDw4O0RiPFdpO0RiKyspaWYoYi52YyhkZyxIKGEuZW50cmllc1tEYl0sYi5tYSkpKXt2YXIgQ2I9ITAsVGM9VmQoYy5lbnRyaWVzW2NhXSxcbmYsYS5lbnRyaWVzW0RiXSxoKTtlLnB1c2goVGMpfWQmJiFDYiYmZS5wdXNoKFVnKGIsYy5lbnRyaWVzW2NhXSxmKSl9c2ErK31iPWMudSgpLmNvbmNhdChhLnUoKSk7cmV0dXJuW25ldyBHKGUsYildfX07ZnVuY3Rpb24gVWkoYSxiKXthLkRkPTE7dmFyIGM9YS5DLmdldChiLkNhKCkuaigpKTthLlVlPXtkZzpiLHdnOmI9PWEuTy5nYT9hLk8ubWE6YS5PLmdhLGluZGV4OmN9fTtmdW5jdGlvbiBWaShhKXtTLmNhbGwodGhpcywwLC0xKTt0aGlzLmxmPWF9cihWaSxTKTtWaS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIm5vX29wX3N0ZXAoXCIrdGhpcy5sZlswXS51KCkuam9pbihcIixcIikrXCIpXCJ9O1ZpLnByb3RvdHlwZS5jYT1nKFwibGZcIik7ZnVuY3Rpb24gWGkoKXt9cihYaSxHaCk7WGkucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7dGhpcy5IPWE7aWYoIXRoaXMuSGQoYikpcmV0dXJuIGE7SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFNpfSkuZm9yRWFjaCh0aGlzLkdnLHRoaXMpO3JldHVybiB0aGlzLkh9O1hpLnByb3RvdHlwZS5IZD1mdW5jdGlvbihhKXtyZXR1cm4gMTxhLmZyb20ubGVuZ3RofTtcblhpLnByb3RvdHlwZS5HZz1mdW5jdGlvbihhKXtpZihcImVxXCI9PWEuTy5GJiYhYS5SYil7dmFyIGI9ZnVuY3Rpb24oYil7aWYoIShiIGluc3RhbmNlb2YgT2kpKXJldHVybiBudWxsO2I9VGQoYi50YWJsZSk9PVRkKGEuTy5tYS5JKCkpP2EuTy5tYTphLk8uZ2E7cmV0dXJuIG51bGw9PT1iLkNhKCk/bnVsbDpifSxjPWIoaWUoYSwwKSksYj1iKGllKGEsMSkpO2lmKG51bGwhPT1jfHxudWxsIT09Yil7Yj1udWxsPT09Yj9jOmI7VWkoYSxiKTt2YXIgZD1uZXcgRyhbXSxbVGQoYi5JKCkpXSk7bGUoYSxuZXcgVmkoW2RdKSxiPT1jPzA6MSl9fX07ZnVuY3Rpb24gWWkoYSl7YT1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5xYSgpfSk7YT15Yi5hcHBseShudWxsLGEpO3ZhciBiPVtdO3hiKGEsZnVuY3Rpb24oYSl7Yi5wdXNoKGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gWmkoYSl7dGhpcy5RYj1hfVppLnByb3RvdHlwZS5iZD1mdW5jdGlvbigpe3JldHVybiAxPT10aGlzLlFiLmYubGVuZ3RoP1tEZCgpXTpbdGhpcy5RYi5mLm1hcChmdW5jdGlvbigpe3JldHVybiBEZCgpfSldfTtmdW5jdGlvbiAkaShhLGIpe3RoaXMuUWI9YTt0aGlzLkdhPWI7dGhpcy5MZD10aGlzLmFmPW51bGx9XG5mdW5jdGlvbiBhaihhLGIpe3ZhciBjPXkoKTthLkdhLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBkPXRoaXMuR2EuZ2V0KGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdmUoYixhKX0sdGhpcyksZj1uZXcgSGQoW0RkKCldKTtkLmZvckVhY2goZnVuY3Rpb24oYSl7Zj1JZChmLGEud2UoKSl9KTtjLnNldChhLGYpfSxhKTtyZXR1cm4gY30kaS5wcm90b3R5cGUuYmQ9ZnVuY3Rpb24oYSl7aWYodGhpcy5hZj09YSlyZXR1cm4gdGhpcy5MZDtmb3IodmFyIGI9YWoodGhpcyxhKSxjPXRoaXMuUWIuZi5sZW5ndGgtMTswPD1jO2MtLSl7dmFyIGQ9dGhpcy5RYi5mW2NdO2lmKG51bGwhPT0oYi5nZXQoZC5iYS5nZXROYW1lKCkpfHxudWxsKSlicmVhaztiLnNldChkLmJhLmdldE5hbWUoKSxuZXcgSGQoW0RkKCldKSl9dGhpcy5MZD0xPT10aGlzLlFiLmYubGVuZ3RoP3ooYilbMF0ucWEoKTpZaShiaih0aGlzLGIpKTt0aGlzLmFmPWE7cmV0dXJuIHRoaXMuTGR9O1xuZnVuY3Rpb24gYmooYSxiKXt2YXIgYz15KCksZD0wO2EuUWIuZi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Muc2V0KGEuYmEuZ2V0TmFtZSgpLGQpO2QrK30pO3JldHVybiBnYyhiKS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGMuZ2V0KGEpLWMuZ2V0KGIpfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBiLmdldChhKX0pfTtmdW5jdGlvbiBjaihhLGIpe3RoaXMueGQ9Yjt0aGlzLkM9YS5iKHhjKX1mdW5jdGlvbiBkaihhKXthPWEuQy5nZXQobmYoYS54ZCkpO3JldHVybiBNYXRoLmZsb29yKC4wMiphLlkoKS5pYSl9ZnVuY3Rpb24gZWooYSxiLGMpe2M9Yy5maWx0ZXIoYS5rZyxhKTtpZigwPT1jLmxlbmd0aClyZXR1cm4gbnVsbDthPWZqKGEsYyk7aWYoMD09YS5sZW5ndGgpcmV0dXJuIG51bGw7aWYoMT09YS5sZW5ndGgpcmV0dXJuIGFbMF07dmFyIGQ9TnVtYmVyLk1BWF9WQUxVRTtyZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24oYSxjKXt2YXIgZT1naihjLGIpO3JldHVybiBlPGQ/KGQ9ZSxjKTphfSxudWxsKX1cbmZ1bmN0aW9uIGZqKGEsYil7cmV0dXJuIGEueGQuRGEoKS5tYXAoZnVuY3Rpb24oYSl7YT1uZXcgaGoodGhpcy5DLGEpO2lqKGEsYik7cmV0dXJuIGF9LGEpLmZpbHRlcihmdW5jdGlvbihhKXtpZihudWxsPT09YS5HYSlhPSExO2Vsc2V7Zm9yKHZhciBiPSExLGM9ITAsZj0wO2Y8YS5jYi5mLmxlbmd0aDtmKyspe3ZhciBoPWEuR2EuaGFzKGEuY2IuZltmXS5iYS5nZXROYW1lKCkpO2lmKGImJmgpe2M9ITE7YnJlYWt9aHx8KGI9ITApfWE9Y31yZXR1cm4gYX0pfWNqLnByb3RvdHlwZS5rZz1mdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIHFlPyFhLmxkKCl8fGEuSi5JKCkhPXRoaXMueGR8fFwiaW5cIj09YS5GJiZhLnZhbHVlLmxlbmd0aD5kaih0aGlzKT8hMTohMDphIGluc3RhbmNlb2YgT2c/YS5sZCgpJiZpZShhLDApLkouSSgpPT10aGlzLnhkP0ooYSkubGVuZ3RoPD1kaih0aGlzKTohMTohMX07XG5mdW5jdGlvbiBoaihhLGIpe3RoaXMuQz1hO3RoaXMuY2I9Yjt0aGlzLmVnPUIodGhpcy5jYi5mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5iYS5nZXROYW1lKCl9KSk7dGhpcy4kZD10aGlzLkdhPW51bGx9ZnVuY3Rpb24gamooYSl7bnVsbD09PWEuJGQmJihhLiRkPW5ldyAkaShhLmNiLGEuR2EpKTtyZXR1cm4gYS4kZH1mdW5jdGlvbiBpaihhLGIpe2IuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLmxiKClbMF0uZ2V0TmFtZSgpO3RoaXMuZWcuaGFzKGIpJiYobnVsbD09PXRoaXMuR2EmJih0aGlzLkdhPW5ldyBjZCksdGhpcy5HYS5zZXQoYixhLlcoKSkpfSxhKX1mdW5jdGlvbiBnaihhLGIpe2I9amooYSkuYmQoYik7dmFyIGM9YS5DLmdldChhLmNiLmooKSk7cmV0dXJuIGIucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGErYy5aYyhiKX0sMCl9O2Z1bmN0aW9uIGtqKGEsYixjLGQpe1MuY2FsbCh0aGlzLDAsLTEpO3RoaXMuQz1hLmIoeGMpO3RoaXMuaW5kZXg9Yjt0aGlzLiRlPWM7dGhpcy5wZT1kO3RoaXMuUmM9dGhpcy5RYz0hMX1yKGtqLFMpO2tqLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiaW5kZXhfcmFuZ2Vfc2NhbihcIit0aGlzLmluZGV4LmooKStcIiwgPywgXCIrKHRoaXMucGU/XCJyZXZlcnNlXCI6XCJuYXR1cmFsXCIpKyh0aGlzLlFjP1wiLCBsaW1pdDo/XCI6XCJcIikrKHRoaXMuUmM/XCIsIHNraXA6P1wiOlwiXCIpK1wiKVwifTtrai5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50b1N0cmluZygpLGM9dGhpcy4kZS5iZChhKSxiPWIucmVwbGFjZShcIj9cIixjLnRvU3RyaW5nKCkpO3RoaXMuUWMmJihiPWIucmVwbGFjZShcIj9cIixhLlgudG9TdHJpbmcoKSkpO3RoaXMuUmMmJihiPWIucmVwbGFjZShcIj9cIixhLkwudG9TdHJpbmcoKSkpO3JldHVybiBifTtcbmtqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyl7YT10aGlzLiRlLmJkKGMpO2I9dGhpcy5DLmdldCh0aGlzLmluZGV4LmooKSk7Yz0oMT09YS5sZW5ndGgmJmFbMF1pbnN0YW5jZW9mIEUmJkVkKGFbMF0pP0lmKGIuZ2V0KGFbMF0uZnJvbSksITEsdGhpcy5RYz9jLlg6dm9pZCAwLHRoaXMuUmM/Yy5MOnZvaWQgMCk6Yi5WYShhLHRoaXMucGUsdGhpcy5RYz9jLlg6dm9pZCAwLHRoaXMuUmM/Yy5MOnZvaWQgMCkpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IGhjKGEse30pfSx0aGlzKTtyZXR1cm5bUWQoYyxbdGhpcy5pbmRleC5tY10pXX07ZnVuY3Rpb24gbGooKXtTLmNhbGwodGhpcywwLDApfXIobGosUyk7bGoucHJvdG90eXBlLnRvU3RyaW5nPWsoXCJtdWx0aV9pbmRleF9yYW5nZV9zY2FuKClcIik7XG5sai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7dmFyIGI9eSgpO2EuZm9yRWFjaChmdW5jdGlvbihhKXthLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXtiLnNldChhLnZhLmlkKCksYSl9KX0pO3ZhciBjPXooYik7cmV0dXJuW25ldyBHKGMsYVswXS51KCkpXX07ZnVuY3Rpb24gbWooYSl7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLmpjPWF9cihtaixTKTttai5wcm90b3R5cGUudG9TdHJpbmc9ayhcInNlbGVjdCg/KVwiKTttai5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oYSl7YT12ZShhLHRoaXMuamMpO3JldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZShcIj9cIixhLnRvU3RyaW5nKCkpfTttai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMpe3JldHVyblt2ZShjLHRoaXMuamMpLmV2YWwoYVswXSldfTtmdW5jdGlvbiBuaihhLGIpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5WPWEuYih3Yyk7dGhpcy5VPWJ9cihuaixTKTtuai5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cInRhYmxlX2FjY2Vzc19ieV9yb3dfaWQoXCIrdGhpcy5VLmdldE5hbWUoKStcIilcIn07bmoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe3JldHVybltRZChFZih0aGlzLlYsS2QoYVswXSkpLFtUZCh0aGlzLlUpXSldfTtmdW5jdGlvbiBvaihhKXt0aGlzLmM9YX1yKG9qLEdoKTtvai5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXt0aGlzLkg9YTtIZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgT2l9KS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjPXBqKGEpO2lmKDAhPWMubGVuZ3RoKXt2YXIgZT1laihuZXcgY2oodGhpcy5jLGEudGFibGUpLGIsYy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHZlKGIsYS5qYyl9KSk7aWYobnVsbCE9PWUpe3ZhciBmPXkoKTtjLmZvckVhY2goZnVuY3Rpb24oYSl7Zi5zZXQoYS5qYyxhKX0sdGhpcyk7dGhpcy5IPXFqKHRoaXMsZSxmLGEpfX19LHRoaXMpO3JldHVybiB0aGlzLkh9O2Z1bmN0aW9uIHBqKGEpe3ZhciBiPVtdO2ZvcihhPWEuZ2V0UGFyZW50KCk7YTspe2lmKGEgaW5zdGFuY2VvZiBtailiLnB1c2goYSk7ZWxzZSBpZihhIGluc3RhbmNlb2YgU2kpYnJlYWs7YT1hLmdldFBhcmVudCgpfXJldHVybiBifVxuZnVuY3Rpb24gcWooYSxiLGMsZCl7KG51bGw9PT1iLkdhP1tdOmIuR2EudmFsdWVzKCkpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYy5nZXQoYSl9KS5mb3JFYWNoKElnKTtiPW5ldyBraihhLmMsYi5jYixqaihiKSwhMSk7YT1uZXcgbmooYS5jLGQudGFibGUpO0soYSxiKTtNZyhkLGQsYSxiKTtyZXR1cm4gYi5iYigpfTtmdW5jdGlvbiByaihhLGIpe1MuY2FsbCh0aGlzLDAsLTEpO3RoaXMuQz1hLmIoeGMpO3RoaXMuVT1ifXIocmosUyk7cmoucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJpbnNlcnQoXCIrdGhpcy5VLmdldE5hbWUoKStcIilcIn07cmoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjKXtzaih0aGlzLlUsYy52YWx1ZXMsdGhpcy5DKTtiLkFiKHRoaXMuVSxjLnZhbHVlcyk7cmV0dXJuW1FkKGMudmFsdWVzLFt0aGlzLlUuZ2V0TmFtZSgpXSldfTtmdW5jdGlvbiBzaihhLGIsYyl7YT1hLk1iLnNkO2lmKG51bGw9PT1hPzA6YS5mWzBdLmF1dG9JbmNyZW1lbnQpe3ZhciBkPWEuZlswXS5iYS5nZXROYW1lKCk7Yz1jLmdldChhLmooKSkuWSgpLkZjO3ZhciBlPW51bGw9PT1jPzA6YztiLmZvckVhY2goZnVuY3Rpb24oYSl7aWYoMD09YS5tW2RdfHxudWxsPT1hLm1bZF0pZSsrLGEubVtkXT1lfSl9fVxuZnVuY3Rpb24gdGooYSxiKXtTLmNhbGwodGhpcywwLC0xKTt0aGlzLkM9YS5iKHhjKTt0aGlzLlU9Yn1yKHRqLFMpO3RqLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiaW5zZXJ0X3JlcGxhY2UoXCIrdGhpcy5VLmdldE5hbWUoKStcIilcIn07dGoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjKXtzaih0aGlzLlUsYy52YWx1ZXMsdGhpcy5DKTtiLldkKHRoaXMuVSxjLnZhbHVlcyk7cmV0dXJuW1FkKGMudmFsdWVzLFt0aGlzLlUuZ2V0TmFtZSgpXSldfTtmdW5jdGlvbiB1aigpe1MuY2FsbCh0aGlzLDAsMSl9cih1aixTKTt1ai5wcm90b3R5cGUudG9TdHJpbmc9ayhcImxpbWl0KD8pXCIpO3VqLnByb3RvdHlwZS5QYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoXCI/XCIsYS5YLnRvU3RyaW5nKCkpfTt1ai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMpe2FbMF0uZW50cmllcy5zcGxpY2UoYy5YKTtyZXR1cm4gYX07ZnVuY3Rpb24gdmooYSl7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLk49YX1yKHZqLFMpO209dmoucHJvdG90eXBlO20udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIm9yZGVyX2J5KFwiK0FlKHRoaXMuTikrXCIpXCJ9O20uY2E9ZnVuY3Rpb24oYSl7aWYoMT09YS5sZW5ndGgpe3ZhciBiO2I9YVswXTtmb3IodmFyIGM9bnVsbCxkPTA7ZDx0aGlzLk4ubGVuZ3RoO2QrKyl7dmFyIGU9Y2godGhpcy5OW2RdLkopO2lmKG51bGwhPT1iLiRhJiZiLiRhLmhhcyhlLmooKSkpe2M9ZTticmVha319Yj1jOyhudWxsPT09Yj9hWzBdOkxkKGFbMF0sYikpLmVudHJpZXMuc29ydCh0aGlzLlRmLmJpbmQodGhpcykpfWVsc2UgYS5zb3J0KHRoaXMuSmcuYmluZCh0aGlzKSk7cmV0dXJuIGF9O1xubS4kPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9LTE7ZG8gZisrLGU9dGhpcy5OW2ZdLkosYz10aGlzLk5bZl0ub3JkZXIsZD1hKGUpLGU9YihlKTt3aGlsZShkPT1lJiZmKzE8dGhpcy5OLmxlbmd0aCk7YT1kPGU/LTE6ZD5lPzE6MDtyZXR1cm4gMT09Yz9hOi1hfTttLkpnPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuJChmdW5jdGlvbihiKXtyZXR1cm4gYiBpbnN0YW5jZW9mIFI/TGQoYSxiKTpIKGEuZW50cmllc1thLmVudHJpZXMubGVuZ3RoLTFdLGIpfSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFI/TGQoYixhKTpIKGIuZW50cmllc1tiLmVudHJpZXMubGVuZ3RoLTFdLGEpfSl9O20uVGY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy4kKGZ1bmN0aW9uKGIpe3JldHVybiBIKGEsYil9LGZ1bmN0aW9uKGEpe3JldHVybiBIKGIsYSl9KX07ZnVuY3Rpb24gd2ooYSxiKXt0aGlzLk5hPWE7dGhpcy5LPWJ9ZnVuY3Rpb24geGooYSl7cmV0dXJuIGEuSy5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgUn0sYSk/eWooYSk6emooYSl9ZnVuY3Rpb24geWooYSl7aWYoMT09YS5LLmxlbmd0aCYmXCJESVNUSU5DVFwiPT1hLktbMF0uTGIpcmV0dXJuIGE9TGQoYS5OYSxhLktbMF0pLmVudHJpZXMubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBSZChuZXcgaGMoLTEse30pLDE8dGhpcy5OYS5NLnNpemUpO1VkKGIsdGhpcy5LWzBdLEgoYSx0aGlzLktbMF0uY2hpbGQpKTtyZXR1cm4gYn0sYSksbmV3IEcoYSxbXSk7dmFyIGI9bmV3IFJkKG5ldyBoYygtMSx7fSksMTxhLk5hLk0uc2l6ZSk7YS5LLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGM9YSBpbnN0YW5jZW9mIFI/TGQodGhpcy5OYSxhKTpIKHRoaXMuTmEuZW50cmllc1swXSxhKTtVZChiLGEsYyl9LGEpO3JldHVybiBuZXcgRyhbYl0sYS5OYS51KCkpfVxuZnVuY3Rpb24gemooYSl7dmFyIGI9QXJyYXkoYS5OYS5lbnRyaWVzLmxlbmd0aCksYz0xPGEuTmEuTS5zaXplO2EuTmEuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEsZSl7YltlXT1uZXcgUmQobmV3IGhjKGEudmEuaWQoKSx7fSksYyk7dGhpcy5LLmZvckVhY2goZnVuY3Rpb24oYyl7VWQoYltlXSxjLEgoYSxjKSl9LHRoaXMpfSxhKTtyZXR1cm4gbmV3IEcoYixhLk5hLnUoKSl9ZnVuY3Rpb24gQWooYSxiKXt2YXIgYz1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4geGoobmV3IHdqKGEsYikpLmVudHJpZXNbMF19KTtyZXR1cm4gbmV3IEcoYyxhWzBdLnUoKSl9O2Z1bmN0aW9uIEJqKGEsYil7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLmY9YTt0aGlzLlBiPWJ9cihCaixTKTtCai5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1cInByb2plY3QoXCIrdGhpcy5mLnRvU3RyaW5nKCk7aWYobnVsbCE9PXRoaXMuUGIpdmFyIGI9dGhpcy5QYi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaigpfSkuam9pbihcIiwgXCIpLGE9YSsoXCIsIGdyb3VwQnkoXCIrYitcIilcIik7cmV0dXJuIGErXCIpXCJ9O0JqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXswPT1hLmxlbmd0aD9hPVtOZCgpXToxPT1hLmxlbmd0aD8oYT1hWzBdLGE9WzA9PXRoaXMuZi5sZW5ndGg/YTp4aihuZXcgd2ooYSx0aGlzLmYpKV0pOmE9W0FqKGEsdGhpcy5mKV07cmV0dXJuIGF9O2Z1bmN0aW9uIENqKGEpe3JldHVybiBhLmYuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFJ9KXx8bnVsbCE9PWEuUGJ9O2Z1bmN0aW9uIERqKCl7Uy5jYWxsKHRoaXMsMCwxKX1yKERqLFMpO0RqLnByb3RvdHlwZS50b1N0cmluZz1rKFwic2tpcCg/KVwiKTtEai5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKFwiP1wiLGEuTC50b1N0cmluZygpKX07RGoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bbmV3IEcoYVswXS5lbnRyaWVzLnNsaWNlKGMuTCksYVswXS51KCkpXX07ZnVuY3Rpb24gRWooKXt9cihFaixHaCk7RWoucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7aWYoIW4oYi5YKSYmIW4oYi5MKSlyZXR1cm4gYTt2YXIgYz1GaihhKTtpZihudWxsPT09YylyZXR1cm4gYTtIZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgdWp8fGEgaW5zdGFuY2VvZiBEan0pLmZvckVhY2goZnVuY3Rpb24oYSl7YSBpbnN0YW5jZW9mIHVqP2MuUWM9ITA6Yy5SYz0hMDtJZyhhKX0sdGhpcyk7cmV0dXJuIGMuYmIoKX07ZnVuY3Rpb24gRmooYSl7YT1IZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2Yga2p9LGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgQmomJkNqKGEpfHxhIGluc3RhbmNlb2Ygdmp8fDEhPUooYSkubGVuZ3RofHxhIGluc3RhbmNlb2YgbWp9KTtyZXR1cm4gMDxhLmxlbmd0aD9hWzBdOm51bGx9O2Z1bmN0aW9uIEdqKGEpe3RoaXMuYz1hfXIoR2osR2gpO0dqLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe3RoaXMuSD1hO3ZhciBjPUhqKHRoaXMsYik7aWYoMD09Yy5sZW5ndGgpcmV0dXJuIHRoaXMuSDt2YXIgZCxlPTA7ZG8gZD1jW2UrK10sYT1Jaih0aGlzLGQsYik7d2hpbGUobnVsbD09PWEmJmU8Yy5sZW5ndGgpO2lmKG51bGw9PT1hKXJldHVybiB0aGlzLkg7Yj1Kaih0aGlzLGFbMF0uY2IubWMpO3JldHVybiBudWxsPT09Yj90aGlzLkg6dGhpcy5IPUtqKHRoaXMsZCxiLGEpfTtmdW5jdGlvbiBIaihhLGIpe3JldHVybiBIZyhhLkgsZnVuY3Rpb24oYSl7aWYoIShhIGluc3RhbmNlb2YgbWopKXJldHVybiExO2E9dmUoYixhLmpjKTtyZXR1cm4gYSBpbnN0YW5jZW9mIE9nJiZcIm9yXCI9PWEucGJ9KX1mdW5jdGlvbiBKaihhLGIpe3JldHVybiBIZyhhLkgsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBPaSYmYS50YWJsZS5nZXROYW1lKCk9PWJ9KVswXXx8bnVsbH1cbmZ1bmN0aW9uIElqKGEsYixjKXtiPXZlKGMsYi5qYyk7dmFyIGQ9Yi51KCk7aWYoMSE9ZC5zaXplKXJldHVybiBudWxsO3ZhciBkPUMoZClbMF0sZT1uZXcgY2ooYS5jLGQpLGY9bnVsbDtyZXR1cm4gSihiKS5ldmVyeShmdW5jdGlvbihhKXthPWVqKGUsYyxbYV0pO251bGw9PT1hfHwobnVsbD09PWY/Zj1bYV06Zi5wdXNoKGEpKTtyZXR1cm4gbnVsbCE9PWF9KT9mOm51bGx9ZnVuY3Rpb24gS2ooYSxiLGMsZCl7dmFyIGU9bmV3IG5qKGEuYyxjLnRhYmxlKSxmPW5ldyBsajtLKGUsZik7ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9bmV3IGtqKHRoaXMuYyxhLmNiLGpqKGEpLCExKTtLKGYsYSl9LGEpO0lnKGIpO01nKGMsYyxlLGYpO3JldHVybiBmLmJiKCl9O2Z1bmN0aW9uIExqKGEpe3RoaXMuYz1hfXIoTGosR2gpO0xqLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe2I9TWooYSxiKTtpZihudWxsPT09YilyZXR1cm4gYTthOnt2YXIgYz1iO2E9TmooaWUoYiwwKSk7aWYobnVsbCE9PWEpe3ZhciBkO2Q9Yi5OO2Zvcih2YXIgZT1udWxsLGY9YS50YWJsZS5EYSgpLGg9MDtoPGYubGVuZ3RoJiZudWxsPT09ZTtoKyspZT1PaihmW2hdLGQpO2Q9ZTtpZihudWxsPT09ZCl7YT1jO2JyZWFrIGF9Yz1uZXcga2oodGhpcy5jLGQuY2IsbmV3IFppKGQuY2IpLGQuWGUpO2Q9bmV3IG5qKHRoaXMuYyxhLnRhYmxlKTtLKGQsYyk7SWcoYik7Yz1NZyhhLGEsZCxjKX1hPWN9YT09YiYmKGE9YixjPVBqKGllKGIsMCkpLG51bGwhPT1jJiYoZD1PaihjLmluZGV4LGIuTiksbnVsbCE9PWQmJihjLnBlPWQuWGUsYT1JZyhiKS5wYXJlbnQpKSk7cmV0dXJuIGEuYmIoKX07XG5mdW5jdGlvbiBQaihhKXthPUhnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBran0sZnVuY3Rpb24oYSl7cmV0dXJuIDEhPUooYSkubGVuZ3RofSk7cmV0dXJuIDA8YS5sZW5ndGg/YVswXTpudWxsfWZ1bmN0aW9uIE5qKGEpe2E9SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIE9pfSxmdW5jdGlvbihhKXtyZXR1cm4gMSE9SihhKS5sZW5ndGh9KTtyZXR1cm4gMDxhLmxlbmd0aD9hWzBdOm51bGx9ZnVuY3Rpb24gTWooYSxiKXtyZXR1cm4gbihiLk4pP0hnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiB2an0pWzBdOm51bGx9ZnVuY3Rpb24gT2ooYSxiKXtpZihhLmYubGVuZ3RoIT1iLmxlbmd0aHx8IWIuZXZlcnkoZnVuY3Rpb24oYixkKXtyZXR1cm4gYi5KLmdldE5hbWUoKT09YS5mW2RdLmJhLmdldE5hbWUoKX0pKXJldHVybiBudWxsO2I9UWooYixhKTtyZXR1cm4gYlswXXx8YlsxXT97Y2I6YSxYZTpiWzFdfTpudWxsfVxuZnVuY3Rpb24gUWooYSxiKXt2YXIgYz1hLnJlZHVjZShmdW5jdGlvbihhLGIpe3JldHVybiBhPDwxfCgwPT1iLm9yZGVyPzA6MSl9LDApLGQ9Yi5mLnJlZHVjZShmdW5jdGlvbihhLGIpe3JldHVybiBhPDwxfCgwPT1iLm9yZGVyPzA6MSl9LDApLGM9Y15kO3JldHVyblswPT1jLGM9PU1hdGgucG93KDIsTWF0aC5tYXgoYS5sZW5ndGgsYi5mLmxlbmd0aCkpLTFdfTtmdW5jdGlvbiBSaihhLGIsYyl7dGhpcy5IYT1hO3RoaXMubGU9Yjt0aGlzLlZiPWN9UmoucHJvdG90eXBlLmdjPWZ1bmN0aW9uKCl7dGhpcy5WYi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuSGE9YS5nYih0aGlzLkhhLHRoaXMubGUpfSx0aGlzKTtyZXR1cm4gdGhpcy5IYX07ZnVuY3Rpb24gU2ooYSl7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLlU9YX1yKFNqLFMpO1NqLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwidXBkYXRlKFwiK3RoaXMuVS5nZXROYW1lKCkrXCIpXCJ9O1NqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyl7YT1hWzBdLmVudHJpZXMubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuVS5rYihhLnZhLkphKCkpO2Muc2V0LmZvckVhY2goZnVuY3Rpb24oYSl7Yi5tW2EuSi5nZXROYW1lKCldPWEudmFsdWV9LHRoaXMpO3JldHVybiBifSx0aGlzKTtiLnVwZGF0ZSh0aGlzLlUsYSk7cmV0dXJuW05kKCldfTtmdW5jdGlvbiBUaihhKXt0aGlzLmM9YTt0aGlzLnJlPVtuZXcgWGksbmV3IG9qKHRoaXMuYyksbmV3IEdqKHRoaXMuYyksbmV3IExqKHRoaXMuYyksbmV3IEVqLG5ldyBQaSh0aGlzLmMpXTt0aGlzLlBkPVtuZXcgb2oodGhpcy5jKV19VGoucHJvdG90eXBlLmNyZWF0ZT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuYmIoKTtpZihjIGluc3RhbmNlb2YgdGh8fGMgaW5zdGFuY2VvZiBzaClyZXR1cm4gVWoodGhpcyxhLGIpO2lmKGMgaW5zdGFuY2VvZiB6aHx8YyBpbnN0YW5jZW9mIERofHxjIGluc3RhbmNlb2YgRWgpcmV0dXJuIFVqKHRoaXMsYSxiLHRoaXMucmUpO2lmKGMgaW5zdGFuY2VvZiB1aHx8YyBpbnN0YW5jZW9mIHZoKXJldHVybiBVaih0aGlzLGEsYix0aGlzLlBkKTt0aHJvdyBuZXcgRCg4KTt9O1xuZnVuY3Rpb24gVWooYSxiLGMsZCl7YT1GZyhiLmJiKCksYS50Zy5iaW5kKGEpKTtudWxsIT1kJiYoYT0obmV3IFJqKGEsYyxkKSkuZ2MoKSk7cmV0dXJuIG5ldyBCZShhLGIuZGEoKSl9XG5Uai5wcm90b3R5cGUudGc9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIHpoKXJldHVybiBuZXcgQmooYS5mLGEuUGIpO2lmKGEgaW5zdGFuY2VvZiBDaClyZXR1cm4gbmV3IFFpKGEuZik7aWYoYSBpbnN0YW5jZW9mIEJoKXJldHVybiBuZXcgZ2goYS5mKTtpZihhIGluc3RhbmNlb2YgQWgpcmV0dXJuIG5ldyB2aihhLk4pO2lmKGEgaW5zdGFuY2VvZiBFaClyZXR1cm4gbmV3IERqO2lmKGEgaW5zdGFuY2VvZiBEaClyZXR1cm4gbmV3IHVqO2lmKGEgaW5zdGFuY2VvZiB3aClyZXR1cm4gbmV3IG1qKGEuTy5XKCkpO2lmKGEgaW5zdGFuY2VvZiB5aClyZXR1cm4gbmV3IExoO2lmKGEgaW5zdGFuY2VvZiBGaClyZXR1cm4gbmV3IFNpKHRoaXMuYyxhLk8sYS5SYik7aWYoYSBpbnN0YW5jZW9mIHhoKXJldHVybiBuZXcgT2kodGhpcy5jLGEudGFibGUpO2lmKGEgaW5zdGFuY2VvZiB1aClyZXR1cm4gbmV3IE1pKGEudGFibGUpO2lmKGEgaW5zdGFuY2VvZiB2aClyZXR1cm4gbmV3IFNqKGEudGFibGUpO1xuaWYoYSBpbnN0YW5jZW9mIHRoKXJldHVybiBuZXcgdGoodGhpcy5jLGEudGFibGUpO2lmKGEgaW5zdGFuY2VvZiBzaClyZXR1cm4gbmV3IHJqKHRoaXMuYyxhLnRhYmxlKTt0aHJvdyBuZXcgRCg1MTQpO307ZnVuY3Rpb24gVmooYSl7dGhpcy5xZz1uZXcgTGk7dGhpcy5FZz1uZXcgVGooYSl9O2Z1bmN0aW9uIFdqKCl7dGhpcy5kZj15KCl9ZnVuY3Rpb24gWGooYSxiKXt2YXIgYz1hLmRmLmdldChiLmdldE5hbWUoKSl8fG51bGw7bnVsbD09PWMmJihjPW5ldyBZaixhLmRmLnNldChiLmdldE5hbWUoKSxjKSk7cmV0dXJuIGN9ZnVuY3Rpb24gWmooYSxiLGMsZCl7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9WGoodGhpcyxhKTswPT1kPyhhLmZiPW51bGwsYS53Yz1iKTozPT1kPyhudWxsPT09YS5ZYiYmKGEuWWI9QigpKSxhLlliLmFkZChiKSxudWxsPT09YS5ZYSYmKGEuWWE9QigpKSxhLllhLmRlbGV0ZShiKSk6MT09ZD8obnVsbD09PWEuWWEmJihhLllhPUIoKSksYS5ZYS5hZGQoYikpOjI9PWQmJihhLmZiPWIpfSxhKX1cbmZ1bmN0aW9uIGFrKGEsYixjLGQpe3ZhciBlPSEwO2MuZm9yRWFjaChmdW5jdGlvbihhKXtpZihlKXthPVhqKHRoaXMsYSk7dmFyIGM9bnVsbD09PWEuWWF8fDA9PWEuWWEuc2l6ZTtlPTA9PWQ/KG51bGw9PT1hLllifHwwPT1hLlliLnNpemUpJiZjJiZudWxsPT09YS53YyYmbnVsbCE9PWEuZmImJmEuZmI9PWI6Mz09ZD9udWxsPT09YS53YyYmbnVsbD09PWEuZmImJm51bGwhPT1hLllhJiZhLllhLmhhcyhiKToxPT1kP251bGw9PT1hLmZiOmMmJihudWxsPT09YS5mYnx8YS5mYj09Yil9fSxhKTtyZXR1cm4gZX1mdW5jdGlvbiBiayhhLGIsYyxkKXt2YXIgZT1hayhhLGIsYyxkKTtlJiZaaihhLGIsYyxkKTtyZXR1cm4gZX1Xai5wcm90b3R5cGUucmVsZWFzZUxvY2s9ZnVuY3Rpb24oYSxiKXtiLmZvckVhY2goZnVuY3Rpb24oYil7WGoodGhpcyxiKS5yZWxlYXNlTG9jayhhKX0sdGhpcyl9O1xuZnVuY3Rpb24gY2soYSxiKXtiLmZvckVhY2goZnVuY3Rpb24oYSl7WGoodGhpcyxhKS5mYj1udWxsfSxhKX1mdW5jdGlvbiBZaigpe3RoaXMuWWI9dGhpcy5ZYT10aGlzLmZiPXRoaXMud2M9bnVsbH1Zai5wcm90b3R5cGUucmVsZWFzZUxvY2s9ZnVuY3Rpb24oYSl7dGhpcy53Yz09YSYmKHRoaXMud2M9bnVsbCk7dGhpcy5mYj09YSYmKHRoaXMuZmI9bnVsbCk7bnVsbD09PXRoaXMuWWF8fHRoaXMuWWEuZGVsZXRlKGEpO251bGw9PT10aGlzLllifHx0aGlzLlliLmRlbGV0ZShhKX07ZnVuY3Rpb24gZGsoKXt0aGlzLlViPW5ldyBlazt0aGlzLkVjPW5ldyBXan1mdW5jdGlvbiBKZShhLGIpeygyPmIuZ2V0UHJpb3JpdHkoKXx8Mj5iLmdldFByaW9yaXR5KCkpJiZjayhhLkVjLGIuZGEoKSk7YS5VYi5BYihiKTtmayhhKTtyZXR1cm4gYi5EYi5oYX1mdW5jdGlvbiBmayhhKXtmb3IodmFyIGI9YS5VYi5xYSgpLGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtpZigwPT1kLkcoKT9nayhhLGQsMSwzKTpnayhhLGQsMiwwKSl7YS5VYi5yZW1vdmUoZCk7dmFyIGU9YTtkLmV4ZWMoKS50aGVuKGUuQmcuYmluZChlLGQpLGUuQWcuYmluZChlLGQpKX19fWZ1bmN0aW9uIGdrKGEsYixjLGQpe3ZhciBlPSExO2JrKGEuRWMsYi5XKCksYi5kYSgpLGMpJiYoZT1iayhhLkVjLGIuVygpLGIuZGEoKSxkKSk7cmV0dXJuIGV9ZGsucHJvdG90eXBlLkJnPWZ1bmN0aW9uKGEsYil7dGhpcy5FYy5yZWxlYXNlTG9jayhhLlcoKSxhLmRhKCkpO2EuRGIucmVzb2x2ZShiKTtmayh0aGlzKX07XG5kay5wcm90b3R5cGUuQWc9ZnVuY3Rpb24oYSxiKXt0aGlzLkVjLnJlbGVhc2VMb2NrKGEuVygpLGEuZGEoKSk7YS5EYi5yZWplY3QoYik7ZmsodGhpcyl9O2Z1bmN0aW9uIGVrKCl7dGhpcy5VYj1bXX1lay5wcm90b3R5cGUuQWI9ZnVuY3Rpb24oYSl7SGYodGhpcy5VYixhLGZ1bmN0aW9uKGEsYyl7dmFyIGI9YS5nZXRQcmlvcml0eSgpLWMuZ2V0UHJpb3JpdHkoKTtyZXR1cm4gMD09Yj9hLlcoKS1jLlcoKTpifSl9O2VrLnByb3RvdHlwZS5xYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLlViLnNsaWNlKCl9O2VrLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5VYjthPXhhKGIsYSk7dmFyIGM7KGM9MDw9YSkmJkFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChiLGEsMSk7cmV0dXJuIGN9O2Z1bmN0aW9uIGhrKCl7dGhpcy5OYz15KCl9dmFyIGlrO2Z1bmN0aW9uIGprKCl7aWt8fChpaz1uZXcgaGspO3JldHVybiBpa31oay5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLk5jLmNsZWFyKCl9O2hrLnByb3RvdHlwZS5jbGVhcj1oay5wcm90b3R5cGUuY2xlYXI7aGsucHJvdG90eXBlLnJiPWZ1bmN0aW9uKGEsYil7dGhpcy5OYy5zZXQoYS50b1N0cmluZygpLGIpO3JldHVybiBifTtoay5wcm90b3R5cGUucmVnaXN0ZXJTZXJ2aWNlPWhrLnByb3RvdHlwZS5yYjtoay5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLk5jLmdldChhLnRvU3RyaW5nKCkpfHxudWxsO2lmKG51bGw9PT1iKXRocm93IG5ldyBEKDcsYS50b1N0cmluZygpKTtyZXR1cm4gYn07aGsucHJvdG90eXBlLmdldFNlcnZpY2U9aGsucHJvdG90eXBlLmI7aGsucHJvdG90eXBlLm1kPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLk5jLmhhcyhhLnRvU3RyaW5nKCkpfTtcbmhrLnByb3RvdHlwZS5pc1JlZ2lzdGVyZWQ9aGsucHJvdG90eXBlLm1kO2Z1bmN0aW9uIGtrKCl7dmFyIGE9amsoKTtyZXR1cm4gZ2MoYS5OYyl9O2Z1bmN0aW9uIGxrKGEsYixjLGQpe3JldHVybiBudWxsIT1hP251bGwhPWI/bWsoYSxiLGMsZCk6bmsoYSk6b2soKX1mdW5jdGlvbiBwayhhKXt2YXIgYj1cIlwiO3RyeXtiPUpTT04uc3RyaW5naWZ5KGEpfWNhdGNoKGMpe31yZXR1cm4gYn1mdW5jdGlvbiBxayhhKXt2YXIgYj1qaygpO2E9bmV3IHVjKFwibnNfXCIrYSk7cmV0dXJuIGIubWQoYSk/Yi5iKGEpOm51bGx9ZnVuY3Rpb24gb2soKXt2YXIgYT17fTtraygpLmZvckVhY2goZnVuY3Rpb24oYil7XCJuc19cIj09Yi5zdWJzdHJpbmcoMCwzKSYmKGI9Yi5zdWJzdHJpbmcoMyksYVtiXT1xayhiKS5iKEJjKS52ZXJzaW9uKCkpfSk7cmV0dXJuIHBrKGEpfWZ1bmN0aW9uIG5rKGEpe2E9cWsoYSk7dmFyIGI9e307aWYobnVsbCE9YSl7dmFyIGM9YS5iKHhjKTthLmIoQmMpLm9hKCkuZm9yRWFjaChmdW5jdGlvbihhKXtiW2EuZ2V0TmFtZSgpXT1jLmdldChuZihhKSkuWSgpLmlhfSl9cmV0dXJuIHBrKGIpfVxuZnVuY3Rpb24gbWsoYSxiLGMsZCl7dmFyIGU9cWsoYSk7YT1bXTtpZihudWxsIT1lKXt2YXIgZj1udWxsO3RyeXtmPWUuYihCYykudGFibGUoYil9Y2F0Y2goaCl7fW51bGwhPWYmJihiPWUuYih4YyksZT1lLmIod2MpLGM9Yi5nZXQobmYoZikpLlZhKHZvaWQgMCwhMSxjLGQpLGMubGVuZ3RoJiYoYT1FZihlLGMpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5tfSkpKX1yZXR1cm4gcGsoYSl9O2Z1bmN0aW9uIHJrKGEsYil7dGhpcy5RZD1lZSgpO3RoaXMubWU9YTt0aGlzLm9kPWI7dGhpcy5LPXNrKHRoaXMpfWZ1bmN0aW9uIHNrKGEpe2lmKDA8YS5tZS5mLmxlbmd0aClyZXR1cm4gYS5tZS5mO3ZhciBiPVtdO2EubWUuZnJvbS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EubGIoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pfSk7cmV0dXJuIGJ9cmsucHJvdG90eXBlLiQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5LLmV2ZXJ5KGZ1bmN0aW9uKGMpe3JldHVybiA2PT1jLkcoKXx8MD09Yy5HKCk/SChhLGMpPT09SChiLGMpOmZlKHRoaXMuUWQsYy5HKCksXCJlcVwiKShIKGEsYyksSChiLGMpKX0sdGhpcyl9O1xuZnVuY3Rpb24gdGsoYSxiLGMpe3ZhciBkPW51bGw9PT1iP1tdOmIuZW50cmllcyxlPXBiKGQsYy5lbnRyaWVzLGEuJC5iaW5kKGEpLGZ1bmN0aW9uKGEpe3JldHVybiBkW2FdfSk7Yj1bXTtmb3IodmFyIGY9MCxoPTA7aDxkLmxlbmd0aDtoKyspe3ZhciBsPWRbaF07ZVtmXT09bD9mKys6KGw9YS5vZC5zcGxpY2UoZiwxKSxsPXVrKGgsbCwwLGEub2QpLGIucHVzaChsKSl9ZT1wYihkLGMuZW50cmllcyxhLiQuYmluZChhKSxmdW5jdGlvbihhLGIpe3JldHVybiBjLmVudHJpZXNbYl19KTtmb3IoaD1mPTA7aDxjLmVudHJpZXMubGVuZ3RoO2grKylsPWMuZW50cmllc1toXSxlW2ZdPT1sP2YrKzooYS5vZC5zcGxpY2UoaCwwLGwudmEubSksbD11ayhoLFtdLDEsYS5vZCksYi5wdXNoKGwpKTtyZXR1cm4gYn1mdW5jdGlvbiB1ayhhLGIsYyxkKXtyZXR1cm57YWRkZWRDb3VudDpjLGluZGV4OmEsb2JqZWN0OmQscmVtb3ZlZDpiLHR5cGU6XCJzcGxpY2VcIn19O2Z1bmN0aW9uIHZrKCl7dGhpcy5mYz15KCl9dmsucHJvdG90eXBlLkNkPWZ1bmN0aW9uKGEsYil7dmFyIGM9a2EoYS5xdWVyeSkudG9TdHJpbmcoKSxkPXRoaXMuZmMuZ2V0KGMpfHxudWxsO251bGw9PT1kJiYoZD1uZXcgd2soYSksdGhpcy5mYy5zZXQoYyxkKSk7ZC5DZChiKX07dmsucHJvdG90eXBlLm5lPWZ1bmN0aW9uKGEsYil7YT1rYShhLnF1ZXJ5KS50b1N0cmluZygpO3ZhciBjPXRoaXMuZmMuZ2V0KGEpfHxudWxsO2MubmUoYik7MDxjLkhjLnNpemV8fHRoaXMuZmMuZGVsZXRlKGEpfTtmdW5jdGlvbiBJZShhLGIpe3ZhciBjPUIoKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5hZGQoYS5nZXROYW1lKCkpfSk7dmFyIGQ9W107YS5mYy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9YS5CYygpO2EuY29udGV4dC5mcm9tLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGMuaGFzKGEuZ2V0TmFtZSgpKX0pJiZkLnB1c2goYSl9KTtyZXR1cm4gZH1cbmZ1bmN0aW9uIEdlKGEsYixjKXtiPWthKG51bGwhPWIuV2M/Yi5XYzpiKS50b1N0cmluZygpO2E9YS5mYy5nZXQoYil8fG51bGw7bnVsbCE9PWEmJnhrKGEsYyl9ZnVuY3Rpb24gd2soYSl7dGhpcy5IZj1hO3RoaXMuSGM9QigpO3RoaXMueWc9W107dGhpcy5iZj1udWxsO3RoaXMuUmY9bmV3IHJrKGEucXVlcnksdGhpcy55Zyl9d2sucHJvdG90eXBlLkNkPWZ1bmN0aW9uKGEpe3RoaXMuSGMuaGFzKGEpfHx0aGlzLkhjLmFkZChhKX07d2sucHJvdG90eXBlLm5lPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLkhjLmRlbGV0ZShhKX07d2sucHJvdG90eXBlLkJjPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5IZjtyZXR1cm57Y29udGV4dDphLnF1ZXJ5LGplOmppKGEpfX07ZnVuY3Rpb24geGsoYSxiKXt2YXIgYz10ayhhLlJmLGEuYmYsYik7YS5iZj1iOzA8Yy5sZW5ndGgmJmEuSGMuZm9yRWFjaChmdW5jdGlvbihhKXthKGMpfSl9O2Z1bmN0aW9uIHlrKGEsYil7dmFyIGM9YS5iKEJjKSxkPWJ8fHt9O2I9bmV3IERmKGMpO2EucmIod2MsYik7Yj1udWxsO3ZhciBlPSExO251bGwhPWQuc3RvcmVUeXBlP2I9ZC5zdG9yZVR5cGU6KGI9ZWMoKSxiPWIuZmc/MDpiLlVnPzQ6MSk7c3dpdGNoKGIpe2Nhc2UgMDpiPW5ldyBoZihhLGMpO2JyZWFrO2Nhc2UgMTpiPW5ldyBxZihjKTticmVhaztjYXNlIDU6Yj1uZXcgc2YoYyk7YnJlYWs7Y2FzZSA0OmI9bmV3IEFmKGEsYyxkLndlYlNxbERiU2l6ZSk7YnJlYWs7Y2FzZSAzOmI9bmV3IFZlKGMsZC5maXJlYmFzZSk7ZT0hMDticmVhaztkZWZhdWx0OnRocm93IG5ldyBEKDMwMCk7fWEucmIodmMsYik7dmFyIGY9bmV3IEVnO2EucmIoeGMsZik7cmV0dXJuIGIuRWEoZC5vblVwZ3JhZGUpLnRoZW4oZnVuY3Rpb24oKXt2YXIgYj1uZXcgVmooYSk7YS5yYih5YyxiKTtiPW5ldyBkazthLnJiKHpjLGIpO2I9bmV3IHZrO2EucmIoQWMsYik7cmV0dXJuIGYuRWEoYyl9KS50aGVuKGZ1bmN0aW9uKCl7aWYoZSl7dmFyIGI9XG5uZXcgS2UoYSk7Yi5PYS5zdWJzY3JpYmUoYi5lZS5iaW5kKGIpKX1kLmVuYWJsZUluc3BlY3RvciYmKHdpbmRvdy50b3BbXCIjbGZJbnNwZWN0XCJdPWxrKTtyZXR1cm4obmV3IHhnKGEpKS5FYShjKX0pfTtmdW5jdGlvbiB6ayhhKXt0aGlzLmM9YTt0aGlzLmc9YS5iKEJjKTt0aGlzLmFhPUIodGhpcy5nLm9hKCkpO3RoaXMuRGI9dygpfWZ1bmN0aW9uIEFrKGEpe3ZhciBiPWEuYy5iKHhjKSxjPWEuYy5iKHdjKSxkPXt9O2EuZy5vYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGU9Yi5nZXQobmYoYSkpLlZhKCksZT1FZihjLGUpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5tfSk7ZFthLmdldE5hbWUoKV09ZX0pO3JldHVybntuYW1lOmEuZy5uYW1lKCksdmVyc2lvbjphLmcudmVyc2lvbigpLHRhYmxlczpkfX1tPXprLnByb3RvdHlwZTttLmV4ZWM9ZnVuY3Rpb24oKXt2YXIgYT1Bayh0aGlzKSxhPW5ldyBSZChuZXcgaGMoLTEsYSksITApO3JldHVybiB2KFtuZXcgRyhbYV0sW10pXSl9O20uRz1rKDApO20uZGE9ZyhcImFhXCIpO20uVz1mdW5jdGlvbigpe3JldHVybiBrYSh0aGlzKX07bS5nZXRQcmlvcml0eT1rKDApO2Z1bmN0aW9uIEJrKGEsYil7dGhpcy5jPWE7dGhpcy5nPWEuYihCYyk7dGhpcy5hYT1CKHRoaXMuZy5vYSgpKTt0aGlzLkRiPXcoKTt0aGlzLkJhPWI7dGhpcy5PYT1hLmIodmMpO3RoaXMuVj1hLmIod2MpO3RoaXMuQz1hLmIoeGMpfW09QmsucHJvdG90eXBlO1xubS5leGVjPWZ1bmN0aW9uKCl7aWYoISh0aGlzLk9hIGluc3RhbmNlb2YgaGZ8fHRoaXMuT2EgaW5zdGFuY2VvZiBxZnx8dGhpcy5PYSBpbnN0YW5jZW9mIEFmKSl0aHJvdyBuZXcgRCgzMDApO3ZhciBhO2E6e2E9dGhpcy5nLm9hKCk7Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDsrK2IpaWYoMDx0aGlzLkMuZ2V0KG5mKGFbYl0pKS5ZKCkuaWEpe2E9ITE7YnJlYWsgYX1hPSEwfWlmKCFhKXRocm93IG5ldyBEKDExMCk7aWYodGhpcy5nLm5hbWUoKSE9dGhpcy5CYS5uYW1lfHx0aGlzLmcudmVyc2lvbigpIT10aGlzLkJhLnZlcnNpb24pdGhyb3cgbmV3IEQoMTExKTtpZihudWxsPT10aGlzLkJhLnRhYmxlcyl0aHJvdyBuZXcgRCgxMTIpO3JldHVybiBDayh0aGlzKX07bS5HPWsoMSk7bS5kYT1nKFwiYWFcIik7bS5XPWZ1bmN0aW9uKCl7cmV0dXJuIGthKHRoaXMpfTttLmdldFByaW9yaXR5PWsoMCk7XG5mdW5jdGlvbiBDayhhKXt2YXIgYj1uZXcgdWQoYS5jLGEuYWEpLGI9YS5PYS5GYihhLkcoKSxDKGEuYWEpLGIpLGM7Zm9yKGMgaW4gYS5CYS50YWJsZXMpe3ZhciBkPWEuZy50YWJsZShjKSxlPWEuQmEudGFibGVzW2NdLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gZC54YihhKX0pLGY9Yi5JKGMsZC5rYiwwKTthLlYuV2IoYyxlKTt2YXIgaD1hLkMubGMuZ2V0KGMpfHxbXTtlLmZvckVhY2goZnVuY3Rpb24oYSl7aC5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBjPWEubmIoYi5nZXROYW1lKCkpO2IuYWRkKGMsYS5pZCgpKX0pfSk7Zi5wdXQoZSl9cmV0dXJuIGIua2EoKX07ZnVuY3Rpb24gRGsoYSxiKXt0aGlzLmM9YTt0aGlzLk9hPWEuYih2Yyk7dGhpcy5JYT1hLmIoemMpO3RoaXMuSWI9YS5iKEFjKTt0aGlzLmFhPUIoYik7dGhpcy5SYT1uZXcgdWQodGhpcy5jLHRoaXMuYWEpO3RoaXMuRGI9dygpO3RoaXMueGM9dygpO3RoaXMuemU9dygpfW09RGsucHJvdG90eXBlO20uZXhlYz1mdW5jdGlvbigpe3RoaXMuemUucmVzb2x2ZSgpO3JldHVybiB0aGlzLnhjLmhhfTttLkc9aygxKTttLmRhPWcoXCJhYVwiKTttLlc9ZnVuY3Rpb24oKXtyZXR1cm4ga2EodGhpcyl9O20uZ2V0UHJpb3JpdHk9aygyKTtmdW5jdGlvbiBFayhhKXtKZShhLklhLGEpO3JldHVybiBhLnplLmhhfVxuZnVuY3Rpb24gRmsoYSxiKXtiPWIuQmMoKTtyZXR1cm4gYi5qZS5iYigpLmV4ZWMoYS5SYSxiLmNvbnRleHQpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIEpkKGFbMF0pfSxmdW5jdGlvbihhKXt0aGlzLlJhLkpiKCk7dmFyIGI9bmV3IGpiKGEubmFtZSk7dGhpcy54Yy5yZWplY3QoYik7dGhyb3cgYTt9LmJpbmQoYSkpfW0ua2E9ZnVuY3Rpb24oKXt0aGlzLmphPXRoaXMuT2EuRmIodGhpcy5HKCksQyh0aGlzLmFhKSx0aGlzLlJhKTt0aGlzLmphLmthKCkudGhlbihmdW5jdGlvbigpe3RoaXMuTWMoKTt0aGlzLnhjLnJlc29sdmUoKX0uYmluZCh0aGlzKSxmdW5jdGlvbihhKXt0aGlzLlJhLkpiKCk7dGhpcy54Yy5yZWplY3QoYSl9LmJpbmQodGhpcykpO3JldHVybiB0aGlzLkRiLmhhfTttLkpiPWZ1bmN0aW9uKCl7dGhpcy5SYS5KYigpO3RoaXMueGMucmVzb2x2ZSgpO3JldHVybiB0aGlzLkRiLmhhfTtcbm0uTWM9ZnVuY3Rpb24oKXt2YXIgYT1JZSh0aGlzLkliLHRoaXMuYWEpOzAhPWEubGVuZ3RoJiYoYT1uZXcgRmUodGhpcy5jLGEpLEplKHRoaXMuSWEsYSkpfTttLlk9ZnVuY3Rpb24oKXt2YXIgYT1udWxsO251bGwhPXRoaXMuamEmJihhPXRoaXMuamEuWSgpKTtyZXR1cm4gbnVsbD09PWE/bmV3IEEoITEsMCwwLDAsMCk6YX07ZnVuY3Rpb24gVihhKXt0aGlzLmM9YTt0aGlzLklhPWEuYih6Yyk7dGhpcy5LYj1udWxsO3RoaXMuVGE9MDswPT1Hay5zaXplJiYoR2suc2V0KDAsQihbMSw0XSkpLEdrLnNldCgxLEIoWzJdKSksR2suc2V0KDIsQihbMyw1LDZdKSksR2suc2V0KDMsQihbMiw3XSkpLEdrLnNldCg0LEIoWzddKSksR2suc2V0KDUsQihbN10pKSxHay5zZXQoNixCKFs3XSkpKX1xKFwibGYucHJvYy5UcmFuc2FjdGlvblwiLFYpO3ZhciBHaz15KCk7ZnVuY3Rpb24gSGsoYSxiKXt2YXIgYz1Hay5nZXQoYS5UYSl8fG51bGw7aWYobnVsbD09PWN8fCFjLmhhcyhiKSl0aHJvdyBuZXcgRCgxMDcsYS5UYSxiKTthLlRhPWJ9XG5WLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGEpe0hrKHRoaXMsNCk7dmFyIGI9W107dHJ5e2EuZm9yRWFjaChmdW5jdGlvbihhKXthLmFiKCk7Yi5wdXNoKGEuQmMoKSl9LHRoaXMpfWNhdGNoKGMpe3JldHVybiBIayh0aGlzLDcpLGJiKGMpfXRoaXMuS2I9bmV3IE1oKHRoaXMuYyxiKTtyZXR1cm4gSmUodGhpcy5JYSx0aGlzLktiKS50aGVuKGZ1bmN0aW9uKGEpe0hrKHRoaXMsNyk7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBKZChhKX0pfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGEpe0hrKHRoaXMsNyk7dGhyb3cgYTt9LmJpbmQodGhpcykpfTtWLnByb3RvdHlwZS5leGVjPVYucHJvdG90eXBlLmV4ZWM7Vi5wcm90b3R5cGUuRmY9ZnVuY3Rpb24oYSl7SGsodGhpcywxKTt0aGlzLktiPW5ldyBEayh0aGlzLmMsYSk7cmV0dXJuIEVrKHRoaXMuS2IpLnRoZW4oZnVuY3Rpb24oKXtIayh0aGlzLDIpfS5iaW5kKHRoaXMpKX07Vi5wcm90b3R5cGUuYmVnaW49Vi5wcm90b3R5cGUuRmY7XG5WLnByb3RvdHlwZS5FZj1mdW5jdGlvbihhKXtIayh0aGlzLDMpO3RyeXthLmFiKCl9Y2F0Y2goYil7cmV0dXJuIEhrKHRoaXMsNyksYmIoYil9cmV0dXJuIEZrKHRoaXMuS2IsYSkudGhlbihmdW5jdGlvbihhKXtIayh0aGlzLDIpO3JldHVybiBhfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGEpe0hrKHRoaXMsNyk7dGhyb3cgYTt9LmJpbmQodGhpcykpfTtWLnByb3RvdHlwZS5hdHRhY2g9Vi5wcm90b3R5cGUuRWY7Vi5wcm90b3R5cGUua2E9ZnVuY3Rpb24oKXtIayh0aGlzLDUpO3JldHVybiB0aGlzLktiLmthKCkudGhlbihmdW5jdGlvbigpe0hrKHRoaXMsNyl9LmJpbmQodGhpcykpfTtWLnByb3RvdHlwZS5jb21taXQ9Vi5wcm90b3R5cGUua2E7Vi5wcm90b3R5cGUuSmI9ZnVuY3Rpb24oKXtIayh0aGlzLDYpO3JldHVybiB0aGlzLktiLkpiKCkudGhlbihmdW5jdGlvbigpe0hrKHRoaXMsNyl9LmJpbmQodGhpcykpfTtWLnByb3RvdHlwZS5yb2xsYmFjaz1WLnByb3RvdHlwZS5KYjtcblYucHJvdG90eXBlLlk9ZnVuY3Rpb24oKXtpZig3IT10aGlzLlRhKXRocm93IG5ldyBEKDEwNSk7cmV0dXJuIHRoaXMuS2IuWSgpfTtWLnByb3RvdHlwZS5zdGF0cz1WLnByb3RvdHlwZS5ZO2Z1bmN0aW9uIFcoYSl7dGhpcy5jPWE7dGhpcy5nPWEuYihCYyk7dGhpcy5oZD0hMX1xKFwibGYucHJvYy5EYXRhYmFzZVwiLFcpO1cucHJvdG90eXBlLkVhPWZ1bmN0aW9uKGEpe3RoaXMuYy5yYihCYyx0aGlzLmcpO3JldHVybiB5ayh0aGlzLmMsYSkudGhlbihmdW5jdGlvbigpe3RoaXMuaGQ9ITA7dGhpcy5JYT10aGlzLmMuYih6Yyk7cmV0dXJuIHRoaXN9LmJpbmQodGhpcykpfTtXLnByb3RvdHlwZS5pbml0PVcucHJvdG90eXBlLkVhO1cucHJvdG90eXBlLnpiPWcoXCJnXCIpO1cucHJvdG90eXBlLmdldFNjaGVtYT1XLnByb3RvdHlwZS56YjtmdW5jdGlvbiBJayhhKXtpZighYS5oZCl0aHJvdyBuZXcgRCgyKTt9Vy5wcm90b3R5cGUuc2VsZWN0PWZ1bmN0aW9uKGEpe0lrKHRoaXMpO3JldHVybiBuZXcgVSh0aGlzLmMsMSE9YXJndW1lbnRzLmxlbmd0aHx8bnVsbCE9YXJndW1lbnRzWzBdP0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk6W10pfTtcblcucHJvdG90eXBlLnNlbGVjdD1XLnByb3RvdHlwZS5zZWxlY3Q7Vy5wcm90b3R5cGUuQWI9ZnVuY3Rpb24oKXtJayh0aGlzKTtyZXR1cm4gbmV3IGxpKHRoaXMuYyl9O1cucHJvdG90eXBlLmluc2VydD1XLnByb3RvdHlwZS5BYjtXLnByb3RvdHlwZS5XZD1mdW5jdGlvbigpe0lrKHRoaXMpO3JldHVybiBuZXcgbGkodGhpcy5jLCEwKX07Vy5wcm90b3R5cGUuaW5zZXJ0T3JSZXBsYWNlPVcucHJvdG90eXBlLldkO1cucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihhKXtJayh0aGlzKTtyZXR1cm4gbmV3IHZpKHRoaXMuYyxhKX07Vy5wcm90b3R5cGUudXBkYXRlPVcucHJvdG90eXBlLnVwZGF0ZTtXLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24oKXtJayh0aGlzKTtyZXR1cm4gbmV3IGtpKHRoaXMuYyl9O1cucHJvdG90eXBlW1wiZGVsZXRlXCJdPVcucHJvdG90eXBlLmRlbGV0ZTtcblcucHJvdG90eXBlLm9ic2VydmU9ZnVuY3Rpb24oYSxiKXtJayh0aGlzKTt0aGlzLmMuYihBYykuQ2QoYSxiKX07Vy5wcm90b3R5cGUub2JzZXJ2ZT1XLnByb3RvdHlwZS5vYnNlcnZlO1cucHJvdG90eXBlLnVub2JzZXJ2ZT1mdW5jdGlvbihhLGIpe0lrKHRoaXMpO3RoaXMuYy5iKEFjKS5uZShhLGIpfTtXLnByb3RvdHlwZS51bm9ic2VydmU9Vy5wcm90b3R5cGUudW5vYnNlcnZlO1cucHJvdG90eXBlLk5mPWZ1bmN0aW9uKCl7SWsodGhpcyk7cmV0dXJuIG5ldyBWKHRoaXMuYyl9O1cucHJvdG90eXBlLmNyZWF0ZVRyYW5zYWN0aW9uPVcucHJvdG90eXBlLk5mO1cucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dHJ5e3RoaXMuYy5iKHZjKS5jbG9zZSgpfWNhdGNoKGEpe310aGlzLmMuY2xlYXIoKTt0aGlzLmhkPSExfTtXLnByb3RvdHlwZS5jbG9zZT1XLnByb3RvdHlwZS5jbG9zZTtcblcucHJvdG90eXBlLlhmPWZ1bmN0aW9uKCl7SWsodGhpcyk7dmFyIGE9bmV3IHprKHRoaXMuYyk7cmV0dXJuIEplKHRoaXMuSWEsYSkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gSmQoYVswXSlbMF19KX07Vy5wcm90b3R5cGVbXCJleHBvcnRcIl09Vy5wcm90b3R5cGUuWGY7Vy5wcm90b3R5cGUuaW1wb3J0PWZ1bmN0aW9uKGEpe0lrKHRoaXMpO2E9bmV3IEJrKHRoaXMuYyxhKTtyZXR1cm4gSmUodGhpcy5JYSxhKS50aGVuKGsobnVsbCkpfTtXLnByb3RvdHlwZVtcImltcG9ydFwiXT1XLnByb3RvdHlwZS5pbXBvcnQ7ZnVuY3Rpb24gWChhLGIsYyxkLGUsZil7dGhpcy5VPWE7dGhpcy5BPWI7dGhpcy5ZZT1jO3RoaXMuV2U9ZDt0aGlzLnhmPWU7dGhpcy5LYT1mfHxudWxsfXEoXCJsZi5zY2hlbWEuQmFzZUNvbHVtblwiLFgpO209WC5wcm90b3R5cGU7bS5nZXROYW1lPWcoXCJBXCIpO20uaj1mdW5jdGlvbigpe3JldHVybiBUZCh0aGlzLlUpK1wiLlwiK3RoaXMuQX07bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmooKX07bS5JPWcoXCJVXCIpO20uRz1nKFwieGZcIik7WC5wcm90b3R5cGUuZ2V0VHlwZT1YLnByb3RvdHlwZS5HO1gucHJvdG90eXBlLkRhPWZ1bmN0aW9uKCl7bnVsbD09dGhpcy50YSYmKHRoaXMudGE9W10sdGhpcy5JKCkuRGEoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpey0xIT1hLmYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmJhLmdldE5hbWUoKX0pLmluZGV4T2YodGhpcy5BKSYmdGhpcy50YS5wdXNoKGEpfSx0aGlzKSk7cmV0dXJuIHRoaXMudGF9O1xuWC5wcm90b3R5cGUuQ2E9ZnVuY3Rpb24oKXtpZighbih0aGlzLmZhKSl7dmFyIGE9dGhpcy5EYSgpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gMSE9YS5mLmxlbmd0aD8hMTphLmZbMF0uYmEuZ2V0TmFtZSgpPT10aGlzLmdldE5hbWUoKX0sdGhpcyk7dGhpcy5mYT0wPGEubGVuZ3RoP2FbMF06bnVsbH1yZXR1cm4gdGhpcy5mYX07WC5wcm90b3R5cGUuaGM9ZyhcIldlXCIpO1gucHJvdG90eXBlLmlzTnVsbGFibGU9WC5wcm90b3R5cGUuaGM7WC5wcm90b3R5cGUuRGM9ZyhcIlllXCIpO1gucHJvdG90eXBlLlFhPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJlcVwiKX07WC5wcm90b3R5cGUuZXE9WC5wcm90b3R5cGUuUWE7WC5wcm90b3R5cGUuZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcIm5lcVwiKX07WC5wcm90b3R5cGUubmVxPVgucHJvdG90eXBlLmVmO1gucHJvdG90eXBlLnJnPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJsdFwiKX07XG5YLnByb3RvdHlwZS5sdD1YLnByb3RvdHlwZS5yZztYLnByb3RvdHlwZS5zZz1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwibHRlXCIpfTtYLnByb3RvdHlwZS5sdGU9WC5wcm90b3R5cGUuc2c7WC5wcm90b3R5cGUuYWc9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcImd0XCIpfTtYLnByb3RvdHlwZS5ndD1YLnByb3RvdHlwZS5hZztYLnByb3RvdHlwZS5iZz1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwiZ3RlXCIpfTtYLnByb3RvdHlwZS5ndGU9WC5wcm90b3R5cGUuYmc7WC5wcm90b3R5cGUubWF0Y2g9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcIm1hdGNoXCIpfTtYLnByb3RvdHlwZS5tYXRjaD1YLnByb3RvdHlwZS5tYXRjaDtYLnByb3RvdHlwZS5HZj1mdW5jdGlvbihhLGIpe3JldHVybiBYZyh0aGlzLFthLGJdLFwiYmV0d2VlblwiKX07WC5wcm90b3R5cGUuYmV0d2Vlbj1YLnByb3RvdHlwZS5HZjtcblgucHJvdG90eXBlLmNnPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJpblwiKX07WC5wcm90b3R5cGVbXCJpblwiXT1YLnByb3RvdHlwZS5jZztYLnByb3RvdHlwZS5tZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLlFhKG51bGwpfTtYLnByb3RvdHlwZS5pc051bGw9WC5wcm90b3R5cGUubWc7WC5wcm90b3R5cGUubGc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lZihudWxsKX07WC5wcm90b3R5cGUuaXNOb3ROdWxsPVgucHJvdG90eXBlLmxnO1gucHJvdG90eXBlLnJjPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgWCh0aGlzLlUsdGhpcy5BLHRoaXMuWWUsdGhpcy5XZSx0aGlzLnhmLGEpfTtYLnByb3RvdHlwZS5hcz1YLnByb3RvdHlwZS5yYztmdW5jdGlvbiBKayhhKXt0aGlzLmc9YTt0aGlzLklkPW5ldyBjZDt0aGlzLm9lPW5ldyBjZDt0aGlzLmdmPW5ldyBjZDt0aGlzLkllPXkoKTt0aGlzLmg9bmV3IGNkO3RoaXMuRWU9bmV3IGNkO3RoaXMubWY9bmV3IGNkO3RoaXMuSGU9bmV3IGNkO0trKHRoaXMpfWZ1bmN0aW9uIEtrKGEpe2EuZy5vYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5nZXROYW1lKCk7YS5NYi5VZC5mb3JFYWNoKGZ1bmN0aW9uKGMpe3RoaXMuZ2Yuc2V0KGIsdGhpcy5nLnRhYmxlKGMuWGEpKTt0aGlzLmguc2V0KGMuWGEsYSk7MD09Yy5hY3Rpb24/KHRoaXMub2Uuc2V0KGMuWGEsYyksdGhpcy5tZi5zZXQoYy5YYSxhKSk6KHRoaXMuSWQuc2V0KGMuWGEsYyksdGhpcy5FZS5zZXQoYy5YYSxhKSk7dGhpcy5JZS5zZXQoYS5nZXROYW1lKCkrXCIuXCIrYy52YixjLlhhKTt0aGlzLkhlLnNldChjLlhhK1wiLlwiK2MuSmMsYS5nZXROYW1lKCkpfSx0aGlzKX0sYSl9XG5mdW5jdGlvbiBrZChhLGIsYyl7aWYobnVsbCE9YylyZXR1cm4gMT09Yz9hLklkLmdldChiKTphLm9lLmdldChiKTtjPWEuSWQuZ2V0KGIpO2E9YS5vZS5nZXQoYik7cmV0dXJuIG51bGw9PT1jJiZudWxsPT09YT9udWxsOihjfHxbXSkuY29uY2F0KGF8fFtdKX1mdW5jdGlvbiBTaChhLGIpe2E9Yi5nZXQoYSk7cmV0dXJuIG51bGw9PT1hP1tdOmF9ZnVuY3Rpb24gVWgoYSxiKXt2YXIgYz1CKCk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpeyhhPXRoaXMuSWUuZ2V0KGEpKSYmYy5hZGQoYSl9LGEpO3JldHVybiBDKGMpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nLnRhYmxlKGEpfSxhKX1mdW5jdGlvbiBRaChhLGIsYyl7cmV0dXJuIG51bGwhPWM/MD09Yz9TaChiLGEubWYpOlNoKGIsYS5FZSk6U2goYixhLmgpfVxuZnVuY3Rpb24gVmgoYSxiKXt2YXIgYz1CKCk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpeyhhPXRoaXMuSGUuZ2V0KGEpKSYmYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2MuYWRkKGEpfSl9LGEpO3JldHVybiBDKGMpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nLnRhYmxlKGEpfSxhKX07ZnVuY3Rpb24gTGsoYSxiLGMpe3RoaXMuc2Q9YTt0aGlzLnhnPWI7dGhpcy5VZD1jfXEoXCJsZi5zY2hlbWEuQ29uc3RyYWludFwiLExrKTtMay5wcm90b3R5cGUuJGY9ZyhcInNkXCIpO0xrLnByb3RvdHlwZS5nZXRQcmltYXJ5S2V5PUxrLnByb3RvdHlwZS4kZjtMay5wcm90b3R5cGUuWmY9ZyhcIlVkXCIpO0xrLnByb3RvdHlwZS5nZXRGb3JlaWduS2V5cz1May5wcm90b3R5cGUuWmY7ZnVuY3Rpb24gTWsoYSxiLGMpe3ZhciBkPWEucmVmLnNwbGl0KFwiLlwiKTtpZigyIT1kLmxlbmd0aCl0aHJvdyBuZXcgRCg1NDAsYyk7dGhpcy5HZT1iO3RoaXMudmI9YS5sb2NhbDt0aGlzLlhhPWRbMF07dGhpcy5KYz1kWzFdO3RoaXMubmFtZT1iK1wiLlwiK2M7dGhpcy5hY3Rpb249YS5hY3Rpb247dGhpcy50aW1pbmc9YS50aW1pbmd9O2Z1bmN0aW9uIFkoYSl7TmsoYSk7dGhpcy5RZD1lZSgpO3RoaXMuQT1hO3RoaXMuSz15KCk7dGhpcy56ZD1CKCk7dGhpcy5uYz1CKCk7dGhpcy5uZD1CKCk7dGhpcy5GYT1udWxsO3RoaXMudGE9eSgpO3RoaXMucmQ9ITE7dGhpcy55Yj1bXX1xKFwibGYuc2NoZW1hLlRhYmxlQnVpbGRlclwiLFkpO2Z1bmN0aW9uIE9rKGEpe3RoaXMubmFtZT1hLm5hbWU7dGhpcy5vcmRlcj1hLm9yZGVyO3RoaXMuYXV0b0luY3JlbWVudD1hLmF1dG9JbmNyZW1lbnR9dmFyIFBrPUIoWzAsNl0pO2Z1bmN0aW9uIE5rKGEpe2lmKCEvXltBLVphLXpfXVtBLVphLXowLTlfXSokLy50ZXN0KGEpKXRocm93IG5ldyBEKDUwMixhKTt9ZnVuY3Rpb24gUWsoYSxiKXtpZihiPT1hLkEpdGhyb3cgbmV3IEQoNTQ2LGIpO2lmKGEuSy5oYXMoYil8fGEudGEuaGFzKGIpfHxhLm5jLmhhcyhiKSl0aHJvdyBuZXcgRCg1MDMsYS5BK1wiLlwiK2IpO31cbmZ1bmN0aW9uIFJrKGEsYil7dmFyIGM9ITE7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuSy5nZXQoYS5uYW1lKTtjPWN8fGEuYXV0b0luY3JlbWVudDtpZihhLmF1dG9JbmNyZW1lbnQmJjMhPWIpdGhyb3cgbmV3IEQoNTA0KTt9LGEpO2lmKGMmJjE8Yi5sZW5ndGgpdGhyb3cgbmV3IEQoNTA1KTt9ZnVuY3Rpb24gU2soYSl7aWYobnVsbCE9PWEuRmEpe3ZhciBiPWEudGEuZ2V0KGEuRmEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5uYW1lfSksYz0wO2lmKGEueWIuc29tZShmdW5jdGlvbihhLGUpe2M9ZTtyZXR1cm4tMSE9Yi5pbmRleE9mKGEudmIpfSxhKSl0aHJvdyBuZXcgRCg1NDMsYS55YltjXS5uYW1lKTt9fVxuZnVuY3Rpb24gVGsoYSl7aWYobnVsbCE9PWEuRmEpe3ZhciBiPWZ1bmN0aW9uKGEpe3JldHVybiBhLm5hbWV9LGM9SlNPTi5zdHJpbmdpZnkoYS50YS5nZXQoYS5GYSkubWFwKGIpKTthLnRhLmZvckVhY2goZnVuY3Rpb24oYSxlKXtpZihlIT10aGlzLkZhJiYoYT1hLm1hcChiKSxKU09OLnN0cmluZ2lmeShhKT09YykpdGhyb3cgbmV3IEQoNTQ0LHRoaXMuQStcIi5cIitlKTt9LGEpfX1mdW5jdGlvbiBVayhhKXtudWxsPT09YS5GYXx8YS50YS5nZXQoYS5GYSkuZm9yRWFjaChmdW5jdGlvbihhKXtpZih0aGlzLm5kLmhhcyhhLm5hbWUpKXRocm93IG5ldyBEKDU0NSx0aGlzLkErXCIuXCIrYS5uYW1lKTt9LGEpfVkucHJvdG90eXBlLnpmPWZ1bmN0aW9uKGEsYil7TmsoYSk7UWsodGhpcyxhKTt0aGlzLksuc2V0KGEsYik7UGsuaGFzKGIpJiZ0aGlzLkJlKFthXSk7cmV0dXJuIHRoaXN9O1kucHJvdG90eXBlLmFkZENvbHVtbj1ZLnByb3RvdHlwZS56ZjtcblkucHJvdG90eXBlLkJmPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5BO3RoaXMuRmE9XCJwa1wiKyhjWzBdLnRvVXBwZXJDYXNlKCkrYy5zdWJzdHJpbmcoMSkpO05rKHRoaXMuRmEpO1FrKHRoaXMsdGhpcy5GYSk7YT1Wayh0aGlzLGEsITAsdm9pZCAwLGIpO1JrKHRoaXMsYSk7MT09YS5sZW5ndGgmJnRoaXMuemQuYWRkKGFbMF0ubmFtZSk7dGhpcy5uYy5hZGQodGhpcy5GYSk7dGhpcy50YS5zZXQodGhpcy5GYSxhKTtyZXR1cm4gdGhpc307WS5wcm90b3R5cGUuYWRkUHJpbWFyeUtleT1ZLnByb3RvdHlwZS5CZjtcblkucHJvdG90eXBlLkFmPWZ1bmN0aW9uKGEsYil7TmsoYSk7UWsodGhpcyxhKTtiPW5ldyBNayhiLHRoaXMuQSxhKTtuKGIuYWN0aW9uKXx8KGIuYWN0aW9uPTApO24oYi50aW1pbmcpfHwoYi50aW1pbmc9MCk7aWYoMT09Yi5hY3Rpb24mJjE9PWIudGltaW5nKXRocm93IG5ldyBEKDUwNik7aWYoIXRoaXMuSy5oYXMoYi52YikpdGhyb3cgbmV3IEQoNTQwLGEpO3RoaXMueWIucHVzaChiKTt0aGlzLkFlKGEsW2IudmJdLHRoaXMuemQuaGFzKGIudmIpKTtyZXR1cm4gdGhpc307WS5wcm90b3R5cGUuYWRkRm9yZWlnbktleT1ZLnByb3RvdHlwZS5BZjtZLnByb3RvdHlwZS5DZj1mdW5jdGlvbihhLGIpe05rKGEpO1FrKHRoaXMsYSk7Yj1Wayh0aGlzLGIsITApOzE9PWIubGVuZ3RoJiYodGhpcy56ZC5hZGQoYlswXS5uYW1lKSxXayh0aGlzLGJbMF0ubmFtZSkpO3RoaXMudGEuc2V0KGEsYik7dGhpcy5uYy5hZGQoYSk7cmV0dXJuIHRoaXN9O1kucHJvdG90eXBlLmFkZFVuaXF1ZT1ZLnByb3RvdHlwZS5DZjtcbmZ1bmN0aW9uIFdrKGEsYil7YS55Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EudmI9PWImJnRoaXMubmMuYWRkKGEubmFtZS5zcGxpdChcIi5cIilbMV0pfSxhKX1ZLnByb3RvdHlwZS5CZT1mdW5jdGlvbihhKXtWayh0aGlzLGEsITEpLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5uZC5hZGQoYS5uYW1lKX0sdGhpcyk7cmV0dXJuIHRoaXN9O1kucHJvdG90eXBlLmFkZE51bGxhYmxlPVkucHJvdG90eXBlLkJlO1kucHJvdG90eXBlLkFlPWZ1bmN0aW9uKGEsYixjLGQpe05rKGEpO1FrKHRoaXMsYSk7Yj1Wayh0aGlzLGIsITAsZCk7YyYmdGhpcy5uYy5hZGQoYSk7dGhpcy50YS5zZXQoYSxiKTtyZXR1cm4gdGhpc307WS5wcm90b3R5cGUuYWRkSW5kZXg9WS5wcm90b3R5cGUuQWU7WS5wcm90b3R5cGUuQ2I9YmEoXCJyZFwiKTtZLnByb3RvdHlwZS5wZXJzaXN0ZW50SW5kZXg9WS5wcm90b3R5cGUuQ2I7XG5ZLnByb3RvdHlwZS56Yj1mdW5jdGlvbigpe1NrKHRoaXMpO1RrKHRoaXMpO1VrKHRoaXMpO3JldHVybiBuZXcgKFhrKHRoaXMpKX07WS5wcm90b3R5cGUuZ2V0U2NoZW1hPVkucHJvdG90eXBlLnpiO2Z1bmN0aW9uIFZrKGEsYixjLGQsZSl7dmFyIGY9YixmPVwic3RyaW5nXCI9PXR5cGVvZiBiWzBdP2IubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgT2soe25hbWU6YSxvcmRlcjpudWxsIT1kP2Q6MSxhdXRvSW5jcmVtZW50OmV8fCExfSl9KTpiLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IE9rKGEpfSk7Zi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2lmKCF0aGlzLksuaGFzKGEubmFtZSkpdGhyb3cgbmV3IEQoNTA4LHRoaXMuQSxhLm5hbWUpO2lmKGMpe3ZhciBiPXRoaXMuSy5nZXQoYS5uYW1lKTtpZigwPT1ifHw2PT1iKXRocm93IG5ldyBEKDUwOSx0aGlzLkEsYS5uYW1lKTt9fSxhKTtyZXR1cm4gZn1cbmZ1bmN0aW9uIFhrKGEpe2Z1bmN0aW9uIGIoKXtmdW5jdGlvbiBiKGIpe3JldHVybiBhLnRhLmdldChiKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJue2JhOnRoaXNbYS5uYW1lXSxvcmRlcjphLm9yZGVyLGF1dG9JbmNyZW1lbnQ6YS5hdXRvSW5jcmVtZW50fX0sdGhpcyl9dmFyIGQ9Z2MoYS5LKS5tYXAoZnVuY3Rpb24oYil7dGhpc1tiXT1uZXcgWCh0aGlzLGIsYS56ZC5oYXMoYiksYS5uZC5oYXMoYiksYS5LLmdldChiKSk7cmV0dXJuIHRoaXNbYl19LHRoaXMpLGU9Z2MoYS50YSkubWFwKGZ1bmN0aW9uKGMpe3JldHVybiBuZXcgWmcoYS5BLGMsYS5uYy5oYXMoYyksYi5jYWxsKHRoaXMsYykpfSx0aGlzKTtRLmNhbGwodGhpcyxhLkEsZCxlLGEucmQpO3ZhciBmPW51bGw9PT1hLkZhP251bGw6bmV3IFpnKGEuQSxhLkZhLCEwLGIuY2FsbCh0aGlzLGEuRmEpKSxoPWQuZmlsdGVyKGZ1bmN0aW9uKGIpe3JldHVybiFhLm5kLmhhcyhiLmdldE5hbWUoKSl9KTt0aGlzLk1iPW5ldyBMayhmLFxuaCxhLnliKTt0aGlzLnFmPVlrKGEsZCxlKX1yKGIsUSk7Yi5wcm90b3R5cGUueGI9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB0aGlzLnFmKGljKyssYSl9O2IucHJvdG90eXBlLmNyZWF0ZVJvdz1iLnByb3RvdHlwZS54YjtiLnByb3RvdHlwZS5rYj1mdW5jdGlvbihhKXt2YXIgYj17fTt0aGlzLmxiKCkuZm9yRWFjaChmdW5jdGlvbihjKXt2YXIgZD1jLmdldE5hbWUoKTtjPWMuRygpO3ZhciBlPWEudmFsdWVbZF07aWYoMD09YylpZihjPWUsbnVsbCE9YyYmXCJcIiE9Yyl7MCE9Yy5sZW5ndGglMiYmKGM9XCIwXCIrYyk7Zm9yKHZhciBlPW5ldyBBcnJheUJ1ZmZlcihjLmxlbmd0aC8yKSxsPW5ldyBVaW50OEFycmF5KGUpLHA9MCxMPTA7cDxjLmxlbmd0aDtwKz0yKWxbTCsrXT1wYXJzZUludChjLnN1YnN0cihwLDIpLDE2KTtjPWV9ZWxzZSBjPW51bGw7ZWxzZSBjPTI9PWM/bnVsbCE9ZT9uZXcgRGF0ZShlKTpudWxsOmU7YltkXT1jfSx0aGlzKTtyZXR1cm4gbmV3IHRoaXMucWYoYS5pZCxiKX07XG5iLnByb3RvdHlwZS5kZXNlcmlhbGl6ZVJvdz1iLnByb3RvdHlwZS5rYjtiLnByb3RvdHlwZS5OZT1nKFwiTWJcIik7Yi5wcm90b3R5cGUuZ2V0Q29uc3RyYWludD1iLnByb3RvdHlwZS5OZTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFlrKGEsYixjKXtmdW5jdGlvbiBkKGEsZCl7dGhpcy5LPWI7dGhpcy50YT1jO2hjLmNhbGwodGhpcyxhLGQpfXIoZCxoYyk7ZC5wcm90b3R5cGUuS2U9ZnVuY3Rpb24oKXt2YXIgYT17fTt0aGlzLksuZm9yRWFjaChmdW5jdGlvbihiKXthW2IuZ2V0TmFtZSgpXT1iLmhjKCk/bnVsbDpiZFtiLkcoKV19KTtyZXR1cm4gYX07ZC5wcm90b3R5cGUud2Y9ZnVuY3Rpb24oKXt2YXIgYT17fTt0aGlzLksuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgYz1iLmdldE5hbWUoKTtiPWIuRygpO3ZhciBkPXRoaXMubVtjXTthW2NdPTA9PWI/bnVsbCE9ZD9sYyhkKTpudWxsOjI9PWI/bnVsbCE9ZD9kLmdldFRpbWUoKTpudWxsOjY9PWI/bnVsbCE9ZD9kOm51bGw6ZH0sdGhpcyk7cmV0dXJuIGF9O3ZhciBlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuSy5nZXQoYS5nZXROYW1lKCkpLGM9dGhpcy5RZC5aZS5nZXQoYil8fG51bGw7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBjKGJbYS5nZXROYW1lKCldKX19LmJpbmQoYSksXG5mPWZ1bmN0aW9uKGEpe3ZhciBiPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBlKGEuYmEpfSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBiLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gYihhKX0pfX0uYmluZChhKSxoPXt9O2MuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLmooKTthPTE9PWEuZi5sZW5ndGg/ZShhLmZbMF0uYmEpOmYoYS5mKTtoW2JdPWF9KTtkLnByb3RvdHlwZS5uYj1mdW5jdGlvbihhKXtyZXR1cm4tMSE9YS5pbmRleE9mKFwiI1wiKT90aGlzLmlkKCk6aC5oYXNPd25Qcm9wZXJ0eShhKT9oW2FdKHRoaXMubSk6bnVsbH07cmV0dXJuIGR9O2Z1bmN0aW9uIFprKGEsYil7dGhpcy5nPW5ldyBaKGEsYik7dGhpcy50Yj15KCk7dGhpcy55Yz0hMTt0aGlzLmk9bnVsbDt0aGlzLlljPSExfXEoXCJsZi5zY2hlbWEuQnVpbGRlclwiLFprKTtmdW5jdGlvbiAkayhhLGIpe2IueWIuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYz1hLlhhO2lmKCF0aGlzLnRiLmhhcyhjKSl0aHJvdyBuZXcgRCg1MzYsYS5uYW1lKTt2YXIgYz10aGlzLnRiLmdldChjKS56YigpLGU9YS5KYztpZighYy5oYXNPd25Qcm9wZXJ0eShlKSl0aHJvdyBuZXcgRCg1MzcsYS5uYW1lKTtpZihiLnpiKClbYS52Yl0uRygpIT1jW2VdLkcoKSl0aHJvdyBuZXcgRCg1MzgsYS5uYW1lKTtpZighY1tlXS5EYygpKXRocm93IG5ldyBEKDUzOSxhLm5hbWUpO30sYSl9XG5aay5wcm90b3R5cGUuS2Y9ZnVuY3Rpb24oYSl7YS55Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMudGIuZ2V0KGEuWGEpLnliLmZvckVhY2goZnVuY3Rpb24oYil7aWYoYi52Yj09YS5KYyl0aHJvdyBuZXcgRCg1MzQsYS5uYW1lKTt9LHRoaXMpfSx0aGlzKX07ZnVuY3Rpb24gYWwoYSl7YS55Y3x8KGEudGIuZm9yRWFjaChmdW5jdGlvbihhKXskayh0aGlzLGEpO2E9YS56YigpO3RoaXMuZy5NLnNldChhLmdldE5hbWUoKSxhKX0sYSkseihhLnRiKS5mb3JFYWNoKGEuS2YsYSksYmwoYSksYS50Yi5jbGVhcigpLGEueWM9ITApfWZ1bmN0aW9uIGNsKGEsYixjKXtiLnllfHwoYi55ZT0hMCxiLmZlPSEwLGIuTGUuZm9yRWFjaChmdW5jdGlvbihhKXthPWMuZ2V0KGEpO2lmKCFhLnllKWNsKHRoaXMsYSxjKTtlbHNlIGlmKGEuZmUmJmIhPWEpdGhyb3cgbmV3IEQoNTMzKTt9LGEpKTtiLmZlPSExfVxuZnVuY3Rpb24gYmwoYSl7dmFyIGI9eSgpO2EuZy5NLmZvckVhY2goZnVuY3Rpb24oYSxkKXtiLnNldChkLG5ldyBkbChkKSl9LGEpO2EudGIuZm9yRWFjaChmdW5jdGlvbihhLGQpe2EueWIuZm9yRWFjaChmdW5jdGlvbihhKXtiLmdldChhLlhhKS5MZS5hZGQoZCl9KX0pO3ooYikuZm9yRWFjaChmdW5jdGlvbihhKXtjbCh0aGlzLGEsYil9LGEpfWZ1bmN0aW9uIGRsKGEpe3RoaXMuZmU9dGhpcy55ZT0hMTt0aGlzLkxlPUIoKTt0aGlzLm1jPWF9WmsucHJvdG90eXBlLnpiPWZ1bmN0aW9uKCl7dGhpcy55Y3x8YWwodGhpcyk7cmV0dXJuIHRoaXMuZ307WmsucHJvdG90eXBlLmdldFNjaGVtYT1aay5wcm90b3R5cGUuemI7WmsucHJvdG90eXBlLlFlPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IHVjKFwibnNfXCIrdGhpcy5nLm5hbWUoKSksYj1qaygpLGM7Yi5tZChhKT9jPWIuYihhKTooYz1uZXcgaGssYi5yYihhLGMpKTtyZXR1cm4gY307WmsucHJvdG90eXBlLmdldEdsb2JhbD1aay5wcm90b3R5cGUuUWU7XG5aay5wcm90b3R5cGUuY29ubmVjdD1mdW5jdGlvbihhKXtpZih0aGlzLlljfHxudWxsIT09dGhpcy5pJiZ0aGlzLmkuaGQpdGhyb3cgbmV3IEQoMTEzKTt0aGlzLlljPSEwO2lmKG51bGw9PT10aGlzLmkpe3ZhciBiPXRoaXMuUWUoKTtiLm1kKEJjKXx8Yi5yYihCYyx0aGlzLnpiKCkpO3RoaXMuaT1uZXcgVyhiKX1yZXR1cm4gdGhpcy5pLkVhKGEpLnRoZW4oZnVuY3Rpb24oYSl7dGhpcy5ZYz0hMTtyZXR1cm4gYX0uYmluZCh0aGlzKSxmdW5jdGlvbihhKXt0aGlzLlljPSExO3Rocm93IGE7fS5iaW5kKHRoaXMpKX07WmsucHJvdG90eXBlLmNvbm5lY3Q9WmsucHJvdG90eXBlLmNvbm5lY3Q7WmsucHJvdG90eXBlLk1mPWZ1bmN0aW9uKGEpe2lmKHRoaXMudGIuaGFzKGEpKXRocm93IG5ldyBEKDUwMyxhKTtpZih0aGlzLnljKXRocm93IG5ldyBEKDUzNSk7dGhpcy50Yi5zZXQoYSxuZXcgWShhKSk7cmV0dXJuIHRoaXMudGIuZ2V0KGEpfTtaay5wcm90b3R5cGUuY3JlYXRlVGFibGU9WmsucHJvdG90eXBlLk1mO1xuWmsucHJvdG90eXBlLnNlPWZ1bmN0aW9uKGEpe2lmKHRoaXMueWMpdGhyb3cgbmV3IEQoNTM1KTt0aGlzLmcuc2UoYSk7cmV0dXJuIHRoaXN9O1prLnByb3RvdHlwZS5zZXRQcmFnbWE9WmsucHJvdG90eXBlLnNlO2Z1bmN0aW9uIFooYSxiKXt0aGlzLkE9YTt0aGlzLlVhPWI7dGhpcy5NPXkoKTt0aGlzLmtlPXtTZjohMX19cShcImxmLnNjaGVtYS5EYXRhYmFzZVNjaGVtYVwiLFopO1oucHJvdG90eXBlLm5hbWU9ZyhcIkFcIik7Wi5wcm90b3R5cGUubmFtZT1aLnByb3RvdHlwZS5uYW1lO1oucHJvdG90eXBlLnZlcnNpb249ZyhcIlVhXCIpO1oucHJvdG90eXBlLnZlcnNpb249Wi5wcm90b3R5cGUudmVyc2lvbjtaLnByb3RvdHlwZS5vYT1mdW5jdGlvbigpe3JldHVybiB6KHRoaXMuTSl9O1oucHJvdG90eXBlLnRhYmxlcz1aLnByb3RvdHlwZS5vYTtaLnByb3RvdHlwZS50YWJsZT1mdW5jdGlvbihhKXtpZighdGhpcy5NLmhhcyhhKSl0aHJvdyBuZXcgRCgxMDEsYSk7cmV0dXJuIHRoaXMuTS5nZXQoYSl9O1xuWi5wcm90b3R5cGUudGFibGU9Wi5wcm90b3R5cGUudGFibGU7Wi5wcm90b3R5cGUuaW5mbz1mdW5jdGlvbigpe3RoaXMuVmV8fCh0aGlzLlZlPW5ldyBKayh0aGlzKSk7cmV0dXJuIHRoaXMuVmV9O1oucHJvdG90eXBlLkZnPWcoXCJrZVwiKTtaLnByb3RvdHlwZS5wcmFnbWE9Wi5wcm90b3R5cGUuRmc7Wi5wcm90b3R5cGUuc2U9YmEoXCJrZVwiKTtxKFwibGYuc2NoZW1hLmNyZWF0ZVwiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBaayhhLGIpfSk7dS5wcm90b3R5cGUuY2F0Y2g9dS5wcm90b3R5cGUudmU7dS5wcm90b3R5cGVbXCJjYXRjaFwiXT11LnByb3RvdHlwZS5jYXRjaDtcbnRyeXtpZihtb2R1bGUpe21vZHVsZS5leHBvcnRzPWxmO319Y2F0Y2goZSl7fX0uYmluZCh3aW5kb3cpKSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG92ZWZpZWxkLm1pbi5qcy5tYXBcbiIsIihmdW5jdGlvbigpe1xyXG4gIHZhciBjcnlwdCA9IHJlcXVpcmUoJ2NyeXB0JyksXHJcbiAgICAgIHV0ZjggPSByZXF1aXJlKCdjaGFyZW5jJykudXRmOCxcclxuICAgICAgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKSxcclxuICAgICAgYmluID0gcmVxdWlyZSgnY2hhcmVuYycpLmJpbixcclxuXHJcbiAgLy8gVGhlIGNvcmVcclxuICBtZDUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgLy8gQ29udmVydCB0byBieXRlIGFycmF5XHJcbiAgICBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcgPT09ICdiaW5hcnknKVxyXG4gICAgICAgIG1lc3NhZ2UgPSBiaW4uc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UgPSB1dGY4LnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICBlbHNlIGlmIChpc0J1ZmZlcihtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lc3NhZ2UsIDApO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBlbHNlLCBhc3N1bWUgYnl0ZSBhcnJheSBhbHJlYWR5XHJcblxyXG4gICAgdmFyIG0gPSBjcnlwdC5ieXRlc1RvV29yZHMobWVzc2FnZSksXHJcbiAgICAgICAgbCA9IG1lc3NhZ2UubGVuZ3RoICogOCxcclxuICAgICAgICBhID0gIDE3MzI1ODQxOTMsXHJcbiAgICAgICAgYiA9IC0yNzE3MzM4NzksXHJcbiAgICAgICAgYyA9IC0xNzMyNTg0MTk0LFxyXG4gICAgICAgIGQgPSAgMjcxNzMzODc4O1xyXG5cclxuICAgIC8vIFN3YXAgZW5kaWFuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbVtpXSA9ICgobVtpXSA8PCAgOCkgfCAobVtpXSA+Pj4gMjQpKSAmIDB4MDBGRjAwRkYgfFxyXG4gICAgICAgICAgICAgKChtW2ldIDw8IDI0KSB8IChtW2ldID4+PiAgOCkpICYgMHhGRjAwRkYwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYWRkaW5nXHJcbiAgICBtW2wgPj4+IDVdIHw9IDB4ODAgPDwgKGwgJSAzMik7XHJcbiAgICBtWygoKGwgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbDtcclxuXHJcbiAgICAvLyBNZXRob2Qgc2hvcnRjdXRzXHJcbiAgICB2YXIgRkYgPSBtZDUuX2ZmLFxyXG4gICAgICAgIEdHID0gbWQ1Ll9nZyxcclxuICAgICAgICBISCA9IG1kNS5faGgsXHJcbiAgICAgICAgSUkgPSBtZDUuX2lpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkgKz0gMTYpIHtcclxuXHJcbiAgICAgIHZhciBhYSA9IGEsXHJcbiAgICAgICAgICBiYiA9IGIsXHJcbiAgICAgICAgICBjYyA9IGMsXHJcbiAgICAgICAgICBkZCA9IGQ7XHJcblxyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDcsIC02ODA4NzY5MzYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTcsICA2MDYxMDU4MTkpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgNF0sICA3LCAtMTc2NDE4ODk3KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgNV0sIDEyLCAgMTIwMDA4MDQyNik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDhdLCAgNywgIDE3NzAwMzU0MTYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE3LCAtNDIwNjMpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsxMl0sICA3LCAgMTgwNDYwMzY4Mik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTVdLCAyMiwgIDEyMzY1MzUzMjkpO1xyXG5cclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgMV0sICA1LCAtMTY1Nzk2NTEwKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgNl0sICA5LCAtMTA2OTUwMTYzMik7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDVdLCAgNSwgLTcwMTU1ODY5MSk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTBdLCAgOSwgIDM4MDE2MDgzKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgOV0sICA1LCAgNTY4NDQ2NDM4KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxNF0sICA5LCAtMTAxOTgwMzY5MCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKzEzXSwgIDUsIC0xNDQ0NjgxNDY3KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgMl0sICA5LCAtNTE0MDM3ODQpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XHJcblxyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA1XSwgIDQsIC0zNzg1NTgpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE2LCAgMTgzOTAzMDU2Mik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTRdLCAyMywgLTM1MzA5NTU2KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgMV0sICA0LCAtMTUzMDk5MjA2MCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDRdLCAxMSwgIDEyNzI4OTMzNTMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsxM10sICA0LCAgNjgxMjc5MTc0KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgMF0sIDExLCAtMzU4NTM3MjIyKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgM10sIDE2LCAtNzIyNTIxOTc5KTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgNl0sIDIzLCAgNzYwMjkxODkpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA5XSwgIDQsIC02NDAzNjQ0ODcpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKzEyXSwgMTEsIC00MjE4MTU4MzUpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzE1XSwgMTYsICA1MzA3NDI1MjApO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xyXG5cclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgMF0sICA2LCAtMTk4NjMwODQ0KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krMTJdLCAgNiwgIDE3MDA0ODU1NzEpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE1LCAtMTA1MTUyMyk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDYsICAxODczMzEzMzU5KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxNV0sIDEwLCAtMzA2MTE3NDQpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsxM10sIDIxLCAgMTMwOTE1MTY0OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDRdLCAgNiwgLTE0NTUyMzA3MCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTUsICA3MTg3ODcyNTkpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xyXG5cclxuICAgICAgYSA9IChhICsgYWEpID4+PiAwO1xyXG4gICAgICBiID0gKGIgKyBiYikgPj4+IDA7XHJcbiAgICAgIGMgPSAoYyArIGNjKSA+Pj4gMDtcclxuICAgICAgZCA9IChkICsgZGQpID4+PiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcnlwdC5lbmRpYW4oW2EsIGIsIGMsIGRdKTtcclxuICB9O1xyXG5cclxuICAvLyBBdXhpbGlhcnkgZnVuY3Rpb25zXHJcbiAgbWQ1Ll9mZiAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBjIHwgfmIgJiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9nZyAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBkIHwgYyAmIH5kKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9oaCAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgXiBjIF4gZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faWkgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuXHJcbiAgLy8gUGFja2FnZSBwcml2YXRlIGJsb2Nrc2l6ZVxyXG4gIG1kNS5fYmxvY2tzaXplID0gMTY7XHJcbiAgbWQ1Ll9kaWdlc3RzaXplID0gMTY7XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGFyZ3VtZW50ICcgKyBtZXNzYWdlKTtcclxuXHJcbiAgICB2YXIgZGlnZXN0Ynl0ZXMgPSBjcnlwdC53b3Jkc1RvQnl0ZXMobWQ1KG1lc3NhZ2UsIG9wdGlvbnMpKTtcclxuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuYXNCeXRlcyA/IGRpZ2VzdGJ5dGVzIDpcclxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMuYXNTdHJpbmcgPyBiaW4uYnl0ZXNUb1N0cmluZyhkaWdlc3RieXRlcykgOlxyXG4gICAgICAgIGNyeXB0LmJ5dGVzVG9IZXgoZGlnZXN0Ynl0ZXMpO1xyXG4gIH07XHJcblxyXG59KSgpO1xyXG4iLCIvLyEgbW9tZW50LmpzXG4vLyEgdmVyc2lvbiA6IDIuMjAuMVxuLy8hIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgbW9tZW50anMuY29tXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIGdsb2JhbC5tb21lbnQgPSBmYWN0b3J5KClcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgaG9va0NhbGxiYWNrO1xuXG5mdW5jdGlvbiBob29rcyAoKSB7XG4gICAgcmV0dXJuIGhvb2tDYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG4vLyBUaGlzIGlzIGRvbmUgdG8gcmVnaXN0ZXIgdGhlIG1ldGhvZCBjYWxsZWQgd2l0aCBtb21lbnQoKVxuLy8gd2l0aG91dCBjcmVhdGluZyBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5mdW5jdGlvbiBzZXRIb29rQ2FsbGJhY2sgKGNhbGxiYWNrKSB7XG4gICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBBcnJheSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChpbnB1dCkge1xuICAgIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAgIC8vIGlucHV0ICE9IG51bGxcbiAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmopIHtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcbiAgICAgICAgcmV0dXJuIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCA9PT0gMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGs7XG4gICAgICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PT0gdm9pZCAwO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihpbnB1dCkge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBEYXRlIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gbWFwKGFyciwgZm4pIHtcbiAgICB2YXIgcmVzID0gW10sIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgICAgICByZXMucHVzaChmbihhcnJbaV0sIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gaGFzT3duUHJvcChhLCBiKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcbiAgICBmb3IgKHZhciBpIGluIGIpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoYiwgaSkpIHtcbiAgICAgICAgICAgIGFbaV0gPSBiW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgYS50b1N0cmluZyA9IGIudG9TdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKGhhc093blByb3AoYiwgJ3ZhbHVlT2YnKSkge1xuICAgICAgICBhLnZhbHVlT2YgPSBiLnZhbHVlT2Y7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVUQyAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgdHJ1ZSkudXRjKCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxuICAgIHJldHVybiB7XG4gICAgICAgIGVtcHR5ICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICB1bnVzZWRUb2tlbnMgICAgOiBbXSxcbiAgICAgICAgdW51c2VkSW5wdXQgICAgIDogW10sXG4gICAgICAgIG92ZXJmbG93ICAgICAgICA6IC0yLFxuICAgICAgICBjaGFyc0xlZnRPdmVyICAgOiAwLFxuICAgICAgICBudWxsSW5wdXQgICAgICAgOiBmYWxzZSxcbiAgICAgICAgaW52YWxpZE1vbnRoICAgIDogbnVsbCxcbiAgICAgICAgaW52YWxpZEZvcm1hdCAgIDogZmFsc2UsXG4gICAgICAgIHVzZXJJbnZhbGlkYXRlZCA6IGZhbHNlLFxuICAgICAgICBpc28gICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgcGFyc2VkRGF0ZVBhcnRzIDogW10sXG4gICAgICAgIG1lcmlkaWVtICAgICAgICA6IG51bGwsXG4gICAgICAgIHJmYzI4MjIgICAgICAgICA6IGZhbHNlLFxuICAgICAgICB3ZWVrZGF5TWlzbWF0Y2ggOiBmYWxzZVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhtKSB7XG4gICAgaWYgKG0uX3BmID09IG51bGwpIHtcbiAgICAgICAgbS5fcGYgPSBkZWZhdWx0UGFyc2luZ0ZsYWdzKCk7XG4gICAgfVxuICAgIHJldHVybiBtLl9wZjtcbn1cblxudmFyIHNvbWU7XG5pZiAoQXJyYXkucHJvdG90eXBlLnNvbWUpIHtcbiAgICBzb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWU7XG59IGVsc2Uge1xuICAgIHNvbWUgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgaW4gdCAmJiBmdW4uY2FsbCh0aGlzLCB0W2ldLCBpLCB0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQobSkge1xuICAgIGlmIChtLl9pc1ZhbGlkID09IG51bGwpIHtcbiAgICAgICAgdmFyIGZsYWdzID0gZ2V0UGFyc2luZ0ZsYWdzKG0pO1xuICAgICAgICB2YXIgcGFyc2VkUGFydHMgPSBzb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBpc05vd1ZhbGlkID0gIWlzTmFOKG0uX2QuZ2V0VGltZSgpKSAmJlxuICAgICAgICAgICAgZmxhZ3Mub3ZlcmZsb3cgPCAwICYmXG4gICAgICAgICAgICAhZmxhZ3MuZW1wdHkgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkV2Vla2RheSAmJlxuICAgICAgICAgICAgIWZsYWdzLndlZWtkYXlNaXNtYXRjaCAmJlxuICAgICAgICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRGb3JtYXQgJiZcbiAgICAgICAgICAgICFmbGFncy51c2VySW52YWxpZGF0ZWQgJiZcbiAgICAgICAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XG5cbiAgICAgICAgaWYgKG0uX3N0cmljdCkge1xuICAgICAgICAgICAgaXNOb3dWYWxpZCA9IGlzTm93VmFsaWQgJiZcbiAgICAgICAgICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKG0pKSB7XG4gICAgICAgICAgICBtLl9pc1ZhbGlkID0gaXNOb3dWYWxpZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpc05vd1ZhbGlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtLl9pc1ZhbGlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkIChmbGFncykge1xuICAgIHZhciBtID0gY3JlYXRlVVRDKE5hTik7XG4gICAgaWYgKGZsYWdzICE9IG51bGwpIHtcbiAgICAgICAgZXh0ZW5kKGdldFBhcnNpbmdGbGFncyhtKSwgZmxhZ3MpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLnVzZXJJbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIFBsdWdpbnMgdGhhdCBhZGQgcHJvcGVydGllcyBzaG91bGQgYWxzbyBhZGQgdGhlIGtleSBoZXJlIChudWxsIHZhbHVlKSxcbi8vIHNvIHdlIGNhbiBwcm9wZXJseSBjbG9uZSBvdXJzZWx2ZXMuXG52YXIgbW9tZW50UHJvcGVydGllcyA9IGhvb2tzLm1vbWVudFByb3BlcnRpZXMgPSBbXTtcblxuZnVuY3Rpb24gY29weUNvbmZpZyh0bywgZnJvbSkge1xuICAgIHZhciBpLCBwcm9wLCB2YWw7XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2lzQU1vbWVudE9iamVjdCkpIHtcbiAgICAgICAgdG8uX2lzQU1vbWVudE9iamVjdCA9IGZyb20uX2lzQU1vbWVudE9iamVjdDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pKSkge1xuICAgICAgICB0by5faSA9IGZyb20uX2k7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fZikpIHtcbiAgICAgICAgdG8uX2YgPSBmcm9tLl9mO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2wpKSB7XG4gICAgICAgIHRvLl9sID0gZnJvbS5fbDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9zdHJpY3QpKSB7XG4gICAgICAgIHRvLl9zdHJpY3QgPSBmcm9tLl9zdHJpY3Q7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fdHptKSkge1xuICAgICAgICB0by5fdHptID0gZnJvbS5fdHptO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2lzVVRDKSkge1xuICAgICAgICB0by5faXNVVEMgPSBmcm9tLl9pc1VUQztcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9vZmZzZXQpKSB7XG4gICAgICAgIHRvLl9vZmZzZXQgPSBmcm9tLl9vZmZzZXQ7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fcGYpKSB7XG4gICAgICAgIHRvLl9wZiA9IGdldFBhcnNpbmdGbGFncyhmcm9tKTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sb2NhbGUpKSB7XG4gICAgICAgIHRvLl9sb2NhbGUgPSBmcm9tLl9sb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKG1vbWVudFByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbW9tZW50UHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHJvcCA9IG1vbWVudFByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICB2YWwgPSBmcm9tW3Byb3BdO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdG9bcHJvcF0gPSB2YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbnZhciB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG5cbi8vIE1vbWVudCBwcm90b3R5cGUgb2JqZWN0XG5mdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XG4gICAgY29weUNvbmZpZyh0aGlzLCBjb25maWcpO1xuICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShjb25maWcuX2QgIT0gbnVsbCA/IGNvbmZpZy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAvLyBvYmplY3RzLlxuICAgIGlmICh1cGRhdGVJblByb2dyZXNzID09PSBmYWxzZSkge1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc01vbWVudCAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1vbWVudCB8fCAob2JqICE9IG51bGwgJiYgb2JqLl9pc0FNb21lbnRPYmplY3QgIT0gbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGFic0Zsb29yIChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAvLyAtMCAtPiAwXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKSB8fCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XG4gICAgdmFyIGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbixcbiAgICAgICAgdmFsdWUgPSAwO1xuXG4gICAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICAgICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIGNvbXBhcmUgdHdvIGFycmF5cywgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGNvbXBhcmVBcnJheXMoYXJyYXkxLCBhcnJheTIsIGRvbnRDb252ZXJ0KSB7XG4gICAgdmFyIGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICBkaWZmcyA9IDAsXG4gICAgICAgIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICgoZG9udENvbnZlcnQgJiYgYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHx8XG4gICAgICAgICAgICAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpKSB7XG4gICAgICAgICAgICBkaWZmcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaWZmcyArIGxlbmd0aERpZmY7XG59XG5cbmZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgaWYgKGhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICh0eXBlb2YgY29uc29sZSAhPT0gICd1bmRlZmluZWQnKSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGlvbiB3YXJuaW5nOiAnICsgbXNnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZShtc2csIGZuKSB7XG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICByZXR1cm4gZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIobnVsbCwgbXNnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgdmFyIGFyZztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyArPSAnXFxuWycgKyBpICsgJ10gJztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnICs9IGtleSArICc6ICcgKyBhcmd1bWVudHNbMF1ba2V5XSArICcsICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKDAsIC0yKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIGNvbW1hIGFuZCBzcGFjZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3YXJuKG1zZyArICdcXG5Bcmd1bWVudHM6ICcgKyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKS5qb2luKCcnKSArICdcXG4nICsgKG5ldyBFcnJvcigpKS5zdGFjayk7XG4gICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LCBmbik7XG59XG5cbnZhciBkZXByZWNhdGlvbnMgPSB7fTtcblxuZnVuY3Rpb24gZGVwcmVjYXRlU2ltcGxlKG5hbWUsIG1zZykge1xuICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICBob29rcy5kZXByZWNhdGlvbkhhbmRsZXIobmFtZSwgbXNnKTtcbiAgICB9XG4gICAgaWYgKCFkZXByZWNhdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgd2Fybihtc2cpO1xuICAgICAgICBkZXByZWNhdGlvbnNbbmFtZV0gPSB0cnVlO1xuICAgIH1cbn1cblxuaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XG5ob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgPSBudWxsO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24gfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuZnVuY3Rpb24gc2V0IChjb25maWcpIHtcbiAgICB2YXIgcHJvcCwgaTtcbiAgICBmb3IgKGkgaW4gY29uZmlnKSB7XG4gICAgICAgIHByb3AgPSBjb25maWdbaV07XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3ApKSB7XG4gICAgICAgICAgICB0aGlzW2ldID0gcHJvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNbJ18nICsgaV0gPSBwcm9wO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAvLyBMZW5pZW50IG9yZGluYWwgcGFyc2luZyBhY2NlcHRzIGp1c3QgYSBudW1iZXIgaW4gYWRkaXRpb24gdG9cbiAgICAvLyBudW1iZXIgKyAocG9zc2libHkpIHN0dWZmIGNvbWluZyBmcm9tIF9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlLlxuICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICB0aGlzLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICh0aGlzLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlLnNvdXJjZSB8fCB0aGlzLl9vcmRpbmFsUGFyc2Uuc291cmNlKSArXG4gICAgICAgICAgICAnfCcgKyAoL1xcZHsxLDJ9Lykuc291cmNlKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY2hpbGRDb25maWcpIHtcbiAgICB2YXIgcmVzID0gZXh0ZW5kKHt9LCBwYXJlbnRDb25maWcpLCBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBjaGlsZENvbmZpZykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW3Byb3BdKSkge1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IHt9O1xuICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIHBhcmVudENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgY2hpbGRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1twcm9wXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzW3Byb3BdID0gY2hpbGRDb25maWdbcHJvcF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHBhcmVudENvbmZpZykge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAgICAgIWhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApICYmXG4gICAgICAgICAgICAgICAgaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSkge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIGNoYW5nZXMgdG8gcHJvcGVydGllcyBkb24ndCBtb2RpZnkgcGFyZW50IGNvbmZpZ1xuICAgICAgICAgICAgcmVzW3Byb3BdID0gZXh0ZW5kKHt9LCByZXNbcHJvcF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIExvY2FsZShjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5zZXQoY29uZmlnKTtcbiAgICB9XG59XG5cbnZhciBrZXlzO1xuXG5pZiAoT2JqZWN0LmtleXMpIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXM7XG59IGVsc2Uge1xuICAgIGtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBpLCByZXMgPSBbXTtcbiAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBpKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbn1cblxudmFyIGRlZmF1bHRDYWxlbmRhciA9IHtcbiAgICBzYW1lRGF5IDogJ1tUb2RheSBhdF0gTFQnLFxuICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbYXRdIExUJyxcbiAgICBsYXN0RGF5IDogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcbiAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcbiAgICBzYW1lRWxzZSA6ICdMJ1xufTtcblxuZnVuY3Rpb24gY2FsZW5kYXIgKGtleSwgbW9tLCBub3cpIHtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhclsnc2FtZUVsc2UnXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobW9tLCBub3cpIDogb3V0cHV0O1xufVxuXG52YXIgZGVmYXVsdExvbmdEYXRlRm9ybWF0ID0ge1xuICAgIExUUyAgOiAnaDptbTpzcyBBJyxcbiAgICBMVCAgIDogJ2g6bW0gQScsXG4gICAgTCAgICA6ICdNTS9ERC9ZWVlZJyxcbiAgICBMTCAgIDogJ01NTU0gRCwgWVlZWScsXG4gICAgTExMICA6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICBMTExMIDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnXG59O1xuXG5mdW5jdGlvbiBsb25nRGF0ZUZvcm1hdCAoa2V5KSB7XG4gICAgdmFyIGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0sXG4gICAgICAgIGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xuXG4gICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG5cbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xufVxuXG52YXIgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XG5cbmZ1bmN0aW9uIGludmFsaWREYXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG59XG5cbnZhciBkZWZhdWx0T3JkaW5hbCA9ICclZCc7XG52YXIgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UgPSAvXFxkezEsMn0vO1xuXG5mdW5jdGlvbiBvcmRpbmFsIChudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bWJlcik7XG59XG5cbnZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xuICAgIGZ1dHVyZSA6ICdpbiAlcycsXG4gICAgcGFzdCAgIDogJyVzIGFnbycsXG4gICAgcyAgOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgc3MgOiAnJWQgc2Vjb25kcycsXG4gICAgbSAgOiAnYSBtaW51dGUnLFxuICAgIG1tIDogJyVkIG1pbnV0ZXMnLFxuICAgIGggIDogJ2FuIGhvdXInLFxuICAgIGhoIDogJyVkIGhvdXJzJyxcbiAgICBkICA6ICdhIGRheScsXG4gICAgZGQgOiAnJWQgZGF5cycsXG4gICAgTSAgOiAnYSBtb250aCcsXG4gICAgTU0gOiAnJWQgbW9udGhzJyxcbiAgICB5ICA6ICdhIHllYXInLFxuICAgIHl5IDogJyVkIHllYXJzJ1xufTtcblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lIChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIHtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cmluZ107XG4gICAgcmV0dXJuIChpc0Z1bmN0aW9uKG91dHB1dCkpID9cbiAgICAgICAgb3V0cHV0KG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkgOlxuICAgICAgICBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gcGFzdEZ1dHVyZSAoZGlmZiwgb3V0cHV0KSB7XG4gICAgdmFyIGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcbn1cblxudmFyIGFsaWFzZXMgPSB7fTtcblxuZnVuY3Rpb24gYWRkVW5pdEFsaWFzICh1bml0LCBzaG9ydGhhbmQpIHtcbiAgICB2YXIgbG93ZXJDYXNlID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xuICAgIGFsaWFzZXNbbG93ZXJDYXNlXSA9IGFsaWFzZXNbbG93ZXJDYXNlICsgJ3MnXSA9IGFsaWFzZXNbc2hvcnRoYW5kXSA9IHVuaXQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1bml0cyA9PT0gJ3N0cmluZycgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldIDogdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSB7fSxcbiAgICAgICAgbm9ybWFsaXplZFByb3AsXG4gICAgICAgIHByb3A7XG5cbiAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbn1cblxudmFyIHByaW9yaXRpZXMgPSB7fTtcblxuZnVuY3Rpb24gYWRkVW5pdFByaW9yaXR5KHVuaXQsIHByaW9yaXR5KSB7XG4gICAgcHJpb3JpdGllc1t1bml0XSA9IHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XG4gICAgdmFyIHVuaXRzID0gW107XG4gICAgZm9yICh2YXIgdSBpbiB1bml0c09iaikge1xuICAgICAgICB1bml0cy5wdXNoKHt1bml0OiB1LCBwcmlvcml0eTogcHJpb3JpdGllc1t1XX0pO1xuICAgIH1cbiAgICB1bml0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICB9KTtcbiAgICByZXR1cm4gdW5pdHM7XG59XG5cbmZ1bmN0aW9uIHplcm9GaWxsKG51bWJlciwgdGFyZ2V0TGVuZ3RoLCBmb3JjZVNpZ24pIHtcbiAgICB2YXIgYWJzTnVtYmVyID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGgsXG4gICAgICAgIHNpZ24gPSBudW1iZXIgPj0gMDtcbiAgICByZXR1cm4gKHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nKSArXG4gICAgICAgIE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpICsgYWJzTnVtYmVyO1xufVxuXG52YXIgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhbSGhdbW0oc3MpP3xNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRbz98WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98a2s/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XG5cbnZhciBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xuXG52YXIgZm9ybWF0RnVuY3Rpb25zID0ge307XG5cbnZhciBmb3JtYXRUb2tlbkZ1bmN0aW9ucyA9IHt9O1xuXG4vLyB0b2tlbjogICAgJ00nXG4vLyBwYWRkZWQ6ICAgWydNTScsIDJdXG4vLyBvcmRpbmFsOiAgJ01vJ1xuLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG5mdW5jdGlvbiBhZGRGb3JtYXRUb2tlbiAodG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICB2YXIgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tjYWxsYmFja10oKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGZ1bmM7XG4gICAgfVxuICAgIGlmIChwYWRkZWQpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkub3JkaW5hbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRva2VuKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCkge1xuICAgIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSwgaSwgbGVuZ3RoO1xuXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXSkge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgdmFyIG91dHB1dCA9ICcnLCBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBpc0Z1bmN0aW9uKGFycmF5W2ldKSA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpIDogYXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufVxuXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcbmZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBtLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xufVxuXG5mdW5jdGlvbiBleHBhbmRGb3JtYXQoZm9ybWF0LCBsb2NhbGUpIHtcbiAgICB2YXIgaSA9IDU7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5sb25nRGF0ZUZvcm1hdChpbnB1dCkgfHwgaW5wdXQ7XG4gICAgfVxuXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIGkgLT0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xufVxuXG52YXIgbWF0Y2gxICAgICAgICAgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxudmFyIG1hdGNoMiAgICAgICAgID0gL1xcZFxcZC87ICAgICAgICAgIC8vICAgICAgMDAgLSA5OVxudmFyIG1hdGNoMyAgICAgICAgID0gL1xcZHszfS87ICAgICAgICAgLy8gICAgIDAwMCAtIDk5OVxudmFyIG1hdGNoNCAgICAgICAgID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcbnZhciBtYXRjaDYgICAgICAgICA9IC9bKy1dP1xcZHs2fS87ICAgIC8vIC05OTk5OTkgLSA5OTk5OTlcbnZhciBtYXRjaDF0bzIgICAgICA9IC9cXGRcXGQ/LzsgICAgICAgICAvLyAgICAgICAwIC0gOTlcbnZhciBtYXRjaDN0bzQgICAgICA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XG52YXIgbWF0Y2g1dG82ICAgICAgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy87IC8vICAgOTk5OTkgLSA5OTk5OTlcbnZhciBtYXRjaDF0bzMgICAgICA9IC9cXGR7MSwzfS87ICAgICAgIC8vICAgICAgIDAgLSA5OTlcbnZhciBtYXRjaDF0bzQgICAgICA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XG52YXIgbWF0Y2gxdG82ICAgICAgPSAvWystXT9cXGR7MSw2fS87ICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5cbnZhciBtYXRjaFVuc2lnbmVkICA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcbnZhciBtYXRjaFNpZ25lZCAgICA9IC9bKy1dP1xcZCsvOyAgICAgIC8vICAgIC1pbmYgLSBpbmZcblxudmFyIG1hdGNoT2Zmc2V0ICAgID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbnZhciBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2k7IC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5cbnZhciBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG5cbi8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xudmFyIG1hdGNoV29yZCA9IC9bMC05XXswLDI1Nn1bJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkYwN1xcdUZGMTAtXFx1RkZFRl17MSwyNTZ9fFtcXHUwNjAwLVxcdTA2RkZcXC9dezEsMjU2fShcXHMqP1tcXHUwNjAwLVxcdTA2RkZdezEsMjU2fSl7MSwyfS9pO1xuXG5cbnZhciByZWdleGVzID0ge307XG5cbmZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4gKHRva2VuLCByZWdleCwgc3RyaWN0UmVnZXgpIHtcbiAgICByZWdleGVzW3Rva2VuXSA9IGlzRnVuY3Rpb24ocmVnZXgpID8gcmVnZXggOiBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIChpc1N0cmljdCAmJiBzdHJpY3RSZWdleCkgPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbiAodG9rZW4sIGNvbmZpZykge1xuICAgIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oY29uZmlnLl9zdHJpY3QsIGNvbmZpZy5fbG9jYWxlKTtcbn1cblxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQocykge1xuICAgIHJldHVybiByZWdleEVzY2FwZShzLnJlcGxhY2UoJ1xcXFwnLCAnJykucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpIHtcbiAgICAgICAgcmV0dXJuIHAxIHx8IHAyIHx8IHAzIHx8IHA0O1xuICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVnZXhFc2NhcGUocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xufVxuXG52YXIgdG9rZW5zID0ge307XG5cbmZ1bmN0aW9uIGFkZFBhcnNlVG9rZW4gKHRva2VuLCBjYWxsYmFjaykge1xuICAgIHZhciBpLCBmdW5jID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdG9rZW4gPSBbdG9rZW5dO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIoY2FsbGJhY2spKSB7XG4gICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b2tlbnNbdG9rZW5baV1dID0gZnVuYztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuICh0b2tlbiwgY2FsbGJhY2spIHtcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcbiAgICAgICAgY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCB0b2tlbik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwgJiYgaGFzT3duUHJvcCh0b2tlbnMsIHRva2VuKSkge1xuICAgICAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xuICAgIH1cbn1cblxudmFyIFlFQVIgPSAwO1xudmFyIE1PTlRIID0gMTtcbnZhciBEQVRFID0gMjtcbnZhciBIT1VSID0gMztcbnZhciBNSU5VVEUgPSA0O1xudmFyIFNFQ09ORCA9IDU7XG52YXIgTUlMTElTRUNPTkQgPSA2O1xudmFyIFdFRUsgPSA3O1xudmFyIFdFRUtEQVkgPSA4O1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdZJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB5ID0gdGhpcy55ZWFyKCk7XG4gICAgcmV0dXJuIHkgPD0gOTk5OSA/ICcnICsgeSA6ICcrJyArIHk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydZWScsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMueWVhcigpICUgMTAwO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWScsICAgNF0sICAgICAgIDAsICd5ZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZJywgIDVdLCAgICAgICAwLCAneWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWVknLCA2LCB0cnVlXSwgMCwgJ3llYXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3llYXInLCAneScpO1xuXG4vLyBQUklPUklUSUVTXG5cbmFkZFVuaXRQcmlvcml0eSgneWVhcicsIDEpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1knLCAgICAgIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZJywgICAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVknLCAgIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuYWRkUGFyc2VUb2tlbihbJ1lZWVlZJywgJ1lZWVlZWSddLCBZRUFSKTtcbmFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBpbnB1dC5sZW5ndGggPT09IDIgPyBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCkgOiB0b0ludChpbnB1dCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xufSk7XG5hZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbmZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG5mdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDA7XG59XG5cbi8vIEhPT0tTXG5cbmhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbn07XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldFllYXIgPSBtYWtlR2V0U2V0KCdGdWxsWWVhcicsIHRydWUpO1xuXG5mdW5jdGlvbiBnZXRJc0xlYXBZZWFyICgpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIoKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VHZXRTZXQgKHVuaXQsIGtlZXBUaW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0JDEodGhpcywgdW5pdCwgdmFsdWUpO1xuICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIGtlZXBUaW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdldCh0aGlzLCB1bml0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldCAobW9tLCB1bml0KSB7XG4gICAgcmV0dXJuIG1vbS5pc1ZhbGlkKCkgP1xuICAgICAgICBtb20uX2RbJ2dldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0oKSA6IE5hTjtcbn1cblxuZnVuY3Rpb24gc2V0JDEgKG1vbSwgdW5pdCwgdmFsdWUpIHtcbiAgICBpZiAobW9tLmlzVmFsaWQoKSAmJiAhaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGlmICh1bml0ID09PSAnRnVsbFllYXInICYmIGlzTGVhcFllYXIobW9tLnllYXIoKSkgJiYgbW9tLm1vbnRoKCkgPT09IDEgJiYgbW9tLmRhdGUoKSA9PT0gMjkpIHtcbiAgICAgICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSh2YWx1ZSwgbW9tLm1vbnRoKCksIGRheXNJbk1vbnRoKHZhbHVlLCBtb20ubW9udGgoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBzdHJpbmdHZXQgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuXG5mdW5jdGlvbiBzdHJpbmdTZXQgKHVuaXRzLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdW5pdHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplT2JqZWN0VW5pdHModW5pdHMpO1xuICAgICAgICB2YXIgcHJpb3JpdGl6ZWQgPSBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmlvcml0aXplZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpc1twcmlvcml0aXplZFtpXS51bml0XSh1bml0c1twcmlvcml0aXplZFtpXS51bml0XSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpc1t1bml0c10pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1t1bml0c10odmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBtb2QobiwgeCkge1xuICAgIHJldHVybiAoKG4gJSB4KSArIHgpICUgeDtcbn1cblxudmFyIGluZGV4T2Y7XG5cbmlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbn0gZWxzZSB7XG4gICAgaW5kZXhPZiA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIC8vIEkga25vd1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2ldID09PSBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgaWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB2YXIgbW9kTW9udGggPSBtb2QobW9udGgsIDEyKTtcbiAgICB5ZWFyICs9IChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuICAgIHJldHVybiBtb2RNb250aCA9PT0gMSA/IChpc0xlYXBZZWFyKHllYXIpID8gMjkgOiAyOCkgOiAoMzEgLSBtb2RNb250aCAlIDcgJSAyKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignTScsIFsnTU0nLCAyXSwgJ01vJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1vbnRoKCkgKyAxO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdNTU0nLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ01NTU0nLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRocyh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtb250aCcsICdNJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnbW9udGgnLCA4KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdNJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ01NJywgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdNTU0nLCAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTU9OVEhdID0gdG9JbnQoaW5wdXQpIC0gMTtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnTU1NJywgJ01NTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxuICAgIGlmIChtb250aCAhPSBudWxsKSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9IGlucHV0O1xuICAgIH1cbn0pO1xuXG4vLyBMT0NBTEVTXG5cbnZhciBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT8vO1xudmFyIGRlZmF1bHRMb2NhbGVNb250aHMgPSAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKTtcbmZ1bmN0aW9uIGxvY2FsZU1vbnRocyAobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRocykgPyB0aGlzLl9tb250aHMgOlxuICAgICAgICAgICAgdGhpcy5fbW9udGhzWydzdGFuZGFsb25lJ107XG4gICAgfVxuICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRocykgPyB0aGlzLl9tb250aHNbbS5tb250aCgpXSA6XG4gICAgICAgIHRoaXMuX21vbnRoc1sodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLm1vbnRoKCldO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID0gJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpO1xuZnVuY3Rpb24gbG9jYWxlTW9udGhzU2hvcnQgKG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydCkgPyB0aGlzLl9tb250aHNTaG9ydCA6XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFsnc3RhbmRhbG9uZSddO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydCkgPyB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldIDpcbiAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRbTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ11bbS5tb250aCgpXTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBpaSwgbW9tLCBsbGMgPSBtb250aE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyArK2kpIHtcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2NhbGVNb250aHNQYXJzZSAobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlLmNhbGwodGhpcywgbW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGFkZCBzb3J0aW5nXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XG4gICAgICAgICAgICByZWdleCA9ICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTU0nICYmIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU0nICYmIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gc2V0TW9udGggKG1vbSwgdmFsdWUpIHtcbiAgICB2YXIgZGF5T2ZNb250aDtcblxuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm4gbW9tO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICgvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0b0ludCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1vbS5sb2NhbGVEYXRhKCkubW9udGhzUGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgLy8gVE9ETzogQW5vdGhlciBzaWxlbnQgZmFpbHVyZT9cbiAgICAgICAgICAgIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRheU9mTW9udGggPSBNYXRoLm1pbihtb20uZGF0ZSgpLCBkYXlzSW5Nb250aChtb20ueWVhcigpLCB2YWx1ZSkpO1xuICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyAnTW9udGgnXSh2YWx1ZSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIG1vbTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0TW9udGggKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgc2V0TW9udGgodGhpcywgdmFsdWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXQodGhpcywgJ01vbnRoJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXlzSW5Nb250aCAoKSB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkpO1xufVxuXG52YXIgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG5mdW5jdGlvbiBtb250aHNTaG9ydFJlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRNb250aHNSZWdleCA9IG1hdGNoV29yZDtcbmZ1bmN0aW9uIG1vbnRoc1JlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVNb250aHNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlTW9udGhzUGFyc2UgKCkge1xuICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBzaG9ydFBpZWNlcyA9IFtdLCBsb25nUGllY2VzID0gW10sIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksIG1vbTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIHNob3J0UGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgICAgIGxvbmdQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMobW9tLCAnJykpO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF0ZSAoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcbiAgICAvLyBjYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMTgxMzQ4XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG5cbiAgICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRGdWxsWWVhcigpKSkge1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVVRDRGF0ZSAoeSkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG5cbiAgICAvLyB0aGUgRGF0ZS5VVEMgZnVuY3Rpb24gcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkpIHtcbiAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIHN0YXJ0LW9mLWZpcnN0LXdlZWsgLSBzdGFydC1vZi15ZWFyXG5mdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpIHtcbiAgICB2YXIgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXG4gICAgICAgIGZ3ZCA9IDcgKyBkb3cgLSBkb3ksXG4gICAgICAgIC8vIGZpcnN0LXdlZWsgZGF5IGxvY2FsIHdlZWtkYXkgLS0gd2hpY2ggbG9jYWwgd2Vla2RheSBpcyBmd2RcbiAgICAgICAgZndkbHcgPSAoNyArIGNyZWF0ZVVUQ0RhdGUoeWVhciwgMCwgZndkKS5nZXRVVENEYXkoKSAtIGRvdykgJSA3O1xuXG4gICAgcmV0dXJuIC1md2RsdyArIGZ3ZCAtIDE7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGUjQ2FsY3VsYXRpbmdfYV9kYXRlX2dpdmVuX3RoZV95ZWFyLjJDX3dlZWtfbnVtYmVyX2FuZF93ZWVrZGF5XG5mdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla3MoeWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICB2YXIgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDcsXG4gICAgICAgIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICBkYXlPZlllYXIgPSAxICsgNyAqICh3ZWVrIC0gMSkgKyBsb2NhbFdlZWtkYXkgKyB3ZWVrT2Zmc2V0LFxuICAgICAgICByZXNZZWFyLCByZXNEYXlPZlllYXI7XG5cbiAgICBpZiAoZGF5T2ZZZWFyIDw9IDApIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXIgLSAxO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xuICAgIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xuICAgICAgICByZXNZZWFyID0geWVhciArIDE7XG4gICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhciAtIGRheXNJblllYXIoeWVhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXI7XG4gICAgICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyOiByZXNZZWFyLFxuICAgICAgICBkYXlPZlllYXI6IHJlc0RheU9mWWVhclxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHdlZWtPZlllYXIobW9tLCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KG1vbS55ZWFyKCksIGRvdywgZG95KSxcbiAgICAgICAgd2VlayA9IE1hdGguZmxvb3IoKG1vbS5kYXlPZlllYXIoKSAtIHdlZWtPZmZzZXQgLSAxKSAvIDcpICsgMSxcbiAgICAgICAgcmVzV2VlaywgcmVzWWVhcjtcblxuICAgIGlmICh3ZWVrIDwgMSkge1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSAtIDE7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrICsgd2Vla3NJblllYXIocmVzWWVhciwgZG93LCBkb3kpO1xuICAgIH0gZWxzZSBpZiAod2VlayA+IHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KSkge1xuICAgICAgICByZXNXZWVrID0gd2VlayAtIHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KTtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpO1xuICAgICAgICByZXNXZWVrID0gd2VlaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3ZWVrOiByZXNXZWVrLFxuICAgICAgICB5ZWFyOiByZXNZZWFyXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhciwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgIHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XG4gICAgcmV0dXJuIChkYXlzSW5ZZWFyKHllYXIpIC0gd2Vla09mZnNldCArIHdlZWtPZmZzZXROZXh0KSAvIDc7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMl0sICd3bycsICd3ZWVrJyk7XG5hZGRGb3JtYXRUb2tlbignVycsIFsnV1cnLCAyXSwgJ1dvJywgJ2lzb1dlZWsnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3dlZWsnLCAndycpO1xuYWRkVW5pdEFsaWFzKCdpc29XZWVrJywgJ1cnKTtcblxuLy8gUFJJT1JJVElFU1xuXG5hZGRVbml0UHJpb3JpdHkoJ3dlZWsnLCA1KTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2VlaycsIDUpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ3cnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignVycsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignV1cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsndycsICd3dycsICdXJywgJ1dXJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIExPQ0FMRVNcblxuZnVuY3Rpb24gbG9jYWxlV2VlayAobW9tKSB7XG4gICAgcmV0dXJuIHdlZWtPZlllYXIobW9tLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3kpLndlZWs7XG59XG5cbnZhciBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgICBkb3cgOiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG59O1xuXG5mdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mV2VlayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG93O1xufVxuXG5mdW5jdGlvbiBsb2NhbGVGaXJzdERheU9mWWVhciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xufVxuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldFdlZWsgKGlucHV0KSB7XG4gICAgdmFyIHdlZWsgPSB0aGlzLmxvY2FsZURhdGEoKS53ZWVrKHRoaXMpO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayAoaW5wdXQpIHtcbiAgICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2VlaztcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ2QnLCAwLCAnZG8nLCAnZGF5Jyk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNNaW4odGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c1Nob3J0KHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2UnLCAwLCAwLCAnd2Vla2RheScpO1xuYWRkRm9ybWF0VG9rZW4oJ0UnLCAwLCAwLCAnaXNvV2Vla2RheScpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcbmFkZFVuaXRBbGlhcygnd2Vla2RheScsICdlJyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWtkYXknLCAnRScpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdkYXknLCAxMSk7XG5hZGRVbml0UHJpb3JpdHkoJ3dlZWtkYXknLCAxMSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignZCcsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdlJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0UnLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignZGRkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignZGRkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZGQnLCAnZGRkJywgJ2RkZGQnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgdmFyIHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgIGlmICh3ZWVrZGF5ICE9IG51bGwpIHtcbiAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9IGlucHV0O1xuICAgIH1cbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2QnLCAnZScsICdFJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgaWYgKCFpc05hTihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGlucHV0LCAxMCk7XG4gICAgfVxuXG4gICAgaW5wdXQgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gICAgfVxuICAgIHJldHVybiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XG59XG5cbi8vIExPQ0FMRVNcblxudmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKTtcbmZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzIChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0pIHtcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fd2Vla2RheXMpID8gdGhpcy5fd2Vla2RheXMgOlxuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNbJ3N0YW5kYWxvbmUnXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fd2Vla2RheXMpID8gdGhpcy5fd2Vla2RheXNbbS5kYXkoKV0gOlxuICAgICAgICB0aGlzLl93ZWVrZGF5c1t0aGlzLl93ZWVrZGF5cy5pc0Zvcm1hdC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ11bbS5kYXkoKV07XG59XG5cbnZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyk7XG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1Nob3J0IChtKSB7XG4gICAgcmV0dXJuIChtKSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbbS5kYXkoKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xufVxuXG52YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpO1xuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNNaW4gKG0pIHtcbiAgICByZXR1cm4gKG0pID8gdGhpcy5fd2Vla2RheXNNaW5bbS5kYXkoKV0gOiB0aGlzLl93ZWVrZGF5c01pbjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2UkMSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgaWksIG1vbSwgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyArK2kpIHtcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1BhcnNlICh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVN0cmljdFBhcnNlJDEuY2FsbCh0aGlzLCB3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcblxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy53ZWVrZGF5cyhtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcLj8nKSArICckJywgJ2knKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcLj8nKSArICckJywgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHJlZ2V4ID0gJ14nICsgdGhpcy53ZWVrZGF5cyhtb20sICcnKSArICd8XicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykgKyAnfF4nICsgdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGRkJyAmJiB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZCcgJiYgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGQnICYmIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fd2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0RGF5T2ZXZWVrIChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICB2YXIgZGF5ID0gdGhpcy5faXNVVEMgPyB0aGlzLl9kLmdldFVUQ0RheSgpIDogdGhpcy5fZC5nZXREYXkoKTtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoaW5wdXQgLSBkYXksICdkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFNldExvY2FsZURheU9mV2VlayAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgdmFyIHdlZWtkYXkgPSAodGhpcy5kYXkoKSArIDcgLSB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3cpICUgNztcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWtkYXkgOiB0aGlzLmFkZChpbnB1dCAtIHdlZWtkYXksICdkJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNldElTT0RheU9mV2VlayAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG5cbiAgICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gICAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcbiAgICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXG5cbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICB2YXIgd2Vla2RheSA9IHBhcnNlSXNvV2Vla2RheShpbnB1dCwgdGhpcy5sb2NhbGVEYXRhKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkodGhpcy5kYXkoKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRheSgpIHx8IDc7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdFdlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQ7XG5mdW5jdGlvbiB3ZWVrZGF5c1JlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XG5mdW5jdGlvbiB3ZWVrZGF5c1Nob3J0UmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSBkZWZhdWx0V2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xuZnVuY3Rpb24gd2Vla2RheXNNaW5SZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c01pblJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSBkZWZhdWx0V2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY29tcHV0ZVdlZWtkYXlzUGFyc2UgKCkge1xuICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBtaW5QaWVjZXMgPSBbXSwgc2hvcnRQaWVjZXMgPSBbXSwgbG9uZ1BpZWNlcyA9IFtdLCBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICBpLCBtb20sIG1pbnAsIHNob3J0cCwgbG9uZ3A7XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICBtaW5wID0gdGhpcy53ZWVrZGF5c01pbihtb20sICcnKTtcbiAgICAgICAgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpO1xuICAgICAgICBsb25ncCA9IHRoaXMud2Vla2RheXMobW9tLCAnJyk7XG4gICAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgIGxvbmdQaWVjZXMucHVzaChsb25ncCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChsb25ncCk7XG4gICAgfVxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBtaW5QaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICB9XG5cbiAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG5cbiAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbG9uZ1BpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaW5QaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmZ1bmN0aW9uIGhGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoKSAlIDEyIHx8IDEyO1xufVxuXG5mdW5jdGlvbiBrRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmhvdXJzKCkgfHwgMjQ7XG59XG5cbmFkZEZvcm1hdFRva2VuKCdIJywgWydISCcsIDJdLCAwLCAnaG91cicpO1xuYWRkRm9ybWF0VG9rZW4oJ2gnLCBbJ2hoJywgMl0sIDAsIGhGb3JtYXQpO1xuYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMl0sIDAsIGtGb3JtYXQpO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIGhGb3JtYXQuYXBwbHkodGhpcykgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIGhGb3JtYXQuYXBwbHkodGhpcykgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ0htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMik7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKTtcbn0pO1xuXG5mdW5jdGlvbiBtZXJpZGllbSAodG9rZW4sIGxvd2VyY2FzZSkge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tZXJpZGllbSh0aGlzLmhvdXJzKCksIHRoaXMubWludXRlcygpLCBsb3dlcmNhc2UpO1xuICAgIH0pO1xufVxuXG5tZXJpZGllbSgnYScsIHRydWUpO1xubWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdob3VyJywgJ2gnKTtcblxuLy8gUFJJT1JJVFlcbmFkZFVuaXRQcmlvcml0eSgnaG91cicsIDEzKTtcblxuLy8gUEFSU0lOR1xuXG5mdW5jdGlvbiBtYXRjaE1lcmlkaWVtIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbn1cblxuYWRkUmVnZXhUb2tlbignYScsICBtYXRjaE1lcmlkaWVtKTtcbmFkZFJlZ2V4VG9rZW4oJ0EnLCAgbWF0Y2hNZXJpZGllbSk7XG5hZGRSZWdleFRva2VuKCdIJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdoJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdrJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdISCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbigna2snLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5cbmFkZFJlZ2V4VG9rZW4oJ2htbScsIG1hdGNoM3RvNCk7XG5hZGRSZWdleFRva2VuKCdobW1zcycsIG1hdGNoNXRvNik7XG5hZGRSZWdleFRva2VuKCdIbW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignSG1tc3MnLCBtYXRjaDV0bzYpO1xuXG5hZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcbmFkZFBhcnNlVG9rZW4oWydrJywgJ2trJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBrSW5wdXQgPSB0b0ludChpbnB1dCk7XG4gICAgYXJyYXlbSE9VUl0gPSBrSW5wdXQgPT09IDI0ID8gMCA6IGtJbnB1dDtcbn0pO1xuYWRkUGFyc2VUb2tlbihbJ2EnLCAnQSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2lzUG0gPSBjb25maWcuX2xvY2FsZS5pc1BNKGlucHV0KTtcbiAgICBjb25maWcuX21lcmlkaWVtID0gaW5wdXQ7XG59KTtcbmFkZFBhcnNlVG9rZW4oWydoJywgJ2hoJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xufSk7XG5hZGRQYXJzZVRva2VuKCdobW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xufSk7XG5hZGRQYXJzZVRva2VuKCdobW1zcycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICB2YXIgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xufSk7XG5hZGRQYXJzZVRva2VuKCdIbW0nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xufSk7XG5hZGRQYXJzZVRva2VuKCdIbW1zcycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcbiAgICB2YXIgcG9zMiA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgIGFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMikpO1xufSk7XG5cbi8vIExPQ0FMRVNcblxuZnVuY3Rpb24gbG9jYWxlSXNQTSAoaW5wdXQpIHtcbiAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXG4gICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgcmV0dXJuICgoaW5wdXQgKyAnJykudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJyk7XG59XG5cbnZhciBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSA9IC9bYXBdXFwuP20/XFwuPy9pO1xuZnVuY3Rpb24gbG9jYWxlTWVyaWRpZW0gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XG4gICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdhbScgOiAnQU0nO1xuICAgIH1cbn1cblxuXG4vLyBNT01FTlRTXG5cbi8vIFNldHRpbmcgdGhlIGhvdXIgc2hvdWxkIGtlZXAgdGhlIHRpbWUsIGJlY2F1c2UgdGhlIHVzZXIgZXhwbGljaXRseVxuLy8gc3BlY2lmaWVkIHdoaWNoIGhvdXIgaGUgd2FudHMuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxuLy8gYSBuZXcgdGltZXpvbmUpIG1ha2VzIHNlbnNlLiBBZGRpbmcvc3VidHJhY3RpbmcgaG91cnMgZG9lcyBub3QgZm9sbG93XG4vLyB0aGlzIHJ1bGUuXG52YXIgZ2V0U2V0SG91ciA9IG1ha2VHZXRTZXQoJ0hvdXJzJywgdHJ1ZSk7XG5cbi8vIG1vbnRoc1xuLy8gd2Vla1xuLy8gd2Vla2RheXNcbi8vIG1lcmlkaWVtXG52YXIgYmFzZUNvbmZpZyA9IHtcbiAgICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxuICAgIGxvbmdEYXRlRm9ybWF0OiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsXG4gICAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcbiAgICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSxcbiAgICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXG5cbiAgICBtb250aHM6IGRlZmF1bHRMb2NhbGVNb250aHMsXG4gICAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcblxuICAgIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxuXG4gICAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcbiAgICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICAgIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxuXG4gICAgbWVyaWRpZW1QYXJzZTogZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2Vcbn07XG5cbi8vIGludGVybmFsIHN0b3JhZ2UgZm9yIGxvY2FsZSBjb25maWcgZmlsZXNcbnZhciBsb2NhbGVzID0ge307XG52YXIgbG9jYWxlRmFtaWxpZXMgPSB7fTtcbnZhciBnbG9iYWxMb2NhbGU7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZShrZXkpIHtcbiAgICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG59XG5cbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxuLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lcykge1xuICAgIHZhciBpID0gMCwgaiwgbmV4dCwgbG9jYWxlLCBzcGxpdDtcblxuICAgIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgICAgICBqID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICBuZXh0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2kgKyAxXSk7XG4gICAgICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICAgICAgd2hpbGUgKGogPiAwKSB7XG4gICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcbiAgICAgICAgICAgICAgICAvL3RoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqLS07XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lKSB7XG4gICAgdmFyIG9sZExvY2FsZSA9IG51bGw7XG4gICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcbiAgICBpZiAoIWxvY2FsZXNbbmFtZV0gJiYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSAmJlxuICAgICAgICAgICAgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBvbGRMb2NhbGUgPSBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgICAgICAgICB2YXIgYWxpYXNlZFJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgICAgICAgYWxpYXNlZFJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShvbGRMb2NhbGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXG4vLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuLy8gbG9jYWxlIGtleS5cbmZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZSAoa2V5LCB2YWx1ZXMpIHtcbiAgICB2YXIgZGF0YTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XG4gICAgICAgICAgICBkYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBtb21lbnQuZHVyYXRpb24uX2xvY2FsZSA9IG1vbWVudC5fbG9jYWxlID0gZGF0YTtcbiAgICAgICAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlLl9hYmJyO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVMb2NhbGUgKG5hbWUsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgICAgIGNvbmZpZy5hYmJyID0gbmFtZTtcbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKCdkZWZpbmVMb2NhbGVPdmVycmlkZScsXG4gICAgICAgICAgICAgICAgICAgICd1c2UgbW9tZW50LnVwZGF0ZUxvY2FsZShsb2NhbGVOYW1lLCBjb25maWcpIHRvIGNoYW5nZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FuIGV4aXN0aW5nIGxvY2FsZS4gbW9tZW50LmRlZmluZUxvY2FsZShsb2NhbGVOYW1lLCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpZykgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgY3JlYXRpbmcgYSBuZXcgbG9jYWxlICcgK1xuICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZGVmaW5lLWxvY2FsZS8gZm9yIG1vcmUgaW5mby4nKTtcbiAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbbmFtZV0uX2NvbmZpZztcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLl9jb25maWc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XG5cbiAgICAgICAgaWYgKGxvY2FsZUZhbWlsaWVzW25hbWVdKSB7XG4gICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHNldCB0aGUgbG9jYWxlIEFGVEVSIGFsbCBjaGlsZCBsb2NhbGVzIGhhdmUgYmVlblxuICAgICAgICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cbiAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuXG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdXNlZnVsIGZvciB0ZXN0aW5nXG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGxvY2FsZSwgdG1wTG9jYWxlLCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICAvLyBNRVJHRVxuICAgICAgICB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xuICAgICAgICBpZiAodG1wTG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xuICAgICAgICB9XG4gICAgICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgIGxvY2FsZSA9IG5ldyBMb2NhbGUoY29uZmlnKTtcbiAgICAgICAgbG9jYWxlLnBhcmVudExvY2FsZSA9IGxvY2FsZXNbbmFtZV07XG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XG5cbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwYXNzIG51bGwgZm9yIGNvbmZpZyB0byB1bnVwZGF0ZSwgdXNlZnVsIGZvciB0ZXN0c1xuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIHJldHVybnMgbG9jYWxlIGRhdGFcbmZ1bmN0aW9uIGdldExvY2FsZSAoa2V5KSB7XG4gICAgdmFyIGxvY2FsZTtcblxuICAgIGlmIChrZXkgJiYga2V5Ll9sb2NhbGUgJiYga2V5Ll9sb2NhbGUuX2FiYnIpIHtcbiAgICAgICAga2V5ID0ga2V5Ll9sb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbExvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQXJyYXkoa2V5KSkge1xuICAgICAgICAvL3Nob3J0LWNpcmN1aXQgZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoa2V5KTtcbiAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hvb3NlTG9jYWxlKGtleSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RMb2NhbGVzKCkge1xuICAgIHJldHVybiBrZXlzKGxvY2FsZXMpO1xufVxuXG5mdW5jdGlvbiBjaGVja092ZXJmbG93IChtKSB7XG4gICAgdmFyIG92ZXJmbG93O1xuICAgIHZhciBhID0gbS5fYTtcblxuICAgIGlmIChhICYmIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9PT0gLTIpIHtcbiAgICAgICAgb3ZlcmZsb3cgPVxuICAgICAgICAgICAgYVtNT05USF0gICAgICAgPCAwIHx8IGFbTU9OVEhdICAgICAgID4gMTEgID8gTU9OVEggOlxuICAgICAgICAgICAgYVtEQVRFXSAgICAgICAgPCAxIHx8IGFbREFURV0gICAgICAgID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pID8gREFURSA6XG4gICAgICAgICAgICBhW0hPVVJdICAgICAgICA8IDAgfHwgYVtIT1VSXSAgICAgICAgPiAyNCB8fCAoYVtIT1VSXSA9PT0gMjQgJiYgKGFbTUlOVVRFXSAhPT0gMCB8fCBhW1NFQ09ORF0gIT09IDAgfHwgYVtNSUxMSVNFQ09ORF0gIT09IDApKSA/IEhPVVIgOlxuICAgICAgICAgICAgYVtNSU5VVEVdICAgICAgPCAwIHx8IGFbTUlOVVRFXSAgICAgID4gNTkgID8gTUlOVVRFIDpcbiAgICAgICAgICAgIGFbU0VDT05EXSAgICAgIDwgMCB8fCBhW1NFQ09ORF0gICAgICA+IDU5ICA/IFNFQ09ORCA6XG4gICAgICAgICAgICBhW01JTExJU0VDT05EXSA8IDAgfHwgYVtNSUxMSVNFQ09ORF0gPiA5OTkgPyBNSUxMSVNFQ09ORCA6XG4gICAgICAgICAgICAtMTtcblxuICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd0RheU9mWWVhciAmJiAob3ZlcmZsb3cgPCBZRUFSIHx8IG92ZXJmbG93ID4gREFURSkpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gREFURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtzICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla2RheSAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufVxuXG4vLyBQaWNrIHRoZSBmaXJzdCBkZWZpbmVkIG9mIHR3byBvciB0aHJlZSBhcmd1bWVudHMuXG5mdW5jdGlvbiBkZWZhdWx0cyhhLCBiLCBjKSB7XG4gICAgaWYgKGEgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgaWYgKGIgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgLy8gaG9va3MgaXMgYWN0dWFsbHkgdGhlIGV4cG9ydGVkIG1vbWVudCBvYmplY3RcbiAgICB2YXIgbm93VmFsdWUgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XG4gICAgICAgIHJldHVybiBbbm93VmFsdWUuZ2V0VVRDRnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0VVRDTW9udGgoKSwgbm93VmFsdWUuZ2V0VVRDRGF0ZSgpXTtcbiAgICB9XG4gICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRNb250aCgpLCBub3dWYWx1ZS5nZXREYXRlKCldO1xufVxuXG4vLyBjb252ZXJ0IGFuIGFycmF5IHRvIGEgZGF0ZS5cbi8vIHRoZSBhcnJheSBzaG91bGQgbWlycm9yIHRoZSBwYXJhbWV0ZXJzIGJlbG93XG4vLyBub3RlOiBhbGwgdmFsdWVzIHBhc3QgdGhlIHllYXIgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZS5cbi8vIFt5ZWFyLCBtb250aCwgZGF5ICwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXVxuZnVuY3Rpb24gY29uZmlnRnJvbUFycmF5IChjb25maWcpIHtcbiAgICB2YXIgaSwgZGF0ZSwgaW5wdXQgPSBbXSwgY3VycmVudERhdGUsIGV4cGVjdGVkV2Vla2RheSwgeWVhclRvVXNlO1xuXG4gICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgICAvL2NvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXG4gICAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICAgICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLy9pZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXG4gICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcbiAgICAgICAgeWVhclRvVXNlID0gZGVmYXVsdHMoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyVG9Vc2UpIHx8IGNvbmZpZy5fZGF5T2ZZZWFyID09PSAwKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoeWVhclRvVXNlLCAwLCBjb25maWcuX2RheU9mWWVhcik7XG4gICAgICAgIGNvbmZpZy5fYVtNT05USF0gPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCBkYXRlLlxuICAgIC8vICogaWYgbm8geWVhciwgbW9udGgsIGRheSBvZiBtb250aCBhcmUgZ2l2ZW4sIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAvLyAqIGlmIGRheSBvZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBtb250aCBhbmQgeWVhclxuICAgIC8vICogaWYgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgb25seSB5ZWFyXG4gICAgLy8gKiBpZiB5ZWFyIGlzIGdpdmVuLCBkb24ndCBkZWZhdWx0IGFueXRoaW5nXG4gICAgZm9yIChpID0gMDsgaSA8IDMgJiYgY29uZmlnLl9hW2ldID09IG51bGw7ICsraSkge1xuICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IGN1cnJlbnREYXRlW2ldO1xuICAgIH1cblxuICAgIC8vIFplcm8gb3V0IHdoYXRldmVyIHdhcyBub3QgZGVmYXVsdGVkLCBpbmNsdWRpbmcgdGltZVxuICAgIGZvciAoOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gKGNvbmZpZy5fYVtpXSA9PSBudWxsKSA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciAyNDowMDowMC4wMDBcbiAgICBpZiAoY29uZmlnLl9hW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW01JTlVURV0gPT09IDAgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtTRUNPTkRdID09PSAwICYmXG4gICAgICAgICAgICBjb25maWcuX2FbTUlMTElTRUNPTkRdID09PSAwKSB7XG4gICAgICAgIGNvbmZpZy5fbmV4dERheSA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDA7XG4gICAgfVxuXG4gICAgY29uZmlnLl9kID0gKGNvbmZpZy5fdXNlVVRDID8gY3JlYXRlVVRDRGF0ZSA6IGNyZWF0ZURhdGUpLmFwcGx5KG51bGwsIGlucHV0KTtcbiAgICBleHBlY3RlZFdlZWtkYXkgPSBjb25maWcuX3VzZVVUQyA/IGNvbmZpZy5fZC5nZXRVVENEYXkoKSA6IGNvbmZpZy5fZC5nZXREYXkoKTtcblxuICAgIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAgIC8vIHdpdGggcGFyc2Vab25lLlxuICAgIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5fbmV4dERheSkge1xuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3IgbWlzbWF0Y2hpbmcgZGF5IG9mIHdlZWtcbiAgICBpZiAoY29uZmlnLl93ICYmIHR5cGVvZiBjb25maWcuX3cuZCAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uZmlnLl93LmQgIT09IGV4cGVjdGVkV2Vla2RheSkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZykge1xuICAgIHZhciB3LCB3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3ksIHRlbXAsIHdlZWtkYXlPdmVyZmxvdztcblxuICAgIHcgPSBjb25maWcuX3c7XG4gICAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgICAgICBkb3cgPSAxO1xuICAgICAgICBkb3kgPSA0O1xuXG4gICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgICAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXG4gICAgICAgIC8vIGEgbm93IHZlcnNpb24gb2YgY3VycmVudCBjb25maWcgKHRha2UgbG9jYWwvdXRjL29mZnNldCBmbGFncywgYW5kXG4gICAgICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuR0csIGNvbmZpZy5fYVtZRUFSXSwgd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCAxLCA0KS55ZWFyKTtcbiAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcuVywgMSk7XG4gICAgICAgIHdlZWtkYXkgPSBkZWZhdWx0cyh3LkUsIDEpO1xuICAgICAgICBpZiAod2Vla2RheSA8IDEgfHwgd2Vla2RheSA+IDcpIHtcbiAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkb3cgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3c7XG4gICAgICAgIGRveSA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRveTtcblxuICAgICAgICB2YXIgY3VyV2VlayA9IHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgZG93LCBkb3kpO1xuXG4gICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5nZywgY29uZmlnLl9hW1lFQVJdLCBjdXJXZWVrLnllYXIpO1xuXG4gICAgICAgIC8vIERlZmF1bHQgdG8gY3VycmVudCB3ZWVrLlxuICAgICAgICB3ZWVrID0gZGVmYXVsdHMody53LCBjdXJXZWVrLndlZWspO1xuXG4gICAgICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gd2Vla2RheSAtLSBsb3cgZGF5IG51bWJlcnMgYXJlIGNvbnNpZGVyZWQgbmV4dCB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gdy5kO1xuICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbG9jYWwgd2Vla2RheSAtLSBjb3VudGluZyBzdGFydHMgZnJvbSBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkZWZhdWx0IHRvIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBkb3c7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlZWsgPCAxIHx8IHdlZWsgPiB3ZWVrc0luWWVhcih3ZWVrWWVhciwgZG93LCBkb3kpKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xuICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xuICAgIH1cbn1cblxuLy8gaXNvIDg2MDEgcmVnZXhcbi8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxudmFyIGV4dGVuZGVkSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pLSg/OlxcZFxcZC1cXGRcXGR8V1xcZFxcZC1cXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzo6XFxkXFxkKD86OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XG52YXIgYmFzaWNJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OlxcZFxcZCg/OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XG5cbnZhciB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vO1xuXG52YXIgaXNvRGF0ZXMgPSBbXG4gICAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGRcXGQtXFxkXFxkL10sXG4gICAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkL10sXG4gICAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxuICAgIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS9dLFxuICAgIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxuICAgIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS9dLFxuICAgIFsnWVlZWU1NREQnLCAvXFxkezh9L10sXG4gICAgLy8gWVlZWU1NIGlzIE5PVCBhbGxvd2VkIGJ5IHRoZSBzdGFuZGFyZFxuICAgIFsnR0dHR1tXXVdXRScsIC9cXGR7NH1XXFxkezN9L10sXG4gICAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcbiAgICBbJ1lZWVlEREQnLCAvXFxkezd9L11cbl07XG5cbi8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcbnZhciBpc29UaW1lcyA9IFtcbiAgICBbJ0hIOm1tOnNzLlNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXG4gICAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcbiAgICBbJ0hIOm1tOnNzJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXG4gICAgWydISDptbScsIC9cXGRcXGQ6XFxkXFxkL10sXG4gICAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXG4gICAgWydISG1tc3MsU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGQsXFxkKy9dLFxuICAgIFsnSEhtbXNzJywgL1xcZFxcZFxcZFxcZFxcZFxcZC9dLFxuICAgIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcbiAgICBbJ0hIJywgL1xcZFxcZC9dXG5dO1xuXG52YXIgYXNwTmV0SnNvblJlZ2V4ID0gL15cXC8/RGF0ZVxcKChcXC0/XFxkKykvaTtcblxuLy8gZGF0ZSBmcm9tIGlzbyBmb3JtYXRcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JU08oY29uZmlnKSB7XG4gICAgdmFyIGksIGwsXG4gICAgICAgIHN0cmluZyA9IGNvbmZpZy5faSxcbiAgICAgICAgbWF0Y2ggPSBleHRlbmRlZElzb1JlZ2V4LmV4ZWMoc3RyaW5nKSB8fCBiYXNpY0lzb1JlZ2V4LmV4ZWMoc3RyaW5nKSxcbiAgICAgICAgYWxsb3dUaW1lLCBkYXRlRm9ybWF0LCB0aW1lRm9ybWF0LCB0ekZvcm1hdDtcblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgICAgICAgICAgICBhbGxvd1RpbWUgPSBpc29EYXRlc1tpXVsyXSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hdGNoWzJdIHNob3VsZCBiZSAnVCcgb3Igc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdCA9IChtYXRjaFsyXSB8fCAnICcpICsgaXNvVGltZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbNF0pIHtcbiAgICAgICAgICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XG4gICAgICAgICAgICAgICAgdHpGb3JtYXQgPSAnWic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25maWcuX2YgPSBkYXRlRm9ybWF0ICsgKHRpbWVGb3JtYXQgfHwgJycpICsgKHR6Rm9ybWF0IHx8ICcnKTtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuLy8gUkZDIDI4MjIgcmVnZXg6IEZvciBkZXRhaWxzIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNzZWN0aW9uLTMuM1xudmFyIHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLD9cXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KFsrLV1cXGR7NH0pKSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtcbiAgICAgICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXG4gICAgICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSxcbiAgICAgICAgcGFyc2VJbnQoZGF5U3RyLCAxMCksXG4gICAgICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcbiAgICAgICAgcGFyc2VJbnQobWludXRlU3RyLCAxMClcbiAgICBdO1xuXG4gICAgaWYgKHNlY29uZFN0cikge1xuICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChzZWNvbmRTdHIsIDEwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhclN0cikge1xuICAgIHZhciB5ZWFyID0gcGFyc2VJbnQoeWVhclN0ciwgMTApO1xuICAgIGlmICh5ZWFyIDw9IDQ5KSB7XG4gICAgICAgIHJldHVybiAyMDAwICsgeWVhcjtcbiAgICB9IGVsc2UgaWYgKHllYXIgPD0gOTk5KSB7XG4gICAgICAgIHJldHVybiAxOTAwICsgeWVhcjtcbiAgICB9XG4gICAgcmV0dXJuIHllYXI7XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICAgIHJldHVybiBzLnJlcGxhY2UoL1xcKFteKV0qXFwpfFtcXG5cXHRdL2csICcgJykucmVwbGFjZSgvKFxcc1xccyspL2csICcgJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1dlZWtkYXkod2Vla2RheVN0ciwgcGFyc2VkSW5wdXQsIGNvbmZpZykge1xuICAgIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgICAgIC8vIFRPRE86IFJlcGxhY2UgdGhlIHZhbmlsbGEgSlMgRGF0ZSBvYmplY3Qgd2l0aCBhbiBpbmRlcGVudGVudCBkYXktb2Ytd2VlayBjaGVjay5cbiAgICAgICAgdmFyIHdlZWtkYXlQcm92aWRlZCA9IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0ciksXG4gICAgICAgICAgICB3ZWVrZGF5QWN0dWFsID0gbmV3IERhdGUocGFyc2VkSW5wdXRbMF0sIHBhcnNlZElucHV0WzFdLCBwYXJzZWRJbnB1dFsyXSkuZ2V0RGF5KCk7XG4gICAgICAgIGlmICh3ZWVrZGF5UHJvdmlkZWQgIT09IHdlZWtkYXlBY3R1YWwpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIG9ic09mZnNldHMgPSB7XG4gICAgVVQ6IDAsXG4gICAgR01UOiAwLFxuICAgIEVEVDogLTQgKiA2MCxcbiAgICBFU1Q6IC01ICogNjAsXG4gICAgQ0RUOiAtNSAqIDYwLFxuICAgIENTVDogLTYgKiA2MCxcbiAgICBNRFQ6IC02ICogNjAsXG4gICAgTVNUOiAtNyAqIDYwLFxuICAgIFBEVDogLTcgKiA2MCxcbiAgICBQU1Q6IC04ICogNjBcbn07XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZU9mZnNldChvYnNPZmZzZXQsIG1pbGl0YXJ5T2Zmc2V0LCBudW1PZmZzZXQpIHtcbiAgICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gICAgfSBlbHNlIGlmIChtaWxpdGFyeU9mZnNldCkge1xuICAgICAgICAvLyB0aGUgb25seSBhbGxvd2VkIG1pbGl0YXJ5IHR6IGlzIFpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGhtID0gcGFyc2VJbnQobnVtT2Zmc2V0LCAxMCk7XG4gICAgICAgIHZhciBtID0gaG0gJSAxMDAsIGggPSAoaG0gLSBtKSAvIDEwMDtcbiAgICAgICAgcmV0dXJuIGggKiA2MCArIG07XG4gICAgfVxufVxuXG4vLyBkYXRlIGFuZCB0aW1lIGZyb20gcmVmIDI4MjIgZm9ybWF0XG5mdW5jdGlvbiBjb25maWdGcm9tUkZDMjgyMihjb25maWcpIHtcbiAgICB2YXIgbWF0Y2ggPSByZmMyODIyLmV4ZWMocHJlcHJvY2Vzc1JGQzI4MjIoY29uZmlnLl9pKSk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBwYXJzZWRBcnJheSA9IGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MobWF0Y2hbNF0sIG1hdGNoWzNdLCBtYXRjaFsyXSwgbWF0Y2hbNV0sIG1hdGNoWzZdLCBtYXRjaFs3XSk7XG4gICAgICAgIGlmICghY2hlY2tXZWVrZGF5KG1hdGNoWzFdLCBwYXJzZWRBcnJheSwgY29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLl9hID0gcGFyc2VkQXJyYXk7XG4gICAgICAgIGNvbmZpZy5fdHptID0gY2FsY3VsYXRlT2Zmc2V0KG1hdGNoWzhdLCBtYXRjaFs5XSwgbWF0Y2hbMTBdKTtcblxuICAgICAgICBjb25maWcuX2QgPSBjcmVhdGVVVENEYXRlLmFwcGx5KG51bGwsIGNvbmZpZy5fYSk7XG4gICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucmZjMjgyMiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdCBvciBmYWxsYmFja1xuZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWcpIHtcbiAgICB2YXIgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XG5cbiAgICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaW5hbCBhdHRlbXB0LCB1c2UgSW5wdXQgRmFsbGJhY2tcbiAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xufVxuXG5ob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayA9IGRlcHJlY2F0ZShcbiAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xuICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBSRkMyODIyL0lTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xuICAgICdkaXNjb3VyYWdlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGFuIHVwY29taW5nIG1ham9yIHJlbGVhc2UuIFBsZWFzZSByZWZlciB0byAnICtcbiAgICAnaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXG4gICAgZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShjb25maWcuX2kgKyAoY29uZmlnLl91c2VVVEMgPyAnIFVUQycgOiAnJykpO1xuICAgIH1cbik7XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBJU08gc3RhbmRhcmRcbmhvb2tzLklTT184NjAxID0gZnVuY3Rpb24gKCkge307XG5cbi8vIGNvbnN0YW50IHRoYXQgcmVmZXJzIHRvIHRoZSBSRkMgMjgyMiBmb3JtXG5ob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nXG5mdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZykge1xuICAgIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXG4gICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuSVNPXzg2MDEpIHtcbiAgICAgICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLlJGQ18yODIyKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uZmlnLl9hID0gW107XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSB0cnVlO1xuXG4gICAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcbiAgICB2YXIgc3RyaW5nID0gJycgKyBjb25maWcuX2ksXG4gICAgICAgIGksIHBhcnNlZElucHV0LCB0b2tlbnMsIHRva2VuLCBza2lwcGVkLFxuICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoID0gMDtcblxuICAgIHRva2VucyA9IGV4cGFuZEZvcm1hdChjb25maWcuX2YsIGNvbmZpZy5fbG9jYWxlKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSB8fCBbXTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgIHBhcnNlZElucHV0ID0gKHN0cmluZy5tYXRjaChnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpIHx8IFtdKVswXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuJywgdG9rZW4sICdwYXJzZWRJbnB1dCcsIHBhcnNlZElucHV0LFxuICAgICAgICAvLyAgICAgICAgICdyZWdleCcsIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSk7XG4gICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgc2tpcHBlZCA9IHN0cmluZy5zdWJzdHIoMCwgc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpKTtcbiAgICAgICAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHNraXBwZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aCk7XG4gICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoICs9IHBhcnNlZElucHV0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICAvLyBkb24ndCBwYXJzZSBpZiBpdCdzIG5vdCBhIGtub3duIHRva2VuXG4gICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0pIHtcbiAgICAgICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgcGFyc2VkSW5wdXQsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVtYWluaW5nIHVucGFyc2VkIGlucHV0IGxlbmd0aCB0byB0aGUgc3RyaW5nXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuY2hhcnNMZWZ0T3ZlciA9IHN0cmluZ0xlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc3RyaW5nKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBfMTJoIGZsYWcgaWYgaG91ciBpcyA8PSAxMlxuICAgIGlmIChjb25maWcuX2FbSE9VUl0gPD0gMTIgJiZcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9PT0gdHJ1ZSAmJlxuICAgICAgICBjb25maWcuX2FbSE9VUl0gPiAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucGFyc2VkRGF0ZVBhcnRzID0gY29uZmlnLl9hLnNsaWNlKDApO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcbiAgICAvLyBoYW5kbGUgbWVyaWRpZW1cbiAgICBjb25maWcuX2FbSE9VUl0gPSBtZXJpZGllbUZpeFdyYXAoY29uZmlnLl9sb2NhbGUsIGNvbmZpZy5fYVtIT1VSXSwgY29uZmlnLl9tZXJpZGllbSk7XG5cbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XG59XG5cblxuZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwIChsb2NhbGUsIGhvdXIsIG1lcmlkaWVtKSB7XG4gICAgdmFyIGlzUG07XG5cbiAgICBpZiAobWVyaWRpZW0gPT0gbnVsbCkge1xuICAgICAgICAvLyBub3RoaW5nIHRvIGRvXG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbiAgICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKTtcbiAgICB9IGVsc2UgaWYgKGxvY2FsZS5pc1BNICE9IG51bGwpIHtcbiAgICAgICAgLy8gRmFsbGJhY2tcbiAgICAgICAgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcbiAgICAgICAgaWYgKGlzUG0gJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQbSAmJiBob3VyID09PSAxMikge1xuICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH1cbn1cblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpIHtcbiAgICB2YXIgdGVtcENvbmZpZyxcbiAgICAgICAgYmVzdE1vbWVudCxcblxuICAgICAgICBzY29yZVRvQmVhdCxcbiAgICAgICAgaSxcbiAgICAgICAgY3VycmVudFNjb3JlO1xuXG4gICAgaWYgKGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZEZvcm1hdCA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnLl9mLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRTY29yZSA9IDA7XG4gICAgICAgIHRlbXBDb25maWcgPSBjb3B5Q29uZmlnKHt9LCBjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XG4gICAgICAgIH1cbiAgICAgICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWQodGVtcENvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcbiAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5jaGFyc0xlZnRPdmVyO1xuXG4gICAgICAgIC8vb3IgdG9rZW5zXG4gICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcblxuICAgICAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICAgICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4dGVuZChjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGkgPSBub3JtYWxpemVPYmplY3RVbml0cyhjb25maWcuX2kpO1xuICAgIGNvbmZpZy5fYSA9IG1hcChbaS55ZWFyLCBpLm1vbnRoLCBpLmRheSB8fCBpLmRhdGUsIGkuaG91ciwgaS5taW51dGUsIGkuc2Vjb25kLCBpLm1pbGxpc2Vjb25kXSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqICYmIHBhcnNlSW50KG9iaiwgMTApO1xuICAgIH0pO1xuXG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb21Db25maWcgKGNvbmZpZykge1xuICAgIHZhciByZXMgPSBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKSk7XG4gICAgaWYgKHJlcy5fbmV4dERheSkge1xuICAgICAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcbiAgICAgICAgcmVzLmFkZCgxLCAnZCcpO1xuICAgICAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUNvbmZpZyAoY29uZmlnKSB7XG4gICAgdmFyIGlucHV0ID0gY29uZmlnLl9pLFxuICAgICAgICBmb3JtYXQgPSBjb25maWcuX2Y7XG5cbiAgICBjb25maWcuX2xvY2FsZSA9IGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZShjb25maWcuX2wpO1xuXG4gICAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKHtudWxsSW5wdXQ6IHRydWV9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3coaW5wdXQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gaW5wdXQ7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChmb3JtYXQpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xuICAgIH0gIGVsc2Uge1xuICAgICAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVmFsaWQoY29uZmlnKSkge1xuICAgICAgICBjb25maWcuX2QgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjb25maWc7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpIHtcbiAgICB2YXIgaW5wdXQgPSBjb25maWcuX2k7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShob29rcy5ub3coKSk7XG4gICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0LnZhbHVlT2YoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fYSA9IG1hcChpbnB1dC5zbGljZSgwKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KG9iaiwgMTApO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIC8vIGZyb20gbWlsbGlzZWNvbmRzXG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGlzVVRDKSB7XG4gICAgdmFyIGMgPSB7fTtcblxuICAgIGlmIChsb2NhbGUgPT09IHRydWUgfHwgbG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBzdHJpY3QgPSBsb2NhbGU7XG4gICAgICAgIGxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoKGlzT2JqZWN0KGlucHV0KSAmJiBpc09iamVjdEVtcHR5KGlucHV0KSkgfHxcbiAgICAgICAgICAgIChpc0FycmF5KGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIGlucHV0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAgIGMuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gICAgYy5fdXNlVVRDID0gYy5faXNVVEMgPSBpc1VUQztcbiAgICBjLl9sID0gbG9jYWxlO1xuICAgIGMuX2kgPSBpbnB1dDtcbiAgICBjLl9mID0gZm9ybWF0O1xuICAgIGMuX3N0cmljdCA9IHN0cmljdDtcblxuICAgIHJldHVybiBjcmVhdGVGcm9tQ29uZmlnKGMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbCAoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgZmFsc2UpO1xufVxuXG52YXIgcHJvdG90eXBlTWluID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5taW4gaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5tYXggaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3RoZXIgPCB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbnZhciBwcm90b3R5cGVNYXggPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLm1heCBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1pbiBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvdGhlciA+IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcbi8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cbi8vXG4vLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXG4vLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxuZnVuY3Rpb24gcGlja0J5KGZuLCBtb21lbnRzKSB7XG4gICAgdmFyIHJlcywgaTtcbiAgICBpZiAobW9tZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShtb21lbnRzWzBdKSkge1xuICAgICAgICBtb21lbnRzID0gbW9tZW50c1swXTtcbiAgICB9XG4gICAgaWYgKCFtb21lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoKTtcbiAgICB9XG4gICAgcmVzID0gbW9tZW50c1swXTtcbiAgICBmb3IgKGkgPSAxOyBpIDwgbW9tZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoIW1vbWVudHNbaV0uaXNWYWxpZCgpIHx8IG1vbWVudHNbaV1bZm5dKHJlcykpIHtcbiAgICAgICAgICAgIHJlcyA9IG1vbWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gVE9ETzogVXNlIFtdLnNvcnQgaW5zdGVhZD9cbmZ1bmN0aW9uIG1pbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0JlZm9yZScsIGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBtYXggKCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xufVxuXG52YXIgbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBEYXRlLm5vdyA/IERhdGUubm93KCkgOiArKG5ldyBEYXRlKCkpO1xufTtcblxudmFyIG9yZGVyaW5nID0gWyd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ21pbGxpc2Vjb25kJ107XG5cbmZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChtKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG0pIHtcbiAgICAgICAgaWYgKCEoaW5kZXhPZi5jYWxsKG9yZGVyaW5nLCBrZXkpICE9PSAtMSAmJiAobVtrZXldID09IG51bGwgfHwgIWlzTmFOKG1ba2V5XSkpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVuaXRIYXNEZWNpbWFsID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmRlcmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAobVtvcmRlcmluZ1tpXV0pIHtcbiAgICAgICAgICAgIGlmICh1bml0SGFzRGVjaW1hbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gb25seSBhbGxvdyBub24taW50ZWdlcnMgZm9yIHNtYWxsZXN0IHVuaXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG1bb3JkZXJpbmdbaV1dKSAhPT0gdG9JbnQobVtvcmRlcmluZ1tpXV0pKSB7XG4gICAgICAgICAgICAgICAgdW5pdEhhc0RlY2ltYWwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQkMSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW52YWxpZCQxKCkge1xuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihOYU4pO1xufVxuXG5mdW5jdGlvbiBEdXJhdGlvbiAoZHVyYXRpb24pIHtcbiAgICB2YXIgbm9ybWFsaXplZElucHV0ID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoZHVyYXRpb24pLFxuICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgIHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMCxcbiAgICAgICAgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDAsXG4gICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgMCxcbiAgICAgICAgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMCxcbiAgICAgICAgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91ciB8fCAwLFxuICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZCB8fCAwLFxuICAgICAgICBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmQgfHwgMDtcblxuICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcblxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gK21pbGxpc2Vjb25kcyArXG4gICAgICAgIHNlY29uZHMgKiAxZTMgKyAvLyAxMDAwXG4gICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcbiAgICAgICAgaG91cnMgKiAxMDAwICogNjAgKiA2MDsgLy91c2luZyAxMDAwICogNjAgKiA2MCBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgLy8gZGF5IHdoZW4gd29ya2luZyBhcm91bmQgRFNULCB3ZSBuZWVkIHRvIHN0b3JlIHRoZW0gc2VwYXJhdGVseVxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArXG4gICAgICAgIHdlZWtzICogNztcbiAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xuICAgIC8vIHdoaWNoIG1vbnRocyB5b3UgYXJlIGFyZSB0YWxraW5nIGFib3V0LCBzbyB3ZSBoYXZlIHRvIHN0b3JlXG4gICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICtcbiAgICAgICAgcXVhcnRlcnMgKiAzICtcbiAgICAgICAgeWVhcnMgKiAxMjtcblxuICAgIHRoaXMuX2RhdGEgPSB7fTtcblxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZSgpO1xuXG4gICAgdGhpcy5fYnViYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGlzRHVyYXRpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBEdXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gYWJzUm91bmQgKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKC0xICogbnVtYmVyKSAqIC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlcik7XG4gICAgfVxufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmZ1bmN0aW9uIG9mZnNldCAodG9rZW4sIHNlcGFyYXRvcikge1xuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLnV0Y09mZnNldCgpO1xuICAgICAgICB2YXIgc2lnbiA9ICcrJztcbiAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XG4gICAgICAgICAgICBzaWduID0gJy0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaWduICsgemVyb0ZpbGwofn4ob2Zmc2V0IC8gNjApLCAyKSArIHNlcGFyYXRvciArIHplcm9GaWxsKH5+KG9mZnNldCkgJSA2MCwgMik7XG4gICAgfSk7XG59XG5cbm9mZnNldCgnWicsICc6Jyk7XG5vZmZzZXQoJ1paJywgJycpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1onLCAgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl91c2VVVEMgPSB0cnVlO1xuICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyB0aW1lem9uZSBjaHVua2VyXG4vLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cbi8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxudmFyIGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xuXG5mdW5jdGlvbiBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoZXIsIHN0cmluZykge1xuICAgIHZhciBtYXRjaGVzID0gKHN0cmluZyB8fCAnJykubWF0Y2gobWF0Y2hlcik7XG5cbiAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2h1bmsgICA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXSB8fCBbXTtcbiAgICB2YXIgcGFydHMgICA9IChjaHVuayArICcnKS5tYXRjaChjaHVua09mZnNldCkgfHwgWyctJywgMCwgMF07XG4gICAgdmFyIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgdG9JbnQocGFydHNbMl0pO1xuXG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgP1xuICAgICAgMCA6XG4gICAgICBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xufVxuXG4vLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvem9uZSBlcXVpdmFsZW50IHRvIG1vZGVsLlxuZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCBtb2RlbCkge1xuICAgIHZhciByZXMsIGRpZmY7XG4gICAgaWYgKG1vZGVsLl9pc1VUQykge1xuICAgICAgICByZXMgPSBtb2RlbC5jbG9uZSgpO1xuICAgICAgICBkaWZmID0gKGlzTW9tZW50KGlucHV0KSB8fCBpc0RhdGUoaW5wdXQpID8gaW5wdXQudmFsdWVPZigpIDogY3JlYXRlTG9jYWwoaW5wdXQpLnZhbHVlT2YoKSkgLSByZXMudmFsdWVPZigpO1xuICAgICAgICAvLyBVc2UgbG93LWxldmVsIGFwaSwgYmVjYXVzZSB0aGlzIGZuIGlzIGxvdy1sZXZlbCBhcGkuXG4gICAgICAgIHJlcy5fZC5zZXRUaW1lKHJlcy5fZC52YWx1ZU9mKCkgKyBkaWZmKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCkubG9jYWwoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERhdGVPZmZzZXQgKG0pIHtcbiAgICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxuICAgIHJldHVybiAtTWF0aC5yb3VuZChtLl9kLmdldFRpbWV6b25lT2Zmc2V0KCkgLyAxNSkgKiAxNTtcbn1cblxuLy8gSE9PS1NcblxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBhIG1vbWVudCBpcyBtdXRhdGVkLlxuLy8gSXQgaXMgaW50ZW5kZWQgdG8ga2VlcCB0aGUgb2Zmc2V0IGluIHN5bmMgd2l0aCB0aGUgdGltZXpvbmUuXG5ob29rcy51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gTU9NRU5UU1xuXG4vLyBrZWVwTG9jYWxUaW1lID0gdHJ1ZSBtZWFucyBvbmx5IGNoYW5nZSB0aGUgdGltZXpvbmUsIHdpdGhvdXRcbi8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XG4vLyA1OjMxOjI2ICswMjAwIEl0IGlzIHBvc3NpYmxlIHRoYXQgNTozMToyNiBkb2Vzbid0IGV4aXN0IHdpdGggb2Zmc2V0XG4vLyArMDIwMCwgc28gd2UgYWRqdXN0IHRoZSB0aW1lIGFzIG5lZWRlZCwgdG8gYmUgdmFsaWQuXG4vL1xuLy8gS2VlcGluZyB0aGUgdGltZSBhY3R1YWxseSBhZGRzL3N1YnRyYWN0cyAob25lIGhvdXIpXG4vLyBmcm9tIHRoZSBhY3R1YWwgcmVwcmVzZW50ZWQgdGltZS4gVGhhdCBpcyB3aHkgd2UgY2FsbCB1cGRhdGVPZmZzZXRcbi8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cbi8vIF9jaGFuZ2VJblByb2dyZXNzID09IHRydWUgY2FzZSwgdGhlbiB3ZSBoYXZlIHRvIGFkanVzdCwgYmVjYXVzZVxuLy8gdGhlcmUgaXMgbm8gc3VjaCB0aW1lIGluIHRoZSBnaXZlbiB0aW1lem9uZS5cbmZ1bmN0aW9uIGdldFNldE9mZnNldCAoaW5wdXQsIGtlZXBMb2NhbFRpbWUsIGtlZXBNaW51dGVzKSB7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwLFxuICAgICAgICBsb2NhbEFkanVzdDtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG4gICAgICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNiAmJiAha2VlcE1pbnV0ZXMpIHtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQgKiA2MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lzVVRDICYmIGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIGxvY2FsQWRqdXN0ID0gZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vZmZzZXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5faXNVVEMgPSB0cnVlO1xuICAgICAgICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hZGQobG9jYWxBZGp1c3QsICdtJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCAhPT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGlmICgha2VlcExvY2FsVGltZSB8fCB0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgYWRkU3VidHJhY3QodGhpcywgY3JlYXRlRHVyYXRpb24oaW5wdXQgLSBvZmZzZXQsICdtJyksIDEsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gb2Zmc2V0IDogZ2V0RGF0ZU9mZnNldCh0aGlzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFNldFpvbmUgKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0ID0gLWlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldFRvVVRDIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXRUb0xvY2FsIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgaWYgKHRoaXMuX2lzVVRDKSB7XG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnRyYWN0KGdldERhdGVPZmZzZXQodGhpcyksICdtJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0ICgpIHtcbiAgICBpZiAodGhpcy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy51dGNPZmZzZXQodGhpcy5fdHptLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5faSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgdGhpcy5faSk7XG4gICAgICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCh0Wm9uZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlucHV0ID0gaW5wdXQgPyBjcmVhdGVMb2NhbChpbnB1dCkudXRjT2Zmc2V0KCkgOiAwO1xuXG4gICAgcmV0dXJuICh0aGlzLnV0Y09mZnNldCgpIC0gaW5wdXQpICUgNjAgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDApLnV0Y09mZnNldCgpIHx8XG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KCkgPiB0aGlzLmNsb25lKCkubW9udGgoNSkudXRjT2Zmc2V0KClcbiAgICApO1xufVxuXG5mdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQgKCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xuICAgIH1cblxuICAgIHZhciBjID0ge307XG5cbiAgICBjb3B5Q29uZmlnKGMsIHRoaXMpO1xuICAgIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xuXG4gICAgaWYgKGMuX2EpIHtcbiAgICAgICAgdmFyIG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gdGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbn1cblxuZnVuY3Rpb24gaXNMb2NhbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVXRjT2Zmc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1V0YyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG59XG5cbi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxudmFyIGFzcE5ldFJlZ2V4ID0gL14oXFwtfFxcKyk/KD86KFxcZCopWy4gXSk/KFxcZCspXFw6KFxcZCspKD86XFw6KFxcZCspKFxcLlxcZCopPyk/JC87XG5cbi8vIGZyb20gaHR0cDovL2RvY3MuY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC9jbG9zdXJlX2dvb2dfZGF0ZV9kYXRlLmpzLnNvdXJjZS5odG1sXG4vLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXG4vLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XG52YXIgaXNvUmVnZXggPSAvXigtfFxcKyk/UCg/OihbLStdP1swLTksLl0qKVkpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVcpPyg/OihbLStdP1swLTksLl0qKUQpPyg/OlQoPzooWy0rXT9bMC05LC5dKilIKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilTKT8pPyQvO1xuXG5mdW5jdGlvbiBjcmVhdGVEdXJhdGlvbiAoaW5wdXQsIGtleSkge1xuICAgIHZhciBkdXJhdGlvbiA9IGlucHV0LFxuICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICBtYXRjaCA9IG51bGwsXG4gICAgICAgIHNpZ24sXG4gICAgICAgIHJldCxcbiAgICAgICAgZGlmZlJlcztcblxuICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIG1zIDogaW5wdXQuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgIGQgIDogaW5wdXQuX2RheXMsXG4gICAgICAgICAgICBNICA6IGlucHV0Ll9tb250aHNcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBkdXJhdGlvbltrZXldID0gaW5wdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZHMgPSBpbnB1dDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoISEobWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICB5ICA6IDAsXG4gICAgICAgICAgICBkICA6IHRvSW50KG1hdGNoW0RBVEVdKSAgICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBoICA6IHRvSW50KG1hdGNoW0hPVVJdKSAgICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBtICA6IHRvSW50KG1hdGNoW01JTlVURV0pICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBzICA6IHRvSW50KG1hdGNoW1NFQ09ORF0pICAgICAgICAgICAgICAgICAgICAgICAqIHNpZ24sXG4gICAgICAgICAgICBtcyA6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24gLy8gdGhlIG1pbGxpc2Vjb25kIGRlY2ltYWwgcG9pbnQgaXMgaW5jbHVkZWQgaW4gdGhlIG1hdGNoXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghIShtYXRjaCA9IGlzb1JlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAobWF0Y2hbMV0gPT09ICcrJykgPyAxIDogMTtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICB5IDogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICAgICAgTSA6IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcbiAgICAgICAgICAgIHcgOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgICAgICBkIDogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICAgICAgaCA6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcbiAgICAgICAgICAgIG0gOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgICAgICBzIDogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7Ly8gY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnb2JqZWN0JyAmJiAoJ2Zyb20nIGluIGR1cmF0aW9uIHx8ICd0bycgaW4gZHVyYXRpb24pKSB7XG4gICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShjcmVhdGVMb2NhbChkdXJhdGlvbi5mcm9tKSwgY3JlYXRlTG9jYWwoZHVyYXRpb24udG8pKTtcblxuICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICBkdXJhdGlvbi5tcyA9IGRpZmZSZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICBkdXJhdGlvbi5NID0gZGlmZlJlcy5tb250aHM7XG4gICAgfVxuXG4gICAgcmV0ID0gbmV3IER1cmF0aW9uKGR1cmF0aW9uKTtcblxuICAgIGlmIChpc0R1cmF0aW9uKGlucHV0KSAmJiBoYXNPd25Qcm9wKGlucHV0LCAnX2xvY2FsZScpKSB7XG4gICAgICAgIHJldC5fbG9jYWxlID0gaW5wdXQuX2xvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcbmNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBjcmVhdGVJbnZhbGlkJDE7XG5cbmZ1bmN0aW9uIHBhcnNlSXNvIChpbnAsIHNpZ24pIHtcbiAgICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAgIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAgIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgICB2YXIgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xufVxuXG5mdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgdmFyIHJlcyA9IHttaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMH07XG5cbiAgICByZXMubW9udGhzID0gb3RoZXIubW9udGgoKSAtIGJhc2UubW9udGgoKSArXG4gICAgICAgIChvdGhlci55ZWFyKCkgLSBiYXNlLnllYXIoKSkgKiAxMjtcbiAgICBpZiAoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpLmlzQWZ0ZXIob3RoZXIpKSB7XG4gICAgICAgIC0tcmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gKyhiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykpO1xuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzO1xuICAgIGlmICghKGJhc2UuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIHttaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMH07XG4gICAgfVxuXG4gICAgb3RoZXIgPSBjbG9uZVdpdGhPZmZzZXQob3RoZXIsIGJhc2UpO1xuICAgIGlmIChiYXNlLmlzQmVmb3JlKG90aGVyKSkge1xuICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKG90aGVyLCBiYXNlKTtcbiAgICAgICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICByZXMubW9udGhzID0gLXJlcy5tb250aHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gVE9ETzogcmVtb3ZlICduYW1lJyBhcmcgYWZ0ZXIgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZFxuZnVuY3Rpb24gY3JlYXRlQWRkZXIoZGlyZWN0aW9uLCBuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWwsIHBlcmlvZCkge1xuICAgICAgICB2YXIgZHVyLCB0bXA7XG4gICAgICAgIC8vaW52ZXJ0IHRoZSBhcmd1bWVudHMsIGJ1dCBjb21wbGFpbiBhYm91dCBpdFxuICAgICAgICBpZiAocGVyaW9kICE9PSBudWxsICYmICFpc05hTigrcGVyaW9kKSkge1xuICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKG5hbWUsICdtb21lbnQoKS4nICsgbmFtZSAgKyAnKHBlcmlvZCwgbnVtYmVyKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIG1vbWVudCgpLicgKyBuYW1lICsgJyhudW1iZXIsIHBlcmlvZCkuICcgK1xuICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2FkZC1pbnZlcnRlZC1wYXJhbS8gZm9yIG1vcmUgaW5mby4nKTtcbiAgICAgICAgICAgIHRtcCA9IHZhbDsgdmFsID0gcGVyaW9kOyBwZXJpb2QgPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICB2YWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICt2YWwgOiB2YWw7XG4gICAgICAgIGR1ciA9IGNyZWF0ZUR1cmF0aW9uKHZhbCwgcGVyaW9kKTtcbiAgICAgICAgYWRkU3VidHJhY3QodGhpcywgZHVyLCBkaXJlY3Rpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhZGRTdWJ0cmFjdCAobW9tLCBkdXJhdGlvbiwgaXNBZGRpbmcsIHVwZGF0ZU9mZnNldCkge1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzLFxuICAgICAgICBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpLFxuICAgICAgICBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcblxuICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgaWYgKG1vbnRocykge1xuICAgICAgICBzZXRNb250aChtb20sIGdldChtb20sICdNb250aCcpICsgbW9udGhzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAoZGF5cykge1xuICAgICAgICBzZXQkMShtb20sICdEYXRlJywgZ2V0KG1vbSwgJ0RhdGUnKSArIGRheXMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgbW9tLl9kLnNldFRpbWUobW9tLl9kLnZhbHVlT2YoKSArIG1pbGxpc2Vjb25kcyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZU9mZnNldCkge1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQobW9tLCBkYXlzIHx8IG1vbnRocyk7XG4gICAgfVxufVxuXG52YXIgYWRkICAgICAgPSBjcmVhdGVBZGRlcigxLCAnYWRkJyk7XG52YXIgc3VidHJhY3QgPSBjcmVhdGVBZGRlcigtMSwgJ3N1YnRyYWN0Jyk7XG5cbmZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KG15TW9tZW50LCBub3cpIHtcbiAgICB2YXIgZGlmZiA9IG15TW9tZW50LmRpZmYobm93LCAnZGF5cycsIHRydWUpO1xuICAgIHJldHVybiBkaWZmIDwgLTYgPyAnc2FtZUVsc2UnIDpcbiAgICAgICAgICAgIGRpZmYgPCAtMSA/ICdsYXN0V2VlaycgOlxuICAgICAgICAgICAgZGlmZiA8IDAgPyAnbGFzdERheScgOlxuICAgICAgICAgICAgZGlmZiA8IDEgPyAnc2FtZURheScgOlxuICAgICAgICAgICAgZGlmZiA8IDIgPyAnbmV4dERheScgOlxuICAgICAgICAgICAgZGlmZiA8IDcgPyAnbmV4dFdlZWsnIDogJ3NhbWVFbHNlJztcbn1cblxuZnVuY3Rpb24gY2FsZW5kYXIkMSAodGltZSwgZm9ybWF0cykge1xuICAgIC8vIFdlIHdhbnQgdG8gY29tcGFyZSB0aGUgc3RhcnQgb2YgdG9kYXksIHZzIHRoaXMuXG4gICAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYWwvdXRjL29mZnNldCBvciBub3QuXG4gICAgdmFyIG5vdyA9IHRpbWUgfHwgY3JlYXRlTG9jYWwoKSxcbiAgICAgICAgc29kID0gY2xvbmVXaXRoT2Zmc2V0KG5vdywgdGhpcykuc3RhcnRPZignZGF5JyksXG4gICAgICAgIGZvcm1hdCA9IGhvb2tzLmNhbGVuZGFyRm9ybWF0KHRoaXMsIHNvZCkgfHwgJ3NhbWVFbHNlJztcblxuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRzICYmIChpc0Z1bmN0aW9uKGZvcm1hdHNbZm9ybWF0XSkgPyBmb3JtYXRzW2Zvcm1hdF0uY2FsbCh0aGlzLCBub3cpIDogZm9ybWF0c1tmb3JtYXRdKTtcblxuICAgIHJldHVybiB0aGlzLmZvcm1hdChvdXRwdXQgfHwgdGhpcy5sb2NhbGVEYXRhKCkuY2FsZW5kYXIoZm9ybWF0LCB0aGlzLCBjcmVhdGVMb2NhbChub3cpKSk7XG59XG5cbmZ1bmN0aW9uIGNsb25lICgpIHtcbiAgICByZXR1cm4gbmV3IE1vbWVudCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gaXNBZnRlciAoaW5wdXQsIHVuaXRzKSB7XG4gICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KTtcbiAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKCFpc1VuZGVmaW5lZCh1bml0cykgPyB1bml0cyA6ICdtaWxsaXNlY29uZCcpO1xuICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPiBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxJbnB1dC52YWx1ZU9mKCkgPCB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNCZWZvcmUgKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyghaXNVbmRlZmluZWQodW5pdHMpID8gdW5pdHMgOiAnbWlsbGlzZWNvbmQnKTtcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0JldHdlZW4gKGZyb20sIHRvLCB1bml0cywgaW5jbHVzaXZpdHkpIHtcbiAgICBpbmNsdXNpdml0eSA9IGluY2x1c2l2aXR5IHx8ICcoKSc7XG4gICAgcmV0dXJuIChpbmNsdXNpdml0eVswXSA9PT0gJygnID8gdGhpcy5pc0FmdGVyKGZyb20sIHVuaXRzKSA6ICF0aGlzLmlzQmVmb3JlKGZyb20sIHVuaXRzKSkgJiZcbiAgICAgICAgKGluY2x1c2l2aXR5WzFdID09PSAnKScgPyB0aGlzLmlzQmVmb3JlKHRvLCB1bml0cykgOiAhdGhpcy5pc0FmdGVyKHRvLCB1bml0cykpO1xufVxuXG5mdW5jdGlvbiBpc1NhbWUgKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCksXG4gICAgICAgIGlucHV0TXM7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyB8fCAnbWlsbGlzZWNvbmQnKTtcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID09PSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dE1zID0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU9yQWZ0ZXIgKGlucHV0LCB1bml0cykge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNBZnRlcihpbnB1dCx1bml0cyk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlIChpbnB1dCwgdW5pdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQmVmb3JlKGlucHV0LHVuaXRzKTtcbn1cblxuZnVuY3Rpb24gZGlmZiAoaW5wdXQsIHVuaXRzLCBhc0Zsb2F0KSB7XG4gICAgdmFyIHRoYXQsXG4gICAgICAgIHpvbmVEZWx0YSxcbiAgICAgICAgZGVsdGEsIG91dHB1dDtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICB0aGF0ID0gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCB0aGlzKTtcblxuICAgIGlmICghdGhhdC5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICB6b25lRGVsdGEgPSAodGhhdC51dGNPZmZzZXQoKSAtIHRoaXMudXRjT2Zmc2V0KCkpICogNmU0O1xuXG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOiBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCkgLyAxMjsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21vbnRoJzogb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpOyBicmVhaztcbiAgICAgICAgY2FzZSAncXVhcnRlcic6IG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDM7IGJyZWFrO1xuICAgICAgICBjYXNlICdzZWNvbmQnOiBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMWUzOyBicmVhazsgLy8gMTAwMFxuICAgICAgICBjYXNlICdtaW51dGUnOiBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gNmU0OyBicmVhazsgLy8gMTAwMCAqIDYwXG4gICAgICAgIGNhc2UgJ2hvdXInOiBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMzZlNTsgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwXG4gICAgICAgIGNhc2UgJ2RheSc6IG91dHB1dCA9ICh0aGlzIC0gdGhhdCAtIHpvbmVEZWx0YSkgLyA4NjRlNTsgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcbiAgICAgICAgY2FzZSAnd2Vlayc6IG91dHB1dCA9ICh0aGlzIC0gdGhhdCAtIHpvbmVEZWx0YSkgLyA2MDQ4ZTU7IGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxuICAgICAgICBkZWZhdWx0OiBvdXRwdXQgPSB0aGlzIC0gdGhhdDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNGbG9hdCA/IG91dHB1dCA6IGFic0Zsb29yKG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIG1vbnRoRGlmZiAoYSwgYikge1xuICAgIC8vIGRpZmZlcmVuY2UgaW4gbW9udGhzXG4gICAgdmFyIHdob2xlTW9udGhEaWZmID0gKChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyKSArIChiLm1vbnRoKCkgLSBhLm1vbnRoKCkpLFxuICAgICAgICAvLyBiIGlzIGluIChhbmNob3IgLSAxIG1vbnRoLCBhbmNob3IgKyAxIG1vbnRoKVxuICAgICAgICBhbmNob3IgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmLCAnbW9udGhzJyksXG4gICAgICAgIGFuY2hvcjIsIGFkanVzdDtcblxuICAgIGlmIChiIC0gYW5jaG9yIDwgMCkge1xuICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiAtIDEsICdtb250aHMnKTtcbiAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvciAtIGFuY2hvcjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgMSwgJ21vbnRocycpO1xuICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yMiAtIGFuY2hvcik7XG4gICAgfVxuXG4gICAgLy9jaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xuICAgIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KSB8fCAwO1xufVxuXG5ob29rcy5kZWZhdWx0Rm9ybWF0ID0gJ1lZWVktTU0tRERUSEg6bW06c3NaJztcbmhvb2tzLmRlZmF1bHRGb3JtYXRVdGMgPSAnWVlZWS1NTS1ERFRISDptbTpzc1taXSc7XG5cbmZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG59XG5cbmZ1bmN0aW9uIHRvSVNPU3RyaW5nKGtlZXBPZmZzZXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgdXRjID0ga2VlcE9mZnNldCAhPT0gdHJ1ZTtcbiAgICB2YXIgbSA9IHV0YyA/IHRoaXMuY2xvbmUoKS51dGMoKSA6IHRoaXM7XG4gICAgaWYgKG0ueWVhcigpIDwgMCB8fCBtLnllYXIoKSA+IDk5OTkpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCB1dGMgPyAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyA6ICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NaJyk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxuICAgICAgICBpZiAodXRjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX2QudmFsdWVPZigpKS50b0lTT1N0cmluZygpLnJlcGxhY2UoJ1onLCBmb3JtYXRNb21lbnQobSwgJ1onKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdE1vbWVudChtLCB1dGMgPyAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScgOiAnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBodW1hbiByZWFkYWJsZSByZXByZXNlbnRhdGlvbiBvZiBhIG1vbWVudCB0aGF0IGNhblxuICogYWxzbyBiZSBldmFsdWF0ZWQgdG8gZ2V0IGEgbmV3IG1vbWVudCB3aGljaCBpcyB0aGUgc2FtZVxuICpcbiAqIEBsaW5rIGh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC9kb2NzL2FwaS91dGlsLmh0bWwjdXRpbF9jdXN0b21faW5zcGVjdF9mdW5jdGlvbl9vbl9vYmplY3RzXG4gKi9cbmZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuICdtb21lbnQuaW52YWxpZCgvKiAnICsgdGhpcy5faSArICcgKi8pJztcbiAgICB9XG4gICAgdmFyIGZ1bmMgPSAnbW9tZW50JztcbiAgICB2YXIgem9uZSA9ICcnO1xuICAgIGlmICghdGhpcy5pc0xvY2FsKCkpIHtcbiAgICAgICAgZnVuYyA9IHRoaXMudXRjT2Zmc2V0KCkgPT09IDAgPyAnbW9tZW50LnV0YycgOiAnbW9tZW50LnBhcnNlWm9uZSc7XG4gICAgICAgIHpvbmUgPSAnWic7XG4gICAgfVxuICAgIHZhciBwcmVmaXggPSAnWycgKyBmdW5jICsgJyhcIl0nO1xuICAgIHZhciB5ZWFyID0gKDAgPD0gdGhpcy55ZWFyKCkgJiYgdGhpcy55ZWFyKCkgPD0gOTk5OSkgPyAnWVlZWScgOiAnWVlZWVlZJztcbiAgICB2YXIgZGF0ZXRpbWUgPSAnLU1NLUREW1RdSEg6bW06c3MuU1NTJztcbiAgICB2YXIgc3VmZml4ID0gem9uZSArICdbXCIpXSc7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXQocHJlZml4ICsgeWVhciArIGRhdGV0aW1lICsgc3VmZml4KTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0IChpbnB1dFN0cmluZykge1xuICAgIGlmICghaW5wdXRTdHJpbmcpIHtcbiAgICAgICAgaW5wdXRTdHJpbmcgPSB0aGlzLmlzVXRjKCkgPyBob29rcy5kZWZhdWx0Rm9ybWF0VXRjIDogaG9va3MuZGVmYXVsdEZvcm1hdDtcbiAgICB9XG4gICAgdmFyIG91dHB1dCA9IGZvcm1hdE1vbWVudCh0aGlzLCBpbnB1dFN0cmluZyk7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxuZnVuY3Rpb24gZnJvbSAodGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHxcbiAgICAgICAgICAgICBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7dG86IHRoaXMsIGZyb206IHRpbWV9KS5sb2NhbGUodGhpcy5sb2NhbGUoKSkuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZnJvbU5vdyAod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiB0aGlzLmZyb20oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG5cbmZ1bmN0aW9uIHRvICh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fFxuICAgICAgICAgICAgIGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHtmcm9tOiB0aGlzLCB0bzogdGltZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSgpKS5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b05vdyAod2l0aG91dFN1ZmZpeCkge1xuICAgIHJldHVybiB0aGlzLnRvKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xufVxuXG4vLyBJZiBwYXNzZWQgYSBsb2NhbGUga2V5LCBpdCB3aWxsIHNldCB0aGUgbG9jYWxlIGZvciB0aGlzXG4vLyBpbnN0YW5jZS4gIE90aGVyd2lzZSwgaXQgd2lsbCByZXR1cm4gdGhlIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyB2YXJpYWJsZXMgZm9yIHRoaXMgaW5zdGFuY2UuXG5mdW5jdGlvbiBsb2NhbGUgKGtleSkge1xuICAgIHZhciBuZXdMb2NhbGVEYXRhO1xuXG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUuX2FiYnI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TG9jYWxlRGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICBpZiAobmV3TG9jYWxlRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxudmFyIGxhbmcgPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLmxhbmcoKSBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkLCB1c2UgbW9tZW50KCkubG9jYWxlRGF0YSgpIHRvIGdldCB0aGUgbGFuZ3VhZ2UgY29uZmlndXJhdGlvbi4gVXNlIG1vbWVudCgpLmxvY2FsZSgpIHRvIGNoYW5nZSBsYW5ndWFnZXMuJyxcbiAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5mdW5jdGlvbiBsb2NhbGVEYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xufVxuXG5mdW5jdGlvbiBzdGFydE9mICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIC8vIHRoZSBmb2xsb3dpbmcgc3dpdGNoIGludGVudGlvbmFsbHkgb21pdHMgYnJlYWsga2V5d29yZHNcbiAgICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgIHRoaXMubW9udGgoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICB0aGlzLmRhdGUoMSk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICB0aGlzLmhvdXJzKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgIHRoaXMubWludXRlcygwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgIHRoaXMuc2Vjb25kcygwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgIHRoaXMubWlsbGlzZWNvbmRzKDApO1xuICAgIH1cblxuICAgIC8vIHdlZWtzIGFyZSBhIHNwZWNpYWwgY2FzZVxuICAgIGlmICh1bml0cyA9PT0gJ3dlZWsnKSB7XG4gICAgICAgIHRoaXMud2Vla2RheSgwKTtcbiAgICB9XG4gICAgaWYgKHVuaXRzID09PSAnaXNvV2VlaycpIHtcbiAgICAgICAgdGhpcy5pc29XZWVrZGF5KDEpO1xuICAgIH1cblxuICAgIC8vIHF1YXJ0ZXJzIGFyZSBhbHNvIHNwZWNpYWxcbiAgICBpZiAodW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICB0aGlzLm1vbnRoKE1hdGguZmxvb3IodGhpcy5tb250aCgpIC8gMykgKiAzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZW5kT2YgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgaWYgKHVuaXRzID09PSB1bmRlZmluZWQgfHwgdW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gJ2RhdGUnIGlzIGFuIGFsaWFzIGZvciAnZGF5Jywgc28gaXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgc3VjaC5cbiAgICBpZiAodW5pdHMgPT09ICdkYXRlJykge1xuICAgICAgICB1bml0cyA9ICdkYXknO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0YXJ0T2YodW5pdHMpLmFkZCgxLCAodW5pdHMgPT09ICdpc29XZWVrJyA/ICd3ZWVrJyA6IHVuaXRzKSkuc3VidHJhY3QoMSwgJ21zJyk7XG59XG5cbmZ1bmN0aW9uIHZhbHVlT2YgKCkge1xuICAgIHJldHVybiB0aGlzLl9kLnZhbHVlT2YoKSAtICgodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDApO1xufVxuXG5mdW5jdGlvbiB1bml4ICgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiB0b0RhdGUgKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkgKCkge1xuICAgIHZhciBtID0gdGhpcztcbiAgICByZXR1cm4gW20ueWVhcigpLCBtLm1vbnRoKCksIG0uZGF0ZSgpLCBtLmhvdXIoKSwgbS5taW51dGUoKSwgbS5zZWNvbmQoKSwgbS5taWxsaXNlY29uZCgpXTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QgKCkge1xuICAgIHZhciBtID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgICB5ZWFyczogbS55ZWFyKCksXG4gICAgICAgIG1vbnRoczogbS5tb250aCgpLFxuICAgICAgICBkYXRlOiBtLmRhdGUoKSxcbiAgICAgICAgaG91cnM6IG0uaG91cnMoKSxcbiAgICAgICAgbWludXRlczogbS5taW51dGVzKCksXG4gICAgICAgIHNlY29uZHM6IG0uc2Vjb25kcygpLFxuICAgICAgICBtaWxsaXNlY29uZHM6IG0ubWlsbGlzZWNvbmRzKClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB0b0pTT04gKCkge1xuICAgIC8vIG5ldyBEYXRlKE5hTikudG9KU09OKCkgPT09IG51bGxcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLnRvSVNPU3RyaW5nKCkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkJDIgKCkge1xuICAgIHJldHVybiBpc1ZhbGlkKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBwYXJzaW5nRmxhZ3MgKCkge1xuICAgIHJldHVybiBleHRlbmQoe30sIGdldFBhcnNpbmdGbGFncyh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGludmFsaWRBdCAoKSB7XG4gICAgcmV0dXJuIGdldFBhcnNpbmdGbGFncyh0aGlzKS5vdmVyZmxvdztcbn1cblxuZnVuY3Rpb24gY3JlYXRpb25EYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlucHV0OiB0aGlzLl9pLFxuICAgICAgICBmb3JtYXQ6IHRoaXMuX2YsXG4gICAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlLFxuICAgICAgICBpc1VUQzogdGhpcy5faXNVVEMsXG4gICAgICAgIHN0cmljdDogdGhpcy5fc3RyaWN0XG4gICAgfTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ2dnJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy53ZWVrWWVhcigpICUgMTAwO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnR0cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKCkgJSAxMDA7XG59KTtcblxuZnVuY3Rpb24gYWRkV2Vla1llYXJGb3JtYXRUb2tlbiAodG9rZW4sIGdldHRlcikge1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoXSwgMCwgZ2V0dGVyKTtcbn1cblxuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZycsICAgICAnd2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2dnJywgICAgJ3dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHJywgICdpc29XZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCAnaXNvV2Vla1llYXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3dlZWtZZWFyJywgJ2dnJyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWtZZWFyJywgJ0dHJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnd2Vla1llYXInLCAxKTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla1llYXInLCAxKTtcblxuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0cnLCAgICAgIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ2cnLCAgICAgIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHJywgICAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2dnJywgICAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCAgIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ2dnZ2cnLCAgIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbmFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydnZ2dnJywgJ2dnZ2dnJywgJ0dHR0cnLCAnR0dHR0cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMildID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZ2cnLCAnR0cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXRXZWVrWWVhciAoaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbCh0aGlzLFxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB0aGlzLndlZWsoKSxcbiAgICAgICAgICAgIHRoaXMud2Vla2RheSgpLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93LFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG95KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIgKGlucHV0KSB7XG4gICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwodGhpcyxcbiAgICAgICAgICAgIGlucHV0LCB0aGlzLmlzb1dlZWsoKSwgdGhpcy5pc29XZWVrZGF5KCksIDEsIDQpO1xufVxuXG5mdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhciAoKSB7XG4gICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCAxLCA0KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla3NJblllYXIgKCkge1xuICAgIHZhciB3ZWVrSW5mbyA9IHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrO1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgd2Vla0luZm8uZG93LCB3ZWVrSW5mby5kb3kpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla3NUYXJnZXQ7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHdlZWtPZlllYXIodGhpcywgZG93LCBkb3kpLnllYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2Vla3NUYXJnZXQgPSB3ZWVrc0luWWVhcihpbnB1dCwgZG93LCBkb3kpO1xuICAgICAgICBpZiAod2VlayA+IHdlZWtzVGFyZ2V0KSB7XG4gICAgICAgICAgICB3ZWVrID0gd2Vla3NUYXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFdlZWtBbGwuY2FsbCh0aGlzLCBpbnB1dCwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0V2Vla0FsbCh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpIHtcbiAgICB2YXIgZGF5T2ZZZWFyRGF0YSA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpLFxuICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZShkYXlPZlllYXJEYXRhLnllYXIsIDAsIGRheU9mWWVhckRhdGEuZGF5T2ZZZWFyKTtcblxuICAgIHRoaXMueWVhcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgIHRoaXMubW9udGgoZGF0ZS5nZXRVVENNb250aCgpKTtcbiAgICB0aGlzLmRhdGUoZGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJldHVybiB0aGlzO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdRJywgMCwgJ1FvJywgJ3F1YXJ0ZXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3F1YXJ0ZXInLCAnUScpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3F1YXJ0ZXInLCA3KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdRJywgbWF0Y2gxKTtcbmFkZFBhcnNlVG9rZW4oJ1EnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcbn0pO1xuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIgKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMykgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArIHRoaXMubW9udGgoKSAlIDMpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDJdLCAnRG8nLCAnZGF0ZScpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF0ZScsICdEJyk7XG5cbi8vIFBSSU9ST0lUWVxuYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignRCcsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgIHJldHVybiBpc1N0cmljdCA/XG4gICAgICAobG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlIHx8IGxvY2FsZS5fb3JkaW5hbFBhcnNlKSA6XG4gICAgICBsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2VMZW5pZW50O1xufSk7XG5cbmFkZFBhcnNlVG9rZW4oWydEJywgJ0REJ10sIERBVEUpO1xuYWRkUGFyc2VUb2tlbignRG8nLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbREFURV0gPSB0b0ludChpbnB1dC5tYXRjaChtYXRjaDF0bzIpWzBdKTtcbn0pO1xuXG4vLyBNT01FTlRTXG5cbnZhciBnZXRTZXREYXlPZk1vbnRoID0gbWFrZUdldFNldCgnRGF0ZScsIHRydWUpO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzXSwgJ0RERG8nLCAnZGF5T2ZZZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXlPZlllYXInLCAnREREJyk7XG5cbi8vIFBSSU9SSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2RheU9mWWVhcicsIDQpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0RERCcsICBtYXRjaDF0bzMpO1xuYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG5hZGRQYXJzZVRva2VuKFsnREREJywgJ0REREQnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kYXlPZlllYXIgPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldERheU9mWWVhciAoaW5wdXQpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gTWF0aC5yb3VuZCgodGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpIC0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ3llYXInKSkgLyA4NjRlNSkgKyAxO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gZGF5T2ZZZWFyIDogdGhpcy5hZGQoKGlucHV0IC0gZGF5T2ZZZWFyKSwgJ2QnKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignbScsIFsnbW0nLCAyXSwgMCwgJ21pbnV0ZScpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnbWludXRlJywgJ20nKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignbScsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRQYXJzZVRva2VuKFsnbScsICdtbSddLCBNSU5VVEUpO1xuXG4vLyBNT01FTlRTXG5cbnZhciBnZXRTZXRNaW51dGUgPSBtYWtlR2V0U2V0KCdNaW51dGVzJywgZmFsc2UpO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdzJywgWydzcycsIDJdLCAwLCAnc2Vjb25kJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdzZWNvbmQnLCAncycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdzJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdzcycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydzJywgJ3NzJ10sIFNFQ09ORCk7XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldFNlY29uZCA9IG1ha2VHZXRTZXQoJ1NlY29uZHMnLCBmYWxzZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwMCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydTUycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIH5+KHRoaXMubWlsbGlzZWNvbmQoKSAvIDEwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTUycsIDNdLCAwLCAnbWlsbGlzZWNvbmQnKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTUycsIDRdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTJywgNV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTUycsIDZdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTUycsIDddLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTJywgOF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1NTUycsIDldLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDA7XG59KTtcblxuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnbWlsbGlzZWNvbmQnLCAnbXMnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdtaWxsaXNlY29uZCcsIDE2KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdTJywgICAgbWF0Y2gxdG8zLCBtYXRjaDEpO1xuYWRkUmVnZXhUb2tlbignU1MnLCAgIG1hdGNoMXRvMywgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1NTUycsICBtYXRjaDF0bzMsIG1hdGNoMyk7XG5cbnZhciB0b2tlbjtcbmZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRSZWdleFRva2VuKHRva2VuLCBtYXRjaFVuc2lnbmVkKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNcyhpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludCgoJzAuJyArIGlucHV0KSAqIDEwMDApO1xufVxuXG5mb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgcGFyc2VNcyk7XG59XG4vLyBNT01FTlRTXG5cbnZhciBnZXRTZXRNaWxsaXNlY29uZCA9IG1ha2VHZXRTZXQoJ01pbGxpc2Vjb25kcycsIGZhbHNlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigneicsICAwLCAwLCAnem9uZUFiYnInKTtcbmFkZEZvcm1hdFRva2VuKCd6eicsIDAsIDAsICd6b25lTmFtZScpO1xuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFpvbmVBYmJyICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnVVRDJyA6ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRab25lTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xufVxuXG52YXIgcHJvdG8gPSBNb21lbnQucHJvdG90eXBlO1xuXG5wcm90by5hZGQgICAgICAgICAgICAgICA9IGFkZDtcbnByb3RvLmNhbGVuZGFyICAgICAgICAgID0gY2FsZW5kYXIkMTtcbnByb3RvLmNsb25lICAgICAgICAgICAgID0gY2xvbmU7XG5wcm90by5kaWZmICAgICAgICAgICAgICA9IGRpZmY7XG5wcm90by5lbmRPZiAgICAgICAgICAgICA9IGVuZE9mO1xucHJvdG8uZm9ybWF0ICAgICAgICAgICAgPSBmb3JtYXQ7XG5wcm90by5mcm9tICAgICAgICAgICAgICA9IGZyb207XG5wcm90by5mcm9tTm93ICAgICAgICAgICA9IGZyb21Ob3c7XG5wcm90by50byAgICAgICAgICAgICAgICA9IHRvO1xucHJvdG8udG9Ob3cgICAgICAgICAgICAgPSB0b05vdztcbnByb3RvLmdldCAgICAgICAgICAgICAgID0gc3RyaW5nR2V0O1xucHJvdG8uaW52YWxpZEF0ICAgICAgICAgPSBpbnZhbGlkQXQ7XG5wcm90by5pc0FmdGVyICAgICAgICAgICA9IGlzQWZ0ZXI7XG5wcm90by5pc0JlZm9yZSAgICAgICAgICA9IGlzQmVmb3JlO1xucHJvdG8uaXNCZXR3ZWVuICAgICAgICAgPSBpc0JldHdlZW47XG5wcm90by5pc1NhbWUgICAgICAgICAgICA9IGlzU2FtZTtcbnByb3RvLmlzU2FtZU9yQWZ0ZXIgICAgID0gaXNTYW1lT3JBZnRlcjtcbnByb3RvLmlzU2FtZU9yQmVmb3JlICAgID0gaXNTYW1lT3JCZWZvcmU7XG5wcm90by5pc1ZhbGlkICAgICAgICAgICA9IGlzVmFsaWQkMjtcbnByb3RvLmxhbmcgICAgICAgICAgICAgID0gbGFuZztcbnByb3RvLmxvY2FsZSAgICAgICAgICAgID0gbG9jYWxlO1xucHJvdG8ubG9jYWxlRGF0YSAgICAgICAgPSBsb2NhbGVEYXRhO1xucHJvdG8ubWF4ICAgICAgICAgICAgICAgPSBwcm90b3R5cGVNYXg7XG5wcm90by5taW4gICAgICAgICAgICAgICA9IHByb3RvdHlwZU1pbjtcbnByb3RvLnBhcnNpbmdGbGFncyAgICAgID0gcGFyc2luZ0ZsYWdzO1xucHJvdG8uc2V0ICAgICAgICAgICAgICAgPSBzdHJpbmdTZXQ7XG5wcm90by5zdGFydE9mICAgICAgICAgICA9IHN0YXJ0T2Y7XG5wcm90by5zdWJ0cmFjdCAgICAgICAgICA9IHN1YnRyYWN0O1xucHJvdG8udG9BcnJheSAgICAgICAgICAgPSB0b0FycmF5O1xucHJvdG8udG9PYmplY3QgICAgICAgICAgPSB0b09iamVjdDtcbnByb3RvLnRvRGF0ZSAgICAgICAgICAgID0gdG9EYXRlO1xucHJvdG8udG9JU09TdHJpbmcgICAgICAgPSB0b0lTT1N0cmluZztcbnByb3RvLmluc3BlY3QgICAgICAgICAgID0gaW5zcGVjdDtcbnByb3RvLnRvSlNPTiAgICAgICAgICAgID0gdG9KU09OO1xucHJvdG8udG9TdHJpbmcgICAgICAgICAgPSB0b1N0cmluZztcbnByb3RvLnVuaXggICAgICAgICAgICAgID0gdW5peDtcbnByb3RvLnZhbHVlT2YgICAgICAgICAgID0gdmFsdWVPZjtcbnByb3RvLmNyZWF0aW9uRGF0YSAgICAgID0gY3JlYXRpb25EYXRhO1xuXG4vLyBZZWFyXG5wcm90by55ZWFyICAgICAgID0gZ2V0U2V0WWVhcjtcbnByb3RvLmlzTGVhcFllYXIgPSBnZXRJc0xlYXBZZWFyO1xuXG4vLyBXZWVrIFllYXJcbnByb3RvLndlZWtZZWFyICAgID0gZ2V0U2V0V2Vla1llYXI7XG5wcm90by5pc29XZWVrWWVhciA9IGdldFNldElTT1dlZWtZZWFyO1xuXG4vLyBRdWFydGVyXG5wcm90by5xdWFydGVyID0gcHJvdG8ucXVhcnRlcnMgPSBnZXRTZXRRdWFydGVyO1xuXG4vLyBNb250aFxucHJvdG8ubW9udGggICAgICAgPSBnZXRTZXRNb250aDtcbnByb3RvLmRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGg7XG5cbi8vIFdlZWtcbnByb3RvLndlZWsgICAgICAgICAgID0gcHJvdG8ud2Vla3MgICAgICAgID0gZ2V0U2V0V2VlaztcbnByb3RvLmlzb1dlZWsgICAgICAgID0gcHJvdG8uaXNvV2Vla3MgICAgID0gZ2V0U2V0SVNPV2VlaztcbnByb3RvLndlZWtzSW5ZZWFyICAgID0gZ2V0V2Vla3NJblllYXI7XG5wcm90by5pc29XZWVrc0luWWVhciA9IGdldElTT1dlZWtzSW5ZZWFyO1xuXG4vLyBEYXlcbnByb3RvLmRhdGUgICAgICAgPSBnZXRTZXREYXlPZk1vbnRoO1xucHJvdG8uZGF5ICAgICAgICA9IHByb3RvLmRheXMgICAgICAgICAgICAgPSBnZXRTZXREYXlPZldlZWs7XG5wcm90by53ZWVrZGF5ICAgID0gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrO1xucHJvdG8uaXNvV2Vla2RheSA9IGdldFNldElTT0RheU9mV2VlaztcbnByb3RvLmRheU9mWWVhciAgPSBnZXRTZXREYXlPZlllYXI7XG5cbi8vIEhvdXJcbnByb3RvLmhvdXIgPSBwcm90by5ob3VycyA9IGdldFNldEhvdXI7XG5cbi8vIE1pbnV0ZVxucHJvdG8ubWludXRlID0gcHJvdG8ubWludXRlcyA9IGdldFNldE1pbnV0ZTtcblxuLy8gU2Vjb25kXG5wcm90by5zZWNvbmQgPSBwcm90by5zZWNvbmRzID0gZ2V0U2V0U2Vjb25kO1xuXG4vLyBNaWxsaXNlY29uZFxucHJvdG8ubWlsbGlzZWNvbmQgPSBwcm90by5taWxsaXNlY29uZHMgPSBnZXRTZXRNaWxsaXNlY29uZDtcblxuLy8gT2Zmc2V0XG5wcm90by51dGNPZmZzZXQgICAgICAgICAgICA9IGdldFNldE9mZnNldDtcbnByb3RvLnV0YyAgICAgICAgICAgICAgICAgID0gc2V0T2Zmc2V0VG9VVEM7XG5wcm90by5sb2NhbCAgICAgICAgICAgICAgICA9IHNldE9mZnNldFRvTG9jYWw7XG5wcm90by5wYXJzZVpvbmUgICAgICAgICAgICA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0O1xucHJvdG8uaGFzQWxpZ25lZEhvdXJPZmZzZXQgPSBoYXNBbGlnbmVkSG91ck9mZnNldDtcbnByb3RvLmlzRFNUICAgICAgICAgICAgICAgID0gaXNEYXlsaWdodFNhdmluZ1RpbWU7XG5wcm90by5pc0xvY2FsICAgICAgICAgICAgICA9IGlzTG9jYWw7XG5wcm90by5pc1V0Y09mZnNldCAgICAgICAgICA9IGlzVXRjT2Zmc2V0O1xucHJvdG8uaXNVdGMgICAgICAgICAgICAgICAgPSBpc1V0YztcbnByb3RvLmlzVVRDICAgICAgICAgICAgICAgID0gaXNVdGM7XG5cbi8vIFRpbWV6b25lXG5wcm90by56b25lQWJiciA9IGdldFpvbmVBYmJyO1xucHJvdG8uem9uZU5hbWUgPSBnZXRab25lTmFtZTtcblxuLy8gRGVwcmVjYXRpb25zXG5wcm90by5kYXRlcyAgPSBkZXByZWNhdGUoJ2RhdGVzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBkYXRlIGluc3RlYWQuJywgZ2V0U2V0RGF5T2ZNb250aCk7XG5wcm90by5tb250aHMgPSBkZXByZWNhdGUoJ21vbnRocyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgbW9udGggaW5zdGVhZCcsIGdldFNldE1vbnRoKTtcbnByb3RvLnllYXJzICA9IGRlcHJlY2F0ZSgneWVhcnMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIHllYXIgaW5zdGVhZCcsIGdldFNldFllYXIpO1xucHJvdG8uem9uZSAgID0gZGVwcmVjYXRlKCdtb21lbnQoKS56b25lIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQoKS51dGNPZmZzZXQgaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy96b25lLycsIGdldFNldFpvbmUpO1xucHJvdG8uaXNEU1RTaGlmdGVkID0gZGVwcmVjYXRlKCdpc0RTVFNoaWZ0ZWQgaXMgZGVwcmVjYXRlZC4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZHN0LXNoaWZ0ZWQvIGZvciBtb3JlIGluZm9ybWF0aW9uJywgaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKTtcblxuZnVuY3Rpb24gY3JlYXRlVW5peCAoaW5wdXQpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQgKiAxMDAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5ab25lICgpIHtcbiAgICByZXR1cm4gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbn1cblxuZnVuY3Rpb24gcHJlUGFyc2VQb3N0Rm9ybWF0IChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgcHJvdG8kMSA9IExvY2FsZS5wcm90b3R5cGU7XG5cbnByb3RvJDEuY2FsZW5kYXIgICAgICAgID0gY2FsZW5kYXI7XG5wcm90byQxLmxvbmdEYXRlRm9ybWF0ICA9IGxvbmdEYXRlRm9ybWF0O1xucHJvdG8kMS5pbnZhbGlkRGF0ZSAgICAgPSBpbnZhbGlkRGF0ZTtcbnByb3RvJDEub3JkaW5hbCAgICAgICAgID0gb3JkaW5hbDtcbnByb3RvJDEucHJlcGFyc2UgICAgICAgID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xucHJvdG8kMS5wb3N0Zm9ybWF0ICAgICAgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG5wcm90byQxLnJlbGF0aXZlVGltZSAgICA9IHJlbGF0aXZlVGltZTtcbnByb3RvJDEucGFzdEZ1dHVyZSAgICAgID0gcGFzdEZ1dHVyZTtcbnByb3RvJDEuc2V0ICAgICAgICAgICAgID0gc2V0O1xuXG4vLyBNb250aFxucHJvdG8kMS5tb250aHMgICAgICAgICAgICA9ICAgICAgICBsb2NhbGVNb250aHM7XG5wcm90byQxLm1vbnRoc1Nob3J0ICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRoc1Nob3J0O1xucHJvdG8kMS5tb250aHNQYXJzZSAgICAgICA9ICAgICAgICBsb2NhbGVNb250aHNQYXJzZTtcbnByb3RvJDEubW9udGhzUmVnZXggICAgICAgPSBtb250aHNSZWdleDtcbnByb3RvJDEubW9udGhzU2hvcnRSZWdleCAgPSBtb250aHNTaG9ydFJlZ2V4O1xuXG4vLyBXZWVrXG5wcm90byQxLndlZWsgPSBsb2NhbGVXZWVrO1xucHJvdG8kMS5maXJzdERheU9mWWVhciA9IGxvY2FsZUZpcnN0RGF5T2ZZZWFyO1xucHJvdG8kMS5maXJzdERheU9mV2VlayA9IGxvY2FsZUZpcnN0RGF5T2ZXZWVrO1xuXG4vLyBEYXkgb2YgV2Vla1xucHJvdG8kMS53ZWVrZGF5cyAgICAgICA9ICAgICAgICBsb2NhbGVXZWVrZGF5cztcbnByb3RvJDEud2Vla2RheXNNaW4gICAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNNaW47XG5wcm90byQxLndlZWtkYXlzU2hvcnQgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzU2hvcnQ7XG5wcm90byQxLndlZWtkYXlzUGFyc2UgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzUGFyc2U7XG5cbnByb3RvJDEud2Vla2RheXNSZWdleCAgICAgICA9ICAgICAgICB3ZWVrZGF5c1JlZ2V4O1xucHJvdG8kMS53ZWVrZGF5c1Nob3J0UmVnZXggID0gICAgICAgIHdlZWtkYXlzU2hvcnRSZWdleDtcbnByb3RvJDEud2Vla2RheXNNaW5SZWdleCAgICA9ICAgICAgICB3ZWVrZGF5c01pblJlZ2V4O1xuXG4vLyBIb3Vyc1xucHJvdG8kMS5pc1BNID0gbG9jYWxlSXNQTTtcbnByb3RvJDEubWVyaWRpZW0gPSBsb2NhbGVNZXJpZGllbTtcblxuZnVuY3Rpb24gZ2V0JDEgKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCBzZXR0ZXIpIHtcbiAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCk7XG4gICAgdmFyIHV0YyA9IGNyZWF0ZVVUQygpLnNldChzZXR0ZXIsIGluZGV4KTtcbiAgICByZXR1cm4gbG9jYWxlW2ZpZWxkXSh1dGMsIGZvcm1hdCk7XG59XG5cbmZ1bmN0aW9uIGxpc3RNb250aHNJbXBsIChmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuXG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgaW5kZXgsIGZpZWxkLCAnbW9udGgnKTtcbiAgICB9XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgb3V0W2ldID0gZ2V0JDEoZm9ybWF0LCBpLCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbi8vICgpXG4vLyAoNSlcbi8vIChmbXQsIDUpXG4vLyAoZm10KVxuLy8gKHRydWUpXG4vLyAodHJ1ZSwgNSlcbi8vICh0cnVlLCBmbXQsIDUpXG4vLyAodHJ1ZSwgZm10KVxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzSW1wbCAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgIGlmICh0eXBlb2YgbG9jYWxlU29ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGxvY2FsZVNvcnRlZDtcbiAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICB9XG5cbiAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgIHNoaWZ0ID0gbG9jYWxlU29ydGVkID8gbG9jYWxlLl93ZWVrLmRvdyA6IDA7XG5cbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZ2V0JDEoZm9ybWF0LCAoaW5kZXggKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgIH1cblxuICAgIHZhciBpO1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzIChmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHMnKTtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRoc1Nob3J0IChmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHNTaG9ydCcpO1xufVxuXG5mdW5jdGlvbiBsaXN0V2Vla2RheXMgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzJyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c1Nob3J0IChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c1Nob3J0Jyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c01pbiAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNNaW4nKTtcbn1cblxuZ2V0U2V0R2xvYmFsTG9jYWxlKCdlbicsIHtcbiAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0odGh8c3R8bmR8cmQpLyxcbiAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgb3V0cHV0ID0gKHRvSW50KG51bWJlciAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcbiAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcbiAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICB9XG59KTtcblxuLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuaG9va3MubGFuZyA9IGRlcHJlY2F0ZSgnbW9tZW50LmxhbmcgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGUgaW5zdGVhZC4nLCBnZXRTZXRHbG9iYWxMb2NhbGUpO1xuaG9va3MubGFuZ0RhdGEgPSBkZXByZWNhdGUoJ21vbWVudC5sYW5nRGF0YSBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZURhdGEgaW5zdGVhZC4nLCBnZXRMb2NhbGUpO1xuXG52YXIgbWF0aEFicyA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBhYnMgKCkge1xuICAgIHZhciBkYXRhICAgICAgICAgICA9IHRoaXMuX2RhdGE7XG5cbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XG4gICAgdGhpcy5fZGF5cyAgICAgICAgID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICB0aGlzLl9tb250aHMgICAgICAgPSBtYXRoQWJzKHRoaXMuX21vbnRocyk7XG5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyAgPSBtYXRoQWJzKGRhdGEubWlsbGlzZWNvbmRzKTtcbiAgICBkYXRhLnNlY29uZHMgICAgICAgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XG4gICAgZGF0YS5taW51dGVzICAgICAgID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xuICAgIGRhdGEuaG91cnMgICAgICAgICA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XG4gICAgZGF0YS5tb250aHMgICAgICAgID0gbWF0aEFicyhkYXRhLm1vbnRocyk7XG4gICAgZGF0YS55ZWFycyAgICAgICAgID0gbWF0aEFicyhkYXRhLnllYXJzKTtcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBhZGRTdWJ0cmFjdCQxIChkdXJhdGlvbiwgaW5wdXQsIHZhbHVlLCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgb3RoZXIgPSBjcmVhdGVEdXJhdGlvbihpbnB1dCwgdmFsdWUpO1xuXG4gICAgZHVyYXRpb24uX21pbGxpc2Vjb25kcyArPSBkaXJlY3Rpb24gKiBvdGhlci5fbWlsbGlzZWNvbmRzO1xuICAgIGR1cmF0aW9uLl9kYXlzICAgICAgICAgKz0gZGlyZWN0aW9uICogb3RoZXIuX2RheXM7XG4gICAgZHVyYXRpb24uX21vbnRocyAgICAgICArPSBkaXJlY3Rpb24gKiBvdGhlci5fbW9udGhzO1xuXG4gICAgcmV0dXJuIGR1cmF0aW9uLl9idWJibGUoKTtcbn1cblxuLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgYWRkKDEsICdzJykgb3IgYWRkKGR1cmF0aW9uKVxuZnVuY3Rpb24gYWRkJDEgKGlucHV0LCB2YWx1ZSkge1xuICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgMSk7XG59XG5cbi8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIHN1YnRyYWN0KDEsICdzJykgb3Igc3VidHJhY3QoZHVyYXRpb24pXG5mdW5jdGlvbiBzdWJ0cmFjdCQxIChpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIC0xKTtcbn1cblxuZnVuY3Rpb24gYWJzQ2VpbCAobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBidWJibGUgKCkge1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG4gICAgdmFyIGRheXMgICAgICAgICA9IHRoaXMuX2RheXM7XG4gICAgdmFyIG1vbnRocyAgICAgICA9IHRoaXMuX21vbnRocztcbiAgICB2YXIgZGF0YSAgICAgICAgID0gdGhpcy5fZGF0YTtcbiAgICB2YXIgc2Vjb25kcywgbWludXRlcywgaG91cnMsIHllYXJzLCBtb250aHNGcm9tRGF5cztcblxuICAgIC8vIGlmIHdlIGhhdmUgYSBtaXggb2YgcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHZhbHVlcywgYnViYmxlIGRvd24gZmlyc3RcbiAgICAvLyBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzIxNjZcbiAgICBpZiAoISgobWlsbGlzZWNvbmRzID49IDAgJiYgZGF5cyA+PSAwICYmIG1vbnRocyA+PSAwKSB8fFxuICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMCkpKSB7XG4gICAgICAgIG1pbGxpc2Vjb25kcyArPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHMpICsgZGF5cykgKiA4NjRlNTtcbiAgICAgICAgZGF5cyA9IDA7XG4gICAgICAgIG1vbnRocyA9IDA7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJ1YmJsZXMgdXAgdmFsdWVzLCBzZWUgdGhlIHRlc3RzIGZvclxuICAgIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgICBzZWNvbmRzICAgICAgICAgICA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIGRhdGEuc2Vjb25kcyAgICAgID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgbWludXRlcyAgICAgICAgICAgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGRhdGEubWludXRlcyAgICAgID0gbWludXRlcyAlIDYwO1xuXG4gICAgaG91cnMgICAgICAgICAgICAgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgIGRhdGEuaG91cnMgICAgICAgID0gaG91cnMgJSAyNDtcblxuICAgIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XG5cbiAgICAvLyBjb252ZXJ0IGRheXMgdG8gbW9udGhzXG4gICAgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICAgIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcbiAgICBkYXlzIC09IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRoc0Zyb21EYXlzKSk7XG5cbiAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgbW9udGhzICU9IDEyO1xuXG4gICAgZGF0YS5kYXlzICAgPSBkYXlzO1xuICAgIGRhdGEubW9udGhzID0gbW9udGhzO1xuICAgIGRhdGEueWVhcnMgID0geWVhcnM7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGF5c1RvTW9udGhzIChkYXlzKSB7XG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTQ2MDk3IGRheXMgKHRha2luZyBpbnRvIGFjY291bnQgbGVhcCB5ZWFyIHJ1bGVzKVxuICAgIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICAgIHJldHVybiBkYXlzICogNDgwMCAvIDE0NjA5Nztcbn1cblxuZnVuY3Rpb24gbW9udGhzVG9EYXlzIChtb250aHMpIHtcbiAgICAvLyB0aGUgcmV2ZXJzZSBvZiBkYXlzVG9Nb250aHNcbiAgICByZXR1cm4gbW9udGhzICogMTQ2MDk3IC8gNDgwMDtcbn1cblxuZnVuY3Rpb24gYXMgKHVuaXRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICB2YXIgZGF5cztcbiAgICB2YXIgbW9udGhzO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG5cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgIGlmICh1bml0cyA9PT0gJ21vbnRoJyB8fCB1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgIGRheXMgICA9IHRoaXMuX2RheXMgICArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XG4gICAgICAgIHJldHVybiB1bml0cyA9PT0gJ21vbnRoJyA/IG1vbnRocyA6IG1vbnRocyAvIDEyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhhbmRsZSBtaWxsaXNlY29uZHMgc2VwYXJhdGVseSBiZWNhdXNlIG9mIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChpc3N1ZSAjMTg2NylcbiAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcbiAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgY2FzZSAnd2VlaycgICA6IHJldHVybiBkYXlzIC8gNyAgICAgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XG4gICAgICAgICAgICBjYXNlICdkYXknICAgIDogcmV0dXJuIGRheXMgICAgICAgICArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xuICAgICAgICAgICAgY2FzZSAnaG91cicgICA6IHJldHVybiBkYXlzICogMjQgICAgKyBtaWxsaXNlY29uZHMgLyAzNmU1O1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJyA6IHJldHVybiBkYXlzICogMTQ0MCAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnIDogcmV0dXJuIGRheXMgKiA4NjQwMCArIG1pbGxpc2Vjb25kcyAvIDEwMDA7XG4gICAgICAgICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcbiAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzogcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignVW5rbm93biB1bml0ICcgKyB1bml0cyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFRPRE86IFVzZSB0aGlzLmFzKCdtcycpP1xuZnVuY3Rpb24gdmFsdWVPZiQxICgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArXG4gICAgICAgIHRoaXMuX2RheXMgKiA4NjRlNSArXG4gICAgICAgICh0aGlzLl9tb250aHMgJSAxMikgKiAyNTkyZTYgK1xuICAgICAgICB0b0ludCh0aGlzLl9tb250aHMgLyAxMikgKiAzMTUzNmU2XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZUFzIChhbGlhcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzKGFsaWFzKTtcbiAgICB9O1xufVxuXG52YXIgYXNNaWxsaXNlY29uZHMgPSBtYWtlQXMoJ21zJyk7XG52YXIgYXNTZWNvbmRzICAgICAgPSBtYWtlQXMoJ3MnKTtcbnZhciBhc01pbnV0ZXMgICAgICA9IG1ha2VBcygnbScpO1xudmFyIGFzSG91cnMgICAgICAgID0gbWFrZUFzKCdoJyk7XG52YXIgYXNEYXlzICAgICAgICAgPSBtYWtlQXMoJ2QnKTtcbnZhciBhc1dlZWtzICAgICAgICA9IG1ha2VBcygndycpO1xudmFyIGFzTW9udGhzICAgICAgID0gbWFrZUFzKCdNJyk7XG52YXIgYXNZZWFycyAgICAgICAgPSBtYWtlQXMoJ3knKTtcblxuZnVuY3Rpb24gY2xvbmUkMSAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBnZXQkMiAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzW3VuaXRzICsgJ3MnXSgpIDogTmFOO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0dGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9kYXRhW25hbWVdIDogTmFOO1xuICAgIH07XG59XG5cbnZhciBtaWxsaXNlY29uZHMgPSBtYWtlR2V0dGVyKCdtaWxsaXNlY29uZHMnKTtcbnZhciBzZWNvbmRzICAgICAgPSBtYWtlR2V0dGVyKCdzZWNvbmRzJyk7XG52YXIgbWludXRlcyAgICAgID0gbWFrZUdldHRlcignbWludXRlcycpO1xudmFyIGhvdXJzICAgICAgICA9IG1ha2VHZXR0ZXIoJ2hvdXJzJyk7XG52YXIgZGF5cyAgICAgICAgID0gbWFrZUdldHRlcignZGF5cycpO1xudmFyIG1vbnRocyAgICAgICA9IG1ha2VHZXR0ZXIoJ21vbnRocycpO1xudmFyIHllYXJzICAgICAgICA9IG1ha2VHZXR0ZXIoJ3llYXJzJyk7XG5cbmZ1bmN0aW9uIHdlZWtzICgpIHtcbiAgICByZXR1cm4gYWJzRmxvb3IodGhpcy5kYXlzKCkgLyA3KTtcbn1cblxudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcbnZhciB0aHJlc2hvbGRzID0ge1xuICAgIHNzOiA0NCwgICAgICAgICAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcbiAgICBzIDogNDUsICAgICAgICAgLy8gc2Vjb25kcyB0byBtaW51dGVcbiAgICBtIDogNDUsICAgICAgICAgLy8gbWludXRlcyB0byBob3VyXG4gICAgaCA6IDIyLCAgICAgICAgIC8vIGhvdXJzIHRvIGRheVxuICAgIGQgOiAyNiwgICAgICAgICAvLyBkYXlzIHRvIG1vbnRoXG4gICAgTSA6IDExICAgICAgICAgIC8vIG1vbnRocyB0byB5ZWFyXG59O1xuXG4vLyBoZWxwZXIgZnVuY3Rpb24gZm9yIG1vbWVudC5mbi5mcm9tLCBtb21lbnQuZm4uZnJvbU5vdywgYW5kIG1vbWVudC5kdXJhdGlvbi5mbi5odW1hbml6ZVxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRpbWVBZ28oc3RyaW5nLCBudW1iZXIsIHdpdGhvdXRTdWZmaXgsIGlzRnV0dXJlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLnJlbGF0aXZlVGltZShudW1iZXIgfHwgMSwgISF3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKTtcbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lJDEgKHBvc05lZ0R1cmF0aW9uLCB3aXRob3V0U3VmZml4LCBsb2NhbGUpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBjcmVhdGVEdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCk7XG4gICAgdmFyIHNlY29uZHMgID0gcm91bmQoZHVyYXRpb24uYXMoJ3MnKSk7XG4gICAgdmFyIG1pbnV0ZXMgID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSk7XG4gICAgdmFyIGhvdXJzICAgID0gcm91bmQoZHVyYXRpb24uYXMoJ2gnKSk7XG4gICAgdmFyIGRheXMgICAgID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSk7XG4gICAgdmFyIG1vbnRocyAgID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSk7XG4gICAgdmFyIHllYXJzICAgID0gcm91bmQoZHVyYXRpb24uYXMoJ3knKSk7XG5cbiAgICB2YXIgYSA9IHNlY29uZHMgPD0gdGhyZXNob2xkcy5zcyAmJiBbJ3MnLCBzZWNvbmRzXSAgfHxcbiAgICAgICAgICAgIHNlY29uZHMgPCB0aHJlc2hvbGRzLnMgICAmJiBbJ3NzJywgc2Vjb25kc10gfHxcbiAgICAgICAgICAgIG1pbnV0ZXMgPD0gMSAgICAgICAgICAgICAmJiBbJ20nXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIG1pbnV0ZXMgPCB0aHJlc2hvbGRzLm0gICAmJiBbJ21tJywgbWludXRlc10gfHxcbiAgICAgICAgICAgIGhvdXJzICAgPD0gMSAgICAgICAgICAgICAmJiBbJ2gnXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIGhvdXJzICAgPCB0aHJlc2hvbGRzLmggICAmJiBbJ2hoJywgaG91cnNdICAgfHxcbiAgICAgICAgICAgIGRheXMgICAgPD0gMSAgICAgICAgICAgICAmJiBbJ2QnXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIGRheXMgICAgPCB0aHJlc2hvbGRzLmQgICAmJiBbJ2RkJywgZGF5c10gICAgfHxcbiAgICAgICAgICAgIG1vbnRocyAgPD0gMSAgICAgICAgICAgICAmJiBbJ00nXSAgICAgICAgICAgfHxcbiAgICAgICAgICAgIG1vbnRocyAgPCB0aHJlc2hvbGRzLk0gICAmJiBbJ01NJywgbW9udGhzXSAgfHxcbiAgICAgICAgICAgIHllYXJzICAgPD0gMSAgICAgICAgICAgICAmJiBbJ3knXSAgICAgICAgICAgfHwgWyd5eScsIHllYXJzXTtcblxuICAgIGFbMl0gPSB3aXRob3V0U3VmZml4O1xuICAgIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xuICAgIGFbNF0gPSBsb2NhbGU7XG4gICAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGEpO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IHRoZSByb3VuZGluZyBmdW5jdGlvbiBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5mdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyAocm91bmRpbmdGdW5jdGlvbikge1xuICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kO1xuICAgIH1cbiAgICBpZiAodHlwZW9mKHJvdW5kaW5nRnVuY3Rpb24pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG5mdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQgKHRocmVzaG9sZCwgbGltaXQpIHtcbiAgICBpZiAodGhyZXNob2xkc1t0aHJlc2hvbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhyZXNob2xkc1t0aHJlc2hvbGRdO1xuICAgIH1cbiAgICB0aHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgICBpZiAodGhyZXNob2xkID09PSAncycpIHtcbiAgICAgICAgdGhyZXNob2xkcy5zcyA9IGxpbWl0IC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGh1bWFuaXplICh3aXRoU3VmZml4KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYWxlID0gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgdmFyIG91dHB1dCA9IHJlbGF0aXZlVGltZSQxKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xuXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG5cbnZhciBhYnMkMSA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgICByZXR1cm4gKCh4ID4gMCkgLSAoeCA8IDApKSB8fCAreDtcbn1cblxuZnVuY3Rpb24gdG9JU09TdHJpbmckMSgpIHtcbiAgICAvLyBmb3IgSVNPIHN0cmluZ3Mgd2UgZG8gbm90IHVzZSB0aGUgbm9ybWFsIGJ1YmJsaW5nIHJ1bGVzOlxuICAgIC8vICAqIG1pbGxpc2Vjb25kcyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgaG91cnNcbiAgICAvLyAgKiBkYXlzIGRvIG5vdCBidWJibGUgYXQgYWxsXG4gICAgLy8gICogbW9udGhzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSB5ZWFyc1xuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjb250ZXh0LWZyZWUgY29udmVyc2lvbiBiZXR3ZWVuIGhvdXJzIGFuZCBkYXlzXG4gICAgLy8gKHRoaW5rIG9mIGNsb2NrIGNoYW5nZXMpXG4gICAgLy8gYW5kIGFsc28gbm90IGJldHdlZW4gZGF5cyBhbmQgbW9udGhzICgyOC0zMSBkYXlzIHBlciBtb250aClcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBzZWNvbmRzID0gYWJzJDEodGhpcy5fbWlsbGlzZWNvbmRzKSAvIDEwMDA7XG4gICAgdmFyIGRheXMgICAgICAgICA9IGFicyQxKHRoaXMuX2RheXMpO1xuICAgIHZhciBtb250aHMgICAgICAgPSBhYnMkMSh0aGlzLl9tb250aHMpO1xuICAgIHZhciBtaW51dGVzLCBob3VycywgeWVhcnM7XG5cbiAgICAvLyAzNjAwIHNlY29uZHMgLT4gNjAgbWludXRlcyAtPiAxIGhvdXJcbiAgICBtaW51dGVzICAgICAgICAgICA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgaG91cnMgICAgICAgICAgICAgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgIHNlY29uZHMgJT0gNjA7XG4gICAgbWludXRlcyAlPSA2MDtcblxuICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICB5ZWFycyAgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgbW9udGhzICU9IDEyO1xuXG5cbiAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgIHZhciBZID0geWVhcnM7XG4gICAgdmFyIE0gPSBtb250aHM7XG4gICAgdmFyIEQgPSBkYXlzO1xuICAgIHZhciBoID0gaG91cnM7XG4gICAgdmFyIG0gPSBtaW51dGVzO1xuICAgIHZhciBzID0gc2Vjb25kcyA/IHNlY29uZHMudG9GaXhlZCgzKS5yZXBsYWNlKC9cXC4/MCskLywgJycpIDogJyc7XG4gICAgdmFyIHRvdGFsID0gdGhpcy5hc1NlY29uZHMoKTtcblxuICAgIGlmICghdG90YWwpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAvLyBidXQgbm90IG90aGVyIEpTIChnb29nLmRhdGUpXG4gICAgICAgIHJldHVybiAnUDBEJztcbiAgICB9XG5cbiAgICB2YXIgdG90YWxTaWduID0gdG90YWwgPCAwID8gJy0nIDogJyc7XG4gICAgdmFyIHltU2lnbiA9IHNpZ24odGhpcy5fbW9udGhzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICB2YXIgZGF5c1NpZ24gPSBzaWduKHRoaXMuX2RheXMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgIHZhciBobXNTaWduID0gc2lnbih0aGlzLl9taWxsaXNlY29uZHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuXG4gICAgcmV0dXJuIHRvdGFsU2lnbiArICdQJyArXG4gICAgICAgIChZID8geW1TaWduICsgWSArICdZJyA6ICcnKSArXG4gICAgICAgIChNID8geW1TaWduICsgTSArICdNJyA6ICcnKSArXG4gICAgICAgIChEID8gZGF5c1NpZ24gKyBEICsgJ0QnIDogJycpICtcbiAgICAgICAgKChoIHx8IG0gfHwgcykgPyAnVCcgOiAnJykgK1xuICAgICAgICAoaCA/IGhtc1NpZ24gKyBoICsgJ0gnIDogJycpICtcbiAgICAgICAgKG0gPyBobXNTaWduICsgbSArICdNJyA6ICcnKSArXG4gICAgICAgIChzID8gaG1zU2lnbiArIHMgKyAnUycgOiAnJyk7XG59XG5cbnZhciBwcm90byQyID0gRHVyYXRpb24ucHJvdG90eXBlO1xuXG5wcm90byQyLmlzVmFsaWQgICAgICAgID0gaXNWYWxpZCQxO1xucHJvdG8kMi5hYnMgICAgICAgICAgICA9IGFicztcbnByb3RvJDIuYWRkICAgICAgICAgICAgPSBhZGQkMTtcbnByb3RvJDIuc3VidHJhY3QgICAgICAgPSBzdWJ0cmFjdCQxO1xucHJvdG8kMi5hcyAgICAgICAgICAgICA9IGFzO1xucHJvdG8kMi5hc01pbGxpc2Vjb25kcyA9IGFzTWlsbGlzZWNvbmRzO1xucHJvdG8kMi5hc1NlY29uZHMgICAgICA9IGFzU2Vjb25kcztcbnByb3RvJDIuYXNNaW51dGVzICAgICAgPSBhc01pbnV0ZXM7XG5wcm90byQyLmFzSG91cnMgICAgICAgID0gYXNIb3VycztcbnByb3RvJDIuYXNEYXlzICAgICAgICAgPSBhc0RheXM7XG5wcm90byQyLmFzV2Vla3MgICAgICAgID0gYXNXZWVrcztcbnByb3RvJDIuYXNNb250aHMgICAgICAgPSBhc01vbnRocztcbnByb3RvJDIuYXNZZWFycyAgICAgICAgPSBhc1llYXJzO1xucHJvdG8kMi52YWx1ZU9mICAgICAgICA9IHZhbHVlT2YkMTtcbnByb3RvJDIuX2J1YmJsZSAgICAgICAgPSBidWJibGU7XG5wcm90byQyLmNsb25lICAgICAgICAgID0gY2xvbmUkMTtcbnByb3RvJDIuZ2V0ICAgICAgICAgICAgPSBnZXQkMjtcbnByb3RvJDIubWlsbGlzZWNvbmRzICAgPSBtaWxsaXNlY29uZHM7XG5wcm90byQyLnNlY29uZHMgICAgICAgID0gc2Vjb25kcztcbnByb3RvJDIubWludXRlcyAgICAgICAgPSBtaW51dGVzO1xucHJvdG8kMi5ob3VycyAgICAgICAgICA9IGhvdXJzO1xucHJvdG8kMi5kYXlzICAgICAgICAgICA9IGRheXM7XG5wcm90byQyLndlZWtzICAgICAgICAgID0gd2Vla3M7XG5wcm90byQyLm1vbnRocyAgICAgICAgID0gbW9udGhzO1xucHJvdG8kMi55ZWFycyAgICAgICAgICA9IHllYXJzO1xucHJvdG8kMi5odW1hbml6ZSAgICAgICA9IGh1bWFuaXplO1xucHJvdG8kMi50b0lTT1N0cmluZyAgICA9IHRvSVNPU3RyaW5nJDE7XG5wcm90byQyLnRvU3RyaW5nICAgICAgID0gdG9JU09TdHJpbmckMTtcbnByb3RvJDIudG9KU09OICAgICAgICAgPSB0b0lTT1N0cmluZyQxO1xucHJvdG8kMi5sb2NhbGUgICAgICAgICA9IGxvY2FsZTtcbnByb3RvJDIubG9jYWxlRGF0YSAgICAgPSBsb2NhbGVEYXRhO1xuXG4vLyBEZXByZWNhdGlvbnNcbnByb3RvJDIudG9Jc29TdHJpbmcgPSBkZXByZWNhdGUoJ3RvSXNvU3RyaW5nKCkgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0b0lTT1N0cmluZygpIGluc3RlYWQgKG5vdGljZSB0aGUgY2FwaXRhbHMpJywgdG9JU09TdHJpbmckMSk7XG5wcm90byQyLmxhbmcgPSBsYW5nO1xuXG4vLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1gnLCAwLCAwLCAndW5peCcpO1xuYWRkRm9ybWF0VG9rZW4oJ3gnLCAwLCAwLCAndmFsdWVPZicpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xuYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQsIDEwKSAqIDEwMDApO1xufSk7XG5hZGRQYXJzZVRva2VuKCd4JywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUodG9JbnQoaW5wdXQpKTtcbn0pO1xuXG4vLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5cblxuaG9va3MudmVyc2lvbiA9ICcyLjIwLjEnO1xuXG5zZXRIb29rQ2FsbGJhY2soY3JlYXRlTG9jYWwpO1xuXG5ob29rcy5mbiAgICAgICAgICAgICAgICAgICAgPSBwcm90bztcbmhvb2tzLm1pbiAgICAgICAgICAgICAgICAgICA9IG1pbjtcbmhvb2tzLm1heCAgICAgICAgICAgICAgICAgICA9IG1heDtcbmhvb2tzLm5vdyAgICAgICAgICAgICAgICAgICA9IG5vdztcbmhvb2tzLnV0YyAgICAgICAgICAgICAgICAgICA9IGNyZWF0ZVVUQztcbmhvb2tzLnVuaXggICAgICAgICAgICAgICAgICA9IGNyZWF0ZVVuaXg7XG5ob29rcy5tb250aHMgICAgICAgICAgICAgICAgPSBsaXN0TW9udGhzO1xuaG9va3MuaXNEYXRlICAgICAgICAgICAgICAgID0gaXNEYXRlO1xuaG9va3MubG9jYWxlICAgICAgICAgICAgICAgID0gZ2V0U2V0R2xvYmFsTG9jYWxlO1xuaG9va3MuaW52YWxpZCAgICAgICAgICAgICAgID0gY3JlYXRlSW52YWxpZDtcbmhvb2tzLmR1cmF0aW9uICAgICAgICAgICAgICA9IGNyZWF0ZUR1cmF0aW9uO1xuaG9va3MuaXNNb21lbnQgICAgICAgICAgICAgID0gaXNNb21lbnQ7XG5ob29rcy53ZWVrZGF5cyAgICAgICAgICAgICAgPSBsaXN0V2Vla2RheXM7XG5ob29rcy5wYXJzZVpvbmUgICAgICAgICAgICAgPSBjcmVhdGVJblpvbmU7XG5ob29rcy5sb2NhbGVEYXRhICAgICAgICAgICAgPSBnZXRMb2NhbGU7XG5ob29rcy5pc0R1cmF0aW9uICAgICAgICAgICAgPSBpc0R1cmF0aW9uO1xuaG9va3MubW9udGhzU2hvcnQgICAgICAgICAgID0gbGlzdE1vbnRoc1Nob3J0O1xuaG9va3Mud2Vla2RheXNNaW4gICAgICAgICAgID0gbGlzdFdlZWtkYXlzTWluO1xuaG9va3MuZGVmaW5lTG9jYWxlICAgICAgICAgID0gZGVmaW5lTG9jYWxlO1xuaG9va3MudXBkYXRlTG9jYWxlICAgICAgICAgID0gdXBkYXRlTG9jYWxlO1xuaG9va3MubG9jYWxlcyAgICAgICAgICAgICAgID0gbGlzdExvY2FsZXM7XG5ob29rcy53ZWVrZGF5c1Nob3J0ICAgICAgICAgPSBsaXN0V2Vla2RheXNTaG9ydDtcbmhvb2tzLm5vcm1hbGl6ZVVuaXRzICAgICAgICA9IG5vcm1hbGl6ZVVuaXRzO1xuaG9va3MucmVsYXRpdmVUaW1lUm91bmRpbmcgID0gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmc7XG5ob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XG5ob29rcy5jYWxlbmRhckZvcm1hdCAgICAgICAgPSBnZXRDYWxlbmRhckZvcm1hdDtcbmhvb2tzLnByb3RvdHlwZSAgICAgICAgICAgICA9IHByb3RvO1xuXG4vLyBjdXJyZW50bHkgSFRNTDUgaW5wdXQgdHlwZSBvbmx5IHN1cHBvcnRzIDI0LWhvdXIgZm9ybWF0c1xuaG9va3MuSFRNTDVfRk1UID0ge1xuICAgIERBVEVUSU1FX0xPQ0FMOiAnWVlZWS1NTS1ERFRISDptbScsICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiAvPlxuICAgIERBVEVUSU1FX0xPQ0FMX1NFQ09ORFM6ICdZWVlZLU1NLUREVEhIOm1tOnNzJywgIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMVwiIC8+XG4gICAgREFURVRJTUVfTE9DQUxfTVM6ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTUycsICAgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgREFURTogJ1lZWVktTU0tREQnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJkYXRlXCIgLz5cbiAgICBUSU1FOiAnSEg6bW0nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiAvPlxuICAgIFRJTUVfU0VDT05EUzogJ0hIOm1tOnNzJywgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIxXCIgLz5cbiAgICBUSU1FX01TOiAnSEg6bW06c3MuU1NTJywgICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMC4wMDFcIiAvPlxuICAgIFdFRUs6ICdZWVlZLVtXXVdXJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwid2Vla1wiIC8+XG4gICAgTU9OVEg6ICdZWVlZLU1NJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJtb250aFwiIC8+XG59O1xuXG5yZXR1cm4gaG9va3M7XG5cbn0pKSk7XG4iLCIvKiFcblx0UGFwYSBQYXJzZVxuXHR2NC4zLjZcblx0aHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZVxuXHRMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSlcbntcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0e1xuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuXHRcdC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuXHRcdC8vIGxpa2UgTm9kZS5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuXHRcdHJvb3QuUGFwYSA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbigpXG57XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgZ2xvYmFsID0gKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBhbHRlcm5hdGl2ZSBtZXRob2QsIHNpbWlsYXIgdG8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdFx0Ly8gYnV0IHdpdGhvdXQgdXNpbmcgYGV2YWxgICh3aGljaCBpcyBkaXNhYmxlZCB3aGVuXG5cdFx0Ly8gdXNpbmcgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuXG5cdFx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfVxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdFx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblxuXHRcdC8vIFdoZW4gcnVubmluZyB0ZXN0cyBub25lIG9mIHRoZSBhYm92ZSBoYXZlIGJlZW4gZGVmaW5lZFxuXHRcdHJldHVybiB7fTtcblx0fSkoKTtcblxuXG5cdHZhciBJU19XT1JLRVIgPSAhZ2xvYmFsLmRvY3VtZW50ICYmICEhZ2xvYmFsLnBvc3RNZXNzYWdlLFxuXHRcdElTX1BBUEFfV09SS0VSID0gSVNfV09SS0VSICYmIC8oXFw/fCYpcGFwYXdvcmtlcig9fCZ8JCkvLnRlc3QoZ2xvYmFsLmxvY2F0aW9uLnNlYXJjaCksXG5cdFx0TE9BREVEX1NZTkMgPSBmYWxzZSwgQVVUT19TQ1JJUFRfUEFUSDtcblx0dmFyIHdvcmtlcnMgPSB7fSwgd29ya2VySWRDb3VudGVyID0gMDtcblxuXHR2YXIgUGFwYSA9IHt9O1xuXG5cdFBhcGEucGFyc2UgPSBDc3ZUb0pzb247XG5cdFBhcGEudW5wYXJzZSA9IEpzb25Ub0NzdjtcblxuXHRQYXBhLlJFQ09SRF9TRVAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMwKTtcblx0UGFwYS5VTklUX1NFUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzEpO1xuXHRQYXBhLkJZVEVfT1JERVJfTUFSSyA9ICdcXHVmZWZmJztcblx0UGFwYS5CQURfREVMSU1JVEVSUyA9IFsnXFxyJywgJ1xcbicsICdcIicsIFBhcGEuQllURV9PUkRFUl9NQVJLXTtcblx0UGFwYS5XT1JLRVJTX1NVUFBPUlRFRCA9ICFJU19XT1JLRVIgJiYgISFnbG9iYWwuV29ya2VyO1xuXHRQYXBhLlNDUklQVF9QQVRIID0gbnVsbDtcdC8vIE11c3QgYmUgc2V0IGJ5IHlvdXIgY29kZSBpZiB5b3UgdXNlIHdvcmtlcnMgYW5kIHRoaXMgbGliIGlzIGxvYWRlZCBhc3luY2hyb25vdXNseVxuXG5cdC8vIENvbmZpZ3VyYWJsZSBjaHVuayBzaXplcyBmb3IgbG9jYWwgYW5kIHJlbW90ZSBmaWxlcywgcmVzcGVjdGl2ZWx5XG5cdFBhcGEuTG9jYWxDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDEwO1x0Ly8gMTAgTUJcblx0UGFwYS5SZW1vdGVDaHVua1NpemUgPSAxMDI0ICogMTAyNCAqIDU7XHQvLyA1IE1CXG5cdFBhcGEuRGVmYXVsdERlbGltaXRlciA9ICcsJztcdFx0XHQvLyBVc2VkIGlmIG5vdCBzcGVjaWZpZWQgYW5kIGRldGVjdGlvbiBmYWlsc1xuXG5cdC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcgYW5kIGRldmVsb3BtZW50IG9ubHlcblx0UGFwYS5QYXJzZXIgPSBQYXJzZXI7XG5cdFBhcGEuUGFyc2VySGFuZGxlID0gUGFyc2VySGFuZGxlO1xuXHRQYXBhLk5ldHdvcmtTdHJlYW1lciA9IE5ldHdvcmtTdHJlYW1lcjtcblx0UGFwYS5GaWxlU3RyZWFtZXIgPSBGaWxlU3RyZWFtZXI7XG5cdFBhcGEuU3RyaW5nU3RyZWFtZXIgPSBTdHJpbmdTdHJlYW1lcjtcblx0UGFwYS5SZWFkYWJsZVN0cmVhbVN0cmVhbWVyID0gUmVhZGFibGVTdHJlYW1TdHJlYW1lcjtcblxuXHRpZiAoZ2xvYmFsLmpRdWVyeSlcblx0e1xuXHRcdHZhciAkID0gZ2xvYmFsLmpRdWVyeTtcblx0XHQkLmZuLnBhcnNlID0gZnVuY3Rpb24ob3B0aW9ucylcblx0XHR7XG5cdFx0XHR2YXIgY29uZmlnID0gb3B0aW9ucy5jb25maWcgfHwge307XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKGlkeClcblx0XHRcdHtcblx0XHRcdFx0dmFyIHN1cHBvcnRlZCA9ICQodGhpcykucHJvcCgndGFnTmFtZScpLnRvVXBwZXJDYXNlKCkgPT09ICdJTlBVVCdcblx0XHRcdFx0XHRcdFx0XHQmJiAkKHRoaXMpLmF0dHIoJ3R5cGUnKS50b0xvd2VyQ2FzZSgpID09PSAnZmlsZSdcblx0XHRcdFx0XHRcdFx0XHQmJiBnbG9iYWwuRmlsZVJlYWRlcjtcblxuXHRcdFx0XHRpZiAoIXN1cHBvcnRlZCB8fCAhdGhpcy5maWxlcyB8fCB0aGlzLmZpbGVzLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcdC8vIGNvbnRpbnVlIHRvIG5leHQgaW5wdXQgZWxlbWVudFxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdFx0ZmlsZTogdGhpcy5maWxlc1tpXSxcblx0XHRcdFx0XHRcdGlucHV0RWxlbTogdGhpcyxcblx0XHRcdFx0XHRcdGluc3RhbmNlQ29uZmlnOiAkLmV4dGVuZCh7fSwgY29uZmlnKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cGFyc2VOZXh0RmlsZSgpO1x0Ly8gYmVnaW4gcGFyc2luZ1xuXHRcdFx0cmV0dXJuIHRoaXM7XHRcdC8vIG1haW50YWlucyBjaGFpbmFiaWxpdHlcblxuXG5cdFx0XHRmdW5jdGlvbiBwYXJzZU5leHRGaWxlKClcblx0XHRcdHtcblx0XHRcdFx0aWYgKHF1ZXVlLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuY29tcGxldGUpKVxuXHRcdFx0XHRcdFx0b3B0aW9ucy5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmID0gcXVldWVbMF07XG5cblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5iZWZvcmUpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJldHVybmVkID0gb3B0aW9ucy5iZWZvcmUoZi5maWxlLCBmLmlucHV0RWxlbSk7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldHVybmVkID09PSAnb2JqZWN0Jylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRpZiAocmV0dXJuZWQuYWN0aW9uID09PSAnYWJvcnQnKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRlcnJvcignQWJvcnRFcnJvcicsIGYuZmlsZSwgZi5pbnB1dEVsZW0sIHJldHVybmVkLnJlYXNvbik7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcdC8vIEFib3J0cyBhbGwgcXVldWVkIGZpbGVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmIChyZXR1cm5lZC5hY3Rpb24gPT09ICdza2lwJylcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XHQvLyBwYXJzZSB0aGUgbmV4dCBmaWxlIGluIHRoZSBxdWV1ZSwgaWYgYW55XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiByZXR1cm5lZC5jb25maWcgPT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdFx0XHRmLmluc3RhbmNlQ29uZmlnID0gJC5leHRlbmQoZi5pbnN0YW5jZUNvbmZpZywgcmV0dXJuZWQuY29uZmlnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocmV0dXJuZWQgPT09ICdza2lwJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmaWxlQ29tcGxldGUoKTtcdC8vIHBhcnNlIHRoZSBuZXh0IGZpbGUgaW4gdGhlIHF1ZXVlLCBpZiBhbnlcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXcmFwIHVwIHRoZSB1c2VyJ3MgY29tcGxldGUgY2FsbGJhY2ssIGlmIGFueSwgc28gdGhhdCBvdXJzIGFsc28gZ2V0cyBleGVjdXRlZFxuXHRcdFx0XHR2YXIgdXNlckNvbXBsZXRlRnVuYyA9IGYuaW5zdGFuY2VDb25maWcuY29tcGxldGU7XG5cdFx0XHRcdGYuaW5zdGFuY2VDb25maWcuY29tcGxldGUgPSBmdW5jdGlvbihyZXN1bHRzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGlzRnVuY3Rpb24odXNlckNvbXBsZXRlRnVuYykpXG5cdFx0XHRcdFx0XHR1c2VyQ29tcGxldGVGdW5jKHJlc3VsdHMsIGYuZmlsZSwgZi5pbnB1dEVsZW0pO1xuXHRcdFx0XHRcdGZpbGVDb21wbGV0ZSgpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdFBhcGEucGFyc2UoZi5maWxlLCBmLmluc3RhbmNlQ29uZmlnKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZXJyb3IobmFtZSwgZmlsZSwgZWxlbSwgcmVhc29uKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihvcHRpb25zLmVycm9yKSlcblx0XHRcdFx0XHRvcHRpb25zLmVycm9yKHtuYW1lOiBuYW1lfSwgZmlsZSwgZWxlbSwgcmVhc29uKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZmlsZUNvbXBsZXRlKClcblx0XHRcdHtcblx0XHRcdFx0cXVldWUuc3BsaWNlKDAsIDEpO1xuXHRcdFx0XHRwYXJzZU5leHRGaWxlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHRpZiAoSVNfUEFQQV9XT1JLRVIpXG5cdHtcblx0XHRnbG9iYWwub25tZXNzYWdlID0gd29ya2VyVGhyZWFkUmVjZWl2ZWRNZXNzYWdlO1xuXHR9XG5cdGVsc2UgaWYgKFBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdHtcblx0XHRBVVRPX1NDUklQVF9QQVRIID0gZ2V0U2NyaXB0UGF0aCgpO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIHNjcmlwdCB3YXMgbG9hZGVkIHN5bmNocm9ub3VzbHlcblx0XHRpZiAoIWRvY3VtZW50LmJvZHkpXG5cdFx0e1xuXHRcdFx0Ly8gQm9keSBkb2Vzbid0IGV4aXN0IHlldCwgbXVzdCBiZSBzeW5jaHJvbm91c1xuXHRcdFx0TE9BREVEX1NZTkMgPSB0cnVlO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0TE9BREVEX1NZTkMgPSB0cnVlO1xuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cblx0ZnVuY3Rpb24gQ3N2VG9Kc29uKF9pbnB1dCwgX2NvbmZpZylcblx0e1xuXHRcdF9jb25maWcgPSBfY29uZmlnIHx8IHt9O1xuXHRcdHZhciBkeW5hbWljVHlwaW5nID0gX2NvbmZpZy5keW5hbWljVHlwaW5nIHx8IGZhbHNlO1xuXHRcdGlmIChpc0Z1bmN0aW9uKGR5bmFtaWNUeXBpbmcpKSB7XG5cdFx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmdGdW5jdGlvbiA9IGR5bmFtaWNUeXBpbmc7XG5cdFx0XHQvLyBXaWxsIGJlIGZpbGxlZCBvbiBmaXJzdCByb3cgY2FsbFxuXHRcdFx0ZHluYW1pY1R5cGluZyA9IHt9O1xuXHRcdH1cblx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmcgPSBkeW5hbWljVHlwaW5nO1xuXG5cdFx0aWYgKF9jb25maWcud29ya2VyICYmIFBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdFx0e1xuXHRcdFx0dmFyIHcgPSBuZXdXb3JrZXIoKTtcblxuXHRcdFx0dy51c2VyU3RlcCA9IF9jb25maWcuc3RlcDtcblx0XHRcdHcudXNlckNodW5rID0gX2NvbmZpZy5jaHVuaztcblx0XHRcdHcudXNlckNvbXBsZXRlID0gX2NvbmZpZy5jb21wbGV0ZTtcblx0XHRcdHcudXNlckVycm9yID0gX2NvbmZpZy5lcnJvcjtcblxuXHRcdFx0X2NvbmZpZy5zdGVwID0gaXNGdW5jdGlvbihfY29uZmlnLnN0ZXApO1xuXHRcdFx0X2NvbmZpZy5jaHVuayA9IGlzRnVuY3Rpb24oX2NvbmZpZy5jaHVuayk7XG5cdFx0XHRfY29uZmlnLmNvbXBsZXRlID0gaXNGdW5jdGlvbihfY29uZmlnLmNvbXBsZXRlKTtcblx0XHRcdF9jb25maWcuZXJyb3IgPSBpc0Z1bmN0aW9uKF9jb25maWcuZXJyb3IpO1xuXHRcdFx0ZGVsZXRlIF9jb25maWcud29ya2VyO1x0Ly8gcHJldmVudCBpbmZpbml0ZSBsb29wXG5cblx0XHRcdHcucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRpbnB1dDogX2lucHV0LFxuXHRcdFx0XHRjb25maWc6IF9jb25maWcsXG5cdFx0XHRcdHdvcmtlcklkOiB3LmlkXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBzdHJlYW1lciA9IG51bGw7XG5cdFx0aWYgKHR5cGVvZiBfaW5wdXQgPT09ICdzdHJpbmcnKVxuXHRcdHtcblx0XHRcdGlmIChfY29uZmlnLmRvd25sb2FkKVxuXHRcdFx0XHRzdHJlYW1lciA9IG5ldyBOZXR3b3JrU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHN0cmVhbWVyID0gbmV3IFN0cmluZ1N0cmVhbWVyKF9jb25maWcpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChfaW5wdXQucmVhZGFibGUgPT09IHRydWUgJiYgaXNGdW5jdGlvbihfaW5wdXQucmVhZCkgJiYgaXNGdW5jdGlvbihfaW5wdXQub24pKVxuXHRcdHtcblx0XHRcdHN0cmVhbWVyID0gbmV3IFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChnbG9iYWwuRmlsZSAmJiBfaW5wdXQgaW5zdGFuY2VvZiBGaWxlKSB8fCBfaW5wdXQgaW5zdGFuY2VvZiBPYmplY3QpXHQvLyAuLi5TYWZhcmkuIChzZWUgaXNzdWUgIzEwNilcblx0XHRcdHN0cmVhbWVyID0gbmV3IEZpbGVTdHJlYW1lcihfY29uZmlnKTtcblxuXHRcdHJldHVybiBzdHJlYW1lci5zdHJlYW0oX2lucHV0KTtcblx0fVxuXG5cblxuXG5cblxuXHRmdW5jdGlvbiBKc29uVG9Dc3YoX2lucHV0LCBfY29uZmlnKVxuXHR7XG5cdFx0dmFyIF9vdXRwdXQgPSAnJztcblx0XHR2YXIgX2ZpZWxkcyA9IFtdO1xuXG5cdFx0Ly8gRGVmYXVsdCBjb25maWd1cmF0aW9uXG5cblx0XHQvKiogd2hldGhlciB0byBzdXJyb3VuZCBldmVyeSBkYXR1bSB3aXRoIHF1b3RlcyAqL1xuXHRcdHZhciBfcXVvdGVzID0gZmFsc2U7XG5cblx0XHQvKiogd2hldGhlciB0byB3cml0ZSBoZWFkZXJzICovXG5cdFx0dmFyIF93cml0ZUhlYWRlciA9IHRydWU7XG5cblx0XHQvKiogZGVsaW1pdGluZyBjaGFyYWN0ZXIgKi9cblx0XHR2YXIgX2RlbGltaXRlciA9ICcsJztcblxuXHRcdC8qKiBuZXdsaW5lIGNoYXJhY3RlcihzKSAqL1xuXHRcdHZhciBfbmV3bGluZSA9ICdcXHJcXG4nO1xuXG5cdFx0LyoqIHF1b3RlIGNoYXJhY3RlciAqL1xuXHRcdHZhciBfcXVvdGVDaGFyID0gJ1wiJztcblxuXHRcdHVucGFja0NvbmZpZygpO1xuXG5cdFx0dmFyIHF1b3RlQ2hhclJlZ2V4ID0gbmV3IFJlZ0V4cChfcXVvdGVDaGFyLCAnZycpO1xuXG5cdFx0aWYgKHR5cGVvZiBfaW5wdXQgPT09ICdzdHJpbmcnKVxuXHRcdFx0X2lucHV0ID0gSlNPTi5wYXJzZShfaW5wdXQpO1xuXG5cdFx0aWYgKF9pbnB1dCBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdHtcblx0XHRcdGlmICghX2lucHV0Lmxlbmd0aCB8fCBfaW5wdXRbMF0gaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShudWxsLCBfaW5wdXQpO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIF9pbnB1dFswXSA9PT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybiBzZXJpYWxpemUob2JqZWN0S2V5cyhfaW5wdXRbMF0pLCBfaW5wdXQpO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlb2YgX2lucHV0ID09PSAnb2JqZWN0Jylcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIF9pbnB1dC5kYXRhID09PSAnc3RyaW5nJylcblx0XHRcdFx0X2lucHV0LmRhdGEgPSBKU09OLnBhcnNlKF9pbnB1dC5kYXRhKTtcblxuXHRcdFx0aWYgKF9pbnB1dC5kYXRhIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICghX2lucHV0LmZpZWxkcylcblx0XHRcdFx0XHRfaW5wdXQuZmllbGRzID0gIF9pbnB1dC5tZXRhICYmIF9pbnB1dC5tZXRhLmZpZWxkcztcblxuXHRcdFx0XHRpZiAoIV9pbnB1dC5maWVsZHMpXG5cdFx0XHRcdFx0X2lucHV0LmZpZWxkcyA9ICBfaW5wdXQuZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5XG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9pbnB1dC5maWVsZHNcblx0XHRcdFx0XHRcdFx0XHRcdDogb2JqZWN0S2V5cyhfaW5wdXQuZGF0YVswXSk7XG5cblx0XHRcdFx0aWYgKCEoX2lucHV0LmRhdGFbMF0gaW5zdGFuY2VvZiBBcnJheSkgJiYgdHlwZW9mIF9pbnB1dC5kYXRhWzBdICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0XHRfaW5wdXQuZGF0YSA9IFtfaW5wdXQuZGF0YV07XHQvLyBoYW5kbGVzIGlucHV0IGxpa2UgWzEsMiwzXSBvciBbJ2FzZGYnXVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2VyaWFsaXplKF9pbnB1dC5maWVsZHMgfHwgW10sIF9pbnB1dC5kYXRhIHx8IFtdKTtcblx0XHR9XG5cblx0XHQvLyBEZWZhdWx0IChhbnkgdmFsaWQgcGF0aHMgc2hvdWxkIHJldHVybiBiZWZvcmUgdGhpcylcblx0XHR0aHJvdyAnZXhjZXB0aW9uOiBVbmFibGUgdG8gc2VyaWFsaXplIHVucmVjb2duaXplZCBpbnB1dCc7XG5cblxuXHRcdGZ1bmN0aW9uIHVucGFja0NvbmZpZygpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcuZGVsaW1pdGVyID09PSAnc3RyaW5nJ1xuXHRcdFx0XHQmJiBfY29uZmlnLmRlbGltaXRlci5sZW5ndGggPT09IDFcblx0XHRcdFx0JiYgUGFwYS5CQURfREVMSU1JVEVSUy5pbmRleE9mKF9jb25maWcuZGVsaW1pdGVyKSA9PT0gLTEpXG5cdFx0XHR7XG5cdFx0XHRcdF9kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLnF1b3RlcyA9PT0gJ2Jvb2xlYW4nXG5cdFx0XHRcdHx8IF9jb25maWcucXVvdGVzIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdF9xdW90ZXMgPSBfY29uZmlnLnF1b3RlcztcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLm5ld2xpbmUgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRfbmV3bGluZSA9IF9jb25maWcubmV3bGluZTtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLnF1b3RlQ2hhciA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdF9xdW90ZUNoYXIgPSBfY29uZmlnLnF1b3RlQ2hhcjtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLmhlYWRlciA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRfd3JpdGVIZWFkZXIgPSBfY29uZmlnLmhlYWRlcjtcblx0XHR9XG5cblxuXHRcdC8qKiBUdXJucyBhbiBvYmplY3QncyBrZXlzIGludG8gYW4gYXJyYXkgKi9cblx0XHRmdW5jdGlvbiBvYmplY3RLZXlzKG9iailcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdHZhciBrZXlzID0gW107XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gb2JqKVxuXHRcdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHRcdHJldHVybiBrZXlzO1xuXHRcdH1cblxuXHRcdC8qKiBUaGUgZG91YmxlIGZvciBsb29wIHRoYXQgaXRlcmF0ZXMgdGhlIGRhdGEgYW5kIHdyaXRlcyBvdXQgYSBDU1Ygc3RyaW5nIGluY2x1ZGluZyBoZWFkZXIgcm93ICovXG5cdFx0ZnVuY3Rpb24gc2VyaWFsaXplKGZpZWxkcywgZGF0YSlcblx0XHR7XG5cdFx0XHR2YXIgY3N2ID0gJyc7XG5cblx0XHRcdGlmICh0eXBlb2YgZmllbGRzID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZmllbGRzID0gSlNPTi5wYXJzZShmaWVsZHMpO1xuXHRcdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcblx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cblx0XHRcdHZhciBoYXNIZWFkZXIgPSBmaWVsZHMgaW5zdGFuY2VvZiBBcnJheSAmJiBmaWVsZHMubGVuZ3RoID4gMDtcblx0XHRcdHZhciBkYXRhS2V5ZWRCeUZpZWxkID0gIShkYXRhWzBdIGluc3RhbmNlb2YgQXJyYXkpO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSBhIGhlYWRlciByb3csIHdyaXRlIGl0IGZpcnN0XG5cdFx0XHRpZiAoaGFzSGVhZGVyICYmIF93cml0ZUhlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaSA+IDApXG5cdFx0XHRcdFx0XHRjc3YgKz0gX2RlbGltaXRlcjtcblx0XHRcdFx0XHRjc3YgKz0gc2FmZShmaWVsZHNbaV0sIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0Y3N2ICs9IF9uZXdsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaGVuIHdyaXRlIG91dCB0aGUgZGF0YVxuXHRcdFx0Zm9yICh2YXIgcm93ID0gMDsgcm93IDwgZGF0YS5sZW5ndGg7IHJvdysrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbWF4Q29sID0gaGFzSGVhZGVyID8gZmllbGRzLmxlbmd0aCA6IGRhdGFbcm93XS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbWF4Q29sOyBjb2wrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChjb2wgPiAwKVxuXHRcdFx0XHRcdFx0Y3N2ICs9IF9kZWxpbWl0ZXI7XG5cdFx0XHRcdFx0dmFyIGNvbElkeCA9IGhhc0hlYWRlciAmJiBkYXRhS2V5ZWRCeUZpZWxkID8gZmllbGRzW2NvbF0gOiBjb2w7XG5cdFx0XHRcdFx0Y3N2ICs9IHNhZmUoZGF0YVtyb3ddW2NvbElkeF0sIGNvbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocm93IDwgZGF0YS5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdGNzdiArPSBfbmV3bGluZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNzdjtcblx0XHR9XG5cblx0XHQvKiogRW5jbG9zZXMgYSB2YWx1ZSBhcm91bmQgcXVvdGVzIGlmIG5lZWRlZCAobWFrZXMgYSB2YWx1ZSBzYWZlIGZvciBDU1YgaW5zZXJ0aW9uKSAqL1xuXHRcdGZ1bmN0aW9uIHNhZmUoc3RyLCBjb2wpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnIHx8IHN0ciA9PT0gbnVsbClcblx0XHRcdFx0cmV0dXJuICcnO1xuXG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBfcXVvdGVDaGFyK19xdW90ZUNoYXIpO1xuXG5cdFx0XHR2YXIgbmVlZHNRdW90ZXMgPSAodHlwZW9mIF9xdW90ZXMgPT09ICdib29sZWFuJyAmJiBfcXVvdGVzKVxuXHRcdFx0XHRcdFx0XHR8fCAoX3F1b3RlcyBpbnN0YW5jZW9mIEFycmF5ICYmIF9xdW90ZXNbY29sXSlcblx0XHRcdFx0XHRcdFx0fHwgaGFzQW55KHN0ciwgUGFwYS5CQURfREVMSU1JVEVSUylcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmluZGV4T2YoX2RlbGltaXRlcikgPiAtMVxuXHRcdFx0XHRcdFx0XHR8fCBzdHIuY2hhckF0KDApID09PSAnICdcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSkgPT09ICcgJztcblxuXHRcdFx0cmV0dXJuIG5lZWRzUXVvdGVzID8gX3F1b3RlQ2hhciArIHN0ciArIF9xdW90ZUNoYXIgOiBzdHI7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFzQW55KHN0ciwgc3Vic3RyaW5ncylcblx0XHR7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN1YnN0cmluZ3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGlmIChzdHIuaW5kZXhPZihzdWJzdHJpbmdzW2ldKSA+IC0xKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBDaHVua1N0cmVhbWVyIGlzIHRoZSBiYXNlIHByb3RvdHlwZSBmb3IgdmFyaW91cyBzdHJlYW1lciBpbXBsZW1lbnRhdGlvbnMuICovXG5cdGZ1bmN0aW9uIENodW5rU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0dGhpcy5faGFuZGxlID0gbnVsbDtcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblx0XHR0aGlzLl9maW5pc2hlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2lucHV0ID0gbnVsbDtcblx0XHR0aGlzLl9iYXNlSW5kZXggPSAwO1xuXHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gJyc7XG5cdFx0dGhpcy5fcm93Q291bnQgPSAwO1xuXHRcdHRoaXMuX3N0YXJ0ID0gMDtcblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBudWxsO1xuXHRcdHRoaXMuaXNGaXJzdENodW5rID0gdHJ1ZTtcblx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMgPSB7XG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdGVycm9yczogW10sXG5cdFx0XHRtZXRhOiB7fVxuXHRcdH07XG5cdFx0cmVwbGFjZUNvbmZpZy5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnBhcnNlQ2h1bmsgPSBmdW5jdGlvbihjaHVuaylcblx0XHR7XG5cdFx0XHQvLyBGaXJzdCBjaHVuayBwcmUtcHJvY2Vzc2luZ1xuXHRcdFx0aWYgKHRoaXMuaXNGaXJzdENodW5rICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgbW9kaWZpZWRDaHVuayA9IHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKGNodW5rKTtcblx0XHRcdFx0aWYgKG1vZGlmaWVkQ2h1bmsgIT09IHVuZGVmaW5lZClcblx0XHRcdFx0XHRjaHVuayA9IG1vZGlmaWVkQ2h1bms7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzRmlyc3RDaHVuayA9IGZhbHNlO1xuXG5cdFx0XHQvLyBSZWpvaW4gdGhlIGxpbmUgd2UgbGlrZWx5IGp1c3Qgc3BsaXQgaW4gdHdvIGJ5IGNodW5raW5nIHRoZSBmaWxlXG5cdFx0XHR2YXIgYWdncmVnYXRlID0gdGhpcy5fcGFydGlhbExpbmUgKyBjaHVuaztcblx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gJyc7XG5cblx0XHRcdHZhciByZXN1bHRzID0gdGhpcy5faGFuZGxlLnBhcnNlKGFnZ3JlZ2F0ZSwgdGhpcy5fYmFzZUluZGV4LCAhdGhpcy5fZmluaXNoZWQpO1xuXG5cdFx0XHRpZiAodGhpcy5faGFuZGxlLnBhdXNlZCgpIHx8IHRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0dmFyIGxhc3RJbmRleCA9IHJlc3VsdHMubWV0YS5jdXJzb3I7XG5cblx0XHRcdGlmICghdGhpcy5fZmluaXNoZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3BhcnRpYWxMaW5lID0gYWdncmVnYXRlLnN1YnN0cmluZyhsYXN0SW5kZXggLSB0aGlzLl9iYXNlSW5kZXgpO1xuXHRcdFx0XHR0aGlzLl9iYXNlSW5kZXggPSBsYXN0SW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyZXN1bHRzICYmIHJlc3VsdHMuZGF0YSlcblx0XHRcdFx0dGhpcy5fcm93Q291bnQgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblxuXHRcdFx0dmFyIGZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyA9IHRoaXMuX2ZpbmlzaGVkIHx8ICh0aGlzLl9jb25maWcucHJldmlldyAmJiB0aGlzLl9yb3dDb3VudCA+PSB0aGlzLl9jb25maWcucHJldmlldyk7XG5cblx0XHRcdGlmIChJU19QQVBBX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRmaW5pc2hlZDogZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9jb25maWcuY2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jb25maWcuY2h1bmsocmVzdWx0cywgdGhpcy5faGFuZGxlKTtcblx0XHRcdFx0aWYgKHRoaXMuX3BhdXNlZClcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdHJlc3VsdHMgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cyA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLl9jb25maWcuc3RlcCAmJiAhdGhpcy5fY29uZmlnLmNodW5rKSB7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhID0gdGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEuY29uY2F0KHJlc3VsdHMuZGF0YSk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMgPSB0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzLmNvbmNhdChyZXN1bHRzLmVycm9ycyk7XG5cdFx0XHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5tZXRhID0gcmVzdWx0cy5tZXRhO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ICYmIGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmNvbXBsZXRlKSAmJiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubWV0YS5hYm9ydGVkKSlcblx0XHRcdFx0dGhpcy5fY29uZmlnLmNvbXBsZXRlKHRoaXMuX2NvbXBsZXRlUmVzdWx0cywgdGhpcy5faW5wdXQpO1xuXG5cdFx0XHRpZiAoIWZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyAmJiAoIXJlc3VsdHMgfHwgIXJlc3VsdHMubWV0YS5wYXVzZWQpKVxuXHRcdFx0XHR0aGlzLl9uZXh0Q2h1bmsoKTtcblxuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fTtcblxuXHRcdHRoaXMuX3NlbmRFcnJvciA9IGZ1bmN0aW9uKGVycm9yKVxuXHRcdHtcblx0XHRcdGlmIChpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5lcnJvcikpXG5cdFx0XHRcdHRoaXMuX2NvbmZpZy5lcnJvcihlcnJvcik7XG5cdFx0XHRlbHNlIGlmIChJU19QQVBBX1dPUktFUiAmJiB0aGlzLl9jb25maWcuZXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGdsb2JhbC5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRcdGVycm9yOiBlcnJvcixcblx0XHRcdFx0XHRmaW5pc2hlZDogZmFsc2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHJlcGxhY2VDb25maWcoY29uZmlnKVxuXHRcdHtcblx0XHRcdC8vIERlZXAtY29weSB0aGUgY29uZmlnIHNvIHdlIGNhbiBlZGl0IGl0XG5cdFx0XHR2YXIgY29uZmlnQ29weSA9IGNvcHkoY29uZmlnKTtcblx0XHRcdGNvbmZpZ0NvcHkuY2h1bmtTaXplID0gcGFyc2VJbnQoY29uZmlnQ29weS5jaHVua1NpemUpO1x0Ly8gcGFyc2VJbnQgVkVSWSBpbXBvcnRhbnQgc28gd2UgZG9uJ3QgY29uY2F0ZW5hdGUgc3RyaW5ncyFcblx0XHRcdGlmICghY29uZmlnLnN0ZXAgJiYgIWNvbmZpZy5jaHVuaylcblx0XHRcdFx0Y29uZmlnQ29weS5jaHVua1NpemUgPSBudWxsOyAgLy8gZGlzYWJsZSBSYW5nZSBoZWFkZXIgaWYgbm90IHN0cmVhbWluZzsgYmFkIHZhbHVlcyBicmVhayBJSVMgLSBzZWUgaXNzdWUgIzE5NlxuXHRcdFx0dGhpcy5faGFuZGxlID0gbmV3IFBhcnNlckhhbmRsZShjb25maWdDb3B5KTtcblx0XHRcdHRoaXMuX2hhbmRsZS5zdHJlYW1lciA9IHRoaXM7XG5cdFx0XHR0aGlzLl9jb25maWcgPSBjb25maWdDb3B5O1x0Ly8gcGVyc2lzdCB0aGUgY29weSB0byB0aGUgY2FsbGVyXG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBOZXR3b3JrU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdGlmICghY29uZmlnLmNodW5rU2l6ZSlcblx0XHRcdGNvbmZpZy5jaHVua1NpemUgPSBQYXBhLlJlbW90ZUNodW5rU2l6ZTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciB4aHI7XG5cblx0XHRpZiAoSVNfV09SS0VSKVxuXHRcdHtcblx0XHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fcmVhZENodW5rKCk7XG5cdFx0XHRcdHRoaXMuX2NodW5rTG9hZGVkKCk7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9yZWFkQ2h1bmsoKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbih1cmwpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSB1cmw7XG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsoKTtcdC8vIFN0YXJ0cyBzdHJlYW1pbmdcblx0XHR9O1xuXG5cdFx0dGhpcy5fcmVhZENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9maW5pc2hlZClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpXG5cdFx0XHR7XG5cdFx0XHRcdHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIUlTX1dPUktFUilcblx0XHRcdHtcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHhoci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHR4aHIub3BlbignR0VUJywgdGhpcy5faW5wdXQsICFJU19XT1JLRVIpO1xuXHRcdFx0Ly8gSGVhZGVycyBjYW4gb25seSBiZSBzZXQgd2hlbiBvbmNlIHRoZSByZXF1ZXN0IHN0YXRlIGlzIE9QRU5FRFxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgaGVhZGVycyA9IHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzO1xuXG5cdFx0XHRcdGZvciAodmFyIGhlYWRlck5hbWUgaW4gaGVhZGVycylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIGhlYWRlcnNbaGVhZGVyTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gdGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplIC0gMTtcdC8vIG1pbnVzIG9uZSBiZWNhdXNlIGJ5dGUgcmFuZ2UgaXMgaW5jbHVzaXZlXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdSYW5nZScsICdieXRlcz0nK3RoaXMuX3N0YXJ0KyctJytlbmQpO1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignSWYtTm9uZS1NYXRjaCcsICd3ZWJraXQtbm8tY2FjaGUnKTsgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgyNjcyXG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHhoci5zZW5kKCk7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoSVNfV09SS0VSICYmIHhoci5zdGF0dXMgPT09IDApXG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5fc3RhcnQgKz0gdGhpcy5fY29uZmlnLmNodW5rU2l6ZTtcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNClcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDQwMClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY2h1bmtFcnJvcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gIXRoaXMuX2NvbmZpZy5jaHVua1NpemUgfHwgdGhpcy5fc3RhcnQgPiBnZXRGaWxlU2l6ZSh4aHIpO1xuXHRcdFx0dGhpcy5wYXJzZUNodW5rKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rRXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpXG5cdFx0e1xuXHRcdFx0dmFyIGVycm9yVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8IGVycm9yTWVzc2FnZTtcblx0XHRcdHRoaXMuX3NlbmRFcnJvcihlcnJvclRleHQpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldEZpbGVTaXplKHhocilcblx0XHR7XG5cdFx0XHR2YXIgY29udGVudFJhbmdlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVJhbmdlJyk7XG5cdFx0XHRpZiAoY29udGVudFJhbmdlID09PSBudWxsKSB7IC8vIG5vIGNvbnRlbnQgcmFuZ2UsIHRoZW4gZmluaXNoIVxuXHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoY29udGVudFJhbmdlLnN1YnN0cihjb250ZW50UmFuZ2UubGFzdEluZGV4T2YoJy8nKSArIDEpKTtcblx0XHR9XG5cdH1cblx0TmV0d29ya1N0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2h1bmtTdHJlYW1lci5wcm90b3R5cGUpO1xuXHROZXR3b3JrU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTmV0d29ya1N0cmVhbWVyO1xuXG5cblx0ZnVuY3Rpb24gRmlsZVN0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoIWNvbmZpZy5jaHVua1NpemUpXG5cdFx0XHRjb25maWcuY2h1bmtTaXplID0gUGFwYS5Mb2NhbENodW5rU2l6ZTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciByZWFkZXIsIHNsaWNlO1xuXG5cdFx0Ly8gRmlsZVJlYWRlciBpcyBiZXR0ZXIgdGhhbiBGaWxlUmVhZGVyU3luYyAoZXZlbiBpbiB3b3JrZXIpIC0gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzI0NzA4NjQ5LzEwNDg4NjJcblx0XHQvLyBCdXQgRmlyZWZveCBpcyBhIHBpbGwsIHRvbyAtIHNlZSBpc3N1ZSAjNzY6IGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2UvaXNzdWVzLzc2XG5cdFx0dmFyIHVzaW5nQXN5bmNSZWFkZXIgPSB0eXBlb2YgRmlsZVJlYWRlciAhPT0gJ3VuZGVmaW5lZCc7XHQvLyBTYWZhcmkgZG9lc24ndCBjb25zaWRlciBpdCBhIGZ1bmN0aW9uIC0gc2VlIGlzc3VlICMxMDVcblxuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24oZmlsZSlcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IGZpbGU7XG5cdFx0XHRzbGljZSA9IGZpbGUuc2xpY2UgfHwgZmlsZS53ZWJraXRTbGljZSB8fCBmaWxlLm1velNsaWNlO1xuXG5cdFx0XHRpZiAodXNpbmdBc3luY1JlYWRlcilcblx0XHRcdHtcblx0XHRcdFx0cmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcdFx0Ly8gUHJlZmVycmVkIG1ldGhvZCBvZiByZWFkaW5nIGZpbGVzLCBldmVuIGluIHdvcmtlcnNcblx0XHRcdFx0cmVhZGVyLm9ubG9hZCA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0xvYWRlZCwgdGhpcyk7XG5cdFx0XHRcdHJlYWRlci5vbmVycm9yID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rRXJyb3IsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRyZWFkZXIgPSBuZXcgRmlsZVJlYWRlclN5bmMoKTtcdC8vIEhhY2sgZm9yIHJ1bm5pbmcgaW4gYSB3ZWIgd29ya2VyIGluIEZpcmVmb3hcblxuXHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XHQvLyBTdGFydHMgc3RyZWFtaW5nXG5cdFx0fTtcblxuXHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAoIXRoaXMuX2ZpbmlzaGVkICYmICghdGhpcy5fY29uZmlnLnByZXZpZXcgfHwgdGhpcy5fcm93Q291bnQgPCB0aGlzLl9jb25maWcucHJldmlldykpXG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3JlYWRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR2YXIgaW5wdXQgPSB0aGlzLl9pbnB1dDtcblx0XHRcdGlmICh0aGlzLl9jb25maWcuY2h1bmtTaXplKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZW5kID0gTWF0aC5taW4odGhpcy5fc3RhcnQgKyB0aGlzLl9jb25maWcuY2h1bmtTaXplLCB0aGlzLl9pbnB1dC5zaXplKTtcblx0XHRcdFx0aW5wdXQgPSBzbGljZS5jYWxsKGlucHV0LCB0aGlzLl9zdGFydCwgZW5kKTtcblx0XHRcdH1cblx0XHRcdHZhciB0eHQgPSByZWFkZXIucmVhZEFzVGV4dChpbnB1dCwgdGhpcy5fY29uZmlnLmVuY29kaW5nKTtcblx0XHRcdGlmICghdXNpbmdBc3luY1JlYWRlcilcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoeyB0YXJnZXQ6IHsgcmVzdWx0OiB0eHQgfSB9KTtcdC8vIG1pbWljIHRoZSBhc3luYyBzaWduYXR1cmVcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0xvYWRlZCA9IGZ1bmN0aW9uKGV2ZW50KVxuXHRcdHtcblx0XHRcdC8vIFZlcnkgaW1wb3J0YW50IHRvIGluY3JlbWVudCBzdGFydCBlYWNoIHRpbWUgYmVmb3JlIGhhbmRsaW5nIHJlc3VsdHNcblx0XHRcdHRoaXMuX3N0YXJ0ICs9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICF0aGlzLl9jb25maWcuY2h1bmtTaXplIHx8IHRoaXMuX3N0YXJ0ID49IHRoaXMuX2lucHV0LnNpemU7XG5cdFx0XHR0aGlzLnBhcnNlQ2h1bmsoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtFcnJvciA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IocmVhZGVyLmVycm9yKTtcblx0XHR9XG5cblx0fVxuXHRGaWxlU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdEZpbGVTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGaWxlU3RyZWFtZXI7XG5cblxuXHRmdW5jdGlvbiBTdHJpbmdTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgc3RyaW5nO1xuXHRcdHZhciByZW1haW5pbmc7XG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihzKVxuXHRcdHtcblx0XHRcdHN0cmluZyA9IHM7XG5cdFx0XHRyZW1haW5pbmcgPSBzO1xuXHRcdFx0cmV0dXJuIHRoaXMuX25leHRDaHVuaygpO1xuXHRcdH1cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2ZpbmlzaGVkKSByZXR1cm47XG5cdFx0XHR2YXIgc2l6ZSA9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0XHR2YXIgY2h1bmsgPSBzaXplID8gcmVtYWluaW5nLnN1YnN0cigwLCBzaXplKSA6IHJlbWFpbmluZztcblx0XHRcdHJlbWFpbmluZyA9IHNpemUgPyByZW1haW5pbmcuc3Vic3RyKHNpemUpIDogJyc7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICFyZW1haW5pbmc7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNodW5rKGNodW5rKTtcblx0XHR9XG5cdH1cblx0U3RyaW5nU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUpO1xuXHRTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdHJpbmdTdHJlYW1lcjtcblxuXG5cdGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHR2YXIgcGFyc2VPbkRhdGEgPSB0cnVlO1xuXG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSBzdHJlYW07XG5cblx0XHRcdHRoaXMuX2lucHV0Lm9uKCdkYXRhJywgdGhpcy5fc3RyZWFtRGF0YSk7XG5cdFx0XHR0aGlzLl9pbnB1dC5vbignZW5kJywgdGhpcy5fc3RyZWFtRW5kKTtcblx0XHRcdHRoaXMuX2lucHV0Lm9uKCdlcnJvcicsIHRoaXMuX3N0cmVhbUVycm9yKTtcblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHF1ZXVlLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5wYXJzZUNodW5rKHF1ZXVlLnNoaWZ0KCkpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRwYXJzZU9uRGF0YSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3RyZWFtRGF0YSA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbihjaHVuaylcblx0XHR7XG5cdFx0XHR0cnlcblx0XHRcdHtcblx0XHRcdFx0cXVldWUucHVzaCh0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnID8gY2h1bmsgOiBjaHVuay50b1N0cmluZyh0aGlzLl9jb25maWcuZW5jb2RpbmcpKTtcblxuXHRcdFx0XHRpZiAocGFyc2VPbkRhdGEpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXJzZU9uRGF0YSA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMucGFyc2VDaHVuayhxdWV1ZS5zaGlmdCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGVycm9yKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9zdHJlYW1FcnJvcihlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLl9zdHJlYW1FcnJvciA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbihlcnJvcilcblx0XHR7XG5cdFx0XHR0aGlzLl9zdHJlYW1DbGVhblVwKCk7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IoZXJyb3IubWVzc2FnZSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLl9zdHJlYW1FbmQgPSBiaW5kRnVuY3Rpb24oZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHRoaXMuX3N0cmVhbUNsZWFuVXAoKTtcblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuX3N0cmVhbURhdGEoJycpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5fc3RyZWFtQ2xlYW5VcCA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCB0aGlzLl9zdHJlYW1EYXRhKTtcblx0XHRcdHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKCdlbmQnLCB0aGlzLl9zdHJlYW1FbmQpO1xuXHRcdFx0dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fc3RyZWFtRXJyb3IpO1xuXHRcdH0sIHRoaXMpO1xuXHR9XG5cdFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdFJlYWRhYmxlU3RyZWFtU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVhZGFibGVTdHJlYW1TdHJlYW1lcjtcblxuXG5cdC8vIFVzZSBvbmUgUGFyc2VySGFuZGxlIHBlciBlbnRpcmUgQ1NWIGZpbGUgb3Igc3RyaW5nXG5cdGZ1bmN0aW9uIFBhcnNlckhhbmRsZShfY29uZmlnKVxuXHR7XG5cdFx0Ly8gT25lIGdvYWwgaXMgdG8gbWluaW1pemUgdGhlIHVzZSBvZiByZWd1bGFyIGV4cHJlc3Npb25zLi4uXG5cdFx0dmFyIEZMT0FUID0gL15cXHMqLT8oXFxkKlxcLj9cXGQrfFxcZCtcXC4/XFxkKikoZVstK10/XFxkKyk/XFxzKiQvaTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgX3N0ZXBDb3VudGVyID0gMDtcdC8vIE51bWJlciBvZiB0aW1lcyBzdGVwIHdhcyBjYWxsZWQgKG51bWJlciBvZiByb3dzIHBhcnNlZClcblx0XHR2YXIgX2lucHV0O1x0XHRcdFx0Ly8gVGhlIGlucHV0IGJlaW5nIHBhcnNlZFxuXHRcdHZhciBfcGFyc2VyO1x0XHRcdC8vIFRoZSBjb3JlIHBhcnNlciBiZWluZyB1c2VkXG5cdFx0dmFyIF9wYXVzZWQgPSBmYWxzZTtcdC8vIFdoZXRoZXIgd2UgYXJlIHBhdXNlZCBvciBub3Rcblx0XHR2YXIgX2Fib3J0ZWQgPSBmYWxzZTtcdC8vIFdoZXRoZXIgdGhlIHBhcnNlciBoYXMgYWJvcnRlZCBvciBub3Rcblx0XHR2YXIgX2RlbGltaXRlckVycm9yO1x0Ly8gVGVtcG9yYXJ5IHN0YXRlIGJldHdlZW4gZGVsaW1pdGVyIGRldGVjdGlvbiBhbmQgcHJvY2Vzc2luZyByZXN1bHRzXG5cdFx0dmFyIF9maWVsZHMgPSBbXTtcdFx0Ly8gRmllbGRzIGFyZSBmcm9tIHRoZSBoZWFkZXIgcm93IG9mIHRoZSBpbnB1dCwgaWYgdGhlcmUgaXMgb25lXG5cdFx0dmFyIF9yZXN1bHRzID0ge1x0XHQvLyBUaGUgbGFzdCByZXN1bHRzIHJldHVybmVkIGZyb20gdGhlIHBhcnNlclxuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRlcnJvcnM6IFtdLFxuXHRcdFx0bWV0YToge31cblx0XHR9O1xuXG5cdFx0aWYgKGlzRnVuY3Rpb24oX2NvbmZpZy5zdGVwKSlcblx0XHR7XG5cdFx0XHR2YXIgdXNlclN0ZXAgPSBfY29uZmlnLnN0ZXA7XG5cdFx0XHRfY29uZmlnLnN0ZXAgPSBmdW5jdGlvbihyZXN1bHRzKVxuXHRcdFx0e1xuXHRcdFx0XHRfcmVzdWx0cyA9IHJlc3VsdHM7XG5cblx0XHRcdFx0aWYgKG5lZWRzSGVhZGVyUm93KCkpXG5cdFx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHMoKTtcblx0XHRcdFx0ZWxzZVx0Ly8gb25seSBjYWxsIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFmdGVyIGhlYWRlciByb3dcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cblx0XHRcdFx0XHQvLyBJdCdzIHBvc3NiaWxlIHRoYXQgdGhpcyBsaW5lIHdhcyBlbXB0eSBhbmQgdGhlcmUncyBubyByb3cgaGVyZSBhZnRlciBhbGxcblx0XHRcdFx0XHRpZiAoX3Jlc3VsdHMuZGF0YS5sZW5ndGggPT09IDApXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHRfc3RlcENvdW50ZXIgKz0gcmVzdWx0cy5kYXRhLmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoX2NvbmZpZy5wcmV2aWV3ICYmIF9zdGVwQ291bnRlciA+IF9jb25maWcucHJldmlldylcblx0XHRcdFx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR1c2VyU3RlcChfcmVzdWx0cywgc2VsZik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUGFyc2VzIGlucHV0LiBNb3N0IHVzZXJzIHdvbid0IG5lZWQsIGFuZCBzaG91bGRuJ3QgbWVzcyB3aXRoLCB0aGUgYmFzZUluZGV4XG5cdFx0ICogYW5kIGlnbm9yZUxhc3RSb3cgcGFyYW1ldGVycy4gVGhleSBhcmUgdXNlZCBieSBzdHJlYW1lcnMgKHdyYXBwZXIgZnVuY3Rpb25zKVxuXHRcdCAqIHdoZW4gYW4gaW5wdXQgY29tZXMgaW4gbXVsdGlwbGUgY2h1bmtzLCBsaWtlIGZyb20gYSBmaWxlLlxuXHRcdCAqL1xuXHRcdHRoaXMucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KVxuXHRcdHtcblx0XHRcdGlmICghX2NvbmZpZy5uZXdsaW5lKVxuXHRcdFx0XHRfY29uZmlnLm5ld2xpbmUgPSBndWVzc0xpbmVFbmRpbmdzKGlucHV0KTtcblxuXHRcdFx0X2RlbGltaXRlckVycm9yID0gZmFsc2U7XG5cdFx0XHRpZiAoIV9jb25maWcuZGVsaW1pdGVyKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZGVsaW1HdWVzcyA9IGd1ZXNzRGVsaW1pdGVyKGlucHV0LCBfY29uZmlnLm5ld2xpbmUsIF9jb25maWcuc2tpcEVtcHR5TGluZXMpO1xuXHRcdFx0XHRpZiAoZGVsaW1HdWVzcy5zdWNjZXNzZnVsKVxuXHRcdFx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gZGVsaW1HdWVzcy5iZXN0RGVsaW1pdGVyO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSB0cnVlO1x0Ly8gYWRkIGVycm9yIGFmdGVyIHBhcnNpbmcgKG90aGVyd2lzZSBpdCB3b3VsZCBiZSBvdmVyd3JpdHRlbilcblx0XHRcdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IFBhcGEuRGVmYXVsdERlbGltaXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmRlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZihpc0Z1bmN0aW9uKF9jb25maWcuZGVsaW1pdGVyKSlcblx0XHRcdHtcblx0XHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcihpbnB1dCk7XG5cdFx0XHRcdF9yZXN1bHRzLm1ldGEuZGVsaW1pdGVyID0gX2NvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXJzZXJDb25maWcgPSBjb3B5KF9jb25maWcpO1xuXHRcdFx0aWYgKF9jb25maWcucHJldmlldyAmJiBfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0cGFyc2VyQ29uZmlnLnByZXZpZXcrKztcdC8vIHRvIGNvbXBlbnNhdGUgZm9yIGhlYWRlciByb3dcblxuXHRcdFx0X2lucHV0ID0gaW5wdXQ7XG5cdFx0XHRfcGFyc2VyID0gbmV3IFBhcnNlcihwYXJzZXJDb25maWcpO1xuXHRcdFx0X3Jlc3VsdHMgPSBfcGFyc2VyLnBhcnNlKF9pbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KTtcblx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cdFx0XHRyZXR1cm4gX3BhdXNlZCA/IHsgbWV0YTogeyBwYXVzZWQ6IHRydWUgfSB9IDogKF9yZXN1bHRzIHx8IHsgbWV0YTogeyBwYXVzZWQ6IGZhbHNlIH0gfSk7XG5cdFx0fTtcblxuXHRcdHRoaXMucGF1c2VkID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHJldHVybiBfcGF1c2VkO1xuXHRcdH07XG5cblx0XHR0aGlzLnBhdXNlID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9wYXVzZWQgPSB0cnVlO1xuXHRcdFx0X3BhcnNlci5hYm9ydCgpO1xuXHRcdFx0X2lucHV0ID0gX2lucHV0LnN1YnN0cihfcGFyc2VyLmdldENoYXJJbmRleCgpKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5yZXN1bWUgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0X3BhdXNlZCA9IGZhbHNlO1xuXHRcdFx0c2VsZi5zdHJlYW1lci5wYXJzZUNodW5rKF9pbnB1dCk7XG5cdFx0fTtcblxuXHRcdHRoaXMuYWJvcnRlZCA9IGZ1bmN0aW9uICgpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9hYm9ydGVkO1xuXHRcdH07XG5cblx0XHR0aGlzLmFib3J0ID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9hYm9ydGVkID0gdHJ1ZTtcblx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdF9yZXN1bHRzLm1ldGEuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbihfY29uZmlnLmNvbXBsZXRlKSlcblx0XHRcdFx0X2NvbmZpZy5jb21wbGV0ZShfcmVzdWx0cyk7XG5cdFx0XHRfaW5wdXQgPSAnJztcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdHMoKVxuXHRcdHtcblx0XHRcdGlmIChfcmVzdWx0cyAmJiBfZGVsaW1pdGVyRXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGFkZEVycm9yKCdEZWxpbWl0ZXInLCAnVW5kZXRlY3RhYmxlRGVsaW1pdGVyJywgJ1VuYWJsZSB0byBhdXRvLWRldGVjdCBkZWxpbWl0aW5nIGNoYXJhY3RlcjsgZGVmYXVsdGVkIHRvIFxcJycrUGFwYS5EZWZhdWx0RGVsaW1pdGVyKydcXCcnKTtcblx0XHRcdFx0X2RlbGltaXRlckVycm9yID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfY29uZmlnLnNraXBFbXB0eUxpbmVzKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aWYgKF9yZXN1bHRzLmRhdGFbaV0ubGVuZ3RoID09PSAxICYmIF9yZXN1bHRzLmRhdGFbaV1bMF0gPT09ICcnKVxuXHRcdFx0XHRcdFx0X3Jlc3VsdHMuZGF0YS5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5lZWRzSGVhZGVyUm93KCkpXG5cdFx0XHRcdGZpbGxIZWFkZXJGaWVsZHMoKTtcblxuXHRcdFx0cmV0dXJuIGFwcGx5SGVhZGVyQW5kRHluYW1pY1R5cGluZygpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5lZWRzSGVhZGVyUm93KClcblx0XHR7XG5cdFx0XHRyZXR1cm4gX2NvbmZpZy5oZWFkZXIgJiYgX2ZpZWxkcy5sZW5ndGggPT09IDA7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmlsbEhlYWRlckZpZWxkcygpXG5cdFx0e1xuXHRcdFx0aWYgKCFfcmVzdWx0cylcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IG5lZWRzSGVhZGVyUm93KCkgJiYgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRfZmllbGRzLnB1c2goX3Jlc3VsdHMuZGF0YVtpXVtqXSk7XG5cdFx0XHRfcmVzdWx0cy5kYXRhLnNwbGljZSgwLCAxKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzaG91bGRBcHBseUR5bmFtaWNUeXBpbmcoZmllbGQpIHtcblx0XHRcdC8vIENhY2hlIGZ1bmN0aW9uIHZhbHVlcyB0byBhdm9pZCBjYWxsaW5nIGl0IGZvciBlYWNoIHJvd1xuXHRcdFx0aWYgKF9jb25maWcuZHluYW1pY1R5cGluZ0Z1bmN0aW9uICYmIF9jb25maWcuZHluYW1pY1R5cGluZ1tmaWVsZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRfY29uZmlnLmR5bmFtaWNUeXBpbmdbZmllbGRdID0gX2NvbmZpZy5keW5hbWljVHlwaW5nRnVuY3Rpb24oZmllbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChfY29uZmlnLmR5bmFtaWNUeXBpbmdbZmllbGRdIHx8IF9jb25maWcuZHluYW1pY1R5cGluZykgPT09IHRydWVcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwYXJzZUR5bmFtaWMoZmllbGQsIHZhbHVlKVxuXHRcdHtcblx0XHRcdGlmIChzaG91bGRBcHBseUR5bmFtaWNUeXBpbmcoZmllbGQpKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ1RSVUUnKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRlbHNlIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ0ZBTFNFJylcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRyZXR1cm4gdHJ5UGFyc2VGbG9hdCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYXBwbHlIZWFkZXJBbmREeW5hbWljVHlwaW5nKClcblx0XHR7XG5cdFx0XHRpZiAoIV9yZXN1bHRzIHx8ICghX2NvbmZpZy5oZWFkZXIgJiYgIV9jb25maWcuZHluYW1pY1R5cGluZykpXG5cdFx0XHRcdHJldHVybiBfcmVzdWx0cztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93ID0gX2NvbmZpZy5oZWFkZXIgPyB7fSA6IFtdO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciBmaWVsZCA9IGo7XG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gX3Jlc3VsdHMuZGF0YVtpXVtqXTtcblxuXHRcdFx0XHRcdGlmIChfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0XHRcdGZpZWxkID0gaiA+PSBfZmllbGRzLmxlbmd0aCA/ICdfX3BhcnNlZF9leHRyYScgOiBfZmllbGRzW2pdO1xuXG5cdFx0XHRcdFx0dmFsdWUgPSBwYXJzZUR5bmFtaWMoZmllbGQsIHZhbHVlKTtcblxuXHRcdFx0XHRcdGlmIChmaWVsZCA9PT0gJ19fcGFyc2VkX2V4dHJhJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyb3dbZmllbGRdID0gcm93W2ZpZWxkXSB8fCBbXTtcblx0XHRcdFx0XHRcdHJvd1tmaWVsZF0ucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJvd1tmaWVsZF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdF9yZXN1bHRzLmRhdGFbaV0gPSByb3c7XG5cblx0XHRcdFx0aWYgKF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGogPiBfZmllbGRzLmxlbmd0aClcblx0XHRcdFx0XHRcdGFkZEVycm9yKCdGaWVsZE1pc21hdGNoJywgJ1Rvb01hbnlGaWVsZHMnLCAnVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCAnICsgX2ZpZWxkcy5sZW5ndGggKyAnIGZpZWxkcyBidXQgcGFyc2VkICcgKyBqLCBpKTtcblx0XHRcdFx0XHRlbHNlIGlmIChqIDwgX2ZpZWxkcy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRhZGRFcnJvcignRmllbGRNaXNtYXRjaCcsICdUb29GZXdGaWVsZHMnLCAnVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkICcgKyBfZmllbGRzLmxlbmd0aCArICcgZmllbGRzIGJ1dCBwYXJzZWQgJyArIGosIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChfY29uZmlnLmhlYWRlciAmJiBfcmVzdWx0cy5tZXRhKVxuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmZpZWxkcyA9IF9maWVsZHM7XG5cdFx0XHRyZXR1cm4gX3Jlc3VsdHM7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NEZWxpbWl0ZXIoaW5wdXQsIG5ld2xpbmUsIHNraXBFbXB0eUxpbmVzKVxuXHRcdHtcblx0XHRcdHZhciBkZWxpbUNob2ljZXMgPSBbJywnLCAnXFx0JywgJ3wnLCAnOycsIFBhcGEuUkVDT1JEX1NFUCwgUGFwYS5VTklUX1NFUF07XG5cdFx0XHR2YXIgYmVzdERlbGltLCBiZXN0RGVsdGEsIGZpZWxkQ291bnRQcmV2Um93O1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlbGltQ2hvaWNlcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0dmFyIGRlbGltID0gZGVsaW1DaG9pY2VzW2ldO1xuXHRcdFx0XHR2YXIgZGVsdGEgPSAwLCBhdmdGaWVsZENvdW50ID0gMCwgZW1wdHlMaW5lc0NvdW50ID0gMDtcblx0XHRcdFx0ZmllbGRDb3VudFByZXZSb3cgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0dmFyIHByZXZpZXcgPSBuZXcgUGFyc2VyKHtcblx0XHRcdFx0XHRkZWxpbWl0ZXI6IGRlbGltLFxuXHRcdFx0XHRcdG5ld2xpbmU6IG5ld2xpbmUsXG5cdFx0XHRcdFx0cHJldmlldzogMTBcblx0XHRcdFx0fSkucGFyc2UoaW5wdXQpO1xuXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcHJldmlldy5kYXRhLmxlbmd0aDsgaisrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKHNraXBFbXB0eUxpbmVzICYmIHByZXZpZXcuZGF0YVtqXS5sZW5ndGggPT09IDEgJiYgcHJldmlldy5kYXRhW2pdWzBdLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0ZW1wdHlMaW5lc0NvdW50Kytcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhciBmaWVsZENvdW50ID0gcHJldmlldy5kYXRhW2pdLmxlbmd0aDtcblx0XHRcdFx0XHRhdmdGaWVsZENvdW50ICs9IGZpZWxkQ291bnQ7XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIGZpZWxkQ291bnRQcmV2Um93ID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRmaWVsZENvdW50UHJldlJvdyA9IGZpZWxkQ291bnQ7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoZmllbGRDb3VudCA+IDEpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGVsdGEgKz0gTWF0aC5hYnMoZmllbGRDb3VudCAtIGZpZWxkQ291bnRQcmV2Um93KTtcblx0XHRcdFx0XHRcdGZpZWxkQ291bnRQcmV2Um93ID0gZmllbGRDb3VudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocHJldmlldy5kYXRhLmxlbmd0aCA+IDApXG5cdFx0XHRcdFx0YXZnRmllbGRDb3VudCAvPSAocHJldmlldy5kYXRhLmxlbmd0aCAtIGVtcHR5TGluZXNDb3VudCk7XG5cblx0XHRcdFx0aWYgKCh0eXBlb2YgYmVzdERlbHRhID09PSAndW5kZWZpbmVkJyB8fCBkZWx0YSA8IGJlc3REZWx0YSlcblx0XHRcdFx0XHQmJiBhdmdGaWVsZENvdW50ID4gMS45OSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJlc3REZWx0YSA9IGRlbHRhO1xuXHRcdFx0XHRcdGJlc3REZWxpbSA9IGRlbGltO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gYmVzdERlbGltO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdWNjZXNzZnVsOiAhIWJlc3REZWxpbSxcblx0XHRcdFx0YmVzdERlbGltaXRlcjogYmVzdERlbGltXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ3Vlc3NMaW5lRW5kaW5ncyhpbnB1dClcblx0XHR7XG5cdFx0XHRpbnB1dCA9IGlucHV0LnN1YnN0cigwLCAxMDI0KjEwMjQpO1x0Ly8gbWF4IGxlbmd0aCAxIE1CXG5cblx0XHRcdHZhciByID0gaW5wdXQuc3BsaXQoJ1xccicpO1xuXG5cdFx0XHR2YXIgbiA9IGlucHV0LnNwbGl0KCdcXG4nKTtcblxuXHRcdFx0dmFyIG5BcHBlYXJzRmlyc3QgPSAobi5sZW5ndGggPiAxICYmIG5bMF0ubGVuZ3RoIDwgclswXS5sZW5ndGgpO1xuXG5cdFx0XHRpZiAoci5sZW5ndGggPT09IDEgfHwgbkFwcGVhcnNGaXJzdClcblx0XHRcdFx0cmV0dXJuICdcXG4nO1xuXG5cdFx0XHR2YXIgbnVtV2l0aE4gPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAocltpXVswXSA9PT0gJ1xcbicpXG5cdFx0XHRcdFx0bnVtV2l0aE4rKztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG51bVdpdGhOID49IHIubGVuZ3RoIC8gMiA/ICdcXHJcXG4nIDogJ1xccic7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJ5UGFyc2VGbG9hdCh2YWwpXG5cdFx0e1xuXHRcdFx0dmFyIGlzTnVtYmVyID0gRkxPQVQudGVzdCh2YWwpO1xuXHRcdFx0cmV0dXJuIGlzTnVtYmVyID8gcGFyc2VGbG9hdCh2YWwpIDogdmFsO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZEVycm9yKHR5cGUsIGNvZGUsIG1zZywgcm93KVxuXHRcdHtcblx0XHRcdF9yZXN1bHRzLmVycm9ycy5wdXNoKHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0Y29kZTogY29kZSxcblx0XHRcdFx0bWVzc2FnZTogbXNnLFxuXHRcdFx0XHRyb3c6IHJvd1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblxuXG5cblxuXHQvKiogVGhlIGNvcmUgcGFyc2VyIGltcGxlbWVudHMgc3BlZWR5IGFuZCBjb3JyZWN0IENTViBwYXJzaW5nICovXG5cdGZ1bmN0aW9uIFBhcnNlcihjb25maWcpXG5cdHtcblx0XHQvLyBVbnBhY2sgdGhlIGNvbmZpZyBvYmplY3Rcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0dmFyIGRlbGltID0gY29uZmlnLmRlbGltaXRlcjtcblx0XHR2YXIgbmV3bGluZSA9IGNvbmZpZy5uZXdsaW5lO1xuXHRcdHZhciBjb21tZW50cyA9IGNvbmZpZy5jb21tZW50cztcblx0XHR2YXIgc3RlcCA9IGNvbmZpZy5zdGVwO1xuXHRcdHZhciBwcmV2aWV3ID0gY29uZmlnLnByZXZpZXc7XG5cdFx0dmFyIGZhc3RNb2RlID0gY29uZmlnLmZhc3RNb2RlO1xuXHRcdHZhciBxdW90ZUNoYXIgPSBjb25maWcucXVvdGVDaGFyIHx8ICdcIic7XG5cblx0XHQvLyBEZWxpbWl0ZXIgbXVzdCBiZSB2YWxpZFxuXHRcdGlmICh0eXBlb2YgZGVsaW0gIT09ICdzdHJpbmcnXG5cdFx0XHR8fCBQYXBhLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoZGVsaW0pID4gLTEpXG5cdFx0XHRkZWxpbSA9ICcsJztcblxuXHRcdC8vIENvbW1lbnQgY2hhcmFjdGVyIG11c3QgYmUgdmFsaWRcblx0XHRpZiAoY29tbWVudHMgPT09IGRlbGltKVxuXHRcdFx0dGhyb3cgJ0NvbW1lbnQgY2hhcmFjdGVyIHNhbWUgYXMgZGVsaW1pdGVyJztcblx0XHRlbHNlIGlmIChjb21tZW50cyA9PT0gdHJ1ZSlcblx0XHRcdGNvbW1lbnRzID0gJyMnO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiBjb21tZW50cyAhPT0gJ3N0cmluZydcblx0XHRcdHx8IFBhcGEuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihjb21tZW50cykgPiAtMSlcblx0XHRcdGNvbW1lbnRzID0gZmFsc2U7XG5cblx0XHQvLyBOZXdsaW5lIG11c3QgYmUgdmFsaWQ6IFxcciwgXFxuLCBvciBcXHJcXG5cblx0XHRpZiAobmV3bGluZSAhPSAnXFxuJyAmJiBuZXdsaW5lICE9ICdcXHInICYmIG5ld2xpbmUgIT0gJ1xcclxcbicpXG5cdFx0XHRuZXdsaW5lID0gJ1xcbic7XG5cblx0XHQvLyBXZSdyZSBnb25uYSBuZWVkIHRoZXNlIGF0IHRoZSBQYXJzZXIgc2NvcGVcblx0XHR2YXIgY3Vyc29yID0gMDtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0dGhpcy5wYXJzZSA9IGZ1bmN0aW9uKGlucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpXG5cdFx0e1xuXHRcdFx0Ly8gRm9yIHNvbWUgcmVhc29uLCBpbiBDaHJvbWUsIHRoaXMgc3BlZWRzIHRoaW5ncyB1cCAoIT8pXG5cdFx0XHRpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJylcblx0XHRcdFx0dGhyb3cgJ0lucHV0IG11c3QgYmUgYSBzdHJpbmcnO1xuXG5cdFx0XHQvLyBXZSBkb24ndCBuZWVkIHRvIGNvbXB1dGUgc29tZSBvZiB0aGVzZSBldmVyeSB0aW1lIHBhcnNlKCkgaXMgY2FsbGVkLFxuXHRcdFx0Ly8gYnV0IGhhdmluZyB0aGVtIGluIGEgbW9yZSBsb2NhbCBzY29wZSBzZWVtcyB0byBwZXJmb3JtIGJldHRlclxuXHRcdFx0dmFyIGlucHV0TGVuID0gaW5wdXQubGVuZ3RoLFxuXHRcdFx0XHRkZWxpbUxlbiA9IGRlbGltLmxlbmd0aCxcblx0XHRcdFx0bmV3bGluZUxlbiA9IG5ld2xpbmUubGVuZ3RoLFxuXHRcdFx0XHRjb21tZW50c0xlbiA9IGNvbW1lbnRzLmxlbmd0aDtcblx0XHRcdHZhciBzdGVwSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24oc3RlcCk7XG5cblx0XHRcdC8vIEVzdGFibGlzaCBzdGFydGluZyBzdGF0ZVxuXHRcdFx0Y3Vyc29yID0gMDtcblx0XHRcdHZhciBkYXRhID0gW10sIGVycm9ycyA9IFtdLCByb3cgPSBbXSwgbGFzdEN1cnNvciA9IDA7XG5cblx0XHRcdGlmICghaW5wdXQpXG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cblx0XHRcdGlmIChmYXN0TW9kZSB8fCAoZmFzdE1vZGUgIT09IGZhbHNlICYmIGlucHV0LmluZGV4T2YocXVvdGVDaGFyKSA9PT0gLTEpKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcm93cyA9IGlucHV0LnNwbGl0KG5ld2xpbmUpO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcm93ID0gcm93c1tpXTtcblx0XHRcdFx0XHRjdXJzb3IgKz0gcm93Lmxlbmd0aDtcblx0XHRcdFx0XHRpZiAoaSAhPT0gcm93cy5sZW5ndGggLSAxKVxuXHRcdFx0XHRcdFx0Y3Vyc29yICs9IG5ld2xpbmUubGVuZ3RoO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGlnbm9yZUxhc3RSb3cpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdGlmIChjb21tZW50cyAmJiByb3cuc3Vic3RyKDAsIGNvbW1lbnRzTGVuKSA9PT0gY29tbWVudHMpXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0YSA9IFtdO1xuXHRcdFx0XHRcdFx0cHVzaFJvdyhyb3cuc3BsaXQoZGVsaW0pKTtcblx0XHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHB1c2hSb3cocm93LnNwbGl0KGRlbGltKSk7XG5cdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgaSA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGEgPSBkYXRhLnNsaWNlKDAsIHByZXZpZXcpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0dmFyIG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0dmFyIHF1b3RlQ2hhclJlZ2V4ID0gbmV3IFJlZ0V4cChxdW90ZUNoYXIrcXVvdGVDaGFyLCAnZycpO1xuXG5cdFx0XHQvLyBQYXJzZXIgbG9vcFxuXHRcdFx0Zm9yICg7Oylcblx0XHRcdHtcblx0XHRcdFx0Ly8gRmllbGQgaGFzIG9wZW5pbmcgcXVvdGVcblx0XHRcdFx0aWYgKGlucHV0W2N1cnNvcl0gPT09IHF1b3RlQ2hhcilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIFN0YXJ0IG91ciBzZWFyY2ggZm9yIHRoZSBjbG9zaW5nIHF1b3RlIHdoZXJlIHRoZSBjdXJzb3IgaXNcblx0XHRcdFx0XHR2YXIgcXVvdGVTZWFyY2ggPSBjdXJzb3I7XG5cblx0XHRcdFx0XHQvLyBTa2lwIHRoZSBvcGVuaW5nIHF1b3RlXG5cdFx0XHRcdFx0Y3Vyc29yKys7XG5cblx0XHRcdFx0XHRmb3IgKDs7KVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdC8vIEZpbmQgY2xvc2luZyBxdW90ZVxuXHRcdFx0XHRcdFx0dmFyIHF1b3RlU2VhcmNoID0gaW5wdXQuaW5kZXhPZihxdW90ZUNoYXIsIHF1b3RlU2VhcmNoKzEpO1xuXG5cdFx0XHRcdFx0XHQvL05vIG90aGVyIHF1b3RlcyBhcmUgZm91bmQgLSBubyBvdGhlciBkZWxpbWl0ZXJzXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IC0xKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRpZiAoIWlnbm9yZUxhc3RSb3cpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBObyBjbG9zaW5nIHF1b3RlLi4uIHdoYXQgYSBwaXR5XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2RlOiAnTWlzc2luZ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUXVvdGVkIGZpZWxkIHVudGVybWluYXRlZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRyb3c6IGRhdGEubGVuZ3RoLFx0Ly8gcm93IGhhcyB5ZXQgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4OiBjdXJzb3Jcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKCk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgYXQgRU9GXG5cdFx0XHRcdFx0XHRpZiAocXVvdGVTZWFyY2ggPT09IGlucHV0TGVuLTEpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZSA9IGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBxdW90ZUNoYXIpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmluaXNoKHZhbHVlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhpcyBxdW90ZSBpcyBlc2NhcGVkLCBpdCdzIHBhcnQgb2YgdGhlIGRhdGE7IHNraXAgaXRcblx0XHRcdFx0XHRcdGlmIChpbnB1dFtxdW90ZVNlYXJjaCsxXSA9PT0gcXVvdGVDaGFyKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRxdW90ZVNlYXJjaCsrO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBmb2xsb3dlZCBieSBkZWxpbWl0ZXJcblx0XHRcdFx0XHRcdGlmIChpbnB1dFtxdW90ZVNlYXJjaCsxXSA9PT0gZGVsaW0pXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBxdW90ZUNoYXIpKTtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yID0gcXVvdGVTZWFyY2ggKyAxICsgZGVsaW1MZW47XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBmb2xsb3dlZCBieSBuZXdsaW5lXG5cdFx0XHRcdFx0XHRpZiAoaW5wdXQuc3Vic3RyKHF1b3RlU2VhcmNoKzEsIG5ld2xpbmVMZW4pID09PSBuZXdsaW5lKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBxdW90ZVNlYXJjaCkucmVwbGFjZShxdW90ZUNoYXJSZWdleCwgcXVvdGVDaGFyKSk7XG5cdFx0XHRcdFx0XHRcdHNhdmVSb3cocXVvdGVTZWFyY2ggKyAxICsgbmV3bGluZUxlbik7XG5cdFx0XHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XHQvLyBiZWNhdXNlIHdlIG1heSBoYXZlIHNraXBwZWQgdGhlIG5leHREZWxpbSBpbiB0aGUgcXVvdGVkIGZpZWxkXG5cblx0XHRcdFx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgZGF0YS5sZW5ndGggPj0gcHJldmlldylcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0XHQvLyBDaGVja3MgZm9yIHZhbGlkIGNsb3NpbmcgcXVvdGVzIGFyZSBjb21wbGV0ZSAoZXNjYXBlZCBxdW90ZXMgb3IgcXVvdGUgZm9sbG93ZWQgYnkgRU9GL2RlbGltaXRlci9uZXdsaW5lKSAtLSBhc3N1bWUgdGhlc2UgcXVvdGVzIGFyZSBwYXJ0IG9mIGFuIGludmFsaWQgdGV4dCBzdHJpbmdcblx0XHRcdFx0XHRcdGVycm9ycy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ1F1b3RlcycsXG5cdFx0XHRcdFx0XHRcdGNvZGU6ICdJbnZhbGlkUXVvdGVzJyxcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1RyYWlsaW5nIHF1b3RlIG9uIHF1b3RlZCBmaWVsZCBpcyBtYWxmb3JtZWQnLFxuXHRcdFx0XHRcdFx0XHRyb3c6IGRhdGEubGVuZ3RoLFx0Ly8gcm93IGhhcyB5ZXQgdG8gYmUgaW5zZXJ0ZWRcblx0XHRcdFx0XHRcdFx0aW5kZXg6IGN1cnNvclxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHF1b3RlU2VhcmNoKys7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29tbWVudCBmb3VuZCBhdCBzdGFydCBvZiBuZXcgbGluZVxuXHRcdFx0XHRpZiAoY29tbWVudHMgJiYgcm93Lmxlbmd0aCA9PT0gMCAmJiBpbnB1dC5zdWJzdHIoY3Vyc29yLCBjb21tZW50c0xlbikgPT09IGNvbW1lbnRzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKG5leHROZXdsaW5lID09PSAtMSlcdC8vIENvbW1lbnQgZW5kcyBhdCBFT0Zcblx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0Y3Vyc29yID0gbmV4dE5ld2xpbmUgKyBuZXdsaW5lTGVuO1xuXHRcdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBOZXh0IGRlbGltaXRlciBjb21lcyBiZWZvcmUgbmV4dCBuZXdsaW5lLCBzbyB3ZSd2ZSByZWFjaGVkIGVuZCBvZiBmaWVsZFxuXHRcdFx0XHRpZiAobmV4dERlbGltICE9PSAtMSAmJiAobmV4dERlbGltIDwgbmV4dE5ld2xpbmUgfHwgbmV4dE5ld2xpbmUgPT09IC0xKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIG5leHREZWxpbSkpO1xuXHRcdFx0XHRcdGN1cnNvciA9IG5leHREZWxpbSArIGRlbGltTGVuO1xuXHRcdFx0XHRcdG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBFbmQgb2Ygcm93XG5cdFx0XHRcdGlmIChuZXh0TmV3bGluZSAhPT0gLTEpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBuZXh0TmV3bGluZSkpO1xuXHRcdFx0XHRcdHNhdmVSb3cobmV4dE5ld2xpbmUgKyBuZXdsaW5lTGVuKTtcblxuXHRcdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0XHRcdGlmIChhYm9ydGVkKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwcmV2aWV3ICYmIGRhdGEubGVuZ3RoID49IHByZXZpZXcpXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblxuXHRcdFx0cmV0dXJuIGZpbmlzaCgpO1xuXG5cblx0XHRcdGZ1bmN0aW9uIHB1c2hSb3cocm93KVxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhLnB1c2gocm93KTtcblx0XHRcdFx0bGFzdEN1cnNvciA9IGN1cnNvcjtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcHBlbmRzIHRoZSByZW1haW5pbmcgaW5wdXQgZnJvbSBjdXJzb3IgdG8gdGhlIGVuZCBpbnRvXG5cdFx0XHQgKiByb3csIHNhdmVzIHRoZSByb3csIGNhbGxzIHN0ZXAsIGFuZCByZXR1cm5zIHRoZSByZXN1bHRzLlxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBmaW5pc2godmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChpZ25vcmVMYXN0Um93KVxuXHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHRcdHZhbHVlID0gaW5wdXQuc3Vic3RyKGN1cnNvcik7XG5cdFx0XHRcdHJvdy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0Y3Vyc29yID0gaW5wdXRMZW47XHQvLyBpbXBvcnRhbnQgaW4gY2FzZSBwYXJzaW5nIGlzIHBhdXNlZFxuXHRcdFx0XHRwdXNoUm93KHJvdyk7XG5cdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcHBlbmRzIHRoZSBjdXJyZW50IHJvdyB0byB0aGUgcmVzdWx0cy4gSXQgc2V0cyB0aGUgY3Vyc29yXG5cdFx0XHQgKiB0byBuZXdDdXJzb3IgYW5kIGZpbmRzIHRoZSBuZXh0TmV3bGluZS4gVGhlIGNhbGxlciBzaG91bGRcblx0XHRcdCAqIHRha2UgY2FyZSB0byBleGVjdXRlIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFuZCBjaGVjayBmb3Jcblx0XHRcdCAqIHByZXZpZXcgYW5kIGVuZCBwYXJzaW5nIGlmIG5lY2Vzc2FyeS5cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gc2F2ZVJvdyhuZXdDdXJzb3IpXG5cdFx0XHR7XG5cdFx0XHRcdGN1cnNvciA9IG5ld0N1cnNvcjtcblx0XHRcdFx0cHVzaFJvdyhyb3cpO1xuXHRcdFx0XHRyb3cgPSBbXTtcblx0XHRcdFx0bmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSByZXN1bHRzLCBlcnJvcnMsIGFuZCBtZXRhLiAqL1xuXHRcdFx0ZnVuY3Rpb24gcmV0dXJuYWJsZShzdG9wcGVkKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdFx0ZXJyb3JzOiBlcnJvcnMsXG5cdFx0XHRcdFx0bWV0YToge1xuXHRcdFx0XHRcdFx0ZGVsaW1pdGVyOiBkZWxpbSxcblx0XHRcdFx0XHRcdGxpbmVicmVhazogbmV3bGluZSxcblx0XHRcdFx0XHRcdGFib3J0ZWQ6IGFib3J0ZWQsXG5cdFx0XHRcdFx0XHR0cnVuY2F0ZWQ6ICEhc3RvcHBlZCxcblx0XHRcdFx0XHRcdGN1cnNvcjogbGFzdEN1cnNvciArIChiYXNlSW5kZXggfHwgMClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdC8qKiBFeGVjdXRlcyB0aGUgdXNlcidzIHN0ZXAgZnVuY3Rpb24gYW5kIHJlc2V0cyBkYXRhICYgZXJyb3JzLiAqL1xuXHRcdFx0ZnVuY3Rpb24gZG9TdGVwKClcblx0XHRcdHtcblx0XHRcdFx0c3RlcChyZXR1cm5hYmxlKCkpO1xuXHRcdFx0XHRkYXRhID0gW10sIGVycm9ycyA9IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKiogU2V0cyB0aGUgYWJvcnQgZmxhZyAqL1xuXHRcdHRoaXMuYWJvcnQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0YWJvcnRlZCA9IHRydWU7XG5cdFx0fTtcblxuXHRcdC8qKiBHZXRzIHRoZSBjdXJzb3IgcG9zaXRpb24gKi9cblx0XHR0aGlzLmdldENoYXJJbmRleCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRyZXR1cm4gY3Vyc29yO1xuXHRcdH07XG5cdH1cblxuXG5cdC8vIElmIHlvdSBuZWVkIHRvIGxvYWQgUGFwYSBQYXJzZSBhc3luY2hyb25vdXNseSBhbmQgeW91IGFsc28gbmVlZCB3b3JrZXIgdGhyZWFkcywgaGFyZC1jb2RlXG5cdC8vIHRoZSBzY3JpcHQgcGF0aCBoZXJlLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2UvaXNzdWVzLzg3I2lzc3VlY29tbWVudC01Nzg4NTM1OFxuXHRmdW5jdGlvbiBnZXRTY3JpcHRQYXRoKClcblx0e1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdHJldHVybiBzY3JpcHRzLmxlbmd0aCA/IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmMgOiAnJztcblx0fVxuXG5cdGZ1bmN0aW9uIG5ld1dvcmtlcigpXG5cdHtcblx0XHRpZiAoIVBhcGEuV09SS0VSU19TVVBQT1JURUQpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0aWYgKCFMT0FERURfU1lOQyAmJiBQYXBhLlNDUklQVF9QQVRIID09PSBudWxsKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnU2NyaXB0IHBhdGggY2Fubm90IGJlIGRldGVybWluZWQgYXV0b21hdGljYWxseSB3aGVuIFBhcGEgUGFyc2UgaXMgbG9hZGVkIGFzeW5jaHJvbm91c2x5LiAnICtcblx0XHRcdFx0J1lvdSBuZWVkIHRvIHNldCBQYXBhLlNDUklQVF9QQVRIIG1hbnVhbGx5Lidcblx0XHRcdCk7XG5cdFx0dmFyIHdvcmtlclVybCA9IFBhcGEuU0NSSVBUX1BBVEggfHwgQVVUT19TQ1JJUFRfUEFUSDtcblx0XHQvLyBBcHBlbmQgJ3BhcGF3b3JrZXInIHRvIHRoZSBzZWFyY2ggc3RyaW5nIHRvIHRlbGwgcGFwYXBhcnNlIHRoYXQgdGhpcyBpcyBvdXIgd29ya2VyLlxuXHRcdHdvcmtlclVybCArPSAod29ya2VyVXJsLmluZGV4T2YoJz8nKSAhPT0gLTEgPyAnJicgOiAnPycpICsgJ3BhcGF3b3JrZXInO1xuXHRcdHZhciB3ID0gbmV3IGdsb2JhbC5Xb3JrZXIod29ya2VyVXJsKTtcblx0XHR3Lm9ubWVzc2FnZSA9IG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2U7XG5cdFx0dy5pZCA9IHdvcmtlcklkQ291bnRlcisrO1xuXHRcdHdvcmtlcnNbdy5pZF0gPSB3O1xuXHRcdHJldHVybiB3O1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gbWFpbiB0aHJlYWQgcmVjZWl2ZXMgYSBtZXNzYWdlICovXG5cdGZ1bmN0aW9uIG1haW5UaHJlYWRSZWNlaXZlZE1lc3NhZ2UoZSlcblx0e1xuXHRcdHZhciBtc2cgPSBlLmRhdGE7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbbXNnLndvcmtlcklkXTtcblx0XHR2YXIgYWJvcnRlZCA9IGZhbHNlO1xuXG5cdFx0aWYgKG1zZy5lcnJvcilcblx0XHRcdHdvcmtlci51c2VyRXJyb3IobXNnLmVycm9yLCBtc2cuZmlsZSk7XG5cdFx0ZWxzZSBpZiAobXNnLnJlc3VsdHMgJiYgbXNnLnJlc3VsdHMuZGF0YSlcblx0XHR7XG5cdFx0XHR2YXIgYWJvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0YWJvcnRlZCA9IHRydWU7XG5cdFx0XHRcdGNvbXBsZXRlV29ya2VyKG1zZy53b3JrZXJJZCwgeyBkYXRhOiBbXSwgZXJyb3JzOiBbXSwgbWV0YTogeyBhYm9ydGVkOiB0cnVlIH0gfSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgaGFuZGxlID0ge1xuXHRcdFx0XHRhYm9ydDogYWJvcnQsXG5cdFx0XHRcdHBhdXNlOiBub3RJbXBsZW1lbnRlZCxcblx0XHRcdFx0cmVzdW1lOiBub3RJbXBsZW1lbnRlZFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGlzRnVuY3Rpb24od29ya2VyLnVzZXJTdGVwKSlcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtc2cucmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d29ya2VyLnVzZXJTdGVwKHtcblx0XHRcdFx0XHRcdGRhdGE6IFttc2cucmVzdWx0cy5kYXRhW2ldXSxcblx0XHRcdFx0XHRcdGVycm9yczogbXNnLnJlc3VsdHMuZXJyb3JzLFxuXHRcdFx0XHRcdFx0bWV0YTogbXNnLnJlc3VsdHMubWV0YVxuXHRcdFx0XHRcdH0sIGhhbmRsZSk7XG5cdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgbXNnLnJlc3VsdHM7XHQvLyBmcmVlIG1lbW9yeSBBU0FQXG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ2h1bmspKVxuXHRcdFx0e1xuXHRcdFx0XHR3b3JrZXIudXNlckNodW5rKG1zZy5yZXN1bHRzLCBoYW5kbGUsIG1zZy5maWxlKTtcblx0XHRcdFx0ZGVsZXRlIG1zZy5yZXN1bHRzO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChtc2cuZmluaXNoZWQgJiYgIWFib3J0ZWQpXG5cdFx0XHRjb21wbGV0ZVdvcmtlcihtc2cud29ya2VySWQsIG1zZy5yZXN1bHRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBsZXRlV29ya2VyKHdvcmtlcklkLCByZXN1bHRzKSB7XG5cdFx0dmFyIHdvcmtlciA9IHdvcmtlcnNbd29ya2VySWRdO1xuXHRcdGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyQ29tcGxldGUpKVxuXHRcdFx0d29ya2VyLnVzZXJDb21wbGV0ZShyZXN1bHRzKTtcblx0XHR3b3JrZXIudGVybWluYXRlKCk7XG5cdFx0ZGVsZXRlIHdvcmtlcnNbd29ya2VySWRdO1xuXHR9XG5cblx0ZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQoKSB7XG5cdFx0dGhyb3cgJ05vdCBpbXBsZW1lbnRlZC4nO1xuXHR9XG5cblx0LyoqIENhbGxiYWNrIHdoZW4gd29ya2VyIHRocmVhZCByZWNlaXZlcyBhIG1lc3NhZ2UgKi9cblx0ZnVuY3Rpb24gd29ya2VyVGhyZWFkUmVjZWl2ZWRNZXNzYWdlKGUpXG5cdHtcblx0XHR2YXIgbXNnID0gZS5kYXRhO1xuXG5cdFx0aWYgKHR5cGVvZiBQYXBhLldPUktFUl9JRCA9PT0gJ3VuZGVmaW5lZCcgJiYgbXNnKVxuXHRcdFx0UGFwYS5XT1JLRVJfSUQgPSBtc2cud29ya2VySWQ7XG5cblx0XHRpZiAodHlwZW9mIG1zZy5pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0e1xuXHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRyZXN1bHRzOiBQYXBhLnBhcnNlKG1zZy5pbnB1dCwgbXNnLmNvbmZpZyksXG5cdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGdsb2JhbC5GaWxlICYmIG1zZy5pbnB1dCBpbnN0YW5jZW9mIEZpbGUpIHx8IG1zZy5pbnB1dCBpbnN0YW5jZW9mIE9iamVjdClcdC8vIHRoYW5rIHlvdSwgU2FmYXJpIChzZWUgaXNzdWUgIzEwNilcblx0XHR7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IFBhcGEucGFyc2UobXNnLmlucHV0LCBtc2cuY29uZmlnKTtcblx0XHRcdGlmIChyZXN1bHRzKVxuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRyZXN1bHRzOiByZXN1bHRzLFxuXHRcdFx0XHRcdGZpbmlzaGVkOiB0cnVlXG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBNYWtlcyBhIGRlZXAgY29weSBvZiBhbiBhcnJheSBvciBvYmplY3QgKG1vc3RseSkgKi9cblx0ZnVuY3Rpb24gY29weShvYmopXG5cdHtcblx0XHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpXG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdHZhciBjcHkgPSBvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge307XG5cdFx0Zm9yICh2YXIga2V5IGluIG9iailcblx0XHRcdGNweVtrZXldID0gY29weShvYmpba2V5XSk7XG5cdFx0cmV0dXJuIGNweTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJpbmRGdW5jdGlvbihmLCBzZWxmKVxuXHR7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBmLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7IH07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKGZ1bmMpXG5cdHtcblx0XHRyZXR1cm4gdHlwZW9mIGZ1bmMgPT09ICdmdW5jdGlvbic7XG5cdH1cblxuXHRyZXR1cm4gUGFwYTtcbn0pKTtcbiJdfQ==
