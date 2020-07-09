"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultViewer = void 0;

var _jsonpath = _interopRequireDefault(require("jsonpath"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _commonKeys = _interopRequireDefault(require("../utility/commonKeys"));

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
 * ResultViewer
 *
 * Maintains an instance of CodeMirror for viewing a GraphQL response.
 *
 * Props:
 *
 *   - value: The text of the editor.
 *
 */
var ResultViewer = /*#__PURE__*/function (_React$Component) {
  _inherits(ResultViewer, _React$Component);

  var _super = _createSuper(ResultViewer);

  function ResultViewer() {
    _classCallCheck(this, ResultViewer);

    return _super.call(this);
  }

  _createClass(ResultViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Lazily require to ensure requiring GraphiQL outside of a Browser context
      // does not produce an error.
      var CodeMirror = require('codemirror');

      require('codemirror/addon/fold/foldgutter');

      require('codemirror/addon/fold/brace-fold');

      require('codemirror/addon/dialog/dialog');

      require('codemirror/addon/search/search');

      require('codemirror/addon/search/searchcursor');

      require('codemirror/addon/search/jump-to-line');

      require('codemirror/keymap/sublime');

      require('codemirror-graphql/results/mode');

      var Tooltip = this.props.ResultsTooltip;
      var ImagePreview = this.props.ImagePreview;

      if (Tooltip || ImagePreview) {
        require('codemirror-graphql/utils/info-addon');

        var tooltipDiv = document.createElement('div');
        CodeMirror.registerHelper('info', 'graphql-results', function (token, options, cm, pos) {
          var infoElements = [];

          if (Tooltip) {
            infoElements.push( /*#__PURE__*/_react.default.createElement(Tooltip, {
              pos: pos
            }));
          }

          if (ImagePreview && typeof ImagePreview.shouldRender === 'function' && ImagePreview.shouldRender(token)) {
            infoElements.push( /*#__PURE__*/_react.default.createElement(ImagePreview, {
              token: token
            }));
          }

          if (!infoElements.length) {
            _reactDom.default.unmountComponentAtNode(tooltipDiv);

            return null;
          }

          _reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", null, infoElements), tooltipDiv);

          return tooltipDiv;
        });
      }

      this.viewer = CodeMirror(this._node, {
        lineWrapping: true,
        value: this.focusedValue(),
        readOnly: true,
        theme: this.props.editorTheme || 'graphiql',
        mode: 'graphql-results',
        keyMap: 'sublime',
        foldGutter: {
          minFoldSize: 4
        },
        gutters: ['CodeMirror-foldgutter'],
        info: Boolean(this.props.ResultsTooltip || this.props.ImagePreview),
        extraKeys: _commonKeys.default
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.value !== nextProps.value || this.props.jsonpath !== nextProps.jsonpath;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.viewer.setValue(this.focusedValue());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.viewer = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "result-window",
        ref: function ref(node) {
          _this._node = node;
        }
      });
    }
  }, {
    key: "focusedValue",
    value: function focusedValue() {
      var value = this.props.value || '';

      if (!value || !this.props.jsonpath) {
        return value;
      }

      try {
        var raw = JSON.parse(value);

        var focused = _jsonpath.default.query(raw.data, this.props.jsonpath);

        return JSON.stringify({
          data: focused
        }, null, 2);
      } catch (err) {
        console.warn(err);
        return value;
      }
    }
    /**
     * Public API for retrieving the CodeMirror instance from this
     * React component.
     */

  }, {
    key: "getCodeMirror",
    value: function getCodeMirror() {
      return this.viewer;
    }
    /**
     * Public API for retrieving the DOM client height for this component.
     */

  }, {
    key: "getClientHeight",
    value: function getClientHeight() {
      return this._node && this._node.clientHeight;
    }
  }]);

  return ResultViewer;
}(_react.default.Component);

exports.ResultViewer = ResultViewer;

_defineProperty(ResultViewer, "propTypes", {
  value: _propTypes.default.string,
  editorTheme: _propTypes.default.string,
  jsonpath: _propTypes.default.string,
  ResultsTooltip: _propTypes.default.any,
  ImagePreview: _propTypes.default.any
});