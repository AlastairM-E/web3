const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// npm install --save-dev style-loader css-loader node-sass sass-loader html-loader file-loader
// npm install --save-dev  webpack webpack-cli webpack-merge webpack-dev-server
// npm install --save-dev mini-css-extract-plugin clean-webpack-plugin  html-webpack-plugin
// npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
// npm install react react-dom
// npm install --save-dev jest
module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/template.html' }),
    new CopyWebpackPlugin({ patterns: [{ from: './public/count.json', to: './count.json' }] }),
  ],
  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(svg|png|jpg|gif|pdf)$/,
        use: { loader: 'file-loader', options: { name: '[name].[hash].[ext]', outputPath: 'assets' } },
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
