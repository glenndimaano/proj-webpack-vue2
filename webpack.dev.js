const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/assets/',
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin({})],
})
