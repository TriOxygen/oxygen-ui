var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  // noInfo: true,
  hot: true,
  historyApiFallback: true
}).listen(3002, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3002/');
});