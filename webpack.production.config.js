var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,

                // There is not need to run the loader through
                // vendors
                // 这里再也不需通过任何第三方来加载
                exclude: [node_modules_dir],
                loader: 'babel'
            }, {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
            }, {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }, {
                test: /[\.woff|.woff2]$/,
                loader: 'url?limit=100000'
            },
            {test: /\.ttf$/,    loader: "file"},
            {test: /\.eot$/,    loader: "file"},
            {test: /\.svg$/,    loader: "file"}
        ]
    }
};

module.exports = config;