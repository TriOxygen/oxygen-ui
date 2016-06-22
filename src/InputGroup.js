import React, { Component, PropTypes } from 'react';
import Paper from './Paper';
import Heading from './Heading';
import Divider from './Divider';
import Collapsible from './Collapsible';
import View from './View';
import ContentRemoveCircleOutline from 'oxygen-md-svg-icons/lib/Content/RemoveCircleOutline';
import ContentAddCircleOutline from 'oxygen-md-svg-icons/lib/Content/AddCircleOutline';
import shallowEqual from 'shallowequal';

const css = oxygenCss({
  heading: {
    padding: `${Units.phone.gutter.mini}px`,
    cursor: 'pointer',
    transition: 'ease background 0.45s'
  }
});

class InputGroup extends Component {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    title: PropTypes.node,
    closedColor: PropTypes.string,
  };

  static defaultProps = {
    open: true,
    closedColor: 'grey'
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !shallowEqual(nextState, this.state) || nextProps.open != this.props.open;
  // }

  state = {
    open: this.props.open
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { mdTheme } = this.context;
    const { open } = this.state;
    const { children, title, closedColor, ...other } = this.props;
    const mdColor = open && mdTheme.secondary || closedColor;
    const iconColor = mdTheme.colors[mdColor][300].text.disabled;
    return (
      <Paper spaced {...other}>
        <Heading
          onTouchTap={this.toggle}
          mdColor={mdColor}
          margin={false}
          className={css.heading}
          title
        >
          <View>
            <View grow={1} auto column wrap>
              {title}
            </View>
            <View grow={0} style={{ color: iconColor }}>
              {open && <ContentRemoveCircleOutline block />}
              {!open && <ContentAddCircleOutline block />}
            </View>
          </View>
        </Heading>
        <Divider />
        <Collapsible open={open}>
          {children}
        </Collapsible>
      </Paper>
    );
  }
}

export default InputGroup;

