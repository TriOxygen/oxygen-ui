import React, { Component, PropTypes } from 'react';
import View from '../View';
import IconButton from '../IconButton';
import DatePickerTitle from './DatePickerTitle';
import classNames from 'classnames';
import { Units } from '../Styles';
import NavigationChevronLeft from 'oxygen-md-svg-icons/lib/Navigation/ChevronLeft';
import NavigationChevronRight from 'oxygen-md-svg-icons/lib/Navigation/ChevronRight';

class DatePickerMonth extends Component {
  static propTypes = {
    children: PropTypes.node,
    weekDays: PropTypes.array,
    months: PropTypes.array
  };

  static propTypes = {
    date: PropTypes.object,
    chosenDate: PropTypes.object,
    locale: PropTypes.string,
    children: PropTypes.node,
    onNextMonth: PropTypes.func,
    onPreviousMonth: PropTypes.func,
    onSelectDate: PropTypes.func,
  };

  static defaultProps = {
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string,
  };

  constructor() {
    super(...arguments);
    const { locale } = this.props;
    const weekdaysAndMonths = this.setupFormats(locale);
    this.state = {
      ...weekdaysAndMonths
    };
  }

  setupFormats(locale) {
    const date = new Date(1970, 2, 1);
    const weekdayFormat = new Intl.DateTimeFormat(locale, {
      weekday: 'short' // ?? what should I put here
    });
    const monthFormat = new Intl.DateTimeFormat(locale, {
      month: 'long' // ?? what should I put here
    });
    this.yearMonthFormat = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long'
    })
    const weekDays = [];
    const months = [];
    for (let i = 2; i < 9; i++) {
      date.setDate(i);
      weekDays.push(weekdayFormat.format(date));
    }
    for (let i = 0; i < 12; i++) {
      date.setMonth(i);
      months.push(monthFormat.format(date));
    }
    return {
      weekDays,
      months
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locale !== nextProps.locale) {
      this.setState(this.setupFormats(nextProps.locale));
    }
  }

  shouldComponentUpdate(nextProps) {
    const { date, chosenDate, locale } = this.props;
    const { date: nextDate, chosenDate: nextChosenDate, locale: nextLocale } = nextProps;
    return date - nextDate !== 0 || chosenDate - nextChosenDate !== 0 || locale !== nextLocale;
  }

  renderWeekDays() {
    const { weekDays } = this.state;
    return (
      <div className={css.week}>{
        weekDays.map((day, index) => {
          return <div key={index} className={css.day}><div className={css.dayCircle}>{day}</div></div>;
        })
      }</div>
    );
  }

  getDayStyle() {
    const { mdTheme, mdColor } = this.context;
    const colors = mdTheme.colors[mdColor || mdTheme.primary];
    return Object.assign({}, {
      backgroundColor: colors[500].hex,
      color: colors[500].text.default
    });
  }

  renderDays() {
    const { date, chosenDate } = this.props;
    const days = [0, 1, 2, 3, 4, 5, 6];
    const activeClass = classNames(css.day, css.active);
    const style = this.getDayStyle();
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstOfMonth = new Date(year, month , 1);
    const lastOfMonth = new Date(year, month + 1, 0);
    chosenDate.setHours(0, 0, 0, 0);
    const start = firstOfMonth.getUTCDay();
    const end = start + lastOfMonth.getDate() - 1;
    const used = firstOfMonth.getUTCDay() + lastOfMonth.getDate();

    const weekCount = Math.ceil( used / 7);
    const weeks = [];
    for (let week = 0; week < weekCount; week++) {
      weeks.push(
        <div className={css.week} key={year+'-'+month+'-'+week}>{
          days.map(weekDay => {
            const count = week * 7 + weekDay;
            const monthDay = count - start + 1;
            const date = new Date(year, month, monthDay);
            date.setHours(0, 0, 0, 0);
            const active = date - chosenDate === 0;
            if (count >= start && count <= end) {
              return <div key={weekDay} onTouchTap={this.selectDate.bind(this, date)} className={activeClass}><div style={active && style || {}} className={css.dayCircle}>{monthDay}</div></div>;
            } else {
              return <div key={weekDay} className={css.day} />;
            }
          })
        }</div>
      );
    }
    return weeks;
  }

  selectDate = date => {
    const { onSelectDate } = this.props;
    onSelectDate && onSelectDate(date);
  };

  nextMonth = () => {
    const { onNextMonth } = this.props;
    onNextMonth && onNextMonth();
  };

  previousMonth = () => {
    const { onPreviousMonth } = this.props;
    onPreviousMonth && onPreviousMonth();
  };

  render() {
    const { date, chosenDate, locale } = this.props;
    const { weekDays, months } = this.state;
    return (
      <div>
        <DatePickerTitle locale={locale} date={chosenDate} weekDays={weekDays} months={months}/>
        <View className={css.monthSelector}>
          <IconButton className={css.noGrowFlex} onTouchTap={this.previousMonth}>
            <NavigationChevronLeft />
          </IconButton>
          <div className={css.monthTitle}>
            {this.yearMonthFormat.format(date)}
          </div>
          <IconButton className={css.noGrowFlex} onTouchTap={this.nextMonth}>
            <NavigationChevronRight />
          </IconButton>
        </View>
        <div className={css.month}>
          {this.renderWeekDays()}
          {this.renderDays()}
        </div>
      </div>
    );
  }
}

const css = oxygenCss({
  month: {
    padding: Units.phone.gutter.mini
  },
  monthSelector: {
    lineHeight: '48px'
  },
  monthTitle: {
    textAlign: 'center',
    flexGrow: 1,
  },
  week: {
    display: 'flex',
    flexDirection: 'row'
  },
  noGrowFlex: {
    display: 'flex'
  },
  day: {
    flexGrow: 1,
    width: 36,
    // padding: 4,
    boxSizing: 'border-box',
    textAlign: 'center',
    height: 36,
    position: 'relative',
    overflow: 'hidden',
    '&active': {
      cursor: 'pointer',
      position: 'relative',
      '>dayCircle': {
        borderRadius: '50%',
        position: 'absolute',
        lineHeight: '32px',
        left: 2,
        top: 2,
        bottom: 2,
        right: 2,
      }
    }
  },
});

export default DatePickerMonth;
