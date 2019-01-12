const commonConfig = require('./build-tools/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {

  const envConfig = require(`./build-tools/webpack.${env.env}`);

  return webpackMerge(commonConfig, envConfig);

}