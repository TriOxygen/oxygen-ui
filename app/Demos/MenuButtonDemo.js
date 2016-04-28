import React, { Component, PropTypes } from 'react';
import demoStyles from './demoStyles';
import Paper from 'Paper';
import DialogTitle from 'Dialog/DialogTitle';
import MenuButton from 'MenuButton';
import Toolbar from 'Toolbar/Toolbar';
import MenuItem from 'Menus/MenuItem';
import SearchBar from 'TextField/SearchBar';
import NavigationMoreVert from 'oxygen-md-svg-icons/lib/Navigation/MoreVert';


class MenuButtonDemo extends Component {
  static contextTypes = {
    mdTheme: PropTypes.object
  };


  render() {
    const rightElement = (
      <MenuButton icon={<NavigationMoreVert block/>}>
        <MenuItem dense autoFocus>{'Add new user'}</MenuItem>
        <MenuItem dense>{'Add new user'}</MenuItem>
        <MenuItem dense>{'Add new user'}</MenuItem>
        <MenuItem dense>{'Add new user'}</MenuItem>
        <MenuItem dense>{'Add new user'}</MenuItem>
        <MenuItem dense>{'Add new user'}</MenuItem>
        <MenuItem dense>{'Add new user'}</MenuItem>
      </MenuButton>
    );
    return (
      <Paper spaced>
        <Toolbar rightElement={rightElement}>
          <div style={{ whiteSpace: 'nowrap'}}>MenuButton Demo</div>
          <SearchBar
            defaultValue={'Search'}
            fullWidth
          />
        </Toolbar>


      </Paper>
    );
  }
}

export default MenuButtonDemo;
