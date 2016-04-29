import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import IconButton from 'IconButton';
import ButtonContainer from 'ButtonContainer';
import DialogTitle from 'Dialog/DialogTitle';
import demoStyles from './demoStyles';

import ContentClear from 'oxygen-md-svg-icons/lib/Content/Clear';

class FlatButtonDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  render() {
    const { mdTheme } = this.context;
    return (
      <Paper className={demoStyles.container} fullWidth={false}>
        <DialogTitle>Icon buttons</DialogTitle>
        <IconButton mdColor={mdTheme.primary}><ContentClear /></IconButton>
        <IconButton mdColor={mdTheme.secondary}><ContentClear /></IconButton>
        <IconButton mdColor={mdTheme.tertiary}><ContentClear /></IconButton>
        <IconButton mdColor={'purple'}><ContentClear /></IconButton>
        <IconButton disabled><ContentClear /></IconButton>

      </Paper>
    );
  }
}

export default FlatButtonDemo;
