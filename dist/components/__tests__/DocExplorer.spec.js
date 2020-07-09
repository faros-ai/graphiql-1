"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DocExplorer = require("../DocExplorer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DocExplorer', function () {
  it('renders spinner when no schema prop is present', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_DocExplorer.DocExplorer, null));
    var spinner = W.find('.spinner-container');
    expect(spinner.length).toEqual(1);
  });
  it('renders with null schema', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_DocExplorer.DocExplorer, {
      schema: null
    }));
    var error = W.find('.error-container');
    expect(error.length).toEqual(1);
    expect(error.text()).toEqual('No Schema Available');
  });
});