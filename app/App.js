import React, { PropTypes, Component } from 'react';
import Drawer from 'Drawer/Drawer';
import DrawerHeader from 'Drawer/DrawerHeader';
import MenuItem from 'Menus/MenuItem';
import Theme from 'Styles/Theme';
import IconButton from 'IconButton';
import Toolbar from 'Toolbar/Toolbar';
import Layout from 'Layout';
import {
  CheckboxDemo,
  RadioDemo,
  RaisedButtonDemo,
  ToggleDemo,
  FlatButtonDemo,
  FloatingActionButtonDemo,
  MenuButtonDemo,
  IconButtonDemo,
  MenuDemo,
  ListDemo,
} from './Demos';


import NavigationMenu from 'oxygen-md-svg-icons/lib/Navigation/Menu';
import SocialPerson from 'oxygen-md-svg-icons/lib/Social/Person';
import ImagePalette from 'oxygen-md-svg-icons/lib/Image/Palette';
import ActionHome from 'oxygen-md-svg-icons/lib/Action/Home';

const css = oxygenCss({
  BODY: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    fontFamily: `'Hind Siliguri', sans-serif`,
    fontSize: 14,
    fontWeight: 400,
  },
  HTML: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    fontFamily: `'Hind Siliguri', sans-serif`,
    fontSize: 14,
    fontWeight: 400,
  },
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default class App extends Component {

  state = {
    drawerPosition: 0
  };

  static childContextTypes = {
    mdTheme: PropTypes.object,
  };

  constructor() {
    super(...arguments);
    this.mdTheme = new Theme('red', 'blue', 'grey', 'light');
  }

  getChildContext() {
    return {
      mdTheme: this.mdTheme
    }
  }

  closeDrawer = (event) => {
    this.setState({ drawerPosition: 0 });
  };

  openDrawer = (event) => {
    this.setState({ drawerPosition: 1 });
  };

  go = () => {

  }

  renderMenu() {
    const { drawerPosition } = this.state;
    return (
      <Drawer position={drawerPosition} onRequestClose={this.closeDrawer} onRequestOpen={this.openDrawer}>
        <DrawerHeader>Header</DrawerHeader>
        <MenuItem href={'/'} onTouchTap={this.go} autoFocus icon={<ActionHome/>}>{'Home'}</MenuItem>
        <MenuItem href={'/users'} onTouchTap={this.go} icon={<SocialPerson/>}>{'Users'}</MenuItem>
        <MenuItem href={'/courses'} onTouchTap={this.go} icon={<SocialPerson/>}>{'Courses'}</MenuItem>
        <MenuItem href={'/roles'} onTouchTap={this.go} icon={<SocialPerson/>}>{'Roles'}</MenuItem>
        <MenuItem href={'/theme'} onTouchTap={this.go} icon={<ImagePalette/>}>{'Theme Changer'}</MenuItem>
        <MenuItem href={'/login'} onTouchTap={this.go} icon={<ActionHome/>}>{'Login'}</MenuItem>
      </Drawer>
    );
  }

  render() {
    const { mdTheme } = this;
    const menu = this.renderMenu();
    return (
      <div className={css.root}>
        <Layout >
          <Toolbar
            color={mdTheme.primary}
          leftElement={<IconButton onTouchTap={this.openDrawer}><NavigationMenu block/></IconButton>}
          >
            Demo
          </Toolbar>
          <div>
            <MenuButtonDemo />
            <RaisedButtonDemo />
            <FlatButtonDemo />
            <FloatingActionButtonDemo />
            <RadioDemo />
            <ToggleDemo />
            <CheckboxDemo />
            <IconButtonDemo />
            <MenuDemo />
            <ListDemo />
          </div>
        </Layout>
        {menu}
      </div>
    );
  }
}
