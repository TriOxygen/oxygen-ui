import React, { PropTypes, Component} from 'react';

const styles = {
  root: {
    display: 'inline-block',
    verticalAlign: ' middle'
  }
};

export default class CircularProgress extends Component {
  static displayName = 'CircularProgress';

  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    size: PropTypes.number,
    startDegree: PropTypes.number,
    endDegree: PropTypes.number,
    progressWidth: PropTypes.number,
    trackWidth: PropTypes.number,
    cornersWidth: PropTypes.number,
    progress: PropTypes.number,
    fillColor: PropTypes.string,
    trackColor: PropTypes.string,
    progressColor: PropTypes.string
  };

  static contextTypes = {
    theme: PropTypes.object
  };

  static defaultProps = {
    fillColor: 'transparent',
    startDegree: 0,
    progress: 0,
    progressWidth: 4,
    trackWidth: 3.9,
    cornersWidth: 2,
    size: 1
  };


  getPoint(size, radius, degree) {
    const distance = degree / 180 * Math.PI;

    return {
      x: radius * Math.sin(distance) + size / 2,
      y: this.props.trackWidth / 2 + radius * (1 - Math.cos(distance))
    };
  }

  render() {
    const theme = this.context.theme || this.props.theme;
    const {units} = theme;
    const {children, startDegree} = this.props;
    const size = this.props.size * units.keylineIncrement;
    let { progress } = this.props;

    const innerRadius = size / 2 - this.props.trackWidth / 2;
    const endDegree = startDegree + progress * 360 / 100;
    const start = this.getPoint(size, innerRadius, this.props.startDegree);
    const end = this.getPoint(size, innerRadius, endDegree);
    if (progress > 100) {
      progress = 0;
    } else if (progress < 0) {
      progress = 0;
    }
    let progressPath = null;
    if (progress < 50) {
      progressPath = `M ${start.x} ${start.y} A ${innerRadius} ${innerRadius}, 0, 0, 1, ${end.x},${end.y}`;
    } else {
      const middle = this.getPoint(size, innerRadius, startDegree + 180);
      progressPath =
        `M ${start.x} ${start.y} A ${innerRadius} ${innerRadius}, 0, 0, 1, ${middle.x},${middle.y}
        M ${middle.x} ${middle.y} A ${innerRadius} ${innerRadius}, 0, 0, 1, ${end.x},${end.y}`;
    }

    const trackColor = this.props.trackColor || theme.text.divider;
    const progressColor = this.props.progressColor || theme.primary[500].material;

    const progressStyle = {
      strokeWidth: this.props.progressWidth,
      stroke: progressColor,
      fill: 'none'
    };

    const trackStyle = {
      fill: this.props.fillColor,
      stroke: trackColor,
      strokeWidth: this.props.trackWidth
    };

    let text;
    if (this.props.progress > 0 ) {
      text = <text x={size / 2} y={size / 2} fontSize={size / 4} fill={theme.text.default} textAnchor="middle" style={{alignmentBaseline: 'middle'}}>{Math.round(progress)}</text>;
    }

    return (
      <svg style={styles.root} {...this.props} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={innerRadius}
          style={trackStyle}
        />

        {progress > 0 ?
        <path
          d={progressPath}
          style={progressStyle}
        /> : null}

        {progress > 0 ?
        <circle
          cx={start.x}
          cy={start.y}
          r={this.props.cornersWidth}
          fill={progressColor}
        /> : null}

        {progress > 0 ?
        <circle
          cx={end.x}
          cy={end.y}
          r={this.props.cornersWidth}
          fill={progressColor}
        /> : null}
        {text}
        {children}
      </svg>
    );
  }
}
