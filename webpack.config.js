const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// let mode = 'development';
// let target = 'web';
// if(process.env.NODE_ENV ===  'production'){
//   mode = 'production';
// target = 'browserslist'
// }

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    'assets/js/vendor': './src/js/vendor.js',
    'assets/js/app': './src/js/app.js',
    'assets/css/style': './src/sass/style.scss',
  },
  output: {
    // path: path.resolve(__dirname, 'dist', 'assets'),
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundel.js',
    // assetModuleFilename: 'images/[hash][ext][query]'
    // publicPath: '/dist/assets/',
  },
  devServer: {
    compress: true,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  { useBuiltIns: 'usage', corejs: { version: 3 } },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'resolve-url-loader', // add this before sass-loader
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        include: [/fonts/],
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    }),
    new CleanPlugin.CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/media/images', to: './assets/images' }],
    }),
  ],
};
