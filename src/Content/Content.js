import React, { Component, PropTypes } from 'react';
import ContentContainer from './ContentContainer';
import { Motion, spring } from 'react-motion';

class Content extends Component {
  static propTypes = {
    children: PropTypes.node,
    Wrapper: PropTypes.func,
    header: PropTypes.node,
    autoHide: PropTypes.bool
  };

  state = {
    headerVisible: true,
    autoHide: false
  };

  handleScroll = (direction, scrollTop) => {

    if (direction === 'down' && scrollTop > 64 && this.state.headerVisible) {
      this.setState({ headerVisible: false });
    } else if (direction ==='up' && !this.state.headerVisible) {
      this.setState({ headerVisible: true });
    }
  }

  renderSimple(props, children) {
    return <ContentContainer {...props}>{children}</ContentContainer>
  }

  renderAutoHide(props, children, header, Wrapper) {
    const { headerVisible } = this.state;
    return (
      <Motion style={{ top: spring(headerVisible ? 0 : 1, { stiffness: 300, damping: 25 })}}>
        {interpolated => {
          const top = Math.floor(interpolated.top * 100) / 100;
          const headerComponent = React.cloneElement(header, {
            ...header.props,
            style: {
              transform: `translate3d(0, ${top * -60}px, 0)`,
            }
          });
          return (
            <Wrapper {...props}>
              {headerComponent}
              <ContentContainer onScroll={this.handleScroll} style={{ top: top * -56 }}>
                {children}
              </ContentContainer>
            </Wrapper>
          );
        }}
      </Motion>
    );
  }

  renderFixed(props, children, header, Wrapper) {
    return (
      <Wrapper {...props}>
        {header}
        <ContentContainer >
          {children}
        </ContentContainer>
      </Wrapper>
    );
  }

  render() {
    const { children, header, Wrapper, autoHide, ...other } = this.props;
    if (!header || !Wrapper) {
      return this.renderSimple(other, children);
    }
    if (autoHide) {
      return this.renderAutoHide(other, children, header, Wrapper);
    }
    return this.renderFixed(other, children, header, Wrapper);
  }
}

export default Content;
