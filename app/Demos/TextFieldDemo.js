import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import TextField from 'TextField/TextField';
import DatePicker from 'DatePicker/DatePicker';
import Divider from 'Divider';
import List from 'Lists/List';
import DialogTitle from 'Dialog/DialogTitle';
import RangeSelector from 'RangeSelector';
import demoStyles from './demoStyles';

class TextFieldDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  enterPressed(value) {
    console.log(value);
  }

  handleChange = value => {
    console.log(value);
  }

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false}>
        <DialogTitle>Text fields</DialogTitle>
        <List mdColor={'blue'}>
          <TextField onChange={this.handleChange} divider onPressEnter={this.enterPressed} mdColor={'red'} floatingLabelText='Label' />
          <TextField divider onPressEnter={this.enterPressed} floatingLabelText='Something with error text' errorText={'No way'}/>
          <DatePicker floatingLabelText='Pick some date' />
          <DatePicker mdColor={'blue'} placeholder='Pick some date' />
          <Divider />
          <TextField onPressEnter={this.enterPressed} placeholder='Neatly Divided'/>
          <Divider />
          <RangeSelector label={'Range'} mdColor={mdTheme.primary} defaultValue={2} min={2} max={100}/>
        </List>
      </Paper>
    );
  }
}

export default TextFieldDemo;
