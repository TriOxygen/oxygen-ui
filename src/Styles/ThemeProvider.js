import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Colors from './Colors';
import Theme from './Theme';
const { material } = Colors;

class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string,
    main: PropTypes.string,
  };

  static childContextTypes = {
    theme: PropTypes.object,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string,
    main: PropTypes.string,
  };

  constructor() {
    super(...arguments);
    const { primary, secondary, tertiary, main } = this.props;
    this.theme = new Theme(material[primary], material[secondary], material[tertiary], main);
  }

  getChildContext() {
    return {
      theme: this.theme
    }
  }

  componentWillReceiveProps(nextProps) {
    const { primary, secondary, tertiary, main } = nextProps;
    this.theme = new Theme(material[primary], material[secondary], material[tertiary], main);
    this.forceUpdate();
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

function mapStateToProps(state) {
  const { theme } = state.profile.settings;
  return {
    ...theme
  }
}

export default connect(mapStateToProps)(ThemeProvider);
