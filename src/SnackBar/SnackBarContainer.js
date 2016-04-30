import React, { PropTypes, Component } from 'react';
import { Shadow, Colors, Units, Typography } from '../Styles';
import Portal from '../Portal';

const { snackBar } = Colors;

export default class SnackBarContainer extends Component {

  static propTypes = {
    message: PropTypes.string,
    position: PropTypes.number,
    onRequestNext: PropTypes.func,
  };

  static defaultProps = {
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  componentWillUnmount() {
    if (this.props.onRequestNext) {
      this.props.onRequestNext();
    }
  }

  getStyle() {
    const { shade } = this.context.mdTheme;
    let { position } = this.props;
    if (position > 1) {
      position = 1;
    }
    return Object.assign({}, {
      transform: `translate3d(0, ${-position  * 56}px, 0)`,
      backgroundColor: snackBar[shade].background,
      color: snackBar[shade].text
    });
  }

  render() {
    const { message } = this.props;

    return (
      <Portal tooltip>
        <div className={css.container} style={this.getStyle()}>
          {message}
        </div>
      </Portal>
    );
  }
}

const css = oxygenCss({
  container: {
    position: 'fixed',
    height: 60,
    boxSizing: 'border-box',
    lineHeight: `56px`,
    fontSize: Typography.phone.subheading.fontSize,
    fontWeight: Typography.phone.subheading.fontWeight,
    padding: `0 ${Units.phone.gutter.mini}px`,
    left: Units.phone.gutter.mini,
    bottom: -60,
    right: Units.phone.gutter.mini,
    borderRadius: 2,
    shadow: Shadow[1]
  }
})