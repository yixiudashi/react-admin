// var path = require('path');
// var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

// config = {
//     entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
//     resolve: {
//         alias: {
//           'react': pathToReact
//         }
//     },
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js',
//     },
//     module: {
//         loaders: [{
//             test: /\.jsx?$/,
//             loader: 'babel'
//         }],
//         noParse: [pathToReact]
//     }
// };

// module.exports = config;

// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//     devtool: 'source-map',
//     entry: [{
//         test1:'./app/test1.js',
//         test2:'./app/test2.js'
//     }],
//     output: {
//         // path: path.join(__dirname, 'public'),
//         filename:  "[name].entry.chunk.js",
//         // publicPath: '/public/'
//     },
//     plugins: [
//         new webpack.optimize.DedupePlugin(),
//         new webpack.optimize.UglifyJsPlugin({
//             minimize: true,
//             compress: {
//                 warnings: false
//             }
//         })
//     ],
//     resolve: {
//         extensions: ['', '.js', '.jsx']
//     },
//     module: {
//         loaders: [
//             // { test: /\.jsx$/,
//             //   loader: 'babel',
//             //   include: path.join(__dirname, 'src') },
//             // { test: /\.js$/,
//             //   loader: 'babel',
//             //   exclude: /node_modules/ },
//             // { test: /\.scss?$/,
//             //   loader: 'style!css!sass',
//             //   include: path.join(__dirname, 'css') },
//             {
//                 test: /\.jsx?$/,
//                 loader: 'babel'
//             }
//         ]
//     }
// }
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// module.exports = {
//     devtool: 'source-map',
//     entry: {
//         test1: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/test1.js')],
//         test2: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/test2.js')],
//     },
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: "[name].entry.chunk.js"
//     },
//     // plugins: [
//     //     new CommonsChunkPlugin("commons.chunk.js")
//     // ],
//     module: {
//         loaders: [
//             // { test: /\.jsx$/,
//             //   loader: 'babel',
//             //   include: path.join(__dirname, 'src') },
//             // { test: /\.js$/,
//             //   loader: 'babel',
//             //   exclude: /node_modules/ },
//             // { test: /\.scss?$/,
//             //   loader: 'style!css!sass',
//             //   include: path.join(__dirname, 'css') },
//             {
//                 test: /\.jsx?$/,
//                 loader: 'babel'
//             }
//         ]
//     }
// }

var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    // resolve: {
    //     alias: {
    //         'react': pathToReact
    //     }
    // },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel'
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }, {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
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
        ],
        // noParse: [pathToReact]
    }
};

module.exports = config;