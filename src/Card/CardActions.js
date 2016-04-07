import React, { PropTypes, Component } from 'react';
import ButtonContainer from '../ButtonContainer';
import classNames from 'classnames';

export default class CardActions extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames(css.container, className);
    return (
      <ButtonContainer fullWidth {...other} className={classes}>{children}</ButtonContainer>
    );
  }
}

const css = oxygenCss({
  container: {
    cursor: 'default'
  }
});
