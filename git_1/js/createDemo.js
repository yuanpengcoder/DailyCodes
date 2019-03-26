// 工厂模式
//为了解决  Object构造函数和字面量创建对象的弊端--使用统一接口创建对象时，会产生大量重复性代码
//用函数来封装以特定接口创建对象的细节。
function create(xx,xy) {
    var o=new Object();
    o.xx=xx;
    o.xy=xy;
    return o;
}
var p1=create('1','11');
var p2=create('2','22');