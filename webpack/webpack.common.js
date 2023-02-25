const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: {
        index: { import: "./src/index.js", dependOn: "shared" },
        second: { import: "./src/second.js", dependOn: "shared" },
        shared: "lodash"
    },

    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].bundle.js",
        publicPath: "/"
    },

    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Irga City",
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin()
    ],

    resolve: {
        extensions: [".js", ".jsx"],
    },

    module: {

        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    "sass-loader"
                ],
                include: /\.module\.(css)$/,
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /\.module\.(css)$/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }
        ]
    },
};