const demoStyles = oxygenCss({
  container: {
    margin: 8,
    padding: 8,
    '@desktop': {
      width: 320,
      display: 'inline-block'
    },
    '@phone': {
      width: 'auto'
    }
  }
});

export default demoStyles;