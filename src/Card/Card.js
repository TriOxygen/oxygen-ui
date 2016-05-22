import React, { Component, PropTypes } from 'react';
import Paper from '../Paper';
import classNames from 'classnames';

class Card extends Component {

  static propTypes = {
    children: PropTypes.node,
    onTouchTap: PropTypes.func,
    payload: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.array]),
    className: PropTypes.string
  };

  handleTouchTap = (event) => {
    const { onTouchTap, payload } = this.props;
    onTouchTap && onTouchTap(payload);
  };

  render() {
    const { children, className, onTouchTap, ...other } = this.props;
    const classes = classNames(className, {
      [css.clickable]: onTouchTap
    });
    return (
      <Paper className={classes} {...other} hover onTouchTap={this.handleTouchTap}>
        {children}
      </Paper>
    );
  }
}

export default Card;

const css = oxygenCss({
  clickable: {
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  },
})