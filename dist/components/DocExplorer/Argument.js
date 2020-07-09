"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Argument;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TypeLink = _interopRequireDefault(require("./TypeLink"));

var _DefaultValue = _interopRequireDefault(require("./DefaultValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
function Argument(_ref) {
  var arg = _ref.arg,
      onClickType = _ref.onClickType,
      showDefaultValue = _ref.showDefaultValue;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "arg"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "arg-name"
  }, arg.name), ': ', /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
    type: arg.type,
    onClick: onClickType
  }), showDefaultValue !== false && /*#__PURE__*/_react.default.createElement(_DefaultValue.default, {
    field: arg
  }));
}

Argument.propTypes = {
  arg: _propTypes.default.object.isRequired,
  onClickType: _propTypes.default.func.isRequired,
  showDefaultValue: _propTypes.default.bool
};