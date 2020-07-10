const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: buildPath,
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 5000,
    watchContentBase: true,
  },
  plugins: [
    new CleanWebpackPlugin({
      output: buildPath,
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "src/subpath/index.html",
      inject: true,
      hash: true,
      chunks: ["index"],
      filename: "subpath.html",
    }),
  ],
};
