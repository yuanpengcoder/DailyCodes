const webpack=require("webpack")
const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//开发阶段没必要使用默认的生产模式，不把代码压缩混淆，可以先使用开发模式，节约编译时间
const isDev=process.env.NODE_ENV==="development"
//判读是生产模式还是开发模式
const extractTextWebpackPlugin=require('extract-text-webpack-plugin')
const config ={
    entry:{
        text: './src/index.js',//可以有多个入口
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    // resolve:{

    // }
    //extensions 省略打包文件的后缀名
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[
                    {
                         loader:'vue-loader'
                    }
                ],
                // options:{sourceMap:true}

               
                //安装vue vue-loader vue-template-compiler
                // 用loader处理vue文件
            },
            {
                test: /\.css$/,
                use:[
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  }
                ]
              },
           
        {
            test: /\.less$/,
            use:extractTextWebpackPlugin.extract({ 
                 fallback:'style-loader',
                  //设置成外部链接,需要fallback，以及extract提取两步
                use:[
                 
                    {
                        loader: 'css-loader'
                      },
                    {
                    loader: 'less-loader'
                  }
                ],
               
              })
                
            }
        
               


        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':isDev?JSON.stringify('development'):JSON.stringify("production")
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['text'],//插入text的打包文件
            template: 'src/index.html',//以这个文件目录下的js当作模板在dist下生成

        }),//可以有多个
        // new HotMoul
        new webpack.HotModuleReplacementPlugin(), //热更新插件,不能跟chunkhash一起使用
            new extractTextWebpackPlugin('less.css')
    ]
}
if(isDev){
    //开发模式
    config.devServer={
        //设置端口号
        port:8000,
        host:'0.0.0.0',
        //可以让其他网络也能访问你
        hot:true
        
        //热加载,动态更新的意思
        // historyApiFallback:true
        // 找不到就返回默认页面
    }
    //else的情况写一下,比如设置extract什么的
    //写一下postcss的编译
    //写一下hash值得创建模式
}
// else{
//     //生产模式时
// //    设置外链
// config.plugins.push(
//     new extractTextWebpackPlugin('less.css')

// )
//     config.module.rules.push(

//         {
//             test: /\.less$/,
//             use:extractTextWebpackPlugin.extract({
//                 use:[
//                     {
//                         loader: 'style-loader'
//                       },
//                     {
//                         loader: 'css-loader'
//                       },
//                   {
//                     loader: 'less-loader',
//                     // options:{
//                     //     extract:true,
//                     //     sourceMap:true
//                     // }
//                   }
//                 ],
               
//               })
                
//             })
               
    
// }

//     "dev": "cross-env NODE_ENV=development webpack",
// "build": "cross-env NODE_ENV=development webpack-dev-server"
module.exports=config//为了可以配置端口号之类的