"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TypeLink = _interopRequireDefault(require("../TypeLink"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
var nonNullType = new _graphql.GraphQLNonNull(_graphql.GraphQLString);
var listType = new _graphql.GraphQLList(_graphql.GraphQLString);
describe('TypeLink', function () {
  it('should render a string', function () {
    var instance = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
      type: _graphql.GraphQLString
    }));
    expect(instance.text()).toEqual('String');
    expect(instance.find('a').length).toEqual(1);
    expect(instance.find('a').hasClass('type-name')).toEqual(true);
  });
  it('should render a nonnull type', function () {
    var instance = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
      type: nonNullType
    }));
    expect(instance.text()).toEqual('String!');
    expect(instance.find('span').length).toEqual(1);
  });
  it('should render a list type', function () {
    var instance = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
      type: listType
    }));
    expect(instance.text()).toEqual('[String]');
    expect(instance.find('span').length).toEqual(1);
  });
  it('should handle a click event', function () {
    var op = jest.fn();
    var instance = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
      type: listType,
      onClick: op
    }));
    instance.find('a').simulate('click');
    expect(op.mock.calls.length).toEqual(1);
    expect(op.mock.calls[0][0]).toEqual(_graphql.GraphQLString);
  });
  it('should re-render on type change', function () {
    var instance = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeLink.default, {
      type: listType
    }));
    expect(instance.text()).toEqual('[String]');
    instance.setProps({
      type: _graphql.GraphQLString
    });
    expect(instance.text()).toEqual('String');
  });
});