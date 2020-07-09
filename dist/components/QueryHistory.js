"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryHistory = void 0;

var _graphql = require("graphql");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _QueryStore = _interopRequireDefault(require("../utility/QueryStore"));

var _HistoryQuery = _interopRequireDefault(require("./HistoryQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var shouldSaveQuery = function shouldSaveQuery(nextProps, current, lastQuerySaved) {
  if (nextProps.queryID === current.queryID) {
    return false;
  }

  try {
    (0, _graphql.parse)(nextProps.query);
  } catch (e) {
    return false;
  }

  if (!lastQuerySaved) {
    return true;
  }

  if (JSON.stringify(nextProps.query) === JSON.stringify(lastQuerySaved.query)) {
    if (JSON.stringify(nextProps.variables) === JSON.stringify(lastQuerySaved.variables)) {
      return false;
    }

    if (!nextProps.variables && !lastQuerySaved.variables) {
      return false;
    }
  }

  return true;
};

var MAX_HISTORY_LENGTH = 20;

var QueryHistory = /*#__PURE__*/function (_React$Component) {
  _inherits(QueryHistory, _React$Component);

  var _super = _createSuper(QueryHistory);

  function QueryHistory(props) {
    var _this;

    _classCallCheck(this, QueryHistory);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleFavorite", function (query, variables, operationName, label, favorite) {
      var item = {
        query: query,
        variables: variables,
        operationName: operationName,
        label: label
      };

      if (!_this.favoriteStore.contains(item)) {
        item.favorite = true;

        _this.favoriteStore.push(item);
      } else if (favorite) {
        item.favorite = false;

        _this.favoriteStore.delete(item);
      }

      _this.setState({
        queries: [].concat(_toConsumableArray(_this.historyStore.items), _toConsumableArray(_this.favoriteStore.items))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "editLabel", function (query, variables, operationName, label, favorite) {
      var item = {
        query: query,
        variables: variables,
        operationName: operationName,
        label: label
      };

      if (favorite) {
        _this.favoriteStore.edit(_objectSpread(_objectSpread({}, item), {}, {
          favorite: favorite
        }));
      } else {
        _this.historyStore.edit(item);
      }

      _this.setState({
        queries: [].concat(_toConsumableArray(_this.historyStore.items), _toConsumableArray(_this.favoriteStore.items))
      });
    });

    _this.historyStore = new _QueryStore.default('queries', props.storage);
    _this.favoriteStore = new _QueryStore.default('favorites', props.storage);

    var historyQueries = _this.historyStore.fetchAll();

    var favoriteQueries = _this.favoriteStore.fetchAll();

    var queries = historyQueries.concat(favoriteQueries);
    _this.state = {
      queries: queries
    };
    return _this;
  }

  _createClass(QueryHistory, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (shouldSaveQuery(nextProps, this.props, this.historyStore.fetchRecent())) {
        var item = {
          query: nextProps.query,
          variables: nextProps.variables,
          operationName: nextProps.operationName
        };
        this.historyStore.push(item);

        if (this.historyStore.length > MAX_HISTORY_LENGTH) {
          this.historyStore.shift();
        }

        var historyQueries = this.historyStore.items;
        var favoriteQueries = this.favoriteStore.items;
        var queries = historyQueries.concat(favoriteQueries);
        this.setState({
          queries: queries
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var queries = this.state.queries.slice().reverse();
      var queryNodes = queries.map(function (query, i) {
        return /*#__PURE__*/_react.default.createElement(_HistoryQuery.default, _extends({
          handleEditLabel: _this2.editLabel,
          handleToggleFavorite: _this2.toggleFavorite,
          key: i,
          onSelect: _this2.props.onSelectQuery
        }, query));
      });
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "history-title-bar"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "history-title"
      }, 'History'), /*#__PURE__*/_react.default.createElement("div", {
        className: "doc-explorer-rhs"
      }, this.props.children)), /*#__PURE__*/_react.default.createElement("div", {
        className: "history-contents"
      }, queryNodes));
    }
  }]);

  return QueryHistory;
}(_react.default.Component);

exports.QueryHistory = QueryHistory;

_defineProperty(QueryHistory, "propTypes", {
  query: _propTypes.default.string,
  variables: _propTypes.default.string,
  operationName: _propTypes.default.string,
  queryID: _propTypes.default.number,
  onSelectQuery: _propTypes.default.func,
  storage: _propTypes.default.object
});