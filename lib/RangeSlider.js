'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styles = require('./Styles');

var _reactMotion = require('react-motion');

var _pureRender = require('./Utils/pureRender');

var _pureRender2 = _interopRequireDefault(_pureRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function maxmin(pos, min, max) {
  if (pos < min) {
    return min;
  }
  if (pos > max) {
    return max;
  }
  return pos;
}

var constants = {
  horizontal: {
    dimension: 'width',
    direction: 'left',
    coordinate: 'x'
  },
  vertical: {
    dimension: 'height',
    direction: 'top',
    coordinate: 'y'
  }
};

var css = {
  root: 'omd_c-',
  fill: 'omd_da',
  handle: 'omd_db'
};

var RangeSlider = function (_Component) {
  _inherits(RangeSlider, _Component);

  function RangeSlider() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, RangeSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RangeSlider)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      value: _this.props.value || _this.props.defaultValue || 0
    }, _this.setup = function () {
      var orientation = _this.props.orientation;

      var dimension = capitalize(constants[orientation].dimension);
      var sliderPos = _this._slider['offset' + dimension];
      var handlePos = _this._handle['offset' + dimension];
      _this._limit = sliderPos - handlePos + 8;
      _this._grab = handlePos / 2;
    }, _this.handleKnobMouseDown = function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.setup();
      document.addEventListener('mousemove', _this.handleDrag);
      document.addEventListener('mouseup', _this.handleDragEnd);
    }, _this.handleDrag = function (event) {
      var onChange = _this.props.onChange;

      var value = _this.position(event);
      if (_this.state.value !== value) {
        _this.setState({ value: value });
        onChange && onChange(value);
      }
    }, _this.setPosition = function (event) {
      _this.setup();
      _this.handleDrag(event);
    }, _this.handleDragEnd = function () {
      document.removeEventListener('mousemove', _this.handleDrag);
      document.removeEventListener('mouseup', _this.handleDragEnd);
    }, _this.handleNoop = function (event) {
      event.stopPropagation();
      event.preventDefault();
    }, _this.getValueFromPosition = function (pos) {
      var _this$props = _this.props;
      var orientation = _this$props.orientation;
      var min = _this$props.min;
      var max = _this$props.max;
      var step = _this$props.step;

      var percentage = maxmin(pos, 0, _this._limit) / (_this._limit || 1);

      return step * Math.round(percentage * (max - min) / step) + min;
    }, _this.position = function (e) {
      var orientation = _this.props.orientation;

      var coordinateStyle = constants[orientation].coordinate;
      var directionStyle = constants[orientation].direction;
      var coordinate = !e.touches ? e['client' + capitalize(coordinateStyle)] : e.touches[0]['client' + capitalize(coordinateStyle)];
      var direction = _this._slider.getBoundingClientRect()[directionStyle];
      var pos = coordinate - direction - _this._grab;
      return _this.getValueFromPosition(pos);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RangeSlider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      if (typeof value !== 'undefined') {
        this.setState({ value: value });
      }
      if (nextProps.defaultValue !== this.props.defaultValue) {
        this.setState({ value: nextProps.defaultValue });
      }
    }
  }, {
    key: 'getStyles',
    value: function getStyles(value) {
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var contextColor = _context.mdColor;
      var _props = this.props;
      var mdColor = _props.mdColor;
      var defaultColor = _props.defaultColor;
      var orientation = _props.orientation;
      var max = _props.max;
      var min = _props.min;

      var colors = mdTheme.colors[mdColor || contextColor || defaultColor];

      var dimension = constants[orientation].dimension;
      var direction = constants[orientation].direction;

      var percentage = Math.round(100 * (value - min) / (max - min)) / 100;
      return {
        handle: _defineProperty({
          backgroundColor: colors[500].hex
        }, direction, percentage * 100 + '%'),
        fill: _defineProperty({
          backgroundColor: colors[200].hex
        }, dimension, percentage * 100 + '%')
      };
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var orientation = _props2.orientation;
      var className = _props2.className;
      var value = this.state.value;

      var classes = (0, _classnames2.default)(css.root, css[orientation], className);
      return _react2.default.createElement(
        _reactMotion.Motion,
        { style: { value: (0, _reactMotion.spring)(value, { stiffness: 300, damping: 25, precision: 0.01 }) } },
        function (interpolated) {
          var styles = _this2.getStyles(interpolated.value);
          return _react2.default.createElement(
            'div',
            {
              ref: function ref(_slider) {
                return _this2._slider = _slider;
              },
              className: classes,
              onMouseDown: _this2.setPosition,
              onClick: _this2.handleNoop
            },
            _react2.default.createElement('div', {
              ref: function ref(_fill) {
                return _this2._fill = _fill;
              },
              className: css.fill,
              style: styles.fill
            }),
            _react2.default.createElement('div', {
              ref: function ref(_handle) {
                return _this2._handle = _handle;
              },
              className: css.handle,
              onMouseDown: _this2.handleKnobMouseDown,
              onTouchStart: _this2.handleKnobMouseDown,
              onTouchMove: _this2.handleDrag,
              onTouchEnd: _this2.handleDragEnd,
              onClick: _this2.handleNoop,
              style: styles.handle
            })
          );
        }
      );
    }
  }]);

  return RangeSlider;
}(_react.Component);

RangeSlider.propTypes = {
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  step: _react.PropTypes.number,
  value: _react.PropTypes.number,
  orientation: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  className: _react.PropTypes.string,
  defaultColor: _react.PropTypes.string,
  mdColor: _react.PropTypes.string,
  defaultValue: _react.PropTypes.number
};
RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  orientation: 'horizontal',
  defaultColor: 'teal'
};
RangeSlider.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};
exports.default = (0, _pureRender2.default)(RangeSlider);