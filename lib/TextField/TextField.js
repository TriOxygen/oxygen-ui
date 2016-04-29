'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styles = require('../Styles');

var _EnhancedTextArea = require('./EnhancedTextArea');

var _EnhancedTextArea2 = _interopRequireDefault(_EnhancedTextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENTER = 13;

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TextField)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      focused: false,
      value: _this.props.value || _this.props.defaultValue || ''
    }, _this.handleBlur = function () {
      var onBlur = _this.props.onBlur;

      _this.setState({ focused: false });
      onBlur && onBlur();
    }, _this.handleFocus = function () {
      var onFocus = _this.props.onFocus;

      _this.setState({ focused: true });
      onFocus && onFocus();
    }, _this.handleChange = function (event) {
      _this.setState({ value: event.target.value });
    }, _this.handleKey = function (event) {
      var keyCode = event.keyCode;
      var onPressEnter = _this.props.onPressEnter;

      if (keyCode === ENTER) {
        onPressEnter && onPressEnter(_this.state.value);
      }
    }, _this.focus = function () {
      _this.refs.input.focus();
    }, _this.select = function () {
      _this.refs.input.select();
    }, _this.blur = function () {
      _this.refs.input.blur();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoFocus) {
        this._timer = setTimeout(function () {
          _this2.refs.input.focus();
          _this2.refs.input.select();
        }, 200);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
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
      var errorText = _props.errorText;

      var colors = mdTheme.colors[mdColor || contextColor || mdTheme.primary];
      var _state = this.state;
      var focused = _state.focused;
      var value = _state.value;

      return {
        placeholder: {
          color: mdTheme.text.disabled
        },
        underline: {
          borderColor: errorText ? _Styles.Colors.material.red[500].hex : mdTheme.text.disabled,
          transform: focused ? 'scaleX(1)' : null
        },
        underlineActive: {
          borderColor: focused ? colors[500].hex : errorText ? _Styles.Colors.material.red[500].hex : mdTheme.text.disabled,
          transform: focused ? 'scaleX(1)' : null
        },
        label: {
          color: focused && !value ? colors[500].hex : mdTheme.text.secondary
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      if (typeof value !== 'undefined') {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      if (this.props.multiline) {
        return this.refs.input.getValue();
      }
      return this.refs.input.value;
    }
  }, {
    key: 'renderInputElement',
    value: function renderInputElement(props) {
      var _props2 = this.props;
      var readOnly = _props2.readOnly;
      var type = _props2.type;
      var multiline = _props2.multiline;
      var value = this.state.value;

      if (readOnly) {
        return _react2.default.createElement(
          'div',
          _extends({
            ref: 'input',
            className: inputStyles.root,
            type: type,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            tabIndex: 0
          }, props),
          value
        );
      } else {
        if (multiline) {
          return _react2.default.createElement(_EnhancedTextArea2.default, _extends({
            ref: 'input',
            className: inputStyles.root,
            type: type,
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            onKeyUp: this.handleKey,
            onFocus: this.handleFocus
          }, props, {
            value: value
          }));
        }
        return _react2.default.createElement('input', _extends({
          ref: 'input',
          className: inputStyles.root,
          type: type,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          onKeyUp: this.handleKey,
          onFocus: this.handleFocus
        }, props, {
          value: value
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props3 = this.props;
      var placeholder = _props3.placeholder;
      var fullWidth = _props3.fullWidth;
      var dense = _props3.dense;
      var defaultValue = _props3.defaultValue;
      var floatingLabelText = _props3.floatingLabelText;
      var icon = _props3.icon;
      var children = _props3.children;
      var className = _props3.className;
      var onTouchTap = _props3.onTouchTap;
      var errorText = _props3.errorText;

      var other = _objectWithoutProperties(_props3, ['placeholder', 'fullWidth', 'dense', 'defaultValue', 'floatingLabelText', 'icon', 'children', 'className', 'onTouchTap', 'errorText']);

      var _state2 = this.state;
      var focused = _state2.focused;
      var value = _state2.value;

      var placeholderText = void 0;
      var floatingLabelEl = void 0;
      if (floatingLabelText) {
        placeholderText = !value ? placeholder : null;
      } else {
        placeholderText = !value ? placeholder : null;
      }
      var styles = this.getStyles();
      var rootClasses = (0, _classnames2.default)(css.root, className, (_classNames = {}, _defineProperty(_classNames, css.fullWidth, fullWidth), _defineProperty(_classNames, css.hasIcon, icon), _defineProperty(_classNames, css.dense, dense), _defineProperty(_classNames, css.hasFloatingLabel, floatingLabelText), _classNames));
      var placeHolderClasses = (0, _classnames2.default)(placeHolderStyles.root, _defineProperty({}, placeHolderStyles.hasFloatingLabel, floatingLabelText));
      var underlineClasses = (0, _classnames2.default)(underlineStyles.root, underlineStyles.active, _defineProperty({}, underlineStyles.focus, focused));

      if (floatingLabelText) {
        var labelClasses = (0, _classnames2.default)(labelStyles.root, _defineProperty({}, labelStyles.focus, focused || value));
        floatingLabelEl = _react2.default.createElement(
          'label',
          { className: labelClasses, style: styles.label, onTouchTap: this.focus },
          floatingLabelText
        );
      }
      return _react2.default.createElement(
        'div',
        { className: rootClasses, onTouchTap: onTouchTap },
        icon && _react2.default.createElement(
          'div',
          { className: css.iconContainer },
          icon
        ),
        _react2.default.createElement(
          'div',
          { className: placeHolderClasses },
          _react2.default.createElement(
            'span',
            { className: placeHolderStyles.text, style: styles.placeholder },
            placeholderText
          ),
          this.renderInputElement(other),
          floatingLabelText && _react2.default.createElement('hr', { className: underlineStyles.root, style: styles.underLine }),
          floatingLabelText && _react2.default.createElement('hr', { className: underlineClasses, style: styles.underlineActive }),
          floatingLabelEl,
          children
        ),
        errorText && _react2.default.createElement(
          'div',
          { className: css.errorText },
          errorText
        )
      );
    }
  }]);

  return TextField;
}(_react.Component);

TextField.propTypes = {
  children: _react.PropTypes.node,
  onTouchTap: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  autoFocus: _react.PropTypes.bool,
  readOnly: _react.PropTypes.bool,
  dense: _react.PropTypes.bool,
  icon: _react.PropTypes.node,
  mdColor: _react.PropTypes.string,
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  fullWidth: _react.PropTypes.bool,
  floatingLabelText: _react.PropTypes.string,
  onPressEnter: _react.PropTypes.func,
  errorText: _react.PropTypes.string,
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string
};
TextField.defaultProps = {
  type: 'text'
};
TextField.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};
exports.default = TextField;


var css = {
  root: 'omd_ey',
  fullWidth: 'omd_ez',
  dense: 'omd_eA',
  iconContainer: 'omd_eB',
  hasFloatingLabel: 'omd_eC',
  errorText: 'omd_eD',
  hasIcon: 'omd_eE'
};

var underlineStyles = {
  root: 'omd_bS',
  active: 'omd_bT'
};

var inputStyles = {
  root: 'omd_bU'
};

var placeHolderStyles = {
  root: 'omd_bV',
  text: 'omd_bW',
  hasFloatingLabel: 'omd_bX'
};

var labelStyles = {
  root: 'omd_bY',
  focus: 'omd_bZ'
};