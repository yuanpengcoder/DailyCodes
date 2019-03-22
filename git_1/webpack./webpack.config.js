const path = require('path');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin')//这个插件可以删除文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')//将css从import到js文件分离出来然后以link的形式导入html，
const copyPlugin=require('copy-webpack-plugin')
module.exports = {
    entry: {
        text: './src/text.js',//可以有多个入口
        index: './src/demo.js',   //webpack的入口，
    },
    output: {
        // __dirname 文件所在的目录
        //打包后的目录
        path: path.resolve(__dirname, 'dist'),
        //或者path:__dirname+'/dist'
        // filename:'mains.js'
        filename: '[name]-[hash].js'
        //当有多个入口文件时，调用[name]数组生成多个打包文件
        //hash值当你入口文件的文件当中有一个文件改变了，所有的入口ouput打包文件都会生出一个新的hash值文件
        //[chunkhash]的话，只有当入口文件内容改变了，才会更改hash值生成一个新的打包文件
    },
    plugins: [//插件,里面是数组，所以用中括号
        // new CleanPlugin({verbose:true})
        new CleanPlugin(),//最新版本的插件里面不需要传参，会默认发生变化之前dist文件下的文件
        // new htmlWebpack()//不传参的话，直接生成一个新的html,有最新hash的打包文件
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: 'indexDemo.html',
            chunks: ['text'],//插入text的打包文件
            template: 'src/index.html',//以这个文件目录下的js当作模板在dist下生成
        }),//可以有多个
        new HtmlWebpackPlugin({
            inject: 'head',
            filename: 'demoDemo.html',
            chunks: ['index'],//插入text的打包文件
            template: 'src/demo.html',//以这个文件目录下的js当作模板在dist下生成

        }),//可以有多个

        new extractTextPlugin('less.css'),
        new webpack.HotModuleReplacementPlugin(), //热更新插件,不能跟chunkhash一起使用
        new copyPlugin([{
            from:__dirname+'/src/public',
            to:'public'
        }])
        //    new webpack.BannerPlugin('今日代码')
    ],
    devServer: {//生成的文件都是在内存中，不会实际存在
        contentBase: './dist',//服务器加载的目录
        inline: true,//实时刷新
        overlay: {
            errors: true//编译有错时直接在网页显示
        },
        hot: true //热更新，随时更新，局部更新，不能跟chunkhash一起使用
        // port:3000,//端口号
        // host:'localhost',
        //不配置的话，会有一个默认的8080d端口
    },
    module: {
        rules: [{
            test: /\.js$/,  //默认语法，要修改的文件
            use: [{
                loader: 'babel-loader',
            }],
            exclude: /node_modules/
        },
        {
            test: /\.css$/,  //默认语法，要修改的文件
            use: extractTextPlugin.extract({
                fallback: 'style-loader',//引入
                use: [{
                    loader: 'css-loader',//添加
                }, {
                    loader: 'postcss-loader'
                }]
            }),
            exclude: /node_modules/
        }, {
            test: /\.less$/,  //默认语法，要修改的文件
            use: extractTextPlugin.extract({
                fallback: 'style-loader',//引入
                use: [{
                    loader: 'css-loader',//添加
                }, {
                    loader: 'less-loader' //添加
                }, {
                    loader: 'postcss-loader'
                }]
            }),
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|svg|gif)$/, //图片类型
            use: [{
                loader: 'url-loader',
                options: {
                    limt: 1*1024,//小于5kb的转化为base64编码
                    name: '[name].[ext]',//图片名称.后缀名
                    outputPath: 'img'//打包后的目录
                }
            }]
        }, {
            test: /\.html$/,
            loader: 'html-withimg-loader'

        }
        ]
    }


}