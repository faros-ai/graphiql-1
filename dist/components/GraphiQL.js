"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphiQL = void 0;

var _jsonpath = _interopRequireDefault(require("jsonpath"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _graphql = require("graphql");

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _ExecuteButton = require("./ExecuteButton");

var _ImagePreview = require("./ImagePreview");

var _ToolbarButton = require("./ToolbarButton");

var _ToolbarGroup = require("./ToolbarGroup");

var _ToolbarMenu = require("./ToolbarMenu");

var _ToolbarSelect = require("./ToolbarSelect");

var _QueryEditor = require("./QueryEditor");

var _VariableEditor = require("./VariableEditor");

var _ResultViewer = require("./ResultViewer");

var _DocExplorer = require("./DocExplorer");

var _QueryHistory = require("./QueryHistory");

var _CodeMirrorSizer = _interopRequireDefault(require("../utility/CodeMirrorSizer"));

var _StorageAPI = _interopRequireDefault(require("../utility/StorageAPI"));

var _getQueryFacts = _interopRequireDefault(require("../utility/getQueryFacts"));

var _getSelectedOperationName = _interopRequireDefault(require("../utility/getSelectedOperationName"));

var _debounce = _interopRequireDefault(require("../utility/debounce"));

var _find = _interopRequireDefault(require("../utility/find"));

var _fillLeafs2 = require("../utility/fillLeafs");

var _elementPosition = require("../utility/elementPosition");

var _mergeAst = require("../utility/mergeAst");

var _introspectionQueries = require("../utility/introspectionQueries");

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

var DEFAULT_DOC_EXPLORER_WIDTH = 350;
/**
 * The top-level React component for GraphiQL, intended to encompass the entire
 * browser viewport.
 *
 * @see https://github.com/graphql/graphiql#usage
 */

var GraphiQL = /*#__PURE__*/function (_React$Component) {
  _inherits(GraphiQL, _React$Component);

  var _super = _createSuper(GraphiQL);

  function GraphiQL(props) {
    var _this;

    _classCallCheck(this, GraphiQL);

    _this = _super.call(this, props); // Ensure props are correct

    _defineProperty(_assertThisInitialized(_this), "handleClickReference", function (reference) {
      _this.setState({
        docExplorerOpen: true
      }, function () {
        _this.docExplorerComponent.showDocForReference(reference);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRunQuery", function (selectedOperationName) {
      _this._editorQueryID++;
      var queryID = _this._editorQueryID; // Use the edited query after autoCompleteLeafs() runs or,
      // in case autoCompletion fails (the function returns undefined),
      // the current query from the editor.

      var editedQuery = _this.autoCompleteLeafs() || _this.state.query;

      var variables = _this.state.variables;
      var operationName = _this.state.operationName; // If an operation was explicitly provided, different from the current
      // operation name, then report that it changed.

      if (selectedOperationName && selectedOperationName !== operationName) {
        operationName = selectedOperationName;

        _this.handleEditOperationName(operationName);
      }

      try {
        _this.setState({
          isWaitingForResponse: true,
          response: null,
          operationName: operationName
        }); // _fetchQuery may return a subscription.


        var subscription = _this._fetchQuery(editedQuery, variables, operationName, function (result) {
          if (queryID === _this._editorQueryID) {
            _this.setState({
              isWaitingForResponse: false,
              response: GraphiQL.formatResult(result)
            });
          }
        });

        _this.setState({
          subscription: subscription
        });
      } catch (error) {
        _this.setState({
          isWaitingForResponse: false,
          response: error.message
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStopQuery", function () {
      var subscription = _this.state.subscription;

      _this.setState({
        isWaitingForResponse: false,
        subscription: null
      });

      if (subscription) {
        subscription.unsubscribe();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePrettifyQuery", function () {
      var editor = _this.getQueryEditor();

      editor.setValue((0, _graphql.print)((0, _graphql.parse)(editor.getValue())));
    });

    _defineProperty(_assertThisInitialized(_this), "handleMergeQuery", function () {
      var editor = _this.getQueryEditor();

      var query = editor.getValue();

      if (!query) {
        return;
      }

      var ast = (0, _graphql.parse)(query);
      editor.setValue((0, _graphql.print)((0, _mergeAst.mergeAst)(ast)));
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditQuery", (0, _debounce.default)(100, function (value) {
      var queryFacts = _this._updateQueryFacts(value, _this.state.operationName, _this.state.operations, _this.state.schema);

      _this.setState(_objectSpread({
        query: value
      }, queryFacts));

      if (_this.props.onEditQuery) {
        return _this.props.onEditQuery(value);
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "handleCopyQuery", function () {
      var editor = _this.getQueryEditor();

      var query = editor.getValue();

      if (!query) {
        return;
      }

      (0, _copyToClipboard.default)(query);

      if (_this.props.onCopyQuery) {
        return _this.props.onCopyQuery(query);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_updateQueryFacts", function (query, operationName, prevOperations, schema) {
      var queryFacts = (0, _getQueryFacts.default)(schema, query);

      if (queryFacts) {
        // Update operation name should any query names change.
        var updatedOperationName = (0, _getSelectedOperationName.default)(prevOperations, operationName, queryFacts.operations); // Report changing of operationName if it changed.

        var onEditOperationName = _this.props.onEditOperationName;

        if (onEditOperationName && operationName !== updatedOperationName) {
          onEditOperationName(updatedOperationName);
        }

        return _objectSpread({
          operationName: updatedOperationName
        }, queryFacts);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditVariables", function (value) {
      if (value) {
        try {
          _jsonpath.default.parse(value);
        } catch (err) {
          console.warn(err);
          return;
        }
      }

      _this.setState({
        variables: value
      });

      if (_this.props.onEditJsonpath) {
        _this.props.onEditJsonpath(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditOperationName", function (operationName) {
      var onEditOperationName = _this.props.onEditOperationName;

      if (onEditOperationName) {
        onEditOperationName(operationName);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleHintInformationRender", function (elem) {
      elem.addEventListener('click', _this._onClickHintInformation);

      var _onRemoveFn;

      elem.addEventListener('DOMNodeRemoved', _onRemoveFn = function onRemoveFn() {
        elem.removeEventListener('DOMNodeRemoved', _onRemoveFn);
        elem.removeEventListener('click', _this._onClickHintInformation);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEditorRunQuery", function () {
      _this._runQueryAtCursor();
    });

    _defineProperty(_assertThisInitialized(_this), "_onClickHintInformation", function (event) {
      if (event.target.className === 'typeName') {
        var typeName = event.target.innerHTML;
        var schema = _this.state.schema;

        if (schema) {
          var type = schema.getType(typeName);

          if (type) {
            _this.setState({
              docExplorerOpen: true
            }, function () {
              _this.docExplorerComponent.showDoc(type);
            });
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleDocs", function () {
      if (typeof _this.props.onToggleDocs === 'function') {
        _this.props.onToggleDocs(!_this.state.docExplorerOpen);
      }

      _this.setState({
        docExplorerOpen: !_this.state.docExplorerOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleHistory", function () {
      if (typeof _this.props.onToggleHistory === 'function') {
        _this.props.onToggleHistory(!_this.state.historyPaneOpen);
      }

      _this.setState({
        historyPaneOpen: !_this.state.historyPaneOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectHistoryQuery", function (query, variables, operationName) {
      _this.handleEditQuery(query);

      _this.handleEditVariables(variables);

      _this.handleEditOperationName(operationName);
    });

    _defineProperty(_assertThisInitialized(_this), "handleResizeStart", function (downEvent) {
      if (!_this._didClickDragBar(downEvent)) {
        return;
      }

      downEvent.preventDefault();
      var offset = downEvent.clientX - (0, _elementPosition.getLeft)(downEvent.target);

      var onMouseMove = function onMouseMove(moveEvent) {
        if (moveEvent.buttons === 0) {
          return _onMouseUp();
        }

        var editorBar = _reactDom.default.findDOMNode(_this.editorBarComponent);

        var leftSize = moveEvent.clientX - (0, _elementPosition.getLeft)(editorBar) - offset;
        var rightSize = editorBar.clientWidth - leftSize;

        _this.setState({
          editorFlex: leftSize / rightSize
        });
      };

      var _onMouseUp = function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', _onMouseUp);
        onMouseMove = null;
        _onMouseUp = null;
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', _onMouseUp);
    });

    _defineProperty(_assertThisInitialized(_this), "handleResetResize", function () {
      _this.setState({
        editorFlex: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocsResizeStart", function (downEvent) {
      downEvent.preventDefault();
      var hadWidth = _this.state.docExplorerWidth;
      var offset = downEvent.clientX - (0, _elementPosition.getLeft)(downEvent.target);

      var onMouseMove = function onMouseMove(moveEvent) {
        if (moveEvent.buttons === 0) {
          return _onMouseUp2();
        }

        var app = _reactDom.default.findDOMNode(_assertThisInitialized(_this));

        var cursorPos = moveEvent.clientX - (0, _elementPosition.getLeft)(app) - offset;
        var docsSize = app.clientWidth - cursorPos;

        if (docsSize < 100) {
          _this.setState({
            docExplorerOpen: false
          });
        } else {
          _this.setState({
            docExplorerOpen: true,
            docExplorerWidth: Math.min(docsSize, 650)
          });
        }
      };

      var _onMouseUp2 = function onMouseUp() {
        if (!_this.state.docExplorerOpen) {
          _this.setState({
            docExplorerWidth: hadWidth
          });
        }

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', _onMouseUp2);
        onMouseMove = null;
        _onMouseUp2 = null;
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', _onMouseUp2);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocsResetResize", function () {
      _this.setState({
        docExplorerWidth: DEFAULT_DOC_EXPLORER_WIDTH
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleVariableResizeStart", function (downEvent) {
      downEvent.preventDefault();
      var didMove = false;
      var wasOpen = _this.state.variableEditorOpen;
      var hadHeight = _this.state.variableEditorHeight;
      var offset = downEvent.clientY - (0, _elementPosition.getTop)(downEvent.target);

      var onMouseMove = function onMouseMove(moveEvent) {
        if (moveEvent.buttons === 0) {
          return _onMouseUp3();
        }

        didMove = true;

        var editorBar = _reactDom.default.findDOMNode(_this.editorBarComponent);

        var topSize = moveEvent.clientY - (0, _elementPosition.getTop)(editorBar) - offset;
        var bottomSize = editorBar.clientHeight - topSize;

        if (bottomSize < 60) {
          _this.setState({
            variableEditorOpen: false,
            variableEditorHeight: hadHeight
          });
        } else {
          _this.setState({
            variableEditorOpen: true,
            variableEditorHeight: bottomSize
          });
        }
      };

      var _onMouseUp3 = function onMouseUp() {
        if (!didMove) {
          _this.setState({
            variableEditorOpen: !wasOpen
          });
        }

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', _onMouseUp3);
        onMouseMove = null;
        _onMouseUp3 = null;
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', _onMouseUp3);
    });

    if (typeof props.fetcher !== 'function') {
      throw new TypeError('GraphiQL requires a fetcher function.');
    } // Cache the storage instance


    _this._storage = new _StorageAPI.default(props.storage); // Determine the initial query to display.

    var _query = props.query !== undefined ? props.query : _this._storage.get('query') !== null ? _this._storage.get('query') : props.defaultQuery !== undefined ? props.defaultQuery : defaultQuery; // Get the initial query facts.


    var _queryFacts = (0, _getQueryFacts.default)(props.schema, _query); // Determine the initial variables to display.


    var _variables = props.jsonpath !== undefined ? props.jsonpath : _this._storage.get('variables'); // Determine the initial operationName to use.


    var _operationName = props.operationName !== undefined ? props.operationName : (0, _getSelectedOperationName.default)(null, _this._storage.get('operationName'), _queryFacts && _queryFacts.operations); // prop can be supplied to open docExplorer initially


    var docExplorerOpen = props.docExplorerOpen || false; // but then local storage state overrides it

    if (_this._storage.get('docExplorerOpen')) {
      docExplorerOpen = _this._storage.get('docExplorerOpen') === 'true';
    } // initial variable editor pane open


    var variableEditorOpen = props.defaultVariableEditorOpen !== undefined ? props.defaultVariableEditorOpen : Boolean(_variables); // Initialize state

    _this.state = _objectSpread({
      schema: props.schema,
      query: _query,
      variables: _variables,
      operationName: _operationName,
      docExplorerOpen: docExplorerOpen,
      response: props.response,
      editorFlex: Number(_this._storage.get('editorFlex')) || 1,
      variableEditorOpen: variableEditorOpen,
      variableEditorHeight: Number(_this._storage.get('variableEditorHeight')) || 200,
      historyPaneOpen: _this._storage.get('historyPaneOpen') === 'true' || false,
      docExplorerWidth: Number(_this._storage.get('docExplorerWidth')) || DEFAULT_DOC_EXPLORER_WIDTH,
      isWaitingForResponse: false,
      subscription: null
    }, _queryFacts); // Ensure only the last executed editor query is rendered.

    _this._editorQueryID = 0; // Subscribe to the browser window closing, treating it as an unmount.

    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
      window.addEventListener('beforeunload', function () {
        return _this.componentWillUnmount();
      });
    }

    return _this;
  }

  _createClass(GraphiQL, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Only fetch schema via introspection if a schema has not been
      // provided, including if `null` was provided.
      if (this.state.schema === undefined) {
        this._fetchSchema();
      } // Utility for keeping CodeMirror correctly sized.


      this.codeMirrorSizer = new _CodeMirrorSizer.default();
      global.g = this;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var nextSchema = this.state.schema;
      var nextQuery = this.state.query;
      var nextVariables = this.state.variables;
      var nextOperationName = this.state.operationName;
      var nextResponse = this.state.response;

      if (nextProps.schema !== undefined) {
        nextSchema = nextProps.schema;
      }

      if (nextProps.query !== undefined) {
        nextQuery = nextProps.query;
      }

      if (nextProps.variables !== undefined) {
        nextVariables = nextProps.variables;
      }

      if (nextProps.operationName !== undefined) {
        nextOperationName = nextProps.operationName;
      }

      if (nextProps.response !== undefined) {
        nextResponse = nextProps.response;
      }

      if (nextSchema !== this.state.schema || nextQuery !== this.state.query || nextOperationName !== this.state.operationName) {
        var updatedQueryAttributes = this._updateQueryFacts(nextQuery, nextOperationName, this.state.operations, nextSchema);

        if (updatedQueryAttributes !== undefined) {
          nextOperationName = updatedQueryAttributes.operationName;
          this.setState(updatedQueryAttributes);
        }
      } // If schema is not supplied via props and the fetcher changed, then
      // remove the schema so fetchSchema() will be called with the new fetcher.


      if (nextProps.schema === undefined && nextProps.fetcher !== this.props.fetcher) {
        nextSchema = undefined;
      }

      this.setState({
        schema: nextSchema,
        query: nextQuery,
        variables: nextVariables,
        operationName: nextOperationName,
        response: nextResponse
      }, function () {
        if (_this2.state.schema === undefined) {
          if (_this2.docExplorerComponent) {
            _this2.docExplorerComponent.reset();
          }

          _this2._fetchSchema();
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // If this update caused DOM nodes to have changed sizes, update the
      // corresponding CodeMirror instance sizes to match.
      this.codeMirrorSizer.updateSizes([this.queryEditorComponent, this.variableEditorComponent, this.resultComponent]);
    } // When the component is about to unmount, store any persistable state, such
    // that when the component is remounted, it will use the last used values.

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._storage.set('query', this.state.query);

      this._storage.set('variables', this.state.variables);

      this._storage.set('operationName', this.state.operationName);

      this._storage.set('editorFlex', this.state.editorFlex);

      this._storage.set('variableEditorHeight', this.state.variableEditorHeight);

      this._storage.set('docExplorerWidth', this.state.docExplorerWidth);

      this._storage.set('docExplorerOpen', this.state.docExplorerOpen);

      this._storage.set('historyPaneOpen', this.state.historyPaneOpen);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = _react.default.Children.toArray(this.props.children);

      var logo = (0, _find.default)(children, function (child) {
        return child.type === GraphiQL.Logo;
      }) || /*#__PURE__*/_react.default.createElement(GraphiQL.Logo, null);

      var toolbar = (0, _find.default)(children, function (child) {
        return child.type === GraphiQL.Toolbar;
      }) || /*#__PURE__*/_react.default.createElement(GraphiQL.Toolbar, null, /*#__PURE__*/_react.default.createElement(_ToolbarButton.ToolbarButton, {
        onClick: this.handlePrettifyQuery,
        title: "Prettify Query (Shift-Ctrl-P)",
        label: "Prettify"
      }), /*#__PURE__*/_react.default.createElement(_ToolbarButton.ToolbarButton, {
        onClick: this.handleMergeQuery,
        title: "Merge Query (Shift-Ctrl-M)",
        label: "Merge"
      }), /*#__PURE__*/_react.default.createElement(_ToolbarButton.ToolbarButton, {
        onClick: this.handleCopyQuery,
        title: "Copy Query (Shift-Ctrl-C)",
        label: "Copy"
      }), /*#__PURE__*/_react.default.createElement(_ToolbarButton.ToolbarButton, {
        onClick: this.handleToggleHistory,
        title: "Show History",
        label: "History"
      }));

      var footer = (0, _find.default)(children, function (child) {
        return child.type === GraphiQL.Footer;
      });
      var queryWrapStyle = {
        WebkitFlex: this.state.editorFlex,
        flex: this.state.editorFlex
      };
      var docWrapStyle = {
        display: 'block',
        width: this.state.docExplorerWidth
      };
      var docExplorerWrapClasses = 'docExplorerWrap' + (this.state.docExplorerWidth < 200 ? ' doc-explorer-narrow' : '');
      var historyPaneStyle = {
        display: this.state.historyPaneOpen ? 'block' : 'none',
        width: '230px',
        zIndex: '7'
      };
      var variableOpen = this.state.variableEditorOpen;
      var variableStyle = {
        height: variableOpen ? this.state.variableEditorHeight : null
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "graphiql-container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "historyPaneWrap",
        style: historyPaneStyle
      }, /*#__PURE__*/_react.default.createElement(_QueryHistory.QueryHistory, {
        operationName: this.state.operationName,
        query: this.state.query,
        variables: this.state.variables,
        onSelectQuery: this.handleSelectHistoryQuery,
        storage: this._storage,
        queryID: this._editorQueryID
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "docExplorerHide",
        onClick: this.handleToggleHistory
      }, "\u2715"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "editorWrap"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "topBarWrap"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "topBar"
      }, logo, /*#__PURE__*/_react.default.createElement(_ExecuteButton.ExecuteButton, {
        isRunning: Boolean(this.state.subscription),
        onRun: this.handleRunQuery,
        onStop: this.handleStopQuery,
        operations: this.state.operations
      }), toolbar), !this.state.docExplorerOpen && /*#__PURE__*/_react.default.createElement("button", {
        className: "docExplorerShow",
        onClick: this.handleToggleDocs
      }, 'Docs')), /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(n) {
          _this3.editorBarComponent = n;
        },
        className: "editorBar",
        onDoubleClick: this.handleResetResize,
        onMouseDown: this.handleResizeStart
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "queryWrap",
        style: queryWrapStyle
      }, /*#__PURE__*/_react.default.createElement(_QueryEditor.QueryEditor, {
        ref: function ref(n) {
          _this3.queryEditorComponent = n;
        },
        schema: this.state.schema,
        value: this.state.query,
        onEdit: this.handleEditQuery,
        onHintInformationRender: this.handleHintInformationRender,
        onClickReference: this.handleClickReference,
        onCopyQuery: this.handleCopyQuery,
        onPrettifyQuery: this.handlePrettifyQuery,
        onMergeQuery: this.handleMergeQuery,
        onRunQuery: this.handleEditorRunQuery,
        editorTheme: this.props.editorTheme,
        readOnly: this.props.readOnly
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "variable-editor",
        style: variableStyle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "variable-editor-title",
        style: {
          cursor: variableOpen ? 'row-resize' : 'n-resize'
        },
        onMouseDown: this.handleVariableResizeStart
      }, 'JSONPath'), /*#__PURE__*/_react.default.createElement(_VariableEditor.VariableEditor, {
        ref: function ref(n) {
          _this3.variableEditorComponent = n;
        },
        value: this.state.variables,
        onEdit: this.handleEditVariables,
        onHintInformationRender: this.handleHintInformationRender,
        onPrettifyQuery: this.handlePrettifyQuery,
        onMergeQuery: this.handleMergeQuery,
        onRunQuery: this.handleEditorRunQuery,
        editorTheme: this.props.editorTheme,
        readOnly: this.props.readOnly
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "resultWrap"
      }, this.state.isWaitingForResponse && /*#__PURE__*/_react.default.createElement("div", {
        className: "spinner-container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "spinner"
      })), /*#__PURE__*/_react.default.createElement(_ResultViewer.ResultViewer, {
        ref: function ref(c) {
          _this3.resultComponent = c;
        },
        value: this.state.response,
        jsonpath: this.state.variables,
        editorTheme: this.props.editorTheme,
        ResultsTooltip: this.props.ResultsTooltip,
        ImagePreview: _ImagePreview.ImagePreview
      }), footer))), this.state.docExplorerOpen && /*#__PURE__*/_react.default.createElement("div", {
        className: docExplorerWrapClasses,
        style: docWrapStyle
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "docExplorerResizer",
        onDoubleClick: this.handleDocsResetResize,
        onMouseDown: this.handleDocsResizeStart
      }), /*#__PURE__*/_react.default.createElement(_DocExplorer.DocExplorer, {
        ref: function ref(c) {
          _this3.docExplorerComponent = c;
        },
        schema: this.state.schema
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "docExplorerHide",
        onClick: this.handleToggleDocs
      }, "\u2715"))));
    }
    /**
     * Get the query editor CodeMirror instance.
     *
     * @public
     */

  }, {
    key: "getQueryEditor",
    value: function getQueryEditor() {
      return this.queryEditorComponent.getCodeMirror();
    }
    /**
     * Get the variable editor CodeMirror instance.
     *
     * @public
     */

  }, {
    key: "getVariableEditor",
    value: function getVariableEditor() {
      return this.variableEditorComponent.getCodeMirror();
    }
    /**
     * Refresh all CodeMirror instances.
     *
     * @public
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.queryEditorComponent.getCodeMirror().refresh();
      this.variableEditorComponent.getCodeMirror().refresh();
      this.resultComponent.getCodeMirror().refresh();
    }
    /**
     * Inspect the query, automatically filling in selection sets for non-leaf
     * fields which do not yet have them.
     *
     * @public
     */

  }, {
    key: "autoCompleteLeafs",
    value: function autoCompleteLeafs() {
      var _fillLeafs = (0, _fillLeafs2.fillLeafs)(this.state.schema, this.state.query, this.props.getDefaultFieldNames),
          insertions = _fillLeafs.insertions,
          result = _fillLeafs.result;

      if (insertions && insertions.length > 0) {
        var editor = this.getQueryEditor();
        editor.operation(function () {
          var cursor = editor.getCursor();
          var cursorIndex = editor.indexFromPos(cursor);
          editor.setValue(result);
          var added = 0;
          var markers = insertions.map(function (_ref) {
            var index = _ref.index,
                string = _ref.string;
            return editor.markText(editor.posFromIndex(index + added), editor.posFromIndex(index + (added += string.length)), {
              className: 'autoInsertedLeaf',
              clearOnEnter: true,
              title: 'Automatically added leaf fields'
            });
          });
          setTimeout(function () {
            return markers.forEach(function (marker) {
              return marker.clear();
            });
          }, 7000);
          var newCursorIndex = cursorIndex;
          insertions.forEach(function (_ref2) {
            var index = _ref2.index,
                string = _ref2.string;

            if (index < cursorIndex) {
              newCursorIndex += string.length;
            }
          });
          editor.setCursor(editor.posFromIndex(newCursorIndex));
        });
      }

      return result;
    } // Private methods

  }, {
    key: "_fetchSchema",
    value: function _fetchSchema() {
      var _this4 = this;

      var fetcher = this.props.fetcher;
      var fetch = observableToPromise(fetcher({
        query: _introspectionQueries.introspectionQuery,
        operationName: _introspectionQueries.introspectionQueryName
      }));

      if (!isPromise(fetch)) {
        this.setState({
          response: 'Fetcher did not return a Promise for introspection.'
        });
        return;
      }

      fetch.then(function (result) {
        if (result.data) {
          return result;
        } // Try the stock introspection query first, falling back on the
        // sans-subscriptions query for services which do not yet support it.


        var fetch2 = observableToPromise(fetcher({
          query: _introspectionQueries.introspectionQuerySansSubscriptions,
          operationName: _introspectionQueries.introspectionQueryName
        }));

        if (!isPromise(fetch)) {
          throw new Error('Fetcher did not return a Promise for introspection.');
        }

        return fetch2;
      }).then(function (result) {
        // If a schema was provided while this fetch was underway, then
        // satisfy the race condition by respecting the already
        // provided schema.
        if (_this4.state.schema !== undefined) {
          return;
        }

        if (result && result.data) {
          var schema = (0, _graphql.buildClientSchema)(result.data);
          var queryFacts = (0, _getQueryFacts.default)(schema, _this4.state.query);

          _this4.setState(_objectSpread({
            schema: schema
          }, queryFacts));
        } else {
          var responseString = typeof result === 'string' ? result : GraphiQL.formatResult(result);

          _this4.setState({
            // Set schema to `null` to explicitly indicate that no schema exists.
            schema: null,
            response: responseString
          });
        }
      }).catch(function (error) {
        _this4.setState({
          schema: null,
          response: error ? GraphiQL.formatError(error) : null
        });
      });
    }
  }, {
    key: "_fetchQuery",
    value: function _fetchQuery(query, variables, operationName, cb) {
      var _this5 = this;

      var fetcher = this.props.fetcher;
      var fetch = fetcher({
        query: query,
        variables: null,
        operationName: operationName
      });

      if (isPromise(fetch)) {
        // If fetcher returned a Promise, then call the callback when the promise
        // resolves, otherwise handle the error.
        fetch.then(cb).catch(function (error) {
          _this5.setState({
            isWaitingForResponse: false,
            response: error ? GraphiQL.formatError(error) : null
          });
        });
      } else if (isObservable(fetch)) {
        // If the fetcher returned an Observable, then subscribe to it, calling
        // the callback on each next value, and handling both errors and the
        // completion of the Observable. Returns a Subscription object.
        var subscription = fetch.subscribe({
          next: cb,
          error: function error(_error) {
            _this5.setState({
              isWaitingForResponse: false,
              response: _error ? GraphiQL.formatError(_error) : null,
              subscription: null
            });
          },
          complete: function complete() {
            _this5.setState({
              isWaitingForResponse: false,
              subscription: null
            });
          }
        });
        return subscription;
      } else {
        throw new Error('Fetcher did not return Promise or Observable.');
      }
    }
  }, {
    key: "_runQueryAtCursor",
    value: function _runQueryAtCursor() {
      if (this.state.subscription) {
        this.handleStopQuery();
        return;
      }

      var operationName;
      var operations = this.state.operations;

      if (operations) {
        var editor = this.getQueryEditor();

        if (editor.hasFocus()) {
          var cursor = editor.getCursor();
          var cursorIndex = editor.indexFromPos(cursor); // Loop through all operations to see if one contains the cursor.

          for (var i = 0; i < operations.length; i++) {
            var operation = operations[i];

            if (operation.loc.start <= cursorIndex && operation.loc.end >= cursorIndex) {
              operationName = operation.name && operation.name.value;
              break;
            }
          }
        }
      }

      this.handleRunQuery(operationName);
    }
  }, {
    key: "_didClickDragBar",
    value: function _didClickDragBar(event) {
      // Only for primary unmodified clicks
      if (event.button !== 0 || event.ctrlKey) {
        return false;
      }

      var target = event.target; // We use codemirror's gutter as the drag bar.

      if (target.className.indexOf('CodeMirror-gutter') !== 0) {
        return false;
      } // Specifically the result window's drag bar.


      var resultWindow = _reactDom.default.findDOMNode(this.resultComponent);

      while (target) {
        if (target === resultWindow) {
          return true;
        }

        target = target.parentNode;
      }

      return false;
    }
  }]);

  return GraphiQL;
}(_react.default.Component); // Configure the UI by providing this Component as a child of GraphiQL.


exports.GraphiQL = GraphiQL;

_defineProperty(GraphiQL, "propTypes", {
  fetcher: _propTypes.default.func.isRequired,
  schema: _propTypes.default.instanceOf(_graphql.GraphQLSchema),
  query: _propTypes.default.string,
  jsonpath: _propTypes.default.string,
  operationName: _propTypes.default.string,
  response: _propTypes.default.string,
  storage: _propTypes.default.shape({
    getItem: _propTypes.default.func,
    setItem: _propTypes.default.func,
    removeItem: _propTypes.default.func
  }),
  defaultQuery: _propTypes.default.string,
  defaultVariableEditorOpen: _propTypes.default.bool,
  onCopyQuery: _propTypes.default.func,
  onEditQuery: _propTypes.default.func,
  onEditJsonpath: _propTypes.default.func,
  onEditOperationName: _propTypes.default.func,
  onToggleDocs: _propTypes.default.func,
  getDefaultFieldNames: _propTypes.default.func,
  editorTheme: _propTypes.default.string,
  onToggleHistory: _propTypes.default.func,
  ResultsTooltip: _propTypes.default.any,
  readOnly: _propTypes.default.bool,
  docExplorerOpen: _propTypes.default.bool
});

GraphiQL.Logo = function GraphiQLLogo(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, props.children || /*#__PURE__*/_react.default.createElement("span", null, 'Graph', /*#__PURE__*/_react.default.createElement("em", null, 'i'), 'QL'));
}; // Configure the UI by providing this Component as a child of GraphiQL.


GraphiQL.Toolbar = function GraphiQLToolbar(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar"
  }, props.children);
}; // Export main windows/panes to be used separately if desired.


GraphiQL.QueryEditor = _QueryEditor.QueryEditor;
GraphiQL.VariableEditor = _VariableEditor.VariableEditor;
GraphiQL.ResultViewer = _ResultViewer.ResultViewer; // Add a button to the Toolbar.

GraphiQL.Button = _ToolbarButton.ToolbarButton;
GraphiQL.ToolbarButton = _ToolbarButton.ToolbarButton; // Don't break existing API.
// Add a group of buttons to the Toolbar

GraphiQL.Group = _ToolbarGroup.ToolbarGroup; // Add a menu of items to the Toolbar.

GraphiQL.Menu = _ToolbarMenu.ToolbarMenu;
GraphiQL.MenuItem = _ToolbarMenu.ToolbarMenuItem; // Add a select-option input to the Toolbar.

GraphiQL.Select = _ToolbarSelect.ToolbarSelect;
GraphiQL.SelectOption = _ToolbarSelect.ToolbarSelectOption; // Configure the UI by providing this Component as a child of GraphiQL.

GraphiQL.Footer = function GraphiQLFooter(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, props.children);
};

GraphiQL.formatResult = function (result) {
  return JSON.stringify(result, null, 2);
};

var formatSingleError = function formatSingleError(error) {
  return _objectSpread(_objectSpread({}, error), {}, {
    // Raise these details even if they're non-enumerable
    message: error.message,
    stack: error.stack
  });
};

GraphiQL.formatError = function (rawError) {
  var result = Array.isArray(rawError) ? rawError.map(formatSingleError) : formatSingleError(rawError);
  return JSON.stringify(result, null, 2);
};

var defaultQuery = "# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a \"{\" character. Lines that starts\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: \"value\") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)\n#\n#     Merge Query:  Shift-Ctrl-M (or press the merge button above)\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n\n"; // Duck-type promise detection.

function isPromise(value) {
  return _typeof(value) === 'object' && typeof value.then === 'function';
} // Duck-type Observable.take(1).toPromise()


function observableToPromise(observable) {
  if (!isObservable(observable)) {
    return observable;
  }

  return new Promise(function (resolve, reject) {
    var subscription = observable.subscribe(function (v) {
      resolve(v);
      subscription.unsubscribe();
    }, reject, function () {
      reject(new Error('no value resolved'));
    });
  });
} // Duck-type observable detection.


function isObservable(value) {
  return _typeof(value) === 'object' && typeof value.subscribe === 'function';
}