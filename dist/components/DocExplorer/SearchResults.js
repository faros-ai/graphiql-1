"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Argument = _interopRequireDefault(require("./Argument"));

var _TypeLink = _interopRequireDefault(require("./TypeLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

var SearchResults = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchResults, _React$Component);

  var _super = _createSuper(SearchResults);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    return _super.apply(this, arguments);
  }

  _createClass(SearchResults, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.schema !== nextProps.schema || this.props.searchValue !== nextProps.searchValue;
    }
  }, {
    key: "render",
    value: function render() {
      var searchValue = this.props.searchValue;
      var withinType = this.props.withinType;
      var schema = this.props.schema;
      var onClickType = this.props.onClickType;
      var onClickField = this.props.onClickField;
      var matchedWithin = [];
      var matchedTypes = [];
      var matchedFields = [];
      var typeMap = schema.getTypeMap();
      var typeNames = Object.keys(typeMap); // Move the within type name to be the first searched.

      if (withinType) {
        typeNames = typeNames.filter(function (n) {
          return n !== withinType.name;
        });
        typeNames.unshift(withinType.name);
      }

      var _iterator = _createForOfIteratorHelper(typeNames),
          _step;

      try {
        var _loop = function _loop() {
          var typeName = _step.value;

          if (matchedWithin.length + matchedTypes.length + matchedFields.length >= 100) {
            return "break";
          }

          var type = typeMap[typeName];

          if (withinType !== type && isMatch(typeName, searchValue)) {
            matchedTypes.push( /*#__PURE__*/_react.default.createElement("div", {
              className: "doc-category-item",
              key: typeName
            }, /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
              type: type,
              onClick: onClickType
            })));
          }

          if (type.getFields) {
            var fields = type.getFields();
            Object.keys(fields).forEach(function (fieldName) {
              var field = fields[fieldName];
              var matchingArgs;

              if (!isMatch(fieldName, searchValue)) {
                if (field.args && field.args.length) {
                  matchingArgs = field.args.filter(function (arg) {
                    return isMatch(arg.name, searchValue);
                  });

                  if (matchingArgs.length === 0) {
                    return;
                  }
                } else {
                  return;
                }
              }

              var match = /*#__PURE__*/_react.default.createElement("div", {
                className: "doc-category-item",
                key: typeName + '.' + fieldName
              }, withinType !== type && [/*#__PURE__*/_react.default.createElement(_TypeLink.default, {
                key: "type",
                type: type,
                onClick: onClickType
              }), '.'], /*#__PURE__*/_react.default.createElement("a", {
                className: "field-name",
                onClick: function onClick(event) {
                  return onClickField(field, type, event);
                }
              }, field.name), matchingArgs && ['(', /*#__PURE__*/_react.default.createElement("span", {
                key: "args"
              }, matchingArgs.map(function (arg) {
                return /*#__PURE__*/_react.default.createElement(_Argument.default, {
                  key: arg.name,
                  arg: arg,
                  onClickType: onClickType,
                  showDefaultValue: false
                });
              })), ')']);

              if (withinType === type) {
                matchedWithin.push(match);
              } else {
                matchedFields.push(match);
              }
            });
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (matchedWithin.length + matchedTypes.length + matchedFields.length === 0) {
        return /*#__PURE__*/_react.default.createElement("span", {
          className: "doc-alert-text"
        }, 'No results found.');
      }

      if (withinType && matchedTypes.length + matchedFields.length > 0) {
        return /*#__PURE__*/_react.default.createElement("div", null, matchedWithin, /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "doc-category-title"
        }, 'other results'), matchedTypes, matchedFields));
      }

      return /*#__PURE__*/_react.default.createElement("div", null, matchedWithin, matchedTypes, matchedFields);
    }
  }]);

  return SearchResults;
}(_react.default.Component);

exports.default = SearchResults;

_defineProperty(SearchResults, "propTypes", {
  schema: _propTypes.default.object,
  withinType: _propTypes.default.object,
  searchValue: _propTypes.default.string,
  onClickType: _propTypes.default.func,
  onClickField: _propTypes.default.func
});

function isMatch(sourceText, searchValue) {
  try {
    var escaped = searchValue.replace(/[^_0-9A-Za-z]/g, function (ch) {
      return '\\' + ch;
    });
    return sourceText.search(new RegExp(escaped, 'i')) !== -1;
  } catch (e) {
    return sourceText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  }
}