// var start=Date.now();
// console.log("s1:"+start)
// setTimeout(()=>{
//     console.log("s2:"+Date.now())
//     console.log(Date.now()-start)
//     // for(var i=0;i<)
// },1000)
// setTimeout(()=>{
//     console.log(Date.now()-start)
//     // for(var i=0;i<)
// },2000)
// //可知js中执行回调函数会消耗时间，所以这样会成为一个耗时的方式，影响http的请求效率

console.log(1);
// setTimeout(()=>{
//         console.log("下一次事件分发")
//     },100)
process.nextTick(()=>{
    console.log("下一次事件循环")
})
// setTimeout(()=>{
//     console.log("下一次事件分发")
// },100)//异步函数的顺序仍然再下一次事件循环之前
console.log(2);