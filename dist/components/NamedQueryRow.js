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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HistoryQuery = (function (_super) {
    __extends(HistoryQuery, _super);
    function HistoryQuery(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editable: false,
        };
        _this.editField = null;
        return _this;
    }
    HistoryQuery.prototype.render = function () {
        var displayName = this.props.name;
        return (react_1.default.createElement("li", null,
            react_1.default.createElement("button", { className: "history-label", onClick: this.handleClick.bind(this) }, displayName)));
    };
    HistoryQuery.prototype.handleClick = function () {
        this.props.onSelect(this.props.name, this.props.query, this.props.jsonata);
    };
    return HistoryQuery;
}(react_1.default.Component));
exports.default = HistoryQuery;
//# sourceMappingURL=NamedQueryRow.js.map