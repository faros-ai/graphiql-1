"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

/**
 * Provided a duration and a function, returns a new function which is called
 * `duration` milliseconds after the last call.
 */
function debounce(duration, fn) {
  var timeout;
  return function () {
    var _arguments = arguments,
        _this = this;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      fn.apply(_this, _arguments);
    }, duration);
  };
}