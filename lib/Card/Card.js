'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Card)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchTap = function (event) {
      var _this$props = _this.props;
      var onTouchTap = _this$props.onTouchTap;
      var payload = _this$props.payload;

      onTouchTap && onTouchTap(payload);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var onTouchTap = _props.onTouchTap;

      var other = _objectWithoutProperties(_props, ['children', 'className', 'onTouchTap']);

      var classes = (0, _classnames2.default)(className, _defineProperty({}, css.clickable, onTouchTap));
      return _react2.default.createElement(
        _Paper2.default,
        _extends({ className: classes }, other, { hover: true, onTouchTap: this.handleTouchTap }),
        children
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  children: _react.PropTypes.node,
  onTouchTap: _react.PropTypes.func,
  payload: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array]),
  className: _react.PropTypes.string
};
exports.default = Card;


var css = {
  clickable: 'omd_h'
};