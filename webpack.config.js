const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const isProd = process.env.NODE_ENV === 'production';
const resolve = (...dir) => path.resolve(__dirname, ...dir);

const config = {
  entry: {
    hilight: "highlight.js",
    vendor: ["babel-polyfill", "vue", "vue-router"],
    main: "./src/main.js"
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  output: {
    path: resolve('dist'),
    // 配置七牛云镜像CDN加速
    publicPath: isProd ? '/dist/' : "",
    filename: '[name].build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
           loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'vue-style-loader'
              }),
              scss: ExtractTextPlugin.extract({
                use: ['css-loader', {
                  loader: 'sass-loader',
                  options: {
                    includePaths: ['node_modules']
                  }}],
                fallback: 'vue-style-loader'
              })
           }
          }
        }
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [resolve('src'), resolve('test')]
      },
      {
        test:/\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use:  [{
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["node_modules"]
                }
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(txt|md)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader?name=[name].[ext]']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html'),
      filename: 'index.html',
      // favicon: require('./src/config').favicon || false,
      minify: {
        // https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true
      },
      chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin({      
      // filename: isProd ? 'build.[chunkhash:5].css' : 'build-css.css',
      filename: 'styles.css',
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('src/assets'),
        to: resolve('dist/assets'),
        ignore: ['.*']
      }
    ]),
    new CommonsChunkPlugin({
      names: ["hilight", "vendor"]
    })
  ]
};

if (isProd) {
  config.plugins = (config.plugins || []).concat([
    new BundleAnalyzerPlugin(),
    new UglifyJSPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        pure_funcs: ['console.log']
      },
      output: {
        comments: false
      }
    })
  ])
}

module.exports = config;