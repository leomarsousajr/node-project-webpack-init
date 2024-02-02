const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', // or development
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'main-teste.js',
        // library: {
        //     name: 'plugin',
        //     type: 'var'
        // }
    },
    resolve: {
        extensions: ['.js','.ts','.tsx'],
    },
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        index: 'index.html',
        porta: 9000,
        hot: true
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html'
        })
    ]

}