"use strict";

const webpack = require('webpack');
const path = require('path');
module.exports = {
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false&reload=true',
    './app-client.js',
  ],
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { 
          test: path.join(__dirname, 'src'),
          loader: ['babel-loader'],
          query: {
            cacheDirectory: 'babel_cache',
            presets: ['react', 'es2015']
          }
        },
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};
