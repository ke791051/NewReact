const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const WebpackConfig = require('webpack-config')
const config = require('../config')

module.exports = new WebpackConfig.Config().merge({
  devtool: true,
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: config.assetBuildPath,
    publicPath: '',
    filename: '[name].js?[hash:7]'
  },
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ]
      },
      {
        test: /\.(c|s[ac])ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /img\/.*\.(png|jpg|jpeg|gif|svg)(\?[a-z0-9-]+)?$/,
        loader: 'file-loader?name=[path][name]-[hash:7].[ext]'
      },
      {
        test: /font\/.*\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-]+)?$/,
        loader: 'file-loader?name=[path][name]-[hash:7].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new ExtractTextPlugin({ filename: '[name].css?[hash:7]', allChunks: true }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..', 'dll'),
      manifest: require('../dll/vendor.manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: require.resolve('../dll/vendor.js'),
      includeSourcemap: false,
      hash: true
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src', 'js')
    ],
    alias: {
      root: path.resolve('./src/js')
    }
  },
  node: {
    fs: 'empty'
  }
})

