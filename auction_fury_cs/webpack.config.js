var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/js/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      }),
      new ExtractTextPlugin("styles.css")
    ],
    module:{
        loaders:[
            {
               test: /\.css$/,
               loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test:/\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000'
            }
        ]
    }
};
