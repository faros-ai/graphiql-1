"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphql = require("graphql");

var _Argument = _interopRequireDefault(require("./Argument"));

var _MarkdownContent = _interopRequireDefault(require("./MarkdownContent"));

var _TypeLink = _interopRequireDefault(require("./TypeLink"));

var _DefaultValue = _interopRequireDefault(require("./DefaultValue"));

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

var TypeDoc = /*#__PURE__*/function (_React$Component) {
  _inherits(TypeDoc, _React$Component);

  var _super = _createSuper(TypeDoc);

  function TypeDoc(props) {
    var _this;

    _classCallCheck(this, TypeDoc);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleShowDeprecated", function () {
      return _this.setState({
        showDeprecated: true
      });
    });

    _this.state = {
      showDeprecated: false
    };
    return _this;
  }

  _createClass(TypeDoc, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.type !== nextProps.type || this.props.schema !== nextProps.schema || this.state.showDeprecated !== nextState.showDeprecated;
    }
  }, {
    key: "render",
    value: function render() {
      var schema = this.props.schema;
      var type = this.props.type;
      var onClickType = this.props.onClickType;
      var onClickField = this.props.onClickField;
      var typesTitle;
      var types;

      if (type instanceof _graphql.GraphQLUnionType) {
        typesTitle = 'possible types';
        types = schema.getPossibleTypes(type);
      } else if (type instanceof _graphql.GraphQLInterfaceType) {
        typesTitle = 'implementations';
        types = schema.getPossibleTypes(type);
      } else if (type instanceof _graphql.GraphQLObjectType) {
        typesTitle = 'implements';
        types = type.getInterfaces();
      }

      var typesDef;

      if (types && types.length > 0) {
        typesDef = /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category-title"
        }, typesTitle), types.map(function (subtype) {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: subtype.name,
            className: "doc-category-item"
          }, /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
            type: subtype,
            onClick: onClickType
          }));
        }));
      } // InputObject and Object


      var fieldsDef;
      var deprecatedFieldsDef;

      if (type.getFields) {
        var fieldMap = type.getFields();
        var fields = Object.keys(fieldMap).map(function (name) {
          return fieldMap[name];
        });
        fieldsDef = /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category-title"
        }, 'fields'), fields.filter(function (field) {
          return !field.isDeprecated;
        }).map(function (field) {
          return /*#__PURE__*/_react.default.createElement(Field, {
            key: field.name,
            type: type,
            field: field,
            onClickType: onClickType,
            onClickField: onClickField
          });
        }));
        var deprecatedFields = fields.filter(function (field) {
          return field.isDeprecated;
        });

        if (deprecatedFields.length > 0) {
          deprecatedFieldsDef = /*#__PURE__*/_react.default.createElement("div", {
            className: "doc-category"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "doc-category-title"
          }, 'deprecated fields'), !this.state.showDeprecated ? /*#__PURE__*/_react.default.createElement("button", {
            className: "show-btn",
            onClick: this.handleShowDeprecated
          }, 'Show deprecated fields...') : deprecatedFields.map(function (field) {
            return /*#__PURE__*/_react.default.createElement(Field, {
              key: field.name,
              type: type,
              field: field,
              onClickType: onClickType,
              onClickField: onClickField
            });
          }));
        }
      }

      var valuesDef;
      var deprecatedValuesDef;

      if (type instanceof _graphql.GraphQLEnumType) {
        var values = type.getValues();
        valuesDef = /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category-title"
        }, 'values'), values.filter(function (value) {
          return !value.isDeprecated;
        }).map(function (value) {
          return /*#__PURE__*/_react.default.createElement(EnumValue, {
            key: value.name,
            value: value
          });
        }));
        var deprecatedValues = values.filter(function (value) {
          return value.isDeprecated;
        });

        if (deprecatedValues.length > 0) {
          deprecatedValuesDef = /*#__PURE__*/_react.default.createElement("div", {
            className: "doc-category"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "doc-category-title"
          }, 'deprecated values'), !this.state.showDeprecated ? /*#__PURE__*/_react.default.createElement("button", {
            className: "show-btn",
            onClick: this.handleShowDeprecated
          }, 'Show deprecated values...') : deprecatedValues.map(function (value) {
            return /*#__PURE__*/_react.default.createElement(EnumValue, {
              key: value.name,
              value: value
            });
          }));
        }
      }

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
        className: "doc-type-description",
        markdown: type.description || 'No Description'
      }), type instanceof _graphql.GraphQLObjectType && typesDef, fieldsDef, deprecatedFieldsDef, valuesDef, deprecatedValuesDef, !(type instanceof _graphql.GraphQLObjectType) && typesDef);
    }
  }]);

  return TypeDoc;
}(_react.default.Component);

exports.default = TypeDoc;

_defineProperty(TypeDoc, "propTypes", {
  schema: _propTypes.default.instanceOf(_graphql.GraphQLSchema),
  type: _propTypes.default.object,
  onClickType: _propTypes.default.func,
  onClickField: _propTypes.default.func
});

function Field(_ref) {
  var type = _ref.type,
      field = _ref.field,
      onClickType = _ref.onClickType,
      onClickField = _ref.onClickField;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "doc-category-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "field-name",
    onClick: function onClick(event) {
      return onClickField(field, type, event);
    }
  }, field.name), field.args && field.args.length > 0 && ['(', /*#__PURE__*/_react.default.createElement("span", {
    key: "args"
  }, field.args.map(function (arg) {
    return /*#__PURE__*/_react.default.createElement(_Argument.default, {
      key: arg.name,
      arg: arg,
      onClickType: onClickType
    });
  })), ')'], ': ', /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
    type: field.type,
    onClick: onClickType
  }), /*#__PURE__*/_react.default.createElement(_DefaultValue.default, {
    field: field
  }), field.description && /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
    className: "field-short-description",
    markdown: field.description
  }), field.deprecationReason && /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
    className: "doc-deprecation",
    markdown: field.deprecationReason
  }));
}

Field.propTypes = {
  type: _propTypes.default.object,
  field: _propTypes.default.object,
  onClickType: _propTypes.default.func,
  onClickField: _propTypes.default.func
};

function EnumValue(_ref2) {
  var value = _ref2.value;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "doc-category-item"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "enum-value"
  }, value.name), /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
    className: "doc-value-description",
    markdown: value.description
  }), value.deprecationReason && /*#__PURE__*/_react.default.createElement(_MarkdownContent.default, {
    className: "doc-deprecation",
    markdown: value.deprecationReason
  }));
}

EnumValue.propTypes = {
  value: _propTypes.default.object
};