// BlackMesa - Vue Base App 
// Webpack 2 Configuration file
// -----------------------------------------
// Lucas Moreira - l.moreira@live.ca
// -----------------------------------------
//
// TODO ------------------------------------
//
// 4- Setup VueX - PRIORITY
// 5- Setup I18n style localization
// 5- Setup Routing
// 6- Setup DB
// 7- Setup Authentication
// ----------------------------------------
//
// CRITICAL TODO - DEPLOYMENT ------------
//
// 1- Server MUST be setup to serve [ index.html ]
// This launches the application and handles the 
// url parcing.

// Require Imports
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const StyleLintPlugin = require('stylelint-webpack-plugin')

// Module Exports
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      // Vue Linting
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      // Template Processing
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader?-autoprefixer!postcss-loader!sass-loader'
          },
          // Must have postcss require autoprefixer for @import's to get piped.
          postcss: [
            require('postcss-cssnext')()
          ]
        }
      },
      // JavaScript Processing
      {
        test: /\.js$/,
        loader: 'babel-loader!eslint-loader',
        exclude: /node_modules/
      },
      // Image Processing
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          },
          // Image Compression
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 9,
              interlaced: false,
              // .png
              pngquant: {
                quality: '85-90',
                speed: 4
              },
              // .jpg/jpeg
              mozjpeg: {
                quality: 90
              },
              // .svg
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              },
              gifsicle: {
                interlaced: false,
                optimizationLevel: 2
              }
              //.svg
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ]  } }),
    new StyleLintPlugin({
      syntax: 'scss'
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
  // Require 
  const CompressionPlugin = require("compression-webpack-plugin");
  
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // Gzip Compression
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
