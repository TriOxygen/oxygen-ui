import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const styles = oxygenCss({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  responsiveRow: {
    flexDirection: 'row',
    '@phone': {
      flexDirection: 'column'
    }
  },
  column: {
    flexDirection: 'column'
  }
});

const mixProps = (style, props) => {
  const divStyle = {};
  if (props.flex) {
    divStyle.flex = props.flex;
  }
  if (props.grow) {
    divStyle.flexGrow = props.grow;
  }
  if (props.shrink) {
    divStyle.flexShrink = props.shrink;
  }
  if (props.style) {
    return { ...style, ...divStyle, ...props.style };
  } else {
    return { ...style, ...divStyle };
  }
}

export default class View extends Component {

  static propTypes = {
    row: PropTypes.bool,
    className: PropTypes.string,
    column: PropTypes.bool,
    auto: PropTypes.bool,
    height: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    flex: PropTypes.number,
    grow: PropTypes.number,
    shrink: PropTypes.number,
    responsiveRow: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  render() {
    const { className, row, column, children, responsiveRow, ...other } = this.props;
    const classes = classNames(className, styles.root, {
      [styles.row]: row,
      [styles.responsiveRow]: responsiveRow,
      [styles.column]: !row && column
    });
    return <div className={classes} {...other} style={mixProps({}, this.props)}>{children}</div>;
  }
}