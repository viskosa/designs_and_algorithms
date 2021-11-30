const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
    publicPath: '/'
	},
  mode: "development",
	devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html",
        filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "build.[name].css"
    })
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader' }
            ]
        }
    ]
  }
};