const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = (environment) => {
  const env = process.env.NODE_ENV.trim();
  console.log("!!! Environment is " + env + " !!!");

  return {
    entry: ["./src/app.js"],
    mode: env,
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "[name].[contenthash].js",
      chunkFilename: "[name].[contenthash].js",
      publicPath: "/dist/",
    },
    optimization: {
      emitOnErrors: false,
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    plugins: [
      ...(env !== "production" ? [new HtmlWebpackHarddiskPlugin()] : []),
      new HtmlWebpackPlugin({
        filename: "../index.html",
        template: "template.html",
        alwaysWriteToDisk: true,
      }),
      new MiniCssExtractPlugin({
        filename:
          env === "production"
            ? "dist/styles.[contenthash].css"
            : "dist/styles.css",
      }),
      new Dotenv(),
      // new WorkboxWebpackPlugin.GenerateSW({
      //   swDest: "./sw.js",
      //   exclude: [/\.html$/],
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: [
            env === "production" ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: { sourceMap: env === "development" },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: env === "development" },
            },
            "postcss-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js", ".json", ".tsx"],
    },
    devtool: env === "production" ? "source-map" : "inline-source-map",
    devServer: {
      allowedHosts: ["all"],
      static: path.join(__dirname, "/public"),
      historyApiFallback: true,
      devMiddleware: {
        publicPath: "/dist/",
      },
      host: "0.0.0.0",
      port: 8080,
      client: {
        webSocketURL: "auto://0.0.0.0:0/ws", // note the `:0` after `0.0.0.0`
      },
    },
  };
};
