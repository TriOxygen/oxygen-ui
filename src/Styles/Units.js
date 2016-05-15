import Typography from './Typography';

const keylineIncrement = 64;

const button = {
  minHeight: 36,
  minWidth: 64,
  dense: {
    minHeight: 32,
    minWidth: 64,
  }
};

const gutter = {
  default: 24,
  more: 32,
  less: 16,
  mini: 8,
};

const floatingActionButton = {
  size: 56,
  miniSize: 40,
};

const dropdown = {
  menuItem: {
    height: 32,
    fontSize: 15,
  },
};

const toolbar = {
  height: 56,
};

const spinner = {
  offset: 200,
  duration: 1.4
};

const menu = {
  padding: 8,
  margin: 16,
  item: {
    padding: 16,
    margin: 16,
    height: 48,
    dense: {
      height: 32,
    },
  }
};

const list = {
  padding: 8,
  margin: 16,
  item: {
    padding: 16,
    margin: 16,
    height: 56,
    dense: {
      height: 48,
    },
  }
};

const desktop = {
  iconSize: 24,
  borderRadius: 2,
  spinner,
  menu,
  list,
  button,
  floatingActionButton,
  gutter,
  dropdown,
  toolbar,
  keylineIncrement,
  leftNavMenuItemHeight: 48,
  subheaderHeight: 48,
};

const tablet = {
  iconSize: 24,
  borderRadius: 2,
  spinner,
  menu,
  list,
  button,
  floatingActionButton,
  gutter,
  dropdown,
  toolbar,
  keylineIncrement,
  leftNavMenuItemHeight: 48,
  subheaderHeight: 48,
};

const phone = {
  iconSize: 24,
  borderRadius: 2,
  spinner,
  menu,
  list,
  button,
  floatingActionButton,
  gutter,
  dropdown,
  toolbar,
  keylineIncrement,
  leftNavMenuItemHeight: 48,
  subheaderHeight: 48,
};

export default {
  phone,
  tablet,
  desktop
}