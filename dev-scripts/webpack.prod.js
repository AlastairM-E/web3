const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = webpackMerge(common, {
  mode: 'production',
  entry: { main: './dist/index.js' },
  output: { filename: '[name].[contentHash].bundle.js', path: path.resolve(__dirname, '../build') },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/template.html',
        minify: { removeAttributeQuotes: true, collapseWhitespace: true, removeComments: true },
      }),
    ],
  },

  module: {
    rules: [
      { test: /\.(css)$/, use: [MiniCSSExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime', 'babel-plugin-styled-components'],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [new MiniCSSExtractPlugin({ filename: '[name].[contentHash].css' }), new CleanWebpackPlugin()],
});
