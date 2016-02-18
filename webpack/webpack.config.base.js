'use strict';

module.exports = {
  entry: './src/index.js',
  externals: ['angular', 'angular-ui-router'],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  }
};
