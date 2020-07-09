"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

/**
 * When a containing DOM node's height has been altered, trigger a resize of
 * the related CodeMirror instance so that it is always correctly sized.
 */
var CodeMirrorSizer = /*#__PURE__*/function () {
  function CodeMirrorSizer() {
    _classCallCheck(this, CodeMirrorSizer);

    this.sizes = [];
  }

  _createClass(CodeMirrorSizer, [{
    key: "updateSizes",
    value: function updateSizes(components) {
      var _this = this;

      components.forEach(function (component, i) {
        var size = component.getClientHeight();

        if (i <= _this.sizes.length && size !== _this.sizes[i]) {
          component.getCodeMirror().setSize();
        }

        _this.sizes[i] = size;
      });
    }
  }]);

  return CodeMirrorSizer;
}();

exports.default = CodeMirrorSizer;