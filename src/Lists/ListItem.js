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
  leftElement: {
    marginRight: `${Units.phone.list.padding}px`,
    '@desktop': {
      marginRight: `${Units.desktop.list.padding}px`
    }
  },
  rightElement: {
    marginLeft: `${Units.phone.list.padding}px`,
    '@desktop': {
      marginLeft: `${Units.desktop.list.padding}px`
    }
  },
  'root': {
    userSelect: 'none',
    transition: 'background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    // lineHeight: `${Units.phone.list.item.height}px`,
    // height: `${Units.phone.list.item.height}px`,
    borderStyle: 'none none solid none',
    // minHeight: `${Units.phone.list.item.height}px`,
    borderWidth: 1,
    borderColor: 'transparent',
    '&interactive': {
      cursor: 'pointer',
    },
    '@desktop': {
      // lineHeight: `${Units.desktop.list.item.height}px`,
      // height: `${Units.desktop.list.item.height}px`,
    },
    '&padded': {
      padding: Units.phone.list.padding / 2,

    },
    '&dense': {
      // lineHeight: `${Units.phone.list.item.dense.height}px`,
      // height: `${Units.phone.list.item.dense.height}px`,
      '@desktop': {
        // lineHeight: `${Units.desktop.list.item.dense.height}px`,
        // height: `${Units.desktop.list.item.dense.height}px`,

      }
    },
  },
});

class ListItem extends Component {

  static propTypes = {
    payload: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.array]),
    mdColor: PropTypes.string,
    padded: PropTypes.bool,
    style: PropTypes.object,
    dense: PropTypes.bool,
    active: PropTypes.bool,
    divider: PropTypes.bool,
    leftElement: PropTypes.node,
    rightElement: PropTypes.node,
    children: PropTypes.node,
    onTouchTap: PropTypes.func
  };

  static defaultProps = {
    padded: true,
  };

  static contextTypes = {
    mdTheme: PropTypes.object,
    mdColor: PropTypes.string
  };

  state = {
    hover: false
  };

  getStyle() {
    const { mdTheme, mdColor: contextColor } = this.context;
    const { hover, hasFocus } = this.state;
    const { active, divider, mdColor, style } = this.props;
    const colors = mdTheme.colors[mdColor || contextColor || mdTheme.primary];
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
    const { onTouchTap } = this.props;
    if (onTouchTap) {
      this.setState({ hover: true });
    }
  }

  handleMouseLeave() {
    const { onTouchTap } = this.props;
    if (onTouchTap) {
      this.setState({ hover: false });
    }
  }

  handleTouchTap = () => {
    const { onTouchTap, payload } = this.props;
    if ( onTouchTap) {
      onTouchTap(payload);
    }
  };


  render() {
    const { payload, divider, dense, padded, children, leftElement, rightElement, style, onTouchTap, ...other } = this.props;
    let leftComponent;
    let rightComponent;
    if (leftElement) {
      leftComponent = React.cloneElement(leftElement, { className: styles.leftComponent });
    }
    if (rightElement) {
      rightComponent = <div>{React.cloneElement(rightElement, { className: styles.rightComponent })}</div>;
    }
    const rootClasses = classNames(styles.root, {
      [styles.padded]: padded,
      [styles.interactive]: onTouchTap,
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
          {leftElement}
          {onTouchTap && <Ink />}
          <View grow={1} auto column wrap>{children}</View>
          {rightElement}
        </View>
      </div>
    );
  }
}

export default ListItem;
