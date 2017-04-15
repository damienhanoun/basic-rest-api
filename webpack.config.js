var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/RestApi.ts',
  output: {
    filename: 'basic-rest-api.min.js',
    path: path.resolve(__dirname, 'dist'),
    library:'basic-rest-api',
    libraryTarget: 'amd'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
