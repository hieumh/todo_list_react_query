const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const Dotenv = require("dotenv-webpack")
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "static/js/main.[contenthash:6].js",
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false
    }
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:3001"
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new Dotenv({
      path: "./.env.development"
    })
  ],
  resolve: {
    extensions: [".ts", ".js", ".json", ".tsx", ".jsx"]
  }
}
