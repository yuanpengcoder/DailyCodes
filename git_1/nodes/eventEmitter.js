var  eventEmitter=require('events').EventEmitter
var a=new eventEmitter
a.on('hello',()=>{
    console.log('监听中')
})
a.once('only',()=>
{
    console.log('一次监听')
})
a.emit('hello')
a.emit('hello')
a.emit('only')
a.emit('only')
