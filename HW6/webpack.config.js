const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
    publicPath: '/'
  },
  mode: "development",
	// devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({ //Builds an html file using the provide template and it insert the correct script tags
        template: "src/template.html", //src file for the html page
        filename: "./index.html" // dist html filename 
    }),
    new MiniCssExtractPlugin({
      filename: "build.[name].css"
    })
  ],
  module: {
      rules: [
          {
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
              test: /\.ts$/,
              exclude: [ /node_modules/ ],
              loader: 'ts-loader' // convert ts files to one js file
          },
          {
            test: /\.styl$/,
            use: [
               {
                 loader: MiniCssExtractPlugin.loader
               },
               {
                 loader: 'css-loader',
                 options: {
                   sourceMap: false
                 }
               },
               {
                   loader: 'postcss-loader',
                   options: {
                    postcssOptions: {
                      plugins: (loader) => [
                        require('postcss-preset-env')(),
                        require('cssnano')()
                      ]
                    }
                   }
               },
               'stylus-loader'
           ]
         },
      ]
  }
};
