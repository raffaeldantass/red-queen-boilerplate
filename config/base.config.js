const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
      },
      {
        test: /\js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: { emitWarning: true, }
        },
      },
      {
        test: /\.html$/,
        use: {
            loader: 'html-loader',
            options: { minimize: true, }
        },
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: null }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  }
}