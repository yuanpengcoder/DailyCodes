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
        const path=require('path');
        module.exports={
            entry:'./src/demo.js',  //webpack的入口，
            output:{
                    // __dirname 文件所在的目录
                    //打包后的目录
                    path:path.resolve(__dirname,'dist'),
                    filename:'mains.js'
            }

        }
当修改配置文件默认名时，配置文件将不会被默认调用，
此时需要将文件加入到dev这个执行命令中 ‘--config 新的配置文件’