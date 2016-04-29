import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import TextField from 'TextField/TextField';
import Divider from 'Divider';
import List from 'Lists/List';
import DialogTitle from 'Dialog/DialogTitle';
import demoStyles from './demoStyles';

class FlatButtonDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false} style={{ width: 320 }}>
        <DialogTitle>Text fields</DialogTitle>
        <List mdColor={'blue'}>
          <TextField mdColor={'red'} floatingLabelText='Label' />
          <TextField floatingLabelText='Something with error text' errorText={'No way'}/>
          <Divider />
          <TextField placeholder='Neatly Divided'/>
          <Divider />
          <TextField placeholder='Neatly Divided'/>
          <Divider />
          <TextField placeholder='Neatly Divided'/>
w        </List>
      </Paper>
    );
  }
}

export default FlatButtonDemo;
