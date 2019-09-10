const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // move bundle to dist/bundle.js
    },
    module: {
        rules: [
            {
                test: /\.scss$/,           // For *.scss files....
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader'   // transates CSS into CommonJS
                }, {
                    loader: 'sass-loader'  // compiles Sass to CSS
                }]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // For Font Awesome 
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        //publicPath: '../'       // override the default path
                    }
                }]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",        // Map jQuery to $
            jQuery: "jquery"    // Add jQuery
        })
    ]
};