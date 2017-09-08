const WebpackConfig = require('webpack-config')

WebpackConfig.environment.setAll({
    env: () => process.env.NODE_ENV || 'development'
})

module.exports = WebpackConfig.Config().extend('webpack/[env].config.js')