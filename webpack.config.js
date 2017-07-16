const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const resolve = (...dir) => path.resolve(__dirname, ...dir);

const config = {
  entry: './src/main.js',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'build.js'
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
                use: 'css-loader!sass-loader',
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
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: "sass-loader",
            options: {
              includePaths: ["node_modules"]
            }}]
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
    })
  ]
};

if (isProd) {
  config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('src/assets'),
        to: resolve('dist/assets'),
        ignore: ['.*']
      }
    ])
  ])
}

module.exports = config;