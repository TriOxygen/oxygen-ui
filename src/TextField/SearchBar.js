import React, { Component, PropTypes } from 'react';
import TextField from 'TextField/TextField';
import Paper from '../Paper';
import { Shadow } from '../Styles';
import classNames from 'classnames';

import ActionSearch from 'oxygen-md-svg-icons/lib/Action/Search';

const css = oxygenCss({
  searchBar: {
    boxShadow: Shadow[1],
    borderRadius: 2,
  }
});

class SearchBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  getStyle() {
    const { mdTheme } = this.context;
    return {
      backgroundColor: mdTheme.theme.card.hex,
    }
  }

  focus = () => {
    const { textField } = this.refs;
    textField.focus();
    textField.select();
  };

  render() {
    const { children, className, ...other } = this.props;
    const classes = classNames(className, css.searchBar);
    return (
      <Paper fullWidth onTouchTap={() => this.focus()}>
        <TextField
          ref="textField"
          icon={<ActionSearch block/>}
          placeholder={'Search'}
          {...other}
        >
          {children}
        </TextField>
      </Paper>
    );
  }
}

export default SearchBar;
