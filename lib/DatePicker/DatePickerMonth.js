'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _View = require('../View');

var _View2 = _interopRequireDefault(_View);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _DatePickerTitle = require('./DatePickerTitle');

var _DatePickerTitle2 = _interopRequireDefault(_DatePickerTitle);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styles = require('../Styles');

var _ChevronLeft = require('oxygen-md-svg-icons/lib/Navigation/ChevronLeft');

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _ChevronRight = require('oxygen-md-svg-icons/lib/Navigation/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerMonth = function (_Component) {
  _inherits(DatePickerMonth, _Component);

  function DatePickerMonth() {
    _classCallCheck(this, DatePickerMonth);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DatePickerMonth).apply(this, arguments));

    _this.selectDate = function (date) {
      var onSelectDate = _this.props.onSelectDate;

      onSelectDate && onSelectDate(date);
    };

    _this.nextMonth = function () {
      var onNextMonth = _this.props.onNextMonth;

      onNextMonth && onNextMonth();
    };

    _this.previousMonth = function () {
      var onPreviousMonth = _this.props.onPreviousMonth;

      onPreviousMonth && onPreviousMonth();
    };

    var locale = _this.props.locale;

    var weekdaysAndMonths = _this.setupFormats(locale);
    _this.state = _extends({}, weekdaysAndMonths);
    return _this;
  }

  _createClass(DatePickerMonth, [{
    key: 'setupFormats',
    value: function setupFormats(locale) {
      var date = new Date(1970, 2, 1);
      var weekdayFormat = new Intl.DateTimeFormat(locale, {
        weekday: 'short' // ?? what should I put here
      });
      var monthFormat = new Intl.DateTimeFormat(locale, {
        month: 'long' // ?? what should I put here
      });
      this.yearMonthFormat = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long'
      });
      var weekDays = [];
      var months = [];
      for (var i = 2; i < 9; i++) {
        date.setDate(i);
        weekDays.push(weekdayFormat.format(date));
      }
      for (var _i = 0; _i < 12; _i++) {
        date.setMonth(_i);
        months.push(monthFormat.format(date));
      }
      return {
        weekDays: weekDays,
        months: months
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.locale !== nextProps.locale) {
        this.setState(this.setupFormats(nextProps.locale));
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _props = this.props;
      var date = _props.date;
      var chosenDate = _props.chosenDate;
      var locale = _props.locale;
      var nextDate = nextProps.date;
      var nextChosenDate = nextProps.chosenDate;
      var nextLocale = nextProps.locale;

      return date - nextDate !== 0 || chosenDate - nextChosenDate !== 0 || locale !== nextLocale;
    }
  }, {
    key: 'renderWeekDays',
    value: function renderWeekDays() {
      var weekDays = this.state.weekDays;

      return _react2.default.createElement(
        'div',
        { className: css.week },
        weekDays.map(function (day, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: css.day },
            _react2.default.createElement(
              'div',
              { className: css.dayCircle },
              day
            )
          );
        })
      );
    }
  }, {
    key: 'getDayStyle',
    value: function getDayStyle() {
      var theme = this.props.theme || this.context.theme;
      return Object.assign({}, {
        backgroundColor: theme.primary[500].hex,
        color: theme.primary[500].text.default
      });
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var _this2 = this;

      var _props2 = this.props;
      var date = _props2.date;
      var chosenDate = _props2.chosenDate;

      var days = [0, 1, 2, 3, 4, 5, 6];
      var activeClass = (0, _classnames2.default)(css.day, css.active);
      var style = this.getDayStyle();
      var year = date.getFullYear();
      var month = date.getMonth();
      var firstOfMonth = new Date(year, month, 1);
      var lastOfMonth = new Date(year, month + 1, 0);
      chosenDate.setHours(0, 0, 0, 0);
      var start = firstOfMonth.getUTCDay();
      var end = start + lastOfMonth.getDate() - 1;
      var used = firstOfMonth.getUTCDay() + lastOfMonth.getDate();

      var weekCount = Math.ceil(used / 7);
      var weeks = [];

      var _loop = function _loop(week) {
        weeks.push(_react2.default.createElement(
          'div',
          { className: css.week, key: year + '-' + month + '-' + week },
          days.map(function (weekDay) {
            var count = week * 7 + weekDay;
            var monthDay = count - start + 1;
            var date = new Date(year, month, monthDay);
            date.setHours(0, 0, 0, 0);
            var active = date - chosenDate === 0;
            if (count >= start && count <= end) {
              return _react2.default.createElement(
                'div',
                { key: weekDay, onTouchTap: _this2.selectDate.bind(_this2, date), className: activeClass },
                _react2.default.createElement(
                  'div',
                  { style: active && style || {}, className: css.dayCircle },
                  monthDay
                )
              );
            } else {
              return _react2.default.createElement('div', { key: weekDay, className: css.day });
            }
          })
        ));
      };

      for (var week = 0; week < weekCount; week++) {
        _loop(week);
      }
      return weeks;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var date = _props3.date;
      var chosenDate = _props3.chosenDate;
      var locale = _props3.locale;
      var _state = this.state;
      var weekDays = _state.weekDays;
      var months = _state.months;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DatePickerTitle2.default, { locale: locale, date: chosenDate, weekDays: weekDays, months: months }),
        _react2.default.createElement(
          _View2.default,
          { className: css.monthSelector },
          _react2.default.createElement(
            _IconButton2.default,
            { className: css.noGrowFlex, onTouchTap: this.previousMonth },
            _react2.default.createElement(_ChevronLeft2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: css.monthTitle },
            this.yearMonthFormat.format(date)
          ),
          _react2.default.createElement(
            _IconButton2.default,
            { className: css.noGrowFlex, onTouchTap: this.nextMonth },
            _react2.default.createElement(_ChevronRight2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: css.month },
          this.renderWeekDays(),
          this.renderDays()
        )
      );
    }
  }]);

  return DatePickerMonth;
}(_react.Component);

DatePickerMonth.propTypes = {
  children: _react.PropTypes.node,
  weekDays: _react.PropTypes.array,
  months: _react.PropTypes.array
};
DatePickerMonth.contextTypes = {
  theme: _react.PropTypes.object
};
DatePickerMonth.propTypes = {
  date: _react.PropTypes.object,
  chosenDate: _react.PropTypes.object,
  theme: _react.PropTypes.object,
  locale: _react.PropTypes.string,
  children: _react.PropTypes.node,
  onNextMonth: _react.PropTypes.func,
  onPreviousMonth: _react.PropTypes.func,
  onSelectDate: _react.PropTypes.func
};
DatePickerMonth.defaultProps = {};
DatePickerMonth.contextTypes = {
  theme: _react.PropTypes.object
};


var css = {
  month: 'omd_B',
  monthSelector: 'omd_C',
  monthTitle: 'omd_D',
  week: 'omd_E',
  noGrowFlex: 'omd_F',
  day: 'omd_G',
  active: 'omd_H',
  dayCircle: 'omd_I'
};

exports.default = DatePickerMonth;