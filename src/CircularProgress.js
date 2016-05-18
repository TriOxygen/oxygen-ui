import React, { PropTypes, Component } from 'react';
import { Units } from './Styles';
import shallowCompare from 'react-addons-shallow-compare';

const css = oxygenCss({
  root: {
    position: 'relative',
    transform: 'rotate(-90deg)'
  },
  fg: {
    fill: 'none',
    transition: 'stroke-dashoffset .25s ease-in-out'
  },
  bg: {
    fill: 'none'
  },
});

export default class CircularProgress extends Component {
  static propTypes= {
    children: PropTypes.node,
    strokeWidth: PropTypes.number,
    size: PropTypes.number,
    progress: PropTypes.number,
    backgroundColor: PropTypes.string,
    mdColor: PropTypes.string
  };

  static defaultProps = {
    backgroundColor: '#DDDDDD',
    size: Units.phone.keylineIncrement,
    progress: 50,
    strokeWidth: 4,
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  shouldComponentUpdate(nextProps) {
    return shallowCompare(this, nextProps);
  }

  render() {
    const {
      strokeWidth,
      size,
      progress,
      backgroundColor,
      mdColor
    } = this.props;
    const radius = size / 2;
    const { mdTheme, mdColor: contextColor } = this.context;
    const colors = mdTheme.colors[mdColor || contextColor];
    const foregroundColor = colors && colors[500].hex || mdTheme.colors[mdTheme.primary][500].hex;
    const innerRadius = radius - strokeWidth / 2;
    const viewBox = `0 0 ${size} ${size}`;
    const dashArray = innerRadius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * progress / 100;

    return (
      <svg
        className={css.root}
        width={size}
        height={size}
        viewBox={viewBox}
      >
        <circle
          className={css.bg}
          style= {{
            stroke: backgroundColor,
          }}
          cx={radius}
          cy={radius}
          r={innerRadius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className={css.fg}
          cx={radius}
          cy={radius}
          r={innerRadius}
          strokeLinecap="round"
          strokeWidth={`${strokeWidth}px`}
          style={{
            stroke: foregroundColor,
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
      </svg>
    );
  }
}
