"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarGroup = ToolbarGroup;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

/**
 * ToolbarGroup
 *
 * A group of associated controls.
 */
function ToolbarGroup(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar-button-group"
  }, children);
}