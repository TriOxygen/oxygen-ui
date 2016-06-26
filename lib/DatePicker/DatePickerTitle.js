'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('../Styles');

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerTitle = function (_Component) {
  _inherits(DatePickerTitle, _Component);

  function DatePickerTitle() {
    _classCallCheck(this, DatePickerTitle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DatePickerTitle).apply(this, arguments));
  }

  _createClass(DatePickerTitle, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var _context = this.context;
      var mdTheme = _context.mdTheme;
      var mdColor = _context.mdColor;

      var colors = mdTheme.colors[mdColor || mdTheme.primary];
      return Object.assign({}, {
        backgroundColor: colors[500].hex,
        color: colors[500].text.default
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var date = _props.date;
      var weekDays = _props.weekDays;
      var months = _props.months;

      var year = date && date.getFullYear();
      var month = date && months[date.getMonth()];
      var dayOfTheMonth = date && date.getDate();
      var weekDay = date && weekDays[(date.getDay() + 6) % 7];

      return _react2.default.createElement(
        'div',
        { style: this.getStyle() },
        _react2.default.createElement(
          'h2',
          { className: css.subheading },
          year
        ),
        _react2.default.createElement(
          'h1',
          { className: css.heading },
          weekDay,
          ', ',
          month,
          ' ',
          dayOfTheMonth
        )
      );
    }
  }]);

  return DatePickerTitle;
}(_react.Component);

DatePickerTitle.propTypes = {
  locale: _react.PropTypes.string,
  date: _react.PropTypes.object,
  children: _react.PropTypes.node,
  weekDays: _react.PropTypes.array,
  months: _react.PropTypes.array
};
DatePickerTitle.contextTypes = {
  mdTheme: _react.PropTypes.object,
  mdColor: _react.PropTypes.string
};


var css = {
  heading: 'omd_O',
  subheading: 'omd_P'
};

exports.default = DatePickerTitle;