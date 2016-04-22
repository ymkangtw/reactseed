var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './main.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            //{test: /\.jsx?$/, loader: 'babel'}        // need .babelrc, {"presets" : ["es2015", "react"]},
            //{test: /\.jsx?$/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},     // valid for webpack, fail for webpack-dev-server
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']}},
            {test: /\.css$/, loader: 'style-loader!css-loader'}

        ]
    }
};
