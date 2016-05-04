'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Toggle2 = require('./Toggle');

var _Toggle3 = _interopRequireDefault(_Toggle2);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Toggle) {
  _inherits(Checkbox, _Toggle);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'getStyles',
    value: function getStyles() {
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var contextColor = _context.mdColor;
      var _props = this.props;
      var mdColor = _props.mdColor;
      var defaultColor = _props.defaultColor;
      var checked = this.state.checked;

      var colors = mdTheme.colors[mdColor || contextColor || defaultColor];
      return {
        backgroundColor: checked ? colors[500].hex : null,
        borderColor: checked ? colors[500].hex : null
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props2 = this.props;
      var disabled = _props2.disabled;
      var left = _props2.left;
      var fullWidth = _props2.fullWidth;
      var label = _props2.label;
      var rightAlign = _props2.rightAlign;
      var _state = this.state;
      var checked = _state.checked;
      var active = _state.active;

      var tabIndex = null;

      var toggleClasses = (0, _classnames2.default)(checkStyles.border, (_classNames = {}, _defineProperty(_classNames, checkStyles.checked, checked), _defineProperty(_classNames, checkStyles.active, active), _classNames));

      if (!disabled) {
        tabIndex = 0;
      }

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(checkStyles.root, (_classNames2 = {}, _defineProperty(_classNames2, checkStyles.left, left), _defineProperty(_classNames2, checkStyles.rightAlign, rightAlign), _defineProperty(_classNames2, checkStyles.fullWidth, fullWidth), _defineProperty(_classNames2, checkStyles.disabled, disabled), _classNames2)),
          onTouchTap: this.handleTouchTap.bind(this),
          onKeyPress: this.handleKeyPress.bind(this),
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this),
          disabled: disabled,
          tabIndex: tabIndex
        },
        left ? label : null,
        _react2.default.createElement(
          'div',
          {
            style: this.getStyles(),
            className: toggleClasses
          },
          _react2.default.createElement('span', { className: checkStyles.check })
        ),
        !left ? label : null
      );
    }
  }]);

  return Checkbox;
}(_Toggle3.default);

exports.default = Checkbox;


var checkStyles = {
  root: 'omd_be',
  fullWidth: 'omd_bf',
  rightAlign: 'omd_bg',
  disabled: 'omd_bh',
  border: 'omd_bi',
  left: 'omd_bj',
  active: 'omd_bk',
  checked: 'omd_bl',
  check: 'omd_bm'
};