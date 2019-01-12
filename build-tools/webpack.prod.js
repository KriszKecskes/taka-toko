const paths = require('./build-paths');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: paths.buildPath,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },

  externals: {
    'react': 'commonjs react'
  },

};