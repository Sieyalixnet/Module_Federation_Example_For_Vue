const { VueLoaderPlugin } = require("vue-loader");
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

//这个声明无论是var还是let都不能载exports之后，否则会出错
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
//可以看到它里面没有main.js

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    //webpack-dev-server只要加这个
    devServer: {
        hot: true,//使用热更新能力，接受 bool 值。
        open: true//自动打开页面，接受 bool 值。
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
        //HTML plugin加在这里，文本在上方
    new HtmlWebpackPlugin({
        templateContent: content
    })],


}

