import React, { Component, PropTypes } from 'react';
import Paper from 'Paper';
import Toolbar from 'Toolbar/Toolbar';
import ToolbarTitle from 'Toolbar/ToolbarTitle';
import demoStyles from './demoStyles';
import Content from 'Content/Content';
import List from 'Lists/List';
import ListItem from 'Lists/ListItem';
import IconButton from 'IconButton';

import NavigationMenu from 'oxygen-md-svg-icons/lib/Navigation/Menu';

class ContentDemo extends Component {

  static contextTypes = {
    mdTheme: PropTypes.object
  };


  render() {
    const { mdTheme } = this.context;
    // console.log(toolbarVisible);
    const items = [];
    for (let i = 0; i <= 20; i++) {
      items.push(<ListItem key={i}>Item {i}</ListItem>);
    }
    const toolbar = (
      <Toolbar mdColor={'orange'} leftElement={<IconButton><NavigationMenu block/></IconButton>}>
        <ToolbarTitle>Fixed toolbar</ToolbarTitle>
      </Toolbar>
    );
    return (
      <Paper style={{ position: 'relative', width: 480}} spaced fullWidth={false}>
        <Content >
          {items}
        </Content>
      </Paper>
    );
  }
}

export default ContentDemo;
