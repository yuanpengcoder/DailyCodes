const express=require('express')
const app=express()
const path=require('path')
const url=require('url')
app.use(express.static("public"))
const appData=require('./public/data.json')
var most=appData.most;
var middle=appData.middle
const apiRoutes=express.Router();
const mostRoute=require('./routes/most')
// app.use(express.static(path.join(__dirname, 'public')))
app.get('/',function(req,res){
    var quer=url.parse(req.url,true).query;
    res.send(most)
    console.log(most)
    // res.send('good')
    // res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    // res.writeHead('Access-Control-Allow-Origin')
    // res.write('result:'+'成功')
    // res.end()
});

// app.use('/most',mostRoute)





app.listen('8080',function () {  })