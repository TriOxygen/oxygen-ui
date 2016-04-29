import React, { Component, PropTypes } from 'react';
import { Units, Typography } from '../Styles';
import shallowCompare from 'react-addons-shallow-compare';

class DatePickerTitle extends Component {
  static propTypes = {
    locale: PropTypes.string,
    date: PropTypes.object,
    children: PropTypes.node,
    weekDays: PropTypes.array,
    months: PropTypes.array,
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  shouldComponentUpdate(nextProps) {
    return shallowCompare(this, nextProps);
  }

  getStyle() {
    const { mdTheme, mdColor } = this.context;
    const colors = mdTheme.colors[mdColor || mdTheme.primary];
    return Object.assign({}, {
      backgroundColor: colors[500].hex,
      color: colors[500].text.default
    });
  }

  render() {
    const { date, weekDays, months } = this.props;
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dayOfTheMonth = date.getDate();
    const weekDay = weekDays[(date.getDay() + 6) % 7];

    return (
      <div style={this.getStyle()}>
        <h2 className={css.subheading}>{year}</h2>
        <h1 className={css.heading}>{weekDay}, {month} {dayOfTheMonth}</h1>
      </div>
    );
  }
}

const css = oxygenCss({
  heading: {
    fontSize: Typography.phone.title.fontSize,
    fontWeight: Typography.phone.title.fontWeight,
    margin: 0,
    padding: `0 ${Units.phone.gutter.less}px ${Units.phone.gutter.less}px ${Units.phone.gutter.less}px`
  },
  subheading: {
    fontSize: Typography.phone.subheading.fontSize,
    fontWeight: Typography.phone.subheading.fontWeight,
    margin: 0,
    padding: Units.phone.gutter.less
  }
});

export default DatePickerTitle;
