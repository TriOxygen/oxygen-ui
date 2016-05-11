'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../Styles');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnhancedTextArea = function (_Component) {
  _inherits(EnhancedTextArea, _Component);

  function EnhancedTextArea() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, EnhancedTextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EnhancedTextArea)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleInput = function (event) {
      var _this2 = _this;
      var _span = _this2._span;

      _span.textContent = event.target.value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EnhancedTextArea, [{
    key: 'focus',
    value: function focus() {
      this._textarea.focus();
    }
  }, {
    key: 'select',
    value: function select() {
      this._textarea.select();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _textarea = this._textarea;
      var _span = this._span;

      if (_textarea.addEventListener) {
        _textarea.addEventListener('input', this.handleInput, false);
        _span.textContent = _textarea.value;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this._textarea.value;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._textarea.removeEventListener('input', this.handleInput);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var limited = this.props.limited;

      return _react2.default.createElement(
        'div',
        { className: css.expandingArea },
        _react2.default.createElement(
          'pre',
          { className: (0, _classnames2.default)(css.shared, css.pre, _defineProperty({}, css.limited, limited)) },
          _react2.default.createElement('span', { ref: function ref(span) {
              return _this3._span = span;
            } }),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement('textarea', _extends({}, this.props, { ref: function ref(textarea) {
            return _this3._textarea = textarea;
          }, className: (0, _classnames2.default)(css.shared, css.textarea, _defineProperty({}, css.limited, limited)) }))
      );
    }
  }]);

  return EnhancedTextArea;
}(_react.Component);

EnhancedTextArea.propTypes = {
  limited: _react.PropTypes.bool
};


var css = {
  expandingArea: 'omd_bL',
  shared: 'omd_bM',
  limited: 'omd_cB',
  textarea: 'omd_bN',
  pre: 'omd_bO'
};

exports.default = EnhancedTextArea;