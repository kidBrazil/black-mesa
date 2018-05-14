// BlackMesa - Vue Base App
// Webpack 2 Configuration file
// -----------------------------------------
// Lucas Moreira - l.moreira@live.ca
// -----------------------------------------
//
// TODO ------------------------------------
//
// 2- Setup DB
// 3- Setup Authentication
// ----------------------------------------
//
// CRITICAL TODO - DEPLOYMENT ------------
//
// 1- Server MUST be setup to serve [ index.html ]
// on all requests and allow Vue to route.

// Require Imports
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin").default;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

const isProd = function() {
  return (process.env.WEBPACK_MODE === 'production') ? true : false;
}
const buildingForLocal = () => {
  return (process.env.WEBPACK_MODE === 'development');
};

const robotOptions = {
  policy: [
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow: ["/search"],
      crawlDelay: 2
    },
    {
      userAgent: "OtherBot",
      allow: ["/allow-for-all-bots", "/allow-only-for-other-bot"],
      disallow: ["/admin", "/login"],
      crawlDelay: 2
    },
    {
      userAgent: "*",
      allow: "/",
      disallow: "/search",
      crawlDelay: 10,
      cleanParam: "ref /articles/"
    }
    ],
    sitemap: "http://example.com/sitemap.xml",
    host: "http://example.com"
}
// Module Exports
module.exports = {
  // Asset Splitting [ Vendor | Build ]
  entry: {
    build: './src/main.js',
    vendor: [
      'vue',
      'vue-i18n',
      'vue-resource',
      'vue-router',
      'vuex'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app/[name][hash].js'
  },
  optimization:{
    runtimeChunk: false,
    splitChunks: {
      chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    }
  },
  resolveLoader: {
    modules: [setPath('/node_modules')]
  },
  // Module Rules & Loaders
  module: {
    rules: [
      // Vue Linting
      {
        enforce: 'pre',
        test: /\.vue$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
          exclude: /(node_modules)/,
          use: [{
            loader: "babel-loader",
            options: { presets: ['es2015'] }
          }]
        },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
        fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.scss$/,
        use:
        ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              }
            },
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/assets/styles/component-lean-main.scss'
              }
            }
          ]
        }),
      },
      // Image Processing
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loaders: [ 'file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
              quality: 95
            },
            gifsicle: {
              interlaced: false,
              optimizationLevel: 2
            },
            pngquant: {
              quality: '85-90',
              speed: 4
            },
            svgo: {
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeEmptyAttrs: false
                }
              ]
            }
          }

        }]
      }
    ]
  },
  // Plugins & Post Processing
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    // Auto Prefix & Linting
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ]  } }),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      syntax: 'scss',
      files: ['**/*.vue']
    }),
    new RobotstxtPlugin(robotOptions),
    // Text Extraction & Chunking
    new ExtractTextPlugin("assets/styles/styles[hash].css"),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new FaviconsWebpackPlugin({
      logo: './src/assets/images/favicon.png',
      prefix: 'icons-[hash]/',
      emitStats: false,
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'Zucora Work Order Portal',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    })
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


if (process.env.WEBPACK_MODE === 'production') {
  // Require Compression Plugin for Gzip
  const CompressionPlugin = require("compression-webpack-plugin");

  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK_MODE: '"production"'
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
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
