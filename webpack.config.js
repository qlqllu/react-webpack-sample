var path = require('path');
var fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index': './index.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'app',
      template: 'index.html',
      filename: 'index.html',
      inject: true
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    }
  },
};
