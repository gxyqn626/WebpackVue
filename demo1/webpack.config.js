const path = require('path');
const webpack = require('webpack') //内置的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './js/entry.js',
    output: {
        // path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // { test: /\.css$/, 
            //   loader: 'style-loader!css-loader' },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            }
        ]
    },
    plugins: [
        //   new HtmlWebpackPlugin({
        //     title: 'hello webpack',
        //     template:'index1.html',　　//为新生成的index.html指定模版
        //     minify:{ //压缩HTML文件
        //         removeComments:true,    //移除HTML中的注释
        //         collapseWhitespace:true    //删除空白符与换行符
        //     }
        //   }),
        new VueLoaderPlugin()
    ],

};