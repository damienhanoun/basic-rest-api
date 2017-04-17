const commonConfig = require('./base.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
var path = require('path');

module.exports = function (env) {
  return webpackMerge(commonConfig, {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'basic-rest-api.js',
        path: path.resolve(__dirname, '../dist'),
        library:'RestApi'
    }
  })
}
