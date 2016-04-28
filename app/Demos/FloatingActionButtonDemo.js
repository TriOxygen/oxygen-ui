import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import FloatingActionButton from 'FloatingActionButton';
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
        <DialogTitle>FloatingAction Buttons</DialogTitle>
        <ButtonContainer>
          <FloatingActionButton icon={<ContentClear />}/>
          <FloatingActionButton color={mdTheme.primary} icon={<ContentClear />}/>
          <FloatingActionButton color={mdTheme.secondary} icon={<ContentClear />}/>
          <FloatingActionButton color={mdTheme.tertiary} icon={<ContentClear />}/>
          <FloatingActionButton disabled icon={<ContentClear />}/>
        </ButtonContainer>
        <ButtonContainer>
          <FloatingActionButton inversed icon={<ContentClear />}/>
          <FloatingActionButton inversed color={mdTheme.primary} icon={<ContentClear />}/>
          <FloatingActionButton inversed color={mdTheme.secondary} icon={<ContentClear />}/>
          <FloatingActionButton inversed color={mdTheme.tertiary} icon={<ContentClear />}/>
          <FloatingActionButton inversed disabled icon={<ContentClear />}/>
        </ButtonContainer>
        <ButtonContainer>
          <FloatingActionButton mini icon={<ContentClear />}/>
          <FloatingActionButton mini color={mdTheme.primary} icon={<ContentClear />}/>
          <FloatingActionButton mini color={mdTheme.secondary} icon={<ContentClear />}/>
          <FloatingActionButton mini color={mdTheme.tertiary} icon={<ContentClear />}/>
          <FloatingActionButton mini disabled icon={<ContentClear />}/>
        </ButtonContainer>
      </Paper>
    );
  }
}

export default FloatingActionButtonDemo;
