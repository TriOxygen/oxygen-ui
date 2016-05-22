import React, { Component, PropTypes } from 'react';
import Paper from './Paper';
import Heading from './Heading';
import Divider from './Divider';
import Collapse from 'react-collapse';
import View from './View';
import ContentRemoveCircleOutline from 'oxygen-md-svg-icons/lib/Content/RemoveCircleOutline';
import ContentAddCircleOutline from 'oxygen-md-svg-icons/lib/Content/AddCircleOutline';

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
    isOpened: PropTypes.bool,
    title: PropTypes.node,
    closedColor: PropTypes.string,
  };

  static defaultProps = {
    isOpened: true,
    closedColor: 'grey'
  };

  static contextTypes = {
    mdTheme: PropTypes.object
  };

  state = {
    isOpened: this.props.isOpened
  };

  toggle = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    const { mdTheme } = this.context;
    const { isOpened } = this.state;
    const { children, title, closedColor, ...other } = this.props;
    const mdColor = isOpened && mdTheme.secondary || closedColor;
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
              {isOpened && <ContentRemoveCircleOutline block />}
              {!isOpened && <ContentAddCircleOutline block />}
            </View>
          </View>
        </Heading>
        <Divider />
        <Collapse isOpened={isOpened}>
          {children}
        </Collapse>
      </Paper>
    );
  }
}

export default InputGroup;

