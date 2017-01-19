// BlackMesa - Vue Base App 
// Webpack 2 Configuration file
// -----------------------------------------
// Lucas Moreira - l.moreira@live.ca
// -----------------------------------------
//
// TODO ------------------------------------
//
// 1- Optimize Image exports 
// 2- Lint SCSS
// 3- Lint JS
// 4- Lint Vue
// 5- Split CSS
// 6- Setup ENV. and ENV variables
// 7- setup BUILD
// 9- Setup I18n style localization
// ----------------------------------------
//

// Require Imports
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

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
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader?-autoprefixer!sass-loader!postcss-loader'
          },
          // Must have postcss require autoprefixer for @import's to get piped.
          postcss: [require('autoprefixer')()]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ]  } })
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
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
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
