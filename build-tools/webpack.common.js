const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
    'react': 'commonjs react'
  },
  plugins: [
    new webpack.ProgressPlugin()
  ]
}