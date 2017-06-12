  const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  watch:true,
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          compress: {
              screw_ie8: true
          },
          comments: false
      })
  ]
};
