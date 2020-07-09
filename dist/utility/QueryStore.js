"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
var QueryStore = /*#__PURE__*/function () {
  function QueryStore(key, storage) {
    _classCallCheck(this, QueryStore);

    this.key = key;
    this.storage = storage;
    this.items = this.fetchAll();
  }

  _createClass(QueryStore, [{
    key: "contains",
    value: function contains(item) {
      return this.items.some(function (x) {
        return x.query === item.query && x.variables === item.variables && x.operationName === item.operationName;
      });
    }
  }, {
    key: "edit",
    value: function edit(item) {
      var itemIndex = this.items.findIndex(function (x) {
        return x.query === item.query && x.variables === item.variables && x.operationName === item.operationName;
      });

      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1, item);
        this.save();
      }
    }
  }, {
    key: "delete",
    value: function _delete(item) {
      var itemIndex = this.items.findIndex(function (x) {
        return x.query === item.query && x.variables === item.variables && x.operationName === item.operationName;
      });

      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1);
        this.save();
      }
    }
  }, {
    key: "fetchRecent",
    value: function fetchRecent() {
      return this.items[this.items.length - 1];
    }
  }, {
    key: "fetchAll",
    value: function fetchAll() {
      var raw = this.storage.get(this.key);

      if (raw) {
        return JSON.parse(raw)[this.key];
      }

      return [];
    }
  }, {
    key: "push",
    value: function push(item) {
      this.items.push(item);
      this.save();
    }
  }, {
    key: "shift",
    value: function shift() {
      this.items.shift();
      this.save();
    }
  }, {
    key: "save",
    value: function save() {
      this.storage.set(this.key, JSON.stringify(_defineProperty({}, this.key, this.items)));
    }
  }, {
    key: "length",
    get: function get() {
      return this.items.length;
    }
  }]);

  return QueryStore;
}();

exports.default = QueryStore;