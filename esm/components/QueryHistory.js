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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
import { parse } from 'graphql';
import React from 'react';
import QueryStore from '../utility/QueryStore';
import HistoryQuery from './HistoryQuery';
var MAX_QUERY_SIZE = 100000;
var MAX_HISTORY_LENGTH = 20;
var shouldSaveQuery = function (query, variables, headers, lastQuerySaved) {
    if (!query) {
        return false;
    }
    try {
        parse(query);
    }
    catch (e) {
        return false;
    }
    if (query.length > MAX_QUERY_SIZE) {
        return false;
    }
    if (!lastQuerySaved) {
        return true;
    }
    if (JSON.stringify(query) === JSON.stringify(lastQuerySaved.query)) {
        if (JSON.stringify(variables) === JSON.stringify(lastQuerySaved.variables)) {
            if (JSON.stringify(headers) === JSON.stringify(lastQuerySaved.headers)) {
                return false;
            }
            if (headers && !lastQuerySaved.headers) {
                return false;
            }
        }
        if (variables && !lastQuerySaved.variables) {
            return false;
        }
    }
    return true;
};
var QueryHistory = (function (_super) {
    __extends(QueryHistory, _super);
    function QueryHistory(props) {
        var _this = _super.call(this, props) || this;
        _this.updateHistory = function (query, variables, headers, operationName) {
            if (shouldSaveQuery(query, variables, headers, _this.historyStore.fetchRecent())) {
                _this.historyStore.push({
                    query: query,
                    variables: variables,
                    headers: headers,
                    operationName: operationName,
                });
                var historyQueries = _this.historyStore.items;
                var favoriteQueries = _this.favoriteStore.items;
                var queries = historyQueries.concat(favoriteQueries);
                _this.setState({
                    queries: queries,
                });
            }
        };
        _this.toggleFavorite = function (query, variables, headers, operationName, label, favorite) {
            var item = {
                query: query,
                variables: variables,
                headers: headers,
                operationName: operationName,
                label: label,
            };
            if (!_this.favoriteStore.contains(item)) {
                item.favorite = true;
                _this.favoriteStore.push(item);
            }
            else if (favorite) {
                item.favorite = false;
                _this.favoriteStore.delete(item);
            }
            _this.setState({
                queries: __spread(_this.historyStore.items, _this.favoriteStore.items),
            });
        };
        _this.editLabel = function (query, variables, headers, operationName, label, favorite) {
            var item = {
                query: query,
                variables: variables,
                headers: headers,
                operationName: operationName,
                label: label,
            };
            if (favorite) {
                _this.favoriteStore.edit(__assign(__assign({}, item), { favorite: favorite }));
            }
            else {
                _this.historyStore.edit(item);
            }
            _this.setState({
                queries: __spread(_this.historyStore.items, _this.favoriteStore.items),
            });
        };
        _this.historyStore = new QueryStore('queries', props.storage, MAX_HISTORY_LENGTH);
        _this.favoriteStore = new QueryStore('favorites', props.storage, null);
        var historyQueries = _this.historyStore.fetchAll();
        var favoriteQueries = _this.favoriteStore.fetchAll();
        var queries = historyQueries.concat(favoriteQueries);
        _this.state = { queries: queries };
        return _this;
    }
    QueryHistory.prototype.render = function () {
        var _this = this;
        var queries = this.state.queries.slice().reverse();
        var queryNodes = queries.map(function (query, i) {
            return (React.createElement(HistoryQuery, __assign({ handleEditLabel: _this.editLabel, handleToggleFavorite: _this.toggleFavorite, key: i + ":" + (query.label || query.query), onSelect: _this.props.onSelectQuery }, query)));
        });
        return (React.createElement("section", { "aria-label": "History" },
            React.createElement("div", { className: "history-title-bar" },
                React.createElement("div", { className: "history-title" }, 'History'),
                React.createElement("div", { className: "doc-explorer-rhs" }, this.props.children)),
            React.createElement("ul", { className: "history-contents" }, queryNodes)));
    };
    return QueryHistory;
}(React.Component));
export { QueryHistory };
//# sourceMappingURL=QueryHistory.js.map