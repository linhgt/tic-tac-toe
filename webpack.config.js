const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js")},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options : { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", 
          {
            loader: "css-loader",
            options:{
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module\.s(a|c)ss$/,
        use: [
          "style-loader", 
          {
            loader: "css-loader",
            options:{
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          }, 
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          "style-loader", 
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              },
              sourceMap: true,
            }
          }, 
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: ["url-loader"]
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    compress: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      // "@": path.resolve(__dirname, "src/*"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@router": path.resolve(__dirname, "src/router")
    },
  },
  devtool: "source-map", 
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: 'tic-tac-toe',
      template: path.resolve(__dirname, 'src/template.html')
    }),
    // new MiniCssExtractPlugin ({
    //   filename: '[name]__[hash].css',
    //   chunkFilename: '[id]__[hash].css'
    // })
  ]
};
