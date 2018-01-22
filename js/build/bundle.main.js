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
				"div",
				{ className: "root" },
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

var Main = (function (_Component) {
	_inherits(Main, _Component);

	function Main() {
		_classCallCheck(this, Main);

		_get(Object.getPrototypeOf(Main.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Main, [{
		key: "handleFileUpload",
		value: function handleFileUpload(e) {
			console.log(e);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					"h1",
					null,
					"💵"
				),
				_react2["default"].createElement("input", { type: "file", onChange: this.handleFileUpload(e) })
			);
		}
	}]);

	return Main;
})(_react.Component);

exports["default"] = Main;
module.exports = exports["default"];

},{"react":"react"}],3:[function(require,module,exports){
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

},{"./routes":4,"react":"react","react-dom":"react-dom","react-router":"react-router"}],4:[function(require,module,exports){
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

exports["default"] = _react2["default"].createElement(
	_reactRouter.Route,
	{ path: "/", component: _componentsApp2["default"] },
	_react2["default"].createElement(_reactRouter.IndexRoute, { component: _componentsMain2["default"] })
);
module.exports = exports["default"];

},{"./components/App":1,"./components/Main":2,"react":"react","react-router":"react-router"}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9BcHAuanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvY29tcG9uZW50cy9NYWluLmpzIiwiL1VzZXJzL3Rob21hcy9Db2RlL2dyZWVuYmFja3MvanMvc3JjL21haW4uanMiLCIvVXNlcnMvdGhvbWFzL0NvZGUvZ3JlZW5iYWNrcy9qcy9zcmMvcm91dGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNBaUMsT0FBTzs7OztJQUVsQyxHQUFHO1dBQUgsR0FBRzs7QUFDRyxVQUROLEdBQUcsQ0FDSSxLQUFLLEVBQUU7d0JBRGQsR0FBRzs7QUFFUCw2QkFGSSxHQUFHLDZDQUVELEtBQUssRUFBRTtFQUNiOztjQUhJLEdBQUc7O1NBS0Ysa0JBQUc7QUFDUixVQUFPOztNQUFLLFNBQVMsRUFBQyxNQUFNO0lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0lBQU8sQ0FBQztHQUN6RDs7O1FBUEksR0FBRzs7O3FCQVVNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ1plLE9BQU87Ozs7SUFFbEMsSUFBSTtXQUFKLElBQUk7O1VBQUosSUFBSTt3QkFBSixJQUFJOzs2QkFBSixJQUFJOzs7Y0FBSixJQUFJOztTQUNPLDBCQUFDLENBQUMsRUFBRTtBQUNuQixVQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQ2Y7OztTQUVLLGtCQUFHO0FBQ1IsVUFDQzs7O0lBQ0M7Ozs7S0FBVztJQUNYLDRDQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQUFBQyxHQUFHO0lBQ3BELENBQ0w7R0FDRjs7O1FBWkksSUFBSTs7O3FCQWVLLElBQUk7Ozs7Ozs7O3FCQ2pCRCxPQUFPOzs7OzJCQUNrQixjQUFjOzt3QkFDcEMsV0FBVzs7OztzQkFDYixVQUFVOzs7OztBQUc3QixzQkFBUyxNQUFNLENBQ2Q7O0dBQVEsT0FBTywwQkFBYzs7Q0FBa0IsRUFDL0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQzs7QUFFRix5QkFBWSxNQUFNLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDOUIsS0FBSSxRQUFRLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUMvQixTQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDOUM7Q0FDRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O3FCQ2ZlLE9BQU87Ozs7MkJBQ1MsY0FBYzs7NkJBQ2hDLGtCQUFrQjs7Ozs4QkFDakIsbUJBQW1COzs7O3FCQUduQzs7R0FBTyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsNEJBQU07Q0FDOUIsNERBQVksU0FBUyw2QkFBTyxHQUFHO0NBQ3hCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2Pjtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRoYW5kbGVGaWxlVXBsb2FkKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGgxPvCfkrU8L2gxPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlVXBsb2FkKGUpfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgaGFzaEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcblxuLy8gcmVuZGVyIHRoZSBET01cblJlYWN0RE9NLnJlbmRlcihcblx0PFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG4pO1xuLy8gbGlzdGVuIHRvIGxvY2F0aW9uIGNoYW5nZXNcbmhhc2hIaXN0b3J5Lmxpc3Rlbihsb2NhdGlvbiA9PiB7XG5cdGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IFwiUFVTSFwiKSB7XG5cdFx0Y29uc29sZS5pbmZvKFwiTmV3IHJvdXRlOlwiLCBsb2NhdGlvbi5wYXRobmFtZSk7XG5cdH1cbn0pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL01haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgKFxuXHQ8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG5cdFx0PEluZGV4Um91dGUgY29tcG9uZW50PXtNYWlufSAvPlxuXHQ8L1JvdXRlPlxuKTtcbiJdfQ==
