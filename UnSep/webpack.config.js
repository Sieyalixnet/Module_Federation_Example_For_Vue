const { VueLoaderPlugin } = require("vue-loader");
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

var content = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
  </head>
  <body>
    <div id="app" />
  </body>
</html>
    `

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        open: true
    },
    //
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            { test: /\.ts$/, use: ["ts-loader"] },


        ]

    },
    plugins: [new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        templateContent: content
    })],


}

