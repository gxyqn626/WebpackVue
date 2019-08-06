var path = require('path')
var VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode:'none',
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                loader:'css-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}