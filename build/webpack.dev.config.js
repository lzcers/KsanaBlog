const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "vue-style-loader!css-loader"
      },
      {
        test: /\.less$/,
        loader: "vue-style-loader!css-loader?importLoaders=1!less-loader"
      }
    ]
  },
  // 开发环境需要将请求反向代理到本地的 Golang 后端
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        pathRewrite: {'^/api': ''}
      }
    }
  },
  // 开发环境用这个 source-map 据说会更快
  devtool: "#cheap-module-eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'development'"
      }
    }),
    new FriendlyErrorsPlugin()
  ]
}