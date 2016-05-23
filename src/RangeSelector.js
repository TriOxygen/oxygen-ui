import React, { Component, PropTypes } from 'react';
import RangeSlider from './RangeSlider';
import pureRender from './Utils/pureRender';
import { Units } from './Styles';

const css = oxygenCss({
  root: {
    position: 'relative',
    padding: `${Units.phone.gutter.mini * 1.5}px ${Units.phone.gutter.mini}px`,

  },
  label: {
    transformOrigin: 'top left',
    transform: 'scale(0.75)'
  }
});


class RangeSelector extends Component {
  static propTypes = {
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    label: PropTypes.node,
    onChange: PropTypes.func
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  state = {
    value: this.props.value || this.props.defaultValue || 0
  };

  handleChange = value => {
    const { onChange } = this.props;
    this.setState({ value });
    onChange && onChange(value);
  }

  getValue() {
    return this.state.value;
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (typeof value !== 'undefined') {
      this.setState({ value });
    }
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setState({ value: nextProps.defaultValue });
    }
  }

  getStyles() {
    const { mdTheme } = this.context;
    return {
      label: {
        color: mdTheme.text.secondary
      }
    }

  }

  render() {
    const { label, ...other } = this.props;
    const { value } = this.state;
    const styles = this.getStyles();
    return (
      <div className={css.root}>
        <div className={css.label} style={styles.label}>{label} : {value}</div>
        <RangeSlider {...other} value={value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default pureRender(RangeSelector);
