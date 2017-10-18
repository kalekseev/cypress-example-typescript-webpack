const wp = require('@cypress/webpack-preprocessor')

module.exports = (register, config) => {
  const options = {
    webpackOptions: require('../../webpack.config')
  }
  register('on:spec:file:preprocessor', wp(config, options))
}
