"use strict";

var _graphql = require("graphql");

var _mergeAst = require("../mergeAst");

var _mergeAstFixture = require("./mergeAst-fixture");

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
describe('MergeAst', function () {
  _mergeAstFixture.fixtures.forEach(function (fixture) {
    it(fixture.desc, function () {
      var result = (0, _graphql.print)((0, _mergeAst.mergeAst)((0, _graphql.parse)(fixture.query))).replace(/\s/g, '');
      expect(result).toEqual(fixture.mergedQuery.replace(/\s/g, ''));
    });
  });
});