'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RangeSlider = require('./RangeSlider');

var _RangeSlider2 = _interopRequireDefault(_RangeSlider);

var _pureRender = require('./Utils/pureRender');

var _pureRender2 = _interopRequireDefault(_pureRender);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = {
  root: 'omd_dc',
  label: 'omd_dd'
};

var RangeSelector = function (_Component) {
  _inherits(RangeSelector, _Component);

  function RangeSelector() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, RangeSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RangeSelector)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      value: _this.props.value || _this.props.defaultValue || 0
    }, _this.handleChange = function (value) {
      var onChange = _this.props.onChange;

      _this.setState({ value: value });
      onChange && onChange(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RangeSelector, [{
    key: 'getValue',
    value: function getValue() {
      return this.state.value;
    }
  }, {
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
    value: function getStyles() {
      var mdTheme = this.context.mdTheme;

      return {
        label: {
          color: mdTheme.text.secondary
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var label = _props.label;

      var other = _objectWithoutProperties(_props, ['label']);

      var value = this.state.value;

      var styles = this.getStyles();
      return _react2.default.createElement(
        'div',
        { className: css.root },
        _react2.default.createElement(
          'div',
          { className: css.label, style: styles.label },
          label,
          ' : ',
          value
        ),
        _react2.default.createElement(_RangeSlider2.default, _extends({}, other, { value: value, onChange: this.handleChange }))
      );
    }
  }]);

  return RangeSelector;
}(_react.Component);

RangeSelector.propTypes = {
  value: _react.PropTypes.number,
  defaultValue: _react.PropTypes.number,
  label: _react.PropTypes.node,
  onChange: _react.PropTypes.func
};
RangeSelector.contextTypes = {
  mdTheme: _react.PropTypes.object
};
exports.default = (0, _pureRender2.default)(RangeSelector);