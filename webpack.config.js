const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = webpack.optimize.UglifyJsPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const isProd = process.env.NODE_ENV === 'production';
const resolve = (...dir) => path.resolve(__dirname, ...dir);

const config = {
  entry: {
    hilight: "highlight.js",
    frontMatter: "front-matter",
    coreJs: 'core-js',
    marked: "marked",
    vue: ["vue", "vue-router"],
    main: "./src/main.ts"
  },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      // 只用运行时版本
      'vue$': 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [".tsx", ".ts", ".js"]    
  },
  output: {
    path: resolve('dist'),
    // 配置七牛云镜像CDN加速
    publicPath: "",
    filename: '[name].build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test:/\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.(txt|md)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets/'
        }
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        pathRewrite: {'^/api': ''}
      }
    }
  },
  devtool: isProd ? "" : "#source-map",
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
      filename: 'assets/styles.[chunkhash:5].css',
      disable: false,
      allChunks: true
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: resolve('src/assets'),
    //     to: resolve('dist/assets'),
    //     ignore: ['.*']
    //   }
    // ]),
    new CommonsChunkPlugin({
      names: ["hilight", 'vue', 'frontMatter', 'marked', 'coreJs']
    })
  ]
};

if (isProd) {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),
    new UglifyJSPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      sourceMap: true,
      output: {
        comments: false
      }
    }),
    // new BundleAnalyzerPlugin()
  ])
}

module.exports = config;