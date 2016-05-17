import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import List from 'Lists/List';
import ListItem from 'Lists/ListItem';
import DialogTitle from 'Dialog/DialogTitle';
import Avatar from 'Avatar';
import Text from 'Text';
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
          <ListItem divider icon={<Avatar src='https://placekitten.com/72/72'/>} >Test</ListItem>
          <ListItem divider icon={<Avatar mdColor='red'>IE</Avatar>}>Test</ListItem>
<<<<<<< HEAD
          <ListItem divider icon={<Avatar mdColor='red'>C</Avatar>}><div><Text primary>Test</Text><Text secondary>Secondary text</Text></div></ListItem>
          <ListItem divider divider icon={<Avatar mdColor='red'>A</Avatar>}>Test</ListItem>
=======
          <ListItem divider icon={<Avatar mdColor='red'>C</Avatar>}><div><Text>Test</Text><Text secondary>Secondary text</Text></div></ListItem>
          <ListItem divider icon={<Avatar mdColor='red'>A</Avatar>}>Test</ListItem>
>>>>>>> 94f44af2d77d026539c18f451b0360d96b312382
          <ListItem divider dense icon={<ActionAccountBox/>}>Test</ListItem>
          <ListItem divider dense icon={<ActionAccountBox/>}>Test</ListItem>
        </List>
      </Paper>
    );
  }
}

export default FlatButtonDemo;
