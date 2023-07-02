const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    // filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        type: 'asset/resource',
        // generator: {
        //     filename: 'images/[name]-[hash][ext]',
        // },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        // generator: {
        //     filename: 'fonts/[name]-[hash][ext]',
        // },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        // generator: {
        //     filename: 'icons/[name]-[hash:5][ext]',
        // },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
    }),
  ],

  devServer: {
    compress: false,
    open: true,
    port: 3000,
    hot: true,
  }
};