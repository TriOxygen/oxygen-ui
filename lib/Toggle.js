'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Ink = require('./Ink');

var _Ink2 = _interopRequireDefault(_Ink);

var _Styles = require('./Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Toggle)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      checked: _this.props.checked,
      active: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toggle, [{
    key: 'handleTouchTap',
    value: function handleTouchTap() {
      var _props = this.props;
      var disabled = _props.disabled;
      var onChange = _props.onChange;

      if (!disabled) {
        var checked = this.state.checked;

        this.setState({ checked: !checked });
        if (onChange) {
          onChange(!checked);
        }
      }
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
      var theme = this.props.theme || this.context.theme;
      var _props2 = this.props;
      var primary = _props2.primary;
      var secondary = _props2.secondary;
      var checked = this.state.checked;

      var themeStyles = {};
      if (primary && checked) {
        themeStyles = {
          backgroundColor: theme.primary[200].hex
        };
      } else if (secondary && checked) {
        themeStyles = {
          backgroundColor: theme.secondary[200].hex
        };
      }
      return themeStyles;
    }
  }, {
    key: 'getToggleStyles',
    value: function getToggleStyles() {
      var theme = this.props.theme || this.context.theme;
      var _props3 = this.props;
      var primary = _props3.primary;
      var secondary = _props3.secondary;
      var checked = this.state.checked;

      var themeStyles = {};
      if (primary && checked) {
        themeStyles = {
          backgroundColor: theme.primary[500].hex
        };
      } else if (secondary && checked) {
        themeStyles = {
          backgroundColor: theme.secondary[500].hex
        };
      }
      return themeStyles;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props4 = this.props;
      var left = _props4.left;
      var fullWidth = _props4.fullWidth;
      var label = _props4.label;
      var disabled = _props4.disabled;
      var rightAlign = _props4.rightAlign;
      var _state = this.state;
      var checked = _state.checked;
      var active = _state.active;

      var tabIndex = null;
      var ink = void 0;

      var labelClasses = (0, _classnames2.default)(toggleStyles.border, (_classNames = {}, _defineProperty(_classNames, toggleStyles.checked, checked), _defineProperty(_classNames, toggleStyles.active, active), _classNames));

      if (!disabled) {
        tabIndex = 0;
        ink = _react2.default.createElement(_Ink2.default, { radius: 56 });
      }

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(toggleStyles.root, (_classNames2 = {}, _defineProperty(_classNames2, toggleStyles.left, left), _defineProperty(_classNames2, toggleStyles.rightAlign, rightAlign), _defineProperty(_classNames2, toggleStyles.disabled, disabled), _defineProperty(_classNames2, toggleStyles.fullWidth, fullWidth), _classNames2)),
          disabled: disabled,
          onKeyPress: this.handleKeyPress.bind(this),
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this),
          tabIndex: tabIndex,
          onTouchTap: this.handleTouchTap.bind(this)
        },
        left ? label : null,
        _react2.default.createElement(
          'div',
          {
            className: labelClasses,
            style: this.getStyles()
          },
          _react2.default.createElement(
            'div',
            { className: toggleStyles.toggle, style: this.getToggleStyles() },
            ink
          )
        ),
        !left ? label : null
      );
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.propTypes = {
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  rightAlign: _react.PropTypes.bool,
  left: _react.PropTypes.bool,
  fullWidth: _react.PropTypes.bool,
  label: _react.PropTypes.node,
  primary: _react.PropTypes.bool,
  theme: _react.PropTypes.object,
  secondary: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};
Toggle.defaultProps = {};
Toggle.contextTypes = {
  theme: _react.PropTypes.object
};
exports.default = Toggle;


var toggleStyles = {
  root: 'omd_bV',
  fullWidth: 'omd_bW',
  rightAlign: 'omd_bX',
  disabled: 'omd_bY',
  border: 'omd_bZ',
  left: 'omd_b0',
  active: 'omd_b1',
  checked: 'omd_b2',
  toggle: 'omd_b3'
};