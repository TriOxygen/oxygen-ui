import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import RaisedButton from 'RaisedButton';
import ButtonContainer from 'ButtonContainer';
import demoStyles from './demoStyles';
import DialogTitle from 'Dialog/DialogTitle';

class RaisedButtonDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false}>
        <DialogTitle>Raised Buttons</DialogTitle>
        <ButtonContainer>
          <RaisedButton label='Raised' />
          <RaisedButton mdColor={mdTheme.primary} label='Primary' />
          <RaisedButton mdColor={mdTheme.secondary} label='Secondary' />
          <RaisedButton mdColor={mdTheme.tertiary} label='Tertiary' />
          <RaisedButton disabled label='Raised disabled' />
        </ButtonContainer>
        <ButtonContainer>
          <RaisedButton inversed label='Raised' />
          <RaisedButton inversed mdColor={mdTheme.primary} label='Primary' />
          <RaisedButton inversed mdColor={mdTheme.secondary} label='Secondary' />
          <RaisedButton inversed mdColor={mdTheme.tertiary} label='Tertiary' />
          <RaisedButton inversed disabled label='Raised disabled' />
        </ButtonContainer>
        <ButtonContainer>
          <RaisedButton dense label='Raised' />
          <RaisedButton dense mdColor={mdTheme.primary} label='Primary' />
          <RaisedButton dense mdColor={mdTheme.secondary} label='Secondary' />
          <RaisedButton dense mdColor={mdTheme.tertiary} label='Tertiary' />
          <RaisedButton dense disabled label='Raised disabled' />
        </ButtonContainer>
        <ButtonContainer mdColor={'purple'}>
          <RaisedButton dense label='These' />
          <RaisedButton dense label='Get' />
          <RaisedButton dense label='Color' />
          <RaisedButton dense label='From' />
          <RaisedButton dense disabled label='Container' />
        </ButtonContainer>
      </Paper>
    );
  }
}

export default RaisedButtonDemo;
