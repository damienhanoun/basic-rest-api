const commonConfig = require('./base.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
var path = require('path');

module.exports = function (env) {
  return webpackMerge(commonConfig, {
    entry: './src/RestApi.ts',
    output: {
      filename: 'basic-rest-api.min.js',
      path: path.resolve(__dirname, '../dist'),
      library:'RestApi'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
  })
}
