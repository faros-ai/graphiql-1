"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocExplorer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphql = require("graphql");

var _FieldDoc = _interopRequireDefault(require("./DocExplorer/FieldDoc"));

var _SchemaDoc = _interopRequireDefault(require("./DocExplorer/SchemaDoc"));

var _SearchBox = _interopRequireDefault(require("./DocExplorer/SearchBox"));

var _SearchResults = _interopRequireDefault(require("./DocExplorer/SearchResults"));

var _TypeDoc = _interopRequireDefault(require("./DocExplorer/TypeDoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var initialNav = {
  name: 'Schema',
  title: 'Documentation Explorer'
};
/**
 * DocExplorer
 *
 * Shows documentations for GraphQL definitions from the schema.
 *
 * Props:
 *
 *   - schema: A required GraphQLSchema instance that provides GraphQL document
 *     definitions.
 *
 * Children:
 *
 *   - Any provided children will be positioned in the right-hand-side of the
 *     top bar. Typically this will be a "close" button for temporary explorer.
 *
 */

var DocExplorer = /*#__PURE__*/function (_React$Component) {
  _inherits(DocExplorer, _React$Component);

  var _super = _createSuper(DocExplorer);

  function DocExplorer() {
    var _this;

    _classCallCheck(this, DocExplorer);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleNavBackClick", function () {
      if (_this.state.navStack.length > 1) {
        _this.setState({
          navStack: _this.state.navStack.slice(0, -1)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickTypeOrField", function (typeOrField) {
      _this.showDoc(typeOrField);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (value) {
      _this.showSearch(value);
    });

    _this.state = {
      navStack: [initialNav]
    };
    return _this;
  }

  _createClass(DocExplorer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.schema !== nextProps.schema || this.state.navStack !== nextState.navStack;
    }
  }, {
    key: "render",
    value: function render() {
      var schema = this.props.schema;
      var navStack = this.state.navStack;
      var navItem = navStack[navStack.length - 1];
      var content;

      if (schema === undefined) {
        // Schema is undefined when it is being loaded via introspection.
        content = /*#__PURE__*/_react.default.createElement("div", {
          className: "spinner-container"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "spinner"
        }));
      } else if (!schema) {
        // Schema is null when it explicitly does not exist, typically due to
        // an error during introspection.
        content = /*#__PURE__*/_react.default.createElement("div", {
          className: "error-container"
        }, 'No Schema Available');
      } else if (navItem.search) {
        content = /*#__PURE__*/_react.default.createElement(_SearchResults.default, {
          searchValue: navItem.search,
          withinType: navItem.def,
          schema: schema,
          onClickType: this.handleClickTypeOrField,
          onClickField: this.handleClickTypeOrField
        });
      } else if (navStack.length === 1) {
        content = /*#__PURE__*/_react.default.createElement(_SchemaDoc.default, {
          schema: schema,
          onClickType: this.handleClickTypeOrField
        });
      } else if ((0, _graphql.isType)(navItem.def)) {
        content = /*#__PURE__*/_react.default.createElement(_TypeDoc.default, {
          schema: schema,
          type: navItem.def,
          onClickType: this.handleClickTypeOrField,
          onClickField: this.handleClickTypeOrField
        });
      } else {
        content = /*#__PURE__*/_react.default.createElement(_FieldDoc.default, {
          field: navItem.def,
          onClickType: this.handleClickTypeOrField
        });
      }

      var shouldSearchBoxAppear = navStack.length === 1 || (0, _graphql.isType)(navItem.def) && navItem.def.getFields;
      var prevName;

      if (navStack.length > 1) {
        prevName = navStack[navStack.length - 2].name;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-explorer",
        key: navItem.name
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-explorer-title-bar"
      }, prevName && /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-explorer-back",
        onClick: this.handleNavBackClick
      }, prevName), /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-explorer-title"
      }, navItem.title || navItem.name), /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-explorer-rhs"
      }, this.props.children)), /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-explorer-contents"
      }, shouldSearchBoxAppear && /*#__PURE__*/_react.default.createElement(_SearchBox.default, {
        value: navItem.search,
        placeholder: "Search ".concat(navItem.name, "..."),
        onSearch: this.handleSearch
      }), content));
    } // Public API

  }, {
    key: "showDoc",
    value: function showDoc(typeOrField) {
      var navStack = this.state.navStack;
      var topNav = navStack[navStack.length - 1];

      if (topNav.def !== typeOrField) {
        this.setState({
          navStack: navStack.concat([{
            name: typeOrField.name,
            def: typeOrField
          }])
        });
      }
    } // Public API

  }, {
    key: "showDocForReference",
    value: function showDocForReference(reference) {
      if (reference.kind === 'Type') {
        this.showDoc(reference.type);
      } else if (reference.kind === 'Field') {
        this.showDoc(reference.field);
      } else if (reference.kind === 'Argument' && reference.field) {
        this.showDoc(reference.field);
      } else if (reference.kind === 'EnumValue' && reference.type) {
        this.showDoc(reference.type);
      }
    } // Public API

  }, {
    key: "showSearch",
    value: function showSearch(search) {
      var navStack = this.state.navStack.slice();
      var topNav = navStack[navStack.length - 1];
      navStack[navStack.length - 1] = _objectSpread(_objectSpread({}, topNav), {}, {
        search: search
      });
      this.setState({
        navStack: navStack
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        navStack: [initialNav]
      });
    }
  }]);

  return DocExplorer;
}(_react.default.Component);

exports.DocExplorer = DocExplorer;

_defineProperty(DocExplorer, "propTypes", {
  schema: _propTypes.default.instanceOf(_graphql.GraphQLSchema)
});