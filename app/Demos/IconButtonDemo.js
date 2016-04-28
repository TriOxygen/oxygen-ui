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
        <IconButton><ContentClear /></IconButton>
        <IconButton primary><ContentClear /></IconButton>
        <IconButton secondary><ContentClear /></IconButton>
        <IconButton disabled><ContentClear /></IconButton>

        <p style={{ color: '#123981' }}>
          <IconButton><ContentClear /></IconButton>
        </p>
      </Paper>
    );
  }
}

export default FlatButtonDemo;
