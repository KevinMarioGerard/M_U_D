const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "popup.html"
});

module.exports = {
  entry: {
    popup: "./src/index.js",
    content: "./src/containers/content.js"
  },
  output: {
    path: path.resolve("./extension"),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img",
              name: '[name].[ext]'
            },
          }
        ]
      },
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    //new CleanWebpackPlugin(['./extension/*'])
  ]
};