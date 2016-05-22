import React, { Component, PropTypes } from 'react';
import Paper from './Paper';
import Heading from './Heading';
import Divider from './Divider';
import Collapse from 'react-collapse';

const css = oxygenCss({
  padded: {
    padding: `${Units.phone.gutter.mini}px`,
  }
});

class InputGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.node
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  state = {
    isOpened: false
  };

  toggle = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    const { mdTheme } = this.context;
    const { children, title, ...other } = this.props;
    return (
      <Paper spaced {...other}>
        {typeof title === 'string' ? <Heading onTouchTap={this.toggle} mdColor={mdTheme.secondary} margin={false} className={css.padded} title>{title}</Heading> : title}
        <Divider />
        <Collapse isOpened={isOpened}>
          {children}
        </Collapse>
      </Paper>
    );
  }
}

export default InputGroup;
