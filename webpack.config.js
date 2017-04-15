var path = require('path');

module.exports = {
  entry: './src/RestApi.ts',
  output: {
    filename: 'basic-rest-api.js',
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
  }
};
