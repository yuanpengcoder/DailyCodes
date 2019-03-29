import Vue from'vue'
import css from './less.less'
import App from'./App.vue'
new Vue({
    "el":'div',
    components:{
        App
        // 局部注册
    },
    render:h=>h(App)

})
