import React, { PropTypes, Component } from 'react';
import CSSPropertyOperations from 'react/lib/CSSPropertyOperations';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import classNames from 'classnames';

export default class Portal extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    positioned: PropTypes.bool,
    dialog: PropTypes.bool,
    tooltip: PropTypes.bool,
    menu: PropTypes.bool
  };

  componentWillMount() {
    const { style, className, menu, positioned, dialog, tooltip } = this.props;
    this.node = document.createElement('div');
    this.node.className = classNames(className, css.root, {
      [css.dialog]: dialog,
      [css.positioned]: positioned,
      [css.menu]: menu,
      [css.tooltip]: tooltip
    });
    document.body.appendChild(this.node);
    CSSPropertyOperations.setValueForStyles(this.node, style, this);
    this.renderPortal(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.renderPortal(nextProps);
  }

  componentWillUnmount() {
    this.closePortal();
  }

  closePortal() {
    if (this.node) {
      unmountComponentAtNode(this.node);
      document.body.removeChild(this.node);
    }
    this.node = null;
  }

  renderPortal(props) {
    const { children } = props;
    if (children.length > 0) {
      ReactDOM.unstable_renderSubtreeIntoContainer(this, <div>{children}</div>, this.node);
    } else {
      ReactDOM.unstable_renderSubtreeIntoContainer(this, React.Children.only(children), this.node);
    }
  }

  render() {
    return null;
  }
}

const css = oxygenCss({
  root: {
    position: 'relative'
  },
  menu: {
    zIndex: 99
  },
  dialog: {
    zIndex: 100
  },
  tooltip: {
    zIndex: 101
  },
  positioned: {
    position: 'absolute',
    left: 0,
    top: 0,
  }
});
