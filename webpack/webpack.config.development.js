'use strict';

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.assign(baseConfig,{
  output: {
    library: 'ui-router-logger',
    libraryTarget: 'umd'
  }
});


module.exports = config;
