import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Units } from '../Styles';

class GridCell extends Component {

  static propTypes = {
    gutter: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    center: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    // center: true,
    top: true
  };

  getStyle() {
    const { size, style } = this.props;
    return Object.assign({}, style, {
      flex: size ? `0 0 ${size * 100}%` : 1
    });
  }

  render() {
    const { top, className, gutter, bottom, center, children, ...other } = this.props;
    const classes = classNames(css.cell, className, {
      [css.top]: top,
      [css.bottom]: bottom,
      [css.gutter]: gutter,
      [css.center]: center,
    });
    return (
      <div {...other} style={this.getStyle()} className={classes}>
        {children}
      </div>
    );
  }
}

export default GridCell;

const css = oxygenCss({
  cell: {
    boxSizing: 'border-box',
    '&gutter': {
      padding: `${Units.phone.gutter.mini}px`,
    },
    '&top': {
      alignSelf: 'flex-start',
    },
    '&bottom': {
      alignSelf: 'flex-end',
    },
    '&center': {
      alignSelf: 'center',
    },
  }
});
