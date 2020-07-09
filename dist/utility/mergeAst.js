"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAst = mergeAst;

var _kinds = require("graphql/language/kinds");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function resolveDefinition(fragments, obj) {
  var definition = obj;

  if (definition.kind === _kinds.Kind.FRAGMENT_SPREAD) {
    definition = fragments[definition.name.value];
  }

  if (definition.selectionSet) {
    definition.selectionSet.selections = definition.selectionSet.selections.filter(function (selection, idx, self) {
      return selection.kind !== _kinds.Kind.FRAGMENT_SPREAD || idx === self.findIndex(function (_selection) {
        return _selection.kind === _kinds.Kind.FRAGMENT_SPREAD && selection.name.value === _selection.name.value;
      });
    }).map(function (selection) {
      return resolveDefinition(fragments, selection);
    });
  }

  return definition;
}

function mergeAst(queryAst) {
  var fragments = {};
  queryAst.definitions.filter(function (elem) {
    return elem.kind === _kinds.Kind.FRAGMENT_DEFINITION;
  }).forEach(function (frag) {
    var copyFragment = _objectSpread({}, frag);

    copyFragment.kind = _kinds.Kind.INLINE_FRAGMENT;
    fragments[frag.name.value] = copyFragment;
  });

  var copyAst = _objectSpread({}, queryAst);

  copyAst.definitions = queryAst.definitions.filter(function (elem) {
    return elem.kind !== _kinds.Kind.FRAGMENT_DEFINITION;
  }).map(function (op) {
    return resolveDefinition(fragments, op);
  });
  return copyAst;
}