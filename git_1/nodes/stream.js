var fs=require('fs')
var stream=fs.createReadStream('io.js')
stream.setEncoding('utf-8')
stream.on('data',(chunk)=>{
    console.log(chunk);
    // console.log(data)/

})
stream.on('end',(chunk)=>{
    console.log(chunk)
})