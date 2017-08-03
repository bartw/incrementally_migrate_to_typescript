const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: { filename: "bundle.js", path: path.resolve(__dirname, "public") },
  resolve: { extensions: [".ts", ".tsx", ".jsx", ".js"] },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "awesome-typescript-loader"]
      }
    ]
  }
};
