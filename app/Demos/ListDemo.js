import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import List from 'Lists/List';
import ListItem from 'Lists/ListItem';
import DialogTitle from 'Dialog/DialogTitle';
import demoStyles from './demoStyles';

import ContentClear from 'oxygen-md-svg-icons/lib/Content/Clear';
import ActionAccessibility from 'oxygen-md-svg-icons/lib/Action/Accessibility';
import ActionAccountBalance from 'oxygen-md-svg-icons/lib/Action/AccountBalance';
import ActionAccountBalanceWallet from 'oxygen-md-svg-icons/lib/Action/AccountBalanceWallet';
import ActionAccountBox from 'oxygen-md-svg-icons/lib/Action/AccountBox';

class FlatButtonDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false}>
        <DialogTitle>List</DialogTitle>
        <List mdColor={'blue'}>
          <ListItem icon={<ContentClear/>} dense>Test</ListItem>
          <ListItem active icon={<ActionAccessibility/>} dense>Test</ListItem>
          <ListItem icon={<ActionAccountBalance/>} dense>Test</ListItem>
          <ListItem divider icon={<ActionAccountBalanceWallet/>} dense>Test</ListItem>
          <ListItem icon={<ActionAccountBox/>} dense>Test</ListItem>
          <ListItem icon={<ActionAccountBox/>} dense>Test</ListItem>
        </List>
        </Paper>
    );
  }
}

export default FlatButtonDemo;
