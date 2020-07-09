"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commonKeys;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isMacOs = false;

if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  isMacOs = window.navigator.platform === 'MacIntel';
}

var commonKeys = (_commonKeys = {}, _defineProperty(_commonKeys, isMacOs ? 'Cmd-F' : 'Ctrl-F', 'findPersistent'), _defineProperty(_commonKeys, 'Cmd-G', 'findPersistent'), _defineProperty(_commonKeys, 'Ctrl-G', 'findPersistent'), _defineProperty(_commonKeys, 'Ctrl-Left', 'goSubwordLeft'), _defineProperty(_commonKeys, 'Ctrl-Right', 'goSubwordRight'), _defineProperty(_commonKeys, 'Alt-Left', 'goGroupLeft'), _defineProperty(_commonKeys, 'Alt-Right', 'goGroupRight'), _commonKeys);
var _default = commonKeys;
exports.default = _default;