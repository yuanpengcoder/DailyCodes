<template>
  <div id="app">
    
      <v-touch ref="swiperimg" class="swiper-container" v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight"  >
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="allimg in allimgs" :key='allimg.id'>
              <img width="300px" height="400px" v-imgurl='allimg'/>
            </div>
          </div>
           <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>

      </v-touch>
  <div>
      <p v-collors>color</p>
      <p v-collors>color</p>
      <p v-collors>color</p>
      <p v-collors>color</p>
  </div>
  </div>
  
</template>
<script>
import Vue from 'vue'
import VueTouch from 'vue-touch'
import Swiper from'swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueTouch, {name: 'v-touch'})
Vue.directive('imgurl',{
  bind:function(el,binding,vnode){
        console.log('img:'),
    el.src=binding.value.urls

  }
})
Vue.directive('collors', {
   bind: function(el, binding, vnode){ 
    el.style.color='red'
    // el.style.color='#'+Math.floor(Math.pow(10,6)*Math.random),
      // console.log('#'+Math.floor(Math.pow(10,6)*Math.random))
    }
})
export default {
  name: 'App',
  data:function(){
      return{
          allimgs:[
            {
              id:1,
             urls:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553937337402&di=4d31e13957e17f64666bc8f78a184dd2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01edb3555ea8100000009af0ba36f5.jpg%401280w_1l_2o_100sh.jpg'   
            
            },
                     {
              id:2,
              urls:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553937337401&di=74e59376c44e6c46c7425a3048d3c73d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b61155cefcf86ac725baa0374039.jpg'
            },
            {
              id:3,
              urls:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553937337400&di=2db30a8ea824122ba122963ee3b6d846&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01a39258eddb07a8012049ef53b617.jpg%401280w_1l_2o_100sh.jpg'
            }
          ]
      }
    
  },
  methods:{
    onSwipeLeft(){
      console.log("swiper")
      // this.$ref.swiperimg
    },
    onSwipeRight(){

    }
  },
  mounted(){
     new Swiper ('.swiper-container', {
    autoplay: 3000,
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
  })        
  }
}
</script>
<style scoped>
.swiper-container {
         width: 500px;
          height: 300px;
         margin: 20px auto;
     }

#app {
 
}
</style>
