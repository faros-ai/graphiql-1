"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLeft = getLeft;
exports.getTop = getTop;

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

/**
 * Utility functions to get a pixel distance from left/top of the window.
 */
function getLeft(initialElem) {
  var pt = 0;
  var elem = initialElem;

  while (elem.offsetParent) {
    pt += elem.offsetLeft;
    elem = elem.offsetParent;
  }

  return pt;
}

function getTop(initialElem) {
  var pt = 0;
  var elem = initialElem;

  while (elem.offsetParent) {
    pt += elem.offsetTop;
    elem = elem.offsetParent;
  }

  return pt;
}