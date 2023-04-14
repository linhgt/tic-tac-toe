const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  /**
   * Entry is a property that indicates webpack which modules/files it should use to begin
   * Building the internal dependency graphs of the project/application
   * One entry point per HTML page
   * If a string or array of strings is passed, the chunk is named main.
   * If an object is passed, each key is the name of a chunk, and the value describes the entry point for the chunk.
   */
  entry: {
    //  __dirname specify the directory of the current executing files
    bundle: path.resolve(__dirname, "src/index.js")
  },
  module: {
    // An array of rules which are matched to requests when modules are created
    rules: [
      /**
       * babel-loader allows transpiling javascript files using Babel
       * babel-loader load ES2015+ and transpiles to ES5
       */
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },

      /**
       * css-loader collects css from all the css files referenced in the application
       * and output to a string
       * style-loader takes the string generated by css-loader and put it inside
       * <style> tags in the index.html
       */
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                // localIdentName allows to configure the generated local ident name
                // adding hash allows css classname to modulize, eg: container = container__asAz234
                localIdentName: "[local]__[hash:base64:5]"
              }
            }
          }
        ]
      },
      /**
       * sass-loader transforms sass to css
       * css-loader output to a string
       * style-loader injects css to html
       */
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module\.s(a|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]__[hash:base64:5]"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
              // Enables generation of source map
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
                localIdentName: "[local]__[hash:base64:5]"
              },
              sourceMap: true
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
      // url-loader transforms files into base64 URIs
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: ["url-loader"]
      }
    ]
  },

  /**
   * Output bundle location
   * Clean is set to true allows cleaning the output directory before emit
   */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true
  },

  /**
   * Config options for webpack-dev-server
   */
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "dist") // Tell the server where to serve the content from
    },
    compress: true, // Enables gzip compression
    historyApiFallback: true // Redirects for any 404 responses
  },

  /**
   * Resolving modules
   */
  resolve: {
    // Attempt to resolve these extensions in order
    // Enables users to leave off the extension when importing
    extensions: [".js", ".jsx", ".scss", ".css"],

    // Create aliases to import or require certain modules more easily
    alias: {
      "@": path.resolve(__dirname, "src")
      // "@components": path.resolve(__dirname, "src/components"),
      // "@assets": path.resolve(__dirname, "src/assets"),
      // "@containers": path.resolve(__dirname, "src/containers"),
      // "@router": path.resolve(__dirname, "src/router")
    }
  },
  devtool: "source-map",

  /**
   * An array of webpack plugins
   */
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: "tic-tac-toe",
      template: path.resolve(__dirname, "src/template.html")
    })
    // new MiniCssExtractPlugin ({
    //   filename: '[name]__[hash].css',
    //   chunkFilename: '[id]__[hash].css'
    // })
  ]
};
