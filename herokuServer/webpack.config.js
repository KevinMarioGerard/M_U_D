const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("./webapp/reactApp"),
    filename: "static/js/bundledReact.js"
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
              outputPath: "static/img",
              name: '[name].[ext]'
            },
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};