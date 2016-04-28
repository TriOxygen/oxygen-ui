import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Units, Colors, Typography } from '../Styles';

export default class CardImage extends Component {

  static propTypes = {
  };

  render() {
    const { className, title, subtitle, children, ...other } = this.props;
    const child = React.Children.only(children);
    return (
      <div className={classNames(className, css.container)}>
        <div className={css.mediaHolder}>
          <div className={css.media}>
            {React.cloneElement(child, {className: classNames(child.props.className, css.element)})}
          </div>
        </div>
      </div>
    );
  }
}

const css = oxygenCss({
  container: {
    position: 'relative',
    boxSizing: 'border-box',
    },
  mediaHolder: {
    width: '100%',
    paddingBottom: `${9 / 16 * 100}%`,
    position: 'relative',
  },
  media: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  element: {
    maxHeight: '100%',
    alignSelf: 'center'
  },
  cardImage: {
    width: '100%',
  }
});
