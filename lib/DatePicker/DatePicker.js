'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _DatePickerContainer = require('./DatePickerContainer');

var _DatePickerContainer2 = _interopRequireDefault(_DatePickerContainer);

var _TextField = require('../TextField/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatePicker).apply(this, arguments));

    _this.state = {
      open: false,
      value: _this.props.defaultValue
    };

    _this.open = function (event) {
      if (!_this.state.open) {
        _this.setState({ open: true });
      }
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    _this.close = function () {
      if (_this.state.open) {
        _this.setState({ open: false });
      }
    };

    _this.handleOK = function (date) {
      var onOK = _this.props.onOK;

      _this.setState({ value: date });
      onOK && onOK(date);
    };

    _this.setupFormats(_this.props.locale);
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.locale !== nextProps.locale) {
        this.setupFormats(this.props.locale);
      }
    }
  }, {
    key: 'setupFormats',
    value: function setupFormats(locale) {
      this.dateTimeFormat = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.date;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state;
      var open = _state.open;
      var value = _state.value;
      var _props = this.props;
      var placeholder = _props.placeholder;
      var fullWidth = _props.fullWidth;
      var type = _props.type;
      var floatingLabelText = _props.floatingLabelText;

      var other = _objectWithoutProperties(_props, ['placeholder', 'fullWidth', 'type', 'floatingLabelText']);

      var readable = value && this.dateTimeFormat.format(value);
      return _react2.default.createElement(
        _TextField2.default,
        {
          placeholder: placeholder,
          fullWidth: fullWidth,
          type: type,
          floatingLabelText: floatingLabelText,
          value: readable,
          ref: 'field',
          onFocus: this.open,
          onTouchTap: this.open
        },
        _react2.default.createElement(
          _reactMotion.Motion,
          { style: { y: (0, _reactMotion.spring)(open ? 100 : 0, { stiffness: 300, damping: 25 }), opacity: (0, _reactMotion.spring)(open ? 1 : 0), top: open ? 0 : -100 } },
          function (interpolated) {
            if (interpolated.opacity > 0) {
              return _react2.default.createElement(_DatePickerContainer2.default, _extends({}, other, { onOK: _this2.handleOK }, interpolated, { onRequestClose: _this2.close, onRequestOpen: _this2.open }));
            }
            return null;
          }
        )
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  onOK: _react.PropTypes.func,
  locale: _react.PropTypes.string,
  type: _react.PropTypes.string,
  fullWidth: _react.PropTypes.bool,
  floatingLabelText: _react.PropTypes.string,
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string
};
DatePicker.defaultProps = {
  locale: 'en-US'
};
exports.default = DatePicker;