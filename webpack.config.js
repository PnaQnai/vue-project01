const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin.js');

module.exports = {
    plugins:[
        new htmlWebpackPlugin({  //创建一个在内存中生成HTML页面的插件
            template:path.join(__dirname,'./src/index.html'),  //指定模板页面将来会根据指定的页面路径，去生成内存中的页面
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|jpeg|gif|webp|bmp)/,use:'url-loader?limit=23634&name=[hash:8]-[name].[ext]'},
            //加载字体
            {test:/\.(woff|ttf|woff2|svg)$/,use:'url-loader'},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    // resolve:{
    //     alias:{
    //         "vue$":"_vue@2.6.6@vue/dist/vue.js"
    //     }
    // }
}