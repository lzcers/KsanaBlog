const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = webpack.optimize.UglifyJsPlugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const fs = require('fs')
const path = require('path')
const resolve = (...dir) => path.resolve(__dirname, ...dir)

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
    new HtmlWebpackPlugin({
      template: resolve('../src', 'index.html'),
      filename: 'index.html',
      // favicon: require('./src/config').favicon || false,
      minify: {
        // https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true
      },
      chunksSortMode: 'dependency',
      serviceWorkerLoader: `<script>${fs.readFileSync(path.join(__dirname,
        '../src/serviceWorker/serviceWorkerRegister.js'))}</script>`
    }),
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
    // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: 'ksana',
      filename: 'serviceWorker.js',
      staticFileGlobs: ['dist/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'dist/'
    }),
    new BundleAnalyzerPlugin()
  ]
}