"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _graphql = require("graphql");

var _TypeDoc = _interopRequireDefault(require("../TypeDoc"));

var _ExampleSchema = require("../../__tests__/ExampleSchema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
describe('TypeDoc', function () {
  it('renders a top-level query object type', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeDoc.default, {
      schema: _ExampleSchema.ExampleSchema,
      type: _ExampleSchema.ExampleQuery,
      onClickType: jest.fn()
    }));
    var cats = W.find('.doc-category-item');
    expect(cats.at(0).text()).toEqual('string: String');
    expect(cats.at(1).text()).toEqual('union: exampleUnion');
    expect(cats.at(2).text()).toEqual('fieldWithArgs(stringArg: String): String');
  });
  it('handles onClickField and onClickType', function () {
    var onClickType = jest.fn();
    var onClickField = jest.fn();
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeDoc.default, {
      schema: _ExampleSchema.ExampleSchema,
      type: _ExampleSchema.ExampleQuery,
      onClickType: onClickType,
      onClickField: onClickField
    }));
    W.find('TypeLink').at(0).simulate('click');
    expect(onClickType.mock.calls.length).toEqual(1);
    expect(onClickType.mock.calls[0][0]).toEqual(_graphql.GraphQLString);
    W.find('.field-name').at(0).simulate('click');
    expect(onClickField.mock.calls.length).toEqual(1);
    expect(onClickField.mock.calls[0][0].name).toEqual('string');
    expect(onClickField.mock.calls[0][0].type).toEqual(_graphql.GraphQLString);
    expect(onClickField.mock.calls[0][1]).toEqual(_ExampleSchema.ExampleQuery);
  });
  it('renders deprecated fields when you click to see them', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeDoc.default, {
      schema: _ExampleSchema.ExampleSchema,
      type: _ExampleSchema.ExampleQuery,
      onClickType: jest.fn()
    }));
    var cats = W.find('.doc-category-item');
    expect(cats.length).toEqual(3);
    W.find('.show-btn').simulate('click');
    cats = W.find('.doc-category-item');
    expect(cats.length).toEqual(4);
    expect(W.find('.field-name').at(3).text()).toEqual('deprecatedField');
    expect(W.find('.doc-deprecation').at(0).text()).toEqual('example deprecation reason\n');
  });
  it('renders a Union type', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeDoc.default, {
      schema: _ExampleSchema.ExampleSchema,
      type: _ExampleSchema.ExampleUnion
    }));
    expect(W.find('.doc-category-title').at(0).text()).toEqual('possible types');
  });
  it('renders an Enum type', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeDoc.default, {
      schema: _ExampleSchema.ExampleSchema,
      type: _ExampleSchema.ExampleEnum
    }));
    expect(W.find('.doc-category-title').at(0).text()).toEqual('values');
    var enums = W.find('EnumValue');
    expect(enums.at(0).props().value.value).toEqual('Value 1');
    expect(enums.at(1).props().value.value).toEqual('Value 2');
  });
  it('shows deprecated enum values on click', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_TypeDoc.default, {
      schema: _ExampleSchema.ExampleSchema,
      type: _ExampleSchema.ExampleEnum
    }));
    expect(W.state().showDeprecated).toEqual(false);
    var titles = W.find('.doc-category-title');
    expect(titles.at(0).text()).toEqual('values');
    expect(titles.at(1).text()).toEqual('deprecated values');
    var enums = W.find('EnumValue');
    expect(enums.length).toEqual(2); // click button to show deprecated enum values

    W.find('.show-btn').simulate('click');
    expect(W.state().showDeprecated).toEqual(true);
    enums = W.find('EnumValue');
    expect(enums.length).toEqual(3);
    expect(enums.at(2).props().value.value).toEqual('Value 3');
    expect(W.find('.doc-deprecation').at(1).text()).toEqual('Only two are needed\n');
  });
});