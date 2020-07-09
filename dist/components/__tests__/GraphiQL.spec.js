"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _GraphiQL = require("../GraphiQL");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mockStorage = function () {
  var store = {};
  return {
    getItem: function getItem(key) {
      return store.hasOwnProperty(key) ? store[key] : null;
    },
    setItem: function setItem(key, value) {
      store[key] = value.toString();
    },
    clear: function clear() {
      store = {};
    }
  };
}(); // The smallest possible introspection result that builds a schema.


var simpleIntrospection = {
  data: {
    __schema: {
      queryType: {
        name: 'Q'
      },
      types: [{
        kind: 'OBJECT',
        name: 'Q',
        interfaces: [],
        fields: [{
          name: 'q',
          args: [],
          type: {
            name: 'Q'
          }
        }]
      }]
    }
  }
}; // Spins the promise loop a few times before continuing.

var wait = function wait() {
  return Promise.resolve().then(function () {
    return Promise.resolve();
  }).then(function () {
    return Promise.resolve();
  }).then(function () {
    return Promise.resolve();
  });
};

Object.defineProperty(window, 'localStorage', {
  value: mockStorage
});
describe('GraphiQL', function () {
  var noOpFetcher = function noOpFetcher() {};

  it('should throw error without fetcher', function () {
    expect(function () {
      return (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, null)).simulateError(Error('GraphiQL requires a fetcher function'));
    });
  });
  it('should construct correctly with fetcher', function () {
    expect(function () {
      return (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
        fetcher: noOpFetcher
      }));
    }).not.toThrow();
  });
  it('should refetch schema with new fetcher', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var firstCalled, firstFetcher, secondCalled, secondFetcher, instance;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            secondFetcher = function _secondFetcher() {
              secondCalled = true;
              return Promise.resolve(simpleIntrospection);
            };

            firstFetcher = function _firstFetcher() {
              firstCalled = true;
              return Promise.resolve(simpleIntrospection);
            };

            firstCalled = false;
            secondCalled = false;
            // Initial render calls fetcher
            instance = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
              fetcher: firstFetcher
            }));
            expect(firstCalled).toEqual(true);
            _context.next = 8;
            return wait();

          case 8:
            // Re-render does not call fetcher again
            firstCalled = false;
            instance.setProps({
              fetcher: firstFetcher
            });
            expect(firstCalled).toEqual(false);
            _context.next = 13;
            return wait();

          case 13:
            // Re-render with new fetcher is called.
            instance.setProps({
              fetcher: secondFetcher
            });
            expect(secondCalled).toEqual(true);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('should not throw error if schema missing and query provided', function () {
    expect(function () {
      return (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
        fetcher: noOpFetcher,
        query: "{}"
      }));
    }).not.toThrow();
  });
  it('defaults to the built-in default query', function () {
    var graphiQL = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
      fetcher: noOpFetcher
    }));
    expect(graphiQL.state().query).toContain('# Welcome to GraphiQL');
  });
  it('accepts a custom default query', function () {
    var graphiQL = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
      fetcher: noOpFetcher,
      defaultQuery: "GraphQL Party!!"
    }));
    expect(graphiQL.state().query).toEqual('GraphQL Party!!');
  });
  it('accepts a docExplorerOpen prop', function () {
    var graphiQL = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
      fetcher: noOpFetcher,
      docExplorerOpen: true
    }));
    expect(graphiQL.state().docExplorerOpen).toEqual(true);
  });
  it('defaults to closed docExplorer', function () {
    var graphiQL = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
      fetcher: noOpFetcher
    }));
    expect(graphiQL.state().docExplorerOpen).toEqual(false);
  });
  it('accepts a defaultVariableEditorOpen param', function () {
    var graphiQL = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
      fetcher: noOpFetcher
    }));
    expect(graphiQL.state().variableEditorOpen).toEqual(false);
    expect(graphiQL.state().defaultVariableEditorOpen).toEqual(undefined);
    graphiQL = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
      fetcher: noOpFetcher,
      defaultVariableEditorOpen: true
    }));
    expect(graphiQL.state().variableEditorOpen).toEqual(true);
    graphiQL = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_GraphiQL.GraphiQL, {
      fetcher: noOpFetcher,
      variables: "{test: 'value'}",
      defaultVariableEditorOpen: false
    }));
    expect(graphiQL.state().variableEditorOpen).toEqual(false);
  });
});