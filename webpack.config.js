'use strict';

require('dotenv').config();
// Dynamic Script and Style Tags
const HTMLPlugin = require('html-webpack-plugin');

// Makes a separate CSS bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {EnvironmentPlugin, DefinePlugin} = require('webpack');

let production = process.env.NODE_ENV === 'production';

let plugins = [
  new HTMLPlugin({
    template: `${__dirname}/src/index.html`,
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "bundle.[hash].css",
    chunkFilename: "[id].css",
  }),
  new EnvironmentPlugin(['NODE_ENV']),
  new DefinePlugin({
    __AUTH_URL__: JSON.stringify(process.env.AUTH_URL),
    __API_URL__: JSON.stringify(process.env.API_URL),
    __DEBUG__: JSON.stringify(! production),
  }),
];

module.exports = {
  mode: 'development',

  plugins,

  // Load this and everythning it cares about
  entry: `${__dirname}/src/main.js`,

  devServer: {
    historyApiFallback:true,
  },

  devtool: 'source-map',

  // Stick it into the "path" folder with that file name
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  },

  module: {

    rules: [
      // If it's a .js file not in node_modules, use the babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader',
      },
      // If it's a .scss file
      {
        test: /\.scss$/,
        loader : 'style-loader!css-loader!sass-loader',
      },

    ],
  },

};
