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
import React from 'react';
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
        return (React.createElement("li", null,
            React.createElement("button", { className: "history-label", onClick: this.handleClick.bind(this) }, displayName)));
    };
    HistoryQuery.prototype.handleClick = function () {
        this.props.onSelect(this.props.name, this.props.query, this.props.jsonata);
    };
    return HistoryQuery;
}(React.Component));
export default HistoryQuery;
//# sourceMappingURL=NamedQueryRow.js.map