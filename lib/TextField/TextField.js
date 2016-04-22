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
    }, _this.focus = function () {
      _this.refs.input.focus();
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
    key: 'getPlaceholderStyle',
    value: function getPlaceholderStyle() {
      var theme = this.props.theme || this.context.theme;
      return Object.assign({}, {
        color: theme.text.disabled
      });
    }
  }, {
    key: 'getUnderlineStyle',
    value: function getUnderlineStyle() {
      var active = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var theme = this.props.theme || this.context.theme;
      var errorText = this.props.errorText;
      var focused = this.state.focused;

      return Object.assign({
        borderColor: active && focused ? theme.primary1 : errorText ? _Styles.Colors.material.red[500].hex : theme.text.disabled,
        transform: focused ? 'scaleX(1)' : null
      });
    }
  }, {
    key: 'getLabelStyle',
    value: function getLabelStyle() {
      var theme = this.props.theme || this.context.theme;
      var _state = this.state;
      var focused = _state.focused;
      var value = _state.value;

      return Object.assign({
        color: focused && !value ? theme.primary1 : theme.text.secondary
      });
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
      var _props = this.props;
      var readOnly = _props.readOnly;
      var type = _props.type;
      var multiline = _props.multiline;
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

      var _props2 = this.props;
      var placeholder = _props2.placeholder;
      var dense = _props2.dense;
      var defaultValue = _props2.defaultValue;
      var floatingLabelText = _props2.floatingLabelText;
      var icon = _props2.icon;
      var children = _props2.children;
      var className = _props2.className;
      var onTouchTap = _props2.onTouchTap;
      var errorText = _props2.errorText;

      var other = _objectWithoutProperties(_props2, ['placeholder', 'dense', 'defaultValue', 'floatingLabelText', 'icon', 'children', 'className', 'onTouchTap', 'errorText']);

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
      var rootClasses = (0, _classnames2.default)(styles.root, className, (_classNames = {}, _defineProperty(_classNames, styles.hasIcon, icon), _defineProperty(_classNames, styles.dense, dense), _defineProperty(_classNames, styles.hasFloatingLabel, floatingLabelText), _classNames));
      var placeHolderClasses = (0, _classnames2.default)(placeHolderStyles.root, _defineProperty({}, placeHolderStyles.hasFloatingLabel, floatingLabelText));
      var underlineClasses = (0, _classnames2.default)(underlineStyles.root, underlineStyles.active, _defineProperty({}, underlineStyles.focus, focused));

      if (floatingLabelText) {
        var labelClasses = (0, _classnames2.default)(labelStyles.root, _defineProperty({}, labelStyles.focus, focused || value));
        floatingLabelEl = _react2.default.createElement(
          'label',
          { className: labelClasses, style: this.getLabelStyle(), onTouchTap: this.focus },
          floatingLabelText
        );
      }
      return _react2.default.createElement(
        'div',
        { className: rootClasses, onTouchTap: onTouchTap },
        icon && _react2.default.createElement(
          'div',
          { className: styles.iconContainer },
          icon
        ),
        _react2.default.createElement(
          'div',
          { className: placeHolderClasses },
          _react2.default.createElement(
            'span',
            { className: placeHolderStyles.text, style: this.getPlaceholderStyle() },
            placeholderText
          ),
          this.renderInputElement(other),
          floatingLabelText && _react2.default.createElement('hr', { className: underlineStyles.root, style: this.getUnderlineStyle() }),
          floatingLabelText && _react2.default.createElement('hr', { className: underlineClasses, style: this.getUnderlineStyle(true) }),
          floatingLabelEl,
          children
        ),
        errorText && _react2.default.createElement(
          'div',
          { className: styles.errorText },
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
  theme: _react.PropTypes.object,
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  fullWidth: _react.PropTypes.bool,
  floatingLabelText: _react.PropTypes.string,
  errorText: _react.PropTypes.string,
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string
};
TextField.defaultProps = {
  type: 'text'
};
TextField.contextTypes = {
  theme: _react.PropTypes.object
};
exports.default = TextField;


var styles = {
  root: 'omd_bM',
  dense: 'omd_bN',
  iconContainer: 'omd_bO',
  hasFloatingLabel: 'omd_bP',
  errorText: 'omd_bQ',
  hasIcon: 'omd_bR'
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