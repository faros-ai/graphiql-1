"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var HistoryQuery = /*#__PURE__*/function (_React$Component) {
  _inherits(HistoryQuery, _React$Component);

  var _super = _createSuper(HistoryQuery);

  function HistoryQuery(props) {
    var _this;

    _classCallCheck(this, HistoryQuery);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "editField", null);

    _this.state = {
      showButtons: false,
      editable: false
    };
    return _this;
  }

  _createClass(HistoryQuery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var editStyles = {
        display: this.state.showButtons ? '' : 'none',
        marginLeft: '10px'
      };
      var starStyles = {
        display: this.props.favorite || this.state.showButtons ? '' : 'none',
        marginLeft: '10px'
      };
      var displayName = this.props.label || this.props.operationName || this.props.query.split('\n').filter(function (line) {
        return line.indexOf('#') !== 0;
      }).join('');
      var starIcon = this.props.favorite ? "\u2605" : "\u2606";
      return /*#__PURE__*/_react.default.createElement("p", {
        className: this.state.editable ? 'editable' : undefined,
        onClick: this.handleClick.bind(this),
        onMouseEnter: this.handleMouseEnter.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this)
      }, this.state.editable ? /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        defaultValue: this.props.label,
        ref: function ref(c) {
          return _this2.editField = c;
        },
        onBlur: this.handleFieldBlur.bind(this),
        onKeyDown: this.handleFieldKeyDown.bind(this),
        placeholder: "Type a label"
      }) : /*#__PURE__*/_react.default.createElement("span", {
        className: "history-label"
      }, displayName), /*#__PURE__*/_react.default.createElement("span", {
        onClick: this.handleEditClick.bind(this),
        style: editStyles
      }, "\u270E"), /*#__PURE__*/_react.default.createElement("span", {
        onClick: this.handleStarClick.bind(this),
        style: starStyles
      }, starIcon));
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      this.setState({
        showButtons: true
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.setState({
        showButtons: false
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSelect(this.props.query, this.props.variables, this.props.operationName, this.props.label);
    }
  }, {
    key: "handleStarClick",
    value: function handleStarClick(e) {
      e.stopPropagation();
      this.props.handleToggleFavorite(this.props.query, this.props.variables, this.props.operationName, this.props.label, this.props.favorite);
    }
  }, {
    key: "handleFieldBlur",
    value: function handleFieldBlur(e) {
      e.stopPropagation();
      this.setState({
        editable: false
      });
      this.props.handleEditLabel(this.props.query, this.props.variables, this.props.operationName, e.target.value, this.props.favorite);
    }
  }, {
    key: "handleFieldKeyDown",
    value: function handleFieldKeyDown(e) {
      if (e.keyCode === 13) {
        e.stopPropagation();
        this.setState({
          editable: false
        });
        this.props.handleEditLabel(this.props.query, this.props.variables, this.props.operationName, e.target.value, this.props.favorite);
      }
    }
  }, {
    key: "handleEditClick",
    value: function handleEditClick(e) {
      var _this3 = this;

      e.stopPropagation();
      this.setState({
        editable: true
      }, function () {
        if (_this3.editField) {
          _this3.editField.focus();
        }
      });
    }
  }]);

  return HistoryQuery;
}(_react.default.Component);

exports.default = HistoryQuery;

_defineProperty(HistoryQuery, "propTypes", {
  favorite: _propTypes.default.bool,
  favoriteSize: _propTypes.default.number,
  handleEditLabel: _propTypes.default.func,
  handleToggleFavorite: _propTypes.default.func,
  operationName: _propTypes.default.string,
  onSelect: _propTypes.default.func,
  query: _propTypes.default.string,
  variables: _propTypes.default.string,
  label: _propTypes.default.string
});