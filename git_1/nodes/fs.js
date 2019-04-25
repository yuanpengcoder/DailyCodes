var fs=require('fs')
// fs.readdir(__dirname,(err,files)=>{//__dirname代表的是执行的js文件的地址
//     console.log(files)
//     console.log(__dirname)
// })
// fs.readdir(process.cwd(),(err,files)=>{//process.cwd()代表的是node命令时文件夹的地址
    // console.log(files)
    // console.log(process.cwd())
// })
var stdin=process.stdin
var stdout=process.stdout
fs.readdir(__dirname,(err,files)=>{//__dirname代表的是执行的js文件的地址
    if(!files.length){
        return console.log('no directory')
    }
    console.log("select your want to see \n");
    function file(i){  
        var filename=files[i]
        fs.stat(__dirname+'/'+filename,(err,stats)=>{//读取文件状态（文件路径，（err,stats）
            if(stats.isDirectory()){
                console.log('目录：'+i+" "+filename);
            }
            else{
                console.log('文件'+i+" "+filename)
            } 
            i++;
            if(i==files.length){
                process.stdout.write('enter your choice')
                process.stdin.resume()
                process.stdin.setEncoding('utf8')
                stdin.on('data',option)//监听stdin事件
            }
            else{
                file(i)
            }
            })
            function option(data) {
                console.log(data)
                if(!files[Number(data)]){
                    stdout.write('重新选择')
                }
                else{
                    stdin.pause();
                    fs.readFile(__dirname+'/'+files[Number(data)],'utf-8',(err,data)=>{
                        // console.log()
                        console.log(data)
                    })
                }
              }
    }

    file(0)
})
