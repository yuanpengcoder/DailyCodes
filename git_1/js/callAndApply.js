sum=(num1,num2)=>{
    return num1+num2;
}
//apply(this(设置的作用域),[](一个数组或者arguments))就是在特定作用域中调用函数,给函数设置作用域还有函数的参数
//call(this(设置的作用域),变量一，变量二(变量必须一个个传进去))就是在特定作用域中调用函数,给函数设置作用域还有函数的参数

sumApply=(num1,num2)=>{
    return sum.apply(this,arguments);//
    
}
sumCall=(num1,num2)=>{
    return sum.call(this,arguments);//
    
}

sumApply(1,2);
sumCall(2,1);
//bind(),会创建一个函数的实例,this的值会被绑定到传给bind()函数的值。.
var color="red";
var o={color:"blue"};
// bindC=()=>{
//     console.log(this.color) ;
// }
function bindC() {
    console.log(this.color);
}
var p=bindC.bind(o);
// console.log(p);
p();