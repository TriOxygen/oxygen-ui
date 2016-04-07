import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField';
import Portal from './Portal';
import Menu from './Menus/Menu';
import { Motion, spring } from 'react-motion';
import NavigationArrowDropDown from 'oxygen-md-svg-icons/lib/Navigation/ArrowDropDown';
import { Units } from './Styles';

class SelectField extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.node,
    link: PropTypes.bool,
    href: PropTypes.string,
    onTouchTap: PropTypes.func,
    onChange: PropTypes.func,
    theme: PropTypes.object,
    fullWidth: PropTypes.bool,
    floatingLabelText: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string
  };

  state = {
    hover: false,
    active: false,
    menu: false,
    payload: null
  };

  componentDidMount() {
    this._node = ReactDOM.findDOMNode(this);
  }

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleTouchTap = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { left, top, width } = this._node.getBoundingClientRect();
    this.setState({ menu: true, left, top, width });
  };

  handleMenuClose = () => {
    this.setState({ menu: false });
  }

  handleKeyPress = event => {
    const { keyCode } = event;
    if (keyCode === 0 || keyCode === 32 || keyCode == 13) {
      this.handleTouchTap(event);
      event.preventDefault();
    }
  };

  select = (payload, label) => {
    if (this.state.payload !== payload) {
      const { onChange } = this.props;
      this.setState({ value: label, payload });
      onChange && onChange(payload);
    }
  };

  getValue () {
    return this.state.payload;
  }

  render() {
    const { left, top, width, menu, value } = this.state;
    const { children, ...other } = this.props;
    return (
      <TextField
        {...other}
        readOnly
        className={css.select}
        value={value || menu && ' ' || ''}
        ref="field"
        onFocus={this.handleTouchTap}
        onTouchTap={this.handleTouchTap}
      >
        <Motion style={{ progress: spring( menu ? 1 : 0) }}>
          {interpolated => {
            const { progress } = interpolated;
            if (progress > 0) {
              return (
                <Portal positioned menu style={{ transform: `translate3d(${left + 4}px, ${top}px, 0)` }}>
                  <Menu
                    rounded={false}
                    padded={false}
                    zDepth={2}
                    onMenuItemTap={this.select}
                    onRequestClose={this.handleMenuClose}
                    style={{
                      position: 'relative',
                      width: width - 8,
                      top: 60 - progress * 32,
                      opacity: progress
                    }}
                  >
                    {children}
                  </Menu>
                </Portal>
              );
            }
            return null;
          }}
        </Motion>
        <NavigationArrowDropDown className={css.arrow}/>
      </TextField>
    );
  }
}

const css = oxygenCss({
  select: {
    cursor: 'pointer',
  },
  arrow: {
    position: 'absolute',
    right: Units.phone.gutter.mini / 2,
    top: '50%',
    marginTop: -12
  }
});


export default SelectField;
