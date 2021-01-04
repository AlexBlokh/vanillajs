const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

// require('@babel/register');

const buildPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    app: "./src/index.js",
    subpath: "./src/subpath/index.js",
  },
  output: {
    path: buildPath,
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: 5000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      output: buildPath,
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      chunks: ["app"],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "subpath/index.html",
      chunks: ["subpath"],
      hash: true,
    }),
    // new BundleAnalyzerPlugin()
  ],
};
