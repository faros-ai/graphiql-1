"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryEditor = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphql = require("graphql");

var _markdownIt = _interopRequireDefault(require("markdown-it"));

var _normalizeWhitespace = require("../utility/normalizeWhitespace");

var _onHasCompletion = _interopRequireDefault(require("../utility/onHasCompletion"));

var _commonKeys = _interopRequireDefault(require("../utility/commonKeys"));

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

var md = new _markdownIt.default();
var AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/;
/**
 * QueryEditor
 *
 * Maintains an instance of CodeMirror responsible for editing a GraphQL query.
 *
 * Props:
 *
 *   - schema: A GraphQLSchema instance enabling editor linting and hinting.
 *   - value: The text of the editor.
 *   - onEdit: A function called when the editor changes, given the edited text.
 *   - readOnly: Turns the editor to read-only mode.
 *
 */

var QueryEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(QueryEditor, _React$Component);

  var _super = _createSuper(QueryEditor);

  function QueryEditor(props) {
    var _this;

    _classCallCheck(this, QueryEditor);

    _this = _super.call(this); // Keep a cached version of the value, this cache will be updated when the
    // editor is updated, which can later be used to protect the editor from
    // unnecessary updates during the update lifecycle.

    _defineProperty(_assertThisInitialized(_this), "_onKeyUp", function (cm, event) {
      if (AUTO_COMPLETE_AFTER_KEY.test(event.key)) {
        _this.editor.execCommand('autocomplete');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onEdit", function () {
      if (!_this.ignoreChangeEvent) {
        _this.cachedValue = _this.editor.getValue();

        if (_this.props.onEdit) {
          _this.props.onEdit(_this.cachedValue);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onHasCompletion", function (cm, data) {
      (0, _onHasCompletion.default)(cm, data, _this.props.onHintInformationRender);
    });

    _this.cachedValue = props.value || '';
    return _this;
  }

  _createClass(QueryEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Lazily require to ensure requiring GraphiQL outside of a Browser context
      // does not produce an error.
      var CodeMirror = require('codemirror');

      require('codemirror/addon/hint/show-hint');

      require('codemirror/addon/comment/comment');

      require('codemirror/addon/edit/matchbrackets');

      require('codemirror/addon/edit/closebrackets');

      require('codemirror/addon/fold/foldgutter');

      require('codemirror/addon/fold/brace-fold');

      require('codemirror/addon/search/search');

      require('codemirror/addon/search/searchcursor');

      require('codemirror/addon/search/jump-to-line');

      require('codemirror/addon/dialog/dialog');

      require('codemirror/addon/lint/lint');

      require('codemirror/keymap/sublime');

      require('codemirror-graphql/hint');

      require('codemirror-graphql/lint');

      require('codemirror-graphql/info');

      require('codemirror-graphql/jump');

      require('codemirror-graphql/mode');

      this.editor = CodeMirror(this._node, {
        value: this.props.value || '',
        lineNumbers: true,
        tabSize: 2,
        mode: 'graphql',
        theme: this.props.editorTheme || 'graphiql',
        keyMap: 'sublime',
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        readOnly: this.props.readOnly ? 'nocursor' : false,
        foldGutter: {
          minFoldSize: 4
        },
        lint: {
          schema: this.props.schema
        },
        hintOptions: {
          schema: this.props.schema,
          closeOnUnfocus: false,
          completeSingle: false,
          container: this._node
        },
        info: {
          schema: this.props.schema,
          renderDescription: function renderDescription(text) {
            return md.render(text);
          },
          onClick: function onClick(reference) {
            return _this2.props.onClickReference(reference);
          }
        },
        jump: {
          schema: this.props.schema,
          onClick: function onClick(reference) {
            return _this2.props.onClickReference(reference);
          }
        },
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        extraKeys: _objectSpread({
          'Cmd-Space': function CmdSpace() {
            return _this2.editor.showHint({
              completeSingle: true,
              container: _this2._node
            });
          },
          'Ctrl-Space': function CtrlSpace() {
            return _this2.editor.showHint({
              completeSingle: true,
              container: _this2._node
            });
          },
          'Alt-Space': function AltSpace() {
            return _this2.editor.showHint({
              completeSingle: true,
              container: _this2._node
            });
          },
          'Shift-Space': function ShiftSpace() {
            return _this2.editor.showHint({
              completeSingle: true,
              container: _this2._node
            });
          },
          'Shift-Alt-Space': function ShiftAltSpace() {
            return _this2.editor.showHint({
              completeSingle: true,
              container: _this2._node
            });
          },
          'Cmd-Enter': function CmdEnter() {
            if (_this2.props.onRunQuery) {
              _this2.props.onRunQuery();
            }
          },
          'Ctrl-Enter': function CtrlEnter() {
            if (_this2.props.onRunQuery) {
              _this2.props.onRunQuery();
            }
          },
          'Shift-Ctrl-C': function ShiftCtrlC() {
            if (_this2.props.onCopyQuery) {
              _this2.props.onCopyQuery();
            }
          },
          'Shift-Ctrl-P': function ShiftCtrlP() {
            if (_this2.props.onPrettifyQuery) {
              _this2.props.onPrettifyQuery();
            }
          },

          /* Shift-Ctrl-P is hard coded in Firefox for private browsing so adding an alternative to Pretiffy */
          'Shift-Ctrl-F': function ShiftCtrlF() {
            if (_this2.props.onPrettifyQuery) {
              _this2.props.onPrettifyQuery();
            }
          },
          'Shift-Ctrl-M': function ShiftCtrlM() {
            if (_this2.props.onMergeQuery) {
              _this2.props.onMergeQuery();
            }
          }
        }, _commonKeys.default)
      });
      this.editor.on('change', this._onEdit);
      this.editor.on('keyup', this._onKeyUp);
      this.editor.on('hasCompletion', this._onHasCompletion);
      this.editor.on('beforeChange', this._onBeforeChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var CodeMirror = require('codemirror'); // Ensure the changes caused by this update are not interpretted as
      // user-input changes which could otherwise result in an infinite
      // event loop.


      this.ignoreChangeEvent = true;

      if (this.props.schema !== prevProps.schema) {
        this.editor.options.lint.schema = this.props.schema;
        this.editor.options.hintOptions.schema = this.props.schema;
        this.editor.options.info.schema = this.props.schema;
        this.editor.options.jump.schema = this.props.schema;
        CodeMirror.signal(this.editor, 'change', this.editor);
      }

      if (this.props.value !== prevProps.value && this.props.value !== this.cachedValue) {
        this.cachedValue = this.props.value;
        this.editor.setValue(this.props.value);
      }

      this.ignoreChangeEvent = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.editor) {
        this.editor.off('change', this._onEdit);
        this.editor.off('keyup', this._onKeyUp);
        this.editor.off('hasCompletion', this._onHasCompletion);
        this.editor = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "query-editor",
        ref: function ref(node) {
          _this3._node = node;
        }
      });
    }
    /**
     * Public API for retrieving the CodeMirror instance from this
     * React component.
     */

  }, {
    key: "getCodeMirror",
    value: function getCodeMirror() {
      return this.editor;
    }
    /**
     * Public API for retrieving the DOM client height for this component.
     */

  }, {
    key: "getClientHeight",
    value: function getClientHeight() {
      return this._node && this._node.clientHeight;
    }
  }, {
    key: "_onBeforeChange",
    value: function _onBeforeChange(instance, change) {
      // The update function is only present on non-redo, non-undo events.
      if (change.origin === 'paste') {
        var text = change.text.map(_normalizeWhitespace.normalizeWhitespace);
        change.update(change.from, change.to, text);
      }
    }
  }]);

  return QueryEditor;
}(_react.default.Component);

exports.QueryEditor = QueryEditor;

_defineProperty(QueryEditor, "propTypes", {
  schema: _propTypes.default.instanceOf(_graphql.GraphQLSchema),
  value: _propTypes.default.string,
  onEdit: _propTypes.default.func,
  readOnly: _propTypes.default.bool,
  onHintInformationRender: _propTypes.default.func,
  onClickReference: _propTypes.default.func,
  onCopyQuery: _propTypes.default.func,
  onPrettifyQuery: _propTypes.default.func,
  onMergeQuery: _propTypes.default.func,
  onRunQuery: _propTypes.default.func,
  editorTheme: _propTypes.default.string
});