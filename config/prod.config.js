const merge = require('webpack-merge');
const base = require('./base.config');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    namedChunks: true,
  },
  plugins: [
    new UglifyjsPlugin(),
  ],
});