import React, { Component, PropTypes } from 'react';
import Paper from '../Paper';
import classNames from 'classnames';

class Card extends Component {

  static propTypes = {
    children: PropTypes.node,
    onTouchTap: PropTypes.func,
    className: PropTypes.string
  };

  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames(className, {
      [css.clickable]: this.props.onTouchTap
    });
    return (
      <Paper className={classes} {...other} hover>
        {children}
      </Paper>
    );
  }
}

export default Card;

const css = oxygenCss({
  clickable: {
    cursor: 'pointer',
  },
})