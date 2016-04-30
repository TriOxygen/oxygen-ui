import React, { Component, PropTypes } from 'react';
import BottomBar from 'BottomBar/BottomBar';
import VerticalCenter from 'VerticalCenter';
import Paper from 'Paper';
import RaisedButton from 'RaisedButton';
import ButtonContainer from 'ButtonContainer';
import FlatButton from 'FlatButton';


class BottomBarDemo extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    bottomBar: false
  };

  bottomBar = () => {
    this.setState({ bottomBar: !this.state.bottomBar });
  }

  render() {
    const { bottomBar } = this.state;
    return (
      <Paper fullWidth={false} spaced padded style={{ width: 320, height: 320}}>
        <VerticalCenter>
          <RaisedButton label='Bottombar' onTouchTap={this.bottomBar} />
          <BottomBar open={bottomBar}>
            <ButtonContainer>
              <FlatButton label='Delete' />
              <FlatButton label='Cancel' />
            </ButtonContainer>
          </BottomBar>
        </VerticalCenter>
      </Paper>
    );
  }
}

export default BottomBarDemo;
