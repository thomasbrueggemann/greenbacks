(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"react":"react"}],2:[function(require,module,exports){
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

var _md5 = require("md5");

var _md52 = _interopRequireDefault(_md5);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _lovefield = require("lovefield");

var _lovefield2 = _interopRequireDefault(_lovefield);

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
								date: (0, _moment2["default"])(r[0], "DD.MM.YYYY").toDate(),
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
			var rows = this.state.data.filter(function (r) {
				return "tag" in r && !!r.tag;
			}).map(function (record) {
				// train classifier
				window.classifier.learn(record.receiver + " " + record.reference, record.tag);

				return window.records.createRow(record);
			});

			window.db.insertOrReplace().into(window.records).values(rows).exec();

			localStorage.setItem("classifier", JSON.stringify(window.classifier.toJson()));
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

},{"./Row":4,"lovefield":12,"md5":13,"moment":14,"papaparse":15,"react":"react"}],3:[function(require,module,exports){
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

	function Main(props) {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).call(this, props);
		this.state = {
			records: []
		};
	}

	_createClass(Main, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this = this;

			window.db.select().from(window.records).exec().then(function (results) {
				if (results.length > 0) {
					_this.setState({
						records: results
					});
				}
			});
		}
	}, {
		key: "render",
		value: function render() {
			var tags = {};
			var total = 0;

			this.state.records.forEach(function (record) {
				if (record.amount < 0) {
					if (!(record.tag in tags)) {
						tags[record.tag] = 0;
					}

					tags[record.tag] += record.amount;
					total += record.amount;
				}
			});
			console.table(tags);

			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					_reactRouter.Link,
					{ to: "/import" },
					"Import"
				),
				_react2["default"].createElement(
					"table",
					null,
					_react2["default"].createElement(
						"tbody",
						null,
						Object.keys(tags).map(function (tag) {
							return _react2["default"].createElement(
								"tr",
								{ key: tag },
								_react2["default"].createElement(
									"td",
									null,
									tag
								),
								_react2["default"].createElement(
									"td",
									null,
									parseInt(tags[tag]),
									"€"
								),
								_react2["default"].createElement(
									"td",
									null,
									parseInt(tags[tag] / total * 100),
									"%"
								)
							);
						})
					)
				)
			);
		}
	}]);

	return Main;
})(_react.Component);

exports["default"] = Main;
module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

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
					(0, _moment2["default"])(date).format("DD.MM.YYYY")
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

},{"./TagSelect":5,"moment":14,"react":"react"}],5:[function(require,module,exports){
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
			tags: ["car", "public-transport", "groceries", "eating-out", "communication", "transfer", "entertainment", "rent", "donations", "taxes", "household", "studying", "clothing", "fitness", "health", "personal-care", "subscriptions", "cash-withdrawel", "income", "misc", "insurance", "travel"]
		};
	}

	_createClass(TagSelect, [{
		key: "onChange",
		value: function onChange(e) {
			var v = e.target.value;
			if (v.length > 0) {
				this.props.onTagSelect(v);
			}
		}
	}, {
		key: "render",
		value: function render() {
			var tags = this.state.tags;
			tags.sort();

			// make a guess
			var guess = window.classifier.categorize(this.props.data.receiver + " " + this.props.data.reference);

			return _react2["default"].createElement(
				"select",
				{ onChange: this.onChange.bind(this), defaultValue: guess },
				_react2["default"].createElement(
					"option",
					{ value: "" },
					"Please choose:"
				),
				tags.map(function (tag, idx) {
					return _react2["default"].createElement(
						"option",
						{ key: "opt-" + idx, value: tag },
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

},{"react":"react"}],6:[function(require,module,exports){
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

},{"./routes":7,"bayes":8,"lovefield":12,"react":"react","react-dom":"react-dom","react-router":"react-router"}],7:[function(require,module,exports){
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

},{"./components/App":1,"./components/Import":2,"./components/Main":3,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
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




},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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


},{}],13:[function(require,module,exports){
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

},{"charenc":9,"crypt":10,"is-buffer":11}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9JbXBvcnQuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9NYWluLmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL2NvbXBvbmVudHMvUm93LmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL2NvbXBvbmVudHMvVGFnU2VsZWN0LmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL21haW4uanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvcm91dGVzLmpzIiwibm9kZV9tb2R1bGVzL2JheWVzL2xpYi9uYWl2ZV9iYXllcy5qcyIsIm5vZGVfbW9kdWxlcy9jaGFyZW5jL2NoYXJlbmMuanMiLCJub2RlX21vZHVsZXMvY3J5cHQvY3J5cHQuanMiLCJub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvdmVmaWVsZC9kaXN0L2xvdmVmaWVsZC5taW4uanMiLCJub2RlX21vZHVsZXMvbWQ1L21kNS5qcyIsIm5vZGVfbW9kdWxlcy9tb21lbnQvbW9tZW50LmpzIiwibm9kZV9tb2R1bGVzL3BhcGFwYXJzZS9wYXBhcGFyc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7O0lBRWxDLEdBQUc7V0FBSCxHQUFHOztBQUNHLFVBRE4sR0FBRyxDQUNJLEtBQUssRUFBRTt3QkFEZCxHQUFHOztBQUVQLDZCQUZJLEdBQUcsNkNBRUQsS0FBSyxFQUFFO0VBQ2I7O2NBSEksR0FBRzs7U0FLRixrQkFBRztBQUNSLFVBQ0M7OztJQUNDOzs7O0tBQVc7SUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7SUFDWixDQUNSO0dBQ0Y7OztRQVpJLEdBQUc7OztxQkFlTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNqQmUsT0FBTzs7Ozt5QkFDdkIsV0FBVzs7OzttQkFDWixPQUFPOzs7O21CQUNQLEtBQUs7Ozs7c0JBQ0YsUUFBUTs7Ozt5QkFDWixXQUFXOzs7O0lBRXBCLElBQUk7V0FBSixJQUFJOztBQUNFLFVBRE4sSUFBSSxDQUNHLEtBQUssRUFBRTt3QkFEZCxJQUFJOztBQUVSLDZCQUZJLElBQUksNkNBRUYsS0FBSyxFQUFFO0FBQ2IsTUFBSSxDQUFDLEtBQUssR0FBRztBQUNaLE9BQUksRUFBRSxFQUFFO0dBQ1IsQ0FBQztFQUNGOzs7Ozs7OztjQU5JLElBQUk7O1NBYU8sMEJBQUMsQ0FBQyxFQUFFOzs7QUFDbkIsT0FBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsMEJBQUssS0FBSyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFNLEVBQUU7QUFDUCxhQUFRLEVBQUUsT0FBTztLQUNqQjtBQUNELFlBQVEsRUFBRSxrQkFBQSxPQUFPLEVBQUk7QUFDcEIsU0FBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsV0FBSyxRQUFRLENBQUM7QUFDYixVQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUNsQixXQUFJLENBQUMsR0FBRztBQUNQLFlBQUksRUFBRSx5QkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pDLGdCQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLGlCQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNmLGNBQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7QUFFRixXQUFJLElBQUksR0FBRyxzQkFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsUUFBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQzs7QUFFakIsY0FBTyxDQUFDLENBQUM7T0FDVCxDQUFDO01BQ0YsQ0FBQyxDQUFDO0tBQ0g7SUFDRCxDQUFDLENBQUM7R0FDSDs7Ozs7Ozs7U0FNTyxvQkFBRztBQUNWLE9BQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN4QixNQUFNLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDWixXQUFPLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDN0IsQ0FBQyxDQUNELEdBQUcsQ0FBQyxVQUFBLE1BQU0sRUFBSTs7QUFFZCxVQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FDdEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FDVixDQUFDOztBQUVGLFdBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDOztBQUVKLFNBQU0sQ0FBQyxFQUFFLENBQ1AsZUFBZSxFQUFFLENBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDWixJQUFJLEVBQUUsQ0FBQzs7QUFFVCxlQUFZLENBQUMsT0FBTyxDQUNuQixZQUFZLEVBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQzFDLENBQUM7R0FDRjs7Ozs7Ozs7OztTQVFVLHFCQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDdEIsT0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ3RDLFFBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDbkIsTUFBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDWjtBQUNELFdBQU8sQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDOztBQUVILE9BQUksQ0FBQyxRQUFRLENBQUM7QUFDYixRQUFJLEVBQUUsT0FBTztJQUNiLENBQUMsQ0FBQztHQUNIOzs7Ozs7OztTQU1LLGtCQUFHOzs7QUFDUixVQUNDOzs7SUFDQzs7O0tBQ0M7QUFDQyxVQUFJLEVBQUMsTUFBTTtBQUNYLGNBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDO09BQzFDO0tBQ0M7SUFFSjs7T0FBTyxNQUFNLEVBQUMsR0FBRztLQUNoQjs7O01BQ0M7OztPQUNDOzs7O1FBQWE7T0FDYjs7OztRQUFpQjtPQUNqQjs7OztRQUFrQjtPQUNsQjs7OztRQUFlO09BQ2YsNENBQU07T0FDRjtNQUNFO0tBQ1I7OztNQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUs7QUFDckMsY0FDQztBQUNDLFdBQUcsRUFBRSxNQUFNLEdBQUcsR0FBRyxBQUFDO0FBQ2xCLFlBQUksRUFBRSxNQUFNLEFBQUM7QUFDYixtQkFBVyxFQUFFLE9BQUssV0FBVyxDQUFDLElBQUksUUFBTSxBQUFDO1NBQ3hDLENBQ0Q7T0FDRixDQUFDO01BQ0s7S0FDRDtJQUVSOztPQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQzs7S0FBZ0I7SUFDckQsQ0FDTDtHQUNGOzs7UUFsSUksSUFBSTs7O3FCQXFJSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkM1SWMsT0FBTzs7OzsyQkFDbkIsY0FBYzs7SUFFN0IsSUFBSTtXQUFKLElBQUk7O0FBQ0UsVUFETixJQUFJLENBQ0csS0FBSyxFQUFFO3dCQURkLElBQUk7O0FBRVIsNkJBRkksSUFBSSw2Q0FFRixLQUFLLEVBQUU7QUFDYixNQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1osVUFBTyxFQUFFLEVBQUU7R0FDWCxDQUFDO0VBQ0Y7O2NBTkksSUFBSTs7U0FRUSw2QkFBRzs7O0FBQ25CLFNBQU0sQ0FBQyxFQUFFLENBQ1AsTUFBTSxFQUFFLENBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDcEIsSUFBSSxFQUFFLENBQ04sSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2hCLFFBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdkIsV0FBSyxRQUFRLENBQUM7QUFDYixhQUFPLEVBQUUsT0FBTztNQUNoQixDQUFDLENBQUM7S0FDSDtJQUNELENBQUMsQ0FBQztHQUNKOzs7U0FFSyxrQkFBRztBQUNSLE9BQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLE9BQUksS0FBSyxHQUFHLENBQUMsQ0FBQzs7QUFFZCxPQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDcEMsUUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN0QixTQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQzFCLFVBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ3JCOztBQUVELFNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxVQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUN2QjtJQUNELENBQUMsQ0FBQztBQUNILFVBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXBCLFVBQ0M7OztJQUNDOztPQUFNLEVBQUUsRUFBQyxTQUFTOztLQUFjO0lBRWhDOzs7S0FDQzs7O01BQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDN0IsY0FDQzs7VUFBSSxHQUFHLEVBQUUsR0FBRyxBQUFDO1FBQ1o7OztTQUFLLEdBQUc7U0FBTTtRQUNkOzs7U0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztTQUFPO1FBQy9COzs7U0FDRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7O1NBQzlCO1FBQ0QsQ0FDSjtPQUNGLENBQUM7TUFDSztLQUNEO0lBQ0gsQ0FDTDtHQUNGOzs7UUEzREksSUFBSTs7O3FCQThESyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNqRWMsT0FBTzs7Ozt5QkFDbEIsYUFBYTs7OztzQkFDaEIsUUFBUTs7OztJQUVyQixHQUFHO1dBQUgsR0FBRzs7QUFDRyxVQUROLEdBQUcsQ0FDSSxLQUFLLEVBQUU7d0JBRGQsR0FBRzs7QUFFUCw2QkFGSSxHQUFHLDZDQUVELEtBQUssRUFBRTtBQUNiLE1BQUksQ0FBQyxLQUFLLEdBQUc7QUFDWixZQUFTLEVBQUUsS0FBSztBQUNoQixNQUFHLEVBQUUsSUFBSTtHQUNULENBQUM7RUFDRjs7Y0FQSSxHQUFHOztTQVNTLDZCQUFHOzs7QUFDbkIsU0FBTSxDQUFDLEVBQUUsQ0FDUCxNQUFNLEVBQUUsQ0FDUixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ25ELElBQUksRUFBRSxDQUNOLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNoQixRQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZCLFdBQUssUUFBUSxDQUFDO0FBQ2IsZUFBUyxFQUFFLElBQUk7TUFDZixDQUFDLENBQUM7S0FDSDtJQUNELENBQUMsQ0FBQztHQUNKOzs7U0FFVSxxQkFBQyxHQUFHLEVBQUU7QUFDaEIsT0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0dBQ2xEOzs7U0FFSyxrQkFBRztxQkFDc0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO09BQXJELElBQUksZUFBSixJQUFJO09BQUUsUUFBUSxlQUFSLFFBQVE7T0FBRSxTQUFTLGVBQVQsU0FBUztPQUFFLE1BQU0sZUFBTixNQUFNOztBQUV6QyxPQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDckIsT0FBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOztBQUVqQixPQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtBQUNsQyxXQUFPLEdBQUcsY0FBYyxDQUFDO0lBQ3pCLE1BQU07O0FBRU4sUUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2YsZ0JBQVcsR0FBRyxZQUFZLENBQUM7S0FDM0IsTUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEIsZ0JBQVcsR0FBRyxVQUFVLENBQUM7S0FDekI7SUFDRDs7QUFFRCxVQUNDOztNQUFJLFNBQVMsRUFBRSxPQUFPLEFBQUM7SUFDdEI7OztLQUFLLHlCQUFPLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7S0FBTTtJQUM1Qzs7O0tBQUssUUFBUTtLQUFNO0lBQ25COzs7S0FBSyxTQUFTO0tBQU07SUFDcEI7O09BQUksU0FBUyxFQUFFLFdBQVcsQUFBQztLQUFFLE1BQU07O0tBQU87SUFDMUM7OztLQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssR0FDOUI7QUFDQyxVQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEFBQUM7QUFDdEIsaUJBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztPQUN4QyxHQUNDLElBQUk7S0FDSjtJQUNELENBQ0o7R0FDRjs7O1FBN0RJLEdBQUc7OztxQkFnRU0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDcEVlLE9BQU87Ozs7SUFFbEMsU0FBUztXQUFULFNBQVM7O0FBQ0gsVUFETixTQUFTLENBQ0YsS0FBSyxFQUFFO3dCQURkLFNBQVM7O0FBRWIsNkJBRkksU0FBUyw2Q0FFUCxLQUFLLEVBQUU7QUFDYixNQUFJLENBQUMsS0FBSyxHQUFHO0FBQ1osT0FBSSxFQUFFLENBQ0wsS0FBSyxFQUNMLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsZUFBZSxFQUNmLE1BQU0sRUFDTixXQUFXLEVBQ1gsT0FBTyxFQUNQLFdBQVcsRUFDWCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLEVBQ1IsZUFBZSxFQUNmLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsUUFBUSxDQUNSO0dBQ0QsQ0FBQztFQUNGOztjQTdCSSxTQUFTOztTQStCTixrQkFBQyxDQUFDLEVBQUU7QUFDWCxPQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN6QixPQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2pCLFFBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCO0dBQ0Q7OztTQUVLLGtCQUFHO0FBQ1IsT0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDM0IsT0FBSSxDQUFDLElBQUksRUFBRSxDQUFDOzs7QUFHWixPQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQzFELENBQUM7O0FBRUYsVUFDQzs7TUFBUSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxZQUFZLEVBQUUsS0FBSyxBQUFDO0lBQy9EOztPQUFRLEtBQUssRUFBQyxFQUFFOztLQUF3QjtJQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBSztBQUN2QixZQUNDOztRQUFRLEdBQUcsRUFBRSxNQUFNLEdBQUcsR0FBRyxBQUFDLEVBQUMsS0FBSyxFQUFFLEdBQUcsQUFBQztNQUNwQyxHQUFHO01BQ0ksQ0FDUjtLQUNGLENBQUM7SUFDTSxDQUNSO0dBQ0Y7OztRQTNESSxTQUFTOzs7cUJBOERBLFNBQVM7Ozs7Ozs7O3FCQ2hFTixPQUFPOzs7OzJCQUNrQixjQUFjOzt3QkFDcEMsV0FBVzs7OztzQkFDYixVQUFVOzs7O3lCQUNkLFdBQVc7Ozs7cUJBQ1IsT0FBTzs7OztBQUV6QixNQUFNLENBQUMsVUFBVSxHQUFHLHlCQUFPLENBQUM7QUFDNUIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO0FBQ3ZDLE9BQU0sQ0FBQyxVQUFVLEdBQUcsbUJBQU0sUUFBUSxDQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDOUMsQ0FBQztDQUNGOztBQUVELElBQUksYUFBYSxHQUFHLHVCQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGFBQWEsQ0FDWCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQ3JCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsdUJBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNqQyxTQUFTLENBQUMsTUFBTSxFQUFFLHVCQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDcEMsU0FBUyxDQUFDLFVBQVUsRUFBRSx1QkFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ3JDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsdUJBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUN0QyxTQUFTLENBQUMsUUFBUSxFQUFFLHVCQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDakMsU0FBUyxDQUFDLEtBQUssRUFBRSx1QkFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ2hDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRTFCLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLEVBQUk7QUFDbEMsT0FBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDZixPQUFNLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7OztBQUdoRCx1QkFBUyxNQUFNLENBQ2Q7O0lBQVEsT0FBTywwQkFBYzs7RUFBa0IsRUFDL0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQzs7O0FBR0YsMEJBQVksTUFBTSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzlCLE1BQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7QUFDL0IsVUFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQzlDO0VBQ0QsQ0FBQyxDQUFDO0NBQ0gsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztxQkN6Q2UsT0FBTzs7OzsyQkFDUyxjQUFjOzs2QkFDaEMsa0JBQWtCOzs7OzhCQUNqQixtQkFBbUI7Ozs7Z0NBQ2pCLHFCQUFxQjs7OztxQkFHdkM7O0dBQU8sSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLDRCQUFNO0NBQzlCLDREQUFZLFNBQVMsNkJBQU8sR0FBRztDQUMvQix1REFBTyxJQUFJLEVBQUMsU0FBUyxFQUFDLFNBQVMsK0JBQVMsR0FBRztDQUNwQzs7OztBQ1ZUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2N0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y2VudGVyPlxuXHRcdFx0XHQ8aDE+8J+StTwvaDE+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9jZW50ZXI+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFwYSBmcm9tIFwicGFwYXBhcnNlXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IG1kNSBmcm9tIFwibWQ1XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBsZiBmcm9tIFwibG92ZWZpZWxkXCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YTogW11cblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIExvYWQgdGhlIENTViBmaWxlXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gZSBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRoYW5kbGVGaWxlVXBsb2FkKGUpIHtcblx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG5cdFx0UGFwYS5wYXJzZShmaWxlLCB7XG5cdFx0XHRjb25maWc6IHtcblx0XHRcdFx0ZW5jb2Rpbmc6IFwiVVRGLThcIlxuXHRcdFx0fSxcblx0XHRcdGNvbXBsZXRlOiByZXN1bHRzID0+IHtcblx0XHRcdFx0Y29uc3QgY3N2ID0gcmVzdWx0cy5kYXRhLnNsaWNlKDcpO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRkYXRhOiBjc3YubWFwKHIgPT4ge1xuXHRcdFx0XHRcdFx0dmFyIGQgPSB7XG5cdFx0XHRcdFx0XHRcdGRhdGU6IG1vbWVudChyWzBdLCBcIkRELk1NLllZWVlcIikudG9EYXRlKCksXG5cdFx0XHRcdFx0XHRcdHJlY2VpdmVyOiByWzNdLFxuXHRcdFx0XHRcdFx0XHRyZWZlcmVuY2U6IHJbNF0sXG5cdFx0XHRcdFx0XHRcdGFtb3VudDogcGFyc2VGbG9hdChyWzddLnJlcGxhY2UoXCIsXCIsIFwiLlwiKSlcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdHZhciBoYXNoID0gbWQ1KEpTT04uc3RyaW5naWZ5KGQpKTtcblx0XHRcdFx0XHRcdGRbXCJoYXNoXCJdID0gaGFzaDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIGQ7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogUGVyZm9ybSB0aGUgaW1wb3J0IHRvIHdlYiBzcWwgZGF0YWJhc2Vcblx0ICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRkb0ltcG9ydCgpIHtcblx0XHR2YXIgcm93cyA9IHRoaXMuc3RhdGUuZGF0YVxuXHRcdFx0LmZpbHRlcihyID0+IHtcblx0XHRcdFx0cmV0dXJuIFwidGFnXCIgaW4gciAmJiAhIXIudGFnO1xuXHRcdFx0fSlcblx0XHRcdC5tYXAocmVjb3JkID0+IHtcblx0XHRcdFx0Ly8gdHJhaW4gY2xhc3NpZmllclxuXHRcdFx0XHR3aW5kb3cuY2xhc3NpZmllci5sZWFybihcblx0XHRcdFx0XHRyZWNvcmQucmVjZWl2ZXIgKyBcIiBcIiArIHJlY29yZC5yZWZlcmVuY2UsXG5cdFx0XHRcdFx0cmVjb3JkLnRhZ1xuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHJldHVybiB3aW5kb3cucmVjb3Jkcy5jcmVhdGVSb3cocmVjb3JkKTtcblx0XHRcdH0pO1xuXG5cdFx0d2luZG93LmRiXG5cdFx0XHQuaW5zZXJ0T3JSZXBsYWNlKClcblx0XHRcdC5pbnRvKHdpbmRvdy5yZWNvcmRzKVxuXHRcdFx0LnZhbHVlcyhyb3dzKVxuXHRcdFx0LmV4ZWMoKTtcblxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuXHRcdFx0XCJjbGFzc2lmaWVyXCIsXG5cdFx0XHRKU09OLnN0cmluZ2lmeSh3aW5kb3cuY2xhc3NpZmllci50b0pzb24oKSlcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIHdoZW5ldmVyIHRoZSB1c2VyIHNlbGVjdHMgYSBuZXcgdGFnXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gaGFzaCBbZGVzY3JpcHRpb25dXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdGFnICBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRvblRhZ1NlbGVjdChoYXNoLCB0YWcpIHtcblx0XHR2YXIgcmVjb3JkcyA9IHRoaXMuc3RhdGUuZGF0YS5tYXAociA9PiB7XG5cdFx0XHRpZiAoci5oYXNoID09IGhhc2gpIHtcblx0XHRcdFx0ci50YWcgPSB0YWc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcjtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGF0YTogcmVjb3Jkc1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbmRlciBtZXRob2Rcblx0ICogQHJldHVybiB7SlNYfSB0aGUgSlNYIG1hcmt1cFxuXHQgKi9cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVVcGxvYWQuYmluZCh0aGlzKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0PHRhYmxlIGJvcmRlcj1cIjFcIj5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0aD5EYXRlPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPlJlY2VpdmVyPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPlJlZmVyZW5jZTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD5BbW91bnQ8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGggLz5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kYXRhLm1hcCgocmVjb3JkLCBpZHgpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8Um93XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e1wicm93LVwiICsgaWR4fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YT17cmVjb3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25UYWdTZWxlY3Q9e3RoaXMub25UYWdTZWxlY3QuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZG9JbXBvcnQuYmluZCh0aGlzKX0+SW1wb3J0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlY29yZHM6IFtdXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHdpbmRvdy5kYlxuXHRcdFx0LnNlbGVjdCgpXG5cdFx0XHQuZnJvbSh3aW5kb3cucmVjb3Jkcylcblx0XHRcdC5leGVjKClcblx0XHRcdC50aGVuKHJlc3VsdHMgPT4ge1xuXHRcdFx0XHRpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRyZWNvcmRzOiByZXN1bHRzXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciB0YWdzID0ge307XG5cdFx0dmFyIHRvdGFsID0gMDtcblxuXHRcdHRoaXMuc3RhdGUucmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG5cdFx0XHRpZiAocmVjb3JkLmFtb3VudCA8IDApIHtcblx0XHRcdFx0aWYgKCEocmVjb3JkLnRhZyBpbiB0YWdzKSkge1xuXHRcdFx0XHRcdHRhZ3NbcmVjb3JkLnRhZ10gPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGFnc1tyZWNvcmQudGFnXSArPSByZWNvcmQuYW1vdW50O1xuXHRcdFx0XHR0b3RhbCArPSByZWNvcmQuYW1vdW50O1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnNvbGUudGFibGUodGFncyk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PExpbmsgdG89XCIvaW1wb3J0XCI+SW1wb3J0PC9MaW5rPlxuXG5cdFx0XHRcdDx0YWJsZT5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7T2JqZWN0LmtleXModGFncykubWFwKHRhZyA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17dGFnfT5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57dGFnfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3BhcnNlSW50KHRhZ3NbdGFnXSl94oKsPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhcnNlSW50KHRhZ3NbdGFnXSAvIHRvdGFsICogMTAwKX0lXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRhZ1NlbGVjdCBmcm9tIFwiLi9UYWdTZWxlY3RcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5jbGFzcyBSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZHVwbGljYXRlOiBmYWxzZSxcblx0XHRcdHRhZzogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR3aW5kb3cuZGJcblx0XHRcdC5zZWxlY3QoKVxuXHRcdFx0LmZyb20od2luZG93LnJlY29yZHMpXG5cdFx0XHQud2hlcmUod2luZG93LnJlY29yZHMuaGFzaC5lcSh0aGlzLnByb3BzLmRhdGEuaGFzaCkpXG5cdFx0XHQuZXhlYygpXG5cdFx0XHQudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdFx0aWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0ZHVwbGljYXRlOiB0cnVlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0b25UYWdTZWxlY3QodGFnKSB7XG5cdFx0dGhpcy5wcm9wcy5vblRhZ1NlbGVjdCh0aGlzLnByb3BzLmRhdGEuaGFzaCwgdGFnKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGRhdGUsIHJlY2VpdmVyLCByZWZlcmVuY2UsIGFtb3VudCB9ID0gdGhpcy5wcm9wcy5kYXRhO1xuXG5cdFx0dmFyIGFtb3VudENsYXNzID0gXCJcIjtcblx0XHR2YXIgdHJDbGFzcyA9IFwiXCI7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5kdXBsaWNhdGUgPT09IHRydWUpIHtcblx0XHRcdHRyQ2xhc3MgPSBcInRyLWR1cGxpY2F0ZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBzZXQgYW1vdW50IGNsYXNzXG5cdFx0XHRpZiAoYW1vdW50ID4gMCkge1xuXHRcdFx0XHRhbW91bnRDbGFzcyA9IFwidGV4dC1ncmVlblwiO1xuXHRcdFx0fSBlbHNlIGlmIChhbW91bnQgPCAwKSB7XG5cdFx0XHRcdGFtb3VudENsYXNzID0gXCJ0ZXh0LXJlZFwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgY2xhc3NOYW1lPXt0ckNsYXNzfT5cblx0XHRcdFx0PHRkPnttb21lbnQoZGF0ZSkuZm9ybWF0KFwiREQuTU0uWVlZWVwiKX08L3RkPlxuXHRcdFx0XHQ8dGQ+e3JlY2VpdmVyfTwvdGQ+XG5cdFx0XHRcdDx0ZD57cmVmZXJlbmNlfTwvdGQ+XG5cdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2Ftb3VudENsYXNzfT57YW1vdW50feKCrDwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kdXBsaWNhdGUgPT09IGZhbHNlID8gKFxuXHRcdFx0XHRcdFx0PFRhZ1NlbGVjdFxuXHRcdFx0XHRcdFx0XHRkYXRhPXt0aGlzLnByb3BzLmRhdGF9XG5cdFx0XHRcdFx0XHRcdG9uVGFnU2VsZWN0PXt0aGlzLm9uVGFnU2VsZWN0LmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgVGFnU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHRhZ3M6IFtcblx0XHRcdFx0XCJjYXJcIixcblx0XHRcdFx0XCJwdWJsaWMtdHJhbnNwb3J0XCIsXG5cdFx0XHRcdFwiZ3JvY2VyaWVzXCIsXG5cdFx0XHRcdFwiZWF0aW5nLW91dFwiLFxuXHRcdFx0XHRcImNvbW11bmljYXRpb25cIixcblx0XHRcdFx0XCJ0cmFuc2ZlclwiLFxuXHRcdFx0XHRcImVudGVydGFpbm1lbnRcIixcblx0XHRcdFx0XCJyZW50XCIsXG5cdFx0XHRcdFwiZG9uYXRpb25zXCIsXG5cdFx0XHRcdFwidGF4ZXNcIixcblx0XHRcdFx0XCJob3VzZWhvbGRcIixcblx0XHRcdFx0XCJzdHVkeWluZ1wiLFxuXHRcdFx0XHRcImNsb3RoaW5nXCIsXG5cdFx0XHRcdFwiZml0bmVzc1wiLFxuXHRcdFx0XHRcImhlYWx0aFwiLFxuXHRcdFx0XHRcInBlcnNvbmFsLWNhcmVcIixcblx0XHRcdFx0XCJzdWJzY3JpcHRpb25zXCIsXG5cdFx0XHRcdFwiY2FzaC13aXRoZHJhd2VsXCIsXG5cdFx0XHRcdFwiaW5jb21lXCIsXG5cdFx0XHRcdFwibWlzY1wiLFxuXHRcdFx0XHRcImluc3VyYW5jZVwiLFxuXHRcdFx0XHRcInRyYXZlbFwiXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdG9uQ2hhbmdlKGUpIHtcblx0XHRjb25zdCB2ID0gZS50YXJnZXQudmFsdWU7XG5cdFx0aWYgKHYubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblRhZ1NlbGVjdCh2KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHRhZ3MgPSB0aGlzLnN0YXRlLnRhZ3M7XG5cdFx0dGFncy5zb3J0KCk7XG5cblx0XHQvLyBtYWtlIGEgZ3Vlc3Ncblx0XHRjb25zdCBndWVzcyA9IHdpbmRvdy5jbGFzc2lmaWVyLmNhdGVnb3JpemUoXG5cdFx0XHR0aGlzLnByb3BzLmRhdGEucmVjZWl2ZXIgKyBcIiBcIiArIHRoaXMucHJvcHMuZGF0YS5yZWZlcmVuY2Vcblx0XHQpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gZGVmYXVsdFZhbHVlPXtndWVzc30+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj5QbGVhc2UgY2hvb3NlOjwvb3B0aW9uPlxuXHRcdFx0XHR7dGFncy5tYXAoKHRhZywgaWR4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXtcIm9wdC1cIiArIGlkeH0gdmFsdWU9e3RhZ30+XG5cdFx0XHRcdFx0XHRcdHt0YWd9XG5cdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvc2VsZWN0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnU2VsZWN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgaGFzaEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCBsZiBmcm9tIFwibG92ZWZpZWxkXCI7XG5pbXBvcnQgYmF5ZXMgZnJvbSBcImJheWVzXCI7XG5cbndpbmRvdy5jbGFzc2lmaWVyID0gYmF5ZXMoKTtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsYXNzaWZpZXJcIikpIHtcblx0d2luZG93LmNsYXNzaWZpZXIgPSBiYXllcy5mcm9tSnNvbihcblx0XHRKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2xhc3NpZmllclwiKSlcblx0KTtcbn1cblxudmFyIHNjaGVtYUJ1aWxkZXIgPSBsZi5zY2hlbWEuY3JlYXRlKFwicmVjb3Jkc1wiLCAxKTtcbnNjaGVtYUJ1aWxkZXJcblx0LmNyZWF0ZVRhYmxlKFwiUmVjb3JkXCIpXG5cdC5hZGRDb2x1bW4oXCJoYXNoXCIsIGxmLlR5cGUuU1RSSU5HKVxuXHQuYWRkQ29sdW1uKFwiZGF0ZVwiLCBsZi5UeXBlLkRBVEVfVElNRSlcblx0LmFkZENvbHVtbihcInJlY2VpdmVyXCIsIGxmLlR5cGUuU1RSSU5HKVxuXHQuYWRkQ29sdW1uKFwicmVmZXJlbmNlXCIsIGxmLlR5cGUuU1RSSU5HKVxuXHQuYWRkQ29sdW1uKFwiYW1vdW50XCIsIGxmLlR5cGUuUkVBTClcblx0LmFkZENvbHVtbihcInRhZ1wiLCBsZi5UeXBlLlNUUklORylcblx0LmFkZFByaW1hcnlLZXkoW1wiaGFzaFwiXSk7XG5cbnNjaGVtYUJ1aWxkZXIuY29ubmVjdCgpLnRoZW4oZGIgPT4ge1xuXHR3aW5kb3cuZGIgPSBkYjtcblx0d2luZG93LnJlY29yZHMgPSBkYi5nZXRTY2hlbWEoKS50YWJsZShcIlJlY29yZFwiKTtcblxuXHQvLyByZW5kZXIgdGhlIERPTVxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0PFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcblx0KTtcblxuXHQvLyBsaXN0ZW4gdG8gbG9jYXRpb24gY2hhbmdlc1xuXHRoYXNoSGlzdG9yeS5saXN0ZW4obG9jYXRpb24gPT4ge1xuXHRcdGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IFwiUFVTSFwiKSB7XG5cdFx0XHRjb25zb2xlLmluZm8oXCJOZXcgcm91dGU6XCIsIGxvY2F0aW9uLnBhdGhuYW1lKTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiO1xuaW1wb3J0IEltcG9ydCBmcm9tIFwiLi9jb21wb25lbnRzL0ltcG9ydFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoXG5cdDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cblx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e01haW59IC8+XG5cdFx0PFJvdXRlIHBhdGg9XCIvaW1wb3J0XCIgY29tcG9uZW50PXtJbXBvcnR9IC8+XG5cdDwvUm91dGU+XG4pO1xuIiwiLypcbiAgICBFeHBvc2Ugb3VyIG5haXZlLWJheWVzIGdlbmVyYXRvciBmdW5jdGlvblxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgTmFpdmViYXllcyhvcHRpb25zKVxufVxuXG4vLyBrZXlzIHdlIHVzZSB0byBzZXJpYWxpemUgYSBjbGFzc2lmaWVyJ3Mgc3RhdGVcbnZhciBTVEFURV9LRVlTID0gbW9kdWxlLmV4cG9ydHMuU1RBVEVfS0VZUyA9IFtcbiAgJ2NhdGVnb3JpZXMnLCAnZG9jQ291bnQnLCAndG90YWxEb2N1bWVudHMnLCAndm9jYWJ1bGFyeScsICd2b2NhYnVsYXJ5U2l6ZScsXG4gICd3b3JkQ291bnQnLCAnd29yZEZyZXF1ZW5jeUNvdW50JywgJ29wdGlvbnMnXG5dO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGEgTmFpdmVCYXllcyBpbnN0YW5jZSBmcm9tIGEgSlNPTiBzdGF0ZSByZXByZXNlbnRhdGlvbi5cbiAqIFVzZSB0aGlzIHdpdGggY2xhc3NpZmllci50b0pzb24oKS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGpzb25TdHIgICBzdGF0ZSByZXByZXNlbnRhdGlvbiBvYnRhaW5lZCBieSBjbGFzc2lmaWVyLnRvSnNvbigpXG4gKiBAcmV0dXJuIHtOYWl2ZUJheWVzfSAgICAgICBDbGFzc2lmaWVyXG4gKi9cbm1vZHVsZS5leHBvcnRzLmZyb21Kc29uID0gZnVuY3Rpb24gKGpzb25TdHIpIHtcbiAgdmFyIHBhcnNlZDtcbiAgdHJ5IHtcbiAgICBwYXJzZWQgPSBKU09OLnBhcnNlKGpzb25TdHIpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05haXZlYmF5ZXMuZnJvbUpzb24gZXhwZWN0cyBhIHZhbGlkIEpTT04gc3RyaW5nLicpXG4gIH1cbiAgLy8gaW5pdCBhIG5ldyBjbGFzc2lmaWVyXG4gIHZhciBjbGFzc2lmaWVyID0gbmV3IE5haXZlYmF5ZXMocGFyc2VkLm9wdGlvbnMpXG5cbiAgLy8gb3ZlcnJpZGUgdGhlIGNsYXNzaWZpZXIncyBzdGF0ZVxuICBTVEFURV9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoIXBhcnNlZFtrXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYWl2ZWJheWVzLmZyb21Kc29uOiBKU09OIHN0cmluZyBpcyBtaXNzaW5nIGFuIGV4cGVjdGVkIHByb3BlcnR5OiBgJytrKydgLicpXG4gICAgfVxuICAgIGNsYXNzaWZpZXJba10gPSBwYXJzZWRba11cbiAgfSlcblxuICByZXR1cm4gY2xhc3NpZmllclxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGlucHV0IHN0cmluZywgdG9rZW5pemUgaXQgaW50byBhbiBhcnJheSBvZiB3b3JkIHRva2Vucy5cbiAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgdG9rZW5pemF0aW9uIGZ1bmN0aW9uIHVzZWQgaWYgdXNlciBkb2VzIG5vdCBwcm92aWRlIG9uZSBpbiBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xudmFyIGRlZmF1bHRUb2tlbml6ZXIgPSBmdW5jdGlvbiAodGV4dCkge1xuICAvL3JlbW92ZSBwdW5jdHVhdGlvbiBmcm9tIHRleHQgLSByZW1vdmUgYW55dGhpbmcgdGhhdCBpc24ndCBhIHdvcmQgY2hhciBvciBhIHNwYWNlXG4gIHZhciByZ3hQdW5jdHVhdGlvbiA9IC9bXihhLXpBLVpBLdCvYS3RjzAtOV8pK1xcc10vZ1xuXG4gIHZhciBzYW5pdGl6ZWQgPSB0ZXh0LnJlcGxhY2Uocmd4UHVuY3R1YXRpb24sICcgJylcblxuICByZXR1cm4gc2FuaXRpemVkLnNwbGl0KC9cXHMrLylcbn1cblxuLyoqXG4gKiBOYWl2ZS1CYXllcyBDbGFzc2lmaWVyXG4gKlxuICogVGhpcyBpcyBhIG5haXZlLWJheWVzIGNsYXNzaWZpZXIgdGhhdCB1c2VzIExhcGxhY2UgU21vb3RoaW5nLlxuICpcbiAqIFRha2VzIGFuIChvcHRpb25hbCkgb3B0aW9ucyBvYmplY3QgY29udGFpbmluZzpcbiAqICAgLSBgdG9rZW5pemVyYCAgPT4gY3VzdG9tIHRva2VuaXphdGlvbiBmdW5jdGlvblxuICpcbiAqL1xuZnVuY3Rpb24gTmFpdmViYXllcyAob3B0aW9ucykge1xuICAvLyBzZXQgb3B0aW9ucyBvYmplY3RcbiAgdGhpcy5vcHRpb25zID0ge31cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYWl2ZUJheWVzIGdvdCBpbnZhbGlkIGBvcHRpb25zYDogYCcgKyBvcHRpb25zICsgJ2AuIFBhc3MgaW4gYW4gb2JqZWN0LicpXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIHRoaXMudG9rZW5pemVyID0gdGhpcy5vcHRpb25zLnRva2VuaXplciB8fCBkZWZhdWx0VG9rZW5pemVyXG5cbiAgLy9pbml0aWFsaXplIG91ciB2b2NhYnVsYXJ5IGFuZCBpdHMgc2l6ZVxuICB0aGlzLnZvY2FidWxhcnkgPSB7fVxuICB0aGlzLnZvY2FidWxhcnlTaXplID0gMFxuXG4gIC8vbnVtYmVyIG9mIGRvY3VtZW50cyB3ZSBoYXZlIGxlYXJuZWQgZnJvbVxuICB0aGlzLnRvdGFsRG9jdW1lbnRzID0gMFxuXG4gIC8vZG9jdW1lbnQgZnJlcXVlbmN5IHRhYmxlIGZvciBlYWNoIG9mIG91ciBjYXRlZ29yaWVzXG4gIC8vPT4gZm9yIGVhY2ggY2F0ZWdvcnksIGhvdyBvZnRlbiB3ZXJlIGRvY3VtZW50cyBtYXBwZWQgdG8gaXRcbiAgdGhpcy5kb2NDb3VudCA9IHt9XG5cbiAgLy9mb3IgZWFjaCBjYXRlZ29yeSwgaG93IG1hbnkgd29yZHMgdG90YWwgd2VyZSBtYXBwZWQgdG8gaXRcbiAgdGhpcy53b3JkQ291bnQgPSB7fVxuXG4gIC8vd29yZCBmcmVxdWVuY3kgdGFibGUgZm9yIGVhY2ggY2F0ZWdvcnlcbiAgLy89PiBmb3IgZWFjaCBjYXRlZ29yeSwgaG93IGZyZXF1ZW50IHdhcyBhIGdpdmVuIHdvcmQgbWFwcGVkIHRvIGl0XG4gIHRoaXMud29yZEZyZXF1ZW5jeUNvdW50ID0ge31cblxuICAvL2hhc2htYXAgb2Ygb3VyIGNhdGVnb3J5IG5hbWVzXG4gIHRoaXMuY2F0ZWdvcmllcyA9IHt9XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlYWNoIG9mIG91ciBkYXRhIHN0cnVjdHVyZSBlbnRyaWVzIGZvciB0aGlzIG5ldyBjYXRlZ29yeVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gY2F0ZWdvcnlOYW1lXG4gKi9cbk5haXZlYmF5ZXMucHJvdG90eXBlLmluaXRpYWxpemVDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeU5hbWUpIHtcbiAgaWYgKCF0aGlzLmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXSkge1xuICAgIHRoaXMuZG9jQ291bnRbY2F0ZWdvcnlOYW1lXSA9IDBcbiAgICB0aGlzLndvcmRDb3VudFtjYXRlZ29yeU5hbWVdID0gMFxuICAgIHRoaXMud29yZEZyZXF1ZW5jeUNvdW50W2NhdGVnb3J5TmFtZV0gPSB7fVxuICAgIHRoaXMuY2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdID0gdHJ1ZVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogdHJhaW4gb3VyIG5haXZlLWJheWVzIGNsYXNzaWZpZXIgYnkgdGVsbGluZyBpdCB3aGF0IGBjYXRlZ29yeWBcbiAqIHRoZSBgdGV4dGAgY29ycmVzcG9uZHMgdG8uXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNsYXNzXG4gKi9cbk5haXZlYmF5ZXMucHJvdG90eXBlLmxlYXJuID0gZnVuY3Rpb24gKHRleHQsIGNhdGVnb3J5KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIC8vaW5pdGlhbGl6ZSBjYXRlZ29yeSBkYXRhIHN0cnVjdHVyZXMgaWYgd2UndmUgbmV2ZXIgc2VlbiB0aGlzIGNhdGVnb3J5XG4gIHNlbGYuaW5pdGlhbGl6ZUNhdGVnb3J5KGNhdGVnb3J5KVxuXG4gIC8vdXBkYXRlIG91ciBjb3VudCBvZiBob3cgbWFueSBkb2N1bWVudHMgbWFwcGVkIHRvIHRoaXMgY2F0ZWdvcnlcbiAgc2VsZi5kb2NDb3VudFtjYXRlZ29yeV0rK1xuXG4gIC8vdXBkYXRlIHRoZSB0b3RhbCBudW1iZXIgb2YgZG9jdW1lbnRzIHdlIGhhdmUgbGVhcm5lZCBmcm9tXG4gIHNlbGYudG90YWxEb2N1bWVudHMrK1xuXG4gIC8vbm9ybWFsaXplIHRoZSB0ZXh0IGludG8gYSB3b3JkIGFycmF5XG4gIHZhciB0b2tlbnMgPSBzZWxmLnRva2VuaXplcih0ZXh0KVxuXG4gIC8vZ2V0IGEgZnJlcXVlbmN5IGNvdW50IGZvciBlYWNoIHRva2VuIGluIHRoZSB0ZXh0XG4gIHZhciBmcmVxdWVuY3lUYWJsZSA9IHNlbGYuZnJlcXVlbmN5VGFibGUodG9rZW5zKVxuXG4gIC8qXG4gICAgICBVcGRhdGUgb3VyIHZvY2FidWxhcnkgYW5kIG91ciB3b3JkIGZyZXF1ZW5jeSBjb3VudCBmb3IgdGhpcyBjYXRlZ29yeVxuICAgKi9cblxuICBPYmplY3RcbiAgLmtleXMoZnJlcXVlbmN5VGFibGUpXG4gIC5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIC8vYWRkIHRoaXMgd29yZCB0byBvdXIgdm9jYWJ1bGFyeSBpZiBub3QgYWxyZWFkeSBleGlzdGluZ1xuICAgIGlmICghc2VsZi52b2NhYnVsYXJ5W3Rva2VuXSkge1xuICAgICAgc2VsZi52b2NhYnVsYXJ5W3Rva2VuXSA9IHRydWVcbiAgICAgIHNlbGYudm9jYWJ1bGFyeVNpemUrK1xuICAgIH1cblxuICAgIHZhciBmcmVxdWVuY3lJblRleHQgPSBmcmVxdWVuY3lUYWJsZVt0b2tlbl1cblxuICAgIC8vdXBkYXRlIHRoZSBmcmVxdWVuY3kgaW5mb3JtYXRpb24gZm9yIHRoaXMgd29yZCBpbiB0aGlzIGNhdGVnb3J5XG4gICAgaWYgKCFzZWxmLndvcmRGcmVxdWVuY3lDb3VudFtjYXRlZ29yeV1bdG9rZW5dKVxuICAgICAgc2VsZi53b3JkRnJlcXVlbmN5Q291bnRbY2F0ZWdvcnldW3Rva2VuXSA9IGZyZXF1ZW5jeUluVGV4dFxuICAgIGVsc2VcbiAgICAgIHNlbGYud29yZEZyZXF1ZW5jeUNvdW50W2NhdGVnb3J5XVt0b2tlbl0gKz0gZnJlcXVlbmN5SW5UZXh0XG5cbiAgICAvL3VwZGF0ZSB0aGUgY291bnQgb2YgYWxsIHdvcmRzIHdlIGhhdmUgc2VlbiBtYXBwZWQgdG8gdGhpcyBjYXRlZ29yeVxuICAgIHNlbGYud29yZENvdW50W2NhdGVnb3J5XSArPSBmcmVxdWVuY3lJblRleHRcbiAgfSlcblxuICByZXR1cm4gc2VsZlxufVxuXG4vKipcbiAqIERldGVybWluZSB3aGF0IGNhdGVnb3J5IGB0ZXh0YCBiZWxvbmdzIHRvLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gdGV4dFxuICogQHJldHVybiB7U3RyaW5nfSBjYXRlZ29yeVxuICovXG5OYWl2ZWJheWVzLnByb3RvdHlwZS5jYXRlZ29yaXplID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gICAgLCBtYXhQcm9iYWJpbGl0eSA9IC1JbmZpbml0eVxuICAgICwgY2hvc2VuQ2F0ZWdvcnkgPSBudWxsXG5cbiAgdmFyIHRva2VucyA9IHNlbGYudG9rZW5pemVyKHRleHQpXG4gIHZhciBmcmVxdWVuY3lUYWJsZSA9IHNlbGYuZnJlcXVlbmN5VGFibGUodG9rZW5zKVxuXG4gIC8vaXRlcmF0ZSB0aHJ1IG91ciBjYXRlZ29yaWVzIHRvIGZpbmQgdGhlIG9uZSB3aXRoIG1heCBwcm9iYWJpbGl0eSBmb3IgdGhpcyB0ZXh0XG4gIE9iamVjdFxuICAua2V5cyhzZWxmLmNhdGVnb3JpZXMpXG4gIC5mb3JFYWNoKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuXG4gICAgLy9zdGFydCBieSBjYWxjdWxhdGluZyB0aGUgb3ZlcmFsbCBwcm9iYWJpbGl0eSBvZiB0aGlzIGNhdGVnb3J5XG4gICAgLy89PiAgb3V0IG9mIGFsbCBkb2N1bWVudHMgd2UndmUgZXZlciBsb29rZWQgYXQsIGhvdyBtYW55IHdlcmVcbiAgICAvLyAgICBtYXBwZWQgdG8gdGhpcyBjYXRlZ29yeVxuICAgIHZhciBjYXRlZ29yeVByb2JhYmlsaXR5ID0gc2VsZi5kb2NDb3VudFtjYXRlZ29yeV0gLyBzZWxmLnRvdGFsRG9jdW1lbnRzXG5cbiAgICAvL3Rha2UgdGhlIGxvZyB0byBhdm9pZCB1bmRlcmZsb3dcbiAgICB2YXIgbG9nUHJvYmFiaWxpdHkgPSBNYXRoLmxvZyhjYXRlZ29yeVByb2JhYmlsaXR5KVxuXG4gICAgLy9ub3cgZGV0ZXJtaW5lIFAoIHcgfCBjICkgZm9yIGVhY2ggd29yZCBgd2AgaW4gdGhlIHRleHRcbiAgICBPYmplY3RcbiAgICAua2V5cyhmcmVxdWVuY3lUYWJsZSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgIHZhciBmcmVxdWVuY3lJblRleHQgPSBmcmVxdWVuY3lUYWJsZVt0b2tlbl1cbiAgICAgIHZhciB0b2tlblByb2JhYmlsaXR5ID0gc2VsZi50b2tlblByb2JhYmlsaXR5KHRva2VuLCBjYXRlZ29yeSlcblxuICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuOiAlcyBjYXRlZ29yeTogYCVzYCB0b2tlblByb2JhYmlsaXR5OiAlZCcsIHRva2VuLCBjYXRlZ29yeSwgdG9rZW5Qcm9iYWJpbGl0eSlcblxuICAgICAgLy9kZXRlcm1pbmUgdGhlIGxvZyBvZiB0aGUgUCggdyB8IGMgKSBmb3IgdGhpcyB3b3JkXG4gICAgICBsb2dQcm9iYWJpbGl0eSArPSBmcmVxdWVuY3lJblRleHQgKiBNYXRoLmxvZyh0b2tlblByb2JhYmlsaXR5KVxuICAgIH0pXG5cbiAgICBpZiAobG9nUHJvYmFiaWxpdHkgPiBtYXhQcm9iYWJpbGl0eSkge1xuICAgICAgbWF4UHJvYmFiaWxpdHkgPSBsb2dQcm9iYWJpbGl0eVxuICAgICAgY2hvc2VuQ2F0ZWdvcnkgPSBjYXRlZ29yeVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gY2hvc2VuQ2F0ZWdvcnlcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgcHJvYmFiaWxpdHkgdGhhdCBhIGB0b2tlbmAgYmVsb25ncyB0byBhIGBjYXRlZ29yeWBcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHRva2VuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNhdGVnb3J5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHByb2JhYmlsaXR5XG4gKi9cbk5haXZlYmF5ZXMucHJvdG90eXBlLnRva2VuUHJvYmFiaWxpdHkgPSBmdW5jdGlvbiAodG9rZW4sIGNhdGVnb3J5KSB7XG4gIC8vaG93IG1hbnkgdGltZXMgdGhpcyB3b3JkIGhhcyBvY2N1cnJlZCBpbiBkb2N1bWVudHMgbWFwcGVkIHRvIHRoaXMgY2F0ZWdvcnlcbiAgdmFyIHdvcmRGcmVxdWVuY3lDb3VudCA9IHRoaXMud29yZEZyZXF1ZW5jeUNvdW50W2NhdGVnb3J5XVt0b2tlbl0gfHwgMFxuXG4gIC8vd2hhdCBpcyB0aGUgY291bnQgb2YgYWxsIHdvcmRzIHRoYXQgaGF2ZSBldmVyIGJlZW4gbWFwcGVkIHRvIHRoaXMgY2F0ZWdvcnlcbiAgdmFyIHdvcmRDb3VudCA9IHRoaXMud29yZENvdW50W2NhdGVnb3J5XVxuXG4gIC8vdXNlIGxhcGxhY2UgQWRkLTEgU21vb3RoaW5nIGVxdWF0aW9uXG4gIHJldHVybiAoIHdvcmRGcmVxdWVuY3lDb3VudCArIDEgKSAvICggd29yZENvdW50ICsgdGhpcy52b2NhYnVsYXJ5U2l6ZSApXG59XG5cbi8qKlxuICogQnVpbGQgYSBmcmVxdWVuY3kgaGFzaG1hcCB3aGVyZVxuICogLSB0aGUga2V5cyBhcmUgdGhlIGVudHJpZXMgaW4gYHRva2Vuc2BcbiAqIC0gdGhlIHZhbHVlcyBhcmUgdGhlIGZyZXF1ZW5jeSBvZiBlYWNoIGVudHJ5IGluIGB0b2tlbnNgXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IHRva2VucyAgTm9ybWFsaXplZCB3b3JkIGFycmF5XG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbk5haXZlYmF5ZXMucHJvdG90eXBlLmZyZXF1ZW5jeVRhYmxlID0gZnVuY3Rpb24gKHRva2Vucykge1xuICB2YXIgZnJlcXVlbmN5VGFibGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgaWYgKCFmcmVxdWVuY3lUYWJsZVt0b2tlbl0pXG4gICAgICBmcmVxdWVuY3lUYWJsZVt0b2tlbl0gPSAxXG4gICAgZWxzZVxuICAgICAgZnJlcXVlbmN5VGFibGVbdG9rZW5dKytcbiAgfSlcblxuICByZXR1cm4gZnJlcXVlbmN5VGFibGVcbn1cblxuLyoqXG4gKiBEdW1wIHRoZSBjbGFzc2lmaWVyJ3Mgc3RhdGUgYXMgYSBKU09OIHN0cmluZy5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmVwcmVzZW50YXRpb24gb2YgdGhlIGNsYXNzaWZpZXIuXG4gKi9cbk5haXZlYmF5ZXMucHJvdG90eXBlLnRvSnNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0ge31cbiAgdmFyIHNlbGYgPSB0aGlzXG4gIFNUQVRFX0tFWVMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgIHN0YXRlW2tdID0gc2VsZltrXVxuICB9KVxuXG4gIHZhciBqc29uU3RyID0gSlNPTi5zdHJpbmdpZnkoc3RhdGUpXG5cbiAgcmV0dXJuIGpzb25TdHJcbn1cblxuXG5cbiIsInZhciBjaGFyZW5jID0ge1xuICAvLyBVVEYtOCBlbmNvZGluZ1xuICB1dGY4OiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBjaGFyZW5jLmJpbi5zdHJpbmdUb0J5dGVzKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGNoYXJlbmMuYmluLmJ5dGVzVG9TdHJpbmcoYnl0ZXMpKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEJpbmFyeSBlbmNvZGluZ1xuICBiaW46IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgc3RyID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pKTtcbiAgICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJlbmM7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBiYXNlNjRtYXBcbiAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nLFxuXG4gIGNyeXB0ID0ge1xuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIGxlZnRcbiAgICByb3RsOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgYikgfCAobiA+Pj4gKDMyIC0gYikpO1xuICAgIH0sXG5cbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiByaWdodFxuICAgIHJvdHI6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCAoMzIgLSBiKSkgfCAobiA+Pj4gYik7XG4gICAgfSxcblxuICAgIC8vIFN3YXAgYmlnLWVuZGlhbiB0byBsaXR0bGUtZW5kaWFuIGFuZCB2aWNlIHZlcnNhXG4gICAgZW5kaWFuOiBmdW5jdGlvbihuKSB7XG4gICAgICAvLyBJZiBudW1iZXIgZ2l2ZW4sIHN3YXAgZW5kaWFuXG4gICAgICBpZiAobi5jb25zdHJ1Y3RvciA9PSBOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0LnJvdGwobiwgOCkgJiAweDAwRkYwMEZGIHwgY3J5cHQucm90bChuLCAyNCkgJiAweEZGMDBGRjAwO1xuICAgICAgfVxuXG4gICAgICAvLyBFbHNlLCBhc3N1bWUgYXJyYXkgYW5kIHN3YXAgYWxsIGl0ZW1zXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspXG4gICAgICAgIG5baV0gPSBjcnlwdC5lbmRpYW4obltpXSk7XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuXG4gICAgLy8gR2VuZXJhdGUgYW4gYXJyYXkgb2YgYW55IGxlbmd0aCBvZiByYW5kb20gYnl0ZXNcbiAgICByYW5kb21CeXRlczogZnVuY3Rpb24obikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXTsgbiA+IDA7IG4tLSlcbiAgICAgICAgYnl0ZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYmlnLWVuZGlhbiAzMi1iaXQgd29yZHNcbiAgICBieXRlc1RvV29yZHM6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciB3b3JkcyA9IFtdLCBpID0gMCwgYiA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKywgYiArPSA4KVxuICAgICAgICB3b3Jkc1tiID4+PiA1XSB8PSBieXRlc1tpXSA8PCAoMjQgLSBiICUgMzIpO1xuICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGJpZy1lbmRpYW4gMzItYml0IHdvcmRzIHRvIGEgYnl0ZSBhcnJheVxuICAgIHdvcmRzVG9CeXRlczogZnVuY3Rpb24od29yZHMpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGIgPSAwOyBiIDwgd29yZHMubGVuZ3RoICogMzI7IGIgKz0gOClcbiAgICAgICAgYnl0ZXMucHVzaCgod29yZHNbYiA+Pj4gNV0gPj4+ICgyNCAtIGIgJSAzMikpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgaGV4IHN0cmluZ1xuICAgIGJ5dGVzVG9IZXg6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBoZXggPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSAmIDB4RikudG9TdHJpbmcoMTYpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZXguam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBoZXggc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGhleFRvQnl0ZXM6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYyA9IDA7IGMgPCBoZXgubGVuZ3RoOyBjICs9IDIpXG4gICAgICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LnN1YnN0cihjLCAyKSwgMTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBiYXNlLTY0IHN0cmluZ1xuICAgIGJ5dGVzVG9CYXNlNjQ6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBiYXNlNjQgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlc1tpXSA8PCAxNikgfCAoYnl0ZXNbaSArIDFdIDw8IDgpIHwgYnl0ZXNbaSArIDJdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKylcbiAgICAgICAgICBpZiAoaSAqIDggKyBqICogNiA8PSBieXRlcy5sZW5ndGggKiA4KVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goYmFzZTY0bWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gNiAqICgzIC0gaikpICYgMHgzRikpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKCc9Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZTY0LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYmFzZS02NCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgYmFzZTY0VG9CeXRlczogZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgICAvLyBSZW1vdmUgbm9uLWJhc2UtNjQgY2hhcmFjdGVyc1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnJlcGxhY2UoL1teQS1aMC05K1xcL10vaWcsICcnKTtcblxuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDAsIGltb2Q0ID0gMDsgaSA8IGJhc2U2NC5sZW5ndGg7XG4gICAgICAgICAgaW1vZDQgPSArK2kgJSA0KSB7XG4gICAgICAgIGlmIChpbW9kNCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgYnl0ZXMucHVzaCgoKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSAtIDEpKVxuICAgICAgICAgICAgJiAoTWF0aC5wb3coMiwgLTIgKiBpbW9kNCArIDgpIC0gMSkpIDw8IChpbW9kNCAqIDIpKVxuICAgICAgICAgICAgfCAoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpKSkgPj4+ICg2IC0gaW1vZDQgKiAyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGNyeXB0O1xufSkoKTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiaWYoIXNlbGYud2luZG93KXt3aW5kb3c9c2VsZjt9XG4oZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7ZnVuY3Rpb24gYWEoKXtyZXR1cm4gZnVuY3Rpb24oKXt9fWZ1bmN0aW9uIGJhKGEpe3JldHVybiBmdW5jdGlvbihiKXt0aGlzW2FdPWJ9fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbYV19fWZ1bmN0aW9uIGsoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGF9fXZhciBtLGRhPXRoaXM7ZnVuY3Rpb24gbihhKXtyZXR1cm4gdm9pZCAwIT09YX1mdW5jdGlvbiBlYSgpe31cbmZ1bmN0aW9uIGZhKGEpe3ZhciBiPXR5cGVvZiBhO2lmKFwib2JqZWN0XCI9PWIpaWYoYSl7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXJldHVyblwiYXJyYXlcIjtpZihhIGluc3RhbmNlb2YgT2JqZWN0KXJldHVybiBiO3ZhciBjPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKTtpZihcIltvYmplY3QgV2luZG93XVwiPT1jKXJldHVyblwib2JqZWN0XCI7aWYoXCJbb2JqZWN0IEFycmF5XVwiPT1jfHxcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnNwbGljZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJiFhLnByb3BlcnR5SXNFbnVtZXJhYmxlKFwic3BsaWNlXCIpKXJldHVyblwiYXJyYXlcIjtpZihcIltvYmplY3QgRnVuY3Rpb25dXCI9PWN8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmNhbGwmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7XG5lbHNlIGlmKFwiZnVuY3Rpb25cIj09YiYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuY2FsbClyZXR1cm5cIm9iamVjdFwiO3JldHVybiBifWZ1bmN0aW9uIGdhKGEpe3JldHVybiBudWxsIT1hfWZ1bmN0aW9uIGhhKGEpe3ZhciBiPWZhKGEpO3JldHVyblwiYXJyYXlcIj09Ynx8XCJvYmplY3RcIj09YiYmXCJudW1iZXJcIj09dHlwZW9mIGEubGVuZ3RofWZ1bmN0aW9uIGlhKGEpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGphKGEpe3JldHVyblwiZnVuY3Rpb25cIj09ZmEoYSl9ZnVuY3Rpb24ga2EoYSl7cmV0dXJuIGFbbGFdfHwoYVtsYV09KyttYSl9dmFyIGxhPVwiY2xvc3VyZV91aWRfXCIrKDFFOSpNYXRoLnJhbmRvbSgpPj4+MCksbWE9MDtmdW5jdGlvbiBuYShhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIG9hKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHBhKGEsYixjKXtwYT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmLTEhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLnRvU3RyaW5nKCkuaW5kZXhPZihcIm5hdGl2ZSBjb2RlXCIpP25hOm9hO3JldHVybiBwYS5hcHBseShudWxsLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBxYShhLGIpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj1jLnNsaWNlKCk7Yi5wdXNoLmFwcGx5KGIsYXJndW1lbnRzKTtyZXR1cm4gYS5hcHBseSh0aGlzLGIpfX1mdW5jdGlvbiBxKGEsYil7YT1hLnNwbGl0KFwiLlwiKTt2YXIgYz1kYTthWzBdaW4gY3x8IWMuZXhlY1NjcmlwdHx8Yy5leGVjU2NyaXB0KFwidmFyIFwiK2FbMF0pO2Zvcih2YXIgZDthLmxlbmd0aCYmKGQ9YS5zaGlmdCgpKTspIWEubGVuZ3RoJiZuKGIpP2NbZF09YjpjPWNbZF0mJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLGQpP2NbZF06Y1tkXT17fX1cbmZ1bmN0aW9uIHIoYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2EuaGI9Yi5wcm90b3R5cGU7YS5wcm90b3R5cGU9bmV3IGM7YS5wcm90b3R5cGUuY29uc3RydWN0b3I9YTthLlZnPWZ1bmN0aW9uKGEsYyxmKXtmb3IodmFyIGQ9QXJyYXkoYXJndW1lbnRzLmxlbmd0aC0yKSxlPTI7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKylkW2UtMl09YXJndW1lbnRzW2VdO3JldHVybiBiLnByb3RvdHlwZVtjXS5hcHBseShhLGQpfX07ZnVuY3Rpb24gcmEoYSl7aWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyxyYSk7ZWxzZXt2YXIgYj1FcnJvcigpLnN0YWNrO2ImJih0aGlzLnN0YWNrPWIpfWEmJih0aGlzLm1lc3NhZ2U9U3RyaW5nKGEpKX1yKHJhLEVycm9yKTtyYS5wcm90b3R5cGUubmFtZT1cIkN1c3RvbUVycm9yXCI7dmFyIHRhPVN0cmluZy5wcm90b3R5cGUudHJpbT9mdW5jdGlvbihhKXtyZXR1cm4gYS50cmltKCl9OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoL15bXFxzXFx4YTBdK3xbXFxzXFx4YTBdKyQvZyxcIlwiKX07XG5mdW5jdGlvbiB1YShhLGIpe3ZhciBjPTA7YT10YShTdHJpbmcoYSkpLnNwbGl0KFwiLlwiKTtiPXRhKFN0cmluZyhiKSkuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZD1NYXRoLm1heChhLmxlbmd0aCxiLmxlbmd0aCksZT0wOzA9PWMmJmU8ZDtlKyspe3ZhciBmPWFbZV18fFwiXCIsaD1iW2VdfHxcIlwiO2Rve2Y9LyhcXGQqKShcXEQqKSguKikvLmV4ZWMoZil8fFtcIlwiLFwiXCIsXCJcIixcIlwiXTtoPS8oXFxkKikoXFxEKikoLiopLy5leGVjKGgpfHxbXCJcIixcIlwiLFwiXCIsXCJcIl07aWYoMD09ZlswXS5sZW5ndGgmJjA9PWhbMF0ubGVuZ3RoKWJyZWFrO2M9dmEoMD09ZlsxXS5sZW5ndGg/MDpwYXJzZUludChmWzFdLDEwKSwwPT1oWzFdLmxlbmd0aD8wOnBhcnNlSW50KGhbMV0sMTApKXx8dmEoMD09ZlsyXS5sZW5ndGgsMD09aFsyXS5sZW5ndGgpfHx2YShmWzJdLGhbMl0pO2Y9ZlszXTtoPWhbM119d2hpbGUoMD09Yyl9cmV0dXJuIGN9ZnVuY3Rpb24gdmEoYSxiKXtyZXR1cm4gYTxiPy0xOmE+Yj8xOjB9O2Z1bmN0aW9uIHdhKGEsYixjKXt0aGlzLnBnPWM7dGhpcy5PZj1hO3RoaXMuS2c9Yjt0aGlzLnFkPTA7dGhpcy5mZD1udWxsfXdhLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oKXt2YXIgYTswPHRoaXMucWQ/KHRoaXMucWQtLSxhPXRoaXMuZmQsdGhpcy5mZD1hLm5leHQsYS5uZXh0PW51bGwpOmE9dGhpcy5PZigpO3JldHVybiBhfTt3YS5wcm90b3R5cGUucHV0PWZ1bmN0aW9uKGEpe3RoaXMuS2coYSk7dGhpcy5xZDx0aGlzLnBnJiYodGhpcy5xZCsrLGEubmV4dD10aGlzLmZkLHRoaXMuZmQ9YSl9O3ZhciB4YT1BcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbihhLGIsYyl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsPT1jPzA6MD5jP01hdGgubWF4KDAsYS5sZW5ndGgrYyk6YztpZihpYShhKSlyZXR1cm4gaWEoYikmJjE9PWIubGVuZ3RoP2EuaW5kZXhPZihiLGMpOi0xO2Zvcig7YzxhLmxlbmd0aDtjKyspaWYoYyBpbiBhJiZhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0seWE9QXJyYXkucHJvdG90eXBlLmZvckVhY2g/ZnVuY3Rpb24oYSxiLGMpe0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGU9aWEoYSk/YS5zcGxpdChcIlwiKTphLGY9MDtmPGQ7ZisrKWYgaW4gZSYmYi5jYWxsKGMsZVtmXSxmLGEpfSx6YT1BcnJheS5wcm90b3R5cGUubWFwP2Z1bmN0aW9uKGEsYixjKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGEsXG5iLGMpfTpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGU9QXJyYXkoZCksZj1pYShhKT9hLnNwbGl0KFwiXCIpOmEsaD0wO2g8ZDtoKyspaCBpbiBmJiYoZVtoXT1iLmNhbGwoYyxmW2hdLGgsYSkpO3JldHVybiBlfSxBYT1BcnJheS5wcm90b3R5cGUucmVkdWNlP2Z1bmN0aW9uKGEsYixjLGQpe2QmJihiPXBhKGIsZCkpO3JldHVybiBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoYSxiLGMpfTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1jO3lhKGEsZnVuY3Rpb24oYyxoKXtlPWIuY2FsbChkLGUsYyxoLGEpfSk7cmV0dXJuIGV9LEJhPUFycmF5LnByb3RvdHlwZS5zb21lP2Z1bmN0aW9uKGEsYixjKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1pYShhKT9hLnNwbGl0KFwiXCIpOmEsZj0wO2Y8ZDtmKyspaWYoZiBpbiBlJiZiLmNhbGwoYyxlW2ZdLGYsYSkpcmV0dXJuITA7cmV0dXJuITF9O1xuZnVuY3Rpb24gQ2EoYSxiLGMpe3JldHVybiAyPj1hcmd1bWVudHMubGVuZ3RoP0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsYik6QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSxiLGMpfWZ1bmN0aW9uIERhKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhO2MrKyliW2NdPTA7cmV0dXJuIGJ9ZnVuY3Rpb24gRWEoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKXt2YXIgZD1hcmd1bWVudHNbY107aWYoXCJhcnJheVwiPT1mYShkKSlmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrPTgxOTIpZm9yKHZhciBmPUVhLmFwcGx5KG51bGwsQ2EoZCxlLGUrODE5MikpLGg9MDtoPGYubGVuZ3RoO2grKyliLnB1c2goZltoXSk7ZWxzZSBiLnB1c2goZCl9cmV0dXJuIGJ9O2Z1bmN0aW9uIEZhKGEpe3ZhciBiPVtdLGM9MCxkO2ZvcihkIGluIGEpYltjKytdPWFbZF07cmV0dXJuIGJ9O3ZhciBHYTthOnt2YXIgSGE9ZGEubmF2aWdhdG9yO2lmKEhhKXt2YXIgSWE9SGEudXNlckFnZW50O2lmKElhKXtHYT1JYTticmVhayBhfX1HYT1cIlwifWZ1bmN0aW9uIHQoYSl7cmV0dXJuLTEhPUdhLmluZGV4T2YoYSl9O2Z1bmN0aW9uIEphKCl7cmV0dXJuIHQoXCJTYWZhcmlcIikmJiEoS2EoKXx8dChcIkNvYXN0XCIpfHx0KFwiT3BlcmFcIil8fHQoXCJFZGdlXCIpfHx0KFwiU2lsa1wiKXx8dChcIkFuZHJvaWRcIikpfWZ1bmN0aW9uIEthKCl7cmV0dXJuKHQoXCJDaHJvbWVcIil8fHQoXCJDcmlPU1wiKSkmJiF0KFwiRWRnZVwiKX07ZnVuY3Rpb24gTGEoYSl7ZGEuc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGE7fSwwKX12YXIgTWE7XG5mdW5jdGlvbiBPYSgpe3ZhciBhPWRhLk1lc3NhZ2VDaGFubmVsO1widW5kZWZpbmVkXCI9PT10eXBlb2YgYSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5wb3N0TWVzc2FnZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXImJiF0KFwiUHJlc3RvXCIpJiYoYT1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJRlJBTUVcIik7YS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2Euc3JjPVwiXCI7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGEpO3ZhciBiPWEuY29udGVudFdpbmRvdyxhPWIuZG9jdW1lbnQ7YS5vcGVuKCk7YS53cml0ZShcIlwiKTthLmNsb3NlKCk7dmFyIGM9XCJjYWxsSW1tZWRpYXRlXCIrTWF0aC5yYW5kb20oKSxkPVwiZmlsZTpcIj09Yi5sb2NhdGlvbi5wcm90b2NvbD9cIipcIjpiLmxvY2F0aW9uLnByb3RvY29sK1wiLy9cIitiLmxvY2F0aW9uLmhvc3QsYT1wYShmdW5jdGlvbihhKXtpZigoXCIqXCI9PWR8fGEub3JpZ2luPT1kKSYmYS5kYXRhPT1cbmMpdGhpcy5wb3J0MS5vbm1lc3NhZ2UoKX0sdGhpcyk7Yi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGEsITEpO3RoaXMucG9ydDE9e307dGhpcy5wb3J0Mj17cG9zdE1lc3NhZ2U6ZnVuY3Rpb24oKXtiLnBvc3RNZXNzYWdlKGMsZCl9fX0pO2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgYSYmIXQoXCJUcmlkZW50XCIpJiYhdChcIk1TSUVcIikpe3ZhciBiPW5ldyBhLGM9e30sZD1jO2IucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKCl7aWYobihjLm5leHQpKXtjPWMubmV4dDt2YXIgYT1jLkZlO2MuRmU9bnVsbDthKCl9fTtyZXR1cm4gZnVuY3Rpb24oYSl7ZC5uZXh0PXtGZTphfTtkPWQubmV4dDtiLnBvcnQyLnBvc3RNZXNzYWdlKDApfX1yZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKT9mdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpO1xuYi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsO2IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKTtiPW51bGw7YSgpO2E9bnVsbH07ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGIpfTpmdW5jdGlvbihhKXtkYS5zZXRUaW1lb3V0KGEsMCl9fTtmdW5jdGlvbiBQYSgpe3RoaXMuQmQ9dGhpcy5vYz1udWxsfXZhciBSYT1uZXcgd2EoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFFhfSxmdW5jdGlvbihhKXthLnJlc2V0KCl9LDEwMCk7UGEucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGIpe3ZhciBjPVJhLmdldCgpO2Muc2V0KGEsYik7dGhpcy5CZD90aGlzLkJkLm5leHQ9Yzp0aGlzLm9jPWM7dGhpcy5CZD1jfTtQYS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDt0aGlzLm9jJiYoYT10aGlzLm9jLHRoaXMub2M9dGhpcy5vYy5uZXh0LHRoaXMub2N8fCh0aGlzLkJkPW51bGwpLGEubmV4dD1udWxsKTtyZXR1cm4gYX07ZnVuY3Rpb24gUWEoKXt0aGlzLm5leHQ9dGhpcy5zY29wZT10aGlzLlRkPW51bGx9UWEucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3RoaXMuVGQ9YTt0aGlzLnNjb3BlPWI7dGhpcy5uZXh0PW51bGx9O1xuUWEucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuc2NvcGU9dGhpcy5UZD1udWxsfTtmdW5jdGlvbiBTYShhLGIpe1RhfHxVYSgpO1ZhfHwoVGEoKSxWYT0hMCk7V2EuYWRkKGEsYil9dmFyIFRhO2Z1bmN0aW9uIFVhKCl7aWYoLTEhPVN0cmluZyhkYS5Qcm9taXNlKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSl7dmFyIGE9ZGEuUHJvbWlzZS5yZXNvbHZlKHZvaWQgMCk7VGE9ZnVuY3Rpb24oKXthLnRoZW4oWGEpfX1lbHNlIFRhPWZ1bmN0aW9uKCl7dmFyIGE9WGE7IWphKGRhLnNldEltbWVkaWF0ZSl8fGRhLldpbmRvdyYmZGEuV2luZG93LnByb3RvdHlwZSYmIXQoXCJFZGdlXCIpJiZkYS5XaW5kb3cucHJvdG90eXBlLnNldEltbWVkaWF0ZT09ZGEuc2V0SW1tZWRpYXRlPyhNYXx8KE1hPU9hKCkpLE1hKGEpKTpkYS5zZXRJbW1lZGlhdGUoYSl9fXZhciBWYT0hMSxXYT1uZXcgUGE7ZnVuY3Rpb24gWGEoKXtmb3IodmFyIGE7YT1XYS5yZW1vdmUoKTspe3RyeXthLlRkLmNhbGwoYS5zY29wZSl9Y2F0Y2goYil7TGEoYil9UmEucHV0KGEpfVZhPSExfTtmdW5jdGlvbiB1KGEsYil7dGhpcy5UYT0wO3RoaXMubmY9dm9pZCAwO3RoaXMuVmM9dGhpcy5kYz10aGlzLkQ9bnVsbDt0aGlzLmVkPXRoaXMuUmQ9ITE7aWYoYSE9ZWEpdHJ5e3ZhciBjPXRoaXM7YS5jYWxsKGIsZnVuY3Rpb24oYSl7WWEoYywyLGEpfSxmdW5jdGlvbihhKXtZYShjLDMsYSl9KX1jYXRjaChkKXtZYSh0aGlzLDMsZCl9fWZ1bmN0aW9uIFphKCl7dGhpcy5uZXh0PXRoaXMuY29udGV4dD10aGlzLmljPXRoaXMuSWM9dGhpcy5jaGlsZD1udWxsO3RoaXMuRWQ9ITF9WmEucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5jb250ZXh0PXRoaXMuaWM9dGhpcy5JYz10aGlzLmNoaWxkPW51bGw7dGhpcy5FZD0hMX07dmFyICRhPW5ldyB3YShmdW5jdGlvbigpe3JldHVybiBuZXcgWmF9LGZ1bmN0aW9uKGEpe2EucmVzZXQoKX0sMTAwKTtmdW5jdGlvbiBhYihhLGIsYyl7dmFyIGQ9JGEuZ2V0KCk7ZC5JYz1hO2QuaWM9YjtkLmNvbnRleHQ9YztyZXR1cm4gZH1cbmZ1bmN0aW9uIHYoYSl7aWYoYSBpbnN0YW5jZW9mIHUpcmV0dXJuIGE7dmFyIGI9bmV3IHUoZWEpO1lhKGIsMixhKTtyZXR1cm4gYn1mdW5jdGlvbiBiYihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXtjKGEpfSl9ZnVuY3Rpb24gY2IoYSxiLGMpe2RiKGEsYixjLG51bGwpfHxTYShxYShiLGEpKX1mdW5jdGlvbiBlYihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXt2YXIgZD1hLmxlbmd0aCxlPVtdO2lmKGQpZm9yKHZhciBmPWZ1bmN0aW9uKGEsYyl7ZC0tO2VbYV09YzswPT1kJiZiKGUpfSxoPWZ1bmN0aW9uKGEpe2MoYSl9LGw9MCxwO2w8YS5sZW5ndGg7bCsrKXA9YVtsXSxjYihwLHFhKGYsbCksaCk7ZWxzZSBiKGUpfSl9ZnVuY3Rpb24gdygpe3ZhciBhLGIsYz1uZXcgdShmdW5jdGlvbihjLGUpe2E9YztiPWV9KTtyZXR1cm4gbmV3IGZiKGMsYSxiKX1cbnUucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBnYih0aGlzLGphKGEpP2E6bnVsbCxqYShiKT9iOm51bGwsYyl9O3UucHJvdG90eXBlLnRoZW49dS5wcm90b3R5cGUudGhlbjt1LnByb3RvdHlwZS4kZ29vZ19UaGVuYWJsZT0hMDt1LnByb3RvdHlwZS52ZT1mdW5jdGlvbihhLGIpe3JldHVybiBnYih0aGlzLG51bGwsYSxiKX07ZnVuY3Rpb24gaGIoYSxiKXthLmRjfHwyIT1hLlRhJiYzIT1hLlRhfHxpYihhKTthLlZjP2EuVmMubmV4dD1iOmEuZGM9YjthLlZjPWJ9XG5mdW5jdGlvbiBnYihhLGIsYyxkKXt2YXIgZT1hYihudWxsLG51bGwsbnVsbCk7ZS5jaGlsZD1uZXcgdShmdW5jdGlvbihhLGgpe2UuSWM9Yj9mdW5jdGlvbihjKXt0cnl7dmFyIGU9Yi5jYWxsKGQsYyk7YShlKX1jYXRjaChMKXtoKEwpfX06YTtlLmljPWM/ZnVuY3Rpb24oYil7dHJ5e3ZhciBlPWMuY2FsbChkLGIpOyFuKGUpJiZiIGluc3RhbmNlb2YgamI/aChiKTphKGUpfWNhdGNoKEwpe2goTCl9fTpofSk7ZS5jaGlsZC5EPWE7aGIoYSxlKTtyZXR1cm4gZS5jaGlsZH11LnByb3RvdHlwZS5RZz1mdW5jdGlvbihhKXt0aGlzLlRhPTA7WWEodGhpcywyLGEpfTt1LnByb3RvdHlwZS5SZz1mdW5jdGlvbihhKXt0aGlzLlRhPTA7WWEodGhpcywzLGEpfTtcbmZ1bmN0aW9uIFlhKGEsYixjKXswPT1hLlRhJiYoYT09PWMmJihiPTMsYz1uZXcgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW5ub3QgcmVzb2x2ZSB0byBpdHNlbGZcIikpLGEuVGE9MSxkYihjLGEuUWcsYS5SZyxhKXx8KGEubmY9YyxhLlRhPWIsYS5EPW51bGwsaWIoYSksMyE9Ynx8YyBpbnN0YW5jZW9mIGpifHxrYihhLGMpKSl9ZnVuY3Rpb24gZGIoYSxiLGMsZCl7aWYoYSBpbnN0YW5jZW9mIHUpcmV0dXJuIGhiKGEsYWIoYnx8ZWEsY3x8bnVsbCxkKSksITA7dmFyIGU7aWYoYSl0cnl7ZT0hIWEuJGdvb2dfVGhlbmFibGV9Y2F0Y2goaCl7ZT0hMX1lbHNlIGU9ITE7aWYoZSlyZXR1cm4gYS50aGVuKGIsYyxkKSwhMDtlPXR5cGVvZiBhO2lmKFwib2JqZWN0XCI9PWUmJm51bGwhPWF8fFwiZnVuY3Rpb25cIj09ZSl0cnl7dmFyIGY9YS50aGVuO2lmKGphKGYpKXJldHVybiBsYihhLGYsYixjLGQpLCEwfWNhdGNoKGgpe3JldHVybiBjLmNhbGwoZCxoKSwhMH1yZXR1cm4hMX1cbmZ1bmN0aW9uIGxiKGEsYixjLGQsZSl7ZnVuY3Rpb24gZihhKXtsfHwobD0hMCxkLmNhbGwoZSxhKSl9ZnVuY3Rpb24gaChhKXtsfHwobD0hMCxjLmNhbGwoZSxhKSl9dmFyIGw9ITE7dHJ5e2IuY2FsbChhLGgsZil9Y2F0Y2gocCl7ZihwKX19ZnVuY3Rpb24gaWIoYSl7YS5SZHx8KGEuUmQ9ITAsU2EoYS5WZixhKSl9ZnVuY3Rpb24gbWIoYSl7dmFyIGI9bnVsbDthLmRjJiYoYj1hLmRjLGEuZGM9Yi5uZXh0LGIubmV4dD1udWxsKTthLmRjfHwoYS5WYz1udWxsKTtyZXR1cm4gYn1cbnUucHJvdG90eXBlLlZmPWZ1bmN0aW9uKCl7Zm9yKHZhciBhO2E9bWIodGhpcyk7KXt2YXIgYj10aGlzLlRhLGM9dGhpcy5uZjtpZigzPT1iJiZhLmljJiYhYS5FZCl7dmFyIGQ7Zm9yKGQ9dGhpcztkJiZkLmVkO2Q9ZC5EKWQuZWQ9ITF9aWYoYS5jaGlsZClhLmNoaWxkLkQ9bnVsbCxuYihhLGIsYyk7ZWxzZSB0cnl7YS5FZD9hLkljLmNhbGwoYS5jb250ZXh0KTpuYihhLGIsYyl9Y2F0Y2goZSl7b2IuY2FsbChudWxsLGUpfSRhLnB1dChhKX10aGlzLlJkPSExfTtmdW5jdGlvbiBuYihhLGIsYyl7Mj09Yj9hLkljLmNhbGwoYS5jb250ZXh0LGMpOmEuaWMmJmEuaWMuY2FsbChhLmNvbnRleHQsYyl9ZnVuY3Rpb24ga2IoYSxiKXthLmVkPSEwO1NhKGZ1bmN0aW9uKCl7YS5lZCYmb2IuY2FsbChudWxsLGIpfSl9dmFyIG9iPUxhO2Z1bmN0aW9uIGpiKGEpe3JhLmNhbGwodGhpcyxhKX1yKGpiLHJhKTtqYi5wcm90b3R5cGUubmFtZT1cImNhbmNlbFwiO1xuZnVuY3Rpb24gZmIoYSxiLGMpe3RoaXMuaGE9YTt0aGlzLnJlc29sdmU9Yjt0aGlzLnJlamVjdD1jfTtmdW5jdGlvbiBwYihhLGIsYyxkKXtjPWN8fGZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PWJ9O2Q9ZHx8ZnVuY3Rpb24oYil7cmV0dXJuIGFbYl19O2Zvcih2YXIgZT1hLmxlbmd0aCxmPWIubGVuZ3RoLGg9W10sbD0wO2w8ZSsxO2wrKyloW2xdPVtdLGhbbF1bMF09MDtmb3IodmFyIHA9MDtwPGYrMTtwKyspaFswXVtwXT0wO2ZvcihsPTE7bDw9ZTtsKyspZm9yKHA9MTtwPD1mO3ArKyljKGFbbC0xXSxiW3AtMV0pP2hbbF1bcF09aFtsLTFdW3AtMV0rMTpoW2xdW3BdPU1hdGgubWF4KGhbbC0xXVtwXSxoW2xdW3AtMV0pO2Zvcih2YXIgTD1bXSxsPWUscD1mOzA8bCYmMDxwOyljKGFbbC0xXSxiW3AtMV0pPyhMLnVuc2hpZnQoZChsLTEscC0xKSksbC0tLHAtLSk6aFtsLTFdW3BdPmhbbF1bcC0xXT9sLS06cC0tO3JldHVybiBMfWZ1bmN0aW9uIHFiKGEpe3JldHVybiBBYShhcmd1bWVudHMsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYStjfSwwKX1cbmZ1bmN0aW9uIHJiKGEpe3JldHVybiBxYi5hcHBseShudWxsLGFyZ3VtZW50cykvYXJndW1lbnRzLmxlbmd0aH1mdW5jdGlvbiBzYihhKXt2YXIgYj1hcmd1bWVudHMubGVuZ3RoO2lmKDI+YilyZXR1cm4gMDt2YXIgYz1yYi5hcHBseShudWxsLGFyZ3VtZW50cyk7cmV0dXJuIHFiLmFwcGx5KG51bGwsemEoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnBvdyhhLWMsMil9KSkvKGItMSl9ZnVuY3Rpb24gdGIoYSl7cmV0dXJuIE1hdGguc3FydChzYi5hcHBseShudWxsLGFyZ3VtZW50cykpfTt2YXIgdWI9XCJTdG9wSXRlcmF0aW9uXCJpbiBkYT9kYS5TdG9wSXRlcmF0aW9uOnttZXNzYWdlOlwiU3RvcEl0ZXJhdGlvblwiLHN0YWNrOlwiXCJ9O2Z1bmN0aW9uIHZiKCl7fXZiLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dGhyb3cgdWI7fTt2Yi5wcm90b3R5cGUucGM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307ZnVuY3Rpb24gd2IoYSl7aWYoYSBpbnN0YW5jZW9mIHZiKXJldHVybiBhO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEucGMpcmV0dXJuIGEucGMoITEpO2lmKGhhKGEpKXt2YXIgYj0wLGM9bmV3IHZiO2MubmV4dD1mdW5jdGlvbigpe2Zvcig7Oyl7aWYoYj49YS5sZW5ndGgpdGhyb3cgdWI7aWYoYiBpbiBhKXJldHVybiBhW2IrK107YisrfX07cmV0dXJuIGN9dGhyb3cgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7fVxuZnVuY3Rpb24geGIoYSxiKXtpZihoYShhKSl0cnl7eWEoYSxiLHZvaWQgMCl9Y2F0Y2goYyl7aWYoYyE9PXViKXRocm93IGM7fWVsc2V7YT13YihhKTt0cnl7Zm9yKDs7KWIuY2FsbCh2b2lkIDAsYS5uZXh0KCksdm9pZCAwLGEpfWNhdGNoKGMpe2lmKGMhPT11Yil0aHJvdyBjO319fWZ1bmN0aW9uIHliKGEpe2lmKEJhKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtyZXR1cm4hYS5sZW5ndGh9KXx8IWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIG5ldyB2Yjt2YXIgYj1uZXcgdmIsYz1hcmd1bWVudHMsZD1EYShjLmxlbmd0aCk7Yi5uZXh0PWZ1bmN0aW9uKCl7aWYoZCl7Zm9yKHZhciBhPXphKGQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gY1tiXVthXX0pLGI9ZC5sZW5ndGgtMTswPD1iO2ItLSl7aWYoZFtiXTxjW2JdLmxlbmd0aC0xKXtkW2JdKys7YnJlYWt9aWYoMD09Yil7ZD1udWxsO2JyZWFrfWRbYl09MH1yZXR1cm4gYX10aHJvdyB1Yjt9O3JldHVybiBifTtmdW5jdGlvbiB6YihhLGIpe3RoaXMubD17fTt0aGlzLmE9W107dGhpcy5VYT10aGlzLkViPTA7dmFyIGM9YXJndW1lbnRzLmxlbmd0aDtpZigxPGMpe2lmKGMlMil0aHJvdyBFcnJvcihcIlVuZXZlbiBudW1iZXIgb2YgYXJndW1lbnRzXCIpO2Zvcih2YXIgZD0wO2Q8YztkKz0yKXRoaXMuc2V0KGFyZ3VtZW50c1tkXSxhcmd1bWVudHNbZCsxXSl9ZWxzZSBhJiZ0aGlzLmFkZEFsbChhKX1tPXpiLnByb3RvdHlwZTttLnpjPWcoXCJFYlwiKTttLnFhPWZ1bmN0aW9uKCl7QWIodGhpcyk7Zm9yKHZhciBhPVtdLGI9MDtiPHRoaXMuYS5sZW5ndGg7YisrKWEucHVzaCh0aGlzLmxbdGhpcy5hW2JdXSk7cmV0dXJuIGF9O2Z1bmN0aW9uIEJiKGEpe0FiKGEpO3JldHVybiBhLmEuY29uY2F0KCl9bS5QYT1mdW5jdGlvbihhKXtyZXR1cm4gRWIodGhpcy5sLGEpfTttLmpkPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMuRWJ9O1xubS5jbGVhcj1mdW5jdGlvbigpe3RoaXMubD17fTt0aGlzLlVhPXRoaXMuRWI9dGhpcy5hLmxlbmd0aD0wfTttLnJlbW92ZT1mdW5jdGlvbihhKXtyZXR1cm4gRWIodGhpcy5sLGEpPyhkZWxldGUgdGhpcy5sW2FdLHRoaXMuRWItLSx0aGlzLlVhKyssdGhpcy5hLmxlbmd0aD4yKnRoaXMuRWImJkFiKHRoaXMpLCEwKTohMX07ZnVuY3Rpb24gQWIoYSl7aWYoYS5FYiE9YS5hLmxlbmd0aCl7Zm9yKHZhciBiPTAsYz0wO2I8YS5hLmxlbmd0aDspe3ZhciBkPWEuYVtiXTtFYihhLmwsZCkmJihhLmFbYysrXT1kKTtiKyt9YS5hLmxlbmd0aD1jfWlmKGEuRWIhPWEuYS5sZW5ndGgpe2Zvcih2YXIgZT17fSxjPWI9MDtiPGEuYS5sZW5ndGg7KWQ9YS5hW2JdLEViKGUsZCl8fChhLmFbYysrXT1kLGVbZF09MSksYisrO2EuYS5sZW5ndGg9Y319bS5nZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gRWIodGhpcy5sLGEpP3RoaXMubFthXTpifTtcbm0uc2V0PWZ1bmN0aW9uKGEsYil7RWIodGhpcy5sLGEpfHwodGhpcy5FYisrLHRoaXMuYS5wdXNoKGEpLHRoaXMuVWErKyk7dGhpcy5sW2FdPWJ9O20uYWRkQWxsPWZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEgaW5zdGFuY2VvZiB6YiliPUJiKGEpLGE9YS5xYSgpO2Vsc2V7Yj1bXTt2YXIgYz0wLGQ7Zm9yKGQgaW4gYSliW2MrK109ZDthPUZhKGEpfWZvcihjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5zZXQoYltjXSxhW2NdKX07bS5mb3JFYWNoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPUJiKHRoaXMpLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPXRoaXMuZ2V0KGUpO2EuY2FsbChiLGYsZSx0aGlzKX19O20uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHpiKHRoaXMpfTtcbm0ucGM9ZnVuY3Rpb24oYSl7QWIodGhpcyk7dmFyIGI9MCxjPXRoaXMuVWEsZD10aGlzLGU9bmV3IHZiO2UubmV4dD1mdW5jdGlvbigpe2lmKGMhPWQuVWEpdGhyb3cgRXJyb3IoXCJUaGUgbWFwIGhhcyBjaGFuZ2VkIHNpbmNlIHRoZSBpdGVyYXRvciB3YXMgY3JlYXRlZFwiKTtpZihiPj1kLmEubGVuZ3RoKXRocm93IHViO3ZhciBlPWQuYVtiKytdO3JldHVybiBhP2U6ZC5sW2VdfTtyZXR1cm4gZX07ZnVuY3Rpb24gRWIoYSxiKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsYil9O2Z1bmN0aW9uIEZiKCl7cmV0dXJuIHQoXCJpUGhvbmVcIikmJiF0KFwiaVBvZFwiKSYmIXQoXCJpUGFkXCIpfTtmdW5jdGlvbiBHYihhLGIpe3ZhciBjPUhiO3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYyxhKT9jW2FdOmNbYV09YihhKX07dmFyIEliPXQoXCJPcGVyYVwiKSxKYj10KFwiVHJpZGVudFwiKXx8dChcIk1TSUVcIiksS2I9dChcIkVkZ2VcIiksTGI9dChcIkdlY2tvXCIpJiYhKC0xIT1HYS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJ3ZWJraXRcIikmJiF0KFwiRWRnZVwiKSkmJiEodChcIlRyaWRlbnRcIil8fHQoXCJNU0lFXCIpKSYmIXQoXCJFZGdlXCIpLE1iPS0xIT1HYS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJ3ZWJraXRcIikmJiF0KFwiRWRnZVwiKSxOYj10KFwiTWFjaW50b3NoXCIpLE9iPXQoXCJXaW5kb3dzXCIpLFBiPXQoXCJBbmRyb2lkXCIpLFFiPUZiKCksUmI9dChcImlQYWRcIiksU2I9dChcImlQb2RcIiksVGI7XG5hOnt2YXIgVWI9XCJcIixWYj1mdW5jdGlvbigpe3ZhciBhPUdhO2lmKExiKXJldHVybi9ydlxcOihbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKEtiKXJldHVybi9FZGdlXFwvKFtcXGRcXC5dKykvLmV4ZWMoYSk7aWYoSmIpcmV0dXJuL1xcYig/Ok1TSUV8cnYpWzogXShbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKE1iKXJldHVybi9XZWJLaXRcXC8oXFxTKykvLmV4ZWMoYSk7aWYoSWIpcmV0dXJuLyg/OlZlcnNpb24pWyBcXC9dPyhcXFMrKS8uZXhlYyhhKX0oKTtWYiYmKFViPVZiP1ZiWzFdOlwiXCIpO2lmKEpiKXt2YXIgV2IsWGI9ZGEuZG9jdW1lbnQ7V2I9WGI/WGIuZG9jdW1lbnRNb2RlOnZvaWQgMDtpZihudWxsIT1XYiYmV2I+cGFyc2VGbG9hdChVYikpe1RiPVN0cmluZyhXYik7YnJlYWsgYX19VGI9VWJ9dmFyIFliPVRiLEhiPXt9O2Z1bmN0aW9uIFpiKGEpe3JldHVybiBHYihhLGZ1bmN0aW9uKCl7cmV0dXJuIDA8PXVhKFliLGEpfSl9O3ZhciAkYj1mdW5jdGlvbigpe3ZhciBhO3JldHVybiBPYj8oYT0vV2luZG93cyBOVCAoWzAtOS5dKykvLChhPWEuZXhlYyhHYSkpP2FbMV06XCIwXCIpOk5iPyhhPS8xMFtfLl1bMC05Xy5dKy8sKGE9YS5leGVjKEdhKSk/YVswXS5yZXBsYWNlKC9fL2csXCIuXCIpOlwiMTBcIik6UGI/KGE9L0FuZHJvaWRcXHMrKFteXFwpO10rKShcXCl8OykvLChhPWEuZXhlYyhHYSkpP2FbMV06XCJcIik6UWJ8fFJifHxTYj8oYT0vKD86aVBob25lfENQVSlcXHMrT1NcXHMrKFxcUyspLywoYT1hLmV4ZWMoR2EpKT9hWzFdLnJlcGxhY2UoL18vZyxcIi5cIik6XCJcIik6XCJcIn0oKTt2YXIgYWM9RmIoKXx8dChcImlQb2RcIiksYmM9dChcImlQYWRcIik7LypcblxuIENvcHlyaWdodCAyMDE1IFRoZSBMb3ZlZmllbGQgUHJvamVjdCBBdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5mdW5jdGlvbiBjYygpe3ZhciBhOyEoYT1KYSgpJiYhWmIoMTApKSYmKGE9YmN8fGFjKSYmKGE9ISgwPD11YSgkYiwxMCkpKTt0aGlzLmFlPWE7dGhpcy5mZz0hKHRoaXMuYWV8fEpiJiYhWmIoMTApKTshSmJ8fFpiKDExKTt0aGlzLlVnPUthKCl8fEphKCk7dGhpcy51Zz1uKHdpbmRvdy5NYXApJiZuKHdpbmRvdy5NYXAucHJvdG90eXBlLnZhbHVlcykmJm4od2luZG93Lk1hcC5wcm90b3R5cGUuZm9yRWFjaCkmJiF0aGlzLmFlO3RoaXMudmc9bih3aW5kb3cuU2V0KSYmbih3aW5kb3cuU2V0LnByb3RvdHlwZS52YWx1ZXMpJiZuKHdpbmRvdy5TZXQucHJvdG90eXBlLmZvckVhY2gpJiYhdGhpcy5hZX12YXIgZGM7ZnVuY3Rpb24gZWMoKXtuKGRjKXx8KGRjPW5ldyBjYyk7cmV0dXJuIGRjfTtmdW5jdGlvbiB4KCl7dGhpcy5sPW5ldyB6YjtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubC56YygpfX0pfXgucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5sLmNsZWFyKCl9O3gucHJvdG90eXBlLmNsZWFyPXgucHJvdG90eXBlLmNsZWFyO3gucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sLnJlbW92ZShhKX07eC5wcm90b3R5cGVbXCJkZWxldGVcIl09eC5wcm90b3R5cGUuZGVsZXRlO3gucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5sLmZvckVhY2goYSxiKX07eC5wcm90b3R5cGUuZm9yRWFjaD14LnByb3RvdHlwZS5mb3JFYWNoO3gucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sLmdldChhKX07eC5wcm90b3R5cGUuZ2V0PXgucHJvdG90eXBlLmdldDt4LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubC5QYShhKX07XG54LnByb3RvdHlwZS5oYXM9eC5wcm90b3R5cGUuaGFzO3gucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmwuc2V0KGEsYil9O3gucHJvdG90eXBlLnNldD14LnByb3RvdHlwZS5zZXQ7dmFyIGZjPWVjKCkudWc7ZnVuY3Rpb24geSgpe3JldHVybiBmYz9uZXcgd2luZG93Lk1hcDpuZXcgeH1mdW5jdGlvbiBnYyhhKXtpZihhIGluc3RhbmNlb2YgeClyZXR1cm4gQmIoYS5sKTt2YXIgYj0wLGM9QXJyYXkoYS5zaXplKTthLmZvckVhY2goZnVuY3Rpb24oYSxlKXtjW2IrK109ZX0pO3JldHVybiBjfWZ1bmN0aW9uIHooYSl7aWYoYSBpbnN0YW5jZW9mIHgpcmV0dXJuIGEubC5xYSgpO3ZhciBiPTAsYz1BcnJheShhLnNpemUpO2EuZm9yRWFjaChmdW5jdGlvbihhKXtjW2IrK109YX0pO3JldHVybiBjfTsvKlxuXG4gQ29weXJpZ2h0IDIwMTQgVGhlIExvdmVmaWVsZCBQcm9qZWN0IEF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmZ1bmN0aW9uIGhjKGEsYil7dGhpcy5zYT1hO3RoaXMubT1ifHx0aGlzLktlKCl9dmFyIGljPTA7bT1oYy5wcm90b3R5cGU7bS5pZD1nKFwic2FcIik7bS5LZT1mdW5jdGlvbigpe3JldHVybnt9fTttLndmPWcoXCJtXCIpO20uSmE9ZnVuY3Rpb24oKXtyZXR1cm57aWQ6dGhpcy5zYSx2YWx1ZTp0aGlzLndmKCl9fTttLm5iPWZ1bmN0aW9uKGEpe3JldHVyblwiI1wiPT1hLnN1YnN0cigtMSk/dGhpcy5zYTpudWxsfTtmdW5jdGlvbiBqYyhhKXtyZXR1cm4gbmV3IGhjKGEuaWQsYS52YWx1ZSl9ZnVuY3Rpb24ga2MoYSl7cmV0dXJuIG5ldyBoYyhpYysrLGF8fHt9KX1mdW5jdGlvbiBsYyhhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2E9bmV3IFVpbnQ4QXJyYXkoYSk7Zm9yKHZhciBiPVwiXCIsYz0wO2M8YS5sZW5ndGg7KytjKXZhciBkPWFbY10udG9TdHJpbmcoMTYpLGI9YisoMj5kLmxlbmd0aD9cIjBcIitkOmQpO3JldHVybiBifTt2YXIgbWM9e307cShcImxmLlRyYW5zYWN0aW9uVHlwZVwiLG1jKTttYy5SRUFEX09OTFk9MDttYy5SRUFEX1dSSVRFPTE7ZnVuY3Rpb24gQShhLGIsYyxkLGUpe3RoaXMud2Q9YTt0aGlzLmpnPWI7dGhpcy5UZz1jO3RoaXMuUWY9ZDt0aGlzLkpmPWV9cShcImxmLlRyYW5zYWN0aW9uU3RhdHNcIixBKTtBLnByb3RvdHlwZS5PZz1nKFwid2RcIik7QS5wcm90b3R5cGUuc3VjY2Vzcz1BLnByb3RvdHlwZS5PZztBLnByb3RvdHlwZS5pZz1nKFwiamdcIik7QS5wcm90b3R5cGUuaW5zZXJ0ZWRSb3dDb3VudD1BLnByb3RvdHlwZS5pZztBLnByb3RvdHlwZS5TZz1nKFwiVGdcIik7QS5wcm90b3R5cGUudXBkYXRlZFJvd0NvdW50PUEucHJvdG90eXBlLlNnO0EucHJvdG90eXBlLlBmPWcoXCJRZlwiKTtBLnByb3RvdHlwZS5kZWxldGVkUm93Q291bnQ9QS5wcm90b3R5cGUuUGY7QS5wcm90b3R5cGUuSWY9ZyhcIkpmXCIpO0EucHJvdG90eXBlLmNoYW5nZWRUYWJsZUNvdW50PUEucHJvdG90eXBlLklmO2Z1bmN0aW9uIG5jKGEsYil7dGhpcy55ZD1hO3RoaXMuUmE9Ynx8bnVsbDt0aGlzLlM9dygpO3RoaXMud2Q9ITE7dGhpcy56YT1udWxsfW5jLnByb3RvdHlwZS5rYT1mdW5jdGlvbigpe3JldHVybigwPT10aGlzLnlkP3RoaXMuc2MoKTpvYyh0aGlzKSkudGhlbihmdW5jdGlvbihhKXt0aGlzLndkPSEwO3JldHVybiBhfS5iaW5kKHRoaXMpKX07ZnVuY3Rpb24gb2MoYSl7dHJ5e3BjKGEuUmEpfWNhdGNoKGIpe3JldHVybiBiYihiKX1yZXR1cm4gcWMoYSkudGhlbihmdW5jdGlvbihhKXt0aGlzLlJhLmthKCk7cmV0dXJuIGF9LmJpbmQoYSkpfWZ1bmN0aW9uIHFjKGEpe3JjKGEpO3NjKGEpO3JldHVybiBhLnNjKCl9XG5mdW5jdGlvbiByYyhhKXthLlJhLmliLmZvckVhY2goZnVuY3Rpb24oYSxjKXtjPXRoaXMuUmEuZGEoKS5nZXQoYyk7Yz10aGlzLkkoYy5nZXROYW1lKCksYy5rYi5iaW5kKGMpLDApO3ZhciBiPXooYS54YSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlkKCl9KTswPGIubGVuZ3RoJiZjLnJlbW92ZShiKS52ZSh0aGlzLlRlLHRoaXMpO2E9eihhLmxhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV19KS5jb25jYXQoeihhLndhKSk7Yy5wdXQoYSkudmUodGhpcy5UZSx0aGlzKX0sYSl9ZnVuY3Rpb24gc2MoYSl7dGMoYS5SYSkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLkkoYS5nZXROYW1lKCksamMsMSk7Yi5yZW1vdmUoW10pO2IucHV0KGEuSmEoKSl9LGEpfW5jLnByb3RvdHlwZS5UZT1mdW5jdGlvbihhKXt0aGlzLlMucmVqZWN0KGEpfTtcbm5jLnByb3RvdHlwZS5ZPWZ1bmN0aW9uKCl7aWYobnVsbD09PXRoaXMuemEpaWYodGhpcy53ZClpZigwPT10aGlzLnlkKXRoaXMuemE9bmV3IEEoITAsMCwwLDAsMCk7ZWxzZXt2YXIgYT0wLGI9MCxjPTAsZD0wO3RoaXMuUmEuaWIuZm9yRWFjaChmdW5jdGlvbihlKXtkKys7YSs9ZS53YS5zaXplO2MrPWUubGEuc2l6ZTtiKz1lLnhhLnNpemV9KTt0aGlzLnphPW5ldyBBKCEwLGEsYyxiLGQpfWVsc2UgdGhpcy56YT1uZXcgQSghMSwwLDAsMCwwKTtyZXR1cm4gdGhpcy56YX07ZnVuY3Rpb24gdWMoYSl7dGhpcy5MZz1hfXVjLnByb3RvdHlwZS50b1N0cmluZz1nKFwiTGdcIik7dmFyIHZjPW5ldyB1YyhcImJhY2tzdG9yZVwiKSx3Yz1uZXcgdWMoXCJjYWNoZVwiKSx4Yz1uZXcgdWMoXCJpbmRleHN0b3JlXCIpLHljPW5ldyB1YyhcImVuZ2luZVwiKSx6Yz1uZXcgdWMoXCJydW5uZXJcIiksQWM9bmV3IHVjKFwib2JzZXJ2ZXJyZWdpc3RyeVwiKSxCYz1uZXcgdWMoXCJzY2hlbWFcIik7ZnVuY3Rpb24gQ2MoYSl7aWYoYS5xYSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5xYSlyZXR1cm4gYS5xYSgpO2lmKGlhKGEpKXJldHVybiBhLnNwbGl0KFwiXCIpO2lmKGhhKGEpKXtmb3IodmFyIGI9W10sYz1hLmxlbmd0aCxkPTA7ZDxjO2QrKyliLnB1c2goYVtkXSk7cmV0dXJuIGJ9cmV0dXJuIEZhKGEpfTtmdW5jdGlvbiBEYyhhKXt0aGlzLmw9bmV3IHpiO2EmJnRoaXMuYWRkQWxsKGEpfWZ1bmN0aW9uIEVjKGEpe3ZhciBiPXR5cGVvZiBhO3JldHVyblwib2JqZWN0XCI9PWImJmF8fFwiZnVuY3Rpb25cIj09Yj9cIm9cIitrYShhKTpiLnN1YnN0cigwLDEpK2F9bT1EYy5wcm90b3R5cGU7bS56Yz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmwuemMoKX07bS5hZGQ9ZnVuY3Rpb24oYSl7dGhpcy5sLnNldChFYyhhKSxhKX07bS5hZGRBbGw9ZnVuY3Rpb24oYSl7YT1DYyhhKTtmb3IodmFyIGI9YS5sZW5ndGgsYz0wO2M8YjtjKyspdGhpcy5hZGQoYVtjXSl9O20ucmVtb3ZlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmwucmVtb3ZlKEVjKGEpKX07bS5jbGVhcj1mdW5jdGlvbigpe3RoaXMubC5jbGVhcigpfTttLmpkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubC5qZCgpfTttLmNvbnRhaW5zPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmwuUGEoRWMoYSkpfTttLnFhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubC5xYSgpfTtcbm0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERjKHRoaXMpfTttLnBjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubC5wYyghMSl9O2Z1bmN0aW9uIEZjKGEpe3RoaXMuWGI9bmV3IERjKGEpO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5YYi56YygpfX0pfUZjLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSl7dGhpcy5YYi5hZGQoYSl9O0ZjLnByb3RvdHlwZS5hZGQ9RmMucHJvdG90eXBlLmFkZDtGYy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLlhiLmNsZWFyKCl9O0ZjLnByb3RvdHlwZS5jbGVhcj1GYy5wcm90b3R5cGUuY2xlYXI7RmMucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5YYi5yZW1vdmUoYSl9O0ZjLnByb3RvdHlwZVtcImRlbGV0ZVwiXT1GYy5wcm90b3R5cGUuZGVsZXRlO0ZjLnByb3RvdHlwZS5mb3JFYWNoPWZ1bmN0aW9uKGEsYil7dGhpcy5YYi5xYSgpLmZvckVhY2goYSxiKX07RmMucHJvdG90eXBlLmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5YYi5jb250YWlucyhhKX07XG5GYy5wcm90b3R5cGUuaGFzPUZjLnByb3RvdHlwZS5oYXM7dmFyIEdjPWVjKCkudmc7ZnVuY3Rpb24gQihhKXtyZXR1cm4gR2M/bihhKT9uZXcgd2luZG93LlNldChhKTpuZXcgd2luZG93LlNldDpuZXcgRmMoYSl9ZnVuY3Rpb24gQyhhKXtpZihhIGluc3RhbmNlb2YgRmMpcmV0dXJuIGEuWGIucWEoKTt2YXIgYj0wLGM9QXJyYXkoYS5zaXplKTthLmZvckVhY2goZnVuY3Rpb24oYSl7Y1tiKytdPWF9KTtyZXR1cm4gY31mdW5jdGlvbiBIYyhhLGIpe2lmKGIuc2l6ZT5hLnNpemUpcmV0dXJuITE7dmFyIGM9ITA7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2M9YyYmYS5oYXMoYil9KTtyZXR1cm4gY307ZnVuY3Rpb24gSWMoYSxiKXt0aGlzLnNhPWE7dGhpcy5tPWJ8fHt9fWZ1bmN0aW9uIEpjKGEpe3ZhciBiPUIoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5hZGQoYT4+OSl9KTtyZXR1cm4gQyhiKX1JYy5wcm90b3R5cGUuVz1nKFwic2FcIik7ZnVuY3Rpb24gS2MoYSxiKXtiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5tW2EuaWQoKV09YS5KYSgpfSxhKX1mdW5jdGlvbiBMYyhhLGIpe2IuZm9yRWFjaChmdW5jdGlvbihhKXtkZWxldGUgdGhpcy5tW2FdfSxhKX1JYy5wcm90b3R5cGUuSmE9ZnVuY3Rpb24oKXtyZXR1cm57aWQ6dGhpcy5zYSx2YWx1ZTpKU09OLnN0cmluZ2lmeSh0aGlzLm0pfX07ZnVuY3Rpb24gTWMoYSl7cmV0dXJuIG5ldyBJYyhhLmlkLEpTT04ucGFyc2UoYS52YWx1ZSkpfTtmdW5jdGlvbiBOYyhhLGIsYyl7dGhpcy5aPWE7dGhpcy5HYj1iO3RoaXMucGY9Y31tPU5jLnByb3RvdHlwZTttLmdldD1mdW5jdGlvbihhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gdGhpcy5WZCgpO3ZhciBiPXRoaXMuR2I7cmV0dXJuIE9jKHRoaXMsYSkudGhlbihmdW5jdGlvbihjKXtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7dmFyIGQ9Yy5nZXQoYT4+OSk7cmV0dXJuIGIoZC5tW2FdKX0pfSl9O2Z1bmN0aW9uIE9jKGEsYil7dmFyIGM9eSgpLGQ9dygpO2E9SmMoYikubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGQpe3ZhciBlO3RyeXtlPXRoaXMuWi5nZXQoYSl9Y2F0Y2gocCl7ZChwKTtyZXR1cm59ZS5vbmVycm9yPWQ7ZS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oYSl7YT1NYyhhLnRhcmdldC5yZXN1bHQpO2Muc2V0KGEuVygpLGEpO2IoKX19LHRoaXMpfSxhKTtlYihhKS50aGVuKGZ1bmN0aW9uKCl7ZC5yZXNvbHZlKGMpfSk7cmV0dXJuIGQuaGF9XG5tLlZkPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZDt0cnl7ZD10aGlzLloub3BlbkN1cnNvcigpfWNhdGNoKGUpe2IoZSk7cmV0dXJufWQub25lcnJvcj1iO2Qub25zdWNjZXNzPWZ1bmN0aW9uKCl7dmFyIGI9ZC5yZXN1bHQ7aWYoYil7dmFyIGY9TWMoYi52YWx1ZSkubSxoO2ZvcihoIGluIGYpYy5wdXNoKHRoaXMuR2IoZltoXSkpO2IuY29udGludWUoKX1lbHNlIGEoYyl9LmJpbmQodGhpcyl9LHRoaXMpfTttLlRiPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe3ZhciBkO3RyeXtkPWEoKX1jYXRjaChlKXtjKGUpO3JldHVybn1kLm9uc3VjY2Vzcz1iO2Qub25lcnJvcj1jfSx0aGlzKX07XG5tLnB1dD1mdW5jdGlvbihhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gdigpO3ZhciBiPXkoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGM9YS5pZCgpPj45LGU9Yi5nZXQoYyl8fG51bGw7bnVsbD09PWUmJihlPXRoaXMucGYodGhpcy5aLm5hbWUsYykpO0tjKGUsW2FdKTtiLnNldChjLGUpfSx0aGlzKTthPXooYikubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlRiKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWi5wdXQoYS5KYSgpKX0uYmluZCh0aGlzKSl9LHRoaXMpO3JldHVybiBlYihhKX07XG5tLnJlbW92ZT1mdW5jdGlvbihhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gdGhpcy5UYihmdW5jdGlvbigpe3JldHVybiB0aGlzLlouY2xlYXIoKX0uYmluZCh0aGlzKSk7dmFyIGI9eSgpO2EuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYz1hPj45LGU9Yi5nZXQoYyl8fG51bGw7bnVsbD09PWUmJihlPXRoaXMucGYodGhpcy5aLm5hbWUsYykpO0xjKGUsW2FdKTtiLnNldChjLGUpfSx0aGlzKTthPXooYikubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlRiKGZ1bmN0aW9uKCl7cmV0dXJuIDA9PU9iamVjdC5rZXlzKGEubSkubGVuZ3RoP3RoaXMuWi5kZWxldGUoYS5XKCkpOnRoaXMuWi5wdXQoYS5KYSgpKX0uYmluZCh0aGlzKSl9LHRoaXMpO3JldHVybiBlYihhKX07ZnVuY3Rpb24gUGMoYSxiLGMpe2E9YS5iKHdjKTt2YXIgZD1bYzw8OSwoYysxPDw5KS0xXTtiPWEuVmEoYixkWzBdLGRbMV0pO2M9bmV3IEljKGMpO0tjKGMsYik7cmV0dXJuIGN9XG5mdW5jdGlvbiBRYyhhLGIpe3JldHVybiBuZXcgSWMoYil9O2Z1bmN0aW9uIFJjKGEpe3RoaXMuVj1hLmIod2MpO3RoaXMuQz1hLmIoeGMpO3RoaXMuZz1hLmIoQmMpfVJjLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oYSl7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe1NjKHRoaXMsYSk7VWModGhpcyxhKX0sdGhpcyl9O2Z1bmN0aW9uIFVjKGEsYil7dmFyIGM9Yi5nZXROYW1lKCk7Yi54YS5mb3JFYWNoKGZ1bmN0aW9uKGEsYil7dGhpcy5WLnJlbW92ZShjLGIpfSxhKTtiLndhLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5WLnNldChjLGEpfSxhKTtiLmxhLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5WLnNldChjLGFbMV0pfSxhKX1mdW5jdGlvbiBTYyhhLGIpe3ZhciBjPWEuZy50YWJsZShiLmdldE5hbWUoKSk7VmMoYikuZm9yRWFjaChmdW5jdGlvbihhKXtXYyh0aGlzLGMsYSl9LGEpfVxuZnVuY3Rpb24gV2MoYSxiLGMpe3ZhciBkPWEuQy5sYy5nZXQoYi5nZXROYW1lKCkpfHxbXSxlPTA7ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RyeXtYYyhhLGMpLGUrK31jYXRjaChoKXt0aHJvdyBkLnNsaWNlKDAsZSkuZm9yRWFjaChmdW5jdGlvbihhKXtYYyhhLFtjWzFdLGNbMF1dKX0sdGhpcyksaDt9fSxhKX1mdW5jdGlvbiBYYyhhLGIpe3ZhciBjPW51bGw9PT1iWzFdP3ZvaWQgMDpiWzFdLm5iKGEuZ2V0TmFtZSgpKSxkPW51bGw9PT1iWzBdP3ZvaWQgMDpiWzBdLm5iKGEuZ2V0TmFtZSgpKTtpZighbihkKSYmbihjKSlhLmFkZChjLGJbMV0uaWQoKSk7ZWxzZSBpZihuKGQpJiZuKGMpKXtpZihudWxsPT09Y3x8bnVsbD09PWQpe2lmKGM9PWQpcmV0dXJufWVsc2UgaWYoMD09YS5qYigpLmNvbXBhcmUoZCxjKSlyZXR1cm47YS5hZGQoYyxiWzFdLmlkKCkpO2EucmVtb3ZlKGQsYlswXS5pZCgpKX1lbHNlIG4oZCkmJiFuKGMpJiZhLnJlbW92ZShkLGJbMF0uaWQoKSl9O3ZhciBZYz17fTtxKFwibGYuQ29uc3RyYWludEFjdGlvblwiLFljKTtZYy5SRVNUUklDVD0wO1ljLkNBU0NBREU9MTt2YXIgWmM9e307cShcImxmLkNvbnN0cmFpbnRUaW1pbmdcIixaYyk7WmMuSU1NRURJQVRFPTA7WmMuREVGRVJSQUJMRT0xO3ZhciAkYz17fTtxKFwibGYuT3JkZXJcIiwkYyk7JGMuREVTQz0wOyRjLkFTQz0xO3ZhciBhZD17fTtxKFwibGYuVHlwZVwiLGFkKTthZC5BUlJBWV9CVUZGRVI9MDthZC5CT09MRUFOPTE7YWQuREFURV9USU1FPTI7YWQuSU5URUdFUj0zO2FkLk5VTUJFUj00O2FkLlNUUklORz01O2FkLk9CSkVDVD02O3ZhciBiZD17MDpudWxsLDE6ITEsMjpPYmplY3QuZnJlZXplKG5ldyBEYXRlKDApKSwzOjAsNDowLDU6XCJcIiw2Om51bGx9O3EoXCJsZi50eXBlLkRFRkFVTFRfVkFMVUVTXCIsYmQpO2Z1bmN0aW9uIEQoYSxiKXt0aGlzLmNvZGU9YTt0aGlzLm1lc3NhZ2U9XCJodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9sb3ZlZmllbGQvZXJyb3JfbG9va3VwL3NyYy9lcnJvcl9sb29rdXAuaHRtbD9jPVwiK2E7aWYoMTxhcmd1bWVudHMubGVuZ3RoKWZvcih2YXIgYz0xO2M8PU1hdGgubWluKDQsYXJndW1lbnRzLmxlbmd0aC0xKTsrK2MpdGhpcy5tZXNzYWdlKz1cIiZwXCIrKGMtMSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhhcmd1bWVudHNbY10pLnNsaWNlKDAsNjQpKX1yKEQsRXJyb3IpO2Z1bmN0aW9uIGNkKCl7dGhpcy5sPXkoKTt0aGlzLnNpemU9MH1tPWNkLnByb3RvdHlwZTttLmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sLmhhcyhhKX07bS5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmwuZ2V0KGEpfHxudWxsO251bGw9PT1jJiYoYz1CKCksdGhpcy5sLnNldChhLGMpKTtjLmhhcyhiKXx8KGMuYWRkKGIpLHRoaXMuc2l6ZSsrKTtyZXR1cm4gdGhpc307bS5XYj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubC5nZXQoYSl8fG51bGw7bnVsbD09PWMmJihjPUIoKSx0aGlzLmwuc2V0KGEsYykpO2IuZm9yRWFjaChmdW5jdGlvbihhKXtjLmhhcyhhKXx8KGMuYWRkKGEpLHRoaXMuc2l6ZSsrKX0sdGhpcyk7cmV0dXJuIHRoaXN9O20uYmU9ZnVuY3Rpb24oYSl7YS5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgYz1hLmdldChiKTt0aGlzLldiKGIsYyl9LHRoaXMpO3JldHVybiB0aGlzfTtcbm0uZGVsZXRlPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sLmdldChhKXx8bnVsbDtpZihudWxsPT09YylyZXR1cm4hMTtpZihiPWMuZGVsZXRlKGIpKS0tdGhpcy5zaXplLDA9PWMuc2l6ZSYmdGhpcy5sLmRlbGV0ZShhKTtyZXR1cm4gYn07bS5nZXQ9ZnVuY3Rpb24oYSl7YT10aGlzLmwuZ2V0KGEpfHxudWxsO3JldHVybiBudWxsPT09YT9udWxsOkMoYSl9O20uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmwuY2xlYXIoKTt0aGlzLnNpemU9MH07bS5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIGdjKHRoaXMubCl9O20udmFsdWVzPWZ1bmN0aW9uKCl7dmFyIGE9W107dGhpcy5sLmZvckVhY2goZnVuY3Rpb24oYil7YS5wdXNoLmFwcGx5KGEsQyhiKSl9KTtyZXR1cm4gYX07ZnVuY3Rpb24gZGQoYSl7dGhpcy5DPWEuYih4Yyk7dGhpcy5nPWEuYihCYyk7dGhpcy5WPWEuYih3Yyk7dGhpcy4kYz1udWxsfWZ1bmN0aW9uIGVkKGEsYixjKXt2YXIgZD1iLk1iLnhnO2MuZm9yRWFjaChmdW5jdGlvbihhKXtkLmZvckVhY2goZnVuY3Rpb24oYil7aWYobnVsbD09YS5tW2IuZ2V0TmFtZSgpXSl0aHJvdyBuZXcgRCgyMDIsYi5qKCkpO30sdGhpcyl9LGEpfWZ1bmN0aW9uIGZkKGEsYixjLGQpe2IuTWIuVWQuZm9yRWFjaChmdW5jdGlvbihhKXthLnRpbWluZz09ZCYmZ2QodGhpcyxhLGMpfSxhKX1mdW5jdGlvbiBnZChhLGIsYyl7dmFyIGQ9aGQoYSxiKTtjLmZvckVhY2goZnVuY3Rpb24oYSl7aWYoaWQoYVswXSxhWzFdLGIubmFtZSkmJihhPWFbMV0ubmIoYi5uYW1lKSxudWxsIT09YSYmIWQuUGEoYSkpKXRocm93IG5ldyBEKDIwMyxiLm5hbWUpO30sYSl9XG5mdW5jdGlvbiBoZChhLGIpe251bGw9PT1hLiRjJiYoYS4kYz15KCkpO3ZhciBjPWEuJGMuZ2V0KGIubmFtZSl8fG51bGw7bnVsbD09PWMmJihjPWEuZy50YWJsZShiLlhhKVtiLkpjXS5DYSgpLGM9YS5DLmdldChjLmooKSksYS4kYy5zZXQoYi5uYW1lLGMpKTtyZXR1cm4gY31mdW5jdGlvbiBpZChhLGIsYyl7cmV0dXJuKG51bGw9PT1hP251bGwhPT1iOm51bGw9PT1iKXx8YS5uYihjKSE9Yi5uYihjKX1mdW5jdGlvbiBqZChhLGIsYyxkKXtiPWtkKGEuZy5pbmZvKCksYi5nZXROYW1lKCksMCk7bnVsbCE9PWImJihiPWIuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWluZz09ZH0pLDAhPWIubGVuZ3RoJiZsZChhLGIsYyxmdW5jdGlvbihhLGIsYyl7aWYoYi5QYShjKSl0aHJvdyBuZXcgRCgyMDMsYS5uYW1lKTt9KSl9XG5mdW5jdGlvbiBtZChhLGIsYyl7Yj1rZChhLmcuaW5mbygpLGIuZ2V0TmFtZSgpLDEpO2lmKG51bGw9PT1iKXJldHVybiBudWxsO3ZhciBkPW5ldyBjZDtsZChhLGIsYyxmdW5jdGlvbihhLGIsYyl7Yj1iLmdldChjKTswPGIubGVuZ3RoJiZkLldiKGEuR2UsYil9KTtyZXR1cm4gZH1mdW5jdGlvbiBuZChhLGIsYyl7dmFyIGQ9bmV3IGNkO2xkKGEsYyxiLGZ1bmN0aW9uKGEsYixjLGwpe2IuZ2V0KGMpLmZvckVhY2goZnVuY3Rpb24oYil7ZC5zZXQoYix7U2Q6YSxDZzpsWzFdfSl9KX0pO3JldHVybiBkfWZ1bmN0aW9uIGxkKGEsYixjLGQpe2IuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLkMuZ2V0KGEubmFtZSksZT1oZCh0aGlzLGEpO2MuZm9yRWFjaChmdW5jdGlvbihjKXtpZihpZChjWzBdLGNbMV0sZS5nZXROYW1lKCkpKXt2YXIgZj1jWzBdLm5iKGUuZ2V0TmFtZSgpKTtkKGEsYixmLGMpfX0sdGhpcyl9LGEpfVxuZnVuY3Rpb24gb2QoYSxiLGMsZCl7MCE9Yy5sZW5ndGgmJihjPWMubWFwKGZ1bmN0aW9uKGEpe3JldHVybltudWxsLGFdfSksZmQoYSxiLGMsZCkpfWZ1bmN0aW9uIHBkKGEsYixjLGQpezAhPWMubGVuZ3RoJiYoZmQoYSxiLGMsZCksamQoYSxiLGMsZCkpfWZ1bmN0aW9uIHFkKGEsYixjLGQpezAhPWMubGVuZ3RoJiYoYz1jLm1hcChmdW5jdGlvbihhKXtyZXR1cm5bYSxudWxsXX0pLGpkKGEsYixjLGQpKX1cbmZ1bmN0aW9uIHJkKGEsYixjKXt2YXIgZD17dWU6W10scmY6bmV3IGNkfSxlPW5ldyBjZDtlLldiKGIuZ2V0TmFtZSgpLGMubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlkKCl9KSk7ZG97dmFyIGY9bmV3IGNkO2Uua2V5cygpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nLnRhYmxlKGEpO2E9ZS5nZXQoYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVyblt0aGlzLlYuZ2V0KGEpLG51bGxdfSx0aGlzKTtiPW1kKHRoaXMsYixhKTtudWxsIT09YiYmKGQudWUudW5zaGlmdC5hcHBseShkLnVlLGIua2V5cygpKSxmLmJlKGIpKX0sYSk7ZT1mO2QucmYuYmUoZSl9d2hpbGUoMDxlLnNpemUpO3JldHVybiBkfTtmdW5jdGlvbiBzZChhKXt0aGlzLndhPXkoKTt0aGlzLmxhPXkoKTt0aGlzLnhhPXkoKTt0aGlzLkE9YX1tPXNkLnByb3RvdHlwZTttLmdldE5hbWU9ZyhcIkFcIik7bS5hZGQ9ZnVuY3Rpb24oYSl7aWYodGhpcy54YS5oYXMoYS5pZCgpKSl7dmFyIGI9W3RoaXMueGEuZ2V0KGEuaWQoKSksYV07dGhpcy5sYS5zZXQoYS5pZCgpLGIpO3RoaXMueGEuZGVsZXRlKGEuaWQoKSl9ZWxzZSB0aGlzLndhLnNldChhLmlkKCksYSl9O20ubW9kaWZ5PWZ1bmN0aW9uKGEpe3ZhciBiPWFbMV0sYz1hWzBdLmlkKCk7dGhpcy53YS5oYXMoYyk/dGhpcy53YS5zZXQoYyxiKToodGhpcy5sYS5oYXMoYykmJihhPVt0aGlzLmxhLmdldChhWzBdLmlkKCkpWzBdLGJdKSx0aGlzLmxhLnNldChjLGEpKX07XG5tLmRlbGV0ZT1mdW5jdGlvbihhKXtpZih0aGlzLndhLmhhcyhhLmlkKCkpKXRoaXMud2EuZGVsZXRlKGEuaWQoKSk7ZWxzZSBpZih0aGlzLmxhLmhhcyhhLmlkKCkpKXt2YXIgYj10aGlzLmxhLmdldChhLmlkKCkpWzBdO3RoaXMubGEuZGVsZXRlKGEuaWQoKSk7dGhpcy54YS5zZXQoYS5pZCgpLGIpfWVsc2UgdGhpcy54YS5zZXQoYS5pZCgpLGEpfTttLmJlPWZ1bmN0aW9uKGEpe2Eud2EuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLmFkZChhKX0sdGhpcyk7YS5sYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMubW9kaWZ5KGEpfSx0aGlzKTthLnhhLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5kZWxldGUoYSl9LHRoaXMpfTtcbmZ1bmN0aW9uIFZjKGEpe3ZhciBiPVtdO2Eud2EuZm9yRWFjaChmdW5jdGlvbihhKXtiLnB1c2goW251bGwsYV0pfSk7YS5sYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pO2EueGEuZm9yRWFjaChmdW5jdGlvbihhKXtiLnB1c2goW2EsbnVsbF0pfSk7cmV0dXJuIGJ9bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiW1wiK2djKHRoaXMud2EpLnRvU3RyaW5nKCkrXCJdLCBbXCIrZ2ModGhpcy5sYSkudG9TdHJpbmcoKStcIl0sIFtcIitnYyh0aGlzLnhhKS50b1N0cmluZygpK1wiXVwifTtmdW5jdGlvbiB0ZChhKXt2YXIgYj1uZXcgc2QoYS5BKTthLndhLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5kZWxldGUoYSl9KTthLnhhLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5hZGQoYSl9KTthLmxhLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5tb2RpZnkoW2FbMV0sYVswXV0pfSk7cmV0dXJuIGJ9XG5tLmpkPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMud2Euc2l6ZSYmMD09dGhpcy54YS5zaXplJiYwPT10aGlzLmxhLnNpemV9O2Z1bmN0aW9uIHVkKGEsYil7dGhpcy5hYT15KCk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuYWEuc2V0KGEuZ2V0TmFtZSgpLGEpfSx0aGlzKTt0aGlzLmc9YS5iKEJjKTt0aGlzLlY9YS5iKHdjKTt0aGlzLkM9YS5iKHhjKTt0aGlzLkFhPW5ldyBkZChhKTt0aGlzLmdkPW5ldyBSYyhhKTt0aGlzLmliPXkoKX1mdW5jdGlvbiB0YyhhKXt2YXIgYj1bXTtnYyhhLmliKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWEuZ2V0KGEpfSxhKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuQ2IoKSYmKGEuRGEoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IucHVzaCh0aGlzLkMuZ2V0KGEuaigpKSl9LHRoaXMpLGIucHVzaCh0aGlzLkMuZ2V0KGEuZ2V0TmFtZSgpK1wiLiNcIikpKX0sYSk7cmV0dXJuIGJ9bT11ZC5wcm90b3R5cGU7bS5kYT1nKFwiYWFcIik7XG5tLkFiPWZ1bmN0aW9uKGEsYil7dmQodGhpcyxhKTtlZCh0aGlzLkFhLGEsYik7b2QodGhpcy5BYSxhLGIsMCk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspd2QodGhpcyxhLFtudWxsLGJbY11dKX07ZnVuY3Rpb24gd2QoYSxiLGMpe3ZhciBkPWIuZ2V0TmFtZSgpLGU9YS5pYi5nZXQoZCl8fG5ldyBzZChkKTthLmliLnNldChkLGUpO3RyeXtXYyhhLmdkLGIsYyl9Y2F0Y2goaCl7dGhyb3cgaDt9Yj1jWzBdO3ZhciBmPWNbMV07bnVsbD09PWImJm51bGwhPT1mPyhhLlYuc2V0KGQsZiksZS5hZGQoZikpOm51bGwhPT1iJiZudWxsIT09Zj8oYS5WLnNldChkLGYpLGUubW9kaWZ5KGMpKTpudWxsIT09YiYmbnVsbD09PWYmJihhLlYucmVtb3ZlKGQsYi5pZCgpKSxlLmRlbGV0ZShiKSl9XG5tLnVwZGF0ZT1mdW5jdGlvbihhLGIpe3ZkKHRoaXMsYSk7ZWQodGhpcy5BYSxhLGIpO2I9Yi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuW3RoaXMuVi5nZXQoYS5pZCgpKSxhXX0sdGhpcyk7eGQodGhpcyxhLGIpO3BkKHRoaXMuQWEsYSxiLDApO2IuZm9yRWFjaChmdW5jdGlvbihiKXt3ZCh0aGlzLGEsYil9LHRoaXMpfTttLldkPWZ1bmN0aW9uKGEsYil7dmQodGhpcyxhKTtlZCh0aGlzLkFhLGEsYik7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY10sZT1udWxsLGYsaD1hLk1iLnNkO2lmKG51bGw9PT1oKWY9bnVsbDtlbHNle2Y9dGhpcy5BYTt2YXIgaD1oLmooKSxsPWQubmIoaCk7Zj1mLkMuZ2V0KGgpLmdldChsKTtmPTA9PWYubGVuZ3RoP251bGw6ZlswXX1udWxsIT1mPyhlPXRoaXMuVi5nZXQoZiksZC5zYT1mLHBkKHRoaXMuQWEsYSxbW2UsZF1dLDApKTpvZCh0aGlzLkFhLGEsW2RdLDApO3dkKHRoaXMsYSxbZSxkXSl9fTtcbm0ucmVtb3ZlPWZ1bmN0aW9uKGEsYil7dmQodGhpcyxhKTt5ZCh0aGlzLGEsYik7cWQodGhpcy5BYSxhLGIsMCk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspd2QodGhpcyxhLFtiW2NdLG51bGxdKX07ZnVuY3Rpb24geGQoYSxiLGMpe2I9a2QoYS5nLmluZm8oKSxiLmdldE5hbWUoKSwxKTtpZihudWxsIT09Yil7dmFyIGQ9bmQoYS5BYSxjLGIpO2Qua2V5cygpLmZvckVhY2goZnVuY3Rpb24oYSl7ZC5nZXQoYSkuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgYz10aGlzLmcudGFibGUoYi5TZC5HZSksZD10aGlzLlYuZ2V0KGEpLGU9Yy5rYihkLkphKCkpO2UubVtiLlNkLnZiXT1iLkNnLm1bYi5TZC5KY107d2QodGhpcyxjLFtkLGVdKX0sdGhpcyl9LGEpfX1cbmZ1bmN0aW9uIHlkKGEsYixjKXtpZihudWxsIT09a2QoYS5nLmluZm8oKSxiLmdldE5hbWUoKSwxKSl7Yj1yZChhLkFhLGIsYyk7dmFyIGQ9Yi5yZjtiLnVlLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nLnRhYmxlKGEpO2E9ZC5nZXQoYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlYuZ2V0KGEpfSx0aGlzKTtxZCh0aGlzLkFhLGIsYSwwKTthLmZvckVhY2goZnVuY3Rpb24oYSl7d2QodGhpcyxiLFthLG51bGxdKX0sdGhpcyl9LGEpfX1mdW5jdGlvbiBwYyhhKXthLmliLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hYS5nZXQoYS5nZXROYW1lKCkpO29kKHRoaXMuQWEsYix6KGEud2EpLDEpO3FkKHRoaXMuQWEsYix6KGEueGEpLDEpO3BkKHRoaXMuQWEsYix6KGEubGEpLDEpfSxhKX1tLmthPWFhKCk7bS5KYj1mdW5jdGlvbigpe3ZhciBhPXoodGhpcy5pYikubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0ZChhKX0pO3RoaXMuZ2QudXBkYXRlKGEpfTtcbmZ1bmN0aW9uIHZkKGEsYil7aWYoIWEuYWEuaGFzKGIuZ2V0TmFtZSgpKSl0aHJvdyBuZXcgRCgxMDYsYi5nZXROYW1lKCkpO307ZnVuY3Rpb24gRShhLGIsYyxkKXt0aGlzLmZyb209YTt0aGlzLm89Yjt0aGlzLmVhPXRoaXMuZnJvbT09Rj8hMTpjO3RoaXMubmE9dGhpcy5vPT1GPyExOmR9dmFyIEY9bmV3IChhYSgpKTtFLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybih0aGlzLmVhP1wiKFwiOlwiW1wiKSsodGhpcy5mcm9tPT1GP1widW5ib3VuZFwiOnRoaXMuZnJvbSkrXCIsIFwiKyh0aGlzLm89PUY/XCJ1bmJvdW5kXCI6dGhpcy5vKSsodGhpcy5uYT9cIilcIjpcIl1cIil9O2Z1bmN0aW9uIHpkKGEpe2lmKEFkKGEpKXJldHVybltdO3ZhciBiPW51bGwsYz1udWxsO2EuZnJvbT09Rnx8KGI9bmV3IEUoRixhLmZyb20sITEsIWEuZWEpKTthLm89PUZ8fChjPW5ldyBFKGEubyxGLCFhLm5hLCExKSk7cmV0dXJuW2IsY10uZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09YX0pfUUucHJvdG90eXBlLnJldmVyc2U9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IEUodGhpcy5vLHRoaXMuZnJvbSx0aGlzLm5hLHRoaXMuZWEpfTtcbmZ1bmN0aW9uIEJkKGEsYil7dmFyIGM9Q2QoYS5mcm9tLGIuZnJvbSwhMCxhLmVhLGIuZWEpO2lmKDA9PWMpcmV0dXJuITA7dmFyIGQ9LTE9PWM/YTpiO2E9MT09Yz9hOmI7cmV0dXJuIGQubz09Rnx8ZC5vPmEuZnJvbXx8ZC5vPT1hLmZyb20mJiFkLm5hJiYhYS5lYX1mdW5jdGlvbiBEZCgpe3JldHVybiBuZXcgRShGLEYsITEsITEpfWZ1bmN0aW9uIEFkKGEpe3JldHVybiBhLmZyb209PUYmJmEubz09Rn1mdW5jdGlvbiBFZChhKXtyZXR1cm4gYS5mcm9tPT1hLm8mJmEuZnJvbSE9RiYmIWEuZWEmJiFhLm5hfUUucHJvdG90eXBlLmNvbnRhaW5zPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubz09Rnx8YTx0aGlzLm98fGE9PXRoaXMubyYmIXRoaXMubmE7cmV0dXJuKHRoaXMuZnJvbT09Rnx8YT50aGlzLmZyb218fGE9PXRoaXMuZnJvbSYmIXRoaXMuZWEpJiZifTtcbmZ1bmN0aW9uIENkKGEsYixjLGQsZSl7ZnVuY3Rpb24gZihhKXtyZXR1cm4gYz9hOjE9PWE/LTE6MX1kPWR8fCExO2U9ZXx8ITE7cmV0dXJuIGE9PUY/Yj09Rj8oZD8hZTplKT9kP2YoMSk6ZigtMSk6MDpmKC0xKTpiPT1GP2YoMSk6YTxiPy0xOmE9PWI/KGQ/IWU6ZSk/ZD9mKDEpOmYoLTEpOjA6MX1mdW5jdGlvbiBGZChhLGIpe3ZhciBjPUNkKGEuZnJvbSxiLmZyb20sITAsYS5lYSxiLmVhKTswPT1jJiYoYz1DZChhLm8sYi5vLCExLGEubmEsYi5uYSkpO3JldHVybiBjfWZ1bmN0aW9uIEdkKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybltdO2Euc29ydChGZCk7Zm9yKHZhciBiPUFycmF5KGEubGVuZ3RoKzEpLGM9MDtjPGIubGVuZ3RoO2MrKyliW2NdPTA9PWM/bmV3IEUoRixhW2NdLmZyb20sITEsITApOmM9PWIubGVuZ3RoLTE/bmV3IEUoYVtjLTFdLm8sRiwhMCwhMSk6bmV3IEUoYVtjLTFdLm8sYVtjXS5mcm9tLCEwLCEwKTtyZXR1cm4gYn07ZnVuY3Rpb24gSGQoYSl7dGhpcy5rYz1bXTtuKGEpJiZ0aGlzLmFkZChhKX1IZC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5rYy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEudG9TdHJpbmcoKX0pLmpvaW4oXCIsXCIpfTtIZC5wcm90b3R5cGUuUGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMua2Muc29tZShmdW5jdGlvbihiKXtyZXR1cm4gYi5jb250YWlucyhhKX0pfTtIZC5wcm90b3R5cGUucWE9ZyhcImtjXCIpO1xuSGQucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhKXtpZigwIT1hLmxlbmd0aClpZihhPXRoaXMua2MuY29uY2F0KGEpLDE9PWEubGVuZ3RoKXRoaXMua2M9YTtlbHNle2Euc29ydChGZCk7Zm9yKHZhciBiPVtdLGM9YVswXSxkPTE7ZDxhLmxlbmd0aDsrK2QpaWYoQmQoYyxhW2RdKSl7dmFyIGU9YVtkXSxmPURkKCk7aWYoYy5mcm9tIT1GJiZlLmZyb20hPUYpe3ZhciBoPUNkKGMuZnJvbSxlLmZyb20sITApOzEhPWg/KGYuZnJvbT1jLmZyb20sZi5lYT0wIT1oP2MuZWE6Yy5lYSYmZS5lYSk6KGYuZnJvbT1lLmZyb20sZi5lYT1lLmVhKX1jLm8hPUYmJmUubyE9RiYmKGg9Q2QoYy5vLGUubywhMSksLTEhPWg/KGYubz1jLm8sZi5uYT0wIT1oP2MubmE6Yy5uYSYmZS5uYSk6KGYubz1lLm8sZi5uYT1lLm5hKSk7Yz1mfWVsc2UgYi5wdXNoKGMpLGM9YVtkXTtiLnB1c2goYyk7dGhpcy5rYz1ifX07XG5mdW5jdGlvbiBJZChhLGIpe3ZhciBjPVtdO2EucWEoKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGIucWEoKS5tYXAoZnVuY3Rpb24oYil7dmFyIGM7aWYoQmQoYSxiKSl7Yz1EZCgpO3ZhciBkPUNkKGEuZnJvbSxiLmZyb20sITApLGQ9MD09ZD9hLmVhP2E6YjotMSE9ZD9hOmI7Yy5mcm9tPWQuZnJvbTtjLmVhPWQuZWE7YS5vPT1GfHxiLm89PUY/Yj1hLm89PUY/YjphOihkPUNkKGEubyxiLm8sITEpLGI9MD09ZD9hLm5hP2E6YjotMT09ZD9hOmIpO2Mubz1iLm87Yy5uYT1iLm5hfWVsc2UgYz1udWxsO3JldHVybiBjfSl9KS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2M9Yy5jb25jYXQoYSl9KTtyZXR1cm4gbmV3IEhkKGMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09YX0pKX07ZnVuY3Rpb24gRyhhLGIpe3RoaXMuZW50cmllcz1hO3RoaXMuTT1CKGIpO3RoaXMuJGE9bnVsbH1HLnByb3RvdHlwZS51PWZ1bmN0aW9uKCl7cmV0dXJuIEModGhpcy5NKX07ZnVuY3Rpb24gSmQoYSl7cmV0dXJuIGEuZW50cmllcy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEudmEubX0pfWZ1bmN0aW9uIEtkKGEpe3JldHVybiBhLmVudHJpZXMubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhLmlkKCl9KX1mdW5jdGlvbiBMZChhLGIpe3JldHVybiBhLiRhLmdldChiLmooKSl9dmFyIE1kPW51bGw7ZnVuY3Rpb24gTmQoKXtudWxsPT09TWQmJihNZD1uZXcgRyhbXSxbXSkpO3JldHVybiBNZH1cbmZ1bmN0aW9uIE9kKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiBOZCgpO2Zvcih2YXIgYj1hLnJlZHVjZShmdW5jdGlvbihhLGIpe3JldHVybiBhK2IuZW50cmllcy5sZW5ndGh9LDApLGM9QXJyYXkoYiksZD0wLGI9YS5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9eSgpO2EuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2NbZCsrXT1hO2Iuc2V0KGEuaWQsYSl9KTtyZXR1cm4gYn0pLGU9eSgpLGY9MDtmPGMubGVuZ3RoO2YrKyliLmV2ZXJ5KGZ1bmN0aW9uKGEpe3JldHVybiBhLmhhcyhjW2ZdLmlkKX0pJiZlLnNldChjW2ZdLmlkLGNbZl0pO3JldHVybiBuZXcgRyh6KGUpLEMoYVswXS5NKSl9ZnVuY3Rpb24gUGQoYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIE5kKCk7dmFyIGI9eSgpO2EuZm9yRWFjaChmdW5jdGlvbihhKXthLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXtiLnNldChhLmlkLGEpfSl9KTtyZXR1cm4gbmV3IEcoeihiKSxDKGFbMF0uTSkpfVxuZnVuY3Rpb24gUWQoYSxiKXt2YXIgYz0xPGIubGVuZ3RoO2E9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSZChhLGMpfSk7cmV0dXJuIG5ldyBHKGEsYil9ZnVuY3Rpb24gUmQoYSxiKXt0aGlzLnZhPWE7dGhpcy5pZD1TZCsrO3RoaXMuWWQ9Yn12YXIgU2Q9MDtmdW5jdGlvbiBIKGEsYil7dmFyIGM9Yi5LYTtyZXR1cm4gbnVsbCE9PWMmJmEudmEubS5oYXNPd25Qcm9wZXJ0eShjKT9hLnZhLm1bY106YS5ZZD9hLnZhLm1bVGQoYi5JKCkpXVtiLmdldE5hbWUoKV06YS52YS5tW2IuZ2V0TmFtZSgpXX1mdW5jdGlvbiBVZChhLGIsYyl7dmFyIGQ9Yi5LYTtpZihudWxsIT1kKWEudmEubVtkXT1jO2Vsc2UgaWYoYS5ZZCl7dmFyIGQ9VGQoYi5JKCkpLGU9YS52YS5tW2RdO251bGw9PWUmJihlPXt9LGEudmEubVtkXT1lKTtlW2IuZ2V0TmFtZSgpXT1jfWVsc2UgYS52YS5tW2IuZ2V0TmFtZSgpXT1jfVxuZnVuY3Rpb24gVmQoYSxiLGMsZCl7ZnVuY3Rpb24gZShhLGIpe2lmKGEuWWQpe2E9YS52YS5tO2Zvcih2YXIgYyBpbiBhKWZbY109YVtjXX1lbHNlIGZbYlswXV09YS52YS5tfXZhciBmPXt9O2UoYSxiKTtlKGMsZCk7YT1uZXcgaGMoLTEsZik7cmV0dXJuIG5ldyBSZChhLCEwKX07cShcImxmLmJpbmRcIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFdkKGEpfSk7ZnVuY3Rpb24gV2QoYSl7dGhpcy5mYT1hfXEoXCJsZi5CaW5kZXJcIixXZCk7V2QucHJvdG90eXBlLkNhPWcoXCJmYVwiKTtmdW5jdGlvbiBYZCgpe3RoaXMuWmU9WWQoKTt2YXIgYT1aZCgpO3RoaXMuT2I9eSgpO3RoaXMuT2Iuc2V0KDEsJGQoKSk7dGhpcy5PYi5zZXQoMixhZSgpKTt0aGlzLk9iLnNldCg0LGEpO3RoaXMuT2Iuc2V0KDMsYSk7dGhpcy5PYi5zZXQoNSxiZSgpKTt0aGlzLk9iLnNldCg2LGNlKCkpfXZhciBkZTtmdW5jdGlvbiBlZSgpe251bGwhPWRlfHwoZGU9bmV3IFhkKTtyZXR1cm4gZGV9ZnVuY3Rpb24gZmUoYSxiLGMpe2E9YS5PYi5nZXQoYil8fG51bGw7aWYobnVsbD09PWEpdGhyb3cgbmV3IEQoNTUwKTtjPWEuZ2V0KGMpfHxudWxsO2lmKG51bGw9PT1jKXRocm93IG5ldyBEKDU1MCk7cmV0dXJuIGN9XG5mdW5jdGlvbiBZZCgpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGF9dmFyIGI9eSgpO2Iuc2V0KDEsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hP251bGw6YT8xOjB9KTtiLnNldCgyLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YT9udWxsOmEuZ2V0VGltZSgpfSk7Yi5zZXQoMyxhKTtiLnNldCg0LGEpO2Iuc2V0KDUsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gJGQoKXt2YXIgYT15KCk7YS5zZXQoXCJlcVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGE9PWN9KTthLnNldChcIm5lcVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGEhPWN9KTtyZXR1cm4gYX1cbmZ1bmN0aW9uIFpkKCl7dmFyIGE9JGQoKTthLnNldChcImJldHdlZW5cIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWNbMF18fG51bGw9PT1jWzFdPyExOmE+PWNbMF0mJmE8PWNbMV19KTthLnNldChcImd0ZVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphPj1jfSk7YS5zZXQoXCJndFwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphPmN9KTthLnNldChcImluXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4tMSE9Yy5pbmRleE9mKGEpfSk7YS5zZXQoXCJsdGVcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YTw9Y30pO2Euc2V0KFwibHRcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YTxjfSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBiZSgpe3ZhciBhPVpkKCk7YS5zZXQoXCJtYXRjaFwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMToobmV3IFJlZ0V4cChjKSkudGVzdChhKX0pO3JldHVybiBhfWZ1bmN0aW9uIGNlKCl7dmFyIGE9eSgpO2Euc2V0KFwiZXFcIixmdW5jdGlvbihhLGMpe2lmKG51bGwhPT1jKXRocm93IG5ldyBEKDU1MCk7cmV0dXJuIG51bGw9PT1hfSk7YS5zZXQoXCJuZXFcIixmdW5jdGlvbihhLGMpe2lmKG51bGwhPT1jKXRocm93IG5ldyBEKDU1MCk7cmV0dXJuIG51bGwhPT1hfSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBhZSgpe3ZhciBhPXkoKTthLnNldChcImJldHdlZW5cIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWNbMF18fG51bGw9PT1jWzFdPyExOmEuZ2V0VGltZSgpPj1jWzBdLmdldFRpbWUoKSYmYS5nZXRUaW1lKCk8PWNbMV0uZ2V0VGltZSgpfSk7YS5zZXQoXCJlcVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuKG51bGw9PT1hPy0xOmEuZ2V0VGltZSgpKT09KG51bGw9PT1jPy0xOmMuZ2V0VGltZSgpKX0pO2Euc2V0KFwiZ3RlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmEuZ2V0VGltZSgpPj1jLmdldFRpbWUoKX0pO2Euc2V0KFwiZ3RcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YS5nZXRUaW1lKCk+Yy5nZXRUaW1lKCl9KTthLnNldChcImluXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYy5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiBiLmdldFRpbWUoKT09YS5nZXRUaW1lKCl9KX0pO2Euc2V0KFwibHRlXCIsXG5mdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YS5nZXRUaW1lKCk8PWMuZ2V0VGltZSgpfSk7YS5zZXQoXCJsdFwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphLmdldFRpbWUoKTxjLmdldFRpbWUoKX0pO2Euc2V0KFwibmVxXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4obnVsbD09PWE/LTE6YS5nZXRUaW1lKCkpIT0obnVsbD09PWM/LTE6Yy5nZXRUaW1lKCkpfSk7cmV0dXJuIGF9O2Z1bmN0aW9uIEkoKXt0aGlzLmg9dGhpcy5EPW51bGx9dmFyIGdlPVtdO0kucHJvdG90eXBlLmdldFBhcmVudD1nKFwiRFwiKTtJLnByb3RvdHlwZS5iYj1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzO251bGwhPT1hLmdldFBhcmVudCgpOylhPWEuZ2V0UGFyZW50KCk7cmV0dXJuIGF9O2Z1bmN0aW9uIGhlKGEpe2Zvcih2YXIgYj0wO251bGwhPT1hLmdldFBhcmVudCgpOyliKyssYT1hLmdldFBhcmVudCgpO3JldHVybiBifWZ1bmN0aW9uIEooYSl7cmV0dXJuIGEuaHx8Z2V9ZnVuY3Rpb24gaWUoYSxiKXtyZXR1cm4gSihhKVtiXXx8bnVsbH1mdW5jdGlvbiBqZShhLGIsYyl7Yi5EPWE7bnVsbD09PWEuaD9hLmg9W2JdOmEuaC5zcGxpY2UoYywwLGIpfWZ1bmN0aW9uIEsoYSxiKXtiLkQ9YTtudWxsPT09YS5oP2EuaD1bYl06YS5oLnB1c2goYil9XG5mdW5jdGlvbiBrZShhLGIpe3ZhciBjPWEuaCYmYS5oW2JdO3JldHVybiBjPyhjLkQ9bnVsbCxhLmguc3BsaWNlKGIsMSksMD09YS5oLmxlbmd0aCYmKGEuaD1udWxsKSxjKTpudWxsfUkucHJvdG90eXBlLnJlbW92ZUNoaWxkPWZ1bmN0aW9uKGEpe3JldHVybiBrZSh0aGlzLEoodGhpcykuaW5kZXhPZihhKSl9O2Z1bmN0aW9uIGxlKGEsYixjKXtpZShhLGMpLkQ9bnVsbDtiLkQ9YTthLmhbY109Yn1mdW5jdGlvbiBtZShhLGIsYyl7ITEhPT1iLmNhbGwoYyxhKSYmSihhKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe21lKGEsYixjKX0pfTtmdW5jdGlvbiBuZSgpe0kuY2FsbCh0aGlzKTt0aGlzLnNhPXBlKyt9cihuZSxJKTt2YXIgcGU9MDtuZS5wcm90b3R5cGUuVz1nKFwic2FcIik7ZnVuY3Rpb24gcWUoYSxiLGMpe25lLmNhbGwodGhpcyk7dGhpcy5KPWE7dGhpcy52YWx1ZT1iO3RoaXMuRj1jO3RoaXMudmM9ZmUoZWUoKSx0aGlzLkouRygpLHRoaXMuRik7dGhpcy5XYT0hMTt0aGlzLmNjPWJ9cihxZSxuZSk7bT1xZS5wcm90b3R5cGU7bS5OYj1mdW5jdGlvbigpe3ZhciBhPW5ldyBxZSh0aGlzLkosdGhpcy52YWx1ZSx0aGlzLkYpO2EuY2M9dGhpcy5jYzthLnZkKHRoaXMuV2EpO3ZhciBiPXRoaXMuVygpO2Euc2E9YjtyZXR1cm4gYX07bS5sYj1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8oYS5wdXNoKHRoaXMuSiksYSk6W3RoaXMuSl19O20udT1mdW5jdGlvbihhKXthPW51bGwhPWE/YTpCKCk7YS5hZGQodGhpcy5KLkkoKSk7cmV0dXJuIGF9O20udmQ9YmEoXCJXYVwiKTtcbmZ1bmN0aW9uIHJlKGEpe3ZhciBiPSExO2EudmFsdWUgaW5zdGFuY2VvZiBXZHx8KGI9XCJhcnJheVwiPT1mYShhLnZhbHVlKT8hYS52YWx1ZS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgV2R9KTohMCk7aWYoIWIpdGhyb3cgbmV3IEQoNTAxKTt9bS5ldmFsPWZ1bmN0aW9uKGEpe3JlKHRoaXMpO2lmKFwiaW5cIj09dGhpcy5GKXJldHVybiBzZSh0aGlzLGEpO3ZhciBiPWEuZW50cmllcy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudmMoSChhLHRoaXMuSiksdGhpcy52YWx1ZSkhPXRoaXMuV2F9LHRoaXMpO3JldHVybiBuZXcgRyhiLGEudSgpKX07XG5tLmJpbmQ9ZnVuY3Rpb24oYSl7aWYodGhpcy5jYyBpbnN0YW5jZW9mIFdkKXt2YXIgYj10aGlzLmNjLkNhKCk7aWYoYS5sZW5ndGg8PWIpdGhyb3cgbmV3IEQoNTEwKTt0aGlzLnZhbHVlPWFbYl19ZWxzZVwiYXJyYXlcIj09ZmEodGhpcy5jYykmJih0aGlzLnZhbHVlPXRoaXMuY2MubWFwKGZ1bmN0aW9uKGIpe2lmKGIgaW5zdGFuY2VvZiBXZCl7dmFyIGM9Yi5DYSgpO2lmKGEubGVuZ3RoPD1jKXRocm93IG5ldyBEKDUxMCk7cmV0dXJuIGFbYi5DYSgpXX1yZXR1cm4gYn0pKX07ZnVuY3Rpb24gc2UoYSxiKXt2YXIgYz1CKGEudmFsdWUpLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hPyExOmMuaGFzKGEpIT10aGlzLldhfS5iaW5kKGEpO2E9Yi5lbnRyaWVzLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gZChIKGEsdGhpcy5KKSl9LGEpO3JldHVybiBuZXcgRyhhLGIudSgpKX1cbm0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cInZhbHVlX3ByZWQoXCIrdGhpcy5KLmooKStcIiBcIit0aGlzLkYrKHRoaXMuV2E/XCIoY29tcGxlbWVudClcIjpcIlwiKStcIiBcIit0aGlzLnZhbHVlK1wiKVwifTttLmxkPWZ1bmN0aW9uKCl7cmUodGhpcyk7cmV0dXJuIG51bGwhPT10aGlzLnZhbHVlJiYoXCJiZXR3ZWVuXCI9PXRoaXMuRnx8XCJpblwiPT10aGlzLkZ8fFwiZXFcIj09dGhpcy5GfHxcImd0XCI9PXRoaXMuRnx8XCJndGVcIj09dGhpcy5GfHxcImx0XCI9PXRoaXMuRnx8XCJsdGVcIj09dGhpcy5GKX07XG5tLndlPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDtpZihcImJldHdlZW5cIj09dGhpcy5GKWE9bmV3IEUodGUodGhpcyx0aGlzLnZhbHVlWzBdKSx0ZSh0aGlzLHRoaXMudmFsdWVbMV0pLCExLCExKTtlbHNle2lmKFwiaW5cIj09dGhpcy5GKXJldHVybiBhPXRoaXMudmFsdWUubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgRShhLGEsITEsITEpfSksbmV3IEhkKHRoaXMuV2E/R2QoYSk6YSk7YT10ZSh0aGlzLHRoaXMudmFsdWUpO2E9XCJlcVwiPT10aGlzLkY/bmV3IEUoYSxhLCExLCExKTpcImd0ZVwiPT10aGlzLkY/bmV3IEUoYSxGLCExLCExKTpcImd0XCI9PXRoaXMuRj9uZXcgRShhLEYsITAsITEpOlwibHRlXCI9PXRoaXMuRj9uZXcgRShGLGEsITEsITEpOm5ldyBFKEYsYSwhMSwhMCl9cmV0dXJuIG5ldyBIZCh0aGlzLldhP3pkKGEpOlthXSl9O2Z1bmN0aW9uIHRlKGEsYil7cmV0dXJuIDI9PWEuSi5HKCk/Yi5nZXRUaW1lKCk6Yn07ZnVuY3Rpb24gdWUoYSl7dGhpcy5iYT1hO3RoaXMuV2M9dGhpcy5HYT1udWxsfWZ1bmN0aW9uIHZlKGEsYil7bnVsbD09PWEuR2EmJm51bGwhPWEudyYmKGEuR2E9d2UoYS53KSk7cmV0dXJuIGEuR2EuZ2V0KGIpfHxudWxsfWZ1bmN0aW9uIHdlKGEpe3ZhciBiPXkoKTttZShhLGZ1bmN0aW9uKGEpe2Iuc2V0KGEuVygpLGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24geGUoYSxiKXtiLncmJihhLnc9Yi53Lk5iKCkpO2EuV2M9Yn11ZS5wcm90b3R5cGUuYmluZD1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtmdW5jdGlvbiB5ZShhLGIpe2E9YS53O251bGwhPWEmJm1lKGEsZnVuY3Rpb24oYSl7YSBpbnN0YW5jZW9mIHFlJiZhLmJpbmQoYil9KX07ZnVuY3Rpb24gemUoYSl7dWUuY2FsbCh0aGlzLGEpfXIoemUsdWUpO2Z1bmN0aW9uIEFlKGEpe3ZhciBiPVwiXCI7YS5mb3JFYWNoKGZ1bmN0aW9uKGMsZCl7Yis9Yy5KLmooKStcIiBcIjtiKz0xPT1jLm9yZGVyP1wiQVNDXCI6XCJERVNDXCI7ZDxhLmxlbmd0aC0xJiYoYis9XCIsIFwiKX0pO3JldHVybiBifXplLnByb3RvdHlwZS5kYT1mdW5jdGlvbigpe3JldHVybiBCKHRoaXMuZnJvbSl9O3plLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBhPW5ldyB6ZSh0aGlzLmJhKTt4ZShhLHRoaXMpO3RoaXMuZiYmKGEuZj10aGlzLmYuc2xpY2UoKSk7dGhpcy5mcm9tJiYoYS5mcm9tPXRoaXMuZnJvbS5zbGljZSgpKTthLlg9dGhpcy5YO2EuTD10aGlzLkw7dGhpcy5OJiYoYS5OPXRoaXMuTi5zbGljZSgpKTt0aGlzLnJhJiYoYS5yYT10aGlzLnJhLnNsaWNlKCkpO3RoaXMuU2ImJihhLlNiPXRoaXMuU2IpO3RoaXMuWmImJihhLlpiPXRoaXMuWmIpO2EuZWI9dGhpcy5lYjtyZXR1cm4gYX07XG56ZS5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXt6ZS5oYi5iaW5kLmNhbGwodGhpcyxhKTtudWxsIT10aGlzLlNiJiYodGhpcy5YPWFbdGhpcy5TYi5DYSgpXSk7bnVsbCE9dGhpcy5aYiYmKHRoaXMuTD1hW3RoaXMuWmIuQ2EoKV0pO3llKHRoaXMsYSk7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIEJlKGEsYil7dGhpcy5IYT1hO3RoaXMuYWE9Yn1CZS5wcm90b3R5cGUuYmI9ZyhcIkhhXCIpO0JlLnByb3RvdHlwZS5kYT1nKFwiYWFcIik7ZnVuY3Rpb24gQ2UoYSl7dmFyIGI9QigpO2EuZm9yRWFjaChmdW5jdGlvbihhKXthLmRhKCkuZm9yRWFjaChiLmFkZC5iaW5kKGIpKX0pO3JldHVybiBifTtmdW5jdGlvbiBEZShhLGIpe3RoaXMuZ2xvYmFsPWE7dGhpcy5PYT1hLmIodmMpO3RoaXMudGQ9Yi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGV4dH0pO3RoaXMuamY9Yi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuamV9KTt0aGlzLk1kPUNlKHRoaXMuamYpO3RoaXMueGU9RWUodGhpcyk7dGhpcy5EYj13KCl9ZnVuY3Rpb24gRWUoYSl7cmV0dXJuIGEudGQuc29tZShmdW5jdGlvbihhKXtyZXR1cm4hKGEgaW5zdGFuY2VvZiB6ZSl9KT8xOjB9bT1EZS5wcm90b3R5cGU7XG5tLmV4ZWM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dmFyIGY9ZC5zaGlmdCgpO2lmKGYpe3ZhciBoPWVbYy5sZW5ndGhdO3JldHVybiBmLmJiKCkuZXhlYyhiLGgpLnRoZW4oZnVuY3Rpb24oYil7Yy5wdXNoKGJbMF0pO3JldHVybiBhKCl9KX1yZXR1cm4gdigpfXZhciBiPTA9PXRoaXMueGU/dm9pZCAwOm5ldyB1ZCh0aGlzLmdsb2JhbCx0aGlzLk1kKSxjPVtdLGQ9dGhpcy5qZi5zbGljZSgpLGU9dGhpcy50ZDtyZXR1cm4gYSgpLnRoZW4oZnVuY3Rpb24oKXt0aGlzLmphPXRoaXMuT2EuRmIodGhpcy54ZSxDKHRoaXMuTWQpLGIpO3JldHVybiB0aGlzLmphLmthKCl9LmJpbmQodGhpcykpLnRoZW4oZnVuY3Rpb24oKXt0aGlzLmdlKGMpO3JldHVybiBjfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGEpe251bGwhPWImJmIuSmIoKTt0aHJvdyBhO30pfTttLkc9ZyhcInhlXCIpO20uZGE9ZyhcIk1kXCIpO20uVz1mdW5jdGlvbigpe3JldHVybiBrYSh0aGlzKX07bS5nZT1hYSgpO1xubS5ZPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDtudWxsIT10aGlzLmphJiYoYT10aGlzLmphLlkoKSk7cmV0dXJuIG51bGw9PT1hP25ldyBBKCExLDAsMCwwLDApOmF9O2Z1bmN0aW9uIEZlKGEsYil7RGUuY2FsbCh0aGlzLGEsYik7dGhpcy5JYj1hLmIoQWMpfXIoRmUsRGUpO0ZlLnByb3RvdHlwZS5nZXRQcmlvcml0eT1rKDApO0ZlLnByb3RvdHlwZS5nZT1mdW5jdGlvbihhKXt0aGlzLnRkLmZvckVhY2goZnVuY3Rpb24oYixjKXtHZSh0aGlzLkliLGIsYVtjXSl9LHRoaXMpfTtmdW5jdGlvbiBIZShhLGIpe3RoaXMuYz1hO3RoaXMuSWI9YS5iKEFjKTt0aGlzLklhPWEuYih6Yyk7dGhpcy5nZD1uZXcgUmMoYSk7dGhpcy5pYj1iO3ZhciBjPWEuYihCYyk7YT10aGlzLmliLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYy50YWJsZShhLmdldE5hbWUoKSl9KTt0aGlzLmFhPUIoYSk7dGhpcy5EYj13KCl9bT1IZS5wcm90b3R5cGU7bS5leGVjPWZ1bmN0aW9uKCl7dGhpcy5nZC51cGRhdGUodGhpcy5pYik7dGhpcy5NYygpO3JldHVybiB2KCl9O20uRz1rKDEpO20uZGE9ZyhcImFhXCIpO20uVz1mdW5jdGlvbigpe3JldHVybiBrYSh0aGlzKX07bS5nZXRQcmlvcml0eT1rKDEpO20uTWM9ZnVuY3Rpb24oKXt2YXIgYT1JZSh0aGlzLkliLHRoaXMuYWEpOzAhPWEubGVuZ3RoJiYoYT1uZXcgRmUodGhpcy5jLGEpLEplKHRoaXMuSWEsYSkpfTtmdW5jdGlvbiBLZShhKXt0aGlzLmM9YTt0aGlzLk9hPWEuYih2Yyk7dGhpcy5JYT1hLmIoemMpfUtlLnByb3RvdHlwZS5lZT1mdW5jdGlvbihhKXthPW5ldyBIZSh0aGlzLmMsYSk7SmUodGhpcy5JYSxhKX07ZnVuY3Rpb24gTShhLGIpe3RoaXMuVWE9YTt0aGlzLmk9Yjt0aGlzLlphPXkoKX1xKFwibGYuYmFja3N0b3JlLkZpcmViYXNlUmF3QmFja1N0b3JlXCIsTSk7TS5wcm90b3R5cGUuY2Q9ZyhcImlcIik7TS5wcm90b3R5cGUuZGQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRCgzNTEpO307ZnVuY3Rpb24gTGUoYSxiKXt2YXIgYz13KCksZD1hO2IubGVuZ3RoJiYoZD1hLmNoaWxkKGIpKTtkLm9uY2UoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEpe2MucmVzb2x2ZShhLnZhbCgpKX0sZnVuY3Rpb24oYSl7Yy5yZWplY3QoYSl9KTtyZXR1cm4gYy5oYX1mdW5jdGlvbiBNZShhLGIsYyl7ZnVuY3Rpb24gZChhKXthP2UucmVqZWN0KGEpOmUucmVzb2x2ZSgpfWM9Y3x8ITE7dmFyIGU9dygpO2M/YS5zZXQoYixkKTphLnVwZGF0ZShiLGQpO3JldHVybiBlLmhhfVxuTS5wcm90b3R5cGUuRWE9ZnVuY3Rpb24oYSl7cmV0dXJuIExlKHRoaXMuaSxcIkByZXYvUlwiKS50aGVuKGZ1bmN0aW9uKGEpe3RoaXMuU2E9YTtyZXR1cm4gTGUodGhpcy5pLFwiQHRhYmxlXCIpfS5iaW5kKHRoaXMpKS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPTAsZDtmb3IoZCBpbiBiKXRoaXMuWmEuc2V0KGQsYltkXSksYltkXT5jJiYoYz1iW2RdKTthLm9hKCkuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLlphLmhhcyhhLmdldE5hbWUoKSl8fChiW2EuZ2V0TmFtZSgpXT0rK2MpfSx0aGlzKTtkPXRoaXMuaS5jaGlsZChcIkB0YWJsZVwiKTtyZXR1cm4gTWUoZCxiKX0uYmluZCh0aGlzKSl9O1xuZnVuY3Rpb24gTmUoYSxiLGMpe3ZhciBkPWEuWmEuZ2V0KGIpO3JldHVybiBudWxsIT1kP2Z1bmN0aW9uKCl7dmFyIGE9e30sYj13KCk7dGhpcy5pLm9yZGVyQnlDaGlsZChcIlRcIikuZXF1YWxUbyhkKS5vbmNlKFwidmFsdWVcIixmdW5jdGlvbihkKXtkLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9YyhiLnZhbCgpKTthW3BhcnNlSW50KGIua2V5KCksMTApXT1kfSk7Yi5yZXNvbHZlKGEpfSk7cmV0dXJuIGIuaGF9LmNhbGwoYSkudGhlbihmdW5jdGlvbihhKXthW1wiQHJldlwiXT17UjorK3RoaXMuU2F9O3JldHVybiBNZSh0aGlzLmksYSl9LmJpbmQoYSkpOnYoKX1NLnByb3RvdHlwZS50Yz1mdW5jdGlvbihhKXtyZXR1cm4gTmUodGhpcyxhLGsobnVsbCkpLnRoZW4oZnVuY3Rpb24oKXt0aGlzLlphLmRlbGV0ZShhKTtyZXR1cm4gTWUodGhpcy5pLmNoaWxkKFwiQHRhYmxlL1wiK2EpLG51bGwsITApfS5iaW5kKHRoaXMpKX07TS5wcm90b3R5cGUuZHJvcFRhYmxlPU0ucHJvdG90eXBlLnRjO1xuTS5wcm90b3R5cGUucWM9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBOZSh0aGlzLGEsZnVuY3Rpb24oYSl7dmFyIGQ9YS5QO2RbYl09YztyZXR1cm57Ujp0aGlzLlNhKzEsVDphLlQsUDpkfX0uYmluZCh0aGlzKSl9O00ucHJvdG90eXBlLmFkZFRhYmxlQ29sdW1uPU0ucHJvdG90eXBlLnFjO00ucHJvdG90eXBlLnVjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIE5lKHRoaXMsYSxmdW5jdGlvbihhKXt2YXIgYz1hLlA7ZGVsZXRlIGNbYl07cmV0dXJue1I6dGhpcy5TYSsxLFQ6YS5ULFA6Y319LmJpbmQodGhpcykpfTtNLnByb3RvdHlwZS5kcm9wVGFibGVDb2x1bW49TS5wcm90b3R5cGUudWM7TS5wcm90b3R5cGUuTGM9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBOZSh0aGlzLGEsZnVuY3Rpb24oYSl7dmFyIGQ9YS5QO2RbY109ZFtiXTtkZWxldGUgZFtiXTtyZXR1cm57Ujp0aGlzLlNhKzEsVDphLlQsUDpkfX0uYmluZCh0aGlzKSl9O00ucHJvdG90eXBlLnJlbmFtZVRhYmxlQ29sdW1uPU0ucHJvdG90eXBlLkxjO1xuTS5wcm90b3R5cGUueGI9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRCgzNTEpO307TS5wcm90b3R5cGUuY3JlYXRlUm93PU0ucHJvdG90eXBlLnhiO00ucHJvdG90eXBlLkNjPWcoXCJVYVwiKTtNLnByb3RvdHlwZS5nZXRWZXJzaW9uPU0ucHJvdG90eXBlLkNjO00ucHJvdG90eXBlLmVjPWZ1bmN0aW9uKGEpe3ZhciBiPXcoKTthPXRoaXMuWmEuZ2V0KGEpO3RoaXMuaS5vcmRlckJ5Q2hpbGQoXCJUXCIpLmVxdWFsVG8oYSkub25jZShcInZhbHVlXCIsZnVuY3Rpb24oYSl7dmFyIGM9W107YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2MucHVzaChhLnZhbCgpLlApfSk7Yi5yZXNvbHZlKGMpfSk7cmV0dXJuIGIuaGF9O00ucHJvdG90eXBlLmR1bXA9ZnVuY3Rpb24oKXt2YXIgYT17fSxiPWdjKHRoaXMuWmEpLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5lYyhiKS50aGVuKGZ1bmN0aW9uKGMpe2FbYl09Y30pfS5iaW5kKHRoaXMpKTtyZXR1cm4gZWIoYikudGhlbihmdW5jdGlvbigpe3JldHVybiBhfSl9O1xuTS5wcm90b3R5cGUuZHVtcD1NLnByb3RvdHlwZS5kdW1wO2Z1bmN0aW9uIE9lKGEsYixjKXtuYy5jYWxsKHRoaXMsYixjKTt0aGlzLmk9YX1yKE9lLG5jKTtPZS5wcm90b3R5cGUuST1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pLkFjKGEpfTtcbk9lLnByb3RvdHlwZS5zYz1mdW5jdGlvbigpe2lmKDA9PXRoaXMueWQpcmV0dXJuIHRoaXMuUy5yZXNvbHZlKCksdGhpcy5TLmhhO3ZhciBhPXRoaXMuUmEuaWI7aWYoMD09YS5zaXplKXRoaXMuUy5yZXNvbHZlKCk7ZWxzZXt2YXIgYj10aGlzLmkuU2ErMTt0aGlzLmkuU2E9Yjt2YXIgYz17XCJAcmV2XCI6e1I6Yn19O2EuZm9yRWFjaChmdW5jdGlvbihhLGUpe3ZhciBkPXRoaXMuaS5aYS5nZXQoZSk7YS53YS5mb3JFYWNoKGZ1bmN0aW9uKGEsZSl7Y1tlXT17UjpiLFQ6ZCxQOmEubX19KTthLmxhLmZvckVhY2goZnVuY3Rpb24oYSxlKXtjW2VdPXtSOmIsVDpkLFA6YVsxXS5tfX0pO2EueGEuZm9yRWFjaChmdW5jdGlvbihhLGIpe2NbYl09bnVsbH0pfSx0aGlzKTt0aGlzLmkuaS51cGRhdGUoYyxmdW5jdGlvbihjKXtudWxsPT09Yz90aGlzLlMucmVzb2x2ZSgpOih0aGlzLmkuU2E9Yi0xLGM9eihhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIFBlKHRoaXMuaSxhLmdldE5hbWUoKSl9LHRoaXMpLFxuZWIoYykudGhlbih0aGlzLlMucmVqZWN0LmJpbmQodGhpcy5TKSx0aGlzLlMucmVqZWN0LmJpbmQodGhpcy5TKSkpfS5iaW5kKHRoaXMpKX1yZXR1cm4gdGhpcy5TLmhhfTtmdW5jdGlvbiBRZSgpe3RoaXMuQmE9eSgpfWZ1bmN0aW9uIFJlKGEsYil7aWYoMD09Yi5sZW5ndGgpcmV0dXJuIHooYS5CYSk7dmFyIGM9W107Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9dGhpcy5CYS5nZXQoYSl8fG51bGw7bnVsbD09PWF8fGMucHVzaChhKX0sYSk7cmV0dXJuIGN9UWUucHJvdG90eXBlLmdldERhdGE9ZyhcIkJhXCIpO1FlLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoUmUodGhpcyxhKSl9O2Z1bmN0aW9uIFNlKGEsYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuQmEuc2V0KGEuaWQoKSxhKX0sYSl9UWUucHJvdG90eXBlLnB1dD1mdW5jdGlvbihhKXtTZSh0aGlzLGEpO3JldHVybiB2KCl9O2Z1bmN0aW9uIFRlKGEsYil7MD09Yi5sZW5ndGh8fGIubGVuZ3RoPT1hLkJhLnNpemU/YS5CYS5jbGVhcigpOmIuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLkJhLmRlbGV0ZShhKX0sYSl9XG5RZS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEpe1RlKHRoaXMsYSk7cmV0dXJuIHYoKX07ZnVuY3Rpb24gVWUoYSl7cmV0dXJuIDA9PWEuQmEuc2l6ZT8wOmdjKGEuQmEpLnJlZHVjZShmdW5jdGlvbihhLGMpe3JldHVybiBhPmM/YTpjfSwwKX07ZnVuY3Rpb24gVmUoYSxiKXt0aGlzLmc9YTt0aGlzLkRmPWI7dGhpcy5LYz15KCk7dGhpcy5TYT0tMTt0aGlzLk09eSgpO3RoaXMuWmE9eSgpO3RoaXMuSmQ9bnVsbH1tPVZlLnByb3RvdHlwZTtcbm0uRWE9ZnVuY3Rpb24oYSl7dGhpcy5pPXRoaXMuRGYuY2hpbGQodGhpcy5nLm5hbWUoKSk7dmFyIGI9YXx8ZnVuY3Rpb24oKXtyZXR1cm4gdigpfTtyZXR1cm4gTGUodGhpcy5pLFwiQGRiL3ZlcnNpb25cIikudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWE/TWUodGhpcy5pLFdlKHRoaXMpLCEwKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGE9bmV3IE0oMCx0aGlzLmkpO3JldHVybiBiKGEpfS5iaW5kKHRoaXMpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuRWEoKX0uYmluZCh0aGlzKSk6YT09dGhpcy5nLnZlcnNpb24oKT9MZSh0aGlzLmksXCJAcmV2L1JcIikudGhlbihmdW5jdGlvbihhKXt0aGlzLlNhPWE7cmV0dXJuIExlKHRoaXMuaSxcIkB0YWJsZVwiKX0uYmluZCh0aGlzKSkudGhlbihmdW5jdGlvbihhKXtmb3IodmFyIGIgaW4gYSl0aGlzLlphLnNldChiLGFbYl0pO2E9dGhpcy5nLm9hKCkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBQZSh0aGlzLGEuZ2V0TmFtZSgpKX0sdGhpcyk7XG5yZXR1cm4gZWIoYSl9LmJpbmQodGhpcykpLnRoZW4oZnVuY3Rpb24oKXtYZSh0aGlzKTtZZSh0aGlzKTtyZXR1cm4gdigpfS5iaW5kKHRoaXMpKTp0aGlzLmhlKGEsYikudGhlbihmdW5jdGlvbigpe3JldHVybiB0aGlzLkVhKCl9LmJpbmQodGhpcykpfS5iaW5kKHRoaXMpKX07bS5oZT1mdW5jdGlvbihhLGIpe3ZhciBjPW5ldyBNKGEsdGhpcy5pKTtyZXR1cm4gYy5FYSh0aGlzLmcpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gdigpfS5iaW5kKHRoaXMpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGIoYyl9KS50aGVuKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5pLmNoaWxkKFwiQGRiXCIpO3JldHVybiBNZShhLHt2ZXJzaW9uOnRoaXMuZy52ZXJzaW9uKCl9LCEwKX0uYmluZCh0aGlzKSl9O1xuZnVuY3Rpb24gWWUoYSl7YS5pLm9mZigpO2EuaS5vbihcImNoaWxkX3JlbW92ZWRcIixhLnpnLmJpbmQoYSkpO2EuS2QmJihhLktkLm9mZigpLGEuS2MuY2xlYXIoKSk7YS5LZD1hLmkub3JkZXJCeUNoaWxkKFwiUlwiKS5zdGFydEF0KGEuU2ErMSk7YS5LZC5vbihcInZhbHVlXCIsYS5lZS5iaW5kKGEpKX1mdW5jdGlvbiBYZShhKXtpYz16KGEuTSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBVZShhKX0pLnJlZHVjZShmdW5jdGlvbihhLGMpe3JldHVybiBhPmM/YTpjfSwwKSsxfW0uemc9ZnVuY3Rpb24oYSl7dmFyIGI9YS52YWwoKSxjPXRoaXMuS2MuZ2V0KGIuVCl8fG51bGw7bnVsbD09PWMmJihjPUIoKSx0aGlzLktjLnNldChiLlQsYykpO2MuYWRkKHBhcnNlSW50KGEua2V5KCksMTApKX07XG5tLmVlPWZ1bmN0aW9uKGEpe3ZhciBiPWEuY2hpbGQoXCJAcmV2L1JcIikudmFsKCk7bnVsbCE9YiYmYiE9dGhpcy5TYSYmKHRoaXMuU2E9YixhPVplKHRoaXMsYSksYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuTS5nZXQoYS5nZXROYW1lKCkpLGM9Z2MoYS54YSk7MDxjLmxlbmd0aCYmVGUoYixjKTt2YXIgZj16KGEud2EpO2EubGEuZm9yRWFjaChmdW5jdGlvbihhKXtmLnB1c2goYVsxXSl9KTtTZShiLGYpfSx0aGlzKSwwPGEubGVuZ3RoJiZ0aGlzLkdjKGEpLFllKHRoaXMpKX07XG5mdW5jdGlvbiBaZShhLGIpe3ZhciBjPUIoKSxkPXkoKTthLlphLmZvckVhY2goZnVuY3Rpb24oYSxiKXt2YXIgZT10aGlzLk0uZ2V0KGIpLGY9bmV3IHNkKGIpO3RoaXMuS2MuaGFzKGEpJiYoYj1DKHRoaXMuS2MuZ2V0KGEpKSxiLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5hZGQoYSl9KSxSZShlLGIpLmZvckVhY2goZnVuY3Rpb24oYSl7Zi5kZWxldGUoYSl9KSk7ZC5zZXQoYSxmKX0uYmluZChhKSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2lmKFwiQHJldlwiIT1hLmtleSgpKXt2YXIgYj1wYXJzZUludChhLmtleSgpLDEwKTtpZighYy5oYXMoYikpe3ZhciBlPWEudmFsKCk7YT1kLmdldChlLlQpO3ZhciBsPXRoaXMuTS5nZXQoYS5nZXROYW1lKCkpLGU9dGhpcy5nLnRhYmxlKGEuZ2V0TmFtZSgpKS5rYih7aWQ6Yix2YWx1ZTplLlB9KTtsLmdldERhdGEoKS5oYXMoYik/YS5tb2RpZnkoW1JlKGwsW2JdKVswXSxlXSk6YS5hZGQoZSl9fX0uYmluZChhKSk7cmV0dXJuIHooZCkuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiFhLmpkKCl9KX1cbmZ1bmN0aW9uIFBlKGEsYil7dmFyIGM9dygpLGQ9YS5aYS5nZXQoYiksZT1hLmcudGFibGUoYik7YS5pLm9yZGVyQnlDaGlsZChcIlRcIikuZXF1YWxUbyhkKS5vbmNlKFwidmFsdWVcIixmdW5jdGlvbihhKXt2YXIgZD1uZXcgUWUsZj1bXTthLmZvckVhY2goZnVuY3Rpb24oYSl7Zi5wdXNoKGUua2Ioe2lkOnBhcnNlSW50KGEua2V5KCksMTApLHZhbHVlOmEudmFsKCkuUH0pKX0pO1NlKGQsZik7dGhpcy5NLnNldChiLGQpO2MucmVzb2x2ZSgpfS5iaW5kKGEpKTtyZXR1cm4gYy5oYX1mdW5jdGlvbiBXZShhKXt2YXIgYj17fTtiW1wiQGRiXCJdPXt2ZXJzaW9uOmEuZy52ZXJzaW9uKCl9O2JbXCJAcmV2XCJdPXtSOjF9O2EuU2E9MTtiW1wiQHRhYmxlXCJdPXt9O2EuZy5vYSgpLmZvckVhY2goZnVuY3Rpb24oYSxkKXthPWEuZ2V0TmFtZSgpO2JbXCJAdGFibGVcIl1bYV09ZDt0aGlzLk0uc2V0KGEsbmV3IFFlKTt0aGlzLlphLnNldChhLGQpfSxhKTtyZXR1cm4gYn1cbm0uRmI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuZXcgT2UodGhpcyxhLGMpfTttLkFjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuTS5nZXQoYSl8fG51bGw7aWYobnVsbCE9PWIpcmV0dXJuIGI7dGhyb3cgbmV3IEQoMTAxLGEpO307bS5jbG9zZT1hYSgpO20uc3Vic2NyaWJlPWJhKFwiSmRcIik7bS5HYz1mdW5jdGlvbihhKXtudWxsIT10aGlzLkpkJiZ0aGlzLkpkKGEpfTtmdW5jdGlvbiBOKGEsYixjLGQpe3RoaXMuaT1iO3RoaXMuamE9Yzt0aGlzLlVhPWE7dGhpcy5VYz1kfXEoXCJsZi5iYWNrc3RvcmUuSW5kZXhlZERCUmF3QmFja1N0b3JlXCIsTik7Ti5wcm90b3R5cGUuY2Q9ZyhcImlcIik7Ti5wcm90b3R5cGUuZ2V0UmF3REJJbnN0YW5jZT1OLnByb3RvdHlwZS5jZDtOLnByb3RvdHlwZS5kZD1nKFwiamFcIik7Ti5wcm90b3R5cGUuZ2V0UmF3VHJhbnNhY3Rpb249Ti5wcm90b3R5cGUuZGQ7Ti5wcm90b3R5cGUudGM9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7dHJ5e3RoaXMuaS5kZWxldGVPYmplY3RTdG9yZShhKX1jYXRjaChkKXtjKGQpO3JldHVybn1iKCl9LHRoaXMpfTtOLnByb3RvdHlwZS5kcm9wVGFibGU9Ti5wcm90b3R5cGUudGM7XG5mdW5jdGlvbiAkZShhLGIsYyxkKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxmKXt2YXIgZTt0cnl7dmFyIGw9dGhpcy5qYS5vYmplY3RTdG9yZShiKTtlPWwub3BlbkN1cnNvcigpfWNhdGNoKHApe2YocCk7cmV0dXJufWUub25zdWNjZXNzPWZ1bmN0aW9uKCl7dmFyIGI9ZS5yZXN1bHQ7Yj8oYyhiKSxiLmNvbnRpbnVlKCkpOihkKGwpLGEoKSl9O2Uub25lcnJvcj1mfSxhKX1mdW5jdGlvbiBhZihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP2xjKGEpOmEgaW5zdGFuY2VvZiBEYXRlP2EuZ2V0VGltZSgpOmF9XG5mdW5jdGlvbiBiZihhLGIsYyl7ZnVuY3Rpb24gZChhKXt2YXIgYj1NYyhhLnZhbHVlKSxkPWIubSxlO2ZvcihlIGluIGQpe3ZhciBmPWpjKGRbZV0pO2MoZik7ZFtlXT1mLkphKCl9YS51cGRhdGUoYi5KYSgpKX1mdW5jdGlvbiBlKGEpe3ZhciBiPWpjKGEudmFsdWUpO2MoYik7YS51cGRhdGUoYi5KYSgpKX1yZXR1cm4gJGUoYSxiLGEuVWM/ZDplLGFhKCkpfU4ucHJvdG90eXBlLnFjPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hZihjKTtyZXR1cm4gYmYodGhpcyxhLGZ1bmN0aW9uKGEpe2EubVtiXT1kfSl9O04ucHJvdG90eXBlLmFkZFRhYmxlQ29sdW1uPU4ucHJvdG90eXBlLnFjO04ucHJvdG90eXBlLnVjPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGJmKHRoaXMsYSxmdW5jdGlvbihhKXtkZWxldGUgYS5tW2JdfSl9O04ucHJvdG90eXBlLmRyb3BUYWJsZUNvbHVtbj1OLnByb3RvdHlwZS51Yztcbk4ucHJvdG90eXBlLkxjPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYmYodGhpcyxhLGZ1bmN0aW9uKGEpe2EubVtjXT1hLm1bYl07ZGVsZXRlIGEubVtiXX0pfTtOLnByb3RvdHlwZS5yZW5hbWVUYWJsZUNvbHVtbj1OLnByb3RvdHlwZS5MYztmdW5jdGlvbiBjZihhLGIpe3ZhciBjPVtdO3JldHVybiBuZXcgdShmdW5jdGlvbihhLGUpe3ZhciBkO3RyeXtkPXRoaXMuamEub2JqZWN0U3RvcmUoYikub3BlbkN1cnNvcigpfWNhdGNoKGgpe2UoaCk7cmV0dXJufWQub25zdWNjZXNzPWZ1bmN0aW9uKCl7dmFyIGI9ZC5yZXN1bHQ7aWYoYil7aWYodGhpcy5VYyl7dmFyIGU9TWMoYi52YWx1ZSkubSxmO2ZvcihmIGluIGUpYy5wdXNoKGVbZl0pfWVsc2UgYy5wdXNoKGIudmFsdWUpO2IuY29udGludWUoKX1lbHNlIGEoYyl9LmJpbmQodGhpcyk7ZC5vbmVycm9yPWV9LGEpfU4ucHJvdG90eXBlLnhiPWZ1bmN0aW9uKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSliW2NdPWFmKGFbY10pO3JldHVybiBrYyhiKX07XG5OLnByb3RvdHlwZS5jcmVhdGVSb3c9Ti5wcm90b3R5cGUueGI7Ti5wcm90b3R5cGUuQ2M9ZyhcIlVhXCIpO04ucHJvdG90eXBlLmdldFZlcnNpb249Ti5wcm90b3R5cGUuQ2M7Ti5wcm90b3R5cGUuZHVtcD1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmkub2JqZWN0U3RvcmVOYW1lcyxiPVtdLGM9MDtjPGEubGVuZ3RoOysrYyl7dmFyIGQ9YS5pdGVtKGMpO2IucHVzaCh0aGlzLmVjKGQpKX1yZXR1cm4gZWIoYikudGhlbihmdW5jdGlvbihiKXt2YXIgYz17fTtiLmZvckVhY2goZnVuY3Rpb24oYixkKXtjW2EuaXRlbShkKV09Yn0pO3JldHVybiBjfSl9O04ucHJvdG90eXBlLmR1bXA9Ti5wcm90b3R5cGUuZHVtcDtOLnByb3RvdHlwZS5lYz1mdW5jdGlvbihhKXtyZXR1cm4gY2YodGhpcyxhKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZX0pfSl9O2Z1bmN0aW9uIGRmKGEsYil7dGhpcy5aPWE7dGhpcy5HYj1ifWRmLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIG51bGwhPXRoaXMuWi5nZXRBbGw/ZWYodGhpcyk6ZmYodGhpcyk7YT1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixkKXt2YXIgYzt0cnl7Yz10aGlzLlouZ2V0KGEpfWNhdGNoKGYpe2QoZik7cmV0dXJufWMub25lcnJvcj1kO2Mub25zdWNjZXNzPWZ1bmN0aW9uKGEpe2IodGhpcy5HYihhLnRhcmdldC5yZXN1bHQpKX0uYmluZCh0aGlzKX0sdGhpcyl9LHRoaXMpO3JldHVybiBlYihhKX07XG5mdW5jdGlvbiBmZihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxjKXt2YXIgYj1bXSxlO3RyeXtlPXRoaXMuWi5vcGVuQ3Vyc29yKCl9Y2F0Y2goZil7YyhmKTtyZXR1cm59ZS5vbmVycm9yPWM7ZS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXt2YXIgYz1lLnJlc3VsdDtjPyhiLnB1c2godGhpcy5HYihjLnZhbHVlKSksYy5jb250aW51ZSgpKTphKGIpfS5iaW5kKHRoaXMpfSxhKX1mdW5jdGlvbiBlZihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxjKXt2YXIgYjt0cnl7Yj10aGlzLlouZ2V0QWxsKCl9Y2F0Y2goZSl7YyhlKTtyZXR1cm59Yi5vbmVycm9yPWM7Yi5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXt2YXIgYz1iLnJlc3VsdC5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuR2IoYSl9LHRoaXMpO2EoYyl9LmJpbmQodGhpcyl9LGEpfVxuZGYucHJvdG90eXBlLlRiPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe3ZhciBkO3RyeXtkPWEoKX1jYXRjaChlKXtjKGUpO3JldHVybn1kLm9uc3VjY2Vzcz1iO2Qub25lcnJvcj1jfSx0aGlzKX07ZGYucHJvdG90eXBlLnB1dD1mdW5jdGlvbihhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gdigpO2E9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuVGIoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5aLnB1dChhLkphKCkpfS5iaW5kKHRoaXMpKX0sdGhpcyk7cmV0dXJuIGViKGEpfTtcbmRmLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy5aLmNvdW50KCk7ZC5vbnN1Y2Nlc3M9ZnVuY3Rpb24oZCl7aWYoMD09YS5sZW5ndGh8fGQudGFyZ2V0LnJlc3VsdD09YS5sZW5ndGgpcmV0dXJuIHRoaXMuVGIoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5aLmNsZWFyKCl9LmJpbmQodGhpcykpLnRoZW4oYixjKTtkPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlRiKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWi5kZWxldGUoYSl9LmJpbmQodGhpcykpfSx0aGlzKTtlYihkKS50aGVuKGIsYyl9LmJpbmQodGhpcyk7ZC5vbmVycm9yPWN9LHRoaXMpfTtmdW5jdGlvbiBnZihhLGIsYyxkLGUpe25jLmNhbGwodGhpcyxjLGUpO3RoaXMuYz1hO3RoaXMuamE9Yjt0aGlzLlVjPWQ7dGhpcy5qYS5vbmNvbXBsZXRlPXRoaXMuUy5yZXNvbHZlLmJpbmQodGhpcy5TKTt0aGlzLmphLm9uYWJvcnQ9dGhpcy5TLnJlamVjdC5iaW5kKHRoaXMuUyl9cihnZixuYyk7Z2YucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLlVjPyhjPW51bGwhPWM/YzowLGE9dGhpcy5qYS5vYmplY3RTdG9yZShhKSxuZXcgTmMoYSxiLDA9PWM/cWEoUGMsdGhpcy5jKTpRYykpOm5ldyBkZih0aGlzLmphLm9iamVjdFN0b3JlKGEpLGIpfTtnZi5wcm90b3R5cGUuc2M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5TLmhhfTtmdW5jdGlvbiBoZihhLGIpe3RoaXMuYz1hO3RoaXMuZz1iO3RoaXMuR2Q9Yi5rZS5TZnx8ITF9bT1oZi5wcm90b3R5cGU7XG5tLkVhPWZ1bmN0aW9uKGEpe3ZhciBiPXdpbmRvdy5pbmRleGVkREJ8fHdpbmRvdy5tb3pJbmRleGVkREJ8fHdpbmRvdy53ZWJraXRJbmRleGVkREJ8fHdpbmRvdy5tc0luZGV4ZWREQjtpZihudWxsPT1iKXRocm93IG5ldyBEKDM1Mik7dmFyIGM9YXx8ZnVuY3Rpb24oKXtyZXR1cm4gdigpfTtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxlKXt2YXIgZDt0cnl7ZD1iLm9wZW4odGhpcy5nLm5hbWUoKSx0aGlzLmcudmVyc2lvbigpKX1jYXRjaChoKXtlKGgpO3JldHVybn1kLm9uZXJyb3I9ZnVuY3Rpb24oYSl7YT1hLnRhcmdldC5lcnJvcjtlKG5ldyBEKDM2MSxhLm5hbWUsYS5tZXNzYWdlKSl9O2Qub251cGdyYWRlbmVlZGVkPWZ1bmN0aW9uKGEpe2pmKHRoaXMsYyxhKS50aGVuKGFhKCksZSl9LmJpbmQodGhpcyk7ZC5vbnN1Y2Nlc3M9ZnVuY3Rpb24oYil7dGhpcy5pPWIudGFyZ2V0LnJlc3VsdDt0aGlzLnFlKCkudGhlbihmdW5jdGlvbihiKXtpYz1NYXRoLm1heChpYyxiKzEpO2EodGhpcy5pKX0uYmluZCh0aGlzKSl9LmJpbmQodGhpcyl9LFxudGhpcyl9O2Z1bmN0aW9uIGpmKGEsYixjKXt2YXIgZD1jLnRhcmdldC5yZXN1bHQ7Yz1uZXcgTihjLm9sZFZlcnNpb24sZCxjLnRhcmdldC50cmFuc2FjdGlvbixhLkdkKTtrZihkKTthLmcub2EoKS5mb3JFYWNoKHFhKGEuTGYsZCksYSk7cmV0dXJuIGIoYyl9ZnVuY3Rpb24ga2YoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGEub2JqZWN0U3RvcmVOYW1lcy5sZW5ndGg7KytjKXt2YXIgZD1hLm9iamVjdFN0b3JlTmFtZXMuaXRlbShjKTstMSE9ZC5pbmRleE9mKFwiLlwiKSYmYi5wdXNoKGQpfWIuZm9yRWFjaChmdW5jdGlvbihiKXt0cnl7YS5kZWxldGVPYmplY3RTdG9yZShiKX1jYXRjaChmKXt9fSl9XG5tLkxmPWZ1bmN0aW9uKGEsYil7YS5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGIuZ2V0TmFtZSgpKXx8YS5jcmVhdGVPYmplY3RTdG9yZShiLmdldE5hbWUoKSx7a2V5UGF0aDpcImlkXCJ9KTtiLkNiKCkmJihiLkRhKCkuZm9yRWFjaChmdW5jdGlvbihiKXttZihhLGIuaigpKX0sdGhpcyksbWYoYSxuZihiKSkpfTtmdW5jdGlvbiBtZihhLGIpe2Eub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhiKXx8YS5jcmVhdGVPYmplY3RTdG9yZShiLHtrZXlQYXRoOlwiaWRcIn0pfW0uRmI9ZnVuY3Rpb24oYSxiLGMpe2I9dGhpcy5pLnRyYW5zYWN0aW9uKG9mKGIpLDA9PWE/XCJyZWFkb25seVwiOlwicmVhZHdyaXRlXCIpO3JldHVybiBuZXcgZ2YodGhpcy5jLGIsYSx0aGlzLkdkLGMpfTtcbmZ1bmN0aW9uIG9mKGEpe3ZhciBiPUIoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5hZGQoYS5nZXROYW1lKCkpO2EuQ2IoKSYmKGEuRGEoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuYWRkKGEuaigpKX0pLGIuYWRkKG5mKGEpKSl9KTtyZXR1cm4gQyhiKX1cbm0ucWU9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe2lmKDA9PWQubGVuZ3RoKXJldHVybiB2KCk7dmFyIGE9ZC5zaGlmdCgpO3JldHVybiBjKGEpLnRoZW4oYil9ZnVuY3Rpb24gYyhiKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYyxkKXt2YXIgbDt0cnl7bD0oYXx8ZS50cmFuc2FjdGlvbihbYl0pKS5vYmplY3RTdG9yZShiKS5vcGVuQ3Vyc29yKG51bGwsXCJwcmV2XCIpfWNhdGNoKGNhKXtkKGNhKTtyZXR1cm59bC5vbnN1Y2Nlc3M9ZnVuY3Rpb24oYSl7KGE9YS50YXJnZXQucmVzdWx0KSYmKGY9TWF0aC5tYXgoZixoKGEpKSk7YyhmKX07bC5vbmVycm9yPWZ1bmN0aW9uKCl7YyhmKX19KX12YXIgZD10aGlzLmcub2EoKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0TmFtZSgpfSksZT10aGlzLmksZj0wLGg9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuR2Q/KGE9TWMoYS52YWx1ZSksT2JqZWN0LmtleXMoYS5tKS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtyZXR1cm4gTWF0aC5tYXgoYSxiKX0sXG4wKSk6YS5rZXl9LmJpbmQodGhpcyk7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEpe2IoKS50aGVuKGZ1bmN0aW9uKCl7YShmKX0pfSl9O20uY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLmkuY2xvc2UoKX07bS5BYz1mdW5jdGlvbigpe3Rocm93IG5ldyBEKDUxMSk7fTttLnN1YnNjcmliZT1hYSgpO20uR2M9YWEoKTtmdW5jdGlvbiBwZihhLGIsYyl7bmMuY2FsbCh0aGlzLGIsYyk7dGhpcy5aPWE7MD09YiYmdGhpcy5TLnJlc29sdmUoKX1yKHBmLG5jKTtwZi5wcm90b3R5cGUuST1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5aLkFjKGEpfTtwZi5wcm90b3R5cGUuc2M9ZnVuY3Rpb24oKXt0aGlzLlMucmVzb2x2ZSgpO3JldHVybiB0aGlzLlMuaGF9O2Z1bmN0aW9uIHFmKGEpe3RoaXMuZz1hO3RoaXMuTT15KCl9bT1xZi5wcm90b3R5cGU7bS5FYT1mdW5jdGlvbigpe3RoaXMuZy5vYSgpLmZvckVhY2godGhpcy5nZyx0aGlzKTtyZXR1cm4gdigpfTttLkFjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuTS5nZXQoYSl8fG51bGw7aWYobnVsbD09PWIpdGhyb3cgbmV3IEQoMTAxLGEpO3JldHVybiBifTttLkZiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbmV3IHBmKHRoaXMsYSxjKX07ZnVuY3Rpb24gcmYoYSxiKXtpZighYS5NLmhhcyhiKSl7dmFyIGM9bmV3IFFlO2EuTS5zZXQoYixjKX19bS5nZz1mdW5jdGlvbihhKXtyZih0aGlzLGEuZ2V0TmFtZSgpKTthLkNiKCkmJihhLkRhKCkuZm9yRWFjaChmdW5jdGlvbihhKXtyZih0aGlzLGEuaigpKX0sdGhpcykscmYodGhpcyxuZihhKSkpfTttLmNsb3NlPWFhKCk7bS5zdWJzY3JpYmU9YWEoKTttLkdjPWFhKCk7ZnVuY3Rpb24gc2YoYSl7cWYuY2FsbCh0aGlzLGEpO3RoaXMucGQ9bnVsbH1yKHNmLHFmKTtzZi5wcm90b3R5cGUuc3Vic2NyaWJlPWZ1bmN0aW9uKGEpe251bGw9PT10aGlzLnBkJiYodGhpcy5wZD1hKX07c2YucHJvdG90eXBlLkdjPWZ1bmN0aW9uKGEpe251bGw9PT10aGlzLnBkfHx0aGlzLnBkKGEpfTtmdW5jdGlvbiB0ZihhLGIsYyl7dGhpcy5qYT1hO3RoaXMuQT0nXCInK2IrJ1wiJzt0aGlzLkdiPWN9dGYucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLkdiO3JldHVybiB1Zih0aGlzLmphLFwiU0VMRUNUIGlkLCB2YWx1ZSBGUk9NIFwiK3RoaXMuQStcIiBcIisoMD09YS5sZW5ndGg/XCJcIjpcIldIRVJFIGlkIElOIChcIithLmpvaW4oXCIsXCIpK1wiKVwiKSxbXSxmdW5jdGlvbihhKXtmb3IodmFyIGM9YS5yb3dzLmxlbmd0aCxlPUFycmF5KGMpLGY9MDtmPGM7KytmKWVbZl09Yih7aWQ6YS5yb3dzLml0ZW0oZikuaWQsdmFsdWU6SlNPTi5wYXJzZShhLnJvd3MuaXRlbShmKS52YWx1ZSl9KTtyZXR1cm4gZX0pfTtcbnRmLnByb3RvdHlwZS5wdXQ9ZnVuY3Rpb24oYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIHYoKTt2YXIgYj1cIklOU0VSVCBPUiBSRVBMQUNFIElOVE8gXCIrdGhpcy5BK1wiKGlkLCB2YWx1ZSkgVkFMVUVTICg/LCA/KVwiO2EuZm9yRWFjaChmdW5jdGlvbihhKXt1Zih0aGlzLmphLGIsW2EuaWQoKSxKU09OLnN0cmluZ2lmeShhLm0pXSl9LHRoaXMpO3JldHVybiB2KCl9O3RmLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSl7dWYodGhpcy5qYSxcIkRFTEVURSBGUk9NIFwiK3RoaXMuQStcIiBcIisoMD09YS5sZW5ndGg/XCJcIjpcIldIRVJFIGlkIElOIChcIithLmpvaW4oXCIsXCIpK1wiKVwiKSxbXSk7cmV0dXJuIHYoKX07ZnVuY3Rpb24gdmYoYSxiLGMpe25jLmNhbGwodGhpcyxiLGMpO3RoaXMuaT1hO3RoaXMuTT15KCk7dGhpcy5OZD1bXX1yKHZmLG5jKTtmdW5jdGlvbiB3ZihhKXtyZXR1cm4gYS5yZXBsYWNlKFwiLlwiLFwiX19kX19cIikucmVwbGFjZShcIiNcIixcIl9fc19fXCIpfXZmLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5NLmdldChhKXx8bnVsbDtudWxsPT09YyYmKGM9bmV3IHRmKHRoaXMsd2YoYSksYiksdGhpcy5NLnNldChhLGMpKTtyZXR1cm4gY307ZnVuY3Rpb24gdWYoYSxiLGMsZCl7dmFyIGU9dygpO2EuTmQucHVzaCh7Tmc6YixEZzpjLHRyYW5zZm9ybTpkLFM6ZX0pO3JldHVybiBlLmhhfVxudmYucHJvdG90eXBlLnNjPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbCxiPXRoaXMuUy5yZWplY3QuYmluZCh0aGlzLlMpLGM9ZnVuY3Rpb24oYSxiKXt0aGlzLlMucmVqZWN0KGIpfS5iaW5kKHRoaXMpLGQ9W10sZT1mdW5jdGlvbihiLGgpe2lmKG51bGwhPT1hKXt2YXIgZj1oO251bGwhPWEudHJhbnNmb3JtJiZudWxsIT1oJiYoZj1hLnRyYW5zZm9ybShoKSk7ZC5wdXNoKGYpO2EuUy5yZXNvbHZlKGYpfTA8dGhpcy5OZC5sZW5ndGg/KGE9aD10aGlzLk5kLnNoaWZ0KCksYi5leGVjdXRlU3FsKGguTmcsaC5EZyxlLGMpKTp0aGlzLlMucmVzb2x2ZShkKX0uYmluZCh0aGlzKTswPT10aGlzLnlkP3RoaXMuaS5yZWFkVHJhbnNhY3Rpb24oZSxiKTp0aGlzLmkudHJhbnNhY3Rpb24oZSxiKTtyZXR1cm4gdGhpcy5TLmhhfTtmdW5jdGlvbiBPKGEsYixjKXt0aGlzLmk9Yzt0aGlzLmM9YTt0aGlzLlVhPWJ9cShcImxmLmJhY2tzdG9yZS5XZWJTcWxSYXdCYWNrU3RvcmVcIixPKTtPLnByb3RvdHlwZS5jZD1nKFwiaVwiKTtPLnByb3RvdHlwZS5nZXRSYXdEQkluc3RhbmNlPU8ucHJvdG90eXBlLmNkO08ucHJvdG90eXBlLmRkPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEQoMzU2KTt9O08ucHJvdG90eXBlLmdldFJhd1RyYW5zYWN0aW9uPU8ucHJvdG90eXBlLmRkO2Z1bmN0aW9uIHhmKGEpe3JldHVybiBuZXcgdmYoYS5pLDEsbmV3IHVkKGEuYyxCKCkpKX1PLnByb3RvdHlwZS50Yz1mdW5jdGlvbihhKXt2YXIgYj14Zih0aGlzKTt1ZihiLFwiRFJPUCBUQUJMRSBcIithLFtdKTtyZXR1cm4gYi5rYSgpfTtPLnByb3RvdHlwZS5kcm9wVGFibGU9Ty5wcm90b3R5cGUudGM7XG5PLnByb3RvdHlwZS5lYz1mdW5jdGlvbihhKXt2YXIgYj14Zih0aGlzKTt1ZihiLFwiU0VMRUNUIGlkLCB2YWx1ZSBGUk9NIFwiK2EsW10pO3JldHVybiBiLmthKCkudGhlbihmdW5jdGlvbihhKXtmb3IodmFyIGI9YVswXS5yb3dzLmxlbmd0aCxjPUFycmF5KGIpLGY9MDtmPGI7KytmKWNbZl09e2lkOmFbMF0ucm93cy5pdGVtKGYpLmlkLHZhbHVlOkpTT04ucGFyc2UoYVswXS5yb3dzLml0ZW0oZikudmFsdWUpfTtyZXR1cm4gdihjKX0pfTtmdW5jdGlvbiB5ZihhLGIsYyl7dmFyIGQ9eGYoYSksZT1cIlVQREFURSBcIitiK1wiIFNFVCB2YWx1ZT0/IFdIRVJFIGlkPT9cIjtyZXR1cm4gYS5lYyhiKS50aGVuKGZ1bmN0aW9uKGEpe2EuZm9yRWFjaChmdW5jdGlvbihhKXthPWMoYSk7dWYoZCxlLFtKU09OLnN0cmluZ2lmeShhLnZhbHVlKSxhLmlkXSl9KTtyZXR1cm4gZC5rYSgpfSl9XG5PLnByb3RvdHlwZS5xYz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YWYoYyk7cmV0dXJuIHlmKHRoaXMsYSxmdW5jdGlvbihhKXthLnZhbHVlW2JdPWQ7cmV0dXJuIGF9KX07Ty5wcm90b3R5cGUuYWRkVGFibGVDb2x1bW49Ty5wcm90b3R5cGUucWM7Ty5wcm90b3R5cGUudWM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4geWYodGhpcyxhLGZ1bmN0aW9uKGEpe2RlbGV0ZSBhLnZhbHVlW2JdO3JldHVybiBhfSl9O08ucHJvdG90eXBlLmRyb3BUYWJsZUNvbHVtbj1PLnByb3RvdHlwZS51YztPLnByb3RvdHlwZS5MYz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHlmKHRoaXMsYSxmdW5jdGlvbihhKXthLnZhbHVlW2NdPWEudmFsdWVbYl07ZGVsZXRlIGEudmFsdWVbYl07cmV0dXJuIGF9KX07Ty5wcm90b3R5cGUucmVuYW1lVGFibGVDb2x1bW49Ty5wcm90b3R5cGUuTGM7Ty5wcm90b3R5cGUueGI9ZnVuY3Rpb24oYSl7dmFyIGI9e30sYztmb3IoYyBpbiBhKWJbY109YWYoYVtjXSk7cmV0dXJuIGtjKGIpfTtcbk8ucHJvdG90eXBlLmNyZWF0ZVJvdz1PLnByb3RvdHlwZS54YjtPLnByb3RvdHlwZS5DYz1nKFwiVWFcIik7Ty5wcm90b3R5cGUuZ2V0VmVyc2lvbj1PLnByb3RvdHlwZS5DYztmdW5jdGlvbiB6ZihhKXt1ZihhLCdTRUxFQ1QgdGJsX25hbWUgRlJPTSBzcWxpdGVfbWFzdGVyIFdIRVJFIHR5cGU9XCJ0YWJsZVwiJyxbXSxmdW5jdGlvbihhKXtmb3IodmFyIGI9QXJyYXkoYS5yb3dzLmxlbmd0aCksZD0wO2Q8Yi5sZW5ndGg7KytkKWJbZF09YS5yb3dzLml0ZW0oZCkudGJsX25hbWU7cmV0dXJuIGJ9KX1cbk8ucHJvdG90eXBlLmR1bXA9ZnVuY3Rpb24oKXt2YXIgYT13KCksYj14Zih0aGlzKTt6ZihiKTt2YXIgYz17fTtiLmthKCkudGhlbihmdW5jdGlvbihiKXtiPWJbMF0uZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVyblwiX19sZl92ZXJcIiE9YSYmXCJfX1dlYktpdERhdGFiYXNlSW5mb1RhYmxlX19cIiE9YX0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYyhhKS50aGVuKGZ1bmN0aW9uKGIpe2NbYV09Yn0pfSx0aGlzKTtlYihiKS50aGVuKGZ1bmN0aW9uKCl7YS5yZXNvbHZlKGMpfSl9LmJpbmQodGhpcykpO3JldHVybiBhLmhhfTtPLnByb3RvdHlwZS5kdW1wPU8ucHJvdG90eXBlLmR1bXA7ZnVuY3Rpb24gQWYoYSxiLGMpe3RoaXMuYz1hO3RoaXMuZz1iO3RoaXMuTWc9Y3x8MX1tPUFmLnByb3RvdHlwZTttLkVhPWZ1bmN0aW9uKGEpe2lmKG51bGw9PXdpbmRvdy5vcGVuRGF0YWJhc2UpdGhyb3cgbmV3IEQoMzUzKTt2YXIgYj1hfHxmdW5jdGlvbigpe3JldHVybiB2KCl9O3JldHVybiBuZXcgdShmdW5jdGlvbihhLGQpe3ZhciBjPXdpbmRvdy5vcGVuRGF0YWJhc2UodGhpcy5nLm5hbWUoKSxcIlwiLHRoaXMuZy5uYW1lKCksdGhpcy5NZyk7aWYobnVsbCE9Yyl0aGlzLmk9YyxCZih0aGlzLGIpLnRoZW4oZnVuY3Rpb24oKXt0aGlzLnFlKCkudGhlbihhLGQpfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBEKXRocm93IGE7dGhyb3cgbmV3IEQoMzU0LGEubWVzc2FnZSk7fSk7ZWxzZSB0aHJvdyBuZXcgRCgzNTQpO30sdGhpcyl9O1xuZnVuY3Rpb24gQmYoYSxiKXt2YXIgYz13KCksZD1uZXcgdmYoYS5pLDEsbmV3IHVkKGEuYyxCKCkpKTt1ZihkLFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgX19sZl92ZXIoaWQgSU5URUdFUiBQUklNQVJZIEtFWSwgdiBJTlRFR0VSKVwiLFtdKTt1ZihkLFwiU0VMRUNUIHYgRlJPTSBfX2xmX3ZlciBXSEVSRSBpZCA9IDBcIixbXSk7ZC5rYSgpLnRoZW4oZnVuY3Rpb24oYSl7dmFyIGQ9MDthWzFdLnJvd3MubGVuZ3RoJiYoZD1hWzFdLnJvd3MuaXRlbSgwKS52KTtkPHRoaXMuZy52ZXJzaW9uKCk/dGhpcy5oZShiLGQpLnRoZW4oYy5yZXNvbHZlLmJpbmQoYykpOmQ+dGhpcy5nLnZlcnNpb24oKT9jLnJlamVjdChuZXcgRCgxMDgpKTpjLnJlc29sdmUoKX0uYmluZChhKSxjLnJlamVjdC5iaW5kKGMpKTtyZXR1cm4gYy5oYX1tLkZiPWZ1bmN0aW9uKGEsYixjKXtpZihudWxsIT10aGlzLmkpcmV0dXJuIG5ldyB2Zih0aGlzLmksYSxjKTt0aHJvdyBuZXcgRCgyKTt9O20uY2xvc2U9YWEoKTtcbm0uQWM9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRCg1MTIpO307bS5zdWJzY3JpYmU9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRCgzNTUpO307bS5HYz1mdW5jdGlvbigpe3Rocm93IG5ldyBEKDM1NSk7fTttLmhlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIENmKHRoaXMpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYShuZXcgTyh0aGlzLmMsYix0aGlzLmkpKX0uYmluZCh0aGlzKSl9O1xuZnVuY3Rpb24gQ2YoYSl7dmFyIGI9YS5nLm9hKCksYz1uZXcgdmYoYS5pLDEsbmV3IHVkKGEuYyxCKCkpKSxkPW5ldyB2ZihhLmksMSxuZXcgdWQoYS5jLEIoKSkpO3VmKGMsXCJJTlNFUlQgT1IgUkVQTEFDRSBJTlRPIF9fbGZfdmVyIFZBTFVFUyAoMCwgPylcIixbYS5nLnZlcnNpb24oKV0pO3pmKGMpO3JldHVybiBjLmthKCkudGhlbihmdW5jdGlvbihhKXt2YXIgYz1hWzFdO2MuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybi0xIT1hLmluZGV4T2YoXCJfX2RfX1wiKX0pLmZvckVhY2goZnVuY3Rpb24oYSl7dWYoZCxcIkRST1AgVEFCTEUgXCIrKCdcIicrYSsnXCInKSxbXSl9KTt2YXIgZT1bXSxsPVtdLHA9W107Yi5tYXAoZnVuY3Rpb24oYSl7LTE9PWMuaW5kZXhPZihhLmdldE5hbWUoKSkmJmUucHVzaChhLmdldE5hbWUoKSk7YS5DYiYmKGEuRGEoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9d2YoYS5qKCkpO2UucHVzaChhKTtsLnB1c2goYSl9KSxhPXdmKG5mKGEpKSxlLnB1c2goYSkscC5wdXNoKGEpKX0pO1xuZS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3VmKGQsXCJDUkVBVEUgVEFCTEUgXCIrKCdcIicrYSsnXCInKStcIihpZCBJTlRFR0VSIFBSSU1BUlkgS0VZLCB2YWx1ZSBURVhUKVwiLFtdKX0pO3JldHVybiBkLmthKCl9KX1tLnFlPWZ1bmN0aW9uKCl7dmFyIGE9MCxiPXcoKSxjPWZ1bmN0aW9uKGIpe3ZhciBjPW5ldyB2Zih0aGlzLmksMCk7dWYoYyxcIlNFTEVDVCBNQVgoaWQpIEZST00gXCIrKCdcIicrYisnXCInKSxbXSk7cmV0dXJuIGMua2EoKS50aGVuKGZ1bmN0aW9uKGIpe2I9YlswXS5yb3dzLml0ZW0oMClbXCJNQVgoaWQpXCJdO2E9TWF0aC5tYXgoYixhKX0pfS5iaW5kKHRoaXMpLGQ9dGhpcy5nLm9hKCkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBjKGEuZ2V0TmFtZSgpKX0pO2ViKGQpLnRoZW4oZnVuY3Rpb24oKXtpYz1NYXRoLm1heChpYyxhKzEpO2IucmVzb2x2ZSgpfSxmdW5jdGlvbihhKXtiLnJlamVjdChhKX0pO3JldHVybiBiLmhhfTtmdW5jdGlvbiBEZihhKXt0aGlzLmw9eSgpO3RoaXMuJGI9eSgpO2Eub2EoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuJGIuc2V0KGEuZ2V0TmFtZSgpLEIoKSl9LHRoaXMpfW09RGYucHJvdG90eXBlO20uc2V0PWZ1bmN0aW9uKGEsYil7dGhpcy5sLnNldChiLmlkKCksYik7dGhpcy4kYi5nZXQoYSkuYWRkKGIuaWQoKSl9O20uV2I9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLiRiLmdldChhKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5sLnNldChhLmlkKCksYSk7Yy5hZGQoYS5pZCgpKX0sdGhpcyl9O20uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmwuZ2V0KGEpfHxudWxsfTtmdW5jdGlvbiBFZihhLGIpe3JldHVybiBiLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5nZXQoYSl9LGEpfVxubS5WYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT1NYXRoLm1pbihiLGMpLGY9TWF0aC5tYXgoYixjKTthPXRoaXMuJGIuZ2V0KGEpO2lmKGEuc2l6ZTxmLWUpYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E+PWUmJmE8PWYmJihhPXRoaXMubC5nZXQoYSksZC5wdXNoKGEpKX0sdGhpcyk7ZWxzZSBmb3IoYj1lO2I8PWY7KytiKWEuaGFzKGIpJiYoYz10aGlzLmwuZ2V0KGIpLGQucHVzaChjKSk7cmV0dXJuIGR9O20ucmVtb3ZlPWZ1bmN0aW9uKGEsYil7dGhpcy5sLmRlbGV0ZShiKTt0aGlzLiRiLmdldChhKS5kZWxldGUoYil9O20uemM9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/dGhpcy4kYi5nZXQoYSkuc2l6ZTp0aGlzLmwuc2l6ZX07bS5jbGVhcj1mdW5jdGlvbigpe3RoaXMubC5jbGVhcigpO3RoaXMuJGIuY2xlYXIoKX07ZnVuY3Rpb24gRmYoYSxiLGMpe3ZhciBkPTAsZT1hLmxlbmd0aDtmb3IoYz1jfHxHZjtkPGU7KXt2YXIgZj1kK2U+PjE7MD5jKGFbZl0sYik/ZD1mKzE6ZT1mfXJldHVybiBkPT1lJiZhW2RdPT1iP2Q6fmR9ZnVuY3Rpb24gR2YoYSxiKXtyZXR1cm4gYS1ifWZ1bmN0aW9uIEhmKGEsYixjKXtjPUZmKGEsYixjKTtyZXR1cm4gMD5jPyhhLnNwbGljZSgtKGMrMSksMCxiKSwhMCk6ITF9O2Z1bmN0aW9uIElmKGEsYixjLGQpe2E9Yj9hLnJldmVyc2UoKTphO2lmKG51bGw9PWMmJm51bGw9PWQpcmV0dXJuIGE7Yz1NYXRoLm1pbihuKGMpP2M6YS5sZW5ndGgsYS5sZW5ndGgpO2lmKDA9PWMpcmV0dXJuW107ZD1NYXRoLm1pbihkfHwwLGEubGVuZ3RoKTtyZXR1cm4gYS5zbGljZShkLGQrYyl9O2Z1bmN0aW9uIEpmKCl7dGhpcy5pYT0wO3RoaXMuRmM9bnVsbH1KZi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYil7dGhpcy5pYSs9Yjt0aGlzLkZjPW51bGw9PT10aGlzLkZjP2E6YT50aGlzLkZjP2E6dGhpcy5GY307SmYucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhLGIpe3RoaXMuaWEtPWJ9O0pmLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuaWE9MH07ZnVuY3Rpb24gS2YoYSxiKXthLmNsZWFyKCk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuaWErPWEuaWF9LGEpfTtmdW5jdGlvbiBMZihhLGIsYyxkKXt0aGlzLkE9YTt0aGlzLiQ9Yjt0aGlzLnlmPWM7dGhpcy56YT1uZXcgSmY7aWYoZCl7YT01MTE7YSo9YSphO2lmKGQubGVuZ3RoPj1hKXRocm93IG5ldyBEKDYsYSk7ZD1NZih0aGlzLGQpO3RoaXMudWE9ZD1OZihkKX1lbHNlIHRoaXMuY2xlYXIoKX12YXIgT2Y9W107bT1MZi5wcm90b3R5cGU7bS5nZXROYW1lPWcoXCJBXCIpO20udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy51YS50b1N0cmluZygpfTttLmFkZD1mdW5jdGlvbihhLGIpe3RoaXMudWE9dGhpcy51YS5BYihhLGIpfTttLnNldD1mdW5jdGlvbihhLGIpe3RoaXMudWE9dGhpcy51YS5BYihhLGIsITApfTttLnJlbW92ZT1mdW5jdGlvbihhLGIpe3RoaXMudWE9dGhpcy51YS5yZW1vdmUoYSxiKX07bS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudWEuZ2V0KGEpfTtcbm0uWmM9ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gdGhpcy5ZKCkuaWE7aWYoYSBpbnN0YW5jZW9mIEUpe2lmKEFkKGEpKXJldHVybiB0aGlzLlkoKS5pYTtpZihFZChhKSlyZXR1cm4gdGhpcy5nZXQoYS5mcm9tKS5sZW5ndGh9cmV0dXJuIHRoaXMuVmEoW2FdKS5sZW5ndGh9O20uWT1nKFwiemFcIik7bS5WZD1mdW5jdGlvbihhLGIsYyxkKXtjPUFycmF5KGEpO3RoaXMudWEuZmlsbCh7b2Zmc2V0OmI/dGhpcy56YS5pYS1hLWQ6ZCxjb3VudDphLHRlOjB9LGMpO3JldHVybiBiP2MucmV2ZXJzZSgpOmN9O1xubS5WYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1QZih0aGlzLnVhKS5hWzBdO2lmKCFuKGUpfHwwPT1jKXJldHVybiBPZjtiPWJ8fCExO2M9bnVsbCE9Yz9NYXRoLm1pbihjLHRoaXMuemEuaWEpOnRoaXMuemEuaWE7ZD1kfHwwO3ZhciBmPU1hdGgubWluKE1hdGgubWF4KHRoaXMuemEuaWEtZCwwKSxjKTtpZigwPT1mKXJldHVybiBPZjtpZighbihhKXx8MT09YS5sZW5ndGgmJmFbMF1pbnN0YW5jZW9mIEUmJkFkKGFbMF0pKXJldHVybiB0aGlzLlZkKGYsYixjLGQpO2E9dGhpcy4kLnVmKGEpO3ZhciBoPUFycmF5KGI/dGhpcy56YS5pYTpmKSxsPXtjb3VudDowLFg6aC5sZW5ndGgscmV2ZXJzZTpiLEw6ZH0scD0xPHRoaXMuamIoKS5aZCgpO2EuZm9yRWFjaChmdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcy4kLnVkKGEpLGI9dGhpcy4kLlhkKGEpP2U6YlswXSxiPXRoaXMudWEuWWYoYiksYz0wO251bGwhPWImJmwuY291bnQ8bC5YOyl7aWYocCl7Zm9yKHZhciBkPWIsZj1hLEw9bCxEYj1cbmgsVGM9ZC5zLmpiKCksb2U9LTEsTmE9MDtOYTxkLmEubGVuZ3RoOysrTmEpaWYoVGMuQmIoZC5hW05hXSxmKSl7b2U9TmE7YnJlYWt9aWYoLTEhPW9lKWZvcihOYT1vZTtOYTxkLmEubGVuZ3RoJiZMLmNvdW50PEwuWDsrK05hKVRjLkJiKGQuYVtOYV0sZikmJlFmKGQsTCxEYixOYSl9ZWxzZSBiLlZhKGEsbCxoKTswIT1sLkx8fGIua2QoYSk/Yz0wOmMrKztiPTI9PWM/bnVsbDpiLm5leHQoKX19LHRoaXMpO2gubGVuZ3RoPmwuY291bnQmJmguc3BsaWNlKGwuY291bnQsaC5sZW5ndGgtbC5jb3VudCk7cmV0dXJuIGI/SWYoaCxiLGMsZCk6aH07bS5jbGVhcj1mdW5jdGlvbigpe3RoaXMudWE9UmYodGhpcyk7dGhpcy56YS5jbGVhcigpfTttLlBhPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnVhLlBhKGEpfTttLm1pbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLkhiKHRoaXMuJC5taW4uYmluZCh0aGlzLiQpKX07bS5tYXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5IYih0aGlzLiQubWF4LmJpbmQodGhpcy4kKSl9O1xuZnVuY3Rpb24gU2YoYSxiLGMpe2lmKCFhLiQuT2QoYi5hW2NdKSlpZigxPGIuYVtjXS5sZW5ndGgpe2lmKG51bGw9PT1iLmFbY11bMF0pcmV0dXJuIG51bGx9ZWxzZSByZXR1cm4gbnVsbDtyZXR1cm5bYi5hW2NdLGEueWY/W2IuQltjXV06Yi5CW2NdXX1tLkhiPWZ1bmN0aW9uKGEpe3ZhciBiO2E6e2I9UGYodGhpcy51YSk7dmFyIGM9MDtkbyBpZihjPj1iLmEubGVuZ3RoKWI9Yi55YSxjPTA7ZWxzZXt2YXIgZD1TZih0aGlzLGIsYyk7aWYobnVsbCE9PWQpe2I9ZDticmVhayBhfWMrK313aGlsZShudWxsIT09Yik7Yj1udWxsfWE6e2M9VGYodGhpcy51YSk7ZD1jLmEubGVuZ3RoLTE7ZG8gaWYoMD5kKWM9Yy5xYixkPTA7ZWxzZXt2YXIgZT1TZih0aGlzLGMsZCk7aWYobnVsbCE9PWUpe2M9ZTticmVhayBhfWQtLX13aGlsZShudWxsIT09Yyk7Yz1udWxsfXJldHVybiBudWxsPT09Ynx8bnVsbD09PWM/bnVsbDoxPT1hKGJbMF0sY1swXSk/YjpjfTttLk1hPWcoXCJ5ZlwiKTttLmpiPWcoXCIkXCIpO1xubS5RYT1mdW5jdGlvbihhLGIpe3JldHVybiBudWxsIT1hPzA9PXRoaXMuJC5jb21wYXJlKGEsYik6ITF9O20uSmE9ZnVuY3Rpb24oKXtmb3IodmFyIGE9W10sYj1QZih0aGlzLnVhKTtiOylhLnB1c2gobmV3IGhjKGIuc2EsW2IuYSxiLkJdKSksYj1iLnlhO3JldHVybiBhfTtmdW5jdGlvbiBVZihhLGIsYyxkKXthPW5ldyBMZihiLGEsYyk7ZD1WZihkLGEpO2EudWE9ZDtyZXR1cm4gYX1mdW5jdGlvbiBXZihhLGIpe3RoaXMuc2E9YTt0aGlzLnM9Yjt0aGlzLm1iPTA7dGhpcy55YT10aGlzLnFiPXRoaXMuRD1udWxsO3RoaXMuYT1bXTt0aGlzLkI9W107dGhpcy5oPVtdO3RoaXMuWWY9MT09Yi5qYigpLlpkKCk/dGhpcy5QZTp0aGlzLk9lfWZ1bmN0aW9uIFJmKGEpe3JldHVybiBuZXcgV2YoaWMrKyxhKX1mdW5jdGlvbiBQKGEpe3JldHVybiAwPT1hLm1ifW09V2YucHJvdG90eXBlO20ubmV4dD1nKFwieWFcIik7XG5mdW5jdGlvbiBYZihhKXtmdW5jdGlvbiBiKGEpe3JldHVybiBudWxsIT1hP2Euc2EudG9TdHJpbmcoKTpcIl9cIn12YXIgYz1hLnNhK1wiW1wiK2EuYS5qb2luKFwifFwiKStcIl1cIixkPWEuaC5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuc2F9KS5qb2luKFwifFwiKSxlPWEuQi5qb2luKFwiL1wiKSxmPWIoYS5xYikrXCJ7XCIsZj1QKGEpP2YrZTpmK2QsZj1mK1wifVwiK2IoYS5EKTthLnlhJiYoYT1YZihhLnlhKSxjPWMrXCIgIFwiK2FbMF0sZj1mK1wiICBcIithWzFdKTtyZXR1cm5bYyxmXX1tLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9XCJcIixiPVhmKHRoaXMpLGE9YSsoYlswXStcIlxcblwiK2JbMV0rXCJcXG5cIik7dGhpcy5oLmxlbmd0aCYmKGErPXRoaXMuaFswXS50b1N0cmluZygpKTtyZXR1cm4gYX07ZnVuY3Rpb24gUGYoYSl7cmV0dXJuIFAoYSk/YTpQZihhLmhbMF0pfWZ1bmN0aW9uIFRmKGEpe3JldHVybiBQKGEpP2E6VGYoYS5oW2EuaC5sZW5ndGgtMV0pfVxuZnVuY3Rpb24gWWYoYSxiKXtiJiYoYi5xYj1hKTthJiYoYS55YT1iKX1mdW5jdGlvbiBNZihhLGIpe2Zvcih2YXIgYz1iLmxlbmd0aCxkPTAsZT1hPVJmKGEpOzA8Yzspe3ZhciBmPTc2ODw9Yz81MTE6MjU3PD1jJiY1MTE+PWM/YzoyNTcsaD1iLnNsaWNlKGQsZCtmKTthLmE9aC5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEua2V5fSk7YS5CPWgubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlfSk7ZCs9ZjtjLT1mOzA8YyYmKGY9UmYoYS5zKSxZZihhLGYpLGE9Zil9cmV0dXJuIGV9ZnVuY3Rpb24gWmYoYSl7dmFyIGI9YVswXSxjPVJmKGIucyk7Yy5tYj1iLm1iKzE7Yy5oPWE7Zm9yKGI9MDtiPGEubGVuZ3RoOysrYilhW2JdLkQ9YywwPGImJmMuYS5wdXNoKGFbYl0uYVswXSk7cmV0dXJuIGN9XG5mdW5jdGlvbiBOZihhKXt2YXIgYj1hLGM9W107ZG8gYy5wdXNoKGIpLGI9Yi55YTt3aGlsZShiKTtpZig1MTI+PWMubGVuZ3RoKWI9WmYoYyk7ZWxzZXt2YXIgZD1jLmxlbmd0aCxlPTAsYj1SZihhLnMpO2ZvcihiLm1iPWEubWIrMjswPGQ7KXthPTc2ODw9ZD81MTE6MjU3PD1kJiY1MTE+PWQ/ZDoyNTc7dmFyIGY9Yy5zbGljZShlLGUrYSksaD1aZihmKTtoLkQ9YjtiLmgubGVuZ3RoJiYoYi5hLnB1c2goZlswXS5hWzBdKSxZZihiLmhbYi5oLmxlbmd0aC0xXSxoKSk7Yi5oLnB1c2goaCk7ZSs9YTtkLT1hfX1yZXR1cm4gYn1tLmdldD1mdW5jdGlvbihhKXt2YXIgYj0kZih0aGlzLGEpO2lmKFAodGhpcykpe3ZhciBjPU9mO3RoaXMucy5RYSh0aGlzLmFbYl0sYSkmJihjPWMuY29uY2F0KHRoaXMuQltiXSkpO3JldHVybiBjfWI9dGhpcy5zLlFhKHRoaXMuYVtiXSxhKT9iKzE6YjtyZXR1cm4gdGhpcy5oW2JdLmdldChhKX07XG5tLlBhPWZ1bmN0aW9uKGEpe3ZhciBiPSRmKHRoaXMsYSk7cmV0dXJuIHRoaXMucy5RYSh0aGlzLmFbYl0sYSk/ITA6UCh0aGlzKT8hMTp0aGlzLmhbYl0uUGEoYSl9O20ucmVtb3ZlPWZ1bmN0aW9uKGEsYil7YWcodGhpcyxhLC0xLGIpO3JldHVybiBudWxsPT09dGhpcy5EPyhhPXRoaXMsMT09dGhpcy5oLmxlbmd0aCYmKGE9dGhpcy5oWzBdLGEuRD1udWxsKSxhKTp0aGlzfTtmdW5jdGlvbiBiZyhhKXtyZXR1cm4gUChhKT9hLmFbMF06YmcoYS5oWzBdKX1mdW5jdGlvbiBjZyhhKXthLmE9W107Zm9yKHZhciBiPTE7YjxhLmgubGVuZ3RoOysrYilhLmEucHVzaChiZyhhLmhbYl0pKX1cbmZ1bmN0aW9uIGFnKGEsYixjLGQpe3ZhciBlPSRmKGEsYiksZj1QKGEpO2lmKCFmKXt2YXIgaD1hLnMuUWEoYS5hW2VdLGIpP2UrMTplO2lmKGFnKGEuaFtoXSxiLGgsZCkpY2coYSk7ZWxzZSByZXR1cm4hMX1lbHNlIGlmKCFhLnMuUWEoYS5hW2VdLGIpKXJldHVybiExO2lmKGEuYS5sZW5ndGg+ZSYmYS5zLlFhKGEuYVtlXSxiKSl7aWYobihkKSYmIWEucy5NYSgpJiZmJiYoaD1hLkJbZV0sZD1GZihoLGQsdm9pZCAwKSwwPmQ/ZD0hMTooaC5zcGxpY2UoZCwxKSxkPSEwKSxkJiZhLnMuWSgpLnJlbW92ZShiLDEpLGEuQltlXS5sZW5ndGgpKXJldHVybiExO2EuYS5zcGxpY2UoZSwxKTtmJiYoZj1hLnMuTWEoKT8xOmEuQltlXS5sZW5ndGgsYS5CLnNwbGljZShlLDEpLGEucy5ZKCkucmVtb3ZlKGIsZikpfWlmKDI1Nj5hLmEubGVuZ3RoJiZudWxsIT09YS5EKXthOntpZihhLnlhJiYyNTY8YS55YS5hLmxlbmd0aCliPWEueWEsZT1kPTAsZj1hLmEubGVuZ3RoKzE7ZWxzZSBpZihhLnFiJiZcbjI1NjxhLnFiLmEubGVuZ3RoKWI9YS5xYixkPWEucWIuYS5sZW5ndGgtMSxlPVAoYSk/ZDpkKzEsZj0wO2Vsc2V7Yj0hMTticmVhayBhfWEuYS5zcGxpY2UoZiwwLGIuYVtkXSk7Yi5hLnNwbGljZShkLDEpO2Q9UChhKT9hLkI6YS5oO1AoYSk/aD1iLkI6KGg9Yi5oLGhbZV0uRD1hKTtkLnNwbGljZShmLDAsaFtlXSk7aC5zcGxpY2UoZSwxKTtQKGIpfHwoY2coYiksY2coYSkpO2I9ITB9Ynx8ZWcoYSxjKX1yZXR1cm4hMH1cbmZ1bmN0aW9uIGVnKGEsYil7dmFyIGMsZCxlO2EueWEmJjUxMT5hLnlhLmEubGVuZ3RoPyhjPWEueWEsZT1kPTApOmEucWImJihjPWEucWIsZD1jLmEubGVuZ3RoLGU9UChjKT9jLkIubGVuZ3RoOmMuaC5sZW5ndGgpO2Q9W2QsMF0uY29uY2F0KGEuYSk7QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShjLmEsZCk7ZD1udWxsO1AoYSk/ZD1hLkI6KGQ9YS5oLGQuZm9yRWFjaChmdW5jdGlvbihhKXthLkQ9Y30pKTtkPVtlLDBdLmNvbmNhdChkKTtBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KFAoYyk/Yy5COmMuaCxkKTtZZihhLnFiLGEueWEpO1AoYyl8fGNnKGMpOy0xIT1iJiYoYS5ELmEuc3BsaWNlKGIsMSksYS5ELmguc3BsaWNlKGIsMSkpfVxubS5BYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9JGYodGhpcyxhKTtpZihQKHRoaXMpKXtpZih0aGlzLnMuUWEodGhpcy5hW2RdLGEpKXtpZihjKXRoaXMucy5ZKCkucmVtb3ZlKGEsdGhpcy5zLk1hKCk/MTp0aGlzLkJbZF0ubGVuZ3RoKSx0aGlzLkJbZF09dGhpcy5zLk1hKCk/YjpbYl07ZWxzZXtpZih0aGlzLnMuTWEoKSl0aHJvdyBuZXcgRCgyMDEsdGhpcy5zLmdldE5hbWUoKSxKU09OLnN0cmluZ2lmeShhKSk7aWYoIUhmKHRoaXMuQltkXSxiKSl0aHJvdyBuZXcgRCgxMDkpO310aGlzLnMuWSgpLmFkZChhLDEpO3JldHVybiB0aGlzfXRoaXMuYS5zcGxpY2UoZCwwLGEpO3RoaXMuQi5zcGxpY2UoZCwwLHRoaXMucy5NYSgpP2I6W2JdKTt0aGlzLnMuWSgpLmFkZChhLDEpOzUxMj09dGhpcy5hLmxlbmd0aD8oZD1SZih0aGlzLnMpLGE9UmYodGhpcy5zKSxhLm1iPTEsYS5hPVt0aGlzLmFbMjU2XV0sYS5oPVt0aGlzLGRdLGEuRD10aGlzLkQsdGhpcy5EPWEsZC5hPXRoaXMuYS5zcGxpY2UoMjU2KSxcbmQuQj10aGlzLkIuc3BsaWNlKDI1NiksZC5EPWEsWWYoZCx0aGlzLnlhKSxZZih0aGlzLGQpLGQ9YSk6ZD10aGlzO3JldHVybiBkfWQ9dGhpcy5zLlFhKHRoaXMuYVtkXSxhKT9kKzE6ZDthPXRoaXMuaFtkXS5BYihhLGIsYyk7UChhKXx8MSE9YS5hLmxlbmd0aHx8KHRoaXMuYS5zcGxpY2UoZCwwLGEuYVswXSksYS5oWzFdLkQ9dGhpcyxhLmhbMF0uRD10aGlzLHRoaXMuaC5zcGxpY2UoZCwxLGEuaFsxXSksdGhpcy5oLnNwbGljZShkLDAsYS5oWzBdKSk7cmV0dXJuIDUxMj09dGhpcy5hLmxlbmd0aD9mZyh0aGlzKTp0aGlzfTtcbmZ1bmN0aW9uIGZnKGEpe3ZhciBiPVJmKGEucyksYz1SZihhLnMpO2IuRD1hLkQ7Yi5tYj1hLm1iKzE7Yi5hPVthLmFbMjU2XV07Yi5oPVthLGNdO2EuYS5zcGxpY2UoMjU2LDEpO2MuRD1iO2MubWI9YS5tYjtjLmE9YS5hLnNwbGljZSgyNTYpO2MuaD1hLmguc3BsaWNlKDI1Nyk7Yy5oLmZvckVhY2goZnVuY3Rpb24oYSl7YS5EPWN9KTthLkQ9YjtZZihjLGEueWEpO1lmKGEsYyk7cmV0dXJuIGJ9ZnVuY3Rpb24gJGYoYSxiKXtmb3IodmFyIGM9MCxkPWEuYS5sZW5ndGgsZT1hLnMuamIoKTtjPGQ7KXt2YXIgZj1jK2Q+PjE7LTE9PWUuY29tcGFyZShhLmFbZl0sYik/Yz1mKzE6ZD1mfXJldHVybiBjfW0uUGU9ZnVuY3Rpb24oYSl7aWYoIVAodGhpcykpe3ZhciBiPSRmKHRoaXMsYSk7dGhpcy5zLlFhKHRoaXMuYVtiXSxhKSYmYisrO3JldHVybiB0aGlzLmhbYl0uUGUoYSl9cmV0dXJuIHRoaXN9O1xubS5PZT1mdW5jdGlvbihhKXtpZighUCh0aGlzKSl7dmFyIGI9JGYodGhpcyxhKTt0aGlzLnMuUWEodGhpcy5hW2JdLGEpJiYoYS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhPT1GfSl8fGIrKyk7cmV0dXJuIHRoaXMuaFtiXS5PZShhKX1yZXR1cm4gdGhpc307XG5tLlZhPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVybiBhWzBdP2FbMV0/MDoxOi0xfXZhciBlPXRoaXMucy5qYigpLGY9MCxoPXRoaXMuYS5sZW5ndGgtMSxsPXRoaXMuYSxwPWQoZS53YihsW2ZdLGEpKSxMPWQoZS53YihsW2hdLGEpKTtpZigxIT1wJiYoLTEhPXB8fC0xIT1MKSl7dmFyIHNhPWZ1bmN0aW9uKGEsYil7Yj1hK2I+PjE7cmV0dXJuIGI9PWE/YisxOmJ9LGNhPWZ1bmN0aW9uKGIsYyxmKXtpZihiPj1jKXJldHVybiAwPT1mP2M6LTE7dmFyIGg9ZChlLndiKGxbYl0sYSkpO2lmKDA9PWgpcmV0dXJuIGI7aWYoMT09aClyZXR1cm4tMTtoPXNhKGIsYyk7aWYoaD09YylyZXR1cm4gMD09Zj9jOi0xO3ZhciBwPWQoZS53YihsW2hdLGEpKTtyZXR1cm4gMD09cD9jYShiLGgscCk6LTE9PXA/Y2EoaCsxLGMsZik6Y2EoYisxLGgscCl9LENiPWZ1bmN0aW9uKGIsYyl7aWYoYj49YylyZXR1cm4gYjt2YXIgZj1kKGUud2IobFtjXSxhKSk7aWYoMD09ZilyZXR1cm4gYztcbmlmKC0xPT1mKXJldHVybiBiO2Y9c2EoYixjKTtpZihmPT1jKXJldHVybiBiO3ZhciBoPWQoZS53YihsW2ZdLGEpKTtyZXR1cm4gMD09aD9DYihmLGMpOjE9PWg/Q2IoYixmLTEpOi0xfTswIT1wJiYoZj1jYShmKzEsaCxMKSk7LTEhPWYmJihoPUNiKGYsaCksLTEhPWgmJmg+PWYmJmdnKHRoaXMsYixjLGYsaCsxKSl9fTtmdW5jdGlvbiBRZihhLGIsYyxkKXtpZihhLnMuTWEoKSkhYi5yZXZlcnNlJiZiLkw/Yi5MLS06Y1tiLmNvdW50KytdPWEuQltkXTtlbHNlIGZvcih2YXIgZT0wO2U8YS5CW2RdLmxlbmd0aCYmYi5jb3VudDxjLmxlbmd0aDsrK2UpIWIucmV2ZXJzZSYmYi5MP2IuTC0tOmNbYi5jb3VudCsrXT1hLkJbZF1bZV19ZnVuY3Rpb24gZ2coYSxiLGMsZCxlKXtmb3IoO2Q8ZSYmKGIucmV2ZXJzZXx8IShiLmNvdW50Pj1iLlgpKTsrK2QpUWYoYSxiLGMsZCl9XG5tLmZpbGw9ZnVuY3Rpb24oYSxiKXtpZihQKHRoaXMpKWZvcih2YXIgYz0wO2M8dGhpcy5CLmxlbmd0aCYmMDxhLmNvdW50OysrYylpZigwPGEub2Zmc2V0KXtpZihhLm9mZnNldC09dGhpcy5zLk1hKCk/MTp0aGlzLkJbY10ubGVuZ3RoLDA+YS5vZmZzZXQpZm9yKHZhciBkPXRoaXMuQltjXS5sZW5ndGgrYS5vZmZzZXQ7ZDx0aGlzLkJbY10ubGVuZ3RoJiYwPGEuY291bnQ7KytkKWJbYS50ZSsrXT10aGlzLkJbY11bZF0sYS5jb3VudC0tfWVsc2UgaWYodGhpcy5zLk1hKCkpYlthLnRlKytdPXRoaXMuQltjXSxhLmNvdW50LS07ZWxzZSBmb3IoZD0wO2Q8dGhpcy5CW2NdLmxlbmd0aCYmMDxhLmNvdW50OysrZCliW2EudGUrK109dGhpcy5CW2NdW2RdLGEuY291bnQtLTtlbHNlIGZvcihjPTA7Yzx0aGlzLmgubGVuZ3RoJiYwPGEuY291bnQ7KytjKXRoaXMuaFtjXS5maWxsKGEsYil9O1xuZnVuY3Rpb24gVmYoYSxiKXt2YXIgYz1iLlkoKTthPWEubWFwKGZ1bmN0aW9uKGEpe3ZhciBkPW5ldyBXZihhLmlkKCksYik7ZC5hPWEubVswXTtkLkI9YS5tWzFdO2QuYS5mb3JFYWNoKGZ1bmN0aW9uKGEsZSl7Yy5hZGQoYSxiLk1hKCk/MTpkLkJbZV0ubGVuZ3RoKX0pO3JldHVybiBkfSk7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aC0xOysrZClZZihhW2RdLGFbZCsxXSk7cmV0dXJuIDE8YS5sZW5ndGg/TmYoYVswXSk6YVswXX1tLmtkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnMuamIoKS5rZCh0aGlzLmFbMF0sYSl9O2Z1bmN0aW9uIGhnKGEpe3RoaXMuWGM9MD09YT9pZzpqZzt0aGlzLmNlPTA9PWE/ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/YS5yZXZlcnNlKCk6bnVsbH06ZnVuY3Rpb24oYSl7cmV0dXJuIGF8fG51bGx9O3RoaXMuaWU9MD09YT9rZzpsZ31mdW5jdGlvbiBqZyhhLGIpe3JldHVybiBhPmI/MTphPGI/LTE6MH1mdW5jdGlvbiBpZyhhLGIpe3JldHVybiBqZyhiLGEpfWZ1bmN0aW9uIGxnKGEsYil7cmV0dXJuIEZkKGEsYil9ZnVuY3Rpb24ga2coYSxiKXtyZXR1cm4gRmQoYixhKX1tPWhnLnByb3RvdHlwZTttLndiPWZ1bmN0aW9uKGEsYil7Yj10aGlzLmNlKGIpO3ZhciBjPVtiLmZyb209PUYsYi5vPT1GXTtpZighY1swXSl7dmFyIGQ9dGhpcy5YYyhhLGIuZnJvbSk7Y1swXT1iLmVhPzE9PWQ6LTEhPWR9Y1sxXXx8KGQ9dGhpcy5YYyhhLGIubyksY1sxXT1iLm5hPy0xPT1kOjEhPWQpO3JldHVybiBjfTttLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5YYyhhLGIpfTtcbm0ubWluPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE8Yj8xOmE9PWI/MDotMX07bS5tYXg9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT5iPzE6YT09Yj8wOi0xfTttLkJiPWZ1bmN0aW9uKGEsYil7YT10aGlzLndiKGEsYik7cmV0dXJuIGFbMF0mJmFbMV19O20ua2Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5CYihhLGIpfTttLnVmPWZ1bmN0aW9uKGEpe3JldHVybiBhLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PWF9KS5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMuaWUoYSxjKX0uYmluZCh0aGlzKSl9O20uWGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2UoYSkuZnJvbT09Rn07bS51ZD1mdW5jdGlvbihhKXthPXRoaXMuY2UoYSk7cmV0dXJuW2EuZnJvbSxhLm9dfTttLk9kPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09YX07bS5aZD1rKDEpO1xubS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbXBhcmU9PWlnP1wiU2ltcGxlQ29tcGFyYXRvcl9ERVNDXCI6XCJTaW1wbGVDb21wYXJhdG9yX0FTQ1wifTtmdW5jdGlvbiBtZyhhKXtoZy5jYWxsKHRoaXMsYSk7dGhpcy5YYz0wPT1hP25nOm9nfXIobWcsaGcpO2Z1bmN0aW9uIG9nKGEsYil7cmV0dXJuIG51bGw9PT1hP251bGw9PT1iPzA6LTE6bnVsbD09PWI/MTpqZyhhLGIpfWZ1bmN0aW9uIG5nKGEsYil7cmV0dXJuIG9nKGIsYSl9bWcucHJvdG90eXBlLkJiPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PT1hP0FkKGIpOm1nLmhiLkJiLmNhbGwodGhpcyxhLGIpfTttZy5wcm90b3R5cGUuSGI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09PWE/bnVsbD09PWI/MDotMTpudWxsPT09Yj8xOm51bGx9O21nLnByb3RvdHlwZS5taW49ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLkhiKGEsYik7bnVsbD09PWMmJihjPW1nLmhiLm1pbi5jYWxsKHRoaXMsYSxiKSk7cmV0dXJuIGN9O1xubWcucHJvdG90eXBlLm1heD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuSGIoYSxiKTtudWxsPT09YyYmKGM9bWcuaGIubWF4LmNhbGwodGhpcyxhLGIpKTtyZXR1cm4gY307ZnVuY3Rpb24gcGcoYSl7dGhpcy5wYT1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IGhnKGEpfSl9ZnVuY3Rpb24gcWcoYSxiLGMsZCl7Zm9yKHZhciBlPTAsZj0wO2Y8YS5wYS5sZW5ndGgmJjA9PWU7KytmKWU9ZChhLnBhW2ZdLGJbZl0sY1tmXSk7cmV0dXJuIGV9bT1wZy5wcm90b3R5cGU7bS5jb21wYXJlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHFnKHRoaXMsYSxiLGZ1bmN0aW9uKGEsYixlKXtyZXR1cm4gYj09Rnx8ZT09Rj8wOmEuY29tcGFyZShiLGUpfSl9O20ubWluPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHFnKHRoaXMsYSxiLGZ1bmN0aW9uKGEsYixlKXtyZXR1cm4gYS5taW4oYixlKX0pfTttLm1heD1mdW5jdGlvbihhLGIpe3JldHVybiBxZyh0aGlzLGEsYixmdW5jdGlvbihhLGIsZSl7cmV0dXJuIGEubWF4KGIsZSl9KX07XG5tLndiPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVshMCwhMF0sZD0wO2Q8dGhpcy5wYS5sZW5ndGgmJihjWzBdfHxjWzFdKTsrK2Qpe3ZhciBlPXRoaXMucGFbZF0ud2IoYVtkXSxiW2RdKTtjWzBdPWNbMF0mJmVbMF07Y1sxXT1jWzFdJiZlWzFdfXJldHVybiBjfTttLkJiPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPSEwLGQ9MDtkPHRoaXMucGEubGVuZ3RoJiZjOysrZCljPXRoaXMucGFbZF0uQmIoYVtkXSxiW2RdKTtyZXR1cm4gY307bS5rZD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnBhWzBdLkJiKGFbMF0sYlswXSl9O1xubS51Zj1mdW5jdGlvbihhKXt2YXIgYj1hLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYS5ldmVyeShnYSl9KTthPUFycmF5KHRoaXMucGEubGVuZ3RoKTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylhW2NdPWIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhW2NdfSk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEsYil7YS5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMucGFbYl0uaWUoYSxjKX0uYmluZCh0aGlzKSl9LHRoaXMpO2I9QXJyYXkoYi5sZW5ndGgpO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspYltjXT1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYVtjXX0pO3JldHVybiBiLnNvcnQoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPTA7ZDx0aGlzLnBhLmxlbmd0aCYmMD09YzsrK2QpYz10aGlzLnBhW2RdLmllKGFbZF0sYltkXSk7cmV0dXJuIGN9LmJpbmQodGhpcykpfTttLlhkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnBhWzBdLlhkKGFbMF0pfTtcbm0udWQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wYVtiXS51ZChhKVswXX0sdGhpcyk7YT1hLm1hcChmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnBhW2JdLnVkKGEpWzFdfSx0aGlzKTtyZXR1cm5bYixhXX07bS5PZD1mdW5jdGlvbihhKXtyZXR1cm4gYS5ldmVyeShmdW5jdGlvbihhLGMpe3JldHVybiB0aGlzLnBhW2NdLk9kKGEpfSx0aGlzKX07bS5aZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhLmxlbmd0aH07ZnVuY3Rpb24gcmcoYSl7cGcuY2FsbCh0aGlzLGEpO3RoaXMucGE9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBtZyhhKX0pfXIocmcscGcpO2Z1bmN0aW9uIHNnKGEpe2lmKDE9PWEuZi5sZW5ndGgpcmV0dXJuIG5ldyBoZyhhLmZbMF0ub3JkZXIpO3ZhciBiPWEuZi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEub3JkZXJ9KTtyZXR1cm4gYS5mLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYmEuaGMoKX0pP25ldyByZyhiKTpuZXcgcGcoYil9O2Z1bmN0aW9uIHRnKGEpe3RoaXMuZmE9YTt0aGlzLm9iPUIoKTt0aGlzLk9jPW5ldyBKZjt0aGlzLnphPW5ldyBKZn1tPXRnLnByb3RvdHlwZTttLmdldE5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mYS5nZXROYW1lKCl9O20uYWRkPWZ1bmN0aW9uKGEsYil7bnVsbD09PWE/KHRoaXMub2IuYWRkKGIpLHRoaXMuT2MuYWRkKGEsMSkpOnRoaXMuZmEuYWRkKGEsYil9O20uc2V0PWZ1bmN0aW9uKGEsYil7bnVsbD09PWE/KHRoaXMub2IuY2xlYXIoKSx0aGlzLk9jLmNsZWFyKCksdGhpcy5hZGQoYSxiKSk6dGhpcy5mYS5zZXQoYSxiKX07bS5yZW1vdmU9ZnVuY3Rpb24oYSxiKXtudWxsPT09YT9iPyh0aGlzLm9iLmRlbGV0ZShiKSx0aGlzLk9jLnJlbW92ZShhLDEpKToodGhpcy5vYi5jbGVhcigpLHRoaXMuT2MuY2xlYXIoKSk6dGhpcy5mYS5yZW1vdmUoYSxiKX07bS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hP0ModGhpcy5vYik6dGhpcy5mYS5nZXQoYSl9O20uWmM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZmEuWmMoYSl9O1xubS5ZPWZ1bmN0aW9uKCl7S2YodGhpcy56YSxbdGhpcy5mYS5ZKCksdGhpcy5PY10pO3JldHVybiB0aGlzLnphfTttLlZhPWZ1bmN0aW9uKGEsYixjLGQpe2I9dGhpcy5mYS5WYShhLGIsYyxkKTtyZXR1cm4gbnVsbCE9YT9iOmIuY29uY2F0KEModGhpcy5vYikpfTttLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5vYi5jbGVhcigpO3RoaXMuZmEuY2xlYXIoKX07bS5QYT1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWE/MCE9dGhpcy5vYi5zaXplOnRoaXMuZmEuUGEoYSl9O20ubWluPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmEubWluKCl9O20ubWF4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmEubWF4KCl9O20uSmE9ZnVuY3Rpb24oKXtyZXR1cm5bbmV3IGhjKC0yLEModGhpcy5vYikpXS5jb25jYXQodGhpcy5mYS5KYSgpKX07bS5qYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZhLmpiKCl9O1xuZnVuY3Rpb24gdWcoYSxiKXtmb3IodmFyIGM9LTEsZD0wO2Q8Yi5sZW5ndGg7KytkKWlmKC0yPT1iW2RdLmlkKCkpe2M9ZDticmVha31pZigtMT09Yyl0aHJvdyBuZXcgRCgxMDIpO2Q9YltjXS5tO2I9Yi5zbGljZSgwKTtiLnNwbGljZShjLDEpO2E9YShiKTt2YXIgZT1uZXcgdGcoYSk7ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Uub2IuYWRkKGEpfSk7cmV0dXJuIGV9bS5NYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZhLk1hKCl9O2Z1bmN0aW9uIHZnKGEpe3RoaXMuQT1hO3RoaXMuc2I9QigpO3RoaXMuJD1uZXcgaGcoMSl9bT12Zy5wcm90b3R5cGU7bS5nZXROYW1lPWcoXCJBXCIpO20uYWRkPWZ1bmN0aW9uKGEpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiBhKXRocm93IG5ldyBEKDEwMyk7dGhpcy5zYi5hZGQoYSl9O20uc2V0PWZ1bmN0aW9uKGEsYil7dGhpcy5hZGQoYSxiKX07bS5yZW1vdmU9ZnVuY3Rpb24oYSl7dGhpcy5zYi5kZWxldGUoYSl9O20uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlBhKGEpP1thXTpbXX07bS5taW49ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5IYih0aGlzLiQubWluLmJpbmQodGhpcy4kKSl9O20ubWF4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuSGIodGhpcy4kLm1heC5iaW5kKHRoaXMuJCkpfTtcbm0uSGI9ZnVuY3Rpb24oYSl7aWYoMD09dGhpcy5zYi5zaXplKXJldHVybiBudWxsO3ZhciBiPUModGhpcy5zYikucmVkdWNlKGZ1bmN0aW9uKGIsZCl7cmV0dXJuIG51bGw9PT1ifHwxPT1hKGQsYik/ZDpifSxudWxsKTtyZXR1cm5bYixbYl1dfTttLlpjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2Iuc2l6ZX07bS5WYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hfHxbRGQoKV07YT1DKHRoaXMuc2IpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gZS5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLiQuQmIoYSxiKX0sdGhpcyl9LHRoaXMpO3JldHVybiBJZihhLGIsYyxkKX07bS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuc2IuY2xlYXIoKX07bS5QYT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zYi5oYXMoYSl9O20uSmE9ZnVuY3Rpb24oKXtyZXR1cm5bbmV3IGhjKDAsQyh0aGlzLnNiKSldfTttLmpiPWcoXCIkXCIpO1xuZnVuY3Rpb24gd2coYSxiKXt2YXIgYz1uZXcgdmcoYSk7YlswXS5tLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5hZGQoYSxhKX0pO3JldHVybiBjfW0uTWE9ayghMCk7bS5ZPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IEpmO2EuaWE9dGhpcy5zYi5zaXplO3JldHVybiBhfTtmdW5jdGlvbiB4ZyhhKXt0aGlzLk9hPWEuYih2Yyk7dGhpcy5DPWEuYih4Yyk7dGhpcy5WPWEuYih3Yyl9eGcucHJvdG90eXBlLkVhPWZ1bmN0aW9uKGEpe3ZhciBiPWEub2EoKSxjPWZ1bmN0aW9uKCl7aWYoMD09Yi5sZW5ndGgpcmV0dXJuIHYoKTt2YXIgYT1iLnNoaWZ0KCk7cmV0dXJuKGEuQ2IoKT95Zyh0aGlzLGEpOnpnKHRoaXMsYSkpLnRoZW4oYyl9LmJpbmQodGhpcyk7cmV0dXJuIGMoKX07ZnVuY3Rpb24gemcoYSxiKXt2YXIgYz1hLk9hLkZiKDAsW2JdKTthPWMuSShiLmdldE5hbWUoKSxiLmtiLmJpbmQoYiksMCkuZ2V0KFtdKS50aGVuKGZ1bmN0aW9uKGEpe3RoaXMuVi5XYihiLmdldE5hbWUoKSxhKTtBZyh0aGlzLGIsYSl9LmJpbmQoYSkpO2Mua2EoKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIEFnKGEsYixjKXt2YXIgZD1hLkMubGMuZ2V0KGIuZ2V0TmFtZSgpKXx8W107Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2QuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgYz1hLm5iKGIuZ2V0TmFtZSgpKTtiLmFkZChjLGEuaWQoKSl9KX0pfWZ1bmN0aW9uIHlnKGEsYil7dmFyIGM9YS5PYS5GYigwLFtiXSksZD1jLkkoYi5nZXROYW1lKCksYi5rYiwwKS5nZXQoW10pLnRoZW4oZnVuY3Rpb24oYSl7dGhpcy5WLldiKGIuZ2V0TmFtZSgpLGEpfS5iaW5kKGEpKTthPWIuRGEoKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIEJnKHRoaXMsYSxjKX0sYSkuY29uY2F0KENnKGEsYixjKSk7Yy5rYSgpO3JldHVybiBlYihhLmNvbmNhdChkKSl9XG5mdW5jdGlvbiBCZyhhLGIsYyl7Yz1jLkkoYi5qKCksamMsMSk7dmFyIGQ9c2coYik7cmV0dXJuIGMuZ2V0KFtdKS50aGVuKGZ1bmN0aW9uKGEpe2lmKDA8YS5sZW5ndGgpe2lmKERnKGIpKXt2YXIgYz1VZi5iaW5kKHZvaWQgMCxkLGIuaigpLGIuRGMpO2E9dWcoYyxhKX1lbHNlIGE9VWYoZCxiLmooKSxiLkRjLGEpO3RoaXMuQy5zZXQoYi5tYyxhKX19LmJpbmQoYSkpfWZ1bmN0aW9uIENnKGEsYixjKXtyZXR1cm4gYy5JKG5mKGIpLGpjLDEpLmdldChbXSkudGhlbihmdW5jdGlvbihhKXswPGEubGVuZ3RoJiYoYT13ZyhuZihiKSxhKSx0aGlzLkMuc2V0KGIuZ2V0TmFtZSgpLGEpKX0uYmluZChhKSl9O2Z1bmN0aW9uIEVnKCl7dGhpcy5aPXkoKTt0aGlzLmxjPXkoKX1FZy5wcm90b3R5cGUuRWE9ZnVuY3Rpb24oYSl7YS5vYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9W107dGhpcy5sYy5zZXQoYS5nZXROYW1lKCksYik7dmFyIGQ9bmYoYSk7aWYobnVsbD09PXRoaXMuZ2V0KGQpKXt2YXIgZT1uZXcgdmcoZCk7Yi5wdXNoKGUpO3RoaXMuWi5zZXQoZCxlKX1hLkRhKCkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYztjPXNnKGEpO2M9bmV3IExmKGEuaigpLGMsYS5EYyk7Yz1EZyhhKSYmMT09YS5mLmxlbmd0aD9uZXcgdGcoYyk6YztiLnB1c2goYyk7dGhpcy5aLnNldChhLmooKSxjKX0sdGhpcyl9LHRoaXMpO3JldHVybiB2KCl9O0VnLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuWi5nZXQoYSl8fG51bGx9O1xuRWcucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubGMuZ2V0KGEpfHxudWxsO251bGw9PT1jJiYoYz1bXSx0aGlzLmxjLnNldChhLGMpKTthPW51bGw7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspaWYoY1tkXS5nZXROYW1lKCk9PWIuZ2V0TmFtZSgpKXthPWQ7YnJlYWt9bnVsbCE9PWEmJjA8Yy5sZW5ndGg/Yy5zcGxpY2UoYSwxLGIpOmMucHVzaChiKTt0aGlzLlouc2V0KGIuZ2V0TmFtZSgpLGIpfTtmdW5jdGlvbiBGZyhhLGIpe3ZhciBjPVtdLGQ9bnVsbCxlPW51bGw7bWUoYSxmdW5jdGlvbihhKXt2YXIgZj1iKGEpO251bGw9PWEuZ2V0UGFyZW50KCk/ZT1mOksoZCxmKTt2YXIgbD1hLmdldFBhcmVudCgpO251bGwhPT1sJiZKKGwpLmxlbmd0aD09SihkKS5sZW5ndGgmJihsPWMuaW5kZXhPZihkKSwtMSE9bCYmYy5zcGxpY2UobCwxKSk7MTxKKGEpLmxlbmd0aCYmYy5wdXNoKGYpO2Q9bnVsbD09PWEuaD9jW2MubGVuZ3RoLTFdOmZ9KTtyZXR1cm4gZX1mdW5jdGlvbiBHZyhhKXtyZXR1cm4gSGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuaH0pfVxuZnVuY3Rpb24gSWcoYSl7dmFyIGI9YS5nZXRQYXJlbnQoKSxjPTA7bnVsbCE9PWImJihjPUooYikuaW5kZXhPZihhKSxiLnJlbW92ZUNoaWxkKGEpKTt2YXIgZD1KKGEpLnNsaWNlKCk7ZC5mb3JFYWNoKGZ1bmN0aW9uKGQsZil7YS5yZW1vdmVDaGlsZChkKTtudWxsPT09Ynx8amUoYixkLGMrZil9KTtyZXR1cm57cGFyZW50OmIsY2hpbGRyZW46ZH19ZnVuY3Rpb24gSmcoYSxiKXtKKGEpLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbihjKXthLnJlbW92ZUNoaWxkKGMpO0soYixjKX0pO0soYSxiKX1mdW5jdGlvbiBLZyhhKXt2YXIgYj1pZShhLDApO0lnKGEpO0pnKGIsYSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBMZyhhLGIsYyl7dmFyIGQ9aWUoYSwwKSxlPUooZCkuc2xpY2UoKTtpZighZS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBiKGEpfSkpcmV0dXJuIGE7SWcoYSk7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsaCl7aWYoYihlKSl7dmFyIGY9YyhhKTtrZShkLGgpO0soZixlKTtqZShkLGYsaCl9fSk7cmV0dXJuIGR9ZnVuY3Rpb24gTWcoYSxiLGMsZCl7dmFyIGU9YS5nZXRQYXJlbnQoKTtudWxsIT09ZSYmKGE9SihlKS5pbmRleE9mKGEpLGtlKGUsYSksamUoZSxjLGEpKTtKKGIpLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbihhKXtiLnJlbW92ZUNoaWxkKGEpO0soZCxhKX0pO3JldHVybiBjfWZ1bmN0aW9uIEhnKGEsYixjKXtmdW5jdGlvbiBkKGEpe2IoYSkmJmUucHVzaChhKTtudWxsIT1jJiZjKGEpfHxKKGEpLmZvckVhY2goZCl9dmFyIGU9W107ZChhKTtyZXR1cm4gZX1cbmZ1bmN0aW9uIE5nKGEsYil7dmFyIGM9Ynx8ZnVuY3Rpb24oYSl7cmV0dXJuIGEudG9TdHJpbmcoKStcIlxcblwifSxkPVwiXCI7bWUoYSxmdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGhlKGEpO2IrKylkKz1cIi1cIjtkKz1jKGEpfSk7cmV0dXJuIGR9O2Z1bmN0aW9uIE9nKGEpe25lLmNhbGwodGhpcyk7dGhpcy5wYj1hO3RoaXMuV2E9ITF9cihPZyxuZSk7bT1PZy5wcm90b3R5cGU7bS5OYj1mdW5jdGlvbigpe3JldHVybiBGZyh0aGlzLGZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiBPZyl7dmFyIGI9bmV3IE9nKGEucGIpO2IuV2E9YS5XYTthPWEuVygpO2Iuc2E9YTtyZXR1cm4gYn1yZXR1cm4gYS5OYigpfSl9O20ubGI9ZnVuY3Rpb24oYSl7dmFyIGI9YXx8W107bWUodGhpcyxmdW5jdGlvbihhKXthIT10aGlzJiZhLmxiKGIpfS5iaW5kKHRoaXMpKTthPUIoYik7cmV0dXJuIEMoYSl9O20udT1mdW5jdGlvbihhKXt2YXIgYj1udWxsIT1hP2E6QigpO21lKHRoaXMsZnVuY3Rpb24oYSl7YSE9dGhpcyYmYS51KGIpfS5iaW5kKHRoaXMpKTtyZXR1cm4gYn07bS52ZD1mdW5jdGlvbihhKXt0aGlzLldhIT1hJiYodGhpcy5XYT1hLHRoaXMucGI9XCJhbmRcIj09dGhpcy5wYj9cIm9yXCI6XCJhbmRcIixKKHRoaXMpLmZvckVhY2goZnVuY3Rpb24oYil7cmV0dXJuIGIudmQoYSl9KSl9O1xubS5ldmFsPWZ1bmN0aW9uKGEpe3ZhciBiPUoodGhpcykubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiLmV2YWwoYSl9KTtyZXR1cm4gUGcodGhpcyxiKX07ZnVuY3Rpb24gUGcoYSxiKXtyZXR1cm5cImFuZFwiPT1hLnBiP09kKGIpOlBkKGIpfW0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImNvbWJpbmVkX3ByZWRfXCIrdGhpcy5wYi50b1N0cmluZygpfTttLndlPWZ1bmN0aW9uKCl7aWYoXCJvclwiPT10aGlzLnBiKXt2YXIgYT1uZXcgSGQ7Sih0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9Yi53ZSgpLnFhKCk7YS5hZGQoYil9KTtyZXR1cm4gYX1yZXR1cm4gbmV3IEhkfTttLmxkPWZ1bmN0aW9uKCl7cmV0dXJuXCJvclwiPT10aGlzLnBiP1FnKHRoaXMpOiExfTtcbmZ1bmN0aW9uIFFnKGEpe3ZhciBiPW51bGw7cmV0dXJuIEooYSkuZXZlcnkoZnVuY3Rpb24oYSl7aWYoIShhIGluc3RhbmNlb2YgcWUmJmEubGQoKSkpcmV0dXJuITE7bnVsbD09PWImJihiPWEuSik7cmV0dXJuIGIuaigpPT1hLkouaigpfSl9O2Z1bmN0aW9uIFJnKGEsYixjKXtuZS5jYWxsKHRoaXMpO3RoaXMuZ2E9YTt0aGlzLm1hPWI7dGhpcy5GPWM7dGhpcy5kZT1udWxsO2E9ZWUoKTt0aGlzLnZjPWZlKGEsdGhpcy5nYS5HKCksdGhpcy5GKTt0aGlzLm5nPWEuWmUuZ2V0KHRoaXMuZ2EuRygpKXx8bnVsbH1yKFJnLG5lKTttPVJnLnByb3RvdHlwZTttLk5iPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IFJnKHRoaXMuZ2EsdGhpcy5tYSx0aGlzLkYpLGI9dGhpcy5XKCk7YS5zYT1iO3JldHVybiBhfTttLmxiPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPyhhLnB1c2godGhpcy5nYSksYS5wdXNoKHRoaXMubWEpLGEpOlt0aGlzLmdhLHRoaXMubWFdfTttLnU9ZnVuY3Rpb24oYSl7YT1udWxsIT1hP2E6QigpO2EuYWRkKHRoaXMuZ2EuSSgpKTthLmFkZCh0aGlzLm1hLkkoKSk7cmV0dXJuIGF9O1xubS5yZXZlcnNlPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5GO3N3aXRjaCh0aGlzLkYpe2Nhc2UgXCJndFwiOmE9XCJsdFwiO2JyZWFrO2Nhc2UgXCJsdFwiOmE9XCJndFwiO2JyZWFrO2Nhc2UgXCJndGVcIjphPVwibHRlXCI7YnJlYWs7Y2FzZSBcImx0ZVwiOmE9XCJndGVcIn1yZXR1cm4gbmV3IFJnKHRoaXMubWEsdGhpcy5nYSxhKX07bS5ldmFsPWZ1bmN0aW9uKGEpe3ZhciBiPWEuZW50cmllcy5maWx0ZXIoZnVuY3Rpb24oYSl7dmFyIGI9SChhLHRoaXMuZ2EpO2E9SChhLHRoaXMubWEpO3JldHVybiB0aGlzLnZjKGIsYSl9LHRoaXMpO3JldHVybiBuZXcgRyhiLGEudSgpKX07bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiam9pbl9wcmVkKFwiK3RoaXMuZ2EuaigpK1wiIFwiK3RoaXMuRitcIiBcIit0aGlzLm1hLmooKStcIilcIn07XG5mdW5jdGlvbiBTZyhhLGIsYyl7dmFyIGQ7LTEhPWIudSgpLmluZGV4T2YoVGQoYS5nYS5JKCkpKT8oZD1iLGI9Yyk6ZD1jO2lmKGQuZW50cmllcy5sZW5ndGg+Yi5lbnRyaWVzLmxlbmd0aCl7YTp7Yz1hLmdhO2EuZ2E9YS5tYTthLm1hPWM7c3dpdGNoKGEuRil7Y2FzZSBcImd0XCI6Yz1cImx0XCI7YnJlYWs7Y2FzZSBcImx0XCI6Yz1cImd0XCI7YnJlYWs7Y2FzZSBcImd0ZVwiOmM9XCJsdGVcIjticmVhaztjYXNlIFwibHRlXCI6Yz1cImd0ZVwiO2JyZWFrO2RlZmF1bHQ6YnJlYWsgYX1hLkY9YzthLnZjPWZlKGVlKCksYS5nYS5HKCksYS5GKX1yZXR1cm5bYixkXX1yZXR1cm5bZCxiXX1mdW5jdGlvbiBUZyhhKXt2YXIgYj17fTthLmxiKCkuZm9yRWFjaChmdW5jdGlvbihhKXtiW2EuZ2V0TmFtZSgpXT1udWxsfSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBVZyhhLGIsYyl7bnVsbD09PWEuZGUmJihhLmRlPVRnKGEubWEuSSgpKSk7dmFyIGQ9bmV3IFJkKG5ldyBoYygtMSxhLmRlKSwhMSk7cmV0dXJuIFZkKGIsYyxkLFtUZChhLm1hLkkoKSldKX1cbmZ1bmN0aW9uIFZnKGEsYixjLGQpe3ZhciBlPVtiLGNdO2R8fChlPVNnKGEsYixjKSk7Yj1lWzBdO2M9ZVsxXTt2YXIgZT1iLGY9YyxoPWEuZ2EsbD1hLm1hO2QmJihlPWMsZj1iLGg9YS5tYSxsPWEuZ2EpO3ZhciBwPW5ldyBjZCxMPVtdO2UuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPVN0cmluZyhIKGEsaCkpO3Auc2V0KGIsYSl9KTt2YXIgc2E9ZS51KCksY2E9Zi51KCk7Zi5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9SChhLGwpLGM9U3RyaW5nKGIpO251bGwhPT1iJiZwLmhhcyhjKT9wLmdldChjKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9VmQoYSxjYSxiLHNhKTtMLnB1c2goYil9KTpkJiZMLnB1c2goVWcodGhpcyxhLGNhKSl9LmJpbmQoYSkpO2E9Yi51KCkuY29uY2F0KGMudSgpKTtyZXR1cm4gbmV3IEcoTCxhKX1cbmZ1bmN0aW9uIFdnKGEsYixjLGQsZSl7ZnVuY3Rpb24gZihhLGIpe2I9bmV3IFJkKGIsMTxzYS5sZW5ndGgpO2E9VmQoYSxjYSxiLHNhKTtMLnB1c2goYSl9dmFyIGg9ZC5kZy5JKCksbD1iLHA9YzstMSE9Yi51KCkuaW5kZXhPZihUZChoKSkmJihsPWMscD1iKTt2YXIgTD1bXSxzYT1wLnUoKSxjYT1sLnUoKTtsLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLm5nKEgoYSxkLndnKSksYj1kLmluZGV4LmdldChiKTswIT1iLmxlbmd0aCYmKGQuaW5kZXguTWEoKT9mKGEsZS5nZXQoYlswXSkpOkVmKGUsYikuZm9yRWFjaChmLmJpbmQobnVsbCxhKSkpfSxhKTthPWwudSgpLmNvbmNhdChwLnUoKSk7cmV0dXJuIG5ldyBHKEwsYSl9O2Z1bmN0aW9uIFhnKGEsYixjKXtyZXR1cm4gbnVsbD09PWI/bmV3IHFlKGEsYixjKTpuKGIuaik/bmV3IFJnKGEsYixjKTpuZXcgcWUoYSxiLGMpfTt2YXIgWWc9e307cShcImxmLnNjaGVtYS5EYXRhU3RvcmVUeXBlXCIsWWcpO1lnLklOREVYRURfREI9MDtZZy5NRU1PUlk9MTtZZy5MT0NBTF9TVE9SQUdFPTI7WWcuRklSRUJBU0U9MztZZy5XRUJfU1FMPTQ7WWcuT0JTRVJWQUJMRV9TVE9SRT01O2Z1bmN0aW9uIFpnKGEsYixjLGQpe3RoaXMubWM9YTt0aGlzLm5hbWU9Yjt0aGlzLkRjPWM7dGhpcy5mPWR9WmcucHJvdG90eXBlLmo9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYytcIi5cIit0aGlzLm5hbWV9O2Z1bmN0aW9uIERnKGEpe3JldHVybiBhLmYuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYS5iYS5oYygpfSl9ZnVuY3Rpb24gUShhLGIsYyxkKXt0aGlzLkE9YTt0aGlzLnRhPWM7dGhpcy5LPWI7dGhpcy5yZD1kO3RoaXMuS2E9bnVsbH1xKFwibGYuc2NoZW1hLlRhYmxlXCIsUSk7US5wcm90b3R5cGUuZ2V0TmFtZT1nKFwiQVwiKTtRLnByb3RvdHlwZS5nZXROYW1lPVEucHJvdG90eXBlLmdldE5hbWU7XG5mdW5jdGlvbiBUZChhKXtyZXR1cm4gYS5LYXx8YS5BfVEucHJvdG90eXBlLnJjPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuQSk7Yi5LYT1hO2IuSWc9dGhpcy5JZztyZXR1cm4gYn07US5wcm90b3R5cGUuYXM9US5wcm90b3R5cGUucmM7US5wcm90b3R5cGUuY3JlYXRlUm93PVEucHJvdG90eXBlLnhiO1EucHJvdG90eXBlLmRlc2VyaWFsaXplUm93PVEucHJvdG90eXBlLmtiO1EucHJvdG90eXBlLkRhPWcoXCJ0YVwiKTtRLnByb3RvdHlwZS5nZXRJbmRpY2VzPVEucHJvdG90eXBlLkRhO1EucHJvdG90eXBlLmxiPWcoXCJLXCIpO1EucHJvdG90eXBlLmdldENvbHVtbnM9US5wcm90b3R5cGUubGI7US5wcm90b3R5cGUuZ2V0Q29uc3RyYWludD1RLnByb3RvdHlwZS5OZTtRLnByb3RvdHlwZS5DYj1nKFwicmRcIik7US5wcm90b3R5cGUucGVyc2lzdGVudEluZGV4PVEucHJvdG90eXBlLkNiO2Z1bmN0aW9uIG5mKGEpe3JldHVybiBhLkErXCIuI1wifTtmdW5jdGlvbiBSKGEsYil7dGhpcy5jaGlsZD1hO3RoaXMuTGI9Yjt0aGlzLkthPW51bGx9bT1SLnByb3RvdHlwZTttLmdldE5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5MYitcIihcIit0aGlzLmNoaWxkLmdldE5hbWUoKStcIilcIn07bS5qPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuTGIrXCIoXCIrdGhpcy5jaGlsZC5qKCkrXCIpXCJ9O20uST1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkLkkoKX07bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmooKX07bS5HPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGQuRygpfTttLkRhPWZ1bmN0aW9uKCl7cmV0dXJuW119O20uQ2E9ayhudWxsKTttLmhjPWsoITEpO20ucmM9ZnVuY3Rpb24oYSl7dGhpcy5LYT1hO3JldHVybiB0aGlzfTtSLnByb3RvdHlwZS5hcz1SLnByb3RvdHlwZS5yYztcbmZ1bmN0aW9uICRnKGEpe2Zvcih2YXIgYj1bYV07YSBpbnN0YW5jZW9mIFI7KWIucHVzaChhLmNoaWxkKSxhPWEuY2hpbGQ7cmV0dXJuIGJ9ZnVuY3Rpb24gYWgoYSl7dGhpcy5LYT1hfHxudWxsO3RoaXMuVT1uZXcgUShcIiNVbmtub3duVGFibGVcIixbXSxbXSwhMSl9bT1haC5wcm90b3R5cGU7bS5nZXROYW1lPWsoXCIqXCIpO20uaj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldE5hbWUoKX07bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmooKX07bS5JPWcoXCJVXCIpO20uRz1rKDQpO20uRGE9ZnVuY3Rpb24oKXtyZXR1cm5bXX07bS5DYT1rKG51bGwpO20uaGM9ayghMSk7cShcImxmLmZuLmF2Z1wiLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUihhLFwiQVZHXCIpfSk7ZnVuY3Rpb24gYmgoYSl7cmV0dXJuIG5ldyBSKGF8fG5ldyBhaCxcIkNPVU5UXCIpfXEoXCJsZi5mbi5jb3VudFwiLGJoKTtmdW5jdGlvbiBjaChhKXtyZXR1cm4gbmV3IFIoYSxcIkRJU1RJTkNUXCIpfXEoXCJsZi5mbi5kaXN0aW5jdFwiLGNoKTtxKFwibGYuZm4ubWF4XCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEsXCJNQVhcIil9KTtxKFwibGYuZm4ubWluXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEsXCJNSU5cIil9KTtxKFwibGYuZm4uc3RkZGV2XCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEsXCJTVERERVZcIil9KTtxKFwibGYuZm4uc3VtXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEsXCJTVU1cIil9KTtxKFwibGYuZm4uZ2VvbWVhblwiLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgUihhLFwiR0VPTUVBTlwiKX0pO2Z1bmN0aW9uIFMoYSxiKXtJLmNhbGwodGhpcyk7dGhpcy5VZj1ifXIoUyxJKTtTLnByb3RvdHlwZS5leGVjPWZ1bmN0aW9uKGEsYil7c3dpdGNoKHRoaXMuVWYpe2Nhc2UgMTpyZXR1cm4gZGgodGhpcyxhLGIpO2Nhc2UgMDpyZXR1cm4gZWgodGhpcyxhLGIpO2RlZmF1bHQ6cmV0dXJuIGZoKHRoaXMsYSxiKX19O1MucHJvdG90eXBlLnRvU3RyaW5nPWsoXCJkdW1teV9ub2RlXCIpO1MucHJvdG90eXBlLlBjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9TdHJpbmcoKX07ZnVuY3Rpb24gZmgoYSxiLGMpe3JldHVybiBuZXcgdShmdW5jdGlvbihhKXthKHRoaXMuY2EoW10sYixjKSl9LmJpbmQoYSkpfWZ1bmN0aW9uIGRoKGEsYixjKXtyZXR1cm4gaWUoYSwwKS5leGVjKGIsYykudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jYShhLGIsYyl9LmJpbmQoYSkpfVxuZnVuY3Rpb24gZWgoYSxiLGMpe3ZhciBkPUooYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmV4ZWMoYixjKX0pO3JldHVybiBlYihkKS50aGVuKGZ1bmN0aW9uKGEpe3ZhciBkPVtdO2EuZm9yRWFjaChmdW5jdGlvbihhKXtmb3IodmFyIGI9MDtiPGEubGVuZ3RoOysrYilkLnB1c2goYVtiXSl9KTtyZXR1cm4gdGhpcy5jYShkLGIsYyl9LmJpbmQoYSkpfTtmdW5jdGlvbiBnaChhKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuQ2U9YX1yKGdoLFMpO2doLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiYWdncmVnYXRpb24oXCIrdGhpcy5DZS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaigpfSkudG9TdHJpbmcoKStcIilcIn07Z2gucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe2EuZm9yRWFjaChmdW5jdGlvbihhKXtoaChuZXcgaWgoYSx0aGlzLkNlKSl9LHRoaXMpO3JldHVybiBhfTtmdW5jdGlvbiBpaChhLGIpe3RoaXMuTmE9YTt0aGlzLks9Yn1cbmZ1bmN0aW9uIGhoKGEpe2EuSy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9JGcoYSkucmV2ZXJzZSgpO2Zvcih2YXIgYj0xO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9JGcoZCkuc2xpY2UoLTEpWzBdLGY9ZC5jaGlsZCBpbnN0YW5jZW9mIFI/TGQodGhpcy5OYSxkLmNoaWxkKTp0aGlzLk5hO2lmKG51bGwhPT1mLiRhJiZmLiRhLmhhcyhkLmooKSkpYnJlYWs7Zj1qaChkLkxiLGYsZSk7ZT10aGlzLk5hO251bGw9PT1lLiRhJiYoZS4kYT15KCkpO2UuJGEuc2V0KGQuaigpLGYpfX0sYSl9XG5mdW5jdGlvbiBqaChhLGIsYyl7dmFyIGQ9bnVsbDtzd2l0Y2goYSl7Y2FzZSBcIk1JTlwiOmQ9a2goYixjLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI8YT9iOmF9KTticmVhaztjYXNlIFwiTUFYXCI6ZD1raChiLGMsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj5hP2I6YX0pO2JyZWFrO2Nhc2UgXCJESVNUSU5DVFwiOmQ9bGgoYixjKTticmVhaztjYXNlIFwiQ09VTlRcIjpkPW1oKGIsYyk7YnJlYWs7Y2FzZSBcIlNVTVwiOmQ9bmgoYixjKTticmVhaztjYXNlIFwiQVZHXCI6YT1taChiLGMpOzA8YSYmKGQ9bmgoYixjKS9hKTticmVhaztjYXNlIFwiR0VPTUVBTlwiOmQ9b2goYixjKTticmVhaztkZWZhdWx0OmQ9cGgoYixjKX1yZXR1cm4gZH1mdW5jdGlvbiBraChhLGIsYyl7cmV0dXJuIGEuZW50cmllcy5yZWR1Y2UoZnVuY3Rpb24oYSxlKXtlPUgoZSxiKTtyZXR1cm4gbnVsbD09PWU/YTpudWxsPT09YT9lOmMoYSxlKX0sbnVsbCl9XG5mdW5jdGlvbiBtaChhLGIpe3JldHVybiBiIGluc3RhbmNlb2YgYWg/YS5lbnRyaWVzLmxlbmd0aDphLmVudHJpZXMucmVkdWNlKGZ1bmN0aW9uKGEsZCl7cmV0dXJuIGErKG51bGw9PT1IKGQsYik/MDoxKX0sMCl9ZnVuY3Rpb24gbmgoYSxiKXtyZXR1cm4ga2goYSxiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIrYX0pfWZ1bmN0aW9uIHBoKGEsYil7dmFyIGM9W107YS5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7YT1IKGEsYik7bnVsbD09PWF8fGMucHVzaChhKX0pO3JldHVybiAwPT1jLmxlbmd0aD9udWxsOnRiLmFwcGx5KG51bGwsYyl9ZnVuY3Rpb24gb2goYSxiKXt2YXIgYz0wO2E9YS5lbnRyaWVzLnJlZHVjZShmdW5jdGlvbihhLGUpe2U9SChlLGIpO2lmKDA9PWV8fG51bGw9PT1lKXJldHVybiBhO2MrKztyZXR1cm4gYStNYXRoLmxvZyhlKX0sMCk7cmV0dXJuIDA9PWM/bnVsbDpNYXRoLnBvdyhNYXRoLkUsYS9jKX1cbmZ1bmN0aW9uIGxoKGEsYil7dmFyIGM9eSgpO2EuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBkPUgoYSxiKTtjLnNldChkLGEpfSk7cmV0dXJuIG5ldyBHKHooYyksYS51KCkpfTtmdW5jdGlvbiBxaChhLGIpe3RoaXMuSGE9YTt0aGlzLmFhPWJ9cWgucHJvdG90eXBlLmJiPWcoXCJIYVwiKTtxaC5wcm90b3R5cGUuZGE9ZyhcImFhXCIpO2Z1bmN0aW9uIHJoKCl7SS5jYWxsKHRoaXMpfXIocmgsSSk7ZnVuY3Rpb24gc2goYSxiKXtJLmNhbGwodGhpcyk7dGhpcy50YWJsZT1hO3RoaXMudmFsdWVzPWJ9cihzaCxyaCk7ZnVuY3Rpb24gdGgoYSxiKXtzaC5jYWxsKHRoaXMsYSxiKX1yKHRoLHNoKTtmdW5jdGlvbiB1aChhKXtJLmNhbGwodGhpcyk7dGhpcy50YWJsZT1hfXIodWgscmgpO3VoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiZGVsZXRlKFwiK3RoaXMudGFibGUuZ2V0TmFtZSgpK1wiKVwifTtmdW5jdGlvbiB2aChhKXtJLmNhbGwodGhpcyk7dGhpcy50YWJsZT1hfXIodmgscmgpO3ZoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwidXBkYXRlKFwiK3RoaXMudGFibGUuZ2V0TmFtZSgpK1wiKVwifTtcbmZ1bmN0aW9uIHdoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLk89YX1yKHdoLHJoKTt3aC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cInNlbGVjdChcIit0aGlzLk8udG9TdHJpbmcoKStcIilcIn07ZnVuY3Rpb24geGgoYSl7SS5jYWxsKHRoaXMpO3RoaXMudGFibGU9YX1yKHhoLHJoKTt4aC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1cInRhYmxlX2FjY2VzcyhcIit0aGlzLnRhYmxlLmdldE5hbWUoKTtudWxsPT09dGhpcy50YWJsZS5LYXx8KGErPVwiIGFzIFwiK3RoaXMudGFibGUuS2EpO3JldHVybiBhK1wiKVwifTtmdW5jdGlvbiB5aCgpe0kuY2FsbCh0aGlzKX1yKHloLHJoKTt5aC5wcm90b3R5cGUudG9TdHJpbmc9ayhcImNyb3NzX3Byb2R1Y3RcIik7ZnVuY3Rpb24gemgoYSxiKXtJLmNhbGwodGhpcyk7dGhpcy5mPWE7dGhpcy5QYj1ifXIoemgscmgpO1xuemgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9XCJwcm9qZWN0KFwiK3RoaXMuZi50b1N0cmluZygpO2lmKG51bGwhPT10aGlzLlBiKXZhciBiPXRoaXMuUGIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmooKX0pLmpvaW4oXCIsIFwiKSxhPWErKFwiLCBncm91cEJ5KFwiK2IrXCIpXCIpO3JldHVybiBhK1wiKVwifTtmdW5jdGlvbiBBaChhKXtJLmNhbGwodGhpcyk7dGhpcy5OPWF9cihBaCxyaCk7QWgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJvcmRlcl9ieShcIitBZSh0aGlzLk4pK1wiKVwifTtmdW5jdGlvbiBCaChhKXtJLmNhbGwodGhpcyk7dGhpcy5mPWF9cihCaCxyaCk7QmgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJhZ2dyZWdhdGlvbihcIit0aGlzLmYudG9TdHJpbmcoKStcIilcIn07ZnVuY3Rpb24gQ2goYSl7SS5jYWxsKHRoaXMpO3RoaXMuZj1hfXIoQ2gscmgpO1xuQ2gucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJncm91cF9ieShcIit0aGlzLmYudG9TdHJpbmcoKStcIilcIn07ZnVuY3Rpb24gRGgoYSl7SS5jYWxsKHRoaXMpO3RoaXMuWD1hfXIoRGgscmgpO0RoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwibGltaXQoXCIrdGhpcy5YK1wiKVwifTtmdW5jdGlvbiBFaChhKXtJLmNhbGwodGhpcyk7dGhpcy5MPWF9cihFaCxyaCk7RWgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJza2lwKFwiK3RoaXMuTCtcIilcIn07ZnVuY3Rpb24gRmgoYSxiKXtJLmNhbGwodGhpcyk7dGhpcy5PPWE7dGhpcy5SYj1ifXIoRmgscmgpO0ZoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiam9pbih0eXBlOiBcIisodGhpcy5SYj9cIm91dGVyXCI6XCJpbm5lclwiKStcIiwgXCIrdGhpcy5PLnRvU3RyaW5nKCkrXCIpXCJ9O2Z1bmN0aW9uIEdoKCl7fTtmdW5jdGlvbiBIaCgpe31yKEhoLEdoKTtIaC5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSl7dGhpcy5IPWE7dGhpcy51Yih0aGlzLkgpO3JldHVybiB0aGlzLkh9O0hoLnByb3RvdHlwZS51Yj1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2Ygd2gpe3ZhciBiPUloKHRoaXMsYS5PKSxiPUpoKHRoaXMsYik7TWcoYSxhLGJbMF0sYlsxXSk7YT09dGhpcy5IJiYodGhpcy5IPWJbMF0pO2E9YlswXX1KKGEpLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy51YihhKX0sdGhpcyl9O2Z1bmN0aW9uIEloKGEsYil7aWYoMD09SihiKS5sZW5ndGh8fFwiYW5kXCIhPWIucGIpcmV0dXJuW2JdO2E9SihiKS5zbGljZSgpLm1hcChmdW5jdGlvbihhKXtiLnJlbW92ZUNoaWxkKGEpO3JldHVybiBJaCh0aGlzLGEpfSxhKTtyZXR1cm4gRWEoYSl9XG5mdW5jdGlvbiBKaChhLGIpe3ZhciBjPW51bGwsZD1udWxsO2IubWFwKGZ1bmN0aW9uKGEsYil7YT1uZXcgd2goYSk7MD09Yj9jPWE6SyhkLGEpO2Q9YX0sYSk7cmV0dXJuW2MsZF19O2Z1bmN0aW9uIEtoKCl7fXIoS2gsR2gpO0toLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe2lmKDM+Yi5mcm9tLmxlbmd0aClyZXR1cm4gYTt0aGlzLkg9YTt0aGlzLnViKHRoaXMuSCk7cmV0dXJuIHRoaXMuSH07S2gucHJvdG90eXBlLnViPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiB5aClmb3IoOzI8SihhKS5sZW5ndGg7KXtmb3IodmFyIGI9bmV3IHloLGM9MDsyPmM7YysrKXt2YXIgZD1rZShhLDApO0soYixkKX1qZShhLGIsMCl9SihhKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMudWIoYSl9LHRoaXMpfTtmdW5jdGlvbiBMaCgpe1MuY2FsbCh0aGlzLDAsMCl9cihMaCxTKTtMaC5wcm90b3R5cGUudG9TdHJpbmc9ayhcImNyb3NzX3Byb2R1Y3RcIik7TGgucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe3ZhciBiPWFbMF0sYz1hWzFdO2E9W107Zm9yKHZhciBkPWIudSgpLGU9Yy51KCksZj0wO2Y8Yi5lbnRyaWVzLmxlbmd0aDtmKyspZm9yKHZhciBoPTA7aDxjLmVudHJpZXMubGVuZ3RoO2grKyl7dmFyIGw9VmQoYi5lbnRyaWVzW2ZdLGQsYy5lbnRyaWVzW2hdLGUpO2EucHVzaChsKX1iPWIudSgpLmNvbmNhdChjLnUoKSk7cmV0dXJuW25ldyBHKGEsYildfTtmdW5jdGlvbiBNaChhLGIpe0RlLmNhbGwodGhpcyxhLGIpO3RoaXMuSWE9YS5iKHpjKTt0aGlzLkliPWEuYihBYyl9cihNaCxEZSk7TWgucHJvdG90eXBlLmdldFByaW9yaXR5PWsoMik7TWgucHJvdG90eXBlLmdlPWZ1bmN0aW9uKGEpezA9PXRoaXMuRygpP05oKHRoaXMsYSk6dGhpcy5NYygpfTtmdW5jdGlvbiBOaChhLGIpe2EudGQuZm9yRWFjaChmdW5jdGlvbihhLGQpe2EgaW5zdGFuY2VvZiB6ZSYmR2UodGhpcy5JYixhLGJbZF0pfSxhKX1NaC5wcm90b3R5cGUuTWM9ZnVuY3Rpb24oKXt2YXIgYT1JZSh0aGlzLkliLHRoaXMuZGEoKSk7MCE9YS5sZW5ndGgmJihhPW5ldyBGZSh0aGlzLmdsb2JhbCxhKSxKZSh0aGlzLklhLGEpKX07ZnVuY3Rpb24gT2goYSl7dWUuY2FsbCh0aGlzLGEpfXIoT2gsdWUpO09oLnByb3RvdHlwZS5kYT1mdW5jdGlvbigpe3ZhciBhPUIoKTthLmFkZCh0aGlzLmZyb20pO1BoKHRoaXMsdGhpcy5mcm9tLmdldE5hbWUoKSxhKTtyZXR1cm4gYX07ZnVuY3Rpb24gUGgoYSxiLGMpe3ZhciBkPVFoKGEuYmEuaW5mbygpLGIsMSk7UWgoYS5iYS5pbmZvKCksYikuZm9yRWFjaChjLmFkZC5iaW5kKGMpKTtkLmZvckVhY2goZnVuY3Rpb24oYSl7UGgodGhpcyxhLmdldE5hbWUoKSxjKX0sYSl9T2gucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IE9oKHRoaXMuYmEpO3hlKGEsdGhpcyk7YS5mcm9tPXRoaXMuZnJvbTtyZXR1cm4gYX07T2gucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7T2guaGIuYmluZC5jYWxsKHRoaXMsYSk7eWUodGhpcyxhKTtyZXR1cm4gdGhpc307ZnVuY3Rpb24gUmgoYSl7dWUuY2FsbCh0aGlzLGEpfXIoUmgsdWUpO1JoLnByb3RvdHlwZS5kYT1mdW5jdGlvbigpe3ZhciBhPUIoKTthLmFkZCh0aGlzLkxhKTt2YXIgYj10aGlzLmJhLmluZm8oKTtTaCh0aGlzLkxhLmdldE5hbWUoKSxiLmdmKS5mb3JFYWNoKGEuYWRkLmJpbmQoYSkpO3RoaXMuYWMmJlFoKGIsdGhpcy5MYS5nZXROYW1lKCkpLmZvckVhY2goYS5hZGQuYmluZChhKSk7cmV0dXJuIGF9O1JoLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBhPW5ldyBSaCh0aGlzLmJhKTt4ZShhLHRoaXMpO2EuTGE9dGhpcy5MYTt0aGlzLnZhbHVlcyYmKGEudmFsdWVzPXRoaXMudmFsdWVzIGluc3RhbmNlb2YgV2Q/dGhpcy52YWx1ZXM6dGhpcy52YWx1ZXMuc2xpY2UoKSk7YS5hYz10aGlzLmFjO2EuYmM9dGhpcy5iYztyZXR1cm4gYX07XG5SaC5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXtSaC5oYi5iaW5kLmNhbGwodGhpcyxhKTt0aGlzLmJjJiYodGhpcy52YWx1ZXM9dGhpcy5iYyBpbnN0YW5jZW9mIFdkP2FbdGhpcy5iYy5DYSgpXTp0aGlzLmJjLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gYiBpbnN0YW5jZW9mIFdkP2FbYi5DYSgpXTpifSkpO3JldHVybiB0aGlzfTtmdW5jdGlvbiBUaChhKXt1ZS5jYWxsKHRoaXMsYSl9cihUaCx1ZSk7VGgucHJvdG90eXBlLmRhPWZ1bmN0aW9uKCl7dmFyIGE9QigpO2EuYWRkKHRoaXMudGFibGUpO3ZhciBiPXRoaXMuc2V0Lm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5KLmooKX0pLGM9dGhpcy5iYS5pbmZvKCk7VWgoYyxiKS5mb3JFYWNoKGEuYWRkLmJpbmQoYSkpO1ZoKGMsYikuZm9yRWFjaChhLmFkZC5iaW5kKGEpKTtyZXR1cm4gYX07VGgucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IFRoKHRoaXMuYmEpO3hlKGEsdGhpcyk7YS50YWJsZT10aGlzLnRhYmxlO2Euc2V0PXRoaXMuc2V0P1doKHRoaXMuc2V0KTp0aGlzLnNldDtyZXR1cm4gYX07VGgucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7VGguaGIuYmluZC5jYWxsKHRoaXMsYSk7dGhpcy5zZXQuZm9yRWFjaChmdW5jdGlvbihiKXstMSE9Yi5UYyYmKGIudmFsdWU9YVtiLlRjXSl9KTt5ZSh0aGlzLGEpO3JldHVybiB0aGlzfTtcbmZ1bmN0aW9uIFdoKGEpe3JldHVybiBhLm1hcChmdW5jdGlvbihhKXt2YXIgYj17fSxkO2ZvcihkIGluIGEpYltkXT1hW2RdO3JldHVybiBifSl9O2Z1bmN0aW9uIFhoKGEsYil7aWYobnVsbD09YilyZXR1cm5cIk5VTExcIjtzd2l0Y2goYSl7Y2FzZSAxOnJldHVybiBiPzE6MDtjYXNlIDM6Y2FzZSA0OnJldHVybiBiO2Nhc2UgMDpyZXR1cm5cIidcIitsYyhiKStcIidcIjtkZWZhdWx0OnJldHVyblwiJ1wiK2IudG9TdHJpbmcoKStcIidcIn19ZnVuY3Rpb24gWWgoYSxiKXt2YXIgYz1hLmFjP1wiSU5TRVJUIE9SIFJFUExBQ0VcIjpcIklOU0VSVFwiLGQ9YS5MYS5sYigpLGM9YysoXCIgSU5UTyBcIithLkxhLmdldE5hbWUoKStcIihcIiksYz1jK2QubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldE5hbWUoKX0pLmpvaW4oXCIsIFwiKSxjPWMrXCIpIFZBTFVFUyAoXCI7cmV0dXJuIGEudmFsdWVzLm1hcChmdW5jdGlvbihhKXt2YXIgZT1kLm1hcChmdW5jdGlvbihjKXt2YXIgZD1hLm1bYy5nZXROYW1lKCldO3JldHVybiBiP251bGwhPWQ/XCIjXCI6XCJOVUxMXCI6WGgoYy5HKCksZCl9KTtyZXR1cm4gYytlLmpvaW4oXCIsIFwiKStcIik7XCJ9KS5qb2luKFwiXFxuXCIpfVxuZnVuY3Rpb24gWmgoYSl7c3dpdGNoKGEpe2Nhc2UgXCJiZXR3ZWVuXCI6cmV0dXJuXCJCRVRXRUVOXCI7Y2FzZSBcImVxXCI6cmV0dXJuXCI9XCI7Y2FzZSBcImd0ZVwiOnJldHVyblwiPj1cIjtjYXNlIFwiZ3RcIjpyZXR1cm5cIj5cIjtjYXNlIFwiaW5cIjpyZXR1cm5cIklOXCI7Y2FzZSBcImx0ZVwiOnJldHVyblwiPD1cIjtjYXNlIFwibHRcIjpyZXR1cm5cIjxcIjtjYXNlIFwibWF0Y2hcIjpyZXR1cm5cIkxJS0VcIjtjYXNlIFwibmVxXCI6cmV0dXJuXCI8PlwiO2RlZmF1bHQ6cmV0dXJuXCJVTktOT1dOXCJ9fWZ1bmN0aW9uICRoKGEsYixjLGQpe3JldHVybiBhIGluc3RhbmNlb2YgV2Q/XCI/XCIrYS5DYSgpLnRvU3RyaW5nKCk6ZD9udWxsIT1hP1wiI1wiOlwiTlVMTFwiOlwibWF0Y2hcIj09Yj9cIidcIithLnRvU3RyaW5nKCkrXCInXCI6XCJpblwiPT1iP1wiKFwiK2EubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBYaChjLGEpfSkuam9pbihcIiwgXCIpK1wiKVwiOlwiYmV0d2VlblwiPT1iP1hoKGMsYVswXSkrXCIgQU5EIFwiK1hoKGMsYVsxXSk6WGgoYyxhKS50b1N0cmluZygpfVxuZnVuY3Rpb24gYWkoYSxiKXtyZXR1cm4gSihhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuXCIoXCIrYmkoYSxiKStcIilcIn0pLmpvaW4oXCJhbmRcIj09YS5wYj9cIiBBTkQgXCI6XCIgT1IgXCIpfWZ1bmN0aW9uIGNpKGEpe3JldHVyblthLmdhLmooKSxaaChhLkYpLGEubWEuaigpXS5qb2luKFwiIFwiKX1mdW5jdGlvbiBiaShhLGIpe2lmKGEgaW5zdGFuY2VvZiBxZSl7dmFyIGM9YS5KLmooKSxkPVpoKGEuRik7YT0kaChhLnZhbHVlLGEuRixhLkouRygpLGIpO3JldHVyblwiPVwiPT1kJiZcIk5VTExcIj09YT9bYyxcIklTIE5VTExcIl0uam9pbihcIiBcIik6XCI8PlwiPT1kJiZcIk5VTExcIj09YT9bYyxcIklTIE5PVCBOVUxMXCJdLmpvaW4oXCIgXCIpOltjLGQsYV0uam9pbihcIiBcIil9aWYoYSBpbnN0YW5jZW9mIE9nKXJldHVybiBhaShhLGIpO2lmKGEgaW5zdGFuY2VvZiBSZylyZXR1cm4gY2koYSk7dGhyb3cgbmV3IEQoMzU3LHR5cGVvZiBhKTt9XG5mdW5jdGlvbiBkaShhLGIpe3JldHVybihhPWJpKGEsYikpP1wiIFdIRVJFIFwiK2E6XCJcIn1mdW5jdGlvbiBlaShhLGIpe3ZhciBjPVwiVVBEQVRFIFwiK2EudGFibGUuZ2V0TmFtZSgpK1wiIFNFVCBcIixjPWMrYS5zZXQubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPWEuSi5qKCkrXCIgPSBcIjtyZXR1cm4tMSE9YS5UYz9iK1wiP1wiK2EuVGMudG9TdHJpbmcoKTpiK1hoKGEuSi5HKCksYS52YWx1ZSkudG9TdHJpbmcoKX0pLmpvaW4oXCIsIFwiKTthLncmJihjKz1kaShhLncsYikpO3JldHVybiBjK1wiO1wifVxuZnVuY3Rpb24gZmkoYSxiKXt2YXIgYz1cIipcIjthLmYubGVuZ3RoJiYoYz1hLmYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLkthP2EuaigpK1wiIEFTIFwiK2EuS2E6YS5qKCl9KS5qb2luKFwiLCBcIikpO2M9XCJTRUxFQ1QgXCIrYytcIiBGUk9NIFwiO251bGwhPWEuZWImJjAhPWEuZWIuc2l6ZT9jKz1naShhLGIpOihjKz1hLmZyb20ubWFwKGhpKS5qb2luKFwiLCBcIiksYS53JiYoYys9ZGkoYS53LGIpKSk7YS5OJiYoYj1hLk4ubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLkouaigpKygwPT1hLm9yZGVyP1wiIERFU0NcIjpcIiBBU0NcIil9KS5qb2luKFwiLCBcIiksYys9XCIgT1JERVIgQlkgXCIrYik7YS5yYSYmKGI9YS5yYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaigpfSkuam9pbihcIiwgXCIpLGMrPVwiIEdST1VQIEJZIFwiK2IpO2EuWCYmKGMrPVwiIExJTUlUIFwiK2EuWC50b1N0cmluZygpKTthLkwmJihjKz1cIiBTS0lQIFwiK2EuTC50b1N0cmluZygpKTtyZXR1cm4gYytcIjtcIn1cbmZ1bmN0aW9uIGhpKGEpe3JldHVybiBUZChhKSE9YS5nZXROYW1lKCk/YS5nZXROYW1lKCkrXCIgQVMgXCIrVGQoYSk6YS5nZXROYW1lKCl9ZnVuY3Rpb24gZ2koYSxiKXtmb3IodmFyIGM9SGcoYS53LGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgUmd9KSxkPWMubWFwKGNpKSxlPWhpKGEuZnJvbVswXSksZj0xO2Y8YS5mcm9tLmxlbmd0aDtmKyspdmFyIGg9aGkoYS5mcm9tW2ZdKSxlPWEuZWIuaGFzKGNbZC5sZW5ndGgtZl0uVygpKT9lKyhcIiBMRUZUIE9VVEVSIEpPSU4gXCIraCk6ZSsoXCIgSU5ORVIgSk9JTiBcIitoKSxlPWUrKFwiIE9OIChcIitkW2QubGVuZ3RoLWZdK1wiKVwiKTthPWEudzthPTA8SihhKS5sZW5ndGg/aWUoYSwwKTphO2EgaW5zdGFuY2VvZiBSZ3x8KGUrPVwiIFdIRVJFIFwiK2JpKGEsYikpO3JldHVybiBlfVxuZnVuY3Rpb24gaWkoYSxiKXtiPWJ8fCExO2E9YS5xdWVyeS5jbG9uZSgpO2lmKGEgaW5zdGFuY2VvZiBSaClyZXR1cm4gWWgoYSxiKTtpZihhIGluc3RhbmNlb2YgT2gpe3ZhciBjPVwiREVMRVRFIEZST00gXCIrYS5mcm9tLmdldE5hbWUoKTthLncmJihjKz1kaShhLncsYikpO3JldHVybiBjK1wiO1wifWlmKGEgaW5zdGFuY2VvZiBUaClyZXR1cm4gZWkoYSxiKTtpZihhIGluc3RhbmNlb2YgemUpcmV0dXJuIGZpKGEsYik7dGhyb3cgbmV3IEQoMzU4LHR5cGVvZiBhKTt9O2Z1bmN0aW9uIFQoYSxiKXt0aGlzLmdsb2JhbD1hO3RoaXMuSGc9YS5iKHljKTt0aGlzLklhPWEuYih6Yyk7dGhpcy5xdWVyeT1ifXEoXCJsZi5xdWVyeS5CYXNlQnVpbGRlclwiLFQpO1QucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oKXt0cnl7dGhpcy5hYigpfWNhdGNoKGEpe3JldHVybiBiYihhKX1yZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgTWgodGhpcy5nbG9iYWwsW3RoaXMuQmMoKV0pO0plKHRoaXMuSWEsYykudGhlbihmdW5jdGlvbihiKXthKEpkKGJbMF0pKX0sYil9LHRoaXMpfTtULnByb3RvdHlwZS5leGVjPVQucHJvdG90eXBlLmV4ZWM7VC5wcm90b3R5cGUuV2Y9ZnVuY3Rpb24oKXt2YXIgYT1mdW5jdGlvbihhKXtyZXR1cm4gYS5QYyh0aGlzLnF1ZXJ5KStcIlxcblwifS5iaW5kKHRoaXMpO3JldHVybiBOZyhqaSh0aGlzKS5iYigpLGEpfTtULnByb3RvdHlwZS5leHBsYWluPVQucHJvdG90eXBlLldmO1xuVC5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXt0aGlzLnF1ZXJ5LmJpbmQoYSk7cmV0dXJuIHRoaXN9O1QucHJvdG90eXBlLmJpbmQ9VC5wcm90b3R5cGUuYmluZDtULnByb3RvdHlwZS5QZz1mdW5jdGlvbihhKXtyZXR1cm4gaWkodGhpcyxhKX07VC5wcm90b3R5cGUudG9TcWw9VC5wcm90b3R5cGUuUGc7VC5wcm90b3R5cGUuYWI9YWEoKTtmdW5jdGlvbiBqaShhKXtpZihudWxsPT1hLmhmKXt2YXIgYjtiPWEuSGc7dmFyIGM9YS5xdWVyeSxkPWIucWcuY3JlYXRlKGMpO2I9Yi5FZy5jcmVhdGUoZCxjKTthLmhmPWJ9cmV0dXJuIGEuaGZ9VC5wcm90b3R5cGUuQmM9ZnVuY3Rpb24oKXtyZXR1cm57Y29udGV4dDp0aGlzLnF1ZXJ5LmNsb25lKCksamU6amkodGhpcyl9fTtmdW5jdGlvbiBraShhKXtULmNhbGwodGhpcyxhLG5ldyBPaChhLmIoQmMpKSl9cihraSxUKTtxKFwibGYucXVlcnkuRGVsZXRlQnVpbGRlclwiLGtpKTtraS5wcm90b3R5cGUuZnJvbT1mdW5jdGlvbihhKXtpZihudWxsIT10aGlzLnF1ZXJ5LmZyb20pdGhyb3cgbmV3IEQoNTE1KTt0aGlzLnF1ZXJ5LmZyb209YTtyZXR1cm4gdGhpc307a2kucHJvdG90eXBlLmZyb209a2kucHJvdG90eXBlLmZyb207a2kucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7dGhpcy5GZCgpO3RoaXMucXVlcnkudz1hO3JldHVybiB0aGlzfTtraS5wcm90b3R5cGUud2hlcmU9a2kucHJvdG90eXBlLnc7a2kucHJvdG90eXBlLkZkPWZ1bmN0aW9uKCl7aWYobnVsbD09dGhpcy5xdWVyeS5mcm9tKXRocm93IG5ldyBEKDU0OCk7aWYobnVsbCE9dGhpcy5xdWVyeS53KXRocm93IG5ldyBEKDUxNik7fTtcbmtpLnByb3RvdHlwZS5hYj1mdW5jdGlvbigpe2tpLmhiLmFiLmNhbGwodGhpcyk7aWYobnVsbD09dGhpcy5xdWVyeS5mcm9tKXRocm93IG5ldyBEKDUxNyk7fTtmdW5jdGlvbiBsaShhLGIpe1QuY2FsbCh0aGlzLGEsbmV3IFJoKGEuYihCYykpKTt0aGlzLnF1ZXJ5LmFjPWJ8fCExfXIobGksVCk7cShcImxmLnF1ZXJ5Lkluc2VydEJ1aWxkZXJcIixsaSk7bGkucHJvdG90eXBlLmFiPWZ1bmN0aW9uKCl7bGkuaGIuYWIuY2FsbCh0aGlzKTt2YXIgYT10aGlzLnF1ZXJ5O2lmKG51bGw9PWEuTGF8fG51bGw9PWEudmFsdWVzKXRocm93IG5ldyBEKDUxOCk7aWYoYS5hYyYmbnVsbD09PWEuTGEuTWIuc2QpdGhyb3cgbmV3IEQoNTE5KTt9O2xpLnByb3RvdHlwZS5MYT1mdW5jdGlvbihhKXtpZihudWxsIT10aGlzLnF1ZXJ5LkxhKXRocm93IG5ldyBEKDUyMCk7dGhpcy5xdWVyeS5MYT1hO3JldHVybiB0aGlzfTtsaS5wcm90b3R5cGUuaW50bz1saS5wcm90b3R5cGUuTGE7XG5saS5wcm90b3R5cGUudmFsdWVzPWZ1bmN0aW9uKGEpe2lmKG51bGwhPXRoaXMucXVlcnkudmFsdWVzKXRocm93IG5ldyBEKDUyMSk7YSBpbnN0YW5jZW9mIFdkfHxhLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBXZH0pP3RoaXMucXVlcnkuYmM9YTp0aGlzLnF1ZXJ5LnZhbHVlcz1hO3JldHVybiB0aGlzfTtsaS5wcm90b3R5cGUudmFsdWVzPWxpLnByb3RvdHlwZS52YWx1ZXM7ZnVuY3Rpb24gbWkoYSl7cmV0dXJuIG5pKFwiYW5kXCIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9cShcImxmLm9wLmFuZFwiLG1pKTtxKFwibGYub3Aub3JcIixmdW5jdGlvbihhKXtyZXR1cm4gbmkoXCJvclwiLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpfSk7ZnVuY3Rpb24gbmkoYSxiKXt2YXIgYz1uZXcgT2coYSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe0soYyxhKX0pO3JldHVybiBjfXEoXCJsZi5vcC5ub3RcIixmdW5jdGlvbihhKXthLnZkKCEwKTtyZXR1cm4gYX0pO2Z1bmN0aW9uIFUoYSxiKXtULmNhbGwodGhpcyxhLG5ldyB6ZShhLmIoQmMpKSk7dGhpcy5NZT10aGlzLkFkPSExO3RoaXMucXVlcnkuZj1iO29pKHRoaXMpO3BpKHRoaXMpfXIoVSxUKTtxKFwibGYucXVlcnkuU2VsZWN0QnVpbGRlclwiLFUpO1UucHJvdG90eXBlLmFiPWZ1bmN0aW9uKCl7VS5oYi5hYi5jYWxsKHRoaXMpO3ZhciBhPXRoaXMucXVlcnk7aWYobnVsbD09YS5mcm9tKXRocm93IG5ldyBEKDUyMik7aWYobihhLlNiKSYmIW4oYS5YKXx8bihhLlpiKSYmIW4oYS5MKSl0aHJvdyBuZXcgRCg1MjMpO251bGwhPXRoaXMucXVlcnkucmE/cWkodGhpcyk6cmkodGhpcyl9O2Z1bmN0aW9uIG9pKGEpe3ZhciBiPWEucXVlcnkuZi5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBSJiZcIkRJU1RJTkNUXCI9PWEuTGJ9LGEpO2lmKDAhPWIubGVuZ3RoJiYoMSE9Yi5sZW5ndGh8fDEhPWEucXVlcnkuZi5sZW5ndGgpKXRocm93IG5ldyBEKDUyNCk7fVxuZnVuY3Rpb24gcWkoYSl7aWYoYS5xdWVyeS5yYS5zb21lKGZ1bmN0aW9uKGEpe2E9YS5HKCk7cmV0dXJuIDY9PWF8fDA9PWF9KSl0aHJvdyBuZXcgRCg1MjUpO31mdW5jdGlvbiByaShhKXt2YXIgYj1hLnF1ZXJ5LmYuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFJ9LGEpO2E9YS5xdWVyeS5mLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIShhIGluc3RhbmNlb2YgUil9LGEpfHwwPT1hLnF1ZXJ5LmYubGVuZ3RoO2lmKGImJmEpdGhyb3cgbmV3IEQoNTI2KTt9ZnVuY3Rpb24gcGkoYSl7YS5xdWVyeS5mLmZvckVhY2goZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIFImJiFzaShhLkxiLGEuRygpKSl0aHJvdyBuZXcgRCg1MjcsYS5qKCkpO30sYSl9ZnVuY3Rpb24gdGkoYSxiKXtpZihudWxsPT1hLnF1ZXJ5LmZyb20pdGhyb3cgbmV3IEQoYik7fVxuVS5wcm90b3R5cGUuZnJvbT1mdW5jdGlvbihhKXtpZih0aGlzLk1lKXRocm93IG5ldyBEKDUxNSk7dGhpcy5NZT0hMDtudWxsPT10aGlzLnF1ZXJ5LmZyb20mJih0aGlzLnF1ZXJ5LmZyb209W10pO3RoaXMucXVlcnkuZnJvbS5wdXNoLmFwcGx5KHRoaXMucXVlcnkuZnJvbSxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtyZXR1cm4gdGhpc307VS5wcm90b3R5cGUuZnJvbT1VLnByb3RvdHlwZS5mcm9tO1UucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7dGkodGhpcyw1NDgpO2lmKHRoaXMuQWQpdGhyb3cgbmV3IEQoNTE2KTt0aGlzLkFkPSEwO3VpKHRoaXMsYSk7cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLndoZXJlPVUucHJvdG90eXBlLnc7ZnVuY3Rpb24gdWkoYSxiKXtudWxsIT1hLnF1ZXJ5LncmJihiPW1pKGIsYS5xdWVyeS53KSk7YS5xdWVyeS53PWJ9XG5VLnByb3RvdHlwZS5oZz1mdW5jdGlvbihhLGIpe3RpKHRoaXMsNTQyKTtpZih0aGlzLkFkKXRocm93IG5ldyBEKDU0Nyk7dGhpcy5xdWVyeS5mcm9tLnB1c2goYSk7dWkodGhpcyxiKTtyZXR1cm4gdGhpc307VS5wcm90b3R5cGUuaW5uZXJKb2luPVUucHJvdG90eXBlLmhnO1UucHJvdG90eXBlLm9nPWZ1bmN0aW9uKGEsYil7dGkodGhpcyw1NDIpO2lmKCEoYiBpbnN0YW5jZW9mIFJnKSl0aHJvdyBuZXcgRCg1NDEpO2lmKHRoaXMuQWQpdGhyb3cgbmV3IEQoNTQ3KTt0aGlzLnF1ZXJ5LmZyb20ucHVzaChhKTtudWxsPT10aGlzLnF1ZXJ5LmViJiYodGhpcy5xdWVyeS5lYj1CKCkpO3ZhciBjPWI7VGQoYSkhPVRkKGIubWEuSSgpKSYmKGM9Yi5yZXZlcnNlKCkpO3RoaXMucXVlcnkuZWIuYWRkKGMuVygpKTt1aSh0aGlzLGMpO3JldHVybiB0aGlzfTtVLnByb3RvdHlwZS5sZWZ0T3V0ZXJKb2luPVUucHJvdG90eXBlLm9nO1xuVS5wcm90b3R5cGUuWD1mdW5jdGlvbihhKXtpZihudWxsIT0odGhpcy5xdWVyeS5YfHx0aGlzLnF1ZXJ5LlNiKSl0aHJvdyBuZXcgRCg1MjgpO2lmKGEgaW5zdGFuY2VvZiBXZCl0aGlzLnF1ZXJ5LlNiPWE7ZWxzZXtpZigwPmEpdGhyb3cgbmV3IEQoNTMxKTt0aGlzLnF1ZXJ5Llg9YX1yZXR1cm4gdGhpc307VS5wcm90b3R5cGUubGltaXQ9VS5wcm90b3R5cGUuWDtVLnByb3RvdHlwZS5MPWZ1bmN0aW9uKGEpe2lmKG51bGwhPSh0aGlzLnF1ZXJ5Lkx8fHRoaXMucXVlcnkuWmIpKXRocm93IG5ldyBEKDUyOSk7aWYoYSBpbnN0YW5jZW9mIFdkKXRoaXMucXVlcnkuWmI9YTtlbHNle2lmKDA+YSl0aHJvdyBuZXcgRCg1MzEpO3RoaXMucXVlcnkuTD1hfXJldHVybiB0aGlzfTtVLnByb3RvdHlwZS5za2lwPVUucHJvdG90eXBlLkw7XG5VLnByb3RvdHlwZS5OPWZ1bmN0aW9uKGEsYil7dGkodGhpcyw1NDkpO251bGw9PXRoaXMucXVlcnkuTiYmKHRoaXMucXVlcnkuTj1bXSk7dGhpcy5xdWVyeS5OLnB1c2goe0o6YSxvcmRlcjpudWxsIT1iP2I6MX0pO3JldHVybiB0aGlzfTtVLnByb3RvdHlwZS5vcmRlckJ5PVUucHJvdG90eXBlLk47VS5wcm90b3R5cGUucmE9ZnVuY3Rpb24oYSl7dGkodGhpcyw1NDkpO2lmKG51bGwhPXRoaXMucXVlcnkucmEpdGhyb3cgbmV3IEQoNTMwKTtudWxsPT10aGlzLnF1ZXJ5LnJhJiYodGhpcy5xdWVyeS5yYT1bXSk7dGhpcy5xdWVyeS5yYS5wdXNoLmFwcGx5KHRoaXMucXVlcnkucmEsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLmdyb3VwQnk9VS5wcm90b3R5cGUucmE7XG5mdW5jdGlvbiBzaShhLGIpe3N3aXRjaChhKXtjYXNlIFwiQ09VTlRcIjpjYXNlIFwiRElTVElOQ1RcIjpyZXR1cm4hMDtjYXNlIFwiQVZHXCI6Y2FzZSBcIkdFT01FQU5cIjpjYXNlIFwiU1REREVWXCI6Y2FzZSBcIlNVTVwiOnJldHVybiA0PT1ifHwzPT1iO2Nhc2UgXCJNQVhcIjpjYXNlIFwiTUlOXCI6cmV0dXJuIDQ9PWJ8fDM9PWJ8fDU9PWJ8fDI9PWJ9cmV0dXJuITF9VS5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgVSh0aGlzLmdsb2JhbCx0aGlzLnF1ZXJ5LmYpO2EucXVlcnk9dGhpcy5xdWVyeS5jbG9uZSgpO2EucXVlcnkuV2M9bnVsbDtyZXR1cm4gYX07VS5wcm90b3R5cGUuY2xvbmU9VS5wcm90b3R5cGUuY2xvbmU7ZnVuY3Rpb24gdmkoYSxiKXtULmNhbGwodGhpcyxhLG5ldyBUaChhLmIoQmMpKSk7dGhpcy5xdWVyeS50YWJsZT1ifXIodmksVCk7cShcImxmLnF1ZXJ5LlVwZGF0ZUJ1aWxkZXJcIix2aSk7dmkucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe2E9e1RjOmIgaW5zdGFuY2VvZiBXZD9iLkNhKCk6LTEsSjphLHZhbHVlOmJ9O251bGwhPXRoaXMucXVlcnkuc2V0P3RoaXMucXVlcnkuc2V0LnB1c2goYSk6dGhpcy5xdWVyeS5zZXQ9W2FdO3JldHVybiB0aGlzfTt2aS5wcm90b3R5cGUuc2V0PXZpLnByb3RvdHlwZS5zZXQ7dmkucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7dGhpcy5GZCgpO3RoaXMucXVlcnkudz1hO3JldHVybiB0aGlzfTt2aS5wcm90b3R5cGUud2hlcmU9dmkucHJvdG90eXBlLnc7dmkucHJvdG90eXBlLkZkPWZ1bmN0aW9uKCl7aWYobnVsbCE9dGhpcy5xdWVyeS53KXRocm93IG5ldyBEKDUxNik7fTtcbnZpLnByb3RvdHlwZS5hYj1mdW5jdGlvbigpe3ZpLmhiLmFiLmNhbGwodGhpcyk7aWYobnVsbD09dGhpcy5xdWVyeS5zZXQpdGhyb3cgbmV3IEQoNTMyKTtpZih0aGlzLnF1ZXJ5LnNldC5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlIGluc3RhbmNlb2YgV2R9KSl0aHJvdyBuZXcgRCg1MDEpO307ZnVuY3Rpb24gd2koYSl7dGhpcy5xdWVyeT1hO3RoaXMuSGE9bnVsbH13aS5wcm90b3R5cGUuZ2M9ZnVuY3Rpb24oKXtudWxsPT09dGhpcy5IYSYmKHRoaXMuSGE9dGhpcy5hZCgpKTtyZXR1cm4gdGhpcy5IYX07ZnVuY3Rpb24geGkoYSl7d2kuY2FsbCh0aGlzLGEpfXIoeGksd2kpO3hpLnByb3RvdHlwZS5hZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnF1ZXJ5LmFjP25ldyB0aCh0aGlzLnF1ZXJ5LkxhLHRoaXMucXVlcnkudmFsdWVzKTpuZXcgc2godGhpcy5xdWVyeS5MYSx0aGlzLnF1ZXJ5LnZhbHVlcyl9O2Z1bmN0aW9uIHlpKGEpe3dpLmNhbGwodGhpcyxhKX1yKHlpLHdpKTt5aS5wcm90b3R5cGUuYWQ9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgdmgodGhpcy5xdWVyeS50YWJsZSksYj1udWxsIT10aGlzLnF1ZXJ5Lnc/bmV3IHdoKHRoaXMucXVlcnkudy5OYigpKTpudWxsLGM9bmV3IHhoKHRoaXMucXVlcnkudGFibGUpO251bGw9PT1iP0soYSxjKTooSyhiLGMpLEsoYSxiKSk7cmV0dXJuIGF9O2Z1bmN0aW9uIHppKGEsYixjKXt0aGlzLkhhPWE7dGhpcy5sZT1iO3RoaXMuVmI9Y316aS5wcm90b3R5cGUuZ2M9ZnVuY3Rpb24oKXt0aGlzLlZiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5IYT1hLmdiKHRoaXMuSGEsdGhpcy5sZSl9LHRoaXMpO3JldHVybiB0aGlzLkhhfTtmdW5jdGlvbiBBaShhLGIpe3dpLmNhbGwodGhpcyxhKTt0aGlzLlZiPWJ9cihBaSx3aSk7QWkucHJvdG90eXBlLmFkPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IHVoKHRoaXMucXVlcnkuZnJvbSksYj1udWxsIT10aGlzLnF1ZXJ5Lnc/bmV3IHdoKHRoaXMucXVlcnkudy5OYigpKTpudWxsLGM9bmV3IHhoKHRoaXMucXVlcnkuZnJvbSk7bnVsbD09PWI/SyhhLGMpOihLKGIsYyksSyhhLGIpKTtyZXR1cm4obmV3IHppKGEsdGhpcy5xdWVyeSx0aGlzLlZiKSkuZ2MoKX07ZnVuY3Rpb24gQmkoKXt9cihCaSxHaCk7QmkucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7aWYoMj5iLmZyb20ubGVuZ3RoKXJldHVybiBhO3RoaXMuSD1hO3RoaXMudWIodGhpcy5ILGIpO3JldHVybiB0aGlzLkh9O0JpLnByb3RvdHlwZS51Yj1mdW5jdGlvbihhLGIpe2lmKGEgaW5zdGFuY2VvZiB3aCYmYS5PIGluc3RhbmNlb2YgUmcpe3ZhciBjPWEuTy5XKCksZD1pZShhLDApO2QgaW5zdGFuY2VvZiB5aCYmKGM9bnVsbCE9Yi5lYiYmYi5lYi5oYXMoYyksYz1uZXcgRmgoYS5PLGMpLE1nKGEsZCxjLGMpLGE9PXRoaXMuSCYmKHRoaXMuSD1jKSxhPWMpfUooYSkuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLnViKGEsYil9LHRoaXMpfTtmdW5jdGlvbiBDaSgpe3RoaXMuU2M9QigpfXIoQ2ksR2gpO0NpLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe2lmKCFuKGIudykpcmV0dXJuIGE7dGhpcy5TYy5jbGVhcigpO3RoaXMuSD1hO3RoaXMudWIodGhpcy5ILGIpO3RoaXMuU2MuY2xlYXIoKTtyZXR1cm4gdGhpcy5IfTtDaS5wcm90b3R5cGUudWI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtKKGEpLmZvckVhY2goZCl9LmJpbmQodGhpcyksZD1mdW5jdGlvbihhKXtpZighdGhpcy5TYy5oYXMoYSkpe2lmKGEgaW5zdGFuY2VvZiB3aCl7dmFyIGU9YS5PLnUoKSxoPWZ1bmN0aW9uKGEpe3JldHVybiBEaSh0aGlzLGEsZSl9LmJpbmQodGhpcyksaD1FaSh0aGlzLGIsYSxoKTt0aGlzLlNjLmFkZChhKTtoIT1hJiYobnVsbD09PWguZ2V0UGFyZW50KCkmJih0aGlzLkg9aCksZChoKSl9YyhhKX19LmJpbmQodGhpcyk7ZChhKX07XG5mdW5jdGlvbiBFaShhLGIsYyxkKXt2YXIgZT1jO2lmKEZpKGIsYykpZT1LZyhjKSxFaShhLGIsYyxkKTtlbHNlIGlmKEdpKGMpKXt2YXIgZj1bXSxlPUxnKGMsZCxmdW5jdGlvbihhKXthPW5ldyB3aChhLk8pO2YucHVzaChhKTtyZXR1cm4gYX0pO2YuZm9yRWFjaChmdW5jdGlvbihhKXtFaSh0aGlzLGIsYSxkKX0sYSl9cmV0dXJuIGV9ZnVuY3Rpb24gRGkoYSxiLGMpe3ZhciBkPUIoKTtHZyhiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2QuYWRkKGEudGFibGUpfSxhKTtiIGluc3RhbmNlb2YgeGgmJmQuYWRkKGIudGFibGUpO3JldHVybiBIYyhkLGMpfWZ1bmN0aW9uIEdpKGEpe2E9aWUoYSwwKTtyZXR1cm4gYSBpbnN0YW5jZW9mIHlofHxhIGluc3RhbmNlb2YgRmh9XG5mdW5jdGlvbiBGaShhLGIpe3ZhciBjPWllKGIsMCk7aWYoIShjIGluc3RhbmNlb2Ygd2gpKXJldHVybiExO2lmKG51bGw9PWEuZWIpcmV0dXJuITA7Yj1iLk8gaW5zdGFuY2VvZiBSZzthPWEuZWIuaGFzKGMuTy5XKCkpO3JldHVybiBifHwhYX07ZnVuY3Rpb24gSGkoYSxiKXt3aS5jYWxsKHRoaXMsYSk7dGhpcy5WYj1iO3RoaXMua2Y9dGhpcy5jZj10aGlzLnRmPXRoaXMuZmY9dGhpcy5EZT10aGlzLlNlPXRoaXMuc2Y9dGhpcy5KZT10aGlzLnZmPW51bGx9cihIaSx3aSk7XG5IaS5wcm90b3R5cGUuYWQ9ZnVuY3Rpb24oKXtJaSh0aGlzKTsyPD10aGlzLnF1ZXJ5LmZyb20ubGVuZ3RoJiYodGhpcy5KZT1uZXcgeWgpO3RoaXMuc2Y9bnVsbCE9dGhpcy5xdWVyeS53P25ldyB3aCh0aGlzLnF1ZXJ5LncuTmIoKSk6bnVsbDt0aGlzLnF1ZXJ5Lk4mJih0aGlzLmZmPW5ldyBBaCh0aGlzLnF1ZXJ5Lk4pKTtudWxsIT10aGlzLnF1ZXJ5LkwmJjA8dGhpcy5xdWVyeS5MJiYodGhpcy50Zj1uZXcgRWgodGhpcy5xdWVyeS5MKSk7bnVsbCE9dGhpcy5xdWVyeS5YJiYodGhpcy5jZj1uZXcgRGgodGhpcy5xdWVyeS5YKSk7bnVsbCE9dGhpcy5xdWVyeS5yYSYmKHRoaXMuU2U9bmV3IENoKHRoaXMucXVlcnkucmEpKTtKaSh0aGlzKTt0aGlzLmtmPW5ldyB6aCh0aGlzLnF1ZXJ5LmZ8fFtdLHRoaXMucXVlcnkucmF8fG51bGwpO3ZhciBhPUtpKHRoaXMpO3JldHVybihuZXcgemkoYSx0aGlzLnF1ZXJ5LHRoaXMuVmIpKS5nYygpfTtcbmZ1bmN0aW9uIEtpKGEpe2Zvcih2YXIgYj1bYS5jZixhLnRmLGEua2YsYS5mZixhLkRlLGEuU2UsYS5zZixhLkplXSxjPS0xLGQ9bnVsbCxlPTA7ZTxiLmxlbmd0aDtlKyspe3ZhciBmPWJbZV07bnVsbCE9PWYmJihudWxsPT09ZD9kPWY6SyhiW2NdLGYpLGM9ZSl9YS52Zi5mb3JFYWNoKGZ1bmN0aW9uKGEpe0soYltjXSxhKX0pO3JldHVybiBkfWZ1bmN0aW9uIElpKGEpe2EudmY9YS5xdWVyeS5mcm9tLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IHhoKGEpfSxhKX1mdW5jdGlvbiBKaShhKXt2YXIgYj1hLnF1ZXJ5LmYuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgUn0pO251bGwhPWEucXVlcnkuTiYmYS5xdWVyeS5OLmZvckVhY2goZnVuY3Rpb24oYSl7YS5KIGluc3RhbmNlb2YgUiYmYi5wdXNoKGEuSil9KTswPGIubGVuZ3RoJiYoYS5EZT1uZXcgQmgoYikpfTtmdW5jdGlvbiBMaSgpe3RoaXMucmU9W25ldyBIaCxuZXcgS2gsbmV3IENpLG5ldyBCaV07dGhpcy5QZD1bbmV3IEhoXX1MaS5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEgaW5zdGFuY2VvZiBSaCliPW5ldyB4aShhKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiBPaCliPW5ldyBBaShhLHRoaXMuUGQpO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIHplKWI9bmV3IEhpKGEsdGhpcy5yZSk7ZWxzZSBpZihhIGluc3RhbmNlb2YgVGgpYj1uZXcgeWkoYSk7ZWxzZSB0aHJvdyBuZXcgRCg1MTMpO2I9Yi5nYygpO3JldHVybiBuZXcgcWgoYixhLmRhKCkpfTtmdW5jdGlvbiBNaShhKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuVT1hfXIoTWksUyk7TWkucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJkZWxldGUoXCIrdGhpcy5VLmdldE5hbWUoKStcIilcIn07TWkucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYil7YT1hWzBdLmVudHJpZXMubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhfSk7Yi5yZW1vdmUodGhpcy5VLGEpO3JldHVybltOZCgpXX07ZnVuY3Rpb24gTmkoYSxiKXtTLmNhbGwodGhpcywwLC0xKTt0aGlzLnRhYmxlPWI7dGhpcy5DPWEuYih4Yyl9cihOaSxTKTtOaS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImdldF9yb3dfY291bnQoXCIrdGhpcy50YWJsZS5nZXROYW1lKCkrXCIpXCJ9O05pLnByb3RvdHlwZS5jYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuQy5nZXQobmYodGhpcy50YWJsZSkpLGI9bmV3IEcoW10sW3RoaXMudGFibGUuZ2V0TmFtZSgpXSksYz1iaCgpLGE9YS5ZKCkuaWE7bnVsbD09PWIuJGEmJihiLiRhPXkoKSk7Yi4kYS5zZXQoYy5qKCksYSk7cmV0dXJuW2JdfTtmdW5jdGlvbiBPaShhLGIpe1MuY2FsbCh0aGlzLDAsLTEpO3RoaXMuVj1hLmIod2MpO3RoaXMuQz1hLmIoeGMpO3RoaXMudGFibGU9Yn1yKE9pLFMpO09pLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPVwidGFibGVfYWNjZXNzKFwiK3RoaXMudGFibGUuZ2V0TmFtZSgpO251bGw9PT10aGlzLnRhYmxlLkthfHwoYSs9XCIgYXMgXCIrdGhpcy50YWJsZS5LYSk7cmV0dXJuIGErXCIpXCJ9O09pLnByb3RvdHlwZS5jYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuQy5nZXQobmYodGhpcy50YWJsZSkpLlZhKCk7cmV0dXJuW1FkKEVmKHRoaXMuVixhKSxbVGQodGhpcy50YWJsZSldKV19O2Z1bmN0aW9uIFBpKGEpe3RoaXMuYz1hfXIoUGksR2gpO1BpLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe3RoaXMuSD1hO2lmKCF0aGlzLkhkKGIpKXJldHVybiBhO2E9SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIE9pfSlbMF07Yj1uZXcgTmkodGhpcy5jLGEudGFibGUpO01nKGEsYSxiLGIpO3JldHVybiB0aGlzLkh9O1BpLnByb3RvdHlwZS5IZD1mdW5jdGlvbihhKXtyZXR1cm4gMT09YS5mLmxlbmd0aCYmMT09YS5mcm9tLmxlbmd0aCYmbnVsbD09YS53JiZudWxsPT1hLlgmJm51bGw9PWEuTCYmbnVsbD09YS5yYT8oYT1hLmZbMF0sYSBpbnN0YW5jZW9mIFImJlwiQ09VTlRcIj09YS5MYiYmYS5jaGlsZCBpbnN0YW5jZW9mIGFoKTohMX07ZnVuY3Rpb24gUWkoYSl7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLlJlPWF9cihRaSxTKTtRaS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImdyb3VwQnkoXCIrdGhpcy5SZS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaigpfSkudG9TdHJpbmcoKStcIilcIn07UWkucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe3JldHVybiBSaSh0aGlzLGFbMF0pfTtmdW5jdGlvbiBSaShhLGIpe3ZhciBjPW5ldyBjZCxkPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlJlLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gSChhLGIpfSx0aGlzKS5qb2luKFwiLFwiKX0uYmluZChhKTtiLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXtjLnNldChkKGEpLGEpfSxhKTtyZXR1cm4gYy5rZXlzKCkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgRyhjLmdldChhKSxiLnUoKSl9LGEpfTtmdW5jdGlvbiBTaShhLGIsYyl7Uy5jYWxsKHRoaXMsMCwwKTt0aGlzLkM9YS5iKHhjKTt0aGlzLlY9YS5iKHdjKTt0aGlzLk89Yjt0aGlzLlJiPWM7dGhpcy5EZD1cImVxXCI9PXRoaXMuTy5GPzA6Mjt0aGlzLlVlPW51bGx9cihTaSxTKTt2YXIgVGk9W1wiaGFzaFwiLFwiaW5kZXhfbmVzdGVkX2xvb3BcIixcIm5lc3RlZF9sb29wXCJdO1NpLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiam9pbih0eXBlOiBcIisodGhpcy5SYj9cIm91dGVyXCI6XCJpbm5lclwiKStcIiwgaW1wbDogXCIrVGlbdGhpcy5EZF0rXCIsIFwiK3RoaXMuTy50b1N0cmluZygpK1wiKVwifTtcblNpLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXtzd2l0Y2godGhpcy5EZCl7Y2FzZSAwOnJldHVybltWZyh0aGlzLk8sYVswXSxhWzFdLHRoaXMuUmIpXTtjYXNlIDE6cmV0dXJuW1dnKHRoaXMuTyxhWzBdLGFbMV0sdGhpcy5VZSx0aGlzLlYpXTtkZWZhdWx0OnZhciBiPXRoaXMuTyxjPWFbMF07YT1hWzFdO3ZhciBkPXRoaXMuUmIsZT1bYyxhXTtkfHwoZT1TZyhiLGMsYSkpO2M9ZVswXTthPWVbMV07Zm9yKHZhciBlPVtdLGY9Yy51KCksaD1hLnUoKSxsPWMuZW50cmllcy5sZW5ndGgscD1hLmVudHJpZXMubGVuZ3RoLEw9cCsyNTYtMT4+OCxzYT0wO3NhPEw7KXtmb3IodmFyIGNhPTA7Y2E8bDtjYSsrKXt2YXIgQ2I9ITEsZGc9SChjLmVudHJpZXNbY2FdLGIuZ2EpO2lmKG51bGwhPT1kZylmb3IodmFyIFdpPU1hdGgubWluKHNhKzE8PDgscCksRGI9c2E8PDg7RGI8V2k7RGIrKylpZihiLnZjKGRnLEgoYS5lbnRyaWVzW0RiXSxiLm1hKSkpe3ZhciBDYj0hMCxUYz1WZChjLmVudHJpZXNbY2FdLFxuZixhLmVudHJpZXNbRGJdLGgpO2UucHVzaChUYyl9ZCYmIUNiJiZlLnB1c2goVWcoYixjLmVudHJpZXNbY2FdLGYpKX1zYSsrfWI9Yy51KCkuY29uY2F0KGEudSgpKTtyZXR1cm5bbmV3IEcoZSxiKV19fTtmdW5jdGlvbiBVaShhLGIpe2EuRGQ9MTt2YXIgYz1hLkMuZ2V0KGIuQ2EoKS5qKCkpO2EuVWU9e2RnOmIsd2c6Yj09YS5PLmdhP2EuTy5tYTphLk8uZ2EsaW5kZXg6Y319O2Z1bmN0aW9uIFZpKGEpe1MuY2FsbCh0aGlzLDAsLTEpO3RoaXMubGY9YX1yKFZpLFMpO1ZpLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwibm9fb3Bfc3RlcChcIit0aGlzLmxmWzBdLnUoKS5qb2luKFwiLFwiKStcIilcIn07VmkucHJvdG90eXBlLmNhPWcoXCJsZlwiKTtmdW5jdGlvbiBYaSgpe31yKFhpLEdoKTtYaS5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXt0aGlzLkg9YTtpZighdGhpcy5IZChiKSlyZXR1cm4gYTtIZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgU2l9KS5mb3JFYWNoKHRoaXMuR2csdGhpcyk7cmV0dXJuIHRoaXMuSH07WGkucHJvdG90eXBlLkhkPWZ1bmN0aW9uKGEpe3JldHVybiAxPGEuZnJvbS5sZW5ndGh9O1xuWGkucHJvdG90eXBlLkdnPWZ1bmN0aW9uKGEpe2lmKFwiZXFcIj09YS5PLkYmJiFhLlJiKXt2YXIgYj1mdW5jdGlvbihiKXtpZighKGIgaW5zdGFuY2VvZiBPaSkpcmV0dXJuIG51bGw7Yj1UZChiLnRhYmxlKT09VGQoYS5PLm1hLkkoKSk/YS5PLm1hOmEuTy5nYTtyZXR1cm4gbnVsbD09PWIuQ2EoKT9udWxsOmJ9LGM9YihpZShhLDApKSxiPWIoaWUoYSwxKSk7aWYobnVsbCE9PWN8fG51bGwhPT1iKXtiPW51bGw9PT1iP2M6YjtVaShhLGIpO3ZhciBkPW5ldyBHKFtdLFtUZChiLkkoKSldKTtsZShhLG5ldyBWaShbZF0pLGI9PWM/MDoxKX19fTtmdW5jdGlvbiBZaShhKXthPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnFhKCl9KTthPXliLmFwcGx5KG51bGwsYSk7dmFyIGI9W107eGIoYSxmdW5jdGlvbihhKXtiLnB1c2goYSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBaaShhKXt0aGlzLlFiPWF9WmkucHJvdG90eXBlLmJkPWZ1bmN0aW9uKCl7cmV0dXJuIDE9PXRoaXMuUWIuZi5sZW5ndGg/W0RkKCldOlt0aGlzLlFiLmYubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIERkKCl9KV19O2Z1bmN0aW9uICRpKGEsYil7dGhpcy5RYj1hO3RoaXMuR2E9Yjt0aGlzLkxkPXRoaXMuYWY9bnVsbH1cbmZ1bmN0aW9uIGFqKGEsYil7dmFyIGM9eSgpO2EuR2Eua2V5cygpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGQ9dGhpcy5HYS5nZXQoYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB2ZShiLGEpfSx0aGlzKSxmPW5ldyBIZChbRGQoKV0pO2QuZm9yRWFjaChmdW5jdGlvbihhKXtmPUlkKGYsYS53ZSgpKX0pO2Muc2V0KGEsZil9LGEpO3JldHVybiBjfSRpLnByb3RvdHlwZS5iZD1mdW5jdGlvbihhKXtpZih0aGlzLmFmPT1hKXJldHVybiB0aGlzLkxkO2Zvcih2YXIgYj1haih0aGlzLGEpLGM9dGhpcy5RYi5mLmxlbmd0aC0xOzA8PWM7Yy0tKXt2YXIgZD10aGlzLlFiLmZbY107aWYobnVsbCE9PShiLmdldChkLmJhLmdldE5hbWUoKSl8fG51bGwpKWJyZWFrO2Iuc2V0KGQuYmEuZ2V0TmFtZSgpLG5ldyBIZChbRGQoKV0pKX10aGlzLkxkPTE9PXRoaXMuUWIuZi5sZW5ndGg/eihiKVswXS5xYSgpOllpKGJqKHRoaXMsYikpO3RoaXMuYWY9YTtyZXR1cm4gdGhpcy5MZH07XG5mdW5jdGlvbiBiaihhLGIpe3ZhciBjPXkoKSxkPTA7YS5RYi5mLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5zZXQoYS5iYS5nZXROYW1lKCksZCk7ZCsrfSk7cmV0dXJuIGdjKGIpLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYy5nZXQoYSktYy5nZXQoYil9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGIuZ2V0KGEpfSl9O2Z1bmN0aW9uIGNqKGEsYil7dGhpcy54ZD1iO3RoaXMuQz1hLmIoeGMpfWZ1bmN0aW9uIGRqKGEpe2E9YS5DLmdldChuZihhLnhkKSk7cmV0dXJuIE1hdGguZmxvb3IoLjAyKmEuWSgpLmlhKX1mdW5jdGlvbiBlaihhLGIsYyl7Yz1jLmZpbHRlcihhLmtnLGEpO2lmKDA9PWMubGVuZ3RoKXJldHVybiBudWxsO2E9ZmooYSxjKTtpZigwPT1hLmxlbmd0aClyZXR1cm4gbnVsbDtpZigxPT1hLmxlbmd0aClyZXR1cm4gYVswXTt2YXIgZD1OdW1iZXIuTUFYX1ZBTFVFO3JldHVybiBhLnJlZHVjZShmdW5jdGlvbihhLGMpe3ZhciBlPWdqKGMsYik7cmV0dXJuIGU8ZD8oZD1lLGMpOmF9LG51bGwpfVxuZnVuY3Rpb24gZmooYSxiKXtyZXR1cm4gYS54ZC5EYSgpLm1hcChmdW5jdGlvbihhKXthPW5ldyBoaih0aGlzLkMsYSk7aWooYSxiKTtyZXR1cm4gYX0sYSkuZmlsdGVyKGZ1bmN0aW9uKGEpe2lmKG51bGw9PT1hLkdhKWE9ITE7ZWxzZXtmb3IodmFyIGI9ITEsYz0hMCxmPTA7ZjxhLmNiLmYubGVuZ3RoO2YrKyl7dmFyIGg9YS5HYS5oYXMoYS5jYi5mW2ZdLmJhLmdldE5hbWUoKSk7aWYoYiYmaCl7Yz0hMTticmVha31ofHwoYj0hMCl9YT1jfXJldHVybiBhfSl9Y2oucHJvdG90eXBlLmtnPWZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgcWU/IWEubGQoKXx8YS5KLkkoKSE9dGhpcy54ZHx8XCJpblwiPT1hLkYmJmEudmFsdWUubGVuZ3RoPmRqKHRoaXMpPyExOiEwOmEgaW5zdGFuY2VvZiBPZz9hLmxkKCkmJmllKGEsMCkuSi5JKCk9PXRoaXMueGQ/SihhKS5sZW5ndGg8PWRqKHRoaXMpOiExOiExfTtcbmZ1bmN0aW9uIGhqKGEsYil7dGhpcy5DPWE7dGhpcy5jYj1iO3RoaXMuZWc9Qih0aGlzLmNiLmYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmJhLmdldE5hbWUoKX0pKTt0aGlzLiRkPXRoaXMuR2E9bnVsbH1mdW5jdGlvbiBqaihhKXtudWxsPT09YS4kZCYmKGEuJGQ9bmV3ICRpKGEuY2IsYS5HYSkpO3JldHVybiBhLiRkfWZ1bmN0aW9uIGlqKGEsYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEubGIoKVswXS5nZXROYW1lKCk7dGhpcy5lZy5oYXMoYikmJihudWxsPT09dGhpcy5HYSYmKHRoaXMuR2E9bmV3IGNkKSx0aGlzLkdhLnNldChiLGEuVygpKSl9LGEpfWZ1bmN0aW9uIGdqKGEsYil7Yj1qaihhKS5iZChiKTt2YXIgYz1hLkMuZ2V0KGEuY2IuaigpKTtyZXR1cm4gYi5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYStjLlpjKGIpfSwwKX07ZnVuY3Rpb24ga2ooYSxiLGMsZCl7Uy5jYWxsKHRoaXMsMCwtMSk7dGhpcy5DPWEuYih4Yyk7dGhpcy5pbmRleD1iO3RoaXMuJGU9Yzt0aGlzLnBlPWQ7dGhpcy5SYz10aGlzLlFjPSExfXIoa2osUyk7a2oucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJpbmRleF9yYW5nZV9zY2FuKFwiK3RoaXMuaW5kZXguaigpK1wiLCA/LCBcIisodGhpcy5wZT9cInJldmVyc2VcIjpcIm5hdHVyYWxcIikrKHRoaXMuUWM/XCIsIGxpbWl0Oj9cIjpcIlwiKSsodGhpcy5SYz9cIiwgc2tpcDo/XCI6XCJcIikrXCIpXCJ9O2tqLnByb3RvdHlwZS5QYz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLnRvU3RyaW5nKCksYz10aGlzLiRlLmJkKGEpLGI9Yi5yZXBsYWNlKFwiP1wiLGMudG9TdHJpbmcoKSk7dGhpcy5RYyYmKGI9Yi5yZXBsYWNlKFwiP1wiLGEuWC50b1N0cmluZygpKSk7dGhpcy5SYyYmKGI9Yi5yZXBsYWNlKFwiP1wiLGEuTC50b1N0cmluZygpKSk7cmV0dXJuIGJ9O1xua2oucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjKXthPXRoaXMuJGUuYmQoYyk7Yj10aGlzLkMuZ2V0KHRoaXMuaW5kZXguaigpKTtjPSgxPT1hLmxlbmd0aCYmYVswXWluc3RhbmNlb2YgRSYmRWQoYVswXSk/SWYoYi5nZXQoYVswXS5mcm9tKSwhMSx0aGlzLlFjP2MuWDp2b2lkIDAsdGhpcy5SYz9jLkw6dm9pZCAwKTpiLlZhKGEsdGhpcy5wZSx0aGlzLlFjP2MuWDp2b2lkIDAsdGhpcy5SYz9jLkw6dm9pZCAwKSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgaGMoYSx7fSl9LHRoaXMpO3JldHVybltRZChjLFt0aGlzLmluZGV4Lm1jXSldfTtmdW5jdGlvbiBsaigpe1MuY2FsbCh0aGlzLDAsMCl9cihsaixTKTtsai5wcm90b3R5cGUudG9TdHJpbmc9ayhcIm11bHRpX2luZGV4X3JhbmdlX3NjYW4oKVwiKTtcbmxqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXt2YXIgYj15KCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Iuc2V0KGEudmEuaWQoKSxhKX0pfSk7dmFyIGM9eihiKTtyZXR1cm5bbmV3IEcoYyxhWzBdLnUoKSldfTtmdW5jdGlvbiBtaihhKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuamM9YX1yKG1qLFMpO21qLnByb3RvdHlwZS50b1N0cmluZz1rKFwic2VsZWN0KD8pXCIpO21qLnByb3RvdHlwZS5QYz1mdW5jdGlvbihhKXthPXZlKGEsdGhpcy5qYyk7cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKFwiP1wiLGEudG9TdHJpbmcoKSl9O21qLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuW3ZlKGMsdGhpcy5qYykuZXZhbChhWzBdKV19O2Z1bmN0aW9uIG5qKGEsYil7Uy5jYWxsKHRoaXMsMCwxKTt0aGlzLlY9YS5iKHdjKTt0aGlzLlU9Yn1yKG5qLFMpO25qLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwidGFibGVfYWNjZXNzX2J5X3Jvd19pZChcIit0aGlzLlUuZ2V0TmFtZSgpK1wiKVwifTtuai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7cmV0dXJuW1FkKEVmKHRoaXMuVixLZChhWzBdKSksW1RkKHRoaXMuVSldKV19O2Z1bmN0aW9uIG9qKGEpe3RoaXMuYz1hfXIob2osR2gpO29qLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe3RoaXMuSD1hO0hnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBPaX0pLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGM9cGooYSk7aWYoMCE9Yy5sZW5ndGgpe3ZhciBlPWVqKG5ldyBjaih0aGlzLmMsYS50YWJsZSksYixjLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdmUoYixhLmpjKX0pKTtpZihudWxsIT09ZSl7dmFyIGY9eSgpO2MuZm9yRWFjaChmdW5jdGlvbihhKXtmLnNldChhLmpjLGEpfSx0aGlzKTt0aGlzLkg9cWoodGhpcyxlLGYsYSl9fX0sdGhpcyk7cmV0dXJuIHRoaXMuSH07ZnVuY3Rpb24gcGooYSl7dmFyIGI9W107Zm9yKGE9YS5nZXRQYXJlbnQoKTthOyl7aWYoYSBpbnN0YW5jZW9mIG1qKWIucHVzaChhKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiBTaSlicmVhazthPWEuZ2V0UGFyZW50KCl9cmV0dXJuIGJ9XG5mdW5jdGlvbiBxaihhLGIsYyxkKXsobnVsbD09PWIuR2E/W106Yi5HYS52YWx1ZXMoKSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBjLmdldChhKX0pLmZvckVhY2goSWcpO2I9bmV3IGtqKGEuYyxiLmNiLGpqKGIpLCExKTthPW5ldyBuaihhLmMsZC50YWJsZSk7SyhhLGIpO01nKGQsZCxhLGIpO3JldHVybiBiLmJiKCl9O2Z1bmN0aW9uIHJqKGEsYil7Uy5jYWxsKHRoaXMsMCwtMSk7dGhpcy5DPWEuYih4Yyk7dGhpcy5VPWJ9cihyaixTKTtyai5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImluc2VydChcIit0aGlzLlUuZ2V0TmFtZSgpK1wiKVwifTtyai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMpe3NqKHRoaXMuVSxjLnZhbHVlcyx0aGlzLkMpO2IuQWIodGhpcy5VLGMudmFsdWVzKTtyZXR1cm5bUWQoYy52YWx1ZXMsW3RoaXMuVS5nZXROYW1lKCldKV19O2Z1bmN0aW9uIHNqKGEsYixjKXthPWEuTWIuc2Q7aWYobnVsbD09PWE/MDphLmZbMF0uYXV0b0luY3JlbWVudCl7dmFyIGQ9YS5mWzBdLmJhLmdldE5hbWUoKTtjPWMuZ2V0KGEuaigpKS5ZKCkuRmM7dmFyIGU9bnVsbD09PWM/MDpjO2IuZm9yRWFjaChmdW5jdGlvbihhKXtpZigwPT1hLm1bZF18fG51bGw9PWEubVtkXSllKyssYS5tW2RdPWV9KX19XG5mdW5jdGlvbiB0aihhLGIpe1MuY2FsbCh0aGlzLDAsLTEpO3RoaXMuQz1hLmIoeGMpO3RoaXMuVT1ifXIodGosUyk7dGoucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJpbnNlcnRfcmVwbGFjZShcIit0aGlzLlUuZ2V0TmFtZSgpK1wiKVwifTt0ai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMpe3NqKHRoaXMuVSxjLnZhbHVlcyx0aGlzLkMpO2IuV2QodGhpcy5VLGMudmFsdWVzKTtyZXR1cm5bUWQoYy52YWx1ZXMsW3RoaXMuVS5nZXROYW1lKCldKV19O2Z1bmN0aW9uIHVqKCl7Uy5jYWxsKHRoaXMsMCwxKX1yKHVqLFMpO3VqLnByb3RvdHlwZS50b1N0cmluZz1rKFwibGltaXQoPylcIik7dWoucHJvdG90eXBlLlBjPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZShcIj9cIixhLlgudG9TdHJpbmcoKSl9O3VqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyl7YVswXS5lbnRyaWVzLnNwbGljZShjLlgpO3JldHVybiBhfTtmdW5jdGlvbiB2aihhKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuTj1hfXIodmosUyk7bT12ai5wcm90b3R5cGU7bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwib3JkZXJfYnkoXCIrQWUodGhpcy5OKStcIilcIn07bS5jYT1mdW5jdGlvbihhKXtpZigxPT1hLmxlbmd0aCl7dmFyIGI7Yj1hWzBdO2Zvcih2YXIgYz1udWxsLGQ9MDtkPHRoaXMuTi5sZW5ndGg7ZCsrKXt2YXIgZT1jaCh0aGlzLk5bZF0uSik7aWYobnVsbCE9PWIuJGEmJmIuJGEuaGFzKGUuaigpKSl7Yz1lO2JyZWFrfX1iPWM7KG51bGw9PT1iP2FbMF06TGQoYVswXSxiKSkuZW50cmllcy5zb3J0KHRoaXMuVGYuYmluZCh0aGlzKSl9ZWxzZSBhLnNvcnQodGhpcy5KZy5iaW5kKHRoaXMpKTtyZXR1cm4gYX07XG5tLiQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj0tMTtkbyBmKyssZT10aGlzLk5bZl0uSixjPXRoaXMuTltmXS5vcmRlcixkPWEoZSksZT1iKGUpO3doaWxlKGQ9PWUmJmYrMTx0aGlzLk4ubGVuZ3RoKTthPWQ8ZT8tMTpkPmU/MTowO3JldHVybiAxPT1jP2E6LWF9O20uSmc9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy4kKGZ1bmN0aW9uKGIpe3JldHVybiBiIGluc3RhbmNlb2YgUj9MZChhLGIpOkgoYS5lbnRyaWVzW2EuZW50cmllcy5sZW5ndGgtMV0sYil9LGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgUj9MZChiLGEpOkgoYi5lbnRyaWVzW2IuZW50cmllcy5sZW5ndGgtMV0sYSl9KX07bS5UZj1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLiQoZnVuY3Rpb24oYil7cmV0dXJuIEgoYSxiKX0sZnVuY3Rpb24oYSl7cmV0dXJuIEgoYixhKX0pfTtmdW5jdGlvbiB3aihhLGIpe3RoaXMuTmE9YTt0aGlzLks9Yn1mdW5jdGlvbiB4aihhKXtyZXR1cm4gYS5LLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBSfSxhKT95aihhKTp6aihhKX1mdW5jdGlvbiB5aihhKXtpZigxPT1hLksubGVuZ3RoJiZcIkRJU1RJTkNUXCI9PWEuS1swXS5MYilyZXR1cm4gYT1MZChhLk5hLGEuS1swXSkuZW50cmllcy5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9bmV3IFJkKG5ldyBoYygtMSx7fSksMTx0aGlzLk5hLk0uc2l6ZSk7VWQoYix0aGlzLktbMF0sSChhLHRoaXMuS1swXS5jaGlsZCkpO3JldHVybiBifSxhKSxuZXcgRyhhLFtdKTt2YXIgYj1uZXcgUmQobmV3IGhjKC0xLHt9KSwxPGEuTmEuTS5zaXplKTthLksuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYz1hIGluc3RhbmNlb2YgUj9MZCh0aGlzLk5hLGEpOkgodGhpcy5OYS5lbnRyaWVzWzBdLGEpO1VkKGIsYSxjKX0sYSk7cmV0dXJuIG5ldyBHKFtiXSxhLk5hLnUoKSl9XG5mdW5jdGlvbiB6aihhKXt2YXIgYj1BcnJheShhLk5hLmVudHJpZXMubGVuZ3RoKSxjPTE8YS5OYS5NLnNpemU7YS5OYS5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSxlKXtiW2VdPW5ldyBSZChuZXcgaGMoYS52YS5pZCgpLHt9KSxjKTt0aGlzLksuZm9yRWFjaChmdW5jdGlvbihjKXtVZChiW2VdLGMsSChhLGMpKX0sdGhpcyl9LGEpO3JldHVybiBuZXcgRyhiLGEuTmEudSgpKX1mdW5jdGlvbiBBaihhLGIpe3ZhciBjPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB4aihuZXcgd2ooYSxiKSkuZW50cmllc1swXX0pO3JldHVybiBuZXcgRyhjLGFbMF0udSgpKX07ZnVuY3Rpb24gQmooYSxiKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuZj1hO3RoaXMuUGI9Yn1yKEJqLFMpO0JqLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPVwicHJvamVjdChcIit0aGlzLmYudG9TdHJpbmcoKTtpZihudWxsIT09dGhpcy5QYil2YXIgYj10aGlzLlBiLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5qKCl9KS5qb2luKFwiLCBcIiksYT1hKyhcIiwgZ3JvdXBCeShcIitiK1wiKVwiKTtyZXR1cm4gYStcIilcIn07QmoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpezA9PWEubGVuZ3RoP2E9W05kKCldOjE9PWEubGVuZ3RoPyhhPWFbMF0sYT1bMD09dGhpcy5mLmxlbmd0aD9hOnhqKG5ldyB3aihhLHRoaXMuZikpXSk6YT1bQWooYSx0aGlzLmYpXTtyZXR1cm4gYX07ZnVuY3Rpb24gQ2ooYSl7cmV0dXJuIGEuZi5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgUn0pfHxudWxsIT09YS5QYn07ZnVuY3Rpb24gRGooKXtTLmNhbGwodGhpcywwLDEpfXIoRGosUyk7RGoucHJvdG90eXBlLnRvU3RyaW5nPWsoXCJza2lwKD8pXCIpO0RqLnByb3RvdHlwZS5QYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoXCI/XCIsYS5MLnRvU3RyaW5nKCkpfTtEai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMpe3JldHVybltuZXcgRyhhWzBdLmVudHJpZXMuc2xpY2UoYy5MKSxhWzBdLnUoKSldfTtmdW5jdGlvbiBFaigpe31yKEVqLEdoKTtFai5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXtpZighbihiLlgpJiYhbihiLkwpKXJldHVybiBhO3ZhciBjPUZqKGEpO2lmKG51bGw9PT1jKXJldHVybiBhO0hnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiB1anx8YSBpbnN0YW5jZW9mIERqfSkuZm9yRWFjaChmdW5jdGlvbihhKXthIGluc3RhbmNlb2YgdWo/Yy5RYz0hMDpjLlJjPSEwO0lnKGEpfSx0aGlzKTtyZXR1cm4gYy5iYigpfTtmdW5jdGlvbiBGaihhKXthPUhnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBran0sZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBCaiYmQ2ooYSl8fGEgaW5zdGFuY2VvZiB2anx8MSE9SihhKS5sZW5ndGh8fGEgaW5zdGFuY2VvZiBtan0pO3JldHVybiAwPGEubGVuZ3RoP2FbMF06bnVsbH07ZnVuY3Rpb24gR2ooYSl7dGhpcy5jPWF9cihHaixHaCk7R2oucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7dGhpcy5IPWE7dmFyIGM9SGoodGhpcyxiKTtpZigwPT1jLmxlbmd0aClyZXR1cm4gdGhpcy5IO3ZhciBkLGU9MDtkbyBkPWNbZSsrXSxhPUlqKHRoaXMsZCxiKTt3aGlsZShudWxsPT09YSYmZTxjLmxlbmd0aCk7aWYobnVsbD09PWEpcmV0dXJuIHRoaXMuSDtiPUpqKHRoaXMsYVswXS5jYi5tYyk7cmV0dXJuIG51bGw9PT1iP3RoaXMuSDp0aGlzLkg9S2oodGhpcyxkLGIsYSl9O2Z1bmN0aW9uIEhqKGEsYil7cmV0dXJuIEhnKGEuSCxmdW5jdGlvbihhKXtpZighKGEgaW5zdGFuY2VvZiBtaikpcmV0dXJuITE7YT12ZShiLGEuamMpO3JldHVybiBhIGluc3RhbmNlb2YgT2cmJlwib3JcIj09YS5wYn0pfWZ1bmN0aW9uIEpqKGEsYil7cmV0dXJuIEhnKGEuSCxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIE9pJiZhLnRhYmxlLmdldE5hbWUoKT09Yn0pWzBdfHxudWxsfVxuZnVuY3Rpb24gSWooYSxiLGMpe2I9dmUoYyxiLmpjKTt2YXIgZD1iLnUoKTtpZigxIT1kLnNpemUpcmV0dXJuIG51bGw7dmFyIGQ9QyhkKVswXSxlPW5ldyBjaihhLmMsZCksZj1udWxsO3JldHVybiBKKGIpLmV2ZXJ5KGZ1bmN0aW9uKGEpe2E9ZWooZSxjLFthXSk7bnVsbD09PWF8fChudWxsPT09Zj9mPVthXTpmLnB1c2goYSkpO3JldHVybiBudWxsIT09YX0pP2Y6bnVsbH1mdW5jdGlvbiBLaihhLGIsYyxkKXt2YXIgZT1uZXcgbmooYS5jLGMudGFibGUpLGY9bmV3IGxqO0soZSxmKTtkLmZvckVhY2goZnVuY3Rpb24oYSl7YT1uZXcga2oodGhpcy5jLGEuY2IsamooYSksITEpO0soZixhKX0sYSk7SWcoYik7TWcoYyxjLGUsZik7cmV0dXJuIGYuYmIoKX07ZnVuY3Rpb24gTGooYSl7dGhpcy5jPWF9cihMaixHaCk7TGoucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7Yj1NaihhLGIpO2lmKG51bGw9PT1iKXJldHVybiBhO2E6e3ZhciBjPWI7YT1OaihpZShiLDApKTtpZihudWxsIT09YSl7dmFyIGQ7ZD1iLk47Zm9yKHZhciBlPW51bGwsZj1hLnRhYmxlLkRhKCksaD0wO2g8Zi5sZW5ndGgmJm51bGw9PT1lO2grKyllPU9qKGZbaF0sZCk7ZD1lO2lmKG51bGw9PT1kKXthPWM7YnJlYWsgYX1jPW5ldyBraih0aGlzLmMsZC5jYixuZXcgWmkoZC5jYiksZC5YZSk7ZD1uZXcgbmoodGhpcy5jLGEudGFibGUpO0soZCxjKTtJZyhiKTtjPU1nKGEsYSxkLGMpfWE9Y31hPT1iJiYoYT1iLGM9UGooaWUoYiwwKSksbnVsbCE9PWMmJihkPU9qKGMuaW5kZXgsYi5OKSxudWxsIT09ZCYmKGMucGU9ZC5YZSxhPUlnKGIpLnBhcmVudCkpKTtyZXR1cm4gYS5iYigpfTtcbmZ1bmN0aW9uIFBqKGEpe2E9SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIGtqfSxmdW5jdGlvbihhKXtyZXR1cm4gMSE9SihhKS5sZW5ndGh9KTtyZXR1cm4gMDxhLmxlbmd0aD9hWzBdOm51bGx9ZnVuY3Rpb24gTmooYSl7YT1IZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgT2l9LGZ1bmN0aW9uKGEpe3JldHVybiAxIT1KKGEpLmxlbmd0aH0pO3JldHVybiAwPGEubGVuZ3RoP2FbMF06bnVsbH1mdW5jdGlvbiBNaihhLGIpe3JldHVybiBuKGIuTik/SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIHZqfSlbMF06bnVsbH1mdW5jdGlvbiBPaihhLGIpe2lmKGEuZi5sZW5ndGghPWIubGVuZ3RofHwhYi5ldmVyeShmdW5jdGlvbihiLGQpe3JldHVybiBiLkouZ2V0TmFtZSgpPT1hLmZbZF0uYmEuZ2V0TmFtZSgpfSkpcmV0dXJuIG51bGw7Yj1RaihiLGEpO3JldHVybiBiWzBdfHxiWzFdP3tjYjphLFhlOmJbMV19Om51bGx9XG5mdW5jdGlvbiBRaihhLGIpe3ZhciBjPWEucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGE8PDF8KDA9PWIub3JkZXI/MDoxKX0sMCksZD1iLmYucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGE8PDF8KDA9PWIub3JkZXI/MDoxKX0sMCksYz1jXmQ7cmV0dXJuWzA9PWMsYz09TWF0aC5wb3coMixNYXRoLm1heChhLmxlbmd0aCxiLmYubGVuZ3RoKSktMV19O2Z1bmN0aW9uIFJqKGEsYixjKXt0aGlzLkhhPWE7dGhpcy5sZT1iO3RoaXMuVmI9Y31Sai5wcm90b3R5cGUuZ2M9ZnVuY3Rpb24oKXt0aGlzLlZiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5IYT1hLmdiKHRoaXMuSGEsdGhpcy5sZSl9LHRoaXMpO3JldHVybiB0aGlzLkhhfTtmdW5jdGlvbiBTaihhKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuVT1hfXIoU2osUyk7U2oucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJ1cGRhdGUoXCIrdGhpcy5VLmdldE5hbWUoKStcIilcIn07U2oucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjKXthPWFbMF0uZW50cmllcy5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5VLmtiKGEudmEuSmEoKSk7Yy5zZXQuZm9yRWFjaChmdW5jdGlvbihhKXtiLm1bYS5KLmdldE5hbWUoKV09YS52YWx1ZX0sdGhpcyk7cmV0dXJuIGJ9LHRoaXMpO2IudXBkYXRlKHRoaXMuVSxhKTtyZXR1cm5bTmQoKV19O2Z1bmN0aW9uIFRqKGEpe3RoaXMuYz1hO3RoaXMucmU9W25ldyBYaSxuZXcgb2oodGhpcy5jKSxuZXcgR2oodGhpcy5jKSxuZXcgTGoodGhpcy5jKSxuZXcgRWosbmV3IFBpKHRoaXMuYyldO3RoaXMuUGQ9W25ldyBvaih0aGlzLmMpXX1Uai5wcm90b3R5cGUuY3JlYXRlPWZ1bmN0aW9uKGEsYil7dmFyIGM9YS5iYigpO2lmKGMgaW5zdGFuY2VvZiB0aHx8YyBpbnN0YW5jZW9mIHNoKXJldHVybiBVaih0aGlzLGEsYik7aWYoYyBpbnN0YW5jZW9mIHpofHxjIGluc3RhbmNlb2YgRGh8fGMgaW5zdGFuY2VvZiBFaClyZXR1cm4gVWoodGhpcyxhLGIsdGhpcy5yZSk7aWYoYyBpbnN0YW5jZW9mIHVofHxjIGluc3RhbmNlb2YgdmgpcmV0dXJuIFVqKHRoaXMsYSxiLHRoaXMuUGQpO3Rocm93IG5ldyBEKDgpO307XG5mdW5jdGlvbiBVaihhLGIsYyxkKXthPUZnKGIuYmIoKSxhLnRnLmJpbmQoYSkpO251bGwhPWQmJihhPShuZXcgUmooYSxjLGQpKS5nYygpKTtyZXR1cm4gbmV3IEJlKGEsYi5kYSgpKX1cblRqLnByb3RvdHlwZS50Zz1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgemgpcmV0dXJuIG5ldyBCaihhLmYsYS5QYik7aWYoYSBpbnN0YW5jZW9mIENoKXJldHVybiBuZXcgUWkoYS5mKTtpZihhIGluc3RhbmNlb2YgQmgpcmV0dXJuIG5ldyBnaChhLmYpO2lmKGEgaW5zdGFuY2VvZiBBaClyZXR1cm4gbmV3IHZqKGEuTik7aWYoYSBpbnN0YW5jZW9mIEVoKXJldHVybiBuZXcgRGo7aWYoYSBpbnN0YW5jZW9mIERoKXJldHVybiBuZXcgdWo7aWYoYSBpbnN0YW5jZW9mIHdoKXJldHVybiBuZXcgbWooYS5PLlcoKSk7aWYoYSBpbnN0YW5jZW9mIHloKXJldHVybiBuZXcgTGg7aWYoYSBpbnN0YW5jZW9mIEZoKXJldHVybiBuZXcgU2kodGhpcy5jLGEuTyxhLlJiKTtpZihhIGluc3RhbmNlb2YgeGgpcmV0dXJuIG5ldyBPaSh0aGlzLmMsYS50YWJsZSk7aWYoYSBpbnN0YW5jZW9mIHVoKXJldHVybiBuZXcgTWkoYS50YWJsZSk7aWYoYSBpbnN0YW5jZW9mIHZoKXJldHVybiBuZXcgU2ooYS50YWJsZSk7XG5pZihhIGluc3RhbmNlb2YgdGgpcmV0dXJuIG5ldyB0aih0aGlzLmMsYS50YWJsZSk7aWYoYSBpbnN0YW5jZW9mIHNoKXJldHVybiBuZXcgcmoodGhpcy5jLGEudGFibGUpO3Rocm93IG5ldyBEKDUxNCk7fTtmdW5jdGlvbiBWaihhKXt0aGlzLnFnPW5ldyBMaTt0aGlzLkVnPW5ldyBUaihhKX07ZnVuY3Rpb24gV2ooKXt0aGlzLmRmPXkoKX1mdW5jdGlvbiBYaihhLGIpe3ZhciBjPWEuZGYuZ2V0KGIuZ2V0TmFtZSgpKXx8bnVsbDtudWxsPT09YyYmKGM9bmV3IFlqLGEuZGYuc2V0KGIuZ2V0TmFtZSgpLGMpKTtyZXR1cm4gY31mdW5jdGlvbiBaaihhLGIsYyxkKXtjLmZvckVhY2goZnVuY3Rpb24oYSl7YT1Yaih0aGlzLGEpOzA9PWQ/KGEuZmI9bnVsbCxhLndjPWIpOjM9PWQ/KG51bGw9PT1hLlliJiYoYS5ZYj1CKCkpLGEuWWIuYWRkKGIpLG51bGw9PT1hLllhJiYoYS5ZYT1CKCkpLGEuWWEuZGVsZXRlKGIpKToxPT1kPyhudWxsPT09YS5ZYSYmKGEuWWE9QigpKSxhLllhLmFkZChiKSk6Mj09ZCYmKGEuZmI9Yil9LGEpfVxuZnVuY3Rpb24gYWsoYSxiLGMsZCl7dmFyIGU9ITA7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2lmKGUpe2E9WGoodGhpcyxhKTt2YXIgYz1udWxsPT09YS5ZYXx8MD09YS5ZYS5zaXplO2U9MD09ZD8obnVsbD09PWEuWWJ8fDA9PWEuWWIuc2l6ZSkmJmMmJm51bGw9PT1hLndjJiZudWxsIT09YS5mYiYmYS5mYj09YjozPT1kP251bGw9PT1hLndjJiZudWxsPT09YS5mYiYmbnVsbCE9PWEuWWEmJmEuWWEuaGFzKGIpOjE9PWQ/bnVsbD09PWEuZmI6YyYmKG51bGw9PT1hLmZifHxhLmZiPT1iKX19LGEpO3JldHVybiBlfWZ1bmN0aW9uIGJrKGEsYixjLGQpe3ZhciBlPWFrKGEsYixjLGQpO2UmJlpqKGEsYixjLGQpO3JldHVybiBlfVdqLnByb3RvdHlwZS5yZWxlYXNlTG9jaz1mdW5jdGlvbihhLGIpe2IuZm9yRWFjaChmdW5jdGlvbihiKXtYaih0aGlzLGIpLnJlbGVhc2VMb2NrKGEpfSx0aGlzKX07XG5mdW5jdGlvbiBjayhhLGIpe2IuZm9yRWFjaChmdW5jdGlvbihhKXtYaih0aGlzLGEpLmZiPW51bGx9LGEpfWZ1bmN0aW9uIFlqKCl7dGhpcy5ZYj10aGlzLllhPXRoaXMuZmI9dGhpcy53Yz1udWxsfVlqLnByb3RvdHlwZS5yZWxlYXNlTG9jaz1mdW5jdGlvbihhKXt0aGlzLndjPT1hJiYodGhpcy53Yz1udWxsKTt0aGlzLmZiPT1hJiYodGhpcy5mYj1udWxsKTtudWxsPT09dGhpcy5ZYXx8dGhpcy5ZYS5kZWxldGUoYSk7bnVsbD09PXRoaXMuWWJ8fHRoaXMuWWIuZGVsZXRlKGEpfTtmdW5jdGlvbiBkaygpe3RoaXMuVWI9bmV3IGVrO3RoaXMuRWM9bmV3IFdqfWZ1bmN0aW9uIEplKGEsYil7KDI+Yi5nZXRQcmlvcml0eSgpfHwyPmIuZ2V0UHJpb3JpdHkoKSkmJmNrKGEuRWMsYi5kYSgpKTthLlViLkFiKGIpO2ZrKGEpO3JldHVybiBiLkRiLmhhfWZ1bmN0aW9uIGZrKGEpe2Zvcih2YXIgYj1hLlViLnFhKCksYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO2lmKDA9PWQuRygpP2drKGEsZCwxLDMpOmdrKGEsZCwyLDApKXthLlViLnJlbW92ZShkKTt2YXIgZT1hO2QuZXhlYygpLnRoZW4oZS5CZy5iaW5kKGUsZCksZS5BZy5iaW5kKGUsZCkpfX19ZnVuY3Rpb24gZ2soYSxiLGMsZCl7dmFyIGU9ITE7YmsoYS5FYyxiLlcoKSxiLmRhKCksYykmJihlPWJrKGEuRWMsYi5XKCksYi5kYSgpLGQpKTtyZXR1cm4gZX1kay5wcm90b3R5cGUuQmc9ZnVuY3Rpb24oYSxiKXt0aGlzLkVjLnJlbGVhc2VMb2NrKGEuVygpLGEuZGEoKSk7YS5EYi5yZXNvbHZlKGIpO2ZrKHRoaXMpfTtcbmRrLnByb3RvdHlwZS5BZz1mdW5jdGlvbihhLGIpe3RoaXMuRWMucmVsZWFzZUxvY2soYS5XKCksYS5kYSgpKTthLkRiLnJlamVjdChiKTtmayh0aGlzKX07ZnVuY3Rpb24gZWsoKXt0aGlzLlViPVtdfWVrLnByb3RvdHlwZS5BYj1mdW5jdGlvbihhKXtIZih0aGlzLlViLGEsZnVuY3Rpb24oYSxjKXt2YXIgYj1hLmdldFByaW9yaXR5KCktYy5nZXRQcmlvcml0eSgpO3JldHVybiAwPT1iP2EuVygpLWMuVygpOmJ9KX07ZWsucHJvdG90eXBlLnFhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuVWIuc2xpY2UoKX07ZWsucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLlViO2E9eGEoYixhKTt2YXIgYzsoYz0wPD1hKSYmQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGIsYSwxKTtyZXR1cm4gY307ZnVuY3Rpb24gaGsoKXt0aGlzLk5jPXkoKX12YXIgaWs7ZnVuY3Rpb24gamsoKXtpa3x8KGlrPW5ldyBoayk7cmV0dXJuIGlrfWhrLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuTmMuY2xlYXIoKX07aGsucHJvdG90eXBlLmNsZWFyPWhrLnByb3RvdHlwZS5jbGVhcjtoay5wcm90b3R5cGUucmI9ZnVuY3Rpb24oYSxiKXt0aGlzLk5jLnNldChhLnRvU3RyaW5nKCksYik7cmV0dXJuIGJ9O2hrLnByb3RvdHlwZS5yZWdpc3RlclNlcnZpY2U9aGsucHJvdG90eXBlLnJiO2hrLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuTmMuZ2V0KGEudG9TdHJpbmcoKSl8fG51bGw7aWYobnVsbD09PWIpdGhyb3cgbmV3IEQoNyxhLnRvU3RyaW5nKCkpO3JldHVybiBifTtoay5wcm90b3R5cGUuZ2V0U2VydmljZT1oay5wcm90b3R5cGUuYjtoay5wcm90b3R5cGUubWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuTmMuaGFzKGEudG9TdHJpbmcoKSl9O1xuaGsucHJvdG90eXBlLmlzUmVnaXN0ZXJlZD1oay5wcm90b3R5cGUubWQ7ZnVuY3Rpb24ga2soKXt2YXIgYT1qaygpO3JldHVybiBnYyhhLk5jKX07ZnVuY3Rpb24gbGsoYSxiLGMsZCl7cmV0dXJuIG51bGwhPWE/bnVsbCE9Yj9tayhhLGIsYyxkKTpuayhhKTpvaygpfWZ1bmN0aW9uIHBrKGEpe3ZhciBiPVwiXCI7dHJ5e2I9SlNPTi5zdHJpbmdpZnkoYSl9Y2F0Y2goYyl7fXJldHVybiBifWZ1bmN0aW9uIHFrKGEpe3ZhciBiPWprKCk7YT1uZXcgdWMoXCJuc19cIithKTtyZXR1cm4gYi5tZChhKT9iLmIoYSk6bnVsbH1mdW5jdGlvbiBvaygpe3ZhciBhPXt9O2trKCkuZm9yRWFjaChmdW5jdGlvbihiKXtcIm5zX1wiPT1iLnN1YnN0cmluZygwLDMpJiYoYj1iLnN1YnN0cmluZygzKSxhW2JdPXFrKGIpLmIoQmMpLnZlcnNpb24oKSl9KTtyZXR1cm4gcGsoYSl9ZnVuY3Rpb24gbmsoYSl7YT1xayhhKTt2YXIgYj17fTtpZihudWxsIT1hKXt2YXIgYz1hLmIoeGMpO2EuYihCYykub2EoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2JbYS5nZXROYW1lKCldPWMuZ2V0KG5mKGEpKS5ZKCkuaWF9KX1yZXR1cm4gcGsoYil9XG5mdW5jdGlvbiBtayhhLGIsYyxkKXt2YXIgZT1xayhhKTthPVtdO2lmKG51bGwhPWUpe3ZhciBmPW51bGw7dHJ5e2Y9ZS5iKEJjKS50YWJsZShiKX1jYXRjaChoKXt9bnVsbCE9ZiYmKGI9ZS5iKHhjKSxlPWUuYih3YyksYz1iLmdldChuZihmKSkuVmEodm9pZCAwLCExLGMsZCksYy5sZW5ndGgmJihhPUVmKGUsYykubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLm19KSkpfXJldHVybiBwayhhKX07ZnVuY3Rpb24gcmsoYSxiKXt0aGlzLlFkPWVlKCk7dGhpcy5tZT1hO3RoaXMub2Q9Yjt0aGlzLks9c2sodGhpcyl9ZnVuY3Rpb24gc2soYSl7aWYoMDxhLm1lLmYubGVuZ3RoKXJldHVybiBhLm1lLmY7dmFyIGI9W107YS5tZS5mcm9tLmZvckVhY2goZnVuY3Rpb24oYSl7YS5sYigpLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5wdXNoKGEpfSl9KTtyZXR1cm4gYn1yay5wcm90b3R5cGUuJD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLksuZXZlcnkoZnVuY3Rpb24oYyl7cmV0dXJuIDY9PWMuRygpfHwwPT1jLkcoKT9IKGEsYyk9PT1IKGIsYyk6ZmUodGhpcy5RZCxjLkcoKSxcImVxXCIpKEgoYSxjKSxIKGIsYykpfSx0aGlzKX07XG5mdW5jdGlvbiB0ayhhLGIsYyl7dmFyIGQ9bnVsbD09PWI/W106Yi5lbnRyaWVzLGU9cGIoZCxjLmVudHJpZXMsYS4kLmJpbmQoYSksZnVuY3Rpb24oYSl7cmV0dXJuIGRbYV19KTtiPVtdO2Zvcih2YXIgZj0wLGg9MDtoPGQubGVuZ3RoO2grKyl7dmFyIGw9ZFtoXTtlW2ZdPT1sP2YrKzoobD1hLm9kLnNwbGljZShmLDEpLGw9dWsoaCxsLDAsYS5vZCksYi5wdXNoKGwpKX1lPXBiKGQsYy5lbnRyaWVzLGEuJC5iaW5kKGEpLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGMuZW50cmllc1tiXX0pO2ZvcihoPWY9MDtoPGMuZW50cmllcy5sZW5ndGg7aCsrKWw9Yy5lbnRyaWVzW2hdLGVbZl09PWw/ZisrOihhLm9kLnNwbGljZShoLDAsbC52YS5tKSxsPXVrKGgsW10sMSxhLm9kKSxiLnB1c2gobCkpO3JldHVybiBifWZ1bmN0aW9uIHVrKGEsYixjLGQpe3JldHVybnthZGRlZENvdW50OmMsaW5kZXg6YSxvYmplY3Q6ZCxyZW1vdmVkOmIsdHlwZTpcInNwbGljZVwifX07ZnVuY3Rpb24gdmsoKXt0aGlzLmZjPXkoKX12ay5wcm90b3R5cGUuQ2Q9ZnVuY3Rpb24oYSxiKXt2YXIgYz1rYShhLnF1ZXJ5KS50b1N0cmluZygpLGQ9dGhpcy5mYy5nZXQoYyl8fG51bGw7bnVsbD09PWQmJihkPW5ldyB3ayhhKSx0aGlzLmZjLnNldChjLGQpKTtkLkNkKGIpfTt2ay5wcm90b3R5cGUubmU9ZnVuY3Rpb24oYSxiKXthPWthKGEucXVlcnkpLnRvU3RyaW5nKCk7dmFyIGM9dGhpcy5mYy5nZXQoYSl8fG51bGw7Yy5uZShiKTswPGMuSGMuc2l6ZXx8dGhpcy5mYy5kZWxldGUoYSl9O2Z1bmN0aW9uIEllKGEsYil7dmFyIGM9QigpO2IuZm9yRWFjaChmdW5jdGlvbihhKXtjLmFkZChhLmdldE5hbWUoKSl9KTt2YXIgZD1bXTthLmZjLmZvckVhY2goZnVuY3Rpb24oYSl7YT1hLkJjKCk7YS5jb250ZXh0LmZyb20uc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYy5oYXMoYS5nZXROYW1lKCkpfSkmJmQucHVzaChhKX0pO3JldHVybiBkfVxuZnVuY3Rpb24gR2UoYSxiLGMpe2I9a2EobnVsbCE9Yi5XYz9iLldjOmIpLnRvU3RyaW5nKCk7YT1hLmZjLmdldChiKXx8bnVsbDtudWxsIT09YSYmeGsoYSxjKX1mdW5jdGlvbiB3ayhhKXt0aGlzLkhmPWE7dGhpcy5IYz1CKCk7dGhpcy55Zz1bXTt0aGlzLmJmPW51bGw7dGhpcy5SZj1uZXcgcmsoYS5xdWVyeSx0aGlzLnlnKX13ay5wcm90b3R5cGUuQ2Q9ZnVuY3Rpb24oYSl7dGhpcy5IYy5oYXMoYSl8fHRoaXMuSGMuYWRkKGEpfTt3ay5wcm90b3R5cGUubmU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuSGMuZGVsZXRlKGEpfTt3ay5wcm90b3R5cGUuQmM9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkhmO3JldHVybntjb250ZXh0OmEucXVlcnksamU6amkoYSl9fTtmdW5jdGlvbiB4ayhhLGIpe3ZhciBjPXRrKGEuUmYsYS5iZixiKTthLmJmPWI7MDxjLmxlbmd0aCYmYS5IYy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EoYyl9KX07ZnVuY3Rpb24geWsoYSxiKXt2YXIgYz1hLmIoQmMpLGQ9Ynx8e307Yj1uZXcgRGYoYyk7YS5yYih3YyxiKTtiPW51bGw7dmFyIGU9ITE7bnVsbCE9ZC5zdG9yZVR5cGU/Yj1kLnN0b3JlVHlwZTooYj1lYygpLGI9Yi5mZz8wOmIuVWc/NDoxKTtzd2l0Y2goYil7Y2FzZSAwOmI9bmV3IGhmKGEsYyk7YnJlYWs7Y2FzZSAxOmI9bmV3IHFmKGMpO2JyZWFrO2Nhc2UgNTpiPW5ldyBzZihjKTticmVhaztjYXNlIDQ6Yj1uZXcgQWYoYSxjLGQud2ViU3FsRGJTaXplKTticmVhaztjYXNlIDM6Yj1uZXcgVmUoYyxkLmZpcmViYXNlKTtlPSEwO2JyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IEQoMzAwKTt9YS5yYih2YyxiKTt2YXIgZj1uZXcgRWc7YS5yYih4YyxmKTtyZXR1cm4gYi5FYShkLm9uVXBncmFkZSkudGhlbihmdW5jdGlvbigpe3ZhciBiPW5ldyBWaihhKTthLnJiKHljLGIpO2I9bmV3IGRrO2EucmIoemMsYik7Yj1uZXcgdms7YS5yYihBYyxiKTtyZXR1cm4gZi5FYShjKX0pLnRoZW4oZnVuY3Rpb24oKXtpZihlKXt2YXIgYj1cbm5ldyBLZShhKTtiLk9hLnN1YnNjcmliZShiLmVlLmJpbmQoYikpfWQuZW5hYmxlSW5zcGVjdG9yJiYod2luZG93LnRvcFtcIiNsZkluc3BlY3RcIl09bGspO3JldHVybihuZXcgeGcoYSkpLkVhKGMpfSl9O2Z1bmN0aW9uIHprKGEpe3RoaXMuYz1hO3RoaXMuZz1hLmIoQmMpO3RoaXMuYWE9Qih0aGlzLmcub2EoKSk7dGhpcy5EYj13KCl9ZnVuY3Rpb24gQWsoYSl7dmFyIGI9YS5jLmIoeGMpLGM9YS5jLmIod2MpLGQ9e307YS5nLm9hKCkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgZT1iLmdldChuZihhKSkuVmEoKSxlPUVmKGMsZSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLm19KTtkW2EuZ2V0TmFtZSgpXT1lfSk7cmV0dXJue25hbWU6YS5nLm5hbWUoKSx2ZXJzaW9uOmEuZy52ZXJzaW9uKCksdGFibGVzOmR9fW09emsucHJvdG90eXBlO20uZXhlYz1mdW5jdGlvbigpe3ZhciBhPUFrKHRoaXMpLGE9bmV3IFJkKG5ldyBoYygtMSxhKSwhMCk7cmV0dXJuIHYoW25ldyBHKFthXSxbXSldKX07bS5HPWsoMCk7bS5kYT1nKFwiYWFcIik7bS5XPWZ1bmN0aW9uKCl7cmV0dXJuIGthKHRoaXMpfTttLmdldFByaW9yaXR5PWsoMCk7ZnVuY3Rpb24gQmsoYSxiKXt0aGlzLmM9YTt0aGlzLmc9YS5iKEJjKTt0aGlzLmFhPUIodGhpcy5nLm9hKCkpO3RoaXMuRGI9dygpO3RoaXMuQmE9Yjt0aGlzLk9hPWEuYih2Yyk7dGhpcy5WPWEuYih3Yyk7dGhpcy5DPWEuYih4Yyl9bT1Cay5wcm90b3R5cGU7XG5tLmV4ZWM9ZnVuY3Rpb24oKXtpZighKHRoaXMuT2EgaW5zdGFuY2VvZiBoZnx8dGhpcy5PYSBpbnN0YW5jZW9mIHFmfHx0aGlzLk9hIGluc3RhbmNlb2YgQWYpKXRocm93IG5ldyBEKDMwMCk7dmFyIGE7YTp7YT10aGlzLmcub2EoKTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoOysrYilpZigwPHRoaXMuQy5nZXQobmYoYVtiXSkpLlkoKS5pYSl7YT0hMTticmVhayBhfWE9ITB9aWYoIWEpdGhyb3cgbmV3IEQoMTEwKTtpZih0aGlzLmcubmFtZSgpIT10aGlzLkJhLm5hbWV8fHRoaXMuZy52ZXJzaW9uKCkhPXRoaXMuQmEudmVyc2lvbil0aHJvdyBuZXcgRCgxMTEpO2lmKG51bGw9PXRoaXMuQmEudGFibGVzKXRocm93IG5ldyBEKDExMik7cmV0dXJuIENrKHRoaXMpfTttLkc9aygxKTttLmRhPWcoXCJhYVwiKTttLlc9ZnVuY3Rpb24oKXtyZXR1cm4ga2EodGhpcyl9O20uZ2V0UHJpb3JpdHk9aygwKTtcbmZ1bmN0aW9uIENrKGEpe3ZhciBiPW5ldyB1ZChhLmMsYS5hYSksYj1hLk9hLkZiKGEuRygpLEMoYS5hYSksYiksYztmb3IoYyBpbiBhLkJhLnRhYmxlcyl7dmFyIGQ9YS5nLnRhYmxlKGMpLGU9YS5CYS50YWJsZXNbY10ubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBkLnhiKGEpfSksZj1iLkkoYyxkLmtiLDApO2EuVi5XYihjLGUpO3ZhciBoPWEuQy5sYy5nZXQoYyl8fFtdO2UuZm9yRWFjaChmdW5jdGlvbihhKXtoLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGM9YS5uYihiLmdldE5hbWUoKSk7Yi5hZGQoYyxhLmlkKCkpfSl9KTtmLnB1dChlKX1yZXR1cm4gYi5rYSgpfTtmdW5jdGlvbiBEayhhLGIpe3RoaXMuYz1hO3RoaXMuT2E9YS5iKHZjKTt0aGlzLklhPWEuYih6Yyk7dGhpcy5JYj1hLmIoQWMpO3RoaXMuYWE9QihiKTt0aGlzLlJhPW5ldyB1ZCh0aGlzLmMsdGhpcy5hYSk7dGhpcy5EYj13KCk7dGhpcy54Yz13KCk7dGhpcy56ZT13KCl9bT1Eay5wcm90b3R5cGU7bS5leGVjPWZ1bmN0aW9uKCl7dGhpcy56ZS5yZXNvbHZlKCk7cmV0dXJuIHRoaXMueGMuaGF9O20uRz1rKDEpO20uZGE9ZyhcImFhXCIpO20uVz1mdW5jdGlvbigpe3JldHVybiBrYSh0aGlzKX07bS5nZXRQcmlvcml0eT1rKDIpO2Z1bmN0aW9uIEVrKGEpe0plKGEuSWEsYSk7cmV0dXJuIGEuemUuaGF9XG5mdW5jdGlvbiBGayhhLGIpe2I9Yi5CYygpO3JldHVybiBiLmplLmJiKCkuZXhlYyhhLlJhLGIuY29udGV4dCkudGhlbihmdW5jdGlvbihhKXtyZXR1cm4gSmQoYVswXSl9LGZ1bmN0aW9uKGEpe3RoaXMuUmEuSmIoKTt2YXIgYj1uZXcgamIoYS5uYW1lKTt0aGlzLnhjLnJlamVjdChiKTt0aHJvdyBhO30uYmluZChhKSl9bS5rYT1mdW5jdGlvbigpe3RoaXMuamE9dGhpcy5PYS5GYih0aGlzLkcoKSxDKHRoaXMuYWEpLHRoaXMuUmEpO3RoaXMuamEua2EoKS50aGVuKGZ1bmN0aW9uKCl7dGhpcy5NYygpO3RoaXMueGMucmVzb2x2ZSgpfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGEpe3RoaXMuUmEuSmIoKTt0aGlzLnhjLnJlamVjdChhKX0uYmluZCh0aGlzKSk7cmV0dXJuIHRoaXMuRGIuaGF9O20uSmI9ZnVuY3Rpb24oKXt0aGlzLlJhLkpiKCk7dGhpcy54Yy5yZXNvbHZlKCk7cmV0dXJuIHRoaXMuRGIuaGF9O1xubS5NYz1mdW5jdGlvbigpe3ZhciBhPUllKHRoaXMuSWIsdGhpcy5hYSk7MCE9YS5sZW5ndGgmJihhPW5ldyBGZSh0aGlzLmMsYSksSmUodGhpcy5JYSxhKSl9O20uWT1mdW5jdGlvbigpe3ZhciBhPW51bGw7bnVsbCE9dGhpcy5qYSYmKGE9dGhpcy5qYS5ZKCkpO3JldHVybiBudWxsPT09YT9uZXcgQSghMSwwLDAsMCwwKTphfTtmdW5jdGlvbiBWKGEpe3RoaXMuYz1hO3RoaXMuSWE9YS5iKHpjKTt0aGlzLktiPW51bGw7dGhpcy5UYT0wOzA9PUdrLnNpemUmJihHay5zZXQoMCxCKFsxLDRdKSksR2suc2V0KDEsQihbMl0pKSxHay5zZXQoMixCKFszLDUsNl0pKSxHay5zZXQoMyxCKFsyLDddKSksR2suc2V0KDQsQihbN10pKSxHay5zZXQoNSxCKFs3XSkpLEdrLnNldCg2LEIoWzddKSkpfXEoXCJsZi5wcm9jLlRyYW5zYWN0aW9uXCIsVik7dmFyIEdrPXkoKTtmdW5jdGlvbiBIayhhLGIpe3ZhciBjPUdrLmdldChhLlRhKXx8bnVsbDtpZihudWxsPT09Y3x8IWMuaGFzKGIpKXRocm93IG5ldyBEKDEwNyxhLlRhLGIpO2EuVGE9Yn1cblYucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oYSl7SGsodGhpcyw0KTt2YXIgYj1bXTt0cnl7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuYWIoKTtiLnB1c2goYS5CYygpKX0sdGhpcyl9Y2F0Y2goYyl7cmV0dXJuIEhrKHRoaXMsNyksYmIoYyl9dGhpcy5LYj1uZXcgTWgodGhpcy5jLGIpO3JldHVybiBKZSh0aGlzLklhLHRoaXMuS2IpLnRoZW4oZnVuY3Rpb24oYSl7SGsodGhpcyw3KTtyZXR1cm4gYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIEpkKGEpfSl9LmJpbmQodGhpcyksZnVuY3Rpb24oYSl7SGsodGhpcyw3KTt0aHJvdyBhO30uYmluZCh0aGlzKSl9O1YucHJvdG90eXBlLmV4ZWM9Vi5wcm90b3R5cGUuZXhlYztWLnByb3RvdHlwZS5GZj1mdW5jdGlvbihhKXtIayh0aGlzLDEpO3RoaXMuS2I9bmV3IERrKHRoaXMuYyxhKTtyZXR1cm4gRWsodGhpcy5LYikudGhlbihmdW5jdGlvbigpe0hrKHRoaXMsMil9LmJpbmQodGhpcykpfTtWLnByb3RvdHlwZS5iZWdpbj1WLnByb3RvdHlwZS5GZjtcblYucHJvdG90eXBlLkVmPWZ1bmN0aW9uKGEpe0hrKHRoaXMsMyk7dHJ5e2EuYWIoKX1jYXRjaChiKXtyZXR1cm4gSGsodGhpcyw3KSxiYihiKX1yZXR1cm4gRmsodGhpcy5LYixhKS50aGVuKGZ1bmN0aW9uKGEpe0hrKHRoaXMsMik7cmV0dXJuIGF9LmJpbmQodGhpcyksZnVuY3Rpb24oYSl7SGsodGhpcyw3KTt0aHJvdyBhO30uYmluZCh0aGlzKSl9O1YucHJvdG90eXBlLmF0dGFjaD1WLnByb3RvdHlwZS5FZjtWLnByb3RvdHlwZS5rYT1mdW5jdGlvbigpe0hrKHRoaXMsNSk7cmV0dXJuIHRoaXMuS2Iua2EoKS50aGVuKGZ1bmN0aW9uKCl7SGsodGhpcyw3KX0uYmluZCh0aGlzKSl9O1YucHJvdG90eXBlLmNvbW1pdD1WLnByb3RvdHlwZS5rYTtWLnByb3RvdHlwZS5KYj1mdW5jdGlvbigpe0hrKHRoaXMsNik7cmV0dXJuIHRoaXMuS2IuSmIoKS50aGVuKGZ1bmN0aW9uKCl7SGsodGhpcyw3KX0uYmluZCh0aGlzKSl9O1YucHJvdG90eXBlLnJvbGxiYWNrPVYucHJvdG90eXBlLkpiO1xuVi5wcm90b3R5cGUuWT1mdW5jdGlvbigpe2lmKDchPXRoaXMuVGEpdGhyb3cgbmV3IEQoMTA1KTtyZXR1cm4gdGhpcy5LYi5ZKCl9O1YucHJvdG90eXBlLnN0YXRzPVYucHJvdG90eXBlLlk7ZnVuY3Rpb24gVyhhKXt0aGlzLmM9YTt0aGlzLmc9YS5iKEJjKTt0aGlzLmhkPSExfXEoXCJsZi5wcm9jLkRhdGFiYXNlXCIsVyk7Vy5wcm90b3R5cGUuRWE9ZnVuY3Rpb24oYSl7dGhpcy5jLnJiKEJjLHRoaXMuZyk7cmV0dXJuIHlrKHRoaXMuYyxhKS50aGVuKGZ1bmN0aW9uKCl7dGhpcy5oZD0hMDt0aGlzLklhPXRoaXMuYy5iKHpjKTtyZXR1cm4gdGhpc30uYmluZCh0aGlzKSl9O1cucHJvdG90eXBlLmluaXQ9Vy5wcm90b3R5cGUuRWE7Vy5wcm90b3R5cGUuemI9ZyhcImdcIik7Vy5wcm90b3R5cGUuZ2V0U2NoZW1hPVcucHJvdG90eXBlLnpiO2Z1bmN0aW9uIElrKGEpe2lmKCFhLmhkKXRocm93IG5ldyBEKDIpO31XLnByb3RvdHlwZS5zZWxlY3Q9ZnVuY3Rpb24oYSl7SWsodGhpcyk7cmV0dXJuIG5ldyBVKHRoaXMuYywxIT1hcmd1bWVudHMubGVuZ3RofHxudWxsIT1hcmd1bWVudHNbMF0/QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTpbXSl9O1xuVy5wcm90b3R5cGUuc2VsZWN0PVcucHJvdG90eXBlLnNlbGVjdDtXLnByb3RvdHlwZS5BYj1mdW5jdGlvbigpe0lrKHRoaXMpO3JldHVybiBuZXcgbGkodGhpcy5jKX07Vy5wcm90b3R5cGUuaW5zZXJ0PVcucHJvdG90eXBlLkFiO1cucHJvdG90eXBlLldkPWZ1bmN0aW9uKCl7SWsodGhpcyk7cmV0dXJuIG5ldyBsaSh0aGlzLmMsITApfTtXLnByb3RvdHlwZS5pbnNlcnRPclJlcGxhY2U9Vy5wcm90b3R5cGUuV2Q7Vy5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKGEpe0lrKHRoaXMpO3JldHVybiBuZXcgdmkodGhpcy5jLGEpfTtXLnByb3RvdHlwZS51cGRhdGU9Vy5wcm90b3R5cGUudXBkYXRlO1cucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbigpe0lrKHRoaXMpO3JldHVybiBuZXcga2kodGhpcy5jKX07Vy5wcm90b3R5cGVbXCJkZWxldGVcIl09Vy5wcm90b3R5cGUuZGVsZXRlO1xuVy5wcm90b3R5cGUub2JzZXJ2ZT1mdW5jdGlvbihhLGIpe0lrKHRoaXMpO3RoaXMuYy5iKEFjKS5DZChhLGIpfTtXLnByb3RvdHlwZS5vYnNlcnZlPVcucHJvdG90eXBlLm9ic2VydmU7Vy5wcm90b3R5cGUudW5vYnNlcnZlPWZ1bmN0aW9uKGEsYil7SWsodGhpcyk7dGhpcy5jLmIoQWMpLm5lKGEsYil9O1cucHJvdG90eXBlLnVub2JzZXJ2ZT1XLnByb3RvdHlwZS51bm9ic2VydmU7Vy5wcm90b3R5cGUuTmY9ZnVuY3Rpb24oKXtJayh0aGlzKTtyZXR1cm4gbmV3IFYodGhpcy5jKX07Vy5wcm90b3R5cGUuY3JlYXRlVHJhbnNhY3Rpb249Vy5wcm90b3R5cGUuTmY7Vy5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0cnl7dGhpcy5jLmIodmMpLmNsb3NlKCl9Y2F0Y2goYSl7fXRoaXMuYy5jbGVhcigpO3RoaXMuaGQ9ITF9O1cucHJvdG90eXBlLmNsb3NlPVcucHJvdG90eXBlLmNsb3NlO1xuVy5wcm90b3R5cGUuWGY9ZnVuY3Rpb24oKXtJayh0aGlzKTt2YXIgYT1uZXcgemsodGhpcy5jKTtyZXR1cm4gSmUodGhpcy5JYSxhKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBKZChhWzBdKVswXX0pfTtXLnByb3RvdHlwZVtcImV4cG9ydFwiXT1XLnByb3RvdHlwZS5YZjtXLnByb3RvdHlwZS5pbXBvcnQ9ZnVuY3Rpb24oYSl7SWsodGhpcyk7YT1uZXcgQmsodGhpcy5jLGEpO3JldHVybiBKZSh0aGlzLklhLGEpLnRoZW4oayhudWxsKSl9O1cucHJvdG90eXBlW1wiaW1wb3J0XCJdPVcucHJvdG90eXBlLmltcG9ydDtmdW5jdGlvbiBYKGEsYixjLGQsZSxmKXt0aGlzLlU9YTt0aGlzLkE9Yjt0aGlzLlllPWM7dGhpcy5XZT1kO3RoaXMueGY9ZTt0aGlzLkthPWZ8fG51bGx9cShcImxmLnNjaGVtYS5CYXNlQ29sdW1uXCIsWCk7bT1YLnByb3RvdHlwZTttLmdldE5hbWU9ZyhcIkFcIik7bS5qPWZ1bmN0aW9uKCl7cmV0dXJuIFRkKHRoaXMuVSkrXCIuXCIrdGhpcy5BfTttLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaigpfTttLkk9ZyhcIlVcIik7bS5HPWcoXCJ4ZlwiKTtYLnByb3RvdHlwZS5nZXRUeXBlPVgucHJvdG90eXBlLkc7WC5wcm90b3R5cGUuRGE9ZnVuY3Rpb24oKXtudWxsPT10aGlzLnRhJiYodGhpcy50YT1bXSx0aGlzLkkoKS5EYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7LTEhPWEuZi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYmEuZ2V0TmFtZSgpfSkuaW5kZXhPZih0aGlzLkEpJiZ0aGlzLnRhLnB1c2goYSl9LHRoaXMpKTtyZXR1cm4gdGhpcy50YX07XG5YLnByb3RvdHlwZS5DYT1mdW5jdGlvbigpe2lmKCFuKHRoaXMuZmEpKXt2YXIgYT10aGlzLkRhKCkuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiAxIT1hLmYubGVuZ3RoPyExOmEuZlswXS5iYS5nZXROYW1lKCk9PXRoaXMuZ2V0TmFtZSgpfSx0aGlzKTt0aGlzLmZhPTA8YS5sZW5ndGg/YVswXTpudWxsfXJldHVybiB0aGlzLmZhfTtYLnByb3RvdHlwZS5oYz1nKFwiV2VcIik7WC5wcm90b3R5cGUuaXNOdWxsYWJsZT1YLnByb3RvdHlwZS5oYztYLnByb3RvdHlwZS5EYz1nKFwiWWVcIik7WC5wcm90b3R5cGUuUWE9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcImVxXCIpfTtYLnByb3RvdHlwZS5lcT1YLnByb3RvdHlwZS5RYTtYLnByb3RvdHlwZS5lZj1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwibmVxXCIpfTtYLnByb3RvdHlwZS5uZXE9WC5wcm90b3R5cGUuZWY7WC5wcm90b3R5cGUucmc9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcImx0XCIpfTtcblgucHJvdG90eXBlLmx0PVgucHJvdG90eXBlLnJnO1gucHJvdG90eXBlLnNnPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJsdGVcIil9O1gucHJvdG90eXBlLmx0ZT1YLnByb3RvdHlwZS5zZztYLnByb3RvdHlwZS5hZz1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwiZ3RcIil9O1gucHJvdG90eXBlLmd0PVgucHJvdG90eXBlLmFnO1gucHJvdG90eXBlLmJnPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJndGVcIil9O1gucHJvdG90eXBlLmd0ZT1YLnByb3RvdHlwZS5iZztYLnByb3RvdHlwZS5tYXRjaD1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwibWF0Y2hcIil9O1gucHJvdG90eXBlLm1hdGNoPVgucHJvdG90eXBlLm1hdGNoO1gucHJvdG90eXBlLkdmPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFhnKHRoaXMsW2EsYl0sXCJiZXR3ZWVuXCIpfTtYLnByb3RvdHlwZS5iZXR3ZWVuPVgucHJvdG90eXBlLkdmO1xuWC5wcm90b3R5cGUuY2c9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcImluXCIpfTtYLnByb3RvdHlwZVtcImluXCJdPVgucHJvdG90eXBlLmNnO1gucHJvdG90eXBlLm1nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuUWEobnVsbCl9O1gucHJvdG90eXBlLmlzTnVsbD1YLnByb3RvdHlwZS5tZztYLnByb3RvdHlwZS5sZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVmKG51bGwpfTtYLnByb3RvdHlwZS5pc05vdE51bGw9WC5wcm90b3R5cGUubGc7WC5wcm90b3R5cGUucmM9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBYKHRoaXMuVSx0aGlzLkEsdGhpcy5ZZSx0aGlzLldlLHRoaXMueGYsYSl9O1gucHJvdG90eXBlLmFzPVgucHJvdG90eXBlLnJjO2Z1bmN0aW9uIEprKGEpe3RoaXMuZz1hO3RoaXMuSWQ9bmV3IGNkO3RoaXMub2U9bmV3IGNkO3RoaXMuZ2Y9bmV3IGNkO3RoaXMuSWU9eSgpO3RoaXMuaD1uZXcgY2Q7dGhpcy5FZT1uZXcgY2Q7dGhpcy5tZj1uZXcgY2Q7dGhpcy5IZT1uZXcgY2Q7S2sodGhpcyl9ZnVuY3Rpb24gS2soYSl7YS5nLm9hKCkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLmdldE5hbWUoKTthLk1iLlVkLmZvckVhY2goZnVuY3Rpb24oYyl7dGhpcy5nZi5zZXQoYix0aGlzLmcudGFibGUoYy5YYSkpO3RoaXMuaC5zZXQoYy5YYSxhKTswPT1jLmFjdGlvbj8odGhpcy5vZS5zZXQoYy5YYSxjKSx0aGlzLm1mLnNldChjLlhhLGEpKToodGhpcy5JZC5zZXQoYy5YYSxjKSx0aGlzLkVlLnNldChjLlhhLGEpKTt0aGlzLkllLnNldChhLmdldE5hbWUoKStcIi5cIitjLnZiLGMuWGEpO3RoaXMuSGUuc2V0KGMuWGErXCIuXCIrYy5KYyxhLmdldE5hbWUoKSl9LHRoaXMpfSxhKX1cbmZ1bmN0aW9uIGtkKGEsYixjKXtpZihudWxsIT1jKXJldHVybiAxPT1jP2EuSWQuZ2V0KGIpOmEub2UuZ2V0KGIpO2M9YS5JZC5nZXQoYik7YT1hLm9lLmdldChiKTtyZXR1cm4gbnVsbD09PWMmJm51bGw9PT1hP251bGw6KGN8fFtdKS5jb25jYXQoYXx8W10pfWZ1bmN0aW9uIFNoKGEsYil7YT1iLmdldChhKTtyZXR1cm4gbnVsbD09PWE/W106YX1mdW5jdGlvbiBVaChhLGIpe3ZhciBjPUIoKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7KGE9dGhpcy5JZS5nZXQoYSkpJiZjLmFkZChhKX0sYSk7cmV0dXJuIEMoYykubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmcudGFibGUoYSl9LGEpfWZ1bmN0aW9uIFFoKGEsYixjKXtyZXR1cm4gbnVsbCE9Yz8wPT1jP1NoKGIsYS5tZik6U2goYixhLkVlKTpTaChiLGEuaCl9XG5mdW5jdGlvbiBWaChhLGIpe3ZhciBjPUIoKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7KGE9dGhpcy5IZS5nZXQoYSkpJiZhLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5hZGQoYSl9KX0sYSk7cmV0dXJuIEMoYykubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmcudGFibGUoYSl9LGEpfTtmdW5jdGlvbiBMayhhLGIsYyl7dGhpcy5zZD1hO3RoaXMueGc9Yjt0aGlzLlVkPWN9cShcImxmLnNjaGVtYS5Db25zdHJhaW50XCIsTGspO0xrLnByb3RvdHlwZS4kZj1nKFwic2RcIik7TGsucHJvdG90eXBlLmdldFByaW1hcnlLZXk9TGsucHJvdG90eXBlLiRmO0xrLnByb3RvdHlwZS5aZj1nKFwiVWRcIik7TGsucHJvdG90eXBlLmdldEZvcmVpZ25LZXlzPUxrLnByb3RvdHlwZS5aZjtmdW5jdGlvbiBNayhhLGIsYyl7dmFyIGQ9YS5yZWYuc3BsaXQoXCIuXCIpO2lmKDIhPWQubGVuZ3RoKXRocm93IG5ldyBEKDU0MCxjKTt0aGlzLkdlPWI7dGhpcy52Yj1hLmxvY2FsO3RoaXMuWGE9ZFswXTt0aGlzLkpjPWRbMV07dGhpcy5uYW1lPWIrXCIuXCIrYzt0aGlzLmFjdGlvbj1hLmFjdGlvbjt0aGlzLnRpbWluZz1hLnRpbWluZ307ZnVuY3Rpb24gWShhKXtOayhhKTt0aGlzLlFkPWVlKCk7dGhpcy5BPWE7dGhpcy5LPXkoKTt0aGlzLnpkPUIoKTt0aGlzLm5jPUIoKTt0aGlzLm5kPUIoKTt0aGlzLkZhPW51bGw7dGhpcy50YT15KCk7dGhpcy5yZD0hMTt0aGlzLnliPVtdfXEoXCJsZi5zY2hlbWEuVGFibGVCdWlsZGVyXCIsWSk7ZnVuY3Rpb24gT2soYSl7dGhpcy5uYW1lPWEubmFtZTt0aGlzLm9yZGVyPWEub3JkZXI7dGhpcy5hdXRvSW5jcmVtZW50PWEuYXV0b0luY3JlbWVudH12YXIgUGs9QihbMCw2XSk7ZnVuY3Rpb24gTmsoYSl7aWYoIS9eW0EtWmEtel9dW0EtWmEtejAtOV9dKiQvLnRlc3QoYSkpdGhyb3cgbmV3IEQoNTAyLGEpO31mdW5jdGlvbiBRayhhLGIpe2lmKGI9PWEuQSl0aHJvdyBuZXcgRCg1NDYsYik7aWYoYS5LLmhhcyhiKXx8YS50YS5oYXMoYil8fGEubmMuaGFzKGIpKXRocm93IG5ldyBEKDUwMyxhLkErXCIuXCIrYik7fVxuZnVuY3Rpb24gUmsoYSxiKXt2YXIgYz0hMTtiLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5LLmdldChhLm5hbWUpO2M9Y3x8YS5hdXRvSW5jcmVtZW50O2lmKGEuYXV0b0luY3JlbWVudCYmMyE9Yil0aHJvdyBuZXcgRCg1MDQpO30sYSk7aWYoYyYmMTxiLmxlbmd0aCl0aHJvdyBuZXcgRCg1MDUpO31mdW5jdGlvbiBTayhhKXtpZihudWxsIT09YS5GYSl7dmFyIGI9YS50YS5nZXQoYS5GYSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLm5hbWV9KSxjPTA7aWYoYS55Yi5zb21lKGZ1bmN0aW9uKGEsZSl7Yz1lO3JldHVybi0xIT1iLmluZGV4T2YoYS52Yil9LGEpKXRocm93IG5ldyBEKDU0MyxhLnliW2NdLm5hbWUpO319XG5mdW5jdGlvbiBUayhhKXtpZihudWxsIT09YS5GYSl7dmFyIGI9ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZX0sYz1KU09OLnN0cmluZ2lmeShhLnRhLmdldChhLkZhKS5tYXAoYikpO2EudGEuZm9yRWFjaChmdW5jdGlvbihhLGUpe2lmKGUhPXRoaXMuRmEmJihhPWEubWFwKGIpLEpTT04uc3RyaW5naWZ5KGEpPT1jKSl0aHJvdyBuZXcgRCg1NDQsdGhpcy5BK1wiLlwiK2UpO30sYSl9fWZ1bmN0aW9uIFVrKGEpe251bGw9PT1hLkZhfHxhLnRhLmdldChhLkZhKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2lmKHRoaXMubmQuaGFzKGEubmFtZSkpdGhyb3cgbmV3IEQoNTQ1LHRoaXMuQStcIi5cIithLm5hbWUpO30sYSl9WS5wcm90b3R5cGUuemY9ZnVuY3Rpb24oYSxiKXtOayhhKTtRayh0aGlzLGEpO3RoaXMuSy5zZXQoYSxiKTtQay5oYXMoYikmJnRoaXMuQmUoW2FdKTtyZXR1cm4gdGhpc307WS5wcm90b3R5cGUuYWRkQ29sdW1uPVkucHJvdG90eXBlLnpmO1xuWS5wcm90b3R5cGUuQmY9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLkE7dGhpcy5GYT1cInBrXCIrKGNbMF0udG9VcHBlckNhc2UoKStjLnN1YnN0cmluZygxKSk7TmsodGhpcy5GYSk7UWsodGhpcyx0aGlzLkZhKTthPVZrKHRoaXMsYSwhMCx2b2lkIDAsYik7UmsodGhpcyxhKTsxPT1hLmxlbmd0aCYmdGhpcy56ZC5hZGQoYVswXS5uYW1lKTt0aGlzLm5jLmFkZCh0aGlzLkZhKTt0aGlzLnRhLnNldCh0aGlzLkZhLGEpO3JldHVybiB0aGlzfTtZLnByb3RvdHlwZS5hZGRQcmltYXJ5S2V5PVkucHJvdG90eXBlLkJmO1xuWS5wcm90b3R5cGUuQWY9ZnVuY3Rpb24oYSxiKXtOayhhKTtRayh0aGlzLGEpO2I9bmV3IE1rKGIsdGhpcy5BLGEpO24oYi5hY3Rpb24pfHwoYi5hY3Rpb249MCk7bihiLnRpbWluZyl8fChiLnRpbWluZz0wKTtpZigxPT1iLmFjdGlvbiYmMT09Yi50aW1pbmcpdGhyb3cgbmV3IEQoNTA2KTtpZighdGhpcy5LLmhhcyhiLnZiKSl0aHJvdyBuZXcgRCg1NDAsYSk7dGhpcy55Yi5wdXNoKGIpO3RoaXMuQWUoYSxbYi52Yl0sdGhpcy56ZC5oYXMoYi52YikpO3JldHVybiB0aGlzfTtZLnByb3RvdHlwZS5hZGRGb3JlaWduS2V5PVkucHJvdG90eXBlLkFmO1kucHJvdG90eXBlLkNmPWZ1bmN0aW9uKGEsYil7TmsoYSk7UWsodGhpcyxhKTtiPVZrKHRoaXMsYiwhMCk7MT09Yi5sZW5ndGgmJih0aGlzLnpkLmFkZChiWzBdLm5hbWUpLFdrKHRoaXMsYlswXS5uYW1lKSk7dGhpcy50YS5zZXQoYSxiKTt0aGlzLm5jLmFkZChhKTtyZXR1cm4gdGhpc307WS5wcm90b3R5cGUuYWRkVW5pcXVlPVkucHJvdG90eXBlLkNmO1xuZnVuY3Rpb24gV2soYSxiKXthLnliLmZvckVhY2goZnVuY3Rpb24oYSl7YS52Yj09YiYmdGhpcy5uYy5hZGQoYS5uYW1lLnNwbGl0KFwiLlwiKVsxXSl9LGEpfVkucHJvdG90eXBlLkJlPWZ1bmN0aW9uKGEpe1ZrKHRoaXMsYSwhMSkuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLm5kLmFkZChhLm5hbWUpfSx0aGlzKTtyZXR1cm4gdGhpc307WS5wcm90b3R5cGUuYWRkTnVsbGFibGU9WS5wcm90b3R5cGUuQmU7WS5wcm90b3R5cGUuQWU9ZnVuY3Rpb24oYSxiLGMsZCl7TmsoYSk7UWsodGhpcyxhKTtiPVZrKHRoaXMsYiwhMCxkKTtjJiZ0aGlzLm5jLmFkZChhKTt0aGlzLnRhLnNldChhLGIpO3JldHVybiB0aGlzfTtZLnByb3RvdHlwZS5hZGRJbmRleD1ZLnByb3RvdHlwZS5BZTtZLnByb3RvdHlwZS5DYj1iYShcInJkXCIpO1kucHJvdG90eXBlLnBlcnNpc3RlbnRJbmRleD1ZLnByb3RvdHlwZS5DYjtcblkucHJvdG90eXBlLnpiPWZ1bmN0aW9uKCl7U2sodGhpcyk7VGsodGhpcyk7VWsodGhpcyk7cmV0dXJuIG5ldyAoWGsodGhpcykpfTtZLnByb3RvdHlwZS5nZXRTY2hlbWE9WS5wcm90b3R5cGUuemI7ZnVuY3Rpb24gVmsoYSxiLGMsZCxlKXt2YXIgZj1iLGY9XCJzdHJpbmdcIj09dHlwZW9mIGJbMF0/Yi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBPayh7bmFtZTphLG9yZGVyOm51bGwhPWQ/ZDoxLGF1dG9JbmNyZW1lbnQ6ZXx8ITF9KX0pOmIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgT2soYSl9KTtmLmZvckVhY2goZnVuY3Rpb24oYSl7aWYoIXRoaXMuSy5oYXMoYS5uYW1lKSl0aHJvdyBuZXcgRCg1MDgsdGhpcy5BLGEubmFtZSk7aWYoYyl7dmFyIGI9dGhpcy5LLmdldChhLm5hbWUpO2lmKDA9PWJ8fDY9PWIpdGhyb3cgbmV3IEQoNTA5LHRoaXMuQSxhLm5hbWUpO319LGEpO3JldHVybiBmfVxuZnVuY3Rpb24gWGsoYSl7ZnVuY3Rpb24gYigpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIGEudGEuZ2V0KGIpLm1hcChmdW5jdGlvbihhKXtyZXR1cm57YmE6dGhpc1thLm5hbWVdLG9yZGVyOmEub3JkZXIsYXV0b0luY3JlbWVudDphLmF1dG9JbmNyZW1lbnR9fSx0aGlzKX12YXIgZD1nYyhhLkspLm1hcChmdW5jdGlvbihiKXt0aGlzW2JdPW5ldyBYKHRoaXMsYixhLnpkLmhhcyhiKSxhLm5kLmhhcyhiKSxhLksuZ2V0KGIpKTtyZXR1cm4gdGhpc1tiXX0sdGhpcyksZT1nYyhhLnRhKS5tYXAoZnVuY3Rpb24oYyl7cmV0dXJuIG5ldyBaZyhhLkEsYyxhLm5jLmhhcyhjKSxiLmNhbGwodGhpcyxjKSl9LHRoaXMpO1EuY2FsbCh0aGlzLGEuQSxkLGUsYS5yZCk7dmFyIGY9bnVsbD09PWEuRmE/bnVsbDpuZXcgWmcoYS5BLGEuRmEsITAsYi5jYWxsKHRoaXMsYS5GYSkpLGg9ZC5maWx0ZXIoZnVuY3Rpb24oYil7cmV0dXJuIWEubmQuaGFzKGIuZ2V0TmFtZSgpKX0pO3RoaXMuTWI9bmV3IExrKGYsXG5oLGEueWIpO3RoaXMucWY9WWsoYSxkLGUpfXIoYixRKTtiLnByb3RvdHlwZS54Yj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHRoaXMucWYoaWMrKyxhKX07Yi5wcm90b3R5cGUuY3JlYXRlUm93PWIucHJvdG90eXBlLnhiO2IucHJvdG90eXBlLmtiPWZ1bmN0aW9uKGEpe3ZhciBiPXt9O3RoaXMubGIoKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe3ZhciBkPWMuZ2V0TmFtZSgpO2M9Yy5HKCk7dmFyIGU9YS52YWx1ZVtkXTtpZigwPT1jKWlmKGM9ZSxudWxsIT1jJiZcIlwiIT1jKXswIT1jLmxlbmd0aCUyJiYoYz1cIjBcIitjKTtmb3IodmFyIGU9bmV3IEFycmF5QnVmZmVyKGMubGVuZ3RoLzIpLGw9bmV3IFVpbnQ4QXJyYXkoZSkscD0wLEw9MDtwPGMubGVuZ3RoO3ArPTIpbFtMKytdPXBhcnNlSW50KGMuc3Vic3RyKHAsMiksMTYpO2M9ZX1lbHNlIGM9bnVsbDtlbHNlIGM9Mj09Yz9udWxsIT1lP25ldyBEYXRlKGUpOm51bGw6ZTtiW2RdPWN9LHRoaXMpO3JldHVybiBuZXcgdGhpcy5xZihhLmlkLGIpfTtcbmIucHJvdG90eXBlLmRlc2VyaWFsaXplUm93PWIucHJvdG90eXBlLmtiO2IucHJvdG90eXBlLk5lPWcoXCJNYlwiKTtiLnByb3RvdHlwZS5nZXRDb25zdHJhaW50PWIucHJvdG90eXBlLk5lO3JldHVybiBifVxuZnVuY3Rpb24gWWsoYSxiLGMpe2Z1bmN0aW9uIGQoYSxkKXt0aGlzLks9Yjt0aGlzLnRhPWM7aGMuY2FsbCh0aGlzLGEsZCl9cihkLGhjKTtkLnByb3RvdHlwZS5LZT1mdW5jdGlvbigpe3ZhciBhPXt9O3RoaXMuSy5mb3JFYWNoKGZ1bmN0aW9uKGIpe2FbYi5nZXROYW1lKCldPWIuaGMoKT9udWxsOmJkW2IuRygpXX0pO3JldHVybiBhfTtkLnByb3RvdHlwZS53Zj1mdW5jdGlvbigpe3ZhciBhPXt9O3RoaXMuSy5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBjPWIuZ2V0TmFtZSgpO2I9Yi5HKCk7dmFyIGQ9dGhpcy5tW2NdO2FbY109MD09Yj9udWxsIT1kP2xjKGQpOm51bGw6Mj09Yj9udWxsIT1kP2QuZ2V0VGltZSgpOm51bGw6Nj09Yj9udWxsIT1kP2Q6bnVsbDpkfSx0aGlzKTtyZXR1cm4gYX07dmFyIGU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5LLmdldChhLmdldE5hbWUoKSksYz10aGlzLlFkLlplLmdldChiKXx8bnVsbDtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGMoYlthLmdldE5hbWUoKV0pfX0uYmluZChhKSxcbmY9ZnVuY3Rpb24oYSl7dmFyIGI9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGUoYS5iYSl9KTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGIubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiKGEpfSl9fS5iaW5kKGEpLGg9e307Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEuaigpO2E9MT09YS5mLmxlbmd0aD9lKGEuZlswXS5iYSk6ZihhLmYpO2hbYl09YX0pO2QucHJvdG90eXBlLm5iPWZ1bmN0aW9uKGEpe3JldHVybi0xIT1hLmluZGV4T2YoXCIjXCIpP3RoaXMuaWQoKTpoLmhhc093blByb3BlcnR5KGEpP2hbYV0odGhpcy5tKTpudWxsfTtyZXR1cm4gZH07ZnVuY3Rpb24gWmsoYSxiKXt0aGlzLmc9bmV3IFooYSxiKTt0aGlzLnRiPXkoKTt0aGlzLnljPSExO3RoaXMuaT1udWxsO3RoaXMuWWM9ITF9cShcImxmLnNjaGVtYS5CdWlsZGVyXCIsWmspO2Z1bmN0aW9uICRrKGEsYil7Yi55Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjPWEuWGE7aWYoIXRoaXMudGIuaGFzKGMpKXRocm93IG5ldyBEKDUzNixhLm5hbWUpO3ZhciBjPXRoaXMudGIuZ2V0KGMpLnpiKCksZT1hLkpjO2lmKCFjLmhhc093blByb3BlcnR5KGUpKXRocm93IG5ldyBEKDUzNyxhLm5hbWUpO2lmKGIuemIoKVthLnZiXS5HKCkhPWNbZV0uRygpKXRocm93IG5ldyBEKDUzOCxhLm5hbWUpO2lmKCFjW2VdLkRjKCkpdGhyb3cgbmV3IEQoNTM5LGEubmFtZSk7fSxhKX1cblprLnByb3RvdHlwZS5LZj1mdW5jdGlvbihhKXthLnliLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy50Yi5nZXQoYS5YYSkueWIuZm9yRWFjaChmdW5jdGlvbihiKXtpZihiLnZiPT1hLkpjKXRocm93IG5ldyBEKDUzNCxhLm5hbWUpO30sdGhpcyl9LHRoaXMpfTtmdW5jdGlvbiBhbChhKXthLnljfHwoYS50Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpeyRrKHRoaXMsYSk7YT1hLnpiKCk7dGhpcy5nLk0uc2V0KGEuZ2V0TmFtZSgpLGEpfSxhKSx6KGEudGIpLmZvckVhY2goYS5LZixhKSxibChhKSxhLnRiLmNsZWFyKCksYS55Yz0hMCl9ZnVuY3Rpb24gY2woYSxiLGMpe2IueWV8fChiLnllPSEwLGIuZmU9ITAsYi5MZS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9Yy5nZXQoYSk7aWYoIWEueWUpY2wodGhpcyxhLGMpO2Vsc2UgaWYoYS5mZSYmYiE9YSl0aHJvdyBuZXcgRCg1MzMpO30sYSkpO2IuZmU9ITF9XG5mdW5jdGlvbiBibChhKXt2YXIgYj15KCk7YS5nLk0uZm9yRWFjaChmdW5jdGlvbihhLGQpe2Iuc2V0KGQsbmV3IGRsKGQpKX0sYSk7YS50Yi5mb3JFYWNoKGZ1bmN0aW9uKGEsZCl7YS55Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IuZ2V0KGEuWGEpLkxlLmFkZChkKX0pfSk7eihiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2NsKHRoaXMsYSxiKX0sYSl9ZnVuY3Rpb24gZGwoYSl7dGhpcy5mZT10aGlzLnllPSExO3RoaXMuTGU9QigpO3RoaXMubWM9YX1aay5wcm90b3R5cGUuemI9ZnVuY3Rpb24oKXt0aGlzLnljfHxhbCh0aGlzKTtyZXR1cm4gdGhpcy5nfTtaay5wcm90b3R5cGUuZ2V0U2NoZW1hPVprLnByb3RvdHlwZS56Yjtaay5wcm90b3R5cGUuUWU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgdWMoXCJuc19cIit0aGlzLmcubmFtZSgpKSxiPWprKCksYztiLm1kKGEpP2M9Yi5iKGEpOihjPW5ldyBoayxiLnJiKGEsYykpO3JldHVybiBjfTtaay5wcm90b3R5cGUuZ2V0R2xvYmFsPVprLnByb3RvdHlwZS5RZTtcblprLnByb3RvdHlwZS5jb25uZWN0PWZ1bmN0aW9uKGEpe2lmKHRoaXMuWWN8fG51bGwhPT10aGlzLmkmJnRoaXMuaS5oZCl0aHJvdyBuZXcgRCgxMTMpO3RoaXMuWWM9ITA7aWYobnVsbD09PXRoaXMuaSl7dmFyIGI9dGhpcy5RZSgpO2IubWQoQmMpfHxiLnJiKEJjLHRoaXMuemIoKSk7dGhpcy5pPW5ldyBXKGIpfXJldHVybiB0aGlzLmkuRWEoYSkudGhlbihmdW5jdGlvbihhKXt0aGlzLlljPSExO3JldHVybiBhfS5iaW5kKHRoaXMpLGZ1bmN0aW9uKGEpe3RoaXMuWWM9ITE7dGhyb3cgYTt9LmJpbmQodGhpcykpfTtaay5wcm90b3R5cGUuY29ubmVjdD1aay5wcm90b3R5cGUuY29ubmVjdDtaay5wcm90b3R5cGUuTWY9ZnVuY3Rpb24oYSl7aWYodGhpcy50Yi5oYXMoYSkpdGhyb3cgbmV3IEQoNTAzLGEpO2lmKHRoaXMueWMpdGhyb3cgbmV3IEQoNTM1KTt0aGlzLnRiLnNldChhLG5ldyBZKGEpKTtyZXR1cm4gdGhpcy50Yi5nZXQoYSl9O1prLnByb3RvdHlwZS5jcmVhdGVUYWJsZT1aay5wcm90b3R5cGUuTWY7XG5aay5wcm90b3R5cGUuc2U9ZnVuY3Rpb24oYSl7aWYodGhpcy55Yyl0aHJvdyBuZXcgRCg1MzUpO3RoaXMuZy5zZShhKTtyZXR1cm4gdGhpc307WmsucHJvdG90eXBlLnNldFByYWdtYT1aay5wcm90b3R5cGUuc2U7ZnVuY3Rpb24gWihhLGIpe3RoaXMuQT1hO3RoaXMuVWE9Yjt0aGlzLk09eSgpO3RoaXMua2U9e1NmOiExfX1xKFwibGYuc2NoZW1hLkRhdGFiYXNlU2NoZW1hXCIsWik7Wi5wcm90b3R5cGUubmFtZT1nKFwiQVwiKTtaLnByb3RvdHlwZS5uYW1lPVoucHJvdG90eXBlLm5hbWU7Wi5wcm90b3R5cGUudmVyc2lvbj1nKFwiVWFcIik7Wi5wcm90b3R5cGUudmVyc2lvbj1aLnByb3RvdHlwZS52ZXJzaW9uO1oucHJvdG90eXBlLm9hPWZ1bmN0aW9uKCl7cmV0dXJuIHoodGhpcy5NKX07Wi5wcm90b3R5cGUudGFibGVzPVoucHJvdG90eXBlLm9hO1oucHJvdG90eXBlLnRhYmxlPWZ1bmN0aW9uKGEpe2lmKCF0aGlzLk0uaGFzKGEpKXRocm93IG5ldyBEKDEwMSxhKTtyZXR1cm4gdGhpcy5NLmdldChhKX07XG5aLnByb3RvdHlwZS50YWJsZT1aLnByb3RvdHlwZS50YWJsZTtaLnByb3RvdHlwZS5pbmZvPWZ1bmN0aW9uKCl7dGhpcy5WZXx8KHRoaXMuVmU9bmV3IEprKHRoaXMpKTtyZXR1cm4gdGhpcy5WZX07Wi5wcm90b3R5cGUuRmc9ZyhcImtlXCIpO1oucHJvdG90eXBlLnByYWdtYT1aLnByb3RvdHlwZS5GZztaLnByb3RvdHlwZS5zZT1iYShcImtlXCIpO3EoXCJsZi5zY2hlbWEuY3JlYXRlXCIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IFprKGEsYil9KTt1LnByb3RvdHlwZS5jYXRjaD11LnByb3RvdHlwZS52ZTt1LnByb3RvdHlwZVtcImNhdGNoXCJdPXUucHJvdG90eXBlLmNhdGNoO1xudHJ5e2lmKG1vZHVsZSl7bW9kdWxlLmV4cG9ydHM9bGY7fX1jYXRjaChlKXt9fS5iaW5kKHdpbmRvdykpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb3ZlZmllbGQubWluLmpzLm1hcFxuIiwiKGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGNyeXB0ID0gcmVxdWlyZSgnY3J5cHQnKSxcclxuICAgICAgdXRmOCA9IHJlcXVpcmUoJ2NoYXJlbmMnKS51dGY4LFxyXG4gICAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpLFxyXG4gICAgICBiaW4gPSByZXF1aXJlKCdjaGFyZW5jJykuYmluLFxyXG5cclxuICAvLyBUaGUgY29yZVxyXG4gIG1kNSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAvLyBDb252ZXJ0IHRvIGJ5dGUgYXJyYXlcclxuICAgIGlmIChtZXNzYWdlLmNvbnN0cnVjdG9yID09IFN0cmluZylcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGluZyA9PT0gJ2JpbmFyeScpXHJcbiAgICAgICAgbWVzc2FnZSA9IGJpbi5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbWVzc2FnZSA9IHV0Zjguc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgIGVsc2UgaWYgKGlzQnVmZmVyKG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZSwgMCk7XHJcbiAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcclxuICAgIC8vIGVsc2UsIGFzc3VtZSBieXRlIGFycmF5IGFscmVhZHlcclxuXHJcbiAgICB2YXIgbSA9IGNyeXB0LmJ5dGVzVG9Xb3JkcyhtZXNzYWdlKSxcclxuICAgICAgICBsID0gbWVzc2FnZS5sZW5ndGggKiA4LFxyXG4gICAgICAgIGEgPSAgMTczMjU4NDE5MyxcclxuICAgICAgICBiID0gLTI3MTczMzg3OSxcclxuICAgICAgICBjID0gLTE3MzI1ODQxOTQsXHJcbiAgICAgICAgZCA9ICAyNzE3MzM4Nzg7XHJcblxyXG4gICAgLy8gU3dhcCBlbmRpYW5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtW2ldID0gKChtW2ldIDw8ICA4KSB8IChtW2ldID4+PiAyNCkpICYgMHgwMEZGMDBGRiB8XHJcbiAgICAgICAgICAgICAoKG1baV0gPDwgMjQpIHwgKG1baV0gPj4+ICA4KSkgJiAweEZGMDBGRjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZGRpbmdcclxuICAgIG1bbCA+Pj4gNV0gfD0gMHg4MCA8PCAobCAlIDMyKTtcclxuICAgIG1bKCgobCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsO1xyXG5cclxuICAgIC8vIE1ldGhvZCBzaG9ydGN1dHNcclxuICAgIHZhciBGRiA9IG1kNS5fZmYsXHJcbiAgICAgICAgR0cgPSBtZDUuX2dnLFxyXG4gICAgICAgIEhIID0gbWQ1Ll9oaCxcclxuICAgICAgICBJSSA9IG1kNS5faWk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xyXG5cclxuICAgICAgdmFyIGFhID0gYSxcclxuICAgICAgICAgIGJiID0gYixcclxuICAgICAgICAgIGNjID0gYyxcclxuICAgICAgICAgIGRkID0gZDtcclxuXHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDBdLCAgNywgLTY4MDg3NjkzNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDcsIC0xNzY0MTg4OTcpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgOF0sICA3LCAgMTc3MDAzNTQxNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTcsIC00MjA2Myk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDcsICAxODA0NjAzNjgyKTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyAxXSwgIDUsIC0xNjU3OTY1MTApO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyA2XSwgIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgMF0sIDIwLCAtMzczODk3MzAyKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgNV0sICA1LCAtNzAxNTU4NjkxKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxMF0sICA5LCAgMzgwMTYwODMpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA5XSwgIDUsICA1Njg0NDY0MzgpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzE0XSwgIDksIC0xMDE5ODAzNjkwKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krMTNdLCAgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyAyXSwgIDksIC01MTQwMzc4NCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcclxuXHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDVdLCAgNCwgLTM3ODU1OCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyAxXSwgIDQsIC0xNTMwOTkyMDYwKTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKzEzXSwgIDQsICA2ODEyNzkxNzQpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDldLCAgNCwgLTY0MDM2NDQ4Nyk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcblxyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsxMl0sICA2LCAgMTcwMDQ4NTU3MSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDhdLCAgNiwgIDE4NzMzMTMzNTkpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgNF0sICA2LCAtMTQ1NTIzMDcwKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4gICAgICBhID0gKGEgKyBhYSkgPj4+IDA7XHJcbiAgICAgIGIgPSAoYiArIGJiKSA+Pj4gMDtcclxuICAgICAgYyA9IChjICsgY2MpID4+PiAwO1xyXG4gICAgICBkID0gKGQgKyBkZCkgPj4+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyeXB0LmVuZGlhbihbYSwgYiwgYywgZF0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEF1eGlsaWFyeSBmdW5jdGlvbnNcclxuICBtZDUuX2ZmICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGMgfCB+YiAmIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2dnICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGQgfCBjICYgfmQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2hoICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9paSAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG5cclxuICAvLyBQYWNrYWdlIHByaXZhdGUgYmxvY2tzaXplXHJcbiAgbWQ1Ll9ibG9ja3NpemUgPSAxNjtcclxuICBtZDUuX2RpZ2VzdHNpemUgPSAxNjtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQgJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgIHZhciBkaWdlc3RieXRlcyA9IGNyeXB0LndvcmRzVG9CeXRlcyhtZDUobWVzc2FnZSwgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5hc0J5dGVzID8gZGlnZXN0Ynl0ZXMgOlxyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cmluZyA/IGJpbi5ieXRlc1RvU3RyaW5nKGRpZ2VzdGJ5dGVzKSA6XHJcbiAgICAgICAgY3J5cHQuYnl0ZXNUb0hleChkaWdlc3RieXRlcyk7XHJcbiAgfTtcclxuXHJcbn0pKCk7XHJcbiIsIi8vISBtb21lbnQuanNcbi8vISB2ZXJzaW9uIDogMi4yMC4xXG4vLyEgYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8hIGxpY2Vuc2UgOiBNSVRcbi8vISBtb21lbnRqcy5jb21cblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgZ2xvYmFsLm1vbWVudCA9IGZhY3RvcnkoKVxufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBob29rQ2FsbGJhY2s7XG5cbmZ1bmN0aW9uIGhvb2tzICgpIHtcbiAgICByZXR1cm4gaG9va0NhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbi8vIFRoaXMgaXMgZG9uZSB0byByZWdpc3RlciB0aGUgbWV0aG9kIGNhbGxlZCB3aXRoIG1vbWVudCgpXG4vLyB3aXRob3V0IGNyZWF0aW5nIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbmZ1bmN0aW9uIHNldEhvb2tDYWxsYmFjayAoY2FsbGJhY2spIHtcbiAgICBob29rQ2FsbGJhY2sgPSBjYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gaXNBcnJheShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGlucHV0KSB7XG4gICAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXG4gICAgLy8gaW5wdXQgIT0gbnVsbFxuICAgIHJldHVybiBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iaikge1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xuICAgICAgICByZXR1cm4gKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaztcbiAgICAgICAgZm9yIChrIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGlucHV0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIERhdGUgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiBtYXAoYXJyLCBmbikge1xuICAgIHZhciByZXMgPSBbXSwgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHJlcy5wdXNoKGZuKGFycltpXSwgaSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBoYXNPd25Qcm9wKGEsIGIpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICAgIGZvciAodmFyIGkgaW4gYikge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChiLCBpKSkge1xuICAgICAgICAgICAgYVtpXSA9IGJbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzT3duUHJvcChiLCAndG9TdHJpbmcnKSkge1xuICAgICAgICBhLnRvU3RyaW5nID0gYi50b1N0cmluZztcbiAgICB9XG5cbiAgICBpZiAoaGFzT3duUHJvcChiLCAndmFsdWVPZicpKSB7XG4gICAgICAgIGEudmFsdWVPZiA9IGIudmFsdWVPZjtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVVRDIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCB0cnVlKS51dGMoKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1wdHkgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHVudXNlZFRva2VucyAgICA6IFtdLFxuICAgICAgICB1bnVzZWRJbnB1dCAgICAgOiBbXSxcbiAgICAgICAgb3ZlcmZsb3cgICAgICAgIDogLTIsXG4gICAgICAgIGNoYXJzTGVmdE92ZXIgICA6IDAsXG4gICAgICAgIG51bGxJbnB1dCAgICAgICA6IGZhbHNlLFxuICAgICAgICBpbnZhbGlkTW9udGggICAgOiBudWxsLFxuICAgICAgICBpbnZhbGlkRm9ybWF0ICAgOiBmYWxzZSxcbiAgICAgICAgdXNlckludmFsaWRhdGVkIDogZmFsc2UsXG4gICAgICAgIGlzbyAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBwYXJzZWREYXRlUGFydHMgOiBbXSxcbiAgICAgICAgbWVyaWRpZW0gICAgICAgIDogbnVsbCxcbiAgICAgICAgcmZjMjgyMiAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHdlZWtkYXlNaXNtYXRjaCA6IGZhbHNlXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKG0pIHtcbiAgICBpZiAobS5fcGYgPT0gbnVsbCkge1xuICAgICAgICBtLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIG0uX3BmO1xufVxuXG52YXIgc29tZTtcbmlmIChBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgIHNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZTtcbn0gZWxzZSB7XG4gICAgc29tZSA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXMsIHRbaV0sIGksIHQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChtKSB7XG4gICAgaWYgKG0uX2lzVmFsaWQgPT0gbnVsbCkge1xuICAgICAgICB2YXIgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MobSk7XG4gICAgICAgIHZhciBwYXJzZWRQYXJ0cyA9IHNvbWUuY2FsbChmbGFncy5wYXJzZWREYXRlUGFydHMsIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAhPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlzTm93VmFsaWQgPSAhaXNOYU4obS5fZC5nZXRUaW1lKCkpICYmXG4gICAgICAgICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcbiAgICAgICAgICAgICFmbGFncy5lbXB0eSAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRNb250aCAmJlxuICAgICAgICAgICAgIWZsYWdzLmludmFsaWRXZWVrZGF5ICYmXG4gICAgICAgICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXG4gICAgICAgICAgICAhZmxhZ3MubnVsbElucHV0ICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZEZvcm1hdCAmJlxuICAgICAgICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxuICAgICAgICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcblxuICAgICAgICBpZiAobS5fc3RyaWN0KSB7XG4gICAgICAgICAgICBpc05vd1ZhbGlkID0gaXNOb3dWYWxpZCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcbiAgICAgICAgICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5pc0Zyb3plbiA9PSBudWxsIHx8ICFPYmplY3QuaXNGcm96ZW4obSkpIHtcbiAgICAgICAgICAgIG0uX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG0uX2lzVmFsaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWQgKGZsYWdzKSB7XG4gICAgdmFyIG0gPSBjcmVhdGVVVEMoTmFOKTtcbiAgICBpZiAoZmxhZ3MgIT0gbnVsbCkge1xuICAgICAgICBleHRlbmQoZ2V0UGFyc2luZ0ZsYWdzKG0pLCBmbGFncyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkudXNlckludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbn1cblxuLy8gUGx1Z2lucyB0aGF0IGFkZCBwcm9wZXJ0aWVzIHNob3VsZCBhbHNvIGFkZCB0aGUga2V5IGhlcmUgKG51bGwgdmFsdWUpLFxuLy8gc28gd2UgY2FuIHByb3Blcmx5IGNsb25lIG91cnNlbHZlcy5cbnZhciBtb21lbnRQcm9wZXJ0aWVzID0gaG9va3MubW9tZW50UHJvcGVydGllcyA9IFtdO1xuXG5mdW5jdGlvbiBjb3B5Q29uZmlnKHRvLCBmcm9tKSB7XG4gICAgdmFyIGksIHByb3AsIHZhbDtcblxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xuICAgICAgICB0by5faXNBTW9tZW50T2JqZWN0ID0gZnJvbS5faXNBTW9tZW50T2JqZWN0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XG4gICAgICAgIHRvLl9pID0gZnJvbS5faTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xuICAgICAgICB0by5fZiA9IGZyb20uX2Y7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcbiAgICAgICAgdG8uX2wgPSBmcm9tLl9sO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcbiAgICAgICAgdG8uX3N0cmljdCA9IGZyb20uX3N0cmljdDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XG4gICAgICAgIHRvLl90em0gPSBmcm9tLl90em07XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XG4gICAgICAgIHRvLl9pc1VUQyA9IGZyb20uX2lzVVRDO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcbiAgICAgICAgdG8uX29mZnNldCA9IGZyb20uX29mZnNldDtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcbiAgICAgICAgdG8uX3BmID0gZ2V0UGFyc2luZ0ZsYWdzKGZyb20pO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcbiAgICAgICAgdG8uX2xvY2FsZSA9IGZyb20uX2xvY2FsZTtcbiAgICB9XG5cbiAgICBpZiAobW9tZW50UHJvcGVydGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9wID0gbW9tZW50UHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgIHZhbCA9IGZyb21bcHJvcF07XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICAgICAgICB0b1twcm9wXSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0bztcbn1cblxudmFyIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuLy8gTW9tZW50IHByb3RvdHlwZSBvYmplY3RcbmZ1bmN0aW9uIE1vbWVudChjb25maWcpIHtcbiAgICBjb3B5Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG4gICAgdGhpcy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5fZCAhPSBudWxsID8gY29uZmlnLl9kLmdldFRpbWUoKSA6IE5hTik7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICB0aGlzLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wIGluIGNhc2UgdXBkYXRlT2Zmc2V0IGNyZWF0ZXMgbmV3IG1vbWVudFxuICAgIC8vIG9iamVjdHMuXG4gICAgaWYgKHVwZGF0ZUluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTW9tZW50IChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTW9tZW50IHx8IChvYmogIT0gbnVsbCAmJiBvYmouX2lzQU1vbWVudE9iamVjdCAhPSBudWxsKTtcbn1cblxuZnVuY3Rpb24gYWJzRmxvb3IgKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIC8vIC0wIC0+IDBcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpIHx8IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvSW50KGFyZ3VtZW50Rm9yQ29lcmNpb24pIHtcbiAgICB2YXIgY29lcmNlZE51bWJlciA9ICthcmd1bWVudEZvckNvZXJjaW9uLFxuICAgICAgICB2YWx1ZSA9IDA7XG5cbiAgICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xuICAgICAgICB2YWx1ZSA9IGFic0Zsb29yKGNvZXJjZWROdW1iZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICB2YXIgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCksXG4gICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSkgfHxcbiAgICAgICAgICAgICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSkpIHtcbiAgICAgICAgICAgIGRpZmZzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcbn1cblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAoaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgKHR5cGVvZiBjb25zb2xlICE9PSAgJ3VuZGVmaW5lZCcpICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0RlcHJlY2F0aW9uIHdhcm5pbmc6ICcgKyBtc2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlKG1zZywgZm4pIHtcbiAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihudWxsLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICB2YXIgYXJnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmcgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnICs9ICdcXG5bJyArIGkgKyAnXSAnO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0ga2V5ICsgJzogJyArIGFyZ3VtZW50c1swXVtrZXldICsgJywgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2UoMCwgLTIpOyAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgYW5kIHNwYWNlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhcm4obXNnICsgJ1xcbkFyZ3VtZW50czogJyArIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpLmpvaW4oJycpICsgJ1xcbicgKyAobmV3IEVycm9yKCkpLnN0YWNrKTtcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sIGZuKTtcbn1cblxudmFyIGRlcHJlY2F0aW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBkZXByZWNhdGVTaW1wbGUobmFtZSwgbXNnKSB7XG4gICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihuYW1lLCBtc2cpO1xuICAgIH1cbiAgICBpZiAoIWRlcHJlY2F0aW9uc1tuYW1lXSkge1xuICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgIGRlcHJlY2F0aW9uc1tuYW1lXSA9IHRydWU7XG4gICAgfVxufVxuXG5ob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPSBmYWxzZTtcbmhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciA9IG51bGw7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG5mdW5jdGlvbiBzZXQgKGNvbmZpZykge1xuICAgIHZhciBwcm9wLCBpO1xuICAgIGZvciAoaSBpbiBjb25maWcpIHtcbiAgICAgICAgcHJvcCA9IGNvbmZpZ1tpXTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcCkpIHtcbiAgICAgICAgICAgIHRoaXNbaV0gPSBwcm9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc1snXycgKyBpXSA9IHByb3A7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIC8vIExlbmllbnQgb3JkaW5hbCBwYXJzaW5nIGFjY2VwdHMganVzdCBhIG51bWJlciBpbiBhZGRpdGlvbiB0b1xuICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX2RheU9mTW9udGhPcmRpbmFsUGFyc2UuXG4gICAgLy8gVE9ETzogUmVtb3ZlIFwib3JkaW5hbFBhcnNlXCIgZmFsbGJhY2sgaW4gbmV4dCBtYWpvciByZWxlYXNlLlxuICAgIHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2VMZW5pZW50ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgKHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2Uuc291cmNlIHx8IHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UpICtcbiAgICAgICAgICAgICd8JyArICgvXFxkezEsMn0vKS5zb3VyY2UpO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjaGlsZENvbmZpZykge1xuICAgIHZhciByZXMgPSBleHRlbmQoe30sIHBhcmVudENvbmZpZyksIHByb3A7XG4gICAgZm9yIChwcm9wIGluIGNoaWxkQ29uZmlnKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSkge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgcmVzW3Byb3BdID0ge307XG4gICAgICAgICAgICAgICAgZXh0ZW5kKHJlc1twcm9wXSwgcGFyZW50Q29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBjaGlsZENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW3Byb3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSBjaGlsZENvbmZpZ1twcm9wXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHByb3AgaW4gcGFyZW50Q29uZmlnKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICAgICAgICByZXNbcHJvcF0gPSBleHRlbmQoe30sIHJlc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gTG9jYWxlKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldChjb25maWcpO1xuICAgIH1cbn1cblxudmFyIGtleXM7XG5cbmlmIChPYmplY3Qua2V5cykge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cztcbn0gZWxzZSB7XG4gICAga2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGksIHJlcyA9IFtdO1xuICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChvYmosIGkpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xufVxuXG52YXIgZGVmYXVsdENhbGVuZGFyID0ge1xuICAgIHNhbWVEYXkgOiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgbmV4dERheSA6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIFthdF0gTFQnLFxuICAgIGxhc3REYXkgOiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgIGxhc3RXZWVrIDogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG59O1xuXG5mdW5jdGlvbiBjYWxlbmRhciAoa2V5LCBtb20sIG5vdykge1xuICAgIHZhciBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldIHx8IHRoaXMuX2NhbGVuZGFyWydzYW1lRWxzZSddO1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dCkgPyBvdXRwdXQuY2FsbChtb20sIG5vdykgOiBvdXRwdXQ7XG59XG5cbnZhciBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQgPSB7XG4gICAgTFRTICA6ICdoOm1tOnNzIEEnLFxuICAgIExUICAgOiAnaDptbSBBJyxcbiAgICBMICAgIDogJ01NL0REL1lZWVknLFxuICAgIExMICAgOiAnTU1NTSBELCBZWVlZJyxcbiAgICBMTEwgIDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxuICAgIExMTEwgOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQSdcbn07XG5cbmZ1bmN0aW9uIGxvbmdEYXRlRm9ybWF0IChrZXkpIHtcbiAgICB2YXIgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSxcbiAgICAgICAgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XG59XG5cbnZhciBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuZnVuY3Rpb24gaW52YWxpZERhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcbn1cblxudmFyIGRlZmF1bHRPcmRpbmFsID0gJyVkJztcbnZhciBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XG5cbmZ1bmN0aW9uIG9yZGluYWwgKG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLl9vcmRpbmFsLnJlcGxhY2UoJyVkJywgbnVtYmVyKTtcbn1cblxudmFyIGRlZmF1bHRSZWxhdGl2ZVRpbWUgPSB7XG4gICAgZnV0dXJlIDogJ2luICVzJyxcbiAgICBwYXN0ICAgOiAnJXMgYWdvJyxcbiAgICBzICA6ICdhIGZldyBzZWNvbmRzJyxcbiAgICBzcyA6ICclZCBzZWNvbmRzJyxcbiAgICBtICA6ICdhIG1pbnV0ZScsXG4gICAgbW0gOiAnJWQgbWludXRlcycsXG4gICAgaCAgOiAnYW4gaG91cicsXG4gICAgaGggOiAnJWQgaG91cnMnLFxuICAgIGQgIDogJ2EgZGF5JyxcbiAgICBkZCA6ICclZCBkYXlzJyxcbiAgICBNICA6ICdhIG1vbnRoJyxcbiAgICBNTSA6ICclZCBtb250aHMnLFxuICAgIHkgIDogJ2EgeWVhcicsXG4gICAgeXkgOiAnJWQgeWVhcnMnXG59O1xuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWUgKG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkge1xuICAgIHZhciBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyaW5nXTtcbiAgICByZXR1cm4gKGlzRnVuY3Rpb24ob3V0cHV0KSkgP1xuICAgICAgICBvdXRwdXQobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSA6XG4gICAgICAgIG91dHB1dC5yZXBsYWNlKC8lZC9pLCBudW1iZXIpO1xufVxuXG5mdW5jdGlvbiBwYXN0RnV0dXJlIChkaWZmLCBvdXRwdXQpIHtcbiAgICB2YXIgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xufVxuXG52YXIgYWxpYXNlcyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRVbml0QWxpYXMgKHVuaXQsIHNob3J0aGFuZCkge1xuICAgIHZhciBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XG4gICAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tsb3dlckNhc2UgKyAncyddID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gdW5pdDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHVuaXRzID09PSAnc3RyaW5nJyA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV0gOiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0T2JqZWN0KSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IHt9LFxuICAgICAgICBub3JtYWxpemVkUHJvcCxcbiAgICAgICAgcHJvcDtcblxuICAgIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xuICAgICAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XG4gICAgICAgICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZElucHV0O1xufVxuXG52YXIgcHJpb3JpdGllcyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRVbml0UHJpb3JpdHkodW5pdCwgcHJpb3JpdHkpIHtcbiAgICBwcmlvcml0aWVzW3VuaXRdID0gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXRpemVkVW5pdHModW5pdHNPYmopIHtcbiAgICB2YXIgdW5pdHMgPSBbXTtcbiAgICBmb3IgKHZhciB1IGluIHVuaXRzT2JqKSB7XG4gICAgICAgIHVuaXRzLnB1c2goe3VuaXQ6IHUsIHByaW9yaXR5OiBwcmlvcml0aWVzW3VdfSk7XG4gICAgfVxuICAgIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgIH0pO1xuICAgIHJldHVybiB1bml0cztcbn1cblxuZnVuY3Rpb24gemVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgIHZhciBhYnNOdW1iZXIgPSAnJyArIE1hdGguYWJzKG51bWJlciksXG4gICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuICAgIHJldHVybiAoc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLScpICtcbiAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgKyBhYnNOdW1iZXI7XG59XG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcblxudmFyIGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2c7XG5cbnZhciBmb3JtYXRGdW5jdGlvbnMgPSB7fTtcblxudmFyIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbi8vIHRva2VuOiAgICAnTSdcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cbi8vIG9yZGluYWw6ICAnTW8nXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cbmZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuICh0b2tlbiwgcGFkZGVkLCBvcmRpbmFsLCBjYWxsYmFjaykge1xuICAgIHZhciBmdW5jID0gY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2NhbGxiYWNrXSgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gZnVuYztcbiAgICB9XG4gICAgaWYgKHBhZGRlZCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHplcm9GaWxsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAob3JkaW5hbCkge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdG9rZW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLCBpLCBsZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJycsIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oYXJyYXlbaV0pID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdCkgOiBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59XG5cbi8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuZnVuY3Rpb24gZm9ybWF0TW9tZW50KG0sIGZvcm1hdCkge1xuICAgIGlmICghbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG0ubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbS5sb2NhbGVEYXRhKCkpO1xuICAgIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0obSk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmb3JtYXQsIGxvY2FsZSkge1xuICAgIHZhciBpID0gNTtcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmxvbmdEYXRlRm9ybWF0KGlucHV0KSB8fCBpbnB1dDtcbiAgICB9XG5cbiAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xuICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgaSAtPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXQ7XG59XG5cbnZhciBtYXRjaDEgICAgICAgICA9IC9cXGQvOyAgICAgICAgICAgIC8vICAgICAgIDAgLSA5XG52YXIgbWF0Y2gyICAgICAgICAgPSAvXFxkXFxkLzsgICAgICAgICAgLy8gICAgICAwMCAtIDk5XG52YXIgbWF0Y2gzICAgICAgICAgPSAvXFxkezN9LzsgICAgICAgICAvLyAgICAgMDAwIC0gOTk5XG52YXIgbWF0Y2g0ICAgICAgICAgPSAvXFxkezR9LzsgICAgICAgICAvLyAgICAwMDAwIC0gOTk5OVxudmFyIG1hdGNoNiAgICAgICAgID0gL1srLV0/XFxkezZ9LzsgICAgLy8gLTk5OTk5OSAtIDk5OTk5OVxudmFyIG1hdGNoMXRvMiAgICAgID0gL1xcZFxcZD8vOyAgICAgICAgIC8vICAgICAgIDAgLSA5OVxudmFyIG1hdGNoM3RvNCAgICAgID0gL1xcZFxcZFxcZFxcZD8vOyAgICAgLy8gICAgIDk5OSAtIDk5OTlcbnZhciBtYXRjaDV0bzYgICAgICA9IC9cXGRcXGRcXGRcXGRcXGRcXGQ/LzsgLy8gICA5OTk5OSAtIDk5OTk5OVxudmFyIG1hdGNoMXRvMyAgICAgID0gL1xcZHsxLDN9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OVxudmFyIG1hdGNoMXRvNCAgICAgID0gL1xcZHsxLDR9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OTlcbnZhciBtYXRjaDF0bzYgICAgICA9IC9bKy1dP1xcZHsxLDZ9LzsgIC8vIC05OTk5OTkgLSA5OTk5OTlcblxudmFyIG1hdGNoVW5zaWduZWQgID0gL1xcZCsvOyAgICAgICAgICAgLy8gICAgICAgMCAtIGluZlxudmFyIG1hdGNoU2lnbmVkICAgID0gL1srLV0/XFxkKy87ICAgICAgLy8gICAgLWluZiAtIGluZlxuXG52YXIgbWF0Y2hPZmZzZXQgICAgPSAvWnxbKy1dXFxkXFxkOj9cXGRcXGQvZ2k7IC8vICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxudmFyIG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naTsgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcblxudmFyIG1hdGNoVGltZXN0YW1wID0gL1srLV0/XFxkKyhcXC5cXGR7MSwzfSk/LzsgLy8gMTIzNDU2Nzg5IDEyMzQ1Njc4OS4xMjNcblxuLy8gYW55IHdvcmQgKG9yIHR3bykgY2hhcmFjdGVycyBvciBudW1iZXJzIGluY2x1ZGluZyB0d28vdGhyZWUgd29yZCBtb250aCBpbiBhcmFiaWMuXG4vLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXG52YXIgbWF0Y2hXb3JkID0gL1swLTldezAsMjU2fVsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRjA3XFx1RkYxMC1cXHVGRkVGXXsxLDI1Nn18W1xcdTA2MDAtXFx1MDZGRlxcL117MSwyNTZ9KFxccyo/W1xcdTA2MDAtXFx1MDZGRl17MSwyNTZ9KXsxLDJ9L2k7XG5cblxudmFyIHJlZ2V4ZXMgPSB7fTtcblxuZnVuY3Rpb24gYWRkUmVnZXhUb2tlbiAodG9rZW4sIHJlZ2V4LCBzdHJpY3RSZWdleCkge1xuICAgIHJlZ2V4ZXNbdG9rZW5dID0gaXNGdW5jdGlvbihyZWdleCkgPyByZWdleCA6IGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlRGF0YSkge1xuICAgICAgICByZXR1cm4gKGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4KSA/IHN0cmljdFJlZ2V4IDogcmVnZXg7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VSZWdleEZvclRva2VuICh0b2tlbiwgY29uZmlnKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xuICAgIH1cblxuICAgIHJldHVybiByZWdleGVzW3Rva2VuXShjb25maWcuX3N0cmljdCwgY29uZmlnLl9sb2NhbGUpO1xufVxuXG4vLyBDb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTYxNDkzL2lzLXRoZXJlLWEtcmVnZXhwLWVzY2FwZS1mdW5jdGlvbi1pbi1qYXZhc2NyaXB0XG5mdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzKSB7XG4gICAgcmV0dXJuIHJlZ2V4RXNjYXBlKHMucmVwbGFjZSgnXFxcXCcsICcnKS5yZXBsYWNlKC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICByZXR1cm4gcDEgfHwgcDIgfHwgcDMgfHwgcDQ7XG4gICAgfSkpO1xufVxuXG5mdW5jdGlvbiByZWdleEVzY2FwZShzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG59XG5cbnZhciB0b2tlbnMgPSB7fTtcblxuZnVuY3Rpb24gYWRkUGFyc2VUb2tlbiAodG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIGksIGZ1bmMgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICB0b2tlbiA9IFt0b2tlbl07XG4gICAgfVxuICAgIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcbiAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5W2NhbGxiYWNrXSA9IHRvSW50KGlucHV0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IHRva2VuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbltpXV0gPSBmdW5jO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkV2Vla1BhcnNlVG9rZW4gKHRva2VuLCBjYWxsYmFjaykge1xuICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuICAgICAgICBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIHRva2VuKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIGlucHV0LCBjb25maWcpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XG4gICAgICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XG4gICAgfVxufVxuXG52YXIgWUVBUiA9IDA7XG52YXIgTU9OVEggPSAxO1xudmFyIERBVEUgPSAyO1xudmFyIEhPVVIgPSAzO1xudmFyIE1JTlVURSA9IDQ7XG52YXIgU0VDT05EID0gNTtcbnZhciBNSUxMSVNFQ09ORCA9IDY7XG52YXIgV0VFSyA9IDc7XG52YXIgV0VFS0RBWSA9IDg7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1knLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHkgPSB0aGlzLnllYXIoKTtcbiAgICByZXR1cm4geSA8PSA5OTk5ID8gJycgKyB5IDogJysnICsgeTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZJywgICA0XSwgICAgICAgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVknLCAgNV0sICAgICAgIDAsICd5ZWFyJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZWScsIDYsIHRydWVdLCAwLCAneWVhcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuYWRkVW5pdFByaW9yaXR5KCd5ZWFyJywgMSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignWScsICAgICAgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignWVknLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignWVlZWScsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignWVlZWVknLCAgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignWVlZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9IGlucHV0Lmxlbmd0aCA9PT0gMiA/IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcbn0pO1xuYWRkUGFyc2VUb2tlbignWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICAgIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcbn1cblxuLy8gSE9PS1NcblxuaG9va3MucGFyc2VUd29EaWdpdFllYXIgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICByZXR1cm4gdG9JbnQoaW5wdXQpICsgKHRvSW50KGlucHV0KSA+IDY4ID8gMTkwMCA6IDIwMDApO1xufTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0WWVhciA9IG1ha2VHZXRTZXQoJ0Z1bGxZZWFyJywgdHJ1ZSk7XG5cbmZ1bmN0aW9uIGdldElzTGVhcFllYXIgKCkge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcigpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUdldFNldCAodW5pdCwga2VlcFRpbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXQkMSh0aGlzLCB1bml0LCB2YWx1ZSk7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIHVuaXQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0IChtb20sIHVuaXQpIHtcbiAgICByZXR1cm4gbW9tLmlzVmFsaWQoKSA/XG4gICAgICAgIG1vbS5fZFsnZ2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSgpIDogTmFOO1xufVxuXG5mdW5jdGlvbiBzZXQkMSAobW9tLCB1bml0LCB2YWx1ZSkge1xuICAgIGlmIChtb20uaXNWYWxpZCgpICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgaWYgKHVuaXQgPT09ICdGdWxsWWVhcicgJiYgaXNMZWFwWWVhcihtb20ueWVhcigpKSAmJiBtb20ubW9udGgoKSA9PT0gMSAmJiBtb20uZGF0ZSgpID09PSAyOSkge1xuICAgICAgICAgICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKHZhbHVlLCBtb20ubW9udGgoKSwgZGF5c0luTW9udGgodmFsdWUsIG1vbS5tb250aCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0odmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIHN0cmluZ0dldCAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5cbmZ1bmN0aW9uIHN0cmluZ1NldCAodW5pdHMsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVPYmplY3RVbml0cyh1bml0cyk7XG4gICAgICAgIHZhciBwcmlvcml0aXplZCA9IGdldFByaW9yaXRpemVkVW5pdHModW5pdHMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXRpemVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzW3ByaW9yaXRpemVkW2ldLnVuaXRdKHVuaXRzW3ByaW9yaXRpemVkW2ldLnVuaXRdKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIG1vZChuLCB4KSB7XG4gICAgcmV0dXJuICgobiAlIHgpICsgeCkgJSB4O1xufVxuXG52YXIgaW5kZXhPZjtcblxuaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgaW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xufSBlbHNlIHtcbiAgICBpbmRleE9mID0gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgLy8gSSBrbm93XG4gICAgICAgIHZhciBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHZhciBtb2RNb250aCA9IG1vZChtb250aCwgMTIpO1xuICAgIHllYXIgKz0gKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7XG4gICAgcmV0dXJuIG1vZE1vbnRoID09PSAxID8gKGlzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4KSA6ICgzMSAtIG1vZE1vbnRoICUgNyAlIDIpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDJdLCAnTW8nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9udGgoKSArIDE7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ01NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzU2hvcnQodGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignTU1NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ21vbnRoJywgJ00nKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdtb250aCcsIDgpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ00nLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignTU0nLCAgIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ01NTScsICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzU2hvcnRSZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNT05USF0gPSB0b0ludChpbnB1dCkgLSAxO1xufSk7XG5cbmFkZFBhcnNlVG9rZW4oWydNTU0nLCAnTU1NTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gY29uZmlnLl9sb2NhbGUubW9udGhzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgLy8gaWYgd2UgZGlkbid0IGZpbmQgYSBtb250aCBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWQuXG4gICAgaWYgKG1vbnRoICE9IG51bGwpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gbW9udGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZE1vbnRoID0gaW5wdXQ7XG4gICAgfVxufSk7XG5cbi8vIExPQ0FMRVNcblxudmFyIE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy87XG52YXIgZGVmYXVsdExvY2FsZU1vbnRocyA9ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpO1xuZnVuY3Rpb24gbG9jYWxlTW9udGhzIChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0pIHtcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKSA/IHRoaXMuX21vbnRocyA6XG4gICAgICAgICAgICB0aGlzLl9tb250aHNbJ3N0YW5kYWxvbmUnXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKSA/IHRoaXMuX21vbnRoc1ttLm1vbnRoKCldIDpcbiAgICAgICAgdGhpcy5fbW9udGhzWyh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20ubW9udGgoKV07XG59XG5cbnZhciBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQgPSAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyk7XG5mdW5jdGlvbiBsb2NhbGVNb250aHNTaG9ydCAobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KSA/IHRoaXMuX21vbnRoc1Nob3J0IDpcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0WydzdGFuZGFsb25lJ107XG4gICAgfVxuICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRoc1Nob3J0KSA/IHRoaXMuX21vbnRoc1Nob3J0W20ubW9udGgoKV0gOlxuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFtNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLm1vbnRoKCldO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZShtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIGlpLCBtb20sIGxsYyA9IG1vbnRoTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBub3QgdXNlZFxuICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHNTaG9ydChtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsZU1vbnRoc1BhcnNlIChtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UuY2FsbCh0aGlzLCBtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgfVxuXG4gICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXG4gICAgLy8gc2VlIHNvcnRpbmcgaW4gY29tcHV0ZU1vbnRoc1BhcnNlXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJywgJ2knKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICcnKSArICckJywgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0cmljdCAmJiAhdGhpcy5fbW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHJlZ2V4ID0gJ14nICsgdGhpcy5tb250aHMobW9tLCAnJykgKyAnfF4nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKTtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NTScgJiYgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTScgJiYgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fbW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBzZXRNb250aCAobW9tLCB2YWx1ZSkge1xuICAgIHZhciBkYXlPZk1vbnRoO1xuXG4gICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICAgIHJldHVybiBtb207XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gbW9tLmxvY2FsZURhdGEoKS5tb250aHNQYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBBbm90aGVyIHNpbGVudCBmYWlsdXJlP1xuICAgICAgICAgICAgaWYgKCFpc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF5T2ZNb250aCA9IE1hdGgubWluKG1vbS5kYXRlKCksIGRheXNJbk1vbnRoKG1vbS55ZWFyKCksIHZhbHVlKSk7XG4gICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArICdNb250aCddKHZhbHVlLCBkYXlPZk1vbnRoKTtcbiAgICByZXR1cm4gbW9tO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRNb250aCAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBzZXRNb250aCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldCh0aGlzLCAnTW9udGgnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldERheXNJbk1vbnRoICgpIHtcbiAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSk7XG59XG5cbnZhciBkZWZhdWx0TW9udGhzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcbmZ1bmN0aW9uIG1vbnRoc1Nob3J0UmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuZnVuY3Rpb24gbW9udGhzUmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZU1vbnRoc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNSZWdleDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVNb250aHNQYXJzZSAoKSB7XG4gICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIHNob3J0UGllY2VzID0gW10sIGxvbmdQaWVjZXMgPSBbXSwgbWl4ZWRQaWVjZXMgPSBbXSxcbiAgICAgICAgaSwgbW9tO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgfVxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcbiAgICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb250aHNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXRlICh5LCBtLCBkLCBoLCBNLCBzLCBtcykge1xuICAgIC8vIGNhbid0IGp1c3QgYXBwbHkoKSB0byBjcmVhdGUgYSBkYXRlOlxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8xODEzNDhcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHksIG0sIGQsIGgsIE0sIHMsIG1zKTtcblxuICAgIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVVENEYXRlICh5KSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcblxuICAgIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcbiAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xuICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gc3RhcnQtb2YtZmlyc3Qtd2VlayAtIHN0YXJ0LW9mLXllYXJcbmZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSkge1xuICAgIHZhciAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcbiAgICAgICAgZndkID0gNyArIGRvdyAtIGRveSxcbiAgICAgICAgLy8gZmlyc3Qtd2VlayBkYXkgbG9jYWwgd2Vla2RheSAtLSB3aGljaCBsb2NhbCB3ZWVrZGF5IGlzIGZ3ZFxuICAgICAgICBmd2RsdyA9ICg3ICsgY3JlYXRlVVRDRGF0ZSh5ZWFyLCAwLCBmd2QpLmdldFVUQ0RheSgpIC0gZG93KSAlIDc7XG5cbiAgICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZSNDYWxjdWxhdGluZ19hX2RhdGVfZ2l2ZW5fdGhlX3llYXIuMkNfd2Vla19udW1iZXJfYW5kX3dlZWtkYXlcbmZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrcyh5ZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNyxcbiAgICAgICAgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSksXG4gICAgICAgIGRheU9mWWVhciA9IDEgKyA3ICogKHdlZWsgLSAxKSArIGxvY2FsV2Vla2RheSArIHdlZWtPZmZzZXQsXG4gICAgICAgIHJlc1llYXIsIHJlc0RheU9mWWVhcjtcblxuICAgIGlmIChkYXlPZlllYXIgPD0gMCkge1xuICAgICAgICByZXNZZWFyID0geWVhciAtIDE7XG4gICAgICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XG4gICAgfSBlbHNlIGlmIChkYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXIpKSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyICsgMTtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyIC0gZGF5c0luWWVhcih5ZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXNZZWFyID0geWVhcjtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHllYXI6IHJlc1llYXIsXG4gICAgICAgIGRheU9mWWVhcjogcmVzRGF5T2ZZZWFyXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gd2Vla09mWWVhcihtb20sIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQobW9tLnllYXIoKSwgZG93LCBkb3kpLFxuICAgICAgICB3ZWVrID0gTWF0aC5mbG9vcigobW9tLmRheU9mWWVhcigpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxLFxuICAgICAgICByZXNXZWVrLCByZXNZZWFyO1xuXG4gICAgaWYgKHdlZWsgPCAxKSB7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpIC0gMTtcbiAgICAgICAgcmVzV2VlayA9IHdlZWsgKyB3ZWVrc0luWWVhcihyZXNZZWFyLCBkb3csIGRveSk7XG4gICAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpKSB7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpO1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCk7XG4gICAgICAgIHJlc1dlZWsgPSB3ZWVrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHdlZWs6IHJlc1dlZWssXG4gICAgICAgIHllYXI6IHJlc1llYXJcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB3ZWVrc0luWWVhcih5ZWFyLCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgd2Vla09mZnNldE5leHQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciArIDEsIGRvdywgZG95KTtcbiAgICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyXSwgJ3dvJywgJ3dlZWsnKTtcbmFkZEZvcm1hdFRva2VuKCdXJywgWydXVycsIDJdLCAnV28nLCAnaXNvV2VlaycpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnd2VlaycsICd3Jyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWsnLCAnVycpO1xuXG4vLyBQUklPUklUSUVTXG5cbmFkZFVuaXRQcmlvcml0eSgnd2VlaycsIDUpO1xuYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrJywgNSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigndycsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdXJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuLy8gTE9DQUxFU1xuXG5mdW5jdGlvbiBsb2NhbGVXZWVrIChtb20pIHtcbiAgICByZXR1cm4gd2Vla09mWWVhcihtb20sIHRoaXMuX3dlZWsuZG93LCB0aGlzLl93ZWVrLmRveSkud2Vlaztcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVXZWVrID0ge1xuICAgIGRvdyA6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveSA6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cbn07XG5cbmZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG59XG5cbmZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZZZWFyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3k7XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0V2VlayAoaW5wdXQpIHtcbiAgICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRJU09XZWVrIChpbnB1dCkge1xuICAgIHZhciB3ZWVrID0gd2Vla09mWWVhcih0aGlzLCAxLCA0KS53ZWVrO1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignZCcsIDAsICdkbycsICdkYXknKTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5c01pbih0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzU2hvcnQodGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZGRkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXModGhpcywgZm9ybWF0KTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignZScsIDAsIDAsICd3ZWVrZGF5Jyk7XG5hZGRGb3JtYXRUb2tlbignRScsIDAsIDAsICdpc29XZWVrZGF5Jyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXknLCAnZCcpO1xuYWRkVW5pdEFsaWFzKCd3ZWVrZGF5JywgJ2UnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2Vla2RheScsICdFJyk7XG5cbi8vIFBSSU9SSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2RheScsIDExKTtcbmFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla2RheScsIDExKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdkJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2UnLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignRScsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdkZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xufSk7XG5hZGRSZWdleFRva2VuKCdkZGRkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydkZCcsICdkZGQnLCAnZGRkZCddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XG4gICAgLy8gaWYgd2UgZGlkbid0IGdldCBhIHdlZWtkYXkgbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkXG4gICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICB3ZWVrLmQgPSB3ZWVrZGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gaW5wdXQ7XG4gICAgfVxufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQsIGxvY2FsZSkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBpZiAoIWlzTmFOKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICB9XG5cbiAgICBpbnB1dCA9IGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KSAlIDcgfHwgNztcbiAgICB9XG4gICAgcmV0dXJuIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbn1cblxuLy8gTE9DQUxFU1xuXG52YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzID0gJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpO1xuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXMgKG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl93ZWVrZGF5cykgPyB0aGlzLl93ZWVrZGF5cyA6XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1snc3RhbmRhbG9uZSddO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl93ZWVrZGF5cykgPyB0aGlzLl93ZWVrZGF5c1ttLmRheSgpXSA6XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzW3RoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnXVttLmRheSgpXTtcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0ID0gJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKTtcbmZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzU2hvcnQgKG0pIHtcbiAgICByZXR1cm4gKG0pID8gdGhpcy5fd2Vla2RheXNTaG9ydFttLmRheSgpXSA6IHRoaXMuX3dlZWtkYXlzU2hvcnQ7XG59XG5cbnZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyk7XG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5c01pbiAobSkge1xuICAgIHJldHVybiAobSkgPyB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXSA6IHRoaXMuX3dlZWtkYXlzTWluO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdHJpY3RQYXJzZSQxKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBpaSwgbW9tLCBsbGMgPSB3ZWVrZGF5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJpY3QpIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzUGFyc2UgKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgIHZhciBpLCBtb20sIHJlZ2V4O1xuXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UkMS5jYWxsKHRoaXMsIHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuXG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJykucmVwbGFjZSgnLicsICdcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFwuPycpICsgJyQnLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKSArICd8XicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkJyAmJiB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZCcgJiYgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXREYXlPZldlZWsgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuICAgIHZhciBkYXkgPSB0aGlzLl9pc1VUQyA/IHRoaXMuX2QuZ2V0VVRDRGF5KCkgOiB0aGlzLl9kLmdldERheSgpO1xuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpbnB1dCAtIGRheSwgJ2QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrIChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICB2YXIgd2Vla2RheSA9ICh0aGlzLmRheSgpICsgNyAtIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdykgJSA3O1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2Vla2RheSA6IHRoaXMuYWRkKGlucHV0IC0gd2Vla2RheSwgJ2QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0SVNPRGF5T2ZXZWVrIChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cblxuICAgIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcbiAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cblxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIHZhciB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IHdlZWtkYXkgOiB3ZWVrZGF5IC0gNyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCkgfHwgNztcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0V2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcbmZ1bmN0aW9uIHdlZWtkYXlzUmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcbmZ1bmN0aW9uIHdlZWtkYXlzU2hvcnRSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IGRlZmF1bHRXZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgfVxufVxuXG52YXIgZGVmYXVsdFdlZWtkYXlzTWluUmVnZXggPSBtYXRjaFdvcmQ7XG5mdW5jdGlvbiB3ZWVrZGF5c01pblJlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IGRlZmF1bHRXZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjb21wdXRlV2Vla2RheXNQYXJzZSAoKSB7XG4gICAgZnVuY3Rpb24gY21wTGVuUmV2KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgfVxuXG4gICAgdmFyIG1pblBpZWNlcyA9IFtdLCBzaG9ydFBpZWNlcyA9IFtdLCBsb25nUGllY2VzID0gW10sIG1peGVkUGllY2VzID0gW10sXG4gICAgICAgIGksIG1vbSwgbWlucCwgc2hvcnRwLCBsb25ncDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgIG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICBzaG9ydHAgPSB0aGlzLndlZWtkYXlzU2hvcnQobW9tLCAnJyk7XG4gICAgICAgIGxvbmdwID0gdGhpcy53ZWVrZGF5cyhtb20sICcnKTtcbiAgICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XG4gICAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxuICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcblxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1pblBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gaEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG59XG5cbmZ1bmN0aW9uIGtGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcbn1cblxuYWRkRm9ybWF0VG9rZW4oJ0gnLCBbJ0hIJywgMl0sIDAsICdob3VyJyk7XG5hZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyXSwgMCwgaEZvcm1hdCk7XG5hZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyXSwgMCwga0Zvcm1hdCk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnJyArIHRoaXMuaG91cnMoKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tc3MnLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgdGhpcy5ob3VycygpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpO1xufSk7XG5cbmZ1bmN0aW9uIG1lcmlkaWVtICh0b2tlbiwgbG93ZXJjYXNlKSB7XG4gICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIGxvd2VyY2FzZSk7XG4gICAgfSk7XG59XG5cbm1lcmlkaWVtKCdhJywgdHJ1ZSk7XG5tZXJpZGllbSgnQScsIGZhbHNlKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2hvdXInLCAnaCcpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdob3VyJywgMTMpO1xuXG4vLyBQQVJTSU5HXG5cbmZ1bmN0aW9uIG1hdGNoTWVyaWRpZW0gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLl9tZXJpZGllbVBhcnNlO1xufVxuXG5hZGRSZWdleFRva2VuKCdhJywgIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignQScsICBtYXRjaE1lcmlkaWVtKTtcbmFkZFJlZ2V4VG9rZW4oJ0gnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2gnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2snLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdraycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuYWRkUmVnZXhUb2tlbignaG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbScsIG1hdGNoM3RvNCk7XG5hZGRSZWdleFRva2VuKCdIbW1zcycsIG1hdGNoNXRvNik7XG5cbmFkZFBhcnNlVG9rZW4oWydIJywgJ0hIJ10sIEhPVVIpO1xuYWRkUGFyc2VUb2tlbihbJ2snLCAna2snXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIGtJbnB1dCA9IHRvSW50KGlucHV0KTtcbiAgICBhcnJheVtIT1VSXSA9IGtJbnB1dCA9PT0gMjQgPyAwIDoga0lucHV0O1xufSk7XG5hZGRQYXJzZVRva2VuKFsnYScsICdBJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xuICAgIGNvbmZpZy5fbWVyaWRpZW0gPSBpbnB1dDtcbn0pO1xuYWRkUGFyc2VUb2tlbihbJ2gnLCAnaGgnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ2htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgIHZhciBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ0htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICAgIHZhciBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG59KTtcblxuLy8gTE9DQUxFU1xuXG5mdW5jdGlvbiBsb2NhbGVJc1BNIChpbnB1dCkge1xuICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cbiAgICByZXR1cm4gKChpbnB1dCArICcnKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnKTtcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlID0gL1thcF1cXC4/bT9cXC4/L2k7XG5mdW5jdGlvbiBsb2NhbGVNZXJpZGllbSAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICBpZiAoaG91cnMgPiAxMSkge1xuICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XG4gICAgfVxufVxuXG5cbi8vIE1PTUVOVFNcblxuLy8gU2V0dGluZyB0aGUgaG91ciBzaG91bGQga2VlcCB0aGUgdGltZSwgYmVjYXVzZSB0aGUgdXNlciBleHBsaWNpdGx5XG4vLyBzcGVjaWZpZWQgd2hpY2ggaG91ciBoZSB3YW50cy4gU28gdHJ5aW5nIHRvIG1haW50YWluIHRoZSBzYW1lIGhvdXIgKGluXG4vLyBhIG5ldyB0aW1lem9uZSkgbWFrZXMgc2Vuc2UuIEFkZGluZy9zdWJ0cmFjdGluZyBob3VycyBkb2VzIG5vdCBmb2xsb3dcbi8vIHRoaXMgcnVsZS5cbnZhciBnZXRTZXRIb3VyID0gbWFrZUdldFNldCgnSG91cnMnLCB0cnVlKTtcblxuLy8gbW9udGhzXG4vLyB3ZWVrXG4vLyB3ZWVrZGF5c1xuLy8gbWVyaWRpZW1cbnZhciBiYXNlQ29uZmlnID0ge1xuICAgIGNhbGVuZGFyOiBkZWZhdWx0Q2FsZW5kYXIsXG4gICAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcbiAgICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxuICAgIG9yZGluYWw6IGRlZmF1bHRPcmRpbmFsLFxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxuICAgIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcblxuICAgIG1vbnRoczogZGVmYXVsdExvY2FsZU1vbnRocyxcbiAgICBtb250aHNTaG9ydDogZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxuXG4gICAgd2VlazogZGVmYXVsdExvY2FsZVdlZWssXG5cbiAgICB3ZWVrZGF5czogZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICAgIHdlZWtkYXlzTWluOiBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXG4gICAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXG5cbiAgICBtZXJpZGllbVBhcnNlOiBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZVxufTtcblxuLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xudmFyIGxvY2FsZXMgPSB7fTtcbnZhciBsb2NhbGVGYW1pbGllcyA9IHt9O1xudmFyIGdsb2JhbExvY2FsZTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xuICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbn1cblxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuLy8gc3Vic3RyaW5nIGZyb20gbW9zdCBzcGVjaWZpYyB0byBsZWFzdCwgYnV0IG1vdmUgdG8gdGhlIG5leHQgYXJyYXkgaXRlbSBpZiBpdCdzIGEgbW9yZSBzcGVjaWZpYyB2YXJpYW50IHRoYW4gdGhlIGN1cnJlbnQgcm9vdFxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzKSB7XG4gICAgdmFyIGkgPSAwLCBqLCBuZXh0LCBsb2NhbGUsIHNwbGl0O1xuXG4gICAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XG4gICAgICAgIGogPSBzcGxpdC5sZW5ndGg7XG4gICAgICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICAgICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xuICAgICAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xuICAgICAgICAgICAgICAgIC8vdGhlIG5leHQgYXJyYXkgaXRlbSBpcyBiZXR0ZXIgdGhhbiBhIHNoYWxsb3dlciBzdWJzdHJpbmcgb2YgdGhpcyBvbmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBsb2FkTG9jYWxlKG5hbWUpIHtcbiAgICB2YXIgb2xkTG9jYWxlID0gbnVsbDtcbiAgICAvLyBUT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byByZWdpc3RlciBhbmQgbG9hZCBhbGwgdGhlIGxvY2FsZXMgaW4gTm9kZVxuICAgIGlmICghbG9jYWxlc1tuYW1lXSAmJiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmXG4gICAgICAgICAgICBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICAgICAgICAgIHZhciBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xuICAgICAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4vLyBsb2NhbGUga2V5LlxuZnVuY3Rpb24gZ2V0U2V0R2xvYmFsTG9jYWxlIChrZXksIHZhbHVlcykge1xuICAgIHZhciBkYXRhO1xuICAgIGlmIChrZXkpIHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIG1vbWVudC5kdXJhdGlvbi5fbG9jYWxlID0gbW9tZW50Ll9sb2NhbGUgPSBkYXRhO1xuICAgICAgICAgICAgZ2xvYmFsTG9jYWxlID0gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBnbG9iYWxMb2NhbGUuX2FiYnI7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUxvY2FsZSAobmFtZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgY29uZmlnLmFiYnIgPSBuYW1lO1xuICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUoJ2RlZmluZUxvY2FsZU92ZXJyaWRlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3VzZSBtb21lbnQudXBkYXRlTG9jYWxlKGxvY2FsZU5hbWUsIGNvbmZpZykgdG8gY2hhbmdlICcgK1xuICAgICAgICAgICAgICAgICAgICAnYW4gZXhpc3RpbmcgbG9jYWxlLiBtb21lbnQuZGVmaW5lTG9jYWxlKGxvY2FsZU5hbWUsICcgK1xuICAgICAgICAgICAgICAgICAgICAnY29uZmlnKSBzaG91bGQgb25seSBiZSB1c2VkIGZvciBjcmVhdGluZyBhIG5ldyBsb2NhbGUgJyArXG4gICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kZWZpbmUtbG9jYWxlLyBmb3IgbW9yZSBpbmZvLicpO1xuICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tuYW1lXS5fY29uZmlnO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5wYXJlbnRMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBjb25maWdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbGVzW25hbWVdID0gbmV3IExvY2FsZShtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpKTtcblxuICAgICAgICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gICAgICAgIC8vIGNyZWF0ZWQsIHNvIHdlIHdvbid0IGVuZCB1cCB3aXRoIHRoZSBjaGlsZCBsb2NhbGUgc2V0LlxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG5cblxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcbiAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxlKG5hbWUsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICB2YXIgbG9jYWxlLCB0bXBMb2NhbGUsIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgICAgIC8vIE1FUkdFXG4gICAgICAgIHRtcExvY2FsZSA9IGxvYWRMb2NhbGUobmFtZSk7XG4gICAgICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gdG1wTG9jYWxlLl9jb25maWc7XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgbG9jYWxlID0gbmV3IExvY2FsZShjb25maWcpO1xuICAgICAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZTtcblxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbn1cblxuLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxuZnVuY3Rpb24gZ2V0TG9jYWxlIChrZXkpIHtcbiAgICB2YXIgbG9jYWxlO1xuXG4gICAgaWYgKGtleSAmJiBrZXkuX2xvY2FsZSAmJiBrZXkuX2xvY2FsZS5fYWJicikge1xuICAgICAgICBrZXkgPSBrZXkuX2xvY2FsZS5fYWJicjtcbiAgICB9XG5cbiAgICBpZiAoIWtleSkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xuICAgIH1cblxuICAgIGlmICghaXNBcnJheShrZXkpKSB7XG4gICAgICAgIC8vc2hvcnQtY2lyY3VpdCBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xuICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBjaG9vc2VMb2NhbGUoa2V5KTtcbn1cblxuZnVuY3Rpb24gbGlzdExvY2FsZXMoKSB7XG4gICAgcmV0dXJuIGtleXMobG9jYWxlcyk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3cgKG0pIHtcbiAgICB2YXIgb3ZlcmZsb3c7XG4gICAgdmFyIGEgPSBtLl9hO1xuXG4gICAgaWYgKGEgJiYgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICBvdmVyZmxvdyA9XG4gICAgICAgICAgICBhW01PTlRIXSAgICAgICA8IDAgfHwgYVtNT05USF0gICAgICAgPiAxMSAgPyBNT05USCA6XG4gICAgICAgICAgICBhW0RBVEVdICAgICAgICA8IDEgfHwgYVtEQVRFXSAgICAgICAgPiBkYXlzSW5Nb250aChhW1lFQVJdLCBhW01PTlRIXSkgPyBEQVRFIDpcbiAgICAgICAgICAgIGFbSE9VUl0gICAgICAgIDwgMCB8fCBhW0hPVVJdICAgICAgICA+IDI0IHx8IChhW0hPVVJdID09PSAyNCAmJiAoYVtNSU5VVEVdICE9PSAwIHx8IGFbU0VDT05EXSAhPT0gMCB8fCBhW01JTExJU0VDT05EXSAhPT0gMCkpID8gSE9VUiA6XG4gICAgICAgICAgICBhW01JTlVURV0gICAgICA8IDAgfHwgYVtNSU5VVEVdICAgICAgPiA1OSAgPyBNSU5VVEUgOlxuICAgICAgICAgICAgYVtTRUNPTkRdICAgICAgPCAwIHx8IGFbU0VDT05EXSAgICAgID4gNTkgID8gU0VDT05EIDpcbiAgICAgICAgICAgIGFbTUlMTElTRUNPTkRdIDwgMCB8fCBhW01JTExJU0VDT05EXSA+IDk5OSA/IE1JTExJU0VDT05EIDpcbiAgICAgICAgICAgIC0xO1xuXG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93RGF5T2ZZZWFyICYmIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MobSkuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgcmV0dXJuIG07XG59XG5cbi8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbmZ1bmN0aW9uIGRlZmF1bHRzKGEsIGIsIGMpIHtcbiAgICBpZiAoYSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoYiAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gY3VycmVudERhdGVBcnJheShjb25maWcpIHtcbiAgICAvLyBob29rcyBpcyBhY3R1YWxseSB0aGUgZXhwb3J0ZWQgbW9tZW50IG9iamVjdFxuICAgIHZhciBub3dWYWx1ZSA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICBpZiAoY29uZmlnLl91c2VVVEMpIHtcbiAgICAgICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRVVENNb250aCgpLCBub3dWYWx1ZS5nZXRVVENEYXRlKCldO1xuICAgIH1cbiAgICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxuLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbi8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXG5mdW5jdGlvbiBjb25maWdGcm9tQXJyYXkgKGNvbmZpZykge1xuICAgIHZhciBpLCBkYXRlLCBpbnB1dCA9IFtdLCBjdXJyZW50RGF0ZSwgZXhwZWN0ZWRXZWVrZGF5LCB5ZWFyVG9Vc2U7XG5cbiAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcblxuICAgIC8vY29tcHV0ZSBkYXkgb2YgdGhlIHllYXIgZnJvbSB3ZWVrcyBhbmQgd2Vla2RheXNcbiAgICBpZiAoY29uZmlnLl93ICYmIGNvbmZpZy5fYVtEQVRFXSA9PSBudWxsICYmIGNvbmZpZy5fYVtNT05USF0gPT0gbnVsbCkge1xuICAgICAgICBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKTtcbiAgICB9XG5cbiAgICAvL2lmIHRoZSBkYXkgb2YgdGhlIHllYXIgaXMgc2V0LCBmaWd1cmUgb3V0IHdoYXQgaXQgaXNcbiAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgIT0gbnVsbCkge1xuICAgICAgICB5ZWFyVG9Vc2UgPSBkZWZhdWx0cyhjb25maWcuX2FbWUVBUl0sIGN1cnJlbnREYXRlW1lFQVJdKTtcblxuICAgICAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXJUb1VzZSkgfHwgY29uZmlnLl9kYXlPZlllYXIgPT09IDApIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZSh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKTtcbiAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gICAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxuICAgIC8vICogaWYgZGF5IG9mIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG1vbnRoIGFuZCB5ZWFyXG4gICAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgMyAmJiBjb25maWcuX2FbaV0gPT0gbnVsbDsgKytpKSB7XG4gICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gICAgfVxuXG4gICAgLy8gWmVybyBvdXQgd2hhdGV2ZXIgd2FzIG5vdCBkZWZhdWx0ZWQsIGluY2x1ZGluZyB0aW1lXG4gICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSAoY29uZmlnLl9hW2ldID09IG51bGwpID8gKGkgPT09IDIgPyAxIDogMCkgOiBjb25maWcuX2FbaV07XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIDI0OjAwOjAwLjAwMFxuICAgIGlmIChjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICBjb25maWcuX2FbTUlOVVRFXSA9PT0gMCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDApIHtcbiAgICAgICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgICB9XG5cbiAgICBjb25maWcuX2QgPSAoY29uZmlnLl91c2VVVEMgPyBjcmVhdGVVVENEYXRlIDogY3JlYXRlRGF0ZSkuYXBwbHkobnVsbCwgaW5wdXQpO1xuICAgIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDID8gY29uZmlnLl9kLmdldFVUQ0RheSgpIDogY29uZmlnLl9kLmdldERheSgpO1xuXG4gICAgLy8gQXBwbHkgdGltZXpvbmUgb2Zmc2V0IGZyb20gaW5wdXQuIFRoZSBhY3R1YWwgdXRjT2Zmc2V0IGNhbiBiZSBjaGFuZ2VkXG4gICAgLy8gd2l0aCBwYXJzZVpvbmUuXG4gICAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xuICAgIGlmIChjb25maWcuX3cgJiYgdHlwZW9mIGNvbmZpZy5fdy5kICE9PSAndW5kZWZpbmVkJyAmJiBjb25maWcuX3cuZCAhPT0gZXhwZWN0ZWRXZWVrZGF5KSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKSB7XG4gICAgdmFyIHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93O1xuXG4gICAgdyA9IGNvbmZpZy5fdztcbiAgICBpZiAody5HRyAhPSBudWxsIHx8IHcuVyAhPSBudWxsIHx8IHcuRSAhPSBudWxsKSB7XG4gICAgICAgIGRvdyA9IDE7XG4gICAgICAgIGRveSA9IDQ7XG5cbiAgICAgICAgLy8gVE9ETzogV2UgbmVlZCB0byB0YWtlIHRoZSBjdXJyZW50IGlzb1dlZWtZZWFyLCBidXQgdGhhdCBkZXBlbmRzIG9uXG4gICAgICAgIC8vIGhvdyB3ZSBpbnRlcnByZXQgbm93IChsb2NhbCwgdXRjLCBmaXhlZCBvZmZzZXQpLiBTbyBjcmVhdGVcbiAgICAgICAgLy8gYSBub3cgdmVyc2lvbiBvZiBjdXJyZW50IGNvbmZpZyAodGFrZSBsb2NhbC91dGMvb2Zmc2V0IGZsYWdzLCBhbmRcbiAgICAgICAgLy8gY3JlYXRlIG5vdykuXG4gICAgICAgIHdlZWtZZWFyID0gZGVmYXVsdHMody5HRywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIDEsIDQpLnllYXIpO1xuICAgICAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcbiAgICAgICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XG4gICAgICAgIGlmICh3ZWVrZGF5IDwgMSB8fCB3ZWVrZGF5ID4gNykge1xuICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcbiAgICAgICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xuXG4gICAgICAgIHZhciBjdXJXZWVrID0gd2Vla09mWWVhcihjcmVhdGVMb2NhbCgpLCBkb3csIGRveSk7XG5cbiAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IHdlZWsuXG4gICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LncsIGN1cldlZWsud2Vlayk7XG5cbiAgICAgICAgaWYgKHcuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyB3ZWVrZGF5IC0tIGxvdyBkYXkgbnVtYmVycyBhcmUgY29uc2lkZXJlZCBuZXh0IHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IDAgfHwgd2Vla2RheSA+IDYpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHcuZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBsb2NhbCB3ZWVrZGF5IC0tIGNvdW50aW5nIHN0YXJ0cyBmcm9tIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgICAgICAgIHdlZWtkYXkgPSB3LmUgKyBkb3c7XG4gICAgICAgICAgICBpZiAody5lIDwgMCB8fCB3LmUgPiA2KSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IGRvdztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VlayA8IDEgfHwgd2VlayA+IHdlZWtzSW5ZZWFyKHdlZWtZZWFyLCBkb3csIGRveSkpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAod2Vla2RheU92ZXJmbG93ICE9IG51bGwpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICAgICAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XG4gICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdGVtcC5kYXlPZlllYXI7XG4gICAgfVxufVxuXG4vLyBpc28gODYwMSByZWdleFxuLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXG52YXIgZXh0ZW5kZWRJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcbnZhciBiYXNpY0lzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KSg/OlxcZFxcZFxcZFxcZHxXXFxkXFxkXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86XFxkXFxkKD86XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcblxudmFyIHR6UmVnZXggPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy87XG5cbnZhciBpc29EYXRlcyA9IFtcbiAgICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvXSxcbiAgICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXG4gICAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9L10sXG4gICAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXG4gICAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9L10sXG4gICAgWydZWVlZTU1ERCcsIC9cXGR7OH0vXSxcbiAgICAvLyBZWVlZTU0gaXMgTk9UIGFsbG93ZWQgYnkgdGhlIHN0YW5kYXJkXG4gICAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vXSxcbiAgICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxuICAgIFsnWVlZWURERCcsIC9cXGR7N30vXVxuXTtcblxuLy8gaXNvIHRpbWUgZm9ybWF0cyBhbmQgcmVnZXhlc1xudmFyIGlzb1RpbWVzID0gW1xuICAgIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcbiAgICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxuICAgIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcbiAgICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcbiAgICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXG4gICAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXG4gICAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxuICAgIFsnSEgnLCAvXFxkXFxkL11cbl07XG5cbnZhciBhc3BOZXRKc29uUmVnZXggPSAvXlxcLz9EYXRlXFwoKFxcLT9cXGQrKS9pO1xuXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuZnVuY3Rpb24gY29uZmlnRnJvbUlTTyhjb25maWcpIHtcbiAgICB2YXIgaSwgbCxcbiAgICAgICAgc3RyaW5nID0gY29uZmlnLl9pLFxuICAgICAgICBtYXRjaCA9IGV4dGVuZGVkSXNvUmVnZXguZXhlYyhzdHJpbmcpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhzdHJpbmcpLFxuICAgICAgICBhbGxvd1RpbWUsIGRhdGVGb3JtYXQsIHRpbWVGb3JtYXQsIHR6Rm9ybWF0O1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IGlzb0RhdGVzW2ldWzBdO1xuICAgICAgICAgICAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbM10pIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhtYXRjaFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFs0XSkge1xuICAgICAgICAgICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgICAgICAgICAgICB0ekZvcm1hdCA9ICdaJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBSRkMgMjgyMiByZWdleDogRm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI3NlY3Rpb24tMy4zXG52YXIgcmZjMjgyMiA9IC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksP1xccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoWystXVxcZHs0fSkpJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MoeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gW1xuICAgICAgICB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSxcbiAgICAgICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpLFxuICAgICAgICBwYXJzZUludChkYXlTdHIsIDEwKSxcbiAgICAgICAgcGFyc2VJbnQoaG91clN0ciwgMTApLFxuICAgICAgICBwYXJzZUludChtaW51dGVTdHIsIDEwKVxuICAgIF07XG5cbiAgICBpZiAoc2Vjb25kU3RyKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlSW50KHNlY29uZFN0ciwgMTApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSB7XG4gICAgdmFyIHllYXIgPSBwYXJzZUludCh5ZWFyU3RyLCAxMCk7XG4gICAgaWYgKHllYXIgPD0gNDkpIHtcbiAgICAgICAgcmV0dXJuIDIwMDAgKyB5ZWFyO1xuICAgIH0gZWxzZSBpZiAoeWVhciA8PSA5OTkpIHtcbiAgICAgICAgcmV0dXJuIDE5MDAgKyB5ZWFyO1xuICAgIH1cbiAgICByZXR1cm4geWVhcjtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAgIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgJyAnKS5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyLCBwYXJzZWRJbnB1dCwgY29uZmlnKSB7XG4gICAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICAgICAgLy8gVE9ETzogUmVwbGFjZSB0aGUgdmFuaWxsYSBKUyBEYXRlIG9iamVjdCB3aXRoIGFuIGluZGVwZW50ZW50IGRheS1vZi13ZWVrIGNoZWNrLlxuICAgICAgICB2YXIgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKSxcbiAgICAgICAgICAgIHdlZWtkYXlBY3R1YWwgPSBuZXcgRGF0ZShwYXJzZWRJbnB1dFswXSwgcGFyc2VkSW5wdXRbMV0sIHBhcnNlZElucHV0WzJdKS5nZXREYXkoKTtcbiAgICAgICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG52YXIgb2JzT2Zmc2V0cyA9IHtcbiAgICBVVDogMCxcbiAgICBHTVQ6IDAsXG4gICAgRURUOiAtNCAqIDYwLFxuICAgIEVTVDogLTUgKiA2MCxcbiAgICBDRFQ6IC01ICogNjAsXG4gICAgQ1NUOiAtNiAqIDYwLFxuICAgIE1EVDogLTYgKiA2MCxcbiAgICBNU1Q6IC03ICogNjAsXG4gICAgUERUOiAtNyAqIDYwLFxuICAgIFBTVDogLTggKiA2MFxufTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KG9ic09mZnNldCwgbWlsaXRhcnlPZmZzZXQsIG51bU9mZnNldCkge1xuICAgIGlmIChvYnNPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgICB9IGVsc2UgaWYgKG1pbGl0YXJ5T2Zmc2V0KSB7XG4gICAgICAgIC8vIHRoZSBvbmx5IGFsbG93ZWQgbWlsaXRhcnkgdHogaXMgWlxuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaG0gPSBwYXJzZUludChudW1PZmZzZXQsIDEwKTtcbiAgICAgICAgdmFyIG0gPSBobSAlIDEwMCwgaCA9IChobSAtIG0pIC8gMTAwO1xuICAgICAgICByZXR1cm4gaCAqIDYwICsgbTtcbiAgICB9XG59XG5cbi8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZykge1xuICAgIHZhciBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIHBhcnNlZEFycmF5ID0gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhtYXRjaFs0XSwgbWF0Y2hbM10sIG1hdGNoWzJdLCBtYXRjaFs1XSwgbWF0Y2hbNl0sIG1hdGNoWzddKTtcbiAgICAgICAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuX2EgPSBwYXJzZWRBcnJheTtcbiAgICAgICAgY29uZmlnLl90em0gPSBjYWxjdWxhdGVPZmZzZXQobWF0Y2hbOF0sIG1hdGNoWzldLCBtYXRjaFsxMF0pO1xuXG4gICAgICAgIGNvbmZpZy5fZCA9IGNyZWF0ZVVUQ0RhdGUuYXBwbHkobnVsbCwgY29uZmlnLl9hKTtcbiAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5yZmMyODIyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXG5mdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nKGNvbmZpZykge1xuICAgIHZhciBtYXRjaGVkID0gYXNwTmV0SnNvblJlZ2V4LmV4ZWMoY29uZmlnLl9pKTtcblxuICAgIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCttYXRjaGVkWzFdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpbmFsIGF0dGVtcHQsIHVzZSBJbnB1dCBGYWxsYmFja1xuICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG59XG5cbmhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxuICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4gICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIFJGQzI4MjIvSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXG4gICAgJ2Rpc2NvdXJhZ2VkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHJlZmVyIHRvICcgK1xuICAgICdodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvIGZvciBtb3JlIGluZm8uJyxcbiAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XG4gICAgfVxuKTtcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuaG9va3MuSVNPXzg2MDEgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cbmhvb2tzLlJGQ18yODIyID0gZnVuY3Rpb24gKCkge307XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5JU09fODYwMSkge1xuICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuUkZDXzI4MjIpIHtcbiAgICAgICAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25maWcuX2EgPSBbXTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IHRydWU7XG5cbiAgICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxuICAgIHZhciBzdHJpbmcgPSAnJyArIGNvbmZpZy5faSxcbiAgICAgICAgaSwgcGFyc2VkSW5wdXQsIHRva2VucywgdG9rZW4sIHNraXBwZWQsXG4gICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwO1xuXG4gICAgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHwgW10pWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCB0b2tlbiwgJ3BhcnNlZElucHV0JywgcGFyc2VkSW5wdXQsXG4gICAgICAgIC8vICAgICAgICAgJ3JlZ2V4JywgZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpKTtcbiAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2Uoc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoKTtcbiAgICAgICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cbiAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgICAgICAgaWYgKHBhcnNlZElucHV0KSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuX3N0cmljdCAmJiAhcGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5jaGFyc0xlZnRPdmVyID0gc3RyaW5nTGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChzdHJpbmcpO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXG4gICAgaWYgKGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXG4gICAgICAgIGNvbmZpZy5fYVtIT1VSXSA+IDApIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5wYXJzZWREYXRlUGFydHMgPSBjb25maWcuX2Euc2xpY2UoMCk7XG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykubWVyaWRpZW0gPSBjb25maWcuX21lcmlkaWVtO1xuICAgIC8vIGhhbmRsZSBtZXJpZGllbVxuICAgIGNvbmZpZy5fYVtIT1VSXSA9IG1lcmlkaWVtRml4V3JhcChjb25maWcuX2xvY2FsZSwgY29uZmlnLl9hW0hPVVJdLCBjb25maWcuX21lcmlkaWVtKTtcblxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcbn1cblxuXG5mdW5jdGlvbiBtZXJpZGllbUZpeFdyYXAgKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcbiAgICB2YXIgaXNQbTtcblxuICAgIGlmIChtZXJpZGllbSA9PSBudWxsKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxuICAgIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xuICAgIH0gZWxzZSBpZiAobG9jYWxlLmlzUE0gIT0gbnVsbCkge1xuICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xuICAgICAgICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcbiAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1BtICYmIGhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCBzdXBwb3NlZCB0byBoYXBwZW5cbiAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgfVxufVxuXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZykge1xuICAgIHZhciB0ZW1wQ29uZmlnLFxuICAgICAgICBiZXN0TW9tZW50LFxuXG4gICAgICAgIHNjb3JlVG9CZWF0LFxuICAgICAgICBpLFxuICAgICAgICBjdXJyZW50U2NvcmU7XG5cbiAgICBpZiAoY29uZmlnLl9mLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb25maWcuX2YubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3VycmVudFNjb3JlID0gMDtcbiAgICAgICAgdGVtcENvbmZpZyA9IGNvcHlDb25maWcoe30sIGNvbmZpZyk7XG4gICAgICAgIGlmIChjb25maWcuX3VzZVVUQyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcbiAgICAgICAgfVxuICAgICAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxuICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgIGlmIChzY29yZVRvQmVhdCA9PSBudWxsIHx8IGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XG4gICAgICAgICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcbiAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbn1cblxuZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLl9kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaSA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSk7XG4gICAgY29uZmlnLl9hID0gbWFwKFtpLnllYXIsIGkubW9udGgsIGkuZGF5IHx8IGkuZGF0ZSwgaS5ob3VyLCBpLm1pbnV0ZSwgaS5zZWNvbmQsIGkubWlsbGlzZWNvbmRdLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgfSk7XG5cbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyAoY29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpKTtcbiAgICBpZiAocmVzLl9uZXh0RGF5KSB7XG4gICAgICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgICAgICByZXMuYWRkKDEsICdkJyk7XG4gICAgICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ29uZmlnIChjb25maWcpIHtcbiAgICB2YXIgaW5wdXQgPSBjb25maWcuX2ksXG4gICAgICAgIGZvcm1hdCA9IGNvbmZpZy5fZjtcblxuICAgIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XG5cbiAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoe251bGxJbnB1dDogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xuICAgIH1cblxuICAgIGlmIChpc01vbWVudChpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhpbnB1dCkpO1xuICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2QgPSBpbnB1dDtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdCkge1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgfSAgZWxzZSB7XG4gICAgICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gY29uZmlnRnJvbUlucHV0KGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faTtcbiAgICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQudmFsdWVPZigpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9hID0gbWFwKGlucHV0LnNsaWNlKDApLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCwgaXNVVEMpIHtcbiAgICB2YXIgYyA9IHt9O1xuXG4gICAgaWYgKGxvY2FsZSA9PT0gdHJ1ZSB8fCBsb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHN0cmljdCA9IGxvY2FsZTtcbiAgICAgICAgbG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICgoaXNPYmplY3QoaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoaW5wdXQpKSB8fFxuICAgICAgICAgICAgKGlzQXJyYXkoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgaW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXG4gICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICBjLl91c2VVVEMgPSBjLl9pc1VUQyA9IGlzVVRDO1xuICAgIGMuX2wgPSBsb2NhbGU7XG4gICAgYy5faSA9IGlucHV0O1xuICAgIGMuX2YgPSBmb3JtYXQ7XG4gICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xuXG4gICAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoYyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsIChpbnB1dCwgZm9ybWF0LCBsb2NhbGUsIHN0cmljdCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBmYWxzZSk7XG59XG5cbnZhciBwcm90b3R5cGVNaW4gPSBkZXByZWNhdGUoXG4gICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvdGhlciA8IHRoaXMgPyB0aGlzIDogb3RoZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxudmFyIHByb3RvdHlwZU1heCA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50KCkubWF4IGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWluIGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG90aGVyID4gdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG4vLyBQaWNrIGEgbW9tZW50IG0gZnJvbSBtb21lbnRzIHNvIHRoYXQgbVtmbl0ob3RoZXIpIGlzIHRydWUgZm9yIGFsbFxuLy8gb3RoZXIuIFRoaXMgcmVsaWVzIG9uIHRoZSBmdW5jdGlvbiBmbiB0byBiZSB0cmFuc2l0aXZlLlxuLy9cbi8vIG1vbWVudHMgc2hvdWxkIGVpdGhlciBiZSBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cyBvciBhbiBhcnJheSwgd2hvc2Vcbi8vIGZpcnN0IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMuXG5mdW5jdGlvbiBwaWNrQnkoZm4sIG1vbWVudHMpIHtcbiAgICB2YXIgcmVzLCBpO1xuICAgIGlmIChtb21lbnRzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG1vbWVudHNbMF0pKSB7XG4gICAgICAgIG1vbWVudHMgPSBtb21lbnRzWzBdO1xuICAgIH1cbiAgICBpZiAoIW1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVMb2NhbCgpO1xuICAgIH1cbiAgICByZXMgPSBtb21lbnRzWzBdO1xuICAgIGZvciAoaSA9IDE7IGkgPCBtb21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgICAgICAgICAgcmVzID0gbW9tZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBUT0RPOiBVc2UgW10uc29ydCBpbnN0ZWFkP1xuZnVuY3Rpb24gbWluICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHJldHVybiBwaWNrQnkoJ2lzQmVmb3JlJywgYXJncyk7XG59XG5cbmZ1bmN0aW9uIG1heCAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICByZXR1cm4gcGlja0J5KCdpc0FmdGVyJywgYXJncyk7XG59XG5cbnZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIERhdGUubm93ID8gRGF0ZS5ub3coKSA6ICsobmV3IERhdGUoKSk7XG59O1xuXG52YXIgb3JkZXJpbmcgPSBbJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCAnbWlsbGlzZWNvbmQnXTtcblxuZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKG0pIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbSkge1xuICAgICAgICBpZiAoIShpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmIChtW2tleV0gPT0gbnVsbCB8fCAhaXNOYU4obVtrZXldKSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdW5pdEhhc0RlY2ltYWwgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZGVyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChtW29yZGVyaW5nW2ldXSkge1xuICAgICAgICAgICAgaWYgKHVuaXRIYXNEZWNpbWFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQobVtvcmRlcmluZ1tpXV0pICE9PSB0b0ludChtW29yZGVyaW5nW2ldXSkpIHtcbiAgICAgICAgICAgICAgICB1bml0SGFzRGVjaW1hbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZCQxKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnZhbGlkJDEoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XG59XG5cbmZ1bmN0aW9uIER1cmF0aW9uIChkdXJhdGlvbikge1xuICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXG4gICAgICAgIHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMCxcbiAgICAgICAgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwLFxuICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcbiAgICAgICAgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwLFxuICAgICAgICBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwLFxuICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXG4gICAgICAgIG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlIHx8IDAsXG4gICAgICAgIHNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQuc2Vjb25kIHx8IDAsXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xuXG4gICAgdGhpcy5faXNWYWxpZCA9IGlzRHVyYXRpb25WYWxpZChub3JtYWxpemVkSW5wdXQpO1xuXG4gICAgLy8gcmVwcmVzZW50YXRpb24gZm9yIGRhdGVBZGRSZW1vdmVcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSArbWlsbGlzZWNvbmRzICtcbiAgICAgICAgc2Vjb25kcyAqIDFlMyArIC8vIDEwMDBcbiAgICAgICAgbWludXRlcyAqIDZlNCArIC8vIDEwMDAgKiA2MFxuICAgICAgICBob3VycyAqIDEwMDAgKiA2MCAqIDYwOyAvL3VzaW5nIDEwMDAgKiA2MCAqIDYwIGluc3RlYWQgb2YgMzZlNSB0byBhdm9pZCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzI5NzhcbiAgICAvLyBCZWNhdXNlIG9mIGRhdGVBZGRSZW1vdmUgdHJlYXRzIDI0IGhvdXJzIGFzIGRpZmZlcmVudCBmcm9tIGFcbiAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XG4gICAgdGhpcy5fZGF5cyA9ICtkYXlzICtcbiAgICAgICAgd2Vla3MgKiA3O1xuICAgIC8vIEl0IGlzIGltcG9zc2libGUgdG8gdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXG4gICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAvLyBpdCBzZXBhcmF0ZWx5LlxuICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgK1xuICAgICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgICB5ZWFycyAqIDEyO1xuXG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKCk7XG5cbiAgICB0aGlzLl9idWJibGUoKTtcbn1cblxuZnVuY3Rpb24gaXNEdXJhdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xufVxuXG5mdW5jdGlvbiBhYnNSb3VuZCAobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoLTEgKiBudW1iZXIpICogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICB9XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuZnVuY3Rpb24gb2Zmc2V0ICh0b2tlbiwgc2VwYXJhdG9yKSB7XG4gICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMudXRjT2Zmc2V0KCk7XG4gICAgICAgIHZhciBzaWduID0gJysnO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gLW9mZnNldDtcbiAgICAgICAgICAgIHNpZ24gPSAnLSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpZ24gKyB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICsgc2VwYXJhdG9yICsgemVyb0ZpbGwofn4ob2Zmc2V0KSAlIDYwLCAyKTtcbiAgICB9KTtcbn1cblxub2Zmc2V0KCdaJywgJzonKTtcbm9mZnNldCgnWlonLCAnJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignWicsICBtYXRjaFNob3J0T2Zmc2V0KTtcbmFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XG5hZGRQYXJzZVRva2VuKFsnWicsICdaWiddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgY29uZmlnLl90em0gPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIHRpbWV6b25lIGNodW5rZXJcbi8vICcrMTA6MDAnID4gWycxMCcsICAnMDAnXVxuLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXG52YXIgY2h1bmtPZmZzZXQgPSAvKFtcXCtcXC1dfFxcZFxcZCkvZ2k7XG5cbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlciwgc3RyaW5nKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoc3RyaW5nIHx8ICcnKS5tYXRjaChtYXRjaGVyKTtcblxuICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBjaHVuayAgID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdIHx8IFtdO1xuICAgIHZhciBwYXJ0cyAgID0gKGNodW5rICsgJycpLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAwLCAwXTtcbiAgICB2YXIgbWludXRlcyA9ICsocGFydHNbMV0gKiA2MCkgKyB0b0ludChwYXJ0c1syXSk7XG5cbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCA/XG4gICAgICAwIDpcbiAgICAgIHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG59XG5cbi8vIFJldHVybiBhIG1vbWVudCBmcm9tIGlucHV0LCB0aGF0IGlzIGxvY2FsL3V0Yy96b25lIGVxdWl2YWxlbnQgdG8gbW9kZWwuXG5mdW5jdGlvbiBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIG1vZGVsKSB7XG4gICAgdmFyIHJlcywgZGlmZjtcbiAgICBpZiAobW9kZWwuX2lzVVRDKSB7XG4gICAgICAgIHJlcyA9IG1vZGVsLmNsb25lKCk7XG4gICAgICAgIGRpZmYgPSAoaXNNb21lbnQoaW5wdXQpIHx8IGlzRGF0ZShpbnB1dCkgPyBpbnB1dC52YWx1ZU9mKCkgOiBjcmVhdGVMb2NhbChpbnB1dCkudmFsdWVPZigpKSAtIHJlcy52YWx1ZU9mKCk7XG4gICAgICAgIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cbiAgICAgICAgcmVzLl9kLnNldFRpbWUocmVzLl9kLnZhbHVlT2YoKSArIGRpZmYpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0KS5sb2NhbCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZU9mZnNldCAobSkge1xuICAgIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXG4gICAgcmV0dXJuIC1NYXRoLnJvdW5kKG0uX2QuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xufVxuXG4vLyBIT09LU1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIGEgbW9tZW50IGlzIG11dGF0ZWQuXG4vLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cbmhvb2tzLnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBNT01FTlRTXG5cbi8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxuLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cbi8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcbi8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbi8vXG4vLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcbi8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxuLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXG4vLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuZnVuY3Rpb24gZ2V0U2V0T2Zmc2V0IChpbnB1dCwga2VlcExvY2FsVGltZSwga2VlcE1pbnV0ZXMpIHtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fb2Zmc2V0IHx8IDAsXG4gICAgICAgIGxvY2FsQWRqdXN0O1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgIH1cbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaW5wdXQgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIGlucHV0KTtcbiAgICAgICAgICAgIGlmIChpbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGlucHV0KSA8IDE2ICYmICFrZWVwTWludXRlcykge1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dCAqIDYwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgbG9jYWxBZGp1c3QgPSBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29mZnNldCA9IGlucHV0O1xuICAgICAgICB0aGlzLl9pc1VUQyA9IHRydWU7XG4gICAgICAgIGlmIChsb2NhbEFkanVzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChsb2NhbEFkanVzdCwgJ20nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2Zmc2V0ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgaWYgKCFrZWVwTG9jYWxUaW1lIHx8IHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBhZGRTdWJ0cmFjdCh0aGlzLCBjcmVhdGVEdXJhdGlvbihpbnB1dCAtIG9mZnNldCwgJ20nKSwgMSwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyBvZmZzZXQgOiBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2V0Wm9uZSAoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcbiAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaW5wdXQgPSAtaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnV0Y09mZnNldChpbnB1dCwga2VlcExvY2FsVGltZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC10aGlzLnV0Y09mZnNldCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0VG9VVEMgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICByZXR1cm4gdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldFRvTG9jYWwgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XG4gICAgICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQgKCkge1xuICAgIGlmICh0aGlzLl90em0gIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnV0Y09mZnNldCh0aGlzLl90em0sIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9pID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCB0aGlzLl9pKTtcbiAgICAgICAgaWYgKHRab25lICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KHRab25lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBoYXNBbGlnbmVkSG91ck9mZnNldCAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaW5wdXQgPSBpbnB1dCA/IGNyZWF0ZUxvY2FsKGlucHV0KS51dGNPZmZzZXQoKSA6IDA7XG5cbiAgICByZXR1cm4gKHRoaXMudXRjT2Zmc2V0KCkgLSBpbnB1dCkgJSA2MCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KCkgPiB0aGlzLmNsb25lKCkubW9udGgoMCkudXRjT2Zmc2V0KCkgfHxcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCg1KS51dGNPZmZzZXQoKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCAoKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG4gICAgfVxuXG4gICAgdmFyIGMgPSB7fTtcblxuICAgIGNvcHlDb25maWcoYywgdGhpcyk7XG4gICAgYyA9IHByZXBhcmVDb25maWcoYyk7XG5cbiAgICBpZiAoYy5fYSkge1xuICAgICAgICB2YXIgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xuICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSB0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pc0RTVFNoaWZ0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xufVxuXG5mdW5jdGlvbiBpc0xvY2FsICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVdGNPZmZzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVXRjICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDAgOiBmYWxzZTtcbn1cblxuLy8gQVNQLk5FVCBqc29uIGRhdGUgZm9ybWF0IHJlZ2V4XG52YXIgYXNwTmV0UmVnZXggPSAvXihcXC18XFwrKT8oPzooXFxkKilbLiBdKT8oXFxkKylcXDooXFxkKykoPzpcXDooXFxkKykoXFwuXFxkKik/KT8kLztcblxuLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbi8vIHNvbWV3aGF0IG1vcmUgaW4gbGluZSB3aXRoIDQuNC4zLjIgMjAwNCBzcGVjLCBidXQgYWxsb3dzIGRlY2ltYWwgYW55d2hlcmVcbi8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcbnZhciBpc29SZWdleCA9IC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XG5cbmZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uIChpbnB1dCwga2V5KSB7XG4gICAgdmFyIGR1cmF0aW9uID0gaW5wdXQsXG4gICAgICAgIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXG4gICAgICAgIG1hdGNoID0gbnVsbCxcbiAgICAgICAgc2lnbixcbiAgICAgICAgcmV0LFxuICAgICAgICBkaWZmUmVzO1xuXG4gICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgbXMgOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZCAgOiBpbnB1dC5fZGF5cyxcbiAgICAgICAgICAgIE0gIDogaW5wdXQuX21vbnRoc1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uW2tleV0gPSBpbnB1dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kcyA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICghIShtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xuICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIHkgIDogMCxcbiAgICAgICAgICAgIGQgIDogdG9JbnQobWF0Y2hbREFURV0pICAgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIGggIDogdG9JbnQobWF0Y2hbSE9VUl0pICAgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIG0gIDogdG9JbnQobWF0Y2hbTUlOVVRFXSkgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIHMgIDogdG9JbnQobWF0Y2hbU0VDT05EXSkgICAgICAgICAgICAgICAgICAgICAgICogc2lnbixcbiAgICAgICAgICAgIG1zIDogdG9JbnQoYWJzUm91bmQobWF0Y2hbTUlMTElTRUNPTkRdICogMTAwMCkpICogc2lnbiAvLyB0aGUgbWlsbGlzZWNvbmQgZGVjaW1hbCBwb2ludCBpcyBpbmNsdWRlZCBpbiB0aGUgbWF0Y2hcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gaXNvUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgIHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IChtYXRjaFsxXSA9PT0gJysnKSA/IDEgOiAxO1xuICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgIHkgOiBwYXJzZUlzbyhtYXRjaFsyXSwgc2lnbiksXG4gICAgICAgICAgICBNIDogcGFyc2VJc28obWF0Y2hbM10sIHNpZ24pLFxuICAgICAgICAgICAgdyA6IHBhcnNlSXNvKG1hdGNoWzRdLCBzaWduKSxcbiAgICAgICAgICAgIGQgOiBwYXJzZUlzbyhtYXRjaFs1XSwgc2lnbiksXG4gICAgICAgICAgICBoIDogcGFyc2VJc28obWF0Y2hbNl0sIHNpZ24pLFxuICAgICAgICAgICAgbSA6IHBhcnNlSXNvKG1hdGNoWzddLCBzaWduKSxcbiAgICAgICAgICAgIHMgOiBwYXJzZUlzbyhtYXRjaFs4XSwgc2lnbilcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGR1cmF0aW9uID09IG51bGwpIHsvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb24gPT09ICdvYmplY3QnICYmICgnZnJvbScgaW4gZHVyYXRpb24gfHwgJ3RvJyBpbiBkdXJhdGlvbikpIHtcbiAgICAgICAgZGlmZlJlcyA9IG1vbWVudHNEaWZmZXJlbmNlKGNyZWF0ZUxvY2FsKGR1cmF0aW9uLmZyb20pLCBjcmVhdGVMb2NhbChkdXJhdGlvbi50bykpO1xuXG4gICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgIGR1cmF0aW9uLm1zID0gZGlmZlJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgIGR1cmF0aW9uLk0gPSBkaWZmUmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXQgPSBuZXcgRHVyYXRpb24oZHVyYXRpb24pO1xuXG4gICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfbG9jYWxlJykpIHtcbiAgICAgICAgcmV0Ll9sb2NhbGUgPSBpbnB1dC5fbG9jYWxlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNyZWF0ZUR1cmF0aW9uLmZuID0gRHVyYXRpb24ucHJvdG90eXBlO1xuY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGNyZWF0ZUludmFsaWQkMTtcblxuZnVuY3Rpb24gcGFyc2VJc28gKGlucCwgc2lnbikge1xuICAgIC8vIFdlJ2Qgbm9ybWFsbHkgdXNlIH5+aW5wIGZvciB0aGlzLCBidXQgdW5mb3J0dW5hdGVseSBpdCBhbHNvXG4gICAgLy8gY29udmVydHMgZmxvYXRzIHRvIGludHMuXG4gICAgLy8gaW5wIG1heSBiZSB1bmRlZmluZWQsIHNvIGNhcmVmdWwgY2FsbGluZyByZXBsYWNlIG9uIGl0LlxuICAgIHZhciByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xuICAgIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcbiAgICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG59XG5cbmZ1bmN0aW9uIHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpIHtcbiAgICB2YXIgcmVzID0ge21pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwfTtcblxuICAgIHJlcy5tb250aHMgPSBvdGhlci5tb250aCgpIC0gYmFzZS5tb250aCgpICtcbiAgICAgICAgKG90aGVyLnllYXIoKSAtIGJhc2UueWVhcigpKSAqIDEyO1xuICAgIGlmIChiYXNlLmNsb25lKCkuYWRkKHJlcy5tb250aHMsICdNJykuaXNBZnRlcihvdGhlcikpIHtcbiAgICAgICAgLS1yZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJlcy5taWxsaXNlY29uZHMgPSArb3RoZXIgLSArKGJhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKSk7XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgIHZhciByZXM7XG4gICAgaWYgKCEoYmFzZS5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4ge21pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwfTtcbiAgICB9XG5cbiAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XG4gICAgaWYgKGJhc2UuaXNCZWZvcmUob3RoZXIpKSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgb3RoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2Uob3RoZXIsIGJhc2UpO1xuICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gLXJlcy5taWxsaXNlY29uZHM7XG4gICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBUT0RPOiByZW1vdmUgJ25hbWUnIGFyZyBhZnRlciBkZXByZWNhdGlvbiBpcyByZW1vdmVkXG5mdW5jdGlvbiBjcmVhdGVBZGRlcihkaXJlY3Rpb24sIG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgcGVyaW9kKSB7XG4gICAgICAgIHZhciBkdXIsIHRtcDtcbiAgICAgICAgLy9pbnZlcnQgdGhlIGFyZ3VtZW50cywgYnV0IGNvbXBsYWluIGFib3V0IGl0XG4gICAgICAgIGlmIChwZXJpb2QgIT09IG51bGwgJiYgIWlzTmFOKCtwZXJpb2QpKSB7XG4gICAgICAgICAgICBkZXByZWNhdGVTaW1wbGUobmFtZSwgJ21vbWVudCgpLicgKyBuYW1lICArICcocGVyaW9kLCBudW1iZXIpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgbW9tZW50KCkuJyArIG5hbWUgKyAnKG51bWJlciwgcGVyaW9kKS4gJyArXG4gICAgICAgICAgICAnU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvYWRkLWludmVydGVkLXBhcmFtLyBmb3IgbW9yZSBpbmZvLicpO1xuICAgICAgICAgICAgdG1wID0gdmFsOyB2YWwgPSBwZXJpb2Q7IHBlcmlvZCA9IHRtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gK3ZhbCA6IHZhbDtcbiAgICAgICAgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xuICAgICAgICBhZGRTdWJ0cmFjdCh0aGlzLCBkdXIsIGRpcmVjdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFkZFN1YnRyYWN0IChtb20sIGR1cmF0aW9uLCBpc0FkZGluZywgdXBkYXRlT2Zmc2V0KSB7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHMsXG4gICAgICAgIGRheXMgPSBhYnNSb3VuZChkdXJhdGlvbi5fZGF5cyksXG4gICAgICAgIG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xuXG4gICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVPZmZzZXQgPSB1cGRhdGVPZmZzZXQgPT0gbnVsbCA/IHRydWUgOiB1cGRhdGVPZmZzZXQ7XG5cbiAgICBpZiAobW9udGhzKSB7XG4gICAgICAgIHNldE1vbnRoKG1vbSwgZ2V0KG1vbSwgJ01vbnRoJykgKyBtb250aHMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmIChkYXlzKSB7XG4gICAgICAgIHNldCQxKG1vbSwgJ0RhdGUnLCBnZXQobW9tLCAnRGF0ZScpICsgZGF5cyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKG1pbGxpc2Vjb25kcykge1xuICAgICAgICBtb20uX2Quc2V0VGltZShtb20uX2QudmFsdWVPZigpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlT2Zmc2V0KSB7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChtb20sIGRheXMgfHwgbW9udGhzKTtcbiAgICB9XG59XG5cbnZhciBhZGQgICAgICA9IGNyZWF0ZUFkZGVyKDEsICdhZGQnKTtcbnZhciBzdWJ0cmFjdCA9IGNyZWF0ZUFkZGVyKC0xLCAnc3VidHJhY3QnKTtcblxuZnVuY3Rpb24gZ2V0Q2FsZW5kYXJGb3JtYXQobXlNb21lbnQsIG5vdykge1xuICAgIHZhciBkaWZmID0gbXlNb21lbnQuZGlmZihub3csICdkYXlzJywgdHJ1ZSk7XG4gICAgcmV0dXJuIGRpZmYgPCAtNiA/ICdzYW1lRWxzZScgOlxuICAgICAgICAgICAgZGlmZiA8IC0xID8gJ2xhc3RXZWVrJyA6XG4gICAgICAgICAgICBkaWZmIDwgMCA/ICdsYXN0RGF5JyA6XG4gICAgICAgICAgICBkaWZmIDwgMSA/ICdzYW1lRGF5JyA6XG4gICAgICAgICAgICBkaWZmIDwgMiA/ICduZXh0RGF5JyA6XG4gICAgICAgICAgICBkaWZmIDwgNyA/ICduZXh0V2VlaycgOiAnc2FtZUVsc2UnO1xufVxuXG5mdW5jdGlvbiBjYWxlbmRhciQxICh0aW1lLCBmb3JtYXRzKSB7XG4gICAgLy8gV2Ugd2FudCB0byBjb21wYXJlIHRoZSBzdGFydCBvZiB0b2RheSwgdnMgdGhpcy5cbiAgICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSBsb2NhbC91dGMvb2Zmc2V0IG9yIG5vdC5cbiAgICB2YXIgbm93ID0gdGltZSB8fCBjcmVhdGVMb2NhbCgpLFxuICAgICAgICBzb2QgPSBjbG9uZVdpdGhPZmZzZXQobm93LCB0aGlzKS5zdGFydE9mKCdkYXknKSxcbiAgICAgICAgZm9ybWF0ID0gaG9va3MuY2FsZW5kYXJGb3JtYXQodGhpcywgc29kKSB8fCAnc2FtZUVsc2UnO1xuXG4gICAgdmFyIG91dHB1dCA9IGZvcm1hdHMgJiYgKGlzRnVuY3Rpb24oZm9ybWF0c1tmb3JtYXRdKSA/IGZvcm1hdHNbZm9ybWF0XS5jYWxsKHRoaXMsIG5vdykgOiBmb3JtYXRzW2Zvcm1hdF0pO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KG91dHB1dCB8fCB0aGlzLmxvY2FsZURhdGEoKS5jYWxlbmRhcihmb3JtYXQsIHRoaXMsIGNyZWF0ZUxvY2FsKG5vdykpKTtcbn1cblxuZnVuY3Rpb24gY2xvbmUgKCkge1xuICAgIHJldHVybiBuZXcgTW9tZW50KHRoaXMpO1xufVxuXG5mdW5jdGlvbiBpc0FmdGVyIChpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHMoIWlzVW5kZWZpbmVkKHVuaXRzKSA/IHVuaXRzIDogJ21pbGxpc2Vjb25kJyk7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA+IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbElucHV0LnZhbHVlT2YoKSA8IHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0JlZm9yZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KTtcbiAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKCFpc1VuZGVmaW5lZCh1bml0cykgPyB1bml0cyA6ICdtaWxsaXNlY29uZCcpO1xuICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPCBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKCkgPCBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQmV0d2VlbiAoZnJvbSwgdG8sIHVuaXRzLCBpbmNsdXNpdml0eSkge1xuICAgIGluY2x1c2l2aXR5ID0gaW5jbHVzaXZpdHkgfHwgJygpJztcbiAgICByZXR1cm4gKGluY2x1c2l2aXR5WzBdID09PSAnKCcgPyB0aGlzLmlzQWZ0ZXIoZnJvbSwgdW5pdHMpIDogIXRoaXMuaXNCZWZvcmUoZnJvbSwgdW5pdHMpKSAmJlxuICAgICAgICAoaW5jbHVzaXZpdHlbMV0gPT09ICcpJyA/IHRoaXMuaXNCZWZvcmUodG8sIHVuaXRzKSA6ICF0aGlzLmlzQWZ0ZXIodG8sIHVuaXRzKSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KSxcbiAgICAgICAgaW5wdXRNcztcbiAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzIHx8ICdtaWxsaXNlY29uZCcpO1xuICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT09IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0TXMgPSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5zdGFydE9mKHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNTYW1lT3JBZnRlciAoaW5wdXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0FmdGVyKGlucHV0LHVuaXRzKTtcbn1cblxuZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUgKGlucHV0LCB1bml0cykge1xuICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNCZWZvcmUoaW5wdXQsdW5pdHMpO1xufVxuXG5mdW5jdGlvbiBkaWZmIChpbnB1dCwgdW5pdHMsIGFzRmxvYXQpIHtcbiAgICB2YXIgdGhhdCxcbiAgICAgICAgem9uZURlbHRhLFxuICAgICAgICBkZWx0YSwgb3V0cHV0O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHRoYXQgPSBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIHRoaXMpO1xuXG4gICAgaWYgKCF0aGF0LmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHpvbmVEZWx0YSA9ICh0aGF0LnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSkgKiA2ZTQ7XG5cbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAneWVhcic6IG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KSAvIDEyOyBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOiBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCk7IGJyZWFrO1xuICAgICAgICBjYXNlICdxdWFydGVyJzogb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpIC8gMzsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6IG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAxZTM7IGJyZWFrOyAvLyAxMDAwXG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6IG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyA2ZTQ7IGJyZWFrOyAvLyAxMDAwICogNjBcbiAgICAgICAgY2FzZSAnaG91cic6IG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyAzNmU1OyBicmVhazsgLy8gMTAwMCAqIDYwICogNjBcbiAgICAgICAgY2FzZSAnZGF5Jzogb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDg2NGU1OyBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCwgbmVnYXRlIGRzdFxuICAgICAgICBjYXNlICd3ZWVrJzogb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDYwNDhlNTsgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQgKiA3LCBuZWdhdGUgZHN0XG4gICAgICAgIGRlZmF1bHQ6IG91dHB1dCA9IHRoaXMgLSB0aGF0O1xuICAgIH1cblxuICAgIHJldHVybiBhc0Zsb2F0ID8gb3V0cHV0IDogYWJzRmxvb3Iob3V0cHV0KTtcbn1cblxuZnVuY3Rpb24gbW9udGhEaWZmIChhLCBiKSB7XG4gICAgLy8gZGlmZmVyZW5jZSBpbiBtb250aHNcbiAgICB2YXIgd2hvbGVNb250aERpZmYgPSAoKGIueWVhcigpIC0gYS55ZWFyKCkpICogMTIpICsgKGIubW9udGgoKSAtIGEubW9udGgoKSksXG4gICAgICAgIC8vIGIgaXMgaW4gKGFuY2hvciAtIDEgbW9udGgsIGFuY2hvciArIDEgbW9udGgpXG4gICAgICAgIGFuY2hvciA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYsICdtb250aHMnKSxcbiAgICAgICAgYW5jaG9yMiwgYWRqdXN0O1xuXG4gICAgaWYgKGIgLSBhbmNob3IgPCAwKSB7XG4gICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRocycpO1xuICAgICAgICAvLyBsaW5lYXIgYWNyb3NzIHRoZSBtb250aFxuICAgICAgICBhZGp1c3QgPSAoYiAtIGFuY2hvcikgLyAoYW5jaG9yIC0gYW5jaG9yMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgKyAxLCAnbW9udGhzJyk7XG4gICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IyIC0gYW5jaG9yKTtcbiAgICB9XG5cbiAgICAvL2NoZWNrIGZvciBuZWdhdGl2ZSB6ZXJvLCByZXR1cm4gemVybyBpZiBuZWdhdGl2ZSB6ZXJvXG4gICAgcmV0dXJuIC0od2hvbGVNb250aERpZmYgKyBhZGp1c3QpIHx8IDA7XG59XG5cbmhvb2tzLmRlZmF1bHRGb3JtYXQgPSAnWVlZWS1NTS1ERFRISDptbTpzc1onO1xuaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA9ICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJztcblxuZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubG9jYWxlKCdlbicpLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcbn1cblxuZnVuY3Rpb24gdG9JU09TdHJpbmcoa2VlcE9mZnNldCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciB1dGMgPSBrZWVwT2Zmc2V0ICE9PSB0cnVlO1xuICAgIHZhciBtID0gdXRjID8gdGhpcy5jbG9uZSgpLnV0YygpIDogdGhpcztcbiAgICBpZiAobS55ZWFyKCkgPCAwIHx8IG0ueWVhcigpID4gOTk5OSkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sIHV0YyA/ICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nIDogJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onKTtcbiAgICB9XG4gICAgaWYgKGlzRnVuY3Rpb24oRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpKSB7XG4gICAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXG4gICAgICAgIGlmICh1dGMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5fZC52YWx1ZU9mKCkpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgnWicsIGZvcm1hdE1vbWVudChtLCAnWicpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sIHV0YyA/ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyA6ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWicpO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGh1bWFuIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGEgbW9tZW50IHRoYXQgY2FuXG4gKiBhbHNvIGJlIGV2YWx1YXRlZCB0byBnZXQgYSBuZXcgbW9tZW50IHdoaWNoIGlzIHRoZSBzYW1lXG4gKlxuICogQGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2Rpc3QvbGF0ZXN0L2RvY3MvYXBpL3V0aWwuaHRtbCN1dGlsX2N1c3RvbV9pbnNwZWN0X2Z1bmN0aW9uX29uX29iamVjdHNcbiAqL1xuZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gJ21vbWVudC5pbnZhbGlkKC8qICcgKyB0aGlzLl9pICsgJyAqLyknO1xuICAgIH1cbiAgICB2YXIgZnVuYyA9ICdtb21lbnQnO1xuICAgIHZhciB6b25lID0gJyc7XG4gICAgaWYgKCF0aGlzLmlzTG9jYWwoKSkge1xuICAgICAgICBmdW5jID0gdGhpcy51dGNPZmZzZXQoKSA9PT0gMCA/ICdtb21lbnQudXRjJyA6ICdtb21lbnQucGFyc2Vab25lJztcbiAgICAgICAgem9uZSA9ICdaJztcbiAgICB9XG4gICAgdmFyIHByZWZpeCA9ICdbJyArIGZ1bmMgKyAnKFwiXSc7XG4gICAgdmFyIHllYXIgPSAoMCA8PSB0aGlzLnllYXIoKSAmJiB0aGlzLnllYXIoKSA8PSA5OTk5KSA/ICdZWVlZJyA6ICdZWVlZWVknO1xuICAgIHZhciBkYXRldGltZSA9ICctTU0tRERbVF1ISDptbTpzcy5TU1MnO1xuICAgIHZhciBzdWZmaXggPSB6b25lICsgJ1tcIildJztcblxuICAgIHJldHVybiB0aGlzLmZvcm1hdChwcmVmaXggKyB5ZWFyICsgZGF0ZXRpbWUgKyBzdWZmaXgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQgKGlucHV0U3RyaW5nKSB7XG4gICAgaWYgKCFpbnB1dFN0cmluZykge1xuICAgICAgICBpbnB1dFN0cmluZyA9IHRoaXMuaXNVdGMoKSA/IGhvb2tzLmRlZmF1bHRGb3JtYXRVdGMgOiBob29rcy5kZWZhdWx0Rm9ybWF0O1xuICAgIH1cbiAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBmcm9tICh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fFxuICAgICAgICAgICAgIGNyZWF0ZUxvY2FsKHRpbWUpLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHt0bzogdGhpcywgZnJvbTogdGltZX0pLmxvY2FsZSh0aGlzLmxvY2FsZSgpKS5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmcm9tTm93ICh3aXRob3V0U3VmZml4KSB7XG4gICAgcmV0dXJuIHRoaXMuZnJvbShjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbn1cblxuZnVuY3Rpb24gdG8gKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8XG4gICAgICAgICAgICAgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oe2Zyb206IHRoaXMsIHRvOiB0aW1lfSkubG9jYWxlKHRoaXMubG9jYWxlKCkpLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvTm93ICh3aXRob3V0U3VmZml4KSB7XG4gICAgcmV0dXJuIHRoaXMudG8oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG59XG5cbi8vIElmIHBhc3NlZCBhIGxvY2FsZSBrZXksIGl0IHdpbGwgc2V0IHRoZSBsb2NhbGUgZm9yIHRoaXNcbi8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbi8vIHZhcmlhYmxlcyBmb3IgdGhpcyBpbnN0YW5jZS5cbmZ1bmN0aW9uIGxvY2FsZSAoa2V5KSB7XG4gICAgdmFyIG5ld0xvY2FsZURhdGE7XG5cbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMb2NhbGVEYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgIGlmIChuZXdMb2NhbGVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG52YXIgbGFuZyA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50KCkubGFuZygpIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIHVzZSBtb21lbnQoKS5sb2NhbGVEYXRhKCkgdG8gZ2V0IHRoZSBsYW5ndWFnZSBjb25maWd1cmF0aW9uLiBVc2UgbW9tZW50KCkubG9jYWxlKCkgdG8gY2hhbmdlIGxhbmd1YWdlcy4nLFxuICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGUoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbmZ1bmN0aW9uIGxvY2FsZURhdGEgKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0T2YgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgLy8gdGhlIGZvbGxvd2luZyBzd2l0Y2ggaW50ZW50aW9uYWxseSBvbWl0cyBicmVhayBrZXl3b3Jkc1xuICAgIC8vIHRvIHV0aWxpemUgZmFsbGluZyB0aHJvdWdoIHRoZSBjYXNlcy5cbiAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgdGhpcy5tb250aCgwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgIHRoaXMuZGF0ZSgxKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxuICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIHRoaXMuaG91cnMoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgdGhpcy5taW51dGVzKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgdGhpcy5zZWNvbmRzKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgdGhpcy5taWxsaXNlY29uZHMoMCk7XG4gICAgfVxuXG4gICAgLy8gd2Vla3MgYXJlIGEgc3BlY2lhbCBjYXNlXG4gICAgaWYgKHVuaXRzID09PSAnd2VlaycpIHtcbiAgICAgICAgdGhpcy53ZWVrZGF5KDApO1xuICAgIH1cbiAgICBpZiAodW5pdHMgPT09ICdpc29XZWVrJykge1xuICAgICAgICB0aGlzLmlzb1dlZWtkYXkoMSk7XG4gICAgfVxuXG4gICAgLy8gcXVhcnRlcnMgYXJlIGFsc28gc3BlY2lhbFxuICAgIGlmICh1bml0cyA9PT0gJ3F1YXJ0ZXInKSB7XG4gICAgICAgIHRoaXMubW9udGgoTWF0aC5mbG9vcih0aGlzLm1vbnRoKCkgLyAzKSAqIDMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBlbmRPZiAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICBpZiAodW5pdHMgPT09IHVuZGVmaW5lZCB8fCB1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyAnZGF0ZScgaXMgYW4gYWxpYXMgZm9yICdkYXknLCBzbyBpdCBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyBzdWNoLlxuICAgIGlmICh1bml0cyA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIHVuaXRzID0gJ2RheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhcnRPZih1bml0cykuYWRkKDEsICh1bml0cyA9PT0gJ2lzb1dlZWsnID8gJ3dlZWsnIDogdW5pdHMpKS5zdWJ0cmFjdCgxLCAnbXMnKTtcbn1cblxuZnVuY3Rpb24gdmFsdWVPZiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2QudmFsdWVPZigpIC0gKCh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMCk7XG59XG5cbmZ1bmN0aW9uIHVuaXggKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpIC8gMTAwMCk7XG59XG5cbmZ1bmN0aW9uIHRvRGF0ZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSAoKSB7XG4gICAgdmFyIG0gPSB0aGlzO1xuICAgIHJldHVybiBbbS55ZWFyKCksIG0ubW9udGgoKSwgbS5kYXRlKCksIG0uaG91cigpLCBtLm1pbnV0ZSgpLCBtLnNlY29uZCgpLCBtLm1pbGxpc2Vjb25kKCldO1xufVxuXG5mdW5jdGlvbiB0b09iamVjdCAoKSB7XG4gICAgdmFyIG0gPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHllYXJzOiBtLnllYXIoKSxcbiAgICAgICAgbW9udGhzOiBtLm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG0uZGF0ZSgpLFxuICAgICAgICBob3VyczogbS5ob3VycygpLFxuICAgICAgICBtaW51dGVzOiBtLm1pbnV0ZXMoKSxcbiAgICAgICAgc2Vjb25kczogbS5zZWNvbmRzKCksXG4gICAgICAgIG1pbGxpc2Vjb25kczogbS5taWxsaXNlY29uZHMoKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gICAgLy8gbmV3IERhdGUoTmFOKS50b0pTT04oKSA9PT0gbnVsbFxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMudG9JU09TdHJpbmcoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQkMiAoKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQodGhpcyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNpbmdGbGFncyAoKSB7XG4gICAgcmV0dXJuIGV4dGVuZCh7fSwgZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gaW52YWxpZEF0ICgpIHtcbiAgICByZXR1cm4gZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpLm92ZXJmbG93O1xufVxuXG5mdW5jdGlvbiBjcmVhdGlvbkRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQ6IHRoaXMuX2ksXG4gICAgICAgIGZvcm1hdDogdGhpcy5fZixcbiAgICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgIGlzVVRDOiB0aGlzLl9pc1VUQyxcbiAgICAgICAgc3RyaWN0OiB0aGlzLl9zdHJpY3RcbiAgICB9O1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnZ2cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCkgJSAxMDA7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydHRycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcbn0pO1xuXG5mdW5jdGlvbiBhZGRXZWVrWWVhckZvcm1hdFRva2VuICh0b2tlbiwgZ2V0dGVyKSB7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgW3Rva2VuLCB0b2tlbi5sZW5ndGhdLCAwLCBnZXR0ZXIpO1xufVxuXG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnJywgICAgICd3ZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCAgICAnd2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCAgJ2lzb1dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHRycsICdpc29XZWVrWWVhcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnd2Vla1llYXInLCAnZ2cnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2Vla1llYXInLCAnR0cnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCd3ZWVrWWVhcicsIDEpO1xuYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrWWVhcicsIDEpO1xuXG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignRycsICAgICAgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignZycsICAgICAgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignR0cnLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignZ2cnLCAgICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignR0dHRycsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignZ2dnZycsICAgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignR0dHR0cnLCAgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignZ2dnZ2cnLCAgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydnZycsICdHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbn0pO1xuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldFdlZWtZZWFyIChpbnB1dCkge1xuICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKHRoaXMsXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIHRoaXMud2VlaygpLFxuICAgICAgICAgICAgdGhpcy53ZWVrZGF5KCksXG4gICAgICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3csXG4gICAgICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3kpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRJU09XZWVrWWVhciAoaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbCh0aGlzLFxuICAgICAgICAgICAgaW5wdXQsIHRoaXMuaXNvV2VlaygpLCB0aGlzLmlzb1dlZWtkYXkoKSwgMSwgNCk7XG59XG5cbmZ1bmN0aW9uIGdldElTT1dlZWtzSW5ZZWFyICgpIHtcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIDEsIDQpO1xufVxuXG5mdW5jdGlvbiBnZXRXZWVrc0luWWVhciAoKSB7XG4gICAgdmFyIHdlZWtJbmZvID0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWs7XG4gICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCB3ZWVrSW5mby5kb3csIHdlZWtJbmZvLmRveSk7XG59XG5cbmZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciB3ZWVrc1RhcmdldDtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gd2Vla09mWWVhcih0aGlzLCBkb3csIGRveSkueWVhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gICAgICAgIGlmICh3ZWVrID4gd2Vla3NUYXJnZXQpIHtcbiAgICAgICAgICAgIHdlZWsgPSB3ZWVrc1RhcmdldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0V2Vla0FsbC5jYWxsKHRoaXMsIGlucHV0LCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRXZWVrQWxsKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgIHZhciBkYXlPZlllYXJEYXRhID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSksXG4gICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKGRheU9mWWVhckRhdGEueWVhciwgMCwgZGF5T2ZZZWFyRGF0YS5kYXlPZlllYXIpO1xuXG4gICAgdGhpcy55ZWFyKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSk7XG4gICAgdGhpcy5tb250aChkYXRlLmdldFVUQ01vbnRoKCkpO1xuICAgIHRoaXMuZGF0ZShkYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ1EnLCAwLCAnUW8nLCAncXVhcnRlcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygncXVhcnRlcicsICdRJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgncXVhcnRlcicsIDcpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xuYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0UXVhcnRlciAoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKSA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgdGhpcy5tb250aCgpICUgMyk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMl0sICdEbycsICdkYXRlJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcblxuLy8gUFJJT1JPSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2RhdGUnLCA5KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdEJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAvLyBUT0RPOiBSZW1vdmUgXCJvcmRpbmFsUGFyc2VcIiBmYWxsYmFjayBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgcmV0dXJuIGlzU3RyaWN0ID9cbiAgICAgIChsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2UgfHwgbG9jYWxlLl9vcmRpbmFsUGFyc2UpIDpcbiAgICAgIGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQ7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XG5hZGRQYXJzZVRva2VuKCdEbycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0pO1xufSk7XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldERheU9mTW9udGggPSBtYWtlR2V0U2V0KCdEYXRlJywgdHJ1ZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDNdLCAnREREbycsICdkYXlPZlllYXInKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2RheU9mWWVhcicsICdEREQnKTtcblxuLy8gUFJJT1JJVFlcbmFkZFVuaXRQcmlvcml0eSgnZGF5T2ZZZWFyJywgNCk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignREREJywgIG1hdGNoMXRvMyk7XG5hZGRSZWdleFRva2VuKCdEREREJywgbWF0Y2gzKTtcbmFkZFBhcnNlVG9rZW4oWydEREQnLCAnRERERCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0RGF5T2ZZZWFyIChpbnB1dCkge1xuICAgIHZhciBkYXlPZlllYXIgPSBNYXRoLnJvdW5kKCh0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykgLSB0aGlzLmNsb25lKCkuc3RhcnRPZigneWVhcicpKSAvIDg2NGU1KSArIDE7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBkYXlPZlllYXIgOiB0aGlzLmFkZCgoaW5wdXQgLSBkYXlPZlllYXIpLCAnZCcpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdtJywgWydtbScsIDJdLCAwLCAnbWludXRlJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtaW51dGUnLCAnbScpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ21pbnV0ZScsIDE0KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdtJywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdtbScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFBhcnNlVG9rZW4oWydtJywgJ21tJ10sIE1JTlVURSk7XG5cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldE1pbnV0ZSA9IG1ha2VHZXRTZXQoJ01pbnV0ZXMnLCBmYWxzZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMl0sIDAsICdzZWNvbmQnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3NlY29uZCcsICdzJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnc2Vjb25kJywgMTUpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ3MnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ3NzJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0U2Vjb25kID0gbWFrZUdldFNldCgnU2Vjb25kcycsIGZhbHNlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTAwKTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTApO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTJywgM10sIDAsICdtaWxsaXNlY29uZCcpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTJywgNF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1MnLCA1XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTJywgNl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTJywgN10sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1MnLCA4XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDA7XG59KTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1NTJywgOV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwMDtcbn0pO1xuXG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdtaWxsaXNlY29uZCcsICdtcycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ21pbGxpc2Vjb25kJywgMTYpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ1MnLCAgICBtYXRjaDF0bzMsIG1hdGNoMSk7XG5hZGRSZWdleFRva2VuKCdTUycsICAgbWF0Y2gxdG8zLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignU1NTJywgIG1hdGNoMXRvMywgbWF0Y2gzKTtcblxudmFyIHRva2VuO1xuZm9yICh0b2tlbiA9ICdTU1NTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgIGFkZFJlZ2V4VG9rZW4odG9rZW4sIG1hdGNoVW5zaWduZWQpO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1zKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01JTExJU0VDT05EXSA9IHRvSW50KCgnMC4nICsgaW5wdXQpICogMTAwMCk7XG59XG5cbmZvciAodG9rZW4gPSAnUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBwYXJzZU1zKTtcbn1cbi8vIE1PTUVOVFNcblxudmFyIGdldFNldE1pbGxpc2Vjb25kID0gbWFrZUdldFNldCgnTWlsbGlzZWNvbmRzJywgZmFsc2UpO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCd6JywgIDAsIDAsICd6b25lQWJicicpO1xuYWRkRm9ybWF0VG9rZW4oJ3p6JywgMCwgMCwgJ3pvbmVOYW1lJyk7XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0Wm9uZUFiYnIgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1VUQyA/ICdVVEMnIDogJyc7XG59XG5cbmZ1bmN0aW9uIGdldFpvbmVOYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XG59XG5cbnZhciBwcm90byA9IE1vbWVudC5wcm90b3R5cGU7XG5cbnByb3RvLmFkZCAgICAgICAgICAgICAgID0gYWRkO1xucHJvdG8uY2FsZW5kYXIgICAgICAgICAgPSBjYWxlbmRhciQxO1xucHJvdG8uY2xvbmUgICAgICAgICAgICAgPSBjbG9uZTtcbnByb3RvLmRpZmYgICAgICAgICAgICAgID0gZGlmZjtcbnByb3RvLmVuZE9mICAgICAgICAgICAgID0gZW5kT2Y7XG5wcm90by5mb3JtYXQgICAgICAgICAgICA9IGZvcm1hdDtcbnByb3RvLmZyb20gICAgICAgICAgICAgID0gZnJvbTtcbnByb3RvLmZyb21Ob3cgICAgICAgICAgID0gZnJvbU5vdztcbnByb3RvLnRvICAgICAgICAgICAgICAgID0gdG87XG5wcm90by50b05vdyAgICAgICAgICAgICA9IHRvTm93O1xucHJvdG8uZ2V0ICAgICAgICAgICAgICAgPSBzdHJpbmdHZXQ7XG5wcm90by5pbnZhbGlkQXQgICAgICAgICA9IGludmFsaWRBdDtcbnByb3RvLmlzQWZ0ZXIgICAgICAgICAgID0gaXNBZnRlcjtcbnByb3RvLmlzQmVmb3JlICAgICAgICAgID0gaXNCZWZvcmU7XG5wcm90by5pc0JldHdlZW4gICAgICAgICA9IGlzQmV0d2VlbjtcbnByb3RvLmlzU2FtZSAgICAgICAgICAgID0gaXNTYW1lO1xucHJvdG8uaXNTYW1lT3JBZnRlciAgICAgPSBpc1NhbWVPckFmdGVyO1xucHJvdG8uaXNTYW1lT3JCZWZvcmUgICAgPSBpc1NhbWVPckJlZm9yZTtcbnByb3RvLmlzVmFsaWQgICAgICAgICAgID0gaXNWYWxpZCQyO1xucHJvdG8ubGFuZyAgICAgICAgICAgICAgPSBsYW5nO1xucHJvdG8ubG9jYWxlICAgICAgICAgICAgPSBsb2NhbGU7XG5wcm90by5sb2NhbGVEYXRhICAgICAgICA9IGxvY2FsZURhdGE7XG5wcm90by5tYXggICAgICAgICAgICAgICA9IHByb3RvdHlwZU1heDtcbnByb3RvLm1pbiAgICAgICAgICAgICAgID0gcHJvdG90eXBlTWluO1xucHJvdG8ucGFyc2luZ0ZsYWdzICAgICAgPSBwYXJzaW5nRmxhZ3M7XG5wcm90by5zZXQgICAgICAgICAgICAgICA9IHN0cmluZ1NldDtcbnByb3RvLnN0YXJ0T2YgICAgICAgICAgID0gc3RhcnRPZjtcbnByb3RvLnN1YnRyYWN0ICAgICAgICAgID0gc3VidHJhY3Q7XG5wcm90by50b0FycmF5ICAgICAgICAgICA9IHRvQXJyYXk7XG5wcm90by50b09iamVjdCAgICAgICAgICA9IHRvT2JqZWN0O1xucHJvdG8udG9EYXRlICAgICAgICAgICAgPSB0b0RhdGU7XG5wcm90by50b0lTT1N0cmluZyAgICAgICA9IHRvSVNPU3RyaW5nO1xucHJvdG8uaW5zcGVjdCAgICAgICAgICAgPSBpbnNwZWN0O1xucHJvdG8udG9KU09OICAgICAgICAgICAgPSB0b0pTT047XG5wcm90by50b1N0cmluZyAgICAgICAgICA9IHRvU3RyaW5nO1xucHJvdG8udW5peCAgICAgICAgICAgICAgPSB1bml4O1xucHJvdG8udmFsdWVPZiAgICAgICAgICAgPSB2YWx1ZU9mO1xucHJvdG8uY3JlYXRpb25EYXRhICAgICAgPSBjcmVhdGlvbkRhdGE7XG5cbi8vIFllYXJcbnByb3RvLnllYXIgICAgICAgPSBnZXRTZXRZZWFyO1xucHJvdG8uaXNMZWFwWWVhciA9IGdldElzTGVhcFllYXI7XG5cbi8vIFdlZWsgWWVhclxucHJvdG8ud2Vla1llYXIgICAgPSBnZXRTZXRXZWVrWWVhcjtcbnByb3RvLmlzb1dlZWtZZWFyID0gZ2V0U2V0SVNPV2Vla1llYXI7XG5cbi8vIFF1YXJ0ZXJcbnByb3RvLnF1YXJ0ZXIgPSBwcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XG5cbi8vIE1vbnRoXG5wcm90by5tb250aCAgICAgICA9IGdldFNldE1vbnRoO1xucHJvdG8uZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aDtcblxuLy8gV2Vla1xucHJvdG8ud2VlayAgICAgICAgICAgPSBwcm90by53ZWVrcyAgICAgICAgPSBnZXRTZXRXZWVrO1xucHJvdG8uaXNvV2VlayAgICAgICAgPSBwcm90by5pc29XZWVrcyAgICAgPSBnZXRTZXRJU09XZWVrO1xucHJvdG8ud2Vla3NJblllYXIgICAgPSBnZXRXZWVrc0luWWVhcjtcbnByb3RvLmlzb1dlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXI7XG5cbi8vIERheVxucHJvdG8uZGF0ZSAgICAgICA9IGdldFNldERheU9mTW9udGg7XG5wcm90by5kYXkgICAgICAgID0gcHJvdG8uZGF5cyAgICAgICAgICAgICA9IGdldFNldERheU9mV2VlaztcbnByb3RvLndlZWtkYXkgICAgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG5wcm90by5pc29XZWVrZGF5ID0gZ2V0U2V0SVNPRGF5T2ZXZWVrO1xucHJvdG8uZGF5T2ZZZWFyICA9IGdldFNldERheU9mWWVhcjtcblxuLy8gSG91clxucHJvdG8uaG91ciA9IHByb3RvLmhvdXJzID0gZ2V0U2V0SG91cjtcblxuLy8gTWludXRlXG5wcm90by5taW51dGUgPSBwcm90by5taW51dGVzID0gZ2V0U2V0TWludXRlO1xuXG4vLyBTZWNvbmRcbnByb3RvLnNlY29uZCA9IHByb3RvLnNlY29uZHMgPSBnZXRTZXRTZWNvbmQ7XG5cbi8vIE1pbGxpc2Vjb25kXG5wcm90by5taWxsaXNlY29uZCA9IHByb3RvLm1pbGxpc2Vjb25kcyA9IGdldFNldE1pbGxpc2Vjb25kO1xuXG4vLyBPZmZzZXRcbnByb3RvLnV0Y09mZnNldCAgICAgICAgICAgID0gZ2V0U2V0T2Zmc2V0O1xucHJvdG8udXRjICAgICAgICAgICAgICAgICAgPSBzZXRPZmZzZXRUb1VUQztcbnByb3RvLmxvY2FsICAgICAgICAgICAgICAgID0gc2V0T2Zmc2V0VG9Mb2NhbDtcbnByb3RvLnBhcnNlWm9uZSAgICAgICAgICAgID0gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQ7XG5wcm90by5oYXNBbGlnbmVkSG91ck9mZnNldCA9IGhhc0FsaWduZWRIb3VyT2Zmc2V0O1xucHJvdG8uaXNEU1QgICAgICAgICAgICAgICAgPSBpc0RheWxpZ2h0U2F2aW5nVGltZTtcbnByb3RvLmlzTG9jYWwgICAgICAgICAgICAgID0gaXNMb2NhbDtcbnByb3RvLmlzVXRjT2Zmc2V0ICAgICAgICAgID0gaXNVdGNPZmZzZXQ7XG5wcm90by5pc1V0YyAgICAgICAgICAgICAgICA9IGlzVXRjO1xucHJvdG8uaXNVVEMgICAgICAgICAgICAgICAgPSBpc1V0YztcblxuLy8gVGltZXpvbmVcbnByb3RvLnpvbmVBYmJyID0gZ2V0Wm9uZUFiYnI7XG5wcm90by56b25lTmFtZSA9IGdldFpvbmVOYW1lO1xuXG4vLyBEZXByZWNhdGlvbnNcbnByb3RvLmRhdGVzICA9IGRlcHJlY2F0ZSgnZGF0ZXMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIGRhdGUgaW5zdGVhZC4nLCBnZXRTZXREYXlPZk1vbnRoKTtcbnByb3RvLm1vbnRocyA9IGRlcHJlY2F0ZSgnbW9udGhzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb250aCBpbnN0ZWFkJywgZ2V0U2V0TW9udGgpO1xucHJvdG8ueWVhcnMgID0gZGVwcmVjYXRlKCd5ZWFycyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgeWVhciBpbnN0ZWFkJywgZ2V0U2V0WWVhcik7XG5wcm90by56b25lICAgPSBkZXByZWNhdGUoJ21vbWVudCgpLnpvbmUgaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudCgpLnV0Y09mZnNldCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL3pvbmUvJywgZ2V0U2V0Wm9uZSk7XG5wcm90by5pc0RTVFNoaWZ0ZWQgPSBkZXByZWNhdGUoJ2lzRFNUU2hpZnRlZCBpcyBkZXByZWNhdGVkLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9kc3Qtc2hpZnRlZC8gZm9yIG1vcmUgaW5mb3JtYXRpb24nLCBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQpO1xuXG5mdW5jdGlvbiBjcmVhdGVVbml4IChpbnB1dCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbChpbnB1dCAqIDEwMDApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJblpvbmUgKCkge1xuICAgIHJldHVybiBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpLnBhcnNlWm9uZSgpO1xufVxuXG5mdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBwcm90byQxID0gTG9jYWxlLnByb3RvdHlwZTtcblxucHJvdG8kMS5jYWxlbmRhciAgICAgICAgPSBjYWxlbmRhcjtcbnByb3RvJDEubG9uZ0RhdGVGb3JtYXQgID0gbG9uZ0RhdGVGb3JtYXQ7XG5wcm90byQxLmludmFsaWREYXRlICAgICA9IGludmFsaWREYXRlO1xucHJvdG8kMS5vcmRpbmFsICAgICAgICAgPSBvcmRpbmFsO1xucHJvdG8kMS5wcmVwYXJzZSAgICAgICAgPSBwcmVQYXJzZVBvc3RGb3JtYXQ7XG5wcm90byQxLnBvc3Rmb3JtYXQgICAgICA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvJDEucmVsYXRpdmVUaW1lICAgID0gcmVsYXRpdmVUaW1lO1xucHJvdG8kMS5wYXN0RnV0dXJlICAgICAgPSBwYXN0RnV0dXJlO1xucHJvdG8kMS5zZXQgICAgICAgICAgICAgPSBzZXQ7XG5cbi8vIE1vbnRoXG5wcm90byQxLm1vbnRocyAgICAgICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRocztcbnByb3RvJDEubW9udGhzU2hvcnQgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzU2hvcnQ7XG5wcm90byQxLm1vbnRoc1BhcnNlICAgICAgID0gICAgICAgIGxvY2FsZU1vbnRoc1BhcnNlO1xucHJvdG8kMS5tb250aHNSZWdleCAgICAgICA9IG1vbnRoc1JlZ2V4O1xucHJvdG8kMS5tb250aHNTaG9ydFJlZ2V4ICA9IG1vbnRoc1Nob3J0UmVnZXg7XG5cbi8vIFdlZWtcbnByb3RvJDEud2VlayA9IGxvY2FsZVdlZWs7XG5wcm90byQxLmZpcnN0RGF5T2ZZZWFyID0gbG9jYWxlRmlyc3REYXlPZlllYXI7XG5wcm90byQxLmZpcnN0RGF5T2ZXZWVrID0gbG9jYWxlRmlyc3REYXlPZldlZWs7XG5cbi8vIERheSBvZiBXZWVrXG5wcm90byQxLndlZWtkYXlzICAgICAgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzO1xucHJvdG8kMS53ZWVrZGF5c01pbiAgICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c01pbjtcbnByb3RvJDEud2Vla2RheXNTaG9ydCAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNTaG9ydDtcbnByb3RvJDEud2Vla2RheXNQYXJzZSAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNQYXJzZTtcblxucHJvdG8kMS53ZWVrZGF5c1JlZ2V4ICAgICAgID0gICAgICAgIHdlZWtkYXlzUmVnZXg7XG5wcm90byQxLndlZWtkYXlzU2hvcnRSZWdleCAgPSAgICAgICAgd2Vla2RheXNTaG9ydFJlZ2V4O1xucHJvdG8kMS53ZWVrZGF5c01pblJlZ2V4ICAgID0gICAgICAgIHdlZWtkYXlzTWluUmVnZXg7XG5cbi8vIEhvdXJzXG5wcm90byQxLmlzUE0gPSBsb2NhbGVJc1BNO1xucHJvdG8kMS5tZXJpZGllbSA9IGxvY2FsZU1lcmlkaWVtO1xuXG5mdW5jdGlvbiBnZXQkMSAoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xuICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKTtcbiAgICB2YXIgdXRjID0gY3JlYXRlVVRDKCkuc2V0KHNldHRlciwgaW5kZXgpO1xuICAgIHJldHVybiBsb2NhbGVbZmllbGRdKHV0YywgZm9ybWF0KTtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRoc0ltcGwgKGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG5cbiAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZ2V0JDEoZm9ybWF0LCBpbmRleCwgZmllbGQsICdtb250aCcpO1xuICAgIH1cblxuICAgIHZhciBpO1xuICAgIHZhciBvdXQgPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIGksIGZpZWxkLCAnbW9udGgnKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuLy8gKClcbi8vICg1KVxuLy8gKGZtdCwgNSlcbi8vIChmbXQpXG4vLyAodHJ1ZSlcbi8vICh0cnVlLCA1KVxuLy8gKHRydWUsIGZtdCwgNSlcbi8vICh0cnVlLCBmbXQpXG5mdW5jdGlvbiBsaXN0V2Vla2RheXNJbXBsIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbGVTb3J0ZWQgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybWF0ID0gbG9jYWxlU29ydGVkO1xuICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgbG9jYWxlU29ydGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzTnVtYmVyKGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgIH1cblxuICAgIHZhciBsb2NhbGUgPSBnZXRMb2NhbGUoKSxcbiAgICAgICAgc2hpZnQgPSBsb2NhbGVTb3J0ZWQgPyBsb2NhbGUuX3dlZWsuZG93IDogMDtcblxuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIChpbmRleCArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgb3V0W2ldID0gZ2V0JDEoZm9ybWF0LCAoaSArIHNoaWZ0KSAlIDcsIGZpZWxkLCAnZGF5Jyk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGxpc3RNb250aHMgKGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRocycpO1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzU2hvcnQgKGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdE1vbnRoc0ltcGwoZm9ybWF0LCBpbmRleCwgJ21vbnRoc1Nob3J0Jyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RXZWVrZGF5cyAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXMnKTtcbn1cblxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzU2hvcnQgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzU2hvcnQnKTtcbn1cblxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzTWluIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5c01pbicpO1xufVxuXG5nZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICAgIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHZhciBiID0gbnVtYmVyICUgMTAsXG4gICAgICAgICAgICBvdXRwdXQgPSAodG9JbnQobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAoYiA9PT0gMikgPyAnbmQnIDpcbiAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICByZXR1cm4gbnVtYmVyICsgb3V0cHV0O1xuICAgIH1cbn0pO1xuXG4vLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5ob29rcy5sYW5nID0gZGVwcmVjYXRlKCdtb21lbnQubGFuZyBpcyBkZXByZWNhdGVkLiBVc2UgbW9tZW50LmxvY2FsZSBpbnN0ZWFkLicsIGdldFNldEdsb2JhbExvY2FsZSk7XG5ob29rcy5sYW5nRGF0YSA9IGRlcHJlY2F0ZSgnbW9tZW50LmxhbmdEYXRhIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlRGF0YSBpbnN0ZWFkLicsIGdldExvY2FsZSk7XG5cbnZhciBtYXRoQWJzID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIGFicyAoKSB7XG4gICAgdmFyIGRhdGEgICAgICAgICAgID0gdGhpcy5fZGF0YTtcblxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcbiAgICB0aGlzLl9kYXlzICAgICAgICAgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xuICAgIHRoaXMuX21vbnRocyAgICAgICA9IG1hdGhBYnModGhpcy5fbW9udGhzKTtcblxuICAgIGRhdGEubWlsbGlzZWNvbmRzICA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xuICAgIGRhdGEuc2Vjb25kcyAgICAgICA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICBkYXRhLm1pbnV0ZXMgICAgICAgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XG4gICAgZGF0YS5ob3VycyAgICAgICAgID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICBkYXRhLm1vbnRocyAgICAgICAgPSBtYXRoQWJzKGRhdGEubW9udGhzKTtcbiAgICBkYXRhLnllYXJzICAgICAgICAgPSBtYXRoQWJzKGRhdGEueWVhcnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN1YnRyYWN0JDEgKGR1cmF0aW9uLCBpbnB1dCwgdmFsdWUsIGRpcmVjdGlvbikge1xuICAgIHZhciBvdGhlciA9IGNyZWF0ZUR1cmF0aW9uKGlucHV0LCB2YWx1ZSk7XG5cbiAgICBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9taWxsaXNlY29uZHM7XG4gICAgZHVyYXRpb24uX2RheXMgICAgICAgICArPSBkaXJlY3Rpb24gKiBvdGhlci5fZGF5cztcbiAgICBkdXJhdGlvbi5fbW9udGhzICAgICAgICs9IGRpcmVjdGlvbiAqIG90aGVyLl9tb250aHM7XG5cbiAgICByZXR1cm4gZHVyYXRpb24uX2J1YmJsZSgpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBhZGQoMSwgJ3MnKSBvciBhZGQoZHVyYXRpb24pXG5mdW5jdGlvbiBhZGQkMSAoaW5wdXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGFkZFN1YnRyYWN0JDEodGhpcywgaW5wdXQsIHZhbHVlLCAxKTtcbn1cblxuLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgc3VidHJhY3QoMSwgJ3MnKSBvciBzdWJ0cmFjdChkdXJhdGlvbilcbmZ1bmN0aW9uIHN1YnRyYWN0JDEgKGlucHV0LCB2YWx1ZSkge1xuICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgLTEpO1xufVxuXG5mdW5jdGlvbiBhYnNDZWlsIChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ1YmJsZSAoKSB7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcbiAgICB2YXIgZGF5cyAgICAgICAgID0gdGhpcy5fZGF5cztcbiAgICB2YXIgbW9udGhzICAgICAgID0gdGhpcy5fbW9udGhzO1xuICAgIHZhciBkYXRhICAgICAgICAgPSB0aGlzLl9kYXRhO1xuICAgIHZhciBzZWNvbmRzLCBtaW51dGVzLCBob3VycywgeWVhcnMsIG1vbnRoc0Zyb21EYXlzO1xuXG4gICAgLy8gaWYgd2UgaGF2ZSBhIG1peCBvZiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgdmFsdWVzLCBidWJibGUgZG93biBmaXJzdFxuICAgIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICAgIGlmICghKChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XG4gICAgICAgICAgICAobWlsbGlzZWNvbmRzIDw9IDAgJiYgZGF5cyA8PSAwICYmIG1vbnRocyA8PSAwKSkpIHtcbiAgICAgICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xuICAgICAgICBkYXlzID0gMDtcbiAgICAgICAgbW9udGhzID0gMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gICAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzICUgMTAwMDtcblxuICAgIHNlY29uZHMgICAgICAgICAgID0gYWJzRmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgZGF0YS5zZWNvbmRzICAgICAgPSBzZWNvbmRzICUgNjA7XG5cbiAgICBtaW51dGVzICAgICAgICAgICA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XG4gICAgZGF0YS5taW51dGVzICAgICAgPSBtaW51dGVzICUgNjA7XG5cbiAgICBob3VycyAgICAgICAgICAgICA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgZGF0YS5ob3VycyAgICAgICAgPSBob3VycyAlIDI0O1xuXG4gICAgZGF5cyArPSBhYnNGbG9vcihob3VycyAvIDI0KTtcblxuICAgIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgICBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XG4gICAgbW9udGhzICs9IG1vbnRoc0Zyb21EYXlzO1xuICAgIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICBtb250aHMgJT0gMTI7XG5cbiAgICBkYXRhLmRheXMgICA9IGRheXM7XG4gICAgZGF0YS5tb250aHMgPSBtb250aHM7XG4gICAgZGF0YS55ZWFycyAgPSB5ZWFycztcblxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkYXlzVG9Nb250aHMgKGRheXMpIHtcbiAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXG4gICAgcmV0dXJuIGRheXMgKiA0ODAwIC8gMTQ2MDk3O1xufVxuXG5mdW5jdGlvbiBtb250aHNUb0RheXMgKG1vbnRocykge1xuICAgIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICAgIHJldHVybiBtb250aHMgKiAxNDYwOTcgLyA0ODAwO1xufVxuXG5mdW5jdGlvbiBhcyAodW5pdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIHZhciBkYXlzO1xuICAgIHZhciBtb250aHM7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcblxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAneWVhcicpIHtcbiAgICAgICAgZGF5cyAgID0gdGhpcy5fZGF5cyAgICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcbiAgICAgICAgcmV0dXJuIHVuaXRzID09PSAnbW9udGgnID8gbW9udGhzIDogbW9udGhzIC8gMTI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxuICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd3ZWVrJyAgIDogcmV0dXJuIGRheXMgLyA3ICAgICArIG1pbGxpc2Vjb25kcyAvIDYwNDhlNTtcbiAgICAgICAgICAgIGNhc2UgJ2RheScgICAgOiByZXR1cm4gZGF5cyAgICAgICAgICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XG4gICAgICAgICAgICBjYXNlICdob3VyJyAgIDogcmV0dXJuIGRheXMgKiAyNCAgICArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnIDogcmV0dXJuIGRheXMgKiAxNDQwICArIG1pbGxpc2Vjb25kcyAvIDZlNDtcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCcgOiByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcbiAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOiByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHVuaXQgJyArIHVuaXRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gVE9ETzogVXNlIHRoaXMuYXMoJ21zJyk/XG5mdW5jdGlvbiB2YWx1ZU9mJDEgKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcbiAgICAgICAgdGhpcy5fZGF5cyAqIDg2NGU1ICtcbiAgICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXG4gICAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcbiAgICApO1xufVxuXG5mdW5jdGlvbiBtYWtlQXMgKGFsaWFzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXMoYWxpYXMpO1xuICAgIH07XG59XG5cbnZhciBhc01pbGxpc2Vjb25kcyA9IG1ha2VBcygnbXMnKTtcbnZhciBhc1NlY29uZHMgICAgICA9IG1ha2VBcygncycpO1xudmFyIGFzTWludXRlcyAgICAgID0gbWFrZUFzKCdtJyk7XG52YXIgYXNIb3VycyAgICAgICAgPSBtYWtlQXMoJ2gnKTtcbnZhciBhc0RheXMgICAgICAgICA9IG1ha2VBcygnZCcpO1xudmFyIGFzV2Vla3MgICAgICAgID0gbWFrZUFzKCd3Jyk7XG52YXIgYXNNb250aHMgICAgICAgPSBtYWtlQXMoJ00nKTtcbnZhciBhc1llYXJzICAgICAgICA9IG1ha2VBcygneScpO1xuXG5mdW5jdGlvbiBjbG9uZSQxICgpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24odGhpcyk7XG59XG5cbmZ1bmN0aW9uIGdldCQyICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXNbdW5pdHMgKyAncyddKCkgOiBOYU47XG59XG5cbmZ1bmN0aW9uIG1ha2VHZXR0ZXIobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2RhdGFbbmFtZV0gOiBOYU47XG4gICAgfTtcbn1cblxudmFyIG1pbGxpc2Vjb25kcyA9IG1ha2VHZXR0ZXIoJ21pbGxpc2Vjb25kcycpO1xudmFyIHNlY29uZHMgICAgICA9IG1ha2VHZXR0ZXIoJ3NlY29uZHMnKTtcbnZhciBtaW51dGVzICAgICAgPSBtYWtlR2V0dGVyKCdtaW51dGVzJyk7XG52YXIgaG91cnMgICAgICAgID0gbWFrZUdldHRlcignaG91cnMnKTtcbnZhciBkYXlzICAgICAgICAgPSBtYWtlR2V0dGVyKCdkYXlzJyk7XG52YXIgbW9udGhzICAgICAgID0gbWFrZUdldHRlcignbW9udGhzJyk7XG52YXIgeWVhcnMgICAgICAgID0gbWFrZUdldHRlcigneWVhcnMnKTtcblxuZnVuY3Rpb24gd2Vla3MgKCkge1xuICAgIHJldHVybiBhYnNGbG9vcih0aGlzLmRheXMoKSAvIDcpO1xufVxuXG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xudmFyIHRocmVzaG9sZHMgPSB7XG4gICAgc3M6IDQ0LCAgICAgICAgIC8vIGEgZmV3IHNlY29uZHMgdG8gc2Vjb25kc1xuICAgIHMgOiA0NSwgICAgICAgICAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxuICAgIG0gOiA0NSwgICAgICAgICAvLyBtaW51dGVzIHRvIGhvdXJcbiAgICBoIDogMjIsICAgICAgICAgLy8gaG91cnMgdG8gZGF5XG4gICAgZCA6IDI2LCAgICAgICAgIC8vIGRheXMgdG8gbW9udGhcbiAgICBNIDogMTEgICAgICAgICAgLy8gbW9udGhzIHRvIHllYXJcbn07XG5cbi8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9tZW50LmZuLmZyb20sIG1vbWVudC5mbi5mcm9tTm93LCBhbmQgbW9tZW50LmR1cmF0aW9uLmZuLmh1bWFuaXplXG5mdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHJpbmcsIG51bWJlciwgd2l0aG91dFN1ZmZpeCwgaXNGdXR1cmUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xufVxuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWUkMSAocG9zTmVnRHVyYXRpb24sIHdpdGhvdXRTdWZmaXgsIGxvY2FsZSkge1xuICAgIHZhciBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKTtcbiAgICB2YXIgc2Vjb25kcyAgPSByb3VuZChkdXJhdGlvbi5hcygncycpKTtcbiAgICB2YXIgbWludXRlcyAgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKTtcbiAgICB2YXIgaG91cnMgICAgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKTtcbiAgICB2YXIgZGF5cyAgICAgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcbiAgICB2YXIgbW9udGhzICAgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKTtcbiAgICB2YXIgeWVhcnMgICAgPSByb3VuZChkdXJhdGlvbi5hcygneScpKTtcblxuICAgIHZhciBhID0gc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdICB8fFxuICAgICAgICAgICAgc2Vjb25kcyA8IHRocmVzaG9sZHMucyAgICYmIFsnc3MnLCBzZWNvbmRzXSB8fFxuICAgICAgICAgICAgbWludXRlcyA8PSAxICAgICAgICAgICAgICYmIFsnbSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgbWludXRlcyA8IHRocmVzaG9sZHMubSAgICYmIFsnbW0nLCBtaW51dGVzXSB8fFxuICAgICAgICAgICAgaG91cnMgICA8PSAxICAgICAgICAgICAgICYmIFsnaCddICAgICAgICAgICB8fFxuICAgICAgICAgICAgaG91cnMgICA8IHRocmVzaG9sZHMuaCAgICYmIFsnaGgnLCBob3Vyc10gICB8fFxuICAgICAgICAgICAgZGF5cyAgICA8PSAxICAgICAgICAgICAgICYmIFsnZCddICAgICAgICAgICB8fFxuICAgICAgICAgICAgZGF5cyAgICA8IHRocmVzaG9sZHMuZCAgICYmIFsnZGQnLCBkYXlzXSAgICB8fFxuICAgICAgICAgICAgbW9udGhzICA8PSAxICAgICAgICAgICAgICYmIFsnTSddICAgICAgICAgICB8fFxuICAgICAgICAgICAgbW9udGhzICA8IHRocmVzaG9sZHMuTSAgICYmIFsnTU0nLCBtb250aHNdICB8fFxuICAgICAgICAgICAgeWVhcnMgICA8PSAxICAgICAgICAgICAgICYmIFsneSddICAgICAgICAgICB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gICAgYVsyXSA9IHdpdGhvdXRTdWZmaXg7XG4gICAgYVszXSA9ICtwb3NOZWdEdXJhdGlvbiA+IDA7XG4gICAgYVs0XSA9IGxvY2FsZTtcbiAgICByZXR1cm4gc3Vic3RpdHV0ZVRpbWVBZ28uYXBwbHkobnVsbCwgYSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nIChyb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgaWYgKHJvdW5kaW5nRnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcm91bmQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2Yocm91bmRpbmdGdW5jdGlvbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbmZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCAodGhyZXNob2xkLCBsaW1pdCkge1xuICAgIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChsaW1pdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZF07XG4gICAgfVxuICAgIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xuICAgIGlmICh0aHJlc2hvbGQgPT09ICdzJykge1xuICAgICAgICB0aHJlc2hvbGRzLnNzID0gbGltaXQgLSAxO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaHVtYW5pemUgKHdpdGhTdWZmaXgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICB2YXIgb3V0cHV0ID0gcmVsYXRpdmVUaW1lJDEodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XG5cbiAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcbn1cblxudmFyIGFicyQxID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICAgIHJldHVybiAoKHggPiAwKSAtICh4IDwgMCkpIHx8ICt4O1xufVxuXG5mdW5jdGlvbiB0b0lTT1N0cmluZyQxKCkge1xuICAgIC8vIGZvciBJU08gc3RyaW5ncyB3ZSBkbyBub3QgdXNlIHRoZSBub3JtYWwgYnViYmxpbmcgcnVsZXM6XG4gICAgLy8gICogbWlsbGlzZWNvbmRzIGJ1YmJsZSB1cCB1bnRpbCB0aGV5IGJlY29tZSBob3Vyc1xuICAgIC8vICAqIGRheXMgZG8gbm90IGJ1YmJsZSBhdCBhbGxcbiAgICAvLyAgKiBtb250aHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIHllYXJzXG4gICAgLy8gVGhpcyBpcyBiZWNhdXNlIHRoZXJlIGlzIG5vIGNvbnRleHQtZnJlZSBjb252ZXJzaW9uIGJldHdlZW4gaG91cnMgYW5kIGRheXNcbiAgICAvLyAodGhpbmsgb2YgY2xvY2sgY2hhbmdlcylcbiAgICAvLyBhbmQgYWxzbyBub3QgYmV0d2VlbiBkYXlzIGFuZCBtb250aHMgKDI4LTMxIGRheXMgcGVyIG1vbnRoKVxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIHNlY29uZHMgPSBhYnMkMSh0aGlzLl9taWxsaXNlY29uZHMpIC8gMTAwMDtcbiAgICB2YXIgZGF5cyAgICAgICAgID0gYWJzJDEodGhpcy5fZGF5cyk7XG4gICAgdmFyIG1vbnRocyAgICAgICA9IGFicyQxKHRoaXMuX21vbnRocyk7XG4gICAgdmFyIG1pbnV0ZXMsIGhvdXJzLCB5ZWFycztcblxuICAgIC8vIDM2MDAgc2Vjb25kcyAtPiA2MCBtaW51dGVzIC0+IDEgaG91clxuICAgIG1pbnV0ZXMgICAgICAgICAgID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBob3VycyAgICAgICAgICAgICA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgc2Vjb25kcyAlPSA2MDtcbiAgICBtaW51dGVzICU9IDYwO1xuXG4gICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgIHllYXJzICA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcbiAgICBtb250aHMgJT0gMTI7XG5cblxuICAgIC8vIGluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9kb3JkaWxsZS9tb21lbnQtaXNvZHVyYXRpb24vYmxvYi9tYXN0ZXIvbW9tZW50Lmlzb2R1cmF0aW9uLmpzXG4gICAgdmFyIFkgPSB5ZWFycztcbiAgICB2YXIgTSA9IG1vbnRocztcbiAgICB2YXIgRCA9IGRheXM7XG4gICAgdmFyIGggPSBob3VycztcbiAgICB2YXIgbSA9IG1pbnV0ZXM7XG4gICAgdmFyIHMgPSBzZWNvbmRzID8gc2Vjb25kcy50b0ZpeGVkKDMpLnJlcGxhY2UoL1xcLj8wKyQvLCAnJykgOiAnJztcbiAgICB2YXIgdG90YWwgPSB0aGlzLmFzU2Vjb25kcygpO1xuXG4gICAgaWYgKCF0b3RhbCkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSBzYW1lIGFzIEMjJ3MgKE5vZGEpIGFuZCBweXRob24gKGlzb2RhdGUpLi4uXG4gICAgICAgIC8vIGJ1dCBub3Qgb3RoZXIgSlMgKGdvb2cuZGF0ZSlcbiAgICAgICAgcmV0dXJuICdQMEQnO1xuICAgIH1cblxuICAgIHZhciB0b3RhbFNpZ24gPSB0b3RhbCA8IDAgPyAnLScgOiAnJztcbiAgICB2YXIgeW1TaWduID0gc2lnbih0aGlzLl9tb250aHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgIHZhciBkYXlzU2lnbiA9IHNpZ24odGhpcy5fZGF5cykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG4gICAgdmFyIGhtc1NpZ24gPSBzaWduKHRoaXMuX21pbGxpc2Vjb25kcykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG5cbiAgICByZXR1cm4gdG90YWxTaWduICsgJ1AnICtcbiAgICAgICAgKFkgPyB5bVNpZ24gKyBZICsgJ1knIDogJycpICtcbiAgICAgICAgKE0gPyB5bVNpZ24gKyBNICsgJ00nIDogJycpICtcbiAgICAgICAgKEQgPyBkYXlzU2lnbiArIEQgKyAnRCcgOiAnJykgK1xuICAgICAgICAoKGggfHwgbSB8fCBzKSA/ICdUJyA6ICcnKSArXG4gICAgICAgIChoID8gaG1zU2lnbiArIGggKyAnSCcgOiAnJykgK1xuICAgICAgICAobSA/IGhtc1NpZ24gKyBtICsgJ00nIDogJycpICtcbiAgICAgICAgKHMgPyBobXNTaWduICsgcyArICdTJyA6ICcnKTtcbn1cblxudmFyIHByb3RvJDIgPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5cbnByb3RvJDIuaXNWYWxpZCAgICAgICAgPSBpc1ZhbGlkJDE7XG5wcm90byQyLmFicyAgICAgICAgICAgID0gYWJzO1xucHJvdG8kMi5hZGQgICAgICAgICAgICA9IGFkZCQxO1xucHJvdG8kMi5zdWJ0cmFjdCAgICAgICA9IHN1YnRyYWN0JDE7XG5wcm90byQyLmFzICAgICAgICAgICAgID0gYXM7XG5wcm90byQyLmFzTWlsbGlzZWNvbmRzID0gYXNNaWxsaXNlY29uZHM7XG5wcm90byQyLmFzU2Vjb25kcyAgICAgID0gYXNTZWNvbmRzO1xucHJvdG8kMi5hc01pbnV0ZXMgICAgICA9IGFzTWludXRlcztcbnByb3RvJDIuYXNIb3VycyAgICAgICAgPSBhc0hvdXJzO1xucHJvdG8kMi5hc0RheXMgICAgICAgICA9IGFzRGF5cztcbnByb3RvJDIuYXNXZWVrcyAgICAgICAgPSBhc1dlZWtzO1xucHJvdG8kMi5hc01vbnRocyAgICAgICA9IGFzTW9udGhzO1xucHJvdG8kMi5hc1llYXJzICAgICAgICA9IGFzWWVhcnM7XG5wcm90byQyLnZhbHVlT2YgICAgICAgID0gdmFsdWVPZiQxO1xucHJvdG8kMi5fYnViYmxlICAgICAgICA9IGJ1YmJsZTtcbnByb3RvJDIuY2xvbmUgICAgICAgICAgPSBjbG9uZSQxO1xucHJvdG8kMi5nZXQgICAgICAgICAgICA9IGdldCQyO1xucHJvdG8kMi5taWxsaXNlY29uZHMgICA9IG1pbGxpc2Vjb25kcztcbnByb3RvJDIuc2Vjb25kcyAgICAgICAgPSBzZWNvbmRzO1xucHJvdG8kMi5taW51dGVzICAgICAgICA9IG1pbnV0ZXM7XG5wcm90byQyLmhvdXJzICAgICAgICAgID0gaG91cnM7XG5wcm90byQyLmRheXMgICAgICAgICAgID0gZGF5cztcbnByb3RvJDIud2Vla3MgICAgICAgICAgPSB3ZWVrcztcbnByb3RvJDIubW9udGhzICAgICAgICAgPSBtb250aHM7XG5wcm90byQyLnllYXJzICAgICAgICAgID0geWVhcnM7XG5wcm90byQyLmh1bWFuaXplICAgICAgID0gaHVtYW5pemU7XG5wcm90byQyLnRvSVNPU3RyaW5nICAgID0gdG9JU09TdHJpbmckMTtcbnByb3RvJDIudG9TdHJpbmcgICAgICAgPSB0b0lTT1N0cmluZyQxO1xucHJvdG8kMi50b0pTT04gICAgICAgICA9IHRvSVNPU3RyaW5nJDE7XG5wcm90byQyLmxvY2FsZSAgICAgICAgID0gbG9jYWxlO1xucHJvdG8kMi5sb2NhbGVEYXRhICAgICA9IGxvY2FsZURhdGE7XG5cbi8vIERlcHJlY2F0aW9uc1xucHJvdG8kMi50b0lzb1N0cmluZyA9IGRlcHJlY2F0ZSgndG9Jc29TdHJpbmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHRvSVNPU3RyaW5nKCkgaW5zdGVhZCAobm90aWNlIHRoZSBjYXBpdGFscyknLCB0b0lTT1N0cmluZyQxKTtcbnByb3RvJDIubGFuZyA9IGxhbmc7XG5cbi8vIFNpZGUgZWZmZWN0IGltcG9ydHNcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignWCcsIDAsIDAsICd1bml4Jyk7XG5hZGRGb3JtYXRUb2tlbigneCcsIDAsIDAsICd2YWx1ZU9mJyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1gnLCBtYXRjaFRpbWVzdGFtcCk7XG5hZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCwgMTApICogMTAwMCk7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xufSk7XG5cbi8vIFNpZGUgZWZmZWN0IGltcG9ydHNcblxuXG5ob29rcy52ZXJzaW9uID0gJzIuMjAuMSc7XG5cbnNldEhvb2tDYWxsYmFjayhjcmVhdGVMb2NhbCk7XG5cbmhvb2tzLmZuICAgICAgICAgICAgICAgICAgICA9IHByb3RvO1xuaG9va3MubWluICAgICAgICAgICAgICAgICAgID0gbWluO1xuaG9va3MubWF4ICAgICAgICAgICAgICAgICAgID0gbWF4O1xuaG9va3Mubm93ICAgICAgICAgICAgICAgICAgID0gbm93O1xuaG9va3MudXRjICAgICAgICAgICAgICAgICAgID0gY3JlYXRlVVRDO1xuaG9va3MudW5peCAgICAgICAgICAgICAgICAgID0gY3JlYXRlVW5peDtcbmhvb2tzLm1vbnRocyAgICAgICAgICAgICAgICA9IGxpc3RNb250aHM7XG5ob29rcy5pc0RhdGUgICAgICAgICAgICAgICAgPSBpc0RhdGU7XG5ob29rcy5sb2NhbGUgICAgICAgICAgICAgICAgPSBnZXRTZXRHbG9iYWxMb2NhbGU7XG5ob29rcy5pbnZhbGlkICAgICAgICAgICAgICAgPSBjcmVhdGVJbnZhbGlkO1xuaG9va3MuZHVyYXRpb24gICAgICAgICAgICAgID0gY3JlYXRlRHVyYXRpb247XG5ob29rcy5pc01vbWVudCAgICAgICAgICAgICAgPSBpc01vbWVudDtcbmhvb2tzLndlZWtkYXlzICAgICAgICAgICAgICA9IGxpc3RXZWVrZGF5cztcbmhvb2tzLnBhcnNlWm9uZSAgICAgICAgICAgICA9IGNyZWF0ZUluWm9uZTtcbmhvb2tzLmxvY2FsZURhdGEgICAgICAgICAgICA9IGdldExvY2FsZTtcbmhvb2tzLmlzRHVyYXRpb24gICAgICAgICAgICA9IGlzRHVyYXRpb247XG5ob29rcy5tb250aHNTaG9ydCAgICAgICAgICAgPSBsaXN0TW9udGhzU2hvcnQ7XG5ob29rcy53ZWVrZGF5c01pbiAgICAgICAgICAgPSBsaXN0V2Vla2RheXNNaW47XG5ob29rcy5kZWZpbmVMb2NhbGUgICAgICAgICAgPSBkZWZpbmVMb2NhbGU7XG5ob29rcy51cGRhdGVMb2NhbGUgICAgICAgICAgPSB1cGRhdGVMb2NhbGU7XG5ob29rcy5sb2NhbGVzICAgICAgICAgICAgICAgPSBsaXN0TG9jYWxlcztcbmhvb2tzLndlZWtkYXlzU2hvcnQgICAgICAgICA9IGxpc3RXZWVrZGF5c1Nob3J0O1xuaG9va3Mubm9ybWFsaXplVW5pdHMgICAgICAgID0gbm9ybWFsaXplVW5pdHM7XG5ob29rcy5yZWxhdGl2ZVRpbWVSb3VuZGluZyAgPSBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZztcbmhvb2tzLnJlbGF0aXZlVGltZVRocmVzaG9sZCA9IGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZDtcbmhvb2tzLmNhbGVuZGFyRm9ybWF0ICAgICAgICA9IGdldENhbGVuZGFyRm9ybWF0O1xuaG9va3MucHJvdG90eXBlICAgICAgICAgICAgID0gcHJvdG87XG5cbi8vIGN1cnJlbnRseSBIVE1MNSBpbnB1dCB0eXBlIG9ubHkgc3VwcG9ydHMgMjQtaG91ciBmb3JtYXRzXG5ob29rcy5IVE1MNV9GTVQgPSB7XG4gICAgREFURVRJTUVfTE9DQUw6ICdZWVlZLU1NLUREVEhIOm1tJywgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIC8+XG4gICAgREFURVRJTUVfTE9DQUxfU0VDT05EUzogJ1lZWVktTU0tRERUSEg6bW06c3MnLCAgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIHN0ZXA9XCIxXCIgLz5cbiAgICBEQVRFVElNRV9MT0NBTF9NUzogJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTJywgICAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICBEQVRFOiAnWVlZWS1NTS1ERCcsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cImRhdGVcIiAvPlxuICAgIFRJTUU6ICdISDptbScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIC8+XG4gICAgVElNRV9TRUNPTkRTOiAnSEg6bW06c3MnLCAgICAgICAgICAgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgc3RlcD1cIjFcIiAvPlxuICAgIFRJTUVfTVM6ICdISDptbTpzcy5TU1MnLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwidGltZVwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgV0VFSzogJ1lZWVktW1ddV1cnLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJ3ZWVrXCIgLz5cbiAgICBNT05USDogJ1lZWVktTU0nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cIm1vbnRoXCIgLz5cbn07XG5cbnJldHVybiBob29rcztcblxufSkpKTtcbiIsIi8qIVxuXHRQYXBhIFBhcnNlXG5cdHY0LjMuNlxuXHRodHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlXG5cdExpY2Vuc2U6IE1JVFxuKi9cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KVxue1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHR7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKVxuXHR7XG5cdFx0Ly8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG5cdFx0Ly8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG5cdFx0Ly8gbGlrZSBOb2RlLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG5cdFx0cm9vdC5QYXBhID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uKClcbntcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBnbG9iYWwgPSAoZnVuY3Rpb24gKCkge1xuXHRcdC8vIGFsdGVybmF0aXZlIG1ldGhvZCwgc2ltaWxhciB0byBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0XHQvLyBidXQgd2l0aG91dCB1c2luZyBgZXZhbGAgKHdoaWNoIGlzIGRpc2FibGVkIHdoZW5cblx0XHQvLyB1c2luZyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG5cblx0XHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0XHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfVxuXG5cdFx0Ly8gV2hlbiBydW5uaW5nIHRlc3RzIG5vbmUgb2YgdGhlIGFib3ZlIGhhdmUgYmVlbiBkZWZpbmVkXG5cdFx0cmV0dXJuIHt9O1xuXHR9KSgpO1xuXG5cblx0dmFyIElTX1dPUktFUiA9ICFnbG9iYWwuZG9jdW1lbnQgJiYgISFnbG9iYWwucG9zdE1lc3NhZ2UsXG5cdFx0SVNfUEFQQV9XT1JLRVIgPSBJU19XT1JLRVIgJiYgLyhcXD98JilwYXBhd29ya2VyKD18JnwkKS8udGVzdChnbG9iYWwubG9jYXRpb24uc2VhcmNoKSxcblx0XHRMT0FERURfU1lOQyA9IGZhbHNlLCBBVVRPX1NDUklQVF9QQVRIO1xuXHR2YXIgd29ya2VycyA9IHt9LCB3b3JrZXJJZENvdW50ZXIgPSAwO1xuXG5cdHZhciBQYXBhID0ge307XG5cblx0UGFwYS5wYXJzZSA9IENzdlRvSnNvbjtcblx0UGFwYS51bnBhcnNlID0gSnNvblRvQ3N2O1xuXG5cdFBhcGEuUkVDT1JEX1NFUCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMzApO1xuXHRQYXBhLlVOSVRfU0VQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMSk7XG5cdFBhcGEuQllURV9PUkRFUl9NQVJLID0gJ1xcdWZlZmYnO1xuXHRQYXBhLkJBRF9ERUxJTUlURVJTID0gWydcXHInLCAnXFxuJywgJ1wiJywgUGFwYS5CWVRFX09SREVSX01BUktdO1xuXHRQYXBhLldPUktFUlNfU1VQUE9SVEVEID0gIUlTX1dPUktFUiAmJiAhIWdsb2JhbC5Xb3JrZXI7XG5cdFBhcGEuU0NSSVBUX1BBVEggPSBudWxsO1x0Ly8gTXVzdCBiZSBzZXQgYnkgeW91ciBjb2RlIGlmIHlvdSB1c2Ugd29ya2VycyBhbmQgdGhpcyBsaWIgaXMgbG9hZGVkIGFzeW5jaHJvbm91c2x5XG5cblx0Ly8gQ29uZmlndXJhYmxlIGNodW5rIHNpemVzIGZvciBsb2NhbCBhbmQgcmVtb3RlIGZpbGVzLCByZXNwZWN0aXZlbHlcblx0UGFwYS5Mb2NhbENodW5rU2l6ZSA9IDEwMjQgKiAxMDI0ICogMTA7XHQvLyAxMCBNQlxuXHRQYXBhLlJlbW90ZUNodW5rU2l6ZSA9IDEwMjQgKiAxMDI0ICogNTtcdC8vIDUgTUJcblx0UGFwYS5EZWZhdWx0RGVsaW1pdGVyID0gJywnO1x0XHRcdC8vIFVzZWQgaWYgbm90IHNwZWNpZmllZCBhbmQgZGV0ZWN0aW9uIGZhaWxzXG5cblx0Ly8gRXhwb3NlZCBmb3IgdGVzdGluZyBhbmQgZGV2ZWxvcG1lbnQgb25seVxuXHRQYXBhLlBhcnNlciA9IFBhcnNlcjtcblx0UGFwYS5QYXJzZXJIYW5kbGUgPSBQYXJzZXJIYW5kbGU7XG5cdFBhcGEuTmV0d29ya1N0cmVhbWVyID0gTmV0d29ya1N0cmVhbWVyO1xuXHRQYXBhLkZpbGVTdHJlYW1lciA9IEZpbGVTdHJlYW1lcjtcblx0UGFwYS5TdHJpbmdTdHJlYW1lciA9IFN0cmluZ1N0cmVhbWVyO1xuXHRQYXBhLlJlYWRhYmxlU3RyZWFtU3RyZWFtZXIgPSBSZWFkYWJsZVN0cmVhbVN0cmVhbWVyO1xuXG5cdGlmIChnbG9iYWwualF1ZXJ5KVxuXHR7XG5cdFx0dmFyICQgPSBnbG9iYWwualF1ZXJ5O1xuXHRcdCQuZm4ucGFyc2UgPSBmdW5jdGlvbihvcHRpb25zKVxuXHRcdHtcblx0XHRcdHZhciBjb25maWcgPSBvcHRpb25zLmNvbmZpZyB8fCB7fTtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXG5cdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oaWR4KVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgc3VwcG9ydGVkID0gJCh0aGlzKS5wcm9wKCd0YWdOYW1lJykudG9VcHBlckNhc2UoKSA9PT0gJ0lOUFVUJ1xuXHRcdFx0XHRcdFx0XHRcdCYmICQodGhpcykuYXR0cigndHlwZScpLnRvTG93ZXJDYXNlKCkgPT09ICdmaWxlJ1xuXHRcdFx0XHRcdFx0XHRcdCYmIGdsb2JhbC5GaWxlUmVhZGVyO1xuXG5cdFx0XHRcdGlmICghc3VwcG9ydGVkIHx8ICF0aGlzLmZpbGVzIHx8IHRoaXMuZmlsZXMubGVuZ3RoID09PSAwKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1x0Ly8gY29udGludWUgdG8gbmV4dCBpbnB1dCBlbGVtZW50XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpbGVzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0XHRmaWxlOiB0aGlzLmZpbGVzW2ldLFxuXHRcdFx0XHRcdFx0aW5wdXRFbGVtOiB0aGlzLFxuXHRcdFx0XHRcdFx0aW5zdGFuY2VDb25maWc6ICQuZXh0ZW5kKHt9LCBjb25maWcpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRwYXJzZU5leHRGaWxlKCk7XHQvLyBiZWdpbiBwYXJzaW5nXG5cdFx0XHRyZXR1cm4gdGhpcztcdFx0Ly8gbWFpbnRhaW5zIGNoYWluYWJpbGl0eVxuXG5cblx0XHRcdGZ1bmN0aW9uIHBhcnNlTmV4dEZpbGUoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAocXVldWUubGVuZ3RoID09PSAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5jb21wbGV0ZSkpXG5cdFx0XHRcdFx0XHRvcHRpb25zLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIGYgPSBxdWV1ZVswXTtcblxuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbihvcHRpb25zLmJlZm9yZSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcmV0dXJuZWQgPSBvcHRpb25zLmJlZm9yZShmLmZpbGUsIGYuaW5wdXRFbGVtKTtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmV0dXJuZWQgPT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlmIChyZXR1cm5lZC5hY3Rpb24gPT09ICdhYm9ydCcpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGVycm9yKCdBYm9ydEVycm9yJywgZi5maWxlLCBmLmlucHV0RWxlbSwgcmV0dXJuZWQucmVhc29uKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1x0Ly8gQWJvcnRzIGFsbCBxdWV1ZWQgZmlsZXMgaW1tZWRpYXRlbHlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2UgaWYgKHJldHVybmVkLmFjdGlvbiA9PT0gJ3NraXAnKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRmaWxlQ29tcGxldGUoKTtcdC8vIHBhcnNlIHRoZSBuZXh0IGZpbGUgaW4gdGhlIHF1ZXVlLCBpZiBhbnlcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIHJldHVybmVkLmNvbmZpZyA9PT0gJ29iamVjdCcpXG5cdFx0XHRcdFx0XHRcdGYuaW5zdGFuY2VDb25maWcgPSAkLmV4dGVuZChmLmluc3RhbmNlQ29uZmlnLCByZXR1cm5lZC5jb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChyZXR1cm5lZCA9PT0gJ3NraXAnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZpbGVDb21wbGV0ZSgpO1x0Ly8gcGFyc2UgdGhlIG5leHQgZmlsZSBpbiB0aGUgcXVldWUsIGlmIGFueVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdyYXAgdXAgdGhlIHVzZXIncyBjb21wbGV0ZSBjYWxsYmFjaywgaWYgYW55LCBzbyB0aGF0IG91cnMgYWxzbyBnZXRzIGV4ZWN1dGVkXG5cdFx0XHRcdHZhciB1c2VyQ29tcGxldGVGdW5jID0gZi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZTtcblx0XHRcdFx0Zi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZSA9IGZ1bmN0aW9uKHJlc3VsdHMpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaXNGdW5jdGlvbih1c2VyQ29tcGxldGVGdW5jKSlcblx0XHRcdFx0XHRcdHVzZXJDb21wbGV0ZUZ1bmMocmVzdWx0cywgZi5maWxlLCBmLmlucHV0RWxlbSk7XG5cdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0UGFwYS5wYXJzZShmLmZpbGUsIGYuaW5zdGFuY2VDb25maWcpO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlcnJvcihuYW1lLCBmaWxlLCBlbGVtLCByZWFzb24pXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuZXJyb3IpKVxuXHRcdFx0XHRcdG9wdGlvbnMuZXJyb3Ioe25hbWU6IG5hbWV9LCBmaWxlLCBlbGVtLCByZWFzb24pO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBmaWxlQ29tcGxldGUoKVxuXHRcdFx0e1xuXHRcdFx0XHRxdWV1ZS5zcGxpY2UoMCwgMSk7XG5cdFx0XHRcdHBhcnNlTmV4dEZpbGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdGlmIChJU19QQVBBX1dPUktFUilcblx0e1xuXHRcdGdsb2JhbC5vbm1lc3NhZ2UgPSB3b3JrZXJUaHJlYWRSZWNlaXZlZE1lc3NhZ2U7XG5cdH1cblx0ZWxzZSBpZiAoUGFwYS5XT1JLRVJTX1NVUFBPUlRFRClcblx0e1xuXHRcdEFVVE9fU0NSSVBUX1BBVEggPSBnZXRTY3JpcHRQYXRoKCk7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgc2NyaXB0IHdhcyBsb2FkZWQgc3luY2hyb25vdXNseVxuXHRcdGlmICghZG9jdW1lbnQuYm9keSlcblx0XHR7XG5cdFx0XHQvLyBCb2R5IGRvZXNuJ3QgZXhpc3QgeWV0LCBtdXN0IGJlIHN5bmNocm9ub3VzXG5cdFx0XHRMT0FERURfU1lOQyA9IHRydWU7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRMT0FERURfU1lOQyA9IHRydWU7XG5cdFx0XHR9LCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXG5cblxuXHRmdW5jdGlvbiBDc3ZUb0pzb24oX2lucHV0LCBfY29uZmlnKVxuXHR7XG5cdFx0X2NvbmZpZyA9IF9jb25maWcgfHwge307XG5cdFx0dmFyIGR5bmFtaWNUeXBpbmcgPSBfY29uZmlnLmR5bmFtaWNUeXBpbmcgfHwgZmFsc2U7XG5cdFx0aWYgKGlzRnVuY3Rpb24oZHluYW1pY1R5cGluZykpIHtcblx0XHRcdF9jb25maWcuZHluYW1pY1R5cGluZ0Z1bmN0aW9uID0gZHluYW1pY1R5cGluZztcblx0XHRcdC8vIFdpbGwgYmUgZmlsbGVkIG9uIGZpcnN0IHJvdyBjYWxsXG5cdFx0XHRkeW5hbWljVHlwaW5nID0ge307XG5cdFx0fVxuXHRcdF9jb25maWcuZHluYW1pY1R5cGluZyA9IGR5bmFtaWNUeXBpbmc7XG5cblx0XHRpZiAoX2NvbmZpZy53b3JrZXIgJiYgUGFwYS5XT1JLRVJTX1NVUFBPUlRFRClcblx0XHR7XG5cdFx0XHR2YXIgdyA9IG5ld1dvcmtlcigpO1xuXG5cdFx0XHR3LnVzZXJTdGVwID0gX2NvbmZpZy5zdGVwO1xuXHRcdFx0dy51c2VyQ2h1bmsgPSBfY29uZmlnLmNodW5rO1xuXHRcdFx0dy51c2VyQ29tcGxldGUgPSBfY29uZmlnLmNvbXBsZXRlO1xuXHRcdFx0dy51c2VyRXJyb3IgPSBfY29uZmlnLmVycm9yO1xuXG5cdFx0XHRfY29uZmlnLnN0ZXAgPSBpc0Z1bmN0aW9uKF9jb25maWcuc3RlcCk7XG5cdFx0XHRfY29uZmlnLmNodW5rID0gaXNGdW5jdGlvbihfY29uZmlnLmNodW5rKTtcblx0XHRcdF9jb25maWcuY29tcGxldGUgPSBpc0Z1bmN0aW9uKF9jb25maWcuY29tcGxldGUpO1xuXHRcdFx0X2NvbmZpZy5lcnJvciA9IGlzRnVuY3Rpb24oX2NvbmZpZy5lcnJvcik7XG5cdFx0XHRkZWxldGUgX2NvbmZpZy53b3JrZXI7XHQvLyBwcmV2ZW50IGluZmluaXRlIGxvb3BcblxuXHRcdFx0dy5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdGlucHV0OiBfaW5wdXQsXG5cdFx0XHRcdGNvbmZpZzogX2NvbmZpZyxcblx0XHRcdFx0d29ya2VySWQ6IHcuaWRcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHN0cmVhbWVyID0gbnVsbDtcblx0XHRpZiAodHlwZW9mIF9pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0e1xuXHRcdFx0aWYgKF9jb25maWcuZG93bmxvYWQpXG5cdFx0XHRcdHN0cmVhbWVyID0gbmV3IE5ldHdvcmtTdHJlYW1lcihfY29uZmlnKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0c3RyZWFtZXIgPSBuZXcgU3RyaW5nU3RyZWFtZXIoX2NvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKF9pbnB1dC5yZWFkYWJsZSA9PT0gdHJ1ZSAmJiBpc0Z1bmN0aW9uKF9pbnB1dC5yZWFkKSAmJiBpc0Z1bmN0aW9uKF9pbnB1dC5vbikpXG5cdFx0e1xuXHRcdFx0c3RyZWFtZXIgPSBuZXcgUmVhZGFibGVTdHJlYW1TdHJlYW1lcihfY29uZmlnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGdsb2JhbC5GaWxlICYmIF9pbnB1dCBpbnN0YW5jZW9mIEZpbGUpIHx8IF9pbnB1dCBpbnN0YW5jZW9mIE9iamVjdClcdC8vIC4uLlNhZmFyaS4gKHNlZSBpc3N1ZSAjMTA2KVxuXHRcdFx0c3RyZWFtZXIgPSBuZXcgRmlsZVN0cmVhbWVyKF9jb25maWcpO1xuXG5cdFx0cmV0dXJuIHN0cmVhbWVyLnN0cmVhbShfaW5wdXQpO1xuXHR9XG5cblxuXG5cblxuXG5cdGZ1bmN0aW9uIEpzb25Ub0NzdihfaW5wdXQsIF9jb25maWcpXG5cdHtcblx0XHR2YXIgX291dHB1dCA9ICcnO1xuXHRcdHZhciBfZmllbGRzID0gW107XG5cblx0XHQvLyBEZWZhdWx0IGNvbmZpZ3VyYXRpb25cblxuXHRcdC8qKiB3aGV0aGVyIHRvIHN1cnJvdW5kIGV2ZXJ5IGRhdHVtIHdpdGggcXVvdGVzICovXG5cdFx0dmFyIF9xdW90ZXMgPSBmYWxzZTtcblxuXHRcdC8qKiB3aGV0aGVyIHRvIHdyaXRlIGhlYWRlcnMgKi9cblx0XHR2YXIgX3dyaXRlSGVhZGVyID0gdHJ1ZTtcblxuXHRcdC8qKiBkZWxpbWl0aW5nIGNoYXJhY3RlciAqL1xuXHRcdHZhciBfZGVsaW1pdGVyID0gJywnO1xuXG5cdFx0LyoqIG5ld2xpbmUgY2hhcmFjdGVyKHMpICovXG5cdFx0dmFyIF9uZXdsaW5lID0gJ1xcclxcbic7XG5cblx0XHQvKiogcXVvdGUgY2hhcmFjdGVyICovXG5cdFx0dmFyIF9xdW90ZUNoYXIgPSAnXCInO1xuXG5cdFx0dW5wYWNrQ29uZmlnKCk7XG5cblx0XHR2YXIgcXVvdGVDaGFyUmVnZXggPSBuZXcgUmVnRXhwKF9xdW90ZUNoYXIsICdnJyk7XG5cblx0XHRpZiAodHlwZW9mIF9pbnB1dCA9PT0gJ3N0cmluZycpXG5cdFx0XHRfaW5wdXQgPSBKU09OLnBhcnNlKF9pbnB1dCk7XG5cblx0XHRpZiAoX2lucHV0IGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0e1xuXHRcdFx0aWYgKCFfaW5wdXQubGVuZ3RoIHx8IF9pbnB1dFswXSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKG51bGwsIF9pbnB1dCk7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgX2lucHV0WzBdID09PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShvYmplY3RLZXlzKF9pbnB1dFswXSksIF9pbnB1dCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBfaW5wdXQgPT09ICdvYmplY3QnKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2YgX2lucHV0LmRhdGEgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRfaW5wdXQuZGF0YSA9IEpTT04ucGFyc2UoX2lucHV0LmRhdGEpO1xuXG5cdFx0XHRpZiAoX2lucHV0LmRhdGEgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKCFfaW5wdXQuZmllbGRzKVxuXHRcdFx0XHRcdF9pbnB1dC5maWVsZHMgPSAgX2lucHV0Lm1ldGEgJiYgX2lucHV0Lm1ldGEuZmllbGRzO1xuXG5cdFx0XHRcdGlmICghX2lucHV0LmZpZWxkcylcblx0XHRcdFx0XHRfaW5wdXQuZmllbGRzID0gIF9pbnB1dC5kYXRhWzBdIGluc3RhbmNlb2YgQXJyYXlcblx0XHRcdFx0XHRcdFx0XHRcdD8gX2lucHV0LmZpZWxkc1xuXHRcdFx0XHRcdFx0XHRcdFx0OiBvYmplY3RLZXlzKF9pbnB1dC5kYXRhWzBdKTtcblxuXHRcdFx0XHRpZiAoIShfaW5wdXQuZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5KSAmJiB0eXBlb2YgX2lucHV0LmRhdGFbMF0gIT09ICdvYmplY3QnKVxuXHRcdFx0XHRcdF9pbnB1dC5kYXRhID0gW19pbnB1dC5kYXRhXTtcdC8vIGhhbmRsZXMgaW5wdXQgbGlrZSBbMSwyLDNdIG9yIFsnYXNkZiddXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXJpYWxpemUoX2lucHV0LmZpZWxkcyB8fCBbXSwgX2lucHV0LmRhdGEgfHwgW10pO1xuXHRcdH1cblxuXHRcdC8vIERlZmF1bHQgKGFueSB2YWxpZCBwYXRocyBzaG91bGQgcmV0dXJuIGJlZm9yZSB0aGlzKVxuXHRcdHRocm93ICdleGNlcHRpb246IFVuYWJsZSB0byBzZXJpYWxpemUgdW5yZWNvZ25pemVkIGlucHV0JztcblxuXG5cdFx0ZnVuY3Rpb24gdW5wYWNrQ29uZmlnKClcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcgIT09ICdvYmplY3QnKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZy5kZWxpbWl0ZXIgPT09ICdzdHJpbmcnXG5cdFx0XHRcdCYmIF9jb25maWcuZGVsaW1pdGVyLmxlbmd0aCA9PT0gMVxuXHRcdFx0XHQmJiBQYXBhLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoX2NvbmZpZy5kZWxpbWl0ZXIpID09PSAtMSlcblx0XHRcdHtcblx0XHRcdFx0X2RlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcucXVvdGVzID09PSAnYm9vbGVhbidcblx0XHRcdFx0fHwgX2NvbmZpZy5xdW90ZXMgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdFx0X3F1b3RlcyA9IF9jb25maWcucXVvdGVzO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcubmV3bGluZSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdF9uZXdsaW5lID0gX2NvbmZpZy5uZXdsaW5lO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcucXVvdGVDaGFyID09PSAnc3RyaW5nJylcblx0XHRcdFx0X3F1b3RlQ2hhciA9IF9jb25maWcucXVvdGVDaGFyO1xuXG5cdFx0XHRpZiAodHlwZW9mIF9jb25maWcuaGVhZGVyID09PSAnYm9vbGVhbicpXG5cdFx0XHRcdF93cml0ZUhlYWRlciA9IF9jb25maWcuaGVhZGVyO1xuXHRcdH1cblxuXG5cdFx0LyoqIFR1cm5zIGFuIG9iamVjdCdzIGtleXMgaW50byBhbiBhcnJheSAqL1xuXHRcdGZ1bmN0aW9uIG9iamVjdEtleXMob2JqKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jylcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0dmFyIGtleXMgPSBbXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBvYmopXG5cdFx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0cmV0dXJuIGtleXM7XG5cdFx0fVxuXG5cdFx0LyoqIFRoZSBkb3VibGUgZm9yIGxvb3AgdGhhdCBpdGVyYXRlcyB0aGUgZGF0YSBhbmQgd3JpdGVzIG91dCBhIENTViBzdHJpbmcgaW5jbHVkaW5nIGhlYWRlciByb3cgKi9cblx0XHRmdW5jdGlvbiBzZXJpYWxpemUoZmllbGRzLCBkYXRhKVxuXHRcdHtcblx0XHRcdHZhciBjc3YgPSAnJztcblxuXHRcdFx0aWYgKHR5cGVvZiBmaWVsZHMgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRmaWVsZHMgPSBKU09OLnBhcnNlKGZpZWxkcyk7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblxuXHRcdFx0dmFyIGhhc0hlYWRlciA9IGZpZWxkcyBpbnN0YW5jZW9mIEFycmF5ICYmIGZpZWxkcy5sZW5ndGggPiAwO1xuXHRcdFx0dmFyIGRhdGFLZXllZEJ5RmllbGQgPSAhKGRhdGFbMF0gaW5zdGFuY2VvZiBBcnJheSk7XG5cblx0XHRcdC8vIElmIHRoZXJlIGEgaGVhZGVyIHJvdywgd3JpdGUgaXQgZmlyc3Rcblx0XHRcdGlmIChoYXNIZWFkZXIgJiYgX3dyaXRlSGVhZGVyKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpID4gMClcblx0XHRcdFx0XHRcdGNzdiArPSBfZGVsaW1pdGVyO1xuXHRcdFx0XHRcdGNzdiArPSBzYWZlKGZpZWxkc1tpXSwgaSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMClcblx0XHRcdFx0XHRjc3YgKz0gX25ld2xpbmU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZW4gd3JpdGUgb3V0IHRoZSBkYXRhXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBkYXRhLmxlbmd0aDsgcm93KyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtYXhDb2wgPSBoYXNIZWFkZXIgPyBmaWVsZHMubGVuZ3RoIDogZGF0YVtyb3ddLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtYXhDb2w7IGNvbCsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGNvbCA+IDApXG5cdFx0XHRcdFx0XHRjc3YgKz0gX2RlbGltaXRlcjtcblx0XHRcdFx0XHR2YXIgY29sSWR4ID0gaGFzSGVhZGVyICYmIGRhdGFLZXllZEJ5RmllbGQgPyBmaWVsZHNbY29sXSA6IGNvbDtcblx0XHRcdFx0XHRjc3YgKz0gc2FmZShkYXRhW3Jvd11bY29sSWR4XSwgY29sKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyb3cgPCBkYXRhLmxlbmd0aCAtIDEpXG5cdFx0XHRcdFx0Y3N2ICs9IF9uZXdsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY3N2O1xuXHRcdH1cblxuXHRcdC8qKiBFbmNsb3NlcyBhIHZhbHVlIGFyb3VuZCBxdW90ZXMgaWYgbmVlZGVkIChtYWtlcyBhIHZhbHVlIHNhZmUgZm9yIENTViBpbnNlcnRpb24pICovXG5cdFx0ZnVuY3Rpb24gc2FmZShzdHIsIGNvbClcblx0XHR7XG5cdFx0XHRpZiAodHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcgfHwgc3RyID09PSBudWxsKVxuXHRcdFx0XHRyZXR1cm4gJyc7XG5cblx0XHRcdHN0ciA9IHN0ci50b1N0cmluZygpLnJlcGxhY2UocXVvdGVDaGFyUmVnZXgsIF9xdW90ZUNoYXIrX3F1b3RlQ2hhcik7XG5cblx0XHRcdHZhciBuZWVkc1F1b3RlcyA9ICh0eXBlb2YgX3F1b3RlcyA9PT0gJ2Jvb2xlYW4nICYmIF9xdW90ZXMpXG5cdFx0XHRcdFx0XHRcdHx8IChfcXVvdGVzIGluc3RhbmNlb2YgQXJyYXkgJiYgX3F1b3Rlc1tjb2xdKVxuXHRcdFx0XHRcdFx0XHR8fCBoYXNBbnkoc3RyLCBQYXBhLkJBRF9ERUxJTUlURVJTKVxuXHRcdFx0XHRcdFx0XHR8fCBzdHIuaW5kZXhPZihfZGVsaW1pdGVyKSA+IC0xXG5cdFx0XHRcdFx0XHRcdHx8IHN0ci5jaGFyQXQoMCkgPT09ICcgJ1xuXHRcdFx0XHRcdFx0XHR8fCBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKSA9PT0gJyAnO1xuXG5cdFx0XHRyZXR1cm4gbmVlZHNRdW90ZXMgPyBfcXVvdGVDaGFyICsgc3RyICsgX3F1b3RlQ2hhciA6IHN0cjtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYXNBbnkoc3RyLCBzdWJzdHJpbmdzKVxuXHRcdHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic3RyaW5ncy5sZW5ndGg7IGkrKylcblx0XHRcdFx0aWYgKHN0ci5pbmRleE9mKHN1YnN0cmluZ3NbaV0pID4gLTEpXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqIENodW5rU3RyZWFtZXIgaXMgdGhlIGJhc2UgcHJvdG90eXBlIGZvciB2YXJpb3VzIHN0cmVhbWVyIGltcGxlbWVudGF0aW9ucy4gKi9cblx0ZnVuY3Rpb24gQ2h1bmtTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHR0aGlzLl9oYW5kbGUgPSBudWxsO1xuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XG5cdFx0dGhpcy5faW5wdXQgPSBudWxsO1xuXHRcdHRoaXMuX2Jhc2VJbmRleCA9IDA7XG5cdFx0dGhpcy5fcGFydGlhbExpbmUgPSAnJztcblx0XHR0aGlzLl9yb3dDb3VudCA9IDA7XG5cdFx0dGhpcy5fc3RhcnQgPSAwO1xuXHRcdHRoaXMuX25leHRDaHVuayA9IG51bGw7XG5cdFx0dGhpcy5pc0ZpcnN0Q2h1bmsgPSB0cnVlO1xuXHRcdHRoaXMuX2NvbXBsZXRlUmVzdWx0cyA9IHtcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0ZXJyb3JzOiBbXSxcblx0XHRcdG1ldGE6IHt9XG5cdFx0fTtcblx0XHRyZXBsYWNlQ29uZmlnLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHRoaXMucGFyc2VDaHVuayA9IGZ1bmN0aW9uKGNodW5rKVxuXHRcdHtcblx0XHRcdC8vIEZpcnN0IGNodW5rIHByZS1wcm9jZXNzaW5nXG5cdFx0XHRpZiAodGhpcy5pc0ZpcnN0Q2h1bmsgJiYgaXNGdW5jdGlvbih0aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuaykpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBtb2RpZmllZENodW5rID0gdGhpcy5fY29uZmlnLmJlZm9yZUZpcnN0Q2h1bmsoY2h1bmspO1xuXHRcdFx0XHRpZiAobW9kaWZpZWRDaHVuayAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRcdGNodW5rID0gbW9kaWZpZWRDaHVuaztcblx0XHRcdH1cblx0XHRcdHRoaXMuaXNGaXJzdENodW5rID0gZmFsc2U7XG5cblx0XHRcdC8vIFJlam9pbiB0aGUgbGluZSB3ZSBsaWtlbHkganVzdCBzcGxpdCBpbiB0d28gYnkgY2h1bmtpbmcgdGhlIGZpbGVcblx0XHRcdHZhciBhZ2dyZWdhdGUgPSB0aGlzLl9wYXJ0aWFsTGluZSArIGNodW5rO1xuXHRcdFx0dGhpcy5fcGFydGlhbExpbmUgPSAnJztcblxuXHRcdFx0dmFyIHJlc3VsdHMgPSB0aGlzLl9oYW5kbGUucGFyc2UoYWdncmVnYXRlLCB0aGlzLl9iYXNlSW5kZXgsICF0aGlzLl9maW5pc2hlZCk7XG5cblx0XHRcdGlmICh0aGlzLl9oYW5kbGUucGF1c2VkKCkgfHwgdGhpcy5faGFuZGxlLmFib3J0ZWQoKSlcblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHR2YXIgbGFzdEluZGV4ID0gcmVzdWx0cy5tZXRhLmN1cnNvcjtcblxuXHRcdFx0aWYgKCF0aGlzLl9maW5pc2hlZClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fcGFydGlhbExpbmUgPSBhZ2dyZWdhdGUuc3Vic3RyaW5nKGxhc3RJbmRleCAtIHRoaXMuX2Jhc2VJbmRleCk7XG5cdFx0XHRcdHRoaXMuX2Jhc2VJbmRleCA9IGxhc3RJbmRleDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5kYXRhKVxuXHRcdFx0XHR0aGlzLl9yb3dDb3VudCArPSByZXN1bHRzLmRhdGEubGVuZ3RoO1xuXG5cdFx0XHR2YXIgZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ID0gdGhpcy5fZmluaXNoZWQgfHwgKHRoaXMuX2NvbmZpZy5wcmV2aWV3ICYmIHRoaXMuX3Jvd0NvdW50ID49IHRoaXMuX2NvbmZpZy5wcmV2aWV3KTtcblxuXHRcdFx0aWYgKElTX1BBUEFfV09SS0VSKVxuXHRcdFx0e1xuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHJlc3VsdHM6IHJlc3VsdHMsXG5cdFx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRcdGZpbmlzaGVkOiBmaW5pc2hlZEluY2x1ZGluZ1ByZXZpZXdcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5jaHVuaykpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2NvbmZpZy5jaHVuayhyZXN1bHRzLCB0aGlzLl9oYW5kbGUpO1xuXHRcdFx0XHRpZiAodGhpcy5fcGF1c2VkKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0cmVzdWx0cyA9IHVuZGVmaW5lZDtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRoaXMuX2NvbmZpZy5zdGVwICYmICF0aGlzLl9jb25maWcuY2h1bmspIHtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzLmRhdGEgPSB0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YS5jb25jYXQocmVzdWx0cy5kYXRhKTtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycyA9IHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMuY29uY2F0KHJlc3VsdHMuZXJyb3JzKTtcblx0XHRcdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzLm1ldGEgPSByZXN1bHRzLm1ldGE7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmaW5pc2hlZEluY2x1ZGluZ1ByZXZpZXcgJiYgaXNGdW5jdGlvbih0aGlzLl9jb25maWcuY29tcGxldGUpICYmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5tZXRhLmFib3J0ZWQpKVxuXHRcdFx0XHR0aGlzLl9jb25maWcuY29tcGxldGUodGhpcy5fY29tcGxldGVSZXN1bHRzLCB0aGlzLl9pbnB1dCk7XG5cblx0XHRcdGlmICghZmluaXNoZWRJbmNsdWRpbmdQcmV2aWV3ICYmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5tZXRhLnBhdXNlZCkpXG5cdFx0XHRcdHRoaXMuX25leHRDaHVuaygpO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHR9O1xuXG5cdFx0dGhpcy5fc2VuZEVycm9yID0gZnVuY3Rpb24oZXJyb3IpXG5cdFx0e1xuXHRcdFx0aWYgKGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmVycm9yKSlcblx0XHRcdFx0dGhpcy5fY29uZmlnLmVycm9yKGVycm9yKTtcblx0XHRcdGVsc2UgaWYgKElTX1BBUEFfV09SS0VSICYmIHRoaXMuX2NvbmZpZy5lcnJvcilcblx0XHRcdHtcblx0XHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHR3b3JrZXJJZDogUGFwYS5XT1JLRVJfSUQsXG5cdFx0XHRcdFx0ZXJyb3I6IGVycm9yLFxuXHRcdFx0XHRcdGZpbmlzaGVkOiBmYWxzZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcmVwbGFjZUNvbmZpZyhjb25maWcpXG5cdFx0e1xuXHRcdFx0Ly8gRGVlcC1jb3B5IHRoZSBjb25maWcgc28gd2UgY2FuIGVkaXQgaXRcblx0XHRcdHZhciBjb25maWdDb3B5ID0gY29weShjb25maWcpO1xuXHRcdFx0Y29uZmlnQ29weS5jaHVua1NpemUgPSBwYXJzZUludChjb25maWdDb3B5LmNodW5rU2l6ZSk7XHQvLyBwYXJzZUludCBWRVJZIGltcG9ydGFudCBzbyB3ZSBkb24ndCBjb25jYXRlbmF0ZSBzdHJpbmdzIVxuXHRcdFx0aWYgKCFjb25maWcuc3RlcCAmJiAhY29uZmlnLmNodW5rKVxuXHRcdFx0XHRjb25maWdDb3B5LmNodW5rU2l6ZSA9IG51bGw7ICAvLyBkaXNhYmxlIFJhbmdlIGhlYWRlciBpZiBub3Qgc3RyZWFtaW5nOyBiYWQgdmFsdWVzIGJyZWFrIElJUyAtIHNlZSBpc3N1ZSAjMTk2XG5cdFx0XHR0aGlzLl9oYW5kbGUgPSBuZXcgUGFyc2VySGFuZGxlKGNvbmZpZ0NvcHkpO1xuXHRcdFx0dGhpcy5faGFuZGxlLnN0cmVhbWVyID0gdGhpcztcblx0XHRcdHRoaXMuX2NvbmZpZyA9IGNvbmZpZ0NvcHk7XHQvLyBwZXJzaXN0IHRoZSBjb3B5IHRvIHRoZSBjYWxsZXJcblx0XHR9XG5cdH1cblxuXG5cdGZ1bmN0aW9uIE5ldHdvcmtTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0aWYgKCFjb25maWcuY2h1bmtTaXplKVxuXHRcdFx0Y29uZmlnLmNodW5rU2l6ZSA9IFBhcGEuUmVtb3RlQ2h1bmtTaXplO1xuXHRcdENodW5rU3RyZWFtZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dmFyIHhocjtcblxuXHRcdGlmIChJU19XT1JLRVIpXG5cdFx0e1xuXHRcdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9yZWFkQ2h1bmsoKTtcblx0XHRcdFx0dGhpcy5fY2h1bmtMb2FkZWQoKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR0aGlzLnN0cmVhbSA9IGZ1bmN0aW9uKHVybClcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IHVybDtcblx0XHRcdHRoaXMuX25leHRDaHVuaygpO1x0Ly8gU3RhcnRzIHN0cmVhbWluZ1xuXHRcdH07XG5cblx0XHR0aGlzLl9yZWFkQ2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX2ZpbmlzaGVkKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jaHVua0xvYWRlZCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0XHRpZiAodGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscylcblx0XHRcdHtcblx0XHRcdFx0eGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMuX2NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghSVNfV09SS0VSKVxuXHRcdFx0e1xuXHRcdFx0XHR4aHIub25sb2FkID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rTG9hZGVkLCB0aGlzKTtcblx0XHRcdFx0eGhyLm9uZXJyb3IgPSBiaW5kRnVuY3Rpb24odGhpcy5fY2h1bmtFcnJvciwgdGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdHhoci5vcGVuKCdHRVQnLCB0aGlzLl9pbnB1dCwgIUlTX1dPUktFUik7XG5cdFx0XHQvLyBIZWFkZXJzIGNhbiBvbmx5IGJlIHNldCB3aGVuIG9uY2UgdGhlIHJlcXVlc3Qgc3RhdGUgaXMgT1BFTkVEXG5cdFx0XHRpZiAodGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnMpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBoZWFkZXJzID0gdGhpcy5fY29uZmlnLmRvd25sb2FkUmVxdWVzdEhlYWRlcnM7XG5cblx0XHRcdFx0Zm9yICh2YXIgaGVhZGVyTmFtZSBpbiBoZWFkZXJzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgaGVhZGVyc1toZWFkZXJOYW1lXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBlbmQgPSB0aGlzLl9zdGFydCArIHRoaXMuX2NvbmZpZy5jaHVua1NpemUgLSAxO1x0Ly8gbWludXMgb25lIGJlY2F1c2UgYnl0ZSByYW5nZSBpcyBpbmNsdXNpdmVcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoJ1JhbmdlJywgJ2J5dGVzPScrdGhpcy5fc3RhcnQrJy0nK2VuZCk7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdJZi1Ob25lLU1hdGNoJywgJ3dlYmtpdC1uby1jYWNoZScpOyAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODI2NzJcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0eGhyLnNlbmQoKTtcblx0XHRcdH1cblx0XHRcdGNhdGNoIChlcnIpIHtcblx0XHRcdFx0dGhpcy5fY2h1bmtFcnJvcihlcnIubWVzc2FnZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChJU19XT1JLRVIgJiYgeGhyLnN0YXR1cyA9PT0gMClcblx0XHRcdFx0dGhpcy5fY2h1bmtFcnJvcigpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLl9zdGFydCArPSB0aGlzLl9jb25maWcuY2h1bmtTaXplO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rTG9hZGVkID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSAhPSA0KVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gNDAwKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9jaHVua0Vycm9yKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fZmluaXNoZWQgPSAhdGhpcy5fY29uZmlnLmNodW5rU2l6ZSB8fCB0aGlzLl9zdGFydCA+IGdldEZpbGVTaXplKHhocik7XG5cdFx0XHR0aGlzLnBhcnNlQ2h1bmsoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtFcnJvciA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSlcblx0XHR7XG5cdFx0XHR2YXIgZXJyb3JUZXh0ID0geGhyLnN0YXR1c1RleHQgfHwgZXJyb3JNZXNzYWdlO1xuXHRcdFx0dGhpcy5fc2VuZEVycm9yKGVycm9yVGV4dCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0RmlsZVNpemUoeGhyKVxuXHRcdHtcblx0XHRcdHZhciBjb250ZW50UmFuZ2UgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtUmFuZ2UnKTtcblx0XHRcdGlmIChjb250ZW50UmFuZ2UgPT09IG51bGwpIHsgLy8gbm8gY29udGVudCByYW5nZSwgdGhlbiBmaW5pc2ghXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdHJldHVybiBwYXJzZUludChjb250ZW50UmFuZ2Uuc3Vic3RyKGNvbnRlbnRSYW5nZS5sYXN0SW5kZXhPZignLycpICsgMSkpO1xuXHRcdH1cblx0fVxuXHROZXR3b3JrU3RyZWFtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDaHVua1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdE5ldHdvcmtTdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOZXR3b3JrU3RyZWFtZXI7XG5cblxuXHRmdW5jdGlvbiBGaWxlU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdGlmICghY29uZmlnLmNodW5rU2l6ZSlcblx0XHRcdGNvbmZpZy5jaHVua1NpemUgPSBQYXBhLkxvY2FsQ2h1bmtTaXplO1xuXHRcdENodW5rU3RyZWFtZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dmFyIHJlYWRlciwgc2xpY2U7XG5cblx0XHQvLyBGaWxlUmVhZGVyIGlzIGJldHRlciB0aGFuIEZpbGVSZWFkZXJTeW5jIChldmVuIGluIHdvcmtlcikgLSBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjQ3MDg2NDkvMTA0ODg2MlxuXHRcdC8vIEJ1dCBGaXJlZm94IGlzIGEgcGlsbCwgdG9vIC0gc2VlIGlzc3VlICM3NjogaHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZS9pc3N1ZXMvNzZcblx0XHR2YXIgdXNpbmdBc3luY1JlYWRlciA9IHR5cGVvZiBGaWxlUmVhZGVyICE9PSAndW5kZWZpbmVkJztcdC8vIFNhZmFyaSBkb2Vzbid0IGNvbnNpZGVyIGl0IGEgZnVuY3Rpb24gLSBzZWUgaXNzdWUgIzEwNVxuXG5cdFx0dGhpcy5zdHJlYW0gPSBmdW5jdGlvbihmaWxlKVxuXHRcdHtcblx0XHRcdHRoaXMuX2lucHV0ID0gZmlsZTtcblx0XHRcdHNsaWNlID0gZmlsZS5zbGljZSB8fCBmaWxlLndlYmtpdFNsaWNlIHx8IGZpbGUubW96U2xpY2U7XG5cblx0XHRcdGlmICh1c2luZ0FzeW5jUmVhZGVyKVxuXHRcdFx0e1xuXHRcdFx0XHRyZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1x0XHQvLyBQcmVmZXJyZWQgbWV0aG9kIG9mIHJlYWRpbmcgZmlsZXMsIGV2ZW4gaW4gd29ya2Vyc1xuXHRcdFx0XHRyZWFkZXIub25sb2FkID0gYmluZEZ1bmN0aW9uKHRoaXMuX2NodW5rTG9hZGVkLCB0aGlzKTtcblx0XHRcdFx0cmVhZGVyLm9uZXJyb3IgPSBiaW5kRnVuY3Rpb24odGhpcy5fY2h1bmtFcnJvciwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyU3luYygpO1x0Ly8gSGFjayBmb3IgcnVubmluZyBpbiBhIHdlYiB3b3JrZXIgaW4gRmlyZWZveFxuXG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsoKTtcdC8vIFN0YXJ0cyBzdHJlYW1pbmdcblx0XHR9O1xuXG5cdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICghdGhpcy5fZmluaXNoZWQgJiYgKCF0aGlzLl9jb25maWcucHJldmlldyB8fCB0aGlzLl9yb3dDb3VudCA8IHRoaXMuX2NvbmZpZy5wcmV2aWV3KSlcblx0XHRcdFx0dGhpcy5fcmVhZENodW5rKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcmVhZENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHZhciBpbnB1dCA9IHRoaXMuX2lucHV0O1xuXHRcdFx0aWYgKHRoaXMuX2NvbmZpZy5jaHVua1NpemUpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBlbmQgPSBNYXRoLm1pbih0aGlzLl9zdGFydCArIHRoaXMuX2NvbmZpZy5jaHVua1NpemUsIHRoaXMuX2lucHV0LnNpemUpO1xuXHRcdFx0XHRpbnB1dCA9IHNsaWNlLmNhbGwoaW5wdXQsIHRoaXMuX3N0YXJ0LCBlbmQpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHR4dCA9IHJlYWRlci5yZWFkQXNUZXh0KGlucHV0LCB0aGlzLl9jb25maWcuZW5jb2RpbmcpO1xuXHRcdFx0aWYgKCF1c2luZ0FzeW5jUmVhZGVyKVxuXHRcdFx0XHR0aGlzLl9jaHVua0xvYWRlZCh7IHRhcmdldDogeyByZXN1bHQ6IHR4dCB9IH0pO1x0Ly8gbWltaWMgdGhlIGFzeW5jIHNpZ25hdHVyZVxuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rTG9hZGVkID0gZnVuY3Rpb24oZXZlbnQpXG5cdFx0e1xuXHRcdFx0Ly8gVmVyeSBpbXBvcnRhbnQgdG8gaW5jcmVtZW50IHN0YXJ0IGVhY2ggdGltZSBiZWZvcmUgaGFuZGxpbmcgcmVzdWx0c1xuXHRcdFx0dGhpcy5fc3RhcnQgKz0gdGhpcy5fY29uZmlnLmNodW5rU2l6ZTtcblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gIXRoaXMuX2NvbmZpZy5jaHVua1NpemUgfHwgdGhpcy5fc3RhcnQgPj0gdGhpcy5faW5wdXQuc2l6ZTtcblx0XHRcdHRoaXMucGFyc2VDaHVuayhldmVudC50YXJnZXQucmVzdWx0KTtcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0Vycm9yID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHRoaXMuX3NlbmRFcnJvcihyZWFkZXIuZXJyb3IpO1xuXHRcdH1cblxuXHR9XG5cdEZpbGVTdHJlYW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENodW5rU3RyZWFtZXIucHJvdG90eXBlKTtcblx0RmlsZVN0cmVhbWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEZpbGVTdHJlYW1lcjtcblxuXG5cdGZ1bmN0aW9uIFN0cmluZ1N0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciBzdHJpbmc7XG5cdFx0dmFyIHJlbWFpbmluZztcblx0XHR0aGlzLnN0cmVhbSA9IGZ1bmN0aW9uKHMpXG5cdFx0e1xuXHRcdFx0c3RyaW5nID0gcztcblx0XHRcdHJlbWFpbmluZyA9IHM7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbmV4dENodW5rKCk7XG5cdFx0fVxuXHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAodGhpcy5fZmluaXNoZWQpIHJldHVybjtcblx0XHRcdHZhciBzaXplID0gdGhpcy5fY29uZmlnLmNodW5rU2l6ZTtcblx0XHRcdHZhciBjaHVuayA9IHNpemUgPyByZW1haW5pbmcuc3Vic3RyKDAsIHNpemUpIDogcmVtYWluaW5nO1xuXHRcdFx0cmVtYWluaW5nID0gc2l6ZSA/IHJlbWFpbmluZy5zdWJzdHIoc2l6ZSkgOiAnJztcblx0XHRcdHRoaXMuX2ZpbmlzaGVkID0gIXJlbWFpbmluZztcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlQ2h1bmsoY2h1bmspO1xuXHRcdH1cblx0fVxuXHRTdHJpbmdTdHJlYW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN0cmluZ1N0cmVhbWVyLnByb3RvdHlwZSk7XG5cdFN0cmluZ1N0cmVhbWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0cmluZ1N0cmVhbWVyO1xuXG5cblx0ZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1TdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cblx0XHRDaHVua1N0cmVhbWVyLmNhbGwodGhpcywgY29uZmlnKTtcblxuXHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdHZhciBwYXJzZU9uRGF0YSA9IHRydWU7XG5cblx0XHR0aGlzLnN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSlcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dCA9IHN0cmVhbTtcblxuXHRcdFx0dGhpcy5faW5wdXQub24oJ2RhdGEnLCB0aGlzLl9zdHJlYW1EYXRhKTtcblx0XHRcdHRoaXMuX2lucHV0Lm9uKCdlbmQnLCB0aGlzLl9zdHJlYW1FbmQpO1xuXHRcdFx0dGhpcy5faW5wdXQub24oJ2Vycm9yJywgdGhpcy5fc3RyZWFtRXJyb3IpO1xuXHRcdH1cblxuXHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAocXVldWUubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLnBhcnNlQ2h1bmsocXVldWUuc2hpZnQoKSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHBhcnNlT25EYXRhID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9zdHJlYW1EYXRhID0gYmluZEZ1bmN0aW9uKGZ1bmN0aW9uKGNodW5rKVxuXHRcdHtcblx0XHRcdHRyeVxuXHRcdFx0e1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycgPyBjaHVuayA6IGNodW5rLnRvU3RyaW5nKHRoaXMuX2NvbmZpZy5lbmNvZGluZykpO1xuXG5cdFx0XHRcdGlmIChwYXJzZU9uRGF0YSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBhcnNlT25EYXRhID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5wYXJzZUNodW5rKHF1ZXVlLnNoaWZ0KCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZXJyb3IpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3N0cmVhbUVycm9yKGVycm9yKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblxuXHRcdHRoaXMuX3N0cmVhbUVycm9yID0gYmluZEZ1bmN0aW9uKGZ1bmN0aW9uKGVycm9yKVxuXHRcdHtcblx0XHRcdHRoaXMuX3N0cmVhbUNsZWFuVXAoKTtcblx0XHRcdHRoaXMuX3NlbmRFcnJvcihlcnJvci5tZXNzYWdlKTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdHRoaXMuX3N0cmVhbUVuZCA9IGJpbmRGdW5jdGlvbihmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhpcy5fc3RyZWFtQ2xlYW5VcCgpO1xuXHRcdFx0dGhpcy5fZmluaXNoZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5fc3RyZWFtRGF0YSgnJyk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHR0aGlzLl9zdHJlYW1DbGVhblVwID0gYmluZEZ1bmN0aW9uKGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcignZGF0YScsIHRoaXMuX3N0cmVhbURhdGEpO1xuXHRcdFx0dGhpcy5faW5wdXQucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIHRoaXMuX3N0cmVhbUVuZCk7XG5cdFx0XHR0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9zdHJlYW1FcnJvcik7XG5cdFx0fSwgdGhpcyk7XG5cdH1cblx0UmVhZGFibGVTdHJlYW1TdHJlYW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENodW5rU3RyZWFtZXIucHJvdG90eXBlKTtcblx0UmVhZGFibGVTdHJlYW1TdHJlYW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWFkYWJsZVN0cmVhbVN0cmVhbWVyO1xuXG5cblx0Ly8gVXNlIG9uZSBQYXJzZXJIYW5kbGUgcGVyIGVudGlyZSBDU1YgZmlsZSBvciBzdHJpbmdcblx0ZnVuY3Rpb24gUGFyc2VySGFuZGxlKF9jb25maWcpXG5cdHtcblx0XHQvLyBPbmUgZ29hbCBpcyB0byBtaW5pbWl6ZSB0aGUgdXNlIG9mIHJlZ3VsYXIgZXhwcmVzc2lvbnMuLi5cblx0XHR2YXIgRkxPQVQgPSAvXlxccyotPyhcXGQqXFwuP1xcZCt8XFxkK1xcLj9cXGQqKShlWy0rXT9cXGQrKT9cXHMqJC9pO1xuXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBfc3RlcENvdW50ZXIgPSAwO1x0Ly8gTnVtYmVyIG9mIHRpbWVzIHN0ZXAgd2FzIGNhbGxlZCAobnVtYmVyIG9mIHJvd3MgcGFyc2VkKVxuXHRcdHZhciBfaW5wdXQ7XHRcdFx0XHQvLyBUaGUgaW5wdXQgYmVpbmcgcGFyc2VkXG5cdFx0dmFyIF9wYXJzZXI7XHRcdFx0Ly8gVGhlIGNvcmUgcGFyc2VyIGJlaW5nIHVzZWRcblx0XHR2YXIgX3BhdXNlZCA9IGZhbHNlO1x0Ly8gV2hldGhlciB3ZSBhcmUgcGF1c2VkIG9yIG5vdFxuXHRcdHZhciBfYWJvcnRlZCA9IGZhbHNlO1x0Ly8gV2hldGhlciB0aGUgcGFyc2VyIGhhcyBhYm9ydGVkIG9yIG5vdFxuXHRcdHZhciBfZGVsaW1pdGVyRXJyb3I7XHQvLyBUZW1wb3Jhcnkgc3RhdGUgYmV0d2VlbiBkZWxpbWl0ZXIgZGV0ZWN0aW9uIGFuZCBwcm9jZXNzaW5nIHJlc3VsdHNcblx0XHR2YXIgX2ZpZWxkcyA9IFtdO1x0XHQvLyBGaWVsZHMgYXJlIGZyb20gdGhlIGhlYWRlciByb3cgb2YgdGhlIGlucHV0LCBpZiB0aGVyZSBpcyBvbmVcblx0XHR2YXIgX3Jlc3VsdHMgPSB7XHRcdC8vIFRoZSBsYXN0IHJlc3VsdHMgcmV0dXJuZWQgZnJvbSB0aGUgcGFyc2VyXG5cdFx0XHRkYXRhOiBbXSxcblx0XHRcdGVycm9yczogW10sXG5cdFx0XHRtZXRhOiB7fVxuXHRcdH07XG5cblx0XHRpZiAoaXNGdW5jdGlvbihfY29uZmlnLnN0ZXApKVxuXHRcdHtcblx0XHRcdHZhciB1c2VyU3RlcCA9IF9jb25maWcuc3RlcDtcblx0XHRcdF9jb25maWcuc3RlcCA9IGZ1bmN0aW9uKHJlc3VsdHMpXG5cdFx0XHR7XG5cdFx0XHRcdF9yZXN1bHRzID0gcmVzdWx0cztcblxuXHRcdFx0XHRpZiAobmVlZHNIZWFkZXJSb3coKSlcblx0XHRcdFx0XHRwcm9jZXNzUmVzdWx0cygpO1xuXHRcdFx0XHRlbHNlXHQvLyBvbmx5IGNhbGwgdXNlcidzIHN0ZXAgZnVuY3Rpb24gYWZ0ZXIgaGVhZGVyIHJvd1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvY2Vzc1Jlc3VsdHMoKTtcblxuXHRcdFx0XHRcdC8vIEl0J3MgcG9zc2JpbGUgdGhhdCB0aGlzIGxpbmUgd2FzIGVtcHR5IGFuZCB0aGVyZSdzIG5vIHJvdyBoZXJlIGFmdGVyIGFsbFxuXHRcdFx0XHRcdGlmIChfcmVzdWx0cy5kYXRhLmxlbmd0aCA9PT0gMClcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdF9zdGVwQ291bnRlciArPSByZXN1bHRzLmRhdGEubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChfY29uZmlnLnByZXZpZXcgJiYgX3N0ZXBDb3VudGVyID4gX2NvbmZpZy5wcmV2aWV3KVxuXHRcdFx0XHRcdFx0X3BhcnNlci5hYm9ydCgpO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHVzZXJTdGVwKF9yZXN1bHRzLCBzZWxmKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBQYXJzZXMgaW5wdXQuIE1vc3QgdXNlcnMgd29uJ3QgbmVlZCwgYW5kIHNob3VsZG4ndCBtZXNzIHdpdGgsIHRoZSBiYXNlSW5kZXhcblx0XHQgKiBhbmQgaWdub3JlTGFzdFJvdyBwYXJhbWV0ZXJzLiBUaGV5IGFyZSB1c2VkIGJ5IHN0cmVhbWVycyAod3JhcHBlciBmdW5jdGlvbnMpXG5cdFx0ICogd2hlbiBhbiBpbnB1dCBjb21lcyBpbiBtdWx0aXBsZSBjaHVua3MsIGxpa2UgZnJvbSBhIGZpbGUuXG5cdFx0ICovXG5cdFx0dGhpcy5wYXJzZSA9IGZ1bmN0aW9uKGlucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpXG5cdFx0e1xuXHRcdFx0aWYgKCFfY29uZmlnLm5ld2xpbmUpXG5cdFx0XHRcdF9jb25maWcubmV3bGluZSA9IGd1ZXNzTGluZUVuZGluZ3MoaW5wdXQpO1xuXG5cdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSBmYWxzZTtcblx0XHRcdGlmICghX2NvbmZpZy5kZWxpbWl0ZXIpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBkZWxpbUd1ZXNzID0gZ3Vlc3NEZWxpbWl0ZXIoaW5wdXQsIF9jb25maWcubmV3bGluZSwgX2NvbmZpZy5za2lwRW1wdHlMaW5lcyk7XG5cdFx0XHRcdGlmIChkZWxpbUd1ZXNzLnN1Y2Nlc3NmdWwpXG5cdFx0XHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBkZWxpbUd1ZXNzLmJlc3REZWxpbWl0ZXI7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdF9kZWxpbWl0ZXJFcnJvciA9IHRydWU7XHQvLyBhZGQgZXJyb3IgYWZ0ZXIgcGFyc2luZyAob3RoZXJ3aXNlIGl0IHdvdWxkIGJlIG92ZXJ3cml0dGVuKVxuXHRcdFx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gUGFwYS5EZWZhdWx0RGVsaW1pdGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9yZXN1bHRzLm1ldGEuZGVsaW1pdGVyID0gX2NvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKGlzRnVuY3Rpb24oX2NvbmZpZy5kZWxpbWl0ZXIpKVxuXHRcdFx0e1xuXHRcdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyKGlucHV0KTtcblx0XHRcdFx0X3Jlc3VsdHMubWV0YS5kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHBhcnNlckNvbmZpZyA9IGNvcHkoX2NvbmZpZyk7XG5cdFx0XHRpZiAoX2NvbmZpZy5wcmV2aWV3ICYmIF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHRwYXJzZXJDb25maWcucHJldmlldysrO1x0Ly8gdG8gY29tcGVuc2F0ZSBmb3IgaGVhZGVyIHJvd1xuXG5cdFx0XHRfaW5wdXQgPSBpbnB1dDtcblx0XHRcdF9wYXJzZXIgPSBuZXcgUGFyc2VyKHBhcnNlckNvbmZpZyk7XG5cdFx0XHRfcmVzdWx0cyA9IF9wYXJzZXIucGFyc2UoX2lucHV0LCBiYXNlSW5kZXgsIGlnbm9yZUxhc3RSb3cpO1xuXHRcdFx0cHJvY2Vzc1Jlc3VsdHMoKTtcblx0XHRcdHJldHVybiBfcGF1c2VkID8geyBtZXRhOiB7IHBhdXNlZDogdHJ1ZSB9IH0gOiAoX3Jlc3VsdHMgfHwgeyBtZXRhOiB7IHBhdXNlZDogZmFsc2UgfSB9KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYXVzZWQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9wYXVzZWQ7XG5cdFx0fTtcblxuXHRcdHRoaXMucGF1c2UgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0X3BhdXNlZCA9IHRydWU7XG5cdFx0XHRfcGFyc2VyLmFib3J0KCk7XG5cdFx0XHRfaW5wdXQgPSBfaW5wdXQuc3Vic3RyKF9wYXJzZXIuZ2V0Q2hhckluZGV4KCkpO1xuXHRcdH07XG5cblx0XHR0aGlzLnJlc3VtZSA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRfcGF1c2VkID0gZmFsc2U7XG5cdFx0XHRzZWxmLnN0cmVhbWVyLnBhcnNlQ2h1bmsoX2lucHV0KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5hYm9ydGVkID0gZnVuY3Rpb24gKClcblx0XHR7XG5cdFx0XHRyZXR1cm4gX2Fib3J0ZWQ7XG5cdFx0fTtcblxuXHRcdHRoaXMuYWJvcnQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0X2Fib3J0ZWQgPSB0cnVlO1xuXHRcdFx0X3BhcnNlci5hYm9ydCgpO1xuXHRcdFx0X3Jlc3VsdHMubWV0YS5hYm9ydGVkID0gdHJ1ZTtcblx0XHRcdGlmIChpc0Z1bmN0aW9uKF9jb25maWcuY29tcGxldGUpKVxuXHRcdFx0XHRfY29uZmlnLmNvbXBsZXRlKF9yZXN1bHRzKTtcblx0XHRcdF9pbnB1dCA9ICcnO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBwcm9jZXNzUmVzdWx0cygpXG5cdFx0e1xuXHRcdFx0aWYgKF9yZXN1bHRzICYmIF9kZWxpbWl0ZXJFcnJvcilcblx0XHRcdHtcblx0XHRcdFx0YWRkRXJyb3IoJ0RlbGltaXRlcicsICdVbmRldGVjdGFibGVEZWxpbWl0ZXInLCAnVW5hYmxlIHRvIGF1dG8tZGV0ZWN0IGRlbGltaXRpbmcgY2hhcmFjdGVyOyBkZWZhdWx0ZWQgdG8gXFwnJytQYXBhLkRlZmF1bHREZWxpbWl0ZXIrJ1xcJycpO1xuXHRcdFx0XHRfZGVsaW1pdGVyRXJyb3IgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKF9jb25maWcuc2tpcEVtcHR5TGluZXMpXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX3Jlc3VsdHMuZGF0YS5sZW5ndGg7IGkrKylcblx0XHRcdFx0XHRpZiAoX3Jlc3VsdHMuZGF0YVtpXS5sZW5ndGggPT09IDEgJiYgX3Jlc3VsdHMuZGF0YVtpXVswXSA9PT0gJycpXG5cdFx0XHRcdFx0XHRfcmVzdWx0cy5kYXRhLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmVlZHNIZWFkZXJSb3coKSlcblx0XHRcdFx0ZmlsbEhlYWRlckZpZWxkcygpO1xuXG5cdFx0XHRyZXR1cm4gYXBwbHlIZWFkZXJBbmREeW5hbWljVHlwaW5nKCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbmVlZHNIZWFkZXJSb3coKVxuXHRcdHtcblx0XHRcdHJldHVybiBfY29uZmlnLmhlYWRlciAmJiBfZmllbGRzLmxlbmd0aCA9PT0gMDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmaWxsSGVhZGVyRmllbGRzKClcblx0XHR7XG5cdFx0XHRpZiAoIV9yZXN1bHRzKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgbmVlZHNIZWFkZXJSb3coKSAmJiBpIDwgX3Jlc3VsdHMuZGF0YS5sZW5ndGg7IGkrKylcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBfcmVzdWx0cy5kYXRhW2ldLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdF9maWVsZHMucHVzaChfcmVzdWx0cy5kYXRhW2ldW2pdKTtcblx0XHRcdF9yZXN1bHRzLmRhdGEuc3BsaWNlKDAsIDEpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHNob3VsZEFwcGx5RHluYW1pY1R5cGluZyhmaWVsZCkge1xuXHRcdFx0Ly8gQ2FjaGUgZnVuY3Rpb24gdmFsdWVzIHRvIGF2b2lkIGNhbGxpbmcgaXQgZm9yIGVhY2ggcm93XG5cdFx0XHRpZiAoX2NvbmZpZy5keW5hbWljVHlwaW5nRnVuY3Rpb24gJiYgX2NvbmZpZy5keW5hbWljVHlwaW5nW2ZpZWxkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdF9jb25maWcuZHluYW1pY1R5cGluZ1tmaWVsZF0gPSBfY29uZmlnLmR5bmFtaWNUeXBpbmdGdW5jdGlvbihmaWVsZCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gKF9jb25maWcuZHluYW1pY1R5cGluZ1tmaWVsZF0gfHwgX2NvbmZpZy5keW5hbWljVHlwaW5nKSA9PT0gdHJ1ZVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHBhcnNlRHluYW1pYyhmaWVsZCwgdmFsdWUpXG5cdFx0e1xuXHRcdFx0aWYgKHNob3VsZEFwcGx5RHluYW1pY1R5cGluZyhmaWVsZCkpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSAnVFJVRScpXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnIHx8IHZhbHVlID09PSAnRkFMU0UnKVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHJldHVybiB0cnlQYXJzZUZsb2F0KHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhcHBseUhlYWRlckFuZER5bmFtaWNUeXBpbmcoKVxuXHRcdHtcblx0XHRcdGlmICghX3Jlc3VsdHMgfHwgKCFfY29uZmlnLmhlYWRlciAmJiAhX2NvbmZpZy5keW5hbWljVHlwaW5nKSlcblx0XHRcdFx0cmV0dXJuIF9yZXN1bHRzO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByb3cgPSBfY29uZmlnLmhlYWRlciA/IHt9IDogW107XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBfcmVzdWx0cy5kYXRhW2ldLmxlbmd0aDsgaisrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIGZpZWxkID0gajtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBfcmVzdWx0cy5kYXRhW2ldW2pdO1xuXG5cdFx0XHRcdFx0aWYgKF9jb25maWcuaGVhZGVyKVxuXHRcdFx0XHRcdFx0ZmllbGQgPSBqID49IF9maWVsZHMubGVuZ3RoID8gJ19fcGFyc2VkX2V4dHJhJyA6IF9maWVsZHNbal07XG5cblx0XHRcdFx0XHR2YWx1ZSA9IHBhcnNlRHluYW1pYyhmaWVsZCwgdmFsdWUpO1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkID09PSAnX19wYXJzZWRfZXh0cmEnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJvd1tmaWVsZF0gPSByb3dbZmllbGRdIHx8IFtdO1xuXHRcdFx0XHRcdFx0cm93W2ZpZWxkXS5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cm93W2ZpZWxkXSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0X3Jlc3VsdHMuZGF0YVtpXSA9IHJvdztcblxuXHRcdFx0XHRpZiAoX2NvbmZpZy5oZWFkZXIpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaiA+IF9maWVsZHMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0YWRkRXJyb3IoJ0ZpZWxkTWlzbWF0Y2gnLCAnVG9vTWFueUZpZWxkcycsICdUb28gbWFueSBmaWVsZHM6IGV4cGVjdGVkICcgKyBfZmllbGRzLmxlbmd0aCArICcgZmllbGRzIGJ1dCBwYXJzZWQgJyArIGosIGkpO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGogPCBfZmllbGRzLmxlbmd0aClcblx0XHRcdFx0XHRcdGFkZEVycm9yKCdGaWVsZE1pc21hdGNoJywgJ1Rvb0Zld0ZpZWxkcycsICdUb28gZmV3IGZpZWxkczogZXhwZWN0ZWQgJyArIF9maWVsZHMubGVuZ3RoICsgJyBmaWVsZHMgYnV0IHBhcnNlZCAnICsgaiwgaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKF9jb25maWcuaGVhZGVyICYmIF9yZXN1bHRzLm1ldGEpXG5cdFx0XHRcdF9yZXN1bHRzLm1ldGEuZmllbGRzID0gX2ZpZWxkcztcblx0XHRcdHJldHVybiBfcmVzdWx0cztcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBndWVzc0RlbGltaXRlcihpbnB1dCwgbmV3bGluZSwgc2tpcEVtcHR5TGluZXMpXG5cdFx0e1xuXHRcdFx0dmFyIGRlbGltQ2hvaWNlcyA9IFsnLCcsICdcXHQnLCAnfCcsICc7JywgUGFwYS5SRUNPUkRfU0VQLCBQYXBhLlVOSVRfU0VQXTtcblx0XHRcdHZhciBiZXN0RGVsaW0sIGJlc3REZWx0YSwgZmllbGRDb3VudFByZXZSb3c7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVsaW1DaG9pY2VzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgZGVsaW0gPSBkZWxpbUNob2ljZXNbaV07XG5cdFx0XHRcdHZhciBkZWx0YSA9IDAsIGF2Z0ZpZWxkQ291bnQgPSAwLCBlbXB0eUxpbmVzQ291bnQgPSAwO1xuXHRcdFx0XHRmaWVsZENvdW50UHJldlJvdyA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHR2YXIgcHJldmlldyA9IG5ldyBQYXJzZXIoe1xuXHRcdFx0XHRcdGRlbGltaXRlcjogZGVsaW0sXG5cdFx0XHRcdFx0bmV3bGluZTogbmV3bGluZSxcblx0XHRcdFx0XHRwcmV2aWV3OiAxMFxuXHRcdFx0XHR9KS5wYXJzZShpbnB1dCk7XG5cblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwcmV2aWV3LmRhdGEubGVuZ3RoOyBqKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoc2tpcEVtcHR5TGluZXMgJiYgcHJldmlldy5kYXRhW2pdLmxlbmd0aCA9PT0gMSAmJiBwcmV2aWV3LmRhdGFbal1bMF0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRlbXB0eUxpbmVzQ291bnQrK1xuXHRcdFx0XHRcdFx0Y29udGludWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGZpZWxkQ291bnQgPSBwcmV2aWV3LmRhdGFbal0ubGVuZ3RoO1xuXHRcdFx0XHRcdGF2Z0ZpZWxkQ291bnQgKz0gZmllbGRDb3VudDtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgZmllbGRDb3VudFByZXZSb3cgPT09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGZpZWxkQ291bnRQcmV2Um93ID0gZmllbGRDb3VudDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChmaWVsZENvdW50ID4gMSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkZWx0YSArPSBNYXRoLmFicyhmaWVsZENvdW50IC0gZmllbGRDb3VudFByZXZSb3cpO1xuXHRcdFx0XHRcdFx0ZmllbGRDb3VudFByZXZSb3cgPSBmaWVsZENvdW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChwcmV2aWV3LmRhdGEubGVuZ3RoID4gMClcblx0XHRcdFx0XHRhdmdGaWVsZENvdW50IC89IChwcmV2aWV3LmRhdGEubGVuZ3RoIC0gZW1wdHlMaW5lc0NvdW50KTtcblxuXHRcdFx0XHRpZiAoKHR5cGVvZiBiZXN0RGVsdGEgPT09ICd1bmRlZmluZWQnIHx8IGRlbHRhIDwgYmVzdERlbHRhKVxuXHRcdFx0XHRcdCYmIGF2Z0ZpZWxkQ291bnQgPiAxLjk5KVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YmVzdERlbHRhID0gZGVsdGE7XG5cdFx0XHRcdFx0YmVzdERlbGltID0gZGVsaW07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBiZXN0RGVsaW07XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN1Y2Nlc3NmdWw6ICEhYmVzdERlbGltLFxuXHRcdFx0XHRiZXN0RGVsaW1pdGVyOiBiZXN0RGVsaW1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBndWVzc0xpbmVFbmRpbmdzKGlucHV0KVxuXHRcdHtcblx0XHRcdGlucHV0ID0gaW5wdXQuc3Vic3RyKDAsIDEwMjQqMTAyNCk7XHQvLyBtYXggbGVuZ3RoIDEgTUJcblxuXHRcdFx0dmFyIHIgPSBpbnB1dC5zcGxpdCgnXFxyJyk7XG5cblx0XHRcdHZhciBuID0gaW5wdXQuc3BsaXQoJ1xcbicpO1xuXG5cdFx0XHR2YXIgbkFwcGVhcnNGaXJzdCA9IChuLmxlbmd0aCA+IDEgJiYgblswXS5sZW5ndGggPCByWzBdLmxlbmd0aCk7XG5cblx0XHRcdGlmIChyLmxlbmd0aCA9PT0gMSB8fCBuQXBwZWFyc0ZpcnN0KVxuXHRcdFx0XHRyZXR1cm4gJ1xcbic7XG5cblx0XHRcdHZhciBudW1XaXRoTiA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChyW2ldWzBdID09PSAnXFxuJylcblx0XHRcdFx0XHRudW1XaXRoTisrO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVtV2l0aE4gPj0gci5sZW5ndGggLyAyID8gJ1xcclxcbicgOiAnXFxyJztcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cnlQYXJzZUZsb2F0KHZhbClcblx0XHR7XG5cdFx0XHR2YXIgaXNOdW1iZXIgPSBGTE9BVC50ZXN0KHZhbCk7XG5cdFx0XHRyZXR1cm4gaXNOdW1iZXIgPyBwYXJzZUZsb2F0KHZhbCkgOiB2YWw7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkRXJyb3IodHlwZSwgY29kZSwgbXNnLCByb3cpXG5cdFx0e1xuXHRcdFx0X3Jlc3VsdHMuZXJyb3JzLnB1c2goe1xuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRjb2RlOiBjb2RlLFxuXHRcdFx0XHRtZXNzYWdlOiBtc2csXG5cdFx0XHRcdHJvdzogcm93XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXG5cblxuXG5cdC8qKiBUaGUgY29yZSBwYXJzZXIgaW1wbGVtZW50cyBzcGVlZHkgYW5kIGNvcnJlY3QgQ1NWIHBhcnNpbmcgKi9cblx0ZnVuY3Rpb24gUGFyc2VyKGNvbmZpZylcblx0e1xuXHRcdC8vIFVucGFjayB0aGUgY29uZmlnIG9iamVjdFxuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHR2YXIgZGVsaW0gPSBjb25maWcuZGVsaW1pdGVyO1xuXHRcdHZhciBuZXdsaW5lID0gY29uZmlnLm5ld2xpbmU7XG5cdFx0dmFyIGNvbW1lbnRzID0gY29uZmlnLmNvbW1lbnRzO1xuXHRcdHZhciBzdGVwID0gY29uZmlnLnN0ZXA7XG5cdFx0dmFyIHByZXZpZXcgPSBjb25maWcucHJldmlldztcblx0XHR2YXIgZmFzdE1vZGUgPSBjb25maWcuZmFzdE1vZGU7XG5cdFx0dmFyIHF1b3RlQ2hhciA9IGNvbmZpZy5xdW90ZUNoYXIgfHwgJ1wiJztcblxuXHRcdC8vIERlbGltaXRlciBtdXN0IGJlIHZhbGlkXG5cdFx0aWYgKHR5cGVvZiBkZWxpbSAhPT0gJ3N0cmluZydcblx0XHRcdHx8IFBhcGEuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihkZWxpbSkgPiAtMSlcblx0XHRcdGRlbGltID0gJywnO1xuXG5cdFx0Ly8gQ29tbWVudCBjaGFyYWN0ZXIgbXVzdCBiZSB2YWxpZFxuXHRcdGlmIChjb21tZW50cyA9PT0gZGVsaW0pXG5cdFx0XHR0aHJvdyAnQ29tbWVudCBjaGFyYWN0ZXIgc2FtZSBhcyBkZWxpbWl0ZXInO1xuXHRcdGVsc2UgaWYgKGNvbW1lbnRzID09PSB0cnVlKVxuXHRcdFx0Y29tbWVudHMgPSAnIyc7XG5cdFx0ZWxzZSBpZiAodHlwZW9mIGNvbW1lbnRzICE9PSAnc3RyaW5nJ1xuXHRcdFx0fHwgUGFwYS5CQURfREVMSU1JVEVSUy5pbmRleE9mKGNvbW1lbnRzKSA+IC0xKVxuXHRcdFx0Y29tbWVudHMgPSBmYWxzZTtcblxuXHRcdC8vIE5ld2xpbmUgbXVzdCBiZSB2YWxpZDogXFxyLCBcXG4sIG9yIFxcclxcblxuXHRcdGlmIChuZXdsaW5lICE9ICdcXG4nICYmIG5ld2xpbmUgIT0gJ1xccicgJiYgbmV3bGluZSAhPSAnXFxyXFxuJylcblx0XHRcdG5ld2xpbmUgPSAnXFxuJztcblxuXHRcdC8vIFdlJ3JlIGdvbm5hIG5lZWQgdGhlc2UgYXQgdGhlIFBhcnNlciBzY29wZVxuXHRcdHZhciBjdXJzb3IgPSAwO1xuXHRcdHZhciBhYm9ydGVkID0gZmFsc2U7XG5cblx0XHR0aGlzLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGJhc2VJbmRleCwgaWdub3JlTGFzdFJvdylcblx0XHR7XG5cdFx0XHQvLyBGb3Igc29tZSByZWFzb24sIGluIENocm9tZSwgdGhpcyBzcGVlZHMgdGhpbmdzIHVwICghPylcblx0XHRcdGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKVxuXHRcdFx0XHR0aHJvdyAnSW5wdXQgbXVzdCBiZSBhIHN0cmluZyc7XG5cblx0XHRcdC8vIFdlIGRvbid0IG5lZWQgdG8gY29tcHV0ZSBzb21lIG9mIHRoZXNlIGV2ZXJ5IHRpbWUgcGFyc2UoKSBpcyBjYWxsZWQsXG5cdFx0XHQvLyBidXQgaGF2aW5nIHRoZW0gaW4gYSBtb3JlIGxvY2FsIHNjb3BlIHNlZW1zIHRvIHBlcmZvcm0gYmV0dGVyXG5cdFx0XHR2YXIgaW5wdXRMZW4gPSBpbnB1dC5sZW5ndGgsXG5cdFx0XHRcdGRlbGltTGVuID0gZGVsaW0ubGVuZ3RoLFxuXHRcdFx0XHRuZXdsaW5lTGVuID0gbmV3bGluZS5sZW5ndGgsXG5cdFx0XHRcdGNvbW1lbnRzTGVuID0gY29tbWVudHMubGVuZ3RoO1xuXHRcdFx0dmFyIHN0ZXBJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbihzdGVwKTtcblxuXHRcdFx0Ly8gRXN0YWJsaXNoIHN0YXJ0aW5nIHN0YXRlXG5cdFx0XHRjdXJzb3IgPSAwO1xuXHRcdFx0dmFyIGRhdGEgPSBbXSwgZXJyb3JzID0gW10sIHJvdyA9IFtdLCBsYXN0Q3Vyc29yID0gMDtcblxuXHRcdFx0aWYgKCFpbnB1dClcblx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblxuXHRcdFx0aWYgKGZhc3RNb2RlIHx8IChmYXN0TW9kZSAhPT0gZmFsc2UgJiYgaW5wdXQuaW5kZXhPZihxdW90ZUNoYXIpID09PSAtMSkpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByb3dzID0gaW5wdXQuc3BsaXQobmV3bGluZSk7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciByb3cgPSByb3dzW2ldO1xuXHRcdFx0XHRcdGN1cnNvciArPSByb3cubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChpICE9PSByb3dzLmxlbmd0aCAtIDEpXG5cdFx0XHRcdFx0XHRjdXJzb3IgKz0gbmV3bGluZS5sZW5ndGg7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaWdub3JlTGFzdFJvdylcblx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0aWYgKGNvbW1lbnRzICYmIHJvdy5zdWJzdHIoMCwgY29tbWVudHNMZW4pID09PSBjb21tZW50cylcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkYXRhID0gW107XG5cdFx0XHRcdFx0XHRwdXNoUm93KHJvdy5zcGxpdChkZWxpbSkpO1xuXHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRpZiAoYWJvcnRlZClcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0cHVzaFJvdyhyb3cuc3BsaXQoZGVsaW0pKTtcblx0XHRcdFx0XHRpZiAocHJldmlldyAmJiBpID49IHByZXZpZXcpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZGF0YSA9IGRhdGEuc2xpY2UoMCwgcHJldmlldyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSh0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG5leHREZWxpbSA9IGlucHV0LmluZGV4T2YoZGVsaW0sIGN1cnNvcik7XG5cdFx0XHR2YXIgbmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cdFx0XHR2YXIgcXVvdGVDaGFyUmVnZXggPSBuZXcgUmVnRXhwKHF1b3RlQ2hhcitxdW90ZUNoYXIsICdnJyk7XG5cblx0XHRcdC8vIFBhcnNlciBsb29wXG5cdFx0XHRmb3IgKDs7KVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBGaWVsZCBoYXMgb3BlbmluZyBxdW90ZVxuXHRcdFx0XHRpZiAoaW5wdXRbY3Vyc29yXSA9PT0gcXVvdGVDaGFyKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gU3RhcnQgb3VyIHNlYXJjaCBmb3IgdGhlIGNsb3NpbmcgcXVvdGUgd2hlcmUgdGhlIGN1cnNvciBpc1xuXHRcdFx0XHRcdHZhciBxdW90ZVNlYXJjaCA9IGN1cnNvcjtcblxuXHRcdFx0XHRcdC8vIFNraXAgdGhlIG9wZW5pbmcgcXVvdGVcblx0XHRcdFx0XHRjdXJzb3IrKztcblxuXHRcdFx0XHRcdGZvciAoOzspXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Ly8gRmluZCBjbG9zaW5nIHF1b3RlXG5cdFx0XHRcdFx0XHR2YXIgcXVvdGVTZWFyY2ggPSBpbnB1dC5pbmRleE9mKHF1b3RlQ2hhciwgcXVvdGVTZWFyY2grMSk7XG5cblx0XHRcdFx0XHRcdC8vTm8gb3RoZXIgcXVvdGVzIGFyZSBmb3VuZCAtIG5vIG90aGVyIGRlbGltaXRlcnNcblx0XHRcdFx0XHRcdGlmIChxdW90ZVNlYXJjaCA9PT0gLTEpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGlmICghaWdub3JlTGFzdFJvdykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIE5vIGNsb3NpbmcgcXVvdGUuLi4gd2hhdCBhIHBpdHlcblx0XHRcdFx0XHRcdFx0XHRlcnJvcnMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnUXVvdGVzJyxcblx0XHRcdFx0XHRcdFx0XHRcdGNvZGU6ICdNaXNzaW5nUXVvdGVzJyxcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdRdW90ZWQgZmllbGQgdW50ZXJtaW5hdGVkJyxcblx0XHRcdFx0XHRcdFx0XHRcdHJvdzogZGF0YS5sZW5ndGgsXHQvLyByb3cgaGFzIHlldCB0byBiZSBpbnNlcnRlZFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg6IGN1cnNvclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmaW5pc2goKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQ2xvc2luZyBxdW90ZSBhdCBFT0Zcblx0XHRcdFx0XHRcdGlmIChxdW90ZVNlYXJjaCA9PT0gaW5wdXRMZW4tMSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dmFyIHZhbHVlID0gaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgcXVvdGVTZWFyY2gpLnJlcGxhY2UocXVvdGVDaGFyUmVnZXgsIHF1b3RlQ2hhcik7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmaW5pc2godmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGlzIHF1b3RlIGlzIGVzY2FwZWQsIGl0J3MgcGFydCBvZiB0aGUgZGF0YTsgc2tpcCBpdFxuXHRcdFx0XHRcdFx0aWYgKGlucHV0W3F1b3RlU2VhcmNoKzFdID09PSBxdW90ZUNoYXIpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHF1b3RlU2VhcmNoKys7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDbG9zaW5nIHF1b3RlIGZvbGxvd2VkIGJ5IGRlbGltaXRlclxuXHRcdFx0XHRcdFx0aWYgKGlucHV0W3F1b3RlU2VhcmNoKzFdID09PSBkZWxpbSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cm93LnB1c2goaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgcXVvdGVTZWFyY2gpLnJlcGxhY2UocXVvdGVDaGFyUmVnZXgsIHF1b3RlQ2hhcikpO1xuXHRcdFx0XHRcdFx0XHRjdXJzb3IgPSBxdW90ZVNlYXJjaCArIDEgKyBkZWxpbUxlbjtcblx0XHRcdFx0XHRcdFx0bmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcblx0XHRcdFx0XHRcdFx0bmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDbG9zaW5nIHF1b3RlIGZvbGxvd2VkIGJ5IG5ld2xpbmVcblx0XHRcdFx0XHRcdGlmIChpbnB1dC5zdWJzdHIocXVvdGVTZWFyY2grMSwgbmV3bGluZUxlbikgPT09IG5ld2xpbmUpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIHF1b3RlU2VhcmNoKS5yZXBsYWNlKHF1b3RlQ2hhclJlZ2V4LCBxdW90ZUNoYXIpKTtcblx0XHRcdFx0XHRcdFx0c2F2ZVJvdyhxdW90ZVNlYXJjaCArIDEgKyBuZXdsaW5lTGVuKTtcblx0XHRcdFx0XHRcdFx0bmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcdC8vIGJlY2F1c2Ugd2UgbWF5IGhhdmUgc2tpcHBlZCB0aGUgbmV4dERlbGltIGluIHRoZSBxdW90ZWQgZmllbGRcblxuXHRcdFx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoYWJvcnRlZClcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAocHJldmlldyAmJiBkYXRhLmxlbmd0aCA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKHRydWUpO1xuXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRcdC8vIENoZWNrcyBmb3IgdmFsaWQgY2xvc2luZyBxdW90ZXMgYXJlIGNvbXBsZXRlIChlc2NhcGVkIHF1b3RlcyBvciBxdW90ZSBmb2xsb3dlZCBieSBFT0YvZGVsaW1pdGVyL25ld2xpbmUpIC0tIGFzc3VtZSB0aGVzZSBxdW90ZXMgYXJlIHBhcnQgb2YgYW4gaW52YWxpZCB0ZXh0IHN0cmluZ1xuXHRcdFx0XHRcdFx0ZXJyb3JzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnUXVvdGVzJyxcblx0XHRcdFx0XHRcdFx0Y29kZTogJ0ludmFsaWRRdW90ZXMnLFxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnVHJhaWxpbmcgcXVvdGUgb24gcXVvdGVkIGZpZWxkIGlzIG1hbGZvcm1lZCcsXG5cdFx0XHRcdFx0XHRcdHJvdzogZGF0YS5sZW5ndGgsXHQvLyByb3cgaGFzIHlldCB0byBiZSBpbnNlcnRlZFxuXHRcdFx0XHRcdFx0XHRpbmRleDogY3Vyc29yXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cXVvdGVTZWFyY2grKztcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb21tZW50IGZvdW5kIGF0IHN0YXJ0IG9mIG5ldyBsaW5lXG5cdFx0XHRcdGlmIChjb21tZW50cyAmJiByb3cubGVuZ3RoID09PSAwICYmIGlucHV0LnN1YnN0cihjdXJzb3IsIGNvbW1lbnRzTGVuKSA9PT0gY29tbWVudHMpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAobmV4dE5ld2xpbmUgPT09IC0xKVx0Ly8gQ29tbWVudCBlbmRzIGF0IEVPRlxuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHRjdXJzb3IgPSBuZXh0TmV3bGluZSArIG5ld2xpbmVMZW47XG5cdFx0XHRcdFx0bmV4dE5ld2xpbmUgPSBpbnB1dC5pbmRleE9mKG5ld2xpbmUsIGN1cnNvcik7XG5cdFx0XHRcdFx0bmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE5leHQgZGVsaW1pdGVyIGNvbWVzIGJlZm9yZSBuZXh0IG5ld2xpbmUsIHNvIHdlJ3ZlIHJlYWNoZWQgZW5kIG9mIGZpZWxkXG5cdFx0XHRcdGlmIChuZXh0RGVsaW0gIT09IC0xICYmIChuZXh0RGVsaW0gPCBuZXh0TmV3bGluZSB8fCBuZXh0TmV3bGluZSA9PT0gLTEpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cm93LnB1c2goaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgbmV4dERlbGltKSk7XG5cdFx0XHRcdFx0Y3Vyc29yID0gbmV4dERlbGltICsgZGVsaW1MZW47XG5cdFx0XHRcdFx0bmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEVuZCBvZiByb3dcblx0XHRcdFx0aWYgKG5leHROZXdsaW5lICE9PSAtMSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJvdy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJzb3IsIG5leHROZXdsaW5lKSk7XG5cdFx0XHRcdFx0c2F2ZVJvdyhuZXh0TmV3bGluZSArIG5ld2xpbmVMZW4pO1xuXG5cdFx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRcdFx0aWYgKGFib3J0ZWQpXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHByZXZpZXcgJiYgZGF0YS5sZW5ndGggPj0gcHJldmlldylcblx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKHRydWUpO1xuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXG5cdFx0XHRyZXR1cm4gZmluaXNoKCk7XG5cblxuXHRcdFx0ZnVuY3Rpb24gcHVzaFJvdyhyb3cpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEucHVzaChyb3cpO1xuXHRcdFx0XHRsYXN0Q3Vyc29yID0gY3Vyc29yO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFwcGVuZHMgdGhlIHJlbWFpbmluZyBpbnB1dCBmcm9tIGN1cnNvciB0byB0aGUgZW5kIGludG9cblx0XHRcdCAqIHJvdywgc2F2ZXMgdGhlIHJvdywgY2FsbHMgc3RlcCwgYW5kIHJldHVybnMgdGhlIHJlc3VsdHMuXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIGZpbmlzaCh2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKGlnbm9yZUxhc3RSb3cpXG5cdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdFx0dmFsdWUgPSBpbnB1dC5zdWJzdHIoY3Vyc29yKTtcblx0XHRcdFx0cm93LnB1c2godmFsdWUpO1xuXHRcdFx0XHRjdXJzb3IgPSBpbnB1dExlbjtcdC8vIGltcG9ydGFudCBpbiBjYXNlIHBhcnNpbmcgaXMgcGF1c2VkXG5cdFx0XHRcdHB1c2hSb3cocm93KTtcblx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFwcGVuZHMgdGhlIGN1cnJlbnQgcm93IHRvIHRoZSByZXN1bHRzLiBJdCBzZXRzIHRoZSBjdXJzb3Jcblx0XHRcdCAqIHRvIG5ld0N1cnNvciBhbmQgZmluZHMgdGhlIG5leHROZXdsaW5lLiBUaGUgY2FsbGVyIHNob3VsZFxuXHRcdFx0ICogdGFrZSBjYXJlIHRvIGV4ZWN1dGUgdXNlcidzIHN0ZXAgZnVuY3Rpb24gYW5kIGNoZWNrIGZvclxuXHRcdFx0ICogcHJldmlldyBhbmQgZW5kIHBhcnNpbmcgaWYgbmVjZXNzYXJ5LlxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBzYXZlUm93KG5ld0N1cnNvcilcblx0XHRcdHtcblx0XHRcdFx0Y3Vyc29yID0gbmV3Q3Vyc29yO1xuXHRcdFx0XHRwdXNoUm93KHJvdyk7XG5cdFx0XHRcdHJvdyA9IFtdO1xuXHRcdFx0XHRuZXh0TmV3bGluZSA9IGlucHV0LmluZGV4T2YobmV3bGluZSwgY3Vyc29yKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIHJlc3VsdHMsIGVycm9ycywgYW5kIG1ldGEuICovXG5cdFx0XHRmdW5jdGlvbiByZXR1cm5hYmxlKHN0b3BwZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0XHRlcnJvcnM6IGVycm9ycyxcblx0XHRcdFx0XHRtZXRhOiB7XG5cdFx0XHRcdFx0XHRkZWxpbWl0ZXI6IGRlbGltLFxuXHRcdFx0XHRcdFx0bGluZWJyZWFrOiBuZXdsaW5lLFxuXHRcdFx0XHRcdFx0YWJvcnRlZDogYWJvcnRlZCxcblx0XHRcdFx0XHRcdHRydW5jYXRlZDogISFzdG9wcGVkLFxuXHRcdFx0XHRcdFx0Y3Vyc29yOiBsYXN0Q3Vyc29yICsgKGJhc2VJbmRleCB8fCAwKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0LyoqIEV4ZWN1dGVzIHRoZSB1c2VyJ3Mgc3RlcCBmdW5jdGlvbiBhbmQgcmVzZXRzIGRhdGEgJiBlcnJvcnMuICovXG5cdFx0XHRmdW5jdGlvbiBkb1N0ZXAoKVxuXHRcdFx0e1xuXHRcdFx0XHRzdGVwKHJldHVybmFibGUoKSk7XG5cdFx0XHRcdGRhdGEgPSBbXSwgZXJyb3JzID0gW107XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKiBTZXRzIHRoZSBhYm9ydCBmbGFnICovXG5cdFx0dGhpcy5hYm9ydCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRhYm9ydGVkID0gdHJ1ZTtcblx0XHR9O1xuXG5cdFx0LyoqIEdldHMgdGhlIGN1cnNvciBwb3NpdGlvbiAqL1xuXHRcdHRoaXMuZ2V0Q2hhckluZGV4ID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHJldHVybiBjdXJzb3I7XG5cdFx0fTtcblx0fVxuXG5cblx0Ly8gSWYgeW91IG5lZWQgdG8gbG9hZCBQYXBhIFBhcnNlIGFzeW5jaHJvbm91c2x5IGFuZCB5b3UgYWxzbyBuZWVkIHdvcmtlciB0aHJlYWRzLCBoYXJkLWNvZGVcblx0Ly8gdGhlIHNjcmlwdCBwYXRoIGhlcmUuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21ob2x0L1BhcGFQYXJzZS9pc3N1ZXMvODcjaXNzdWVjb21tZW50LTU3ODg1MzU4XG5cdGZ1bmN0aW9uIGdldFNjcmlwdFBhdGgoKVxuXHR7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cdFx0cmV0dXJuIHNjcmlwdHMubGVuZ3RoID8gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyYyA6ICcnO1xuXHR9XG5cblx0ZnVuY3Rpb24gbmV3V29ya2VyKClcblx0e1xuXHRcdGlmICghUGFwYS5XT1JLRVJTX1NVUFBPUlRFRClcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRpZiAoIUxPQURFRF9TWU5DICYmIFBhcGEuU0NSSVBUX1BBVEggPT09IG51bGwpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdCdTY3JpcHQgcGF0aCBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBhdXRvbWF0aWNhbGx5IHdoZW4gUGFwYSBQYXJzZSBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHkuICcgK1xuXHRcdFx0XHQnWW91IG5lZWQgdG8gc2V0IFBhcGEuU0NSSVBUX1BBVEggbWFudWFsbHkuJ1xuXHRcdFx0KTtcblx0XHR2YXIgd29ya2VyVXJsID0gUGFwYS5TQ1JJUFRfUEFUSCB8fCBBVVRPX1NDUklQVF9QQVRIO1xuXHRcdC8vIEFwcGVuZCAncGFwYXdvcmtlcicgdG8gdGhlIHNlYXJjaCBzdHJpbmcgdG8gdGVsbCBwYXBhcGFyc2UgdGhhdCB0aGlzIGlzIG91ciB3b3JrZXIuXG5cdFx0d29ya2VyVXJsICs9ICh3b3JrZXJVcmwuaW5kZXhPZignPycpICE9PSAtMSA/ICcmJyA6ICc/JykgKyAncGFwYXdvcmtlcic7XG5cdFx0dmFyIHcgPSBuZXcgZ2xvYmFsLldvcmtlcih3b3JrZXJVcmwpO1xuXHRcdHcub25tZXNzYWdlID0gbWFpblRocmVhZFJlY2VpdmVkTWVzc2FnZTtcblx0XHR3LmlkID0gd29ya2VySWRDb3VudGVyKys7XG5cdFx0d29ya2Vyc1t3LmlkXSA9IHc7XG5cdFx0cmV0dXJuIHc7XG5cdH1cblxuXHQvKiogQ2FsbGJhY2sgd2hlbiBtYWluIHRocmVhZCByZWNlaXZlcyBhIG1lc3NhZ2UgKi9cblx0ZnVuY3Rpb24gbWFpblRocmVhZFJlY2VpdmVkTWVzc2FnZShlKVxuXHR7XG5cdFx0dmFyIG1zZyA9IGUuZGF0YTtcblx0XHR2YXIgd29ya2VyID0gd29ya2Vyc1ttc2cud29ya2VySWRdO1xuXHRcdHZhciBhYm9ydGVkID0gZmFsc2U7XG5cblx0XHRpZiAobXNnLmVycm9yKVxuXHRcdFx0d29ya2VyLnVzZXJFcnJvcihtc2cuZXJyb3IsIG1zZy5maWxlKTtcblx0XHRlbHNlIGlmIChtc2cucmVzdWx0cyAmJiBtc2cucmVzdWx0cy5kYXRhKVxuXHRcdHtcblx0XHRcdHZhciBhYm9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRhYm9ydGVkID0gdHJ1ZTtcblx0XHRcdFx0Y29tcGxldGVXb3JrZXIobXNnLndvcmtlcklkLCB7IGRhdGE6IFtdLCBlcnJvcnM6IFtdLCBtZXRhOiB7IGFib3J0ZWQ6IHRydWUgfSB9KTtcblx0XHRcdH07XG5cblx0XHRcdHZhciBoYW5kbGUgPSB7XG5cdFx0XHRcdGFib3J0OiBhYm9ydCxcblx0XHRcdFx0cGF1c2U6IG5vdEltcGxlbWVudGVkLFxuXHRcdFx0XHRyZXN1bWU6IG5vdEltcGxlbWVudGVkXG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoaXNGdW5jdGlvbih3b3JrZXIudXNlclN0ZXApKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5yZXN1bHRzLmRhdGEubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR3b3JrZXIudXNlclN0ZXAoe1xuXHRcdFx0XHRcdFx0ZGF0YTogW21zZy5yZXN1bHRzLmRhdGFbaV1dLFxuXHRcdFx0XHRcdFx0ZXJyb3JzOiBtc2cucmVzdWx0cy5lcnJvcnMsXG5cdFx0XHRcdFx0XHRtZXRhOiBtc2cucmVzdWx0cy5tZXRhXG5cdFx0XHRcdFx0fSwgaGFuZGxlKTtcblx0XHRcdFx0XHRpZiAoYWJvcnRlZClcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBtc2cucmVzdWx0cztcdC8vIGZyZWUgbWVtb3J5IEFTQVBcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGlzRnVuY3Rpb24od29ya2VyLnVzZXJDaHVuaykpXG5cdFx0XHR7XG5cdFx0XHRcdHdvcmtlci51c2VyQ2h1bmsobXNnLnJlc3VsdHMsIGhhbmRsZSwgbXNnLmZpbGUpO1xuXHRcdFx0XHRkZWxldGUgbXNnLnJlc3VsdHM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKG1zZy5maW5pc2hlZCAmJiAhYWJvcnRlZClcblx0XHRcdGNvbXBsZXRlV29ya2VyKG1zZy53b3JrZXJJZCwgbXNnLnJlc3VsdHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gY29tcGxldGVXb3JrZXIod29ya2VySWQsIHJlc3VsdHMpIHtcblx0XHR2YXIgd29ya2VyID0gd29ya2Vyc1t3b3JrZXJJZF07XG5cdFx0aWYgKGlzRnVuY3Rpb24od29ya2VyLnVzZXJDb21wbGV0ZSkpXG5cdFx0XHR3b3JrZXIudXNlckNvbXBsZXRlKHJlc3VsdHMpO1xuXHRcdHdvcmtlci50ZXJtaW5hdGUoKTtcblx0XHRkZWxldGUgd29ya2Vyc1t3b3JrZXJJZF07XG5cdH1cblxuXHRmdW5jdGlvbiBub3RJbXBsZW1lbnRlZCgpIHtcblx0XHR0aHJvdyAnTm90IGltcGxlbWVudGVkLic7XG5cdH1cblxuXHQvKiogQ2FsbGJhY2sgd2hlbiB3b3JrZXIgdGhyZWFkIHJlY2VpdmVzIGEgbWVzc2FnZSAqL1xuXHRmdW5jdGlvbiB3b3JrZXJUaHJlYWRSZWNlaXZlZE1lc3NhZ2UoZSlcblx0e1xuXHRcdHZhciBtc2cgPSBlLmRhdGE7XG5cblx0XHRpZiAodHlwZW9mIFBhcGEuV09SS0VSX0lEID09PSAndW5kZWZpbmVkJyAmJiBtc2cpXG5cdFx0XHRQYXBhLldPUktFUl9JRCA9IG1zZy53b3JrZXJJZDtcblxuXHRcdGlmICh0eXBlb2YgbXNnLmlucHV0ID09PSAnc3RyaW5nJylcblx0XHR7XG5cdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHR3b3JrZXJJZDogUGFwYS5XT1JLRVJfSUQsXG5cdFx0XHRcdHJlc3VsdHM6IFBhcGEucGFyc2UobXNnLmlucHV0LCBtc2cuY29uZmlnKSxcblx0XHRcdFx0ZmluaXNoZWQ6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRlbHNlIGlmICgoZ2xvYmFsLkZpbGUgJiYgbXNnLmlucHV0IGluc3RhbmNlb2YgRmlsZSkgfHwgbXNnLmlucHV0IGluc3RhbmNlb2YgT2JqZWN0KVx0Ly8gdGhhbmsgeW91LCBTYWZhcmkgKHNlZSBpc3N1ZSAjMTA2KVxuXHRcdHtcblx0XHRcdHZhciByZXN1bHRzID0gUGFwYS5wYXJzZShtc2cuaW5wdXQsIG1zZy5jb25maWcpO1xuXHRcdFx0aWYgKHJlc3VsdHMpXG5cdFx0XHRcdGdsb2JhbC5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0d29ya2VySWQ6IFBhcGEuV09SS0VSX0lELFxuXHRcdFx0XHRcdHJlc3VsdHM6IHJlc3VsdHMsXG5cdFx0XHRcdFx0ZmluaXNoZWQ6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqIE1ha2VzIGEgZGVlcCBjb3B5IG9mIGFuIGFycmF5IG9yIG9iamVjdCAobW9zdGx5KSAqL1xuXHRmdW5jdGlvbiBjb3B5KG9iailcblx0e1xuXHRcdGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jylcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0dmFyIGNweSA9IG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fTtcblx0XHRmb3IgKHZhciBrZXkgaW4gb2JqKVxuXHRcdFx0Y3B5W2tleV0gPSBjb3B5KG9ialtrZXldKTtcblx0XHRyZXR1cm4gY3B5O1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZEZ1bmN0aW9uKGYsIHNlbGYpXG5cdHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IGYuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTsgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYylcblx0e1xuXHRcdHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJztcblx0fVxuXG5cdHJldHVybiBQYXBhO1xufSkpO1xuIl19
