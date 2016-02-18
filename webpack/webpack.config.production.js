'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.assign(baseConfig,{
  output: {
    library: 'ui-router-logger.min',
    libraryTarget: 'umd'
  }
});
config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
];

module.exports = config;
