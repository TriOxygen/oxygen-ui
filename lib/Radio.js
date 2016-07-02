'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_Component) {
  _inherits(Radio, _Component);

  function Radio() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Radio)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      active: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Radio, [{
    key: 'handleTouchTap',
    value: function handleTouchTap() {
      var disabled = this.props.disabled;

      !disabled && this.props.onTouchTap && this.props.onTouchTap(this.props.value);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({ active: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({ active: false });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      if (e.keyCode === 0 || e.keyCode === 32 || e.keyCode == 13) {
        this.handleTouchTap();
        e.preventDefault();
      }
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var contextColor = _context.mdColor;
      var _props = this.props;
      var mdColor = _props.mdColor;
      var checked = _props.checked;

      var colors = mdTheme.colors[mdColor || contextColor || this.props.defaultColor];
      return {
        root: {
          borderColor: colors[500].hex
        },
        check: {
          backgroundColor: colors[500].hex
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props2 = this.props;
      var disabled = _props2.disabled;
      var checked = _props2.checked;
      var label = _props2.label;
      var left = _props2.left;
      var fullWidth = _props2.fullWidth;
      var active = this.state.active;

      var tabIndex = null;

      if (!disabled) {
        tabIndex = 0;
      }

      var classes = (0, _classnames2.default)(radioStyles.border, (_classNames = {}, _defineProperty(_classNames, radioStyles.active, active), _defineProperty(_classNames, radioStyles.checked, checked), _classNames));

      var styles = this.getStyles();
      return _react2.default.createElement(
        'div',
        {
          disabled: disabled,
          onKeyPress: this.handleKeyPress.bind(this),
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this),
          className: (0, _classnames2.default)(radioStyles.root, (_classNames2 = {}, _defineProperty(_classNames2, radioStyles.left, left), _defineProperty(_classNames2, radioStyles.fullWidth, fullWidth), _defineProperty(_classNames2, radioStyles.disabled, disabled), _classNames2)),
          tabIndex: tabIndex,
          onTouchTap: this.handleTouchTap.bind(this)
        },
        left ? label : null,
        _react2.default.createElement(
          'div',
          { className: classes, style: styles.root },
          _react2.default.createElement('span', { className: radioStyles.check, style: styles.check })
        ),
        !left ? label : null
      );
    }
  }]);

  return Radio;
}(_react.Component);

Radio.propTypes = {
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool, _react2.default.PropTypes.array, _react2.default.PropTypes.object]),
  fullWidth: _react.PropTypes.bool,
  label: _react.PropTypes.node,
  left: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  mdColor: _react.PropTypes.string,
  defaultColor: _react.PropTypes.string,
  onTouchTap: _react.PropTypes.func
};
Radio.defaultProps = {
  defaultColor: 'teal'
};
Radio.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};


var radioStyles = {
  root: 'oui_fa',
  disabled: 'oui_fb',
  fullWidth: 'oui_fc',
  left: 'oui_fd',
  border: 'oui_fe',
  active: 'oui_ff',
  checked: 'oui_fg',
  check: 'oui_fh'
};

exports.default = Radio;