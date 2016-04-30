'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _ButtonContainer = require('../ButtonContainer');

var _ButtonContainer2 = _interopRequireDefault(_ButtonContainer);

var _FlatButton = require('../FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Styles = require('../Styles');

var _DatePickerMonth = require('./DatePickerMonth');

var _DatePickerMonth2 = _interopRequireDefault(_DatePickerMonth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ESC = 27;

var DatePickerContainer = function (_Component) {
  _inherits(DatePickerContainer, _Component);

  function DatePickerContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePickerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DatePickerContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      date: _this.props.date || new Date(),
      chosenDate: _this.props.date || new Date()
    }, _this.handleTap = function () {
      if (_this.props.onRequestClose && _this.props.opacity >= 1) {
        _this.props.onRequestClose();
      }
    }, _this.handleKey = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === ESC && _this.props.onRequestClose) {
        _this.props.onRequestClose();
      }
    }, _this.stop = function (event) {
      if (_this.props.onRequestOpen) {
        _this.props.onRequestOpen();
      }
      event.preventDefault();
      event.stopPropagation();
    }, _this.handleCancel = function () {
      if (_this.props.onRequestClose) {
        _this.props.onRequestClose();
      }
    }, _this.handleOK = function () {
      var _this$props = _this.props;
      var onOK = _this$props.onOK;
      var onRequestClose = _this$props.onRequestClose;
      var chosenDate = _this.state.chosenDate;

      onOK && onOK(chosenDate);
      onRequestClose && onRequestClose();
    }, _this.setChosenDate = function (chosenDate) {
      if (_this.state.chosenDate - chosenDate !== 0) {
        var onChange = _this.props.onChange;

        _this.setState({ chosenDate: chosenDate });
        onChange && onChange(chosenDate);
      }
    }, _this.nextMonth = function () {
      var date = new Date(_this.state.date.getTime());
      var next = void 0;
      if (date.getMonth() == 11) {
        next = new Date(date.getFullYear() + 1, 0, 1);
      } else {
        next = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      }
      _this.setState({ date: next });
    }, _this.previousMonth = function () {
      var date = new Date(_this.state.date.getTime());
      var previous = void 0;
      if (date.getMonth() == 0) {
        previous = new Date(date.getFullYear() - 1, 11, 1);
      } else {
        previous = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      }
      _this.setState({ date: previous });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keyup', this.handleKey);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keyup', this.handleKey);
    }
  }, {
    key: 'getDate',
    value: function getDate() {
      return this.state.chosenDate;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var top = _props.top;
      var y = _props.y;
      var opacity = _props.opacity;
      var cancel = _props.cancel;
      var ok = _props.ok;

      var other = _objectWithoutProperties(_props, ['top', 'y', 'opacity', 'cancel', 'ok']);

      var _state = this.state;
      var chosenDate = _state.chosenDate;
      var date = _state.date;

      return _react2.default.createElement(
        _Portal2.default,
        { dialog: true },
        _react2.default.createElement(_Overlay2.default, {
          onTouchTap: this.handleTap,
          key: 'dialog', onKeyup: this.handleKey,
          style: { top: top + '%', opacity: opacity }
        }),
        _react2.default.createElement(
          _Paper2.default,
          {
            rounded: false,
            className: css.container,
            onTouchTap: this.stop,
            style: {
              // scale: y / 100,
              opacity: opacity,
              transform: 'translate3d(0, ' + y * _Styles.Units.phone.keylineIncrement * 2 / 100 + 'px, 0)'
            }
          },
          _react2.default.createElement(_DatePickerMonth2.default, _extends({}, other, {
            date: date,
            chosenDate: chosenDate,
            onSelectDate: this.setChosenDate,
            onPreviousMonth: this.previousMonth,
            onNextMonth: this.nextMonth
          })),
          _react2.default.createElement(
            _ButtonContainer2.default,
            { alignRight: true, fullWidth: true },
            _react2.default.createElement(_FlatButton2.default, { primary: true, label: cancel, onTouchTap: this.handleCancel }),
            _react2.default.createElement(_FlatButton2.default, { primary: true, label: ok, onTouchTap: this.handleOK })
          )
        )
      );
    }
  }]);

  return DatePickerContainer;
}(_react.Component);

DatePickerContainer.propTypes = {
  date: _react.PropTypes.object,
  cancel: _react.PropTypes.string,
  ok: _react.PropTypes.string,
  children: _react.PropTypes.node,
  top: _react.PropTypes.number,
  y: _react.PropTypes.number,
  opacity: _react.PropTypes.number,
  onRequestClose: _react.PropTypes.func,
  onRequestOpen: _react.PropTypes.func,
  onOK: _react.PropTypes.func,
  onChange: _react.PropTypes.func
};
DatePickerContainer.defaultProps = {
  cancel: 'Cancel',
  ok: 'Ok'
};
exports.default = DatePickerContainer;


var css = {
  container: 'omd_bP'
};