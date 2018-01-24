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

var _DB;

var RecordsActions = (function () {
	function RecordsActions() {
		_classCallCheck(this, RecordsActions);

		this.generateActions("insertSuccess", "insertError");

		var schemaBuilder = _lovefield2["default"].schema.create("records", 1);

		schemaBuilder.createTable("Record").addColumn("hash", _lovefield2["default"].Type.STRING).addColumn("date", _lovefield2["default"].Type.DATE_TIME).addColumn("receiver", _lovefield2["default"].Type.STRING).addColumn("reference", _lovefield2["default"].Type.STRING).addColumn("amount", _lovefield2["default"].Type.REAL).addColumn("tag", _lovefield2["default"].Type.STRING).addPrimaryKey(["hash"]);

		// connect to database
		schemaBuilder.connect().then(function (db) {
			_DB = db;
		});
	}

	_createClass(RecordsActions, [{
		key: "insert",
		value: function insert(record, tag) {
			var item = _DB.getSchema().table("Record");

			var row = item.createRow({
				hash: JSON.stringify(JSON.stringify(record)),
				date: (0, _moment2["default"])(record.data, "DD.MM.YYYY"),
				receiver: record.received,
				reference: record.reference,
				amount: record.amount,
				tag: tag
			});

			_DB.insertOrReplace().into(item).values([row]).exec();
		}
	}]);

	return RecordsActions;
})();

exports["default"] = _alt2["default"].createActions(RecordsActions);
module.exports = exports["default"];

},{"../alt":2,"lovefield":13,"md5":14,"moment":15}],2:[function(require,module,exports){
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

var Main = (function (_Component) {
	_inherits(Main, _Component);

	function Main(props) {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).call(this, props);
		this.state = {
			data: []
		};
	}

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
					var csv = results.data;
					_this.setState({
						data: csv.slice(7)
					});
				}
			});
		}
	}, {
		key: "doImport",
		value: function doImport() {
			this.state.data.forEach(function (r) {
				_actionsRecordsActions2["default"].insert({
					date: r[0],
					receiver: r[3],
					reference: r[4],
					amount: parseFloat(r[7].replace(",", "."))
				}, "test");
			});
		}
	}, {
		key: "render",
		value: function render() {
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
						this.state.data.map(function (d, idx) {
							return _react2["default"].createElement(_Row2["default"], { key: "row-" + idx, data: d });
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

},{"../actions/RecordsActions":1,"./Row":6,"papaparse":16,"react":"react"}],5:[function(require,module,exports){
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

	function Row() {
		_classCallCheck(this, Row);

		_get(Object.getPrototypeOf(Row.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Row, [{
		key: "render",
		value: function render() {
			var date = this.props.data[0];
			var receiver = this.props.data[3];
			var reference = this.props.data[4];
			var amount = parseFloat(this.props.data[7].replace(",", "."));

			// set amount class
			var amountClass = "";
			if (amount > 0) {
				amountClass = "text-green";
			} else if (amount < 0) {
				amountClass = "text-red";
			}

			return _react2["default"].createElement(
				"tr",
				null,
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
					_react2["default"].createElement(_TagSelect2["default"], null)
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
			tags: ["car", "public-transport", "groceries", "eating-out", "communication", "transfer", "entertainment", "rent", "donations", "taxes", "household", "studying", "clothing", "fitness", "health", "personal-care", "subscriptions", "cash-withdrawel"]
		};
	}

	_createClass(TagSelect, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"select",
				null,
				this.state.tags.map(function (tag, idx) {
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

},{"./routes":9,"react":"react","react-dom":"react-dom","react-router":"react-router"}],9:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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


},{}],14:[function(require,module,exports){
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

},{"charenc":10,"crypt":11,"is-buffer":12}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvYWN0aW9ucy9SZWNvcmRzQWN0aW9ucy5qcyIsIi9Vc2Vycy90aG9tYXMvQ29kZS9ncmVlbmJhY2tzL2pzL3NyYy9hbHQuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9JbXBvcnQuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9NYWluLmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL2NvbXBvbmVudHMvUm93LmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL2NvbXBvbmVudHMvVGFnU2VsZWN0LmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL21haW4uanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvcm91dGVzLmpzIiwibm9kZV9tb2R1bGVzL2NoYXJlbmMvY2hhcmVuYy5qcyIsIm5vZGVfbW9kdWxlcy9jcnlwdC9jcnlwdC5qcyIsIm5vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG92ZWZpZWxkL2Rpc3QvbG92ZWZpZWxkLm1pbi5qcyIsIm5vZGVfbW9kdWxlcy9tZDUvbWQ1LmpzIiwibm9kZV9tb2R1bGVzL21vbWVudC9tb21lbnQuanMiLCJub2RlX21vZHVsZXMvcGFwYXBhcnNlL3BhcGFwYXJzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OzttQkNBZ0IsUUFBUTs7OzttQkFDUixLQUFLOzs7O3NCQUNGLFFBQVE7Ozs7eUJBQ1osV0FBVzs7OztBQUUxQixJQUFJLEdBQUcsQ0FBQzs7SUFFRixjQUFjO0FBQ1IsVUFETixjQUFjLEdBQ0w7d0JBRFQsY0FBYzs7QUFFbEIsTUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7O0FBRXJELE1BQUksYUFBYSxHQUFHLHVCQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUVuRCxlQUFhLENBQ1gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUNyQixTQUFTLENBQUMsTUFBTSxFQUFFLHVCQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDakMsU0FBUyxDQUFDLE1BQU0sRUFBRSx1QkFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQ3BDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsdUJBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNyQyxTQUFTLENBQUMsV0FBVyxFQUFFLHVCQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDdEMsU0FBUyxDQUFDLFFBQVEsRUFBRSx1QkFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ2pDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsdUJBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNoQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7QUFHMUIsZUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUUsRUFBSTtBQUNsQyxNQUFHLEdBQUcsRUFBRSxDQUFDO0dBQ1QsQ0FBQyxDQUFDO0VBQ0g7O2NBcEJJLGNBQWM7O1NBc0JiLGdCQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFDbkIsT0FBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFM0MsT0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUN4QixRQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLFFBQUksRUFBRSx5QkFBTyxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztBQUN2QyxZQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7QUFDekIsYUFBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO0FBQzNCLFVBQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtBQUNyQixPQUFHLEVBQUUsR0FBRztJQUNSLENBQUMsQ0FBQzs7QUFFSCxNQUFHLENBQ0QsZUFBZSxFQUFFLENBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDVixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNiLElBQUksRUFBRSxDQUFDO0dBQ1Q7OztRQXZDSSxjQUFjOzs7cUJBMENMLGlCQUFJLGFBQWEsQ0FBQyxjQUFjLENBQUM7Ozs7Ozs7Ozs7OzttQkNqRGhDLEtBQUs7Ozs7cUJBRU4sc0JBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0ZTLE9BQU87Ozs7SUFFbEMsR0FBRztXQUFILEdBQUc7O0FBQ0csVUFETixHQUFHLENBQ0ksS0FBSyxFQUFFO3dCQURkLEdBQUc7O0FBRVAsNkJBRkksR0FBRyw2Q0FFRCxLQUFLLEVBQUU7RUFDYjs7Y0FISSxHQUFHOztTQUtGLGtCQUFHO0FBQ1IsVUFDQzs7O0lBQ0M7Ozs7S0FBVztJQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtJQUNaLENBQ1I7R0FDRjs7O1FBWkksR0FBRzs7O3FCQWVNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ2pCZSxPQUFPOzs7O3lCQUN2QixXQUFXOzs7O21CQUNaLE9BQU87Ozs7cUNBQ0ksMkJBQTJCOzs7O0lBRWhELElBQUk7V0FBSixJQUFJOztBQUNFLFVBRE4sSUFBSSxDQUNHLEtBQUssRUFBRTt3QkFEZCxJQUFJOztBQUVSLDZCQUZJLElBQUksNkNBRUYsS0FBSyxFQUFFO0FBQ2IsTUFBSSxDQUFDLEtBQUssR0FBRztBQUNaLE9BQUksRUFBRSxFQUFFO0dBQ1IsQ0FBQztFQUNGOztjQU5JLElBQUk7O1NBUU8sMEJBQUMsQ0FBQyxFQUFFOzs7QUFDbkIsT0FBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0IsMEJBQUssS0FBSyxDQUFDLElBQUksRUFBRTtBQUNoQixVQUFNLEVBQUU7QUFDUCxhQUFRLEVBQUUsT0FBTztLQUNqQjtBQUNELFlBQVEsRUFBRSxrQkFBQSxPQUFPLEVBQUk7QUFDcEIsU0FBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN6QixXQUFLLFFBQVEsQ0FBQztBQUNiLFVBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztNQUNsQixDQUFDLENBQUM7S0FDSDtJQUNELENBQUMsQ0FBQztHQUNIOzs7U0FFTyxvQkFBRztBQUNWLE9BQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUM1Qix1Q0FBZSxNQUFNLENBQ3BCO0FBQ0MsU0FBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDVixhQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNkLGNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2YsV0FBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxQyxFQUNELE1BQU0sQ0FDTixDQUFDO0lBQ0YsQ0FBQyxDQUFDO0dBQ0g7OztTQUVLLGtCQUFHO0FBQ1IsVUFDQzs7O0lBQ0M7OztLQUNDO0FBQ0MsVUFBSSxFQUFDLE1BQU07QUFDWCxjQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQztPQUMxQztLQUNDO0lBRUo7O09BQU8sTUFBTSxFQUFDLEdBQUc7S0FDaEI7OztNQUNDOzs7T0FDQzs7OztRQUFhO09BQ2I7Ozs7UUFBaUI7T0FDakI7Ozs7UUFBa0I7T0FDbEI7Ozs7UUFBZTtPQUNmLDRDQUFNO09BQ0Y7TUFDRTtLQUNSOzs7TUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFLO0FBQ2hDLGNBQU8scURBQUssR0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLEFBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxBQUFDLEdBQUcsQ0FBQztPQUMzQyxDQUFDO01BQ0s7S0FDRDtJQUVSOztPQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQzs7S0FBZ0I7SUFDckQsQ0FDTDtHQUNGOzs7UUFuRUksSUFBSTs7O3FCQXNFSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkMzRWMsT0FBTzs7OzsyQkFDbkIsY0FBYzs7SUFFN0IsSUFBSTtXQUFKLElBQUk7O1VBQUosSUFBSTt3QkFBSixJQUFJOzs2QkFBSixJQUFJOzs7Y0FBSixJQUFJOztTQUNILGtCQUFHO0FBQ1IsVUFDQzs7O0lBQ0M7O09BQU0sRUFBRSxFQUFDLFNBQVM7O0tBQWM7SUFDM0IsQ0FDTDtHQUNGOzs7UUFQSSxJQUFJOzs7cUJBVUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJDYmMsT0FBTzs7Ozt5QkFDbEIsYUFBYTs7OztJQUU3QixHQUFHO1dBQUgsR0FBRzs7VUFBSCxHQUFHO3dCQUFILEdBQUc7OzZCQUFILEdBQUc7OztjQUFILEdBQUc7O1NBQ0Ysa0JBQUc7QUFDUixPQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxPQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxPQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxPQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7QUFHaEUsT0FBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE9BQUksTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNmLGVBQVcsR0FBRyxZQUFZLENBQUM7SUFDM0IsTUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEIsZUFBVyxHQUFHLFVBQVUsQ0FBQztJQUN6Qjs7QUFFRCxVQUNDOzs7SUFDQzs7O0tBQUssSUFBSTtLQUFNO0lBQ2Y7OztLQUFLLFFBQVE7S0FBTTtJQUNuQjs7O0tBQUssU0FBUztLQUFNO0lBQ3BCOztPQUFJLFNBQVMsRUFBRSxXQUFXLEFBQUM7S0FBRSxNQUFNOztLQUFPO0lBQzFDOzs7S0FDQyw4REFBYTtLQUNUO0lBQ0QsQ0FDSjtHQUNGOzs7UUExQkksR0FBRzs7O3FCQTZCTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkNoQ2UsT0FBTzs7OztJQUVsQyxTQUFTO1dBQVQsU0FBUzs7QUFDSCxVQUROLFNBQVMsQ0FDRixLQUFLLEVBQUU7d0JBRGQsU0FBUzs7QUFFYiw2QkFGSSxTQUFTLDZDQUVQLEtBQUssRUFBRTtBQUNiLE1BQUksQ0FBQyxLQUFLLEdBQUc7QUFDWixPQUFJLEVBQUUsQ0FDTCxLQUFLLEVBQ0wsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxZQUFZLEVBQ1osZUFBZSxFQUNmLFVBQVUsRUFDVixlQUFlLEVBQ2YsTUFBTSxFQUNOLFdBQVcsRUFDWCxPQUFPLEVBQ1AsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsZUFBZSxFQUNmLGlCQUFpQixDQUNqQjtHQUNELENBQUM7RUFDRjs7Y0F6QkksU0FBUzs7U0EyQlIsa0JBQUc7QUFDUixVQUNDOzs7SUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFLO0FBQ2xDLFlBQU87O1FBQVEsR0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLEFBQUM7TUFBRSxHQUFHO01BQVUsQ0FBQztLQUNqRCxDQUFDO0lBQ00sQ0FDUjtHQUNGOzs7UUFuQ0ksU0FBUzs7O3FCQXNDQSxTQUFTOzs7Ozs7OztxQkN4Q04sT0FBTzs7OzsyQkFDa0IsY0FBYzs7d0JBQ3BDLFdBQVc7Ozs7c0JBQ2IsVUFBVTs7Ozs7QUFHN0Isc0JBQVMsTUFBTSxDQUNkOztHQUFRLE9BQU8sMEJBQWM7O0NBQWtCLEVBQy9DLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUM7O0FBRUYseUJBQVksTUFBTSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQzlCLEtBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7QUFDL0IsU0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0VBQzlDO0NBQ0QsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztxQkNmZSxPQUFPOzs7OzJCQUNTLGNBQWM7OzZCQUNoQyxrQkFBa0I7Ozs7OEJBQ2pCLG1CQUFtQjs7OztnQ0FDakIscUJBQXFCOzs7O3FCQUd2Qzs7R0FBTyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsNEJBQU07Q0FDOUIsNERBQVksU0FBUyw2QkFBTyxHQUFHO0NBQy9CLHVEQUFPLElBQUksRUFBQyxTQUFTLEVBQUMsU0FBUywrQkFBUyxHQUFHO0NBQ3BDOzs7O0FDVlQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3Y3SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBhbHQgZnJvbSBcIi4uL2FsdFwiO1xuaW1wb3J0IG1kNSBmcm9tIFwibWQ1XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBsZiBmcm9tIFwibG92ZWZpZWxkXCI7XG5cbnZhciBfREI7XG5cbmNsYXNzIFJlY29yZHNBY3Rpb25zIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5nZW5lcmF0ZUFjdGlvbnMoXCJpbnNlcnRTdWNjZXNzXCIsIFwiaW5zZXJ0RXJyb3JcIik7XG5cblx0XHR2YXIgc2NoZW1hQnVpbGRlciA9IGxmLnNjaGVtYS5jcmVhdGUoXCJyZWNvcmRzXCIsIDEpO1xuXG5cdFx0c2NoZW1hQnVpbGRlclxuXHRcdFx0LmNyZWF0ZVRhYmxlKFwiUmVjb3JkXCIpXG5cdFx0XHQuYWRkQ29sdW1uKFwiaGFzaFwiLCBsZi5UeXBlLlNUUklORylcblx0XHRcdC5hZGRDb2x1bW4oXCJkYXRlXCIsIGxmLlR5cGUuREFURV9USU1FKVxuXHRcdFx0LmFkZENvbHVtbihcInJlY2VpdmVyXCIsIGxmLlR5cGUuU1RSSU5HKVxuXHRcdFx0LmFkZENvbHVtbihcInJlZmVyZW5jZVwiLCBsZi5UeXBlLlNUUklORylcblx0XHRcdC5hZGRDb2x1bW4oXCJhbW91bnRcIiwgbGYuVHlwZS5SRUFMKVxuXHRcdFx0LmFkZENvbHVtbihcInRhZ1wiLCBsZi5UeXBlLlNUUklORylcblx0XHRcdC5hZGRQcmltYXJ5S2V5KFtcImhhc2hcIl0pO1xuXG5cdFx0Ly8gY29ubmVjdCB0byBkYXRhYmFzZVxuXHRcdHNjaGVtYUJ1aWxkZXIuY29ubmVjdCgpLnRoZW4oZGIgPT4ge1xuXHRcdFx0X0RCID0gZGI7XG5cdFx0fSk7XG5cdH1cblxuXHRpbnNlcnQocmVjb3JkLCB0YWcpIHtcblx0XHR2YXIgaXRlbSA9IF9EQi5nZXRTY2hlbWEoKS50YWJsZShcIlJlY29yZFwiKTtcblxuXHRcdHZhciByb3cgPSBpdGVtLmNyZWF0ZVJvdyh7XG5cdFx0XHRoYXNoOiBKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShyZWNvcmQpKSxcblx0XHRcdGRhdGU6IG1vbWVudChyZWNvcmQuZGF0YSwgXCJERC5NTS5ZWVlZXCIpLFxuXHRcdFx0cmVjZWl2ZXI6IHJlY29yZC5yZWNlaXZlZCxcblx0XHRcdHJlZmVyZW5jZTogcmVjb3JkLnJlZmVyZW5jZSxcblx0XHRcdGFtb3VudDogcmVjb3JkLmFtb3VudCxcblx0XHRcdHRhZzogdGFnXG5cdFx0fSk7XG5cblx0XHRfREJcblx0XHRcdC5pbnNlcnRPclJlcGxhY2UoKVxuXHRcdFx0LmludG8oaXRlbSlcblx0XHRcdC52YWx1ZXMoW3Jvd10pXG5cdFx0XHQuZXhlYygpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKFJlY29yZHNBY3Rpb25zKTtcbiIsImltcG9ydCBBbHQgZnJvbSBcImFsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Y2VudGVyPlxuXHRcdFx0XHQ8aDE+8J+StTwvaDE+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9jZW50ZXI+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFwYSBmcm9tIFwicGFwYXBhcnNlXCI7XG5pbXBvcnQgUm93IGZyb20gXCIuL1Jvd1wiO1xuaW1wb3J0IFJlY29yZHNBY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL1JlY29yZHNBY3Rpb25zXCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0YTogW11cblx0XHR9O1xuXHR9XG5cblx0aGFuZGxlRmlsZVVwbG9hZChlKSB7XG5cdFx0Y29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdFBhcGEucGFyc2UoZmlsZSwge1xuXHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdGVuY29kaW5nOiBcIlVURi04XCJcblx0XHRcdH0sXG5cdFx0XHRjb21wbGV0ZTogcmVzdWx0cyA9PiB7XG5cdFx0XHRcdGNvbnN0IGNzdiA9IHJlc3VsdHMuZGF0YTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZGF0YTogY3N2LnNsaWNlKDcpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZG9JbXBvcnQoKSB7XG5cdFx0dGhpcy5zdGF0ZS5kYXRhLmZvckVhY2gociA9PiB7XG5cdFx0XHRSZWNvcmRzQWN0aW9ucy5pbnNlcnQoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkYXRlOiByWzBdLFxuXHRcdFx0XHRcdHJlY2VpdmVyOiByWzNdLFxuXHRcdFx0XHRcdHJlZmVyZW5jZTogcls0XSxcblx0XHRcdFx0XHRhbW91bnQ6IHBhcnNlRmxvYXQocls3XS5yZXBsYWNlKFwiLFwiLCBcIi5cIikpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwidGVzdFwiXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJmaWxlXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVVcGxvYWQuYmluZCh0aGlzKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0PHRhYmxlIGJvcmRlcj1cIjFcIj5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0aD5EYXRlPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPlJlY2VpdmVyPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPlJlZmVyZW5jZTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD5BbW91bnQ8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGggLz5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kYXRhLm1hcCgoZCwgaWR4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8Um93IGtleT17XCJyb3ctXCIgKyBpZHh9IGRhdGE9e2R9IC8+O1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZG9JbXBvcnQuYmluZCh0aGlzKX0+SW1wb3J0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TGluayB0bz1cIi9pbXBvcnRcIj5JbXBvcnQ8L0xpbms+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGFnU2VsZWN0IGZyb20gXCIuL1RhZ1NlbGVjdFwiO1xuXG5jbGFzcyBSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgZGF0ZSA9IHRoaXMucHJvcHMuZGF0YVswXTtcblx0XHRjb25zdCByZWNlaXZlciA9IHRoaXMucHJvcHMuZGF0YVszXTtcblx0XHRjb25zdCByZWZlcmVuY2UgPSB0aGlzLnByb3BzLmRhdGFbNF07XG5cdFx0Y29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdCh0aGlzLnByb3BzLmRhdGFbN10ucmVwbGFjZShcIixcIiwgXCIuXCIpKTtcblxuXHRcdC8vIHNldCBhbW91bnQgY2xhc3Ncblx0XHR2YXIgYW1vdW50Q2xhc3MgPSBcIlwiO1xuXHRcdGlmIChhbW91bnQgPiAwKSB7XG5cdFx0XHRhbW91bnRDbGFzcyA9IFwidGV4dC1ncmVlblwiO1xuXHRcdH0gZWxzZSBpZiAoYW1vdW50IDwgMCkge1xuXHRcdFx0YW1vdW50Q2xhc3MgPSBcInRleHQtcmVkXCI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDx0cj5cblx0XHRcdFx0PHRkPntkYXRlfTwvdGQ+XG5cdFx0XHRcdDx0ZD57cmVjZWl2ZXJ9PC90ZD5cblx0XHRcdFx0PHRkPntyZWZlcmVuY2V9PC90ZD5cblx0XHRcdFx0PHRkIGNsYXNzTmFtZT17YW1vdW50Q2xhc3N9PnthbW91bnR94oKsPC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdDxUYWdTZWxlY3QgLz5cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFRhZ1NlbGVjdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0YWdzOiBbXG5cdFx0XHRcdFwiY2FyXCIsXG5cdFx0XHRcdFwicHVibGljLXRyYW5zcG9ydFwiLFxuXHRcdFx0XHRcImdyb2Nlcmllc1wiLFxuXHRcdFx0XHRcImVhdGluZy1vdXRcIixcblx0XHRcdFx0XCJjb21tdW5pY2F0aW9uXCIsXG5cdFx0XHRcdFwidHJhbnNmZXJcIixcblx0XHRcdFx0XCJlbnRlcnRhaW5tZW50XCIsXG5cdFx0XHRcdFwicmVudFwiLFxuXHRcdFx0XHRcImRvbmF0aW9uc1wiLFxuXHRcdFx0XHRcInRheGVzXCIsXG5cdFx0XHRcdFwiaG91c2Vob2xkXCIsXG5cdFx0XHRcdFwic3R1ZHlpbmdcIixcblx0XHRcdFx0XCJjbG90aGluZ1wiLFxuXHRcdFx0XHRcImZpdG5lc3NcIixcblx0XHRcdFx0XCJoZWFsdGhcIixcblx0XHRcdFx0XCJwZXJzb25hbC1jYXJlXCIsXG5cdFx0XHRcdFwic3Vic2NyaXB0aW9uc1wiLFxuXHRcdFx0XHRcImNhc2gtd2l0aGRyYXdlbFwiXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlbGVjdD5cblx0XHRcdFx0e3RoaXMuc3RhdGUudGFncy5tYXAoKHRhZywgaWR4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDxvcHRpb24ga2V5PXtcIm9wdC1cIiArIGlkeH0+e3RhZ308L29wdGlvbj47XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdTZWxlY3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBoYXNoSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3JvdXRlc1wiO1xuXG4vLyByZW5kZXIgdGhlIERPTVxuUmVhY3RET00ucmVuZGVyKFxuXHQ8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT57cm91dGVzfTwvUm91dGVyPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIilcbik7XG4vLyBsaXN0ZW4gdG8gbG9jYXRpb24gY2hhbmdlc1xuaGFzaEhpc3RvcnkubGlzdGVuKGxvY2F0aW9uID0+IHtcblx0aWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gXCJQVVNIXCIpIHtcblx0XHRjb25zb2xlLmluZm8oXCJOZXcgcm91dGU6XCIsIGxvY2F0aW9uLnBhdGhuYW1lKTtcblx0fVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZSwgSW5kZXhSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiO1xuaW1wb3J0IEltcG9ydCBmcm9tIFwiLi9jb21wb25lbnRzL0ltcG9ydFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoXG5cdDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cblx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e01haW59IC8+XG5cdFx0PFJvdXRlIHBhdGg9XCIvaW1wb3J0XCIgY29tcG9uZW50PXtJbXBvcnR9IC8+XG5cdDwvUm91dGU+XG4pO1xuIiwidmFyIGNoYXJlbmMgPSB7XG4gIC8vIFVURi04IGVuY29kaW5nXG4gIHV0Zjg6IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIGNoYXJlbmMuYmluLnN0cmluZ1RvQnl0ZXModW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoY2hhcmVuYy5iaW4uYnl0ZXNUb1N0cmluZyhieXRlcykpKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQmluYXJ5IGVuY29kaW5nXG4gIGJpbjoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcbiAgICAgICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBzdHIgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgc3RyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSkpO1xuICAgICAgcmV0dXJuIHN0ci5qb2luKCcnKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcmVuYztcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGJhc2U2NG1hcFxuICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycsXG5cbiAgY3J5cHQgPSB7XG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gbGVmdFxuICAgIHJvdGw6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCBiKSB8IChuID4+PiAoMzIgLSBiKSk7XG4gICAgfSxcblxuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIHJpZ2h0XG4gICAgcm90cjogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8ICgzMiAtIGIpKSB8IChuID4+PiBiKTtcbiAgICB9LFxuXG4gICAgLy8gU3dhcCBiaWctZW5kaWFuIHRvIGxpdHRsZS1lbmRpYW4gYW5kIHZpY2UgdmVyc2FcbiAgICBlbmRpYW46IGZ1bmN0aW9uKG4pIHtcbiAgICAgIC8vIElmIG51bWJlciBnaXZlbiwgc3dhcCBlbmRpYW5cbiAgICAgIGlmIChuLmNvbnN0cnVjdG9yID09IE51bWJlcikge1xuICAgICAgICByZXR1cm4gY3J5cHQucm90bChuLCA4KSAmIDB4MDBGRjAwRkYgfCBjcnlwdC5yb3RsKG4sIDI0KSAmIDB4RkYwMEZGMDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEVsc2UsIGFzc3VtZSBhcnJheSBhbmQgc3dhcCBhbGwgaXRlbXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKylcbiAgICAgICAgbltpXSA9IGNyeXB0LmVuZGlhbihuW2ldKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG5cbiAgICAvLyBHZW5lcmF0ZSBhbiBhcnJheSBvZiBhbnkgbGVuZ3RoIG9mIHJhbmRvbSBieXRlc1xuICAgIHJhbmRvbUJ5dGVzOiBmdW5jdGlvbihuKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdOyBuID4gMDsgbi0tKVxuICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBiaWctZW5kaWFuIDMyLWJpdCB3b3Jkc1xuICAgIGJ5dGVzVG9Xb3JkczogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHdvcmRzID0gW10sIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpXG4gICAgICAgIHdvcmRzW2IgPj4+IDVdIHw9IGJ5dGVzW2ldIDw8ICgyNCAtIGIgJSAzMik7XG4gICAgICByZXR1cm4gd29yZHM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYmlnLWVuZGlhbiAzMi1iaXQgd29yZHMgdG8gYSBieXRlIGFycmF5XG4gICAgd29yZHNUb0J5dGVzOiBmdW5jdGlvbih3b3Jkcykge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYiA9IDA7IGIgPCB3b3Jkcy5sZW5ndGggKiAzMjsgYiArPSA4KVxuICAgICAgICBieXRlcy5wdXNoKCh3b3Jkc1tiID4+PiA1XSA+Pj4gKDI0IC0gYiAlIDMyKSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBoZXggc3RyaW5nXG4gICAgYnl0ZXNUb0hleDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGhleCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldICYgMHhGKS50b1N0cmluZygxNikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGhleCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgaGV4VG9CeXRlczogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBjID0gMDsgYyA8IGhleC5sZW5ndGg7IGMgKz0gMilcbiAgICAgICAgYnl0ZXMucHVzaChwYXJzZUludChoZXguc3Vic3RyKGMsIDIpLCAxNikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGJhc2UtNjQgc3RyaW5nXG4gICAgYnl0ZXNUb0Jhc2U2NDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGJhc2U2NCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGVzW2ldIDw8IDE2KSB8IChieXRlc1tpICsgMV0gPDwgOCkgfCBieXRlc1tpICsgMl07XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKVxuICAgICAgICAgIGlmIChpICogOCArIGogKiA2IDw9IGJ5dGVzLmxlbmd0aCAqIDgpXG4gICAgICAgICAgICBiYXNlNjQucHVzaChiYXNlNjRtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiA2ICogKDMgLSBqKSkgJiAweDNGKSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goJz0nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlNjQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBiYXNlLTY0IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBiYXNlNjRUb0J5dGVzOiBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgIC8vIFJlbW92ZSBub24tYmFzZS02NCBjaGFyYWN0ZXJzXG4gICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvW15BLVowLTkrXFwvXS9pZywgJycpO1xuXG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMCwgaW1vZDQgPSAwOyBpIDwgYmFzZTY0Lmxlbmd0aDtcbiAgICAgICAgICBpbW9kNCA9ICsraSAlIDQpIHtcbiAgICAgICAgaWYgKGltb2Q0ID09IDApIGNvbnRpbnVlO1xuICAgICAgICBieXRlcy5wdXNoKCgoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpIC0gMSkpXG4gICAgICAgICAgICAmIChNYXRoLnBvdygyLCAtMiAqIGltb2Q0ICsgOCkgLSAxKSkgPDwgKGltb2Q0ICogMikpXG4gICAgICAgICAgICB8IChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkpKSA+Pj4gKDYgLSBpbW9kNCAqIDIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gY3J5cHQ7XG59KSgpO1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCJpZighc2VsZi53aW5kb3cpe3dpbmRvdz1zZWxmO31cbihmdW5jdGlvbigpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiBhYSgpe3JldHVybiBmdW5jdGlvbigpe319ZnVuY3Rpb24gYmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3RoaXNbYV09Yn19ZnVuY3Rpb24gZyhhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1thXX19ZnVuY3Rpb24gayhhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYX19dmFyIG0sZGE9dGhpcztmdW5jdGlvbiBuKGEpe3JldHVybiB2b2lkIDAhPT1hfWZ1bmN0aW9uIGVhKCl7fVxuZnVuY3Rpb24gZmEoYSl7dmFyIGI9dHlwZW9mIGE7aWYoXCJvYmplY3RcIj09YilpZihhKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuXCJhcnJheVwiO2lmKGEgaW5zdGFuY2VvZiBPYmplY3QpcmV0dXJuIGI7dmFyIGM9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpO2lmKFwiW29iamVjdCBXaW5kb3ddXCI9PWMpcmV0dXJuXCJvYmplY3RcIjtpZihcIltvYmplY3QgQXJyYXldXCI9PWN8fFwibnVtYmVyXCI9PXR5cGVvZiBhLmxlbmd0aCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuc3BsaWNlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSYmIWEucHJvcGVydHlJc0VudW1lcmFibGUoXCJzcGxpY2VcIikpcmV0dXJuXCJhcnJheVwiO2lmKFwiW29iamVjdCBGdW5jdGlvbl1cIj09Y3x8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuY2FsbCYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJiFhLnByb3BlcnR5SXNFbnVtZXJhYmxlKFwiY2FsbFwiKSlyZXR1cm5cImZ1bmN0aW9uXCJ9ZWxzZSByZXR1cm5cIm51bGxcIjtcbmVsc2UgaWYoXCJmdW5jdGlvblwiPT1iJiZcInVuZGVmaW5lZFwiPT10eXBlb2YgYS5jYWxsKXJldHVyblwib2JqZWN0XCI7cmV0dXJuIGJ9ZnVuY3Rpb24gZ2EoYSl7cmV0dXJuIG51bGwhPWF9ZnVuY3Rpb24gaGEoYSl7dmFyIGI9ZmEoYSk7cmV0dXJuXCJhcnJheVwiPT1ifHxcIm9iamVjdFwiPT1iJiZcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGh9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGF9ZnVuY3Rpb24gamEoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT1mYShhKX1mdW5jdGlvbiBrYShhKXtyZXR1cm4gYVtsYV18fChhW2xhXT0rK21hKX12YXIgbGE9XCJjbG9zdXJlX3VpZF9cIisoMUU5Kk1hdGgucmFuZG9tKCk+Pj4wKSxtYT0wO2Z1bmN0aW9uIG5hKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfVxuZnVuY3Rpb24gb2EoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShjLGQpO3JldHVybiBhLmFwcGx5KGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcGEoYSxiLGMpe3BhPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kJiYtMSE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQudG9TdHJpbmcoKS5pbmRleE9mKFwibmF0aXZlIGNvZGVcIik/bmE6b2E7cmV0dXJuIHBhLmFwcGx5KG51bGwsYXJndW1lbnRzKX1cbmZ1bmN0aW9uIHFhKGEsYil7dmFyIGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiBmdW5jdGlvbigpe3ZhciBiPWMuc2xpY2UoKTtiLnB1c2guYXBwbHkoYixhcmd1bWVudHMpO3JldHVybiBhLmFwcGx5KHRoaXMsYil9fWZ1bmN0aW9uIHEoYSxiKXthPWEuc3BsaXQoXCIuXCIpO3ZhciBjPWRhO2FbMF1pbiBjfHwhYy5leGVjU2NyaXB0fHxjLmV4ZWNTY3JpcHQoXCJ2YXIgXCIrYVswXSk7Zm9yKHZhciBkO2EubGVuZ3RoJiYoZD1hLnNoaWZ0KCkpOykhYS5sZW5ndGgmJm4oYik/Y1tkXT1iOmM9Y1tkXSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGMsZCk/Y1tkXTpjW2RdPXt9fVxuZnVuY3Rpb24gcihhLGIpe2Z1bmN0aW9uIGMoKXt9Yy5wcm90b3R5cGU9Yi5wcm90b3R5cGU7YS5oYj1iLnByb3RvdHlwZTthLnByb3RvdHlwZT1uZXcgYzthLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hO2EuVmc9ZnVuY3Rpb24oYSxjLGYpe2Zvcih2YXIgZD1BcnJheShhcmd1bWVudHMubGVuZ3RoLTIpLGU9MjtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWRbZS0yXT1hcmd1bWVudHNbZV07cmV0dXJuIGIucHJvdG90eXBlW2NdLmFwcGx5KGEsZCl9fTtmdW5jdGlvbiByYShhKXtpZihFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSlFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLHJhKTtlbHNle3ZhciBiPUVycm9yKCkuc3RhY2s7YiYmKHRoaXMuc3RhY2s9Yil9YSYmKHRoaXMubWVzc2FnZT1TdHJpbmcoYSkpfXIocmEsRXJyb3IpO3JhLnByb3RvdHlwZS5uYW1lPVwiQ3VzdG9tRXJyb3JcIjt2YXIgdGE9U3RyaW5nLnByb3RvdHlwZS50cmltP2Z1bmN0aW9uKGEpe3JldHVybiBhLnRyaW0oKX06ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXltcXHNcXHhhMF0rfFtcXHNcXHhhMF0rJC9nLFwiXCIpfTtcbmZ1bmN0aW9uIHVhKGEsYil7dmFyIGM9MDthPXRhKFN0cmluZyhhKSkuc3BsaXQoXCIuXCIpO2I9dGEoU3RyaW5nKGIpKS5zcGxpdChcIi5cIik7Zm9yKHZhciBkPU1hdGgubWF4KGEubGVuZ3RoLGIubGVuZ3RoKSxlPTA7MD09YyYmZTxkO2UrKyl7dmFyIGY9YVtlXXx8XCJcIixoPWJbZV18fFwiXCI7ZG97Zj0vKFxcZCopKFxcRCopKC4qKS8uZXhlYyhmKXx8W1wiXCIsXCJcIixcIlwiLFwiXCJdO2g9LyhcXGQqKShcXEQqKSguKikvLmV4ZWMoaCl8fFtcIlwiLFwiXCIsXCJcIixcIlwiXTtpZigwPT1mWzBdLmxlbmd0aCYmMD09aFswXS5sZW5ndGgpYnJlYWs7Yz12YSgwPT1mWzFdLmxlbmd0aD8wOnBhcnNlSW50KGZbMV0sMTApLDA9PWhbMV0ubGVuZ3RoPzA6cGFyc2VJbnQoaFsxXSwxMCkpfHx2YSgwPT1mWzJdLmxlbmd0aCwwPT1oWzJdLmxlbmd0aCl8fHZhKGZbMl0saFsyXSk7Zj1mWzNdO2g9aFszXX13aGlsZSgwPT1jKX1yZXR1cm4gY31mdW5jdGlvbiB2YShhLGIpe3JldHVybiBhPGI/LTE6YT5iPzE6MH07ZnVuY3Rpb24gd2EoYSxiLGMpe3RoaXMucGc9Yzt0aGlzLk9mPWE7dGhpcy5LZz1iO3RoaXMucWQ9MDt0aGlzLmZkPW51bGx9d2EucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe3ZhciBhOzA8dGhpcy5xZD8odGhpcy5xZC0tLGE9dGhpcy5mZCx0aGlzLmZkPWEubmV4dCxhLm5leHQ9bnVsbCk6YT10aGlzLk9mKCk7cmV0dXJuIGF9O3dhLnByb3RvdHlwZS5wdXQ9ZnVuY3Rpb24oYSl7dGhpcy5LZyhhKTt0aGlzLnFkPHRoaXMucGcmJih0aGlzLnFkKyssYS5uZXh0PXRoaXMuZmQsdGhpcy5mZD1hKX07dmFyIHhhPUFycmF5LnByb3RvdHlwZS5pbmRleE9mP2Z1bmN0aW9uKGEsYixjKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtjPW51bGw9PWM/MDowPmM/TWF0aC5tYXgoMCxhLmxlbmd0aCtjKTpjO2lmKGlhKGEpKXJldHVybiBpYShiKSYmMT09Yi5sZW5ndGg/YS5pbmRleE9mKGIsYyk6LTE7Zm9yKDtjPGEubGVuZ3RoO2MrKylpZihjIGluIGEmJmFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSx5YT1BcnJheS5wcm90b3R5cGUuZm9yRWFjaD9mdW5jdGlvbihhLGIsYyl7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1pYShhKT9hLnNwbGl0KFwiXCIpOmEsZj0wO2Y8ZDtmKyspZiBpbiBlJiZiLmNhbGwoYyxlW2ZdLGYsYSl9LHphPUFycmF5LnByb3RvdHlwZS5tYXA/ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYSxcbmIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1BcnJheShkKSxmPWlhKGEpP2Euc3BsaXQoXCJcIik6YSxoPTA7aDxkO2grKyloIGluIGYmJihlW2hdPWIuY2FsbChjLGZbaF0saCxhKSk7cmV0dXJuIGV9LEFhPUFycmF5LnByb3RvdHlwZS5yZWR1Y2U/ZnVuY3Rpb24oYSxiLGMsZCl7ZCYmKGI9cGEoYixkKSk7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UuY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWM7eWEoYSxmdW5jdGlvbihjLGgpe2U9Yi5jYWxsKGQsZSxjLGgsYSl9KTtyZXR1cm4gZX0sQmE9QXJyYXkucHJvdG90eXBlLnNvbWU/ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGEsYixjKX06ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxlPWlhKGEpP2Euc3BsaXQoXCJcIik6YSxmPTA7ZjxkO2YrKylpZihmIGluIGUmJmIuY2FsbChjLGVbZl0sZixhKSlyZXR1cm4hMDtyZXR1cm4hMX07XG5mdW5jdGlvbiBDYShhLGIsYyl7cmV0dXJuIDI+PWFyZ3VtZW50cy5sZW5ndGg/QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSxiKTpBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhLGIsYyl9ZnVuY3Rpb24gRGEoYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGE7YysrKWJbY109MDtyZXR1cm4gYn1mdW5jdGlvbiBFYShhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspe3ZhciBkPWFyZ3VtZW50c1tjXTtpZihcImFycmF5XCI9PWZhKGQpKWZvcih2YXIgZT0wO2U8ZC5sZW5ndGg7ZSs9ODE5Milmb3IodmFyIGY9RWEuYXBwbHkobnVsbCxDYShkLGUsZSs4MTkyKSksaD0wO2g8Zi5sZW5ndGg7aCsrKWIucHVzaChmW2hdKTtlbHNlIGIucHVzaChkKX1yZXR1cm4gYn07ZnVuY3Rpb24gRmEoYSl7dmFyIGI9W10sYz0wLGQ7Zm9yKGQgaW4gYSliW2MrK109YVtkXTtyZXR1cm4gYn07dmFyIEdhO2E6e3ZhciBIYT1kYS5uYXZpZ2F0b3I7aWYoSGEpe3ZhciBJYT1IYS51c2VyQWdlbnQ7aWYoSWEpe0dhPUlhO2JyZWFrIGF9fUdhPVwiXCJ9ZnVuY3Rpb24gdChhKXtyZXR1cm4tMSE9R2EuaW5kZXhPZihhKX07ZnVuY3Rpb24gSmEoKXtyZXR1cm4gdChcIlNhZmFyaVwiKSYmIShLYSgpfHx0KFwiQ29hc3RcIil8fHQoXCJPcGVyYVwiKXx8dChcIkVkZ2VcIil8fHQoXCJTaWxrXCIpfHx0KFwiQW5kcm9pZFwiKSl9ZnVuY3Rpb24gS2EoKXtyZXR1cm4odChcIkNocm9tZVwiKXx8dChcIkNyaU9TXCIpKSYmIXQoXCJFZGdlXCIpfTtmdW5jdGlvbiBMYShhKXtkYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYTt9LDApfXZhciBNYTtcbmZ1bmN0aW9uIE9hKCl7dmFyIGE9ZGEuTWVzc2FnZUNoYW5uZWw7XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdyYmd2luZG93LnBvc3RNZXNzYWdlJiZ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciYmIXQoXCJQcmVzdG9cIikmJihhPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklGUkFNRVwiKTthLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7YS5zcmM9XCJcIjtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYSk7dmFyIGI9YS5jb250ZW50V2luZG93LGE9Yi5kb2N1bWVudDthLm9wZW4oKTthLndyaXRlKFwiXCIpO2EuY2xvc2UoKTt2YXIgYz1cImNhbGxJbW1lZGlhdGVcIitNYXRoLnJhbmRvbSgpLGQ9XCJmaWxlOlwiPT1iLmxvY2F0aW9uLnByb3RvY29sP1wiKlwiOmIubG9jYXRpb24ucHJvdG9jb2wrXCIvL1wiK2IubG9jYXRpb24uaG9zdCxhPXBhKGZ1bmN0aW9uKGEpe2lmKChcIipcIj09ZHx8YS5vcmlnaW49PWQpJiZhLmRhdGE9PVxuYyl0aGlzLnBvcnQxLm9ubWVzc2FnZSgpfSx0aGlzKTtiLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYSwhMSk7dGhpcy5wb3J0MT17fTt0aGlzLnBvcnQyPXtwb3N0TWVzc2FnZTpmdW5jdGlvbigpe2IucG9zdE1lc3NhZ2UoYyxkKX19fSk7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBhJiYhdChcIlRyaWRlbnRcIikmJiF0KFwiTVNJRVwiKSl7dmFyIGI9bmV3IGEsYz17fSxkPWM7Yi5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZihuKGMubmV4dCkpe2M9Yy5uZXh0O3ZhciBhPWMuRmU7Yy5GZT1udWxsO2EoKX19O3JldHVybiBmdW5jdGlvbihhKXtkLm5leHQ9e0ZlOmF9O2Q9ZC5uZXh0O2IucG9ydDIucG9zdE1lc3NhZ2UoMCl9fXJldHVyblwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpP2Z1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIik7XG5iLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2Iub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7Yi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpO2I9bnVsbDthKCk7YT1udWxsfTtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYil9OmZ1bmN0aW9uKGEpe2RhLnNldFRpbWVvdXQoYSwwKX19O2Z1bmN0aW9uIFBhKCl7dGhpcy5CZD10aGlzLm9jPW51bGx9dmFyIFJhPW5ldyB3YShmdW5jdGlvbigpe3JldHVybiBuZXcgUWF9LGZ1bmN0aW9uKGEpe2EucmVzZXQoKX0sMTAwKTtQYS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEsYil7dmFyIGM9UmEuZ2V0KCk7Yy5zZXQoYSxiKTt0aGlzLkJkP3RoaXMuQmQubmV4dD1jOnRoaXMub2M9Yzt0aGlzLkJkPWN9O1BhLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXt2YXIgYT1udWxsO3RoaXMub2MmJihhPXRoaXMub2MsdGhpcy5vYz10aGlzLm9jLm5leHQsdGhpcy5vY3x8KHRoaXMuQmQ9bnVsbCksYS5uZXh0PW51bGwpO3JldHVybiBhfTtmdW5jdGlvbiBRYSgpe3RoaXMubmV4dD10aGlzLnNjb3BlPXRoaXMuVGQ9bnVsbH1RYS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7dGhpcy5UZD1hO3RoaXMuc2NvcGU9Yjt0aGlzLm5leHQ9bnVsbH07XG5RYS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLm5leHQ9dGhpcy5zY29wZT10aGlzLlRkPW51bGx9O2Z1bmN0aW9uIFNhKGEsYil7VGF8fFVhKCk7VmF8fChUYSgpLFZhPSEwKTtXYS5hZGQoYSxiKX12YXIgVGE7ZnVuY3Rpb24gVWEoKXtpZigtMSE9U3RyaW5nKGRhLlByb21pc2UpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKXt2YXIgYT1kYS5Qcm9taXNlLnJlc29sdmUodm9pZCAwKTtUYT1mdW5jdGlvbigpe2EudGhlbihYYSl9fWVsc2UgVGE9ZnVuY3Rpb24oKXt2YXIgYT1YYTshamEoZGEuc2V0SW1tZWRpYXRlKXx8ZGEuV2luZG93JiZkYS5XaW5kb3cucHJvdG90eXBlJiYhdChcIkVkZ2VcIikmJmRhLldpbmRvdy5wcm90b3R5cGUuc2V0SW1tZWRpYXRlPT1kYS5zZXRJbW1lZGlhdGU/KE1hfHwoTWE9T2EoKSksTWEoYSkpOmRhLnNldEltbWVkaWF0ZShhKX19dmFyIFZhPSExLFdhPW5ldyBQYTtmdW5jdGlvbiBYYSgpe2Zvcih2YXIgYTthPVdhLnJlbW92ZSgpOyl7dHJ5e2EuVGQuY2FsbChhLnNjb3BlKX1jYXRjaChiKXtMYShiKX1SYS5wdXQoYSl9VmE9ITF9O2Z1bmN0aW9uIHUoYSxiKXt0aGlzLlRhPTA7dGhpcy5uZj12b2lkIDA7dGhpcy5WYz10aGlzLmRjPXRoaXMuRD1udWxsO3RoaXMuZWQ9dGhpcy5SZD0hMTtpZihhIT1lYSl0cnl7dmFyIGM9dGhpczthLmNhbGwoYixmdW5jdGlvbihhKXtZYShjLDIsYSl9LGZ1bmN0aW9uKGEpe1lhKGMsMyxhKX0pfWNhdGNoKGQpe1lhKHRoaXMsMyxkKX19ZnVuY3Rpb24gWmEoKXt0aGlzLm5leHQ9dGhpcy5jb250ZXh0PXRoaXMuaWM9dGhpcy5JYz10aGlzLmNoaWxkPW51bGw7dGhpcy5FZD0hMX1aYS5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmNvbnRleHQ9dGhpcy5pYz10aGlzLkljPXRoaXMuY2hpbGQ9bnVsbDt0aGlzLkVkPSExfTt2YXIgJGE9bmV3IHdhKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBaYX0sZnVuY3Rpb24oYSl7YS5yZXNldCgpfSwxMDApO2Z1bmN0aW9uIGFiKGEsYixjKXt2YXIgZD0kYS5nZXQoKTtkLkljPWE7ZC5pYz1iO2QuY29udGV4dD1jO3JldHVybiBkfVxuZnVuY3Rpb24gdihhKXtpZihhIGluc3RhbmNlb2YgdSlyZXR1cm4gYTt2YXIgYj1uZXcgdShlYSk7WWEoYiwyLGEpO3JldHVybiBifWZ1bmN0aW9uIGJiKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe2MoYSl9KX1mdW5jdGlvbiBjYihhLGIsYyl7ZGIoYSxiLGMsbnVsbCl8fFNhKHFhKGIsYSkpfWZ1bmN0aW9uIGViKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGMpe3ZhciBkPWEubGVuZ3RoLGU9W107aWYoZClmb3IodmFyIGY9ZnVuY3Rpb24oYSxjKXtkLS07ZVthXT1jOzA9PWQmJmIoZSl9LGg9ZnVuY3Rpb24oYSl7YyhhKX0sbD0wLHA7bDxhLmxlbmd0aDtsKyspcD1hW2xdLGNiKHAscWEoZixsKSxoKTtlbHNlIGIoZSl9KX1mdW5jdGlvbiB3KCl7dmFyIGEsYixjPW5ldyB1KGZ1bmN0aW9uKGMsZSl7YT1jO2I9ZX0pO3JldHVybiBuZXcgZmIoYyxhLGIpfVxudS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGdiKHRoaXMsamEoYSk/YTpudWxsLGphKGIpP2I6bnVsbCxjKX07dS5wcm90b3R5cGUudGhlbj11LnByb3RvdHlwZS50aGVuO3UucHJvdG90eXBlLiRnb29nX1RoZW5hYmxlPSEwO3UucHJvdG90eXBlLnZlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGdiKHRoaXMsbnVsbCxhLGIpfTtmdW5jdGlvbiBoYihhLGIpe2EuZGN8fDIhPWEuVGEmJjMhPWEuVGF8fGliKGEpO2EuVmM/YS5WYy5uZXh0PWI6YS5kYz1iO2EuVmM9Yn1cbmZ1bmN0aW9uIGdiKGEsYixjLGQpe3ZhciBlPWFiKG51bGwsbnVsbCxudWxsKTtlLmNoaWxkPW5ldyB1KGZ1bmN0aW9uKGEsaCl7ZS5JYz1iP2Z1bmN0aW9uKGMpe3RyeXt2YXIgZT1iLmNhbGwoZCxjKTthKGUpfWNhdGNoKEwpe2goTCl9fTphO2UuaWM9Yz9mdW5jdGlvbihiKXt0cnl7dmFyIGU9Yy5jYWxsKGQsYik7IW4oZSkmJmIgaW5zdGFuY2VvZiBqYj9oKGIpOmEoZSl9Y2F0Y2goTCl7aChMKX19Omh9KTtlLmNoaWxkLkQ9YTtoYihhLGUpO3JldHVybiBlLmNoaWxkfXUucHJvdG90eXBlLlFnPWZ1bmN0aW9uKGEpe3RoaXMuVGE9MDtZYSh0aGlzLDIsYSl9O3UucHJvdG90eXBlLlJnPWZ1bmN0aW9uKGEpe3RoaXMuVGE9MDtZYSh0aGlzLDMsYSl9O1xuZnVuY3Rpb24gWWEoYSxiLGMpezA9PWEuVGEmJihhPT09YyYmKGI9MyxjPW5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbm5vdCByZXNvbHZlIHRvIGl0c2VsZlwiKSksYS5UYT0xLGRiKGMsYS5RZyxhLlJnLGEpfHwoYS5uZj1jLGEuVGE9YixhLkQ9bnVsbCxpYihhKSwzIT1ifHxjIGluc3RhbmNlb2YgamJ8fGtiKGEsYykpKX1mdW5jdGlvbiBkYihhLGIsYyxkKXtpZihhIGluc3RhbmNlb2YgdSlyZXR1cm4gaGIoYSxhYihifHxlYSxjfHxudWxsLGQpKSwhMDt2YXIgZTtpZihhKXRyeXtlPSEhYS4kZ29vZ19UaGVuYWJsZX1jYXRjaChoKXtlPSExfWVsc2UgZT0hMTtpZihlKXJldHVybiBhLnRoZW4oYixjLGQpLCEwO2U9dHlwZW9mIGE7aWYoXCJvYmplY3RcIj09ZSYmbnVsbCE9YXx8XCJmdW5jdGlvblwiPT1lKXRyeXt2YXIgZj1hLnRoZW47aWYoamEoZikpcmV0dXJuIGxiKGEsZixiLGMsZCksITB9Y2F0Y2goaCl7cmV0dXJuIGMuY2FsbChkLGgpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gbGIoYSxiLGMsZCxlKXtmdW5jdGlvbiBmKGEpe2x8fChsPSEwLGQuY2FsbChlLGEpKX1mdW5jdGlvbiBoKGEpe2x8fChsPSEwLGMuY2FsbChlLGEpKX12YXIgbD0hMTt0cnl7Yi5jYWxsKGEsaCxmKX1jYXRjaChwKXtmKHApfX1mdW5jdGlvbiBpYihhKXthLlJkfHwoYS5SZD0hMCxTYShhLlZmLGEpKX1mdW5jdGlvbiBtYihhKXt2YXIgYj1udWxsO2EuZGMmJihiPWEuZGMsYS5kYz1iLm5leHQsYi5uZXh0PW51bGwpO2EuZGN8fChhLlZjPW51bGwpO3JldHVybiBifVxudS5wcm90b3R5cGUuVmY9ZnVuY3Rpb24oKXtmb3IodmFyIGE7YT1tYih0aGlzKTspe3ZhciBiPXRoaXMuVGEsYz10aGlzLm5mO2lmKDM9PWImJmEuaWMmJiFhLkVkKXt2YXIgZDtmb3IoZD10aGlzO2QmJmQuZWQ7ZD1kLkQpZC5lZD0hMX1pZihhLmNoaWxkKWEuY2hpbGQuRD1udWxsLG5iKGEsYixjKTtlbHNlIHRyeXthLkVkP2EuSWMuY2FsbChhLmNvbnRleHQpOm5iKGEsYixjKX1jYXRjaChlKXtvYi5jYWxsKG51bGwsZSl9JGEucHV0KGEpfXRoaXMuUmQ9ITF9O2Z1bmN0aW9uIG5iKGEsYixjKXsyPT1iP2EuSWMuY2FsbChhLmNvbnRleHQsYyk6YS5pYyYmYS5pYy5jYWxsKGEuY29udGV4dCxjKX1mdW5jdGlvbiBrYihhLGIpe2EuZWQ9ITA7U2EoZnVuY3Rpb24oKXthLmVkJiZvYi5jYWxsKG51bGwsYil9KX12YXIgb2I9TGE7ZnVuY3Rpb24gamIoYSl7cmEuY2FsbCh0aGlzLGEpfXIoamIscmEpO2piLnByb3RvdHlwZS5uYW1lPVwiY2FuY2VsXCI7XG5mdW5jdGlvbiBmYihhLGIsYyl7dGhpcy5oYT1hO3RoaXMucmVzb2x2ZT1iO3RoaXMucmVqZWN0PWN9O2Z1bmN0aW9uIHBiKGEsYixjLGQpe2M9Y3x8ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09Yn07ZD1kfHxmdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07Zm9yKHZhciBlPWEubGVuZ3RoLGY9Yi5sZW5ndGgsaD1bXSxsPTA7bDxlKzE7bCsrKWhbbF09W10saFtsXVswXT0wO2Zvcih2YXIgcD0wO3A8ZisxO3ArKyloWzBdW3BdPTA7Zm9yKGw9MTtsPD1lO2wrKylmb3IocD0xO3A8PWY7cCsrKWMoYVtsLTFdLGJbcC0xXSk/aFtsXVtwXT1oW2wtMV1bcC0xXSsxOmhbbF1bcF09TWF0aC5tYXgoaFtsLTFdW3BdLGhbbF1bcC0xXSk7Zm9yKHZhciBMPVtdLGw9ZSxwPWY7MDxsJiYwPHA7KWMoYVtsLTFdLGJbcC0xXSk/KEwudW5zaGlmdChkKGwtMSxwLTEpKSxsLS0scC0tKTpoW2wtMV1bcF0+aFtsXVtwLTFdP2wtLTpwLS07cmV0dXJuIEx9ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIEFhKGFyZ3VtZW50cyxmdW5jdGlvbihhLGMpe3JldHVybiBhK2N9LDApfVxuZnVuY3Rpb24gcmIoYSl7cmV0dXJuIHFiLmFwcGx5KG51bGwsYXJndW1lbnRzKS9hcmd1bWVudHMubGVuZ3RofWZ1bmN0aW9uIHNiKGEpe3ZhciBiPWFyZ3VtZW50cy5sZW5ndGg7aWYoMj5iKXJldHVybiAwO3ZhciBjPXJiLmFwcGx5KG51bGwsYXJndW1lbnRzKTtyZXR1cm4gcWIuYXBwbHkobnVsbCx6YShhcmd1bWVudHMsZnVuY3Rpb24oYSl7cmV0dXJuIE1hdGgucG93KGEtYywyKX0pKS8oYi0xKX1mdW5jdGlvbiB0YihhKXtyZXR1cm4gTWF0aC5zcXJ0KHNiLmFwcGx5KG51bGwsYXJndW1lbnRzKSl9O3ZhciB1Yj1cIlN0b3BJdGVyYXRpb25cImluIGRhP2RhLlN0b3BJdGVyYXRpb246e21lc3NhZ2U6XCJTdG9wSXRlcmF0aW9uXCIsc3RhY2s6XCJcIn07ZnVuY3Rpb24gdmIoKXt9dmIucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXt0aHJvdyB1Yjt9O3ZiLnByb3RvdHlwZS5wYz1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtmdW5jdGlvbiB3YihhKXtpZihhIGluc3RhbmNlb2YgdmIpcmV0dXJuIGE7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYS5wYylyZXR1cm4gYS5wYyghMSk7aWYoaGEoYSkpe3ZhciBiPTAsYz1uZXcgdmI7Yy5uZXh0PWZ1bmN0aW9uKCl7Zm9yKDs7KXtpZihiPj1hLmxlbmd0aCl0aHJvdyB1YjtpZihiIGluIGEpcmV0dXJuIGFbYisrXTtiKyt9fTtyZXR1cm4gY310aHJvdyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTt9XG5mdW5jdGlvbiB4YihhLGIpe2lmKGhhKGEpKXRyeXt5YShhLGIsdm9pZCAwKX1jYXRjaChjKXtpZihjIT09dWIpdGhyb3cgYzt9ZWxzZXthPXdiKGEpO3RyeXtmb3IoOzspYi5jYWxsKHZvaWQgMCxhLm5leHQoKSx2b2lkIDAsYSl9Y2F0Y2goYyl7aWYoYyE9PXViKXRocm93IGM7fX19ZnVuY3Rpb24geWIoYSl7aWYoQmEoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3JldHVybiFhLmxlbmd0aH0pfHwhYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gbmV3IHZiO3ZhciBiPW5ldyB2YixjPWFyZ3VtZW50cyxkPURhKGMubGVuZ3RoKTtiLm5leHQ9ZnVuY3Rpb24oKXtpZihkKXtmb3IodmFyIGE9emEoZCxmdW5jdGlvbihhLGIpe3JldHVybiBjW2JdW2FdfSksYj1kLmxlbmd0aC0xOzA8PWI7Yi0tKXtpZihkW2JdPGNbYl0ubGVuZ3RoLTEpe2RbYl0rKzticmVha31pZigwPT1iKXtkPW51bGw7YnJlYWt9ZFtiXT0wfXJldHVybiBhfXRocm93IHViO307cmV0dXJuIGJ9O2Z1bmN0aW9uIHpiKGEsYil7dGhpcy5sPXt9O3RoaXMuYT1bXTt0aGlzLlVhPXRoaXMuRWI9MDt2YXIgYz1hcmd1bWVudHMubGVuZ3RoO2lmKDE8Yyl7aWYoYyUyKXRocm93IEVycm9yKFwiVW5ldmVuIG51bWJlciBvZiBhcmd1bWVudHNcIik7Zm9yKHZhciBkPTA7ZDxjO2QrPTIpdGhpcy5zZXQoYXJndW1lbnRzW2RdLGFyZ3VtZW50c1tkKzFdKX1lbHNlIGEmJnRoaXMuYWRkQWxsKGEpfW09emIucHJvdG90eXBlO20uemM9ZyhcIkViXCIpO20ucWE9ZnVuY3Rpb24oKXtBYih0aGlzKTtmb3IodmFyIGE9W10sYj0wO2I8dGhpcy5hLmxlbmd0aDtiKyspYS5wdXNoKHRoaXMubFt0aGlzLmFbYl1dKTtyZXR1cm4gYX07ZnVuY3Rpb24gQmIoYSl7QWIoYSk7cmV0dXJuIGEuYS5jb25jYXQoKX1tLlBhPWZ1bmN0aW9uKGEpe3JldHVybiBFYih0aGlzLmwsYSl9O20uamQ9ZnVuY3Rpb24oKXtyZXR1cm4gMD09dGhpcy5FYn07XG5tLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5sPXt9O3RoaXMuVWE9dGhpcy5FYj10aGlzLmEubGVuZ3RoPTB9O20ucmVtb3ZlPWZ1bmN0aW9uKGEpe3JldHVybiBFYih0aGlzLmwsYSk/KGRlbGV0ZSB0aGlzLmxbYV0sdGhpcy5FYi0tLHRoaXMuVWErKyx0aGlzLmEubGVuZ3RoPjIqdGhpcy5FYiYmQWIodGhpcyksITApOiExfTtmdW5jdGlvbiBBYihhKXtpZihhLkViIT1hLmEubGVuZ3RoKXtmb3IodmFyIGI9MCxjPTA7YjxhLmEubGVuZ3RoOyl7dmFyIGQ9YS5hW2JdO0ViKGEubCxkKSYmKGEuYVtjKytdPWQpO2IrK31hLmEubGVuZ3RoPWN9aWYoYS5FYiE9YS5hLmxlbmd0aCl7Zm9yKHZhciBlPXt9LGM9Yj0wO2I8YS5hLmxlbmd0aDspZD1hLmFbYl0sRWIoZSxkKXx8KGEuYVtjKytdPWQsZVtkXT0xKSxiKys7YS5hLmxlbmd0aD1jfX1tLmdldD1mdW5jdGlvbihhLGIpe3JldHVybiBFYih0aGlzLmwsYSk/dGhpcy5sW2FdOmJ9O1xubS5zZXQ9ZnVuY3Rpb24oYSxiKXtFYih0aGlzLmwsYSl8fCh0aGlzLkViKyssdGhpcy5hLnB1c2goYSksdGhpcy5VYSsrKTt0aGlzLmxbYV09Yn07bS5hZGRBbGw9ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSBpbnN0YW5jZW9mIHpiKWI9QmIoYSksYT1hLnFhKCk7ZWxzZXtiPVtdO3ZhciBjPTAsZDtmb3IoZCBpbiBhKWJbYysrXT1kO2E9RmEoYSl9Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLnNldChiW2NdLGFbY10pfTttLmZvckVhY2g9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9QmIodGhpcyksZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdLGY9dGhpcy5nZXQoZSk7YS5jYWxsKGIsZixlLHRoaXMpfX07bS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgemIodGhpcyl9O1xubS5wYz1mdW5jdGlvbihhKXtBYih0aGlzKTt2YXIgYj0wLGM9dGhpcy5VYSxkPXRoaXMsZT1uZXcgdmI7ZS5uZXh0PWZ1bmN0aW9uKCl7aWYoYyE9ZC5VYSl0aHJvdyBFcnJvcihcIlRoZSBtYXAgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGl0ZXJhdG9yIHdhcyBjcmVhdGVkXCIpO2lmKGI+PWQuYS5sZW5ndGgpdGhyb3cgdWI7dmFyIGU9ZC5hW2IrK107cmV0dXJuIGE/ZTpkLmxbZV19O3JldHVybiBlfTtmdW5jdGlvbiBFYihhLGIpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxiKX07ZnVuY3Rpb24gRmIoKXtyZXR1cm4gdChcImlQaG9uZVwiKSYmIXQoXCJpUG9kXCIpJiYhdChcImlQYWRcIil9O2Z1bmN0aW9uIEdiKGEsYil7dmFyIGM9SGI7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjLGEpP2NbYV06Y1thXT1iKGEpfTt2YXIgSWI9dChcIk9wZXJhXCIpLEpiPXQoXCJUcmlkZW50XCIpfHx0KFwiTVNJRVwiKSxLYj10KFwiRWRnZVwiKSxMYj10KFwiR2Vja29cIikmJiEoLTEhPUdhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIndlYmtpdFwiKSYmIXQoXCJFZGdlXCIpKSYmISh0KFwiVHJpZGVudFwiKXx8dChcIk1TSUVcIikpJiYhdChcIkVkZ2VcIiksTWI9LTEhPUdhLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIndlYmtpdFwiKSYmIXQoXCJFZGdlXCIpLE5iPXQoXCJNYWNpbnRvc2hcIiksT2I9dChcIldpbmRvd3NcIiksUGI9dChcIkFuZHJvaWRcIiksUWI9RmIoKSxSYj10KFwiaVBhZFwiKSxTYj10KFwiaVBvZFwiKSxUYjtcbmE6e3ZhciBVYj1cIlwiLFZiPWZ1bmN0aW9uKCl7dmFyIGE9R2E7aWYoTGIpcmV0dXJuL3J2XFw6KFteXFwpO10rKShcXCl8OykvLmV4ZWMoYSk7aWYoS2IpcmV0dXJuL0VkZ2VcXC8oW1xcZFxcLl0rKS8uZXhlYyhhKTtpZihKYilyZXR1cm4vXFxiKD86TVNJRXxydilbOiBdKFteXFwpO10rKShcXCl8OykvLmV4ZWMoYSk7aWYoTWIpcmV0dXJuL1dlYktpdFxcLyhcXFMrKS8uZXhlYyhhKTtpZihJYilyZXR1cm4vKD86VmVyc2lvbilbIFxcL10/KFxcUyspLy5leGVjKGEpfSgpO1ZiJiYoVWI9VmI/VmJbMV06XCJcIik7aWYoSmIpe3ZhciBXYixYYj1kYS5kb2N1bWVudDtXYj1YYj9YYi5kb2N1bWVudE1vZGU6dm9pZCAwO2lmKG51bGwhPVdiJiZXYj5wYXJzZUZsb2F0KFViKSl7VGI9U3RyaW5nKFdiKTticmVhayBhfX1UYj1VYn12YXIgWWI9VGIsSGI9e307ZnVuY3Rpb24gWmIoYSl7cmV0dXJuIEdiKGEsZnVuY3Rpb24oKXtyZXR1cm4gMDw9dWEoWWIsYSl9KX07dmFyICRiPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIE9iPyhhPS9XaW5kb3dzIE5UIChbMC05Ll0rKS8sKGE9YS5leGVjKEdhKSk/YVsxXTpcIjBcIik6TmI/KGE9LzEwW18uXVswLTlfLl0rLywoYT1hLmV4ZWMoR2EpKT9hWzBdLnJlcGxhY2UoL18vZyxcIi5cIik6XCIxMFwiKTpQYj8oYT0vQW5kcm9pZFxccysoW15cXCk7XSspKFxcKXw7KS8sKGE9YS5leGVjKEdhKSk/YVsxXTpcIlwiKTpRYnx8UmJ8fFNiPyhhPS8oPzppUGhvbmV8Q1BVKVxccytPU1xccysoXFxTKykvLChhPWEuZXhlYyhHYSkpP2FbMV0ucmVwbGFjZSgvXy9nLFwiLlwiKTpcIlwiKTpcIlwifSgpO3ZhciBhYz1GYigpfHx0KFwiaVBvZFwiKSxiYz10KFwiaVBhZFwiKTsvKlxuXG4gQ29weXJpZ2h0IDIwMTUgVGhlIExvdmVmaWVsZCBQcm9qZWN0IEF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmZ1bmN0aW9uIGNjKCl7dmFyIGE7IShhPUphKCkmJiFaYigxMCkpJiYoYT1iY3x8YWMpJiYoYT0hKDA8PXVhKCRiLDEwKSkpO3RoaXMuYWU9YTt0aGlzLmZnPSEodGhpcy5hZXx8SmImJiFaYigxMCkpOyFKYnx8WmIoMTEpO3RoaXMuVWc9S2EoKXx8SmEoKTt0aGlzLnVnPW4od2luZG93Lk1hcCkmJm4od2luZG93Lk1hcC5wcm90b3R5cGUudmFsdWVzKSYmbih3aW5kb3cuTWFwLnByb3RvdHlwZS5mb3JFYWNoKSYmIXRoaXMuYWU7dGhpcy52Zz1uKHdpbmRvdy5TZXQpJiZuKHdpbmRvdy5TZXQucHJvdG90eXBlLnZhbHVlcykmJm4od2luZG93LlNldC5wcm90b3R5cGUuZm9yRWFjaCkmJiF0aGlzLmFlfXZhciBkYztmdW5jdGlvbiBlYygpe24oZGMpfHwoZGM9bmV3IGNjKTtyZXR1cm4gZGN9O2Z1bmN0aW9uIHgoKXt0aGlzLmw9bmV3IHpiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sLnpjKCl9fSl9eC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmwuY2xlYXIoKX07eC5wcm90b3R5cGUuY2xlYXI9eC5wcm90b3R5cGUuY2xlYXI7eC5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmwucmVtb3ZlKGEpfTt4LnByb3RvdHlwZVtcImRlbGV0ZVwiXT14LnByb3RvdHlwZS5kZWxldGU7eC5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmwuZm9yRWFjaChhLGIpfTt4LnByb3RvdHlwZS5mb3JFYWNoPXgucHJvdG90eXBlLmZvckVhY2g7eC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmwuZ2V0KGEpfTt4LnByb3RvdHlwZS5nZXQ9eC5wcm90b3R5cGUuZ2V0O3gucHJvdG90eXBlLmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5sLlBhKGEpfTtcbngucHJvdG90eXBlLmhhcz14LnByb3RvdHlwZS5oYXM7eC5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubC5zZXQoYSxiKX07eC5wcm90b3R5cGUuc2V0PXgucHJvdG90eXBlLnNldDt2YXIgZmM9ZWMoKS51ZztmdW5jdGlvbiB5KCl7cmV0dXJuIGZjP25ldyB3aW5kb3cuTWFwOm5ldyB4fWZ1bmN0aW9uIGdjKGEpe2lmKGEgaW5zdGFuY2VvZiB4KXJldHVybiBCYihhLmwpO3ZhciBiPTAsYz1BcnJheShhLnNpemUpO2EuZm9yRWFjaChmdW5jdGlvbihhLGUpe2NbYisrXT1lfSk7cmV0dXJuIGN9ZnVuY3Rpb24geihhKXtpZihhIGluc3RhbmNlb2YgeClyZXR1cm4gYS5sLnFhKCk7dmFyIGI9MCxjPUFycmF5KGEuc2l6ZSk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2NbYisrXT1hfSk7cmV0dXJuIGN9Oy8qXG5cbiBDb3B5cmlnaHQgMjAxNCBUaGUgTG92ZWZpZWxkIFByb2plY3QgQXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuZnVuY3Rpb24gaGMoYSxiKXt0aGlzLnNhPWE7dGhpcy5tPWJ8fHRoaXMuS2UoKX12YXIgaWM9MDttPWhjLnByb3RvdHlwZTttLmlkPWcoXCJzYVwiKTttLktlPWZ1bmN0aW9uKCl7cmV0dXJue319O20ud2Y9ZyhcIm1cIik7bS5KYT1mdW5jdGlvbigpe3JldHVybntpZDp0aGlzLnNhLHZhbHVlOnRoaXMud2YoKX19O20ubmI9ZnVuY3Rpb24oYSl7cmV0dXJuXCIjXCI9PWEuc3Vic3RyKC0xKT90aGlzLnNhOm51bGx9O2Z1bmN0aW9uIGpjKGEpe3JldHVybiBuZXcgaGMoYS5pZCxhLnZhbHVlKX1mdW5jdGlvbiBrYyhhKXtyZXR1cm4gbmV3IGhjKGljKyssYXx8e30pfWZ1bmN0aW9uIGxjKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7YT1uZXcgVWludDhBcnJheShhKTtmb3IodmFyIGI9XCJcIixjPTA7YzxhLmxlbmd0aDsrK2MpdmFyIGQ9YVtjXS50b1N0cmluZygxNiksYj1iKygyPmQubGVuZ3RoP1wiMFwiK2Q6ZCk7cmV0dXJuIGJ9O3ZhciBtYz17fTtxKFwibGYuVHJhbnNhY3Rpb25UeXBlXCIsbWMpO21jLlJFQURfT05MWT0wO21jLlJFQURfV1JJVEU9MTtmdW5jdGlvbiBBKGEsYixjLGQsZSl7dGhpcy53ZD1hO3RoaXMuamc9Yjt0aGlzLlRnPWM7dGhpcy5RZj1kO3RoaXMuSmY9ZX1xKFwibGYuVHJhbnNhY3Rpb25TdGF0c1wiLEEpO0EucHJvdG90eXBlLk9nPWcoXCJ3ZFwiKTtBLnByb3RvdHlwZS5zdWNjZXNzPUEucHJvdG90eXBlLk9nO0EucHJvdG90eXBlLmlnPWcoXCJqZ1wiKTtBLnByb3RvdHlwZS5pbnNlcnRlZFJvd0NvdW50PUEucHJvdG90eXBlLmlnO0EucHJvdG90eXBlLlNnPWcoXCJUZ1wiKTtBLnByb3RvdHlwZS51cGRhdGVkUm93Q291bnQ9QS5wcm90b3R5cGUuU2c7QS5wcm90b3R5cGUuUGY9ZyhcIlFmXCIpO0EucHJvdG90eXBlLmRlbGV0ZWRSb3dDb3VudD1BLnByb3RvdHlwZS5QZjtBLnByb3RvdHlwZS5JZj1nKFwiSmZcIik7QS5wcm90b3R5cGUuY2hhbmdlZFRhYmxlQ291bnQ9QS5wcm90b3R5cGUuSWY7ZnVuY3Rpb24gbmMoYSxiKXt0aGlzLnlkPWE7dGhpcy5SYT1ifHxudWxsO3RoaXMuUz13KCk7dGhpcy53ZD0hMTt0aGlzLnphPW51bGx9bmMucHJvdG90eXBlLmthPWZ1bmN0aW9uKCl7cmV0dXJuKDA9PXRoaXMueWQ/dGhpcy5zYygpOm9jKHRoaXMpKS50aGVuKGZ1bmN0aW9uKGEpe3RoaXMud2Q9ITA7cmV0dXJuIGF9LmJpbmQodGhpcykpfTtmdW5jdGlvbiBvYyhhKXt0cnl7cGMoYS5SYSl9Y2F0Y2goYil7cmV0dXJuIGJiKGIpfXJldHVybiBxYyhhKS50aGVuKGZ1bmN0aW9uKGEpe3RoaXMuUmEua2EoKTtyZXR1cm4gYX0uYmluZChhKSl9ZnVuY3Rpb24gcWMoYSl7cmMoYSk7c2MoYSk7cmV0dXJuIGEuc2MoKX1cbmZ1bmN0aW9uIHJjKGEpe2EuUmEuaWIuZm9yRWFjaChmdW5jdGlvbihhLGMpe2M9dGhpcy5SYS5kYSgpLmdldChjKTtjPXRoaXMuSShjLmdldE5hbWUoKSxjLmtiLmJpbmQoYyksMCk7dmFyIGI9eihhLnhhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaWQoKX0pOzA8Yi5sZW5ndGgmJmMucmVtb3ZlKGIpLnZlKHRoaXMuVGUsdGhpcyk7YT16KGEubGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYVsxXX0pLmNvbmNhdCh6KGEud2EpKTtjLnB1dChhKS52ZSh0aGlzLlRlLHRoaXMpfSxhKX1mdW5jdGlvbiBzYyhhKXt0YyhhLlJhKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuSShhLmdldE5hbWUoKSxqYywxKTtiLnJlbW92ZShbXSk7Yi5wdXQoYS5KYSgpKX0sYSl9bmMucHJvdG90eXBlLlRlPWZ1bmN0aW9uKGEpe3RoaXMuUy5yZWplY3QoYSl9O1xubmMucHJvdG90eXBlLlk9ZnVuY3Rpb24oKXtpZihudWxsPT09dGhpcy56YSlpZih0aGlzLndkKWlmKDA9PXRoaXMueWQpdGhpcy56YT1uZXcgQSghMCwwLDAsMCwwKTtlbHNle3ZhciBhPTAsYj0wLGM9MCxkPTA7dGhpcy5SYS5pYi5mb3JFYWNoKGZ1bmN0aW9uKGUpe2QrKzthKz1lLndhLnNpemU7Yys9ZS5sYS5zaXplO2IrPWUueGEuc2l6ZX0pO3RoaXMuemE9bmV3IEEoITAsYSxjLGIsZCl9ZWxzZSB0aGlzLnphPW5ldyBBKCExLDAsMCwwLDApO3JldHVybiB0aGlzLnphfTtmdW5jdGlvbiB1YyhhKXt0aGlzLkxnPWF9dWMucHJvdG90eXBlLnRvU3RyaW5nPWcoXCJMZ1wiKTt2YXIgdmM9bmV3IHVjKFwiYmFja3N0b3JlXCIpLHdjPW5ldyB1YyhcImNhY2hlXCIpLHhjPW5ldyB1YyhcImluZGV4c3RvcmVcIikseWM9bmV3IHVjKFwiZW5naW5lXCIpLHpjPW5ldyB1YyhcInJ1bm5lclwiKSxBYz1uZXcgdWMoXCJvYnNlcnZlcnJlZ2lzdHJ5XCIpLEJjPW5ldyB1YyhcInNjaGVtYVwiKTtmdW5jdGlvbiBDYyhhKXtpZihhLnFhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnFhKXJldHVybiBhLnFhKCk7aWYoaWEoYSkpcmV0dXJuIGEuc3BsaXQoXCJcIik7aWYoaGEoYSkpe2Zvcih2YXIgYj1bXSxjPWEubGVuZ3RoLGQ9MDtkPGM7ZCsrKWIucHVzaChhW2RdKTtyZXR1cm4gYn1yZXR1cm4gRmEoYSl9O2Z1bmN0aW9uIERjKGEpe3RoaXMubD1uZXcgemI7YSYmdGhpcy5hZGRBbGwoYSl9ZnVuY3Rpb24gRWMoYSl7dmFyIGI9dHlwZW9mIGE7cmV0dXJuXCJvYmplY3RcIj09YiYmYXx8XCJmdW5jdGlvblwiPT1iP1wib1wiK2thKGEpOmIuc3Vic3RyKDAsMSkrYX1tPURjLnByb3RvdHlwZTttLnpjPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubC56YygpfTttLmFkZD1mdW5jdGlvbihhKXt0aGlzLmwuc2V0KEVjKGEpLGEpfTttLmFkZEFsbD1mdW5jdGlvbihhKXthPUNjKGEpO2Zvcih2YXIgYj1hLmxlbmd0aCxjPTA7YzxiO2MrKyl0aGlzLmFkZChhW2NdKX07bS5yZW1vdmU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubC5yZW1vdmUoRWMoYSkpfTttLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5sLmNsZWFyKCl9O20uamQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sLmpkKCl9O20uY29udGFpbnM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubC5QYShFYyhhKSl9O20ucWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sLnFhKCl9O1xubS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGModGhpcyl9O20ucGM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sLnBjKCExKX07ZnVuY3Rpb24gRmMoYSl7dGhpcy5YYj1uZXcgRGMoYSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLlhiLnpjKCl9fSl9RmMucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhKXt0aGlzLlhiLmFkZChhKX07RmMucHJvdG90eXBlLmFkZD1GYy5wcm90b3R5cGUuYWRkO0ZjLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuWGIuY2xlYXIoKX07RmMucHJvdG90eXBlLmNsZWFyPUZjLnByb3RvdHlwZS5jbGVhcjtGYy5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlhiLnJlbW92ZShhKX07RmMucHJvdG90eXBlW1wiZGVsZXRlXCJdPUZjLnByb3RvdHlwZS5kZWxldGU7RmMucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24oYSxiKXt0aGlzLlhiLnFhKCkuZm9yRWFjaChhLGIpfTtGYy5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlhiLmNvbnRhaW5zKGEpfTtcbkZjLnByb3RvdHlwZS5oYXM9RmMucHJvdG90eXBlLmhhczt2YXIgR2M9ZWMoKS52ZztmdW5jdGlvbiBCKGEpe3JldHVybiBHYz9uKGEpP25ldyB3aW5kb3cuU2V0KGEpOm5ldyB3aW5kb3cuU2V0Om5ldyBGYyhhKX1mdW5jdGlvbiBDKGEpe2lmKGEgaW5zdGFuY2VvZiBGYylyZXR1cm4gYS5YYi5xYSgpO3ZhciBiPTAsYz1BcnJheShhLnNpemUpO2EuZm9yRWFjaChmdW5jdGlvbihhKXtjW2IrK109YX0pO3JldHVybiBjfWZ1bmN0aW9uIEhjKGEsYil7aWYoYi5zaXplPmEuc2l6ZSlyZXR1cm4hMTt2YXIgYz0hMDtiLmZvckVhY2goZnVuY3Rpb24oYil7Yz1jJiZhLmhhcyhiKX0pO3JldHVybiBjfTtmdW5jdGlvbiBJYyhhLGIpe3RoaXMuc2E9YTt0aGlzLm09Ynx8e319ZnVuY3Rpb24gSmMoYSl7dmFyIGI9QigpO2EuZm9yRWFjaChmdW5jdGlvbihhKXtiLmFkZChhPj45KX0pO3JldHVybiBDKGIpfUljLnByb3RvdHlwZS5XPWcoXCJzYVwiKTtmdW5jdGlvbiBLYyhhLGIpe2IuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLm1bYS5pZCgpXT1hLkphKCl9LGEpfWZ1bmN0aW9uIExjKGEsYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2RlbGV0ZSB0aGlzLm1bYV19LGEpfUljLnByb3RvdHlwZS5KYT1mdW5jdGlvbigpe3JldHVybntpZDp0aGlzLnNhLHZhbHVlOkpTT04uc3RyaW5naWZ5KHRoaXMubSl9fTtmdW5jdGlvbiBNYyhhKXtyZXR1cm4gbmV3IEljKGEuaWQsSlNPTi5wYXJzZShhLnZhbHVlKSl9O2Z1bmN0aW9uIE5jKGEsYixjKXt0aGlzLlo9YTt0aGlzLkdiPWI7dGhpcy5wZj1jfW09TmMucHJvdG90eXBlO20uZ2V0PWZ1bmN0aW9uKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiB0aGlzLlZkKCk7dmFyIGI9dGhpcy5HYjtyZXR1cm4gT2ModGhpcyxhKS50aGVuKGZ1bmN0aW9uKGMpe3JldHVybiBhLm1hcChmdW5jdGlvbihhKXt2YXIgZD1jLmdldChhPj45KTtyZXR1cm4gYihkLm1bYV0pfSl9KX07ZnVuY3Rpb24gT2MoYSxiKXt2YXIgYz15KCksZD13KCk7YT1KYyhiKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsZCl7dmFyIGU7dHJ5e2U9dGhpcy5aLmdldChhKX1jYXRjaChwKXtkKHApO3JldHVybn1lLm9uZXJyb3I9ZDtlLm9uc3VjY2Vzcz1mdW5jdGlvbihhKXthPU1jKGEudGFyZ2V0LnJlc3VsdCk7Yy5zZXQoYS5XKCksYSk7YigpfX0sdGhpcyl9LGEpO2ViKGEpLnRoZW4oZnVuY3Rpb24oKXtkLnJlc29sdmUoYyl9KTtyZXR1cm4gZC5oYX1cbm0uVmQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkO3RyeXtkPXRoaXMuWi5vcGVuQ3Vyc29yKCl9Y2F0Y2goZSl7YihlKTtyZXR1cm59ZC5vbmVycm9yPWI7ZC5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXt2YXIgYj1kLnJlc3VsdDtpZihiKXt2YXIgZj1NYyhiLnZhbHVlKS5tLGg7Zm9yKGggaW4gZiljLnB1c2godGhpcy5HYihmW2hdKSk7Yi5jb250aW51ZSgpfWVsc2UgYShjKX0uYmluZCh0aGlzKX0sdGhpcyl9O20uVGI9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7dmFyIGQ7dHJ5e2Q9YSgpfWNhdGNoKGUpe2MoZSk7cmV0dXJufWQub25zdWNjZXNzPWI7ZC5vbmVycm9yPWN9LHRoaXMpfTtcbm0ucHV0PWZ1bmN0aW9uKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiB2KCk7dmFyIGI9eSgpO2EuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYz1hLmlkKCk+PjksZT1iLmdldChjKXx8bnVsbDtudWxsPT09ZSYmKGU9dGhpcy5wZih0aGlzLloubmFtZSxjKSk7S2MoZSxbYV0pO2Iuc2V0KGMsZSl9LHRoaXMpO2E9eihiKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuVGIoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5aLnB1dChhLkphKCkpfS5iaW5kKHRoaXMpKX0sdGhpcyk7cmV0dXJuIGViKGEpfTtcbm0ucmVtb3ZlPWZ1bmN0aW9uKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiB0aGlzLlRiKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuWi5jbGVhcigpfS5iaW5kKHRoaXMpKTt2YXIgYj15KCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjPWE+PjksZT1iLmdldChjKXx8bnVsbDtudWxsPT09ZSYmKGU9dGhpcy5wZih0aGlzLloubmFtZSxjKSk7TGMoZSxbYV0pO2Iuc2V0KGMsZSl9LHRoaXMpO2E9eihiKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuVGIoZnVuY3Rpb24oKXtyZXR1cm4gMD09T2JqZWN0LmtleXMoYS5tKS5sZW5ndGg/dGhpcy5aLmRlbGV0ZShhLlcoKSk6dGhpcy5aLnB1dChhLkphKCkpfS5iaW5kKHRoaXMpKX0sdGhpcyk7cmV0dXJuIGViKGEpfTtmdW5jdGlvbiBQYyhhLGIsYyl7YT1hLmIod2MpO3ZhciBkPVtjPDw5LChjKzE8PDkpLTFdO2I9YS5WYShiLGRbMF0sZFsxXSk7Yz1uZXcgSWMoYyk7S2MoYyxiKTtyZXR1cm4gY31cbmZ1bmN0aW9uIFFjKGEsYil7cmV0dXJuIG5ldyBJYyhiKX07ZnVuY3Rpb24gUmMoYSl7dGhpcy5WPWEuYih3Yyk7dGhpcy5DPWEuYih4Yyk7dGhpcy5nPWEuYihCYyl9UmMucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihhKXthLmZvckVhY2goZnVuY3Rpb24oYSl7U2ModGhpcyxhKTtVYyh0aGlzLGEpfSx0aGlzKX07ZnVuY3Rpb24gVWMoYSxiKXt2YXIgYz1iLmdldE5hbWUoKTtiLnhhLmZvckVhY2goZnVuY3Rpb24oYSxiKXt0aGlzLlYucmVtb3ZlKGMsYil9LGEpO2Iud2EuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLlYuc2V0KGMsYSl9LGEpO2IubGEuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLlYuc2V0KGMsYVsxXSl9LGEpfWZ1bmN0aW9uIFNjKGEsYil7dmFyIGM9YS5nLnRhYmxlKGIuZ2V0TmFtZSgpKTtWYyhiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe1djKHRoaXMsYyxhKX0sYSl9XG5mdW5jdGlvbiBXYyhhLGIsYyl7dmFyIGQ9YS5DLmxjLmdldChiLmdldE5hbWUoKSl8fFtdLGU9MDtkLmZvckVhY2goZnVuY3Rpb24oYSl7dHJ5e1hjKGEsYyksZSsrfWNhdGNoKGgpe3Rocm93IGQuc2xpY2UoMCxlKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe1hjKGEsW2NbMV0sY1swXV0pfSx0aGlzKSxoO319LGEpfWZ1bmN0aW9uIFhjKGEsYil7dmFyIGM9bnVsbD09PWJbMV0/dm9pZCAwOmJbMV0ubmIoYS5nZXROYW1lKCkpLGQ9bnVsbD09PWJbMF0/dm9pZCAwOmJbMF0ubmIoYS5nZXROYW1lKCkpO2lmKCFuKGQpJiZuKGMpKWEuYWRkKGMsYlsxXS5pZCgpKTtlbHNlIGlmKG4oZCkmJm4oYykpe2lmKG51bGw9PT1jfHxudWxsPT09ZCl7aWYoYz09ZClyZXR1cm59ZWxzZSBpZigwPT1hLmpiKCkuY29tcGFyZShkLGMpKXJldHVybjthLmFkZChjLGJbMV0uaWQoKSk7YS5yZW1vdmUoZCxiWzBdLmlkKCkpfWVsc2UgbihkKSYmIW4oYykmJmEucmVtb3ZlKGQsYlswXS5pZCgpKX07dmFyIFljPXt9O3EoXCJsZi5Db25zdHJhaW50QWN0aW9uXCIsWWMpO1ljLlJFU1RSSUNUPTA7WWMuQ0FTQ0FERT0xO3ZhciBaYz17fTtxKFwibGYuQ29uc3RyYWludFRpbWluZ1wiLFpjKTtaYy5JTU1FRElBVEU9MDtaYy5ERUZFUlJBQkxFPTE7dmFyICRjPXt9O3EoXCJsZi5PcmRlclwiLCRjKTskYy5ERVNDPTA7JGMuQVNDPTE7dmFyIGFkPXt9O3EoXCJsZi5UeXBlXCIsYWQpO2FkLkFSUkFZX0JVRkZFUj0wO2FkLkJPT0xFQU49MTthZC5EQVRFX1RJTUU9MjthZC5JTlRFR0VSPTM7YWQuTlVNQkVSPTQ7YWQuU1RSSU5HPTU7YWQuT0JKRUNUPTY7dmFyIGJkPXswOm51bGwsMTohMSwyOk9iamVjdC5mcmVlemUobmV3IERhdGUoMCkpLDM6MCw0OjAsNTpcIlwiLDY6bnVsbH07cShcImxmLnR5cGUuREVGQVVMVF9WQUxVRVNcIixiZCk7ZnVuY3Rpb24gRChhLGIpe3RoaXMuY29kZT1hO3RoaXMubWVzc2FnZT1cImh0dHA6Ly9nb29nbGUuZ2l0aHViLmlvL2xvdmVmaWVsZC9lcnJvcl9sb29rdXAvc3JjL2Vycm9yX2xvb2t1cC5odG1sP2M9XCIrYTtpZigxPGFyZ3VtZW50cy5sZW5ndGgpZm9yKHZhciBjPTE7Yzw9TWF0aC5taW4oNCxhcmd1bWVudHMubGVuZ3RoLTEpOysrYyl0aGlzLm1lc3NhZ2UrPVwiJnBcIisoYy0xKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGFyZ3VtZW50c1tjXSkuc2xpY2UoMCw2NCkpfXIoRCxFcnJvcik7ZnVuY3Rpb24gY2QoKXt0aGlzLmw9eSgpO3RoaXMuc2l6ZT0wfW09Y2QucHJvdG90eXBlO20uaGFzPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmwuaGFzKGEpfTttLnNldD1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMubC5nZXQoYSl8fG51bGw7bnVsbD09PWMmJihjPUIoKSx0aGlzLmwuc2V0KGEsYykpO2MuaGFzKGIpfHwoYy5hZGQoYiksdGhpcy5zaXplKyspO3JldHVybiB0aGlzfTttLldiPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sLmdldChhKXx8bnVsbDtudWxsPT09YyYmKGM9QigpLHRoaXMubC5zZXQoYSxjKSk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2MuaGFzKGEpfHwoYy5hZGQoYSksdGhpcy5zaXplKyspfSx0aGlzKTtyZXR1cm4gdGhpc307bS5iZT1mdW5jdGlvbihhKXthLmtleXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBjPWEuZ2V0KGIpO3RoaXMuV2IoYixjKX0sdGhpcyk7cmV0dXJuIHRoaXN9O1xubS5kZWxldGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmwuZ2V0KGEpfHxudWxsO2lmKG51bGw9PT1jKXJldHVybiExO2lmKGI9Yy5kZWxldGUoYikpLS10aGlzLnNpemUsMD09Yy5zaXplJiZ0aGlzLmwuZGVsZXRlKGEpO3JldHVybiBifTttLmdldD1mdW5jdGlvbihhKXthPXRoaXMubC5nZXQoYSl8fG51bGw7cmV0dXJuIG51bGw9PT1hP251bGw6QyhhKX07bS5jbGVhcj1mdW5jdGlvbigpe3RoaXMubC5jbGVhcigpO3RoaXMuc2l6ZT0wfTttLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gZ2ModGhpcy5sKX07bS52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgYT1bXTt0aGlzLmwuZm9yRWFjaChmdW5jdGlvbihiKXthLnB1c2guYXBwbHkoYSxDKGIpKX0pO3JldHVybiBhfTtmdW5jdGlvbiBkZChhKXt0aGlzLkM9YS5iKHhjKTt0aGlzLmc9YS5iKEJjKTt0aGlzLlY9YS5iKHdjKTt0aGlzLiRjPW51bGx9ZnVuY3Rpb24gZWQoYSxiLGMpe3ZhciBkPWIuTWIueGc7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2QuZm9yRWFjaChmdW5jdGlvbihiKXtpZihudWxsPT1hLm1bYi5nZXROYW1lKCldKXRocm93IG5ldyBEKDIwMixiLmooKSk7fSx0aGlzKX0sYSl9ZnVuY3Rpb24gZmQoYSxiLGMsZCl7Yi5NYi5VZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EudGltaW5nPT1kJiZnZCh0aGlzLGEsYyl9LGEpfWZ1bmN0aW9uIGdkKGEsYixjKXt2YXIgZD1oZChhLGIpO2MuZm9yRWFjaChmdW5jdGlvbihhKXtpZihpZChhWzBdLGFbMV0sYi5uYW1lKSYmKGE9YVsxXS5uYihiLm5hbWUpLG51bGwhPT1hJiYhZC5QYShhKSkpdGhyb3cgbmV3IEQoMjAzLGIubmFtZSk7fSxhKX1cbmZ1bmN0aW9uIGhkKGEsYil7bnVsbD09PWEuJGMmJihhLiRjPXkoKSk7dmFyIGM9YS4kYy5nZXQoYi5uYW1lKXx8bnVsbDtudWxsPT09YyYmKGM9YS5nLnRhYmxlKGIuWGEpW2IuSmNdLkNhKCksYz1hLkMuZ2V0KGMuaigpKSxhLiRjLnNldChiLm5hbWUsYykpO3JldHVybiBjfWZ1bmN0aW9uIGlkKGEsYixjKXtyZXR1cm4obnVsbD09PWE/bnVsbCE9PWI6bnVsbD09PWIpfHxhLm5iKGMpIT1iLm5iKGMpfWZ1bmN0aW9uIGpkKGEsYixjLGQpe2I9a2QoYS5nLmluZm8oKSxiLmdldE5hbWUoKSwwKTtudWxsIT09YiYmKGI9Yi5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltaW5nPT1kfSksMCE9Yi5sZW5ndGgmJmxkKGEsYixjLGZ1bmN0aW9uKGEsYixjKXtpZihiLlBhKGMpKXRocm93IG5ldyBEKDIwMyxhLm5hbWUpO30pKX1cbmZ1bmN0aW9uIG1kKGEsYixjKXtiPWtkKGEuZy5pbmZvKCksYi5nZXROYW1lKCksMSk7aWYobnVsbD09PWIpcmV0dXJuIG51bGw7dmFyIGQ9bmV3IGNkO2xkKGEsYixjLGZ1bmN0aW9uKGEsYixjKXtiPWIuZ2V0KGMpOzA8Yi5sZW5ndGgmJmQuV2IoYS5HZSxiKX0pO3JldHVybiBkfWZ1bmN0aW9uIG5kKGEsYixjKXt2YXIgZD1uZXcgY2Q7bGQoYSxjLGIsZnVuY3Rpb24oYSxiLGMsbCl7Yi5nZXQoYykuZm9yRWFjaChmdW5jdGlvbihiKXtkLnNldChiLHtTZDphLENnOmxbMV19KX0pfSk7cmV0dXJuIGR9ZnVuY3Rpb24gbGQoYSxiLGMsZCl7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuQy5nZXQoYS5uYW1lKSxlPWhkKHRoaXMsYSk7Yy5mb3JFYWNoKGZ1bmN0aW9uKGMpe2lmKGlkKGNbMF0sY1sxXSxlLmdldE5hbWUoKSkpe3ZhciBmPWNbMF0ubmIoZS5nZXROYW1lKCkpO2QoYSxiLGYsYyl9fSx0aGlzKX0sYSl9XG5mdW5jdGlvbiBvZChhLGIsYyxkKXswIT1jLmxlbmd0aCYmKGM9Yy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuW251bGwsYV19KSxmZChhLGIsYyxkKSl9ZnVuY3Rpb24gcGQoYSxiLGMsZCl7MCE9Yy5sZW5ndGgmJihmZChhLGIsYyxkKSxqZChhLGIsYyxkKSl9ZnVuY3Rpb24gcWQoYSxiLGMsZCl7MCE9Yy5sZW5ndGgmJihjPWMubWFwKGZ1bmN0aW9uKGEpe3JldHVyblthLG51bGxdfSksamQoYSxiLGMsZCkpfVxuZnVuY3Rpb24gcmQoYSxiLGMpe3ZhciBkPXt1ZTpbXSxyZjpuZXcgY2R9LGU9bmV3IGNkO2UuV2IoYi5nZXROYW1lKCksYy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaWQoKX0pKTtkb3t2YXIgZj1uZXcgY2Q7ZS5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLmcudGFibGUoYSk7YT1lLmdldChhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuW3RoaXMuVi5nZXQoYSksbnVsbF19LHRoaXMpO2I9bWQodGhpcyxiLGEpO251bGwhPT1iJiYoZC51ZS51bnNoaWZ0LmFwcGx5KGQudWUsYi5rZXlzKCkpLGYuYmUoYikpfSxhKTtlPWY7ZC5yZi5iZShlKX13aGlsZSgwPGUuc2l6ZSk7cmV0dXJuIGR9O2Z1bmN0aW9uIHNkKGEpe3RoaXMud2E9eSgpO3RoaXMubGE9eSgpO3RoaXMueGE9eSgpO3RoaXMuQT1hfW09c2QucHJvdG90eXBlO20uZ2V0TmFtZT1nKFwiQVwiKTttLmFkZD1mdW5jdGlvbihhKXtpZih0aGlzLnhhLmhhcyhhLmlkKCkpKXt2YXIgYj1bdGhpcy54YS5nZXQoYS5pZCgpKSxhXTt0aGlzLmxhLnNldChhLmlkKCksYik7dGhpcy54YS5kZWxldGUoYS5pZCgpKX1lbHNlIHRoaXMud2Euc2V0KGEuaWQoKSxhKX07bS5tb2RpZnk9ZnVuY3Rpb24oYSl7dmFyIGI9YVsxXSxjPWFbMF0uaWQoKTt0aGlzLndhLmhhcyhjKT90aGlzLndhLnNldChjLGIpOih0aGlzLmxhLmhhcyhjKSYmKGE9W3RoaXMubGEuZ2V0KGFbMF0uaWQoKSlbMF0sYl0pLHRoaXMubGEuc2V0KGMsYSkpfTtcbm0uZGVsZXRlPWZ1bmN0aW9uKGEpe2lmKHRoaXMud2EuaGFzKGEuaWQoKSkpdGhpcy53YS5kZWxldGUoYS5pZCgpKTtlbHNlIGlmKHRoaXMubGEuaGFzKGEuaWQoKSkpe3ZhciBiPXRoaXMubGEuZ2V0KGEuaWQoKSlbMF07dGhpcy5sYS5kZWxldGUoYS5pZCgpKTt0aGlzLnhhLnNldChhLmlkKCksYil9ZWxzZSB0aGlzLnhhLnNldChhLmlkKCksYSl9O20uYmU9ZnVuY3Rpb24oYSl7YS53YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuYWRkKGEpfSx0aGlzKTthLmxhLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5tb2RpZnkoYSl9LHRoaXMpO2EueGEuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLmRlbGV0ZShhKX0sdGhpcyl9O1xuZnVuY3Rpb24gVmMoYSl7dmFyIGI9W107YS53YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IucHVzaChbbnVsbCxhXSl9KTthLmxhLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5wdXNoKGEpfSk7YS54YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IucHVzaChbYSxudWxsXSl9KTtyZXR1cm4gYn1tLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbXCIrZ2ModGhpcy53YSkudG9TdHJpbmcoKStcIl0sIFtcIitnYyh0aGlzLmxhKS50b1N0cmluZygpK1wiXSwgW1wiK2djKHRoaXMueGEpLnRvU3RyaW5nKCkrXCJdXCJ9O2Z1bmN0aW9uIHRkKGEpe3ZhciBiPW5ldyBzZChhLkEpO2Eud2EuZm9yRWFjaChmdW5jdGlvbihhKXtiLmRlbGV0ZShhKX0pO2EueGEuZm9yRWFjaChmdW5jdGlvbihhKXtiLmFkZChhKX0pO2EubGEuZm9yRWFjaChmdW5jdGlvbihhKXtiLm1vZGlmeShbYVsxXSxhWzBdXSl9KTtyZXR1cm4gYn1cbm0uamQ9ZnVuY3Rpb24oKXtyZXR1cm4gMD09dGhpcy53YS5zaXplJiYwPT10aGlzLnhhLnNpemUmJjA9PXRoaXMubGEuc2l6ZX07ZnVuY3Rpb24gdWQoYSxiKXt0aGlzLmFhPXkoKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5hYS5zZXQoYS5nZXROYW1lKCksYSl9LHRoaXMpO3RoaXMuZz1hLmIoQmMpO3RoaXMuVj1hLmIod2MpO3RoaXMuQz1hLmIoeGMpO3RoaXMuQWE9bmV3IGRkKGEpO3RoaXMuZ2Q9bmV3IFJjKGEpO3RoaXMuaWI9eSgpfWZ1bmN0aW9uIHRjKGEpe3ZhciBiPVtdO2djKGEuaWIpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hYS5nZXQoYSl9LGEpLmZvckVhY2goZnVuY3Rpb24oYSl7YS5DYigpJiYoYS5EYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5wdXNoKHRoaXMuQy5nZXQoYS5qKCkpKX0sdGhpcyksYi5wdXNoKHRoaXMuQy5nZXQoYS5nZXROYW1lKCkrXCIuI1wiKSkpfSxhKTtyZXR1cm4gYn1tPXVkLnByb3RvdHlwZTttLmRhPWcoXCJhYVwiKTtcbm0uQWI9ZnVuY3Rpb24oYSxiKXt2ZCh0aGlzLGEpO2VkKHRoaXMuQWEsYSxiKTtvZCh0aGlzLkFhLGEsYiwwKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl3ZCh0aGlzLGEsW251bGwsYltjXV0pfTtmdW5jdGlvbiB3ZChhLGIsYyl7dmFyIGQ9Yi5nZXROYW1lKCksZT1hLmliLmdldChkKXx8bmV3IHNkKGQpO2EuaWIuc2V0KGQsZSk7dHJ5e1djKGEuZ2QsYixjKX1jYXRjaChoKXt0aHJvdyBoO31iPWNbMF07dmFyIGY9Y1sxXTtudWxsPT09YiYmbnVsbCE9PWY/KGEuVi5zZXQoZCxmKSxlLmFkZChmKSk6bnVsbCE9PWImJm51bGwhPT1mPyhhLlYuc2V0KGQsZiksZS5tb2RpZnkoYykpOm51bGwhPT1iJiZudWxsPT09ZiYmKGEuVi5yZW1vdmUoZCxiLmlkKCkpLGUuZGVsZXRlKGIpKX1cbm0udXBkYXRlPWZ1bmN0aW9uKGEsYil7dmQodGhpcyxhKTtlZCh0aGlzLkFhLGEsYik7Yj1iLm1hcChmdW5jdGlvbihhKXtyZXR1cm5bdGhpcy5WLmdldChhLmlkKCkpLGFdfSx0aGlzKTt4ZCh0aGlzLGEsYik7cGQodGhpcy5BYSxhLGIsMCk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe3dkKHRoaXMsYSxiKX0sdGhpcyl9O20uV2Q9ZnVuY3Rpb24oYSxiKXt2ZCh0aGlzLGEpO2VkKHRoaXMuQWEsYSxiKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXSxlPW51bGwsZixoPWEuTWIuc2Q7aWYobnVsbD09PWgpZj1udWxsO2Vsc2V7Zj10aGlzLkFhO3ZhciBoPWguaigpLGw9ZC5uYihoKTtmPWYuQy5nZXQoaCkuZ2V0KGwpO2Y9MD09Zi5sZW5ndGg/bnVsbDpmWzBdfW51bGwhPWY/KGU9dGhpcy5WLmdldChmKSxkLnNhPWYscGQodGhpcy5BYSxhLFtbZSxkXV0sMCkpOm9kKHRoaXMuQWEsYSxbZF0sMCk7d2QodGhpcyxhLFtlLGRdKX19O1xubS5yZW1vdmU9ZnVuY3Rpb24oYSxiKXt2ZCh0aGlzLGEpO3lkKHRoaXMsYSxiKTtxZCh0aGlzLkFhLGEsYiwwKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl3ZCh0aGlzLGEsW2JbY10sbnVsbF0pfTtmdW5jdGlvbiB4ZChhLGIsYyl7Yj1rZChhLmcuaW5mbygpLGIuZ2V0TmFtZSgpLDEpO2lmKG51bGwhPT1iKXt2YXIgZD1uZChhLkFhLGMsYik7ZC5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbihhKXtkLmdldChhKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuZy50YWJsZShiLlNkLkdlKSxkPXRoaXMuVi5nZXQoYSksZT1jLmtiKGQuSmEoKSk7ZS5tW2IuU2QudmJdPWIuQ2cubVtiLlNkLkpjXTt3ZCh0aGlzLGMsW2QsZV0pfSx0aGlzKX0sYSl9fVxuZnVuY3Rpb24geWQoYSxiLGMpe2lmKG51bGwhPT1rZChhLmcuaW5mbygpLGIuZ2V0TmFtZSgpLDEpKXtiPXJkKGEuQWEsYixjKTt2YXIgZD1iLnJmO2IudWUuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLmcudGFibGUoYSk7YT1kLmdldChhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuVi5nZXQoYSl9LHRoaXMpO3FkKHRoaXMuQWEsYixhLDApO2EuZm9yRWFjaChmdW5jdGlvbihhKXt3ZCh0aGlzLGIsW2EsbnVsbF0pfSx0aGlzKX0sYSl9fWZ1bmN0aW9uIHBjKGEpe2EuaWIuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFhLmdldChhLmdldE5hbWUoKSk7b2QodGhpcy5BYSxiLHooYS53YSksMSk7cWQodGhpcy5BYSxiLHooYS54YSksMSk7cGQodGhpcy5BYSxiLHooYS5sYSksMSl9LGEpfW0ua2E9YWEoKTttLkpiPWZ1bmN0aW9uKCl7dmFyIGE9eih0aGlzLmliKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRkKGEpfSk7dGhpcy5nZC51cGRhdGUoYSl9O1xuZnVuY3Rpb24gdmQoYSxiKXtpZighYS5hYS5oYXMoYi5nZXROYW1lKCkpKXRocm93IG5ldyBEKDEwNixiLmdldE5hbWUoKSk7fTtmdW5jdGlvbiBFKGEsYixjLGQpe3RoaXMuZnJvbT1hO3RoaXMubz1iO3RoaXMuZWE9dGhpcy5mcm9tPT1GPyExOmM7dGhpcy5uYT10aGlzLm89PUY/ITE6ZH12YXIgRj1uZXcgKGFhKCkpO0UucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuZWE/XCIoXCI6XCJbXCIpKyh0aGlzLmZyb209PUY/XCJ1bmJvdW5kXCI6dGhpcy5mcm9tKStcIiwgXCIrKHRoaXMubz09Rj9cInVuYm91bmRcIjp0aGlzLm8pKyh0aGlzLm5hP1wiKVwiOlwiXVwiKX07ZnVuY3Rpb24gemQoYSl7aWYoQWQoYSkpcmV0dXJuW107dmFyIGI9bnVsbCxjPW51bGw7YS5mcm9tPT1GfHwoYj1uZXcgRShGLGEuZnJvbSwhMSwhYS5lYSkpO2Eubz09Rnx8KGM9bmV3IEUoYS5vLEYsIWEubmEsITEpKTtyZXR1cm5bYixjXS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT1hfSl9RS5wcm90b3R5cGUucmV2ZXJzZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRSh0aGlzLm8sdGhpcy5mcm9tLHRoaXMubmEsdGhpcy5lYSl9O1xuZnVuY3Rpb24gQmQoYSxiKXt2YXIgYz1DZChhLmZyb20sYi5mcm9tLCEwLGEuZWEsYi5lYSk7aWYoMD09YylyZXR1cm4hMDt2YXIgZD0tMT09Yz9hOmI7YT0xPT1jP2E6YjtyZXR1cm4gZC5vPT1GfHxkLm8+YS5mcm9tfHxkLm89PWEuZnJvbSYmIWQubmEmJiFhLmVhfWZ1bmN0aW9uIERkKCl7cmV0dXJuIG5ldyBFKEYsRiwhMSwhMSl9ZnVuY3Rpb24gQWQoYSl7cmV0dXJuIGEuZnJvbT09RiYmYS5vPT1GfWZ1bmN0aW9uIEVkKGEpe3JldHVybiBhLmZyb209PWEubyYmYS5mcm9tIT1GJiYhYS5lYSYmIWEubmF9RS5wcm90b3R5cGUuY29udGFpbnM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vPT1GfHxhPHRoaXMub3x8YT09dGhpcy5vJiYhdGhpcy5uYTtyZXR1cm4odGhpcy5mcm9tPT1GfHxhPnRoaXMuZnJvbXx8YT09dGhpcy5mcm9tJiYhdGhpcy5lYSkmJmJ9O1xuZnVuY3Rpb24gQ2QoYSxiLGMsZCxlKXtmdW5jdGlvbiBmKGEpe3JldHVybiBjP2E6MT09YT8tMToxfWQ9ZHx8ITE7ZT1lfHwhMTtyZXR1cm4gYT09Rj9iPT1GPyhkPyFlOmUpP2Q/ZigxKTpmKC0xKTowOmYoLTEpOmI9PUY/ZigxKTphPGI/LTE6YT09Yj8oZD8hZTplKT9kP2YoMSk6ZigtMSk6MDoxfWZ1bmN0aW9uIEZkKGEsYil7dmFyIGM9Q2QoYS5mcm9tLGIuZnJvbSwhMCxhLmVhLGIuZWEpOzA9PWMmJihjPUNkKGEubyxiLm8sITEsYS5uYSxiLm5hKSk7cmV0dXJuIGN9ZnVuY3Rpb24gR2QoYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuW107YS5zb3J0KEZkKTtmb3IodmFyIGI9QXJyYXkoYS5sZW5ndGgrMSksYz0wO2M8Yi5sZW5ndGg7YysrKWJbY109MD09Yz9uZXcgRShGLGFbY10uZnJvbSwhMSwhMCk6Yz09Yi5sZW5ndGgtMT9uZXcgRShhW2MtMV0ubyxGLCEwLCExKTpuZXcgRShhW2MtMV0ubyxhW2NdLmZyb20sITAsITApO3JldHVybiBifTtmdW5jdGlvbiBIZChhKXt0aGlzLmtjPVtdO24oYSkmJnRoaXMuYWRkKGEpfUhkLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmtjLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS50b1N0cmluZygpfSkuam9pbihcIixcIil9O0hkLnByb3RvdHlwZS5QYT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5rYy5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiBiLmNvbnRhaW5zKGEpfSl9O0hkLnByb3RvdHlwZS5xYT1nKFwia2NcIik7XG5IZC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEpe2lmKDAhPWEubGVuZ3RoKWlmKGE9dGhpcy5rYy5jb25jYXQoYSksMT09YS5sZW5ndGgpdGhpcy5rYz1hO2Vsc2V7YS5zb3J0KEZkKTtmb3IodmFyIGI9W10sYz1hWzBdLGQ9MTtkPGEubGVuZ3RoOysrZClpZihCZChjLGFbZF0pKXt2YXIgZT1hW2RdLGY9RGQoKTtpZihjLmZyb20hPUYmJmUuZnJvbSE9Ril7dmFyIGg9Q2QoYy5mcm9tLGUuZnJvbSwhMCk7MSE9aD8oZi5mcm9tPWMuZnJvbSxmLmVhPTAhPWg/Yy5lYTpjLmVhJiZlLmVhKTooZi5mcm9tPWUuZnJvbSxmLmVhPWUuZWEpfWMubyE9RiYmZS5vIT1GJiYoaD1DZChjLm8sZS5vLCExKSwtMSE9aD8oZi5vPWMubyxmLm5hPTAhPWg/Yy5uYTpjLm5hJiZlLm5hKTooZi5vPWUubyxmLm5hPWUubmEpKTtjPWZ9ZWxzZSBiLnB1c2goYyksYz1hW2RdO2IucHVzaChjKTt0aGlzLmtjPWJ9fTtcbmZ1bmN0aW9uIElkKGEsYil7dmFyIGM9W107YS5xYSgpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYi5xYSgpLm1hcChmdW5jdGlvbihiKXt2YXIgYztpZihCZChhLGIpKXtjPURkKCk7dmFyIGQ9Q2QoYS5mcm9tLGIuZnJvbSwhMCksZD0wPT1kP2EuZWE/YTpiOi0xIT1kP2E6YjtjLmZyb209ZC5mcm9tO2MuZWE9ZC5lYTthLm89PUZ8fGIubz09Rj9iPWEubz09Rj9iOmE6KGQ9Q2QoYS5vLGIubywhMSksYj0wPT1kP2EubmE/YTpiOi0xPT1kP2E6Yik7Yy5vPWIubztjLm5hPWIubmF9ZWxzZSBjPW51bGw7cmV0dXJuIGN9KX0pLmZvckVhY2goZnVuY3Rpb24oYSl7Yz1jLmNvbmNhdChhKX0pO3JldHVybiBuZXcgSGQoYy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT1hfSkpfTtmdW5jdGlvbiBHKGEsYil7dGhpcy5lbnRyaWVzPWE7dGhpcy5NPUIoYik7dGhpcy4kYT1udWxsfUcucHJvdG90eXBlLnU9ZnVuY3Rpb24oKXtyZXR1cm4gQyh0aGlzLk0pfTtmdW5jdGlvbiBKZChhKXtyZXR1cm4gYS5lbnRyaWVzLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS52YS5tfSl9ZnVuY3Rpb24gS2QoYSl7cmV0dXJuIGEuZW50cmllcy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEudmEuaWQoKX0pfWZ1bmN0aW9uIExkKGEsYil7cmV0dXJuIGEuJGEuZ2V0KGIuaigpKX12YXIgTWQ9bnVsbDtmdW5jdGlvbiBOZCgpe251bGw9PT1NZCYmKE1kPW5ldyBHKFtdLFtdKSk7cmV0dXJuIE1kfVxuZnVuY3Rpb24gT2QoYSl7aWYoMD09YS5sZW5ndGgpcmV0dXJuIE5kKCk7Zm9yKHZhciBiPWEucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuIGErYi5lbnRyaWVzLmxlbmd0aH0sMCksYz1BcnJheShiKSxkPTAsYj1hLm1hcChmdW5jdGlvbihhKXt2YXIgYj15KCk7YS5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7Y1tkKytdPWE7Yi5zZXQoYS5pZCxhKX0pO3JldHVybiBifSksZT15KCksZj0wO2Y8Yy5sZW5ndGg7ZisrKWIuZXZlcnkoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaGFzKGNbZl0uaWQpfSkmJmUuc2V0KGNbZl0uaWQsY1tmXSk7cmV0dXJuIG5ldyBHKHooZSksQyhhWzBdLk0pKX1mdW5jdGlvbiBQZChhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gTmQoKTt2YXIgYj15KCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Iuc2V0KGEuaWQsYSl9KX0pO3JldHVybiBuZXcgRyh6KGIpLEMoYVswXS5NKSl9XG5mdW5jdGlvbiBRZChhLGIpe3ZhciBjPTE8Yi5sZW5ndGg7YT1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFJkKGEsYyl9KTtyZXR1cm4gbmV3IEcoYSxiKX1mdW5jdGlvbiBSZChhLGIpe3RoaXMudmE9YTt0aGlzLmlkPVNkKys7dGhpcy5ZZD1ifXZhciBTZD0wO2Z1bmN0aW9uIEgoYSxiKXt2YXIgYz1iLkthO3JldHVybiBudWxsIT09YyYmYS52YS5tLmhhc093blByb3BlcnR5KGMpP2EudmEubVtjXTphLllkP2EudmEubVtUZChiLkkoKSldW2IuZ2V0TmFtZSgpXTphLnZhLm1bYi5nZXROYW1lKCldfWZ1bmN0aW9uIFVkKGEsYixjKXt2YXIgZD1iLkthO2lmKG51bGwhPWQpYS52YS5tW2RdPWM7ZWxzZSBpZihhLllkKXt2YXIgZD1UZChiLkkoKSksZT1hLnZhLm1bZF07bnVsbD09ZSYmKGU9e30sYS52YS5tW2RdPWUpO2VbYi5nZXROYW1lKCldPWN9ZWxzZSBhLnZhLm1bYi5nZXROYW1lKCldPWN9XG5mdW5jdGlvbiBWZChhLGIsYyxkKXtmdW5jdGlvbiBlKGEsYil7aWYoYS5ZZCl7YT1hLnZhLm07Zm9yKHZhciBjIGluIGEpZltjXT1hW2NdfWVsc2UgZltiWzBdXT1hLnZhLm19dmFyIGY9e307ZShhLGIpO2UoYyxkKTthPW5ldyBoYygtMSxmKTtyZXR1cm4gbmV3IFJkKGEsITApfTtxKFwibGYuYmluZFwiLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgV2QoYSl9KTtmdW5jdGlvbiBXZChhKXt0aGlzLmZhPWF9cShcImxmLkJpbmRlclwiLFdkKTtXZC5wcm90b3R5cGUuQ2E9ZyhcImZhXCIpO2Z1bmN0aW9uIFhkKCl7dGhpcy5aZT1ZZCgpO3ZhciBhPVpkKCk7dGhpcy5PYj15KCk7dGhpcy5PYi5zZXQoMSwkZCgpKTt0aGlzLk9iLnNldCgyLGFlKCkpO3RoaXMuT2Iuc2V0KDQsYSk7dGhpcy5PYi5zZXQoMyxhKTt0aGlzLk9iLnNldCg1LGJlKCkpO3RoaXMuT2Iuc2V0KDYsY2UoKSl9dmFyIGRlO2Z1bmN0aW9uIGVlKCl7bnVsbCE9ZGV8fChkZT1uZXcgWGQpO3JldHVybiBkZX1mdW5jdGlvbiBmZShhLGIsYyl7YT1hLk9iLmdldChiKXx8bnVsbDtpZihudWxsPT09YSl0aHJvdyBuZXcgRCg1NTApO2M9YS5nZXQoYyl8fG51bGw7aWYobnVsbD09PWMpdGhyb3cgbmV3IEQoNTUwKTtyZXR1cm4gY31cbmZ1bmN0aW9uIFlkKCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4gYX12YXIgYj15KCk7Yi5zZXQoMSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWE/bnVsbDphPzE6MH0pO2Iuc2V0KDIsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hP251bGw6YS5nZXRUaW1lKCl9KTtiLnNldCgzLGEpO2Iuc2V0KDQsYSk7Yi5zZXQoNSxhKTtyZXR1cm4gYn1mdW5jdGlvbiAkZCgpe3ZhciBhPXkoKTthLnNldChcImVxXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYT09Y30pO2Euc2V0KFwibmVxXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYSE9Y30pO3JldHVybiBhfVxuZnVuY3Rpb24gWmQoKXt2YXIgYT0kZCgpO2Euc2V0KFwiYmV0d2VlblwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Y1swXXx8bnVsbD09PWNbMV0/ITE6YT49Y1swXSYmYTw9Y1sxXX0pO2Euc2V0KFwiZ3RlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmE+PWN9KTthLnNldChcImd0XCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmE+Y30pO2Euc2V0KFwiaW5cIixmdW5jdGlvbihhLGMpe3JldHVybi0xIT1jLmluZGV4T2YoYSl9KTthLnNldChcImx0ZVwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphPD1jfSk7YS5zZXQoXCJsdFwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphPGN9KTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGJlKCl7dmFyIGE9WmQoKTthLnNldChcIm1hdGNoXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOihuZXcgUmVnRXhwKGMpKS50ZXN0KGEpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gY2UoKXt2YXIgYT15KCk7YS5zZXQoXCJlcVwiLGZ1bmN0aW9uKGEsYyl7aWYobnVsbCE9PWMpdGhyb3cgbmV3IEQoNTUwKTtyZXR1cm4gbnVsbD09PWF9KTthLnNldChcIm5lcVwiLGZ1bmN0aW9uKGEsYyl7aWYobnVsbCE9PWMpdGhyb3cgbmV3IEQoNTUwKTtyZXR1cm4gbnVsbCE9PWF9KTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGFlKCl7dmFyIGE9eSgpO2Euc2V0KFwiYmV0d2VlblwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Y1swXXx8bnVsbD09PWNbMV0/ITE6YS5nZXRUaW1lKCk+PWNbMF0uZ2V0VGltZSgpJiZhLmdldFRpbWUoKTw9Y1sxXS5nZXRUaW1lKCl9KTthLnNldChcImVxXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4obnVsbD09PWE/LTE6YS5nZXRUaW1lKCkpPT0obnVsbD09PWM/LTE6Yy5nZXRUaW1lKCkpfSk7YS5zZXQoXCJndGVcIixmdW5jdGlvbihhLGMpe3JldHVybiBudWxsPT09YXx8bnVsbD09PWM/ITE6YS5nZXRUaW1lKCk+PWMuZ2V0VGltZSgpfSk7YS5zZXQoXCJndFwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphLmdldFRpbWUoKT5jLmdldFRpbWUoKX0pO2Euc2V0KFwiaW5cIixmdW5jdGlvbihhLGMpe3JldHVybiBjLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIGIuZ2V0VGltZSgpPT1hLmdldFRpbWUoKX0pfSk7YS5zZXQoXCJsdGVcIixcbmZ1bmN0aW9uKGEsYyl7cmV0dXJuIG51bGw9PT1hfHxudWxsPT09Yz8hMTphLmdldFRpbWUoKTw9Yy5nZXRUaW1lKCl9KTthLnNldChcImx0XCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gbnVsbD09PWF8fG51bGw9PT1jPyExOmEuZ2V0VGltZSgpPGMuZ2V0VGltZSgpfSk7YS5zZXQoXCJuZXFcIixmdW5jdGlvbihhLGMpe3JldHVybihudWxsPT09YT8tMTphLmdldFRpbWUoKSkhPShudWxsPT09Yz8tMTpjLmdldFRpbWUoKSl9KTtyZXR1cm4gYX07ZnVuY3Rpb24gSSgpe3RoaXMuaD10aGlzLkQ9bnVsbH12YXIgZ2U9W107SS5wcm90b3R5cGUuZ2V0UGFyZW50PWcoXCJEXCIpO0kucHJvdG90eXBlLmJiPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXM7bnVsbCE9PWEuZ2V0UGFyZW50KCk7KWE9YS5nZXRQYXJlbnQoKTtyZXR1cm4gYX07ZnVuY3Rpb24gaGUoYSl7Zm9yKHZhciBiPTA7bnVsbCE9PWEuZ2V0UGFyZW50KCk7KWIrKyxhPWEuZ2V0UGFyZW50KCk7cmV0dXJuIGJ9ZnVuY3Rpb24gSihhKXtyZXR1cm4gYS5ofHxnZX1mdW5jdGlvbiBpZShhLGIpe3JldHVybiBKKGEpW2JdfHxudWxsfWZ1bmN0aW9uIGplKGEsYixjKXtiLkQ9YTtudWxsPT09YS5oP2EuaD1bYl06YS5oLnNwbGljZShjLDAsYil9ZnVuY3Rpb24gSyhhLGIpe2IuRD1hO251bGw9PT1hLmg/YS5oPVtiXTphLmgucHVzaChiKX1cbmZ1bmN0aW9uIGtlKGEsYil7dmFyIGM9YS5oJiZhLmhbYl07cmV0dXJuIGM/KGMuRD1udWxsLGEuaC5zcGxpY2UoYiwxKSwwPT1hLmgubGVuZ3RoJiYoYS5oPW51bGwpLGMpOm51bGx9SS5wcm90b3R5cGUucmVtb3ZlQ2hpbGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGtlKHRoaXMsSih0aGlzKS5pbmRleE9mKGEpKX07ZnVuY3Rpb24gbGUoYSxiLGMpe2llKGEsYykuRD1udWxsO2IuRD1hO2EuaFtjXT1ifWZ1bmN0aW9uIG1lKGEsYixjKXshMSE9PWIuY2FsbChjLGEpJiZKKGEpLmZvckVhY2goZnVuY3Rpb24oYSl7bWUoYSxiLGMpfSl9O2Z1bmN0aW9uIG5lKCl7SS5jYWxsKHRoaXMpO3RoaXMuc2E9cGUrK31yKG5lLEkpO3ZhciBwZT0wO25lLnByb3RvdHlwZS5XPWcoXCJzYVwiKTtmdW5jdGlvbiBxZShhLGIsYyl7bmUuY2FsbCh0aGlzKTt0aGlzLko9YTt0aGlzLnZhbHVlPWI7dGhpcy5GPWM7dGhpcy52Yz1mZShlZSgpLHRoaXMuSi5HKCksdGhpcy5GKTt0aGlzLldhPSExO3RoaXMuY2M9Yn1yKHFlLG5lKTttPXFlLnByb3RvdHlwZTttLk5iPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IHFlKHRoaXMuSix0aGlzLnZhbHVlLHRoaXMuRik7YS5jYz10aGlzLmNjO2EudmQodGhpcy5XYSk7dmFyIGI9dGhpcy5XKCk7YS5zYT1iO3JldHVybiBhfTttLmxiPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPyhhLnB1c2godGhpcy5KKSxhKTpbdGhpcy5KXX07bS51PWZ1bmN0aW9uKGEpe2E9bnVsbCE9YT9hOkIoKTthLmFkZCh0aGlzLkouSSgpKTtyZXR1cm4gYX07bS52ZD1iYShcIldhXCIpO1xuZnVuY3Rpb24gcmUoYSl7dmFyIGI9ITE7YS52YWx1ZSBpbnN0YW5jZW9mIFdkfHwoYj1cImFycmF5XCI9PWZhKGEudmFsdWUpPyFhLnZhbHVlLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBXZH0pOiEwKTtpZighYil0aHJvdyBuZXcgRCg1MDEpO31tLmV2YWw9ZnVuY3Rpb24oYSl7cmUodGhpcyk7aWYoXCJpblwiPT10aGlzLkYpcmV0dXJuIHNlKHRoaXMsYSk7dmFyIGI9YS5lbnRyaWVzLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy52YyhIKGEsdGhpcy5KKSx0aGlzLnZhbHVlKSE9dGhpcy5XYX0sdGhpcyk7cmV0dXJuIG5ldyBHKGIsYS51KCkpfTtcbm0uYmluZD1mdW5jdGlvbihhKXtpZih0aGlzLmNjIGluc3RhbmNlb2YgV2Qpe3ZhciBiPXRoaXMuY2MuQ2EoKTtpZihhLmxlbmd0aDw9Yil0aHJvdyBuZXcgRCg1MTApO3RoaXMudmFsdWU9YVtiXX1lbHNlXCJhcnJheVwiPT1mYSh0aGlzLmNjKSYmKHRoaXMudmFsdWU9dGhpcy5jYy5tYXAoZnVuY3Rpb24oYil7aWYoYiBpbnN0YW5jZW9mIFdkKXt2YXIgYz1iLkNhKCk7aWYoYS5sZW5ndGg8PWMpdGhyb3cgbmV3IEQoNTEwKTtyZXR1cm4gYVtiLkNhKCldfXJldHVybiBifSkpfTtmdW5jdGlvbiBzZShhLGIpe3ZhciBjPUIoYS52YWx1ZSksZD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWE/ITE6Yy5oYXMoYSkhPXRoaXMuV2F9LmJpbmQoYSk7YT1iLmVudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBkKEgoYSx0aGlzLkopKX0sYSk7cmV0dXJuIG5ldyBHKGEsYi51KCkpfVxubS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwidmFsdWVfcHJlZChcIit0aGlzLkouaigpK1wiIFwiK3RoaXMuRisodGhpcy5XYT9cIihjb21wbGVtZW50KVwiOlwiXCIpK1wiIFwiK3RoaXMudmFsdWUrXCIpXCJ9O20ubGQ9ZnVuY3Rpb24oKXtyZSh0aGlzKTtyZXR1cm4gbnVsbCE9PXRoaXMudmFsdWUmJihcImJldHdlZW5cIj09dGhpcy5GfHxcImluXCI9PXRoaXMuRnx8XCJlcVwiPT10aGlzLkZ8fFwiZ3RcIj09dGhpcy5GfHxcImd0ZVwiPT10aGlzLkZ8fFwibHRcIj09dGhpcy5GfHxcImx0ZVwiPT10aGlzLkYpfTtcbm0ud2U9ZnVuY3Rpb24oKXt2YXIgYT1udWxsO2lmKFwiYmV0d2VlblwiPT10aGlzLkYpYT1uZXcgRSh0ZSh0aGlzLHRoaXMudmFsdWVbMF0pLHRlKHRoaXMsdGhpcy52YWx1ZVsxXSksITEsITEpO2Vsc2V7aWYoXCJpblwiPT10aGlzLkYpcmV0dXJuIGE9dGhpcy52YWx1ZS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBFKGEsYSwhMSwhMSl9KSxuZXcgSGQodGhpcy5XYT9HZChhKTphKTthPXRlKHRoaXMsdGhpcy52YWx1ZSk7YT1cImVxXCI9PXRoaXMuRj9uZXcgRShhLGEsITEsITEpOlwiZ3RlXCI9PXRoaXMuRj9uZXcgRShhLEYsITEsITEpOlwiZ3RcIj09dGhpcy5GP25ldyBFKGEsRiwhMCwhMSk6XCJsdGVcIj09dGhpcy5GP25ldyBFKEYsYSwhMSwhMSk6bmV3IEUoRixhLCExLCEwKX1yZXR1cm4gbmV3IEhkKHRoaXMuV2E/emQoYSk6W2FdKX07ZnVuY3Rpb24gdGUoYSxiKXtyZXR1cm4gMj09YS5KLkcoKT9iLmdldFRpbWUoKTpifTtmdW5jdGlvbiB1ZShhKXt0aGlzLmJhPWE7dGhpcy5XYz10aGlzLkdhPW51bGx9ZnVuY3Rpb24gdmUoYSxiKXtudWxsPT09YS5HYSYmbnVsbCE9YS53JiYoYS5HYT13ZShhLncpKTtyZXR1cm4gYS5HYS5nZXQoYil8fG51bGx9ZnVuY3Rpb24gd2UoYSl7dmFyIGI9eSgpO21lKGEsZnVuY3Rpb24oYSl7Yi5zZXQoYS5XKCksYSl9KTtyZXR1cm4gYn1mdW5jdGlvbiB4ZShhLGIpe2IudyYmKGEudz1iLncuTmIoKSk7YS5XYz1ifXVlLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIHllKGEsYil7YT1hLnc7bnVsbCE9YSYmbWUoYSxmdW5jdGlvbihhKXthIGluc3RhbmNlb2YgcWUmJmEuYmluZChiKX0pfTtmdW5jdGlvbiB6ZShhKXt1ZS5jYWxsKHRoaXMsYSl9cih6ZSx1ZSk7ZnVuY3Rpb24gQWUoYSl7dmFyIGI9XCJcIjthLmZvckVhY2goZnVuY3Rpb24oYyxkKXtiKz1jLkouaigpK1wiIFwiO2IrPTE9PWMub3JkZXI/XCJBU0NcIjpcIkRFU0NcIjtkPGEubGVuZ3RoLTEmJihiKz1cIiwgXCIpfSk7cmV0dXJuIGJ9emUucHJvdG90eXBlLmRhPWZ1bmN0aW9uKCl7cmV0dXJuIEIodGhpcy5mcm9tKX07emUucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IHplKHRoaXMuYmEpO3hlKGEsdGhpcyk7dGhpcy5mJiYoYS5mPXRoaXMuZi5zbGljZSgpKTt0aGlzLmZyb20mJihhLmZyb209dGhpcy5mcm9tLnNsaWNlKCkpO2EuWD10aGlzLlg7YS5MPXRoaXMuTDt0aGlzLk4mJihhLk49dGhpcy5OLnNsaWNlKCkpO3RoaXMucmEmJihhLnJhPXRoaXMucmEuc2xpY2UoKSk7dGhpcy5TYiYmKGEuU2I9dGhpcy5TYik7dGhpcy5aYiYmKGEuWmI9dGhpcy5aYik7YS5lYj10aGlzLmViO3JldHVybiBhfTtcbnplLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3plLmhiLmJpbmQuY2FsbCh0aGlzLGEpO251bGwhPXRoaXMuU2ImJih0aGlzLlg9YVt0aGlzLlNiLkNhKCldKTtudWxsIT10aGlzLlpiJiYodGhpcy5MPWFbdGhpcy5aYi5DYSgpXSk7eWUodGhpcyxhKTtyZXR1cm4gdGhpc307ZnVuY3Rpb24gQmUoYSxiKXt0aGlzLkhhPWE7dGhpcy5hYT1ifUJlLnByb3RvdHlwZS5iYj1nKFwiSGFcIik7QmUucHJvdG90eXBlLmRhPWcoXCJhYVwiKTtmdW5jdGlvbiBDZShhKXt2YXIgYj1CKCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuZGEoKS5mb3JFYWNoKGIuYWRkLmJpbmQoYikpfSk7cmV0dXJuIGJ9O2Z1bmN0aW9uIERlKGEsYil7dGhpcy5nbG9iYWw9YTt0aGlzLk9hPWEuYih2Yyk7dGhpcy50ZD1iLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZXh0fSk7dGhpcy5qZj1iLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5qZX0pO3RoaXMuTWQ9Q2UodGhpcy5qZik7dGhpcy54ZT1FZSh0aGlzKTt0aGlzLkRiPXcoKX1mdW5jdGlvbiBFZShhKXtyZXR1cm4gYS50ZC5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiEoYSBpbnN0YW5jZW9mIHplKX0pPzE6MH1tPURlLnByb3RvdHlwZTtcbm0uZXhlYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt2YXIgZj1kLnNoaWZ0KCk7aWYoZil7dmFyIGg9ZVtjLmxlbmd0aF07cmV0dXJuIGYuYmIoKS5leGVjKGIsaCkudGhlbihmdW5jdGlvbihiKXtjLnB1c2goYlswXSk7cmV0dXJuIGEoKX0pfXJldHVybiB2KCl9dmFyIGI9MD09dGhpcy54ZT92b2lkIDA6bmV3IHVkKHRoaXMuZ2xvYmFsLHRoaXMuTWQpLGM9W10sZD10aGlzLmpmLnNsaWNlKCksZT10aGlzLnRkO3JldHVybiBhKCkudGhlbihmdW5jdGlvbigpe3RoaXMuamE9dGhpcy5PYS5GYih0aGlzLnhlLEModGhpcy5NZCksYik7cmV0dXJuIHRoaXMuamEua2EoKX0uYmluZCh0aGlzKSkudGhlbihmdW5jdGlvbigpe3RoaXMuZ2UoYyk7cmV0dXJuIGN9LmJpbmQodGhpcyksZnVuY3Rpb24oYSl7bnVsbCE9YiYmYi5KYigpO3Rocm93IGE7fSl9O20uRz1nKFwieGVcIik7bS5kYT1nKFwiTWRcIik7bS5XPWZ1bmN0aW9uKCl7cmV0dXJuIGthKHRoaXMpfTttLmdlPWFhKCk7XG5tLlk9ZnVuY3Rpb24oKXt2YXIgYT1udWxsO251bGwhPXRoaXMuamEmJihhPXRoaXMuamEuWSgpKTtyZXR1cm4gbnVsbD09PWE/bmV3IEEoITEsMCwwLDAsMCk6YX07ZnVuY3Rpb24gRmUoYSxiKXtEZS5jYWxsKHRoaXMsYSxiKTt0aGlzLkliPWEuYihBYyl9cihGZSxEZSk7RmUucHJvdG90eXBlLmdldFByaW9yaXR5PWsoMCk7RmUucHJvdG90eXBlLmdlPWZ1bmN0aW9uKGEpe3RoaXMudGQuZm9yRWFjaChmdW5jdGlvbihiLGMpe0dlKHRoaXMuSWIsYixhW2NdKX0sdGhpcyl9O2Z1bmN0aW9uIEhlKGEsYil7dGhpcy5jPWE7dGhpcy5JYj1hLmIoQWMpO3RoaXMuSWE9YS5iKHpjKTt0aGlzLmdkPW5ldyBSYyhhKTt0aGlzLmliPWI7dmFyIGM9YS5iKEJjKTthPXRoaXMuaWIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBjLnRhYmxlKGEuZ2V0TmFtZSgpKX0pO3RoaXMuYWE9QihhKTt0aGlzLkRiPXcoKX1tPUhlLnByb3RvdHlwZTttLmV4ZWM9ZnVuY3Rpb24oKXt0aGlzLmdkLnVwZGF0ZSh0aGlzLmliKTt0aGlzLk1jKCk7cmV0dXJuIHYoKX07bS5HPWsoMSk7bS5kYT1nKFwiYWFcIik7bS5XPWZ1bmN0aW9uKCl7cmV0dXJuIGthKHRoaXMpfTttLmdldFByaW9yaXR5PWsoMSk7bS5NYz1mdW5jdGlvbigpe3ZhciBhPUllKHRoaXMuSWIsdGhpcy5hYSk7MCE9YS5sZW5ndGgmJihhPW5ldyBGZSh0aGlzLmMsYSksSmUodGhpcy5JYSxhKSl9O2Z1bmN0aW9uIEtlKGEpe3RoaXMuYz1hO3RoaXMuT2E9YS5iKHZjKTt0aGlzLklhPWEuYih6Yyl9S2UucHJvdG90eXBlLmVlPWZ1bmN0aW9uKGEpe2E9bmV3IEhlKHRoaXMuYyxhKTtKZSh0aGlzLklhLGEpfTtmdW5jdGlvbiBNKGEsYil7dGhpcy5VYT1hO3RoaXMuaT1iO3RoaXMuWmE9eSgpfXEoXCJsZi5iYWNrc3RvcmUuRmlyZWJhc2VSYXdCYWNrU3RvcmVcIixNKTtNLnByb3RvdHlwZS5jZD1nKFwiaVwiKTtNLnByb3RvdHlwZS5kZD1mdW5jdGlvbigpe3Rocm93IG5ldyBEKDM1MSk7fTtmdW5jdGlvbiBMZShhLGIpe3ZhciBjPXcoKSxkPWE7Yi5sZW5ndGgmJihkPWEuY2hpbGQoYikpO2Qub25jZShcInZhbHVlXCIsZnVuY3Rpb24oYSl7Yy5yZXNvbHZlKGEudmFsKCkpfSxmdW5jdGlvbihhKXtjLnJlamVjdChhKX0pO3JldHVybiBjLmhhfWZ1bmN0aW9uIE1lKGEsYixjKXtmdW5jdGlvbiBkKGEpe2E/ZS5yZWplY3QoYSk6ZS5yZXNvbHZlKCl9Yz1jfHwhMTt2YXIgZT13KCk7Yz9hLnNldChiLGQpOmEudXBkYXRlKGIsZCk7cmV0dXJuIGUuaGF9XG5NLnByb3RvdHlwZS5FYT1mdW5jdGlvbihhKXtyZXR1cm4gTGUodGhpcy5pLFwiQHJldi9SXCIpLnRoZW4oZnVuY3Rpb24oYSl7dGhpcy5TYT1hO3JldHVybiBMZSh0aGlzLmksXCJAdGFibGVcIil9LmJpbmQodGhpcykpLnRoZW4oZnVuY3Rpb24oYil7dmFyIGM9MCxkO2ZvcihkIGluIGIpdGhpcy5aYS5zZXQoZCxiW2RdKSxiW2RdPmMmJihjPWJbZF0pO2Eub2EoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuWmEuaGFzKGEuZ2V0TmFtZSgpKXx8KGJbYS5nZXROYW1lKCldPSsrYyl9LHRoaXMpO2Q9dGhpcy5pLmNoaWxkKFwiQHRhYmxlXCIpO3JldHVybiBNZShkLGIpfS5iaW5kKHRoaXMpKX07XG5mdW5jdGlvbiBOZShhLGIsYyl7dmFyIGQ9YS5aYS5nZXQoYik7cmV0dXJuIG51bGwhPWQ/ZnVuY3Rpb24oKXt2YXIgYT17fSxiPXcoKTt0aGlzLmkub3JkZXJCeUNoaWxkKFwiVFwiKS5lcXVhbFRvKGQpLm9uY2UoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGQpe2QuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1jKGIudmFsKCkpO2FbcGFyc2VJbnQoYi5rZXkoKSwxMCldPWR9KTtiLnJlc29sdmUoYSl9KTtyZXR1cm4gYi5oYX0uY2FsbChhKS50aGVuKGZ1bmN0aW9uKGEpe2FbXCJAcmV2XCJdPXtSOisrdGhpcy5TYX07cmV0dXJuIE1lKHRoaXMuaSxhKX0uYmluZChhKSk6digpfU0ucHJvdG90eXBlLnRjPWZ1bmN0aW9uKGEpe3JldHVybiBOZSh0aGlzLGEsayhudWxsKSkudGhlbihmdW5jdGlvbigpe3RoaXMuWmEuZGVsZXRlKGEpO3JldHVybiBNZSh0aGlzLmkuY2hpbGQoXCJAdGFibGUvXCIrYSksbnVsbCwhMCl9LmJpbmQodGhpcykpfTtNLnByb3RvdHlwZS5kcm9wVGFibGU9TS5wcm90b3R5cGUudGM7XG5NLnByb3RvdHlwZS5xYz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIE5lKHRoaXMsYSxmdW5jdGlvbihhKXt2YXIgZD1hLlA7ZFtiXT1jO3JldHVybntSOnRoaXMuU2ErMSxUOmEuVCxQOmR9fS5iaW5kKHRoaXMpKX07TS5wcm90b3R5cGUuYWRkVGFibGVDb2x1bW49TS5wcm90b3R5cGUucWM7TS5wcm90b3R5cGUudWM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTmUodGhpcyxhLGZ1bmN0aW9uKGEpe3ZhciBjPWEuUDtkZWxldGUgY1tiXTtyZXR1cm57Ujp0aGlzLlNhKzEsVDphLlQsUDpjfX0uYmluZCh0aGlzKSl9O00ucHJvdG90eXBlLmRyb3BUYWJsZUNvbHVtbj1NLnByb3RvdHlwZS51YztNLnByb3RvdHlwZS5MYz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIE5lKHRoaXMsYSxmdW5jdGlvbihhKXt2YXIgZD1hLlA7ZFtjXT1kW2JdO2RlbGV0ZSBkW2JdO3JldHVybntSOnRoaXMuU2ErMSxUOmEuVCxQOmR9fS5iaW5kKHRoaXMpKX07TS5wcm90b3R5cGUucmVuYW1lVGFibGVDb2x1bW49TS5wcm90b3R5cGUuTGM7XG5NLnByb3RvdHlwZS54Yj1mdW5jdGlvbigpe3Rocm93IG5ldyBEKDM1MSk7fTtNLnByb3RvdHlwZS5jcmVhdGVSb3c9TS5wcm90b3R5cGUueGI7TS5wcm90b3R5cGUuQ2M9ZyhcIlVhXCIpO00ucHJvdG90eXBlLmdldFZlcnNpb249TS5wcm90b3R5cGUuQ2M7TS5wcm90b3R5cGUuZWM9ZnVuY3Rpb24oYSl7dmFyIGI9dygpO2E9dGhpcy5aYS5nZXQoYSk7dGhpcy5pLm9yZGVyQnlDaGlsZChcIlRcIikuZXF1YWxUbyhhKS5vbmNlKFwidmFsdWVcIixmdW5jdGlvbihhKXt2YXIgYz1bXTthLmZvckVhY2goZnVuY3Rpb24oYSl7Yy5wdXNoKGEudmFsKCkuUCl9KTtiLnJlc29sdmUoYyl9KTtyZXR1cm4gYi5oYX07TS5wcm90b3R5cGUuZHVtcD1mdW5jdGlvbigpe3ZhciBhPXt9LGI9Z2ModGhpcy5aYSkubWFwKGZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmVjKGIpLnRoZW4oZnVuY3Rpb24oYyl7YVtiXT1jfSl9LmJpbmQodGhpcykpO3JldHVybiBlYihiKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KX07XG5NLnByb3RvdHlwZS5kdW1wPU0ucHJvdG90eXBlLmR1bXA7ZnVuY3Rpb24gT2UoYSxiLGMpe25jLmNhbGwodGhpcyxiLGMpO3RoaXMuaT1hfXIoT2UsbmMpO09lLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmkuQWMoYSl9O1xuT2UucHJvdG90eXBlLnNjPWZ1bmN0aW9uKCl7aWYoMD09dGhpcy55ZClyZXR1cm4gdGhpcy5TLnJlc29sdmUoKSx0aGlzLlMuaGE7dmFyIGE9dGhpcy5SYS5pYjtpZigwPT1hLnNpemUpdGhpcy5TLnJlc29sdmUoKTtlbHNle3ZhciBiPXRoaXMuaS5TYSsxO3RoaXMuaS5TYT1iO3ZhciBjPXtcIkByZXZcIjp7UjpifX07YS5mb3JFYWNoKGZ1bmN0aW9uKGEsZSl7dmFyIGQ9dGhpcy5pLlphLmdldChlKTthLndhLmZvckVhY2goZnVuY3Rpb24oYSxlKXtjW2VdPXtSOmIsVDpkLFA6YS5tfX0pO2EubGEuZm9yRWFjaChmdW5jdGlvbihhLGUpe2NbZV09e1I6YixUOmQsUDphWzFdLm19fSk7YS54YS5mb3JFYWNoKGZ1bmN0aW9uKGEsYil7Y1tiXT1udWxsfSl9LHRoaXMpO3RoaXMuaS5pLnVwZGF0ZShjLGZ1bmN0aW9uKGMpe251bGw9PT1jP3RoaXMuUy5yZXNvbHZlKCk6KHRoaXMuaS5TYT1iLTEsYz16KGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gUGUodGhpcy5pLGEuZ2V0TmFtZSgpKX0sdGhpcyksXG5lYihjKS50aGVuKHRoaXMuUy5yZWplY3QuYmluZCh0aGlzLlMpLHRoaXMuUy5yZWplY3QuYmluZCh0aGlzLlMpKSl9LmJpbmQodGhpcykpfXJldHVybiB0aGlzLlMuaGF9O2Z1bmN0aW9uIFFlKCl7dGhpcy5CYT15KCl9ZnVuY3Rpb24gUmUoYSxiKXtpZigwPT1iLmxlbmd0aClyZXR1cm4geihhLkJhKTt2YXIgYz1bXTtiLmZvckVhY2goZnVuY3Rpb24oYSl7YT10aGlzLkJhLmdldChhKXx8bnVsbDtudWxsPT09YXx8Yy5wdXNoKGEpfSxhKTtyZXR1cm4gY31RZS5wcm90b3R5cGUuZ2V0RGF0YT1nKFwiQmFcIik7UWUucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdihSZSh0aGlzLGEpKX07ZnVuY3Rpb24gU2UoYSxiKXtiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5CYS5zZXQoYS5pZCgpLGEpfSxhKX1RZS5wcm90b3R5cGUucHV0PWZ1bmN0aW9uKGEpe1NlKHRoaXMsYSk7cmV0dXJuIHYoKX07ZnVuY3Rpb24gVGUoYSxiKXswPT1iLmxlbmd0aHx8Yi5sZW5ndGg9PWEuQmEuc2l6ZT9hLkJhLmNsZWFyKCk6Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMuQmEuZGVsZXRlKGEpfSxhKX1cblFlLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSl7VGUodGhpcyxhKTtyZXR1cm4gdigpfTtmdW5jdGlvbiBVZShhKXtyZXR1cm4gMD09YS5CYS5zaXplPzA6Z2MoYS5CYSkucmVkdWNlKGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGE+Yz9hOmN9LDApfTtmdW5jdGlvbiBWZShhLGIpe3RoaXMuZz1hO3RoaXMuRGY9Yjt0aGlzLktjPXkoKTt0aGlzLlNhPS0xO3RoaXMuTT15KCk7dGhpcy5aYT15KCk7dGhpcy5KZD1udWxsfW09VmUucHJvdG90eXBlO1xubS5FYT1mdW5jdGlvbihhKXt0aGlzLmk9dGhpcy5EZi5jaGlsZCh0aGlzLmcubmFtZSgpKTt2YXIgYj1hfHxmdW5jdGlvbigpe3JldHVybiB2KCl9O3JldHVybiBMZSh0aGlzLmksXCJAZGIvdmVyc2lvblwiKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YT9NZSh0aGlzLmksV2UodGhpcyksITApLnRoZW4oZnVuY3Rpb24oKXt2YXIgYT1uZXcgTSgwLHRoaXMuaSk7cmV0dXJuIGIoYSl9LmJpbmQodGhpcykpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5FYSgpfS5iaW5kKHRoaXMpKTphPT10aGlzLmcudmVyc2lvbigpP0xlKHRoaXMuaSxcIkByZXYvUlwiKS50aGVuKGZ1bmN0aW9uKGEpe3RoaXMuU2E9YTtyZXR1cm4gTGUodGhpcy5pLFwiQHRhYmxlXCIpfS5iaW5kKHRoaXMpKS50aGVuKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYiBpbiBhKXRoaXMuWmEuc2V0KGIsYVtiXSk7YT10aGlzLmcub2EoKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIFBlKHRoaXMsYS5nZXROYW1lKCkpfSx0aGlzKTtcbnJldHVybiBlYihhKX0uYmluZCh0aGlzKSkudGhlbihmdW5jdGlvbigpe1hlKHRoaXMpO1llKHRoaXMpO3JldHVybiB2KCl9LmJpbmQodGhpcykpOnRoaXMuaGUoYSxiKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuRWEoKX0uYmluZCh0aGlzKSl9LmJpbmQodGhpcykpfTttLmhlPWZ1bmN0aW9uKGEsYil7dmFyIGM9bmV3IE0oYSx0aGlzLmkpO3JldHVybiBjLkVhKHRoaXMuZykudGhlbihmdW5jdGlvbigpe3JldHVybiB2KCl9LmJpbmQodGhpcykpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYihjKX0pLnRoZW4oZnVuY3Rpb24oKXt2YXIgYT10aGlzLmkuY2hpbGQoXCJAZGJcIik7cmV0dXJuIE1lKGEse3ZlcnNpb246dGhpcy5nLnZlcnNpb24oKX0sITApfS5iaW5kKHRoaXMpKX07XG5mdW5jdGlvbiBZZShhKXthLmkub2ZmKCk7YS5pLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLGEuemcuYmluZChhKSk7YS5LZCYmKGEuS2Qub2ZmKCksYS5LYy5jbGVhcigpKTthLktkPWEuaS5vcmRlckJ5Q2hpbGQoXCJSXCIpLnN0YXJ0QXQoYS5TYSsxKTthLktkLm9uKFwidmFsdWVcIixhLmVlLmJpbmQoYSkpfWZ1bmN0aW9uIFhlKGEpe2ljPXooYS5NKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIFVlKGEpfSkucmVkdWNlKGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGE+Yz9hOmN9LDApKzF9bS56Zz1mdW5jdGlvbihhKXt2YXIgYj1hLnZhbCgpLGM9dGhpcy5LYy5nZXQoYi5UKXx8bnVsbDtudWxsPT09YyYmKGM9QigpLHRoaXMuS2Muc2V0KGIuVCxjKSk7Yy5hZGQocGFyc2VJbnQoYS5rZXkoKSwxMCkpfTtcbm0uZWU9ZnVuY3Rpb24oYSl7dmFyIGI9YS5jaGlsZChcIkByZXYvUlwiKS52YWwoKTtudWxsIT1iJiZiIT10aGlzLlNhJiYodGhpcy5TYT1iLGE9WmUodGhpcyxhKSxhLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5NLmdldChhLmdldE5hbWUoKSksYz1nYyhhLnhhKTswPGMubGVuZ3RoJiZUZShiLGMpO3ZhciBmPXooYS53YSk7YS5sYS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2YucHVzaChhWzFdKX0pO1NlKGIsZil9LHRoaXMpLDA8YS5sZW5ndGgmJnRoaXMuR2MoYSksWWUodGhpcykpfTtcbmZ1bmN0aW9uIFplKGEsYil7dmFyIGM9QigpLGQ9eSgpO2EuWmEuZm9yRWFjaChmdW5jdGlvbihhLGIpe3ZhciBlPXRoaXMuTS5nZXQoYiksZj1uZXcgc2QoYik7dGhpcy5LYy5oYXMoYSkmJihiPUModGhpcy5LYy5nZXQoYSkpLGIuZm9yRWFjaChmdW5jdGlvbihhKXtjLmFkZChhKX0pLFJlKGUsYikuZm9yRWFjaChmdW5jdGlvbihhKXtmLmRlbGV0ZShhKX0pKTtkLnNldChhLGYpfS5iaW5kKGEpKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7aWYoXCJAcmV2XCIhPWEua2V5KCkpe3ZhciBiPXBhcnNlSW50KGEua2V5KCksMTApO2lmKCFjLmhhcyhiKSl7dmFyIGU9YS52YWwoKTthPWQuZ2V0KGUuVCk7dmFyIGw9dGhpcy5NLmdldChhLmdldE5hbWUoKSksZT10aGlzLmcudGFibGUoYS5nZXROYW1lKCkpLmtiKHtpZDpiLHZhbHVlOmUuUH0pO2wuZ2V0RGF0YSgpLmhhcyhiKT9hLm1vZGlmeShbUmUobCxbYl0pWzBdLGVdKTphLmFkZChlKX19fS5iaW5kKGEpKTtyZXR1cm4geihkKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIWEuamQoKX0pfVxuZnVuY3Rpb24gUGUoYSxiKXt2YXIgYz13KCksZD1hLlphLmdldChiKSxlPWEuZy50YWJsZShiKTthLmkub3JkZXJCeUNoaWxkKFwiVFwiKS5lcXVhbFRvKGQpLm9uY2UoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEpe3ZhciBkPW5ldyBRZSxmPVtdO2EuZm9yRWFjaChmdW5jdGlvbihhKXtmLnB1c2goZS5rYih7aWQ6cGFyc2VJbnQoYS5rZXkoKSwxMCksdmFsdWU6YS52YWwoKS5QfSkpfSk7U2UoZCxmKTt0aGlzLk0uc2V0KGIsZCk7Yy5yZXNvbHZlKCl9LmJpbmQoYSkpO3JldHVybiBjLmhhfWZ1bmN0aW9uIFdlKGEpe3ZhciBiPXt9O2JbXCJAZGJcIl09e3ZlcnNpb246YS5nLnZlcnNpb24oKX07YltcIkByZXZcIl09e1I6MX07YS5TYT0xO2JbXCJAdGFibGVcIl09e307YS5nLm9hKCkuZm9yRWFjaChmdW5jdGlvbihhLGQpe2E9YS5nZXROYW1lKCk7YltcIkB0YWJsZVwiXVthXT1kO3RoaXMuTS5zZXQoYSxuZXcgUWUpO3RoaXMuWmEuc2V0KGEsZCl9LGEpO3JldHVybiBifVxubS5GYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG5ldyBPZSh0aGlzLGEsYyl9O20uQWM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5NLmdldChhKXx8bnVsbDtpZihudWxsIT09YilyZXR1cm4gYjt0aHJvdyBuZXcgRCgxMDEsYSk7fTttLmNsb3NlPWFhKCk7bS5zdWJzY3JpYmU9YmEoXCJKZFwiKTttLkdjPWZ1bmN0aW9uKGEpe251bGwhPXRoaXMuSmQmJnRoaXMuSmQoYSl9O2Z1bmN0aW9uIE4oYSxiLGMsZCl7dGhpcy5pPWI7dGhpcy5qYT1jO3RoaXMuVWE9YTt0aGlzLlVjPWR9cShcImxmLmJhY2tzdG9yZS5JbmRleGVkREJSYXdCYWNrU3RvcmVcIixOKTtOLnByb3RvdHlwZS5jZD1nKFwiaVwiKTtOLnByb3RvdHlwZS5nZXRSYXdEQkluc3RhbmNlPU4ucHJvdG90eXBlLmNkO04ucHJvdG90eXBlLmRkPWcoXCJqYVwiKTtOLnByb3RvdHlwZS5nZXRSYXdUcmFuc2FjdGlvbj1OLnByb3RvdHlwZS5kZDtOLnByb3RvdHlwZS50Yz1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXt0cnl7dGhpcy5pLmRlbGV0ZU9iamVjdFN0b3JlKGEpfWNhdGNoKGQpe2MoZCk7cmV0dXJufWIoKX0sdGhpcyl9O04ucHJvdG90eXBlLmRyb3BUYWJsZT1OLnByb3RvdHlwZS50YztcbmZ1bmN0aW9uICRlKGEsYixjLGQpe3JldHVybiBuZXcgdShmdW5jdGlvbihhLGYpe3ZhciBlO3RyeXt2YXIgbD10aGlzLmphLm9iamVjdFN0b3JlKGIpO2U9bC5vcGVuQ3Vyc29yKCl9Y2F0Y2gocCl7ZihwKTtyZXR1cm59ZS5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXt2YXIgYj1lLnJlc3VsdDtiPyhjKGIpLGIuY29udGludWUoKSk6KGQobCksYSgpKX07ZS5vbmVycm9yPWZ9LGEpfWZ1bmN0aW9uIGFmKGEpe3JldHVybiBhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI/bGMoYSk6YSBpbnN0YW5jZW9mIERhdGU/YS5nZXRUaW1lKCk6YX1cbmZ1bmN0aW9uIGJmKGEsYixjKXtmdW5jdGlvbiBkKGEpe3ZhciBiPU1jKGEudmFsdWUpLGQ9Yi5tLGU7Zm9yKGUgaW4gZCl7dmFyIGY9amMoZFtlXSk7YyhmKTtkW2VdPWYuSmEoKX1hLnVwZGF0ZShiLkphKCkpfWZ1bmN0aW9uIGUoYSl7dmFyIGI9amMoYS52YWx1ZSk7YyhiKTthLnVwZGF0ZShiLkphKCkpfXJldHVybiAkZShhLGIsYS5VYz9kOmUsYWEoKSl9Ti5wcm90b3R5cGUucWM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWFmKGMpO3JldHVybiBiZih0aGlzLGEsZnVuY3Rpb24oYSl7YS5tW2JdPWR9KX07Ti5wcm90b3R5cGUuYWRkVGFibGVDb2x1bW49Ti5wcm90b3R5cGUucWM7Ti5wcm90b3R5cGUudWM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYmYodGhpcyxhLGZ1bmN0aW9uKGEpe2RlbGV0ZSBhLm1bYl19KX07Ti5wcm90b3R5cGUuZHJvcFRhYmxlQ29sdW1uPU4ucHJvdG90eXBlLnVjO1xuTi5wcm90b3R5cGUuTGM9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiZih0aGlzLGEsZnVuY3Rpb24oYSl7YS5tW2NdPWEubVtiXTtkZWxldGUgYS5tW2JdfSl9O04ucHJvdG90eXBlLnJlbmFtZVRhYmxlQ29sdW1uPU4ucHJvdG90eXBlLkxjO2Z1bmN0aW9uIGNmKGEsYil7dmFyIGM9W107cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsZSl7dmFyIGQ7dHJ5e2Q9dGhpcy5qYS5vYmplY3RTdG9yZShiKS5vcGVuQ3Vyc29yKCl9Y2F0Y2goaCl7ZShoKTtyZXR1cm59ZC5vbnN1Y2Nlc3M9ZnVuY3Rpb24oKXt2YXIgYj1kLnJlc3VsdDtpZihiKXtpZih0aGlzLlVjKXt2YXIgZT1NYyhiLnZhbHVlKS5tLGY7Zm9yKGYgaW4gZSljLnB1c2goZVtmXSl9ZWxzZSBjLnB1c2goYi52YWx1ZSk7Yi5jb250aW51ZSgpfWVsc2UgYShjKX0uYmluZCh0aGlzKTtkLm9uZXJyb3I9ZX0sYSl9Ti5wcm90b3R5cGUueGI9ZnVuY3Rpb24oYSl7dmFyIGI9e30sYztmb3IoYyBpbiBhKWJbY109YWYoYVtjXSk7cmV0dXJuIGtjKGIpfTtcbk4ucHJvdG90eXBlLmNyZWF0ZVJvdz1OLnByb3RvdHlwZS54YjtOLnByb3RvdHlwZS5DYz1nKFwiVWFcIik7Ti5wcm90b3R5cGUuZ2V0VmVyc2lvbj1OLnByb3RvdHlwZS5DYztOLnByb3RvdHlwZS5kdW1wPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuaS5vYmplY3RTdG9yZU5hbWVzLGI9W10sYz0wO2M8YS5sZW5ndGg7KytjKXt2YXIgZD1hLml0ZW0oYyk7Yi5wdXNoKHRoaXMuZWMoZCkpfXJldHVybiBlYihiKS50aGVuKGZ1bmN0aW9uKGIpe3ZhciBjPXt9O2IuZm9yRWFjaChmdW5jdGlvbihiLGQpe2NbYS5pdGVtKGQpXT1ifSk7cmV0dXJuIGN9KX07Ti5wcm90b3R5cGUuZHVtcD1OLnByb3RvdHlwZS5kdW1wO04ucHJvdG90eXBlLmVjPWZ1bmN0aW9uKGEpe3JldHVybiBjZih0aGlzLGEpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlfSl9KX07ZnVuY3Rpb24gZGYoYSxiKXt0aGlzLlo9YTt0aGlzLkdiPWJ9ZGYucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gbnVsbCE9dGhpcy5aLmdldEFsbD9lZih0aGlzKTpmZih0aGlzKTthPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihiLGQpe3ZhciBjO3RyeXtjPXRoaXMuWi5nZXQoYSl9Y2F0Y2goZil7ZChmKTtyZXR1cm59Yy5vbmVycm9yPWQ7Yy5vbnN1Y2Nlc3M9ZnVuY3Rpb24oYSl7Yih0aGlzLkdiKGEudGFyZ2V0LnJlc3VsdCkpfS5iaW5kKHRoaXMpfSx0aGlzKX0sdGhpcyk7cmV0dXJuIGViKGEpfTtcbmZ1bmN0aW9uIGZmKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihhLGMpe3ZhciBiPVtdLGU7dHJ5e2U9dGhpcy5aLm9wZW5DdXJzb3IoKX1jYXRjaChmKXtjKGYpO3JldHVybn1lLm9uZXJyb3I9YztlLm9uc3VjY2Vzcz1mdW5jdGlvbigpe3ZhciBjPWUucmVzdWx0O2M/KGIucHVzaCh0aGlzLkdiKGMudmFsdWUpKSxjLmNvbnRpbnVlKCkpOmEoYil9LmJpbmQodGhpcyl9LGEpfWZ1bmN0aW9uIGVmKGEpe3JldHVybiBuZXcgdShmdW5jdGlvbihhLGMpe3ZhciBiO3RyeXtiPXRoaXMuWi5nZXRBbGwoKX1jYXRjaChlKXtjKGUpO3JldHVybn1iLm9uZXJyb3I9YztiLm9uc3VjY2Vzcz1mdW5jdGlvbigpe3ZhciBjPWIucmVzdWx0Lm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5HYihhKX0sdGhpcyk7YShjKX0uYmluZCh0aGlzKX0sYSl9XG5kZi5wcm90b3R5cGUuVGI9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGIsYyl7dmFyIGQ7dHJ5e2Q9YSgpfWNhdGNoKGUpe2MoZSk7cmV0dXJufWQub25zdWNjZXNzPWI7ZC5vbmVycm9yPWN9LHRoaXMpfTtkZi5wcm90b3R5cGUucHV0PWZ1bmN0aW9uKGEpe2lmKDA9PWEubGVuZ3RoKXJldHVybiB2KCk7YT1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5UYihmdW5jdGlvbigpe3JldHVybiB0aGlzLloucHV0KGEuSmEoKSl9LmJpbmQodGhpcykpfSx0aGlzKTtyZXR1cm4gZWIoYSl9O1xuZGYucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLlouY291bnQoKTtkLm9uc3VjY2Vzcz1mdW5jdGlvbihkKXtpZigwPT1hLmxlbmd0aHx8ZC50YXJnZXQucmVzdWx0PT1hLmxlbmd0aClyZXR1cm4gdGhpcy5UYihmdW5jdGlvbigpe3JldHVybiB0aGlzLlouY2xlYXIoKX0uYmluZCh0aGlzKSkudGhlbihiLGMpO2Q9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuVGIoZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5aLmRlbGV0ZShhKX0uYmluZCh0aGlzKSl9LHRoaXMpO2ViKGQpLnRoZW4oYixjKX0uYmluZCh0aGlzKTtkLm9uZXJyb3I9Y30sdGhpcyl9O2Z1bmN0aW9uIGdmKGEsYixjLGQsZSl7bmMuY2FsbCh0aGlzLGMsZSk7dGhpcy5jPWE7dGhpcy5qYT1iO3RoaXMuVWM9ZDt0aGlzLmphLm9uY29tcGxldGU9dGhpcy5TLnJlc29sdmUuYmluZCh0aGlzLlMpO3RoaXMuamEub25hYm9ydD10aGlzLlMucmVqZWN0LmJpbmQodGhpcy5TKX1yKGdmLG5jKTtnZi5wcm90b3R5cGUuST1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuVWM/KGM9bnVsbCE9Yz9jOjAsYT10aGlzLmphLm9iamVjdFN0b3JlKGEpLG5ldyBOYyhhLGIsMD09Yz9xYShQYyx0aGlzLmMpOlFjKSk6bmV3IGRmKHRoaXMuamEub2JqZWN0U3RvcmUoYSksYil9O2dmLnByb3RvdHlwZS5zYz1mdW5jdGlvbigpe3JldHVybiB0aGlzLlMuaGF9O2Z1bmN0aW9uIGhmKGEsYil7dGhpcy5jPWE7dGhpcy5nPWI7dGhpcy5HZD1iLmtlLlNmfHwhMX1tPWhmLnByb3RvdHlwZTtcbm0uRWE9ZnVuY3Rpb24oYSl7dmFyIGI9d2luZG93LmluZGV4ZWREQnx8d2luZG93Lm1vekluZGV4ZWREQnx8d2luZG93LndlYmtpdEluZGV4ZWREQnx8d2luZG93Lm1zSW5kZXhlZERCO2lmKG51bGw9PWIpdGhyb3cgbmV3IEQoMzUyKTt2YXIgYz1hfHxmdW5jdGlvbigpe3JldHVybiB2KCl9O3JldHVybiBuZXcgdShmdW5jdGlvbihhLGUpe3ZhciBkO3RyeXtkPWIub3Blbih0aGlzLmcubmFtZSgpLHRoaXMuZy52ZXJzaW9uKCkpfWNhdGNoKGgpe2UoaCk7cmV0dXJufWQub25lcnJvcj1mdW5jdGlvbihhKXthPWEudGFyZ2V0LmVycm9yO2UobmV3IEQoMzYxLGEubmFtZSxhLm1lc3NhZ2UpKX07ZC5vbnVwZ3JhZGVuZWVkZWQ9ZnVuY3Rpb24oYSl7amYodGhpcyxjLGEpLnRoZW4oYWEoKSxlKX0uYmluZCh0aGlzKTtkLm9uc3VjY2Vzcz1mdW5jdGlvbihiKXt0aGlzLmk9Yi50YXJnZXQucmVzdWx0O3RoaXMucWUoKS50aGVuKGZ1bmN0aW9uKGIpe2ljPU1hdGgubWF4KGljLGIrMSk7YSh0aGlzLmkpfS5iaW5kKHRoaXMpKX0uYmluZCh0aGlzKX0sXG50aGlzKX07ZnVuY3Rpb24gamYoYSxiLGMpe3ZhciBkPWMudGFyZ2V0LnJlc3VsdDtjPW5ldyBOKGMub2xkVmVyc2lvbixkLGMudGFyZ2V0LnRyYW5zYWN0aW9uLGEuR2QpO2tmKGQpO2EuZy5vYSgpLmZvckVhY2gocWEoYS5MZixkKSxhKTtyZXR1cm4gYihjKX1mdW5jdGlvbiBrZihhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5vYmplY3RTdG9yZU5hbWVzLmxlbmd0aDsrK2Mpe3ZhciBkPWEub2JqZWN0U3RvcmVOYW1lcy5pdGVtKGMpOy0xIT1kLmluZGV4T2YoXCIuXCIpJiZiLnB1c2goZCl9Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe3RyeXthLmRlbGV0ZU9iamVjdFN0b3JlKGIpfWNhdGNoKGYpe319KX1cbm0uTGY9ZnVuY3Rpb24oYSxiKXthLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoYi5nZXROYW1lKCkpfHxhLmNyZWF0ZU9iamVjdFN0b3JlKGIuZ2V0TmFtZSgpLHtrZXlQYXRoOlwiaWRcIn0pO2IuQ2IoKSYmKGIuRGEoKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe21mKGEsYi5qKCkpfSx0aGlzKSxtZihhLG5mKGIpKSl9O2Z1bmN0aW9uIG1mKGEsYil7YS5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGIpfHxhLmNyZWF0ZU9iamVjdFN0b3JlKGIse2tleVBhdGg6XCJpZFwifSl9bS5GYj1mdW5jdGlvbihhLGIsYyl7Yj10aGlzLmkudHJhbnNhY3Rpb24ob2YoYiksMD09YT9cInJlYWRvbmx5XCI6XCJyZWFkd3JpdGVcIik7cmV0dXJuIG5ldyBnZih0aGlzLmMsYixhLHRoaXMuR2QsYyl9O1xuZnVuY3Rpb24gb2YoYSl7dmFyIGI9QigpO2EuZm9yRWFjaChmdW5jdGlvbihhKXtiLmFkZChhLmdldE5hbWUoKSk7YS5DYigpJiYoYS5EYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5hZGQoYS5qKCkpfSksYi5hZGQobmYoYSkpKX0pO3JldHVybiBDKGIpfVxubS5xZT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoMD09ZC5sZW5ndGgpcmV0dXJuIHYoKTt2YXIgYT1kLnNoaWZ0KCk7cmV0dXJuIGMoYSkudGhlbihiKX1mdW5jdGlvbiBjKGIpe3JldHVybiBuZXcgdShmdW5jdGlvbihjLGQpe3ZhciBsO3RyeXtsPShhfHxlLnRyYW5zYWN0aW9uKFtiXSkpLm9iamVjdFN0b3JlKGIpLm9wZW5DdXJzb3IobnVsbCxcInByZXZcIil9Y2F0Y2goY2Epe2QoY2EpO3JldHVybn1sLm9uc3VjY2Vzcz1mdW5jdGlvbihhKXsoYT1hLnRhcmdldC5yZXN1bHQpJiYoZj1NYXRoLm1heChmLGgoYSkpKTtjKGYpfTtsLm9uZXJyb3I9ZnVuY3Rpb24oKXtjKGYpfX0pfXZhciBkPXRoaXMuZy5vYSgpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXROYW1lKCl9KSxlPXRoaXMuaSxmPTAsaD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5HZD8oYT1NYyhhLnZhbHVlKSxPYmplY3Qua2V5cyhhLm0pLnJlZHVjZShmdW5jdGlvbihhLGIpe3JldHVybiBNYXRoLm1heChhLGIpfSxcbjApKTphLmtleX0uYmluZCh0aGlzKTtyZXR1cm4gbmV3IHUoZnVuY3Rpb24oYSl7YigpLnRoZW4oZnVuY3Rpb24oKXthKGYpfSl9KX07bS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuaS5jbG9zZSgpfTttLkFjPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEQoNTExKTt9O20uc3Vic2NyaWJlPWFhKCk7bS5HYz1hYSgpO2Z1bmN0aW9uIHBmKGEsYixjKXtuYy5jYWxsKHRoaXMsYixjKTt0aGlzLlo9YTswPT1iJiZ0aGlzLlMucmVzb2x2ZSgpfXIocGYsbmMpO3BmLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlouQWMoYSl9O3BmLnByb3RvdHlwZS5zYz1mdW5jdGlvbigpe3RoaXMuUy5yZXNvbHZlKCk7cmV0dXJuIHRoaXMuUy5oYX07ZnVuY3Rpb24gcWYoYSl7dGhpcy5nPWE7dGhpcy5NPXkoKX1tPXFmLnByb3RvdHlwZTttLkVhPWZ1bmN0aW9uKCl7dGhpcy5nLm9hKCkuZm9yRWFjaCh0aGlzLmdnLHRoaXMpO3JldHVybiB2KCl9O20uQWM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5NLmdldChhKXx8bnVsbDtpZihudWxsPT09Yil0aHJvdyBuZXcgRCgxMDEsYSk7cmV0dXJuIGJ9O20uRmI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuZXcgcGYodGhpcyxhLGMpfTtmdW5jdGlvbiByZihhLGIpe2lmKCFhLk0uaGFzKGIpKXt2YXIgYz1uZXcgUWU7YS5NLnNldChiLGMpfX1tLmdnPWZ1bmN0aW9uKGEpe3JmKHRoaXMsYS5nZXROYW1lKCkpO2EuQ2IoKSYmKGEuRGEoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JmKHRoaXMsYS5qKCkpfSx0aGlzKSxyZih0aGlzLG5mKGEpKSl9O20uY2xvc2U9YWEoKTttLnN1YnNjcmliZT1hYSgpO20uR2M9YWEoKTtmdW5jdGlvbiBzZihhKXtxZi5jYWxsKHRoaXMsYSk7dGhpcy5wZD1udWxsfXIoc2YscWYpO3NmLnByb3RvdHlwZS5zdWJzY3JpYmU9ZnVuY3Rpb24oYSl7bnVsbD09PXRoaXMucGQmJih0aGlzLnBkPWEpfTtzZi5wcm90b3R5cGUuR2M9ZnVuY3Rpb24oYSl7bnVsbD09PXRoaXMucGR8fHRoaXMucGQoYSl9O2Z1bmN0aW9uIHRmKGEsYixjKXt0aGlzLmphPWE7dGhpcy5BPSdcIicrYisnXCInO3RoaXMuR2I9Y310Zi5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuR2I7cmV0dXJuIHVmKHRoaXMuamEsXCJTRUxFQ1QgaWQsIHZhbHVlIEZST00gXCIrdGhpcy5BK1wiIFwiKygwPT1hLmxlbmd0aD9cIlwiOlwiV0hFUkUgaWQgSU4gKFwiK2Euam9pbihcIixcIikrXCIpXCIpLFtdLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYz1hLnJvd3MubGVuZ3RoLGU9QXJyYXkoYyksZj0wO2Y8YzsrK2YpZVtmXT1iKHtpZDphLnJvd3MuaXRlbShmKS5pZCx2YWx1ZTpKU09OLnBhcnNlKGEucm93cy5pdGVtKGYpLnZhbHVlKX0pO3JldHVybiBlfSl9O1xudGYucHJvdG90eXBlLnB1dD1mdW5jdGlvbihhKXtpZigwPT1hLmxlbmd0aClyZXR1cm4gdigpO3ZhciBiPVwiSU5TRVJUIE9SIFJFUExBQ0UgSU5UTyBcIit0aGlzLkErXCIoaWQsIHZhbHVlKSBWQUxVRVMgKD8sID8pXCI7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3VmKHRoaXMuamEsYixbYS5pZCgpLEpTT04uc3RyaW5naWZ5KGEubSldKX0sdGhpcyk7cmV0dXJuIHYoKX07dGYucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXt1Zih0aGlzLmphLFwiREVMRVRFIEZST00gXCIrdGhpcy5BK1wiIFwiKygwPT1hLmxlbmd0aD9cIlwiOlwiV0hFUkUgaWQgSU4gKFwiK2Euam9pbihcIixcIikrXCIpXCIpLFtdKTtyZXR1cm4gdigpfTtmdW5jdGlvbiB2ZihhLGIsYyl7bmMuY2FsbCh0aGlzLGIsYyk7dGhpcy5pPWE7dGhpcy5NPXkoKTt0aGlzLk5kPVtdfXIodmYsbmMpO2Z1bmN0aW9uIHdmKGEpe3JldHVybiBhLnJlcGxhY2UoXCIuXCIsXCJfX2RfX1wiKS5yZXBsYWNlKFwiI1wiLFwiX19zX19cIil9dmYucHJvdG90eXBlLkk9ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLk0uZ2V0KGEpfHxudWxsO251bGw9PT1jJiYoYz1uZXcgdGYodGhpcyx3ZihhKSxiKSx0aGlzLk0uc2V0KGEsYykpO3JldHVybiBjfTtmdW5jdGlvbiB1ZihhLGIsYyxkKXt2YXIgZT13KCk7YS5OZC5wdXNoKHtOZzpiLERnOmMsdHJhbnNmb3JtOmQsUzplfSk7cmV0dXJuIGUuaGF9XG52Zi5wcm90b3R5cGUuc2M9ZnVuY3Rpb24oKXt2YXIgYT1udWxsLGI9dGhpcy5TLnJlamVjdC5iaW5kKHRoaXMuUyksYz1mdW5jdGlvbihhLGIpe3RoaXMuUy5yZWplY3QoYil9LmJpbmQodGhpcyksZD1bXSxlPWZ1bmN0aW9uKGIsaCl7aWYobnVsbCE9PWEpe3ZhciBmPWg7bnVsbCE9YS50cmFuc2Zvcm0mJm51bGwhPWgmJihmPWEudHJhbnNmb3JtKGgpKTtkLnB1c2goZik7YS5TLnJlc29sdmUoZil9MDx0aGlzLk5kLmxlbmd0aD8oYT1oPXRoaXMuTmQuc2hpZnQoKSxiLmV4ZWN1dGVTcWwoaC5OZyxoLkRnLGUsYykpOnRoaXMuUy5yZXNvbHZlKGQpfS5iaW5kKHRoaXMpOzA9PXRoaXMueWQ/dGhpcy5pLnJlYWRUcmFuc2FjdGlvbihlLGIpOnRoaXMuaS50cmFuc2FjdGlvbihlLGIpO3JldHVybiB0aGlzLlMuaGF9O2Z1bmN0aW9uIE8oYSxiLGMpe3RoaXMuaT1jO3RoaXMuYz1hO3RoaXMuVWE9Yn1xKFwibGYuYmFja3N0b3JlLldlYlNxbFJhd0JhY2tTdG9yZVwiLE8pO08ucHJvdG90eXBlLmNkPWcoXCJpXCIpO08ucHJvdG90eXBlLmdldFJhd0RCSW5zdGFuY2U9Ty5wcm90b3R5cGUuY2Q7Ty5wcm90b3R5cGUuZGQ9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRCgzNTYpO307Ty5wcm90b3R5cGUuZ2V0UmF3VHJhbnNhY3Rpb249Ty5wcm90b3R5cGUuZGQ7ZnVuY3Rpb24geGYoYSl7cmV0dXJuIG5ldyB2ZihhLmksMSxuZXcgdWQoYS5jLEIoKSkpfU8ucHJvdG90eXBlLnRjPWZ1bmN0aW9uKGEpe3ZhciBiPXhmKHRoaXMpO3VmKGIsXCJEUk9QIFRBQkxFIFwiK2EsW10pO3JldHVybiBiLmthKCl9O08ucHJvdG90eXBlLmRyb3BUYWJsZT1PLnByb3RvdHlwZS50Yztcbk8ucHJvdG90eXBlLmVjPWZ1bmN0aW9uKGEpe3ZhciBiPXhmKHRoaXMpO3VmKGIsXCJTRUxFQ1QgaWQsIHZhbHVlIEZST00gXCIrYSxbXSk7cmV0dXJuIGIua2EoKS50aGVuKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1hWzBdLnJvd3MubGVuZ3RoLGM9QXJyYXkoYiksZj0wO2Y8YjsrK2YpY1tmXT17aWQ6YVswXS5yb3dzLml0ZW0oZikuaWQsdmFsdWU6SlNPTi5wYXJzZShhWzBdLnJvd3MuaXRlbShmKS52YWx1ZSl9O3JldHVybiB2KGMpfSl9O2Z1bmN0aW9uIHlmKGEsYixjKXt2YXIgZD14ZihhKSxlPVwiVVBEQVRFIFwiK2IrXCIgU0VUIHZhbHVlPT8gV0hFUkUgaWQ9P1wiO3JldHVybiBhLmVjKGIpLnRoZW4oZnVuY3Rpb24oYSl7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2E9YyhhKTt1ZihkLGUsW0pTT04uc3RyaW5naWZ5KGEudmFsdWUpLGEuaWRdKX0pO3JldHVybiBkLmthKCl9KX1cbk8ucHJvdG90eXBlLnFjPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hZihjKTtyZXR1cm4geWYodGhpcyxhLGZ1bmN0aW9uKGEpe2EudmFsdWVbYl09ZDtyZXR1cm4gYX0pfTtPLnByb3RvdHlwZS5hZGRUYWJsZUNvbHVtbj1PLnByb3RvdHlwZS5xYztPLnByb3RvdHlwZS51Yz1mdW5jdGlvbihhLGIpe3JldHVybiB5Zih0aGlzLGEsZnVuY3Rpb24oYSl7ZGVsZXRlIGEudmFsdWVbYl07cmV0dXJuIGF9KX07Ty5wcm90b3R5cGUuZHJvcFRhYmxlQ29sdW1uPU8ucHJvdG90eXBlLnVjO08ucHJvdG90eXBlLkxjPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geWYodGhpcyxhLGZ1bmN0aW9uKGEpe2EudmFsdWVbY109YS52YWx1ZVtiXTtkZWxldGUgYS52YWx1ZVtiXTtyZXR1cm4gYX0pfTtPLnByb3RvdHlwZS5yZW5hbWVUYWJsZUNvbHVtbj1PLnByb3RvdHlwZS5MYztPLnByb3RvdHlwZS54Yj1mdW5jdGlvbihhKXt2YXIgYj17fSxjO2ZvcihjIGluIGEpYltjXT1hZihhW2NdKTtyZXR1cm4ga2MoYil9O1xuTy5wcm90b3R5cGUuY3JlYXRlUm93PU8ucHJvdG90eXBlLnhiO08ucHJvdG90eXBlLkNjPWcoXCJVYVwiKTtPLnByb3RvdHlwZS5nZXRWZXJzaW9uPU8ucHJvdG90eXBlLkNjO2Z1bmN0aW9uIHpmKGEpe3VmKGEsJ1NFTEVDVCB0YmxfbmFtZSBGUk9NIHNxbGl0ZV9tYXN0ZXIgV0hFUkUgdHlwZT1cInRhYmxlXCInLFtdLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1BcnJheShhLnJvd3MubGVuZ3RoKSxkPTA7ZDxiLmxlbmd0aDsrK2QpYltkXT1hLnJvd3MuaXRlbShkKS50YmxfbmFtZTtyZXR1cm4gYn0pfVxuTy5wcm90b3R5cGUuZHVtcD1mdW5jdGlvbigpe3ZhciBhPXcoKSxiPXhmKHRoaXMpO3pmKGIpO3ZhciBjPXt9O2Iua2EoKS50aGVuKGZ1bmN0aW9uKGIpe2I9YlswXS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuXCJfX2xmX3ZlclwiIT1hJiZcIl9fV2ViS2l0RGF0YWJhc2VJbmZvVGFibGVfX1wiIT1hfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVjKGEpLnRoZW4oZnVuY3Rpb24oYil7Y1thXT1ifSl9LHRoaXMpO2ViKGIpLnRoZW4oZnVuY3Rpb24oKXthLnJlc29sdmUoYyl9KX0uYmluZCh0aGlzKSk7cmV0dXJuIGEuaGF9O08ucHJvdG90eXBlLmR1bXA9Ty5wcm90b3R5cGUuZHVtcDtmdW5jdGlvbiBBZihhLGIsYyl7dGhpcy5jPWE7dGhpcy5nPWI7dGhpcy5NZz1jfHwxfW09QWYucHJvdG90eXBlO20uRWE9ZnVuY3Rpb24oYSl7aWYobnVsbD09d2luZG93Lm9wZW5EYXRhYmFzZSl0aHJvdyBuZXcgRCgzNTMpO3ZhciBiPWF8fGZ1bmN0aW9uKCl7cmV0dXJuIHYoKX07cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEsZCl7dmFyIGM9d2luZG93Lm9wZW5EYXRhYmFzZSh0aGlzLmcubmFtZSgpLFwiXCIsdGhpcy5nLm5hbWUoKSx0aGlzLk1nKTtpZihudWxsIT1jKXRoaXMuaT1jLEJmKHRoaXMsYikudGhlbihmdW5jdGlvbigpe3RoaXMucWUoKS50aGVuKGEsZCl9LmJpbmQodGhpcyksZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIEQpdGhyb3cgYTt0aHJvdyBuZXcgRCgzNTQsYS5tZXNzYWdlKTt9KTtlbHNlIHRocm93IG5ldyBEKDM1NCk7fSx0aGlzKX07XG5mdW5jdGlvbiBCZihhLGIpe3ZhciBjPXcoKSxkPW5ldyB2ZihhLmksMSxuZXcgdWQoYS5jLEIoKSkpO3VmKGQsXCJDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBfX2xmX3ZlcihpZCBJTlRFR0VSIFBSSU1BUlkgS0VZLCB2IElOVEVHRVIpXCIsW10pO3VmKGQsXCJTRUxFQ1QgdiBGUk9NIF9fbGZfdmVyIFdIRVJFIGlkID0gMFwiLFtdKTtkLmthKCkudGhlbihmdW5jdGlvbihhKXt2YXIgZD0wO2FbMV0ucm93cy5sZW5ndGgmJihkPWFbMV0ucm93cy5pdGVtKDApLnYpO2Q8dGhpcy5nLnZlcnNpb24oKT90aGlzLmhlKGIsZCkudGhlbihjLnJlc29sdmUuYmluZChjKSk6ZD50aGlzLmcudmVyc2lvbigpP2MucmVqZWN0KG5ldyBEKDEwOCkpOmMucmVzb2x2ZSgpfS5iaW5kKGEpLGMucmVqZWN0LmJpbmQoYykpO3JldHVybiBjLmhhfW0uRmI9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGwhPXRoaXMuaSlyZXR1cm4gbmV3IHZmKHRoaXMuaSxhLGMpO3Rocm93IG5ldyBEKDIpO307bS5jbG9zZT1hYSgpO1xubS5BYz1mdW5jdGlvbigpe3Rocm93IG5ldyBEKDUxMik7fTttLnN1YnNjcmliZT1mdW5jdGlvbigpe3Rocm93IG5ldyBEKDM1NSk7fTttLkdjPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEQoMzU1KTt9O20uaGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gQ2YodGhpcykudGhlbihmdW5jdGlvbigpe3JldHVybiBhKG5ldyBPKHRoaXMuYyxiLHRoaXMuaSkpfS5iaW5kKHRoaXMpKX07XG5mdW5jdGlvbiBDZihhKXt2YXIgYj1hLmcub2EoKSxjPW5ldyB2ZihhLmksMSxuZXcgdWQoYS5jLEIoKSkpLGQ9bmV3IHZmKGEuaSwxLG5ldyB1ZChhLmMsQigpKSk7dWYoYyxcIklOU0VSVCBPUiBSRVBMQUNFIElOVE8gX19sZl92ZXIgVkFMVUVTICgwLCA/KVwiLFthLmcudmVyc2lvbigpXSk7emYoYyk7cmV0dXJuIGMua2EoKS50aGVuKGZ1bmN0aW9uKGEpe3ZhciBjPWFbMV07Yy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuLTEhPWEuaW5kZXhPZihcIl9fZF9fXCIpfSkuZm9yRWFjaChmdW5jdGlvbihhKXt1ZihkLFwiRFJPUCBUQUJMRSBcIisoJ1wiJythKydcIicpLFtdKX0pO3ZhciBlPVtdLGw9W10scD1bXTtiLm1hcChmdW5jdGlvbihhKXstMT09Yy5pbmRleE9mKGEuZ2V0TmFtZSgpKSYmZS5wdXNoKGEuZ2V0TmFtZSgpKTthLkNiJiYoYS5EYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7YT13ZihhLmooKSk7ZS5wdXNoKGEpO2wucHVzaChhKX0pLGE9d2YobmYoYSkpLGUucHVzaChhKSxwLnB1c2goYSkpfSk7XG5lLmZvckVhY2goZnVuY3Rpb24oYSl7dWYoZCxcIkNSRUFURSBUQUJMRSBcIisoJ1wiJythKydcIicpK1wiKGlkIElOVEVHRVIgUFJJTUFSWSBLRVksIHZhbHVlIFRFWFQpXCIsW10pfSk7cmV0dXJuIGQua2EoKX0pfW0ucWU9ZnVuY3Rpb24oKXt2YXIgYT0wLGI9dygpLGM9ZnVuY3Rpb24oYil7dmFyIGM9bmV3IHZmKHRoaXMuaSwwKTt1ZihjLFwiU0VMRUNUIE1BWChpZCkgRlJPTSBcIisoJ1wiJytiKydcIicpLFtdKTtyZXR1cm4gYy5rYSgpLnRoZW4oZnVuY3Rpb24oYil7Yj1iWzBdLnJvd3MuaXRlbSgwKVtcIk1BWChpZClcIl07YT1NYXRoLm1heChiLGEpfSl9LmJpbmQodGhpcyksZD10aGlzLmcub2EoKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGMoYS5nZXROYW1lKCkpfSk7ZWIoZCkudGhlbihmdW5jdGlvbigpe2ljPU1hdGgubWF4KGljLGErMSk7Yi5yZXNvbHZlKCl9LGZ1bmN0aW9uKGEpe2IucmVqZWN0KGEpfSk7cmV0dXJuIGIuaGF9O2Z1bmN0aW9uIERmKGEpe3RoaXMubD15KCk7dGhpcy4kYj15KCk7YS5vYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy4kYi5zZXQoYS5nZXROYW1lKCksQigpKX0sdGhpcyl9bT1EZi5wcm90b3R5cGU7bS5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmwuc2V0KGIuaWQoKSxiKTt0aGlzLiRiLmdldChhKS5hZGQoYi5pZCgpKX07bS5XYj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuJGIuZ2V0KGEpO2IuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLmwuc2V0KGEuaWQoKSxhKTtjLmFkZChhLmlkKCkpfSx0aGlzKX07bS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMubC5nZXQoYSl8fG51bGx9O2Z1bmN0aW9uIEVmKGEsYil7cmV0dXJuIGIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmdldChhKX0sYSl9XG5tLlZhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPU1hdGgubWluKGIsYyksZj1NYXRoLm1heChiLGMpO2E9dGhpcy4kYi5nZXQoYSk7aWYoYS5zaXplPGYtZSlhLmZvckVhY2goZnVuY3Rpb24oYSl7YT49ZSYmYTw9ZiYmKGE9dGhpcy5sLmdldChhKSxkLnB1c2goYSkpfSx0aGlzKTtlbHNlIGZvcihiPWU7Yjw9ZjsrK2IpYS5oYXMoYikmJihjPXRoaXMubC5nZXQoYiksZC5wdXNoKGMpKTtyZXR1cm4gZH07bS5yZW1vdmU9ZnVuY3Rpb24oYSxiKXt0aGlzLmwuZGVsZXRlKGIpO3RoaXMuJGIuZ2V0KGEpLmRlbGV0ZShiKX07bS56Yz1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT90aGlzLiRiLmdldChhKS5zaXplOnRoaXMubC5zaXplfTttLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5sLmNsZWFyKCk7dGhpcy4kYi5jbGVhcigpfTtmdW5jdGlvbiBGZihhLGIsYyl7dmFyIGQ9MCxlPWEubGVuZ3RoO2ZvcihjPWN8fEdmO2Q8ZTspe3ZhciBmPWQrZT4+MTswPmMoYVtmXSxiKT9kPWYrMTplPWZ9cmV0dXJuIGQ9PWUmJmFbZF09PWI/ZDp+ZH1mdW5jdGlvbiBHZihhLGIpe3JldHVybiBhLWJ9ZnVuY3Rpb24gSGYoYSxiLGMpe2M9RmYoYSxiLGMpO3JldHVybiAwPmM/KGEuc3BsaWNlKC0oYysxKSwwLGIpLCEwKTohMX07ZnVuY3Rpb24gSWYoYSxiLGMsZCl7YT1iP2EucmV2ZXJzZSgpOmE7aWYobnVsbD09YyYmbnVsbD09ZClyZXR1cm4gYTtjPU1hdGgubWluKG4oYyk/YzphLmxlbmd0aCxhLmxlbmd0aCk7aWYoMD09YylyZXR1cm5bXTtkPU1hdGgubWluKGR8fDAsYS5sZW5ndGgpO3JldHVybiBhLnNsaWNlKGQsZCtjKX07ZnVuY3Rpb24gSmYoKXt0aGlzLmlhPTA7dGhpcy5GYz1udWxsfUpmLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmlhKz1iO3RoaXMuRmM9bnVsbD09PXRoaXMuRmM/YTphPnRoaXMuRmM/YTp0aGlzLkZjfTtKZi5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEsYil7dGhpcy5pYS09Yn07SmYucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5pYT0wfTtmdW5jdGlvbiBLZihhLGIpe2EuY2xlYXIoKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy5pYSs9YS5pYX0sYSl9O2Z1bmN0aW9uIExmKGEsYixjLGQpe3RoaXMuQT1hO3RoaXMuJD1iO3RoaXMueWY9Yzt0aGlzLnphPW5ldyBKZjtpZihkKXthPTUxMTthKj1hKmE7aWYoZC5sZW5ndGg+PWEpdGhyb3cgbmV3IEQoNixhKTtkPU1mKHRoaXMsZCk7dGhpcy51YT1kPU5mKGQpfWVsc2UgdGhpcy5jbGVhcigpfXZhciBPZj1bXTttPUxmLnByb3RvdHlwZTttLmdldE5hbWU9ZyhcIkFcIik7bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnVhLnRvU3RyaW5nKCl9O20uYWRkPWZ1bmN0aW9uKGEsYil7dGhpcy51YT10aGlzLnVhLkFiKGEsYil9O20uc2V0PWZ1bmN0aW9uKGEsYil7dGhpcy51YT10aGlzLnVhLkFiKGEsYiwhMCl9O20ucmVtb3ZlPWZ1bmN0aW9uKGEsYil7dGhpcy51YT10aGlzLnVhLnJlbW92ZShhLGIpfTttLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy51YS5nZXQoYSl9O1xubS5aYz1mdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiB0aGlzLlkoKS5pYTtpZihhIGluc3RhbmNlb2YgRSl7aWYoQWQoYSkpcmV0dXJuIHRoaXMuWSgpLmlhO2lmKEVkKGEpKXJldHVybiB0aGlzLmdldChhLmZyb20pLmxlbmd0aH1yZXR1cm4gdGhpcy5WYShbYV0pLmxlbmd0aH07bS5ZPWcoXCJ6YVwiKTttLlZkPWZ1bmN0aW9uKGEsYixjLGQpe2M9QXJyYXkoYSk7dGhpcy51YS5maWxsKHtvZmZzZXQ6Yj90aGlzLnphLmlhLWEtZDpkLGNvdW50OmEsdGU6MH0sYyk7cmV0dXJuIGI/Yy5yZXZlcnNlKCk6Y307XG5tLlZhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPVBmKHRoaXMudWEpLmFbMF07aWYoIW4oZSl8fDA9PWMpcmV0dXJuIE9mO2I9Ynx8ITE7Yz1udWxsIT1jP01hdGgubWluKGMsdGhpcy56YS5pYSk6dGhpcy56YS5pYTtkPWR8fDA7dmFyIGY9TWF0aC5taW4oTWF0aC5tYXgodGhpcy56YS5pYS1kLDApLGMpO2lmKDA9PWYpcmV0dXJuIE9mO2lmKCFuKGEpfHwxPT1hLmxlbmd0aCYmYVswXWluc3RhbmNlb2YgRSYmQWQoYVswXSkpcmV0dXJuIHRoaXMuVmQoZixiLGMsZCk7YT10aGlzLiQudWYoYSk7dmFyIGg9QXJyYXkoYj90aGlzLnphLmlhOmYpLGw9e2NvdW50OjAsWDpoLmxlbmd0aCxyZXZlcnNlOmIsTDpkfSxwPTE8dGhpcy5qYigpLlpkKCk7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj10aGlzLiQudWQoYSksYj10aGlzLiQuWGQoYSk/ZTpiWzBdLGI9dGhpcy51YS5ZZihiKSxjPTA7bnVsbCE9YiYmbC5jb3VudDxsLlg7KXtpZihwKXtmb3IodmFyIGQ9YixmPWEsTD1sLERiPVxuaCxUYz1kLnMuamIoKSxvZT0tMSxOYT0wO05hPGQuYS5sZW5ndGg7KytOYSlpZihUYy5CYihkLmFbTmFdLGYpKXtvZT1OYTticmVha31pZigtMSE9b2UpZm9yKE5hPW9lO05hPGQuYS5sZW5ndGgmJkwuY291bnQ8TC5YOysrTmEpVGMuQmIoZC5hW05hXSxmKSYmUWYoZCxMLERiLE5hKX1lbHNlIGIuVmEoYSxsLGgpOzAhPWwuTHx8Yi5rZChhKT9jPTA6YysrO2I9Mj09Yz9udWxsOmIubmV4dCgpfX0sdGhpcyk7aC5sZW5ndGg+bC5jb3VudCYmaC5zcGxpY2UobC5jb3VudCxoLmxlbmd0aC1sLmNvdW50KTtyZXR1cm4gYj9JZihoLGIsYyxkKTpofTttLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy51YT1SZih0aGlzKTt0aGlzLnphLmNsZWFyKCl9O20uUGE9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudWEuUGEoYSl9O20ubWluPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuSGIodGhpcy4kLm1pbi5iaW5kKHRoaXMuJCkpfTttLm1heD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkhiKHRoaXMuJC5tYXguYmluZCh0aGlzLiQpKX07XG5mdW5jdGlvbiBTZihhLGIsYyl7aWYoIWEuJC5PZChiLmFbY10pKWlmKDE8Yi5hW2NdLmxlbmd0aCl7aWYobnVsbD09PWIuYVtjXVswXSlyZXR1cm4gbnVsbH1lbHNlIHJldHVybiBudWxsO3JldHVybltiLmFbY10sYS55Zj9bYi5CW2NdXTpiLkJbY11dfW0uSGI9ZnVuY3Rpb24oYSl7dmFyIGI7YTp7Yj1QZih0aGlzLnVhKTt2YXIgYz0wO2RvIGlmKGM+PWIuYS5sZW5ndGgpYj1iLnlhLGM9MDtlbHNle3ZhciBkPVNmKHRoaXMsYixjKTtpZihudWxsIT09ZCl7Yj1kO2JyZWFrIGF9YysrfXdoaWxlKG51bGwhPT1iKTtiPW51bGx9YTp7Yz1UZih0aGlzLnVhKTtkPWMuYS5sZW5ndGgtMTtkbyBpZigwPmQpYz1jLnFiLGQ9MDtlbHNle3ZhciBlPVNmKHRoaXMsYyxkKTtpZihudWxsIT09ZSl7Yz1lO2JyZWFrIGF9ZC0tfXdoaWxlKG51bGwhPT1jKTtjPW51bGx9cmV0dXJuIG51bGw9PT1ifHxudWxsPT09Yz9udWxsOjE9PWEoYlswXSxjWzBdKT9iOmN9O20uTWE9ZyhcInlmXCIpO20uamI9ZyhcIiRcIik7XG5tLlFhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGwhPWE/MD09dGhpcy4kLmNvbXBhcmUoYSxiKTohMX07bS5KYT1mdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPVBmKHRoaXMudWEpO2I7KWEucHVzaChuZXcgaGMoYi5zYSxbYi5hLGIuQl0pKSxiPWIueWE7cmV0dXJuIGF9O2Z1bmN0aW9uIFVmKGEsYixjLGQpe2E9bmV3IExmKGIsYSxjKTtkPVZmKGQsYSk7YS51YT1kO3JldHVybiBhfWZ1bmN0aW9uIFdmKGEsYil7dGhpcy5zYT1hO3RoaXMucz1iO3RoaXMubWI9MDt0aGlzLnlhPXRoaXMucWI9dGhpcy5EPW51bGw7dGhpcy5hPVtdO3RoaXMuQj1bXTt0aGlzLmg9W107dGhpcy5ZZj0xPT1iLmpiKCkuWmQoKT90aGlzLlBlOnRoaXMuT2V9ZnVuY3Rpb24gUmYoYSl7cmV0dXJuIG5ldyBXZihpYysrLGEpfWZ1bmN0aW9uIFAoYSl7cmV0dXJuIDA9PWEubWJ9bT1XZi5wcm90b3R5cGU7bS5uZXh0PWcoXCJ5YVwiKTtcbmZ1bmN0aW9uIFhmKGEpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIG51bGwhPWE/YS5zYS50b1N0cmluZygpOlwiX1wifXZhciBjPWEuc2ErXCJbXCIrYS5hLmpvaW4oXCJ8XCIpK1wiXVwiLGQ9YS5oLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5zYX0pLmpvaW4oXCJ8XCIpLGU9YS5CLmpvaW4oXCIvXCIpLGY9YihhLnFiKStcIntcIixmPVAoYSk/ZitlOmYrZCxmPWYrXCJ9XCIrYihhLkQpO2EueWEmJihhPVhmKGEueWEpLGM9YytcIiAgXCIrYVswXSxmPWYrXCIgIFwiK2FbMV0pO3JldHVybltjLGZdfW0udG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1cIlwiLGI9WGYodGhpcyksYT1hKyhiWzBdK1wiXFxuXCIrYlsxXStcIlxcblwiKTt0aGlzLmgubGVuZ3RoJiYoYSs9dGhpcy5oWzBdLnRvU3RyaW5nKCkpO3JldHVybiBhfTtmdW5jdGlvbiBQZihhKXtyZXR1cm4gUChhKT9hOlBmKGEuaFswXSl9ZnVuY3Rpb24gVGYoYSl7cmV0dXJuIFAoYSk/YTpUZihhLmhbYS5oLmxlbmd0aC0xXSl9XG5mdW5jdGlvbiBZZihhLGIpe2ImJihiLnFiPWEpO2EmJihhLnlhPWIpfWZ1bmN0aW9uIE1mKGEsYil7Zm9yKHZhciBjPWIubGVuZ3RoLGQ9MCxlPWE9UmYoYSk7MDxjOyl7dmFyIGY9NzY4PD1jPzUxMToyNTc8PWMmJjUxMT49Yz9jOjI1NyxoPWIuc2xpY2UoZCxkK2YpO2EuYT1oLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5rZXl9KTthLkI9aC5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWV9KTtkKz1mO2MtPWY7MDxjJiYoZj1SZihhLnMpLFlmKGEsZiksYT1mKX1yZXR1cm4gZX1mdW5jdGlvbiBaZihhKXt2YXIgYj1hWzBdLGM9UmYoYi5zKTtjLm1iPWIubWIrMTtjLmg9YTtmb3IoYj0wO2I8YS5sZW5ndGg7KytiKWFbYl0uRD1jLDA8YiYmYy5hLnB1c2goYVtiXS5hWzBdKTtyZXR1cm4gY31cbmZ1bmN0aW9uIE5mKGEpe3ZhciBiPWEsYz1bXTtkbyBjLnB1c2goYiksYj1iLnlhO3doaWxlKGIpO2lmKDUxMj49Yy5sZW5ndGgpYj1aZihjKTtlbHNle3ZhciBkPWMubGVuZ3RoLGU9MCxiPVJmKGEucyk7Zm9yKGIubWI9YS5tYisyOzA8ZDspe2E9NzY4PD1kPzUxMToyNTc8PWQmJjUxMT49ZD9kOjI1Nzt2YXIgZj1jLnNsaWNlKGUsZSthKSxoPVpmKGYpO2guRD1iO2IuaC5sZW5ndGgmJihiLmEucHVzaChmWzBdLmFbMF0pLFlmKGIuaFtiLmgubGVuZ3RoLTFdLGgpKTtiLmgucHVzaChoKTtlKz1hO2QtPWF9fXJldHVybiBifW0uZ2V0PWZ1bmN0aW9uKGEpe3ZhciBiPSRmKHRoaXMsYSk7aWYoUCh0aGlzKSl7dmFyIGM9T2Y7dGhpcy5zLlFhKHRoaXMuYVtiXSxhKSYmKGM9Yy5jb25jYXQodGhpcy5CW2JdKSk7cmV0dXJuIGN9Yj10aGlzLnMuUWEodGhpcy5hW2JdLGEpP2IrMTpiO3JldHVybiB0aGlzLmhbYl0uZ2V0KGEpfTtcbm0uUGE9ZnVuY3Rpb24oYSl7dmFyIGI9JGYodGhpcyxhKTtyZXR1cm4gdGhpcy5zLlFhKHRoaXMuYVtiXSxhKT8hMDpQKHRoaXMpPyExOnRoaXMuaFtiXS5QYShhKX07bS5yZW1vdmU9ZnVuY3Rpb24oYSxiKXthZyh0aGlzLGEsLTEsYik7cmV0dXJuIG51bGw9PT10aGlzLkQ/KGE9dGhpcywxPT10aGlzLmgubGVuZ3RoJiYoYT10aGlzLmhbMF0sYS5EPW51bGwpLGEpOnRoaXN9O2Z1bmN0aW9uIGJnKGEpe3JldHVybiBQKGEpP2EuYVswXTpiZyhhLmhbMF0pfWZ1bmN0aW9uIGNnKGEpe2EuYT1bXTtmb3IodmFyIGI9MTtiPGEuaC5sZW5ndGg7KytiKWEuYS5wdXNoKGJnKGEuaFtiXSkpfVxuZnVuY3Rpb24gYWcoYSxiLGMsZCl7dmFyIGU9JGYoYSxiKSxmPVAoYSk7aWYoIWYpe3ZhciBoPWEucy5RYShhLmFbZV0sYik/ZSsxOmU7aWYoYWcoYS5oW2hdLGIsaCxkKSljZyhhKTtlbHNlIHJldHVybiExfWVsc2UgaWYoIWEucy5RYShhLmFbZV0sYikpcmV0dXJuITE7aWYoYS5hLmxlbmd0aD5lJiZhLnMuUWEoYS5hW2VdLGIpKXtpZihuKGQpJiYhYS5zLk1hKCkmJmYmJihoPWEuQltlXSxkPUZmKGgsZCx2b2lkIDApLDA+ZD9kPSExOihoLnNwbGljZShkLDEpLGQ9ITApLGQmJmEucy5ZKCkucmVtb3ZlKGIsMSksYS5CW2VdLmxlbmd0aCkpcmV0dXJuITE7YS5hLnNwbGljZShlLDEpO2YmJihmPWEucy5NYSgpPzE6YS5CW2VdLmxlbmd0aCxhLkIuc3BsaWNlKGUsMSksYS5zLlkoKS5yZW1vdmUoYixmKSl9aWYoMjU2PmEuYS5sZW5ndGgmJm51bGwhPT1hLkQpe2E6e2lmKGEueWEmJjI1NjxhLnlhLmEubGVuZ3RoKWI9YS55YSxlPWQ9MCxmPWEuYS5sZW5ndGgrMTtlbHNlIGlmKGEucWImJlxuMjU2PGEucWIuYS5sZW5ndGgpYj1hLnFiLGQ9YS5xYi5hLmxlbmd0aC0xLGU9UChhKT9kOmQrMSxmPTA7ZWxzZXtiPSExO2JyZWFrIGF9YS5hLnNwbGljZShmLDAsYi5hW2RdKTtiLmEuc3BsaWNlKGQsMSk7ZD1QKGEpP2EuQjphLmg7UChhKT9oPWIuQjooaD1iLmgsaFtlXS5EPWEpO2Quc3BsaWNlKGYsMCxoW2VdKTtoLnNwbGljZShlLDEpO1AoYil8fChjZyhiKSxjZyhhKSk7Yj0hMH1ifHxlZyhhLGMpfXJldHVybiEwfVxuZnVuY3Rpb24gZWcoYSxiKXt2YXIgYyxkLGU7YS55YSYmNTExPmEueWEuYS5sZW5ndGg/KGM9YS55YSxlPWQ9MCk6YS5xYiYmKGM9YS5xYixkPWMuYS5sZW5ndGgsZT1QKGMpP2MuQi5sZW5ndGg6Yy5oLmxlbmd0aCk7ZD1bZCwwXS5jb25jYXQoYS5hKTtBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGMuYSxkKTtkPW51bGw7UChhKT9kPWEuQjooZD1hLmgsZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuRD1jfSkpO2Q9W2UsMF0uY29uY2F0KGQpO0FycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoUChjKT9jLkI6Yy5oLGQpO1lmKGEucWIsYS55YSk7UChjKXx8Y2coYyk7LTEhPWImJihhLkQuYS5zcGxpY2UoYiwxKSxhLkQuaC5zcGxpY2UoYiwxKSl9XG5tLkFiPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD0kZih0aGlzLGEpO2lmKFAodGhpcykpe2lmKHRoaXMucy5RYSh0aGlzLmFbZF0sYSkpe2lmKGMpdGhpcy5zLlkoKS5yZW1vdmUoYSx0aGlzLnMuTWEoKT8xOnRoaXMuQltkXS5sZW5ndGgpLHRoaXMuQltkXT10aGlzLnMuTWEoKT9iOltiXTtlbHNle2lmKHRoaXMucy5NYSgpKXRocm93IG5ldyBEKDIwMSx0aGlzLnMuZ2V0TmFtZSgpLEpTT04uc3RyaW5naWZ5KGEpKTtpZighSGYodGhpcy5CW2RdLGIpKXRocm93IG5ldyBEKDEwOSk7fXRoaXMucy5ZKCkuYWRkKGEsMSk7cmV0dXJuIHRoaXN9dGhpcy5hLnNwbGljZShkLDAsYSk7dGhpcy5CLnNwbGljZShkLDAsdGhpcy5zLk1hKCk/YjpbYl0pO3RoaXMucy5ZKCkuYWRkKGEsMSk7NTEyPT10aGlzLmEubGVuZ3RoPyhkPVJmKHRoaXMucyksYT1SZih0aGlzLnMpLGEubWI9MSxhLmE9W3RoaXMuYVsyNTZdXSxhLmg9W3RoaXMsZF0sYS5EPXRoaXMuRCx0aGlzLkQ9YSxkLmE9dGhpcy5hLnNwbGljZSgyNTYpLFxuZC5CPXRoaXMuQi5zcGxpY2UoMjU2KSxkLkQ9YSxZZihkLHRoaXMueWEpLFlmKHRoaXMsZCksZD1hKTpkPXRoaXM7cmV0dXJuIGR9ZD10aGlzLnMuUWEodGhpcy5hW2RdLGEpP2QrMTpkO2E9dGhpcy5oW2RdLkFiKGEsYixjKTtQKGEpfHwxIT1hLmEubGVuZ3RofHwodGhpcy5hLnNwbGljZShkLDAsYS5hWzBdKSxhLmhbMV0uRD10aGlzLGEuaFswXS5EPXRoaXMsdGhpcy5oLnNwbGljZShkLDEsYS5oWzFdKSx0aGlzLmguc3BsaWNlKGQsMCxhLmhbMF0pKTtyZXR1cm4gNTEyPT10aGlzLmEubGVuZ3RoP2ZnKHRoaXMpOnRoaXN9O1xuZnVuY3Rpb24gZmcoYSl7dmFyIGI9UmYoYS5zKSxjPVJmKGEucyk7Yi5EPWEuRDtiLm1iPWEubWIrMTtiLmE9W2EuYVsyNTZdXTtiLmg9W2EsY107YS5hLnNwbGljZSgyNTYsMSk7Yy5EPWI7Yy5tYj1hLm1iO2MuYT1hLmEuc3BsaWNlKDI1Nik7Yy5oPWEuaC5zcGxpY2UoMjU3KTtjLmguZm9yRWFjaChmdW5jdGlvbihhKXthLkQ9Y30pO2EuRD1iO1lmKGMsYS55YSk7WWYoYSxjKTtyZXR1cm4gYn1mdW5jdGlvbiAkZihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5hLmxlbmd0aCxlPWEucy5qYigpO2M8ZDspe3ZhciBmPWMrZD4+MTstMT09ZS5jb21wYXJlKGEuYVtmXSxiKT9jPWYrMTpkPWZ9cmV0dXJuIGN9bS5QZT1mdW5jdGlvbihhKXtpZighUCh0aGlzKSl7dmFyIGI9JGYodGhpcyxhKTt0aGlzLnMuUWEodGhpcy5hW2JdLGEpJiZiKys7cmV0dXJuIHRoaXMuaFtiXS5QZShhKX1yZXR1cm4gdGhpc307XG5tLk9lPWZ1bmN0aW9uKGEpe2lmKCFQKHRoaXMpKXt2YXIgYj0kZih0aGlzLGEpO3RoaXMucy5RYSh0aGlzLmFbYl0sYSkmJihhLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PUZ9KXx8YisrKTtyZXR1cm4gdGhpcy5oW2JdLk9lKGEpfXJldHVybiB0aGlzfTtcbm0uVmE9ZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7cmV0dXJuIGFbMF0/YVsxXT8wOjE6LTF9dmFyIGU9dGhpcy5zLmpiKCksZj0wLGg9dGhpcy5hLmxlbmd0aC0xLGw9dGhpcy5hLHA9ZChlLndiKGxbZl0sYSkpLEw9ZChlLndiKGxbaF0sYSkpO2lmKDEhPXAmJigtMSE9cHx8LTEhPUwpKXt2YXIgc2E9ZnVuY3Rpb24oYSxiKXtiPWErYj4+MTtyZXR1cm4gYj09YT9iKzE6Yn0sY2E9ZnVuY3Rpb24oYixjLGYpe2lmKGI+PWMpcmV0dXJuIDA9PWY/YzotMTt2YXIgaD1kKGUud2IobFtiXSxhKSk7aWYoMD09aClyZXR1cm4gYjtpZigxPT1oKXJldHVybi0xO2g9c2EoYixjKTtpZihoPT1jKXJldHVybiAwPT1mP2M6LTE7dmFyIHA9ZChlLndiKGxbaF0sYSkpO3JldHVybiAwPT1wP2NhKGIsaCxwKTotMT09cD9jYShoKzEsYyxmKTpjYShiKzEsaCxwKX0sQ2I9ZnVuY3Rpb24oYixjKXtpZihiPj1jKXJldHVybiBiO3ZhciBmPWQoZS53YihsW2NdLGEpKTtpZigwPT1mKXJldHVybiBjO1xuaWYoLTE9PWYpcmV0dXJuIGI7Zj1zYShiLGMpO2lmKGY9PWMpcmV0dXJuIGI7dmFyIGg9ZChlLndiKGxbZl0sYSkpO3JldHVybiAwPT1oP0NiKGYsYyk6MT09aD9DYihiLGYtMSk6LTF9OzAhPXAmJihmPWNhKGYrMSxoLEwpKTstMSE9ZiYmKGg9Q2IoZixoKSwtMSE9aCYmaD49ZiYmZ2codGhpcyxiLGMsZixoKzEpKX19O2Z1bmN0aW9uIFFmKGEsYixjLGQpe2lmKGEucy5NYSgpKSFiLnJldmVyc2UmJmIuTD9iLkwtLTpjW2IuY291bnQrK109YS5CW2RdO2Vsc2UgZm9yKHZhciBlPTA7ZTxhLkJbZF0ubGVuZ3RoJiZiLmNvdW50PGMubGVuZ3RoOysrZSkhYi5yZXZlcnNlJiZiLkw/Yi5MLS06Y1tiLmNvdW50KytdPWEuQltkXVtlXX1mdW5jdGlvbiBnZyhhLGIsYyxkLGUpe2Zvcig7ZDxlJiYoYi5yZXZlcnNlfHwhKGIuY291bnQ+PWIuWCkpOysrZClRZihhLGIsYyxkKX1cbm0uZmlsbD1mdW5jdGlvbihhLGIpe2lmKFAodGhpcykpZm9yKHZhciBjPTA7Yzx0aGlzLkIubGVuZ3RoJiYwPGEuY291bnQ7KytjKWlmKDA8YS5vZmZzZXQpe2lmKGEub2Zmc2V0LT10aGlzLnMuTWEoKT8xOnRoaXMuQltjXS5sZW5ndGgsMD5hLm9mZnNldClmb3IodmFyIGQ9dGhpcy5CW2NdLmxlbmd0aCthLm9mZnNldDtkPHRoaXMuQltjXS5sZW5ndGgmJjA8YS5jb3VudDsrK2QpYlthLnRlKytdPXRoaXMuQltjXVtkXSxhLmNvdW50LS19ZWxzZSBpZih0aGlzLnMuTWEoKSliW2EudGUrK109dGhpcy5CW2NdLGEuY291bnQtLTtlbHNlIGZvcihkPTA7ZDx0aGlzLkJbY10ubGVuZ3RoJiYwPGEuY291bnQ7KytkKWJbYS50ZSsrXT10aGlzLkJbY11bZF0sYS5jb3VudC0tO2Vsc2UgZm9yKGM9MDtjPHRoaXMuaC5sZW5ndGgmJjA8YS5jb3VudDsrK2MpdGhpcy5oW2NdLmZpbGwoYSxiKX07XG5mdW5jdGlvbiBWZihhLGIpe3ZhciBjPWIuWSgpO2E9YS5tYXAoZnVuY3Rpb24oYSl7dmFyIGQ9bmV3IFdmKGEuaWQoKSxiKTtkLmE9YS5tWzBdO2QuQj1hLm1bMV07ZC5hLmZvckVhY2goZnVuY3Rpb24oYSxlKXtjLmFkZChhLGIuTWEoKT8xOmQuQltlXS5sZW5ndGgpfSk7cmV0dXJuIGR9KTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoLTE7KytkKVlmKGFbZF0sYVtkKzFdKTtyZXR1cm4gMTxhLmxlbmd0aD9OZihhWzBdKTphWzBdfW0ua2Q9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucy5qYigpLmtkKHRoaXMuYVswXSxhKX07ZnVuY3Rpb24gaGcoYSl7dGhpcy5YYz0wPT1hP2lnOmpnO3RoaXMuY2U9MD09YT9mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9hLnJldmVyc2UoKTpudWxsfTpmdW5jdGlvbihhKXtyZXR1cm4gYXx8bnVsbH07dGhpcy5pZT0wPT1hP2tnOmxnfWZ1bmN0aW9uIGpnKGEsYil7cmV0dXJuIGE+Yj8xOmE8Yj8tMTowfWZ1bmN0aW9uIGlnKGEsYil7cmV0dXJuIGpnKGIsYSl9ZnVuY3Rpb24gbGcoYSxiKXtyZXR1cm4gRmQoYSxiKX1mdW5jdGlvbiBrZyhhLGIpe3JldHVybiBGZChiLGEpfW09aGcucHJvdG90eXBlO20ud2I9ZnVuY3Rpb24oYSxiKXtiPXRoaXMuY2UoYik7dmFyIGM9W2IuZnJvbT09RixiLm89PUZdO2lmKCFjWzBdKXt2YXIgZD10aGlzLlhjKGEsYi5mcm9tKTtjWzBdPWIuZWE/MT09ZDotMSE9ZH1jWzFdfHwoZD10aGlzLlhjKGEsYi5vKSxjWzFdPWIubmE/LTE9PWQ6MSE9ZCk7cmV0dXJuIGN9O20uY29tcGFyZT1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLlhjKGEsYil9O1xubS5taW49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYTxiPzE6YT09Yj8wOi0xfTttLm1heD1mdW5jdGlvbihhLGIpe3JldHVybiBhPmI/MTphPT1iPzA6LTF9O20uQmI9ZnVuY3Rpb24oYSxiKXthPXRoaXMud2IoYSxiKTtyZXR1cm4gYVswXSYmYVsxXX07bS5rZD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLkJiKGEsYil9O20udWY9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT09YX0pLnNvcnQoZnVuY3Rpb24oYSxjKXtyZXR1cm4gdGhpcy5pZShhLGMpfS5iaW5kKHRoaXMpKX07bS5YZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jZShhKS5mcm9tPT1GfTttLnVkPWZ1bmN0aW9uKGEpe2E9dGhpcy5jZShhKTtyZXR1cm5bYS5mcm9tLGEub119O20uT2Q9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT1hfTttLlpkPWsoMSk7XG5tLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29tcGFyZT09aWc/XCJTaW1wbGVDb21wYXJhdG9yX0RFU0NcIjpcIlNpbXBsZUNvbXBhcmF0b3JfQVNDXCJ9O2Z1bmN0aW9uIG1nKGEpe2hnLmNhbGwodGhpcyxhKTt0aGlzLlhjPTA9PWE/bmc6b2d9cihtZyxoZyk7ZnVuY3Rpb24gb2coYSxiKXtyZXR1cm4gbnVsbD09PWE/bnVsbD09PWI/MDotMTpudWxsPT09Yj8xOmpnKGEsYil9ZnVuY3Rpb24gbmcoYSxiKXtyZXR1cm4gb2coYixhKX1tZy5wcm90b3R5cGUuQmI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09PWE/QWQoYik6bWcuaGIuQmIuY2FsbCh0aGlzLGEsYil9O21nLnByb3RvdHlwZS5IYj1mdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT09YT9udWxsPT09Yj8wOi0xOm51bGw9PT1iPzE6bnVsbH07bWcucHJvdG90eXBlLm1pbj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuSGIoYSxiKTtudWxsPT09YyYmKGM9bWcuaGIubWluLmNhbGwodGhpcyxhLGIpKTtyZXR1cm4gY307XG5tZy5wcm90b3R5cGUubWF4PWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5IYihhLGIpO251bGw9PT1jJiYoYz1tZy5oYi5tYXguY2FsbCh0aGlzLGEsYikpO3JldHVybiBjfTtmdW5jdGlvbiBwZyhhKXt0aGlzLnBhPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgaGcoYSl9KX1mdW5jdGlvbiBxZyhhLGIsYyxkKXtmb3IodmFyIGU9MCxmPTA7ZjxhLnBhLmxlbmd0aCYmMD09ZTsrK2YpZT1kKGEucGFbZl0sYltmXSxjW2ZdKTtyZXR1cm4gZX1tPXBnLnByb3RvdHlwZTttLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gcWcodGhpcyxhLGIsZnVuY3Rpb24oYSxiLGUpe3JldHVybiBiPT1GfHxlPT1GPzA6YS5jb21wYXJlKGIsZSl9KX07bS5taW49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gcWcodGhpcyxhLGIsZnVuY3Rpb24oYSxiLGUpe3JldHVybiBhLm1pbihiLGUpfSl9O20ubWF4PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHFnKHRoaXMsYSxiLGZ1bmN0aW9uKGEsYixlKXtyZXR1cm4gYS5tYXgoYixlKX0pfTtcbm0ud2I9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9WyEwLCEwXSxkPTA7ZDx0aGlzLnBhLmxlbmd0aCYmKGNbMF18fGNbMV0pOysrZCl7dmFyIGU9dGhpcy5wYVtkXS53YihhW2RdLGJbZF0pO2NbMF09Y1swXSYmZVswXTtjWzFdPWNbMV0mJmVbMV19cmV0dXJuIGN9O20uQmI9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9ITAsZD0wO2Q8dGhpcy5wYS5sZW5ndGgmJmM7KytkKWM9dGhpcy5wYVtkXS5CYihhW2RdLGJbZF0pO3JldHVybiBjfTttLmtkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucGFbMF0uQmIoYVswXSxiWzBdKX07XG5tLnVmPWZ1bmN0aW9uKGEpe3ZhciBiPWEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBhLmV2ZXJ5KGdhKX0pO2E9QXJyYXkodGhpcy5wYS5sZW5ndGgpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWFbY109Yi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGFbY119KTthLmZvckVhY2goZnVuY3Rpb24oYSxiKXthLnNvcnQoZnVuY3Rpb24oYSxjKXtyZXR1cm4gdGhpcy5wYVtiXS5pZShhLGMpfS5iaW5kKHRoaXMpKX0sdGhpcyk7Yj1BcnJheShiLmxlbmd0aCk7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKyliW2NdPWEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhW2NdfSk7cmV0dXJuIGIuc29ydChmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9MDtkPHRoaXMucGEubGVuZ3RoJiYwPT1jOysrZCljPXRoaXMucGFbZF0uaWUoYVtkXSxiW2RdKTtyZXR1cm4gY30uYmluZCh0aGlzKSl9O20uWGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGFbMF0uWGQoYVswXSl9O1xubS51ZD1mdW5jdGlvbihhKXt2YXIgYj1hLm1hcChmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnBhW2JdLnVkKGEpWzBdfSx0aGlzKTthPWEubWFwKGZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucGFbYl0udWQoYSlbMV19LHRoaXMpO3JldHVybltiLGFdfTttLk9kPWZ1bmN0aW9uKGEpe3JldHVybiBhLmV2ZXJ5KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIHRoaXMucGFbY10uT2QoYSl9LHRoaXMpfTttLlpkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGEubGVuZ3RofTtmdW5jdGlvbiByZyhhKXtwZy5jYWxsKHRoaXMsYSk7dGhpcy5wYT1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IG1nKGEpfSl9cihyZyxwZyk7ZnVuY3Rpb24gc2coYSl7aWYoMT09YS5mLmxlbmd0aClyZXR1cm4gbmV3IGhnKGEuZlswXS5vcmRlcik7dmFyIGI9YS5mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5vcmRlcn0pO3JldHVybiBhLmYuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYS5iYS5oYygpfSk/bmV3IHJnKGIpOm5ldyBwZyhiKX07ZnVuY3Rpb24gdGcoYSl7dGhpcy5mYT1hO3RoaXMub2I9QigpO3RoaXMuT2M9bmV3IEpmO3RoaXMuemE9bmV3IEpmfW09dGcucHJvdG90eXBlO20uZ2V0TmFtZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZhLmdldE5hbWUoKX07bS5hZGQ9ZnVuY3Rpb24oYSxiKXtudWxsPT09YT8odGhpcy5vYi5hZGQoYiksdGhpcy5PYy5hZGQoYSwxKSk6dGhpcy5mYS5hZGQoYSxiKX07bS5zZXQ9ZnVuY3Rpb24oYSxiKXtudWxsPT09YT8odGhpcy5vYi5jbGVhcigpLHRoaXMuT2MuY2xlYXIoKSx0aGlzLmFkZChhLGIpKTp0aGlzLmZhLnNldChhLGIpfTttLnJlbW92ZT1mdW5jdGlvbihhLGIpe251bGw9PT1hP2I/KHRoaXMub2IuZGVsZXRlKGIpLHRoaXMuT2MucmVtb3ZlKGEsMSkpOih0aGlzLm9iLmNsZWFyKCksdGhpcy5PYy5jbGVhcigpKTp0aGlzLmZhLnJlbW92ZShhLGIpfTttLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWE/Qyh0aGlzLm9iKTp0aGlzLmZhLmdldChhKX07bS5aYz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5mYS5aYyhhKX07XG5tLlk9ZnVuY3Rpb24oKXtLZih0aGlzLnphLFt0aGlzLmZhLlkoKSx0aGlzLk9jXSk7cmV0dXJuIHRoaXMuemF9O20uVmE9ZnVuY3Rpb24oYSxiLGMsZCl7Yj10aGlzLmZhLlZhKGEsYixjLGQpO3JldHVybiBudWxsIT1hP2I6Yi5jb25jYXQoQyh0aGlzLm9iKSl9O20uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLm9iLmNsZWFyKCk7dGhpcy5mYS5jbGVhcigpfTttLlBhPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YT8wIT10aGlzLm9iLnNpemU6dGhpcy5mYS5QYShhKX07bS5taW49ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mYS5taW4oKX07bS5tYXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mYS5tYXgoKX07bS5KYT1mdW5jdGlvbigpe3JldHVybltuZXcgaGMoLTIsQyh0aGlzLm9iKSldLmNvbmNhdCh0aGlzLmZhLkphKCkpfTttLmpiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmEuamIoKX07XG5mdW5jdGlvbiB1ZyhhLGIpe2Zvcih2YXIgYz0tMSxkPTA7ZDxiLmxlbmd0aDsrK2QpaWYoLTI9PWJbZF0uaWQoKSl7Yz1kO2JyZWFrfWlmKC0xPT1jKXRocm93IG5ldyBEKDEwMik7ZD1iW2NdLm07Yj1iLnNsaWNlKDApO2Iuc3BsaWNlKGMsMSk7YT1hKGIpO3ZhciBlPW5ldyB0ZyhhKTtkLmZvckVhY2goZnVuY3Rpb24oYSl7ZS5vYi5hZGQoYSl9KTtyZXR1cm4gZX1tLk1hPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZmEuTWEoKX07ZnVuY3Rpb24gdmcoYSl7dGhpcy5BPWE7dGhpcy5zYj1CKCk7dGhpcy4kPW5ldyBoZygxKX1tPXZnLnByb3RvdHlwZTttLmdldE5hbWU9ZyhcIkFcIik7bS5hZGQ9ZnVuY3Rpb24oYSl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGEpdGhyb3cgbmV3IEQoMTAzKTt0aGlzLnNiLmFkZChhKX07bS5zZXQ9ZnVuY3Rpb24oYSxiKXt0aGlzLmFkZChhLGIpfTttLnJlbW92ZT1mdW5jdGlvbihhKXt0aGlzLnNiLmRlbGV0ZShhKX07bS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuUGEoYSk/W2FdOltdfTttLm1pbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLkhiKHRoaXMuJC5taW4uYmluZCh0aGlzLiQpKX07bS5tYXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5IYih0aGlzLiQubWF4LmJpbmQodGhpcy4kKSl9O1xubS5IYj1mdW5jdGlvbihhKXtpZigwPT10aGlzLnNiLnNpemUpcmV0dXJuIG51bGw7dmFyIGI9Qyh0aGlzLnNiKS5yZWR1Y2UoZnVuY3Rpb24oYixkKXtyZXR1cm4gbnVsbD09PWJ8fDE9PWEoZCxiKT9kOmJ9LG51bGwpO3JldHVybltiLFtiXV19O20uWmM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zYi5zaXplfTttLlZhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWF8fFtEZCgpXTthPUModGhpcy5zYikuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBlLnNvbWUoZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuJC5CYihhLGIpfSx0aGlzKX0sdGhpcyk7cmV0dXJuIElmKGEsYixjLGQpfTttLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5zYi5jbGVhcigpfTttLlBhPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnNiLmhhcyhhKX07bS5KYT1mdW5jdGlvbigpe3JldHVybltuZXcgaGMoMCxDKHRoaXMuc2IpKV19O20uamI9ZyhcIiRcIik7XG5mdW5jdGlvbiB3ZyhhLGIpe3ZhciBjPW5ldyB2ZyhhKTtiWzBdLm0uZm9yRWFjaChmdW5jdGlvbihhKXtjLmFkZChhLGEpfSk7cmV0dXJuIGN9bS5NYT1rKCEwKTttLlk9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgSmY7YS5pYT10aGlzLnNiLnNpemU7cmV0dXJuIGF9O2Z1bmN0aW9uIHhnKGEpe3RoaXMuT2E9YS5iKHZjKTt0aGlzLkM9YS5iKHhjKTt0aGlzLlY9YS5iKHdjKX14Zy5wcm90b3R5cGUuRWE9ZnVuY3Rpb24oYSl7dmFyIGI9YS5vYSgpLGM9ZnVuY3Rpb24oKXtpZigwPT1iLmxlbmd0aClyZXR1cm4gdigpO3ZhciBhPWIuc2hpZnQoKTtyZXR1cm4oYS5DYigpP3lnKHRoaXMsYSk6emcodGhpcyxhKSkudGhlbihjKX0uYmluZCh0aGlzKTtyZXR1cm4gYygpfTtmdW5jdGlvbiB6ZyhhLGIpe3ZhciBjPWEuT2EuRmIoMCxbYl0pO2E9Yy5JKGIuZ2V0TmFtZSgpLGIua2IuYmluZChiKSwwKS5nZXQoW10pLnRoZW4oZnVuY3Rpb24oYSl7dGhpcy5WLldiKGIuZ2V0TmFtZSgpLGEpO0FnKHRoaXMsYixhKX0uYmluZChhKSk7Yy5rYSgpO3JldHVybiBhfVxuZnVuY3Rpb24gQWcoYSxiLGMpe3ZhciBkPWEuQy5sYy5nZXQoYi5nZXROYW1lKCkpfHxbXTtjLmZvckVhY2goZnVuY3Rpb24oYSl7ZC5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBjPWEubmIoYi5nZXROYW1lKCkpO2IuYWRkKGMsYS5pZCgpKX0pfSl9ZnVuY3Rpb24geWcoYSxiKXt2YXIgYz1hLk9hLkZiKDAsW2JdKSxkPWMuSShiLmdldE5hbWUoKSxiLmtiLDApLmdldChbXSkudGhlbihmdW5jdGlvbihhKXt0aGlzLlYuV2IoYi5nZXROYW1lKCksYSl9LmJpbmQoYSkpO2E9Yi5EYSgpLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gQmcodGhpcyxhLGMpfSxhKS5jb25jYXQoQ2coYSxiLGMpKTtjLmthKCk7cmV0dXJuIGViKGEuY29uY2F0KGQpKX1cbmZ1bmN0aW9uIEJnKGEsYixjKXtjPWMuSShiLmooKSxqYywxKTt2YXIgZD1zZyhiKTtyZXR1cm4gYy5nZXQoW10pLnRoZW4oZnVuY3Rpb24oYSl7aWYoMDxhLmxlbmd0aCl7aWYoRGcoYikpe3ZhciBjPVVmLmJpbmQodm9pZCAwLGQsYi5qKCksYi5EYyk7YT11ZyhjLGEpfWVsc2UgYT1VZihkLGIuaigpLGIuRGMsYSk7dGhpcy5DLnNldChiLm1jLGEpfX0uYmluZChhKSl9ZnVuY3Rpb24gQ2coYSxiLGMpe3JldHVybiBjLkkobmYoYiksamMsMSkuZ2V0KFtdKS50aGVuKGZ1bmN0aW9uKGEpezA8YS5sZW5ndGgmJihhPXdnKG5mKGIpLGEpLHRoaXMuQy5zZXQoYi5nZXROYW1lKCksYSkpfS5iaW5kKGEpKX07ZnVuY3Rpb24gRWcoKXt0aGlzLlo9eSgpO3RoaXMubGM9eSgpfUVnLnByb3RvdHlwZS5FYT1mdW5jdGlvbihhKXthLm9hKCkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1bXTt0aGlzLmxjLnNldChhLmdldE5hbWUoKSxiKTt2YXIgZD1uZihhKTtpZihudWxsPT09dGhpcy5nZXQoZCkpe3ZhciBlPW5ldyB2ZyhkKTtiLnB1c2goZSk7dGhpcy5aLnNldChkLGUpfWEuRGEoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjO2M9c2coYSk7Yz1uZXcgTGYoYS5qKCksYyxhLkRjKTtjPURnKGEpJiYxPT1hLmYubGVuZ3RoP25ldyB0ZyhjKTpjO2IucHVzaChjKTt0aGlzLlouc2V0KGEuaigpLGMpfSx0aGlzKX0sdGhpcyk7cmV0dXJuIHYoKX07RWcucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5aLmdldChhKXx8bnVsbH07XG5FZy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sYy5nZXQoYSl8fG51bGw7bnVsbD09PWMmJihjPVtdLHRoaXMubGMuc2V0KGEsYykpO2E9bnVsbDtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKylpZihjW2RdLmdldE5hbWUoKT09Yi5nZXROYW1lKCkpe2E9ZDticmVha31udWxsIT09YSYmMDxjLmxlbmd0aD9jLnNwbGljZShhLDEsYik6Yy5wdXNoKGIpO3RoaXMuWi5zZXQoYi5nZXROYW1lKCksYil9O2Z1bmN0aW9uIEZnKGEsYil7dmFyIGM9W10sZD1udWxsLGU9bnVsbDttZShhLGZ1bmN0aW9uKGEpe3ZhciBmPWIoYSk7bnVsbD09YS5nZXRQYXJlbnQoKT9lPWY6SyhkLGYpO3ZhciBsPWEuZ2V0UGFyZW50KCk7bnVsbCE9PWwmJkoobCkubGVuZ3RoPT1KKGQpLmxlbmd0aCYmKGw9Yy5pbmRleE9mKGQpLC0xIT1sJiZjLnNwbGljZShsLDEpKTsxPEooYSkubGVuZ3RoJiZjLnB1c2goZik7ZD1udWxsPT09YS5oP2NbYy5sZW5ndGgtMV06Zn0pO3JldHVybiBlfWZ1bmN0aW9uIEdnKGEpe3JldHVybiBIZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5ofSl9XG5mdW5jdGlvbiBJZyhhKXt2YXIgYj1hLmdldFBhcmVudCgpLGM9MDtudWxsIT09YiYmKGM9SihiKS5pbmRleE9mKGEpLGIucmVtb3ZlQ2hpbGQoYSkpO3ZhciBkPUooYSkuc2xpY2UoKTtkLmZvckVhY2goZnVuY3Rpb24oZCxmKXthLnJlbW92ZUNoaWxkKGQpO251bGw9PT1ifHxqZShiLGQsYytmKX0pO3JldHVybntwYXJlbnQ6YixjaGlsZHJlbjpkfX1mdW5jdGlvbiBKZyhhLGIpe0ooYSkuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe2EucmVtb3ZlQ2hpbGQoYyk7SyhiLGMpfSk7SyhhLGIpfWZ1bmN0aW9uIEtnKGEpe3ZhciBiPWllKGEsMCk7SWcoYSk7SmcoYixhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIExnKGEsYixjKXt2YXIgZD1pZShhLDApLGU9SihkKS5zbGljZSgpO2lmKCFlLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9KSlyZXR1cm4gYTtJZyhhKTtlLmZvckVhY2goZnVuY3Rpb24oZSxoKXtpZihiKGUpKXt2YXIgZj1jKGEpO2tlKGQsaCk7SyhmLGUpO2plKGQsZixoKX19KTtyZXR1cm4gZH1mdW5jdGlvbiBNZyhhLGIsYyxkKXt2YXIgZT1hLmdldFBhcmVudCgpO251bGwhPT1lJiYoYT1KKGUpLmluZGV4T2YoYSksa2UoZSxhKSxqZShlLGMsYSkpO0ooYikuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IucmVtb3ZlQ2hpbGQoYSk7SyhkLGEpfSk7cmV0dXJuIGN9ZnVuY3Rpb24gSGcoYSxiLGMpe2Z1bmN0aW9uIGQoYSl7YihhKSYmZS5wdXNoKGEpO251bGwhPWMmJmMoYSl8fEooYSkuZm9yRWFjaChkKX12YXIgZT1bXTtkKGEpO3JldHVybiBlfVxuZnVuY3Rpb24gTmcoYSxiKXt2YXIgYz1ifHxmdW5jdGlvbihhKXtyZXR1cm4gYS50b1N0cmluZygpK1wiXFxuXCJ9LGQ9XCJcIjttZShhLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8aGUoYSk7YisrKWQrPVwiLVwiO2QrPWMoYSl9KTtyZXR1cm4gZH07ZnVuY3Rpb24gT2coYSl7bmUuY2FsbCh0aGlzKTt0aGlzLnBiPWE7dGhpcy5XYT0hMX1yKE9nLG5lKTttPU9nLnByb3RvdHlwZTttLk5iPWZ1bmN0aW9uKCl7cmV0dXJuIEZnKHRoaXMsZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIE9nKXt2YXIgYj1uZXcgT2coYS5wYik7Yi5XYT1hLldhO2E9YS5XKCk7Yi5zYT1hO3JldHVybiBifXJldHVybiBhLk5iKCl9KX07bS5sYj1mdW5jdGlvbihhKXt2YXIgYj1hfHxbXTttZSh0aGlzLGZ1bmN0aW9uKGEpe2EhPXRoaXMmJmEubGIoYil9LmJpbmQodGhpcykpO2E9QihiKTtyZXR1cm4gQyhhKX07bS51PWZ1bmN0aW9uKGEpe3ZhciBiPW51bGwhPWE/YTpCKCk7bWUodGhpcyxmdW5jdGlvbihhKXthIT10aGlzJiZhLnUoYil9LmJpbmQodGhpcykpO3JldHVybiBifTttLnZkPWZ1bmN0aW9uKGEpe3RoaXMuV2EhPWEmJih0aGlzLldhPWEsdGhpcy5wYj1cImFuZFwiPT10aGlzLnBiP1wib3JcIjpcImFuZFwiLEoodGhpcykuZm9yRWFjaChmdW5jdGlvbihiKXtyZXR1cm4gYi52ZChhKX0pKX07XG5tLmV2YWw9ZnVuY3Rpb24oYSl7dmFyIGI9Sih0aGlzKS5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGIuZXZhbChhKX0pO3JldHVybiBQZyh0aGlzLGIpfTtmdW5jdGlvbiBQZyhhLGIpe3JldHVyblwiYW5kXCI9PWEucGI/T2QoYik6UGQoYil9bS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiY29tYmluZWRfcHJlZF9cIit0aGlzLnBiLnRvU3RyaW5nKCl9O20ud2U9ZnVuY3Rpb24oKXtpZihcIm9yXCI9PXRoaXMucGIpe3ZhciBhPW5ldyBIZDtKKHRoaXMpLmZvckVhY2goZnVuY3Rpb24oYil7Yj1iLndlKCkucWEoKTthLmFkZChiKX0pO3JldHVybiBhfXJldHVybiBuZXcgSGR9O20ubGQ9ZnVuY3Rpb24oKXtyZXR1cm5cIm9yXCI9PXRoaXMucGI/UWcodGhpcyk6ITF9O1xuZnVuY3Rpb24gUWcoYSl7dmFyIGI9bnVsbDtyZXR1cm4gSihhKS5ldmVyeShmdW5jdGlvbihhKXtpZighKGEgaW5zdGFuY2VvZiBxZSYmYS5sZCgpKSlyZXR1cm4hMTtudWxsPT09YiYmKGI9YS5KKTtyZXR1cm4gYi5qKCk9PWEuSi5qKCl9KX07ZnVuY3Rpb24gUmcoYSxiLGMpe25lLmNhbGwodGhpcyk7dGhpcy5nYT1hO3RoaXMubWE9Yjt0aGlzLkY9Yzt0aGlzLmRlPW51bGw7YT1lZSgpO3RoaXMudmM9ZmUoYSx0aGlzLmdhLkcoKSx0aGlzLkYpO3RoaXMubmc9YS5aZS5nZXQodGhpcy5nYS5HKCkpfHxudWxsfXIoUmcsbmUpO209UmcucHJvdG90eXBlO20uTmI9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgUmcodGhpcy5nYSx0aGlzLm1hLHRoaXMuRiksYj10aGlzLlcoKTthLnNhPWI7cmV0dXJuIGF9O20ubGI9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/KGEucHVzaCh0aGlzLmdhKSxhLnB1c2godGhpcy5tYSksYSk6W3RoaXMuZ2EsdGhpcy5tYV19O20udT1mdW5jdGlvbihhKXthPW51bGwhPWE/YTpCKCk7YS5hZGQodGhpcy5nYS5JKCkpO2EuYWRkKHRoaXMubWEuSSgpKTtyZXR1cm4gYX07XG5tLnJldmVyc2U9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkY7c3dpdGNoKHRoaXMuRil7Y2FzZSBcImd0XCI6YT1cImx0XCI7YnJlYWs7Y2FzZSBcImx0XCI6YT1cImd0XCI7YnJlYWs7Y2FzZSBcImd0ZVwiOmE9XCJsdGVcIjticmVhaztjYXNlIFwibHRlXCI6YT1cImd0ZVwifXJldHVybiBuZXcgUmcodGhpcy5tYSx0aGlzLmdhLGEpfTttLmV2YWw9ZnVuY3Rpb24oYSl7dmFyIGI9YS5lbnRyaWVzLmZpbHRlcihmdW5jdGlvbihhKXt2YXIgYj1IKGEsdGhpcy5nYSk7YT1IKGEsdGhpcy5tYSk7cmV0dXJuIHRoaXMudmMoYixhKX0sdGhpcyk7cmV0dXJuIG5ldyBHKGIsYS51KCkpfTttLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJqb2luX3ByZWQoXCIrdGhpcy5nYS5qKCkrXCIgXCIrdGhpcy5GK1wiIFwiK3RoaXMubWEuaigpK1wiKVwifTtcbmZ1bmN0aW9uIFNnKGEsYixjKXt2YXIgZDstMSE9Yi51KCkuaW5kZXhPZihUZChhLmdhLkkoKSkpPyhkPWIsYj1jKTpkPWM7aWYoZC5lbnRyaWVzLmxlbmd0aD5iLmVudHJpZXMubGVuZ3RoKXthOntjPWEuZ2E7YS5nYT1hLm1hO2EubWE9Yztzd2l0Y2goYS5GKXtjYXNlIFwiZ3RcIjpjPVwibHRcIjticmVhaztjYXNlIFwibHRcIjpjPVwiZ3RcIjticmVhaztjYXNlIFwiZ3RlXCI6Yz1cImx0ZVwiO2JyZWFrO2Nhc2UgXCJsdGVcIjpjPVwiZ3RlXCI7YnJlYWs7ZGVmYXVsdDpicmVhayBhfWEuRj1jO2EudmM9ZmUoZWUoKSxhLmdhLkcoKSxhLkYpfXJldHVybltiLGRdfXJldHVybltkLGJdfWZ1bmN0aW9uIFRnKGEpe3ZhciBiPXt9O2EubGIoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2JbYS5nZXROYW1lKCldPW51bGx9KTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFVnKGEsYixjKXtudWxsPT09YS5kZSYmKGEuZGU9VGcoYS5tYS5JKCkpKTt2YXIgZD1uZXcgUmQobmV3IGhjKC0xLGEuZGUpLCExKTtyZXR1cm4gVmQoYixjLGQsW1RkKGEubWEuSSgpKV0pfVxuZnVuY3Rpb24gVmcoYSxiLGMsZCl7dmFyIGU9W2IsY107ZHx8KGU9U2coYSxiLGMpKTtiPWVbMF07Yz1lWzFdO3ZhciBlPWIsZj1jLGg9YS5nYSxsPWEubWE7ZCYmKGU9YyxmPWIsaD1hLm1hLGw9YS5nYSk7dmFyIHA9bmV3IGNkLEw9W107ZS5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9U3RyaW5nKEgoYSxoKSk7cC5zZXQoYixhKX0pO3ZhciBzYT1lLnUoKSxjYT1mLnUoKTtmLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1IKGEsbCksYz1TdHJpbmcoYik7bnVsbCE9PWImJnAuaGFzKGMpP3AuZ2V0KGMpLmZvckVhY2goZnVuY3Rpb24oYil7Yj1WZChhLGNhLGIsc2EpO0wucHVzaChiKX0pOmQmJkwucHVzaChVZyh0aGlzLGEsY2EpKX0uYmluZChhKSk7YT1iLnUoKS5jb25jYXQoYy51KCkpO3JldHVybiBuZXcgRyhMLGEpfVxuZnVuY3Rpb24gV2coYSxiLGMsZCxlKXtmdW5jdGlvbiBmKGEsYil7Yj1uZXcgUmQoYiwxPHNhLmxlbmd0aCk7YT1WZChhLGNhLGIsc2EpO0wucHVzaChhKX12YXIgaD1kLmRnLkkoKSxsPWIscD1jOy0xIT1iLnUoKS5pbmRleE9mKFRkKGgpKSYmKGw9YyxwPWIpO3ZhciBMPVtdLHNhPXAudSgpLGNhPWwudSgpO2wuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubmcoSChhLGQud2cpKSxiPWQuaW5kZXguZ2V0KGIpOzAhPWIubGVuZ3RoJiYoZC5pbmRleC5NYSgpP2YoYSxlLmdldChiWzBdKSk6RWYoZSxiKS5mb3JFYWNoKGYuYmluZChudWxsLGEpKSl9LGEpO2E9bC51KCkuY29uY2F0KHAudSgpKTtyZXR1cm4gbmV3IEcoTCxhKX07ZnVuY3Rpb24gWGcoYSxiLGMpe3JldHVybiBudWxsPT09Yj9uZXcgcWUoYSxiLGMpOm4oYi5qKT9uZXcgUmcoYSxiLGMpOm5ldyBxZShhLGIsYyl9O3ZhciBZZz17fTtxKFwibGYuc2NoZW1hLkRhdGFTdG9yZVR5cGVcIixZZyk7WWcuSU5ERVhFRF9EQj0wO1lnLk1FTU9SWT0xO1lnLkxPQ0FMX1NUT1JBR0U9MjtZZy5GSVJFQkFTRT0zO1lnLldFQl9TUUw9NDtZZy5PQlNFUlZBQkxFX1NUT1JFPTU7ZnVuY3Rpb24gWmcoYSxiLGMsZCl7dGhpcy5tYz1hO3RoaXMubmFtZT1iO3RoaXMuRGM9Yzt0aGlzLmY9ZH1aZy5wcm90b3R5cGUuaj1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1jK1wiLlwiK3RoaXMubmFtZX07ZnVuY3Rpb24gRGcoYSl7cmV0dXJuIGEuZi5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhLmJhLmhjKCl9KX1mdW5jdGlvbiBRKGEsYixjLGQpe3RoaXMuQT1hO3RoaXMudGE9Yzt0aGlzLks9Yjt0aGlzLnJkPWQ7dGhpcy5LYT1udWxsfXEoXCJsZi5zY2hlbWEuVGFibGVcIixRKTtRLnByb3RvdHlwZS5nZXROYW1lPWcoXCJBXCIpO1EucHJvdG90eXBlLmdldE5hbWU9US5wcm90b3R5cGUuZ2V0TmFtZTtcbmZ1bmN0aW9uIFRkKGEpe3JldHVybiBhLkthfHxhLkF9US5wcm90b3R5cGUucmM9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5BKTtiLkthPWE7Yi5JZz10aGlzLklnO3JldHVybiBifTtRLnByb3RvdHlwZS5hcz1RLnByb3RvdHlwZS5yYztRLnByb3RvdHlwZS5jcmVhdGVSb3c9US5wcm90b3R5cGUueGI7US5wcm90b3R5cGUuZGVzZXJpYWxpemVSb3c9US5wcm90b3R5cGUua2I7US5wcm90b3R5cGUuRGE9ZyhcInRhXCIpO1EucHJvdG90eXBlLmdldEluZGljZXM9US5wcm90b3R5cGUuRGE7US5wcm90b3R5cGUubGI9ZyhcIktcIik7US5wcm90b3R5cGUuZ2V0Q29sdW1ucz1RLnByb3RvdHlwZS5sYjtRLnByb3RvdHlwZS5nZXRDb25zdHJhaW50PVEucHJvdG90eXBlLk5lO1EucHJvdG90eXBlLkNiPWcoXCJyZFwiKTtRLnByb3RvdHlwZS5wZXJzaXN0ZW50SW5kZXg9US5wcm90b3R5cGUuQ2I7ZnVuY3Rpb24gbmYoYSl7cmV0dXJuIGEuQStcIi4jXCJ9O2Z1bmN0aW9uIFIoYSxiKXt0aGlzLmNoaWxkPWE7dGhpcy5MYj1iO3RoaXMuS2E9bnVsbH1tPVIucHJvdG90eXBlO20uZ2V0TmFtZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLkxiK1wiKFwiK3RoaXMuY2hpbGQuZ2V0TmFtZSgpK1wiKVwifTttLmo9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5MYitcIihcIit0aGlzLmNoaWxkLmooKStcIilcIn07bS5JPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGQuSSgpfTttLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaigpfTttLkc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGlsZC5HKCl9O20uRGE9ZnVuY3Rpb24oKXtyZXR1cm5bXX07bS5DYT1rKG51bGwpO20uaGM9ayghMSk7bS5yYz1mdW5jdGlvbihhKXt0aGlzLkthPWE7cmV0dXJuIHRoaXN9O1IucHJvdG90eXBlLmFzPVIucHJvdG90eXBlLnJjO1xuZnVuY3Rpb24gJGcoYSl7Zm9yKHZhciBiPVthXTthIGluc3RhbmNlb2YgUjspYi5wdXNoKGEuY2hpbGQpLGE9YS5jaGlsZDtyZXR1cm4gYn1mdW5jdGlvbiBhaChhKXt0aGlzLkthPWF8fG51bGw7dGhpcy5VPW5ldyBRKFwiI1Vua25vd25UYWJsZVwiLFtdLFtdLCExKX1tPWFoLnByb3RvdHlwZTttLmdldE5hbWU9ayhcIipcIik7bS5qPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0TmFtZSgpfTttLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaigpfTttLkk9ZyhcIlVcIik7bS5HPWsoNCk7bS5EYT1mdW5jdGlvbigpe3JldHVybltdfTttLkNhPWsobnVsbCk7bS5oYz1rKCExKTtxKFwibGYuZm4uYXZnXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEsXCJBVkdcIil9KTtmdW5jdGlvbiBiaChhKXtyZXR1cm4gbmV3IFIoYXx8bmV3IGFoLFwiQ09VTlRcIil9cShcImxmLmZuLmNvdW50XCIsYmgpO2Z1bmN0aW9uIGNoKGEpe3JldHVybiBuZXcgUihhLFwiRElTVElOQ1RcIil9cShcImxmLmZuLmRpc3RpbmN0XCIsY2gpO3EoXCJsZi5mbi5tYXhcIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFIoYSxcIk1BWFwiKX0pO3EoXCJsZi5mbi5taW5cIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFIoYSxcIk1JTlwiKX0pO3EoXCJsZi5mbi5zdGRkZXZcIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFIoYSxcIlNURERFVlwiKX0pO3EoXCJsZi5mbi5zdW1cIixmdW5jdGlvbihhKXtyZXR1cm4gbmV3IFIoYSxcIlNVTVwiKX0pO3EoXCJsZi5mbi5nZW9tZWFuXCIsZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEsXCJHRU9NRUFOXCIpfSk7ZnVuY3Rpb24gUyhhLGIpe0kuY2FsbCh0aGlzKTt0aGlzLlVmPWJ9cihTLEkpO1MucHJvdG90eXBlLmV4ZWM9ZnVuY3Rpb24oYSxiKXtzd2l0Y2godGhpcy5VZil7Y2FzZSAxOnJldHVybiBkaCh0aGlzLGEsYik7Y2FzZSAwOnJldHVybiBlaCh0aGlzLGEsYik7ZGVmYXVsdDpyZXR1cm4gZmgodGhpcyxhLGIpfX07Uy5wcm90b3R5cGUudG9TdHJpbmc9ayhcImR1bW15X25vZGVcIik7Uy5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b1N0cmluZygpfTtmdW5jdGlvbiBmaChhLGIsYyl7cmV0dXJuIG5ldyB1KGZ1bmN0aW9uKGEpe2EodGhpcy5jYShbXSxiLGMpKX0uYmluZChhKSl9ZnVuY3Rpb24gZGgoYSxiLGMpe3JldHVybiBpZShhLDApLmV4ZWMoYixjKS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhKGEsYixjKX0uYmluZChhKSl9XG5mdW5jdGlvbiBlaChhLGIsYyl7dmFyIGQ9SihhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZXhlYyhiLGMpfSk7cmV0dXJuIGViKGQpLnRoZW4oZnVuY3Rpb24oYSl7dmFyIGQ9W107YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7KytiKWQucHVzaChhW2JdKX0pO3JldHVybiB0aGlzLmNhKGQsYixjKX0uYmluZChhKSl9O2Z1bmN0aW9uIGdoKGEpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5DZT1hfXIoZ2gsUyk7Z2gucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJhZ2dyZWdhdGlvbihcIit0aGlzLkNlLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5qKCl9KS50b1N0cmluZygpK1wiKVwifTtnaC5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7YS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2hoKG5ldyBpaChhLHRoaXMuQ2UpKX0sdGhpcyk7cmV0dXJuIGF9O2Z1bmN0aW9uIGloKGEsYil7dGhpcy5OYT1hO3RoaXMuSz1ifVxuZnVuY3Rpb24gaGgoYSl7YS5LLmZvckVhY2goZnVuY3Rpb24oYSl7YT0kZyhhKS5yZXZlcnNlKCk7Zm9yKHZhciBiPTE7YjxhLmxlbmd0aDtiKyspe3ZhciBkPWFbYl0sZT0kZyhkKS5zbGljZSgtMSlbMF0sZj1kLmNoaWxkIGluc3RhbmNlb2YgUj9MZCh0aGlzLk5hLGQuY2hpbGQpOnRoaXMuTmE7aWYobnVsbCE9PWYuJGEmJmYuJGEuaGFzKGQuaigpKSlicmVhaztmPWpoKGQuTGIsZixlKTtlPXRoaXMuTmE7bnVsbD09PWUuJGEmJihlLiRhPXkoKSk7ZS4kYS5zZXQoZC5qKCksZil9fSxhKX1cbmZ1bmN0aW9uIGpoKGEsYixjKXt2YXIgZD1udWxsO3N3aXRjaChhKXtjYXNlIFwiTUlOXCI6ZD1raChiLGMsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYjxhP2I6YX0pO2JyZWFrO2Nhc2UgXCJNQVhcIjpkPWtoKGIsYyxmdW5jdGlvbihhLGIpe3JldHVybiBiPmE/YjphfSk7YnJlYWs7Y2FzZSBcIkRJU1RJTkNUXCI6ZD1saChiLGMpO2JyZWFrO2Nhc2UgXCJDT1VOVFwiOmQ9bWgoYixjKTticmVhaztjYXNlIFwiU1VNXCI6ZD1uaChiLGMpO2JyZWFrO2Nhc2UgXCJBVkdcIjphPW1oKGIsYyk7MDxhJiYoZD1uaChiLGMpL2EpO2JyZWFrO2Nhc2UgXCJHRU9NRUFOXCI6ZD1vaChiLGMpO2JyZWFrO2RlZmF1bHQ6ZD1waChiLGMpfXJldHVybiBkfWZ1bmN0aW9uIGtoKGEsYixjKXtyZXR1cm4gYS5lbnRyaWVzLnJlZHVjZShmdW5jdGlvbihhLGUpe2U9SChlLGIpO3JldHVybiBudWxsPT09ZT9hOm51bGw9PT1hP2U6YyhhLGUpfSxudWxsKX1cbmZ1bmN0aW9uIG1oKGEsYil7cmV0dXJuIGIgaW5zdGFuY2VvZiBhaD9hLmVudHJpZXMubGVuZ3RoOmEuZW50cmllcy5yZWR1Y2UoZnVuY3Rpb24oYSxkKXtyZXR1cm4gYSsobnVsbD09PUgoZCxiKT8wOjEpfSwwKX1mdW5jdGlvbiBuaChhLGIpe3JldHVybiBraChhLGIsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYithfSl9ZnVuY3Rpb24gcGgoYSxiKXt2YXIgYz1bXTthLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhKXthPUgoYSxiKTtudWxsPT09YXx8Yy5wdXNoKGEpfSk7cmV0dXJuIDA9PWMubGVuZ3RoP251bGw6dGIuYXBwbHkobnVsbCxjKX1mdW5jdGlvbiBvaChhLGIpe3ZhciBjPTA7YT1hLmVudHJpZXMucmVkdWNlKGZ1bmN0aW9uKGEsZSl7ZT1IKGUsYik7aWYoMD09ZXx8bnVsbD09PWUpcmV0dXJuIGE7YysrO3JldHVybiBhK01hdGgubG9nKGUpfSwwKTtyZXR1cm4gMD09Yz9udWxsOk1hdGgucG93KE1hdGguRSxhL2MpfVxuZnVuY3Rpb24gbGgoYSxiKXt2YXIgYz15KCk7YS5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGQ9SChhLGIpO2Muc2V0KGQsYSl9KTtyZXR1cm4gbmV3IEcoeihjKSxhLnUoKSl9O2Z1bmN0aW9uIHFoKGEsYil7dGhpcy5IYT1hO3RoaXMuYWE9Yn1xaC5wcm90b3R5cGUuYmI9ZyhcIkhhXCIpO3FoLnByb3RvdHlwZS5kYT1nKFwiYWFcIik7ZnVuY3Rpb24gcmgoKXtJLmNhbGwodGhpcyl9cihyaCxJKTtmdW5jdGlvbiBzaChhLGIpe0kuY2FsbCh0aGlzKTt0aGlzLnRhYmxlPWE7dGhpcy52YWx1ZXM9Yn1yKHNoLHJoKTtmdW5jdGlvbiB0aChhLGIpe3NoLmNhbGwodGhpcyxhLGIpfXIodGgsc2gpO2Z1bmN0aW9uIHVoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLnRhYmxlPWF9cih1aCxyaCk7dWgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJkZWxldGUoXCIrdGhpcy50YWJsZS5nZXROYW1lKCkrXCIpXCJ9O2Z1bmN0aW9uIHZoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLnRhYmxlPWF9cih2aCxyaCk7dmgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJ1cGRhdGUoXCIrdGhpcy50YWJsZS5nZXROYW1lKCkrXCIpXCJ9O1xuZnVuY3Rpb24gd2goYSl7SS5jYWxsKHRoaXMpO3RoaXMuTz1hfXIod2gscmgpO3doLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwic2VsZWN0KFwiK3RoaXMuTy50b1N0cmluZygpK1wiKVwifTtmdW5jdGlvbiB4aChhKXtJLmNhbGwodGhpcyk7dGhpcy50YWJsZT1hfXIoeGgscmgpO3hoLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPVwidGFibGVfYWNjZXNzKFwiK3RoaXMudGFibGUuZ2V0TmFtZSgpO251bGw9PT10aGlzLnRhYmxlLkthfHwoYSs9XCIgYXMgXCIrdGhpcy50YWJsZS5LYSk7cmV0dXJuIGErXCIpXCJ9O2Z1bmN0aW9uIHloKCl7SS5jYWxsKHRoaXMpfXIoeWgscmgpO3loLnByb3RvdHlwZS50b1N0cmluZz1rKFwiY3Jvc3NfcHJvZHVjdFwiKTtmdW5jdGlvbiB6aChhLGIpe0kuY2FsbCh0aGlzKTt0aGlzLmY9YTt0aGlzLlBiPWJ9cih6aCxyaCk7XG56aC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1cInByb2plY3QoXCIrdGhpcy5mLnRvU3RyaW5nKCk7aWYobnVsbCE9PXRoaXMuUGIpdmFyIGI9dGhpcy5QYi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaigpfSkuam9pbihcIiwgXCIpLGE9YSsoXCIsIGdyb3VwQnkoXCIrYitcIilcIik7cmV0dXJuIGErXCIpXCJ9O2Z1bmN0aW9uIEFoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLk49YX1yKEFoLHJoKTtBaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIm9yZGVyX2J5KFwiK0FlKHRoaXMuTikrXCIpXCJ9O2Z1bmN0aW9uIEJoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLmY9YX1yKEJoLHJoKTtCaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImFnZ3JlZ2F0aW9uKFwiK3RoaXMuZi50b1N0cmluZygpK1wiKVwifTtmdW5jdGlvbiBDaChhKXtJLmNhbGwodGhpcyk7dGhpcy5mPWF9cihDaCxyaCk7XG5DaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImdyb3VwX2J5KFwiK3RoaXMuZi50b1N0cmluZygpK1wiKVwifTtmdW5jdGlvbiBEaChhKXtJLmNhbGwodGhpcyk7dGhpcy5YPWF9cihEaCxyaCk7RGgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJsaW1pdChcIit0aGlzLlgrXCIpXCJ9O2Z1bmN0aW9uIEVoKGEpe0kuY2FsbCh0aGlzKTt0aGlzLkw9YX1yKEVoLHJoKTtFaC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cInNraXAoXCIrdGhpcy5MK1wiKVwifTtmdW5jdGlvbiBGaChhLGIpe0kuY2FsbCh0aGlzKTt0aGlzLk89YTt0aGlzLlJiPWJ9cihGaCxyaCk7RmgucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJqb2luKHR5cGU6IFwiKyh0aGlzLlJiP1wib3V0ZXJcIjpcImlubmVyXCIpK1wiLCBcIit0aGlzLk8udG9TdHJpbmcoKStcIilcIn07ZnVuY3Rpb24gR2goKXt9O2Z1bmN0aW9uIEhoKCl7fXIoSGgsR2gpO0hoLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhKXt0aGlzLkg9YTt0aGlzLnViKHRoaXMuSCk7cmV0dXJuIHRoaXMuSH07SGgucHJvdG90eXBlLnViPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiB3aCl7dmFyIGI9SWgodGhpcyxhLk8pLGI9SmgodGhpcyxiKTtNZyhhLGEsYlswXSxiWzFdKTthPT10aGlzLkgmJih0aGlzLkg9YlswXSk7YT1iWzBdfUooYSkuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLnViKGEpfSx0aGlzKX07ZnVuY3Rpb24gSWgoYSxiKXtpZigwPT1KKGIpLmxlbmd0aHx8XCJhbmRcIiE9Yi5wYilyZXR1cm5bYl07YT1KKGIpLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGEpe2IucmVtb3ZlQ2hpbGQoYSk7cmV0dXJuIEloKHRoaXMsYSl9LGEpO3JldHVybiBFYShhKX1cbmZ1bmN0aW9uIEpoKGEsYil7dmFyIGM9bnVsbCxkPW51bGw7Yi5tYXAoZnVuY3Rpb24oYSxiKXthPW5ldyB3aChhKTswPT1iP2M9YTpLKGQsYSk7ZD1hfSxhKTtyZXR1cm5bYyxkXX07ZnVuY3Rpb24gS2goKXt9cihLaCxHaCk7S2gucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7aWYoMz5iLmZyb20ubGVuZ3RoKXJldHVybiBhO3RoaXMuSD1hO3RoaXMudWIodGhpcy5IKTtyZXR1cm4gdGhpcy5IfTtLaC5wcm90b3R5cGUudWI9ZnVuY3Rpb24oYSl7aWYoYSBpbnN0YW5jZW9mIHloKWZvcig7MjxKKGEpLmxlbmd0aDspe2Zvcih2YXIgYj1uZXcgeWgsYz0wOzI+YztjKyspe3ZhciBkPWtlKGEsMCk7SyhiLGQpfWplKGEsYiwwKX1KKGEpLmZvckVhY2goZnVuY3Rpb24oYSl7dGhpcy51YihhKX0sdGhpcyl9O2Z1bmN0aW9uIExoKCl7Uy5jYWxsKHRoaXMsMCwwKX1yKExoLFMpO0xoLnByb3RvdHlwZS50b1N0cmluZz1rKFwiY3Jvc3NfcHJvZHVjdFwiKTtMaC5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7dmFyIGI9YVswXSxjPWFbMV07YT1bXTtmb3IodmFyIGQ9Yi51KCksZT1jLnUoKSxmPTA7ZjxiLmVudHJpZXMubGVuZ3RoO2YrKylmb3IodmFyIGg9MDtoPGMuZW50cmllcy5sZW5ndGg7aCsrKXt2YXIgbD1WZChiLmVudHJpZXNbZl0sZCxjLmVudHJpZXNbaF0sZSk7YS5wdXNoKGwpfWI9Yi51KCkuY29uY2F0KGMudSgpKTtyZXR1cm5bbmV3IEcoYSxiKV19O2Z1bmN0aW9uIE1oKGEsYil7RGUuY2FsbCh0aGlzLGEsYik7dGhpcy5JYT1hLmIoemMpO3RoaXMuSWI9YS5iKEFjKX1yKE1oLERlKTtNaC5wcm90b3R5cGUuZ2V0UHJpb3JpdHk9aygyKTtNaC5wcm90b3R5cGUuZ2U9ZnVuY3Rpb24oYSl7MD09dGhpcy5HKCk/TmgodGhpcyxhKTp0aGlzLk1jKCl9O2Z1bmN0aW9uIE5oKGEsYil7YS50ZC5mb3JFYWNoKGZ1bmN0aW9uKGEsZCl7YSBpbnN0YW5jZW9mIHplJiZHZSh0aGlzLkliLGEsYltkXSl9LGEpfU1oLnByb3RvdHlwZS5NYz1mdW5jdGlvbigpe3ZhciBhPUllKHRoaXMuSWIsdGhpcy5kYSgpKTswIT1hLmxlbmd0aCYmKGE9bmV3IEZlKHRoaXMuZ2xvYmFsLGEpLEplKHRoaXMuSWEsYSkpfTtmdW5jdGlvbiBPaChhKXt1ZS5jYWxsKHRoaXMsYSl9cihPaCx1ZSk7T2gucHJvdG90eXBlLmRhPWZ1bmN0aW9uKCl7dmFyIGE9QigpO2EuYWRkKHRoaXMuZnJvbSk7UGgodGhpcyx0aGlzLmZyb20uZ2V0TmFtZSgpLGEpO3JldHVybiBhfTtmdW5jdGlvbiBQaChhLGIsYyl7dmFyIGQ9UWgoYS5iYS5pbmZvKCksYiwxKTtRaChhLmJhLmluZm8oKSxiKS5mb3JFYWNoKGMuYWRkLmJpbmQoYykpO2QuZm9yRWFjaChmdW5jdGlvbihhKXtQaCh0aGlzLGEuZ2V0TmFtZSgpLGMpfSxhKX1PaC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgT2godGhpcy5iYSk7eGUoYSx0aGlzKTthLmZyb209dGhpcy5mcm9tO3JldHVybiBhfTtPaC5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXtPaC5oYi5iaW5kLmNhbGwodGhpcyxhKTt5ZSh0aGlzLGEpO3JldHVybiB0aGlzfTtmdW5jdGlvbiBSaChhKXt1ZS5jYWxsKHRoaXMsYSl9cihSaCx1ZSk7UmgucHJvdG90eXBlLmRhPWZ1bmN0aW9uKCl7dmFyIGE9QigpO2EuYWRkKHRoaXMuTGEpO3ZhciBiPXRoaXMuYmEuaW5mbygpO1NoKHRoaXMuTGEuZ2V0TmFtZSgpLGIuZ2YpLmZvckVhY2goYS5hZGQuYmluZChhKSk7dGhpcy5hYyYmUWgoYix0aGlzLkxhLmdldE5hbWUoKSkuZm9yRWFjaChhLmFkZC5iaW5kKGEpKTtyZXR1cm4gYX07UmgucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IFJoKHRoaXMuYmEpO3hlKGEsdGhpcyk7YS5MYT10aGlzLkxhO3RoaXMudmFsdWVzJiYoYS52YWx1ZXM9dGhpcy52YWx1ZXMgaW5zdGFuY2VvZiBXZD90aGlzLnZhbHVlczp0aGlzLnZhbHVlcy5zbGljZSgpKTthLmFjPXRoaXMuYWM7YS5iYz10aGlzLmJjO3JldHVybiBhfTtcblJoLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe1JoLmhiLmJpbmQuY2FsbCh0aGlzLGEpO3RoaXMuYmMmJih0aGlzLnZhbHVlcz10aGlzLmJjIGluc3RhbmNlb2YgV2Q/YVt0aGlzLmJjLkNhKCldOnRoaXMuYmMubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiIGluc3RhbmNlb2YgV2Q/YVtiLkNhKCldOmJ9KSk7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIFRoKGEpe3VlLmNhbGwodGhpcyxhKX1yKFRoLHVlKTtUaC5wcm90b3R5cGUuZGE9ZnVuY3Rpb24oKXt2YXIgYT1CKCk7YS5hZGQodGhpcy50YWJsZSk7dmFyIGI9dGhpcy5zZXQubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLkouaigpfSksYz10aGlzLmJhLmluZm8oKTtVaChjLGIpLmZvckVhY2goYS5hZGQuYmluZChhKSk7VmgoYyxiKS5mb3JFYWNoKGEuYWRkLmJpbmQoYSkpO3JldHVybiBhfTtUaC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgVGgodGhpcy5iYSk7eGUoYSx0aGlzKTthLnRhYmxlPXRoaXMudGFibGU7YS5zZXQ9dGhpcy5zZXQ/V2godGhpcy5zZXQpOnRoaXMuc2V0O3JldHVybiBhfTtUaC5wcm90b3R5cGUuYmluZD1mdW5jdGlvbihhKXtUaC5oYi5iaW5kLmNhbGwodGhpcyxhKTt0aGlzLnNldC5mb3JFYWNoKGZ1bmN0aW9uKGIpey0xIT1iLlRjJiYoYi52YWx1ZT1hW2IuVGNdKX0pO3llKHRoaXMsYSk7cmV0dXJuIHRoaXN9O1xuZnVuY3Rpb24gV2goYSl7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPXt9LGQ7Zm9yKGQgaW4gYSliW2RdPWFbZF07cmV0dXJuIGJ9KX07ZnVuY3Rpb24gWGgoYSxiKXtpZihudWxsPT1iKXJldHVyblwiTlVMTFwiO3N3aXRjaChhKXtjYXNlIDE6cmV0dXJuIGI/MTowO2Nhc2UgMzpjYXNlIDQ6cmV0dXJuIGI7Y2FzZSAwOnJldHVyblwiJ1wiK2xjKGIpK1wiJ1wiO2RlZmF1bHQ6cmV0dXJuXCInXCIrYi50b1N0cmluZygpK1wiJ1wifX1mdW5jdGlvbiBZaChhLGIpe3ZhciBjPWEuYWM/XCJJTlNFUlQgT1IgUkVQTEFDRVwiOlwiSU5TRVJUXCIsZD1hLkxhLmxiKCksYz1jKyhcIiBJTlRPIFwiK2EuTGEuZ2V0TmFtZSgpK1wiKFwiKSxjPWMrZC5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0TmFtZSgpfSkuam9pbihcIiwgXCIpLGM9YytcIikgVkFMVUVTIChcIjtyZXR1cm4gYS52YWx1ZXMubWFwKGZ1bmN0aW9uKGEpe3ZhciBlPWQubWFwKGZ1bmN0aW9uKGMpe3ZhciBkPWEubVtjLmdldE5hbWUoKV07cmV0dXJuIGI/bnVsbCE9ZD9cIiNcIjpcIk5VTExcIjpYaChjLkcoKSxkKX0pO3JldHVybiBjK2Uuam9pbihcIiwgXCIpK1wiKTtcIn0pLmpvaW4oXCJcXG5cIil9XG5mdW5jdGlvbiBaaChhKXtzd2l0Y2goYSl7Y2FzZSBcImJldHdlZW5cIjpyZXR1cm5cIkJFVFdFRU5cIjtjYXNlIFwiZXFcIjpyZXR1cm5cIj1cIjtjYXNlIFwiZ3RlXCI6cmV0dXJuXCI+PVwiO2Nhc2UgXCJndFwiOnJldHVyblwiPlwiO2Nhc2UgXCJpblwiOnJldHVyblwiSU5cIjtjYXNlIFwibHRlXCI6cmV0dXJuXCI8PVwiO2Nhc2UgXCJsdFwiOnJldHVyblwiPFwiO2Nhc2UgXCJtYXRjaFwiOnJldHVyblwiTElLRVwiO2Nhc2UgXCJuZXFcIjpyZXR1cm5cIjw+XCI7ZGVmYXVsdDpyZXR1cm5cIlVOS05PV05cIn19ZnVuY3Rpb24gJGgoYSxiLGMsZCl7cmV0dXJuIGEgaW5zdGFuY2VvZiBXZD9cIj9cIithLkNhKCkudG9TdHJpbmcoKTpkP251bGwhPWE/XCIjXCI6XCJOVUxMXCI6XCJtYXRjaFwiPT1iP1wiJ1wiK2EudG9TdHJpbmcoKStcIidcIjpcImluXCI9PWI/XCIoXCIrYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIFhoKGMsYSl9KS5qb2luKFwiLCBcIikrXCIpXCI6XCJiZXR3ZWVuXCI9PWI/WGgoYyxhWzBdKStcIiBBTkQgXCIrWGgoYyxhWzFdKTpYaChjLGEpLnRvU3RyaW5nKCl9XG5mdW5jdGlvbiBhaShhLGIpe3JldHVybiBKKGEpLm1hcChmdW5jdGlvbihhKXtyZXR1cm5cIihcIitiaShhLGIpK1wiKVwifSkuam9pbihcImFuZFwiPT1hLnBiP1wiIEFORCBcIjpcIiBPUiBcIil9ZnVuY3Rpb24gY2koYSl7cmV0dXJuW2EuZ2EuaigpLFpoKGEuRiksYS5tYS5qKCldLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIGJpKGEsYil7aWYoYSBpbnN0YW5jZW9mIHFlKXt2YXIgYz1hLkouaigpLGQ9WmgoYS5GKTthPSRoKGEudmFsdWUsYS5GLGEuSi5HKCksYik7cmV0dXJuXCI9XCI9PWQmJlwiTlVMTFwiPT1hP1tjLFwiSVMgTlVMTFwiXS5qb2luKFwiIFwiKTpcIjw+XCI9PWQmJlwiTlVMTFwiPT1hP1tjLFwiSVMgTk9UIE5VTExcIl0uam9pbihcIiBcIik6W2MsZCxhXS5qb2luKFwiIFwiKX1pZihhIGluc3RhbmNlb2YgT2cpcmV0dXJuIGFpKGEsYik7aWYoYSBpbnN0YW5jZW9mIFJnKXJldHVybiBjaShhKTt0aHJvdyBuZXcgRCgzNTcsdHlwZW9mIGEpO31cbmZ1bmN0aW9uIGRpKGEsYil7cmV0dXJuKGE9YmkoYSxiKSk/XCIgV0hFUkUgXCIrYTpcIlwifWZ1bmN0aW9uIGVpKGEsYil7dmFyIGM9XCJVUERBVEUgXCIrYS50YWJsZS5nZXROYW1lKCkrXCIgU0VUIFwiLGM9YythLnNldC5tYXAoZnVuY3Rpb24oYSl7dmFyIGI9YS5KLmooKStcIiA9IFwiO3JldHVybi0xIT1hLlRjP2IrXCI/XCIrYS5UYy50b1N0cmluZygpOmIrWGgoYS5KLkcoKSxhLnZhbHVlKS50b1N0cmluZygpfSkuam9pbihcIiwgXCIpO2EudyYmKGMrPWRpKGEudyxiKSk7cmV0dXJuIGMrXCI7XCJ9XG5mdW5jdGlvbiBmaShhLGIpe3ZhciBjPVwiKlwiO2EuZi5sZW5ndGgmJihjPWEuZi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuS2E/YS5qKCkrXCIgQVMgXCIrYS5LYTphLmooKX0pLmpvaW4oXCIsIFwiKSk7Yz1cIlNFTEVDVCBcIitjK1wiIEZST00gXCI7bnVsbCE9YS5lYiYmMCE9YS5lYi5zaXplP2MrPWdpKGEsYik6KGMrPWEuZnJvbS5tYXAoaGkpLmpvaW4oXCIsIFwiKSxhLncmJihjKz1kaShhLncsYikpKTthLk4mJihiPWEuTi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuSi5qKCkrKDA9PWEub3JkZXI/XCIgREVTQ1wiOlwiIEFTQ1wiKX0pLmpvaW4oXCIsIFwiKSxjKz1cIiBPUkRFUiBCWSBcIitiKTthLnJhJiYoYj1hLnJhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5qKCl9KS5qb2luKFwiLCBcIiksYys9XCIgR1JPVVAgQlkgXCIrYik7YS5YJiYoYys9XCIgTElNSVQgXCIrYS5YLnRvU3RyaW5nKCkpO2EuTCYmKGMrPVwiIFNLSVAgXCIrYS5MLnRvU3RyaW5nKCkpO3JldHVybiBjK1wiO1wifVxuZnVuY3Rpb24gaGkoYSl7cmV0dXJuIFRkKGEpIT1hLmdldE5hbWUoKT9hLmdldE5hbWUoKStcIiBBUyBcIitUZChhKTphLmdldE5hbWUoKX1mdW5jdGlvbiBnaShhLGIpe2Zvcih2YXIgYz1IZyhhLncsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBSZ30pLGQ9Yy5tYXAoY2kpLGU9aGkoYS5mcm9tWzBdKSxmPTE7ZjxhLmZyb20ubGVuZ3RoO2YrKyl2YXIgaD1oaShhLmZyb21bZl0pLGU9YS5lYi5oYXMoY1tkLmxlbmd0aC1mXS5XKCkpP2UrKFwiIExFRlQgT1VURVIgSk9JTiBcIitoKTplKyhcIiBJTk5FUiBKT0lOIFwiK2gpLGU9ZSsoXCIgT04gKFwiK2RbZC5sZW5ndGgtZl0rXCIpXCIpO2E9YS53O2E9MDxKKGEpLmxlbmd0aD9pZShhLDApOmE7YSBpbnN0YW5jZW9mIFJnfHwoZSs9XCIgV0hFUkUgXCIrYmkoYSxiKSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBpaShhLGIpe2I9Ynx8ITE7YT1hLnF1ZXJ5LmNsb25lKCk7aWYoYSBpbnN0YW5jZW9mIFJoKXJldHVybiBZaChhLGIpO2lmKGEgaW5zdGFuY2VvZiBPaCl7dmFyIGM9XCJERUxFVEUgRlJPTSBcIithLmZyb20uZ2V0TmFtZSgpO2EudyYmKGMrPWRpKGEudyxiKSk7cmV0dXJuIGMrXCI7XCJ9aWYoYSBpbnN0YW5jZW9mIFRoKXJldHVybiBlaShhLGIpO2lmKGEgaW5zdGFuY2VvZiB6ZSlyZXR1cm4gZmkoYSxiKTt0aHJvdyBuZXcgRCgzNTgsdHlwZW9mIGEpO307ZnVuY3Rpb24gVChhLGIpe3RoaXMuZ2xvYmFsPWE7dGhpcy5IZz1hLmIoeWMpO3RoaXMuSWE9YS5iKHpjKTt0aGlzLnF1ZXJ5PWJ9cShcImxmLnF1ZXJ5LkJhc2VCdWlsZGVyXCIsVCk7VC5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbigpe3RyeXt0aGlzLmFiKCl9Y2F0Y2goYSl7cmV0dXJuIGJiKGEpfXJldHVybiBuZXcgdShmdW5jdGlvbihhLGIpe3ZhciBjPW5ldyBNaCh0aGlzLmdsb2JhbCxbdGhpcy5CYygpXSk7SmUodGhpcy5JYSxjKS50aGVuKGZ1bmN0aW9uKGIpe2EoSmQoYlswXSkpfSxiKX0sdGhpcyl9O1QucHJvdG90eXBlLmV4ZWM9VC5wcm90b3R5cGUuZXhlYztULnByb3RvdHlwZS5XZj1mdW5jdGlvbigpe3ZhciBhPWZ1bmN0aW9uKGEpe3JldHVybiBhLlBjKHRoaXMucXVlcnkpK1wiXFxuXCJ9LmJpbmQodGhpcyk7cmV0dXJuIE5nKGppKHRoaXMpLmJiKCksYSl9O1QucHJvdG90eXBlLmV4cGxhaW49VC5wcm90b3R5cGUuV2Y7XG5ULnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3RoaXMucXVlcnkuYmluZChhKTtyZXR1cm4gdGhpc307VC5wcm90b3R5cGUuYmluZD1ULnByb3RvdHlwZS5iaW5kO1QucHJvdG90eXBlLlBnPWZ1bmN0aW9uKGEpe3JldHVybiBpaSh0aGlzLGEpfTtULnByb3RvdHlwZS50b1NxbD1ULnByb3RvdHlwZS5QZztULnByb3RvdHlwZS5hYj1hYSgpO2Z1bmN0aW9uIGppKGEpe2lmKG51bGw9PWEuaGYpe3ZhciBiO2I9YS5IZzt2YXIgYz1hLnF1ZXJ5LGQ9Yi5xZy5jcmVhdGUoYyk7Yj1iLkVnLmNyZWF0ZShkLGMpO2EuaGY9Yn1yZXR1cm4gYS5oZn1ULnByb3RvdHlwZS5CYz1mdW5jdGlvbigpe3JldHVybntjb250ZXh0OnRoaXMucXVlcnkuY2xvbmUoKSxqZTpqaSh0aGlzKX19O2Z1bmN0aW9uIGtpKGEpe1QuY2FsbCh0aGlzLGEsbmV3IE9oKGEuYihCYykpKX1yKGtpLFQpO3EoXCJsZi5xdWVyeS5EZWxldGVCdWlsZGVyXCIsa2kpO2tpLnByb3RvdHlwZS5mcm9tPWZ1bmN0aW9uKGEpe2lmKG51bGwhPXRoaXMucXVlcnkuZnJvbSl0aHJvdyBuZXcgRCg1MTUpO3RoaXMucXVlcnkuZnJvbT1hO3JldHVybiB0aGlzfTtraS5wcm90b3R5cGUuZnJvbT1raS5wcm90b3R5cGUuZnJvbTtraS5wcm90b3R5cGUudz1mdW5jdGlvbihhKXt0aGlzLkZkKCk7dGhpcy5xdWVyeS53PWE7cmV0dXJuIHRoaXN9O2tpLnByb3RvdHlwZS53aGVyZT1raS5wcm90b3R5cGUudztraS5wcm90b3R5cGUuRmQ9ZnVuY3Rpb24oKXtpZihudWxsPT10aGlzLnF1ZXJ5LmZyb20pdGhyb3cgbmV3IEQoNTQ4KTtpZihudWxsIT10aGlzLnF1ZXJ5LncpdGhyb3cgbmV3IEQoNTE2KTt9O1xua2kucHJvdG90eXBlLmFiPWZ1bmN0aW9uKCl7a2kuaGIuYWIuY2FsbCh0aGlzKTtpZihudWxsPT10aGlzLnF1ZXJ5LmZyb20pdGhyb3cgbmV3IEQoNTE3KTt9O2Z1bmN0aW9uIGxpKGEsYil7VC5jYWxsKHRoaXMsYSxuZXcgUmgoYS5iKEJjKSkpO3RoaXMucXVlcnkuYWM9Ynx8ITF9cihsaSxUKTtxKFwibGYucXVlcnkuSW5zZXJ0QnVpbGRlclwiLGxpKTtsaS5wcm90b3R5cGUuYWI9ZnVuY3Rpb24oKXtsaS5oYi5hYi5jYWxsKHRoaXMpO3ZhciBhPXRoaXMucXVlcnk7aWYobnVsbD09YS5MYXx8bnVsbD09YS52YWx1ZXMpdGhyb3cgbmV3IEQoNTE4KTtpZihhLmFjJiZudWxsPT09YS5MYS5NYi5zZCl0aHJvdyBuZXcgRCg1MTkpO307bGkucHJvdG90eXBlLkxhPWZ1bmN0aW9uKGEpe2lmKG51bGwhPXRoaXMucXVlcnkuTGEpdGhyb3cgbmV3IEQoNTIwKTt0aGlzLnF1ZXJ5LkxhPWE7cmV0dXJuIHRoaXN9O2xpLnByb3RvdHlwZS5pbnRvPWxpLnByb3RvdHlwZS5MYTtcbmxpLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oYSl7aWYobnVsbCE9dGhpcy5xdWVyeS52YWx1ZXMpdGhyb3cgbmV3IEQoNTIxKTthIGluc3RhbmNlb2YgV2R8fGEuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFdkfSk/dGhpcy5xdWVyeS5iYz1hOnRoaXMucXVlcnkudmFsdWVzPWE7cmV0dXJuIHRoaXN9O2xpLnByb3RvdHlwZS52YWx1ZXM9bGkucHJvdG90eXBlLnZhbHVlcztmdW5jdGlvbiBtaShhKXtyZXR1cm4gbmkoXCJhbmRcIixBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKX1xKFwibGYub3AuYW5kXCIsbWkpO3EoXCJsZi5vcC5vclwiLGZ1bmN0aW9uKGEpe3JldHVybiBuaShcIm9yXCIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSl9KTtmdW5jdGlvbiBuaShhLGIpe3ZhciBjPW5ldyBPZyhhKTtiLmZvckVhY2goZnVuY3Rpb24oYSl7SyhjLGEpfSk7cmV0dXJuIGN9cShcImxmLm9wLm5vdFwiLGZ1bmN0aW9uKGEpe2EudmQoITApO3JldHVybiBhfSk7ZnVuY3Rpb24gVShhLGIpe1QuY2FsbCh0aGlzLGEsbmV3IHplKGEuYihCYykpKTt0aGlzLk1lPXRoaXMuQWQ9ITE7dGhpcy5xdWVyeS5mPWI7b2kodGhpcyk7cGkodGhpcyl9cihVLFQpO3EoXCJsZi5xdWVyeS5TZWxlY3RCdWlsZGVyXCIsVSk7VS5wcm90b3R5cGUuYWI9ZnVuY3Rpb24oKXtVLmhiLmFiLmNhbGwodGhpcyk7dmFyIGE9dGhpcy5xdWVyeTtpZihudWxsPT1hLmZyb20pdGhyb3cgbmV3IEQoNTIyKTtpZihuKGEuU2IpJiYhbihhLlgpfHxuKGEuWmIpJiYhbihhLkwpKXRocm93IG5ldyBEKDUyMyk7bnVsbCE9dGhpcy5xdWVyeS5yYT9xaSh0aGlzKTpyaSh0aGlzKX07ZnVuY3Rpb24gb2koYSl7dmFyIGI9YS5xdWVyeS5mLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFImJlwiRElTVElOQ1RcIj09YS5MYn0sYSk7aWYoMCE9Yi5sZW5ndGgmJigxIT1iLmxlbmd0aHx8MSE9YS5xdWVyeS5mLmxlbmd0aCkpdGhyb3cgbmV3IEQoNTI0KTt9XG5mdW5jdGlvbiBxaShhKXtpZihhLnF1ZXJ5LnJhLnNvbWUoZnVuY3Rpb24oYSl7YT1hLkcoKTtyZXR1cm4gNj09YXx8MD09YX0pKXRocm93IG5ldyBEKDUyNSk7fWZ1bmN0aW9uIHJpKGEpe3ZhciBiPWEucXVlcnkuZi5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgUn0sYSk7YT1hLnF1ZXJ5LmYuc29tZShmdW5jdGlvbihhKXtyZXR1cm4hKGEgaW5zdGFuY2VvZiBSKX0sYSl8fDA9PWEucXVlcnkuZi5sZW5ndGg7aWYoYiYmYSl0aHJvdyBuZXcgRCg1MjYpO31mdW5jdGlvbiBwaShhKXthLnF1ZXJ5LmYuZm9yRWFjaChmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgUiYmIXNpKGEuTGIsYS5HKCkpKXRocm93IG5ldyBEKDUyNyxhLmooKSk7fSxhKX1mdW5jdGlvbiB0aShhLGIpe2lmKG51bGw9PWEucXVlcnkuZnJvbSl0aHJvdyBuZXcgRChiKTt9XG5VLnByb3RvdHlwZS5mcm9tPWZ1bmN0aW9uKGEpe2lmKHRoaXMuTWUpdGhyb3cgbmV3IEQoNTE1KTt0aGlzLk1lPSEwO251bGw9PXRoaXMucXVlcnkuZnJvbSYmKHRoaXMucXVlcnkuZnJvbT1bXSk7dGhpcy5xdWVyeS5mcm9tLnB1c2guYXBwbHkodGhpcy5xdWVyeS5mcm9tLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO3JldHVybiB0aGlzfTtVLnByb3RvdHlwZS5mcm9tPVUucHJvdG90eXBlLmZyb207VS5wcm90b3R5cGUudz1mdW5jdGlvbihhKXt0aSh0aGlzLDU0OCk7aWYodGhpcy5BZCl0aHJvdyBuZXcgRCg1MTYpO3RoaXMuQWQ9ITA7dWkodGhpcyxhKTtyZXR1cm4gdGhpc307VS5wcm90b3R5cGUud2hlcmU9VS5wcm90b3R5cGUudztmdW5jdGlvbiB1aShhLGIpe251bGwhPWEucXVlcnkudyYmKGI9bWkoYixhLnF1ZXJ5LncpKTthLnF1ZXJ5Lnc9Yn1cblUucHJvdG90eXBlLmhnPWZ1bmN0aW9uKGEsYil7dGkodGhpcyw1NDIpO2lmKHRoaXMuQWQpdGhyb3cgbmV3IEQoNTQ3KTt0aGlzLnF1ZXJ5LmZyb20ucHVzaChhKTt1aSh0aGlzLGIpO3JldHVybiB0aGlzfTtVLnByb3RvdHlwZS5pbm5lckpvaW49VS5wcm90b3R5cGUuaGc7VS5wcm90b3R5cGUub2c9ZnVuY3Rpb24oYSxiKXt0aSh0aGlzLDU0Mik7aWYoIShiIGluc3RhbmNlb2YgUmcpKXRocm93IG5ldyBEKDU0MSk7aWYodGhpcy5BZCl0aHJvdyBuZXcgRCg1NDcpO3RoaXMucXVlcnkuZnJvbS5wdXNoKGEpO251bGw9PXRoaXMucXVlcnkuZWImJih0aGlzLnF1ZXJ5LmViPUIoKSk7dmFyIGM9YjtUZChhKSE9VGQoYi5tYS5JKCkpJiYoYz1iLnJldmVyc2UoKSk7dGhpcy5xdWVyeS5lYi5hZGQoYy5XKCkpO3VpKHRoaXMsYyk7cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLmxlZnRPdXRlckpvaW49VS5wcm90b3R5cGUub2c7XG5VLnByb3RvdHlwZS5YPWZ1bmN0aW9uKGEpe2lmKG51bGwhPSh0aGlzLnF1ZXJ5Llh8fHRoaXMucXVlcnkuU2IpKXRocm93IG5ldyBEKDUyOCk7aWYoYSBpbnN0YW5jZW9mIFdkKXRoaXMucXVlcnkuU2I9YTtlbHNle2lmKDA+YSl0aHJvdyBuZXcgRCg1MzEpO3RoaXMucXVlcnkuWD1hfXJldHVybiB0aGlzfTtVLnByb3RvdHlwZS5saW1pdD1VLnByb3RvdHlwZS5YO1UucHJvdG90eXBlLkw9ZnVuY3Rpb24oYSl7aWYobnVsbCE9KHRoaXMucXVlcnkuTHx8dGhpcy5xdWVyeS5aYikpdGhyb3cgbmV3IEQoNTI5KTtpZihhIGluc3RhbmNlb2YgV2QpdGhpcy5xdWVyeS5aYj1hO2Vsc2V7aWYoMD5hKXRocm93IG5ldyBEKDUzMSk7dGhpcy5xdWVyeS5MPWF9cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLnNraXA9VS5wcm90b3R5cGUuTDtcblUucHJvdG90eXBlLk49ZnVuY3Rpb24oYSxiKXt0aSh0aGlzLDU0OSk7bnVsbD09dGhpcy5xdWVyeS5OJiYodGhpcy5xdWVyeS5OPVtdKTt0aGlzLnF1ZXJ5Lk4ucHVzaCh7SjphLG9yZGVyOm51bGwhPWI/YjoxfSk7cmV0dXJuIHRoaXN9O1UucHJvdG90eXBlLm9yZGVyQnk9VS5wcm90b3R5cGUuTjtVLnByb3RvdHlwZS5yYT1mdW5jdGlvbihhKXt0aSh0aGlzLDU0OSk7aWYobnVsbCE9dGhpcy5xdWVyeS5yYSl0aHJvdyBuZXcgRCg1MzApO251bGw9PXRoaXMucXVlcnkucmEmJih0aGlzLnF1ZXJ5LnJhPVtdKTt0aGlzLnF1ZXJ5LnJhLnB1c2guYXBwbHkodGhpcy5xdWVyeS5yYSxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtyZXR1cm4gdGhpc307VS5wcm90b3R5cGUuZ3JvdXBCeT1VLnByb3RvdHlwZS5yYTtcbmZ1bmN0aW9uIHNpKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJDT1VOVFwiOmNhc2UgXCJESVNUSU5DVFwiOnJldHVybiEwO2Nhc2UgXCJBVkdcIjpjYXNlIFwiR0VPTUVBTlwiOmNhc2UgXCJTVERERVZcIjpjYXNlIFwiU1VNXCI6cmV0dXJuIDQ9PWJ8fDM9PWI7Y2FzZSBcIk1BWFwiOmNhc2UgXCJNSU5cIjpyZXR1cm4gND09Ynx8Mz09Ynx8NT09Ynx8Mj09Yn1yZXR1cm4hMX1VLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBhPW5ldyBVKHRoaXMuZ2xvYmFsLHRoaXMucXVlcnkuZik7YS5xdWVyeT10aGlzLnF1ZXJ5LmNsb25lKCk7YS5xdWVyeS5XYz1udWxsO3JldHVybiBhfTtVLnByb3RvdHlwZS5jbG9uZT1VLnByb3RvdHlwZS5jbG9uZTtmdW5jdGlvbiB2aShhLGIpe1QuY2FsbCh0aGlzLGEsbmV3IFRoKGEuYihCYykpKTt0aGlzLnF1ZXJ5LnRhYmxlPWJ9cih2aSxUKTtxKFwibGYucXVlcnkuVXBkYXRlQnVpbGRlclwiLHZpKTt2aS5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGEsYil7YT17VGM6YiBpbnN0YW5jZW9mIFdkP2IuQ2EoKTotMSxKOmEsdmFsdWU6Yn07bnVsbCE9dGhpcy5xdWVyeS5zZXQ/dGhpcy5xdWVyeS5zZXQucHVzaChhKTp0aGlzLnF1ZXJ5LnNldD1bYV07cmV0dXJuIHRoaXN9O3ZpLnByb3RvdHlwZS5zZXQ9dmkucHJvdG90eXBlLnNldDt2aS5wcm90b3R5cGUudz1mdW5jdGlvbihhKXt0aGlzLkZkKCk7dGhpcy5xdWVyeS53PWE7cmV0dXJuIHRoaXN9O3ZpLnByb3RvdHlwZS53aGVyZT12aS5wcm90b3R5cGUudzt2aS5wcm90b3R5cGUuRmQ9ZnVuY3Rpb24oKXtpZihudWxsIT10aGlzLnF1ZXJ5LncpdGhyb3cgbmV3IEQoNTE2KTt9O1xudmkucHJvdG90eXBlLmFiPWZ1bmN0aW9uKCl7dmkuaGIuYWIuY2FsbCh0aGlzKTtpZihudWxsPT10aGlzLnF1ZXJ5LnNldCl0aHJvdyBuZXcgRCg1MzIpO2lmKHRoaXMucXVlcnkuc2V0LnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEudmFsdWUgaW5zdGFuY2VvZiBXZH0pKXRocm93IG5ldyBEKDUwMSk7fTtmdW5jdGlvbiB3aShhKXt0aGlzLnF1ZXJ5PWE7dGhpcy5IYT1udWxsfXdpLnByb3RvdHlwZS5nYz1mdW5jdGlvbigpe251bGw9PT10aGlzLkhhJiYodGhpcy5IYT10aGlzLmFkKCkpO3JldHVybiB0aGlzLkhhfTtmdW5jdGlvbiB4aShhKXt3aS5jYWxsKHRoaXMsYSl9cih4aSx3aSk7eGkucHJvdG90eXBlLmFkPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucXVlcnkuYWM/bmV3IHRoKHRoaXMucXVlcnkuTGEsdGhpcy5xdWVyeS52YWx1ZXMpOm5ldyBzaCh0aGlzLnF1ZXJ5LkxhLHRoaXMucXVlcnkudmFsdWVzKX07ZnVuY3Rpb24geWkoYSl7d2kuY2FsbCh0aGlzLGEpfXIoeWksd2kpO3lpLnByb3RvdHlwZS5hZD1mdW5jdGlvbigpe3ZhciBhPW5ldyB2aCh0aGlzLnF1ZXJ5LnRhYmxlKSxiPW51bGwhPXRoaXMucXVlcnkudz9uZXcgd2godGhpcy5xdWVyeS53Lk5iKCkpOm51bGwsYz1uZXcgeGgodGhpcy5xdWVyeS50YWJsZSk7bnVsbD09PWI/SyhhLGMpOihLKGIsYyksSyhhLGIpKTtyZXR1cm4gYX07ZnVuY3Rpb24gemkoYSxiLGMpe3RoaXMuSGE9YTt0aGlzLmxlPWI7dGhpcy5WYj1jfXppLnByb3RvdHlwZS5nYz1mdW5jdGlvbigpe3RoaXMuVmIuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLkhhPWEuZ2IodGhpcy5IYSx0aGlzLmxlKX0sdGhpcyk7cmV0dXJuIHRoaXMuSGF9O2Z1bmN0aW9uIEFpKGEsYil7d2kuY2FsbCh0aGlzLGEpO3RoaXMuVmI9Yn1yKEFpLHdpKTtBaS5wcm90b3R5cGUuYWQ9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgdWgodGhpcy5xdWVyeS5mcm9tKSxiPW51bGwhPXRoaXMucXVlcnkudz9uZXcgd2godGhpcy5xdWVyeS53Lk5iKCkpOm51bGwsYz1uZXcgeGgodGhpcy5xdWVyeS5mcm9tKTtudWxsPT09Yj9LKGEsYyk6KEsoYixjKSxLKGEsYikpO3JldHVybihuZXcgemkoYSx0aGlzLnF1ZXJ5LHRoaXMuVmIpKS5nYygpfTtmdW5jdGlvbiBCaSgpe31yKEJpLEdoKTtCaS5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXtpZigyPmIuZnJvbS5sZW5ndGgpcmV0dXJuIGE7dGhpcy5IPWE7dGhpcy51Yih0aGlzLkgsYik7cmV0dXJuIHRoaXMuSH07QmkucHJvdG90eXBlLnViPWZ1bmN0aW9uKGEsYil7aWYoYSBpbnN0YW5jZW9mIHdoJiZhLk8gaW5zdGFuY2VvZiBSZyl7dmFyIGM9YS5PLlcoKSxkPWllKGEsMCk7ZCBpbnN0YW5jZW9mIHloJiYoYz1udWxsIT1iLmViJiZiLmViLmhhcyhjKSxjPW5ldyBGaChhLk8sYyksTWcoYSxkLGMsYyksYT09dGhpcy5IJiYodGhpcy5IPWMpLGE9Yyl9SihhKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMudWIoYSxiKX0sdGhpcyl9O2Z1bmN0aW9uIENpKCl7dGhpcy5TYz1CKCl9cihDaSxHaCk7Q2kucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7aWYoIW4oYi53KSlyZXR1cm4gYTt0aGlzLlNjLmNsZWFyKCk7dGhpcy5IPWE7dGhpcy51Yih0aGlzLkgsYik7dGhpcy5TYy5jbGVhcigpO3JldHVybiB0aGlzLkh9O0NpLnByb3RvdHlwZS51Yj1mdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe0ooYSkuZm9yRWFjaChkKX0uYmluZCh0aGlzKSxkPWZ1bmN0aW9uKGEpe2lmKCF0aGlzLlNjLmhhcyhhKSl7aWYoYSBpbnN0YW5jZW9mIHdoKXt2YXIgZT1hLk8udSgpLGg9ZnVuY3Rpb24oYSl7cmV0dXJuIERpKHRoaXMsYSxlKX0uYmluZCh0aGlzKSxoPUVpKHRoaXMsYixhLGgpO3RoaXMuU2MuYWRkKGEpO2ghPWEmJihudWxsPT09aC5nZXRQYXJlbnQoKSYmKHRoaXMuSD1oKSxkKGgpKX1jKGEpfX0uYmluZCh0aGlzKTtkKGEpfTtcbmZ1bmN0aW9uIEVpKGEsYixjLGQpe3ZhciBlPWM7aWYoRmkoYixjKSllPUtnKGMpLEVpKGEsYixjLGQpO2Vsc2UgaWYoR2koYykpe3ZhciBmPVtdLGU9TGcoYyxkLGZ1bmN0aW9uKGEpe2E9bmV3IHdoKGEuTyk7Zi5wdXNoKGEpO3JldHVybiBhfSk7Zi5mb3JFYWNoKGZ1bmN0aW9uKGEpe0VpKHRoaXMsYixhLGQpfSxhKX1yZXR1cm4gZX1mdW5jdGlvbiBEaShhLGIsYyl7dmFyIGQ9QigpO0dnKGIpLmZvckVhY2goZnVuY3Rpb24oYSl7ZC5hZGQoYS50YWJsZSl9LGEpO2IgaW5zdGFuY2VvZiB4aCYmZC5hZGQoYi50YWJsZSk7cmV0dXJuIEhjKGQsYyl9ZnVuY3Rpb24gR2koYSl7YT1pZShhLDApO3JldHVybiBhIGluc3RhbmNlb2YgeWh8fGEgaW5zdGFuY2VvZiBGaH1cbmZ1bmN0aW9uIEZpKGEsYil7dmFyIGM9aWUoYiwwKTtpZighKGMgaW5zdGFuY2VvZiB3aCkpcmV0dXJuITE7aWYobnVsbD09YS5lYilyZXR1cm4hMDtiPWIuTyBpbnN0YW5jZW9mIFJnO2E9YS5lYi5oYXMoYy5PLlcoKSk7cmV0dXJuIGJ8fCFhfTtmdW5jdGlvbiBIaShhLGIpe3dpLmNhbGwodGhpcyxhKTt0aGlzLlZiPWI7dGhpcy5rZj10aGlzLmNmPXRoaXMudGY9dGhpcy5mZj10aGlzLkRlPXRoaXMuU2U9dGhpcy5zZj10aGlzLkplPXRoaXMudmY9bnVsbH1yKEhpLHdpKTtcbkhpLnByb3RvdHlwZS5hZD1mdW5jdGlvbigpe0lpKHRoaXMpOzI8PXRoaXMucXVlcnkuZnJvbS5sZW5ndGgmJih0aGlzLkplPW5ldyB5aCk7dGhpcy5zZj1udWxsIT10aGlzLnF1ZXJ5Lnc/bmV3IHdoKHRoaXMucXVlcnkudy5OYigpKTpudWxsO3RoaXMucXVlcnkuTiYmKHRoaXMuZmY9bmV3IEFoKHRoaXMucXVlcnkuTikpO251bGwhPXRoaXMucXVlcnkuTCYmMDx0aGlzLnF1ZXJ5LkwmJih0aGlzLnRmPW5ldyBFaCh0aGlzLnF1ZXJ5LkwpKTtudWxsIT10aGlzLnF1ZXJ5LlgmJih0aGlzLmNmPW5ldyBEaCh0aGlzLnF1ZXJ5LlgpKTtudWxsIT10aGlzLnF1ZXJ5LnJhJiYodGhpcy5TZT1uZXcgQ2godGhpcy5xdWVyeS5yYSkpO0ppKHRoaXMpO3RoaXMua2Y9bmV3IHpoKHRoaXMucXVlcnkuZnx8W10sdGhpcy5xdWVyeS5yYXx8bnVsbCk7dmFyIGE9S2kodGhpcyk7cmV0dXJuKG5ldyB6aShhLHRoaXMucXVlcnksdGhpcy5WYikpLmdjKCl9O1xuZnVuY3Rpb24gS2koYSl7Zm9yKHZhciBiPVthLmNmLGEudGYsYS5rZixhLmZmLGEuRGUsYS5TZSxhLnNmLGEuSmVdLGM9LTEsZD1udWxsLGU9MDtlPGIubGVuZ3RoO2UrKyl7dmFyIGY9YltlXTtudWxsIT09ZiYmKG51bGw9PT1kP2Q9ZjpLKGJbY10sZiksYz1lKX1hLnZmLmZvckVhY2goZnVuY3Rpb24oYSl7SyhiW2NdLGEpfSk7cmV0dXJuIGR9ZnVuY3Rpb24gSWkoYSl7YS52Zj1hLnF1ZXJ5LmZyb20ubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgeGgoYSl9LGEpfWZ1bmN0aW9uIEppKGEpe3ZhciBiPWEucXVlcnkuZi5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBSfSk7bnVsbCE9YS5xdWVyeS5OJiZhLnF1ZXJ5Lk4uZm9yRWFjaChmdW5jdGlvbihhKXthLkogaW5zdGFuY2VvZiBSJiZiLnB1c2goYS5KKX0pOzA8Yi5sZW5ndGgmJihhLkRlPW5ldyBCaChiKSl9O2Z1bmN0aW9uIExpKCl7dGhpcy5yZT1bbmV3IEhoLG5ldyBLaCxuZXcgQ2ksbmV3IEJpXTt0aGlzLlBkPVtuZXcgSGhdfUxpLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSBpbnN0YW5jZW9mIFJoKWI9bmV3IHhpKGEpO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIE9oKWI9bmV3IEFpKGEsdGhpcy5QZCk7ZWxzZSBpZihhIGluc3RhbmNlb2YgemUpYj1uZXcgSGkoYSx0aGlzLnJlKTtlbHNlIGlmKGEgaW5zdGFuY2VvZiBUaCliPW5ldyB5aShhKTtlbHNlIHRocm93IG5ldyBEKDUxMyk7Yj1iLmdjKCk7cmV0dXJuIG5ldyBxaChiLGEuZGEoKSl9O2Z1bmN0aW9uIE1pKGEpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5VPWF9cihNaSxTKTtNaS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImRlbGV0ZShcIit0aGlzLlUuZ2V0TmFtZSgpK1wiKVwifTtNaS5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiKXthPWFbMF0uZW50cmllcy5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEudmF9KTtiLnJlbW92ZSh0aGlzLlUsYSk7cmV0dXJuW05kKCldfTtmdW5jdGlvbiBOaShhLGIpe1MuY2FsbCh0aGlzLDAsLTEpO3RoaXMudGFibGU9Yjt0aGlzLkM9YS5iKHhjKX1yKE5pLFMpO05pLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiZ2V0X3Jvd19jb3VudChcIit0aGlzLnRhYmxlLmdldE5hbWUoKStcIilcIn07TmkucHJvdG90eXBlLmNhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5DLmdldChuZih0aGlzLnRhYmxlKSksYj1uZXcgRyhbXSxbdGhpcy50YWJsZS5nZXROYW1lKCldKSxjPWJoKCksYT1hLlkoKS5pYTtudWxsPT09Yi4kYSYmKGIuJGE9eSgpKTtiLiRhLnNldChjLmooKSxhKTtyZXR1cm5bYl19O2Z1bmN0aW9uIE9pKGEsYil7Uy5jYWxsKHRoaXMsMCwtMSk7dGhpcy5WPWEuYih3Yyk7dGhpcy5DPWEuYih4Yyk7dGhpcy50YWJsZT1ifXIoT2ksUyk7T2kucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9XCJ0YWJsZV9hY2Nlc3MoXCIrdGhpcy50YWJsZS5nZXROYW1lKCk7bnVsbD09PXRoaXMudGFibGUuS2F8fChhKz1cIiBhcyBcIit0aGlzLnRhYmxlLkthKTtyZXR1cm4gYStcIilcIn07T2kucHJvdG90eXBlLmNhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5DLmdldChuZih0aGlzLnRhYmxlKSkuVmEoKTtyZXR1cm5bUWQoRWYodGhpcy5WLGEpLFtUZCh0aGlzLnRhYmxlKV0pXX07ZnVuY3Rpb24gUGkoYSl7dGhpcy5jPWF9cihQaSxHaCk7UGkucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7dGhpcy5IPWE7aWYoIXRoaXMuSGQoYikpcmV0dXJuIGE7YT1IZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgT2l9KVswXTtiPW5ldyBOaSh0aGlzLmMsYS50YWJsZSk7TWcoYSxhLGIsYik7cmV0dXJuIHRoaXMuSH07UGkucHJvdG90eXBlLkhkPWZ1bmN0aW9uKGEpe3JldHVybiAxPT1hLmYubGVuZ3RoJiYxPT1hLmZyb20ubGVuZ3RoJiZudWxsPT1hLncmJm51bGw9PWEuWCYmbnVsbD09YS5MJiZudWxsPT1hLnJhPyhhPWEuZlswXSxhIGluc3RhbmNlb2YgUiYmXCJDT1VOVFwiPT1hLkxiJiZhLmNoaWxkIGluc3RhbmNlb2YgYWgpOiExfTtmdW5jdGlvbiBRaShhKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuUmU9YX1yKFFpLFMpO1FpLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiZ3JvdXBCeShcIit0aGlzLlJlLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5qKCl9KS50b1N0cmluZygpK1wiKVwifTtRaS5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7cmV0dXJuIFJpKHRoaXMsYVswXSl9O2Z1bmN0aW9uIFJpKGEsYil7dmFyIGM9bmV3IGNkLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuUmUubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBIKGEsYil9LHRoaXMpLmpvaW4oXCIsXCIpfS5iaW5kKGEpO2IuZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Muc2V0KGQoYSksYSl9LGEpO3JldHVybiBjLmtleXMoKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBHKGMuZ2V0KGEpLGIudSgpKX0sYSl9O2Z1bmN0aW9uIFNpKGEsYixjKXtTLmNhbGwodGhpcywwLDApO3RoaXMuQz1hLmIoeGMpO3RoaXMuVj1hLmIod2MpO3RoaXMuTz1iO3RoaXMuUmI9Yzt0aGlzLkRkPVwiZXFcIj09dGhpcy5PLkY/MDoyO3RoaXMuVWU9bnVsbH1yKFNpLFMpO3ZhciBUaT1bXCJoYXNoXCIsXCJpbmRleF9uZXN0ZWRfbG9vcFwiLFwibmVzdGVkX2xvb3BcIl07U2kucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJqb2luKHR5cGU6IFwiKyh0aGlzLlJiP1wib3V0ZXJcIjpcImlubmVyXCIpK1wiLCBpbXBsOiBcIitUaVt0aGlzLkRkXStcIiwgXCIrdGhpcy5PLnRvU3RyaW5nKCkrXCIpXCJ9O1xuU2kucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe3N3aXRjaCh0aGlzLkRkKXtjYXNlIDA6cmV0dXJuW1ZnKHRoaXMuTyxhWzBdLGFbMV0sdGhpcy5SYildO2Nhc2UgMTpyZXR1cm5bV2codGhpcy5PLGFbMF0sYVsxXSx0aGlzLlVlLHRoaXMuVildO2RlZmF1bHQ6dmFyIGI9dGhpcy5PLGM9YVswXTthPWFbMV07dmFyIGQ9dGhpcy5SYixlPVtjLGFdO2R8fChlPVNnKGIsYyxhKSk7Yz1lWzBdO2E9ZVsxXTtmb3IodmFyIGU9W10sZj1jLnUoKSxoPWEudSgpLGw9Yy5lbnRyaWVzLmxlbmd0aCxwPWEuZW50cmllcy5sZW5ndGgsTD1wKzI1Ni0xPj44LHNhPTA7c2E8TDspe2Zvcih2YXIgY2E9MDtjYTxsO2NhKyspe3ZhciBDYj0hMSxkZz1IKGMuZW50cmllc1tjYV0sYi5nYSk7aWYobnVsbCE9PWRnKWZvcih2YXIgV2k9TWF0aC5taW4oc2ErMTw8OCxwKSxEYj1zYTw8ODtEYjxXaTtEYisrKWlmKGIudmMoZGcsSChhLmVudHJpZXNbRGJdLGIubWEpKSl7dmFyIENiPSEwLFRjPVZkKGMuZW50cmllc1tjYV0sXG5mLGEuZW50cmllc1tEYl0saCk7ZS5wdXNoKFRjKX1kJiYhQ2ImJmUucHVzaChVZyhiLGMuZW50cmllc1tjYV0sZikpfXNhKyt9Yj1jLnUoKS5jb25jYXQoYS51KCkpO3JldHVybltuZXcgRyhlLGIpXX19O2Z1bmN0aW9uIFVpKGEsYil7YS5EZD0xO3ZhciBjPWEuQy5nZXQoYi5DYSgpLmooKSk7YS5VZT17ZGc6Yix3ZzpiPT1hLk8uZ2E/YS5PLm1hOmEuTy5nYSxpbmRleDpjfX07ZnVuY3Rpb24gVmkoYSl7Uy5jYWxsKHRoaXMsMCwtMSk7dGhpcy5sZj1hfXIoVmksUyk7VmkucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJub19vcF9zdGVwKFwiK3RoaXMubGZbMF0udSgpLmpvaW4oXCIsXCIpK1wiKVwifTtWaS5wcm90b3R5cGUuY2E9ZyhcImxmXCIpO2Z1bmN0aW9uIFhpKCl7fXIoWGksR2gpO1hpLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe3RoaXMuSD1hO2lmKCF0aGlzLkhkKGIpKXJldHVybiBhO0hnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBTaX0pLmZvckVhY2godGhpcy5HZyx0aGlzKTtyZXR1cm4gdGhpcy5IfTtYaS5wcm90b3R5cGUuSGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIDE8YS5mcm9tLmxlbmd0aH07XG5YaS5wcm90b3R5cGUuR2c9ZnVuY3Rpb24oYSl7aWYoXCJlcVwiPT1hLk8uRiYmIWEuUmIpe3ZhciBiPWZ1bmN0aW9uKGIpe2lmKCEoYiBpbnN0YW5jZW9mIE9pKSlyZXR1cm4gbnVsbDtiPVRkKGIudGFibGUpPT1UZChhLk8ubWEuSSgpKT9hLk8ubWE6YS5PLmdhO3JldHVybiBudWxsPT09Yi5DYSgpP251bGw6Yn0sYz1iKGllKGEsMCkpLGI9YihpZShhLDEpKTtpZihudWxsIT09Y3x8bnVsbCE9PWIpe2I9bnVsbD09PWI/YzpiO1VpKGEsYik7dmFyIGQ9bmV3IEcoW10sW1RkKGIuSSgpKV0pO2xlKGEsbmV3IFZpKFtkXSksYj09Yz8wOjEpfX19O2Z1bmN0aW9uIFlpKGEpe2E9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEucWEoKX0pO2E9eWIuYXBwbHkobnVsbCxhKTt2YXIgYj1bXTt4YihhLGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pO3JldHVybiBifWZ1bmN0aW9uIFppKGEpe3RoaXMuUWI9YX1aaS5wcm90b3R5cGUuYmQ9ZnVuY3Rpb24oKXtyZXR1cm4gMT09dGhpcy5RYi5mLmxlbmd0aD9bRGQoKV06W3RoaXMuUWIuZi5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gRGQoKX0pXX07ZnVuY3Rpb24gJGkoYSxiKXt0aGlzLlFiPWE7dGhpcy5HYT1iO3RoaXMuTGQ9dGhpcy5hZj1udWxsfVxuZnVuY3Rpb24gYWooYSxiKXt2YXIgYz15KCk7YS5HYS5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgZD10aGlzLkdhLmdldChhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHZlKGIsYSl9LHRoaXMpLGY9bmV3IEhkKFtEZCgpXSk7ZC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Y9SWQoZixhLndlKCkpfSk7Yy5zZXQoYSxmKX0sYSk7cmV0dXJuIGN9JGkucHJvdG90eXBlLmJkPWZ1bmN0aW9uKGEpe2lmKHRoaXMuYWY9PWEpcmV0dXJuIHRoaXMuTGQ7Zm9yKHZhciBiPWFqKHRoaXMsYSksYz10aGlzLlFiLmYubGVuZ3RoLTE7MDw9YztjLS0pe3ZhciBkPXRoaXMuUWIuZltjXTtpZihudWxsIT09KGIuZ2V0KGQuYmEuZ2V0TmFtZSgpKXx8bnVsbCkpYnJlYWs7Yi5zZXQoZC5iYS5nZXROYW1lKCksbmV3IEhkKFtEZCgpXSkpfXRoaXMuTGQ9MT09dGhpcy5RYi5mLmxlbmd0aD96KGIpWzBdLnFhKCk6WWkoYmoodGhpcyxiKSk7dGhpcy5hZj1hO3JldHVybiB0aGlzLkxkfTtcbmZ1bmN0aW9uIGJqKGEsYil7dmFyIGM9eSgpLGQ9MDthLlFiLmYuZm9yRWFjaChmdW5jdGlvbihhKXtjLnNldChhLmJhLmdldE5hbWUoKSxkKTtkKyt9KTtyZXR1cm4gZ2MoYikuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBjLmdldChhKS1jLmdldChiKX0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYi5nZXQoYSl9KX07ZnVuY3Rpb24gY2ooYSxiKXt0aGlzLnhkPWI7dGhpcy5DPWEuYih4Yyl9ZnVuY3Rpb24gZGooYSl7YT1hLkMuZ2V0KG5mKGEueGQpKTtyZXR1cm4gTWF0aC5mbG9vciguMDIqYS5ZKCkuaWEpfWZ1bmN0aW9uIGVqKGEsYixjKXtjPWMuZmlsdGVyKGEua2csYSk7aWYoMD09Yy5sZW5ndGgpcmV0dXJuIG51bGw7YT1maihhLGMpO2lmKDA9PWEubGVuZ3RoKXJldHVybiBudWxsO2lmKDE9PWEubGVuZ3RoKXJldHVybiBhWzBdO3ZhciBkPU51bWJlci5NQVhfVkFMVUU7cmV0dXJuIGEucmVkdWNlKGZ1bmN0aW9uKGEsYyl7dmFyIGU9Z2ooYyxiKTtyZXR1cm4gZTxkPyhkPWUsYyk6YX0sbnVsbCl9XG5mdW5jdGlvbiBmaihhLGIpe3JldHVybiBhLnhkLkRhKCkubWFwKGZ1bmN0aW9uKGEpe2E9bmV3IGhqKHRoaXMuQyxhKTtpaihhLGIpO3JldHVybiBhfSxhKS5maWx0ZXIoZnVuY3Rpb24oYSl7aWYobnVsbD09PWEuR2EpYT0hMTtlbHNle2Zvcih2YXIgYj0hMSxjPSEwLGY9MDtmPGEuY2IuZi5sZW5ndGg7ZisrKXt2YXIgaD1hLkdhLmhhcyhhLmNiLmZbZl0uYmEuZ2V0TmFtZSgpKTtpZihiJiZoKXtjPSExO2JyZWFrfWh8fChiPSEwKX1hPWN9cmV0dXJuIGF9KX1jai5wcm90b3R5cGUua2c9ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBxZT8hYS5sZCgpfHxhLkouSSgpIT10aGlzLnhkfHxcImluXCI9PWEuRiYmYS52YWx1ZS5sZW5ndGg+ZGoodGhpcyk/ITE6ITA6YSBpbnN0YW5jZW9mIE9nP2EubGQoKSYmaWUoYSwwKS5KLkkoKT09dGhpcy54ZD9KKGEpLmxlbmd0aDw9ZGoodGhpcyk6ITE6ITF9O1xuZnVuY3Rpb24gaGooYSxiKXt0aGlzLkM9YTt0aGlzLmNiPWI7dGhpcy5lZz1CKHRoaXMuY2IuZi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYmEuZ2V0TmFtZSgpfSkpO3RoaXMuJGQ9dGhpcy5HYT1udWxsfWZ1bmN0aW9uIGpqKGEpe251bGw9PT1hLiRkJiYoYS4kZD1uZXcgJGkoYS5jYixhLkdhKSk7cmV0dXJuIGEuJGR9ZnVuY3Rpb24gaWooYSxiKXtiLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5sYigpWzBdLmdldE5hbWUoKTt0aGlzLmVnLmhhcyhiKSYmKG51bGw9PT10aGlzLkdhJiYodGhpcy5HYT1uZXcgY2QpLHRoaXMuR2Euc2V0KGIsYS5XKCkpKX0sYSl9ZnVuY3Rpb24gZ2ooYSxiKXtiPWpqKGEpLmJkKGIpO3ZhciBjPWEuQy5nZXQoYS5jYi5qKCkpO3JldHVybiBiLnJlZHVjZShmdW5jdGlvbihhLGIpe3JldHVybiBhK2MuWmMoYil9LDApfTtmdW5jdGlvbiBraihhLGIsYyxkKXtTLmNhbGwodGhpcywwLC0xKTt0aGlzLkM9YS5iKHhjKTt0aGlzLmluZGV4PWI7dGhpcy4kZT1jO3RoaXMucGU9ZDt0aGlzLlJjPXRoaXMuUWM9ITF9cihraixTKTtrai5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImluZGV4X3JhbmdlX3NjYW4oXCIrdGhpcy5pbmRleC5qKCkrXCIsID8sIFwiKyh0aGlzLnBlP1wicmV2ZXJzZVwiOlwibmF0dXJhbFwiKSsodGhpcy5RYz9cIiwgbGltaXQ6P1wiOlwiXCIpKyh0aGlzLlJjP1wiLCBza2lwOj9cIjpcIlwiKStcIilcIn07a2oucHJvdG90eXBlLlBjPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMudG9TdHJpbmcoKSxjPXRoaXMuJGUuYmQoYSksYj1iLnJlcGxhY2UoXCI/XCIsYy50b1N0cmluZygpKTt0aGlzLlFjJiYoYj1iLnJlcGxhY2UoXCI/XCIsYS5YLnRvU3RyaW5nKCkpKTt0aGlzLlJjJiYoYj1iLnJlcGxhY2UoXCI/XCIsYS5MLnRvU3RyaW5nKCkpKTtyZXR1cm4gYn07XG5rai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMpe2E9dGhpcy4kZS5iZChjKTtiPXRoaXMuQy5nZXQodGhpcy5pbmRleC5qKCkpO2M9KDE9PWEubGVuZ3RoJiZhWzBdaW5zdGFuY2VvZiBFJiZFZChhWzBdKT9JZihiLmdldChhWzBdLmZyb20pLCExLHRoaXMuUWM/Yy5YOnZvaWQgMCx0aGlzLlJjP2MuTDp2b2lkIDApOmIuVmEoYSx0aGlzLnBlLHRoaXMuUWM/Yy5YOnZvaWQgMCx0aGlzLlJjP2MuTDp2b2lkIDApKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBoYyhhLHt9KX0sdGhpcyk7cmV0dXJuW1FkKGMsW3RoaXMuaW5kZXgubWNdKV19O2Z1bmN0aW9uIGxqKCl7Uy5jYWxsKHRoaXMsMCwwKX1yKGxqLFMpO2xqLnByb3RvdHlwZS50b1N0cmluZz1rKFwibXVsdGlfaW5kZXhfcmFuZ2Vfc2NhbigpXCIpO1xubGoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEpe3ZhciBiPXkoKTthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5lbnRyaWVzLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5zZXQoYS52YS5pZCgpLGEpfSl9KTt2YXIgYz16KGIpO3JldHVybltuZXcgRyhjLGFbMF0udSgpKV19O2Z1bmN0aW9uIG1qKGEpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5qYz1hfXIobWosUyk7bWoucHJvdG90eXBlLnRvU3RyaW5nPWsoXCJzZWxlY3QoPylcIik7bWoucHJvdG90eXBlLlBjPWZ1bmN0aW9uKGEpe2E9dmUoYSx0aGlzLmpjKTtyZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoXCI/XCIsYS50b1N0cmluZygpKX07bWoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bdmUoYyx0aGlzLmpjKS5ldmFsKGFbMF0pXX07ZnVuY3Rpb24gbmooYSxiKXtTLmNhbGwodGhpcywwLDEpO3RoaXMuVj1hLmIod2MpO3RoaXMuVT1ifXIobmosUyk7bmoucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJ0YWJsZV9hY2Nlc3NfYnlfcm93X2lkKFwiK3RoaXMuVS5nZXROYW1lKCkrXCIpXCJ9O25qLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhKXtyZXR1cm5bUWQoRWYodGhpcy5WLEtkKGFbMF0pKSxbVGQodGhpcy5VKV0pXX07ZnVuY3Rpb24gb2ooYSl7dGhpcy5jPWF9cihvaixHaCk7b2oucHJvdG90eXBlLmdiPWZ1bmN0aW9uKGEsYil7dGhpcy5IPWE7SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIE9pfSkuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYz1waihhKTtpZigwIT1jLmxlbmd0aCl7dmFyIGU9ZWoobmV3IGNqKHRoaXMuYyxhLnRhYmxlKSxiLGMubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB2ZShiLGEuamMpfSkpO2lmKG51bGwhPT1lKXt2YXIgZj15KCk7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2Yuc2V0KGEuamMsYSl9LHRoaXMpO3RoaXMuSD1xaih0aGlzLGUsZixhKX19fSx0aGlzKTtyZXR1cm4gdGhpcy5IfTtmdW5jdGlvbiBwaihhKXt2YXIgYj1bXTtmb3IoYT1hLmdldFBhcmVudCgpO2E7KXtpZihhIGluc3RhbmNlb2YgbWopYi5wdXNoKGEpO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIFNpKWJyZWFrO2E9YS5nZXRQYXJlbnQoKX1yZXR1cm4gYn1cbmZ1bmN0aW9uIHFqKGEsYixjLGQpeyhudWxsPT09Yi5HYT9bXTpiLkdhLnZhbHVlcygpKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGMuZ2V0KGEpfSkuZm9yRWFjaChJZyk7Yj1uZXcga2ooYS5jLGIuY2IsamooYiksITEpO2E9bmV3IG5qKGEuYyxkLnRhYmxlKTtLKGEsYik7TWcoZCxkLGEsYik7cmV0dXJuIGIuYmIoKX07ZnVuY3Rpb24gcmooYSxiKXtTLmNhbGwodGhpcywwLC0xKTt0aGlzLkM9YS5iKHhjKTt0aGlzLlU9Yn1yKHJqLFMpO3JqLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiaW5zZXJ0KFwiK3RoaXMuVS5nZXROYW1lKCkrXCIpXCJ9O3JqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyl7c2oodGhpcy5VLGMudmFsdWVzLHRoaXMuQyk7Yi5BYih0aGlzLlUsYy52YWx1ZXMpO3JldHVybltRZChjLnZhbHVlcyxbdGhpcy5VLmdldE5hbWUoKV0pXX07ZnVuY3Rpb24gc2ooYSxiLGMpe2E9YS5NYi5zZDtpZihudWxsPT09YT8wOmEuZlswXS5hdXRvSW5jcmVtZW50KXt2YXIgZD1hLmZbMF0uYmEuZ2V0TmFtZSgpO2M9Yy5nZXQoYS5qKCkpLlkoKS5GYzt2YXIgZT1udWxsPT09Yz8wOmM7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2lmKDA9PWEubVtkXXx8bnVsbD09YS5tW2RdKWUrKyxhLm1bZF09ZX0pfX1cbmZ1bmN0aW9uIHRqKGEsYil7Uy5jYWxsKHRoaXMsMCwtMSk7dGhpcy5DPWEuYih4Yyk7dGhpcy5VPWJ9cih0aixTKTt0ai5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cImluc2VydF9yZXBsYWNlKFwiK3RoaXMuVS5nZXROYW1lKCkrXCIpXCJ9O3RqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyl7c2oodGhpcy5VLGMudmFsdWVzLHRoaXMuQyk7Yi5XZCh0aGlzLlUsYy52YWx1ZXMpO3JldHVybltRZChjLnZhbHVlcyxbdGhpcy5VLmdldE5hbWUoKV0pXX07ZnVuY3Rpb24gdWooKXtTLmNhbGwodGhpcywwLDEpfXIodWosUyk7dWoucHJvdG90eXBlLnRvU3RyaW5nPWsoXCJsaW1pdCg/KVwiKTt1ai5wcm90b3R5cGUuUGM9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKFwiP1wiLGEuWC50b1N0cmluZygpKX07dWoucHJvdG90eXBlLmNhPWZ1bmN0aW9uKGEsYixjKXthWzBdLmVudHJpZXMuc3BsaWNlKGMuWCk7cmV0dXJuIGF9O2Z1bmN0aW9uIHZqKGEpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5OPWF9cih2aixTKTttPXZqLnByb3RvdHlwZTttLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJvcmRlcl9ieShcIitBZSh0aGlzLk4pK1wiKVwifTttLmNhPWZ1bmN0aW9uKGEpe2lmKDE9PWEubGVuZ3RoKXt2YXIgYjtiPWFbMF07Zm9yKHZhciBjPW51bGwsZD0wO2Q8dGhpcy5OLmxlbmd0aDtkKyspe3ZhciBlPWNoKHRoaXMuTltkXS5KKTtpZihudWxsIT09Yi4kYSYmYi4kYS5oYXMoZS5qKCkpKXtjPWU7YnJlYWt9fWI9YzsobnVsbD09PWI/YVswXTpMZChhWzBdLGIpKS5lbnRyaWVzLnNvcnQodGhpcy5UZi5iaW5kKHRoaXMpKX1lbHNlIGEuc29ydCh0aGlzLkpnLmJpbmQodGhpcykpO3JldHVybiBhfTtcbm0uJD1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPS0xO2RvIGYrKyxlPXRoaXMuTltmXS5KLGM9dGhpcy5OW2ZdLm9yZGVyLGQ9YShlKSxlPWIoZSk7d2hpbGUoZD09ZSYmZisxPHRoaXMuTi5sZW5ndGgpO2E9ZDxlPy0xOmQ+ZT8xOjA7cmV0dXJuIDE9PWM/YTotYX07bS5KZz1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLiQoZnVuY3Rpb24oYil7cmV0dXJuIGIgaW5zdGFuY2VvZiBSP0xkKGEsYik6SChhLmVudHJpZXNbYS5lbnRyaWVzLmxlbmd0aC0xXSxiKX0sZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBSP0xkKGIsYSk6SChiLmVudHJpZXNbYi5lbnRyaWVzLmxlbmd0aC0xXSxhKX0pfTttLlRmPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuJChmdW5jdGlvbihiKXtyZXR1cm4gSChhLGIpfSxmdW5jdGlvbihhKXtyZXR1cm4gSChiLGEpfSl9O2Z1bmN0aW9uIHdqKGEsYil7dGhpcy5OYT1hO3RoaXMuSz1ifWZ1bmN0aW9uIHhqKGEpe3JldHVybiBhLksuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFJ9LGEpP3lqKGEpOnpqKGEpfWZ1bmN0aW9uIHlqKGEpe2lmKDE9PWEuSy5sZW5ndGgmJlwiRElTVElOQ1RcIj09YS5LWzBdLkxiKXJldHVybiBhPUxkKGEuTmEsYS5LWzBdKS5lbnRyaWVzLm1hcChmdW5jdGlvbihhKXt2YXIgYj1uZXcgUmQobmV3IGhjKC0xLHt9KSwxPHRoaXMuTmEuTS5zaXplKTtVZChiLHRoaXMuS1swXSxIKGEsdGhpcy5LWzBdLmNoaWxkKSk7cmV0dXJuIGJ9LGEpLG5ldyBHKGEsW10pO3ZhciBiPW5ldyBSZChuZXcgaGMoLTEse30pLDE8YS5OYS5NLnNpemUpO2EuSy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjPWEgaW5zdGFuY2VvZiBSP0xkKHRoaXMuTmEsYSk6SCh0aGlzLk5hLmVudHJpZXNbMF0sYSk7VWQoYixhLGMpfSxhKTtyZXR1cm4gbmV3IEcoW2JdLGEuTmEudSgpKX1cbmZ1bmN0aW9uIHpqKGEpe3ZhciBiPUFycmF5KGEuTmEuZW50cmllcy5sZW5ndGgpLGM9MTxhLk5hLk0uc2l6ZTthLk5hLmVudHJpZXMuZm9yRWFjaChmdW5jdGlvbihhLGUpe2JbZV09bmV3IFJkKG5ldyBoYyhhLnZhLmlkKCkse30pLGMpO3RoaXMuSy5mb3JFYWNoKGZ1bmN0aW9uKGMpe1VkKGJbZV0sYyxIKGEsYykpfSx0aGlzKX0sYSk7cmV0dXJuIG5ldyBHKGIsYS5OYS51KCkpfWZ1bmN0aW9uIEFqKGEsYil7dmFyIGM9YS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHhqKG5ldyB3aihhLGIpKS5lbnRyaWVzWzBdfSk7cmV0dXJuIG5ldyBHKGMsYVswXS51KCkpfTtmdW5jdGlvbiBCaihhLGIpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5mPWE7dGhpcy5QYj1ifXIoQmosUyk7QmoucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIGE9XCJwcm9qZWN0KFwiK3RoaXMuZi50b1N0cmluZygpO2lmKG51bGwhPT10aGlzLlBiKXZhciBiPXRoaXMuUGIubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhLmooKX0pLmpvaW4oXCIsIFwiKSxhPWErKFwiLCBncm91cEJ5KFwiK2IrXCIpXCIpO3JldHVybiBhK1wiKVwifTtCai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSl7MD09YS5sZW5ndGg/YT1bTmQoKV06MT09YS5sZW5ndGg/KGE9YVswXSxhPVswPT10aGlzLmYubGVuZ3RoP2E6eGoobmV3IHdqKGEsdGhpcy5mKSldKTphPVtBaihhLHRoaXMuZildO3JldHVybiBhfTtmdW5jdGlvbiBDaihhKXtyZXR1cm4gYS5mLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBSfSl8fG51bGwhPT1hLlBifTtmdW5jdGlvbiBEaigpe1MuY2FsbCh0aGlzLDAsMSl9cihEaixTKTtEai5wcm90b3R5cGUudG9TdHJpbmc9ayhcInNraXAoPylcIik7RGoucHJvdG90eXBlLlBjPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZShcIj9cIixhLkwudG9TdHJpbmcoKSl9O0RqLnByb3RvdHlwZS5jYT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuW25ldyBHKGFbMF0uZW50cmllcy5zbGljZShjLkwpLGFbMF0udSgpKV19O2Z1bmN0aW9uIEVqKCl7fXIoRWosR2gpO0VqLnByb3RvdHlwZS5nYj1mdW5jdGlvbihhLGIpe2lmKCFuKGIuWCkmJiFuKGIuTCkpcmV0dXJuIGE7dmFyIGM9RmooYSk7aWYobnVsbD09PWMpcmV0dXJuIGE7SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIHVqfHxhIGluc3RhbmNlb2YgRGp9KS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EgaW5zdGFuY2VvZiB1aj9jLlFjPSEwOmMuUmM9ITA7SWcoYSl9LHRoaXMpO3JldHVybiBjLmJiKCl9O2Z1bmN0aW9uIEZqKGEpe2E9SGcoYSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIGtqfSxmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEJqJiZDaihhKXx8YSBpbnN0YW5jZW9mIHZqfHwxIT1KKGEpLmxlbmd0aHx8YSBpbnN0YW5jZW9mIG1qfSk7cmV0dXJuIDA8YS5sZW5ndGg/YVswXTpudWxsfTtmdW5jdGlvbiBHaihhKXt0aGlzLmM9YX1yKEdqLEdoKTtHai5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXt0aGlzLkg9YTt2YXIgYz1Iaih0aGlzLGIpO2lmKDA9PWMubGVuZ3RoKXJldHVybiB0aGlzLkg7dmFyIGQsZT0wO2RvIGQ9Y1tlKytdLGE9SWoodGhpcyxkLGIpO3doaWxlKG51bGw9PT1hJiZlPGMubGVuZ3RoKTtpZihudWxsPT09YSlyZXR1cm4gdGhpcy5IO2I9SmoodGhpcyxhWzBdLmNiLm1jKTtyZXR1cm4gbnVsbD09PWI/dGhpcy5IOnRoaXMuSD1Laih0aGlzLGQsYixhKX07ZnVuY3Rpb24gSGooYSxiKXtyZXR1cm4gSGcoYS5ILGZ1bmN0aW9uKGEpe2lmKCEoYSBpbnN0YW5jZW9mIG1qKSlyZXR1cm4hMTthPXZlKGIsYS5qYyk7cmV0dXJuIGEgaW5zdGFuY2VvZiBPZyYmXCJvclwiPT1hLnBifSl9ZnVuY3Rpb24gSmooYSxiKXtyZXR1cm4gSGcoYS5ILGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgT2kmJmEudGFibGUuZ2V0TmFtZSgpPT1ifSlbMF18fG51bGx9XG5mdW5jdGlvbiBJaihhLGIsYyl7Yj12ZShjLGIuamMpO3ZhciBkPWIudSgpO2lmKDEhPWQuc2l6ZSlyZXR1cm4gbnVsbDt2YXIgZD1DKGQpWzBdLGU9bmV3IGNqKGEuYyxkKSxmPW51bGw7cmV0dXJuIEooYikuZXZlcnkoZnVuY3Rpb24oYSl7YT1laihlLGMsW2FdKTtudWxsPT09YXx8KG51bGw9PT1mP2Y9W2FdOmYucHVzaChhKSk7cmV0dXJuIG51bGwhPT1hfSk/ZjpudWxsfWZ1bmN0aW9uIEtqKGEsYixjLGQpe3ZhciBlPW5ldyBuaihhLmMsYy50YWJsZSksZj1uZXcgbGo7SyhlLGYpO2QuZm9yRWFjaChmdW5jdGlvbihhKXthPW5ldyBraih0aGlzLmMsYS5jYixqaihhKSwhMSk7SyhmLGEpfSxhKTtJZyhiKTtNZyhjLGMsZSxmKTtyZXR1cm4gZi5iYigpfTtmdW5jdGlvbiBMaihhKXt0aGlzLmM9YX1yKExqLEdoKTtMai5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oYSxiKXtiPU1qKGEsYik7aWYobnVsbD09PWIpcmV0dXJuIGE7YTp7dmFyIGM9YjthPU5qKGllKGIsMCkpO2lmKG51bGwhPT1hKXt2YXIgZDtkPWIuTjtmb3IodmFyIGU9bnVsbCxmPWEudGFibGUuRGEoKSxoPTA7aDxmLmxlbmd0aCYmbnVsbD09PWU7aCsrKWU9T2ooZltoXSxkKTtkPWU7aWYobnVsbD09PWQpe2E9YzticmVhayBhfWM9bmV3IGtqKHRoaXMuYyxkLmNiLG5ldyBaaShkLmNiKSxkLlhlKTtkPW5ldyBuaih0aGlzLmMsYS50YWJsZSk7SyhkLGMpO0lnKGIpO2M9TWcoYSxhLGQsYyl9YT1jfWE9PWImJihhPWIsYz1QaihpZShiLDApKSxudWxsIT09YyYmKGQ9T2ooYy5pbmRleCxiLk4pLG51bGwhPT1kJiYoYy5wZT1kLlhlLGE9SWcoYikucGFyZW50KSkpO3JldHVybiBhLmJiKCl9O1xuZnVuY3Rpb24gUGooYSl7YT1IZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2Yga2p9LGZ1bmN0aW9uKGEpe3JldHVybiAxIT1KKGEpLmxlbmd0aH0pO3JldHVybiAwPGEubGVuZ3RoP2FbMF06bnVsbH1mdW5jdGlvbiBOaihhKXthPUhnKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBPaX0sZnVuY3Rpb24oYSl7cmV0dXJuIDEhPUooYSkubGVuZ3RofSk7cmV0dXJuIDA8YS5sZW5ndGg/YVswXTpudWxsfWZ1bmN0aW9uIE1qKGEsYil7cmV0dXJuIG4oYi5OKT9IZyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2Ygdmp9KVswXTpudWxsfWZ1bmN0aW9uIE9qKGEsYil7aWYoYS5mLmxlbmd0aCE9Yi5sZW5ndGh8fCFiLmV2ZXJ5KGZ1bmN0aW9uKGIsZCl7cmV0dXJuIGIuSi5nZXROYW1lKCk9PWEuZltkXS5iYS5nZXROYW1lKCl9KSlyZXR1cm4gbnVsbDtiPVFqKGIsYSk7cmV0dXJuIGJbMF18fGJbMV0/e2NiOmEsWGU6YlsxXX06bnVsbH1cbmZ1bmN0aW9uIFFqKGEsYil7dmFyIGM9YS5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYTw8MXwoMD09Yi5vcmRlcj8wOjEpfSwwKSxkPWIuZi5yZWR1Y2UoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYTw8MXwoMD09Yi5vcmRlcj8wOjEpfSwwKSxjPWNeZDtyZXR1cm5bMD09YyxjPT1NYXRoLnBvdygyLE1hdGgubWF4KGEubGVuZ3RoLGIuZi5sZW5ndGgpKS0xXX07ZnVuY3Rpb24gUmooYSxiLGMpe3RoaXMuSGE9YTt0aGlzLmxlPWI7dGhpcy5WYj1jfVJqLnByb3RvdHlwZS5nYz1mdW5jdGlvbigpe3RoaXMuVmIuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLkhhPWEuZ2IodGhpcy5IYSx0aGlzLmxlKX0sdGhpcyk7cmV0dXJuIHRoaXMuSGF9O2Z1bmN0aW9uIFNqKGEpe1MuY2FsbCh0aGlzLDAsMSk7dGhpcy5VPWF9cihTaixTKTtTai5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cInVwZGF0ZShcIit0aGlzLlUuZ2V0TmFtZSgpK1wiKVwifTtTai5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oYSxiLGMpe2E9YVswXS5lbnRyaWVzLm1hcChmdW5jdGlvbihhKXt2YXIgYj10aGlzLlUua2IoYS52YS5KYSgpKTtjLnNldC5mb3JFYWNoKGZ1bmN0aW9uKGEpe2IubVthLkouZ2V0TmFtZSgpXT1hLnZhbHVlfSx0aGlzKTtyZXR1cm4gYn0sdGhpcyk7Yi51cGRhdGUodGhpcy5VLGEpO3JldHVybltOZCgpXX07ZnVuY3Rpb24gVGooYSl7dGhpcy5jPWE7dGhpcy5yZT1bbmV3IFhpLG5ldyBvaih0aGlzLmMpLG5ldyBHaih0aGlzLmMpLG5ldyBMaih0aGlzLmMpLG5ldyBFaixuZXcgUGkodGhpcy5jKV07dGhpcy5QZD1bbmV3IG9qKHRoaXMuYyldfVRqLnByb3RvdHlwZS5jcmVhdGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmJiKCk7aWYoYyBpbnN0YW5jZW9mIHRofHxjIGluc3RhbmNlb2Ygc2gpcmV0dXJuIFVqKHRoaXMsYSxiKTtpZihjIGluc3RhbmNlb2Ygemh8fGMgaW5zdGFuY2VvZiBEaHx8YyBpbnN0YW5jZW9mIEVoKXJldHVybiBVaih0aGlzLGEsYix0aGlzLnJlKTtpZihjIGluc3RhbmNlb2YgdWh8fGMgaW5zdGFuY2VvZiB2aClyZXR1cm4gVWoodGhpcyxhLGIsdGhpcy5QZCk7dGhyb3cgbmV3IEQoOCk7fTtcbmZ1bmN0aW9uIFVqKGEsYixjLGQpe2E9RmcoYi5iYigpLGEudGcuYmluZChhKSk7bnVsbCE9ZCYmKGE9KG5ldyBSaihhLGMsZCkpLmdjKCkpO3JldHVybiBuZXcgQmUoYSxiLmRhKCkpfVxuVGoucHJvdG90eXBlLnRnPWZ1bmN0aW9uKGEpe2lmKGEgaW5zdGFuY2VvZiB6aClyZXR1cm4gbmV3IEJqKGEuZixhLlBiKTtpZihhIGluc3RhbmNlb2YgQ2gpcmV0dXJuIG5ldyBRaShhLmYpO2lmKGEgaW5zdGFuY2VvZiBCaClyZXR1cm4gbmV3IGdoKGEuZik7aWYoYSBpbnN0YW5jZW9mIEFoKXJldHVybiBuZXcgdmooYS5OKTtpZihhIGluc3RhbmNlb2YgRWgpcmV0dXJuIG5ldyBEajtpZihhIGluc3RhbmNlb2YgRGgpcmV0dXJuIG5ldyB1ajtpZihhIGluc3RhbmNlb2Ygd2gpcmV0dXJuIG5ldyBtaihhLk8uVygpKTtpZihhIGluc3RhbmNlb2YgeWgpcmV0dXJuIG5ldyBMaDtpZihhIGluc3RhbmNlb2YgRmgpcmV0dXJuIG5ldyBTaSh0aGlzLmMsYS5PLGEuUmIpO2lmKGEgaW5zdGFuY2VvZiB4aClyZXR1cm4gbmV3IE9pKHRoaXMuYyxhLnRhYmxlKTtpZihhIGluc3RhbmNlb2YgdWgpcmV0dXJuIG5ldyBNaShhLnRhYmxlKTtpZihhIGluc3RhbmNlb2YgdmgpcmV0dXJuIG5ldyBTaihhLnRhYmxlKTtcbmlmKGEgaW5zdGFuY2VvZiB0aClyZXR1cm4gbmV3IHRqKHRoaXMuYyxhLnRhYmxlKTtpZihhIGluc3RhbmNlb2Ygc2gpcmV0dXJuIG5ldyByaih0aGlzLmMsYS50YWJsZSk7dGhyb3cgbmV3IEQoNTE0KTt9O2Z1bmN0aW9uIFZqKGEpe3RoaXMucWc9bmV3IExpO3RoaXMuRWc9bmV3IFRqKGEpfTtmdW5jdGlvbiBXaigpe3RoaXMuZGY9eSgpfWZ1bmN0aW9uIFhqKGEsYil7dmFyIGM9YS5kZi5nZXQoYi5nZXROYW1lKCkpfHxudWxsO251bGw9PT1jJiYoYz1uZXcgWWosYS5kZi5zZXQoYi5nZXROYW1lKCksYykpO3JldHVybiBjfWZ1bmN0aW9uIFpqKGEsYixjLGQpe2MuZm9yRWFjaChmdW5jdGlvbihhKXthPVhqKHRoaXMsYSk7MD09ZD8oYS5mYj1udWxsLGEud2M9Yik6Mz09ZD8obnVsbD09PWEuWWImJihhLlliPUIoKSksYS5ZYi5hZGQoYiksbnVsbD09PWEuWWEmJihhLllhPUIoKSksYS5ZYS5kZWxldGUoYikpOjE9PWQ/KG51bGw9PT1hLllhJiYoYS5ZYT1CKCkpLGEuWWEuYWRkKGIpKToyPT1kJiYoYS5mYj1iKX0sYSl9XG5mdW5jdGlvbiBhayhhLGIsYyxkKXt2YXIgZT0hMDtjLmZvckVhY2goZnVuY3Rpb24oYSl7aWYoZSl7YT1Yaih0aGlzLGEpO3ZhciBjPW51bGw9PT1hLllhfHwwPT1hLllhLnNpemU7ZT0wPT1kPyhudWxsPT09YS5ZYnx8MD09YS5ZYi5zaXplKSYmYyYmbnVsbD09PWEud2MmJm51bGwhPT1hLmZiJiZhLmZiPT1iOjM9PWQ/bnVsbD09PWEud2MmJm51bGw9PT1hLmZiJiZudWxsIT09YS5ZYSYmYS5ZYS5oYXMoYik6MT09ZD9udWxsPT09YS5mYjpjJiYobnVsbD09PWEuZmJ8fGEuZmI9PWIpfX0sYSk7cmV0dXJuIGV9ZnVuY3Rpb24gYmsoYSxiLGMsZCl7dmFyIGU9YWsoYSxiLGMsZCk7ZSYmWmooYSxiLGMsZCk7cmV0dXJuIGV9V2oucHJvdG90eXBlLnJlbGVhc2VMb2NrPWZ1bmN0aW9uKGEsYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe1hqKHRoaXMsYikucmVsZWFzZUxvY2soYSl9LHRoaXMpfTtcbmZ1bmN0aW9uIGNrKGEsYil7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe1hqKHRoaXMsYSkuZmI9bnVsbH0sYSl9ZnVuY3Rpb24gWWooKXt0aGlzLlliPXRoaXMuWWE9dGhpcy5mYj10aGlzLndjPW51bGx9WWoucHJvdG90eXBlLnJlbGVhc2VMb2NrPWZ1bmN0aW9uKGEpe3RoaXMud2M9PWEmJih0aGlzLndjPW51bGwpO3RoaXMuZmI9PWEmJih0aGlzLmZiPW51bGwpO251bGw9PT10aGlzLllhfHx0aGlzLllhLmRlbGV0ZShhKTtudWxsPT09dGhpcy5ZYnx8dGhpcy5ZYi5kZWxldGUoYSl9O2Z1bmN0aW9uIGRrKCl7dGhpcy5VYj1uZXcgZWs7dGhpcy5FYz1uZXcgV2p9ZnVuY3Rpb24gSmUoYSxiKXsoMj5iLmdldFByaW9yaXR5KCl8fDI+Yi5nZXRQcmlvcml0eSgpKSYmY2soYS5FYyxiLmRhKCkpO2EuVWIuQWIoYik7ZmsoYSk7cmV0dXJuIGIuRGIuaGF9ZnVuY3Rpb24gZmsoYSl7Zm9yKHZhciBiPWEuVWIucWEoKSxjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY107aWYoMD09ZC5HKCk/Z2soYSxkLDEsMyk6Z2soYSxkLDIsMCkpe2EuVWIucmVtb3ZlKGQpO3ZhciBlPWE7ZC5leGVjKCkudGhlbihlLkJnLmJpbmQoZSxkKSxlLkFnLmJpbmQoZSxkKSl9fX1mdW5jdGlvbiBnayhhLGIsYyxkKXt2YXIgZT0hMTtiayhhLkVjLGIuVygpLGIuZGEoKSxjKSYmKGU9YmsoYS5FYyxiLlcoKSxiLmRhKCksZCkpO3JldHVybiBlfWRrLnByb3RvdHlwZS5CZz1mdW5jdGlvbihhLGIpe3RoaXMuRWMucmVsZWFzZUxvY2soYS5XKCksYS5kYSgpKTthLkRiLnJlc29sdmUoYik7ZmsodGhpcyl9O1xuZGsucHJvdG90eXBlLkFnPWZ1bmN0aW9uKGEsYil7dGhpcy5FYy5yZWxlYXNlTG9jayhhLlcoKSxhLmRhKCkpO2EuRGIucmVqZWN0KGIpO2ZrKHRoaXMpfTtmdW5jdGlvbiBlaygpe3RoaXMuVWI9W119ZWsucHJvdG90eXBlLkFiPWZ1bmN0aW9uKGEpe0hmKHRoaXMuVWIsYSxmdW5jdGlvbihhLGMpe3ZhciBiPWEuZ2V0UHJpb3JpdHkoKS1jLmdldFByaW9yaXR5KCk7cmV0dXJuIDA9PWI/YS5XKCktYy5XKCk6Yn0pfTtlay5wcm90b3R5cGUucWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5VYi5zbGljZSgpfTtlay5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuVWI7YT14YShiLGEpO3ZhciBjOyhjPTA8PWEpJiZBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYixhLDEpO3JldHVybiBjfTtmdW5jdGlvbiBoaygpe3RoaXMuTmM9eSgpfXZhciBpaztmdW5jdGlvbiBqaygpe2lrfHwoaWs9bmV3IGhrKTtyZXR1cm4gaWt9aGsucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5OYy5jbGVhcigpfTtoay5wcm90b3R5cGUuY2xlYXI9aGsucHJvdG90eXBlLmNsZWFyO2hrLnByb3RvdHlwZS5yYj1mdW5jdGlvbihhLGIpe3RoaXMuTmMuc2V0KGEudG9TdHJpbmcoKSxiKTtyZXR1cm4gYn07aGsucHJvdG90eXBlLnJlZ2lzdGVyU2VydmljZT1oay5wcm90b3R5cGUucmI7aGsucHJvdG90eXBlLmI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5OYy5nZXQoYS50b1N0cmluZygpKXx8bnVsbDtpZihudWxsPT09Yil0aHJvdyBuZXcgRCg3LGEudG9TdHJpbmcoKSk7cmV0dXJuIGJ9O2hrLnByb3RvdHlwZS5nZXRTZXJ2aWNlPWhrLnByb3RvdHlwZS5iO2hrLnByb3RvdHlwZS5tZD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5OYy5oYXMoYS50b1N0cmluZygpKX07XG5oay5wcm90b3R5cGUuaXNSZWdpc3RlcmVkPWhrLnByb3RvdHlwZS5tZDtmdW5jdGlvbiBraygpe3ZhciBhPWprKCk7cmV0dXJuIGdjKGEuTmMpfTtmdW5jdGlvbiBsayhhLGIsYyxkKXtyZXR1cm4gbnVsbCE9YT9udWxsIT1iP21rKGEsYixjLGQpOm5rKGEpOm9rKCl9ZnVuY3Rpb24gcGsoYSl7dmFyIGI9XCJcIjt0cnl7Yj1KU09OLnN0cmluZ2lmeShhKX1jYXRjaChjKXt9cmV0dXJuIGJ9ZnVuY3Rpb24gcWsoYSl7dmFyIGI9amsoKTthPW5ldyB1YyhcIm5zX1wiK2EpO3JldHVybiBiLm1kKGEpP2IuYihhKTpudWxsfWZ1bmN0aW9uIG9rKCl7dmFyIGE9e307a2soKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe1wibnNfXCI9PWIuc3Vic3RyaW5nKDAsMykmJihiPWIuc3Vic3RyaW5nKDMpLGFbYl09cWsoYikuYihCYykudmVyc2lvbigpKX0pO3JldHVybiBwayhhKX1mdW5jdGlvbiBuayhhKXthPXFrKGEpO3ZhciBiPXt9O2lmKG51bGwhPWEpe3ZhciBjPWEuYih4Yyk7YS5iKEJjKS5vYSgpLmZvckVhY2goZnVuY3Rpb24oYSl7YlthLmdldE5hbWUoKV09Yy5nZXQobmYoYSkpLlkoKS5pYX0pfXJldHVybiBwayhiKX1cbmZ1bmN0aW9uIG1rKGEsYixjLGQpe3ZhciBlPXFrKGEpO2E9W107aWYobnVsbCE9ZSl7dmFyIGY9bnVsbDt0cnl7Zj1lLmIoQmMpLnRhYmxlKGIpfWNhdGNoKGgpe31udWxsIT1mJiYoYj1lLmIoeGMpLGU9ZS5iKHdjKSxjPWIuZ2V0KG5mKGYpKS5WYSh2b2lkIDAsITEsYyxkKSxjLmxlbmd0aCYmKGE9RWYoZSxjKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEubX0pKSl9cmV0dXJuIHBrKGEpfTtmdW5jdGlvbiByayhhLGIpe3RoaXMuUWQ9ZWUoKTt0aGlzLm1lPWE7dGhpcy5vZD1iO3RoaXMuSz1zayh0aGlzKX1mdW5jdGlvbiBzayhhKXtpZigwPGEubWUuZi5sZW5ndGgpcmV0dXJuIGEubWUuZjt2YXIgYj1bXTthLm1lLmZyb20uZm9yRWFjaChmdW5jdGlvbihhKXthLmxiKCkuZm9yRWFjaChmdW5jdGlvbihhKXtiLnB1c2goYSl9KX0pO3JldHVybiBifXJrLnByb3RvdHlwZS4kPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuSy5ldmVyeShmdW5jdGlvbihjKXtyZXR1cm4gNj09Yy5HKCl8fDA9PWMuRygpP0goYSxjKT09PUgoYixjKTpmZSh0aGlzLlFkLGMuRygpLFwiZXFcIikoSChhLGMpLEgoYixjKSl9LHRoaXMpfTtcbmZ1bmN0aW9uIHRrKGEsYixjKXt2YXIgZD1udWxsPT09Yj9bXTpiLmVudHJpZXMsZT1wYihkLGMuZW50cmllcyxhLiQuYmluZChhKSxmdW5jdGlvbihhKXtyZXR1cm4gZFthXX0pO2I9W107Zm9yKHZhciBmPTAsaD0wO2g8ZC5sZW5ndGg7aCsrKXt2YXIgbD1kW2hdO2VbZl09PWw/ZisrOihsPWEub2Quc3BsaWNlKGYsMSksbD11ayhoLGwsMCxhLm9kKSxiLnB1c2gobCkpfWU9cGIoZCxjLmVudHJpZXMsYS4kLmJpbmQoYSksZnVuY3Rpb24oYSxiKXtyZXR1cm4gYy5lbnRyaWVzW2JdfSk7Zm9yKGg9Zj0wO2g8Yy5lbnRyaWVzLmxlbmd0aDtoKyspbD1jLmVudHJpZXNbaF0sZVtmXT09bD9mKys6KGEub2Quc3BsaWNlKGgsMCxsLnZhLm0pLGw9dWsoaCxbXSwxLGEub2QpLGIucHVzaChsKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gdWsoYSxiLGMsZCl7cmV0dXJue2FkZGVkQ291bnQ6YyxpbmRleDphLG9iamVjdDpkLHJlbW92ZWQ6Yix0eXBlOlwic3BsaWNlXCJ9fTtmdW5jdGlvbiB2aygpe3RoaXMuZmM9eSgpfXZrLnByb3RvdHlwZS5DZD1mdW5jdGlvbihhLGIpe3ZhciBjPWthKGEucXVlcnkpLnRvU3RyaW5nKCksZD10aGlzLmZjLmdldChjKXx8bnVsbDtudWxsPT09ZCYmKGQ9bmV3IHdrKGEpLHRoaXMuZmMuc2V0KGMsZCkpO2QuQ2QoYil9O3ZrLnByb3RvdHlwZS5uZT1mdW5jdGlvbihhLGIpe2E9a2EoYS5xdWVyeSkudG9TdHJpbmcoKTt2YXIgYz10aGlzLmZjLmdldChhKXx8bnVsbDtjLm5lKGIpOzA8Yy5IYy5zaXplfHx0aGlzLmZjLmRlbGV0ZShhKX07ZnVuY3Rpb24gSWUoYSxiKXt2YXIgYz1CKCk7Yi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2MuYWRkKGEuZ2V0TmFtZSgpKX0pO3ZhciBkPVtdO2EuZmMuZm9yRWFjaChmdW5jdGlvbihhKXthPWEuQmMoKTthLmNvbnRleHQuZnJvbS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBjLmhhcyhhLmdldE5hbWUoKSl9KSYmZC5wdXNoKGEpfSk7cmV0dXJuIGR9XG5mdW5jdGlvbiBHZShhLGIsYyl7Yj1rYShudWxsIT1iLldjP2IuV2M6YikudG9TdHJpbmcoKTthPWEuZmMuZ2V0KGIpfHxudWxsO251bGwhPT1hJiZ4ayhhLGMpfWZ1bmN0aW9uIHdrKGEpe3RoaXMuSGY9YTt0aGlzLkhjPUIoKTt0aGlzLnlnPVtdO3RoaXMuYmY9bnVsbDt0aGlzLlJmPW5ldyByayhhLnF1ZXJ5LHRoaXMueWcpfXdrLnByb3RvdHlwZS5DZD1mdW5jdGlvbihhKXt0aGlzLkhjLmhhcyhhKXx8dGhpcy5IYy5hZGQoYSl9O3drLnByb3RvdHlwZS5uZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5IYy5kZWxldGUoYSl9O3drLnByb3RvdHlwZS5CYz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuSGY7cmV0dXJue2NvbnRleHQ6YS5xdWVyeSxqZTpqaShhKX19O2Z1bmN0aW9uIHhrKGEsYil7dmFyIGM9dGsoYS5SZixhLmJmLGIpO2EuYmY9YjswPGMubGVuZ3RoJiZhLkhjLmZvckVhY2goZnVuY3Rpb24oYSl7YShjKX0pfTtmdW5jdGlvbiB5ayhhLGIpe3ZhciBjPWEuYihCYyksZD1ifHx7fTtiPW5ldyBEZihjKTthLnJiKHdjLGIpO2I9bnVsbDt2YXIgZT0hMTtudWxsIT1kLnN0b3JlVHlwZT9iPWQuc3RvcmVUeXBlOihiPWVjKCksYj1iLmZnPzA6Yi5VZz80OjEpO3N3aXRjaChiKXtjYXNlIDA6Yj1uZXcgaGYoYSxjKTticmVhaztjYXNlIDE6Yj1uZXcgcWYoYyk7YnJlYWs7Y2FzZSA1OmI9bmV3IHNmKGMpO2JyZWFrO2Nhc2UgNDpiPW5ldyBBZihhLGMsZC53ZWJTcWxEYlNpemUpO2JyZWFrO2Nhc2UgMzpiPW5ldyBWZShjLGQuZmlyZWJhc2UpO2U9ITA7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRCgzMDApO31hLnJiKHZjLGIpO3ZhciBmPW5ldyBFZzthLnJiKHhjLGYpO3JldHVybiBiLkVhKGQub25VcGdyYWRlKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGI9bmV3IFZqKGEpO2EucmIoeWMsYik7Yj1uZXcgZGs7YS5yYih6YyxiKTtiPW5ldyB2azthLnJiKEFjLGIpO3JldHVybiBmLkVhKGMpfSkudGhlbihmdW5jdGlvbigpe2lmKGUpe3ZhciBiPVxubmV3IEtlKGEpO2IuT2Euc3Vic2NyaWJlKGIuZWUuYmluZChiKSl9ZC5lbmFibGVJbnNwZWN0b3ImJih3aW5kb3cudG9wW1wiI2xmSW5zcGVjdFwiXT1sayk7cmV0dXJuKG5ldyB4ZyhhKSkuRWEoYyl9KX07ZnVuY3Rpb24gemsoYSl7dGhpcy5jPWE7dGhpcy5nPWEuYihCYyk7dGhpcy5hYT1CKHRoaXMuZy5vYSgpKTt0aGlzLkRiPXcoKX1mdW5jdGlvbiBBayhhKXt2YXIgYj1hLmMuYih4YyksYz1hLmMuYih3YyksZD17fTthLmcub2EoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBlPWIuZ2V0KG5mKGEpKS5WYSgpLGU9RWYoYyxlKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEubX0pO2RbYS5nZXROYW1lKCldPWV9KTtyZXR1cm57bmFtZTphLmcubmFtZSgpLHZlcnNpb246YS5nLnZlcnNpb24oKSx0YWJsZXM6ZH19bT16ay5wcm90b3R5cGU7bS5leGVjPWZ1bmN0aW9uKCl7dmFyIGE9QWsodGhpcyksYT1uZXcgUmQobmV3IGhjKC0xLGEpLCEwKTtyZXR1cm4gdihbbmV3IEcoW2FdLFtdKV0pfTttLkc9aygwKTttLmRhPWcoXCJhYVwiKTttLlc9ZnVuY3Rpb24oKXtyZXR1cm4ga2EodGhpcyl9O20uZ2V0UHJpb3JpdHk9aygwKTtmdW5jdGlvbiBCayhhLGIpe3RoaXMuYz1hO3RoaXMuZz1hLmIoQmMpO3RoaXMuYWE9Qih0aGlzLmcub2EoKSk7dGhpcy5EYj13KCk7dGhpcy5CYT1iO3RoaXMuT2E9YS5iKHZjKTt0aGlzLlY9YS5iKHdjKTt0aGlzLkM9YS5iKHhjKX1tPUJrLnByb3RvdHlwZTtcbm0uZXhlYz1mdW5jdGlvbigpe2lmKCEodGhpcy5PYSBpbnN0YW5jZW9mIGhmfHx0aGlzLk9hIGluc3RhbmNlb2YgcWZ8fHRoaXMuT2EgaW5zdGFuY2VvZiBBZikpdGhyb3cgbmV3IEQoMzAwKTt2YXIgYTthOnthPXRoaXMuZy5vYSgpO2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7KytiKWlmKDA8dGhpcy5DLmdldChuZihhW2JdKSkuWSgpLmlhKXthPSExO2JyZWFrIGF9YT0hMH1pZighYSl0aHJvdyBuZXcgRCgxMTApO2lmKHRoaXMuZy5uYW1lKCkhPXRoaXMuQmEubmFtZXx8dGhpcy5nLnZlcnNpb24oKSE9dGhpcy5CYS52ZXJzaW9uKXRocm93IG5ldyBEKDExMSk7aWYobnVsbD09dGhpcy5CYS50YWJsZXMpdGhyb3cgbmV3IEQoMTEyKTtyZXR1cm4gQ2sodGhpcyl9O20uRz1rKDEpO20uZGE9ZyhcImFhXCIpO20uVz1mdW5jdGlvbigpe3JldHVybiBrYSh0aGlzKX07bS5nZXRQcmlvcml0eT1rKDApO1xuZnVuY3Rpb24gQ2soYSl7dmFyIGI9bmV3IHVkKGEuYyxhLmFhKSxiPWEuT2EuRmIoYS5HKCksQyhhLmFhKSxiKSxjO2ZvcihjIGluIGEuQmEudGFibGVzKXt2YXIgZD1hLmcudGFibGUoYyksZT1hLkJhLnRhYmxlc1tjXS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGQueGIoYSl9KSxmPWIuSShjLGQua2IsMCk7YS5WLldiKGMsZSk7dmFyIGg9YS5DLmxjLmdldChjKXx8W107ZS5mb3JFYWNoKGZ1bmN0aW9uKGEpe2guZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgYz1hLm5iKGIuZ2V0TmFtZSgpKTtiLmFkZChjLGEuaWQoKSl9KX0pO2YucHV0KGUpfXJldHVybiBiLmthKCl9O2Z1bmN0aW9uIERrKGEsYil7dGhpcy5jPWE7dGhpcy5PYT1hLmIodmMpO3RoaXMuSWE9YS5iKHpjKTt0aGlzLkliPWEuYihBYyk7dGhpcy5hYT1CKGIpO3RoaXMuUmE9bmV3IHVkKHRoaXMuYyx0aGlzLmFhKTt0aGlzLkRiPXcoKTt0aGlzLnhjPXcoKTt0aGlzLnplPXcoKX1tPURrLnByb3RvdHlwZTttLmV4ZWM9ZnVuY3Rpb24oKXt0aGlzLnplLnJlc29sdmUoKTtyZXR1cm4gdGhpcy54Yy5oYX07bS5HPWsoMSk7bS5kYT1nKFwiYWFcIik7bS5XPWZ1bmN0aW9uKCl7cmV0dXJuIGthKHRoaXMpfTttLmdldFByaW9yaXR5PWsoMik7ZnVuY3Rpb24gRWsoYSl7SmUoYS5JYSxhKTtyZXR1cm4gYS56ZS5oYX1cbmZ1bmN0aW9uIEZrKGEsYil7Yj1iLkJjKCk7cmV0dXJuIGIuamUuYmIoKS5leGVjKGEuUmEsYi5jb250ZXh0KS50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBKZChhWzBdKX0sZnVuY3Rpb24oYSl7dGhpcy5SYS5KYigpO3ZhciBiPW5ldyBqYihhLm5hbWUpO3RoaXMueGMucmVqZWN0KGIpO3Rocm93IGE7fS5iaW5kKGEpKX1tLmthPWZ1bmN0aW9uKCl7dGhpcy5qYT10aGlzLk9hLkZiKHRoaXMuRygpLEModGhpcy5hYSksdGhpcy5SYSk7dGhpcy5qYS5rYSgpLnRoZW4oZnVuY3Rpb24oKXt0aGlzLk1jKCk7dGhpcy54Yy5yZXNvbHZlKCl9LmJpbmQodGhpcyksZnVuY3Rpb24oYSl7dGhpcy5SYS5KYigpO3RoaXMueGMucmVqZWN0KGEpfS5iaW5kKHRoaXMpKTtyZXR1cm4gdGhpcy5EYi5oYX07bS5KYj1mdW5jdGlvbigpe3RoaXMuUmEuSmIoKTt0aGlzLnhjLnJlc29sdmUoKTtyZXR1cm4gdGhpcy5EYi5oYX07XG5tLk1jPWZ1bmN0aW9uKCl7dmFyIGE9SWUodGhpcy5JYix0aGlzLmFhKTswIT1hLmxlbmd0aCYmKGE9bmV3IEZlKHRoaXMuYyxhKSxKZSh0aGlzLklhLGEpKX07bS5ZPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDtudWxsIT10aGlzLmphJiYoYT10aGlzLmphLlkoKSk7cmV0dXJuIG51bGw9PT1hP25ldyBBKCExLDAsMCwwLDApOmF9O2Z1bmN0aW9uIFYoYSl7dGhpcy5jPWE7dGhpcy5JYT1hLmIoemMpO3RoaXMuS2I9bnVsbDt0aGlzLlRhPTA7MD09R2suc2l6ZSYmKEdrLnNldCgwLEIoWzEsNF0pKSxHay5zZXQoMSxCKFsyXSkpLEdrLnNldCgyLEIoWzMsNSw2XSkpLEdrLnNldCgzLEIoWzIsN10pKSxHay5zZXQoNCxCKFs3XSkpLEdrLnNldCg1LEIoWzddKSksR2suc2V0KDYsQihbN10pKSl9cShcImxmLnByb2MuVHJhbnNhY3Rpb25cIixWKTt2YXIgR2s9eSgpO2Z1bmN0aW9uIEhrKGEsYil7dmFyIGM9R2suZ2V0KGEuVGEpfHxudWxsO2lmKG51bGw9PT1jfHwhYy5oYXMoYikpdGhyb3cgbmV3IEQoMTA3LGEuVGEsYik7YS5UYT1ifVxuVi5wcm90b3R5cGUuZXhlYz1mdW5jdGlvbihhKXtIayh0aGlzLDQpO3ZhciBiPVtdO3RyeXthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5hYigpO2IucHVzaChhLkJjKCkpfSx0aGlzKX1jYXRjaChjKXtyZXR1cm4gSGsodGhpcyw3KSxiYihjKX10aGlzLktiPW5ldyBNaCh0aGlzLmMsYik7cmV0dXJuIEplKHRoaXMuSWEsdGhpcy5LYikudGhlbihmdW5jdGlvbihhKXtIayh0aGlzLDcpO3JldHVybiBhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gSmQoYSl9KX0uYmluZCh0aGlzKSxmdW5jdGlvbihhKXtIayh0aGlzLDcpO3Rocm93IGE7fS5iaW5kKHRoaXMpKX07Vi5wcm90b3R5cGUuZXhlYz1WLnByb3RvdHlwZS5leGVjO1YucHJvdG90eXBlLkZmPWZ1bmN0aW9uKGEpe0hrKHRoaXMsMSk7dGhpcy5LYj1uZXcgRGsodGhpcy5jLGEpO3JldHVybiBFayh0aGlzLktiKS50aGVuKGZ1bmN0aW9uKCl7SGsodGhpcywyKX0uYmluZCh0aGlzKSl9O1YucHJvdG90eXBlLmJlZ2luPVYucHJvdG90eXBlLkZmO1xuVi5wcm90b3R5cGUuRWY9ZnVuY3Rpb24oYSl7SGsodGhpcywzKTt0cnl7YS5hYigpfWNhdGNoKGIpe3JldHVybiBIayh0aGlzLDcpLGJiKGIpfXJldHVybiBGayh0aGlzLktiLGEpLnRoZW4oZnVuY3Rpb24oYSl7SGsodGhpcywyKTtyZXR1cm4gYX0uYmluZCh0aGlzKSxmdW5jdGlvbihhKXtIayh0aGlzLDcpO3Rocm93IGE7fS5iaW5kKHRoaXMpKX07Vi5wcm90b3R5cGUuYXR0YWNoPVYucHJvdG90eXBlLkVmO1YucHJvdG90eXBlLmthPWZ1bmN0aW9uKCl7SGsodGhpcyw1KTtyZXR1cm4gdGhpcy5LYi5rYSgpLnRoZW4oZnVuY3Rpb24oKXtIayh0aGlzLDcpfS5iaW5kKHRoaXMpKX07Vi5wcm90b3R5cGUuY29tbWl0PVYucHJvdG90eXBlLmthO1YucHJvdG90eXBlLkpiPWZ1bmN0aW9uKCl7SGsodGhpcyw2KTtyZXR1cm4gdGhpcy5LYi5KYigpLnRoZW4oZnVuY3Rpb24oKXtIayh0aGlzLDcpfS5iaW5kKHRoaXMpKX07Vi5wcm90b3R5cGUucm9sbGJhY2s9Vi5wcm90b3R5cGUuSmI7XG5WLnByb3RvdHlwZS5ZPWZ1bmN0aW9uKCl7aWYoNyE9dGhpcy5UYSl0aHJvdyBuZXcgRCgxMDUpO3JldHVybiB0aGlzLktiLlkoKX07Vi5wcm90b3R5cGUuc3RhdHM9Vi5wcm90b3R5cGUuWTtmdW5jdGlvbiBXKGEpe3RoaXMuYz1hO3RoaXMuZz1hLmIoQmMpO3RoaXMuaGQ9ITF9cShcImxmLnByb2MuRGF0YWJhc2VcIixXKTtXLnByb3RvdHlwZS5FYT1mdW5jdGlvbihhKXt0aGlzLmMucmIoQmMsdGhpcy5nKTtyZXR1cm4geWsodGhpcy5jLGEpLnRoZW4oZnVuY3Rpb24oKXt0aGlzLmhkPSEwO3RoaXMuSWE9dGhpcy5jLmIoemMpO3JldHVybiB0aGlzfS5iaW5kKHRoaXMpKX07Vy5wcm90b3R5cGUuaW5pdD1XLnByb3RvdHlwZS5FYTtXLnByb3RvdHlwZS56Yj1nKFwiZ1wiKTtXLnByb3RvdHlwZS5nZXRTY2hlbWE9Vy5wcm90b3R5cGUuemI7ZnVuY3Rpb24gSWsoYSl7aWYoIWEuaGQpdGhyb3cgbmV3IEQoMik7fVcucHJvdG90eXBlLnNlbGVjdD1mdW5jdGlvbihhKXtJayh0aGlzKTtyZXR1cm4gbmV3IFUodGhpcy5jLDEhPWFyZ3VtZW50cy5sZW5ndGh8fG51bGwhPWFyZ3VtZW50c1swXT9BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpOltdKX07XG5XLnByb3RvdHlwZS5zZWxlY3Q9Vy5wcm90b3R5cGUuc2VsZWN0O1cucHJvdG90eXBlLkFiPWZ1bmN0aW9uKCl7SWsodGhpcyk7cmV0dXJuIG5ldyBsaSh0aGlzLmMpfTtXLnByb3RvdHlwZS5pbnNlcnQ9Vy5wcm90b3R5cGUuQWI7Vy5wcm90b3R5cGUuV2Q9ZnVuY3Rpb24oKXtJayh0aGlzKTtyZXR1cm4gbmV3IGxpKHRoaXMuYywhMCl9O1cucHJvdG90eXBlLmluc2VydE9yUmVwbGFjZT1XLnByb3RvdHlwZS5XZDtXLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oYSl7SWsodGhpcyk7cmV0dXJuIG5ldyB2aSh0aGlzLmMsYSl9O1cucHJvdG90eXBlLnVwZGF0ZT1XLnByb3RvdHlwZS51cGRhdGU7Vy5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKCl7SWsodGhpcyk7cmV0dXJuIG5ldyBraSh0aGlzLmMpfTtXLnByb3RvdHlwZVtcImRlbGV0ZVwiXT1XLnByb3RvdHlwZS5kZWxldGU7XG5XLnByb3RvdHlwZS5vYnNlcnZlPWZ1bmN0aW9uKGEsYil7SWsodGhpcyk7dGhpcy5jLmIoQWMpLkNkKGEsYil9O1cucHJvdG90eXBlLm9ic2VydmU9Vy5wcm90b3R5cGUub2JzZXJ2ZTtXLnByb3RvdHlwZS51bm9ic2VydmU9ZnVuY3Rpb24oYSxiKXtJayh0aGlzKTt0aGlzLmMuYihBYykubmUoYSxiKX07Vy5wcm90b3R5cGUudW5vYnNlcnZlPVcucHJvdG90eXBlLnVub2JzZXJ2ZTtXLnByb3RvdHlwZS5OZj1mdW5jdGlvbigpe0lrKHRoaXMpO3JldHVybiBuZXcgVih0aGlzLmMpfTtXLnByb3RvdHlwZS5jcmVhdGVUcmFuc2FjdGlvbj1XLnByb3RvdHlwZS5OZjtXLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RyeXt0aGlzLmMuYih2YykuY2xvc2UoKX1jYXRjaChhKXt9dGhpcy5jLmNsZWFyKCk7dGhpcy5oZD0hMX07Vy5wcm90b3R5cGUuY2xvc2U9Vy5wcm90b3R5cGUuY2xvc2U7XG5XLnByb3RvdHlwZS5YZj1mdW5jdGlvbigpe0lrKHRoaXMpO3ZhciBhPW5ldyB6ayh0aGlzLmMpO3JldHVybiBKZSh0aGlzLklhLGEpLnRoZW4oZnVuY3Rpb24oYSl7cmV0dXJuIEpkKGFbMF0pWzBdfSl9O1cucHJvdG90eXBlW1wiZXhwb3J0XCJdPVcucHJvdG90eXBlLlhmO1cucHJvdG90eXBlLmltcG9ydD1mdW5jdGlvbihhKXtJayh0aGlzKTthPW5ldyBCayh0aGlzLmMsYSk7cmV0dXJuIEplKHRoaXMuSWEsYSkudGhlbihrKG51bGwpKX07Vy5wcm90b3R5cGVbXCJpbXBvcnRcIl09Vy5wcm90b3R5cGUuaW1wb3J0O2Z1bmN0aW9uIFgoYSxiLGMsZCxlLGYpe3RoaXMuVT1hO3RoaXMuQT1iO3RoaXMuWWU9Yzt0aGlzLldlPWQ7dGhpcy54Zj1lO3RoaXMuS2E9Znx8bnVsbH1xKFwibGYuc2NoZW1hLkJhc2VDb2x1bW5cIixYKTttPVgucHJvdG90eXBlO20uZ2V0TmFtZT1nKFwiQVwiKTttLmo9ZnVuY3Rpb24oKXtyZXR1cm4gVGQodGhpcy5VKStcIi5cIit0aGlzLkF9O20udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5qKCl9O20uST1nKFwiVVwiKTttLkc9ZyhcInhmXCIpO1gucHJvdG90eXBlLmdldFR5cGU9WC5wcm90b3R5cGUuRztYLnByb3RvdHlwZS5EYT1mdW5jdGlvbigpe251bGw9PXRoaXMudGEmJih0aGlzLnRhPVtdLHRoaXMuSSgpLkRhKCkuZm9yRWFjaChmdW5jdGlvbihhKXstMSE9YS5mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYS5iYS5nZXROYW1lKCl9KS5pbmRleE9mKHRoaXMuQSkmJnRoaXMudGEucHVzaChhKX0sdGhpcykpO3JldHVybiB0aGlzLnRhfTtcblgucHJvdG90eXBlLkNhPWZ1bmN0aW9uKCl7aWYoIW4odGhpcy5mYSkpe3ZhciBhPXRoaXMuRGEoKS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIDEhPWEuZi5sZW5ndGg/ITE6YS5mWzBdLmJhLmdldE5hbWUoKT09dGhpcy5nZXROYW1lKCl9LHRoaXMpO3RoaXMuZmE9MDxhLmxlbmd0aD9hWzBdOm51bGx9cmV0dXJuIHRoaXMuZmF9O1gucHJvdG90eXBlLmhjPWcoXCJXZVwiKTtYLnByb3RvdHlwZS5pc051bGxhYmxlPVgucHJvdG90eXBlLmhjO1gucHJvdG90eXBlLkRjPWcoXCJZZVwiKTtYLnByb3RvdHlwZS5RYT1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwiZXFcIil9O1gucHJvdG90eXBlLmVxPVgucHJvdG90eXBlLlFhO1gucHJvdG90eXBlLmVmPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJuZXFcIil9O1gucHJvdG90eXBlLm5lcT1YLnByb3RvdHlwZS5lZjtYLnByb3RvdHlwZS5yZz1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwibHRcIil9O1xuWC5wcm90b3R5cGUubHQ9WC5wcm90b3R5cGUucmc7WC5wcm90b3R5cGUuc2c9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcImx0ZVwiKX07WC5wcm90b3R5cGUubHRlPVgucHJvdG90eXBlLnNnO1gucHJvdG90eXBlLmFnPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJndFwiKX07WC5wcm90b3R5cGUuZ3Q9WC5wcm90b3R5cGUuYWc7WC5wcm90b3R5cGUuYmc9ZnVuY3Rpb24oYSl7cmV0dXJuIFhnKHRoaXMsYSxcImd0ZVwiKX07WC5wcm90b3R5cGUuZ3RlPVgucHJvdG90eXBlLmJnO1gucHJvdG90eXBlLm1hdGNoPWZ1bmN0aW9uKGEpe3JldHVybiBYZyh0aGlzLGEsXCJtYXRjaFwiKX07WC5wcm90b3R5cGUubWF0Y2g9WC5wcm90b3R5cGUubWF0Y2g7WC5wcm90b3R5cGUuR2Y9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWGcodGhpcyxbYSxiXSxcImJldHdlZW5cIil9O1gucHJvdG90eXBlLmJldHdlZW49WC5wcm90b3R5cGUuR2Y7XG5YLnByb3RvdHlwZS5jZz1mdW5jdGlvbihhKXtyZXR1cm4gWGcodGhpcyxhLFwiaW5cIil9O1gucHJvdG90eXBlW1wiaW5cIl09WC5wcm90b3R5cGUuY2c7WC5wcm90b3R5cGUubWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5RYShudWxsKX07WC5wcm90b3R5cGUuaXNOdWxsPVgucHJvdG90eXBlLm1nO1gucHJvdG90eXBlLmxnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWYobnVsbCl9O1gucHJvdG90eXBlLmlzTm90TnVsbD1YLnByb3RvdHlwZS5sZztYLnByb3RvdHlwZS5yYz1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IFgodGhpcy5VLHRoaXMuQSx0aGlzLlllLHRoaXMuV2UsdGhpcy54ZixhKX07WC5wcm90b3R5cGUuYXM9WC5wcm90b3R5cGUucmM7ZnVuY3Rpb24gSmsoYSl7dGhpcy5nPWE7dGhpcy5JZD1uZXcgY2Q7dGhpcy5vZT1uZXcgY2Q7dGhpcy5nZj1uZXcgY2Q7dGhpcy5JZT15KCk7dGhpcy5oPW5ldyBjZDt0aGlzLkVlPW5ldyBjZDt0aGlzLm1mPW5ldyBjZDt0aGlzLkhlPW5ldyBjZDtLayh0aGlzKX1mdW5jdGlvbiBLayhhKXthLmcub2EoKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEuZ2V0TmFtZSgpO2EuTWIuVWQuZm9yRWFjaChmdW5jdGlvbihjKXt0aGlzLmdmLnNldChiLHRoaXMuZy50YWJsZShjLlhhKSk7dGhpcy5oLnNldChjLlhhLGEpOzA9PWMuYWN0aW9uPyh0aGlzLm9lLnNldChjLlhhLGMpLHRoaXMubWYuc2V0KGMuWGEsYSkpOih0aGlzLklkLnNldChjLlhhLGMpLHRoaXMuRWUuc2V0KGMuWGEsYSkpO3RoaXMuSWUuc2V0KGEuZ2V0TmFtZSgpK1wiLlwiK2MudmIsYy5YYSk7dGhpcy5IZS5zZXQoYy5YYStcIi5cIitjLkpjLGEuZ2V0TmFtZSgpKX0sdGhpcyl9LGEpfVxuZnVuY3Rpb24ga2QoYSxiLGMpe2lmKG51bGwhPWMpcmV0dXJuIDE9PWM/YS5JZC5nZXQoYik6YS5vZS5nZXQoYik7Yz1hLklkLmdldChiKTthPWEub2UuZ2V0KGIpO3JldHVybiBudWxsPT09YyYmbnVsbD09PWE/bnVsbDooY3x8W10pLmNvbmNhdChhfHxbXSl9ZnVuY3Rpb24gU2goYSxiKXthPWIuZ2V0KGEpO3JldHVybiBudWxsPT09YT9bXTphfWZ1bmN0aW9uIFVoKGEsYil7dmFyIGM9QigpO2IuZm9yRWFjaChmdW5jdGlvbihhKXsoYT10aGlzLkllLmdldChhKSkmJmMuYWRkKGEpfSxhKTtyZXR1cm4gQyhjKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZy50YWJsZShhKX0sYSl9ZnVuY3Rpb24gUWgoYSxiLGMpe3JldHVybiBudWxsIT1jPzA9PWM/U2goYixhLm1mKTpTaChiLGEuRWUpOlNoKGIsYS5oKX1cbmZ1bmN0aW9uIFZoKGEsYil7dmFyIGM9QigpO2IuZm9yRWFjaChmdW5jdGlvbihhKXsoYT10aGlzLkhlLmdldChhKSkmJmEuZm9yRWFjaChmdW5jdGlvbihhKXtjLmFkZChhKX0pfSxhKTtyZXR1cm4gQyhjKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZy50YWJsZShhKX0sYSl9O2Z1bmN0aW9uIExrKGEsYixjKXt0aGlzLnNkPWE7dGhpcy54Zz1iO3RoaXMuVWQ9Y31xKFwibGYuc2NoZW1hLkNvbnN0cmFpbnRcIixMayk7TGsucHJvdG90eXBlLiRmPWcoXCJzZFwiKTtMay5wcm90b3R5cGUuZ2V0UHJpbWFyeUtleT1May5wcm90b3R5cGUuJGY7TGsucHJvdG90eXBlLlpmPWcoXCJVZFwiKTtMay5wcm90b3R5cGUuZ2V0Rm9yZWlnbktleXM9TGsucHJvdG90eXBlLlpmO2Z1bmN0aW9uIE1rKGEsYixjKXt2YXIgZD1hLnJlZi5zcGxpdChcIi5cIik7aWYoMiE9ZC5sZW5ndGgpdGhyb3cgbmV3IEQoNTQwLGMpO3RoaXMuR2U9Yjt0aGlzLnZiPWEubG9jYWw7dGhpcy5YYT1kWzBdO3RoaXMuSmM9ZFsxXTt0aGlzLm5hbWU9YitcIi5cIitjO3RoaXMuYWN0aW9uPWEuYWN0aW9uO3RoaXMudGltaW5nPWEudGltaW5nfTtmdW5jdGlvbiBZKGEpe05rKGEpO3RoaXMuUWQ9ZWUoKTt0aGlzLkE9YTt0aGlzLks9eSgpO3RoaXMuemQ9QigpO3RoaXMubmM9QigpO3RoaXMubmQ9QigpO3RoaXMuRmE9bnVsbDt0aGlzLnRhPXkoKTt0aGlzLnJkPSExO3RoaXMueWI9W119cShcImxmLnNjaGVtYS5UYWJsZUJ1aWxkZXJcIixZKTtmdW5jdGlvbiBPayhhKXt0aGlzLm5hbWU9YS5uYW1lO3RoaXMub3JkZXI9YS5vcmRlcjt0aGlzLmF1dG9JbmNyZW1lbnQ9YS5hdXRvSW5jcmVtZW50fXZhciBQaz1CKFswLDZdKTtmdW5jdGlvbiBOayhhKXtpZighL15bQS1aYS16X11bQS1aYS16MC05X10qJC8udGVzdChhKSl0aHJvdyBuZXcgRCg1MDIsYSk7fWZ1bmN0aW9uIFFrKGEsYil7aWYoYj09YS5BKXRocm93IG5ldyBEKDU0NixiKTtpZihhLksuaGFzKGIpfHxhLnRhLmhhcyhiKXx8YS5uYy5oYXMoYikpdGhyb3cgbmV3IEQoNTAzLGEuQStcIi5cIitiKTt9XG5mdW5jdGlvbiBSayhhLGIpe3ZhciBjPSExO2IuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj10aGlzLksuZ2V0KGEubmFtZSk7Yz1jfHxhLmF1dG9JbmNyZW1lbnQ7aWYoYS5hdXRvSW5jcmVtZW50JiYzIT1iKXRocm93IG5ldyBEKDUwNCk7fSxhKTtpZihjJiYxPGIubGVuZ3RoKXRocm93IG5ldyBEKDUwNSk7fWZ1bmN0aW9uIFNrKGEpe2lmKG51bGwhPT1hLkZhKXt2YXIgYj1hLnRhLmdldChhLkZhKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZX0pLGM9MDtpZihhLnliLnNvbWUoZnVuY3Rpb24oYSxlKXtjPWU7cmV0dXJuLTEhPWIuaW5kZXhPZihhLnZiKX0sYSkpdGhyb3cgbmV3IEQoNTQzLGEueWJbY10ubmFtZSk7fX1cbmZ1bmN0aW9uIFRrKGEpe2lmKG51bGwhPT1hLkZhKXt2YXIgYj1mdW5jdGlvbihhKXtyZXR1cm4gYS5uYW1lfSxjPUpTT04uc3RyaW5naWZ5KGEudGEuZ2V0KGEuRmEpLm1hcChiKSk7YS50YS5mb3JFYWNoKGZ1bmN0aW9uKGEsZSl7aWYoZSE9dGhpcy5GYSYmKGE9YS5tYXAoYiksSlNPTi5zdHJpbmdpZnkoYSk9PWMpKXRocm93IG5ldyBEKDU0NCx0aGlzLkErXCIuXCIrZSk7fSxhKX19ZnVuY3Rpb24gVWsoYSl7bnVsbD09PWEuRmF8fGEudGEuZ2V0KGEuRmEpLmZvckVhY2goZnVuY3Rpb24oYSl7aWYodGhpcy5uZC5oYXMoYS5uYW1lKSl0aHJvdyBuZXcgRCg1NDUsdGhpcy5BK1wiLlwiK2EubmFtZSk7fSxhKX1ZLnByb3RvdHlwZS56Zj1mdW5jdGlvbihhLGIpe05rKGEpO1FrKHRoaXMsYSk7dGhpcy5LLnNldChhLGIpO1BrLmhhcyhiKSYmdGhpcy5CZShbYV0pO3JldHVybiB0aGlzfTtZLnByb3RvdHlwZS5hZGRDb2x1bW49WS5wcm90b3R5cGUuemY7XG5ZLnByb3RvdHlwZS5CZj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuQTt0aGlzLkZhPVwicGtcIisoY1swXS50b1VwcGVyQ2FzZSgpK2Muc3Vic3RyaW5nKDEpKTtOayh0aGlzLkZhKTtRayh0aGlzLHRoaXMuRmEpO2E9VmsodGhpcyxhLCEwLHZvaWQgMCxiKTtSayh0aGlzLGEpOzE9PWEubGVuZ3RoJiZ0aGlzLnpkLmFkZChhWzBdLm5hbWUpO3RoaXMubmMuYWRkKHRoaXMuRmEpO3RoaXMudGEuc2V0KHRoaXMuRmEsYSk7cmV0dXJuIHRoaXN9O1kucHJvdG90eXBlLmFkZFByaW1hcnlLZXk9WS5wcm90b3R5cGUuQmY7XG5ZLnByb3RvdHlwZS5BZj1mdW5jdGlvbihhLGIpe05rKGEpO1FrKHRoaXMsYSk7Yj1uZXcgTWsoYix0aGlzLkEsYSk7bihiLmFjdGlvbil8fChiLmFjdGlvbj0wKTtuKGIudGltaW5nKXx8KGIudGltaW5nPTApO2lmKDE9PWIuYWN0aW9uJiYxPT1iLnRpbWluZyl0aHJvdyBuZXcgRCg1MDYpO2lmKCF0aGlzLksuaGFzKGIudmIpKXRocm93IG5ldyBEKDU0MCxhKTt0aGlzLnliLnB1c2goYik7dGhpcy5BZShhLFtiLnZiXSx0aGlzLnpkLmhhcyhiLnZiKSk7cmV0dXJuIHRoaXN9O1kucHJvdG90eXBlLmFkZEZvcmVpZ25LZXk9WS5wcm90b3R5cGUuQWY7WS5wcm90b3R5cGUuQ2Y9ZnVuY3Rpb24oYSxiKXtOayhhKTtRayh0aGlzLGEpO2I9VmsodGhpcyxiLCEwKTsxPT1iLmxlbmd0aCYmKHRoaXMuemQuYWRkKGJbMF0ubmFtZSksV2sodGhpcyxiWzBdLm5hbWUpKTt0aGlzLnRhLnNldChhLGIpO3RoaXMubmMuYWRkKGEpO3JldHVybiB0aGlzfTtZLnByb3RvdHlwZS5hZGRVbmlxdWU9WS5wcm90b3R5cGUuQ2Y7XG5mdW5jdGlvbiBXayhhLGIpe2EueWIuZm9yRWFjaChmdW5jdGlvbihhKXthLnZiPT1iJiZ0aGlzLm5jLmFkZChhLm5hbWUuc3BsaXQoXCIuXCIpWzFdKX0sYSl9WS5wcm90b3R5cGUuQmU9ZnVuY3Rpb24oYSl7VmsodGhpcyxhLCExKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3RoaXMubmQuYWRkKGEubmFtZSl9LHRoaXMpO3JldHVybiB0aGlzfTtZLnByb3RvdHlwZS5hZGROdWxsYWJsZT1ZLnByb3RvdHlwZS5CZTtZLnByb3RvdHlwZS5BZT1mdW5jdGlvbihhLGIsYyxkKXtOayhhKTtRayh0aGlzLGEpO2I9VmsodGhpcyxiLCEwLGQpO2MmJnRoaXMubmMuYWRkKGEpO3RoaXMudGEuc2V0KGEsYik7cmV0dXJuIHRoaXN9O1kucHJvdG90eXBlLmFkZEluZGV4PVkucHJvdG90eXBlLkFlO1kucHJvdG90eXBlLkNiPWJhKFwicmRcIik7WS5wcm90b3R5cGUucGVyc2lzdGVudEluZGV4PVkucHJvdG90eXBlLkNiO1xuWS5wcm90b3R5cGUuemI9ZnVuY3Rpb24oKXtTayh0aGlzKTtUayh0aGlzKTtVayh0aGlzKTtyZXR1cm4gbmV3IChYayh0aGlzKSl9O1kucHJvdG90eXBlLmdldFNjaGVtYT1ZLnByb3RvdHlwZS56YjtmdW5jdGlvbiBWayhhLGIsYyxkLGUpe3ZhciBmPWIsZj1cInN0cmluZ1wiPT10eXBlb2YgYlswXT9iLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IE9rKHtuYW1lOmEsb3JkZXI6bnVsbCE9ZD9kOjEsYXV0b0luY3JlbWVudDplfHwhMX0pfSk6Yi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBPayhhKX0pO2YuZm9yRWFjaChmdW5jdGlvbihhKXtpZighdGhpcy5LLmhhcyhhLm5hbWUpKXRocm93IG5ldyBEKDUwOCx0aGlzLkEsYS5uYW1lKTtpZihjKXt2YXIgYj10aGlzLksuZ2V0KGEubmFtZSk7aWYoMD09Ynx8Nj09Yil0aHJvdyBuZXcgRCg1MDksdGhpcy5BLGEubmFtZSk7fX0sYSk7cmV0dXJuIGZ9XG5mdW5jdGlvbiBYayhhKXtmdW5jdGlvbiBiKCl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gYS50YS5nZXQoYikubWFwKGZ1bmN0aW9uKGEpe3JldHVybntiYTp0aGlzW2EubmFtZV0sb3JkZXI6YS5vcmRlcixhdXRvSW5jcmVtZW50OmEuYXV0b0luY3JlbWVudH19LHRoaXMpfXZhciBkPWdjKGEuSykubWFwKGZ1bmN0aW9uKGIpe3RoaXNbYl09bmV3IFgodGhpcyxiLGEuemQuaGFzKGIpLGEubmQuaGFzKGIpLGEuSy5nZXQoYikpO3JldHVybiB0aGlzW2JdfSx0aGlzKSxlPWdjKGEudGEpLm1hcChmdW5jdGlvbihjKXtyZXR1cm4gbmV3IFpnKGEuQSxjLGEubmMuaGFzKGMpLGIuY2FsbCh0aGlzLGMpKX0sdGhpcyk7US5jYWxsKHRoaXMsYS5BLGQsZSxhLnJkKTt2YXIgZj1udWxsPT09YS5GYT9udWxsOm5ldyBaZyhhLkEsYS5GYSwhMCxiLmNhbGwodGhpcyxhLkZhKSksaD1kLmZpbHRlcihmdW5jdGlvbihiKXtyZXR1cm4hYS5uZC5oYXMoYi5nZXROYW1lKCkpfSk7dGhpcy5NYj1uZXcgTGsoZixcbmgsYS55Yik7dGhpcy5xZj1ZayhhLGQsZSl9cihiLFEpO2IucHJvdG90eXBlLnhiPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgdGhpcy5xZihpYysrLGEpfTtiLnByb3RvdHlwZS5jcmVhdGVSb3c9Yi5wcm90b3R5cGUueGI7Yi5wcm90b3R5cGUua2I9ZnVuY3Rpb24oYSl7dmFyIGI9e307dGhpcy5sYigpLmZvckVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9Yy5nZXROYW1lKCk7Yz1jLkcoKTt2YXIgZT1hLnZhbHVlW2RdO2lmKDA9PWMpaWYoYz1lLG51bGwhPWMmJlwiXCIhPWMpezAhPWMubGVuZ3RoJTImJihjPVwiMFwiK2MpO2Zvcih2YXIgZT1uZXcgQXJyYXlCdWZmZXIoYy5sZW5ndGgvMiksbD1uZXcgVWludDhBcnJheShlKSxwPTAsTD0wO3A8Yy5sZW5ndGg7cCs9MilsW0wrK109cGFyc2VJbnQoYy5zdWJzdHIocCwyKSwxNik7Yz1lfWVsc2UgYz1udWxsO2Vsc2UgYz0yPT1jP251bGwhPWU/bmV3IERhdGUoZSk6bnVsbDplO2JbZF09Y30sdGhpcyk7cmV0dXJuIG5ldyB0aGlzLnFmKGEuaWQsYil9O1xuYi5wcm90b3R5cGUuZGVzZXJpYWxpemVSb3c9Yi5wcm90b3R5cGUua2I7Yi5wcm90b3R5cGUuTmU9ZyhcIk1iXCIpO2IucHJvdG90eXBlLmdldENvbnN0cmFpbnQ9Yi5wcm90b3R5cGUuTmU7cmV0dXJuIGJ9XG5mdW5jdGlvbiBZayhhLGIsYyl7ZnVuY3Rpb24gZChhLGQpe3RoaXMuSz1iO3RoaXMudGE9YztoYy5jYWxsKHRoaXMsYSxkKX1yKGQsaGMpO2QucHJvdG90eXBlLktlPWZ1bmN0aW9uKCl7dmFyIGE9e307dGhpcy5LLmZvckVhY2goZnVuY3Rpb24oYil7YVtiLmdldE5hbWUoKV09Yi5oYygpP251bGw6YmRbYi5HKCldfSk7cmV0dXJuIGF9O2QucHJvdG90eXBlLndmPWZ1bmN0aW9uKCl7dmFyIGE9e307dGhpcy5LLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGM9Yi5nZXROYW1lKCk7Yj1iLkcoKTt2YXIgZD10aGlzLm1bY107YVtjXT0wPT1iP251bGwhPWQ/bGMoZCk6bnVsbDoyPT1iP251bGwhPWQ/ZC5nZXRUaW1lKCk6bnVsbDo2PT1iP251bGwhPWQ/ZDpudWxsOmR9LHRoaXMpO3JldHVybiBhfTt2YXIgZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLksuZ2V0KGEuZ2V0TmFtZSgpKSxjPXRoaXMuUWQuWmUuZ2V0KGIpfHxudWxsO3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYyhiW2EuZ2V0TmFtZSgpXSl9fS5iaW5kKGEpLFxuZj1mdW5jdGlvbihhKXt2YXIgYj1hLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gZShhLmJhKX0pO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYi5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGIoYSl9KX19LmJpbmQoYSksaD17fTtjLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5qKCk7YT0xPT1hLmYubGVuZ3RoP2UoYS5mWzBdLmJhKTpmKGEuZik7aFtiXT1hfSk7ZC5wcm90b3R5cGUubmI9ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPWEuaW5kZXhPZihcIiNcIik/dGhpcy5pZCgpOmguaGFzT3duUHJvcGVydHkoYSk/aFthXSh0aGlzLm0pOm51bGx9O3JldHVybiBkfTtmdW5jdGlvbiBaayhhLGIpe3RoaXMuZz1uZXcgWihhLGIpO3RoaXMudGI9eSgpO3RoaXMueWM9ITE7dGhpcy5pPW51bGw7dGhpcy5ZYz0hMX1xKFwibGYuc2NoZW1hLkJ1aWxkZXJcIixaayk7ZnVuY3Rpb24gJGsoYSxiKXtiLnliLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGM9YS5YYTtpZighdGhpcy50Yi5oYXMoYykpdGhyb3cgbmV3IEQoNTM2LGEubmFtZSk7dmFyIGM9dGhpcy50Yi5nZXQoYykuemIoKSxlPWEuSmM7aWYoIWMuaGFzT3duUHJvcGVydHkoZSkpdGhyb3cgbmV3IEQoNTM3LGEubmFtZSk7aWYoYi56YigpW2EudmJdLkcoKSE9Y1tlXS5HKCkpdGhyb3cgbmV3IEQoNTM4LGEubmFtZSk7aWYoIWNbZV0uRGMoKSl0aHJvdyBuZXcgRCg1MzksYS5uYW1lKTt9LGEpfVxuWmsucHJvdG90eXBlLktmPWZ1bmN0aW9uKGEpe2EueWIuZm9yRWFjaChmdW5jdGlvbihhKXt0aGlzLnRiLmdldChhLlhhKS55Yi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2lmKGIudmI9PWEuSmMpdGhyb3cgbmV3IEQoNTM0LGEubmFtZSk7fSx0aGlzKX0sdGhpcyl9O2Z1bmN0aW9uIGFsKGEpe2EueWN8fChhLnRiLmZvckVhY2goZnVuY3Rpb24oYSl7JGsodGhpcyxhKTthPWEuemIoKTt0aGlzLmcuTS5zZXQoYS5nZXROYW1lKCksYSl9LGEpLHooYS50YikuZm9yRWFjaChhLktmLGEpLGJsKGEpLGEudGIuY2xlYXIoKSxhLnljPSEwKX1mdW5jdGlvbiBjbChhLGIsYyl7Yi55ZXx8KGIueWU9ITAsYi5mZT0hMCxiLkxlLmZvckVhY2goZnVuY3Rpb24oYSl7YT1jLmdldChhKTtpZighYS55ZSljbCh0aGlzLGEsYyk7ZWxzZSBpZihhLmZlJiZiIT1hKXRocm93IG5ldyBEKDUzMyk7fSxhKSk7Yi5mZT0hMX1cbmZ1bmN0aW9uIGJsKGEpe3ZhciBiPXkoKTthLmcuTS5mb3JFYWNoKGZ1bmN0aW9uKGEsZCl7Yi5zZXQoZCxuZXcgZGwoZCkpfSxhKTthLnRiLmZvckVhY2goZnVuY3Rpb24oYSxkKXthLnliLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5nZXQoYS5YYSkuTGUuYWRkKGQpfSl9KTt6KGIpLmZvckVhY2goZnVuY3Rpb24oYSl7Y2wodGhpcyxhLGIpfSxhKX1mdW5jdGlvbiBkbChhKXt0aGlzLmZlPXRoaXMueWU9ITE7dGhpcy5MZT1CKCk7dGhpcy5tYz1hfVprLnByb3RvdHlwZS56Yj1mdW5jdGlvbigpe3RoaXMueWN8fGFsKHRoaXMpO3JldHVybiB0aGlzLmd9O1prLnByb3RvdHlwZS5nZXRTY2hlbWE9WmsucHJvdG90eXBlLnpiO1prLnByb3RvdHlwZS5RZT1mdW5jdGlvbigpe3ZhciBhPW5ldyB1YyhcIm5zX1wiK3RoaXMuZy5uYW1lKCkpLGI9amsoKSxjO2IubWQoYSk/Yz1iLmIoYSk6KGM9bmV3IGhrLGIucmIoYSxjKSk7cmV0dXJuIGN9O1prLnByb3RvdHlwZS5nZXRHbG9iYWw9WmsucHJvdG90eXBlLlFlO1xuWmsucHJvdG90eXBlLmNvbm5lY3Q9ZnVuY3Rpb24oYSl7aWYodGhpcy5ZY3x8bnVsbCE9PXRoaXMuaSYmdGhpcy5pLmhkKXRocm93IG5ldyBEKDExMyk7dGhpcy5ZYz0hMDtpZihudWxsPT09dGhpcy5pKXt2YXIgYj10aGlzLlFlKCk7Yi5tZChCYyl8fGIucmIoQmMsdGhpcy56YigpKTt0aGlzLmk9bmV3IFcoYil9cmV0dXJuIHRoaXMuaS5FYShhKS50aGVuKGZ1bmN0aW9uKGEpe3RoaXMuWWM9ITE7cmV0dXJuIGF9LmJpbmQodGhpcyksZnVuY3Rpb24oYSl7dGhpcy5ZYz0hMTt0aHJvdyBhO30uYmluZCh0aGlzKSl9O1prLnByb3RvdHlwZS5jb25uZWN0PVprLnByb3RvdHlwZS5jb25uZWN0O1prLnByb3RvdHlwZS5NZj1mdW5jdGlvbihhKXtpZih0aGlzLnRiLmhhcyhhKSl0aHJvdyBuZXcgRCg1MDMsYSk7aWYodGhpcy55Yyl0aHJvdyBuZXcgRCg1MzUpO3RoaXMudGIuc2V0KGEsbmV3IFkoYSkpO3JldHVybiB0aGlzLnRiLmdldChhKX07WmsucHJvdG90eXBlLmNyZWF0ZVRhYmxlPVprLnByb3RvdHlwZS5NZjtcblprLnByb3RvdHlwZS5zZT1mdW5jdGlvbihhKXtpZih0aGlzLnljKXRocm93IG5ldyBEKDUzNSk7dGhpcy5nLnNlKGEpO3JldHVybiB0aGlzfTtaay5wcm90b3R5cGUuc2V0UHJhZ21hPVprLnByb3RvdHlwZS5zZTtmdW5jdGlvbiBaKGEsYil7dGhpcy5BPWE7dGhpcy5VYT1iO3RoaXMuTT15KCk7dGhpcy5rZT17U2Y6ITF9fXEoXCJsZi5zY2hlbWEuRGF0YWJhc2VTY2hlbWFcIixaKTtaLnByb3RvdHlwZS5uYW1lPWcoXCJBXCIpO1oucHJvdG90eXBlLm5hbWU9Wi5wcm90b3R5cGUubmFtZTtaLnByb3RvdHlwZS52ZXJzaW9uPWcoXCJVYVwiKTtaLnByb3RvdHlwZS52ZXJzaW9uPVoucHJvdG90eXBlLnZlcnNpb247Wi5wcm90b3R5cGUub2E9ZnVuY3Rpb24oKXtyZXR1cm4geih0aGlzLk0pfTtaLnByb3RvdHlwZS50YWJsZXM9Wi5wcm90b3R5cGUub2E7Wi5wcm90b3R5cGUudGFibGU9ZnVuY3Rpb24oYSl7aWYoIXRoaXMuTS5oYXMoYSkpdGhyb3cgbmV3IEQoMTAxLGEpO3JldHVybiB0aGlzLk0uZ2V0KGEpfTtcbloucHJvdG90eXBlLnRhYmxlPVoucHJvdG90eXBlLnRhYmxlO1oucHJvdG90eXBlLmluZm89ZnVuY3Rpb24oKXt0aGlzLlZlfHwodGhpcy5WZT1uZXcgSmsodGhpcykpO3JldHVybiB0aGlzLlZlfTtaLnByb3RvdHlwZS5GZz1nKFwia2VcIik7Wi5wcm90b3R5cGUucHJhZ21hPVoucHJvdG90eXBlLkZnO1oucHJvdG90eXBlLnNlPWJhKFwia2VcIik7cShcImxmLnNjaGVtYS5jcmVhdGVcIixmdW5jdGlvbihhLGIpe3JldHVybiBuZXcgWmsoYSxiKX0pO3UucHJvdG90eXBlLmNhdGNoPXUucHJvdG90eXBlLnZlO3UucHJvdG90eXBlW1wiY2F0Y2hcIl09dS5wcm90b3R5cGUuY2F0Y2g7XG50cnl7aWYobW9kdWxlKXttb2R1bGUuZXhwb3J0cz1sZjt9fWNhdGNoKGUpe319LmJpbmQod2luZG93KSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvdmVmaWVsZC5taW4uanMubWFwXG4iLCIoZnVuY3Rpb24oKXtcclxuICB2YXIgY3J5cHQgPSByZXF1aXJlKCdjcnlwdCcpLFxyXG4gICAgICB1dGY4ID0gcmVxdWlyZSgnY2hhcmVuYycpLnV0ZjgsXHJcbiAgICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyksXHJcbiAgICAgIGJpbiA9IHJlcXVpcmUoJ2NoYXJlbmMnKS5iaW4sXHJcblxyXG4gIC8vIFRoZSBjb3JlXHJcbiAgbWQ1ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIC8vIENvbnZlcnQgdG8gYnl0ZSBhcnJheVxyXG4gICAgaWYgKG1lc3NhZ2UuY29uc3RydWN0b3IgPT0gU3RyaW5nKVxyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVuY29kaW5nID09PSAnYmluYXJ5JylcclxuICAgICAgICBtZXNzYWdlID0gYmluLnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBtZXNzYWdlID0gdXRmOC5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgZWxzZSBpZiAoaXNCdWZmZXIobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtZXNzYWdlLCAwKTtcclxuICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS50b1N0cmluZygpO1xyXG4gICAgLy8gZWxzZSwgYXNzdW1lIGJ5dGUgYXJyYXkgYWxyZWFkeVxyXG5cclxuICAgIHZhciBtID0gY3J5cHQuYnl0ZXNUb1dvcmRzKG1lc3NhZ2UpLFxyXG4gICAgICAgIGwgPSBtZXNzYWdlLmxlbmd0aCAqIDgsXHJcbiAgICAgICAgYSA9ICAxNzMyNTg0MTkzLFxyXG4gICAgICAgIGIgPSAtMjcxNzMzODc5LFxyXG4gICAgICAgIGMgPSAtMTczMjU4NDE5NCxcclxuICAgICAgICBkID0gIDI3MTczMzg3ODtcclxuXHJcbiAgICAvLyBTd2FwIGVuZGlhblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1baV0gPSAoKG1baV0gPDwgIDgpIHwgKG1baV0gPj4+IDI0KSkgJiAweDAwRkYwMEZGIHxcclxuICAgICAgICAgICAgICgobVtpXSA8PCAyNCkgfCAobVtpXSA+Pj4gIDgpKSAmIDB4RkYwMEZGMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFkZGluZ1xyXG4gICAgbVtsID4+PiA1XSB8PSAweDgwIDw8IChsICUgMzIpO1xyXG4gICAgbVsoKChsICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IGw7XHJcblxyXG4gICAgLy8gTWV0aG9kIHNob3J0Y3V0c1xyXG4gICAgdmFyIEZGID0gbWQ1Ll9mZixcclxuICAgICAgICBHRyA9IG1kNS5fZ2csXHJcbiAgICAgICAgSEggPSBtZDUuX2hoLFxyXG4gICAgICAgIElJID0gbWQ1Ll9paTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpICs9IDE2KSB7XHJcblxyXG4gICAgICB2YXIgYWEgPSBhLFxyXG4gICAgICAgICAgYmIgPSBiLFxyXG4gICAgICAgICAgY2MgPSBjLFxyXG4gICAgICAgICAgZGQgPSBkO1xyXG5cclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgMF0sICA3LCAtNjgwODc2OTM2KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgMl0sIDE3LCAgNjA2MTA1ODE5KTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDRdLCAgNywgLTE3NjQxODg5Nyk7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDVdLCAxMiwgIDEyMDAwODA0MjYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsgN10sIDIyLCAtNDU3MDU5ODMpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDcsICAxNzcwMDM1NDE2KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krMTBdLCAxNywgLTQyMDYzKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krMTJdLCAgNywgIDE4MDQ2MDM2ODIpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKzEzXSwgMTIsIC00MDM0MTEwMSk7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krMTRdLCAxNywgLTE1MDIwMDIyOTApO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzE1XSwgMjIsICAxMjM2NTM1MzI5KTtcclxuXHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDFdLCAgNSwgLTE2NTc5NjUxMCk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krIDZdLCAgOSwgLTEwNjk1MDE2MzIpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzExXSwgMTQsICA2NDM3MTc3MTMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyAwXSwgMjAsIC0zNzM4OTczMDIpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA1XSwgIDUsIC03MDE1NTg2OTEpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzEwXSwgIDksICAzODAxNjA4Myk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDRdLCAyMCwgLTQwNTUzNzg0OCk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDldLCAgNSwgIDU2ODQ0NjQzOCk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTRdLCAgOSwgLTEwMTk4MDM2OTApO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyAzXSwgMTQsIC0xODczNjM5NjEpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA4XSwgMjAsICAxMTYzNTMxNTAxKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsxM10sICA1LCAtMTQ0NDY4MTQ2Nyk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krIDJdLCAgOSwgLTUxNDAzNzg0KTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgN10sIDE0LCAgMTczNTMyODQ3Myk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xyXG5cclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgNV0sICA0LCAtMzc4NTU4KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTFdLCAxNiwgIDE4MzkwMzA1NjIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzE0XSwgMjMsIC0zNTMwOTU1Nik7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDFdLCAgNCwgLTE1MzA5OTIwNjApO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA0XSwgMTEsICAxMjcyODkzMzUzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgN10sIDE2LCAtMTU1NDk3NjMyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxMF0sIDIzLCAtMTA5NDczMDY0MCk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krMTNdLCAgNCwgIDY4MTI3OTE3NCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDBdLCAxMSwgLTM1ODUzNzIyMik7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDNdLCAxNiwgLTcyMjUyMTk3OSk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDZdLCAyMywgIDc2MDI5MTg5KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgOV0sICA0LCAtNjQwMzY0NDg3KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsxMl0sIDExLCAtNDIxODE1ODM1KTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE2LCAgNTMwNzQyNTIwKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcclxuXHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDBdLCAgNiwgLTE5ODYzMDg0NCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDddLCAxMCwgIDExMjY4OTE0MTUpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgNV0sIDIxLCAtNTc0MzQwNTUpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDYsICAxNzAwNDg1NTcxKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgM10sIDEwLCAtMTg5NDk4NjYwNik7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTBdLCAxNSwgLTEwNTE1MjMpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgOF0sICA2LCAgMTg3MzMxMzM1OSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTVdLCAxMCwgLTMwNjExNzQ0KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krMTNdLCAyMSwgIDEzMDkxNTE2NDkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDYsIC0xNDU1MjMwNzApO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsgMl0sIDE1LCAgNzE4Nzg3MjU5KTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcclxuXHJcbiAgICAgIGEgPSAoYSArIGFhKSA+Pj4gMDtcclxuICAgICAgYiA9IChiICsgYmIpID4+PiAwO1xyXG4gICAgICBjID0gKGMgKyBjYykgPj4+IDA7XHJcbiAgICAgIGQgPSAoZCArIGRkKSA+Pj4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J5cHQuZW5kaWFuKFthLCBiLCBjLCBkXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQXV4aWxpYXJ5IGZ1bmN0aW9uc1xyXG4gIG1kNS5fZmYgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiICYgYyB8IH5iICYgZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5fZ2cgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiICYgZCB8IGMgJiB+ZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faGggID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiIF4gYyBeIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2lpICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYyBeIChiIHwgfmQpKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcblxyXG4gIC8vIFBhY2thZ2UgcHJpdmF0ZSBibG9ja3NpemVcclxuICBtZDUuX2Jsb2Nrc2l6ZSA9IDE2O1xyXG4gIG1kNS5fZGlnZXN0c2l6ZSA9IDE2O1xyXG5cclxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhcmd1bWVudCAnICsgbWVzc2FnZSk7XHJcblxyXG4gICAgdmFyIGRpZ2VzdGJ5dGVzID0gY3J5cHQud29yZHNUb0J5dGVzKG1kNShtZXNzYWdlLCBvcHRpb25zKSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLmFzQnl0ZXMgPyBkaWdlc3RieXRlcyA6XHJcbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmFzU3RyaW5nID8gYmluLmJ5dGVzVG9TdHJpbmcoZGlnZXN0Ynl0ZXMpIDpcclxuICAgICAgICBjcnlwdC5ieXRlc1RvSGV4KGRpZ2VzdGJ5dGVzKTtcclxuICB9O1xyXG5cclxufSkoKTtcclxuIiwiLy8hIG1vbWVudC5qc1xuLy8hIHZlcnNpb24gOiAyLjIwLjFcbi8vISBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXG4vLyEgbGljZW5zZSA6IE1JVFxuLy8hIG1vbWVudGpzLmNvbVxuXG47KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICBnbG9iYWwubW9tZW50ID0gZmFjdG9yeSgpXG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGhvb2tDYWxsYmFjaztcblxuZnVuY3Rpb24gaG9va3MgKCkge1xuICAgIHJldHVybiBob29rQ2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbi8vIHdpdGhvdXQgY3JlYXRpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuZnVuY3Rpb24gc2V0SG9va0NhbGxiYWNrIChjYWxsYmFjaykge1xuICAgIGhvb2tDYWxsYmFjayA9IGNhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoaW5wdXQpIHtcbiAgICAvLyBJRTggd2lsbCB0cmVhdCB1bmRlZmluZWQgYW5kIG51bGwgYXMgb2JqZWN0IGlmIGl0IHdhc24ndCBmb3JcbiAgICAvLyBpbnB1dCAhPSBudWxsXG4gICAgcmV0dXJuIGlucHV0ICE9IG51bGwgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKSB7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgIHJldHVybiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrO1xuICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0IGluc3RhbmNlb2YgRGF0ZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIG1hcChhcnIsIGZuKSB7XG4gICAgdmFyIHJlcyA9IFtdLCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgcmVzLnB1c2goZm4oYXJyW2ldLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGhhc093blByb3AoYSwgYikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG4gICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGIsIGkpKSB7XG4gICAgICAgICAgICBhW2ldID0gYltpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wKGIsICd0b1N0cmluZycpKSB7XG4gICAgICAgIGEudG9TdHJpbmcgPSBiLnRvU3RyaW5nO1xuICAgIH1cblxuICAgIGlmIChoYXNPd25Qcm9wKGIsICd2YWx1ZU9mJykpIHtcbiAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVVEMgKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIHRydWUpLnV0YygpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UGFyc2luZ0ZsYWdzKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gZGVlcCBjbG9uZSB0aGlzIG9iamVjdC5cbiAgICByZXR1cm4ge1xuICAgICAgICBlbXB0eSAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgdW51c2VkVG9rZW5zICAgIDogW10sXG4gICAgICAgIHVudXNlZElucHV0ICAgICA6IFtdLFxuICAgICAgICBvdmVyZmxvdyAgICAgICAgOiAtMixcbiAgICAgICAgY2hhcnNMZWZ0T3ZlciAgIDogMCxcbiAgICAgICAgbnVsbElucHV0ICAgICAgIDogZmFsc2UsXG4gICAgICAgIGludmFsaWRNb250aCAgICA6IG51bGwsXG4gICAgICAgIGludmFsaWRGb3JtYXQgICA6IGZhbHNlLFxuICAgICAgICB1c2VySW52YWxpZGF0ZWQgOiBmYWxzZSxcbiAgICAgICAgaXNvICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHBhcnNlZERhdGVQYXJ0cyA6IFtdLFxuICAgICAgICBtZXJpZGllbSAgICAgICAgOiBudWxsLFxuICAgICAgICByZmMyODIyICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgd2Vla2RheU1pc21hdGNoIDogZmFsc2VcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJzaW5nRmxhZ3MobSkge1xuICAgIGlmIChtLl9wZiA9PSBudWxsKSB7XG4gICAgICAgIG0uX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICAgIH1cbiAgICByZXR1cm4gbS5fcGY7XG59XG5cbnZhciBzb21lO1xuaWYgKEFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgc29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lO1xufSBlbHNlIHtcbiAgICBzb21lID0gZnVuY3Rpb24gKGZ1bikge1xuICAgICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIGluIHQgJiYgZnVuLmNhbGwodGhpcywgdFtpXSwgaSwgdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkKG0pIHtcbiAgICBpZiAobS5faXNWYWxpZCA9PSBudWxsKSB7XG4gICAgICAgIHZhciBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhtKTtcbiAgICAgICAgdmFyIHBhcnNlZFBhcnRzID0gc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpICE9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgaXNOb3dWYWxpZCA9ICFpc05hTihtLl9kLmdldFRpbWUoKSkgJiZcbiAgICAgICAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxuICAgICAgICAgICAgIWZsYWdzLmVtcHR5ICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXG4gICAgICAgICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcbiAgICAgICAgICAgICFmbGFncy53ZWVrZGF5TWlzbWF0Y2ggJiZcbiAgICAgICAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcbiAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXG4gICAgICAgICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAgICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xuXG4gICAgICAgIGlmIChtLl9zdHJpY3QpIHtcbiAgICAgICAgICAgIGlzTm93VmFsaWQgPSBpc05vd1ZhbGlkICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihtKSkge1xuICAgICAgICAgICAgbS5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNOb3dWYWxpZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbS5faXNWYWxpZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW52YWxpZCAoZmxhZ3MpIHtcbiAgICB2YXIgbSA9IGNyZWF0ZVVUQyhOYU4pO1xuICAgIGlmIChmbGFncyAhPSBudWxsKSB7XG4gICAgICAgIGV4dGVuZChnZXRQYXJzaW5nRmxhZ3MobSksIGZsYWdzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhtKS51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xufVxuXG4vLyBQbHVnaW5zIHRoYXQgYWRkIHByb3BlcnRpZXMgc2hvdWxkIGFsc28gYWRkIHRoZSBrZXkgaGVyZSAobnVsbCB2YWx1ZSksXG4vLyBzbyB3ZSBjYW4gcHJvcGVybHkgY2xvbmUgb3Vyc2VsdmVzLlxudmFyIG1vbWVudFByb3BlcnRpZXMgPSBob29rcy5tb21lbnRQcm9wZXJ0aWVzID0gW107XG5cbmZ1bmN0aW9uIGNvcHlDb25maWcodG8sIGZyb20pIHtcbiAgICB2YXIgaSwgcHJvcCwgdmFsO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc0FNb21lbnRPYmplY3QpKSB7XG4gICAgICAgIHRvLl9pc0FNb21lbnRPYmplY3QgPSBmcm9tLl9pc0FNb21lbnRPYmplY3Q7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faSkpIHtcbiAgICAgICAgdG8uX2kgPSBmcm9tLl9pO1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2YpKSB7XG4gICAgICAgIHRvLl9mID0gZnJvbS5fZjtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9sKSkge1xuICAgICAgICB0by5fbCA9IGZyb20uX2w7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fc3RyaWN0KSkge1xuICAgICAgICB0by5fc3RyaWN0ID0gZnJvbS5fc3RyaWN0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3R6bSkpIHtcbiAgICAgICAgdG8uX3R6bSA9IGZyb20uX3R6bTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9pc1VUQykpIHtcbiAgICAgICAgdG8uX2lzVVRDID0gZnJvbS5faXNVVEM7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fb2Zmc2V0KSkge1xuICAgICAgICB0by5fb2Zmc2V0ID0gZnJvbS5fb2Zmc2V0O1xuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3BmKSkge1xuICAgICAgICB0by5fcGYgPSBnZXRQYXJzaW5nRmxhZ3MoZnJvbSk7XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbG9jYWxlKSkge1xuICAgICAgICB0by5fbG9jYWxlID0gZnJvbS5fbG9jYWxlO1xuICAgIH1cblxuICAgIGlmIChtb21lbnRQcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG1vbWVudFByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb3AgPSBtb21lbnRQcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgdmFsID0gZnJvbVtwcm9wXTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgICAgICAgIHRvW3Byb3BdID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG52YXIgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4vLyBNb21lbnQgcHJvdG90eXBlIG9iamVjdFxuZnVuY3Rpb24gTW9tZW50KGNvbmZpZykge1xuICAgIGNvcHlDb25maWcodGhpcywgY29uZmlnKTtcbiAgICB0aGlzLl9kID0gbmV3IERhdGUoY29uZmlnLl9kICE9IG51bGwgPyBjb25maWcuX2QuZ2V0VGltZSgpIDogTmFOKTtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3AgaW4gY2FzZSB1cGRhdGVPZmZzZXQgY3JlYXRlcyBuZXcgbW9tZW50XG4gICAgLy8gb2JqZWN0cy5cbiAgICBpZiAodXBkYXRlSW5Qcm9ncmVzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgdXBkYXRlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNNb21lbnQgKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNb21lbnQgfHwgKG9iaiAhPSBudWxsICYmIG9iai5faXNBTW9tZW50T2JqZWN0ICE9IG51bGwpO1xufVxuXG5mdW5jdGlvbiBhYnNGbG9vciAobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgLy8gLTAgLT4gMFxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcikgfHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoYXJndW1lbnRGb3JDb2VyY2lvbikge1xuICAgIHZhciBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb24sXG4gICAgICAgIHZhbHVlID0gMDtcblxuICAgIGlmIChjb2VyY2VkTnVtYmVyICE9PSAwICYmIGlzRmluaXRlKGNvZXJjZWROdW1iZXIpKSB7XG4gICAgICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG5mdW5jdGlvbiBjb21wYXJlQXJyYXlzKGFycmF5MSwgYXJyYXkyLCBkb250Q29udmVydCkge1xuICAgIHZhciBsZW4gPSBNYXRoLm1pbihhcnJheTEubGVuZ3RoLCBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgZGlmZnMgPSAwLFxuICAgICAgICBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB8fFxuICAgICAgICAgICAgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKSkge1xuICAgICAgICAgICAgZGlmZnMrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xufVxuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIGlmIChob29rcy5zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZ3MgPT09IGZhbHNlICYmXG4gICAgICAgICAgICAodHlwZW9mIGNvbnNvbGUgIT09ICAndW5kZWZpbmVkJykgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRGVwcmVjYXRpb24gd2FybmluZzogJyArIG1zZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZXByZWNhdGUobXNnLCBmbikge1xuICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGV4dGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChob29rcy5kZXByZWNhdGlvbkhhbmRsZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG51bGwsIG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0VGltZSkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBhcmc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZyA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBhcmcgKz0gJ1xcblsnICsgaSArICddICc7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSBrZXkgKyAnOiAnICsgYXJndW1lbnRzWzBdW2tleV0gKyAnLCAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZSgwLCAtMik7IC8vIFJlbW92ZSB0cmFpbGluZyBjb21tYSBhbmQgc3BhY2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaChhcmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2Fybihtc2cgKyAnXFxuQXJndW1lbnRzOiAnICsgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykuam9pbignJykgKyAnXFxuJyArIChuZXcgRXJyb3IoKSkuc3RhY2spO1xuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSwgZm4pO1xufVxuXG52YXIgZGVwcmVjYXRpb25zID0ge307XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZVNpbXBsZShuYW1lLCBtc2cpIHtcbiAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG5hbWUsIG1zZyk7XG4gICAgfVxuICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XG4gICAgICAgIHdhcm4obXNnKTtcbiAgICAgICAgZGVwcmVjYXRpb25zW25hbWVdID0gdHJ1ZTtcbiAgICB9XG59XG5cbmhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9IGZhbHNlO1xuaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbmZ1bmN0aW9uIHNldCAoY29uZmlnKSB7XG4gICAgdmFyIHByb3AsIGk7XG4gICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICBwcm9wID0gY29uZmlnW2ldO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihwcm9wKSkge1xuICAgICAgICAgICAgdGhpc1tpXSA9IHByb3A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzWydfJyArIGldID0gcHJvcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgLy8gTGVuaWVudCBvcmRpbmFsIHBhcnNpbmcgYWNjZXB0cyBqdXN0IGEgbnVtYmVyIGluIGFkZGl0aW9uIHRvXG4gICAgLy8gbnVtYmVyICsgKHBvc3NpYmx5KSBzdHVmZiBjb21pbmcgZnJvbSBfZGF5T2ZNb250aE9yZGluYWxQYXJzZS5cbiAgICAvLyBUT0RPOiBSZW1vdmUgXCJvcmRpbmFsUGFyc2VcIiBmYWxsYmFjayBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgdGhpcy5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQgPSBuZXcgUmVnRXhwKFxuICAgICAgICAodGhpcy5fZGF5T2ZNb250aE9yZGluYWxQYXJzZS5zb3VyY2UgfHwgdGhpcy5fb3JkaW5hbFBhcnNlLnNvdXJjZSkgK1xuICAgICAgICAgICAgJ3wnICsgKC9cXGR7MSwyfS8pLnNvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNoaWxkQ29uZmlnKSB7XG4gICAgdmFyIHJlcyA9IGV4dGVuZCh7fSwgcGFyZW50Q29uZmlnKSwgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gY2hpbGRDb25maWcpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW3Byb3BdKSAmJiBpc09iamVjdChjaGlsZENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgICAgICByZXNbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBwYXJlbnRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgIGV4dGVuZChyZXNbcHJvcF0sIGNoaWxkQ29uZmlnW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbcHJvcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGNoaWxkQ29uZmlnW3Byb3BdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICAgICAgaWYgKGhhc093blByb3AocGFyZW50Q29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwcm9wKSAmJlxuICAgICAgICAgICAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSkpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcbiAgICAgICAgICAgIHJlc1twcm9wXSA9IGV4dGVuZCh7fSwgcmVzW3Byb3BdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBMb2NhbGUoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgfVxufVxuXG52YXIga2V5cztcblxuaWYgKE9iamVjdC5rZXlzKSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzO1xufSBlbHNlIHtcbiAgICBrZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgaSwgcmVzID0gW107XG4gICAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaSkpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG59XG5cbnZhciBkZWZhdWx0Q2FsZW5kYXIgPSB7XG4gICAgc2FtZURheSA6ICdbVG9kYXkgYXRdIExUJyxcbiAgICBuZXh0RGF5IDogJ1tUb21vcnJvdyBhdF0gTFQnLFxuICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgbGFzdERheSA6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXG4gICAgbGFzdFdlZWsgOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXG4gICAgc2FtZUVsc2UgOiAnTCdcbn07XG5cbmZ1bmN0aW9uIGNhbGVuZGFyIChrZXksIG1vbSwgbm93KSB7XG4gICAgdmFyIG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXJbJ3NhbWVFbHNlJ107XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KSA/IG91dHB1dC5jYWxsKG1vbSwgbm93KSA6IG91dHB1dDtcbn1cblxudmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcbiAgICBMVFMgIDogJ2g6bW06c3MgQScsXG4gICAgTFQgICA6ICdoOm1tIEEnLFxuICAgIEwgICAgOiAnTU0vREQvWVlZWScsXG4gICAgTEwgICA6ICdNTU1NIEQsIFlZWVknLFxuICAgIExMTCAgOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gICAgTExMTCA6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xufTtcblxuZnVuY3Rpb24gbG9uZ0RhdGVGb3JtYXQgKGtleSkge1xuICAgIHZhciBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldLFxuICAgICAgICBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbn1cblxudmFyIGRlZmF1bHRJbnZhbGlkRGF0ZSA9ICdJbnZhbGlkIGRhdGUnO1xuXG5mdW5jdGlvbiBpbnZhbGlkRGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xufVxuXG52YXIgZGVmYXVsdE9yZGluYWwgPSAnJWQnO1xudmFyIGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcblxuZnVuY3Rpb24gb3JkaW5hbCAobnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xufVxuXG52YXIgZGVmYXVsdFJlbGF0aXZlVGltZSA9IHtcbiAgICBmdXR1cmUgOiAnaW4gJXMnLFxuICAgIHBhc3QgICA6ICclcyBhZ28nLFxuICAgIHMgIDogJ2EgZmV3IHNlY29uZHMnLFxuICAgIHNzIDogJyVkIHNlY29uZHMnLFxuICAgIG0gIDogJ2EgbWludXRlJyxcbiAgICBtbSA6ICclZCBtaW51dGVzJyxcbiAgICBoICA6ICdhbiBob3VyJyxcbiAgICBoaCA6ICclZCBob3VycycsXG4gICAgZCAgOiAnYSBkYXknLFxuICAgIGRkIDogJyVkIGRheXMnLFxuICAgIE0gIDogJ2EgbW9udGgnLFxuICAgIE1NIDogJyVkIG1vbnRocycsXG4gICAgeSAgOiAnYSB5ZWFyJyxcbiAgICB5eSA6ICclZCB5ZWFycydcbn07XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZSAobnVtYmVyLCB3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKSB7XG4gICAgdmFyIG91dHB1dCA9IHRoaXMuX3JlbGF0aXZlVGltZVtzdHJpbmddO1xuICAgIHJldHVybiAoaXNGdW5jdGlvbihvdXRwdXQpKSA/XG4gICAgICAgIG91dHB1dChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIDpcbiAgICAgICAgb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bWJlcik7XG59XG5cbmZ1bmN0aW9uIHBhc3RGdXR1cmUgKGRpZmYsIG91dHB1dCkge1xuICAgIHZhciBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oZm9ybWF0KSA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XG59XG5cbnZhciBhbGlhc2VzID0ge307XG5cbmZ1bmN0aW9uIGFkZFVuaXRBbGlhcyAodW5pdCwgc2hvcnRoYW5kKSB7XG4gICAgdmFyIGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2xvd2VyQ2FzZSArICdzJ10gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSB1bml0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0cykge1xuICAgIHJldHVybiB0eXBlb2YgdW5pdHMgPT09ICdzdHJpbmcnID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXSA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3QpIHtcbiAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXG4gICAgICAgIG5vcm1hbGl6ZWRQcm9wLFxuICAgICAgICBwcm9wO1xuXG4gICAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xuICAgICAgICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcbiAgICAgICAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemVkSW5wdXQ7XG59XG5cbnZhciBwcmlvcml0aWVzID0ge307XG5cbmZ1bmN0aW9uIGFkZFVuaXRQcmlvcml0eSh1bml0LCBwcmlvcml0eSkge1xuICAgIHByaW9yaXRpZXNbdW5pdF0gPSBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0c09iaikge1xuICAgIHZhciB1bml0cyA9IFtdO1xuICAgIGZvciAodmFyIHUgaW4gdW5pdHNPYmopIHtcbiAgICAgICAgdW5pdHMucHVzaCh7dW5pdDogdSwgcHJpb3JpdHk6IHByaW9yaXRpZXNbdV19KTtcbiAgICB9XG4gICAgdW5pdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXRzO1xufVxuXG5mdW5jdGlvbiB6ZXJvRmlsbChudW1iZXIsIHRhcmdldExlbmd0aCwgZm9yY2VTaWduKSB7XG4gICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoLFxuICAgICAgICBzaWduID0gbnVtYmVyID49IDA7XG4gICAgcmV0dXJuIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKSArIGFic051bWJlcjtcbn1cblxudmFyIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xuXG52YXIgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcblxudmFyIGZvcm1hdEZ1bmN0aW9ucyA9IHt9O1xuXG52YXIgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7fTtcblxuLy8gdG9rZW46ICAgICdNJ1xuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuLy8gb3JkaW5hbDogICdNbydcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxuZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4gKHRva2VuLCBwYWRkZWQsIG9yZGluYWwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGZ1bmMgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbY2FsbGJhY2tdKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0b2tlbikge1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBmdW5jO1xuICAgIH1cbiAgICBpZiAocGFkZGVkKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gemVyb0ZpbGwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChvcmRpbmFsKSB7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm9yZGluYWwoZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0b2tlbik7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICB2YXIgYXJyYXkgPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2VucyksIGksIGxlbmd0aDtcblxuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV0pIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyYXlbaV0gPSByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobW9tKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSAnJywgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gaXNGdW5jdGlvbihhcnJheVtpXSkgPyBhcnJheVtpXS5jYWxsKG1vbSwgZm9ybWF0KSA6IGFycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbn1cblxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG5mdW5jdGlvbiBmb3JtYXRNb21lbnQobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbS5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICBmb3JtYXQgPSBleHBhbmRGb3JtYXQoZm9ybWF0LCBtLmxvY2FsZURhdGEoKSk7XG4gICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcblxuICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShtKTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kRm9ybWF0KGZvcm1hdCwgbG9jYWxlKSB7XG4gICAgdmFyIGkgPSA1O1xuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgIH1cblxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICBpIC09IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdDtcbn1cblxudmFyIG1hdGNoMSAgICAgICAgID0gL1xcZC87ICAgICAgICAgICAgLy8gICAgICAgMCAtIDlcbnZhciBtYXRjaDIgICAgICAgICA9IC9cXGRcXGQvOyAgICAgICAgICAvLyAgICAgIDAwIC0gOTlcbnZhciBtYXRjaDMgICAgICAgICA9IC9cXGR7M30vOyAgICAgICAgIC8vICAgICAwMDAgLSA5OTlcbnZhciBtYXRjaDQgICAgICAgICA9IC9cXGR7NH0vOyAgICAgICAgIC8vICAgIDAwMDAgLSA5OTk5XG52YXIgbWF0Y2g2ICAgICAgICAgPSAvWystXT9cXGR7Nn0vOyAgICAvLyAtOTk5OTk5IC0gOTk5OTk5XG52YXIgbWF0Y2gxdG8yICAgICAgPSAvXFxkXFxkPy87ICAgICAgICAgLy8gICAgICAgMCAtIDk5XG52YXIgbWF0Y2gzdG80ICAgICAgPSAvXFxkXFxkXFxkXFxkPy87ICAgICAvLyAgICAgOTk5IC0gOTk5OVxudmFyIG1hdGNoNXRvNiAgICAgID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vOyAvLyAgIDk5OTk5IC0gOTk5OTk5XG52YXIgbWF0Y2gxdG8zICAgICAgPSAvXFxkezEsM30vOyAgICAgICAvLyAgICAgICAwIC0gOTk5XG52YXIgbWF0Y2gxdG80ICAgICAgPSAvXFxkezEsNH0vOyAgICAgICAvLyAgICAgICAwIC0gOTk5OVxudmFyIG1hdGNoMXRvNiAgICAgID0gL1srLV0/XFxkezEsNn0vOyAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuXG52YXIgbWF0Y2hVbnNpZ25lZCAgPSAvXFxkKy87ICAgICAgICAgICAvLyAgICAgICAwIC0gaW5mXG52YXIgbWF0Y2hTaWduZWQgICAgPSAvWystXT9cXGQrLzsgICAgICAvLyAgICAtaW5mIC0gaW5mXG5cbnZhciBtYXRjaE9mZnNldCAgICA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naTsgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG52YXIgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpOyAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxuXG52YXIgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vOyAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuXG4vLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cbi8vIGluY2x1ZGVzIHNjb3R0aXNoIGdhZWxpYyB0d28gd29yZCBhbmQgaHlwaGVuYXRlZCBtb250aHNcbnZhciBtYXRjaFdvcmQgPSAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGMDdcXHVGRjEwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaTtcblxuXG52YXIgcmVnZXhlcyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRSZWdleFRva2VuICh0b2tlbiwgcmVnZXgsIHN0cmljdFJlZ2V4KSB7XG4gICAgcmVnZXhlc1t0b2tlbl0gPSBpc0Z1bmN0aW9uKHJlZ2V4KSA/IHJlZ2V4IDogZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGVEYXRhKSB7XG4gICAgICAgIHJldHVybiAoaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXgpID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4gKHRva2VuLCBjb25maWcpIHtcbiAgICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKGNvbmZpZy5fc3RyaWN0LCBjb25maWcuX2xvY2FsZSk7XG59XG5cbi8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbmZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHMpIHtcbiAgICByZXR1cm4gcmVnZXhFc2NhcGUocy5yZXBsYWNlKCdcXFxcJywgJycpLnJlcGxhY2UoL1xcXFwoXFxbKXxcXFxcKFxcXSl8XFxbKFteXFxdXFxbXSopXFxdfFxcXFwoLikvZywgZnVuY3Rpb24gKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcbiAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHMpIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbn1cblxudmFyIHRva2VucyA9IHt9O1xuXG5mdW5jdGlvbiBhZGRQYXJzZVRva2VuICh0b2tlbiwgY2FsbGJhY2spIHtcbiAgICB2YXIgaSwgZnVuYyA9IGNhbGxiYWNrO1xuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRva2VuID0gW3Rva2VuXTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xuICAgICAgICBmdW5jID0gZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdG9rZW5zW3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbiAodG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgdG9rZW4pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbiwgaW5wdXQsIGNvbmZpZykge1xuICAgIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICAgICAgdG9rZW5zW3Rva2VuXShpbnB1dCwgY29uZmlnLl9hLCBjb25maWcsIHRva2VuKTtcbiAgICB9XG59XG5cbnZhciBZRUFSID0gMDtcbnZhciBNT05USCA9IDE7XG52YXIgREFURSA9IDI7XG52YXIgSE9VUiA9IDM7XG52YXIgTUlOVVRFID0gNDtcbnZhciBTRUNPTkQgPSA1O1xudmFyIE1JTExJU0VDT05EID0gNjtcbnZhciBXRUVLID0gNztcbnZhciBXRUVLREFZID0gODtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignWScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeSA9IHRoaXMueWVhcigpO1xuICAgIHJldHVybiB5IDw9IDk5OTkgPyAnJyArIHkgOiAnKycgKyB5O1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnllYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCAgIDRdLCAgICAgICAwLCAneWVhcicpO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWScsICA1XSwgICAgICAgMCwgJ3llYXInKTtcbmFkZEZvcm1hdFRva2VuKDAsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIDAsICd5ZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd5ZWFyJywgJ3knKTtcblxuLy8gUFJJT1JJVElFU1xuXG5hZGRVbml0UHJpb3JpdHkoJ3llYXInLCAxKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdZJywgICAgICBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdZWScsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdZWVlZJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdZWVlZWScsICBtYXRjaDF0bzYsIG1hdGNoNik7XG5hZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbmFkZFBhcnNlVG9rZW4oWydZWVlZWScsICdZWVlZWVknXSwgWUVBUik7XG5hZGRQYXJzZVRva2VuKCdZWVlZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W1lFQVJdID0gaW5wdXQubGVuZ3RoID09PSAyID8gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIDogdG9JbnQoaW5wdXQpO1xufSk7XG5hZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcbn0pO1xuYWRkUGFyc2VUb2tlbignWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG5mdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbn1cblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xufVxuXG4vLyBIT09LU1xuXG5ob29rcy5wYXJzZVR3b0RpZ2l0WWVhciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG59O1xuXG4vLyBNT01FTlRTXG5cbnZhciBnZXRTZXRZZWFyID0gbWFrZUdldFNldCgnRnVsbFllYXInLCB0cnVlKTtcblxuZnVuY3Rpb24gZ2V0SXNMZWFwWWVhciAoKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKCkpO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0U2V0ICh1bml0LCBrZWVwVGltZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldCQxKHRoaXMsIHVuaXQsIHZhbHVlKTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCBrZWVwVGltZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQodGhpcywgdW5pdCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXQgKG1vbSwgdW5pdCkge1xuICAgIHJldHVybiBtb20uaXNWYWxpZCgpID9cbiAgICAgICAgbW9tLl9kWydnZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKCkgOiBOYU47XG59XG5cbmZ1bmN0aW9uIHNldCQxIChtb20sIHVuaXQsIHZhbHVlKSB7XG4gICAgaWYgKG1vbS5pc1ZhbGlkKCkgJiYgIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICBpZiAodW5pdCA9PT0gJ0Z1bGxZZWFyJyAmJiBpc0xlYXBZZWFyKG1vbS55ZWFyKCkpICYmIG1vbS5tb250aCgpID09PSAxICYmIG1vbS5kYXRlKCkgPT09IDI5KSB7XG4gICAgICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0odmFsdWUsIG1vbS5tb250aCgpLCBkYXlzSW5Nb250aCh2YWx1ZSwgbW9tLm1vbnRoKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vbS5fZFsnc2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gc3RyaW5nR2V0ICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICByZXR1cm4gdGhpc1t1bml0c10oKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cblxuZnVuY3Rpb24gc3RyaW5nU2V0ICh1bml0cywgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHVuaXRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKHVuaXRzKTtcbiAgICAgICAgdmFyIHByaW9yaXRpemVkID0gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0cyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpb3JpdGl6ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbcHJpb3JpdGl6ZWRbaV0udW5pdF0odW5pdHNbcHJpb3JpdGl6ZWRbaV0udW5pdF0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gbW9kKG4sIHgpIHtcbiAgICByZXR1cm4gKChuICUgeCkgKyB4KSAlIHg7XG59XG5cbnZhciBpbmRleE9mO1xuXG5pZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICBpbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG59IGVsc2Uge1xuICAgIGluZGV4T2YgPSBmdW5jdGlvbiAobykge1xuICAgICAgICAvLyBJIGtub3dcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgIGlmIChpc05hTih5ZWFyKSB8fCBpc05hTihtb250aCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdmFyIG1vZE1vbnRoID0gbW9kKG1vbnRoLCAxMik7XG4gICAgeWVhciArPSAobW9udGggLSBtb2RNb250aCkgLyAxMjtcbiAgICByZXR1cm4gbW9kTW9udGggPT09IDEgPyAoaXNMZWFwWWVhcih5ZWFyKSA/IDI5IDogMjgpIDogKDMxIC0gbW9kTW9udGggJSA3ICUgMik7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMl0sICdNbycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5tb250aCgpICsgMTtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbignTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tb250aHNTaG9ydCh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdNTU1NJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tb250aHModGhpcywgZm9ybWF0KTtcbn0pO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnbW9udGgnLCAnTScpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ21vbnRoJywgOCk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignTScsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdNTScsICAgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignTU1NJywgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignTU1NTScsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ00nLCAnTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG59KTtcblxuYWRkUGFyc2VUb2tlbihbJ01NTScsICdNTU1NJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZywgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICBpZiAobW9udGggIT0gbnVsbCkge1xuICAgICAgICBhcnJheVtNT05USF0gPSBtb250aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkTW9udGggPSBpbnB1dDtcbiAgICB9XG59KTtcblxuLy8gTE9DQUxFU1xuXG52YXIgTU9OVEhTX0lOX0ZPUk1BVCA9IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/LztcbnZhciBkZWZhdWx0TG9jYWxlTW9udGhzID0gJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyk7XG5mdW5jdGlvbiBsb2NhbGVNb250aHMgKG0sIGZvcm1hdCkge1xuICAgIGlmICghbSkge1xuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpID8gdGhpcy5fbW9udGhzIDpcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1snc3RhbmRhbG9uZSddO1xuICAgIH1cbiAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHMpID8gdGhpcy5fbW9udGhzW20ubW9udGgoKV0gOlxuICAgICAgICB0aGlzLl9tb250aHNbKHRoaXMuX21vbnRocy5pc0Zvcm1hdCB8fCBNT05USFNfSU5fRk9STUFUKS50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJ11bbS5tb250aCgpXTtcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKTtcbmZ1bmN0aW9uIGxvY2FsZU1vbnRoc1Nob3J0IChtLCBmb3JtYXQpIHtcbiAgICBpZiAoIW0pIHtcbiAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpID8gdGhpcy5fbW9udGhzU2hvcnQgOlxuICAgICAgICAgICAgdGhpcy5fbW9udGhzU2hvcnRbJ3N0YW5kYWxvbmUnXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpID8gdGhpcy5fbW9udGhzU2hvcnRbbS5tb250aCgpXSA6XG4gICAgICAgIHRoaXMuX21vbnRoc1Nob3J0W01PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20ubW9udGgoKV07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgaWksIG1vbSwgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIGldKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRocyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9jYWxlTW9udGhzUGFyc2UgKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXJcbiAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5tb250aHNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xuICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKSArICd8XicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpO1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcbiAgICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU1NJyAmJiB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NJyAmJiB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIHNldE1vbnRoIChtb20sIHZhbHVlKSB7XG4gICAgdmFyIGRheU9mTW9udGg7XG5cbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgcmV0dXJuIG1vbTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9JbnQodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBtb20ubG9jYWxlRGF0YSgpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIFRPRE86IEFub3RoZXIgc2lsZW50IGZhaWx1cmU/XG4gICAgICAgICAgICBpZiAoIWlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXlPZk1vbnRoID0gTWF0aC5taW4obW9tLmRhdGUoKSwgZGF5c0luTW9udGgobW9tLnllYXIoKSwgdmFsdWUpKTtcbiAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgJ01vbnRoJ10odmFsdWUsIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBtb207XG59XG5cbmZ1bmN0aW9uIGdldFNldE1vbnRoICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHNldE1vbnRoKHRoaXMsIHZhbHVlKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0KHRoaXMsICdNb250aCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF5c0luTW9udGggKCkge1xuICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpKTtcbn1cblxudmFyIGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuZnVuY3Rpb24gbW9udGhzU2hvcnRSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XG5mdW5jdGlvbiBtb250aHNSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gZGVmYXVsdE1vbnRoc1JlZ2V4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZU1vbnRoc1BhcnNlICgpIHtcbiAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgc2hvcnRQaWVjZXMgPSBbXSwgbG9uZ1BpZWNlcyA9IFtdLCBtaXhlZFBpZWNlcyA9IFtdLFxuICAgICAgICBpLCBtb207XG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICBzaG9ydFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykpO1xuICAgICAgICBsb25nUGllY2VzLnB1c2godGhpcy5tb250aHMobW9tLCAnJykpO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICB9XG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xuICAgIH1cblxuICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcbiAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGUgKHksIG0sIGQsIGgsIE0sIHMsIG1zKSB7XG4gICAgLy8gY2FuJ3QganVzdCBhcHBseSgpIHRvIGNyZWF0ZSBhIGRhdGU6XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzE4MTM0OFxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpO1xuXG4gICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0RnVsbFllYXIoKSkpIHtcbiAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVUQ0RhdGUgKHkpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuXG4gICAgLy8gdGhlIERhdGUuVVRDIGZ1bmN0aW9uIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpKSB7XG4gICAgICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xufVxuXG4vLyBzdGFydC1vZi1maXJzdC13ZWVrIC0gc3RhcnQtb2YteWVhclxuZnVuY3Rpb24gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSB7XG4gICAgdmFyIC8vIGZpcnN0LXdlZWsgZGF5IC0tIHdoaWNoIGphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrICg0IGZvciBpc28sIDEgZm9yIG90aGVyKVxuICAgICAgICBmd2QgPSA3ICsgZG93IC0gZG95LFxuICAgICAgICAvLyBmaXJzdC13ZWVrIGRheSBsb2NhbCB3ZWVrZGF5IC0tIHdoaWNoIGxvY2FsIHdlZWtkYXkgaXMgZndkXG4gICAgICAgIGZ3ZGx3ID0gKDcgKyBjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cpICUgNztcblxuICAgIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKHllYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGxvY2FsV2Vla2RheSA9ICg3ICsgd2Vla2RheSAtIGRvdykgJSA3LFxuICAgICAgICB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldCxcbiAgICAgICAgcmVzWWVhciwgcmVzRGF5T2ZZZWFyO1xuXG4gICAgaWYgKGRheU9mWWVhciA8PSAwKSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyIC0gMTtcbiAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5c0luWWVhcihyZXNZZWFyKSArIGRheU9mWWVhcjtcbiAgICB9IGVsc2UgaWYgKGRheU9mWWVhciA+IGRheXNJblllYXIoeWVhcikpIHtcbiAgICAgICAgcmVzWWVhciA9IHllYXIgKyAxO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1llYXIgPSB5ZWFyO1xuICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXJcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB3ZWVrT2ZZZWFyKG1vbSwgZG93LCBkb3kpIHtcbiAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldChtb20ueWVhcigpLCBkb3csIGRveSksXG4gICAgICAgIHdlZWsgPSBNYXRoLmZsb29yKChtb20uZGF5T2ZZZWFyKCkgLSB3ZWVrT2Zmc2V0IC0gMSkgLyA3KSArIDEsXG4gICAgICAgIHJlc1dlZWssIHJlc1llYXI7XG5cbiAgICBpZiAod2VlayA8IDEpIHtcbiAgICAgICAgcmVzWWVhciA9IG1vbS55ZWFyKCkgLSAxO1xuICAgICAgICByZXNXZWVrID0gd2VlayArIHdlZWtzSW5ZZWFyKHJlc1llYXIsIGRvdywgZG95KTtcbiAgICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSkpIHtcbiAgICAgICAgcmVzV2VlayA9IHdlZWsgLSB3ZWVrc0luWWVhcihtb20ueWVhcigpLCBkb3csIGRveSk7XG4gICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKTtcbiAgICAgICAgcmVzV2VlayA9IHdlZWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2VlazogcmVzV2VlayxcbiAgICAgICAgeWVhcjogcmVzWWVhclxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHdlZWtzSW5ZZWFyKHllYXIsIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xuICAgIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCd3JywgWyd3dycsIDJdLCAnd28nLCAnd2VlaycpO1xuYWRkRm9ybWF0VG9rZW4oJ1cnLCBbJ1dXJywgMl0sICdXbycsICdpc29XZWVrJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd3ZWVrJywgJ3cnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2VlaycsICdXJyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuYWRkVW5pdFByaW9yaXR5KCd3ZWVrJywgNSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWsnLCA1KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd3JywgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCd3dycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ1cnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ1dXJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ3cnLCAnd3cnLCAnVycsICdXVyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAxKV0gPSB0b0ludChpbnB1dCk7XG59KTtcblxuLy8gSEVMUEVSU1xuXG4vLyBMT0NBTEVTXG5cbmZ1bmN0aW9uIGxvY2FsZVdlZWsgKG1vbSkge1xuICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZVdlZWsgPSB7XG4gICAgZG93IDogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgZG95IDogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxufTtcblxuZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZldlZWsgKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcbn1cblxuZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZlllYXIgKCkge1xuICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbn1cblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXRXZWVrIChpbnB1dCkge1xuICAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XG59XG5cbmZ1bmN0aW9uIGdldFNldElTT1dlZWsgKGlucHV0KSB7XG4gICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xufVxuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdkJywgMCwgJ2RvJywgJ2RheScpO1xuXG5hZGRGb3JtYXRUb2tlbignZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdkZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5cyh0aGlzLCBmb3JtYXQpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdlJywgMCwgMCwgJ3dlZWtkYXknKTtcbmFkZEZvcm1hdFRva2VuKCdFJywgMCwgMCwgJ2lzb1dlZWtkYXknKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2RheScsICdkJyk7XG5hZGRVbml0QWxpYXMoJ3dlZWtkYXknLCAnZScpO1xuYWRkVW5pdEFsaWFzKCdpc29XZWVrZGF5JywgJ0UnKTtcblxuLy8gUFJJT1JJVFlcbmFkZFVuaXRQcmlvcml0eSgnZGF5JywgMTEpO1xuYWRkVW5pdFByaW9yaXR5KCd3ZWVrZGF5JywgMTEpO1xuYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrZGF5JywgMTEpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ2QnLCAgICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignZScsICAgIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdFJywgICAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2RkJywgICBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZCcsICAgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdCk7XG59KTtcbmFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCAgIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2RkJywgJ2RkZCcsICdkZGRkJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHZhciB3ZWVrZGF5ID0gY29uZmlnLl9sb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcbiAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XG4gICAgICAgIHdlZWsuZCA9IHdlZWtkYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSBpbnB1dDtcbiAgICB9XG59KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydkJywgJ2UnLCAnRSddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICB3ZWVrW3Rva2VuXSA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG4vLyBIRUxQRVJTXG5cbmZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIGlmICghaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dCwgMTApO1xuICAgIH1cblxuICAgIGlucHV0ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcGFyc2VJc29XZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpICUgNyB8fCA3O1xuICAgIH1cbiAgICByZXR1cm4gaXNOYU4oaW5wdXQpID8gbnVsbCA6IGlucHV0O1xufVxuXG4vLyBMT0NBTEVTXG5cbnZhciBkZWZhdWx0TG9jYWxlV2Vla2RheXMgPSAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyk7XG5mdW5jdGlvbiBsb2NhbGVXZWVrZGF5cyAobSwgZm9ybWF0KSB7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX3dlZWtkYXlzKSA/IHRoaXMuX3dlZWtkYXlzIDpcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzWydzdGFuZGFsb25lJ107XG4gICAgfVxuICAgIHJldHVybiBpc0FycmF5KHRoaXMuX3dlZWtkYXlzKSA/IHRoaXMuX3dlZWtkYXlzW20uZGF5KCldIDpcbiAgICAgICAgdGhpcy5fd2Vla2RheXNbdGhpcy5fd2Vla2RheXMuaXNGb3JtYXQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSddW20uZGF5KCldO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpO1xuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNTaG9ydCAobSkge1xuICAgIHJldHVybiAobSkgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldIDogdGhpcy5fd2Vla2RheXNTaG9ydDtcbn1cblxudmFyIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKTtcbmZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzTWluIChtKSB7XG4gICAgcmV0dXJuIChtKSA/IHRoaXMuX3dlZWtkYXlzTWluW20uZGF5KCldIDogdGhpcy5fd2Vla2RheXNNaW47XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlJDEod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIGlpLCBtb20sIGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5cyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0cmljdCkge1xuICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNQYXJzZSAod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZSQxLmNhbGwodGhpcywgd2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG5cbiAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMud2Vla2RheXMobW9tLCAnJykucmVwbGFjZSgnLicsICdcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcLj8nKSArICckJywgJ2knKTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykucmVwbGFjZSgnLicsICdcXC4/JykgKyAnJCcsICdpJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICByZWdleCA9ICdeJyArIHRoaXMud2Vla2RheXMobW9tLCAnJykgKyAnfF4nICsgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpICsgJ3xeJyArIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkZCcgJiYgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGQnICYmIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkJyAmJiB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBNT01FTlRTXG5cbmZ1bmN0aW9uIGdldFNldERheU9mV2VlayAoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBpbnB1dCAhPSBudWxsID8gdGhpcyA6IE5hTjtcbiAgICB9XG4gICAgdmFyIGRheSA9IHRoaXMuX2lzVVRDID8gdGhpcy5fZC5nZXRVVENEYXkoKSA6IHRoaXMuX2QuZ2V0RGF5KCk7XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGlucHV0IC0gZGF5LCAnZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZXRMb2NhbGVEYXlPZldlZWsgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuICAgIHZhciB3ZWVrZGF5ID0gKHRoaXMuZGF5KCkgKyA3IC0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93KSAlIDc7XG4gICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrZGF5IDogdGhpcy5hZGQoaW5wdXQgLSB3ZWVrZGF5LCAnZCcpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRJU09EYXlPZldlZWsgKGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuXG4gICAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAgIC8vIGFzIGEgZ2V0dGVyLCByZXR1cm5zIDcgaW5zdGVhZCBvZiAwICgxLTcgcmFuZ2UgaW5zdGVhZCBvZiAwLTYpXG4gICAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5KHRoaXMuZGF5KCkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXkoKSB8fCA3O1xuICAgIH1cbn1cblxudmFyIGRlZmF1bHRXZWVrZGF5c1JlZ2V4ID0gbWF0Y2hXb3JkO1xuZnVuY3Rpb24gd2Vla2RheXNSZWdleCAoaXNTdHJpY3QpIHtcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBkZWZhdWx0V2Vla2RheXNSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0V2Vla2RheXNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xuZnVuY3Rpb24gd2Vla2RheXNTaG9ydFJlZ2V4IChpc1N0cmljdCkge1xuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlV2Vla2RheXNQYXJzZS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzU2hvcnRSZWdleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcbiAgICB9XG59XG5cbnZhciBkZWZhdWx0V2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcbmZ1bmN0aW9uIHdlZWtkYXlzTWluUmVnZXggKGlzU3RyaWN0KSB7XG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3RyaWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGNvbXB1dGVXZWVrZGF5c1BhcnNlICgpIHtcbiAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICB2YXIgbWluUGllY2VzID0gW10sIHNob3J0UGllY2VzID0gW10sIGxvbmdQaWVjZXMgPSBbXSwgbWl4ZWRQaWVjZXMgPSBbXSxcbiAgICAgICAgaSwgbW9tLCBtaW5wLCBzaG9ydHAsIGxvbmdwO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgbWlucCA9IHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XG4gICAgICAgIHNob3J0cCA9IHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKTtcbiAgICAgICAgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpO1xuICAgICAgICBtaW5QaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XG4gICAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xuICAgIH1cbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XG4gICAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcbiAgICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIG1peGVkUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuXG4gICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIHNob3J0UGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWluUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBoRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmhvdXJzKCkgJSAxMiB8fCAxMjtcbn1cblxuZnVuY3Rpb24ga0Zvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3VycygpIHx8IDI0O1xufVxuXG5hZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyXSwgMCwgJ2hvdXInKTtcbmFkZEZvcm1hdFRva2VuKCdoJywgWydoaCcsIDJdLCAwLCBoRm9ybWF0KTtcbmFkZEZvcm1hdFRva2VuKCdrJywgWydraycsIDJdLCAwLCBrRm9ybWF0KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyBoRm9ybWF0LmFwcGx5KHRoaXMpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyBoRm9ybWF0LmFwcGx5KHRoaXMpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgemVyb0ZpbGwodGhpcy5zZWNvbmRzKCksIDIpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdIbW0nLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcnICsgdGhpcy5ob3VycygpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKCdIbW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJycgKyB0aGlzLmhvdXJzKCkgKyB6ZXJvRmlsbCh0aGlzLm1pbnV0ZXMoKSwgMikgK1xuICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMik7XG59KTtcblxuZnVuY3Rpb24gbWVyaWRpZW0gKHRva2VuLCBsb3dlcmNhc2UpIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkubWVyaWRpZW0odGhpcy5ob3VycygpLCB0aGlzLm1pbnV0ZXMoKSwgbG93ZXJjYXNlKTtcbiAgICB9KTtcbn1cblxubWVyaWRpZW0oJ2EnLCB0cnVlKTtcbm1lcmlkaWVtKCdBJywgZmFsc2UpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnaG91cicsICdoJyk7XG5cbi8vIFBSSU9SSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2hvdXInLCAxMyk7XG5cbi8vIFBBUlNJTkdcblxuZnVuY3Rpb24gbWF0Y2hNZXJpZGllbSAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XG59XG5cbmFkZFJlZ2V4VG9rZW4oJ2EnLCAgbWF0Y2hNZXJpZGllbSk7XG5hZGRSZWdleFRva2VuKCdBJywgIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignSCcsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignaCcsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignaycsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdoaCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG5hZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xuYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XG5hZGRQYXJzZVRva2VuKFsnaycsICdrayddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIga0lucHV0ID0gdG9JbnQoaW5wdXQpO1xuICAgIGFycmF5W0hPVVJdID0ga0lucHV0ID09PSAyNCA/IDAgOiBrSW5wdXQ7XG59KTtcbmFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xufSk7XG5hZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0KTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gICAgdmFyIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgdmFyIHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gICAgdmFyIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbn0pO1xuXG4vLyBMT0NBTEVTXG5cbmZ1bmN0aW9uIGxvY2FsZUlzUE0gKGlucHV0KSB7XG4gICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xuICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxuICAgIHJldHVybiAoKGlucHV0ICsgJycpLnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAncCcpO1xufVxuXG52YXIgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaTtcbmZ1bmN0aW9uIGxvY2FsZU1lcmlkaWVtIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xuICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgICB9XG59XG5cblxuLy8gTU9NRU5UU1xuXG4vLyBTZXR0aW5nIHRoZSBob3VyIHNob3VsZCBrZWVwIHRoZSB0aW1lLCBiZWNhdXNlIHRoZSB1c2VyIGV4cGxpY2l0bHlcbi8vIHNwZWNpZmllZCB3aGljaCBob3VyIGhlIHdhbnRzLiBTbyB0cnlpbmcgdG8gbWFpbnRhaW4gdGhlIHNhbWUgaG91ciAoaW5cbi8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xuLy8gdGhpcyBydWxlLlxudmFyIGdldFNldEhvdXIgPSBtYWtlR2V0U2V0KCdIb3VycycsIHRydWUpO1xuXG4vLyBtb250aHNcbi8vIHdlZWtcbi8vIHdlZWtkYXlzXG4vLyBtZXJpZGllbVxudmFyIGJhc2VDb25maWcgPSB7XG4gICAgY2FsZW5kYXI6IGRlZmF1bHRDYWxlbmRhcixcbiAgICBsb25nRGF0ZUZvcm1hdDogZGVmYXVsdExvbmdEYXRlRm9ybWF0LFxuICAgIGludmFsaWREYXRlOiBkZWZhdWx0SW52YWxpZERhdGUsXG4gICAgb3JkaW5hbDogZGVmYXVsdE9yZGluYWwsXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXG4gICAgcmVsYXRpdmVUaW1lOiBkZWZhdWx0UmVsYXRpdmVUaW1lLFxuXG4gICAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxuICAgIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXG5cbiAgICB3ZWVrOiBkZWZhdWx0TG9jYWxlV2VlayxcblxuICAgIHdlZWtkYXlzOiBkZWZhdWx0TG9jYWxlV2Vla2RheXMsXG4gICAgd2Vla2RheXNNaW46IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcbiAgICB3ZWVrZGF5c1Nob3J0OiBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcblxuICAgIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlXG59O1xuXG4vLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXG52YXIgbG9jYWxlcyA9IHt9O1xudmFyIGxvY2FsZUZhbWlsaWVzID0ge307XG52YXIgZ2xvYmFsTG9jYWxlO1xuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA/IGtleS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJ18nLCAnLScpIDoga2V5O1xufVxuXG4vLyBwaWNrIHRoZSBsb2NhbGUgZnJvbSB0aGUgYXJyYXlcbi8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXG4vLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LCBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG5mdW5jdGlvbiBjaG9vc2VMb2NhbGUobmFtZXMpIHtcbiAgICB2YXIgaSA9IDAsIGosIG5leHQsIGxvY2FsZSwgc3BsaXQ7XG5cbiAgICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICBzcGxpdCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpXSkuc3BsaXQoJy0nKTtcbiAgICAgICAgaiA9IHNwbGl0Lmxlbmd0aDtcbiAgICAgICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xuICAgICAgICBuZXh0ID0gbmV4dCA/IG5leHQuc3BsaXQoJy0nKSA6IG51bGw7XG4gICAgICAgIHdoaWxlIChqID4gMCkge1xuICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShzcGxpdC5zbGljZSgwLCBqKS5qb2luKCctJykpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dCAmJiBuZXh0Lmxlbmd0aCA+PSBqICYmIGNvbXBhcmVBcnJheXMoc3BsaXQsIG5leHQsIHRydWUpID49IGogLSAxKSB7XG4gICAgICAgICAgICAgICAgLy90aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGxvYWRMb2NhbGUobmFtZSkge1xuICAgIHZhciBvbGRMb2NhbGUgPSBudWxsO1xuICAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXG4gICAgaWYgKCFsb2NhbGVzW25hbWVdICYmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgICAgIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xuICAgICAgICAgICAgdmFyIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcbiAgICAgICAgICAgIGFsaWFzZWRSZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XG4gICAgICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBsb2FkIGxvY2FsZSBhbmQgdGhlbiBzZXQgdGhlIGdsb2JhbCBsb2NhbGUuICBJZlxuLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcbi8vIGxvY2FsZSBrZXkuXG5mdW5jdGlvbiBnZXRTZXRHbG9iYWxMb2NhbGUgKGtleSwgdmFsdWVzKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgaWYgKGtleSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IGRlZmluZUxvY2FsZShrZXksIHZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gbW9tZW50LmR1cmF0aW9uLl9sb2NhbGUgPSBtb21lbnQuX2xvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdsb2JhbExvY2FsZS5fYWJicjtcbn1cblxuZnVuY3Rpb24gZGVmaW5lTG9jYWxlIChuYW1lLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xuICAgICAgICBjb25maWcuYWJiciA9IG5hbWU7XG4gICAgICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZSgnZGVmaW5lTG9jYWxlT3ZlcnJpZGUnLFxuICAgICAgICAgICAgICAgICAgICAndXNlIG1vbWVudC51cGRhdGVMb2NhbGUobG9jYWxlTmFtZSwgY29uZmlnKSB0byBjaGFuZ2UgJyArXG4gICAgICAgICAgICAgICAgICAgICdhbiBleGlzdGluZyBsb2NhbGUuIG1vbWVudC5kZWZpbmVMb2NhbGUobG9jYWxlTmFtZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICdjb25maWcpIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIGNyZWF0aW5nIGEgbmV3IGxvY2FsZSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RlZmluZS1sb2NhbGUvIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgICAgICBwYXJlbnRDb25maWcgPSBsb2NhbGVzW25hbWVdLl9jb25maWc7XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xuXG4gICAgICAgIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xuICAgICAgICAgICAgbG9jYWxlRmFtaWxpZXNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGRlZmluZUxvY2FsZSh4Lm5hbWUsIHguY29uZmlnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cbiAgICAgICAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXG4gICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcblxuXG4gICAgICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xuICAgICAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgICAgIHZhciBsb2NhbGUsIHRtcExvY2FsZSwgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcbiAgICAgICAgLy8gTUVSR0VcbiAgICAgICAgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcbiAgICAgICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcbiAgICAgICAgfVxuICAgICAgICBjb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBjb25maWcpO1xuICAgICAgICBsb2NhbGUgPSBuZXcgTG9jYWxlKGNvbmZpZyk7XG4gICAgICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xuICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcbiAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb2NhbGVzW25hbWVdO1xufVxuXG4vLyByZXR1cm5zIGxvY2FsZSBkYXRhXG5mdW5jdGlvbiBnZXRMb2NhbGUgKGtleSkge1xuICAgIHZhciBsb2NhbGU7XG5cbiAgICBpZiAoa2V5ICYmIGtleS5fbG9jYWxlICYmIGtleS5fbG9jYWxlLl9hYmJyKSB7XG4gICAgICAgIGtleSA9IGtleS5fbG9jYWxlLl9hYmJyO1xuICAgIH1cblxuICAgIGlmICgha2V5KSB7XG4gICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0FycmF5KGtleSkpIHtcbiAgICAgICAgLy9zaG9ydC1jaXJjdWl0IGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKGtleSk7XG4gICAgICAgIGlmIChsb2NhbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0gW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNob29zZUxvY2FsZShrZXkpO1xufVxuXG5mdW5jdGlvbiBsaXN0TG9jYWxlcygpIHtcbiAgICByZXR1cm4ga2V5cyhsb2NhbGVzKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tPdmVyZmxvdyAobSkge1xuICAgIHZhciBvdmVyZmxvdztcbiAgICB2YXIgYSA9IG0uX2E7XG5cbiAgICBpZiAoYSAmJiBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPT09IC0yKSB7XG4gICAgICAgIG92ZXJmbG93ID1cbiAgICAgICAgICAgIGFbTU9OVEhdICAgICAgIDwgMCB8fCBhW01PTlRIXSAgICAgICA+IDExICA/IE1PTlRIIDpcbiAgICAgICAgICAgIGFbREFURV0gICAgICAgIDwgMSB8fCBhW0RBVEVdICAgICAgICA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKSA/IERBVEUgOlxuICAgICAgICAgICAgYVtIT1VSXSAgICAgICAgPCAwIHx8IGFbSE9VUl0gICAgICAgID4gMjQgfHwgKGFbSE9VUl0gPT09IDI0ICYmIChhW01JTlVURV0gIT09IDAgfHwgYVtTRUNPTkRdICE9PSAwIHx8IGFbTUlMTElTRUNPTkRdICE9PSAwKSkgPyBIT1VSIDpcbiAgICAgICAgICAgIGFbTUlOVVRFXSAgICAgIDwgMCB8fCBhW01JTlVURV0gICAgICA+IDU5ICA/IE1JTlVURSA6XG4gICAgICAgICAgICBhW1NFQ09ORF0gICAgICA8IDAgfHwgYVtTRUNPTkRdICAgICAgPiA1OSAgPyBTRUNPTkQgOlxuICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gPCAwIHx8IGFbTUlMTElTRUNPTkRdID4gOTk5ID8gTUlMTElTRUNPTkQgOlxuICAgICAgICAgICAgLTE7XG5cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiYgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IERBVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrcyAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID0gV0VFSztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtkYXkgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUtEQVk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgICB9XG5cbiAgICByZXR1cm4gbTtcbn1cblxuLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxuZnVuY3Rpb24gZGVmYXVsdHMoYSwgYiwgYykge1xuICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGlmIChiICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZykge1xuICAgIC8vIGhvb2tzIGlzIGFjdHVhbGx5IHRoZSBleHBvcnRlZCBtb21lbnQgb2JqZWN0XG4gICAgdmFyIG5vd1ZhbHVlID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgIGlmIChjb25maWcuX3VzZVVUQykge1xuICAgICAgICByZXR1cm4gW25vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKV07XG4gICAgfVxuICAgIHJldHVybiBbbm93VmFsdWUuZ2V0RnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0TW9udGgoKSwgbm93VmFsdWUuZ2V0RGF0ZSgpXTtcbn1cblxuLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4vLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXG4vLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbmZ1bmN0aW9uIGNvbmZpZ0Zyb21BcnJheSAoY29uZmlnKSB7XG4gICAgdmFyIGksIGRhdGUsIGlucHV0ID0gW10sIGN1cnJlbnREYXRlLCBleHBlY3RlZFdlZWtkYXksIHllYXJUb1VzZTtcblxuICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGVBcnJheShjb25maWcpO1xuXG4gICAgLy9jb21wdXRlIGRheSBvZiB0aGUgeWVhciBmcm9tIHdlZWtzIGFuZCB3ZWVrZGF5c1xuICAgIGlmIChjb25maWcuX3cgJiYgY29uZmlnLl9hW0RBVEVdID09IG51bGwgJiYgY29uZmlnLl9hW01PTlRIXSA9PSBudWxsKSB7XG4gICAgICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xuICAgIH1cblxuICAgIC8vaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xuICAgIGlmIChjb25maWcuX2RheU9mWWVhciAhPSBudWxsKSB7XG4gICAgICAgIHllYXJUb1VzZSA9IGRlZmF1bHRzKGNvbmZpZy5fYVtZRUFSXSwgY3VycmVudERhdGVbWUVBUl0pO1xuXG4gICAgICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fCBjb25maWcuX2RheU9mWWVhciA9PT0gMCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgICAgICBjb25maWcuX2FbREFURV0gPSBkYXRlLmdldFVUQ0RhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cbiAgICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XG4gICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxuICAgIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xuICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSBjdXJyZW50RGF0ZVtpXTtcbiAgICB9XG5cbiAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICBmb3IgKDsgaSA8IDc7IGkrKykge1xuICAgICAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IChjb25maWcuX2FbaV0gPT0gbnVsbCkgPyAoaSA9PT0gMiA/IDEgOiAwKSA6IGNvbmZpZy5fYVtpXTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXG4gICAgaWYgKGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXG4gICAgICAgICAgICBjb25maWcuX2FbU0VDT05EXSA9PT0gMCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMCkge1xuICAgICAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xuICAgIH1cblxuICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShudWxsLCBpbnB1dCk7XG4gICAgZXhwZWN0ZWRXZWVrZGF5ID0gY29uZmlnLl91c2VVVEMgPyBjb25maWcuX2QuZ2V0VVRDRGF5KCkgOiBjb25maWcuX2QuZ2V0RGF5KCk7XG5cbiAgICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcbiAgICAvLyB3aXRoIHBhcnNlWm9uZS5cbiAgICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xuICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuX25leHREYXkpIHtcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMjQ7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIG1pc21hdGNoaW5nIGRheSBvZiB3ZWVrXG4gICAgaWYgKGNvbmZpZy5fdyAmJiB0eXBlb2YgY29uZmlnLl93LmQgIT09ICd1bmRlZmluZWQnICYmIGNvbmZpZy5fdy5kICE9PSBleHBlY3RlZFdlZWtkYXkpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpIHtcbiAgICB2YXIgdywgd2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95LCB0ZW1wLCB3ZWVrZGF5T3ZlcmZsb3c7XG5cbiAgICB3ID0gY29uZmlnLl93O1xuICAgIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcbiAgICAgICAgZG93ID0gMTtcbiAgICAgICAgZG95ID0gNDtcblxuICAgICAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIHRha2UgdGhlIGN1cnJlbnQgaXNvV2Vla1llYXIsIGJ1dCB0aGF0IGRlcGVuZHMgb25cbiAgICAgICAgLy8gaG93IHdlIGludGVycHJldCBub3cgKGxvY2FsLCB1dGMsIGZpeGVkIG9mZnNldCkuIFNvIGNyZWF0ZVxuICAgICAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxuICAgICAgICAvLyBjcmVhdGUgbm93KS5cbiAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LkdHLCBjb25maWcuX2FbWUVBUl0sIHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgMSwgNCkueWVhcik7XG4gICAgICAgIHdlZWsgPSBkZWZhdWx0cyh3LlcsIDEpO1xuICAgICAgICB3ZWVrZGF5ID0gZGVmYXVsdHMody5FLCAxKTtcbiAgICAgICAgaWYgKHdlZWtkYXkgPCAxIHx8IHdlZWtkYXkgPiA3KSB7XG4gICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xuICAgICAgICBkb3kgPSBjb25maWcuX2xvY2FsZS5fd2Vlay5kb3k7XG5cbiAgICAgICAgdmFyIGN1cldlZWsgPSB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIGRvdywgZG95KTtcblxuICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgY3VyV2Vlay55ZWFyKTtcblxuICAgICAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cbiAgICAgICAgd2VlayA9IGRlZmF1bHRzKHcudywgY3VyV2Vlay53ZWVrKTtcblxuICAgICAgICBpZiAody5kICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IHcuZDtcbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMCB8fCB3ZWVrZGF5ID4gNikge1xuICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAody5lICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5pbmcgb2Ygd2Vla1xuICAgICAgICAgICAgd2Vla2RheSA9IHcuZSArIGRvdztcbiAgICAgICAgICAgIGlmICh3LmUgPCAwIHx8IHcuZSA+IDYpIHtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbmluZyBvZiB3ZWVrXG4gICAgICAgICAgICB3ZWVrZGF5ID0gZG93O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh3ZWVrZGF5T3ZlcmZsb3cgIT0gbnVsbCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0ZW1wID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgICAgIGNvbmZpZy5fYVtZRUFSXSA9IHRlbXAueWVhcjtcbiAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcbiAgICB9XG59XG5cbi8vIGlzbyA4NjAxIHJlZ2V4XG4vLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbnZhciBleHRlbmRlZElzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xudmFyIGJhc2ljSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xuXG52YXIgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LztcblxudmFyIGlzb0RhdGVzID0gW1xuICAgIFsnWVlZWVlZLU1NLUREJywgL1srLV1cXGR7Nn0tXFxkXFxkLVxcZFxcZC9dLFxuICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC9dLFxuICAgIFsnR0dHRy1bV11XVy1FJywgL1xcZHs0fS1XXFxkXFxkLVxcZC9dLFxuICAgIFsnR0dHRy1bV11XVycsIC9cXGR7NH0tV1xcZFxcZC8sIGZhbHNlXSxcbiAgICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vXSxcbiAgICBbJ1lZWVktTU0nLCAvXFxkezR9LVxcZFxcZC8sIGZhbHNlXSxcbiAgICBbJ1lZWVlZWU1NREQnLCAvWystXVxcZHsxMH0vXSxcbiAgICBbJ1lZWVlNTUREJywgL1xcZHs4fS9dLFxuICAgIC8vIFlZWVlNTSBpcyBOT1QgYWxsb3dlZCBieSB0aGUgc3RhbmRhcmRcbiAgICBbJ0dHR0dbV11XV0UnLCAvXFxkezR9V1xcZHszfS9dLFxuICAgIFsnR0dHR1tXXVdXJywgL1xcZHs0fVdcXGR7Mn0vLCBmYWxzZV0sXG4gICAgWydZWVlZREREJywgL1xcZHs3fS9dXG5dO1xuXG4vLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG52YXIgaXNvVGltZXMgPSBbXG4gICAgWydISDptbTpzcy5TU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICAgIFsnSEg6bW06c3MsU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZCxcXGQrL10sXG4gICAgWydISDptbTpzcycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZC9dLFxuICAgIFsnSEg6bW0nLCAvXFxkXFxkOlxcZFxcZC9dLFxuICAgIFsnSEhtbXNzLlNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkXFwuXFxkKy9dLFxuICAgIFsnSEhtbXNzLFNTU1MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkLFxcZCsvXSxcbiAgICBbJ0hIbW1zcycsIC9cXGRcXGRcXGRcXGRcXGRcXGQvXSxcbiAgICBbJ0hIbW0nLCAvXFxkXFxkXFxkXFxkL10sXG4gICAgWydISCcsIC9cXGRcXGQvXVxuXTtcblxudmFyIGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoXFwtP1xcZCspL2k7XG5cbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XG5mdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZykge1xuICAgIHZhciBpLCBsLFxuICAgICAgICBzdHJpbmcgPSBjb25maWcuX2ksXG4gICAgICAgIG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKHN0cmluZykgfHwgYmFzaWNJc29SZWdleC5leGVjKHN0cmluZyksXG4gICAgICAgIGFsbG93VGltZSwgZGF0ZUZvcm1hdCwgdGltZUZvcm1hdCwgdHpGb3JtYXQ7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaXNvID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaXNvRGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNvRGF0ZXNbaV1bMV0uZXhlYyhtYXRjaFsxXSkpIHtcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0ID0gaXNvRGF0ZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb1RpbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKG1hdGNoWzNdKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBtYXRjaFsyXSBzaG91bGQgYmUgJ1QnIG9yIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYWxsb3dUaW1lICYmIHRpbWVGb3JtYXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzRdKSB7XG4gICAgICAgICAgICBpZiAodHpSZWdleC5leGVjKG1hdGNoWzRdKSkge1xuICAgICAgICAgICAgICAgIHR6Rm9ybWF0ID0gJ1onO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG59XG5cbi8vIFJGQyAyODIyIHJlZ2V4OiBGb3IgZGV0YWlscyBzZWUgaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI4MjIjc2VjdGlvbi0zLjNcbnZhciByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyh5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikge1xuICAgIHZhciByZXN1bHQgPSBbXG4gICAgICAgIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpLFxuICAgICAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0ciksXG4gICAgICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxuICAgICAgICBwYXJzZUludChob3VyU3RyLCAxMCksXG4gICAgICAgIHBhcnNlSW50KG1pbnV0ZVN0ciwgMTApXG4gICAgXTtcblxuICAgIGlmIChzZWNvbmRTdHIpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc2Vjb25kU3RyLCAxMCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpIHtcbiAgICB2YXIgeWVhciA9IHBhcnNlSW50KHllYXJTdHIsIDEwKTtcbiAgICBpZiAoeWVhciA8PSA0OSkge1xuICAgICAgICByZXR1cm4gMjAwMCArIHllYXI7XG4gICAgfSBlbHNlIGlmICh5ZWFyIDw9IDk5OSkge1xuICAgICAgICByZXR1cm4gMTkwMCArIHllYXI7XG4gICAgfVxuICAgIHJldHVybiB5ZWFyO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gICAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9cXChbXildKlxcKXxbXFxuXFx0XS9nLCAnICcpLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tXZWVrZGF5KHdlZWtkYXlTdHIsIHBhcnNlZElucHV0LCBjb25maWcpIHtcbiAgICBpZiAod2Vla2RheVN0cikge1xuICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbnRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXG4gICAgICAgIHZhciB3ZWVrZGF5UHJvdmlkZWQgPSBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpLFxuICAgICAgICAgICAgd2Vla2RheUFjdHVhbCA9IG5ldyBEYXRlKHBhcnNlZElucHV0WzBdLCBwYXJzZWRJbnB1dFsxXSwgcGFyc2VkSW5wdXRbMl0pLmdldERheSgpO1xuICAgICAgICBpZiAod2Vla2RheVByb3ZpZGVkICE9PSB3ZWVrZGF5QWN0dWFsKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBvYnNPZmZzZXRzID0ge1xuICAgIFVUOiAwLFxuICAgIEdNVDogMCxcbiAgICBFRFQ6IC00ICogNjAsXG4gICAgRVNUOiAtNSAqIDYwLFxuICAgIENEVDogLTUgKiA2MCxcbiAgICBDU1Q6IC02ICogNjAsXG4gICAgTURUOiAtNiAqIDYwLFxuICAgIE1TVDogLTcgKiA2MCxcbiAgICBQRFQ6IC03ICogNjAsXG4gICAgUFNUOiAtOCAqIDYwXG59O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0LCBtaWxpdGFyeU9mZnNldCwgbnVtT2Zmc2V0KSB7XG4gICAgaWYgKG9ic09mZnNldCkge1xuICAgICAgICByZXR1cm4gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICAgIH0gZWxzZSBpZiAobWlsaXRhcnlPZmZzZXQpIHtcbiAgICAgICAgLy8gdGhlIG9ubHkgYWxsb3dlZCBtaWxpdGFyeSB0eiBpcyBaXG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApO1xuICAgICAgICB2YXIgbSA9IGhtICUgMTAwLCBoID0gKGhtIC0gbSkgLyAxMDA7XG4gICAgICAgIHJldHVybiBoICogNjAgKyBtO1xuICAgIH1cbn1cblxuLy8gZGF0ZSBhbmQgdGltZSBmcm9tIHJlZiAyODIyIGZvcm1hdFxuZnVuY3Rpb24gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKSB7XG4gICAgdmFyIG1hdGNoID0gcmZjMjgyMi5leGVjKHByZXByb2Nlc3NSRkMyODIyKGNvbmZpZy5faSkpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgcGFyc2VkQXJyYXkgPSBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKG1hdGNoWzRdLCBtYXRjaFszXSwgbWF0Y2hbMl0sIG1hdGNoWzVdLCBtYXRjaFs2XSwgbWF0Y2hbN10pO1xuICAgICAgICBpZiAoIWNoZWNrV2Vla2RheShtYXRjaFsxXSwgcGFyc2VkQXJyYXksIGNvbmZpZykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5fYSA9IHBhcnNlZEFycmF5O1xuICAgICAgICBjb25maWcuX3R6bSA9IGNhbGN1bGF0ZU9mZnNldChtYXRjaFs4XSwgbWF0Y2hbOV0sIG1hdGNoWzEwXSk7XG5cbiAgICAgICAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xuICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuLy8gZGF0ZSBmcm9tIGlzbyBmb3JtYXQgb3IgZmFsbGJhY2tcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKSB7XG4gICAgdmFyIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xuXG4gICAgaWYgKG1hdGNoZWQgIT09IG51bGwpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xuICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmluYWwgYXR0ZW1wdCwgdXNlIElucHV0IEZhbGxiYWNrXG4gICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbn1cblxuaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4gICAgJ3ZhbHVlIHByb3ZpZGVkIGlzIG5vdCBpbiBhIHJlY29nbml6ZWQgUkZDMjgyMiBvciBJU08gZm9ybWF0LiBtb21lbnQgY29uc3RydWN0aW9uIGZhbGxzIGJhY2sgdG8ganMgRGF0ZSgpLCAnICtcbiAgICAnd2hpY2ggaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBhbGwgYnJvd3NlcnMgYW5kIHZlcnNpb25zLiBOb24gUkZDMjgyMi9JU08gZGF0ZSBmb3JtYXRzIGFyZSAnICtcbiAgICAnZGlzY291cmFnZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhbiB1cGNvbWluZyBtYWpvciByZWxlYXNlLiBQbGVhc2UgcmVmZXIgdG8gJyArXG4gICAgJ2h0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvanMtZGF0ZS8gZm9yIG1vcmUgaW5mby4nLFxuICAgIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcbiAgICB9XG4pO1xuXG4vLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgSVNPIHN0YW5kYXJkXG5ob29rcy5JU09fODYwMSA9IGZ1bmN0aW9uICgpIHt9O1xuXG4vLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgUkZDIDI4MjIgZm9ybVxuaG9va3MuUkZDXzI4MjIgPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpIHtcbiAgICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYW5vdGhlciBwYXJ0IG9mIHRoZSBjcmVhdGlvbiBmbG93IHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwc1xuICAgIGlmIChjb25maWcuX2YgPT09IGhvb2tzLklTT184NjAxKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5SRkNfMjgyMikge1xuICAgICAgICBjb25maWdGcm9tUkZDMjgyMihjb25maWcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbmZpZy5fYSA9IFtdO1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcblxuICAgIC8vIFRoaXMgYXJyYXkgaXMgdXNlZCB0byBtYWtlIGEgRGF0ZSwgZWl0aGVyIHdpdGggYG5ldyBEYXRlYCBvciBgRGF0ZS5VVENgXG4gICAgdmFyIHN0cmluZyA9ICcnICsgY29uZmlnLl9pLFxuICAgICAgICBpLCBwYXJzZWRJbnB1dCwgdG9rZW5zLCB0b2tlbiwgc2tpcHBlZCxcbiAgICAgICAgc3RyaW5nTGVuZ3RoID0gc3RyaW5nLmxlbmd0aCxcbiAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDA7XG5cbiAgICB0b2tlbnMgPSBleHBhbmRGb3JtYXQoY29uZmlnLl9mLCBjb25maWcuX2xvY2FsZSkubWF0Y2goZm9ybWF0dGluZ1Rva2VucykgfHwgW107XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICBwYXJzZWRJbnB1dCA9IChzdHJpbmcubWF0Y2goZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpKSB8fCBbXSlbMF07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2tlbicsIHRva2VuLCAncGFyc2VkSW5wdXQnLCBwYXJzZWRJbnB1dCxcbiAgICAgICAgLy8gICAgICAgICAncmVnZXgnLCBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykpO1xuICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgIHNraXBwZWQgPSBzdHJpbmcuc3Vic3RyKDAsIHN0cmluZy5pbmRleE9mKHBhcnNlZElucHV0KSk7XG4gICAgICAgICAgICBpZiAoc2tpcHBlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChza2lwcGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZShzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkgKyBwYXJzZWRJbnB1dC5sZW5ndGgpO1xuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCArPSBwYXJzZWRJbnB1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxuICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dKSB7XG4gICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIHBhcnNlZElucHV0LCBjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmNoYXJzTGVmdE92ZXIgPSBzdHJpbmdMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHN0cmluZyk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcbiAgICBpZiAoY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPT09IHRydWUgJiZcbiAgICAgICAgY29uZmlnLl9hW0hPVVJdID4gMCkge1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XG4gICAgLy8gaGFuZGxlIG1lcmlkaWVtXG4gICAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKGNvbmZpZy5fbG9jYWxlLCBjb25maWcuX2FbSE9VUl0sIGNvbmZpZy5fbWVyaWRpZW0pO1xuXG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XG4gICAgY2hlY2tPdmVyZmxvdyhjb25maWcpO1xufVxuXG5cbmZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcCAobG9jYWxlLCBob3VyLCBtZXJpZGllbSkge1xuICAgIHZhciBpc1BtO1xuXG4gICAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAgICAgLy8gbm90aGluZyB0byBkb1xuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9XG4gICAgaWYgKGxvY2FsZS5tZXJpZGllbUhvdXIgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XG4gICAgfSBlbHNlIGlmIChsb2NhbGUuaXNQTSAhPSBudWxsKSB7XG4gICAgICAgIC8vIEZhbGxiYWNrXG4gICAgICAgIGlzUG0gPSBsb2NhbGUuaXNQTShtZXJpZGllbSk7XG4gICAgICAgIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgaG91ciArPSAxMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBob3VyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxuICAgICAgICByZXR1cm4gaG91cjtcbiAgICB9XG59XG5cbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGFycmF5IG9mIGZvcm1hdCBzdHJpbmdzXG5mdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKSB7XG4gICAgdmFyIHRlbXBDb25maWcsXG4gICAgICAgIGJlc3RNb21lbnQsXG5cbiAgICAgICAgc2NvcmVUb0JlYXQsXG4gICAgICAgIGksXG4gICAgICAgIGN1cnJlbnRTY29yZTtcblxuICAgIGlmIChjb25maWcuX2YubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xuICAgICAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICB0ZW1wQ29uZmlnID0gY29weUNvbmZpZyh7fSwgY29uZmlnKTtcbiAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBDb25maWcuX3VzZVVUQyA9IGNvbmZpZy5fdXNlVVRDO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQodGVtcENvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcblxuICAgICAgICAvL29yIHRva2Vuc1xuICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcblxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuc2NvcmUgPSBjdXJyZW50U2NvcmU7XG5cbiAgICAgICAgaWYgKHNjb3JlVG9CZWF0ID09IG51bGwgfHwgY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQpIHtcbiAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHRlbmQoY29uZmlnLCBiZXN0TW9tZW50IHx8IHRlbXBDb25maWcpO1xufVxuXG5mdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoY29uZmlnLl9pKTtcbiAgICBjb25maWcuX2EgPSBtYXAoW2kueWVhciwgaS5tb250aCwgaS5kYXkgfHwgaS5kYXRlLCBpLmhvdXIsIGkubWludXRlLCBpLnNlY29uZCwgaS5taWxsaXNlY29uZF0sIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBwYXJzZUludChvYmosIDEwKTtcbiAgICB9KTtcblxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnIChjb25maWcpIHtcbiAgICB2YXIgcmVzID0gbmV3IE1vbWVudChjaGVja092ZXJmbG93KHByZXBhcmVDb25maWcoY29uZmlnKSkpO1xuICAgIGlmIChyZXMuX25leHREYXkpIHtcbiAgICAgICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXG4gICAgICAgIHJlcy5hZGQoMSwgJ2QnKTtcbiAgICAgICAgcmVzLl9uZXh0RGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVDb25maWcgKGNvbmZpZykge1xuICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgZm9ybWF0ID0gY29uZmlnLl9mO1xuXG4gICAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCh7bnVsbElucHV0OiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9tZW50KGlucHV0KSkge1xuICAgICAgICByZXR1cm4gbmV3IE1vbWVudChjaGVja092ZXJmbG93KGlucHV0KSk7XG4gICAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IGlucHV0O1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICB9ICBlbHNlIHtcbiAgICAgICAgY29uZmlnRnJvbUlucHV0KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1ZhbGlkKGNvbmZpZykpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xufVxuXG5mdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnKSB7XG4gICAgdmFyIGlucHV0ID0gY29uZmlnLl9pO1xuICAgIGlmIChpc1VuZGVmaW5lZChpbnB1dCkpIHtcbiAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dC52YWx1ZU9mKCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25maWdGcm9tU3RyaW5nKGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBjb25maWcuX2EgPSBtYXAoaW5wdXQuc2xpY2UoMCksIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChvYmosIDEwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XG4gICAgICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcbiAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsT3JVVEMgKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBpc1VUQykge1xuICAgIHZhciBjID0ge307XG5cbiAgICBpZiAobG9jYWxlID09PSB0cnVlIHx8IGxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgc3RyaWN0ID0gbG9jYWxlO1xuICAgICAgICBsb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKChpc09iamVjdChpbnB1dCkgJiYgaXNPYmplY3RFbXB0eShpbnB1dCkpIHx8XG4gICAgICAgICAgICAoaXNBcnJheShpbnB1dCkgJiYgaW5wdXQubGVuZ3RoID09PSAwKSkge1xuICAgICAgICBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gb2JqZWN0IGNvbnN0cnVjdGlvbiBtdXN0IGJlIGRvbmUgdGhpcyB3YXkuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgICBjLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICAgIGMuX3VzZVVUQyA9IGMuX2lzVVRDID0gaXNVVEM7XG4gICAgYy5fbCA9IGxvY2FsZTtcbiAgICBjLl9pID0gaW5wdXQ7XG4gICAgYy5fZiA9IGZvcm1hdDtcbiAgICBjLl9zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYWwgKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGZhbHNlKTtcbn1cblxudmFyIHByb3RvdHlwZU1pbiA9IGRlcHJlY2F0ZShcbiAgICAnbW9tZW50KCkubWluIGlzIGRlcHJlY2F0ZWQsIHVzZSBtb21lbnQubWF4IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvbWluLW1heC8nLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG90aGVyIDwgdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKCk7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG52YXIgcHJvdG90eXBlTWF4ID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5tYXggaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9taW4tbWF4LycsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgb3RoZXIuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gb3RoZXIgPiB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cbi8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXG4vLyBvdGhlci4gVGhpcyByZWxpZXMgb24gdGhlIGZ1bmN0aW9uIGZuIHRvIGJlIHRyYW5zaXRpdmUuXG4vL1xuLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxuLy8gZmlyc3QgZWxlbWVudCBpcyBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cy5cbmZ1bmN0aW9uIHBpY2tCeShmbiwgbW9tZW50cykge1xuICAgIHZhciByZXMsIGk7XG4gICAgaWYgKG1vbWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkobW9tZW50c1swXSkpIHtcbiAgICAgICAgbW9tZW50cyA9IG1vbWVudHNbMF07XG4gICAgfVxuICAgIGlmICghbW9tZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKCk7XG4gICAgfVxuICAgIHJlcyA9IG1vbWVudHNbMF07XG4gICAgZm9yIChpID0gMTsgaSA8IG1vbWVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKCFtb21lbnRzW2ldLmlzVmFsaWQoKSB8fCBtb21lbnRzW2ldW2ZuXShyZXMpKSB7XG4gICAgICAgICAgICByZXMgPSBtb21lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XG5mdW5jdGlvbiBtaW4gKCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcmV0dXJuIHBpY2tCeSgnaXNCZWZvcmUnLCBhcmdzKTtcbn1cblxuZnVuY3Rpb24gbWF4ICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHJldHVybiBwaWNrQnkoJ2lzQWZ0ZXInLCBhcmdzKTtcbn1cblxudmFyIG5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3cgPyBEYXRlLm5vdygpIDogKyhuZXcgRGF0ZSgpKTtcbn07XG5cbnZhciBvcmRlcmluZyA9IFsneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICdtaWxsaXNlY29uZCddO1xuXG5mdW5jdGlvbiBpc0R1cmF0aW9uVmFsaWQobSkge1xuICAgIGZvciAodmFyIGtleSBpbiBtKSB7XG4gICAgICAgIGlmICghKGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiYgKG1ba2V5XSA9PSBudWxsIHx8ICFpc05hTihtW2tleV0pKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1bml0SGFzRGVjaW1hbCA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkZXJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKG1bb3JkZXJpbmdbaV1dKSB7XG4gICAgICAgICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyc2VGbG9hdChtW29yZGVyaW5nW2ldXSkgIT09IHRvSW50KG1bb3JkZXJpbmdbaV1dKSkge1xuICAgICAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkJDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUludmFsaWQkMSgpIHtcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcbn1cblxuZnVuY3Rpb24gRHVyYXRpb24gKGR1cmF0aW9uKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKSxcbiAgICAgICAgeWVhcnMgPSBub3JtYWxpemVkSW5wdXQueWVhciB8fCAwLFxuICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgIG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwLFxuICAgICAgICB3ZWVrcyA9IG5vcm1hbGl6ZWRJbnB1dC53ZWVrIHx8IDAsXG4gICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgIGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXIgfHwgMCxcbiAgICAgICAgbWludXRlcyA9IG5vcm1hbGl6ZWRJbnB1dC5taW51dGUgfHwgMCxcbiAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kIHx8IDA7XG5cbiAgICB0aGlzLl9pc1ZhbGlkID0gaXNEdXJhdGlvblZhbGlkKG5vcm1hbGl6ZWRJbnB1dCk7XG5cbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9ICttaWxsaXNlY29uZHMgK1xuICAgICAgICBzZWNvbmRzICogMWUzICsgLy8gMTAwMFxuICAgICAgICBtaW51dGVzICogNmU0ICsgLy8gMTAwMCAqIDYwXG4gICAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vdXNpbmcgMTAwMCAqIDYwICogNjAgaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxuICAgIC8vIEJlY2F1c2Ugb2YgZGF0ZUFkZFJlbW92ZSB0cmVhdHMgMjQgaG91cnMgYXMgZGlmZmVyZW50IGZyb20gYVxuICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICB0aGlzLl9kYXlzID0gK2RheXMgK1xuICAgICAgICB3ZWVrcyAqIDc7XG4gICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0byB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXG4gICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICAgIHF1YXJ0ZXJzICogMyArXG4gICAgICAgIHllYXJzICogMTI7XG5cbiAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcblxuICAgIHRoaXMuX2J1YmJsZSgpO1xufVxuXG5mdW5jdGlvbiBpc0R1cmF0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRHVyYXRpb247XG59XG5cbmZ1bmN0aW9uIGFic1JvdW5kIChudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgtMSAqIG51bWJlcikgKiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIpO1xuICAgIH1cbn1cblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBvZmZzZXQgKHRva2VuLCBzZXBhcmF0b3IpIHtcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy51dGNPZmZzZXQoKTtcbiAgICAgICAgdmFyIHNpZ24gPSAnKyc7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xuICAgICAgICAgICAgc2lnbiA9ICctJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2lnbiArIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgKyBzZXBhcmF0b3IgKyB6ZXJvRmlsbCh+fihvZmZzZXQpICUgNjAsIDIpO1xuICAgIH0pO1xufVxuXG5vZmZzZXQoJ1onLCAnOicpO1xub2Zmc2V0KCdaWicsICcnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdaJywgIG1hdGNoU2hvcnRPZmZzZXQpO1xuYWRkUmVnZXhUb2tlbignWlonLCBtYXRjaFNob3J0T2Zmc2V0KTtcbmFkZFBhcnNlVG9rZW4oWydaJywgJ1paJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fdXNlVVRDID0gdHJ1ZTtcbiAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuLy8gdGltZXpvbmUgY2h1bmtlclxuLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXG4vLyAnLTE1MzAnICA+IFsnLTE1JywgJzMwJ11cbnZhciBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcblxuZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaGVyLCBzdHJpbmcpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IChzdHJpbmcgfHwgJycpLm1hdGNoKG1hdGNoZXIpO1xuXG4gICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNodW5rICAgPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0gfHwgW107XG4gICAgdmFyIHBhcnRzICAgPSAoY2h1bmsgKyAnJykubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsIDAsIDBdO1xuICAgIHZhciBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHRvSW50KHBhcnRzWzJdKTtcblxuICAgIHJldHVybiBtaW51dGVzID09PSAwID9cbiAgICAgIDAgOlxuICAgICAgcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcbn1cblxuLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbmZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dCwgbW9kZWwpIHtcbiAgICB2YXIgcmVzLCBkaWZmO1xuICAgIGlmIChtb2RlbC5faXNVVEMpIHtcbiAgICAgICAgcmVzID0gbW9kZWwuY2xvbmUoKTtcbiAgICAgICAgZGlmZiA9IChpc01vbWVudChpbnB1dCkgfHwgaXNEYXRlKGlucHV0KSA/IGlucHV0LnZhbHVlT2YoKSA6IGNyZWF0ZUxvY2FsKGlucHV0KS52YWx1ZU9mKCkpIC0gcmVzLnZhbHVlT2YoKTtcbiAgICAgICAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxuICAgICAgICByZXMuX2Quc2V0VGltZShyZXMuX2QudmFsdWVPZigpICsgZGlmZik7XG4gICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChyZXMsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoaW5wdXQpLmxvY2FsKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRlT2Zmc2V0IChtKSB7XG4gICAgLy8gT24gRmlyZWZveC4yNCBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgYSBmbG9hdGluZyBwb2ludC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgICByZXR1cm4gLU1hdGgucm91bmQobS5fZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gMTUpICogMTU7XG59XG5cbi8vIEhPT0tTXG5cbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cbi8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge307XG5cbi8vIE1PTUVOVFNcblxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XG4vLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxuLy8gNTozMToyNiArMDIwMCBJdCBpcyBwb3NzaWJsZSB0aGF0IDU6MzE6MjYgZG9lc24ndCBleGlzdCB3aXRoIG9mZnNldFxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxuLy9cbi8vIEtlZXBpbmcgdGhlIHRpbWUgYWN0dWFsbHkgYWRkcy9zdWJ0cmFjdHMgKG9uZSBob3VyKVxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XG4vLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4vLyBfY2hhbmdlSW5Qcm9ncmVzcyA9PSB0cnVlIGNhc2UsIHRoZW4gd2UgaGF2ZSB0byBhZGp1c3QsIGJlY2F1c2Vcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXG5mdW5jdGlvbiBnZXRTZXRPZmZzZXQgKGlucHV0LCBrZWVwTG9jYWxUaW1lLCBrZWVwTWludXRlcykge1xuICAgIHZhciBvZmZzZXQgPSB0aGlzLl9vZmZzZXQgfHwgMCxcbiAgICAgICAgbG9jYWxBZGp1c3Q7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gaW5wdXQgIT0gbnVsbCA/IHRoaXMgOiBOYU47XG4gICAgfVxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xuICAgICAgICAgICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX2lzVVRDID0gdHJ1ZTtcbiAgICAgICAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGxvY2FsQWRqdXN0LCAnbScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgIT09IGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGNyZWF0ZUR1cmF0aW9uKGlucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jaGFuZ2VJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/IG9mZnNldCA6IGdldERhdGVPZmZzZXQodGhpcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZXRab25lIChpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXRUb1VUQyAoa2VlcExvY2FsVGltZSkge1xuICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbCAoa2VlcExvY2FsVGltZSkge1xuICAgIGlmICh0aGlzLl9pc1VUQykge1xuICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcbiAgICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xuICAgICAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCAoKSB7XG4gICAgaWYgKHRoaXMuX3R6bSAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXRjT2Zmc2V0KHRoaXMuX3R6bSwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2kgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0Wm9uZSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hPZmZzZXQsIHRoaXMuX2kpO1xuICAgICAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodFpvbmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoMCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGhhc0FsaWduZWRIb3VyT2Zmc2V0IChpbnB1dCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpbnB1dCA9IGlucHV0ID8gY3JlYXRlTG9jYWwoaW5wdXQpLnV0Y09mZnNldCgpIDogMDtcblxuICAgIHJldHVybiAodGhpcy51dGNPZmZzZXQoKSAtIGlucHV0KSAlIDYwID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZSAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy51dGNPZmZzZXQoKSA+IHRoaXMuY2xvbmUoKS5tb250aCgwKS51dGNPZmZzZXQoKSB8fFxuICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnV0Y09mZnNldCgpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkICgpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX2lzRFNUU2hpZnRlZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgICB9XG5cbiAgICB2YXIgYyA9IHt9O1xuXG4gICAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcblxuICAgIGlmIChjLl9hKSB7XG4gICAgICAgIHZhciBvdGhlciA9IGMuX2lzVVRDID8gY3JlYXRlVVRDKGMuX2EpIDogY3JlYXRlTG9jYWwoYy5fYSk7XG4gICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICBjb21wYXJlQXJyYXlzKGMuX2EsIG90aGVyLnRvQXJyYXkoKSkgPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWwgKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/ICF0aGlzLl9pc1VUQyA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1V0Y09mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNVdGMgKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDICYmIHRoaXMuX29mZnNldCA9PT0gMCA6IGZhbHNlO1xufVxuXG4vLyBBU1AuTkVUIGpzb24gZGF0ZSBmb3JtYXQgcmVnZXhcbnZhciBhc3BOZXRSZWdleCA9IC9eKFxcLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xuXG4vLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxuLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxudmFyIGlzb1JlZ2V4ID0gL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcblxuZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24gKGlucHV0LCBrZXkpIHtcbiAgICB2YXIgZHVyYXRpb24gPSBpbnB1dCxcbiAgICAgICAgLy8gbWF0Y2hpbmcgYWdhaW5zdCByZWdleHAgaXMgZXhwZW5zaXZlLCBkbyBpdCBvbiBkZW1hbmRcbiAgICAgICAgbWF0Y2ggPSBudWxsLFxuICAgICAgICBzaWduLFxuICAgICAgICByZXQsXG4gICAgICAgIGRpZmZSZXM7XG5cbiAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICBtcyA6IGlucHV0Ll9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICBkICA6IGlucHV0Ll9kYXlzLFxuICAgICAgICAgICAgTSAgOiBpbnB1dC5fbW9udGhzXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgZHVyYXRpb25ba2V5XSA9IGlucHV0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmRzID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgIHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IDE7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgeSAgOiAwLFxuICAgICAgICAgICAgZCAgOiB0b0ludChtYXRjaFtEQVRFXSkgICAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgaCAgOiB0b0ludChtYXRjaFtIT1VSXSkgICAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgbSAgOiB0b0ludChtYXRjaFtNSU5VVEVdKSAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgcyAgOiB0b0ludChtYXRjaFtTRUNPTkRdKSAgICAgICAgICAgICAgICAgICAgICAgKiBzaWduLFxuICAgICAgICAgICAgbXMgOiB0b0ludChhYnNSb3VuZChtYXRjaFtNSUxMSVNFQ09ORF0gKiAxMDAwKSkgKiBzaWduIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoISEobWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogKG1hdGNoWzFdID09PSAnKycpID8gMSA6IDE7XG4gICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgeSA6IHBhcnNlSXNvKG1hdGNoWzJdLCBzaWduKSxcbiAgICAgICAgICAgIE0gOiBwYXJzZUlzbyhtYXRjaFszXSwgc2lnbiksXG4gICAgICAgICAgICB3IDogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxuICAgICAgICAgICAgZCA6IHBhcnNlSXNvKG1hdGNoWzVdLCBzaWduKSxcbiAgICAgICAgICAgIGggOiBwYXJzZUlzbyhtYXRjaFs2XSwgc2lnbiksXG4gICAgICAgICAgICBtIDogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxuICAgICAgICAgICAgcyA6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoZHVyYXRpb24gPT0gbnVsbCkgey8vIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ29iamVjdCcgJiYgKCdmcm9tJyBpbiBkdXJhdGlvbiB8fCAndG8nIGluIGR1cmF0aW9uKSkge1xuICAgICAgICBkaWZmUmVzID0gbW9tZW50c0RpZmZlcmVuY2UoY3JlYXRlTG9jYWwoZHVyYXRpb24uZnJvbSksIGNyZWF0ZUxvY2FsKGR1cmF0aW9uLnRvKSk7XG5cbiAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgZHVyYXRpb24ubXMgPSBkaWZmUmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJldCA9IG5ldyBEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkgJiYgaGFzT3duUHJvcChpbnB1dCwgJ19sb2NhbGUnKSkge1xuICAgICAgICByZXQuX2xvY2FsZSA9IGlucHV0Ll9sb2NhbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5jcmVhdGVEdXJhdGlvbi5pbnZhbGlkID0gY3JlYXRlSW52YWxpZCQxO1xuXG5mdW5jdGlvbiBwYXJzZUlzbyAoaW5wLCBzaWduKSB7XG4gICAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cbiAgICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXG4gICAgdmFyIHJlcyA9IGlucCAmJiBwYXJzZUZsb2F0KGlucC5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuICAgIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcbn1cblxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgIHZhciByZXMgPSB7bWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDB9O1xuXG4gICAgcmVzLm1vbnRocyA9IG90aGVyLm1vbnRoKCkgLSBiYXNlLm1vbnRoKCkgK1xuICAgICAgICAob3RoZXIueWVhcigpIC0gYmFzZS55ZWFyKCkpICogMTI7XG4gICAgaWYgKGJhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKS5pc0FmdGVyKG90aGVyKSkge1xuICAgICAgICAtLXJlcy5tb250aHM7XG4gICAgfVxuXG4gICAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICsoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpKTtcblxuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgdmFyIHJlcztcbiAgICBpZiAoIShiYXNlLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiB7bWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDB9O1xuICAgIH1cblxuICAgIG90aGVyID0gY2xvbmVXaXRoT2Zmc2V0KG90aGVyLCBiYXNlKTtcbiAgICBpZiAoYmFzZS5pc0JlZm9yZShvdGhlcikpIHtcbiAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShvdGhlciwgYmFzZSk7XG4gICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFRPRE86IHJlbW92ZSAnbmFtZScgYXJnIGFmdGVyIGRlcHJlY2F0aW9uIGlzIHJlbW92ZWRcbmZ1bmN0aW9uIGNyZWF0ZUFkZGVyKGRpcmVjdGlvbiwgbmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsLCBwZXJpb2QpIHtcbiAgICAgICAgdmFyIGR1ciwgdG1wO1xuICAgICAgICAvL2ludmVydCB0aGUgYXJndW1lbnRzLCBidXQgY29tcGxhaW4gYWJvdXQgaXRcbiAgICAgICAgaWYgKHBlcmlvZCAhPT0gbnVsbCAmJiAhaXNOYU4oK3BlcmlvZCkpIHtcbiAgICAgICAgICAgIGRlcHJlY2F0ZVNpbXBsZShuYW1lLCAnbW9tZW50KCkuJyArIG5hbWUgICsgJyhwZXJpb2QsIG51bWJlcikgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBtb21lbnQoKS4nICsgbmFtZSArICcobnVtYmVyLCBwZXJpb2QpLiAnICtcbiAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9hZGQtaW52ZXJ0ZWQtcGFyYW0vIGZvciBtb3JlIGluZm8uJyk7XG4gICAgICAgICAgICB0bXAgPSB2YWw7IHZhbCA9IHBlcmlvZDsgcGVyaW9kID0gdG1wO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyArdmFsIDogdmFsO1xuICAgICAgICBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XG4gICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYWRkU3VidHJhY3QgKG1vbSwgZHVyYXRpb24sIGlzQWRkaW5nLCB1cGRhdGVPZmZzZXQpIHtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZHVyYXRpb24uX21pbGxpc2Vjb25kcyxcbiAgICAgICAgZGF5cyA9IGFic1JvdW5kKGR1cmF0aW9uLl9kYXlzKSxcbiAgICAgICAgbW9udGhzID0gYWJzUm91bmQoZHVyYXRpb24uX21vbnRocyk7XG5cbiAgICBpZiAoIW1vbS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZU9mZnNldCA9IHVwZGF0ZU9mZnNldCA9PSBudWxsID8gdHJ1ZSA6IHVwZGF0ZU9mZnNldDtcblxuICAgIGlmIChtb250aHMpIHtcbiAgICAgICAgc2V0TW9udGgobW9tLCBnZXQobW9tLCAnTW9udGgnKSArIG1vbnRocyAqIGlzQWRkaW5nKTtcbiAgICB9XG4gICAgaWYgKGRheXMpIHtcbiAgICAgICAgc2V0JDEobW9tLCAnRGF0ZScsIGdldChtb20sICdEYXRlJykgKyBkYXlzICogaXNBZGRpbmcpO1xuICAgIH1cbiAgICBpZiAobWlsbGlzZWNvbmRzKSB7XG4gICAgICAgIG1vbS5fZC5zZXRUaW1lKG1vbS5fZC52YWx1ZU9mKCkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KG1vbSwgZGF5cyB8fCBtb250aHMpO1xuICAgIH1cbn1cblxudmFyIGFkZCAgICAgID0gY3JlYXRlQWRkZXIoMSwgJ2FkZCcpO1xudmFyIHN1YnRyYWN0ID0gY3JlYXRlQWRkZXIoLTEsICdzdWJ0cmFjdCcpO1xuXG5mdW5jdGlvbiBnZXRDYWxlbmRhckZvcm1hdChteU1vbWVudCwgbm93KSB7XG4gICAgdmFyIGRpZmYgPSBteU1vbWVudC5kaWZmKG5vdywgJ2RheXMnLCB0cnVlKTtcbiAgICByZXR1cm4gZGlmZiA8IC02ID8gJ3NhbWVFbHNlJyA6XG4gICAgICAgICAgICBkaWZmIDwgLTEgPyAnbGFzdFdlZWsnIDpcbiAgICAgICAgICAgIGRpZmYgPCAwID8gJ2xhc3REYXknIDpcbiAgICAgICAgICAgIGRpZmYgPCAxID8gJ3NhbWVEYXknIDpcbiAgICAgICAgICAgIGRpZmYgPCAyID8gJ25leHREYXknIDpcbiAgICAgICAgICAgIGRpZmYgPCA3ID8gJ25leHRXZWVrJyA6ICdzYW1lRWxzZSc7XG59XG5cbmZ1bmN0aW9uIGNhbGVuZGFyJDEgKHRpbWUsIGZvcm1hdHMpIHtcbiAgICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxuICAgIC8vIEdldHRpbmcgc3RhcnQtb2YtdG9kYXkgZGVwZW5kcyBvbiB3aGV0aGVyIHdlJ3JlIGxvY2FsL3V0Yy9vZmZzZXQgb3Igbm90LlxuICAgIHZhciBub3cgPSB0aW1lIHx8IGNyZWF0ZUxvY2FsKCksXG4gICAgICAgIHNvZCA9IGNsb25lV2l0aE9mZnNldChub3csIHRoaXMpLnN0YXJ0T2YoJ2RheScpLFxuICAgICAgICBmb3JtYXQgPSBob29rcy5jYWxlbmRhckZvcm1hdCh0aGlzLCBzb2QpIHx8ICdzYW1lRWxzZSc7XG5cbiAgICB2YXIgb3V0cHV0ID0gZm9ybWF0cyAmJiAoaXNGdW5jdGlvbihmb3JtYXRzW2Zvcm1hdF0pID8gZm9ybWF0c1tmb3JtYXRdLmNhbGwodGhpcywgbm93KSA6IGZvcm1hdHNbZm9ybWF0XSk7XG5cbiAgICByZXR1cm4gdGhpcy5mb3JtYXQob3V0cHV0IHx8IHRoaXMubG9jYWxlRGF0YSgpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcywgY3JlYXRlTG9jYWwobm93KSkpO1xufVxuXG5mdW5jdGlvbiBjbG9uZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBNb21lbnQodGhpcyk7XG59XG5cbmZ1bmN0aW9uIGlzQWZ0ZXIgKGlucHV0LCB1bml0cykge1xuICAgIHZhciBsb2NhbElucHV0ID0gaXNNb21lbnQoaW5wdXQpID8gaW5wdXQgOiBjcmVhdGVMb2NhbChpbnB1dCk7XG4gICAgaWYgKCEodGhpcy5pc1ZhbGlkKCkgJiYgbG9jYWxJbnB1dC5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyghaXNVbmRlZmluZWQodW5pdHMpID8gdW5pdHMgOiAnbWlsbGlzZWNvbmQnKTtcbiAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID4gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5wdXQudmFsdWVPZigpIDwgdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzQmVmb3JlIChpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHMoIWlzVW5kZWZpbmVkKHVuaXRzKSA/IHVuaXRzIDogJ21pbGxpc2Vjb25kJyk7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNCZXR3ZWVuIChmcm9tLCB0bywgdW5pdHMsIGluY2x1c2l2aXR5KSB7XG4gICAgaW5jbHVzaXZpdHkgPSBpbmNsdXNpdml0eSB8fCAnKCknO1xuICAgIHJldHVybiAoaW5jbHVzaXZpdHlbMF0gPT09ICcoJyA/IHRoaXMuaXNBZnRlcihmcm9tLCB1bml0cykgOiAhdGhpcy5pc0JlZm9yZShmcm9tLCB1bml0cykpICYmXG4gICAgICAgIChpbmNsdXNpdml0eVsxXSA9PT0gJyknID8gdGhpcy5pc0JlZm9yZSh0bywgdW5pdHMpIDogIXRoaXMuaXNBZnRlcih0bywgdW5pdHMpKTtcbn1cblxuZnVuY3Rpb24gaXNTYW1lIChpbnB1dCwgdW5pdHMpIHtcbiAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpLFxuICAgICAgICBpbnB1dE1zO1xuICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMgfHwgJ21pbGxpc2Vjb25kJyk7XG4gICAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA9PT0gbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRNcyA9IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gdGhpcy5jbG9uZSgpLmVuZE9mKHVuaXRzKS52YWx1ZU9mKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1NhbWVPckFmdGVyIChpbnB1dCwgdW5pdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQWZ0ZXIoaW5wdXQsdW5pdHMpO1xufVxuXG5mdW5jdGlvbiBpc1NhbWVPckJlZm9yZSAoaW5wdXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNTYW1lKGlucHV0LCB1bml0cykgfHwgdGhpcy5pc0JlZm9yZShpbnB1dCx1bml0cyk7XG59XG5cbmZ1bmN0aW9uIGRpZmYgKGlucHV0LCB1bml0cywgYXNGbG9hdCkge1xuICAgIHZhciB0aGF0LFxuICAgICAgICB6b25lRGVsdGEsXG4gICAgICAgIGRlbHRhLCBvdXRwdXQ7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgdGhpcyk7XG5cbiAgICBpZiAoIXRoYXQuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIDZlNDtcblxuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICBjYXNlICd5ZWFyJzogb3V0cHV0ID0gbW9udGhEaWZmKHRoaXMsIHRoYXQpIC8gMTI7IGJyZWFrO1xuICAgICAgICBjYXNlICdtb250aCc6IG91dHB1dCA9IG1vbnRoRGlmZih0aGlzLCB0aGF0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOiBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCkgLyAzOyBicmVhaztcbiAgICAgICAgY2FzZSAnc2Vjb25kJzogb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDFlMzsgYnJlYWs7IC8vIDEwMDBcbiAgICAgICAgY2FzZSAnbWludXRlJzogb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDZlNDsgYnJlYWs7IC8vIDEwMDAgKiA2MFxuICAgICAgICBjYXNlICdob3VyJzogb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDM2ZTU7IGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MFxuICAgICAgICBjYXNlICdkYXknOiBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gODY0ZTU7IGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0LCBuZWdhdGUgZHN0XG4gICAgICAgIGNhc2UgJ3dlZWsnOiBvdXRwdXQgPSAodGhpcyAtIHRoYXQgLSB6b25lRGVsdGEpIC8gNjA0OGU1OyBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcsIG5lZ2F0ZSBkc3RcbiAgICAgICAgZGVmYXVsdDogb3V0cHV0ID0gdGhpcyAtIHRoYXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNGbG9vcihvdXRwdXQpO1xufVxuXG5mdW5jdGlvbiBtb250aERpZmYgKGEsIGIpIHtcbiAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICAgIHZhciB3aG9sZU1vbnRoRGlmZiA9ICgoYi55ZWFyKCkgLSBhLnllYXIoKSkgKiAxMikgKyAoYi5tb250aCgpIC0gYS5tb250aCgpKSxcbiAgICAgICAgLy8gYiBpcyBpbiAoYW5jaG9yIC0gMSBtb250aCwgYW5jaG9yICsgMSBtb250aClcbiAgICAgICAgYW5jaG9yID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiwgJ21vbnRocycpLFxuICAgICAgICBhbmNob3IyLCBhZGp1c3Q7XG5cbiAgICBpZiAoYiAtIGFuY2hvciA8IDApIHtcbiAgICAgICAgYW5jaG9yMiA9IGEuY2xvbmUoKS5hZGQod2hvbGVNb250aERpZmYgLSAxLCAnbW9udGhzJyk7XG4gICAgICAgIC8vIGxpbmVhciBhY3Jvc3MgdGhlIG1vbnRoXG4gICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IgLSBhbmNob3IyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbmNob3IyID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiArIDEsICdtb250aHMnKTtcbiAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgYWRqdXN0ID0gKGIgLSBhbmNob3IpIC8gKGFuY2hvcjIgLSBhbmNob3IpO1xuICAgIH1cblxuICAgIC8vY2hlY2sgZm9yIG5lZ2F0aXZlIHplcm8sIHJldHVybiB6ZXJvIGlmIG5lZ2F0aXZlIHplcm9cbiAgICByZXR1cm4gLSh3aG9sZU1vbnRoRGlmZiArIGFkanVzdCkgfHwgMDtcbn1cblxuaG9va3MuZGVmYXVsdEZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG5ob29rcy5kZWZhdWx0Rm9ybWF0VXRjID0gJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nO1xuXG5mdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sb2NhbGUoJ2VuJykuZm9ybWF0KCdkZGQgTU1NIEREIFlZWVkgSEg6bW06c3MgW0dNVF1aWicpO1xufVxuXG5mdW5jdGlvbiB0b0lTT1N0cmluZyhrZWVwT2Zmc2V0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHV0YyA9IGtlZXBPZmZzZXQgIT09IHRydWU7XG4gICAgdmFyIG0gPSB1dGMgPyB0aGlzLmNsb25lKCkudXRjKCkgOiB0aGlzO1xuICAgIGlmIChtLnllYXIoKSA8IDAgfHwgbS55ZWFyKCkgPiA5OTk5KSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgdXRjID8gJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScgOiAnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWicpO1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZykpIHtcbiAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgaWYgKHV0Yykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLl9kLnZhbHVlT2YoKSkudG9JU09TdHJpbmcoKS5yZXBsYWNlKCdaJywgZm9ybWF0TW9tZW50KG0sICdaJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgdXRjID8gJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nIDogJ1lZWVktTU0tRERbVF1ISDptbTpzcy5TU1NaJyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgaHVtYW4gcmVhZGFibGUgcmVwcmVzZW50YXRpb24gb2YgYSBtb21lbnQgdGhhdCBjYW5cbiAqIGFsc28gYmUgZXZhbHVhdGVkIHRvIGdldCBhIG5ldyBtb21lbnQgd2hpY2ggaXMgdGhlIHNhbWVcbiAqXG4gKiBAbGluayBodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QvZG9jcy9hcGkvdXRpbC5odG1sI3V0aWxfY3VzdG9tX2luc3BlY3RfZnVuY3Rpb25fb25fb2JqZWN0c1xuICovXG5mdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiAnbW9tZW50LmludmFsaWQoLyogJyArIHRoaXMuX2kgKyAnICovKSc7XG4gICAgfVxuICAgIHZhciBmdW5jID0gJ21vbWVudCc7XG4gICAgdmFyIHpvbmUgPSAnJztcbiAgICBpZiAoIXRoaXMuaXNMb2NhbCgpKSB7XG4gICAgICAgIGZ1bmMgPSB0aGlzLnV0Y09mZnNldCgpID09PSAwID8gJ21vbWVudC51dGMnIDogJ21vbWVudC5wYXJzZVpvbmUnO1xuICAgICAgICB6b25lID0gJ1onO1xuICAgIH1cbiAgICB2YXIgcHJlZml4ID0gJ1snICsgZnVuYyArICcoXCJdJztcbiAgICB2YXIgeWVhciA9ICgwIDw9IHRoaXMueWVhcigpICYmIHRoaXMueWVhcigpIDw9IDk5OTkpID8gJ1lZWVknIDogJ1lZWVlZWSc7XG4gICAgdmFyIGRhdGV0aW1lID0gJy1NTS1ERFtUXUhIOm1tOnNzLlNTUyc7XG4gICAgdmFyIHN1ZmZpeCA9IHpvbmUgKyAnW1wiKV0nO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KHByZWZpeCArIHllYXIgKyBkYXRldGltZSArIHN1ZmZpeCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCAoaW5wdXRTdHJpbmcpIHtcbiAgICBpZiAoIWlucHV0U3RyaW5nKSB7XG4gICAgICAgIGlucHV0U3RyaW5nID0gdGhpcy5pc1V0YygpID8gaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA6IGhvb2tzLmRlZmF1bHRGb3JtYXQ7XG4gICAgfVxuICAgIHZhciBvdXRwdXQgPSBmb3JtYXRNb21lbnQodGhpcywgaW5wdXRTdHJpbmcpO1xuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIGZyb20gKHRpbWUsIHdpdGhvdXRTdWZmaXgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiZcbiAgICAgICAgICAgICgoaXNNb21lbnQodGltZSkgJiYgdGltZS5pc1ZhbGlkKCkpIHx8XG4gICAgICAgICAgICAgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oe3RvOiB0aGlzLCBmcm9tOiB0aW1lfSkubG9jYWxlKHRoaXMubG9jYWxlKCkpLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZyb21Ob3cgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICByZXR1cm4gdGhpcy5mcm9tKGNyZWF0ZUxvY2FsKCksIHdpdGhvdXRTdWZmaXgpO1xufVxuXG5mdW5jdGlvbiB0byAodGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHxcbiAgICAgICAgICAgICBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7ZnJvbTogdGhpcywgdG86IHRpbWV9KS5sb2NhbGUodGhpcy5sb2NhbGUoKSkuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9Ob3cgKHdpdGhvdXRTdWZmaXgpIHtcbiAgICByZXR1cm4gdGhpcy50byhjcmVhdGVMb2NhbCgpLCB3aXRob3V0U3VmZml4KTtcbn1cblxuLy8gSWYgcGFzc2VkIGEgbG9jYWxlIGtleSwgaXQgd2lsbCBzZXQgdGhlIGxvY2FsZSBmb3IgdGhpc1xuLy8gaW5zdGFuY2UuICBPdGhlcndpc2UsIGl0IHdpbGwgcmV0dXJuIHRoZSBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8gdmFyaWFibGVzIGZvciB0aGlzIGluc3RhbmNlLlxuZnVuY3Rpb24gbG9jYWxlIChrZXkpIHtcbiAgICB2YXIgbmV3TG9jYWxlRGF0YTtcblxuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xvY2FsZURhdGEgPSBnZXRMb2NhbGUoa2V5KTtcbiAgICAgICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jYWxlID0gbmV3TG9jYWxlRGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbnZhciBsYW5nID0gZGVwcmVjYXRlKFxuICAgICdtb21lbnQoKS5sYW5nKCkgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgdXNlIG1vbWVudCgpLmxvY2FsZURhdGEoKSB0byBnZXQgdGhlIGxhbmd1YWdlIGNvbmZpZ3VyYXRpb24uIFVzZSBtb21lbnQoKS5sb2NhbGUoKSB0byBjaGFuZ2UgbGFuZ3VhZ2VzLicsXG4gICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZnVuY3Rpb24gbG9jYWxlRGF0YSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRPZiAodW5pdHMpIHtcbiAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAvLyB0aGUgZm9sbG93aW5nIHN3aXRjaCBpbnRlbnRpb25hbGx5IG9taXRzIGJyZWFrIGtleXdvcmRzXG4gICAgLy8gdG8gdXRpbGl6ZSBmYWxsaW5nIHRocm91Z2ggdGhlIGNhc2VzLlxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICB0aGlzLm1vbnRoKDApO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgdGhpcy5kYXRlKDEpO1xuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgdGhpcy5ob3VycygwKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICB0aGlzLm1pbnV0ZXMoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICB0aGlzLnNlY29uZHMoMCk7XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICB0aGlzLm1pbGxpc2Vjb25kcygwKTtcbiAgICB9XG5cbiAgICAvLyB3ZWVrcyBhcmUgYSBzcGVjaWFsIGNhc2VcbiAgICBpZiAodW5pdHMgPT09ICd3ZWVrJykge1xuICAgICAgICB0aGlzLndlZWtkYXkoMCk7XG4gICAgfVxuICAgIGlmICh1bml0cyA9PT0gJ2lzb1dlZWsnKSB7XG4gICAgICAgIHRoaXMuaXNvV2Vla2RheSgxKTtcbiAgICB9XG5cbiAgICAvLyBxdWFydGVycyBhcmUgYWxzbyBzcGVjaWFsXG4gICAgaWYgKHVuaXRzID09PSAncXVhcnRlcicpIHtcbiAgICAgICAgdGhpcy5tb250aChNYXRoLmZsb29yKHRoaXMubW9udGgoKSAvIDMpICogMyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGVuZE9mICh1bml0cykge1xuICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgIGlmICh1bml0cyA9PT0gdW5kZWZpbmVkIHx8IHVuaXRzID09PSAnbWlsbGlzZWNvbmQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vICdkYXRlJyBpcyBhbiBhbGlhcyBmb3IgJ2RheScsIHNvIGl0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHN1Y2guXG4gICAgaWYgKHVuaXRzID09PSAnZGF0ZScpIHtcbiAgICAgICAgdW5pdHMgPSAnZGF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdGFydE9mKHVuaXRzKS5hZGQoMSwgKHVuaXRzID09PSAnaXNvV2VlaycgPyAnd2VlaycgOiB1bml0cykpLnN1YnRyYWN0KDEsICdtcycpO1xufVxuXG5mdW5jdGlvbiB2YWx1ZU9mICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZC52YWx1ZU9mKCkgLSAoKHRoaXMuX29mZnNldCB8fCAwKSAqIDYwMDAwKTtcbn1cblxuZnVuY3Rpb24gdW5peCAoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbn1cblxuZnVuY3Rpb24gdG9EYXRlICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5ICgpIHtcbiAgICB2YXIgbSA9IHRoaXM7XG4gICAgcmV0dXJuIFttLnllYXIoKSwgbS5tb250aCgpLCBtLmRhdGUoKSwgbS5ob3VyKCksIG0ubWludXRlKCksIG0uc2Vjb25kKCksIG0ubWlsbGlzZWNvbmQoKV07XG59XG5cbmZ1bmN0aW9uIHRvT2JqZWN0ICgpIHtcbiAgICB2YXIgbSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcnM6IG0ueWVhcigpLFxuICAgICAgICBtb250aHM6IG0ubW9udGgoKSxcbiAgICAgICAgZGF0ZTogbS5kYXRlKCksXG4gICAgICAgIGhvdXJzOiBtLmhvdXJzKCksXG4gICAgICAgIG1pbnV0ZXM6IG0ubWludXRlcygpLFxuICAgICAgICBzZWNvbmRzOiBtLnNlY29uZHMoKSxcbiAgICAgICAgbWlsbGlzZWNvbmRzOiBtLm1pbGxpc2Vjb25kcygpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgICAvLyBuZXcgRGF0ZShOYU4pLnRvSlNPTigpID09PSBudWxsXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy50b0lTT1N0cmluZygpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZCQyICgpIHtcbiAgICByZXR1cm4gaXNWYWxpZCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gcGFyc2luZ0ZsYWdzICgpIHtcbiAgICByZXR1cm4gZXh0ZW5kKHt9LCBnZXRQYXJzaW5nRmxhZ3ModGhpcykpO1xufVxuXG5mdW5jdGlvbiBpbnZhbGlkQXQgKCkge1xuICAgIHJldHVybiBnZXRQYXJzaW5nRmxhZ3ModGhpcykub3ZlcmZsb3c7XG59XG5cbmZ1bmN0aW9uIGNyZWF0aW9uRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbnB1dDogdGhpcy5faSxcbiAgICAgICAgZm9ybWF0OiB0aGlzLl9mLFxuICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgaXNVVEM6IHRoaXMuX2lzVVRDLFxuICAgICAgICBzdHJpY3Q6IHRoaXMuX3N0cmljdFxuICAgIH07XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydnZycsIDJdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbn0pO1xuXG5hZGRGb3JtYXRUb2tlbigwLCBbJ0dHJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xufSk7XG5cbmZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4gKHRva2VuLCBnZXR0ZXIpIHtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbdG9rZW4sIHRva2VuLmxlbmd0aF0sIDAsIGdldHRlcik7XG59XG5cbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCAgICAgJ3dlZWtZZWFyJyk7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnZycsICAgICd3ZWVrWWVhcicpO1xuYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHRycsICAnaXNvV2Vla1llYXInKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCd3ZWVrWWVhcicsICdnZycpO1xuYWRkVW5pdEFsaWFzKCdpc29XZWVrWWVhcicsICdHRycpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ3dlZWtZZWFyJywgMSk7XG5hZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtZZWFyJywgMSk7XG5cblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdHJywgICAgICBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdnJywgICAgICBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdHRycsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdnZycsICAgICBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdHR0dHJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdnZ2dnJywgICBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdHR0dHRycsICBtYXRjaDF0bzYsIG1hdGNoNik7XG5hZGRSZWdleFRva2VuKCdnZ2dnZycsICBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZ2dnZycsICdnZ2dnZycsICdHR0dHJywgJ0dHR0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDIpXSA9IHRvSW50KGlucHV0KTtcbn0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW5dID0gaG9va3MucGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xufSk7XG5cbi8vIE1PTUVOVFNcblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIgKGlucHV0KSB7XG4gICAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyLmNhbGwodGhpcyxcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy53ZWVrKCksXG4gICAgICAgICAgICB0aGlzLndlZWtkYXkoKSxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRvdyxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrLmRveSk7XG59XG5cbmZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyIChpbnB1dCkge1xuICAgIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlci5jYWxsKHRoaXMsXG4gICAgICAgICAgICBpbnB1dCwgdGhpcy5pc29XZWVrKCksIHRoaXMuaXNvV2Vla2RheSgpLCAxLCA0KTtcbn1cblxuZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIgKCkge1xuICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgMSwgNCk7XG59XG5cbmZ1bmN0aW9uIGdldFdlZWtzSW5ZZWFyICgpIHtcbiAgICB2YXIgd2Vla0luZm8gPSB0aGlzLmxvY2FsZURhdGEoKS5fd2VlaztcbiAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXJIZWxwZXIoaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIHdlZWtzVGFyZ2V0O1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKHRoaXMsIGRvdywgZG95KS55ZWFyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcbiAgICAgICAgaWYgKHdlZWsgPiB3ZWVrc1RhcmdldCkge1xuICAgICAgICAgICAgd2VlayA9IHdlZWtzVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRXZWVrQWxsLmNhbGwodGhpcywgaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFdlZWtBbGwod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgdmFyIGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSxcbiAgICAgICAgZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG5cbiAgICB0aGlzLnllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICB0aGlzLm1vbnRoKGRhdGUuZ2V0VVRDTW9udGgoKSk7XG4gICAgdGhpcy5kYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignUScsIDAsICdRbycsICdxdWFydGVyJyk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdxdWFydGVyJywgJ1EnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdxdWFydGVyJywgNyk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG5hZGRQYXJzZVRva2VuKCdRJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG59KTtcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXRRdWFydGVyIChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gTWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkgKyAxKSAvIDMpIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyB0aGlzLm1vbnRoKCkgJSAzKTtcbn1cblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignRCcsIFsnREQnLCAyXSwgJ0RvJywgJ2RhdGUnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ2RhdGUnLCAnRCcpO1xuXG4vLyBQUklPUk9JVFlcbmFkZFVuaXRQcmlvcml0eSgnZGF0ZScsIDkpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0QnLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ0REJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignRG8nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICByZXR1cm4gaXNTdHJpY3QgP1xuICAgICAgKGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZSkgOlxuICAgICAgbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudDtcbn0pO1xuXG5hZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcbmFkZFBhcnNlVG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XG59KTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0RGF5T2ZNb250aCA9IG1ha2VHZXRTZXQoJ0RhdGUnLCB0cnVlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbignREREJywgWydEREREJywgM10sICdERERvJywgJ2RheU9mWWVhcicpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF5T2ZZZWFyJywgJ0RERCcpO1xuXG4vLyBQUklPUklUWVxuYWRkVW5pdFByaW9yaXR5KCdkYXlPZlllYXInLCA0KTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdEREQnLCAgbWF0Y2gxdG8zKTtcbmFkZFJlZ2V4VG9rZW4oJ0REREQnLCBtYXRjaDMpO1xuYWRkUGFyc2VUb2tlbihbJ0RERCcsICdEREREJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdG9JbnQoaW5wdXQpO1xufSk7XG5cbi8vIEhFTFBFUlNcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRTZXREYXlPZlllYXIgKGlucHV0KSB7XG4gICAgdmFyIGRheU9mWWVhciA9IE1hdGgucm91bmQoKHRoaXMuY2xvbmUoKS5zdGFydE9mKCdkYXknKSAtIHRoaXMuY2xvbmUoKS5zdGFydE9mKCd5ZWFyJykpIC8gODY0ZTUpICsgMTtcbiAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKChpbnB1dCAtIGRheU9mWWVhciksICdkJyk7XG59XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ20nLCBbJ21tJywgMl0sIDAsICdtaW51dGUnKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnbWludXRlJywgMTQpO1xuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ20nLCAgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ21tJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcblxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0TWludXRlID0gbWFrZUdldFNldCgnTWludXRlcycsIGZhbHNlKTtcblxuLy8gRk9STUFUVElOR1xuXG5hZGRGb3JtYXRUb2tlbigncycsIFsnc3MnLCAyXSwgMCwgJ3NlY29uZCcpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnc2Vjb25kJywgJ3MnKTtcblxuLy8gUFJJT1JJVFlcblxuYWRkVW5pdFByaW9yaXR5KCdzZWNvbmQnLCAxNSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbigncycsICBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRQYXJzZVRva2VuKFsncycsICdzcyddLCBTRUNPTkQpO1xuXG4vLyBNT01FTlRTXG5cbnZhciBnZXRTZXRTZWNvbmQgPSBtYWtlR2V0U2V0KCdTZWNvbmRzJywgZmFsc2UpO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdTJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMDApO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKDAsIFsnU1MnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB+fih0aGlzLm1pbGxpc2Vjb25kKCkgLyAxMCk7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1MnLCAzXSwgMCwgJ21pbGxpc2Vjb25kJyk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1MnLCA0XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTUycsIDVdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1MnLCA2XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwO1xufSk7XG5hZGRGb3JtYXRUb2tlbigwLCBbJ1NTU1NTU1MnLCA3XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTUycsIDhdLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDtcbn0pO1xuYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTU1MnLCA5XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kKCkgKiAxMDAwMDAwO1xufSk7XG5cblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ21pbGxpc2Vjb25kJywgJ21zJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnbWlsbGlzZWNvbmQnLCAxNik7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignUycsICAgIG1hdGNoMXRvMywgbWF0Y2gxKTtcbmFkZFJlZ2V4VG9rZW4oJ1NTJywgICBtYXRjaDF0bzMsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdTU1MnLCAgbWF0Y2gxdG8zLCBtYXRjaDMpO1xuXG52YXIgdG9rZW47XG5mb3IgKHRva2VuID0gJ1NTU1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQsIGFycmF5KSB7XG4gICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQoKCcwLicgKyBpbnB1dCkgKiAxMDAwKTtcbn1cblxuZm9yICh0b2tlbiA9ICdTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xufVxuLy8gTU9NRU5UU1xuXG52YXIgZ2V0U2V0TWlsbGlzZWNvbmQgPSBtYWtlR2V0U2V0KCdNaWxsaXNlY29uZHMnLCBmYWxzZSk7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ3onLCAgMCwgMCwgJ3pvbmVBYmJyJyk7XG5hZGRGb3JtYXRUb2tlbignenonLCAwLCAwLCAnem9uZU5hbWUnKTtcblxuLy8gTU9NRU5UU1xuXG5mdW5jdGlvbiBnZXRab25lQWJiciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0Wm9uZU5hbWUgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcbn1cblxudmFyIHByb3RvID0gTW9tZW50LnByb3RvdHlwZTtcblxucHJvdG8uYWRkICAgICAgICAgICAgICAgPSBhZGQ7XG5wcm90by5jYWxlbmRhciAgICAgICAgICA9IGNhbGVuZGFyJDE7XG5wcm90by5jbG9uZSAgICAgICAgICAgICA9IGNsb25lO1xucHJvdG8uZGlmZiAgICAgICAgICAgICAgPSBkaWZmO1xucHJvdG8uZW5kT2YgICAgICAgICAgICAgPSBlbmRPZjtcbnByb3RvLmZvcm1hdCAgICAgICAgICAgID0gZm9ybWF0O1xucHJvdG8uZnJvbSAgICAgICAgICAgICAgPSBmcm9tO1xucHJvdG8uZnJvbU5vdyAgICAgICAgICAgPSBmcm9tTm93O1xucHJvdG8udG8gICAgICAgICAgICAgICAgPSB0bztcbnByb3RvLnRvTm93ICAgICAgICAgICAgID0gdG9Ob3c7XG5wcm90by5nZXQgICAgICAgICAgICAgICA9IHN0cmluZ0dldDtcbnByb3RvLmludmFsaWRBdCAgICAgICAgID0gaW52YWxpZEF0O1xucHJvdG8uaXNBZnRlciAgICAgICAgICAgPSBpc0FmdGVyO1xucHJvdG8uaXNCZWZvcmUgICAgICAgICAgPSBpc0JlZm9yZTtcbnByb3RvLmlzQmV0d2VlbiAgICAgICAgID0gaXNCZXR3ZWVuO1xucHJvdG8uaXNTYW1lICAgICAgICAgICAgPSBpc1NhbWU7XG5wcm90by5pc1NhbWVPckFmdGVyICAgICA9IGlzU2FtZU9yQWZ0ZXI7XG5wcm90by5pc1NhbWVPckJlZm9yZSAgICA9IGlzU2FtZU9yQmVmb3JlO1xucHJvdG8uaXNWYWxpZCAgICAgICAgICAgPSBpc1ZhbGlkJDI7XG5wcm90by5sYW5nICAgICAgICAgICAgICA9IGxhbmc7XG5wcm90by5sb2NhbGUgICAgICAgICAgICA9IGxvY2FsZTtcbnByb3RvLmxvY2FsZURhdGEgICAgICAgID0gbG9jYWxlRGF0YTtcbnByb3RvLm1heCAgICAgICAgICAgICAgID0gcHJvdG90eXBlTWF4O1xucHJvdG8ubWluICAgICAgICAgICAgICAgPSBwcm90b3R5cGVNaW47XG5wcm90by5wYXJzaW5nRmxhZ3MgICAgICA9IHBhcnNpbmdGbGFncztcbnByb3RvLnNldCAgICAgICAgICAgICAgID0gc3RyaW5nU2V0O1xucHJvdG8uc3RhcnRPZiAgICAgICAgICAgPSBzdGFydE9mO1xucHJvdG8uc3VidHJhY3QgICAgICAgICAgPSBzdWJ0cmFjdDtcbnByb3RvLnRvQXJyYXkgICAgICAgICAgID0gdG9BcnJheTtcbnByb3RvLnRvT2JqZWN0ICAgICAgICAgID0gdG9PYmplY3Q7XG5wcm90by50b0RhdGUgICAgICAgICAgICA9IHRvRGF0ZTtcbnByb3RvLnRvSVNPU3RyaW5nICAgICAgID0gdG9JU09TdHJpbmc7XG5wcm90by5pbnNwZWN0ICAgICAgICAgICA9IGluc3BlY3Q7XG5wcm90by50b0pTT04gICAgICAgICAgICA9IHRvSlNPTjtcbnByb3RvLnRvU3RyaW5nICAgICAgICAgID0gdG9TdHJpbmc7XG5wcm90by51bml4ICAgICAgICAgICAgICA9IHVuaXg7XG5wcm90by52YWx1ZU9mICAgICAgICAgICA9IHZhbHVlT2Y7XG5wcm90by5jcmVhdGlvbkRhdGEgICAgICA9IGNyZWF0aW9uRGF0YTtcblxuLy8gWWVhclxucHJvdG8ueWVhciAgICAgICA9IGdldFNldFllYXI7XG5wcm90by5pc0xlYXBZZWFyID0gZ2V0SXNMZWFwWWVhcjtcblxuLy8gV2VlayBZZWFyXG5wcm90by53ZWVrWWVhciAgICA9IGdldFNldFdlZWtZZWFyO1xucHJvdG8uaXNvV2Vla1llYXIgPSBnZXRTZXRJU09XZWVrWWVhcjtcblxuLy8gUXVhcnRlclxucHJvdG8ucXVhcnRlciA9IHByb3RvLnF1YXJ0ZXJzID0gZ2V0U2V0UXVhcnRlcjtcblxuLy8gTW9udGhcbnByb3RvLm1vbnRoICAgICAgID0gZ2V0U2V0TW9udGg7XG5wcm90by5kYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xuXG4vLyBXZWVrXG5wcm90by53ZWVrICAgICAgICAgICA9IHByb3RvLndlZWtzICAgICAgICA9IGdldFNldFdlZWs7XG5wcm90by5pc29XZWVrICAgICAgICA9IHByb3RvLmlzb1dlZWtzICAgICA9IGdldFNldElTT1dlZWs7XG5wcm90by53ZWVrc0luWWVhciAgICA9IGdldFdlZWtzSW5ZZWFyO1xucHJvdG8uaXNvV2Vla3NJblllYXIgPSBnZXRJU09XZWVrc0luWWVhcjtcblxuLy8gRGF5XG5wcm90by5kYXRlICAgICAgID0gZ2V0U2V0RGF5T2ZNb250aDtcbnByb3RvLmRheSAgICAgICAgPSBwcm90by5kYXlzICAgICAgICAgICAgID0gZ2V0U2V0RGF5T2ZXZWVrO1xucHJvdG8ud2Vla2RheSAgICA9IGdldFNldExvY2FsZURheU9mV2VlaztcbnByb3RvLmlzb1dlZWtkYXkgPSBnZXRTZXRJU09EYXlPZldlZWs7XG5wcm90by5kYXlPZlllYXIgID0gZ2V0U2V0RGF5T2ZZZWFyO1xuXG4vLyBIb3VyXG5wcm90by5ob3VyID0gcHJvdG8uaG91cnMgPSBnZXRTZXRIb3VyO1xuXG4vLyBNaW51dGVcbnByb3RvLm1pbnV0ZSA9IHByb3RvLm1pbnV0ZXMgPSBnZXRTZXRNaW51dGU7XG5cbi8vIFNlY29uZFxucHJvdG8uc2Vjb25kID0gcHJvdG8uc2Vjb25kcyA9IGdldFNldFNlY29uZDtcblxuLy8gTWlsbGlzZWNvbmRcbnByb3RvLm1pbGxpc2Vjb25kID0gcHJvdG8ubWlsbGlzZWNvbmRzID0gZ2V0U2V0TWlsbGlzZWNvbmQ7XG5cbi8vIE9mZnNldFxucHJvdG8udXRjT2Zmc2V0ICAgICAgICAgICAgPSBnZXRTZXRPZmZzZXQ7XG5wcm90by51dGMgICAgICAgICAgICAgICAgICA9IHNldE9mZnNldFRvVVRDO1xucHJvdG8ubG9jYWwgICAgICAgICAgICAgICAgPSBzZXRPZmZzZXRUb0xvY2FsO1xucHJvdG8ucGFyc2Vab25lICAgICAgICAgICAgPSBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldDtcbnByb3RvLmhhc0FsaWduZWRIb3VyT2Zmc2V0ID0gaGFzQWxpZ25lZEhvdXJPZmZzZXQ7XG5wcm90by5pc0RTVCAgICAgICAgICAgICAgICA9IGlzRGF5bGlnaHRTYXZpbmdUaW1lO1xucHJvdG8uaXNMb2NhbCAgICAgICAgICAgICAgPSBpc0xvY2FsO1xucHJvdG8uaXNVdGNPZmZzZXQgICAgICAgICAgPSBpc1V0Y09mZnNldDtcbnByb3RvLmlzVXRjICAgICAgICAgICAgICAgID0gaXNVdGM7XG5wcm90by5pc1VUQyAgICAgICAgICAgICAgICA9IGlzVXRjO1xuXG4vLyBUaW1lem9uZVxucHJvdG8uem9uZUFiYnIgPSBnZXRab25lQWJicjtcbnByb3RvLnpvbmVOYW1lID0gZ2V0Wm9uZU5hbWU7XG5cbi8vIERlcHJlY2F0aW9uc1xucHJvdG8uZGF0ZXMgID0gZGVwcmVjYXRlKCdkYXRlcyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgZGF0ZSBpbnN0ZWFkLicsIGdldFNldERheU9mTW9udGgpO1xucHJvdG8ubW9udGhzID0gZGVwcmVjYXRlKCdtb250aHMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbnRoIGluc3RlYWQnLCBnZXRTZXRNb250aCk7XG5wcm90by55ZWFycyAgPSBkZXByZWNhdGUoJ3llYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQnLCBnZXRTZXRZZWFyKTtcbnByb3RvLnpvbmUgICA9IGRlcHJlY2F0ZSgnbW9tZW50KCkuem9uZSBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50KCkudXRjT2Zmc2V0IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3Mvem9uZS8nLCBnZXRTZXRab25lKTtcbnByb3RvLmlzRFNUU2hpZnRlZCA9IGRlcHJlY2F0ZSgnaXNEU1RTaGlmdGVkIGlzIGRlcHJlY2F0ZWQuIFNlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RzdC1zaGlmdGVkLyBmb3IgbW9yZSBpbmZvcm1hdGlvbicsIGlzRGF5bGlnaHRTYXZpbmdUaW1lU2hpZnRlZCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaXggKGlucHV0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0ICogMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluWm9uZSAoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2FsLmFwcGx5KG51bGwsIGFyZ3VtZW50cykucGFyc2Vab25lKCk7XG59XG5cbmZ1bmN0aW9uIHByZVBhcnNlUG9zdEZvcm1hdCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIHByb3RvJDEgPSBMb2NhbGUucHJvdG90eXBlO1xuXG5wcm90byQxLmNhbGVuZGFyICAgICAgICA9IGNhbGVuZGFyO1xucHJvdG8kMS5sb25nRGF0ZUZvcm1hdCAgPSBsb25nRGF0ZUZvcm1hdDtcbnByb3RvJDEuaW52YWxpZERhdGUgICAgID0gaW52YWxpZERhdGU7XG5wcm90byQxLm9yZGluYWwgICAgICAgICA9IG9yZGluYWw7XG5wcm90byQxLnByZXBhcnNlICAgICAgICA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbnByb3RvJDEucG9zdGZvcm1hdCAgICAgID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xucHJvdG8kMS5yZWxhdGl2ZVRpbWUgICAgPSByZWxhdGl2ZVRpbWU7XG5wcm90byQxLnBhc3RGdXR1cmUgICAgICA9IHBhc3RGdXR1cmU7XG5wcm90byQxLnNldCAgICAgICAgICAgICA9IHNldDtcblxuLy8gTW9udGhcbnByb3RvJDEubW9udGhzICAgICAgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzO1xucHJvdG8kMS5tb250aHNTaG9ydCAgICAgICA9ICAgICAgICBsb2NhbGVNb250aHNTaG9ydDtcbnByb3RvJDEubW9udGhzUGFyc2UgICAgICAgPSAgICAgICAgbG9jYWxlTW9udGhzUGFyc2U7XG5wcm90byQxLm1vbnRoc1JlZ2V4ICAgICAgID0gbW9udGhzUmVnZXg7XG5wcm90byQxLm1vbnRoc1Nob3J0UmVnZXggID0gbW9udGhzU2hvcnRSZWdleDtcblxuLy8gV2Vla1xucHJvdG8kMS53ZWVrID0gbG9jYWxlV2VlaztcbnByb3RvJDEuZmlyc3REYXlPZlllYXIgPSBsb2NhbGVGaXJzdERheU9mWWVhcjtcbnByb3RvJDEuZmlyc3REYXlPZldlZWsgPSBsb2NhbGVGaXJzdERheU9mV2VlaztcblxuLy8gRGF5IG9mIFdlZWtcbnByb3RvJDEud2Vla2RheXMgICAgICAgPSAgICAgICAgbG9jYWxlV2Vla2RheXM7XG5wcm90byQxLndlZWtkYXlzTWluICAgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzTWluO1xucHJvdG8kMS53ZWVrZGF5c1Nob3J0ICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1Nob3J0O1xucHJvdG8kMS53ZWVrZGF5c1BhcnNlICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1BhcnNlO1xuXG5wcm90byQxLndlZWtkYXlzUmVnZXggICAgICAgPSAgICAgICAgd2Vla2RheXNSZWdleDtcbnByb3RvJDEud2Vla2RheXNTaG9ydFJlZ2V4ICA9ICAgICAgICB3ZWVrZGF5c1Nob3J0UmVnZXg7XG5wcm90byQxLndlZWtkYXlzTWluUmVnZXggICAgPSAgICAgICAgd2Vla2RheXNNaW5SZWdleDtcblxuLy8gSG91cnNcbnByb3RvJDEuaXNQTSA9IGxvY2FsZUlzUE07XG5wcm90byQxLm1lcmlkaWVtID0gbG9jYWxlTWVyaWRpZW07XG5cbmZ1bmN0aW9uIGdldCQxIChmb3JtYXQsIGluZGV4LCBmaWVsZCwgc2V0dGVyKSB7XG4gICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpO1xuICAgIHZhciB1dGMgPSBjcmVhdGVVVEMoKS5zZXQoc2V0dGVyLCBpbmRleCk7XG4gICAgcmV0dXJuIGxvY2FsZVtmaWVsZF0odXRjLCBmb3JtYXQpO1xufVxuXG5mdW5jdGlvbiBsaXN0TW9udGhzSW1wbCAoZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcblxuICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIG91dCA9IFtdO1xuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgaSwgZmllbGQsICdtb250aCcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuXG4vLyAoKVxuLy8gKDUpXG4vLyAoZm10LCA1KVxuLy8gKGZtdClcbi8vICh0cnVlKVxuLy8gKHRydWUsIDUpXG4vLyAodHJ1ZSwgZm10LCA1KVxuLy8gKHRydWUsIGZtdClcbmZ1bmN0aW9uIGxpc3RXZWVrZGF5c0ltcGwgKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgZmllbGQpIHtcbiAgICBpZiAodHlwZW9mIGxvY2FsZVNvcnRlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdCB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXQgPSBsb2NhbGVTb3J0ZWQ7XG4gICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICBsb2NhbGVTb3J0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgfVxuXG4gICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpLFxuICAgICAgICBzaGlmdCA9IGxvY2FsZVNvcnRlZCA/IGxvY2FsZS5fd2Vlay5kb3cgOiAwO1xuXG4gICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgKGluZGV4ICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICB9XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgb3V0ID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICBvdXRbaV0gPSBnZXQkMShmb3JtYXQsIChpICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gbGlzdE1vbnRocyAoZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzJyk7XG59XG5cbmZ1bmN0aW9uIGxpc3RNb250aHNTaG9ydCAoZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzU2hvcnQnKTtcbn1cblxuZnVuY3Rpb24gbGlzdFdlZWtkYXlzIChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICByZXR1cm4gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsICd3ZWVrZGF5cycpO1xufVxuXG5mdW5jdGlvbiBsaXN0V2Vla2RheXNTaG9ydCAobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4KSB7XG4gICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNTaG9ydCcpO1xufVxuXG5mdW5jdGlvbiBsaXN0V2Vla2RheXNNaW4gKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCkge1xuICAgIHJldHVybiBsaXN0V2Vla2RheXNJbXBsKGxvY2FsZVNvcnRlZCwgZm9ybWF0LCBpbmRleCwgJ3dlZWtkYXlzTWluJyk7XG59XG5cbmdldFNldEdsb2JhbExvY2FsZSgnZW4nLCB7XG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXG4gICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgIG91dHB1dCA9ICh0b0ludChudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcbiAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgfVxufSk7XG5cbi8vIFNpZGUgZWZmZWN0IGltcG9ydHNcbmhvb2tzLmxhbmcgPSBkZXByZWNhdGUoJ21vbWVudC5sYW5nIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlIGluc3RlYWQuJywgZ2V0U2V0R2xvYmFsTG9jYWxlKTtcbmhvb2tzLmxhbmdEYXRhID0gZGVwcmVjYXRlKCdtb21lbnQubGFuZ0RhdGEgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGVEYXRhIGluc3RlYWQuJywgZ2V0TG9jYWxlKTtcblxudmFyIG1hdGhBYnMgPSBNYXRoLmFicztcblxuZnVuY3Rpb24gYWJzICgpIHtcbiAgICB2YXIgZGF0YSAgICAgICAgICAgPSB0aGlzLl9kYXRhO1xuXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gbWF0aEFicyh0aGlzLl9taWxsaXNlY29uZHMpO1xuICAgIHRoaXMuX2RheXMgICAgICAgICA9IG1hdGhBYnModGhpcy5fZGF5cyk7XG4gICAgdGhpcy5fbW9udGhzICAgICAgID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XG4gICAgZGF0YS5zZWNvbmRzICAgICAgID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xuICAgIGRhdGEubWludXRlcyAgICAgICA9IG1hdGhBYnMoZGF0YS5taW51dGVzKTtcbiAgICBkYXRhLmhvdXJzICAgICAgICAgPSBtYXRoQWJzKGRhdGEuaG91cnMpO1xuICAgIGRhdGEubW9udGhzICAgICAgICA9IG1hdGhBYnMoZGF0YS5tb250aHMpO1xuICAgIGRhdGEueWVhcnMgICAgICAgICA9IG1hdGhBYnMoZGF0YS55ZWFycyk7XG5cbiAgICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYWRkU3VidHJhY3QkMSAoZHVyYXRpb24sIGlucHV0LCB2YWx1ZSwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIG90aGVyID0gY3JlYXRlRHVyYXRpb24oaW5wdXQsIHZhbHVlKTtcblxuICAgIGR1cmF0aW9uLl9taWxsaXNlY29uZHMgKz0gZGlyZWN0aW9uICogb3RoZXIuX21pbGxpc2Vjb25kcztcbiAgICBkdXJhdGlvbi5fZGF5cyAgICAgICAgICs9IGRpcmVjdGlvbiAqIG90aGVyLl9kYXlzO1xuICAgIGR1cmF0aW9uLl9tb250aHMgICAgICAgKz0gZGlyZWN0aW9uICogb3RoZXIuX21vbnRocztcblxuICAgIHJldHVybiBkdXJhdGlvbi5fYnViYmxlKCk7XG59XG5cbi8vIHN1cHBvcnRzIG9ubHkgMi4wLXN0eWxlIGFkZCgxLCAncycpIG9yIGFkZChkdXJhdGlvbilcbmZ1bmN0aW9uIGFkZCQxIChpbnB1dCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIDEpO1xufVxuXG4vLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBzdWJ0cmFjdCgxLCAncycpIG9yIHN1YnRyYWN0KGR1cmF0aW9uKVxuZnVuY3Rpb24gc3VidHJhY3QkMSAoaW5wdXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGFkZFN1YnRyYWN0JDEodGhpcywgaW5wdXQsIHZhbHVlLCAtMSk7XG59XG5cbmZ1bmN0aW9uIGFic0NlaWwgKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYnViYmxlICgpIHtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuICAgIHZhciBkYXlzICAgICAgICAgPSB0aGlzLl9kYXlzO1xuICAgIHZhciBtb250aHMgICAgICAgPSB0aGlzLl9tb250aHM7XG4gICAgdmFyIGRhdGEgICAgICAgICA9IHRoaXMuX2RhdGE7XG4gICAgdmFyIHNlY29uZHMsIG1pbnV0ZXMsIGhvdXJzLCB5ZWFycywgbW9udGhzRnJvbURheXM7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gICAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XG4gICAgaWYgKCEoKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcbiAgICAgICAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApKSkge1xuICAgICAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgICAgIGRheXMgPSAwO1xuICAgICAgICBtb250aHMgPSAwO1xuICAgIH1cblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBidWJibGVzIHVwIHZhbHVlcywgc2VlIHRoZSB0ZXN0cyBmb3JcbiAgICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXG4gICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gICAgc2Vjb25kcyAgICAgICAgICAgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICBkYXRhLnNlY29uZHMgICAgICA9IHNlY29uZHMgJSA2MDtcblxuICAgIG1pbnV0ZXMgICAgICAgICAgID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBkYXRhLm1pbnV0ZXMgICAgICA9IG1pbnV0ZXMgJSA2MDtcblxuICAgIGhvdXJzICAgICAgICAgICAgID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBkYXRhLmhvdXJzICAgICAgICA9IGhvdXJzICUgMjQ7XG5cbiAgICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gICAgLy8gY29udmVydCBkYXlzIHRvIG1vbnRoc1xuICAgIG1vbnRoc0Zyb21EYXlzID0gYWJzRmxvb3IoZGF5c1RvTW9udGhzKGRheXMpKTtcbiAgICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gICAgZGF5cyAtPSBhYnNDZWlsKG1vbnRoc1RvRGF5cyhtb250aHNGcm9tRGF5cykpO1xuXG4gICAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxuICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgIG1vbnRocyAlPSAxMjtcblxuICAgIGRhdGEuZGF5cyAgID0gZGF5cztcbiAgICBkYXRhLm1vbnRocyA9IG1vbnRocztcbiAgICBkYXRhLnllYXJzICA9IHllYXJzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGRheXNUb01vbnRocyAoZGF5cykge1xuICAgIC8vIDQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcbiAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxMiBtb250aHMgPT09IDQ4MDBcbiAgICByZXR1cm4gZGF5cyAqIDQ4MDAgLyAxNDYwOTc7XG59XG5cbmZ1bmN0aW9uIG1vbnRoc1RvRGF5cyAobW9udGhzKSB7XG4gICAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXG4gICAgcmV0dXJuIG1vbnRocyAqIDE0NjA5NyAvIDQ4MDA7XG59XG5cbmZ1bmN0aW9uIGFzICh1bml0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgdmFyIGRheXM7XG4gICAgdmFyIG1vbnRocztcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xuXG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICBkYXlzICAgPSB0aGlzLl9kYXlzICAgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xuICAgICAgICByZXR1cm4gdW5pdHMgPT09ICdtb250aCcgPyBtb250aHMgOiBtb250aHMgLyAxMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXG4gICAgICAgIGRheXMgPSB0aGlzLl9kYXlzICsgTWF0aC5yb3VuZChtb250aHNUb0RheXModGhpcy5fbW9udGhzKSk7XG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnICAgOiByZXR1cm4gZGF5cyAvIDcgICAgICsgbWlsbGlzZWNvbmRzIC8gNjA0OGU1O1xuICAgICAgICAgICAgY2FzZSAnZGF5JyAgICA6IHJldHVybiBkYXlzICAgICAgICAgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInICAgOiByZXR1cm4gZGF5cyAqIDI0ICAgICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZScgOiByZXR1cm4gZGF5cyAqIDE0NDAgICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJyA6IHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xuICAgICAgICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXG4gICAgICAgICAgICBjYXNlICdtaWxsaXNlY29uZCc6IHJldHVybiBNYXRoLmZsb29yKGRheXMgKiA4NjRlNSkgKyBtaWxsaXNlY29uZHM7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBUT0RPOiBVc2UgdGhpcy5hcygnbXMnKT9cbmZ1bmN0aW9uIHZhbHVlT2YkMSAoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgK1xuICAgICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG1ha2VBcyAoYWxpYXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcyhhbGlhcyk7XG4gICAgfTtcbn1cblxudmFyIGFzTWlsbGlzZWNvbmRzID0gbWFrZUFzKCdtcycpO1xudmFyIGFzU2Vjb25kcyAgICAgID0gbWFrZUFzKCdzJyk7XG52YXIgYXNNaW51dGVzICAgICAgPSBtYWtlQXMoJ20nKTtcbnZhciBhc0hvdXJzICAgICAgICA9IG1ha2VBcygnaCcpO1xudmFyIGFzRGF5cyAgICAgICAgID0gbWFrZUFzKCdkJyk7XG52YXIgYXNXZWVrcyAgICAgICAgPSBtYWtlQXMoJ3cnKTtcbnZhciBhc01vbnRocyAgICAgICA9IG1ha2VBcygnTScpO1xudmFyIGFzWWVhcnMgICAgICAgID0gbWFrZUFzKCd5Jyk7XG5cbmZ1bmN0aW9uIGNsb25lJDEgKCkge1xuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih0aGlzKTtcbn1cblxuZnVuY3Rpb24gZ2V0JDIgKHVuaXRzKSB7XG4gICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpc1t1bml0cyArICdzJ10oKSA6IE5hTjtcbn1cblxuZnVuY3Rpb24gbWFrZUdldHRlcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5fZGF0YVtuYW1lXSA6IE5hTjtcbiAgICB9O1xufVxuXG52YXIgbWlsbGlzZWNvbmRzID0gbWFrZUdldHRlcignbWlsbGlzZWNvbmRzJyk7XG52YXIgc2Vjb25kcyAgICAgID0gbWFrZUdldHRlcignc2Vjb25kcycpO1xudmFyIG1pbnV0ZXMgICAgICA9IG1ha2VHZXR0ZXIoJ21pbnV0ZXMnKTtcbnZhciBob3VycyAgICAgICAgPSBtYWtlR2V0dGVyKCdob3VycycpO1xudmFyIGRheXMgICAgICAgICA9IG1ha2VHZXR0ZXIoJ2RheXMnKTtcbnZhciBtb250aHMgICAgICAgPSBtYWtlR2V0dGVyKCdtb250aHMnKTtcbnZhciB5ZWFycyAgICAgICAgPSBtYWtlR2V0dGVyKCd5ZWFycycpO1xuXG5mdW5jdGlvbiB3ZWVrcyAoKSB7XG4gICAgcmV0dXJuIGFic0Zsb29yKHRoaXMuZGF5cygpIC8gNyk7XG59XG5cbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG52YXIgdGhyZXNob2xkcyA9IHtcbiAgICBzczogNDQsICAgICAgICAgLy8gYSBmZXcgc2Vjb25kcyB0byBzZWNvbmRzXG4gICAgcyA6IDQ1LCAgICAgICAgIC8vIHNlY29uZHMgdG8gbWludXRlXG4gICAgbSA6IDQ1LCAgICAgICAgIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgIGggOiAyMiwgICAgICAgICAvLyBob3VycyB0byBkYXlcbiAgICBkIDogMjYsICAgICAgICAgLy8gZGF5cyB0byBtb250aFxuICAgIE0gOiAxMSAgICAgICAgICAvLyBtb250aHMgdG8geWVhclxufTtcblxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cmluZywgbnVtYmVyLCB3aXRob3V0U3VmZml4LCBpc0Z1dHVyZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtYmVyIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSk7XG59XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZSQxIChwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgbG9jYWxlKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpO1xuICAgIHZhciBzZWNvbmRzICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpO1xuICAgIHZhciBtaW51dGVzICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdtJykpO1xuICAgIHZhciBob3VycyAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpO1xuICAgIHZhciBkYXlzICAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdkJykpO1xuICAgIHZhciBtb250aHMgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCdNJykpO1xuICAgIHZhciB5ZWFycyAgICA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpO1xuXG4gICAgdmFyIGEgPSBzZWNvbmRzIDw9IHRocmVzaG9sZHMuc3MgJiYgWydzJywgc2Vjb25kc10gIHx8XG4gICAgICAgICAgICBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICAgJiYgWydzcycsIHNlY29uZHNdIHx8XG4gICAgICAgICAgICBtaW51dGVzIDw9IDEgICAgICAgICAgICAgJiYgWydtJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBtaW51dGVzIDwgdGhyZXNob2xkcy5tICAgJiYgWydtbScsIG1pbnV0ZXNdIHx8XG4gICAgICAgICAgICBob3VycyAgIDw9IDEgICAgICAgICAgICAgJiYgWydoJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBob3VycyAgIDwgdGhyZXNob2xkcy5oICAgJiYgWydoaCcsIGhvdXJzXSAgIHx8XG4gICAgICAgICAgICBkYXlzICAgIDw9IDEgICAgICAgICAgICAgJiYgWydkJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBkYXlzICAgIDwgdGhyZXNob2xkcy5kICAgJiYgWydkZCcsIGRheXNdICAgIHx8XG4gICAgICAgICAgICBtb250aHMgIDw9IDEgICAgICAgICAgICAgJiYgWydNJ10gICAgICAgICAgIHx8XG4gICAgICAgICAgICBtb250aHMgIDwgdGhyZXNob2xkcy5NICAgJiYgWydNTScsIG1vbnRoc10gIHx8XG4gICAgICAgICAgICB5ZWFycyAgIDw9IDEgICAgICAgICAgICAgJiYgWyd5J10gICAgICAgICAgIHx8IFsneXknLCB5ZWFyc107XG5cbiAgICBhWzJdID0gd2l0aG91dFN1ZmZpeDtcbiAgICBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgICBhWzRdID0gbG9jYWxlO1xuICAgIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBhKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcgKHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByb3VuZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZihyb3VuZGluZ0Z1bmN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByb3VuZCA9IHJvdW5kaW5nRnVuY3Rpb247XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgYSB0aHJlc2hvbGQgZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xuZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkICh0aHJlc2hvbGQsIGxpbWl0KSB7XG4gICAgaWYgKHRocmVzaG9sZHNbdGhyZXNob2xkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgICB9XG4gICAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XG4gICAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XG4gICAgICAgIHRocmVzaG9sZHMuc3MgPSBsaW1pdCAtIDE7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBodW1hbml6ZSAod2l0aFN1ZmZpeCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuICAgIHZhciBvdXRwdXQgPSByZWxhdGl2ZVRpbWUkMSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcblxuICAgIGlmICh3aXRoU3VmZml4KSB7XG4gICAgICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xufVxuXG52YXIgYWJzJDEgPSBNYXRoLmFicztcblxuZnVuY3Rpb24gc2lnbih4KSB7XG4gICAgcmV0dXJuICgoeCA+IDApIC0gKHggPCAwKSkgfHwgK3g7XG59XG5cbmZ1bmN0aW9uIHRvSVNPU3RyaW5nJDEoKSB7XG4gICAgLy8gZm9yIElTTyBzdHJpbmdzIHdlIGRvIG5vdCB1c2UgdGhlIG5vcm1hbCBidWJibGluZyBydWxlczpcbiAgICAvLyAgKiBtaWxsaXNlY29uZHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIGhvdXJzXG4gICAgLy8gICogZGF5cyBkbyBub3QgYnViYmxlIGF0IGFsbFxuICAgIC8vICAqIG1vbnRocyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgeWVhcnNcbiAgICAvLyBUaGlzIGlzIGJlY2F1c2UgdGhlcmUgaXMgbm8gY29udGV4dC1mcmVlIGNvbnZlcnNpb24gYmV0d2VlbiBob3VycyBhbmQgZGF5c1xuICAgIC8vICh0aGluayBvZiBjbG9jayBjaGFuZ2VzKVxuICAgIC8vIGFuZCBhbHNvIG5vdCBiZXR3ZWVuIGRheXMgYW5kIG1vbnRocyAoMjgtMzEgZGF5cyBwZXIgbW9udGgpXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgc2Vjb25kcyA9IGFicyQxKHRoaXMuX21pbGxpc2Vjb25kcykgLyAxMDAwO1xuICAgIHZhciBkYXlzICAgICAgICAgPSBhYnMkMSh0aGlzLl9kYXlzKTtcbiAgICB2YXIgbW9udGhzICAgICAgID0gYWJzJDEodGhpcy5fbW9udGhzKTtcbiAgICB2YXIgbWludXRlcywgaG91cnMsIHllYXJzO1xuXG4gICAgLy8gMzYwMCBzZWNvbmRzIC0+IDYwIG1pbnV0ZXMgLT4gMSBob3VyXG4gICAgbWludXRlcyAgICAgICAgICAgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGhvdXJzICAgICAgICAgICAgID0gYWJzRmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBzZWNvbmRzICU9IDYwO1xuICAgIG1pbnV0ZXMgJT0gNjA7XG5cbiAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgeWVhcnMgID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgIG1vbnRocyAlPSAxMjtcblxuXG4gICAgLy8gaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2RvcmRpbGxlL21vbWVudC1pc29kdXJhdGlvbi9ibG9iL21hc3Rlci9tb21lbnQuaXNvZHVyYXRpb24uanNcbiAgICB2YXIgWSA9IHllYXJzO1xuICAgIHZhciBNID0gbW9udGhzO1xuICAgIHZhciBEID0gZGF5cztcbiAgICB2YXIgaCA9IGhvdXJzO1xuICAgIHZhciBtID0gbWludXRlcztcbiAgICB2YXIgcyA9IHNlY29uZHMgPyBzZWNvbmRzLnRvRml4ZWQoMykucmVwbGFjZSgvXFwuPzArJC8sICcnKSA6ICcnO1xuICAgIHZhciB0b3RhbCA9IHRoaXMuYXNTZWNvbmRzKCk7XG5cbiAgICBpZiAoIXRvdGFsKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgQyMncyAoTm9kYSkgYW5kIHB5dGhvbiAoaXNvZGF0ZSkuLi5cbiAgICAgICAgLy8gYnV0IG5vdCBvdGhlciBKUyAoZ29vZy5kYXRlKVxuICAgICAgICByZXR1cm4gJ1AwRCc7XG4gICAgfVxuXG4gICAgdmFyIHRvdGFsU2lnbiA9IHRvdGFsIDwgMCA/ICctJyA6ICcnO1xuICAgIHZhciB5bVNpZ24gPSBzaWduKHRoaXMuX21vbnRocykgIT09IHNpZ24odG90YWwpID8gJy0nIDogJyc7XG4gICAgdmFyIGRheXNTaWduID0gc2lnbih0aGlzLl9kYXlzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICB2YXIgaG1zU2lnbiA9IHNpZ24odGhpcy5fbWlsbGlzZWNvbmRzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcblxuICAgIHJldHVybiB0b3RhbFNpZ24gKyAnUCcgK1xuICAgICAgICAoWSA/IHltU2lnbiArIFkgKyAnWScgOiAnJykgK1xuICAgICAgICAoTSA/IHltU2lnbiArIE0gKyAnTScgOiAnJykgK1xuICAgICAgICAoRCA/IGRheXNTaWduICsgRCArICdEJyA6ICcnKSArXG4gICAgICAgICgoaCB8fCBtIHx8IHMpID8gJ1QnIDogJycpICtcbiAgICAgICAgKGggPyBobXNTaWduICsgaCArICdIJyA6ICcnKSArXG4gICAgICAgIChtID8gaG1zU2lnbiArIG0gKyAnTScgOiAnJykgK1xuICAgICAgICAocyA/IGhtc1NpZ24gKyBzICsgJ1MnIDogJycpO1xufVxuXG52YXIgcHJvdG8kMiA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxucHJvdG8kMi5pc1ZhbGlkICAgICAgICA9IGlzVmFsaWQkMTtcbnByb3RvJDIuYWJzICAgICAgICAgICAgPSBhYnM7XG5wcm90byQyLmFkZCAgICAgICAgICAgID0gYWRkJDE7XG5wcm90byQyLnN1YnRyYWN0ICAgICAgID0gc3VidHJhY3QkMTtcbnByb3RvJDIuYXMgICAgICAgICAgICAgPSBhcztcbnByb3RvJDIuYXNNaWxsaXNlY29uZHMgPSBhc01pbGxpc2Vjb25kcztcbnByb3RvJDIuYXNTZWNvbmRzICAgICAgPSBhc1NlY29uZHM7XG5wcm90byQyLmFzTWludXRlcyAgICAgID0gYXNNaW51dGVzO1xucHJvdG8kMi5hc0hvdXJzICAgICAgICA9IGFzSG91cnM7XG5wcm90byQyLmFzRGF5cyAgICAgICAgID0gYXNEYXlzO1xucHJvdG8kMi5hc1dlZWtzICAgICAgICA9IGFzV2Vla3M7XG5wcm90byQyLmFzTW9udGhzICAgICAgID0gYXNNb250aHM7XG5wcm90byQyLmFzWWVhcnMgICAgICAgID0gYXNZZWFycztcbnByb3RvJDIudmFsdWVPZiAgICAgICAgPSB2YWx1ZU9mJDE7XG5wcm90byQyLl9idWJibGUgICAgICAgID0gYnViYmxlO1xucHJvdG8kMi5jbG9uZSAgICAgICAgICA9IGNsb25lJDE7XG5wcm90byQyLmdldCAgICAgICAgICAgID0gZ2V0JDI7XG5wcm90byQyLm1pbGxpc2Vjb25kcyAgID0gbWlsbGlzZWNvbmRzO1xucHJvdG8kMi5zZWNvbmRzICAgICAgICA9IHNlY29uZHM7XG5wcm90byQyLm1pbnV0ZXMgICAgICAgID0gbWludXRlcztcbnByb3RvJDIuaG91cnMgICAgICAgICAgPSBob3VycztcbnByb3RvJDIuZGF5cyAgICAgICAgICAgPSBkYXlzO1xucHJvdG8kMi53ZWVrcyAgICAgICAgICA9IHdlZWtzO1xucHJvdG8kMi5tb250aHMgICAgICAgICA9IG1vbnRocztcbnByb3RvJDIueWVhcnMgICAgICAgICAgPSB5ZWFycztcbnByb3RvJDIuaHVtYW5pemUgICAgICAgPSBodW1hbml6ZTtcbnByb3RvJDIudG9JU09TdHJpbmcgICAgPSB0b0lTT1N0cmluZyQxO1xucHJvdG8kMi50b1N0cmluZyAgICAgICA9IHRvSVNPU3RyaW5nJDE7XG5wcm90byQyLnRvSlNPTiAgICAgICAgID0gdG9JU09TdHJpbmckMTtcbnByb3RvJDIubG9jYWxlICAgICAgICAgPSBsb2NhbGU7XG5wcm90byQyLmxvY2FsZURhdGEgICAgID0gbG9jYWxlRGF0YTtcblxuLy8gRGVwcmVjYXRpb25zXG5wcm90byQyLnRvSXNvU3RyaW5nID0gZGVwcmVjYXRlKCd0b0lzb1N0cmluZygpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdG9JU09TdHJpbmcoKSBpbnN0ZWFkIChub3RpY2UgdGhlIGNhcGl0YWxzKScsIHRvSVNPU3RyaW5nJDEpO1xucHJvdG8kMi5sYW5nID0gbGFuZztcblxuLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdYJywgMCwgMCwgJ3VuaXgnKTtcbmFkZEZvcm1hdFRva2VuKCd4JywgMCwgMCwgJ3ZhbHVlT2YnKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCd4JywgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcbmFkZFBhcnNlVG9rZW4oJ1gnLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0LCAxMCkgKiAxMDAwKTtcbn0pO1xuYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XG59KTtcblxuLy8gU2lkZSBlZmZlY3QgaW1wb3J0c1xuXG5cbmhvb2tzLnZlcnNpb24gPSAnMi4yMC4xJztcblxuc2V0SG9va0NhbGxiYWNrKGNyZWF0ZUxvY2FsKTtcblxuaG9va3MuZm4gICAgICAgICAgICAgICAgICAgID0gcHJvdG87XG5ob29rcy5taW4gICAgICAgICAgICAgICAgICAgPSBtaW47XG5ob29rcy5tYXggICAgICAgICAgICAgICAgICAgPSBtYXg7XG5ob29rcy5ub3cgICAgICAgICAgICAgICAgICAgPSBub3c7XG5ob29rcy51dGMgICAgICAgICAgICAgICAgICAgPSBjcmVhdGVVVEM7XG5ob29rcy51bml4ICAgICAgICAgICAgICAgICAgPSBjcmVhdGVVbml4O1xuaG9va3MubW9udGhzICAgICAgICAgICAgICAgID0gbGlzdE1vbnRocztcbmhvb2tzLmlzRGF0ZSAgICAgICAgICAgICAgICA9IGlzRGF0ZTtcbmhvb2tzLmxvY2FsZSAgICAgICAgICAgICAgICA9IGdldFNldEdsb2JhbExvY2FsZTtcbmhvb2tzLmludmFsaWQgICAgICAgICAgICAgICA9IGNyZWF0ZUludmFsaWQ7XG5ob29rcy5kdXJhdGlvbiAgICAgICAgICAgICAgPSBjcmVhdGVEdXJhdGlvbjtcbmhvb2tzLmlzTW9tZW50ICAgICAgICAgICAgICA9IGlzTW9tZW50O1xuaG9va3Mud2Vla2RheXMgICAgICAgICAgICAgID0gbGlzdFdlZWtkYXlzO1xuaG9va3MucGFyc2Vab25lICAgICAgICAgICAgID0gY3JlYXRlSW5ab25lO1xuaG9va3MubG9jYWxlRGF0YSAgICAgICAgICAgID0gZ2V0TG9jYWxlO1xuaG9va3MuaXNEdXJhdGlvbiAgICAgICAgICAgID0gaXNEdXJhdGlvbjtcbmhvb2tzLm1vbnRoc1Nob3J0ICAgICAgICAgICA9IGxpc3RNb250aHNTaG9ydDtcbmhvb2tzLndlZWtkYXlzTWluICAgICAgICAgICA9IGxpc3RXZWVrZGF5c01pbjtcbmhvb2tzLmRlZmluZUxvY2FsZSAgICAgICAgICA9IGRlZmluZUxvY2FsZTtcbmhvb2tzLnVwZGF0ZUxvY2FsZSAgICAgICAgICA9IHVwZGF0ZUxvY2FsZTtcbmhvb2tzLmxvY2FsZXMgICAgICAgICAgICAgICA9IGxpc3RMb2NhbGVzO1xuaG9va3Mud2Vla2RheXNTaG9ydCAgICAgICAgID0gbGlzdFdlZWtkYXlzU2hvcnQ7XG5ob29rcy5ub3JtYWxpemVVbml0cyAgICAgICAgPSBub3JtYWxpemVVbml0cztcbmhvb2tzLnJlbGF0aXZlVGltZVJvdW5kaW5nICA9IGdldFNldFJlbGF0aXZlVGltZVJvdW5kaW5nO1xuaG9va3MucmVsYXRpdmVUaW1lVGhyZXNob2xkID0gZ2V0U2V0UmVsYXRpdmVUaW1lVGhyZXNob2xkO1xuaG9va3MuY2FsZW5kYXJGb3JtYXQgICAgICAgID0gZ2V0Q2FsZW5kYXJGb3JtYXQ7XG5ob29rcy5wcm90b3R5cGUgICAgICAgICAgICAgPSBwcm90bztcblxuLy8gY3VycmVudGx5IEhUTUw1IGlucHV0IHR5cGUgb25seSBzdXBwb3J0cyAyNC1ob3VyIGZvcm1hdHNcbmhvb2tzLkhUTUw1X0ZNVCA9IHtcbiAgICBEQVRFVElNRV9MT0NBTDogJ1lZWVktTU0tRERUSEg6bW0nLCAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgLz5cbiAgICBEQVRFVElNRV9MT0NBTF9TRUNPTkRTOiAnWVlZWS1NTS1ERFRISDptbTpzcycsICAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjFcIiAvPlxuICAgIERBVEVUSU1FX0xPQ0FMX01TOiAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1MnLCAgIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBzdGVwPVwiMC4wMDFcIiAvPlxuICAgIERBVEU6ICdZWVlZLU1NLUREJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIC8+XG4gICAgVElNRTogJ0hIOm1tJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgLz5cbiAgICBUSU1FX1NFQ09ORFM6ICdISDptbTpzcycsICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMVwiIC8+XG4gICAgVElNRV9NUzogJ0hIOm1tOnNzLlNTUycsICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgc3RlcD1cIjAuMDAxXCIgLz5cbiAgICBXRUVLOiAnWVlZWS1bV11XVycsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8aW5wdXQgdHlwZT1cIndlZWtcIiAvPlxuICAgIE1PTlRIOiAnWVlZWS1NTScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxpbnB1dCB0eXBlPVwibW9udGhcIiAvPlxufTtcblxucmV0dXJuIGhvb2tzO1xuXG59KSkpO1xuIiwiLyohXG5cdFBhcGEgUGFyc2Vcblx0djQuMy42XG5cdGh0dHBzOi8vZ2l0aHViLmNvbS9taG9sdC9QYXBhUGFyc2Vcblx0TGljZW5zZTogTUlUXG4qL1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpXG57XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpXG5cdHtcblx0XHQvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcblx0XHQvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcblx0XHQvLyBsaWtlIE5vZGUuXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcblx0XHRyb290LlBhcGEgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24oKVxue1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGdsb2JhbCA9IChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gYWx0ZXJuYXRpdmUgbWV0aG9kLCBzaW1pbGFyIHRvIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuXHRcdC8vIGJ1dCB3aXRob3V0IHVzaW5nIGBldmFsYCAod2hpY2ggaXMgZGlzYWJsZWQgd2hlblxuXHRcdC8vIHVzaW5nIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cblxuXHRcdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfVxuXHRcdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cblx0XHQvLyBXaGVuIHJ1bm5pbmcgdGVzdHMgbm9uZSBvZiB0aGUgYWJvdmUgaGF2ZSBiZWVuIGRlZmluZWRcblx0XHRyZXR1cm4ge307XG5cdH0pKCk7XG5cblxuXHR2YXIgSVNfV09SS0VSID0gIWdsb2JhbC5kb2N1bWVudCAmJiAhIWdsb2JhbC5wb3N0TWVzc2FnZSxcblx0XHRJU19QQVBBX1dPUktFUiA9IElTX1dPUktFUiAmJiAvKFxcP3wmKXBhcGF3b3JrZXIoPXwmfCQpLy50ZXN0KGdsb2JhbC5sb2NhdGlvbi5zZWFyY2gpLFxuXHRcdExPQURFRF9TWU5DID0gZmFsc2UsIEFVVE9fU0NSSVBUX1BBVEg7XG5cdHZhciB3b3JrZXJzID0ge30sIHdvcmtlcklkQ291bnRlciA9IDA7XG5cblx0dmFyIFBhcGEgPSB7fTtcblxuXHRQYXBhLnBhcnNlID0gQ3N2VG9Kc29uO1xuXHRQYXBhLnVucGFyc2UgPSBKc29uVG9Dc3Y7XG5cblx0UGFwYS5SRUNPUkRfU0VQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7XG5cdFBhcGEuVU5JVF9TRVAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDMxKTtcblx0UGFwYS5CWVRFX09SREVSX01BUksgPSAnXFx1ZmVmZic7XG5cdFBhcGEuQkFEX0RFTElNSVRFUlMgPSBbJ1xccicsICdcXG4nLCAnXCInLCBQYXBhLkJZVEVfT1JERVJfTUFSS107XG5cdFBhcGEuV09SS0VSU19TVVBQT1JURUQgPSAhSVNfV09SS0VSICYmICEhZ2xvYmFsLldvcmtlcjtcblx0UGFwYS5TQ1JJUFRfUEFUSCA9IG51bGw7XHQvLyBNdXN0IGJlIHNldCBieSB5b3VyIGNvZGUgaWYgeW91IHVzZSB3b3JrZXJzIGFuZCB0aGlzIGxpYiBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHlcblxuXHQvLyBDb25maWd1cmFibGUgY2h1bmsgc2l6ZXMgZm9yIGxvY2FsIGFuZCByZW1vdGUgZmlsZXMsIHJlc3BlY3RpdmVseVxuXHRQYXBhLkxvY2FsQ2h1bmtTaXplID0gMTAyNCAqIDEwMjQgKiAxMDtcdC8vIDEwIE1CXG5cdFBhcGEuUmVtb3RlQ2h1bmtTaXplID0gMTAyNCAqIDEwMjQgKiA1O1x0Ly8gNSBNQlxuXHRQYXBhLkRlZmF1bHREZWxpbWl0ZXIgPSAnLCc7XHRcdFx0Ly8gVXNlZCBpZiBub3Qgc3BlY2lmaWVkIGFuZCBkZXRlY3Rpb24gZmFpbHNcblxuXHQvLyBFeHBvc2VkIGZvciB0ZXN0aW5nIGFuZCBkZXZlbG9wbWVudCBvbmx5XG5cdFBhcGEuUGFyc2VyID0gUGFyc2VyO1xuXHRQYXBhLlBhcnNlckhhbmRsZSA9IFBhcnNlckhhbmRsZTtcblx0UGFwYS5OZXR3b3JrU3RyZWFtZXIgPSBOZXR3b3JrU3RyZWFtZXI7XG5cdFBhcGEuRmlsZVN0cmVhbWVyID0gRmlsZVN0cmVhbWVyO1xuXHRQYXBhLlN0cmluZ1N0cmVhbWVyID0gU3RyaW5nU3RyZWFtZXI7XG5cdFBhcGEuUmVhZGFibGVTdHJlYW1TdHJlYW1lciA9IFJlYWRhYmxlU3RyZWFtU3RyZWFtZXI7XG5cblx0aWYgKGdsb2JhbC5qUXVlcnkpXG5cdHtcblx0XHR2YXIgJCA9IGdsb2JhbC5qUXVlcnk7XG5cdFx0JC5mbi5wYXJzZSA9IGZ1bmN0aW9uKG9wdGlvbnMpXG5cdFx0e1xuXHRcdFx0dmFyIGNvbmZpZyA9IG9wdGlvbnMuY29uZmlnIHx8IHt9O1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbihpZHgpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBzdXBwb3J0ZWQgPSAkKHRoaXMpLnByb3AoJ3RhZ05hbWUnKS50b1VwcGVyQ2FzZSgpID09PSAnSU5QVVQnXG5cdFx0XHRcdFx0XHRcdFx0JiYgJCh0aGlzKS5hdHRyKCd0eXBlJykudG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGUnXG5cdFx0XHRcdFx0XHRcdFx0JiYgZ2xvYmFsLkZpbGVSZWFkZXI7XG5cblx0XHRcdFx0aWYgKCFzdXBwb3J0ZWQgfHwgIXRoaXMuZmlsZXMgfHwgdGhpcy5maWxlcy5sZW5ndGggPT09IDApXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHQvLyBjb250aW51ZSB0byBuZXh0IGlucHV0IGVsZW1lbnRcblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsZXMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRcdGZpbGU6IHRoaXMuZmlsZXNbaV0sXG5cdFx0XHRcdFx0XHRpbnB1dEVsZW06IHRoaXMsXG5cdFx0XHRcdFx0XHRpbnN0YW5jZUNvbmZpZzogJC5leHRlbmQoe30sIGNvbmZpZylcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHBhcnNlTmV4dEZpbGUoKTtcdC8vIGJlZ2luIHBhcnNpbmdcblx0XHRcdHJldHVybiB0aGlzO1x0XHQvLyBtYWludGFpbnMgY2hhaW5hYmlsaXR5XG5cblxuXHRcdFx0ZnVuY3Rpb24gcGFyc2VOZXh0RmlsZSgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChxdWV1ZS5sZW5ndGggPT09IDApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoaXNGdW5jdGlvbihvcHRpb25zLmNvbXBsZXRlKSlcblx0XHRcdFx0XHRcdG9wdGlvbnMuY29tcGxldGUoKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZiA9IHF1ZXVlWzBdO1xuXG5cdFx0XHRcdGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuYmVmb3JlKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IG9wdGlvbnMuYmVmb3JlKGYuZmlsZSwgZi5pbnB1dEVsZW0pO1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXR1cm5lZCA9PT0gJ29iamVjdCcpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKHJldHVybmVkLmFjdGlvbiA9PT0gJ2Fib3J0Jylcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0ZXJyb3IoJ0Fib3J0RXJyb3InLCBmLmZpbGUsIGYuaW5wdXRFbGVtLCByZXR1cm5lZC5yZWFzb24pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHQvLyBBYm9ydHMgYWxsIHF1ZXVlZCBmaWxlcyBpbW1lZGlhdGVseVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSBpZiAocmV0dXJuZWQuYWN0aW9uID09PSAnc2tpcCcpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGZpbGVDb21wbGV0ZSgpO1x0Ly8gcGFyc2UgdGhlIG5leHQgZmlsZSBpbiB0aGUgcXVldWUsIGlmIGFueVxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgcmV0dXJuZWQuY29uZmlnID09PSAnb2JqZWN0Jylcblx0XHRcdFx0XHRcdFx0Zi5pbnN0YW5jZUNvbmZpZyA9ICQuZXh0ZW5kKGYuaW5zdGFuY2VDb25maWcsIHJldHVybmVkLmNvbmZpZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHJldHVybmVkID09PSAnc2tpcCcpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZmlsZUNvbXBsZXRlKCk7XHQvLyBwYXJzZSB0aGUgbmV4dCBmaWxlIGluIHRoZSBxdWV1ZSwgaWYgYW55XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV3JhcCB1cCB0aGUgdXNlcidzIGNvbXBsZXRlIGNhbGxiYWNrLCBpZiBhbnksIHNvIHRoYXQgb3VycyBhbHNvIGdldHMgZXhlY3V0ZWRcblx0XHRcdFx0dmFyIHVzZXJDb21wbGV0ZUZ1bmMgPSBmLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlO1xuXHRcdFx0XHRmLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlID0gZnVuY3Rpb24ocmVzdWx0cylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChpc0Z1bmN0aW9uKHVzZXJDb21wbGV0ZUZ1bmMpKVxuXHRcdFx0XHRcdFx0dXNlckNvbXBsZXRlRnVuYyhyZXN1bHRzLCBmLmZpbGUsIGYuaW5wdXRFbGVtKTtcblx0XHRcdFx0XHRmaWxlQ29tcGxldGUoKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRQYXBhLnBhcnNlKGYuZmlsZSwgZi5pbnN0YW5jZUNvbmZpZyk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVycm9yKG5hbWUsIGZpbGUsIGVsZW0sIHJlYXNvbilcblx0XHRcdHtcblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5lcnJvcikpXG5cdFx0XHRcdFx0b3B0aW9ucy5lcnJvcih7bmFtZTogbmFtZX0sIGZpbGUsIGVsZW0sIHJlYXNvbik7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGZpbGVDb21wbGV0ZSgpXG5cdFx0XHR7XG5cdFx0XHRcdHF1ZXVlLnNwbGljZSgwLCAxKTtcblx0XHRcdFx0cGFyc2VOZXh0RmlsZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0aWYgKElTX1BBUEFfV09SS0VSKVxuXHR7XG5cdFx0Z2xvYmFsLm9ubWVzc2FnZSA9IHdvcmtlclRocmVhZFJlY2VpdmVkTWVzc2FnZTtcblx0fVxuXHRlbHNlIGlmIChQYXBhLldPUktFUlNfU1VQUE9SVEVEKVxuXHR7XG5cdFx0QVVUT19TQ1JJUFRfUEFUSCA9IGdldFNjcmlwdFBhdGgoKTtcblxuXHRcdC8vIENoZWNrIGlmIHRoZSBzY3JpcHQgd2FzIGxvYWRlZCBzeW5jaHJvbm91c2x5XG5cdFx0aWYgKCFkb2N1bWVudC5ib2R5KVxuXHRcdHtcblx0XHRcdC8vIEJvZHkgZG9lc24ndCBleGlzdCB5ZXQsIG11c3QgYmUgc3luY2hyb25vdXNcblx0XHRcdExPQURFRF9TWU5DID0gdHJ1ZTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdExPQURFRF9TWU5DID0gdHJ1ZTtcblx0XHRcdH0sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cblxuXG5cdGZ1bmN0aW9uIENzdlRvSnNvbihfaW5wdXQsIF9jb25maWcpXG5cdHtcblx0XHRfY29uZmlnID0gX2NvbmZpZyB8fCB7fTtcblx0XHR2YXIgZHluYW1pY1R5cGluZyA9IF9jb25maWcuZHluYW1pY1R5cGluZyB8fCBmYWxzZTtcblx0XHRpZiAoaXNGdW5jdGlvbihkeW5hbWljVHlwaW5nKSkge1xuXHRcdFx0X2NvbmZpZy5keW5hbWljVHlwaW5nRnVuY3Rpb24gPSBkeW5hbWljVHlwaW5nO1xuXHRcdFx0Ly8gV2lsbCBiZSBmaWxsZWQgb24gZmlyc3Qgcm93IGNhbGxcblx0XHRcdGR5bmFtaWNUeXBpbmcgPSB7fTtcblx0XHR9XG5cdFx0X2NvbmZpZy5keW5hbWljVHlwaW5nID0gZHluYW1pY1R5cGluZztcblxuXHRcdGlmIChfY29uZmlnLndvcmtlciAmJiBQYXBhLldPUktFUlNfU1VQUE9SVEVEKVxuXHRcdHtcblx0XHRcdHZhciB3ID0gbmV3V29ya2VyKCk7XG5cblx0XHRcdHcudXNlclN0ZXAgPSBfY29uZmlnLnN0ZXA7XG5cdFx0XHR3LnVzZXJDaHVuayA9IF9jb25maWcuY2h1bms7XG5cdFx0XHR3LnVzZXJDb21wbGV0ZSA9IF9jb25maWcuY29tcGxldGU7XG5cdFx0XHR3LnVzZXJFcnJvciA9IF9jb25maWcuZXJyb3I7XG5cblx0XHRcdF9jb25maWcuc3RlcCA9IGlzRnVuY3Rpb24oX2NvbmZpZy5zdGVwKTtcblx0XHRcdF9jb25maWcuY2h1bmsgPSBpc0Z1bmN0aW9uKF9jb25maWcuY2h1bmspO1xuXHRcdFx0X2NvbmZpZy5jb21wbGV0ZSA9IGlzRnVuY3Rpb24oX2NvbmZpZy5jb21wbGV0ZSk7XG5cdFx0XHRfY29uZmlnLmVycm9yID0gaXNGdW5jdGlvbihfY29uZmlnLmVycm9yKTtcblx0XHRcdGRlbGV0ZSBfY29uZmlnLndvcmtlcjtcdC8vIHByZXZlbnQgaW5maW5pdGUgbG9vcFxuXG5cdFx0XHR3LnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0aW5wdXQ6IF9pbnB1dCxcblx0XHRcdFx0Y29uZmlnOiBfY29uZmlnLFxuXHRcdFx0XHR3b3JrZXJJZDogdy5pZFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgc3RyZWFtZXIgPSBudWxsO1xuXHRcdGlmICh0eXBlb2YgX2lucHV0ID09PSAnc3RyaW5nJylcblx0XHR7XG5cdFx0XHRpZiAoX2NvbmZpZy5kb3dubG9hZClcblx0XHRcdFx0c3RyZWFtZXIgPSBuZXcgTmV0d29ya1N0cmVhbWVyKF9jb25maWcpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdHJlYW1lciA9IG5ldyBTdHJpbmdTdHJlYW1lcihfY29uZmlnKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoX2lucHV0LnJlYWRhYmxlID09PSB0cnVlICYmIGlzRnVuY3Rpb24oX2lucHV0LnJlYWQpICYmIGlzRnVuY3Rpb24oX2lucHV0Lm9uKSlcblx0XHR7XG5cdFx0XHRzdHJlYW1lciA9IG5ldyBSZWFkYWJsZVN0cmVhbVN0cmVhbWVyKF9jb25maWcpO1xuXHRcdH1cblx0XHRlbHNlIGlmICgoZ2xvYmFsLkZpbGUgJiYgX2lucHV0IGluc3RhbmNlb2YgRmlsZSkgfHwgX2lucHV0IGluc3RhbmNlb2YgT2JqZWN0KVx0Ly8gLi4uU2FmYXJpLiAoc2VlIGlzc3VlICMxMDYpXG5cdFx0XHRzdHJlYW1lciA9IG5ldyBGaWxlU3RyZWFtZXIoX2NvbmZpZyk7XG5cblx0XHRyZXR1cm4gc3RyZWFtZXIuc3RyZWFtKF9pbnB1dCk7XG5cdH1cblxuXG5cblxuXG5cblx0ZnVuY3Rpb24gSnNvblRvQ3N2KF9pbnB1dCwgX2NvbmZpZylcblx0e1xuXHRcdHZhciBfb3V0cHV0ID0gJyc7XG5cdFx0dmFyIF9maWVsZHMgPSBbXTtcblxuXHRcdC8vIERlZmF1bHQgY29uZmlndXJhdGlvblxuXG5cdFx0LyoqIHdoZXRoZXIgdG8gc3Vycm91bmQgZXZlcnkgZGF0dW0gd2l0aCBxdW90ZXMgKi9cblx0XHR2YXIgX3F1b3RlcyA9IGZhbHNlO1xuXG5cdFx0LyoqIHdoZXRoZXIgdG8gd3JpdGUgaGVhZGVycyAqL1xuXHRcdHZhciBfd3JpdGVIZWFkZXIgPSB0cnVlO1xuXG5cdFx0LyoqIGRlbGltaXRpbmcgY2hhcmFjdGVyICovXG5cdFx0dmFyIF9kZWxpbWl0ZXIgPSAnLCc7XG5cblx0XHQvKiogbmV3bGluZSBjaGFyYWN0ZXIocykgKi9cblx0XHR2YXIgX25ld2xpbmUgPSAnXFxyXFxuJztcblxuXHRcdC8qKiBxdW90ZSBjaGFyYWN0ZXIgKi9cblx0XHR2YXIgX3F1b3RlQ2hhciA9ICdcIic7XG5cblx0XHR1bnBhY2tDb25maWcoKTtcblxuXHRcdHZhciBxdW90ZUNoYXJSZWdleCA9IG5ldyBSZWdFeHAoX3F1b3RlQ2hhciwgJ2cnKTtcblxuXHRcdGlmICh0eXBlb2YgX2lucHV0ID09PSAnc3RyaW5nJylcblx0XHRcdF9pbnB1dCA9IEpTT04ucGFyc2UoX2lucHV0KTtcblxuXHRcdGlmIChfaW5wdXQgaW5zdGFuY2VvZiBBcnJheSlcblx0XHR7XG5cdFx0XHRpZiAoIV9pbnB1dC5sZW5ndGggfHwgX2lucHV0WzBdIGluc3RhbmNlb2YgQXJyYXkpXG5cdFx0XHRcdHJldHVybiBzZXJpYWxpemUobnVsbCwgX2lucHV0KTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBfaW5wdXRbMF0gPT09ICdvYmplY3QnKVxuXHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKG9iamVjdEtleXMoX2lucHV0WzBdKSwgX2lucHV0KTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodHlwZW9mIF9pbnB1dCA9PT0gJ29iamVjdCcpXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBfaW5wdXQuZGF0YSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdF9pbnB1dC5kYXRhID0gSlNPTi5wYXJzZShfaW5wdXQuZGF0YSk7XG5cblx0XHRcdGlmIChfaW5wdXQuZGF0YSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoIV9pbnB1dC5maWVsZHMpXG5cdFx0XHRcdFx0X2lucHV0LmZpZWxkcyA9ICBfaW5wdXQubWV0YSAmJiBfaW5wdXQubWV0YS5maWVsZHM7XG5cblx0XHRcdFx0aWYgKCFfaW5wdXQuZmllbGRzKVxuXHRcdFx0XHRcdF9pbnB1dC5maWVsZHMgPSAgX2lucHV0LmRhdGFbMF0gaW5zdGFuY2VvZiBBcnJheVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfaW5wdXQuZmllbGRzXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IG9iamVjdEtleXMoX2lucHV0LmRhdGFbMF0pO1xuXG5cdFx0XHRcdGlmICghKF9pbnB1dC5kYXRhWzBdIGluc3RhbmNlb2YgQXJyYXkpICYmIHR5cGVvZiBfaW5wdXQuZGF0YVswXSAhPT0gJ29iamVjdCcpXG5cdFx0XHRcdFx0X2lucHV0LmRhdGEgPSBbX2lucHV0LmRhdGFdO1x0Ly8gaGFuZGxlcyBpbnB1dCBsaWtlIFsxLDIsM10gb3IgWydhc2RmJ11cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShfaW5wdXQuZmllbGRzIHx8IFtdLCBfaW5wdXQuZGF0YSB8fCBbXSk7XG5cdFx0fVxuXG5cdFx0Ly8gRGVmYXVsdCAoYW55IHZhbGlkIHBhdGhzIHNob3VsZCByZXR1cm4gYmVmb3JlIHRoaXMpXG5cdFx0dGhyb3cgJ2V4Y2VwdGlvbjogVW5hYmxlIHRvIHNlcmlhbGl6ZSB1bnJlY29nbml6ZWQgaW5wdXQnO1xuXG5cblx0XHRmdW5jdGlvbiB1bnBhY2tDb25maWcoKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZyAhPT0gJ29iamVjdCcpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYgKHR5cGVvZiBfY29uZmlnLmRlbGltaXRlciA9PT0gJ3N0cmluZydcblx0XHRcdFx0JiYgX2NvbmZpZy5kZWxpbWl0ZXIubGVuZ3RoID09PSAxXG5cdFx0XHRcdCYmIFBhcGEuQkFEX0RFTElNSVRFUlMuaW5kZXhPZihfY29uZmlnLmRlbGltaXRlcikgPT09IC0xKVxuXHRcdFx0e1xuXHRcdFx0XHRfZGVsaW1pdGVyID0gX2NvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZy5xdW90ZXMgPT09ICdib29sZWFuJ1xuXHRcdFx0XHR8fCBfY29uZmlnLnF1b3RlcyBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0XHRfcXVvdGVzID0gX2NvbmZpZy5xdW90ZXM7XG5cblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZy5uZXdsaW5lID09PSAnc3RyaW5nJylcblx0XHRcdFx0X25ld2xpbmUgPSBfY29uZmlnLm5ld2xpbmU7XG5cblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZy5xdW90ZUNoYXIgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRfcXVvdGVDaGFyID0gX2NvbmZpZy5xdW90ZUNoYXI7XG5cblx0XHRcdGlmICh0eXBlb2YgX2NvbmZpZy5oZWFkZXIgPT09ICdib29sZWFuJylcblx0XHRcdFx0X3dyaXRlSGVhZGVyID0gX2NvbmZpZy5oZWFkZXI7XG5cdFx0fVxuXG5cblx0XHQvKiogVHVybnMgYW4gb2JqZWN0J3Mga2V5cyBpbnRvIGFuIGFycmF5ICovXG5cdFx0ZnVuY3Rpb24gb2JqZWN0S2V5cyhvYmopXG5cdFx0e1xuXHRcdFx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKVxuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR2YXIga2V5cyA9IFtdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIG9iailcblx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0XHRyZXR1cm4ga2V5cztcblx0XHR9XG5cblx0XHQvKiogVGhlIGRvdWJsZSBmb3IgbG9vcCB0aGF0IGl0ZXJhdGVzIHRoZSBkYXRhIGFuZCB3cml0ZXMgb3V0IGEgQ1NWIHN0cmluZyBpbmNsdWRpbmcgaGVhZGVyIHJvdyAqL1xuXHRcdGZ1bmN0aW9uIHNlcmlhbGl6ZShmaWVsZHMsIGRhdGEpXG5cdFx0e1xuXHRcdFx0dmFyIGNzdiA9ICcnO1xuXG5cdFx0XHRpZiAodHlwZW9mIGZpZWxkcyA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdGZpZWxkcyA9IEpTT04ucGFyc2UoZmllbGRzKTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG5cdFx0XHR2YXIgaGFzSGVhZGVyID0gZmllbGRzIGluc3RhbmNlb2YgQXJyYXkgJiYgZmllbGRzLmxlbmd0aCA+IDA7XG5cdFx0XHR2YXIgZGF0YUtleWVkQnlGaWVsZCA9ICEoZGF0YVswXSBpbnN0YW5jZW9mIEFycmF5KTtcblxuXHRcdFx0Ly8gSWYgdGhlcmUgYSBoZWFkZXIgcm93LCB3cml0ZSBpdCBmaXJzdFxuXHRcdFx0aWYgKGhhc0hlYWRlciAmJiBfd3JpdGVIZWFkZXIpXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aWYgKGkgPiAwKVxuXHRcdFx0XHRcdFx0Y3N2ICs9IF9kZWxpbWl0ZXI7XG5cdFx0XHRcdFx0Y3N2ICs9IHNhZmUoZmllbGRzW2ldLCBpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdGNzdiArPSBfbmV3bGluZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGhlbiB3cml0ZSBvdXQgdGhlIGRhdGFcblx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IGRhdGEubGVuZ3RoOyByb3crKylcblx0XHRcdHtcblx0XHRcdFx0dmFyIG1heENvbCA9IGhhc0hlYWRlciA/IGZpZWxkcy5sZW5ndGggOiBkYXRhW3Jvd10ubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1heENvbDsgY29sKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZiAoY29sID4gMClcblx0XHRcdFx0XHRcdGNzdiArPSBfZGVsaW1pdGVyO1xuXHRcdFx0XHRcdHZhciBjb2xJZHggPSBoYXNIZWFkZXIgJiYgZGF0YUtleWVkQnlGaWVsZCA/IGZpZWxkc1tjb2xdIDogY29sO1xuXHRcdFx0XHRcdGNzdiArPSBzYWZlKGRhdGFbcm93XVtjb2xJZHhdLCBjb2wpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJvdyA8IGRhdGEubGVuZ3RoIC0gMSlcblx0XHRcdFx0XHRjc3YgKz0gX25ld2xpbmU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBjc3Y7XG5cdFx0fVxuXG5cdFx0LyoqIEVuY2xvc2VzIGEgdmFsdWUgYXJvdW5kIHF1b3RlcyBpZiBuZWVkZWQgKG1ha2VzIGEgdmFsdWUgc2FmZSBmb3IgQ1NWIGluc2VydGlvbikgKi9cblx0XHRmdW5jdGlvbiBzYWZlKHN0ciwgY29sKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJyB8fCBzdHIgPT09IG51bGwpXG5cdFx0XHRcdHJldHVybiAnJztcblxuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCkucmVwbGFjZShxdW90ZUNoYXJSZWdleCwgX3F1b3RlQ2hhcitfcXVvdGVDaGFyKTtcblxuXHRcdFx0dmFyIG5lZWRzUXVvdGVzID0gKHR5cGVvZiBfcXVvdGVzID09PSAnYm9vbGVhbicgJiYgX3F1b3Rlcylcblx0XHRcdFx0XHRcdFx0fHwgKF9xdW90ZXMgaW5zdGFuY2VvZiBBcnJheSAmJiBfcXVvdGVzW2NvbF0pXG5cdFx0XHRcdFx0XHRcdHx8IGhhc0FueShzdHIsIFBhcGEuQkFEX0RFTElNSVRFUlMpXG5cdFx0XHRcdFx0XHRcdHx8IHN0ci5pbmRleE9mKF9kZWxpbWl0ZXIpID4gLTFcblx0XHRcdFx0XHRcdFx0fHwgc3RyLmNoYXJBdCgwKSA9PT0gJyAnXG5cdFx0XHRcdFx0XHRcdHx8IHN0ci5jaGFyQXQoc3RyLmxlbmd0aCAtIDEpID09PSAnICc7XG5cblx0XHRcdHJldHVybiBuZWVkc1F1b3RlcyA/IF9xdW90ZUNoYXIgKyBzdHIgKyBfcXVvdGVDaGFyIDogc3RyO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhc0FueShzdHIsIHN1YnN0cmluZ3MpXG5cdFx0e1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzdHJpbmdzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRpZiAoc3RyLmluZGV4T2Yoc3Vic3RyaW5nc1tpXSkgPiAtMSlcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKiogQ2h1bmtTdHJlYW1lciBpcyB0aGUgYmFzZSBwcm90b3R5cGUgZm9yIHZhcmlvdXMgc3RyZWFtZXIgaW1wbGVtZW50YXRpb25zLiAqL1xuXHRmdW5jdGlvbiBDaHVua1N0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdHRoaXMuX2hhbmRsZSA9IG51bGw7XG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cdFx0dGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcblx0XHR0aGlzLl9pbnB1dCA9IG51bGw7XG5cdFx0dGhpcy5fYmFzZUluZGV4ID0gMDtcblx0XHR0aGlzLl9wYXJ0aWFsTGluZSA9ICcnO1xuXHRcdHRoaXMuX3Jvd0NvdW50ID0gMDtcblx0XHR0aGlzLl9zdGFydCA9IDA7XG5cdFx0dGhpcy5fbmV4dENodW5rID0gbnVsbDtcblx0XHR0aGlzLmlzRmlyc3RDaHVuayA9IHRydWU7XG5cdFx0dGhpcy5fY29tcGxldGVSZXN1bHRzID0ge1xuXHRcdFx0ZGF0YTogW10sXG5cdFx0XHRlcnJvcnM6IFtdLFxuXHRcdFx0bWV0YToge31cblx0XHR9O1xuXHRcdHJlcGxhY2VDb25maWcuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dGhpcy5wYXJzZUNodW5rID0gZnVuY3Rpb24oY2h1bmspXG5cdFx0e1xuXHRcdFx0Ly8gRmlyc3QgY2h1bmsgcHJlLXByb2Nlc3Npbmdcblx0XHRcdGlmICh0aGlzLmlzRmlyc3RDaHVuayAmJiBpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIG1vZGlmaWVkQ2h1bmsgPSB0aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuayhjaHVuayk7XG5cdFx0XHRcdGlmIChtb2RpZmllZENodW5rICE9PSB1bmRlZmluZWQpXG5cdFx0XHRcdFx0Y2h1bmsgPSBtb2RpZmllZENodW5rO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pc0ZpcnN0Q2h1bmsgPSBmYWxzZTtcblxuXHRcdFx0Ly8gUmVqb2luIHRoZSBsaW5lIHdlIGxpa2VseSBqdXN0IHNwbGl0IGluIHR3byBieSBjaHVua2luZyB0aGUgZmlsZVxuXHRcdFx0dmFyIGFnZ3JlZ2F0ZSA9IHRoaXMuX3BhcnRpYWxMaW5lICsgY2h1bms7XG5cdFx0XHR0aGlzLl9wYXJ0aWFsTGluZSA9ICcnO1xuXG5cdFx0XHR2YXIgcmVzdWx0cyA9IHRoaXMuX2hhbmRsZS5wYXJzZShhZ2dyZWdhdGUsIHRoaXMuX2Jhc2VJbmRleCwgIXRoaXMuX2ZpbmlzaGVkKTtcblxuXHRcdFx0aWYgKHRoaXMuX2hhbmRsZS5wYXVzZWQoKSB8fCB0aGlzLl9oYW5kbGUuYWJvcnRlZCgpKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdHZhciBsYXN0SW5kZXggPSByZXN1bHRzLm1ldGEuY3Vyc29yO1xuXG5cdFx0XHRpZiAoIXRoaXMuX2ZpbmlzaGVkKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9wYXJ0aWFsTGluZSA9IGFnZ3JlZ2F0ZS5zdWJzdHJpbmcobGFzdEluZGV4IC0gdGhpcy5fYmFzZUluZGV4KTtcblx0XHRcdFx0dGhpcy5fYmFzZUluZGV4ID0gbGFzdEluZGV4O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVzdWx0cyAmJiByZXN1bHRzLmRhdGEpXG5cdFx0XHRcdHRoaXMuX3Jvd0NvdW50ICs9IHJlc3VsdHMuZGF0YS5sZW5ndGg7XG5cblx0XHRcdHZhciBmaW5pc2hlZEluY2x1ZGluZ1ByZXZpZXcgPSB0aGlzLl9maW5pc2hlZCB8fCAodGhpcy5fY29uZmlnLnByZXZpZXcgJiYgdGhpcy5fcm93Q291bnQgPj0gdGhpcy5fY29uZmlnLnByZXZpZXcpO1xuXG5cdFx0XHRpZiAoSVNfUEFQQV9XT1JLRVIpXG5cdFx0XHR7XG5cdFx0XHRcdGdsb2JhbC5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdFx0cmVzdWx0czogcmVzdWx0cyxcblx0XHRcdFx0XHR3b3JrZXJJZDogUGFwYS5XT1JLRVJfSUQsXG5cdFx0XHRcdFx0ZmluaXNoZWQ6IGZpbmlzaGVkSW5jbHVkaW5nUHJldmlld1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fY29uZmlnLmNodW5rKSlcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fY29uZmlnLmNodW5rKHJlc3VsdHMsIHRoaXMuX2hhbmRsZSk7XG5cdFx0XHRcdGlmICh0aGlzLl9wYXVzZWQpXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRyZXN1bHRzID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGhpcy5fY29uZmlnLnN0ZXAgJiYgIXRoaXMuX2NvbmZpZy5jaHVuaykge1xuXHRcdFx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YSA9IHRoaXMuX2NvbXBsZXRlUmVzdWx0cy5kYXRhLmNvbmNhdChyZXN1bHRzLmRhdGEpO1xuXHRcdFx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzID0gdGhpcy5fY29tcGxldGVSZXN1bHRzLmVycm9ycy5jb25jYXQocmVzdWx0cy5lcnJvcnMpO1xuXHRcdFx0XHR0aGlzLl9jb21wbGV0ZVJlc3VsdHMubWV0YSA9IHJlc3VsdHMubWV0YTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZpbmlzaGVkSW5jbHVkaW5nUHJldmlldyAmJiBpc0Z1bmN0aW9uKHRoaXMuX2NvbmZpZy5jb21wbGV0ZSkgJiYgKCFyZXN1bHRzIHx8ICFyZXN1bHRzLm1ldGEuYWJvcnRlZCkpXG5cdFx0XHRcdHRoaXMuX2NvbmZpZy5jb21wbGV0ZSh0aGlzLl9jb21wbGV0ZVJlc3VsdHMsIHRoaXMuX2lucHV0KTtcblxuXHRcdFx0aWYgKCFmaW5pc2hlZEluY2x1ZGluZ1ByZXZpZXcgJiYgKCFyZXN1bHRzIHx8ICFyZXN1bHRzLm1ldGEucGF1c2VkKSlcblx0XHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XG5cblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH07XG5cblx0XHR0aGlzLl9zZW5kRXJyb3IgPSBmdW5jdGlvbihlcnJvcilcblx0XHR7XG5cdFx0XHRpZiAoaXNGdW5jdGlvbih0aGlzLl9jb25maWcuZXJyb3IpKVxuXHRcdFx0XHR0aGlzLl9jb25maWcuZXJyb3IoZXJyb3IpO1xuXHRcdFx0ZWxzZSBpZiAoSVNfUEFQQV9XT1JLRVIgJiYgdGhpcy5fY29uZmlnLmVycm9yKVxuXHRcdFx0e1xuXHRcdFx0XHRnbG9iYWwucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0XHRlcnJvcjogZXJyb3IsXG5cdFx0XHRcdFx0ZmluaXNoZWQ6IGZhbHNlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiByZXBsYWNlQ29uZmlnKGNvbmZpZylcblx0XHR7XG5cdFx0XHQvLyBEZWVwLWNvcHkgdGhlIGNvbmZpZyBzbyB3ZSBjYW4gZWRpdCBpdFxuXHRcdFx0dmFyIGNvbmZpZ0NvcHkgPSBjb3B5KGNvbmZpZyk7XG5cdFx0XHRjb25maWdDb3B5LmNodW5rU2l6ZSA9IHBhcnNlSW50KGNvbmZpZ0NvcHkuY2h1bmtTaXplKTtcdC8vIHBhcnNlSW50IFZFUlkgaW1wb3J0YW50IHNvIHdlIGRvbid0IGNvbmNhdGVuYXRlIHN0cmluZ3MhXG5cdFx0XHRpZiAoIWNvbmZpZy5zdGVwICYmICFjb25maWcuY2h1bmspXG5cdFx0XHRcdGNvbmZpZ0NvcHkuY2h1bmtTaXplID0gbnVsbDsgIC8vIGRpc2FibGUgUmFuZ2UgaGVhZGVyIGlmIG5vdCBzdHJlYW1pbmc7IGJhZCB2YWx1ZXMgYnJlYWsgSUlTIC0gc2VlIGlzc3VlICMxOTZcblx0XHRcdHRoaXMuX2hhbmRsZSA9IG5ldyBQYXJzZXJIYW5kbGUoY29uZmlnQ29weSk7XG5cdFx0XHR0aGlzLl9oYW5kbGUuc3RyZWFtZXIgPSB0aGlzO1xuXHRcdFx0dGhpcy5fY29uZmlnID0gY29uZmlnQ29weTtcdC8vIHBlcnNpc3QgdGhlIGNvcHkgdG8gdGhlIGNhbGxlclxuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gTmV0d29ya1N0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRpZiAoIWNvbmZpZy5jaHVua1NpemUpXG5cdFx0XHRjb25maWcuY2h1bmtTaXplID0gUGFwYS5SZW1vdGVDaHVua1NpemU7XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgeGhyO1xuXG5cdFx0aWYgKElTX1dPUktFUilcblx0XHR7XG5cdFx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX3JlYWRDaHVuaygpO1xuXHRcdFx0XHR0aGlzLl9jaHVua0xvYWRlZCgpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMuX25leHRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fcmVhZENodW5rKCk7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24odXJsKVxuXHRcdHtcblx0XHRcdHRoaXMuX2lucHV0ID0gdXJsO1xuXHRcdFx0dGhpcy5fbmV4dENodW5rKCk7XHQvLyBTdGFydHMgc3RyZWFtaW5nXG5cdFx0fTtcblxuXHRcdHRoaXMuX3JlYWRDaHVuayA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRpZiAodGhpcy5fZmluaXNoZWQpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2NodW5rTG9hZGVkKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0eGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRcdGlmICh0aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzKVxuXHRcdFx0e1xuXHRcdFx0XHR4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFJU19XT1JLRVIpXG5cdFx0XHR7XG5cdFx0XHRcdHhoci5vbmxvYWQgPSBiaW5kRnVuY3Rpb24odGhpcy5fY2h1bmtMb2FkZWQsIHRoaXMpO1xuXHRcdFx0XHR4aHIub25lcnJvciA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0Vycm9yLCB0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0eGhyLm9wZW4oJ0dFVCcsIHRoaXMuX2lucHV0LCAhSVNfV09SS0VSKTtcblx0XHRcdC8vIEhlYWRlcnMgY2FuIG9ubHkgYmUgc2V0IHdoZW4gb25jZSB0aGUgcmVxdWVzdCBzdGF0ZSBpcyBPUEVORURcblx0XHRcdGlmICh0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycylcblx0XHRcdHtcblx0XHRcdFx0dmFyIGhlYWRlcnMgPSB0aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycztcblxuXHRcdFx0XHRmb3IgKHZhciBoZWFkZXJOYW1lIGluIGhlYWRlcnMpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJOYW1lLCBoZWFkZXJzW2hlYWRlck5hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5fY29uZmlnLmNodW5rU2l6ZSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIGVuZCA9IHRoaXMuX3N0YXJ0ICsgdGhpcy5fY29uZmlnLmNodW5rU2l6ZSAtIDE7XHQvLyBtaW51cyBvbmUgYmVjYXVzZSBieXRlIHJhbmdlIGlzIGluY2x1c2l2ZVxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignUmFuZ2UnLCAnYnl0ZXM9Jyt0aGlzLl9zdGFydCsnLScrZW5kKTtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoJ0lmLU5vbmUtTWF0Y2gnLCAnd2Via2l0LW5vLWNhY2hlJyk7IC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MjY3MlxuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR4aHIuc2VuZCgpO1xuXHRcdFx0fVxuXHRcdFx0Y2F0Y2ggKGVycikge1xuXHRcdFx0XHR0aGlzLl9jaHVua0Vycm9yKGVyci5tZXNzYWdlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKElTX1dPUktFUiAmJiB4aHIuc3RhdHVzID09PSAwKVxuXHRcdFx0XHR0aGlzLl9jaHVua0Vycm9yKCk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMuX3N0YXJ0ICs9IHRoaXMuX2NvbmZpZy5jaHVua1NpemU7XG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtMb2FkZWQgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlICE9IDQpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0aWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSA0MDApXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2NodW5rRXJyb3IoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9ICF0aGlzLl9jb25maWcuY2h1bmtTaXplIHx8IHRoaXMuX3N0YXJ0ID4gZ2V0RmlsZVNpemUoeGhyKTtcblx0XHRcdHRoaXMucGFyc2VDaHVuayh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHR9XG5cblx0XHR0aGlzLl9jaHVua0Vycm9yID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlKVxuXHRcdHtcblx0XHRcdHZhciBlcnJvclRleHQgPSB4aHIuc3RhdHVzVGV4dCB8fCBlcnJvck1lc3NhZ2U7XG5cdFx0XHR0aGlzLl9zZW5kRXJyb3IoZXJyb3JUZXh0KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRGaWxlU2l6ZSh4aHIpXG5cdFx0e1xuXHRcdFx0dmFyIGNvbnRlbnRSYW5nZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1SYW5nZScpO1xuXHRcdFx0aWYgKGNvbnRlbnRSYW5nZSA9PT0gbnVsbCkgeyAvLyBubyBjb250ZW50IHJhbmdlLCB0aGVuIGZpbmlzaCFcblx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KGNvbnRlbnRSYW5nZS5zdWJzdHIoY29udGVudFJhbmdlLmxhc3RJbmRleE9mKCcvJykgKyAxKSk7XG5cdFx0fVxuXHR9XG5cdE5ldHdvcmtTdHJlYW1lci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENodW5rU3RyZWFtZXIucHJvdG90eXBlKTtcblx0TmV0d29ya1N0cmVhbWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5ldHdvcmtTdHJlYW1lcjtcblxuXG5cdGZ1bmN0aW9uIEZpbGVTdHJlYW1lcihjb25maWcpXG5cdHtcblx0XHRjb25maWcgPSBjb25maWcgfHwge307XG5cdFx0aWYgKCFjb25maWcuY2h1bmtTaXplKVxuXHRcdFx0Y29uZmlnLmNodW5rU2l6ZSA9IFBhcGEuTG9jYWxDaHVua1NpemU7XG5cdFx0Q2h1bmtTdHJlYW1lci5jYWxsKHRoaXMsIGNvbmZpZyk7XG5cblx0XHR2YXIgcmVhZGVyLCBzbGljZTtcblxuXHRcdC8vIEZpbGVSZWFkZXIgaXMgYmV0dGVyIHRoYW4gRmlsZVJlYWRlclN5bmMgKGV2ZW4gaW4gd29ya2VyKSAtIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yNDcwODY0OS8xMDQ4ODYyXG5cdFx0Ly8gQnV0IEZpcmVmb3ggaXMgYSBwaWxsLCB0b28gLSBzZWUgaXNzdWUgIzc2OiBodHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlL2lzc3Vlcy83NlxuXHRcdHZhciB1c2luZ0FzeW5jUmVhZGVyID0gdHlwZW9mIEZpbGVSZWFkZXIgIT09ICd1bmRlZmluZWQnO1x0Ly8gU2FmYXJpIGRvZXNuJ3QgY29uc2lkZXIgaXQgYSBmdW5jdGlvbiAtIHNlZSBpc3N1ZSAjMTA1XG5cblx0XHR0aGlzLnN0cmVhbSA9IGZ1bmN0aW9uKGZpbGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXQgPSBmaWxlO1xuXHRcdFx0c2xpY2UgPSBmaWxlLnNsaWNlIHx8IGZpbGUud2Via2l0U2xpY2UgfHwgZmlsZS5tb3pTbGljZTtcblxuXHRcdFx0aWYgKHVzaW5nQXN5bmNSZWFkZXIpXG5cdFx0XHR7XG5cdFx0XHRcdHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHRcdC8vIFByZWZlcnJlZCBtZXRob2Qgb2YgcmVhZGluZyBmaWxlcywgZXZlbiBpbiB3b3JrZXJzXG5cdFx0XHRcdHJlYWRlci5vbmxvYWQgPSBiaW5kRnVuY3Rpb24odGhpcy5fY2h1bmtMb2FkZWQsIHRoaXMpO1xuXHRcdFx0XHRyZWFkZXIub25lcnJvciA9IGJpbmRGdW5jdGlvbih0aGlzLl9jaHVua0Vycm9yLCB0aGlzKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0cmVhZGVyID0gbmV3IEZpbGVSZWFkZXJTeW5jKCk7XHQvLyBIYWNrIGZvciBydW5uaW5nIGluIGEgd2ViIHdvcmtlciBpbiBGaXJlZm94XG5cblx0XHRcdHRoaXMuX25leHRDaHVuaygpO1x0Ly8gU3RhcnRzIHN0cmVhbWluZ1xuXHRcdH07XG5cblx0XHR0aGlzLl9uZXh0Q2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0aWYgKCF0aGlzLl9maW5pc2hlZCAmJiAoIXRoaXMuX2NvbmZpZy5wcmV2aWV3IHx8IHRoaXMuX3Jvd0NvdW50IDwgdGhpcy5fY29uZmlnLnByZXZpZXcpKVxuXHRcdFx0XHR0aGlzLl9yZWFkQ2h1bmsoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9yZWFkQ2h1bmsgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dmFyIGlucHV0ID0gdGhpcy5faW5wdXQ7XG5cdFx0XHRpZiAodGhpcy5fY29uZmlnLmNodW5rU2l6ZSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIGVuZCA9IE1hdGgubWluKHRoaXMuX3N0YXJ0ICsgdGhpcy5fY29uZmlnLmNodW5rU2l6ZSwgdGhpcy5faW5wdXQuc2l6ZSk7XG5cdFx0XHRcdGlucHV0ID0gc2xpY2UuY2FsbChpbnB1dCwgdGhpcy5fc3RhcnQsIGVuZCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdHh0ID0gcmVhZGVyLnJlYWRBc1RleHQoaW5wdXQsIHRoaXMuX2NvbmZpZy5lbmNvZGluZyk7XG5cdFx0XHRpZiAoIXVzaW5nQXN5bmNSZWFkZXIpXG5cdFx0XHRcdHRoaXMuX2NodW5rTG9hZGVkKHsgdGFyZ2V0OiB7IHJlc3VsdDogdHh0IH0gfSk7XHQvLyBtaW1pYyB0aGUgYXN5bmMgc2lnbmF0dXJlXG5cdFx0fVxuXG5cdFx0dGhpcy5fY2h1bmtMb2FkZWQgPSBmdW5jdGlvbihldmVudClcblx0XHR7XG5cdFx0XHQvLyBWZXJ5IGltcG9ydGFudCB0byBpbmNyZW1lbnQgc3RhcnQgZWFjaCB0aW1lIGJlZm9yZSBoYW5kbGluZyByZXN1bHRzXG5cdFx0XHR0aGlzLl9zdGFydCArPSB0aGlzLl9jb25maWcuY2h1bmtTaXplO1xuXHRcdFx0dGhpcy5fZmluaXNoZWQgPSAhdGhpcy5fY29uZmlnLmNodW5rU2l6ZSB8fCB0aGlzLl9zdGFydCA+PSB0aGlzLl9pbnB1dC5zaXplO1xuXHRcdFx0dGhpcy5wYXJzZUNodW5rKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NodW5rRXJyb3IgPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dGhpcy5fc2VuZEVycm9yKHJlYWRlci5lcnJvcik7XG5cdFx0fVxuXG5cdH1cblx0RmlsZVN0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2h1bmtTdHJlYW1lci5wcm90b3R5cGUpO1xuXHRGaWxlU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmlsZVN0cmVhbWVyO1xuXG5cblx0ZnVuY3Rpb24gU3RyaW5nU3RyZWFtZXIoY29uZmlnKVxuXHR7XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdENodW5rU3RyZWFtZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dmFyIHN0cmluZztcblx0XHR2YXIgcmVtYWluaW5nO1xuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24ocylcblx0XHR7XG5cdFx0XHRzdHJpbmcgPSBzO1xuXHRcdFx0cmVtYWluaW5nID0gcztcblx0XHRcdHJldHVybiB0aGlzLl9uZXh0Q2h1bmsoKTtcblx0XHR9XG5cdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl9maW5pc2hlZCkgcmV0dXJuO1xuXHRcdFx0dmFyIHNpemUgPSB0aGlzLl9jb25maWcuY2h1bmtTaXplO1xuXHRcdFx0dmFyIGNodW5rID0gc2l6ZSA/IHJlbWFpbmluZy5zdWJzdHIoMCwgc2l6ZSkgOiByZW1haW5pbmc7XG5cdFx0XHRyZW1haW5pbmcgPSBzaXplID8gcmVtYWluaW5nLnN1YnN0cihzaXplKSA6ICcnO1xuXHRcdFx0dGhpcy5fZmluaXNoZWQgPSAhcmVtYWluaW5nO1xuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VDaHVuayhjaHVuayk7XG5cdFx0fVxuXHR9XG5cdFN0cmluZ1N0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU3RyaW5nU3RyZWFtZXIucHJvdG90eXBlKTtcblx0U3RyaW5nU3RyZWFtZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3RyaW5nU3RyZWFtZXI7XG5cblxuXHRmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbVN0cmVhbWVyKGNvbmZpZylcblx0e1xuXHRcdGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblxuXHRcdENodW5rU3RyZWFtZXIuY2FsbCh0aGlzLCBjb25maWcpO1xuXG5cdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0dmFyIHBhcnNlT25EYXRhID0gdHJ1ZTtcblxuXHRcdHRoaXMuc3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKVxuXHRcdHtcblx0XHRcdHRoaXMuX2lucHV0ID0gc3RyZWFtO1xuXG5cdFx0XHR0aGlzLl9pbnB1dC5vbignZGF0YScsIHRoaXMuX3N0cmVhbURhdGEpO1xuXHRcdFx0dGhpcy5faW5wdXQub24oJ2VuZCcsIHRoaXMuX3N0cmVhbUVuZCk7XG5cdFx0XHR0aGlzLl9pbnB1dC5vbignZXJyb3InLCB0aGlzLl9zdHJlYW1FcnJvcik7XG5cdFx0fVxuXG5cdFx0dGhpcy5fbmV4dENodW5rID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGlmIChxdWV1ZS5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMucGFyc2VDaHVuayhxdWV1ZS5zaGlmdCgpKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0cGFyc2VPbkRhdGEgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX3N0cmVhbURhdGEgPSBiaW5kRnVuY3Rpb24oZnVuY3Rpb24oY2h1bmspXG5cdFx0e1xuXHRcdFx0dHJ5XG5cdFx0XHR7XG5cdFx0XHRcdHF1ZXVlLnB1c2godHlwZW9mIGNodW5rID09PSAnc3RyaW5nJyA/IGNodW5rIDogY2h1bmsudG9TdHJpbmcodGhpcy5fY29uZmlnLmVuY29kaW5nKSk7XG5cblx0XHRcdFx0aWYgKHBhcnNlT25EYXRhKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGFyc2VPbkRhdGEgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLnBhcnNlQ2h1bmsocXVldWUuc2hpZnQoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNhdGNoIChlcnJvcilcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5fc3RyZWFtRXJyb3IoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5fc3RyZWFtRXJyb3IgPSBiaW5kRnVuY3Rpb24oZnVuY3Rpb24oZXJyb3IpXG5cdFx0e1xuXHRcdFx0dGhpcy5fc3RyZWFtQ2xlYW5VcCgpO1xuXHRcdFx0dGhpcy5fc2VuZEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0dGhpcy5fc3RyZWFtRW5kID0gYmluZEZ1bmN0aW9uKGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHR0aGlzLl9zdHJlYW1DbGVhblVwKCk7XG5cdFx0XHR0aGlzLl9maW5pc2hlZCA9IHRydWU7XG5cdFx0XHR0aGlzLl9zdHJlYW1EYXRhKCcnKTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdHRoaXMuX3N0cmVhbUNsZWFuVXAgPSBiaW5kRnVuY3Rpb24oZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgdGhpcy5fc3RyZWFtRGF0YSk7XG5cdFx0XHR0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcignZW5kJywgdGhpcy5fc3RyZWFtRW5kKTtcblx0XHRcdHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIHRoaXMuX3N0cmVhbUVycm9yKTtcblx0XHR9LCB0aGlzKTtcblx0fVxuXHRSZWFkYWJsZVN0cmVhbVN0cmVhbWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2h1bmtTdHJlYW1lci5wcm90b3R5cGUpO1xuXHRSZWFkYWJsZVN0cmVhbVN0cmVhbWVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlYWRhYmxlU3RyZWFtU3RyZWFtZXI7XG5cblxuXHQvLyBVc2Ugb25lIFBhcnNlckhhbmRsZSBwZXIgZW50aXJlIENTViBmaWxlIG9yIHN0cmluZ1xuXHRmdW5jdGlvbiBQYXJzZXJIYW5kbGUoX2NvbmZpZylcblx0e1xuXHRcdC8vIE9uZSBnb2FsIGlzIHRvIG1pbmltaXplIHRoZSB1c2Ugb2YgcmVndWxhciBleHByZXNzaW9ucy4uLlxuXHRcdHZhciBGTE9BVCA9IC9eXFxzKi0/KFxcZCpcXC4/XFxkK3xcXGQrXFwuP1xcZCopKGVbLStdP1xcZCspP1xccyokL2k7XG5cblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIF9zdGVwQ291bnRlciA9IDA7XHQvLyBOdW1iZXIgb2YgdGltZXMgc3RlcCB3YXMgY2FsbGVkIChudW1iZXIgb2Ygcm93cyBwYXJzZWQpXG5cdFx0dmFyIF9pbnB1dDtcdFx0XHRcdC8vIFRoZSBpbnB1dCBiZWluZyBwYXJzZWRcblx0XHR2YXIgX3BhcnNlcjtcdFx0XHQvLyBUaGUgY29yZSBwYXJzZXIgYmVpbmcgdXNlZFxuXHRcdHZhciBfcGF1c2VkID0gZmFsc2U7XHQvLyBXaGV0aGVyIHdlIGFyZSBwYXVzZWQgb3Igbm90XG5cdFx0dmFyIF9hYm9ydGVkID0gZmFsc2U7XHQvLyBXaGV0aGVyIHRoZSBwYXJzZXIgaGFzIGFib3J0ZWQgb3Igbm90XG5cdFx0dmFyIF9kZWxpbWl0ZXJFcnJvcjtcdC8vIFRlbXBvcmFyeSBzdGF0ZSBiZXR3ZWVuIGRlbGltaXRlciBkZXRlY3Rpb24gYW5kIHByb2Nlc3NpbmcgcmVzdWx0c1xuXHRcdHZhciBfZmllbGRzID0gW107XHRcdC8vIEZpZWxkcyBhcmUgZnJvbSB0aGUgaGVhZGVyIHJvdyBvZiB0aGUgaW5wdXQsIGlmIHRoZXJlIGlzIG9uZVxuXHRcdHZhciBfcmVzdWx0cyA9IHtcdFx0Ly8gVGhlIGxhc3QgcmVzdWx0cyByZXR1cm5lZCBmcm9tIHRoZSBwYXJzZXJcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0ZXJyb3JzOiBbXSxcblx0XHRcdG1ldGE6IHt9XG5cdFx0fTtcblxuXHRcdGlmIChpc0Z1bmN0aW9uKF9jb25maWcuc3RlcCkpXG5cdFx0e1xuXHRcdFx0dmFyIHVzZXJTdGVwID0gX2NvbmZpZy5zdGVwO1xuXHRcdFx0X2NvbmZpZy5zdGVwID0gZnVuY3Rpb24ocmVzdWx0cylcblx0XHRcdHtcblx0XHRcdFx0X3Jlc3VsdHMgPSByZXN1bHRzO1xuXG5cdFx0XHRcdGlmIChuZWVkc0hlYWRlclJvdygpKVxuXHRcdFx0XHRcdHByb2Nlc3NSZXN1bHRzKCk7XG5cdFx0XHRcdGVsc2VcdC8vIG9ubHkgY2FsbCB1c2VyJ3Mgc3RlcCBmdW5jdGlvbiBhZnRlciBoZWFkZXIgcm93XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm9jZXNzUmVzdWx0cygpO1xuXG5cdFx0XHRcdFx0Ly8gSXQncyBwb3NzYmlsZSB0aGF0IHRoaXMgbGluZSB3YXMgZW1wdHkgYW5kIHRoZXJlJ3Mgbm8gcm93IGhlcmUgYWZ0ZXIgYWxsXG5cdFx0XHRcdFx0aWYgKF9yZXN1bHRzLmRhdGEubGVuZ3RoID09PSAwKVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0X3N0ZXBDb3VudGVyICs9IHJlc3VsdHMuZGF0YS5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKF9jb25maWcucHJldmlldyAmJiBfc3RlcENvdW50ZXIgPiBfY29uZmlnLnByZXZpZXcpXG5cdFx0XHRcdFx0XHRfcGFyc2VyLmFib3J0KCk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0dXNlclN0ZXAoX3Jlc3VsdHMsIHNlbGYpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFBhcnNlcyBpbnB1dC4gTW9zdCB1c2VycyB3b24ndCBuZWVkLCBhbmQgc2hvdWxkbid0IG1lc3Mgd2l0aCwgdGhlIGJhc2VJbmRleFxuXHRcdCAqIGFuZCBpZ25vcmVMYXN0Um93IHBhcmFtZXRlcnMuIFRoZXkgYXJlIHVzZWQgYnkgc3RyZWFtZXJzICh3cmFwcGVyIGZ1bmN0aW9ucylcblx0XHQgKiB3aGVuIGFuIGlucHV0IGNvbWVzIGluIG11bHRpcGxlIGNodW5rcywgbGlrZSBmcm9tIGEgZmlsZS5cblx0XHQgKi9cblx0XHR0aGlzLnBhcnNlID0gZnVuY3Rpb24oaW5wdXQsIGJhc2VJbmRleCwgaWdub3JlTGFzdFJvdylcblx0XHR7XG5cdFx0XHRpZiAoIV9jb25maWcubmV3bGluZSlcblx0XHRcdFx0X2NvbmZpZy5uZXdsaW5lID0gZ3Vlc3NMaW5lRW5kaW5ncyhpbnB1dCk7XG5cblx0XHRcdF9kZWxpbWl0ZXJFcnJvciA9IGZhbHNlO1xuXHRcdFx0aWYgKCFfY29uZmlnLmRlbGltaXRlcilcblx0XHRcdHtcblx0XHRcdFx0dmFyIGRlbGltR3Vlc3MgPSBndWVzc0RlbGltaXRlcihpbnB1dCwgX2NvbmZpZy5uZXdsaW5lLCBfY29uZmlnLnNraXBFbXB0eUxpbmVzKTtcblx0XHRcdFx0aWYgKGRlbGltR3Vlc3Muc3VjY2Vzc2Z1bClcblx0XHRcdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IGRlbGltR3Vlc3MuYmVzdERlbGltaXRlcjtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X2RlbGltaXRlckVycm9yID0gdHJ1ZTtcdC8vIGFkZCBlcnJvciBhZnRlciBwYXJzaW5nIChvdGhlcndpc2UgaXQgd291bGQgYmUgb3ZlcndyaXR0ZW4pXG5cdFx0XHRcdFx0X2NvbmZpZy5kZWxpbWl0ZXIgPSBQYXBhLkRlZmF1bHREZWxpbWl0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3Jlc3VsdHMubWV0YS5kZWxpbWl0ZXIgPSBfY29uZmlnLmRlbGltaXRlcjtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoaXNGdW5jdGlvbihfY29uZmlnLmRlbGltaXRlcikpXG5cdFx0XHR7XG5cdFx0XHRcdF9jb25maWcuZGVsaW1pdGVyID0gX2NvbmZpZy5kZWxpbWl0ZXIoaW5wdXQpO1xuXHRcdFx0XHRfcmVzdWx0cy5tZXRhLmRlbGltaXRlciA9IF9jb25maWcuZGVsaW1pdGVyO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGFyc2VyQ29uZmlnID0gY29weShfY29uZmlnKTtcblx0XHRcdGlmIChfY29uZmlnLnByZXZpZXcgJiYgX2NvbmZpZy5oZWFkZXIpXG5cdFx0XHRcdHBhcnNlckNvbmZpZy5wcmV2aWV3Kys7XHQvLyB0byBjb21wZW5zYXRlIGZvciBoZWFkZXIgcm93XG5cblx0XHRcdF9pbnB1dCA9IGlucHV0O1xuXHRcdFx0X3BhcnNlciA9IG5ldyBQYXJzZXIocGFyc2VyQ29uZmlnKTtcblx0XHRcdF9yZXN1bHRzID0gX3BhcnNlci5wYXJzZShfaW5wdXQsIGJhc2VJbmRleCwgaWdub3JlTGFzdFJvdyk7XG5cdFx0XHRwcm9jZXNzUmVzdWx0cygpO1xuXHRcdFx0cmV0dXJuIF9wYXVzZWQgPyB7IG1ldGE6IHsgcGF1c2VkOiB0cnVlIH0gfSA6IChfcmVzdWx0cyB8fCB7IG1ldGE6IHsgcGF1c2VkOiBmYWxzZSB9IH0pO1xuXHRcdH07XG5cblx0XHR0aGlzLnBhdXNlZCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRyZXR1cm4gX3BhdXNlZDtcblx0XHR9O1xuXG5cdFx0dGhpcy5wYXVzZSA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRfcGF1c2VkID0gdHJ1ZTtcblx0XHRcdF9wYXJzZXIuYWJvcnQoKTtcblx0XHRcdF9pbnB1dCA9IF9pbnB1dC5zdWJzdHIoX3BhcnNlci5nZXRDaGFySW5kZXgoKSk7XG5cdFx0fTtcblxuXHRcdHRoaXMucmVzdW1lID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdF9wYXVzZWQgPSBmYWxzZTtcblx0XHRcdHNlbGYuc3RyZWFtZXIucGFyc2VDaHVuayhfaW5wdXQpO1xuXHRcdH07XG5cblx0XHR0aGlzLmFib3J0ZWQgPSBmdW5jdGlvbiAoKVxuXHRcdHtcblx0XHRcdHJldHVybiBfYWJvcnRlZDtcblx0XHR9O1xuXG5cdFx0dGhpcy5hYm9ydCA9IGZ1bmN0aW9uKClcblx0XHR7XG5cdFx0XHRfYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRfcGFyc2VyLmFib3J0KCk7XG5cdFx0XHRfcmVzdWx0cy5tZXRhLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0aWYgKGlzRnVuY3Rpb24oX2NvbmZpZy5jb21wbGV0ZSkpXG5cdFx0XHRcdF9jb25maWcuY29tcGxldGUoX3Jlc3VsdHMpO1xuXHRcdFx0X2lucHV0ID0gJyc7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIHByb2Nlc3NSZXN1bHRzKClcblx0XHR7XG5cdFx0XHRpZiAoX3Jlc3VsdHMgJiYgX2RlbGltaXRlckVycm9yKVxuXHRcdFx0e1xuXHRcdFx0XHRhZGRFcnJvcignRGVsaW1pdGVyJywgJ1VuZGV0ZWN0YWJsZURlbGltaXRlcicsICdVbmFibGUgdG8gYXV0by1kZXRlY3QgZGVsaW1pdGluZyBjaGFyYWN0ZXI7IGRlZmF1bHRlZCB0byBcXCcnK1BhcGEuRGVmYXVsdERlbGltaXRlcisnXFwnJyk7XG5cdFx0XHRcdF9kZWxpbWl0ZXJFcnJvciA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2NvbmZpZy5za2lwRW1wdHlMaW5lcylcblx0XHRcdHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGlmIChfcmVzdWx0cy5kYXRhW2ldLmxlbmd0aCA9PT0gMSAmJiBfcmVzdWx0cy5kYXRhW2ldWzBdID09PSAnJylcblx0XHRcdFx0XHRcdF9yZXN1bHRzLmRhdGEuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZWVkc0hlYWRlclJvdygpKVxuXHRcdFx0XHRmaWxsSGVhZGVyRmllbGRzKCk7XG5cblx0XHRcdHJldHVybiBhcHBseUhlYWRlckFuZER5bmFtaWNUeXBpbmcoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBuZWVkc0hlYWRlclJvdygpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9jb25maWcuaGVhZGVyICYmIF9maWVsZHMubGVuZ3RoID09PSAwO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZpbGxIZWFkZXJGaWVsZHMoKVxuXHRcdHtcblx0XHRcdGlmICghX3Jlc3VsdHMpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBuZWVkc0hlYWRlclJvdygpICYmIGkgPCBfcmVzdWx0cy5kYXRhLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IF9yZXN1bHRzLmRhdGFbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0X2ZpZWxkcy5wdXNoKF9yZXN1bHRzLmRhdGFbaV1bal0pO1xuXHRcdFx0X3Jlc3VsdHMuZGF0YS5zcGxpY2UoMCwgMSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gc2hvdWxkQXBwbHlEeW5hbWljVHlwaW5nKGZpZWxkKSB7XG5cdFx0XHQvLyBDYWNoZSBmdW5jdGlvbiB2YWx1ZXMgdG8gYXZvaWQgY2FsbGluZyBpdCBmb3IgZWFjaCByb3dcblx0XHRcdGlmIChfY29uZmlnLmR5bmFtaWNUeXBpbmdGdW5jdGlvbiAmJiBfY29uZmlnLmR5bmFtaWNUeXBpbmdbZmllbGRdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0X2NvbmZpZy5keW5hbWljVHlwaW5nW2ZpZWxkXSA9IF9jb25maWcuZHluYW1pY1R5cGluZ0Z1bmN0aW9uKGZpZWxkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoX2NvbmZpZy5keW5hbWljVHlwaW5nW2ZpZWxkXSB8fCBfY29uZmlnLmR5bmFtaWNUeXBpbmcpID09PSB0cnVlXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcGFyc2VEeW5hbWljKGZpZWxkLCB2YWx1ZSlcblx0XHR7XG5cdFx0XHRpZiAoc2hvdWxkQXBwbHlEeW5hbWljVHlwaW5nKGZpZWxkKSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSAndHJ1ZScgfHwgdmFsdWUgPT09ICdUUlVFJylcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0ZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScgfHwgdmFsdWUgPT09ICdGQUxTRScpXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cmV0dXJuIHRyeVBhcnNlRmxvYXQodmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFwcGx5SGVhZGVyQW5kRHluYW1pY1R5cGluZygpXG5cdFx0e1xuXHRcdFx0aWYgKCFfcmVzdWx0cyB8fCAoIV9jb25maWcuaGVhZGVyICYmICFfY29uZmlnLmR5bmFtaWNUeXBpbmcpKVxuXHRcdFx0XHRyZXR1cm4gX3Jlc3VsdHM7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX3Jlc3VsdHMuZGF0YS5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJvdyA9IF9jb25maWcuaGVhZGVyID8ge30gOiBbXTtcblxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IF9yZXN1bHRzLmRhdGFbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgZmllbGQgPSBqO1xuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IF9yZXN1bHRzLmRhdGFbaV1bal07XG5cblx0XHRcdFx0XHRpZiAoX2NvbmZpZy5oZWFkZXIpXG5cdFx0XHRcdFx0XHRmaWVsZCA9IGogPj0gX2ZpZWxkcy5sZW5ndGggPyAnX19wYXJzZWRfZXh0cmEnIDogX2ZpZWxkc1tqXTtcblxuXHRcdFx0XHRcdHZhbHVlID0gcGFyc2VEeW5hbWljKGZpZWxkLCB2YWx1ZSk7XG5cblx0XHRcdFx0XHRpZiAoZmllbGQgPT09ICdfX3BhcnNlZF9leHRyYScpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cm93W2ZpZWxkXSA9IHJvd1tmaWVsZF0gfHwgW107XG5cdFx0XHRcdFx0XHRyb3dbZmllbGRdLnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRyb3dbZmllbGRdID0gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfcmVzdWx0cy5kYXRhW2ldID0gcm93O1xuXG5cdFx0XHRcdGlmIChfY29uZmlnLmhlYWRlcilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChqID4gX2ZpZWxkcy5sZW5ndGgpXG5cdFx0XHRcdFx0XHRhZGRFcnJvcignRmllbGRNaXNtYXRjaCcsICdUb29NYW55RmllbGRzJywgJ1RvbyBtYW55IGZpZWxkczogZXhwZWN0ZWQgJyArIF9maWVsZHMubGVuZ3RoICsgJyBmaWVsZHMgYnV0IHBhcnNlZCAnICsgaiwgaSk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaiA8IF9maWVsZHMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0YWRkRXJyb3IoJ0ZpZWxkTWlzbWF0Y2gnLCAnVG9vRmV3RmllbGRzJywgJ1RvbyBmZXcgZmllbGRzOiBleHBlY3RlZCAnICsgX2ZpZWxkcy5sZW5ndGggKyAnIGZpZWxkcyBidXQgcGFyc2VkICcgKyBqLCBpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX2NvbmZpZy5oZWFkZXIgJiYgX3Jlc3VsdHMubWV0YSlcblx0XHRcdFx0X3Jlc3VsdHMubWV0YS5maWVsZHMgPSBfZmllbGRzO1xuXHRcdFx0cmV0dXJuIF9yZXN1bHRzO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGd1ZXNzRGVsaW1pdGVyKGlucHV0LCBuZXdsaW5lLCBza2lwRW1wdHlMaW5lcylcblx0XHR7XG5cdFx0XHR2YXIgZGVsaW1DaG9pY2VzID0gWycsJywgJ1xcdCcsICd8JywgJzsnLCBQYXBhLlJFQ09SRF9TRVAsIFBhcGEuVU5JVF9TRVBdO1xuXHRcdFx0dmFyIGJlc3REZWxpbSwgYmVzdERlbHRhLCBmaWVsZENvdW50UHJldlJvdztcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWxpbUNob2ljZXMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBkZWxpbSA9IGRlbGltQ2hvaWNlc1tpXTtcblx0XHRcdFx0dmFyIGRlbHRhID0gMCwgYXZnRmllbGRDb3VudCA9IDAsIGVtcHR5TGluZXNDb3VudCA9IDA7XG5cdFx0XHRcdGZpZWxkQ291bnRQcmV2Um93ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdHZhciBwcmV2aWV3ID0gbmV3IFBhcnNlcih7XG5cdFx0XHRcdFx0ZGVsaW1pdGVyOiBkZWxpbSxcblx0XHRcdFx0XHRuZXdsaW5lOiBuZXdsaW5lLFxuXHRcdFx0XHRcdHByZXZpZXc6IDEwXG5cdFx0XHRcdH0pLnBhcnNlKGlucHV0KTtcblxuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHByZXZpZXcuZGF0YS5sZW5ndGg7IGorKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChza2lwRW1wdHlMaW5lcyAmJiBwcmV2aWV3LmRhdGFbal0ubGVuZ3RoID09PSAxICYmIHByZXZpZXcuZGF0YVtqXVswXS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdGVtcHR5TGluZXNDb3VudCsrXG5cdFx0XHRcdFx0XHRjb250aW51ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2YXIgZmllbGRDb3VudCA9IHByZXZpZXcuZGF0YVtqXS5sZW5ndGg7XG5cdFx0XHRcdFx0YXZnRmllbGRDb3VudCArPSBmaWVsZENvdW50O1xuXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBmaWVsZENvdW50UHJldlJvdyA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZmllbGRDb3VudFByZXZSb3cgPSBmaWVsZENvdW50O1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKGZpZWxkQ291bnQgPiAxKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRlbHRhICs9IE1hdGguYWJzKGZpZWxkQ291bnQgLSBmaWVsZENvdW50UHJldlJvdyk7XG5cdFx0XHRcdFx0XHRmaWVsZENvdW50UHJldlJvdyA9IGZpZWxkQ291bnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZpZXcuZGF0YS5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdGF2Z0ZpZWxkQ291bnQgLz0gKHByZXZpZXcuZGF0YS5sZW5ndGggLSBlbXB0eUxpbmVzQ291bnQpO1xuXG5cdFx0XHRcdGlmICgodHlwZW9mIGJlc3REZWx0YSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGVsdGEgPCBiZXN0RGVsdGEpXG5cdFx0XHRcdFx0JiYgYXZnRmllbGRDb3VudCA+IDEuOTkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRiZXN0RGVsdGEgPSBkZWx0YTtcblx0XHRcdFx0XHRiZXN0RGVsaW0gPSBkZWxpbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRfY29uZmlnLmRlbGltaXRlciA9IGJlc3REZWxpbTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3VjY2Vzc2Z1bDogISFiZXN0RGVsaW0sXG5cdFx0XHRcdGJlc3REZWxpbWl0ZXI6IGJlc3REZWxpbVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGd1ZXNzTGluZUVuZGluZ3MoaW5wdXQpXG5cdFx0e1xuXHRcdFx0aW5wdXQgPSBpbnB1dC5zdWJzdHIoMCwgMTAyNCoxMDI0KTtcdC8vIG1heCBsZW5ndGggMSBNQlxuXG5cdFx0XHR2YXIgciA9IGlucHV0LnNwbGl0KCdcXHInKTtcblxuXHRcdFx0dmFyIG4gPSBpbnB1dC5zcGxpdCgnXFxuJyk7XG5cblx0XHRcdHZhciBuQXBwZWFyc0ZpcnN0ID0gKG4ubGVuZ3RoID4gMSAmJiBuWzBdLmxlbmd0aCA8IHJbMF0ubGVuZ3RoKTtcblxuXHRcdFx0aWYgKHIubGVuZ3RoID09PSAxIHx8IG5BcHBlYXJzRmlyc3QpXG5cdFx0XHRcdHJldHVybiAnXFxuJztcblxuXHRcdFx0dmFyIG51bVdpdGhOID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0aWYgKHJbaV1bMF0gPT09ICdcXG4nKVxuXHRcdFx0XHRcdG51bVdpdGhOKys7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBudW1XaXRoTiA+PSByLmxlbmd0aCAvIDIgPyAnXFxyXFxuJyA6ICdcXHInO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyeVBhcnNlRmxvYXQodmFsKVxuXHRcdHtcblx0XHRcdHZhciBpc051bWJlciA9IEZMT0FULnRlc3QodmFsKTtcblx0XHRcdHJldHVybiBpc051bWJlciA/IHBhcnNlRmxvYXQodmFsKSA6IHZhbDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhZGRFcnJvcih0eXBlLCBjb2RlLCBtc2csIHJvdylcblx0XHR7XG5cdFx0XHRfcmVzdWx0cy5lcnJvcnMucHVzaCh7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdGNvZGU6IGNvZGUsXG5cdFx0XHRcdG1lc3NhZ2U6IG1zZyxcblx0XHRcdFx0cm93OiByb3dcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cblxuXG5cblx0LyoqIFRoZSBjb3JlIHBhcnNlciBpbXBsZW1lbnRzIHNwZWVkeSBhbmQgY29ycmVjdCBDU1YgcGFyc2luZyAqL1xuXHRmdW5jdGlvbiBQYXJzZXIoY29uZmlnKVxuXHR7XG5cdFx0Ly8gVW5wYWNrIHRoZSBjb25maWcgb2JqZWN0XG5cdFx0Y29uZmlnID0gY29uZmlnIHx8IHt9O1xuXHRcdHZhciBkZWxpbSA9IGNvbmZpZy5kZWxpbWl0ZXI7XG5cdFx0dmFyIG5ld2xpbmUgPSBjb25maWcubmV3bGluZTtcblx0XHR2YXIgY29tbWVudHMgPSBjb25maWcuY29tbWVudHM7XG5cdFx0dmFyIHN0ZXAgPSBjb25maWcuc3RlcDtcblx0XHR2YXIgcHJldmlldyA9IGNvbmZpZy5wcmV2aWV3O1xuXHRcdHZhciBmYXN0TW9kZSA9IGNvbmZpZy5mYXN0TW9kZTtcblx0XHR2YXIgcXVvdGVDaGFyID0gY29uZmlnLnF1b3RlQ2hhciB8fCAnXCInO1xuXG5cdFx0Ly8gRGVsaW1pdGVyIG11c3QgYmUgdmFsaWRcblx0XHRpZiAodHlwZW9mIGRlbGltICE9PSAnc3RyaW5nJ1xuXHRcdFx0fHwgUGFwYS5CQURfREVMSU1JVEVSUy5pbmRleE9mKGRlbGltKSA+IC0xKVxuXHRcdFx0ZGVsaW0gPSAnLCc7XG5cblx0XHQvLyBDb21tZW50IGNoYXJhY3RlciBtdXN0IGJlIHZhbGlkXG5cdFx0aWYgKGNvbW1lbnRzID09PSBkZWxpbSlcblx0XHRcdHRocm93ICdDb21tZW50IGNoYXJhY3RlciBzYW1lIGFzIGRlbGltaXRlcic7XG5cdFx0ZWxzZSBpZiAoY29tbWVudHMgPT09IHRydWUpXG5cdFx0XHRjb21tZW50cyA9ICcjJztcblx0XHRlbHNlIGlmICh0eXBlb2YgY29tbWVudHMgIT09ICdzdHJpbmcnXG5cdFx0XHR8fCBQYXBhLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoY29tbWVudHMpID4gLTEpXG5cdFx0XHRjb21tZW50cyA9IGZhbHNlO1xuXG5cdFx0Ly8gTmV3bGluZSBtdXN0IGJlIHZhbGlkOiBcXHIsIFxcbiwgb3IgXFxyXFxuXG5cdFx0aWYgKG5ld2xpbmUgIT0gJ1xcbicgJiYgbmV3bGluZSAhPSAnXFxyJyAmJiBuZXdsaW5lICE9ICdcXHJcXG4nKVxuXHRcdFx0bmV3bGluZSA9ICdcXG4nO1xuXG5cdFx0Ly8gV2UncmUgZ29ubmEgbmVlZCB0aGVzZSBhdCB0aGUgUGFyc2VyIHNjb3BlXG5cdFx0dmFyIGN1cnNvciA9IDA7XG5cdFx0dmFyIGFib3J0ZWQgPSBmYWxzZTtcblxuXHRcdHRoaXMucGFyc2UgPSBmdW5jdGlvbihpbnB1dCwgYmFzZUluZGV4LCBpZ25vcmVMYXN0Um93KVxuXHRcdHtcblx0XHRcdC8vIEZvciBzb21lIHJlYXNvbiwgaW4gQ2hyb21lLCB0aGlzIHNwZWVkcyB0aGluZ3MgdXAgKCE/KVxuXHRcdFx0aWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpXG5cdFx0XHRcdHRocm93ICdJbnB1dCBtdXN0IGJlIGEgc3RyaW5nJztcblxuXHRcdFx0Ly8gV2UgZG9uJ3QgbmVlZCB0byBjb21wdXRlIHNvbWUgb2YgdGhlc2UgZXZlcnkgdGltZSBwYXJzZSgpIGlzIGNhbGxlZCxcblx0XHRcdC8vIGJ1dCBoYXZpbmcgdGhlbSBpbiBhIG1vcmUgbG9jYWwgc2NvcGUgc2VlbXMgdG8gcGVyZm9ybSBiZXR0ZXJcblx0XHRcdHZhciBpbnB1dExlbiA9IGlucHV0Lmxlbmd0aCxcblx0XHRcdFx0ZGVsaW1MZW4gPSBkZWxpbS5sZW5ndGgsXG5cdFx0XHRcdG5ld2xpbmVMZW4gPSBuZXdsaW5lLmxlbmd0aCxcblx0XHRcdFx0Y29tbWVudHNMZW4gPSBjb21tZW50cy5sZW5ndGg7XG5cdFx0XHR2YXIgc3RlcElzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKHN0ZXApO1xuXG5cdFx0XHQvLyBFc3RhYmxpc2ggc3RhcnRpbmcgc3RhdGVcblx0XHRcdGN1cnNvciA9IDA7XG5cdFx0XHR2YXIgZGF0YSA9IFtdLCBlcnJvcnMgPSBbXSwgcm93ID0gW10sIGxhc3RDdXJzb3IgPSAwO1xuXG5cdFx0XHRpZiAoIWlucHV0KVxuXHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXG5cdFx0XHRpZiAoZmFzdE1vZGUgfHwgKGZhc3RNb2RlICE9PSBmYWxzZSAmJiBpbnB1dC5pbmRleE9mKHF1b3RlQ2hhcikgPT09IC0xKSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJvd3MgPSBpbnB1dC5zcGxpdChuZXdsaW5lKTtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dmFyIHJvdyA9IHJvd3NbaV07XG5cdFx0XHRcdFx0Y3Vyc29yICs9IHJvdy5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKGkgIT09IHJvd3MubGVuZ3RoIC0gMSlcblx0XHRcdFx0XHRcdGN1cnNvciArPSBuZXdsaW5lLmxlbmd0aDtcblx0XHRcdFx0XHRlbHNlIGlmIChpZ25vcmVMYXN0Um93KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHRpZiAoY29tbWVudHMgJiYgcm93LnN1YnN0cigwLCBjb21tZW50c0xlbikgPT09IGNvbW1lbnRzKVxuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0aWYgKHN0ZXBJc0Z1bmN0aW9uKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGRhdGEgPSBbXTtcblx0XHRcdFx0XHRcdHB1c2hSb3cocm93LnNwbGl0KGRlbGltKSk7XG5cdFx0XHRcdFx0XHRkb1N0ZXAoKTtcblx0XHRcdFx0XHRcdGlmIChhYm9ydGVkKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRwdXNoUm93KHJvdy5zcGxpdChkZWxpbSkpO1xuXHRcdFx0XHRcdGlmIChwcmV2aWV3ICYmIGkgPj0gcHJldmlldylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRkYXRhID0gZGF0YS5zbGljZSgwLCBwcmV2aWV3KTtcblx0XHRcdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbmV4dERlbGltID0gaW5wdXQuaW5kZXhPZihkZWxpbSwgY3Vyc29yKTtcblx0XHRcdHZhciBuZXh0TmV3bGluZSA9IGlucHV0LmluZGV4T2YobmV3bGluZSwgY3Vyc29yKTtcblx0XHRcdHZhciBxdW90ZUNoYXJSZWdleCA9IG5ldyBSZWdFeHAocXVvdGVDaGFyK3F1b3RlQ2hhciwgJ2cnKTtcblxuXHRcdFx0Ly8gUGFyc2VyIGxvb3Bcblx0XHRcdGZvciAoOzspXG5cdFx0XHR7XG5cdFx0XHRcdC8vIEZpZWxkIGhhcyBvcGVuaW5nIHF1b3RlXG5cdFx0XHRcdGlmIChpbnB1dFtjdXJzb3JdID09PSBxdW90ZUNoYXIpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBTdGFydCBvdXIgc2VhcmNoIGZvciB0aGUgY2xvc2luZyBxdW90ZSB3aGVyZSB0aGUgY3Vyc29yIGlzXG5cdFx0XHRcdFx0dmFyIHF1b3RlU2VhcmNoID0gY3Vyc29yO1xuXG5cdFx0XHRcdFx0Ly8gU2tpcCB0aGUgb3BlbmluZyBxdW90ZVxuXHRcdFx0XHRcdGN1cnNvcisrO1xuXG5cdFx0XHRcdFx0Zm9yICg7Oylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQvLyBGaW5kIGNsb3NpbmcgcXVvdGVcblx0XHRcdFx0XHRcdHZhciBxdW90ZVNlYXJjaCA9IGlucHV0LmluZGV4T2YocXVvdGVDaGFyLCBxdW90ZVNlYXJjaCsxKTtcblxuXHRcdFx0XHRcdFx0Ly9ObyBvdGhlciBxdW90ZXMgYXJlIGZvdW5kIC0gbm8gb3RoZXIgZGVsaW1pdGVyc1xuXHRcdFx0XHRcdFx0aWYgKHF1b3RlU2VhcmNoID09PSAtMSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aWYgKCFpZ25vcmVMYXN0Um93KSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gTm8gY2xvc2luZyBxdW90ZS4uLiB3aGF0IGEgcGl0eVxuXHRcdFx0XHRcdFx0XHRcdGVycm9ycy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdRdW90ZXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29kZTogJ01pc3NpbmdRdW90ZXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1F1b3RlZCBmaWVsZCB1bnRlcm1pbmF0ZWQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0cm93OiBkYXRhLmxlbmd0aCxcdC8vIHJvdyBoYXMgeWV0IHRvIGJlIGluc2VydGVkXG5cdFx0XHRcdFx0XHRcdFx0XHRpbmRleDogY3Vyc29yXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZpbmlzaCgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDbG9zaW5nIHF1b3RlIGF0IEVPRlxuXHRcdFx0XHRcdFx0aWYgKHF1b3RlU2VhcmNoID09PSBpbnB1dExlbi0xKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR2YXIgdmFsdWUgPSBpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBxdW90ZVNlYXJjaCkucmVwbGFjZShxdW90ZUNoYXJSZWdleCwgcXVvdGVDaGFyKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZpbmlzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoaXMgcXVvdGUgaXMgZXNjYXBlZCwgaXQncyBwYXJ0IG9mIHRoZSBkYXRhOyBza2lwIGl0XG5cdFx0XHRcdFx0XHRpZiAoaW5wdXRbcXVvdGVTZWFyY2grMV0gPT09IHF1b3RlQ2hhcilcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cXVvdGVTZWFyY2grKztcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgZm9sbG93ZWQgYnkgZGVsaW1pdGVyXG5cdFx0XHRcdFx0XHRpZiAoaW5wdXRbcXVvdGVTZWFyY2grMV0gPT09IGRlbGltKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBxdW90ZVNlYXJjaCkucmVwbGFjZShxdW90ZUNoYXJSZWdleCwgcXVvdGVDaGFyKSk7XG5cdFx0XHRcdFx0XHRcdGN1cnNvciA9IHF1b3RlU2VhcmNoICsgMSArIGRlbGltTGVuO1xuXHRcdFx0XHRcdFx0XHRuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0XHRcdFx0XHRuZXh0TmV3bGluZSA9IGlucHV0LmluZGV4T2YobmV3bGluZSwgY3Vyc29yKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENsb3NpbmcgcXVvdGUgZm9sbG93ZWQgYnkgbmV3bGluZVxuXHRcdFx0XHRcdFx0aWYgKGlucHV0LnN1YnN0cihxdW90ZVNlYXJjaCsxLCBuZXdsaW5lTGVuKSA9PT0gbmV3bGluZSlcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cm93LnB1c2goaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgcXVvdGVTZWFyY2gpLnJlcGxhY2UocXVvdGVDaGFyUmVnZXgsIHF1b3RlQ2hhcikpO1xuXHRcdFx0XHRcdFx0XHRzYXZlUm93KHF1b3RlU2VhcmNoICsgMSArIG5ld2xpbmVMZW4pO1xuXHRcdFx0XHRcdFx0XHRuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1x0Ly8gYmVjYXVzZSB3ZSBtYXkgaGF2ZSBza2lwcGVkIHRoZSBuZXh0RGVsaW0gaW4gdGhlIHF1b3RlZCBmaWVsZFxuXG5cdFx0XHRcdFx0XHRcdGlmIChzdGVwSXNGdW5jdGlvbilcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGRvU3RlcCgpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChhYm9ydGVkKVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChwcmV2aWV3ICYmIGRhdGEubGVuZ3RoID49IHByZXZpZXcpXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2tzIGZvciB2YWxpZCBjbG9zaW5nIHF1b3RlcyBhcmUgY29tcGxldGUgKGVzY2FwZWQgcXVvdGVzIG9yIHF1b3RlIGZvbGxvd2VkIGJ5IEVPRi9kZWxpbWl0ZXIvbmV3bGluZSkgLS0gYXNzdW1lIHRoZXNlIHF1b3RlcyBhcmUgcGFydCBvZiBhbiBpbnZhbGlkIHRleHQgc3RyaW5nXG5cdFx0XHRcdFx0XHRlcnJvcnMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdRdW90ZXMnLFxuXHRcdFx0XHRcdFx0XHRjb2RlOiAnSW52YWxpZFF1b3RlcycsXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUcmFpbGluZyBxdW90ZSBvbiBxdW90ZWQgZmllbGQgaXMgbWFsZm9ybWVkJyxcblx0XHRcdFx0XHRcdFx0cm93OiBkYXRhLmxlbmd0aCxcdC8vIHJvdyBoYXMgeWV0IHRvIGJlIGluc2VydGVkXG5cdFx0XHRcdFx0XHRcdGluZGV4OiBjdXJzb3Jcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRxdW90ZVNlYXJjaCsrO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENvbW1lbnQgZm91bmQgYXQgc3RhcnQgb2YgbmV3IGxpbmVcblx0XHRcdFx0aWYgKGNvbW1lbnRzICYmIHJvdy5sZW5ndGggPT09IDAgJiYgaW5wdXQuc3Vic3RyKGN1cnNvciwgY29tbWVudHNMZW4pID09PSBjb21tZW50cylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmIChuZXh0TmV3bGluZSA9PT0gLTEpXHQvLyBDb21tZW50IGVuZHMgYXQgRU9GXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRcdGN1cnNvciA9IG5leHROZXdsaW5lICsgbmV3bGluZUxlbjtcblx0XHRcdFx0XHRuZXh0TmV3bGluZSA9IGlucHV0LmluZGV4T2YobmV3bGluZSwgY3Vyc29yKTtcblx0XHRcdFx0XHRuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTmV4dCBkZWxpbWl0ZXIgY29tZXMgYmVmb3JlIG5leHQgbmV3bGluZSwgc28gd2UndmUgcmVhY2hlZCBlbmQgb2YgZmllbGRcblx0XHRcdFx0aWYgKG5leHREZWxpbSAhPT0gLTEgJiYgKG5leHREZWxpbSA8IG5leHROZXdsaW5lIHx8IG5leHROZXdsaW5lID09PSAtMSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyb3cucHVzaChpbnB1dC5zdWJzdHJpbmcoY3Vyc29yLCBuZXh0RGVsaW0pKTtcblx0XHRcdFx0XHRjdXJzb3IgPSBuZXh0RGVsaW0gKyBkZWxpbUxlbjtcblx0XHRcdFx0XHRuZXh0RGVsaW0gPSBpbnB1dC5pbmRleE9mKGRlbGltLCBjdXJzb3IpO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRW5kIG9mIHJvd1xuXHRcdFx0XHRpZiAobmV4dE5ld2xpbmUgIT09IC0xKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cm93LnB1c2goaW5wdXQuc3Vic3RyaW5nKGN1cnNvciwgbmV4dE5ld2xpbmUpKTtcblx0XHRcdFx0XHRzYXZlUm93KG5leHROZXdsaW5lICsgbmV3bGluZUxlbik7XG5cblx0XHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdFx0XHRpZiAoYWJvcnRlZClcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocHJldmlldyAmJiBkYXRhLmxlbmd0aCA+PSBwcmV2aWV3KVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJldHVybmFibGUodHJ1ZSk7XG5cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cblx0XHRcdHJldHVybiBmaW5pc2goKTtcblxuXG5cdFx0XHRmdW5jdGlvbiBwdXNoUm93KHJvdylcblx0XHRcdHtcblx0XHRcdFx0ZGF0YS5wdXNoKHJvdyk7XG5cdFx0XHRcdGxhc3RDdXJzb3IgPSBjdXJzb3I7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQXBwZW5kcyB0aGUgcmVtYWluaW5nIGlucHV0IGZyb20gY3Vyc29yIHRvIHRoZSBlbmQgaW50b1xuXHRcdFx0ICogcm93LCBzYXZlcyB0aGUgcm93LCBjYWxscyBzdGVwLCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0cy5cblx0XHRcdCAqL1xuXHRcdFx0ZnVuY3Rpb24gZmluaXNoKHZhbHVlKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoaWdub3JlTGFzdFJvdylcblx0XHRcdFx0XHRyZXR1cm4gcmV0dXJuYWJsZSgpO1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0XHR2YWx1ZSA9IGlucHV0LnN1YnN0cihjdXJzb3IpO1xuXHRcdFx0XHRyb3cucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdGN1cnNvciA9IGlucHV0TGVuO1x0Ly8gaW1wb3J0YW50IGluIGNhc2UgcGFyc2luZyBpcyBwYXVzZWRcblx0XHRcdFx0cHVzaFJvdyhyb3cpO1xuXHRcdFx0XHRpZiAoc3RlcElzRnVuY3Rpb24pXG5cdFx0XHRcdFx0ZG9TdGVwKCk7XG5cdFx0XHRcdHJldHVybiByZXR1cm5hYmxlKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQXBwZW5kcyB0aGUgY3VycmVudCByb3cgdG8gdGhlIHJlc3VsdHMuIEl0IHNldHMgdGhlIGN1cnNvclxuXHRcdFx0ICogdG8gbmV3Q3Vyc29yIGFuZCBmaW5kcyB0aGUgbmV4dE5ld2xpbmUuIFRoZSBjYWxsZXIgc2hvdWxkXG5cdFx0XHQgKiB0YWtlIGNhcmUgdG8gZXhlY3V0ZSB1c2VyJ3Mgc3RlcCBmdW5jdGlvbiBhbmQgY2hlY2sgZm9yXG5cdFx0XHQgKiBwcmV2aWV3IGFuZCBlbmQgcGFyc2luZyBpZiBuZWNlc3NhcnkuXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHNhdmVSb3cobmV3Q3Vyc29yKVxuXHRcdFx0e1xuXHRcdFx0XHRjdXJzb3IgPSBuZXdDdXJzb3I7XG5cdFx0XHRcdHB1c2hSb3cocm93KTtcblx0XHRcdFx0cm93ID0gW107XG5cdFx0XHRcdG5leHROZXdsaW5lID0gaW5wdXQuaW5kZXhPZihuZXdsaW5lLCBjdXJzb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgcmVzdWx0cywgZXJyb3JzLCBhbmQgbWV0YS4gKi9cblx0XHRcdGZ1bmN0aW9uIHJldHVybmFibGUoc3RvcHBlZClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRcdGVycm9yczogZXJyb3JzLFxuXHRcdFx0XHRcdG1ldGE6IHtcblx0XHRcdFx0XHRcdGRlbGltaXRlcjogZGVsaW0sXG5cdFx0XHRcdFx0XHRsaW5lYnJlYWs6IG5ld2xpbmUsXG5cdFx0XHRcdFx0XHRhYm9ydGVkOiBhYm9ydGVkLFxuXHRcdFx0XHRcdFx0dHJ1bmNhdGVkOiAhIXN0b3BwZWQsXG5cdFx0XHRcdFx0XHRjdXJzb3I6IGxhc3RDdXJzb3IgKyAoYmFzZUluZGV4IHx8IDApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvKiogRXhlY3V0ZXMgdGhlIHVzZXIncyBzdGVwIGZ1bmN0aW9uIGFuZCByZXNldHMgZGF0YSAmIGVycm9ycy4gKi9cblx0XHRcdGZ1bmN0aW9uIGRvU3RlcCgpXG5cdFx0XHR7XG5cdFx0XHRcdHN0ZXAocmV0dXJuYWJsZSgpKTtcblx0XHRcdFx0ZGF0YSA9IFtdLCBlcnJvcnMgPSBbXTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqIFNldHMgdGhlIGFib3J0IGZsYWcgKi9cblx0XHR0aGlzLmFib3J0ID0gZnVuY3Rpb24oKVxuXHRcdHtcblx0XHRcdGFib3J0ZWQgPSB0cnVlO1xuXHRcdH07XG5cblx0XHQvKiogR2V0cyB0aGUgY3Vyc29yIHBvc2l0aW9uICovXG5cdFx0dGhpcy5nZXRDaGFySW5kZXggPSBmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGN1cnNvcjtcblx0XHR9O1xuXHR9XG5cblxuXHQvLyBJZiB5b3UgbmVlZCB0byBsb2FkIFBhcGEgUGFyc2UgYXN5bmNocm9ub3VzbHkgYW5kIHlvdSBhbHNvIG5lZWQgd29ya2VyIHRocmVhZHMsIGhhcmQtY29kZVxuXHQvLyB0aGUgc2NyaXB0IHBhdGggaGVyZS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlL2lzc3Vlcy84NyNpc3N1ZWNvbW1lbnQtNTc4ODUzNThcblx0ZnVuY3Rpb24gZ2V0U2NyaXB0UGF0aCgpXG5cdHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcblx0XHRyZXR1cm4gc2NyaXB0cy5sZW5ndGggPyBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjIDogJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBuZXdXb3JrZXIoKVxuXHR7XG5cdFx0aWYgKCFQYXBhLldPUktFUlNfU1VQUE9SVEVEKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdGlmICghTE9BREVEX1NZTkMgJiYgUGFwYS5TQ1JJUFRfUEFUSCA9PT0gbnVsbClcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0J1NjcmlwdCBwYXRoIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGF1dG9tYXRpY2FsbHkgd2hlbiBQYXBhIFBhcnNlIGlzIGxvYWRlZCBhc3luY2hyb25vdXNseS4gJyArXG5cdFx0XHRcdCdZb3UgbmVlZCB0byBzZXQgUGFwYS5TQ1JJUFRfUEFUSCBtYW51YWxseS4nXG5cdFx0XHQpO1xuXHRcdHZhciB3b3JrZXJVcmwgPSBQYXBhLlNDUklQVF9QQVRIIHx8IEFVVE9fU0NSSVBUX1BBVEg7XG5cdFx0Ly8gQXBwZW5kICdwYXBhd29ya2VyJyB0byB0aGUgc2VhcmNoIHN0cmluZyB0byB0ZWxsIHBhcGFwYXJzZSB0aGF0IHRoaXMgaXMgb3VyIHdvcmtlci5cblx0XHR3b3JrZXJVcmwgKz0gKHdvcmtlclVybC5pbmRleE9mKCc/JykgIT09IC0xID8gJyYnIDogJz8nKSArICdwYXBhd29ya2VyJztcblx0XHR2YXIgdyA9IG5ldyBnbG9iYWwuV29ya2VyKHdvcmtlclVybCk7XG5cdFx0dy5vbm1lc3NhZ2UgPSBtYWluVGhyZWFkUmVjZWl2ZWRNZXNzYWdlO1xuXHRcdHcuaWQgPSB3b3JrZXJJZENvdW50ZXIrKztcblx0XHR3b3JrZXJzW3cuaWRdID0gdztcblx0XHRyZXR1cm4gdztcblx0fVxuXG5cdC8qKiBDYWxsYmFjayB3aGVuIG1haW4gdGhyZWFkIHJlY2VpdmVzIGEgbWVzc2FnZSAqL1xuXHRmdW5jdGlvbiBtYWluVGhyZWFkUmVjZWl2ZWRNZXNzYWdlKGUpXG5cdHtcblx0XHR2YXIgbXNnID0gZS5kYXRhO1xuXHRcdHZhciB3b3JrZXIgPSB3b3JrZXJzW21zZy53b3JrZXJJZF07XG5cdFx0dmFyIGFib3J0ZWQgPSBmYWxzZTtcblxuXHRcdGlmIChtc2cuZXJyb3IpXG5cdFx0XHR3b3JrZXIudXNlckVycm9yKG1zZy5lcnJvciwgbXNnLmZpbGUpO1xuXHRcdGVsc2UgaWYgKG1zZy5yZXN1bHRzICYmIG1zZy5yZXN1bHRzLmRhdGEpXG5cdFx0e1xuXHRcdFx0dmFyIGFib3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRjb21wbGV0ZVdvcmtlcihtc2cud29ya2VySWQsIHsgZGF0YTogW10sIGVycm9yczogW10sIG1ldGE6IHsgYWJvcnRlZDogdHJ1ZSB9IH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0dmFyIGhhbmRsZSA9IHtcblx0XHRcdFx0YWJvcnQ6IGFib3J0LFxuXHRcdFx0XHRwYXVzZTogbm90SW1wbGVtZW50ZWQsXG5cdFx0XHRcdHJlc3VtZTogbm90SW1wbGVtZW50ZWRcblx0XHRcdH07XG5cblx0XHRcdGlmIChpc0Z1bmN0aW9uKHdvcmtlci51c2VyU3RlcCkpXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLnJlc3VsdHMuZGF0YS5sZW5ndGg7IGkrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHdvcmtlci51c2VyU3RlcCh7XG5cdFx0XHRcdFx0XHRkYXRhOiBbbXNnLnJlc3VsdHMuZGF0YVtpXV0sXG5cdFx0XHRcdFx0XHRlcnJvcnM6IG1zZy5yZXN1bHRzLmVycm9ycyxcblx0XHRcdFx0XHRcdG1ldGE6IG1zZy5yZXN1bHRzLm1ldGFcblx0XHRcdFx0XHR9LCBoYW5kbGUpO1xuXHRcdFx0XHRcdGlmIChhYm9ydGVkKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG1zZy5yZXN1bHRzO1x0Ly8gZnJlZSBtZW1vcnkgQVNBUFxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoaXNGdW5jdGlvbih3b3JrZXIudXNlckNodW5rKSlcblx0XHRcdHtcblx0XHRcdFx0d29ya2VyLnVzZXJDaHVuayhtc2cucmVzdWx0cywgaGFuZGxlLCBtc2cuZmlsZSk7XG5cdFx0XHRcdGRlbGV0ZSBtc2cucmVzdWx0cztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobXNnLmZpbmlzaGVkICYmICFhYm9ydGVkKVxuXHRcdFx0Y29tcGxldGVXb3JrZXIobXNnLndvcmtlcklkLCBtc2cucmVzdWx0cyk7XG5cdH1cblxuXHRmdW5jdGlvbiBjb21wbGV0ZVdvcmtlcih3b3JrZXJJZCwgcmVzdWx0cykge1xuXHRcdHZhciB3b3JrZXIgPSB3b3JrZXJzW3dvcmtlcklkXTtcblx0XHRpZiAoaXNGdW5jdGlvbih3b3JrZXIudXNlckNvbXBsZXRlKSlcblx0XHRcdHdvcmtlci51c2VyQ29tcGxldGUocmVzdWx0cyk7XG5cdFx0d29ya2VyLnRlcm1pbmF0ZSgpO1xuXHRcdGRlbGV0ZSB3b3JrZXJzW3dvcmtlcklkXTtcblx0fVxuXG5cdGZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKCkge1xuXHRcdHRocm93ICdOb3QgaW1wbGVtZW50ZWQuJztcblx0fVxuXG5cdC8qKiBDYWxsYmFjayB3aGVuIHdvcmtlciB0aHJlYWQgcmVjZWl2ZXMgYSBtZXNzYWdlICovXG5cdGZ1bmN0aW9uIHdvcmtlclRocmVhZFJlY2VpdmVkTWVzc2FnZShlKVxuXHR7XG5cdFx0dmFyIG1zZyA9IGUuZGF0YTtcblxuXHRcdGlmICh0eXBlb2YgUGFwYS5XT1JLRVJfSUQgPT09ICd1bmRlZmluZWQnICYmIG1zZylcblx0XHRcdFBhcGEuV09SS0VSX0lEID0gbXNnLndvcmtlcklkO1xuXG5cdFx0aWYgKHR5cGVvZiBtc2cuaW5wdXQgPT09ICdzdHJpbmcnKVxuXHRcdHtcblx0XHRcdGdsb2JhbC5wb3N0TWVzc2FnZSh7XG5cdFx0XHRcdHdvcmtlcklkOiBQYXBhLldPUktFUl9JRCxcblx0XHRcdFx0cmVzdWx0czogUGFwYS5wYXJzZShtc2cuaW5wdXQsIG1zZy5jb25maWcpLFxuXHRcdFx0XHRmaW5pc2hlZDogdHJ1ZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChnbG9iYWwuRmlsZSAmJiBtc2cuaW5wdXQgaW5zdGFuY2VvZiBGaWxlKSB8fCBtc2cuaW5wdXQgaW5zdGFuY2VvZiBPYmplY3QpXHQvLyB0aGFuayB5b3UsIFNhZmFyaSAoc2VlIGlzc3VlICMxMDYpXG5cdFx0e1xuXHRcdFx0dmFyIHJlc3VsdHMgPSBQYXBhLnBhcnNlKG1zZy5pbnB1dCwgbXNnLmNvbmZpZyk7XG5cdFx0XHRpZiAocmVzdWx0cylcblx0XHRcdFx0Z2xvYmFsLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHR3b3JrZXJJZDogUGFwYS5XT1JLRVJfSUQsXG5cdFx0XHRcdFx0cmVzdWx0czogcmVzdWx0cyxcblx0XHRcdFx0XHRmaW5pc2hlZDogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKiogTWFrZXMgYSBkZWVwIGNvcHkgb2YgYW4gYXJyYXkgb3Igb2JqZWN0IChtb3N0bHkpICovXG5cdGZ1bmN0aW9uIGNvcHkob2JqKVxuXHR7XG5cdFx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR2YXIgY3B5ID0gb2JqIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9O1xuXHRcdGZvciAodmFyIGtleSBpbiBvYmopXG5cdFx0XHRjcHlba2V5XSA9IGNvcHkob2JqW2tleV0pO1xuXHRcdHJldHVybiBjcHk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRnVuY3Rpb24oZiwgc2VsZilcblx0e1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHsgZi5hcHBseShzZWxmLCBhcmd1bWVudHMpOyB9O1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKVxuXHR7XG5cdFx0cmV0dXJuIHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nO1xuXHR9XG5cblx0cmV0dXJuIFBhcGE7XG59KSk7XG4iXX0=
