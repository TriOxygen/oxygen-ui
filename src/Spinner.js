import React, { Component, PropTypes } from 'react';
import { Units, Colors } from './Styles';
import classNames from 'classnames';

const drawSize = 66;

class Spinner extends Component {
  static propTypes = {
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    strokeWidth: Units.phone.gutter.mini / 2,
    size: 64
  };

  render() {
    const { size, className, strokeWidth, ...other } = this.props;
    const classes = classNames(css.spinner, className);
    return (
      <svg
        {...other}
        className={classes}
        width={`${size - 1}px`}
        height={`${size - 1}px`}
        viewBox={`0 0 ${drawSize} ${drawSize}`}
      >
        <circle
          className={css.path}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx={drawSize / 2}
          cy={drawSize / 2}
          r={(drawSize - strokeWidth) / 2} />
      </svg>
    );
  }
}

const css = oxygenCss({
  spinner: {
    animation: `rotator ${Units.phone.spinner.duration}s linear infinite`,
  },
  path: {
    strokeDasharray: Units.phone.spinner.offset,
    strokeDashoffset: 0,
    transformOrigin: 'center',
    animation: `dash ${Units.phone.spinner.duration}s ease-in-out infinite, colors ${Units.phone.spinner.duration * 4}s ease-in-out infinite`
  },
  '@rotator': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(270deg)'
    }
  },
  '@colors': {
    '0%': {
      stroke: Colors.material.red[500].hex,
    },
    '25%': {
      stroke: Colors.material.blue[500].hex
    },
    '50%': {
      stroke: Colors.material.green[500].hex
    },
    '75%': {
      stroke: Colors.material.grey[500].hex
    },
    '100%': {
      stroke: Colors.material.red[500].hex
    },
  },
  '@dash': {
    '0%': {
      strokeDashoffset: Units.phone.spinner.offset,
    },
    '50%': {
      strokeDashoffset: Units.phone.spinner.offset / 4,
      transform: 'rotate(135deg)'
    },
    '100%': {
      strokeDashoffset: Units.phone.spinner.offset,
      transform: 'rotate(450deg)'
    }
  },
});

export default Spinner;
