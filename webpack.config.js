const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './assets/index.js',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Interview test',
      template: 'assets/template.html'
    })
  ],
};
