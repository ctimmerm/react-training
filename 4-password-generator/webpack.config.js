const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: { extensions: [".js", ".jsx"] },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    overlay: {
      warnings: true,
      errors: true
    },
    hot: true,
    port: 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: ["babel-loader"]
      }
    ]
  }
};
