const webpack = require('webpack')
const WebPackConfig = require('webpack-config')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const vendors = [
  'classnames',
  'clock-free',
  'gusher-js',
  'halogen',
  'history',
  'immutable',
  'jquery',
  'js-combinatorics',
  'js-cookie',
  'lightslider',
  'location-origin',
  'lodash',
  'log4js-free',
  'moment',
  'numeral',
  'ommr',
  'phaser',
  'react',
  'react-addons-css-transition-group',
  'react-addons-test-utils',
  'react-body-classname',
  'react-document-title',
  'react-dom',
  'react-ga',
  'react-mixin',
  'react-motion',
  'react-onclickoutside',
  'react-popupbox',
  'react-redux',
  'react-router',
  'redux',
  'redux-saga',
  'redux-thunk',
  'service-proxy',
  'store',
  'superagent',
  'toastr'
]

module.exports = new WebPackConfig.Config().merge({
  entry: {
    vendor: vendors
  },
  output: {
    path: path.resolve(__dirname, '..', 'dll'),
    filename: '[name].js',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '..', 'dll', '[name].manifest.json'),
      name: '[name]',
      context: path.join(__dirname, '..', 'dll')
    }),
    new UglifyJSPlugin()
  ],
  node: {
    fs: 'empty'
  }
})
