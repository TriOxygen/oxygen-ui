import React, { PropTypes, Component } from 'react';
import Drawer from 'Drawer/Drawer';
import DrawerHeader from 'Drawer/DrawerHeader';
import MenuItem from 'Menus/MenuItem';
import Theme from 'Styles/Theme';
import IconButton from 'IconButton';
import RaisedButton from 'RaisedButton';
import FlatButton from 'FlatButton';
import VerticalCenter from 'VerticalCenter';
import Spinner from 'Spinner';
import Paper from 'Paper';
import Dialog from 'Dialog/Dialog';
import DialogContent from 'Dialog/DialogContent';
import DialogActions from 'Dialog/DialogActions';
import DialogTitle from 'Dialog/DialogTitle';
import Toolbar from 'Toolbar/Toolbar';
import Layout from 'Layout';
import SnackBar from 'SnackBar/SnackBar';
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
  TextFieldDemo,
  BottomBarDemo,
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
    drawerPosition: 0,
    message: null
  };

  static childContextTypes = {
    mdTheme: PropTypes.object,
  };

  getStyle() {
    const { mdTheme } = this;
    return {
      backgroundColor: mdTheme.theme.background.hex,
      color: mdTheme.text.default,
    };
  }

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

  };

  randomMessage = () => {
    this.setState({ time: Date.now(), message: 'Sheep says ' + Math.random() })
  };

  closeDialog = () => {
    this.setState({ dialog: false });
  };

  confirmDialog = () => {
    this.setState({ time: Date.now(), message: 'Delete confirmed', dialog: false });
  };

  renderMenu() {
    const { drawerPosition } = this.state;
    return (
      <Drawer mdColor={'green'} position={drawerPosition} onRequestClose={this.closeDrawer} onRequestOpen={this.openDrawer}>
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
    const { message, time, dialog } = this.state;
    const menu = this.renderMenu();
    return (
      <div className={css.root} style={this.getStyle()}>
        <Layout >
          <Toolbar
            mdColor={mdTheme.primary}
          leftElement={<IconButton onTouchTap={this.openDrawer}><NavigationMenu block/></IconButton>}
          >
            <RaisedButton label={'Meeeeeh'} onTouchTap={this.randomMessage}/>
            <RaisedButton label={'Dialog'} onTouchTap={() => this.setState({ dialog: true })}/>
          </Toolbar>
          <div style={{ overflow: 'scroll', height: '100%'}}>
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
            <TextFieldDemo />
            <BottomBarDemo />
            <Paper fullWidth={false} style={{ width: 320, height: 320}}>
              <VerticalCenter>
                <Spinner />
              </VerticalCenter>
            </Paper>
          </div>
        </Layout>
        <Dialog open={!!dialog} onRequestClose={this.closeDialog}>
          <DialogTitle>{'Delete user'}</DialogTitle>
          <DialogContent>{'Are you sure you want to delete this user?'}</DialogContent>
          <DialogActions>
            <FlatButton label={'Cancel'} onTouchTap={this.closeDialog} />
            <FlatButton label={'Delete'} onTouchTap={this.confirmDialog} />
          </DialogActions>
        </Dialog>
        <SnackBar message={message} time={time}/>
        {menu}
      </div>
    );
  }
}
