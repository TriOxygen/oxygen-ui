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
          <RaisedButton color={mdTheme.primary} label='Primary' />
          <RaisedButton color={mdTheme.secondary} label='Secondary' />
          <RaisedButton color={mdTheme.tertiary} label='Tertiary' />
          <RaisedButton disabled label='Raised disabled' />
        </ButtonContainer>
        <ButtonContainer>
          <RaisedButton inversed label='Raised' />
          <RaisedButton inversed color={mdTheme.primary} label='Primary' />
          <RaisedButton inversed color={mdTheme.secondary} label='Secondary' />
          <RaisedButton inversed color={mdTheme.tertiary} label='Tertiary' />
          <RaisedButton inversed disabled label='Raised disabled' />
        </ButtonContainer>
        <ButtonContainer>
          <RaisedButton dense label='Raised' />
          <RaisedButton dense color={mdTheme.primary} label='Primary' />
          <RaisedButton dense color={mdTheme.secondary} label='Secondary' />
          <RaisedButton dense color={mdTheme.tertiary} label='Tertiary' />
          <RaisedButton dense disabled label='Raised disabled' />
        </ButtonContainer>
      </Paper>
    );
  }
}

export default RaisedButtonDemo;
