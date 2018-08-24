const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { initBackendStub } = require('./server/backend-stub');


const PUBLIC_PATH = path.join(__dirname, 'public');

const cssExtractTextPlugin = new ExtractTextPlugin({ filename: 'style.css' });

module.exports = {
  mode: 'development',
  entry: `${PUBLIC_PATH}/app/index.js`,
  output: {
    path: `${PUBLIC_PATH}/dist`,
    filename: 'index.js',
    publicPath: PUBLIC_PATH,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.xml$/,
        use: {
          loader: 'fest-webpack-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(cssExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })),
      },
    ],
  },
  plugins: [
    cssExtractTextPlugin,
    new CleanWebpackPlugin([`${PUBLIC_PATH}/dist`]),
  ],
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    watchContentBase: true,
    port: 9000,
    before: initBackendStub,
  },
};
