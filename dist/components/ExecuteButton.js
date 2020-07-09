"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExecuteButton = void 0;

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
 * ExecuteButton
 *
 * What a nice round shiny button. Shows a drop-down when there are multiple
 * queries to run.
 */
var ExecuteButton = /*#__PURE__*/function (_React$Component) {
  _inherits(ExecuteButton, _React$Component);

  var _super = _createSuper(ExecuteButton);

  function ExecuteButton(props) {
    var _this;

    _classCallCheck(this, ExecuteButton);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_onClick", function () {
      if (_this.props.isRunning) {
        _this.props.onStop();
      } else {
        _this.props.onRun();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onOptionSelected", function (operation) {
      _this.setState({
        optionsOpen: false
      });

      _this.props.onRun(operation.name && operation.name.value);
    });

    _defineProperty(_assertThisInitialized(_this), "_onOptionsOpen", function (downEvent) {
      var initialPress = true;
      var downTarget = downEvent.target;

      _this.setState({
        highlight: null,
        optionsOpen: true
      });

      var _onMouseUp = function onMouseUp(upEvent) {
        if (initialPress && upEvent.target === downTarget) {
          initialPress = false;
        } else {
          document.removeEventListener('mouseup', _onMouseUp);
          _onMouseUp = null;
          var isOptionsMenuClicked = downTarget.parentNode.compareDocumentPosition(upEvent.target) & Node.DOCUMENT_POSITION_CONTAINED_BY;

          if (!isOptionsMenuClicked) {
            // menu calls setState if it was clicked
            _this.setState({
              optionsOpen: false
            });
          }
        }
      };

      document.addEventListener('mouseup', _onMouseUp);
    });

    _this.state = {
      optionsOpen: false,
      highlight: null
    };
    return _this;
  }

  _createClass(ExecuteButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var operations = this.props.operations;
      var optionsOpen = this.state.optionsOpen;
      var hasOptions = operations && operations.length > 1;
      var options = null;

      if (hasOptions && optionsOpen) {
        var highlight = this.state.highlight;
        options = /*#__PURE__*/_react.default.createElement("ul", {
          className: "execute-options"
        }, operations.map(function (operation) {
          return /*#__PURE__*/_react.default.createElement("li", {
            key: operation.name ? operation.name.value : '*',
            className: operation === highlight ? 'selected' : undefined,
            onMouseOver: function onMouseOver() {
              return _this2.setState({
                highlight: operation
              });
            },
            onMouseOut: function onMouseOut() {
              return _this2.setState({
                highlight: null
              });
            },
            onMouseUp: function onMouseUp() {
              return _this2._onOptionSelected(operation);
            }
          }, operation.name ? operation.name.value : '<Unnamed>');
        }));
      } // Allow click event if there is a running query or if there are not options
      // for which operation to run.


      var onClick;

      if (this.props.isRunning || !hasOptions) {
        onClick = this._onClick;
      } // Allow mouse down if there is no running query, there are options for
      // which operation to run, and the dropdown is currently closed.


      var onMouseDown;

      if (!this.props.isRunning && hasOptions && !optionsOpen) {
        onMouseDown = this._onOptionsOpen;
      }

      var pathJSX = this.props.isRunning ? /*#__PURE__*/_react.default.createElement("path", {
        d: "M 10 10 L 23 10 L 23 23 L 10 23 z"
      }) : /*#__PURE__*/_react.default.createElement("path", {
        d: "M 11 9 L 24 16 L 11 23 z"
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "execute-button-wrap"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "execute-button",
        onMouseDown: onMouseDown,
        onClick: onClick,
        title: "Execute Query (Ctrl-Enter)"
      }, /*#__PURE__*/_react.default.createElement("svg", {
        width: "34",
        height: "34"
      }, pathJSX)), options);
    }
  }]);

  return ExecuteButton;
}(_react.default.Component);

exports.ExecuteButton = ExecuteButton;

_defineProperty(ExecuteButton, "propTypes", {
  onRun: _propTypes.default.func,
  onStop: _propTypes.default.func,
  isRunning: _propTypes.default.bool,
  operations: _propTypes.default.array
});