const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.min.js',
    library: 'HTMLDocumentFragmentElement',
    libraryExport: 'HTMLDocumentFragmentElement',
    libraryTarget: 'window',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
    }]
  },
};
