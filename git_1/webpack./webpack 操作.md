webpack 操作

1 npm i -g webpack

2 npm init -y 初始化

3 snpm i -D webpack webpack-cli

执行webpack npm run dev

会生成一个打包后的js文件

html应该调用这个js文件

使用

入口：

  不添加配置文件，默认以‘.src/index.js’为起点进行查找

  默认名  src

​        const path=require('path');

​        module.exports={

​            entry:'./src/demo.js',  //webpack的入口，

​            output:{

​                    // __dirname 文件所在的目录

​                    //打包后的目录

​                    path:path.resolve(__dirname,'dist'),

​                    filename:'mains.js'

​            }

​        }

**配置**

当修改配置文件默认名时，配置文件将不会被默认调用，

此时需要将文件加入到dev这个执行命令中 ‘--config 新的配置文件’

   	 `plugins:[//插件,里面是数组，所以用中括号`

​        `// new CleanPlugin({verbose:true})`

​        `new CleanPlugin()//最新版本的插件里面不需要传参，会默认发生变化之前dist文件下的文件`

​    ]



​     *new HtmlWebpackPlugin({*

​            *inject:'body',*

​            *filename:'indexDemo.html',*

​            *chunks:['text'],//插入text的打包文件*

​            *template:'src/index.html',//以这个文件目录下的js当作模板在dist下生成*

​        *}),//可以有多个*

​        *new HtmlWebpackPlugin({*

​            *inject:'head',*

​            *filename:'demoDemo.html',*

​            *chunks:['index'],//插入text的打包文件*

​            *template:'src/demo.html',//以这个文件目录下的js当作模板在dist下生成*

​        *})//可以有多个*





**服务和热更新**

1、webpack-dev-server

2、    config配置

devSer:{*

​      *contBase:'./dist',//服务器加载的目录*

​        *inline:true,//实时刷新*

​        *overlay:{*

​            *errors:true//编译有错时直接在网页显示*

​        *},*

​        *port:3000,//端口号*

​        *host:'localhost',*

//不配置的话，会有一个默认的8080d端口

​    *}*

3、json配置

​	热更新 ： “server”:"webpack-dev-server --mode development",源文件一改动就会变化

​    生成的打包文件都是只存在于内存当中的，

**Loaders-加载器**

  js编译，es编译

**babel-loader**

babel

​	snpm install --save-dev babel-loader babel-core babel-preset-env

config

  module:{

​        rules:[{

​            test:/\.js$/,  //默认语法，要修改的文件

​            use:[{

​                loader:'babel-loader',

​             } ],

​             exclude:/node_modules/

​        }]

​    }

根目录新建一个文件

.bablelrc{

  "presets": ["env"]

}



<https://www.cnblogs.com/soyxiaobi/p/9554565.html>

babel-loader@8.0.0这个版本和babel-core@6.26.3不兼容，需要重新instal 

**npm uninstall babel-loader*
npm install babel-loader@7.1.5* 

**css打包**

**style-loader****

snpm i -D style-loader css-loader

 格式

​    *module:{*

​        *rules:[*

​        *{*

​            *test:/\.css$/,  //默认语法，要修改的文件*

​            *use:['style-loader','css-loader'],*

​             *exclude:/node_modules/*

​        *}*

​    *]*

​    *}*

**css分离**

npm i --save extract-text-webpack-plugin@next

获取

const extractTextPlugin=require('extract-text-webpack-plugin')//将css从import到js文件分离出来然后以link的形式导入html，

plugin:

​           new extractTextPlugin('css/index.css')

重写module的cssloader

​	   test:/\.css$/,  //默认语法，要修改的文件

​            use:extractTextPlugin.extract({

​                fallback:'style-loader',

​                use:[{

​                    loader:'css-loader',

​                }]

​            }),

​             exclude:/node_modules/

**css前缀**

：解决不同浏览器的前缀问题

安装插件 npm i --save-dev postcss-loader autoprefixer

2、创建一个配置文件

postcss.config.js

​      ：module.exports={

​		    plugins:{

​		        'autoprefixer':{browsers:'last 5 version'}

​		        // 判断对哪些浏览器进行导包

​		    }

​		}

3、再次重写module

​	 {

​            test:/\.css$/,  //默认语法，要修改的文件

​            use:extractTextPlugin.extract({

​                fallback:'style-loader',//引入

​                use:[{

​                    loader:'css-loader',//添加

​                },{

​                    loader:'postcss-loader'

​                }]

​            }),

​             exclude:/node_modules/

​        }

**css中使用图片**

 	npm i --save-dev file-loader url-loader

module:

​		{

​        		    test:/\.(png|jpg|svg|gif)$/, //图片类型

​           		 use:[{

​              		  loader:'url-loader',

​              		  options:{

​                      		  limt:5*1024,//小于5kb的转化为base64编码

​                       	 name:'[name].[ext]',//图片名称.后缀名

​                       	 outputPath:'img/'//打包后的目录

​              	  }

​          	  }]

​       	}

**html直接使用img**

html-withimg-loader，

​			{

​           		         test: /\.html$/,

​          			  loader: 'html-withimg-loader'

​       	}

然后就可以在打包html中的img了

**热更新**

devServer

  里面加 hot:true 开启热更新 ，可以在开启server时，使页面动态的更改，自动刷新

同时：plugins:加入

  new webpack.HotModuleReplacementPlugin() //热更新插件,不能跟chunkhash一起使用

**less sass**

安装插件

npm i -D less less-loader

重写module

 {

​            test:/\.less$/,  //默认语法，要修改的文件

​            use:extractTextPlugin.extract({

​                fallback:'style-loader',//引入

​                use:[{

​                    loader:'css-loader',//添加

​                },{

​                    loader:'less-loader' //添加

​                },{

​                    loader:'postcss-loader'

​                }]

​            }),

​             exclude:/node_modules/

}

2、创建less文件

3、在js中 import less进去



**sass**

安装插件

npm i -D node-sass sass-loader

配置跟less一样

**静态资源打包**

复制功能（jquery那些插件直接打包）

插件,要在插件添加

npm install --save-dev copy-webpack-plugin



声明 const copyPlugin=require('copy-webpack-plugin')

2、

plugins:

​		 new copyPlugin([{

​          		  from:__dirname+'/src/public',

​           		 to:'public' //本来就在dist/目录下

​       	 }])







