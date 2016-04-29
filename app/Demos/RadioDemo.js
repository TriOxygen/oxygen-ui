import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import RadioGroup from 'RadioGroup';
import Radio from 'Radio';
import ButtonContainer from 'ButtonContainer';
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
        <DialogTitle>Radio</DialogTitle>
        <RadioGroup value={1} mdColor={'cyan'}>
          <Radio fullWidth label={'1'} value={1} disabled/>
          <Radio fullWidth label={'2'} value={2} mdColor={mdTheme.secondary}/>
          <Radio fullWidth label={'3'} value={3} />
          <Radio fullWidth label={'4'} value={4} />
          <Radio fullWidth label={'5'} value={5} />
        </RadioGroup>
      </Paper>
    );
  }
}

export default FloatingActionButtonDemo;
