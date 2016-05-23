import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Shadow, Colors, Units } from './Styles';
import pureRender from './Utils/pureRender';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function maxmin(pos, min, max) {
  if (pos < min) { return min; }
  if (pos > max) { return max; }
  return pos;
}

const constants = {
  horizontal: {
    dimension: 'width',
    direction: 'left',
    coordinate: 'x',
  },
  vertical: {
    dimension: 'height',
    direction: 'top',
    coordinate: 'y',
  }
};

const css = oxygenCss({
  root: {
    outline: 'none',
    position: 'relative',
    height: 12,
    borderRadius: 100,
    backgroundColor: Colors.material.grey[500].hex,
    margin: `${Units.phone.gutter.mini * 1.5}px 8px`,
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    verticalAlign: 'middle',
    backgroundColor: '#DDD',
    cursor: 'pointer',
    '>fill': {
      boxShadow: Shadow[1],
      display: 'block',
      position: 'absolute',
      backgroundColor: Colors.material.grey[700].hex,
      borderRadius: 100,
      height: 12,
    },
    '>handle': {
      marginLeft: -13,
      cursor: 'pointer',
      position: 'absolute',
      left: -2,
      top: -7,
      display: 'block',
      width: 26,
      height: 26,
      borderRadius: 100,
      background: '#fff',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
      content: '',
    },
  },
});

class RangeSlider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    orientation: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    defaultColor: PropTypes.string,
    mdColor: PropTypes.string,
    defaultValue: PropTypes.number,
  };

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    defaultColor: 'teal'
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string,
  };

  state = {
    value: this.props.value || this.props.defaultValue || 0,
  };

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (typeof value !== 'undefined') {
      this.setState({ value });
    }
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setState({ value: nextProps.defaultValue });
    }
  }

  setup = () => {
    const { orientation } = this.props;
    const dimension = capitalize(constants[orientation].dimension);
    const sliderPos = this._slider['offset' + dimension];
    const handlePos = this._handle['offset' + dimension];
    this._limit = sliderPos - handlePos + 8;
    this._grab = handlePos / 2;
  }



  getStyles() {
    const { mdTheme, mdColor: contextColor } = this.context;
    const { mdColor, defaultColor, orientation, max, min } = this.props;
    const { value } = this.state;
    const colors = mdTheme.colors[mdColor || contextColor || defaultColor];

    const dimension = constants[orientation].dimension;
    const direction = constants[orientation].direction;


    const percentage = value / (max - min);
    return {
      handle: {
        backgroundColor: colors[500].hex,
        [direction]: `${percentage * 100}%`
      },
      fill: {
        backgroundColor: colors[200].hex,
        [dimension]: `${percentage * 100}%`
      }
    };
  }

  getValue() {
    return this.state.value;
  }

  handleKnobMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setup();
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('mouseup', this.handleDragEnd);
  }

  handleDrag = (event) => {
    const { onChange } = this.props;
    const value = this.position(event);
    if (this.state.value !== value) {
      this.setState({ value });
      onChange && onChange(value);
    }
  }

  setPosition = event => {
    this.setup();
    this.handleDrag(event);
  }

  handleDragEnd = () => {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('mouseup', this.handleDragEnd);
  }

  handleNoop = (event) => {
    event.stopPropagation();
    event.preventDefault();
  }

  getValueFromPosition = (pos) => {
    const { orientation, min, max, step } = this.props;
    const percentage = (maxmin(pos, 0, this._limit) / (this._limit || 1));

    return step * Math.round(percentage * (max - min) / step) + min;
  }

  position = (e) => {

    const { orientation } = this.props;
    const coordinateStyle = constants[orientation].coordinate;
    const directionStyle = constants[orientation].direction;
    const coordinate = !e.touches
      ? e['client' + capitalize(coordinateStyle)]
      : e.touches[0]['client' + capitalize(coordinateStyle)];
    const direction = this._slider.getBoundingClientRect()[directionStyle];
    const pos = coordinate - direction - this._grab;
    return this.getValueFromPosition(pos);
  }

  render() {
    const { orientation, className } = this.props;
    const styles = this.getStyles();
    const classes = classNames(css.root, css[orientation], className);
    return (
      <div
        ref={_slider => this._slider = _slider}
        className={classes}
        onMouseDown={this.setPosition}
        onClick={this.handleNoop}>
        <div
          ref={_fill => this._fill = _fill}
          className={css.fill}
          style={styles.fill} />
        <div
          ref={_handle => this._handle = _handle}
          className={css.handle}
          onMouseDown={this.handleKnobMouseDown}
          onTouchMove={this.handleDrag}
          onClick={this.handleNoop}
          style={styles.handle} />
      </div>
    );
  }

}

export default pureRender(RangeSlider);
