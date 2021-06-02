"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
exports.ResultViewer = void 0;
var react_1 = __importDefault(require("react"));
var jsonata_1 = __importDefault(require("jsonata"));
var react_dom_1 = __importDefault(require("react-dom"));
var commonKeys_1 = __importDefault(require("../utility/commonKeys"));
var ResultViewer = (function (_super) {
    __extends(ResultViewer, _super);
    function ResultViewer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewer = null;
        _this._node = null;
        return _this;
    }
    ResultViewer.prototype.componentDidMount = function () {
        var CodeMirror = require('codemirror');
        require('codemirror/addon/fold/foldgutter');
        require('codemirror/addon/fold/brace-fold');
        require('codemirror/addon/dialog/dialog');
        require('codemirror/addon/search/search');
        require('codemirror/addon/search/searchcursor');
        require('codemirror/addon/search/jump-to-line');
        require('codemirror/keymap/sublime');
        require('codemirror-graphql/results/mode');
        require('codemirror/mode/javascript/javascript');
        var Tooltip = this.props.ResultsTooltip;
        var ImagePreview = this.props.ImagePreview;
        if (Tooltip || ImagePreview) {
            require('codemirror-graphql/utils/info-addon');
            var tooltipDiv_1 = document.createElement('div');
            CodeMirror.registerHelper('info', 'graphql-results', function (token, _options, _cm, pos) {
                var infoElements = [];
                if (Tooltip) {
                    infoElements.push(react_1.default.createElement(Tooltip, { pos: pos }));
                }
                if (ImagePreview &&
                    typeof ImagePreview.shouldRender === 'function' &&
                    ImagePreview.shouldRender(token)) {
                    infoElements.push(react_1.default.createElement(ImagePreview, { token: token }));
                }
                if (!infoElements.length) {
                    react_dom_1.default.unmountComponentAtNode(tooltipDiv_1);
                    return null;
                }
                react_dom_1.default.render(react_1.default.createElement("div", null, infoElements), tooltipDiv_1);
                return tooltipDiv_1;
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
                minFoldSize: 4,
            },
            gutters: ['CodeMirror-foldgutter'],
            info: Boolean(this.props.ResultsTooltip || this.props.ImagePreview),
            extraKeys: commonKeys_1.default,
        });
    };
    ResultViewer.prototype.shouldComponentUpdate = function (nextProps) {
        return (this.props.value !== nextProps.value ||
            this.props.jsonata !== nextProps.jsonata);
    };
    ResultViewer.prototype.componentDidUpdate = function () {
        if (this.viewer) {
            this.viewer.setValue(this.focusedValue());
        }
    };
    ResultViewer.prototype.componentWillUnmount = function () {
        this.viewer = null;
    };
    ResultViewer.prototype.focusedValue = function () {
        var e_1, _a;
        var _b, _c, _d, _e;
        var value = this.props.value || '';
        if (!value || !this.props.jsonata) {
            (_b = this.viewer) === null || _b === void 0 ? void 0 : _b.setOption('mode', 'graphql-results');
            return value;
        }
        try {
            var raw = JSON.parse(value);
            var expression = jsonata_1.default(this.props.jsonata);
            try {
                for (var _f = __values((_c = this.props.jsonataFunctions) !== null && _c !== void 0 ? _c : []), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var f = _g.value;
                    expression.registerFunction(f.name, f.implementation, f.signature);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var focused = expression.evaluate(raw);
            (_d = this.viewer) === null || _d === void 0 ? void 0 : _d.setOption('mode', { name: 'javascript', json: true });
            return (_e = JSON.stringify(focused, null, 2)) !== null && _e !== void 0 ? _e : '';
        }
        catch (err) {
            if (err.code) {
                return JSON.stringify({ jsonataError: __assign(__assign({}, err), { stack: undefined }) }, null, 2);
            }
            return value;
        }
    };
    ResultViewer.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("section", { className: "result-window", "aria-label": "Result Window", "aria-live": "polite", "aria-atomic": "true", ref: function (node) {
                if (node) {
                    _this.props.registerRef(node);
                    _this._node = node;
                }
            } }));
    };
    ResultViewer.prototype.getCodeMirror = function () {
        return this.viewer;
    };
    ResultViewer.prototype.getClientHeight = function () {
        return this._node && this._node.clientHeight;
    };
    return ResultViewer;
}(react_1.default.Component));
exports.ResultViewer = ResultViewer;
//# sourceMappingURL=ResultViewer.js.map