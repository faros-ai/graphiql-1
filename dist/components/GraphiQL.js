"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphiQL = void 0;
var react_1 = __importDefault(require("react"));
var graphql_1 = require("graphql");
var copy_to_clipboard_1 = __importDefault(require("copy-to-clipboard"));
var jsonata_1 = __importDefault(require("jsonata"));
var graphql_language_service_utils_1 = require("graphql-language-service-utils");
var ExecuteButton_1 = require("./ExecuteButton");
var ImagePreview_1 = require("./ImagePreview");
var ToolbarButton_1 = require("./ToolbarButton");
var ToolbarGroup_1 = require("./ToolbarGroup");
var ToolbarMenu_1 = require("./ToolbarMenu");
var QueryEditor_1 = require("./QueryEditor");
var VariableEditor_1 = require("./VariableEditor");
var JsonataEditor_1 = require("./JsonataEditor");
var HeaderEditor_1 = require("./HeaderEditor");
var ResultViewer_1 = require("./ResultViewer");
var DocExplorer_1 = require("./DocExplorer");
var QueryHistory_1 = require("./QueryHistory");
var CodeMirrorSizer_1 = __importDefault(require("../utility/CodeMirrorSizer"));
var StorageAPI_1 = __importDefault(require("../utility/StorageAPI"));
var getQueryFacts_1 = __importDefault(require("../utility/getQueryFacts"));
var getSelectedOperationName_1 = __importDefault(require("../utility/getSelectedOperationName"));
var debounce_1 = __importDefault(require("../utility/debounce"));
var find_1 = __importDefault(require("../utility/find"));
var fillLeafs_1 = require("../utility/fillLeafs");
var elementPosition_1 = require("../utility/elementPosition");
var mergeAst_1 = __importDefault(require("../utility/mergeAst"));
var introspectionQueries_1 = require("../utility/introspectionQueries");
var merge_1 = require("dset/merge");
var DEFAULT_DOC_EXPLORER_WIDTH = 350;
var majorVersion = parseInt(react_1.default.version.slice(0, 2), 10);
if (majorVersion < 16) {
    throw Error([
        'GraphiQL 0.18.0 and after is not compatible with React 15 or below.',
        'If you are using a CDN source (jsdelivr, unpkg, etc), follow this example:',
        'https://github.com/graphql/graphiql/blob/master/examples/graphiql-cdn/index.html#L49',
    ].join('\n'));
}
var GraphiQL = (function (_super) {
    __extends(GraphiQL, _super);
    function GraphiQL(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this._editorQueryID = 0;
        _this.safeSetState = function (nextState, callback) {
            _this.componentIsMounted && _this.setState(nextState, callback);
        };
        _this.handleClickReference = function (reference) {
            _this.setState({ docExplorerOpen: true }, function () {
                if (_this.docExplorerComponent) {
                    _this.docExplorerComponent.showDocForReference(reference);
                }
            });
            _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));
        };
        _this.handleRunQuery = function (selectedOperationName) { return __awaiter(_this, void 0, void 0, function () {
            var queryID, editedQuery, variables, headers, shouldPersistHeaders, operationName, fullResponse_1, subscription, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._editorQueryID++;
                        queryID = this._editorQueryID;
                        editedQuery = this.autoCompleteLeafs() || this.state.query;
                        variables = this.state.variables;
                        headers = this.state.headers;
                        shouldPersistHeaders = this.state.shouldPersistHeaders;
                        operationName = this.state.operationName;
                        if (selectedOperationName && selectedOperationName !== operationName) {
                            operationName = selectedOperationName;
                            this.handleEditOperationName(operationName);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.setState({
                            isWaitingForResponse: true,
                            response: undefined,
                            operationName: operationName,
                        });
                        this._storage.set('operationName', operationName);
                        if (this._queryHistory) {
                            this._queryHistory.updateHistory(editedQuery, variables, headers, operationName);
                        }
                        fullResponse_1 = { data: {} };
                        return [4, this._fetchQuery(editedQuery, variables, headers, operationName, shouldPersistHeaders, function (result) {
                                var e_1, _a;
                                if (queryID === _this._editorQueryID) {
                                    var maybeMultipart = Array.isArray(result) ? result : false;
                                    if (!maybeMultipart &&
                                        typeof result !== 'string' &&
                                        result !== null &&
                                        'hasNext' in result) {
                                        maybeMultipart = [result];
                                    }
                                    if (maybeMultipart) {
                                        var payload = { data: fullResponse_1.data };
                                        var maybeErrors = __spreadArray(__spreadArray([], __read(((fullResponse_1 === null || fullResponse_1 === void 0 ? void 0 : fullResponse_1.errors) || []))), __read(maybeMultipart
                                            .map(function (i) { return i.errors; })
                                            .flat()
                                            .filter(Boolean)));
                                        if (maybeErrors.length) {
                                            payload.errors = maybeErrors;
                                        }
                                        try {
                                            for (var maybeMultipart_1 = __values(maybeMultipart), maybeMultipart_1_1 = maybeMultipart_1.next(); !maybeMultipart_1_1.done; maybeMultipart_1_1 = maybeMultipart_1.next()) {
                                                var part = maybeMultipart_1_1.value;
                                                var path = part.path, data = part.data, _errors = part.errors, rest = __rest(part, ["path", "data", "errors"]);
                                                if (path) {
                                                    if (!data) {
                                                        throw new Error("Expected part to contain a data property, but got " + part);
                                                    }
                                                    merge_1.dset(payload.data, path, data);
                                                }
                                                else if (data) {
                                                    payload.data = part.data;
                                                }
                                                fullResponse_1 = __assign(__assign({}, payload), rest);
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (maybeMultipart_1_1 && !maybeMultipart_1_1.done && (_a = maybeMultipart_1.return)) _a.call(maybeMultipart_1);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        _this.setState({
                                            isWaitingForResponse: false,
                                            response: GraphiQL.formatResult(fullResponse_1),
                                        });
                                    }
                                    else {
                                        _this.setState({
                                            isWaitingForResponse: false,
                                            response: GraphiQL.formatResult(result),
                                        });
                                    }
                                }
                            })];
                    case 2:
                        subscription = _a.sent();
                        this.setState({ subscription: subscription });
                        return [3, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({
                            isWaitingForResponse: false,
                            response: error_1.message,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        }); };
        _this.handleStopQuery = function () {
            var subscription = _this.state.subscription;
            _this.setState({
                isWaitingForResponse: false,
                subscription: null,
            });
            if (subscription) {
                subscription.unsubscribe();
            }
        };
        _this.handlePrettifyQuery = function () {
            var _a, _b, _c;
            var editor = _this.getQueryEditor();
            var editorContent = (_a = editor === null || editor === void 0 ? void 0 : editor.getValue()) !== null && _a !== void 0 ? _a : '';
            var prettifiedEditorContent = graphql_1.print(graphql_1.parse(editorContent, { experimentalFragmentVariables: true }));
            if (prettifiedEditorContent !== editorContent) {
                editor === null || editor === void 0 ? void 0 : editor.setValue(prettifiedEditorContent);
            }
            var variableEditor = _this.getVariableEditor();
            var variableEditorContent = (_b = variableEditor === null || variableEditor === void 0 ? void 0 : variableEditor.getValue()) !== null && _b !== void 0 ? _b : '';
            try {
                var prettifiedVariableEditorContent = JSON.stringify(JSON.parse(variableEditorContent), null, 2);
                if (prettifiedVariableEditorContent !== variableEditorContent) {
                    variableEditor === null || variableEditor === void 0 ? void 0 : variableEditor.setValue(prettifiedVariableEditorContent);
                }
            }
            catch (_d) {
            }
            var headerEditor = _this.getHeaderEditor();
            var headerEditorContent = (_c = headerEditor === null || headerEditor === void 0 ? void 0 : headerEditor.getValue()) !== null && _c !== void 0 ? _c : '';
            try {
                var prettifiedHeaderEditorContent = JSON.stringify(JSON.parse(headerEditorContent), null, 2);
                if (prettifiedHeaderEditorContent !== headerEditorContent) {
                    headerEditor === null || headerEditor === void 0 ? void 0 : headerEditor.setValue(prettifiedHeaderEditorContent);
                }
            }
            catch (_e) {
            }
        };
        _this.handleMergeQuery = function () {
            var editor = _this.getQueryEditor();
            var query = editor.getValue();
            if (!query) {
                return;
            }
            var ast = _this.state.documentAST;
            editor.setValue(graphql_1.print(mergeAst_1.default(ast, _this.state.schema)));
        };
        _this.handleEditQuery = debounce_1.default(100, function (value) {
            var queryFacts = _this._updateQueryFacts(value, _this.state.operationName, _this.state.operations, _this.state.schema);
            _this.setState(__assign({ query: value }, queryFacts));
            _this._storage.set('query', value);
            if (_this.props.onEditQuery) {
                return _this.props.onEditQuery(value, queryFacts === null || queryFacts === void 0 ? void 0 : queryFacts.documentAST);
            }
        });
        _this.handleCopyQuery = function () {
            var editor = _this.getQueryEditor();
            var query = editor && editor.getValue();
            if (!query) {
                return;
            }
            copy_to_clipboard_1.default(query);
            if (_this.props.onCopyQuery) {
                return _this.props.onCopyQuery(query);
            }
        };
        _this._updateQueryFacts = function (query, operationName, prevOperations, schema) {
            var queryFacts = getQueryFacts_1.default(schema, query);
            if (queryFacts) {
                var updatedOperationName = getSelectedOperationName_1.default(prevOperations, operationName, queryFacts.operations);
                var onEditOperationName = _this.props.onEditOperationName;
                if (onEditOperationName &&
                    updatedOperationName &&
                    operationName !== updatedOperationName) {
                    onEditOperationName(updatedOperationName);
                }
                return __assign({ operationName: updatedOperationName }, queryFacts);
            }
        };
        _this.handleEditVariables = function (value) {
            _this.setState({ variables: value });
            debounce_1.default(500, function () { return _this._storage.set('variables', value); })();
            if (_this.props.onEditVariables) {
                _this.props.onEditVariables(value);
            }
        };
        _this.handleEditJsonata = function (value) {
            if (value) {
                try {
                    jsonata_1.default(value);
                }
                catch (err) {
                    console.warn(err);
                    return;
                }
            }
            _this.setState({ jsonata: value });
            debounce_1.default(500, function () { return _this._storage.set('jsonata', value); })();
            if (_this.props.onEditJsonata) {
                _this.props.onEditJsonata(value);
            }
        };
        _this.handleEditHeaders = function (value) {
            _this.setState({ headers: value });
            _this.props.shouldPersistHeaders &&
                debounce_1.default(500, function () { return _this._storage.set('headers', value); })();
            if (_this.props.onEditHeaders) {
                _this.props.onEditHeaders(value);
            }
        };
        _this.handleEditOperationName = function (operationName) {
            var onEditOperationName = _this.props.onEditOperationName;
            if (onEditOperationName) {
                onEditOperationName(operationName);
            }
        };
        _this.handleHintInformationRender = function (elem) {
            elem.addEventListener('click', _this._onClickHintInformation);
            var onRemoveFn;
            elem.addEventListener('DOMNodeRemoved', (onRemoveFn = function () {
                elem.removeEventListener('DOMNodeRemoved', onRemoveFn);
                elem.removeEventListener('click', _this._onClickHintInformation);
            }));
        };
        _this.handleEditorRunQuery = function () {
            _this._runQueryAtCursor();
        };
        _this._onClickHintInformation = function (event) {
            if ((event === null || event === void 0 ? void 0 : event.currentTarget) &&
                'className' in event.currentTarget &&
                event.currentTarget.className === 'typeName') {
                var typeName = event.currentTarget.innerHTML;
                var schema = _this.state.schema;
                if (schema) {
                    var type_1 = schema.getType(typeName);
                    if (type_1) {
                        _this.setState({ docExplorerOpen: true }, function () {
                            if (_this.docExplorerComponent) {
                                _this.docExplorerComponent.showDoc(type_1);
                            }
                        });
                        debounce_1.default(500, function () {
                            return _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));
                        })();
                    }
                }
            }
        };
        _this.handleToggleDocs = function () {
            if (typeof _this.props.onToggleDocs === 'function') {
                _this.props.onToggleDocs(!_this.state.docExplorerOpen);
            }
            _this._storage.set('docExplorerOpen', JSON.stringify(!_this.state.docExplorerOpen));
            _this.setState({ docExplorerOpen: !_this.state.docExplorerOpen });
        };
        _this.handleToggleHistory = function () {
            if (typeof _this.props.onToggleHistory === 'function') {
                _this.props.onToggleHistory(!_this.state.historyPaneOpen);
            }
            _this._storage.set('historyPaneOpen', JSON.stringify(!_this.state.historyPaneOpen));
            _this.setState({ historyPaneOpen: !_this.state.historyPaneOpen });
        };
        _this.handleSelectHistoryQuery = function (query, variables, jsonata, headers, operationName) {
            if (query) {
                _this.handleEditQuery(query);
            }
            if (variables) {
                _this.handleEditVariables(variables);
            }
            if (jsonata) {
                _this.handleEditJsonata(jsonata);
            }
            if (headers) {
                _this.handleEditHeaders(headers);
            }
            if (operationName) {
                _this.handleEditOperationName(operationName);
            }
        };
        _this.handleResizeStart = function (downEvent) {
            if (!_this._didClickDragBar(downEvent)) {
                return;
            }
            downEvent.preventDefault();
            var offset = downEvent.clientX - elementPosition_1.getLeft(downEvent.target);
            var onMouseMove = function (moveEvent) {
                if (moveEvent.buttons === 0) {
                    return onMouseUp();
                }
                var editorBar = _this.editorBarComponent;
                var leftSize = moveEvent.clientX - elementPosition_1.getLeft(editorBar) - offset;
                var rightSize = editorBar.clientWidth - leftSize;
                _this.setState({ editorFlex: leftSize / rightSize });
                debounce_1.default(500, function () {
                    return _this._storage.set('editorFlex', JSON.stringify(_this.state.editorFlex));
                })();
            };
            var onMouseUp = function () {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
                onMouseMove = null;
                onMouseUp = null;
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
        _this.handleResetResize = function () {
            _this.setState({ editorFlex: 1 });
            _this._storage.set('editorFlex', JSON.stringify(_this.state.editorFlex));
        };
        _this.handleDocsResizeStart = function (downEvent) {
            downEvent.preventDefault();
            var hadWidth = _this.state.docExplorerWidth;
            var offset = downEvent.clientX - elementPosition_1.getLeft(downEvent.target);
            var onMouseMove = function (moveEvent) {
                if (moveEvent.buttons === 0) {
                    return onMouseUp();
                }
                var app = _this.graphiqlContainer;
                var cursorPos = moveEvent.clientX - elementPosition_1.getLeft(app) - offset;
                var docsSize = app.clientWidth - cursorPos;
                if (docsSize < 100) {
                    if (typeof _this.props.onToggleDocs === 'function') {
                        _this.props.onToggleDocs(!_this.state.docExplorerOpen);
                    }
                    _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));
                    _this.setState({ docExplorerOpen: false });
                }
                else {
                    _this.setState({
                        docExplorerOpen: true,
                        docExplorerWidth: Math.min(docsSize, 650),
                    });
                    debounce_1.default(500, function () {
                        return _this._storage.set('docExplorerWidth', JSON.stringify(_this.state.docExplorerWidth));
                    })();
                }
                _this._storage.set('docExplorerOpen', JSON.stringify(_this.state.docExplorerOpen));
            };
            var onMouseUp = function () {
                if (!_this.state.docExplorerOpen) {
                    _this.setState({ docExplorerWidth: hadWidth });
                    debounce_1.default(500, function () {
                        return _this._storage.set('docExplorerWidth', JSON.stringify(_this.state.docExplorerWidth));
                    })();
                }
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
                onMouseMove = null;
                onMouseUp = null;
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
        _this.handleDocsResetResize = function () {
            _this.setState({
                docExplorerWidth: DEFAULT_DOC_EXPLORER_WIDTH,
            });
            debounce_1.default(500, function () {
                return _this._storage.set('docExplorerWidth', JSON.stringify(_this.state.docExplorerWidth));
            })();
        };
        _this.handleTabClickPropogation = function (downEvent) {
            downEvent.preventDefault();
            downEvent.stopPropagation();
        };
        _this.handleOpenHeaderEditorTab = function (_clickEvent) {
            _this.setState({
                headerEditorActive: true,
                variableEditorActive: false,
                jsonataEditorActive: false,
                secondaryEditorOpen: true,
            });
        };
        _this.handleOpenVariableEditorTab = function (_clickEvent) {
            _this.setState({
                headerEditorActive: false,
                variableEditorActive: true,
                jsonataEditorActive: false,
                secondaryEditorOpen: true,
            });
        };
        _this.handleOpenJsonataEditorTab = function (_clickEvent) {
            _this.setState({
                headerEditorActive: false,
                variableEditorActive: false,
                jsonataEditorActive: true,
                secondaryEditorOpen: true,
            });
        };
        _this.handleSecondaryEditorResizeStart = function (downEvent) {
            downEvent.preventDefault();
            var didMove = false;
            var wasOpen = _this.state.secondaryEditorOpen;
            var hadHeight = _this.state.secondaryEditorHeight;
            var offset = downEvent.clientY - elementPosition_1.getTop(downEvent.target);
            var onMouseMove = function (moveEvent) {
                if (moveEvent.buttons === 0) {
                    return onMouseUp();
                }
                didMove = true;
                var editorBar = _this.editorBarComponent;
                var topSize = moveEvent.clientY - elementPosition_1.getTop(editorBar) - offset;
                var bottomSize = editorBar.clientHeight - topSize;
                if (bottomSize < 60) {
                    _this.setState({
                        secondaryEditorOpen: false,
                        secondaryEditorHeight: hadHeight,
                    });
                }
                else {
                    _this.setState({
                        secondaryEditorOpen: true,
                        secondaryEditorHeight: bottomSize,
                    });
                }
                debounce_1.default(500, function () {
                    return _this._storage.set('secondaryEditorHeight', JSON.stringify(_this.state.secondaryEditorHeight));
                })();
            };
            var onMouseUp = function () {
                if (!didMove) {
                    _this.setState({ secondaryEditorOpen: !wasOpen });
                }
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
                onMouseMove = null;
                onMouseUp = null;
            };
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };
        if (typeof props.fetcher !== 'function') {
            throw new TypeError('GraphiQL requires a fetcher function.');
        }
        _this._storage = new StorageAPI_1.default(props.storage);
        _this.componentIsMounted = false;
        var query = props.query !== undefined
            ? props.query
            : _this._storage.get('query')
                ? _this._storage.get('query')
                : props.defaultQuery !== undefined
                    ? props.defaultQuery
                    : defaultQuery;
        var queryFacts = getQueryFacts_1.default(props.schema, query);
        var variables = props.variables !== undefined
            ? props.variables
            : _this._storage.get('variables');
        var jsonata = props.jsonata !== undefined
            ? props.jsonata
            : _this._storage.get('jsonata');
        var headers = props.headers !== undefined
            ? props.headers
            : _this._storage.get('headers');
        var operationName = props.operationName !== undefined
            ? props.operationName
            : getSelectedOperationName_1.default(undefined, _this._storage.get('operationName'), queryFacts && queryFacts.operations);
        var docExplorerOpen = props.docExplorerOpen || false;
        if (_this._storage.get('docExplorerOpen')) {
            docExplorerOpen = _this._storage.get('docExplorerOpen') === 'true';
        }
        var secondaryEditorOpen;
        if (props.defaultVariableEditorOpen !== undefined) {
            secondaryEditorOpen = props.defaultVariableEditorOpen;
        }
        else if (props.defaultSecondaryEditorOpen !== undefined) {
            secondaryEditorOpen = props.defaultSecondaryEditorOpen;
        }
        else {
            secondaryEditorOpen = Boolean(variables || jsonata || headers);
        }
        var headerEditorEnabled = (_a = props.headerEditorEnabled) !== null && _a !== void 0 ? _a : false;
        var shouldPersistHeaders = (_b = props.shouldPersistHeaders) !== null && _b !== void 0 ? _b : false;
        _this.state = __assign({ schema: props.schema, query: query, variables: variables, jsonata: jsonata, headers: headers, operationName: operationName,
            docExplorerOpen: docExplorerOpen, response: props.response, editorFlex: Number(_this._storage.get('editorFlex')) || 1, secondaryEditorOpen: secondaryEditorOpen, secondaryEditorHeight: Number(_this._storage.get('secondaryEditorHeight')) || 200, variableEditorActive: _this._storage.get('variableEditorActive') === 'true' ||
                props.headerEditorEnabled
                ? _this._storage.get('headerEditorActive') !== 'true'
                : true, jsonataEditorActive: _this._storage.get('jsonataEditorActive') === 'true', headerEditorActive: _this._storage.get('headerEditorActive') === 'true', headerEditorEnabled: headerEditorEnabled,
            shouldPersistHeaders: shouldPersistHeaders, historyPaneOpen: _this._storage.get('historyPaneOpen') === 'true' || false, docExplorerWidth: Number(_this._storage.get('docExplorerWidth')) ||
                DEFAULT_DOC_EXPLORER_WIDTH, isWaitingForResponse: false, subscription: null }, queryFacts);
        return _this;
    }
    GraphiQL.formatResult = function (result) {
        return JSON.stringify(result, null, 2);
    };
    GraphiQL.formatError = function (rawError) {
        var result = Array.isArray(rawError)
            ? rawError.map(formatSingleError)
            : formatSingleError(rawError);
        return JSON.stringify(result, null, 2);
    };
    GraphiQL.prototype.componentDidMount = function () {
        this.componentIsMounted = true;
        if (this.state.schema === undefined) {
            this.fetchSchema();
        }
        this.codeMirrorSizer = new CodeMirrorSizer_1.default();
        global.g = this;
    };
    GraphiQL.prototype.UNSAFE_componentWillMount = function () {
        this.componentIsMounted = false;
    };
    GraphiQL.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _this = this;
        var nextSchema = this.state.schema;
        var nextQuery = this.state.query;
        var nextVariables = this.state.variables;
        var nextJsonata = this.state.jsonata;
        var nextHeaders = this.state.headers;
        var nextOperationName = this.state.operationName;
        var nextResponse = this.state.response;
        if (nextProps.schema !== undefined) {
            nextSchema = nextProps.schema;
        }
        if (nextProps.query !== undefined && this.props.query !== nextProps.query) {
            nextQuery = nextProps.query;
        }
        if (nextProps.variables !== undefined &&
            this.props.variables !== nextProps.variables) {
            nextVariables = nextProps.variables;
        }
        if (nextProps.jsonata !== undefined &&
            this.props.jsonata !== nextProps.jsonata) {
            nextJsonata = nextProps.jsonata;
        }
        if (nextProps.headers !== undefined &&
            this.props.headers !== nextProps.headers) {
            nextHeaders = nextProps.headers;
        }
        if (nextProps.operationName !== undefined) {
            nextOperationName = nextProps.operationName;
        }
        if (nextProps.response !== undefined) {
            nextResponse = nextProps.response;
        }
        if (nextQuery &&
            nextSchema &&
            (nextSchema !== this.state.schema ||
                nextQuery !== this.state.query ||
                nextOperationName !== this.state.operationName)) {
            var updatedQueryAttributes = this._updateQueryFacts(nextQuery, nextOperationName, this.state.operations, nextSchema);
            if (updatedQueryAttributes !== undefined) {
                nextOperationName = updatedQueryAttributes.operationName;
                this.setState(updatedQueryAttributes);
            }
        }
        if (nextProps.schema === undefined &&
            nextProps.fetcher !== this.props.fetcher) {
            nextSchema = undefined;
        }
        this._storage.set('operationName', nextOperationName);
        this.setState({
            schema: nextSchema,
            query: nextQuery,
            variables: nextVariables,
            jsonata: nextJsonata,
            headers: nextHeaders,
            operationName: nextOperationName,
            response: nextResponse,
        }, function () {
            if (_this.state.schema === undefined) {
                if (_this.docExplorerComponent) {
                    _this.docExplorerComponent.reset();
                }
                _this.fetchSchema();
            }
        });
    };
    GraphiQL.prototype.componentDidUpdate = function () {
        this.codeMirrorSizer.updateSizes([
            this.queryEditorComponent,
            this.variableEditorComponent,
            this.jsonataEditorComponent,
            this.headerEditorComponent,
            this.resultComponent,
        ]);
    };
    GraphiQL.prototype.render = function () {
        var _this = this;
        var _a;
        var children = react_1.default.Children.toArray(this.props.children);
        var logo = find_1.default(children, function (child) {
            return isChildComponentType(child, GraphiQL.Logo);
        }) || react_1.default.createElement(GraphiQL.Logo, null);
        var toolbar = find_1.default(children, function (child) {
            return isChildComponentType(child, GraphiQL.Toolbar);
        }) || (react_1.default.createElement(GraphiQL.Toolbar, null,
            react_1.default.createElement(ToolbarButton_1.ToolbarButton, { onClick: this.handlePrettifyQuery, title: "Prettify Query (Shift-Ctrl-P)", label: "Prettify" }),
            react_1.default.createElement(ToolbarButton_1.ToolbarButton, { onClick: this.handleMergeQuery, title: "Merge Query (Shift-Ctrl-M)", label: "Merge" }),
            react_1.default.createElement(ToolbarButton_1.ToolbarButton, { onClick: this.handleCopyQuery, title: "Copy Query (Shift-Ctrl-C)", label: "Copy" }),
            react_1.default.createElement(ToolbarButton_1.ToolbarButton, { onClick: this.handleToggleHistory, title: "Show History", label: "History" }),
            ((_a = this.props.toolbar) === null || _a === void 0 ? void 0 : _a.additionalContent)
                ? this.props.toolbar.additionalContent
                : null));
        var footer = find_1.default(children, function (child) {
            return isChildComponentType(child, GraphiQL.Footer);
        });
        var queryWrapStyle = {
            WebkitFlex: this.state.editorFlex,
            flex: this.state.editorFlex,
        };
        var docWrapStyle = {
            display: 'block',
            width: this.state.docExplorerWidth,
        };
        var docExplorerWrapClasses = 'docExplorerWrap' +
            (this.state.docExplorerWidth < 200 ? ' doc-explorer-narrow' : '');
        var historyPaneStyle = {
            display: this.state.historyPaneOpen ? 'block' : 'none',
            width: '230px',
            zIndex: 7,
        };
        var secondaryEditorOpen = this.state.secondaryEditorOpen;
        var secondaryEditorStyle = {
            height: secondaryEditorOpen
                ? this.state.secondaryEditorHeight
                : undefined,
        };
        return (react_1.default.createElement("div", { ref: function (n) {
                _this.graphiqlContainer = n;
            }, className: "graphiql-container" },
            this.state.historyPaneOpen && (react_1.default.createElement("div", { className: "historyPaneWrap", style: historyPaneStyle },
                react_1.default.createElement(QueryHistory_1.QueryHistory, { ref: function (node) {
                        _this._queryHistory = node;
                    }, operationName: this.state.operationName, query: this.state.query, variables: this.state.variables, jsonata: this.state.jsonata, onSelectQuery: this.handleSelectHistoryQuery, storage: this._storage, queryID: this._editorQueryID },
                    react_1.default.createElement("button", { className: "docExplorerHide", onClick: this.handleToggleHistory, "aria-label": "Close History" }, '\u2715')))),
            react_1.default.createElement("div", { className: "editorWrap" },
                react_1.default.createElement("div", { className: "topBarWrap" },
                    react_1.default.createElement("div", { className: "topBar" },
                        logo,
                        react_1.default.createElement(ExecuteButton_1.ExecuteButton, { isRunning: Boolean(this.state.subscription), onRun: this.handleRunQuery, onStop: this.handleStopQuery, operations: this.state.operations }),
                        toolbar),
                    !this.state.docExplorerOpen && (react_1.default.createElement("button", { className: "docExplorerShow", onClick: this.handleToggleDocs, "aria-label": "Open Documentation Explorer" }, 'Docs'))),
                react_1.default.createElement("div", { ref: function (n) {
                        _this.editorBarComponent = n;
                    }, className: "editorBar", onDoubleClick: this.handleResetResize, onMouseDown: this.handleResizeStart },
                    react_1.default.createElement("div", { className: "queryWrap", style: queryWrapStyle },
                        react_1.default.createElement(QueryEditor_1.QueryEditor, { ref: function (n) {
                                _this.queryEditorComponent = n;
                            }, schema: this.state.schema, validationRules: this.props.validationRules, value: this.state.query, onEdit: this.handleEditQuery, onHintInformationRender: this.handleHintInformationRender, onClickReference: this.handleClickReference, onCopyQuery: this.handleCopyQuery, onPrettifyQuery: this.handlePrettifyQuery, onMergeQuery: this.handleMergeQuery, onRunQuery: this.handleEditorRunQuery, editorTheme: this.props.editorTheme, readOnly: this.props.readOnly, externalFragments: this.props.externalFragments }),
                        react_1.default.createElement("section", { className: "variable-editor secondary-editor", style: secondaryEditorStyle, "aria-label": this.state.variableEditorActive
                                ? 'Query Variables'
                                : this.state.jsonataEditorActive
                                    ? 'JSONata'
                                    : 'Request Headers' },
                            react_1.default.createElement("div", { className: "secondary-editor-title variable-editor-title", id: "secondary-editor-title", style: {
                                    cursor: secondaryEditorOpen ? 'row-resize' : 'n-resize',
                                }, onMouseDown: this.handleSecondaryEditorResizeStart },
                                react_1.default.createElement("div", { style: {
                                        cursor: 'pointer',
                                        color: this.state.variableEditorActive ? '#000' : 'gray',
                                        display: 'inline-block',
                                    }, onClick: this.handleOpenVariableEditorTab, onMouseDown: this.handleTabClickPropogation }, 'Query Variables'),
                                react_1.default.createElement("div", { style: {
                                        cursor: 'pointer',
                                        color: this.state.jsonataEditorActive ? '#000' : 'gray',
                                        display: 'inline-block',
                                        marginLeft: '20px',
                                    }, onClick: this.handleOpenJsonataEditorTab, onMouseDown: this.handleTabClickPropogation }, 'JSONata'),
                                this.state.headerEditorEnabled && (react_1.default.createElement("div", { style: {
                                        cursor: 'pointer',
                                        color: this.state.headerEditorActive ? '#000' : 'gray',
                                        display: 'inline-block',
                                        marginLeft: '20px',
                                    }, onClick: this.handleOpenHeaderEditorTab, onMouseDown: this.handleTabClickPropogation }, 'Request Headers'))),
                            react_1.default.createElement(VariableEditor_1.VariableEditor, { ref: function (n) {
                                    _this.variableEditorComponent = n;
                                }, value: this.state.variables, variableToType: this.state.variableToType, onEdit: this.handleEditVariables, onHintInformationRender: this.handleHintInformationRender, onPrettifyQuery: this.handlePrettifyQuery, onMergeQuery: this.handleMergeQuery, onRunQuery: this.handleEditorRunQuery, editorTheme: this.props.editorTheme, readOnly: this.props.readOnly, active: this.state.variableEditorActive }),
                            react_1.default.createElement(JsonataEditor_1.JsonataEditor, { ref: function (n) {
                                    _this.jsonataEditorComponent = n;
                                }, value: this.state.jsonata, onEdit: this.handleEditJsonata, onHintInformationRender: this.handleHintInformationRender, onPrettifyQuery: this.handlePrettifyQuery, onMergeQuery: this.handleMergeQuery, onRunQuery: this.handleEditorRunQuery, editorTheme: this.props.editorTheme, readOnly: this.props.readOnly, active: this.state.jsonataEditorActive }),
                            this.state.headerEditorEnabled && (react_1.default.createElement(HeaderEditor_1.HeaderEditor, { ref: function (n) {
                                    _this.headerEditorComponent = n;
                                }, value: this.state.headers, onEdit: this.handleEditHeaders, onHintInformationRender: this.handleHintInformationRender, onPrettifyQuery: this.handlePrettifyQuery, onMergeQuery: this.handleMergeQuery, onRunQuery: this.handleEditorRunQuery, editorTheme: this.props.editorTheme, readOnly: this.props.readOnly, active: this.state.headerEditorActive })))),
                    react_1.default.createElement("div", { className: "resultWrap" },
                        this.state.isWaitingForResponse && (react_1.default.createElement("div", { className: "spinner-container" },
                            react_1.default.createElement("div", { className: "spinner" }))),
                        react_1.default.createElement(ResultViewer_1.ResultViewer, { registerRef: function (n) {
                                _this.resultViewerElement = n;
                            }, ref: function (c) {
                                _this.resultComponent = c;
                            }, value: this.state.response, jsonata: this.state.jsonata, editorTheme: this.props.editorTheme, ResultsTooltip: this.props.ResultsTooltip, ImagePreview: ImagePreview_1.ImagePreview }),
                        footer))),
            this.state.docExplorerOpen && (react_1.default.createElement("div", { className: docExplorerWrapClasses, style: docWrapStyle },
                react_1.default.createElement("div", { className: "docExplorerResizer", onDoubleClick: this.handleDocsResetResize, onMouseDown: this.handleDocsResizeStart }),
                react_1.default.createElement(DocExplorer_1.DocExplorer, { ref: function (c) {
                        _this.docExplorerComponent = c;
                    }, schema: this.state.schema },
                    react_1.default.createElement("button", { className: "docExplorerHide", onClick: this.handleToggleDocs, "aria-label": "Close Documentation Explorer" }, '\u2715'))))));
    };
    GraphiQL.prototype.getQueryEditor = function () {
        if (this.queryEditorComponent) {
            return this.queryEditorComponent.getCodeMirror();
        }
    };
    GraphiQL.prototype.getVariableEditor = function () {
        if (this.variableEditorComponent) {
            return this.variableEditorComponent.getCodeMirror();
        }
        return null;
    };
    GraphiQL.prototype.getJsonataEditor = function () {
        if (this.jsonataEditorComponent) {
            return this.jsonataEditorComponent.getCodeMirror();
        }
        return null;
    };
    GraphiQL.prototype.getHeaderEditor = function () {
        if (this.headerEditorComponent) {
            return this.headerEditorComponent.getCodeMirror();
        }
        return null;
    };
    GraphiQL.prototype.refresh = function () {
        if (this.queryEditorComponent) {
            this.queryEditorComponent.getCodeMirror().refresh();
        }
        if (this.variableEditorComponent) {
            this.variableEditorComponent.getCodeMirror().refresh();
        }
        if (this.jsonataEditorComponent) {
            this.jsonataEditorComponent.getCodeMirror().refresh();
        }
        if (this.headerEditorComponent) {
            this.headerEditorComponent.getCodeMirror().refresh();
        }
        if (this.resultComponent) {
            this.resultComponent.getCodeMirror().refresh();
        }
    };
    GraphiQL.prototype.autoCompleteLeafs = function () {
        var _a = fillLeafs_1.fillLeafs(this.state.schema, this.state.query, this.props.getDefaultFieldNames), insertions = _a.insertions, result = _a.result;
        if (insertions && insertions.length > 0) {
            var editor_1 = this.getQueryEditor();
            if (editor_1) {
                editor_1.operation(function () {
                    var cursor = editor_1.getCursor();
                    var cursorIndex = editor_1.indexFromPos(cursor);
                    editor_1.setValue(result || '');
                    var added = 0;
                    var markers = insertions.map(function (_a) {
                        var index = _a.index, string = _a.string;
                        return editor_1.markText(editor_1.posFromIndex(index + added), editor_1.posFromIndex(index + (added += string.length)), {
                            className: 'autoInsertedLeaf',
                            clearOnEnter: true,
                            title: 'Automatically added leaf fields',
                        });
                    });
                    setTimeout(function () { return markers.forEach(function (marker) { return marker.clear(); }); }, 7000);
                    var newCursorIndex = cursorIndex;
                    insertions.forEach(function (_a) {
                        var index = _a.index, string = _a.string;
                        if (index < cursorIndex) {
                            newCursorIndex += string.length;
                        }
                    });
                    editor_1.setCursor(editor_1.posFromIndex(newCursorIndex));
                });
            }
        }
        return result;
    };
    GraphiQL.prototype.fetchSchema = function () {
        var _this = this;
        var fetcher = this.props.fetcher;
        var fetcherOpts = {
            shouldPersistHeaders: Boolean(this.props.shouldPersistHeaders),
            documentAST: this.state.documentAST,
        };
        if (this.state.headers && this.state.headers.trim().length > 2) {
            fetcherOpts.headers = JSON.parse(this.state.headers);
        }
        else if (this.props.headers) {
            fetcherOpts.headers = JSON.parse(this.props.headers);
        }
        var fetch = fetcherReturnToPromise(fetcher({
            query: introspectionQueries_1.introspectionQuery,
            operationName: introspectionQueries_1.introspectionQueryName,
        }, fetcherOpts));
        if (!isPromise(fetch)) {
            this.setState({
                response: 'Fetcher did not return a Promise for introspection.',
            });
            return;
        }
        fetch
            .then(function (result) {
            if (typeof result !== 'string' && 'data' in result) {
                return result;
            }
            var fetch2 = fetcherReturnToPromise(fetcher({
                query: introspectionQueries_1.introspectionQuerySansSubscriptions,
                operationName: introspectionQueries_1.introspectionQueryName,
            }, fetcherOpts));
            if (!isPromise(fetch)) {
                throw new Error('Fetcher did not return a Promise for introspection.');
            }
            return fetch2;
        })
            .then(function (result) {
            if (_this.state.schema !== undefined) {
                return;
            }
            if (typeof result !== 'string' && 'data' in result) {
                var schema = graphql_1.buildClientSchema(result.data);
                var queryFacts = getQueryFacts_1.default(schema, _this.state.query);
                _this.safeSetState(__assign({ schema: schema }, queryFacts));
            }
            else {
                var responseString = typeof result === 'string' ? result : GraphiQL.formatResult(result);
                _this.safeSetState({
                    schema: undefined,
                    response: responseString,
                });
            }
        })
            .catch(function (error) {
            _this.safeSetState({
                schema: undefined,
                response: error ? GraphiQL.formatError(error) : undefined,
            });
        });
    };
    GraphiQL.prototype._fetchQuery = function (query, variables, headers, operationName, shouldPersistHeaders, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var fetcher, jsonVariables, jsonHeaders, externalFragments_1, fragmentDependencies, fetch;
            var _this = this;
            return __generator(this, function (_a) {
                fetcher = this.props.fetcher;
                jsonVariables = null;
                jsonHeaders = null;
                try {
                    jsonVariables =
                        variables && variables.trim() !== '' ? JSON.parse(variables) : null;
                }
                catch (error) {
                    throw new Error("Variables are invalid JSON: " + error.message + ".");
                }
                if (typeof jsonVariables !== 'object') {
                    throw new Error('Variables are not a JSON object.');
                }
                try {
                    jsonHeaders =
                        headers && headers.trim() !== '' ? JSON.parse(headers) : null;
                }
                catch (error) {
                    throw new Error("Headers are invalid JSON: " + error.message + ".");
                }
                if (typeof jsonHeaders !== 'object') {
                    throw new Error('Headers are not a JSON object.');
                }
                if (this.props.externalFragments) {
                    externalFragments_1 = new Map();
                    if (Array.isArray(this.props.externalFragments)) {
                        this.props.externalFragments.forEach(function (def) {
                            externalFragments_1.set(def.name.value, def);
                        });
                    }
                    else {
                        graphql_1.visit(graphql_1.parse(this.props.externalFragments, {
                            experimentalFragmentVariables: true,
                        }), {
                            FragmentDefinition: function (def) {
                                externalFragments_1.set(def.name.value, def);
                            },
                        });
                    }
                    fragmentDependencies = graphql_language_service_utils_1.getFragmentDependenciesForAST(this.state.documentAST, externalFragments_1);
                    if (fragmentDependencies.length > 0) {
                        query +=
                            '\n' +
                                fragmentDependencies
                                    .map(function (node) { return graphql_1.print(node); })
                                    .join('\n');
                    }
                }
                fetch = fetcher({
                    query: query,
                    variables: jsonVariables,
                    operationName: operationName,
                }, {
                    headers: jsonHeaders,
                    shouldPersistHeaders: shouldPersistHeaders,
                    documentAST: this.state.documentAST,
                });
                return [2, Promise.resolve(fetch)
                        .then(function (value) {
                        if (isObservable(value)) {
                            var subscription = value.subscribe({
                                next: cb,
                                error: function (error) {
                                    _this.safeSetState({
                                        isWaitingForResponse: false,
                                        response: error ? GraphiQL.formatError(error) : undefined,
                                        subscription: null,
                                    });
                                },
                                complete: function () {
                                    _this.safeSetState({
                                        isWaitingForResponse: false,
                                        subscription: null,
                                    });
                                },
                            });
                            return subscription;
                        }
                        else if (isAsyncIterable(value)) {
                            (function () { return __awaiter(_this, void 0, void 0, function () {
                                var value_1, value_1_1, result, e_2_1, error_2;
                                var e_2, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _b.trys.push([0, 13, , 14]);
                                            _b.label = 1;
                                        case 1:
                                            _b.trys.push([1, 6, 7, 12]);
                                            value_1 = __asyncValues(value);
                                            _b.label = 2;
                                        case 2: return [4, value_1.next()];
                                        case 3:
                                            if (!(value_1_1 = _b.sent(), !value_1_1.done)) return [3, 5];
                                            result = value_1_1.value;
                                            cb(result);
                                            _b.label = 4;
                                        case 4: return [3, 2];
                                        case 5: return [3, 12];
                                        case 6:
                                            e_2_1 = _b.sent();
                                            e_2 = { error: e_2_1 };
                                            return [3, 12];
                                        case 7:
                                            _b.trys.push([7, , 10, 11]);
                                            if (!(value_1_1 && !value_1_1.done && (_a = value_1.return))) return [3, 9];
                                            return [4, _a.call(value_1)];
                                        case 8:
                                            _b.sent();
                                            _b.label = 9;
                                        case 9: return [3, 11];
                                        case 10:
                                            if (e_2) throw e_2.error;
                                            return [7];
                                        case 11: return [7];
                                        case 12:
                                            this.safeSetState({
                                                isWaitingForResponse: false,
                                                subscription: null,
                                            });
                                            return [3, 14];
                                        case 13:
                                            error_2 = _b.sent();
                                            this.safeSetState({
                                                isWaitingForResponse: false,
                                                response: error_2 ? GraphiQL.formatError(error_2) : undefined,
                                                subscription: null,
                                            });
                                            return [3, 14];
                                        case 14: return [2];
                                    }
                                });
                            }); })();
                            return {
                                unsubscribe: function () { var _a, _b; return (_b = (_a = value[Symbol.asyncIterator]()).return) === null || _b === void 0 ? void 0 : _b.call(_a); },
                            };
                        }
                        else {
                            cb(value);
                            return null;
                        }
                    })
                        .catch(function (error) {
                        _this.safeSetState({
                            isWaitingForResponse: false,
                            response: error ? GraphiQL.formatError(error) : undefined,
                        });
                        return null;
                    })];
            });
        });
    };
    GraphiQL.prototype._runQueryAtCursor = function () {
        if (this.state.subscription) {
            this.handleStopQuery();
            return;
        }
        var operationName;
        var operations = this.state.operations;
        if (operations) {
            var editor = this.getQueryEditor();
            if (editor && editor.hasFocus()) {
                var cursor = editor.getCursor();
                var cursorIndex = editor.indexFromPos(cursor);
                for (var i = 0; i < operations.length; i++) {
                    var operation = operations[i];
                    if (operation.loc &&
                        operation.loc.start <= cursorIndex &&
                        operation.loc.end >= cursorIndex) {
                        operationName = operation.name && operation.name.value;
                        break;
                    }
                }
            }
        }
        this.handleRunQuery(operationName);
    };
    GraphiQL.prototype._didClickDragBar = function (event) {
        if (event.button !== 0 || event.ctrlKey) {
            return false;
        }
        var target = event.target;
        if (target.className.indexOf('CodeMirror-gutter') !== 0) {
            return false;
        }
        var resultWindow = this.resultViewerElement;
        while (target) {
            if (target === resultWindow) {
                return true;
            }
            target = target.parentNode;
        }
        return false;
    };
    GraphiQL.Logo = GraphiQLLogo;
    GraphiQL.Toolbar = GraphiQLToolbar;
    GraphiQL.Footer = GraphiQLFooter;
    GraphiQL.QueryEditor = QueryEditor_1.QueryEditor;
    GraphiQL.VariableEditor = VariableEditor_1.VariableEditor;
    GraphiQL.HeaderEditor = HeaderEditor_1.HeaderEditor;
    GraphiQL.ResultViewer = ResultViewer_1.ResultViewer;
    GraphiQL.Button = ToolbarButton_1.ToolbarButton;
    GraphiQL.ToolbarButton = ToolbarButton_1.ToolbarButton;
    GraphiQL.Group = ToolbarGroup_1.ToolbarGroup;
    GraphiQL.Menu = ToolbarMenu_1.ToolbarMenu;
    GraphiQL.MenuItem = ToolbarMenu_1.ToolbarMenuItem;
    return GraphiQL;
}(react_1.default.Component));
exports.GraphiQL = GraphiQL;
function GraphiQLLogo(props) {
    return (react_1.default.createElement("div", { className: "title" }, props.children || (react_1.default.createElement("span", null,
        'Graph',
        react_1.default.createElement("em", null, 'i'),
        'QL'))));
}
GraphiQLLogo.displayName = 'GraphiQLLogo';
function GraphiQLToolbar(props) {
    return (react_1.default.createElement("div", { className: "toolbar", role: "toolbar", "aria-label": "Editor Commands" }, props.children));
}
GraphiQLToolbar.displayName = 'GraphiQLToolbar';
function GraphiQLFooter(props) {
    return react_1.default.createElement("div", { className: "footer" }, props.children);
}
GraphiQLFooter.displayName = 'GraphiQLFooter';
var formatSingleError = function (error) { return (__assign(__assign({}, error), { message: error.message, stack: error.stack })); };
var defaultQuery = "# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a \"{\" character. Lines that start\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: \"value\") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)\n#\n#     Merge Query:  Shift-Ctrl-M (or press the merge button above)\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n\n";
function isPromise(value) {
    return typeof value === 'object' && typeof value.then === 'function';
}
function observableToPromise(observable) {
    return new Promise(function (resolve, reject) {
        var subscription = observable.subscribe({
            next: function (v) {
                resolve(v);
                subscription.unsubscribe();
            },
            error: reject,
            complete: function () {
                reject(new Error('no value resolved'));
            },
        });
    });
}
function isObservable(value) {
    return (typeof value === 'object' &&
        'subscribe' in value &&
        typeof value.subscribe === 'function');
}
function isAsyncIterable(input) {
    return (typeof input === 'object' &&
        input !== null &&
        (input[Symbol.toStringTag] === 'AsyncGenerator' ||
            Symbol.asyncIterator in input));
}
function asyncIterableToPromise(input) {
    return new Promise(function (resolve, reject) {
        var _a;
        var iteratorReturn = (_a = ('return' in input
            ? input
            : input[Symbol.asyncIterator]()).return) === null || _a === void 0 ? void 0 : _a.bind(input);
        var iteratorNext = ('next' in input
            ? input
            : input[Symbol.asyncIterator]()).next.bind(input);
        iteratorNext()
            .then(function (result) {
            resolve(result.value);
            iteratorReturn === null || iteratorReturn === void 0 ? void 0 : iteratorReturn();
        })
            .catch(function (err) {
            reject(err);
        });
    });
}
function fetcherReturnToPromise(fetcherResult) {
    return Promise.resolve(fetcherResult).then(function (fetcherResult) {
        if (isAsyncIterable(fetcherResult)) {
            return asyncIterableToPromise(fetcherResult);
        }
        else if (isObservable(fetcherResult)) {
            return observableToPromise(fetcherResult);
        }
        return fetcherResult;
    });
}
function isChildComponentType(child, component) {
    var _a;
    if (((_a = child === null || child === void 0 ? void 0 : child.type) === null || _a === void 0 ? void 0 : _a.displayName) &&
        child.type.displayName === component.displayName) {
        return true;
    }
    return child.type === component;
}
//# sourceMappingURL=GraphiQL.js.map