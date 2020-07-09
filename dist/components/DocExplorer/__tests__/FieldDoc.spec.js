"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _FieldDoc = _interopRequireDefault(require("../FieldDoc"));

var _graphql = require("graphql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
var exampleObject = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    string: {
      name: 'simpleStringField',
      type: _graphql.GraphQLString
    },
    stringWithArgs: {
      name: 'stringWithArgs',
      type: _graphql.GraphQLString,
      description: 'Example String field with arguments',
      args: {
        stringArg: {
          name: 'stringArg',
          type: _graphql.GraphQLString
        }
      }
    }
  }
});
describe('FieldDoc', function () {
  it('should render a simple string field', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_FieldDoc.default, {
      field: exampleObject.getFields().string,
      onClickType: jest.fn()
    }));
    expect(W.find('MarkdownContent').text()).toEqual('No Description\n');
    expect(W.find('TypeLink').text()).toEqual('String');
    expect(W.find('Argument').length).toEqual(0);
  });
  it('should re-render on field change', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_FieldDoc.default, {
      field: exampleObject.getFields().string,
      onClickType: jest.fn()
    }));
    expect(W.find('MarkdownContent').text()).toEqual('No Description\n');
    expect(W.find('TypeLink').text()).toEqual('String');
    expect(W.find('Argument').length).toEqual(0);
  });
  it('should render a string field with arguments', function () {
    var W = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_FieldDoc.default, {
      field: exampleObject.getFields().stringWithArgs,
      onClickType: jest.fn()
    }));
    expect(W.find('TypeLink').at(0).text()).toEqual('String');
    expect(W.find('.doc-type-description').at(0).text()).toEqual('Example String field with arguments\n');
    expect(W.find('Argument').length).toEqual(1);
    expect(W.find('Argument').text()).toEqual('stringArg: String');
  });
});