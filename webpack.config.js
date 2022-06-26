const path = require("path");
const MiniCssExyractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");



module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: {
      index: "./src/index.js"
    },
    devtool: "inline-source-map",
    stats: {
      warnings: false
    },
    devServer: {
      static: "./dist",
      hot: true,
      port: 8080,
      open: true
    },
    output: {
      filename: "[name].bundle.js",
      // eslint-disable-next-line no-undef
      path: path.resolve(__dirname, "dist"),
      clean: true
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    module: {
      rules: [
        {
          test: /\.s[a|c]ss$/i,
          use: [MiniCssExyractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource"
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        }
      ]
    },
    plugins: [
      new ESLintPlugin(),
      new HtmlWebpackPlugin({
        title: "Output management",
        cache: false,
        template: "index.html"
      }),
      new MiniCssExyractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };
};