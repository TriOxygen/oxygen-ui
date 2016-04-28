import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import FlatButton from 'FlatButton';
import ButtonContainer from 'ButtonContainer';
import DialogTitle from 'Dialog/DialogTitle';
import demoStyles from './demoStyles';

class FlatButtonDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false}>
        <DialogTitle>Flat buttons</DialogTitle>
        <ButtonContainer>
          <FlatButton label='Flat' />
          <FlatButton color={mdTheme.primary} label='Primary' />
          <FlatButton color={mdTheme.secondary} label='Secondary' />
          <FlatButton color={mdTheme.tertiary} label='Tertiary' />
          <FlatButton disabled label='Flat disabled' />
        </ButtonContainer>
        <ButtonContainer>
          <FlatButton dense label='Flat' />
          <FlatButton dense color={mdTheme.primary} label='Primary' />
          <FlatButton dense color={mdTheme.secondary} label='Secondary' />
          <FlatButton dense color={mdTheme.tertiary} label='Tertiary' />
          <FlatButton dense disabled label='Flat disabled' />
        </ButtonContainer>
      </Paper>
    );
  }
}

export default FlatButtonDemo;
