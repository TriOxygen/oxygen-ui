import React, { Component, PropTypes } from 'react';
import { mergeStyles, Units } from '../Styles';
import Ink from '../Ink';
import View from '../View';
import classNames from 'classnames';
import Divider from '../Divider';

const styles = oxygenCss({
  listItem: {
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  icon: {
    marginRight: `${Units.phone.list.padding}px`,
    '@desktop': {
      marginRight: `${Units.desktop.list.padding}px`
    }
  },
  'root': {
    userSelect: 'none',
    transition: 'background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    boxSizing: 'border-box',
    lineHeight: `${Units.phone.list.item.height}px`,
    height: `${Units.phone.list.item.height}px`,
    borderStyle: 'none none solid none',
    borderWidth: 1,
    borderColor: 'transparent',
    '@desktop': {
      lineHeight: `${Units.desktop.list.item.height}px`,
      height: `${Units.desktop.list.item.height}px`,
    },
    '&dense': {
      lineHeight: `${Units.phone.list.item.dense.height}px`,
      height: `${Units.phone.list.item.dense.height}px`,
      '@desktop': {
        lineHeight: `${Units.desktop.list.item.dense.height}px`,
        height: `${Units.desktop.list.item.dense.height}px`,

      }
    },
    padding: `0 ${Units.phone.list.item.padding / 2}px`,
  },
});

class ListItem extends Component {
  static displayName = 'ListItem';

  static propTypes = {
    payload: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.array]),
    color: PropTypes.string,
    style: PropTypes.object,
    dense: PropTypes.bool,
    active: PropTypes.bool,
    divider: PropTypes.bool,
    icon: PropTypes.node,
    children: PropTypes.node,
    onTouchTap: PropTypes.func
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    color: PropTypes.string
  };

  state = {
    hover: false
  };

  getStyle() {
    const { mdTheme, color: contextColor } = this.context;
    const { hover, hasFocus } = this.state;
    const { active, divider, color, style } = this.props;
    const colors = mdTheme.colors[color || contextColor || mdTheme.primary];
    return mergeStyles(
      hasFocus ? {
        backgroundColor: colors[200].hex,
        color: colors[200].text.default
      } : null,
      hover ? {
        backgroundColor: colors[100].hex,
        color: colors[100].text.default
      } : null,
      divider ? {
        borderColor: mdTheme.text.divider,
      } : null,
      active ? {
        backgroundColor: colors[700].hex,
        color: colors[700].text.default
      } : null,
      style
    );
  }

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  handleTouchTap = () => {
    const { onTouchTap, payload } = this.props;
    if ( onTouchTap) {
      onTouchTap(payload);
    }
  };


  render() {
    const { dense, children, icon, style, onTouchTap, ...other } = this.props;
    let iconElement;
    if (icon) {
      iconElement = React.cloneElement(icon, { className: styles.icon });
    }
    const rootClasses = classNames(styles.root, {
      [styles.dense]: dense
    });
    return (
      <div
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        style={this.getStyle()}
        onTouchTap={this.handleTouchTap}
        className={rootClasses}
        {...other}
      >
        <View className={styles.listItem} row>
          {iconElement}
          <Ink />
          {children}
        </View>
      </div>
    );
  }
}

export default ListItem;
