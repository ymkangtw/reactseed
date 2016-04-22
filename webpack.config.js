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
            //{test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']}}
            {test: /\.jsx?$/, loader: 'babel'}
            //{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};
