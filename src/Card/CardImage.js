import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Units, Colors, Typography } from '../Styles';

export default class CardImage extends Component {

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { className, title, subtitle, ...other } = this.props;
    return (
      <div className={css.container}>
        <img {...other} className={classNames(className, css.cardImage)}/>
        <div className={css.titleContainer}>
          {typeof title === 'string' ? <h2 className={css.title}>{title}</h2> : title}
          {typeof subtitle === 'string' ? <h3 className={css.subtitle}>{subtitle}</h3> : subtitle}
        </div>
      </div>
    );
  }
}

const css = oxygenCss({
  container: {
    position: 'relative',
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.78) 100%)',
    padding: `${Units.phone.gutter.default / 2}px ${Units.phone.gutter.default}px`
  },
  title: {
    padding: 0,
    color: Colors.text.light.default,
    textShadow: `0px 0px 2px ${Colors.text.dark.default}`,
    margin: `${Units.phone.gutter.mini}px 0 `,
    fontSize: Typography.phone.title.fontSize,
    fontWeight: Typography.phone.title.fontWeight,
  },
  subtitle: {
    padding: 0,
    textShadow: `0px 0px 2px ${Colors.text.dark.default}`,
    color: Colors.text.light.default,
    margin: `${Units.phone.gutter.mini}px 0 `,
    fontSize: Typography.phone.subheading.fontSize,
    fontWeight: Typography.phone.subheading.fontWeight,
  },
  cardImage: {
    width: '100%',
  }
});

