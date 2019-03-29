vue组件

```
vue不能检测对象属性的添加与删
```

所有写在HTML里面的组件名称，大写都会转换成小写并在T驼峰的的位置加上短横线-

vue局部注册，

var ComponentA={

​	name:' ComponentAcustom'

​	template:'<div>test<ComponentAcustom></ComponentAcustom> </div>' 可以实现一个递归效果

}

  new Vue({	

​	name:'#app'

//name声明了可以在vue调式工具中看到 

​	components:{

​		myc:ComponentA

​	}

})

# 打包会出错，Module build failed: ValidationError: CSS Loader Invalid Options



  css-loader版本降为0.28.7


  





<https://blog.csdn.net/qq_34672907/article/details/80137609>