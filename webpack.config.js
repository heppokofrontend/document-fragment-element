const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'HTMLDocumentFragmentElement',
    libraryExport: 'default',
    libraryTarget: 'this',
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
