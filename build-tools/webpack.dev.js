const paths = require('./build-paths');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.dev.js',
  output: {
    path: paths.devPath,
    filename: '[chunkhash].build.js'
  },

  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  devServer: {
    compress: true,
    open: true
  }

};