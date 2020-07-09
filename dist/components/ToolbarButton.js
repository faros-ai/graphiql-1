"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ToolbarButton
 *
 * A button to use within the Toolbar.
 */
var ToolbarButton = /*#__PURE__*/function (_React$Component) {
  _inherits(ToolbarButton, _React$Component);

  var _super = _createSuper(ToolbarButton);

  function ToolbarButton(props) {
    var _this;

    _classCallCheck(this, ToolbarButton);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      e.preventDefault();

      try {
        _this.props.onClick();

        _this.setState({
          error: null
        });
      } catch (error) {
        _this.setState({
          error: error
        });
      }
    });

    _this.state = {
      error: null
    };
    return _this;
  }

  _createClass(ToolbarButton, [{
    key: "render",
    value: function render() {
      var error = this.state.error;
      return /*#__PURE__*/_react.default.createElement("a", {
        className: 'toolbar-button' + (error ? ' error' : ''),
        onMouseDown: preventDefault,
        onClick: this.handleClick,
        title: error ? error.message : this.props.title
      }, this.props.label);
    }
  }]);

  return ToolbarButton;
}(_react.default.Component);

exports.ToolbarButton = ToolbarButton;

_defineProperty(ToolbarButton, "propTypes", {
  onClick: _propTypes.default.func,
  title: _propTypes.default.string,
  label: _propTypes.default.string
});

function preventDefault(e) {
  e.preventDefault();
}