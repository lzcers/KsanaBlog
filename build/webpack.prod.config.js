const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = webpack.optimize.UglifyJsPlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          use: "css-loader?importLoaders=1!less-loader",
          fallback: 'vue-style-loader'          
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV": "production"
      }
    }),
    new ExtractTextPlugin({      
      // filename: isProd ? 'build.[chunkhash:5].css' : 'build-css.css',
      filename: 'assets/styles.[chunkhash:5].css',
      disable: false,
      allChunks: true
    }),
    new CommonsChunkPlugin({
      names: ["hilight", 'vue', 'marked', 'coreJs']
    }),
    new UglifyJSPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
      sourceMap: true,
      output: {
        comments: false
      }
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new BundleAnalyzerPlugin()
  ]
}