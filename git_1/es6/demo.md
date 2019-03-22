http-server插件（本地服务器）

安装snpm  npm install --global smart-npm --registry=https://registry.npm.taobao.org/


安装http-server snpm i -i http-server

然后在引入当前目录下，输入http-server 
显示出当前目录的ip地址

检查浏览器的es支持
因为浏览器支持还不完善，用babel

babel
把es6转成es5 
官网 babeljs.cn
1、新建项目，es6 
   初始化 npm init 
 2、 安装babel  snpm i --save-dev babel-cli babel-preset-env
(
    npm install moduleName # 安装模块到项目目录下
 
    npm install -g moduleName # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
 
    npm install -save moduleName # -save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
 
    npm install -save-dev moduleName # -save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖
)
3、创建一个.babelrc文件 配置env文件->{
    "presets":["env"]
}
4、因为babel在node_modules文件下，所以不能直接引用babel，需要在json里面配置一个build去调用babel
    build:  (1)babel src -d dist  (全部文件编译到另一个文件)
            (2)babel src/demo.js -o(out) dist/demo.js(单个编译输出到另一个文件当中)  
            (3) babel src/demo.js -w -o dist/demo.js(w必须在o起到一个监听的作用，然后及时的修改demo编译后的值)
            (4)babel src/demo.js -w -s -o dist/demo.js(s是为了追踪到源文件而不是编译后的文件)