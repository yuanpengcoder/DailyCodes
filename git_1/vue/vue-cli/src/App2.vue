<template>
  <div id="app" v-swipeleft='swipeleft'>
    
     <h1 v-swipeleft='swipeleft'>1111</h1>
  </div>
  
</template>
<script>
import Vue from 'vue'
import Hammer from'hammerjs'
Vue.directive('swipeleft',{
    bind(el,binding,vnode){
        const hammer=new Hammer(el)
        hammer.on('swipeleft',binding.value)
    }
})


export default {
  name: 'App',
    
  methods:{

    swipeleft(){
      console.log("hammer")
    },

  },
  
}
</script>
<style scoped>


#app {
 width: 100px;
 height: 100%;
 border: 1px solid;
}
</style>
