const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const webpack = require("webpack")

module.exports = {
    context: path.resolve(__dirname, "../"),
    entry: {
        "app": "./src/entries/index.js"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/public/",
        filename: "[name].[chunkhash:6].[contenthash:6].js",
        chunkFilename: "[name].[chunkhash:6].[contenthash:6].chunk.js"
    },
    resolve:{
        alias:{
            "@": path.resolve(__dirname, "../src"),
            "@cssvar": path.resolve(__dirname, "../src/styles/variables.scss"),
        }
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader?cacheDirectory=true",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader" // 编译CSS到CommonJS
                }, {
                    loader: "postcss-loader" // 编译CSS
                }, {
                    loader: "sass-loader" // 编译SCSS到CSS
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "img/[name].[hash:7].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "fonts/[name].[hash:7].[ext]"
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            name: "index",
            filename: "index.html",
            template: "./index.template.html",
            inject: true,
            title: "bibi-scanner!"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:6].[contenthash:6].css",
            chunkFilename: "css/[id].[chunkhash:6].[contenthash:6].css"
        }),
    ]
}