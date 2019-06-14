const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        ...base.entry ,
        index: './example.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/doc'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Roue',
            template: 'example.html'
        })
    ],
})