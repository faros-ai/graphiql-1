"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Argument = _interopRequireDefault(require("./Argument"));

var _MarkdownContent = _interopRequireDefault(require("./MarkdownContent"));

var _TypeLink = _interopRequireDefault(require("./TypeLink"));

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

var FieldDoc = /*#__PURE__*/function (_React$Component) {
  _inherits(FieldDoc, _React$Component);

  var _super = _createSuper(FieldDoc);

  function FieldDoc() {
    _classCallCheck(this, FieldDoc);

    return _super.apply(this, arguments);
  }

  _createClass(FieldDoc, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.field !== nextProps.field;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var field = this.props.field;
      var argsDef;

      if (field.args && field.args.length > 0) {
        argsDef = /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category-title"
        }, 'arguments'), field.args.map(function (arg) {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: arg.name,
            className: "doc-category-item"
          }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Argument.default, {
            arg: arg,
            onClickType: _this.props.onClickType
          })), /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
            className: "doc-value-description",
            markdown: arg.description
          }));
        }));
      }

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
        className: "doc-type-description",
        markdown: field.description || 'No Description'
      }), field.deprecationReason && /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
        className: "doc-deprecation",
        markdown: field.deprecationReason
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-category"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-category-title"
      }, 'type'), /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
        type: field.type,
        onClick: this.props.onClickType
      })), argsDef);
    }
  }]);

  return FieldDoc;
}(_react.default.Component);

exports.default = FieldDoc;

_defineProperty(FieldDoc, "propTypes", {
  field: _propTypes.default.object,
  onClickType: _propTypes.default.func
});