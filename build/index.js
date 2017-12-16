const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')

const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(webpackBaseConfig, isProd ? 
  require('./webpack.prod.config.js') 
  : require('./webpack.dev.config.js'))