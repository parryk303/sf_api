const path = require("path");
const nodeExternals = require("webpack-node-externals");
const packageJSON = require("./package.json");
const alias = packageJSON["@alias"];
const additionalAliases = Object.keys(alias).reduce((acc, key) => {
  acc[key] = path.resolve(alias[key]);
  return acc;
}, {});

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  devtool: "source-map",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      ...additionalAliases,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
