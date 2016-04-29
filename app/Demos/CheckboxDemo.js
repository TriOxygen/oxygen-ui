import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import Checkbox from 'Checkbox';
import demoStyles from './demoStyles';
import DialogTitle from 'Dialog/DialogTitle';

import ContentClear from 'oxygen-md-svg-icons/lib/Content/Clear';

class FloatingActionButtonDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false}>
        <DialogTitle>Checkbox</DialogTitle>
        <Checkbox label={'1'} value={1} disabled/>
        <Checkbox label={'2'} value={2} mdColor={mdTheme.primary} />
        <Checkbox label={'3'} value={3} mdColor={mdTheme.secondary}/>
        <Checkbox label={'4'} value={4} mdColor={mdTheme.tertiary}/>
        <Checkbox label={'5'} value={5} />
      </Paper>
    );
  }
}

export default FloatingActionButtonDemo;
