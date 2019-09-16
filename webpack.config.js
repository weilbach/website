const path = require('path');

module.exports = {
    entry: './src/js/main.jsx',
    output: {
        path: path.join(__dirname, '/src/static/js/'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};