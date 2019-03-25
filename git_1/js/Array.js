var num=[1,2,3,4,5];
// 迭代方法(函数(数组项的值,该项在数组中的位置,数组对象本身),(可选)运行在该函数的作用域对象)
//every，数组内部所有项都满足every的函数时才返回true
var everyDemo=num.every(function(item,index,array){
    return (item>2);//满足这个条件才返回true,所有数组中的项
});
console.log(everyDemo);
//some() ,数组内部有一项都满足every的函数时就返回true
var someDemo=num.some(function(item,index,array){
    return (item>2);//满足这个条件才返回true,所有数组中的项
});
console.log(someDemo);
//filter   过滤，会将所有满足true条件的项都返回，
var filterDemo=num.filter(function (item,index,array) {
    return (item>2);
})
console.log(filterDemo);
//map 对应每一项给定一个函数，让运行之后的值得所有项保存一起
var mapDemo=num.map(function (item,index,array) {
    return (item*2);
  })
  console.log(mapDemo);
  //foreach 没有返回值，只是给让每一项都运行一个函数
  var eachDemo=num.forEach(function (item,index,array) {
      console.log(item);
    })
//归并函数
//归并函数(函数(前一个值,当前项,值得索引,数组对象)),这函数返回的任一个值都会作为第一个参数传给下一个
var reduceDemo=[1,2,3,4,5];
//reduce()是从前往后传，
var rd=reduceDemo.reduce(function (prev,cur,index,array) {
    return (prev+cur)
  });
  console.log(rd);
//reduceRight()是从后往前传
var rdr=reduceDemo.reduceRight(function (prev,cur,index,array) {
    return (prev+cur)
  });
  console.log(rdr);

  //Date
  //不传参数得情况下自动获取当前日期
  var now=new Date();
  console.log(now);
  //如果创建特定得日期对象和时间，用Date.parse()和Date.UTC()
//Date.parse()就相当于直接再在初始化Date()对象时直接传参是一样的
  var pd=new Date("May 28,2004");
  var upd=new Date(Date.parse("May 28,2004"));
  console.log(pd);
  console.log(upd);
//日期溢出时，即日期时40之类的时候，浏览器会自动获取当前日期
//Date.UTC(年份,月份(0,代表1月此时),日,时(计时方式时0-23),分,秒)
//前两个参数时必选项,其他都有默认值
 var utc=new Date(Date.UTC(2005,0));
 console.log(utc); 
