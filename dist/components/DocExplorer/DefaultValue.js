"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DefaultValue;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
function DefaultValue(_ref) {
  var field = _ref.field;
  var type = field.type,
      defaultValue = field.defaultValue;

  if (defaultValue !== undefined) {
    return /*#__PURE__*/_react.default.createElement("span", null, ' = ', /*#__PURE__*/_react.default.createElement("span", {
      className: "arg-default-value"
    }, (0, _graphql.print)((0, _graphql.astFromValue)(defaultValue, type))));
  }

  return null;
}

DefaultValue.propTypes = {
  field: _propTypes.default.object.isRequired
};