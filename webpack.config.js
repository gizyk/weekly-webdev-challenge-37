var webpack = require('webpack'),
    path = require('path');
 
var srcPath  = path.join(__dirname, '/work/js'),
    distPath = path.join(__dirname, '/dist/js');
 
module.exports = {
    cache: true,
    devtool: '#cheap-module-eval-source-map',
    context: srcPath,
    entry: {
        main: './main.js',
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
    },
    resolve: {
        modules: ["node_modules"]
    },
};