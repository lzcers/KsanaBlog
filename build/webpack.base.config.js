/*
  webpack 打包的基础配置
*/
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const path = require('path')
const fs = require('fs')
const resolve = (...dir) => path.resolve(__dirname, ...dir)

module.exports = {
  entry: {
    hilight: "highlight.js",
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
    path: resolve('../dist'),
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
        test: /\.(txt|md)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:'/assets/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '/assets/media/[name].[hash:7].[ext]'
        }
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
    new CopyWebpackPlugin([
      {
        from: resolve('../src/static'),
        to: resolve('../dist/static'),
        ignore: ['.*']
      }
    ]),
    new SWPrecacheWebpackPlugin({
      cacheId: 'ksana',
      filename: 'serviceWorker.js',
      staticFileGlobs: ['dist/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'dist/'
    })
  ]
}