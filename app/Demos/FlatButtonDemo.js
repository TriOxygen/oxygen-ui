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
          <FlatButton mdColor={mdTheme.primary} label='Primary' />
          <FlatButton mdColor={mdTheme.secondary} label='Secondary' />
          <FlatButton mdColor={mdTheme.tertiary} label='Tertiary' />
          <FlatButton disabled label='Flat disabled' />
        </ButtonContainer>
        <ButtonContainer>
          <FlatButton dense label='Flat' />
          <FlatButton dense mdColor={mdTheme.primary} label='Primary' />
          <FlatButton dense mdColor={mdTheme.secondary} label='Secondary' />
          <FlatButton dense mdColor={mdTheme.tertiary} label='Tertiary' />
          <FlatButton dense disabled label='Flat disabled' />
        </ButtonContainer>
        <ButtonContainer mdColor={'purple'}>
          <FlatButton dense label='These' />
          <FlatButton dense label='Get' />
          <FlatButton dense label='Color' />
          <FlatButton dense label='From' />
          <FlatButton dense disabled label='Container' />
        </ButtonContainer>
        <ButtonContainer>
          <FlatButton fullWidth label='Full width' />
        </ButtonContainer>
      </Paper>
    );
  }
}

export default FlatButtonDemo;
