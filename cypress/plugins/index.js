const webpackPreprocessor = require('@cypress/webpack-preprocessor')
module.exports = (register, config) => {
  register('on:spec:file:preprocessor', webpackPreprocessor(config))
}

// module.exports = (register, config) => {
//   const options = {
//     webpackOptions: require('../../webpack.config')
//   }
//   register('on:spec:file:preprocessor', webpackPreprocessor(config, options))
// }
