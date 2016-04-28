import React, { PropTypes, Component } from 'react';
import ButtonContainer from '../ButtonContainer';

export default class DialogContent extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...other } = this.props;
    return (
      <ButtonContainer alignRight fullWidth {...other}>{children}</ButtonContainer>
    );
  }
}