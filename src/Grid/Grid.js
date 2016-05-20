import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Units } from '../Styles';
import GridCell from './GridCell';

class Grid extends Component {

  static propTypes = {
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    gutter: PropTypes.bool,
    center: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    gutter: true,
    center: true,
  };

  render() {
    const { top, gutter, className, bottom, center, children, ...other } = this.props;
    const classes = classNames(css.grid, className, {
      [css.top]: top,
      [css.center]: center,
      [css.bottom]: bottom,
      [css.gutter]: gutter,
      [css.center]: center,
    });
    return (
      <div className={classes} {...other}>
        {React.Children.map(children, child => {
          if (child.type == GridCell) {
            return React.cloneElement(child, { gutter });
          }
          return child;
        })}
      </div>
    );
  }
}

export default Grid;

const css = oxygenCss({
  grid: {
    display: 'flex',
    '&center':{
      justifyContent: 'center',
      alignItems: 'center',
    },
    '&gutter': {
      margin: `${Units.phone.gutter.mini}px`,
    },
    flexFlow: 'row wrap',
    '&top': {
      alignItems: 'flex-start',
    },
    '&bottom': {
      alignItems: 'flex-end',
    },
  }
});
