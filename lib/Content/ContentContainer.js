'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _exenv = require('exenv');

var _exenv2 = _interopRequireDefault(_exenv);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = {
  root: 'oui_dX'
};

var ContentContainer = function (_Component) {
  _inherits(ContentContainer, _Component);

  function ContentContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ContentContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ContentContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this._scrollTop = 0, _this._direction = null, _this.handleScroll = function (event) {
      var _this$props = _this.props;
      var onScroll = _this$props.onScroll;
      var onScrollChange = _this$props.onScrollChange;
      var scrollTop = _this._node.scrollTop;

      var direction = scrollTop - _this._scrollTop < 0 ? 'up' : 'down';
      if (direction !== _this._direction) {
        _this._direction = direction;
        onScrollChange && onScrollChange(direction, scrollTop);
      }
      _this._scrollTop = scrollTop;
      onScroll && onScroll(direction, scrollTop);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContentContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;

      var other = _objectWithoutProperties(_props, ['children', 'className']);

      var classes = (0, _classnames2.default)(css.root, className);
      return _react2.default.createElement(
        'div',
        _extends({ ref: function ref(node) {
            return _this2._node = node;
          } }, other, { className: classes, onScroll: this.handleScroll }),
        children
      );
    }
  }]);

  return ContentContainer;
}(_react.Component);

ContentContainer.propTypes = {
  children: _react.PropTypes.node,
  onScroll: _react.PropTypes.func,
  onScrollChange: _react.PropTypes.func,
  className: _react.PropTypes.string
};
exports.default = ContentContainer;