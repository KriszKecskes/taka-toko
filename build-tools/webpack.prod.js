const paths = require('./build-paths');

module.exports = {
  output: {
    path: paths.buildPath,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }

};