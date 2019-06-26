// MDEV Digital - Webpack Boilerplate[VueJS]
// Webpack 4 Configuration file
// -----------------------------------------
// PRODUCTION ENVIRONMENT
// ----------------------------------------

// Required Imports
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Dev Server Configuration
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
     historyApiFallback: true,
     noInfo: true,
     contentBase: './dist'
  },

  plugins: [
    // Set environment to Development
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
});
