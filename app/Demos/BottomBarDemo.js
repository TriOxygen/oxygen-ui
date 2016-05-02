import React, { Component, PropTypes } from 'react';
import BottomBar from 'BottomBar/BottomBar';
import VerticalCenter from 'VerticalCenter';
import Paper from 'Paper';
import RaisedButton from 'RaisedButton';
import IconButton from 'IconButton';
import Toolbar from 'Toolbar/Toolbar';
import ToolbarTitle from 'Toolbar/ToolbarTitle';
import ButtonContainer from 'ButtonContainer';
import FlatButton from 'FlatButton';
import List from 'Lists/List';
import ListItem from 'Lists/ListItem';
import Avatar from 'Avatar';


import ContentClear from 'oxygen-md-svg-icons/lib/Content/Clear';

class BottomBarDemo extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    bottomBar: false,
    embeddedBottomBar: false
  };

  embeddedBottomBar = () => {
    this.setState({ embeddedBottomBar: !this.state.embeddedBottomBar });
  };

  bottomBar = () => {
    this.setState({ bottomBar: !this.state.bottomBar });
  };

  render() {
    const { embeddedBottomBar, bottomBar } = this.state;
    const rightElement = (
      <IconButton onTouchTap={this.bottomBar}>
        <ContentClear block/>
      </IconButton>
    );
    return (
      <Paper fullWidth={false} spaced style={{  width: 320, position: 'relative' }} >
        <div style={{ height: 160 }}>
          <VerticalCenter>
            <RaisedButton fullWidth label='Bottombar' onTouchTap={this.bottomBar} />
          </VerticalCenter>
        </div>
        <div style={{ height: 160 }}>
          <VerticalCenter>
            <RaisedButton fullWidth label='Embedded bottombar' onTouchTap={this.embeddedBottomBar} />
          </VerticalCenter>
        </div>
        <BottomBar embed open={embeddedBottomBar}>
          <ButtonContainer >
            <FlatButton label='Delete' />
            <FlatButton label='Cancel' />
          </ButtonContainer>
        </BottomBar>
        <BottomBar open={bottomBar} onRequestClose={this.bottomBar}>
          <Toolbar rightElement={rightElement}>
            <ToolbarTitle>Hi</ToolbarTitle>
          </Toolbar>
          <List mdColor={'blue'}>
            <ListItem icon={<Avatar src='https://placekitten.com/72/72'/>} >Test</ListItem>
            <ListItem icon={<Avatar mdColor='red'>IE</Avatar>}>Test</ListItem>
            <ListItem icon={<Avatar mdColor='red'>C</Avatar>}>Test</ListItem>
            <ListItem divider icon={<Avatar mdColor='red'>A</Avatar>}>Test</ListItem>
            <ListItem dense icon={<ContentClear/>}>Test</ListItem>
            <ListItem dense icon={<ContentClear/>}>Test</ListItem>
          </List>
        </BottomBar>
      </Paper>
    );
  }
}

export default BottomBarDemo;
