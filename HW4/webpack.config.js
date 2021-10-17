const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true
  },
  entry: "./src/js/index.ts",
  output: {
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({ //Builds an html file using the provide template and it insert the correct script tags
        template: "./src/template.html", //src file for the html page
        filename: "./index.html" // dist html filename 
    }),
  ],
  module: {
      rules: [
          {
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
              test: /\.ts$/,
              loader: 'ts-loader' // convert ts files to one js file
          }
      ]
  }
};