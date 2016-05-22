import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import TextField from 'TextField/TextField';
import DatePicker from 'DatePicker/DatePicker';
import Divider from 'Divider';
import List from 'Lists/List';
import DialogTitle from 'Dialog/DialogTitle';
import demoStyles from './demoStyles';

class FlatButtonDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  enterPressed(value) {
    console.log(value);
  }

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false} style={{ width: 320 }}>
        <DialogTitle>Text fields</DialogTitle>
        <List mdColor={'blue'}>
          <TextField onPressEnter={this.enterPressed} mdColor={'red'} floatingLabelText='Label' />
          <TextField onPressEnter={this.enterPressed} floatingLabelText='Something with error text' errorText={'No way'}/>
          <DatePicker floatingLabelText='Pick some date' />
          <DatePicker mdColor={'blue'} placeholder='Pick some date' />
          <Divider />
          <TextField onPressEnter={this.enterPressed} placeholder='Neatly Divided'/>
          <Divider />
          <TextField onPressEnter={this.enterPressed} placeholder='Neatly Divided'/>
          <Divider />
          <TextField onPressEnter={this.enterPressed} placeholder='Neatly Divided'/>
        </List>
      </Paper>
    );
  }
}

export default FlatButtonDemo;
