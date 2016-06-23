var path = require('path');
var entryPath = './src/js/entries/';
module.exports = {
    entry: {
        index: entryPath + 'index'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'www/js'),
    },
    devtool: 'source-map'
};
