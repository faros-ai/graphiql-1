"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImagePreview = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tokenToURL(token) {
  if (token.type !== 'string') {
    return null;
  }

  var value = token.string.slice(1).slice(0, -1).trim();

  try {
    var location = window.location;
    return new URL(value, location.protocol + '//' + location.host);
  } catch (err) {
    return null;
  }
}

function isImageURL(url) {
  return /(bmp|gif|jpeg|jpg|png|svg)$/.test(url.pathname);
}

var ImagePreview = /*#__PURE__*/function (_React$Component) {
  _inherits(ImagePreview, _React$Component);

  var _super = _createSuper(ImagePreview);

  _createClass(ImagePreview, null, [{
    key: "shouldRender",
    value: function shouldRender(token) {
      var url = tokenToURL(token);
      return url ? isImageURL(url) : false;
    }
  }]);

  function ImagePreview(props) {
    var _this;

    _classCallCheck(this, ImagePreview);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: null,
      height: null,
      src: null,
      mime: null
    });

    return _this;
  }

  _createClass(ImagePreview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updateMetadata();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._updateMetadata();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var dims = null;

      if (this.state.width !== null && this.state.height !== null) {
        var dimensions = this.state.width + 'x' + this.state.height;

        if (this.state.mime !== null) {
          dimensions += ' ' + this.state.mime;
        }

        dims = /*#__PURE__*/_react.default.createElement("div", null, dimensions);
      }

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
        onLoad: function onLoad() {
          return _this2._updateMetadata();
        },
        ref: function ref(node) {
          _this2._node = node;
        },
        src: tokenToURL(this.props.token)
      }), dims);
    }
  }, {
    key: "_updateMetadata",
    value: function _updateMetadata() {
      var _this3 = this;

      if (!this._node) {
        return;
      }

      var width = this._node.naturalWidth;
      var height = this._node.naturalHeight;
      var src = this._node.src;

      if (src !== this.state.src) {
        this.setState({
          src: src
        });
        fetch(src, {
          method: 'HEAD'
        }).then(function (response) {
          _this3.setState({
            mime: response.headers.get('Content-Type')
          });
        });
      }

      if (width !== this.state.width || height !== this.state.height) {
        this.setState({
          height: height,
          width: width
        });
      }
    }
  }]);

  return ImagePreview;
}(_react.default.Component);

exports.ImagePreview = ImagePreview;

_defineProperty(ImagePreview, "propTypes", {
  token: _propTypes.default.any
});