import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import Menu from 'Menus/Menu';
import MenuItem from 'Menus/MenuItem';
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
      <Paper className={demoStyles.container} fullWidth={false} style={{ width: 320 }}>
        <DialogTitle>Menu</DialogTitle>
        <Menu mdColor={'yellow'}>
          <MenuItem icon={<ContentClear/>} dense>Test</MenuItem>
          <MenuItem active icon={<ActionAccessibility/>} dense>Test</MenuItem>
          <MenuItem icon={<ActionAccountBalance/>} dense>Test</MenuItem>
          <MenuItem divider icon={<ActionAccountBalanceWallet/>} dense>Test</MenuItem>
          <MenuItem icon={<ActionAccountBox/>} dense>Test</MenuItem>
          <MenuItem icon={<ActionAccountBox/>} dense>Test</MenuItem>
        </Menu>
        </Paper>
    );
  }
}

export default FlatButtonDemo;
