var obj=new Object();
Object.defineProperties(obj,{
    ​				_name:{
                        value:2001,
                        configurable: true,
                        writable: true,
                        enumerable: true
                    },
                    edi:{
                        value:1,
                        configurable: true,
                        writable: true,
                        enumerable: true
                    },

                    xx:{
                    get:function () {
                        return this._xx;
                      },
                      set: function (newsd) {
                            this._xx=newsd
                        },
                  }
    ​			});
obj.name=10;
    console.log(obj.name);    

console.log(obj.edi);    
var descriptor=Object.getOwnPropertyDescriptor(obj,"_name");
console.log(descriptor.value);
console.log(descriptor.configurable);