'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paper = function (_Component) {
  _inherits(Paper, _Component);

  function Paper() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Paper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Paper)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      hover: false
    }, _this.handleEnter = function () {
      _this.setState({ hover: true });
    }, _this.handleLeave = function () {
      _this.setState({ hover: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Paper, [{
    key: 'getStyle',
    value: function getStyle() {
      var mdTheme = this.context.mdTheme;
      var _props = this.props;
      var zDepth = _props.zDepth;
      var transparent = _props.transparent;
      var mdColor = _props.mdColor;
      var style = _props.style;

      var colors = mdTheme.colors[mdColor];
      var hover = this.state.hover;

      return Object.assign({}, transparent ? null : {
        backgroundColor: mdTheme.theme.card.hex,
        color: mdTheme.text.default,
        boxShadow: hover ? _Styles.Shadow[zDepth + 1] : _Styles.Shadow[zDepth]
      }, colors && !transparent ? {
        backgroundColor: colors[500].hex,
        color: colors[500].text.default,
        boxShadow: hover ? _Styles.Shadow[zDepth + 1] : _Styles.Shadow[zDepth]
      } : null, style);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props;
      var children = _props2.children;
      var spaced = _props2.spaced;
      var fullWidth = _props2.fullWidth;
      var padded = _props2.padded;
      var rounded = _props2.rounded;
      var className = _props2.className;
      var hover = _props2.hover;

      var other = _objectWithoutProperties(_props2, ['children', 'spaced', 'fullWidth', 'padded', 'rounded', 'className', 'hover']);

      var classes = (0, _classnames2.default)(className, styles.root, (_classNames = {}, _defineProperty(_classNames, styles.fullWidth, fullWidth), _defineProperty(_classNames, styles.spaced, spaced), _defineProperty(_classNames, styles.padded, padded), _defineProperty(_classNames, styles.rounded, rounded), _classNames));
      var props = {
        className: classes,
        style: this.getStyle()
      };
      if (hover) {
        props.onMouseEnter = this.handleEnter;
        props.onMouseLeave = this.handleLeave;
      };
      return _react2.default.createElement(
        'div',
        _extends({}, other, props),
        children
      );
    }
  }]);

  return Paper;
}(_react.Component);

Paper.propTypes = {
  zDepth: _react.PropTypes.number,
  transparent: _react.PropTypes.bool,
  padded: _react.PropTypes.bool,
  spaced: _react.PropTypes.bool,
  rounded: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  fullWidth: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  hover: _react.PropTypes.bool
};
Paper.contextTypes = {
  mdTheme: _react.PropTypes.object
};
Paper.defaultProps = {
  zDepth: 1,
  rounded: true,
  fullWidth: true
};
exports.default = Paper;


var styles = {
  root: 'omd_q',
  fullWidth: 'omd_r',
  padded: 'omd_s',
  spaced: 'omd_t',
  rounded: 'omd_u'
};