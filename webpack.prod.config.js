const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:8].js',
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
        test: /\.(c|sa|sc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  'postcss-preset-env',
                  // 'postcss-deadcss',
                  'at-rule-packer',
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpe?g|webp)$/,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name]-[hash][ext]',
        },
        use: [{
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.9],
              speed: 4,
            },
            webp: {
              quality: 90,
            },
          },
        }],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash][ext]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[name]-[hash:5][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
};