import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import List from 'Lists/List';
import ListItem from 'Lists/ListItem';
import DialogTitle from 'Dialog/DialogTitle';
import Avatar from 'Avatar';
import SecondaryText from 'SecondaryText';
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
      <Paper className={demoStyles.container} fullWidth={false} style={{ width: 320 }}>
        <DialogTitle>List</DialogTitle>
        <List mdColor={'blue'}>
          <ListItem icon={<Avatar src='https://placekitten.com/72/72'/>} >Test</ListItem>
          <ListItem icon={<Avatar mdColor='red'>IE</Avatar>}>Test</ListItem>
          <ListItem icon={<Avatar mdColor='red'>C</Avatar>}><div>Test<SecondaryText fullWidth>Secondary text</SecondaryText></div></ListItem>
          <ListItem divider icon={<Avatar mdColor='red'>A</Avatar>}>Test</ListItem>
          <ListItem dense icon={<ActionAccountBox/>}>Test</ListItem>
          <ListItem dense icon={<ActionAccountBox/>}>Test</ListItem>
        </List>
      </Paper>
    );
  }
}

export default FlatButtonDemo;
