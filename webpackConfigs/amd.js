const commonConfig = require('./base.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
var path = require('path');

module.exports = function (env) {
  return webpackMerge(commonConfig, {
    entry: './src/BasicRestApi.ts',
    output: {
      filename: 'basic-rest-api.min.js',
      path: path.resolve(__dirname, '../dist/amd'),
      library:'basic-rest-api',
      libraryTarget:'amd'
    }
  })
}
