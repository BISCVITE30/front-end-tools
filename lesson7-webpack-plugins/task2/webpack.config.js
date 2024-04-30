const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|git)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images',
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new miniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};