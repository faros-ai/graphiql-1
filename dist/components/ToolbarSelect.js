"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarSelectOption = ToolbarSelectOption;
exports.ToolbarSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

/**
 * ToolbarSelect
 *
 * A select-option style button to use within the Toolbar.
 *
 */
var ToolbarSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(ToolbarSelect, _React$Component);

  var _super = _createSuper(ToolbarSelect);

  function ToolbarSelect(props) {
    var _this;

    _classCallCheck(this, ToolbarSelect);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function (e) {
      preventDefault(e);

      _this.setState({
        visible: true
      });

      _this._subscribe();
    });

    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ToolbarSelect, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._release();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedChild;
      var visible = this.state.visible;

      var optionChildren = _react.default.Children.map(this.props.children, function (child, i) {
        if (!selectedChild || child.props.selected) {
          selectedChild = child;
        }

        var onChildSelect = child.props.onSelect || _this2.props.onSelect && _this2.props.onSelect.bind(null, child.props.value, i);

        return /*#__PURE__*/_react.default.createElement(ToolbarSelectOption, _extends({}, child.props, {
          onSelect: onChildSelect
        }));
      });

      return /*#__PURE__*/_react.default.createElement("a", {
        className: "toolbar-select toolbar-button",
        onClick: this.handleOpen.bind(this),
        onMouseDown: preventDefault,
        ref: function ref(node) {
          _this2._node = node;
        },
        title: this.props.title
      }, selectedChild.props.label, /*#__PURE__*/_react.default.createElement("svg", {
        width: "13",
        height: "10"
      }, /*#__PURE__*/_react.default.createElement("path", {
        fill: "#666",
        d: "M 5 5 L 13 5 L 9 1 z"
      }), /*#__PURE__*/_react.default.createElement("path", {
        fill: "#666",
        d: "M 5 6 L 13 6 L 9 10 z"
      })), /*#__PURE__*/_react.default.createElement("ul", {
        className: 'toolbar-select-options' + (visible ? ' open' : '')
      }, optionChildren));
    }
  }, {
    key: "_subscribe",
    value: function _subscribe() {
      if (!this._listener) {
        this._listener = this.handleClick.bind(this);
        document.addEventListener('click', this._listener);
      }
    }
  }, {
    key: "_release",
    value: function _release() {
      if (this._listener) {
        document.removeEventListener('click', this._listener);
        this._listener = null;
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      if (this._node !== e.target) {
        preventDefault(e);
        this.setState({
          visible: false
        });

        this._release();
      }
    }
  }]);

  return ToolbarSelect;
}(_react.default.Component);

exports.ToolbarSelect = ToolbarSelect;

_defineProperty(ToolbarSelect, "propTypes", {
  title: _propTypes.default.string,
  label: _propTypes.default.string,
  onSelect: _propTypes.default.func
});

function ToolbarSelectOption(_ref) {
  var onSelect = _ref.onSelect,
      label = _ref.label,
      selected = _ref.selected;
  return /*#__PURE__*/_react.default.createElement("li", {
    onMouseOver: function onMouseOver(e) {
      e.target.className = 'hover';
    },
    onMouseOut: function onMouseOut(e) {
      e.target.className = null;
    },
    onMouseDown: preventDefault,
    onMouseUp: onSelect
  }, label, selected && /*#__PURE__*/_react.default.createElement("svg", {
    width: "13",
    height: "13"
  }, /*#__PURE__*/_react.default.createElement("polygon", {
    points: "4.851,10.462 0,5.611 2.314,3.297 4.851,5.835 10.686,0 13,2.314 4.851,10.462"
  })));
}

ToolbarSelectOption.propTypes = {
  onSelect: _propTypes.default.func,
  selected: _propTypes.default.bool,
  label: _propTypes.default.string,
  value: _propTypes.default.any
};

function preventDefault(e) {
  e.preventDefault();
}