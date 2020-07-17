const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
     app: './src/contact.js',
     print: './src/main.js',
    },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader',
            ],
        },
        ],
    },
};