const webpack = require('webpack')
const WebPackConfig = require('webpack-config')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const vendors = [
  'axios',
  'babel-polyfill',
  'classnames',
  'i18next',
  'i18next-browser-languagedetector',
  'i18next-json-sync',
  'i18next-xhr-backend',
  'marked',
  'perfect-scrollbar',
  'vue',
  'vue-i18next',
  'vue-markdown-loader',
  'vue-params',
  'vue-perfect-scrollbar',
  'vue-resource',
  'vue-router',
  'vuex'
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
