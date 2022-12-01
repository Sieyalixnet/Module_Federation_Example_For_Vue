const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").devDependencies;

module.exports = {
    entry: './src/routes_user.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "http://localhost:8081/dist/",
    },
    devServer: {
        port: 8081,
        hot: true,
      },
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
    new ModuleFederationPlugin({
        name: "order",
        filename: "remoteEntry.js",
        exposes: {
            "./routes_user": "./src/routes_user",
        },
        shared: {
            "vue": {
                singleton: true,
                requiredVersion: deps["vue"],
            },
            "vue-router": {
                singleton: true,
                requiredVersion: deps["vue-router"],
            },
        }})
    ],


}

