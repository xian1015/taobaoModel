<template>
  <div>
    <div id="leftBar">
      <img id="img" :src="pic1" />
    </div>
    <div id="item">
      <ul id="itemUl">
        <a href  v-for="(item,index) in object " :key="index" @click="fun">
          <li id="itemLi">
            <img id="img"  :src="item.url" />
            <div id="itemImg">
              <img id="img" :src="item.url"  />
            </div>
          </li>
        </a>
      </ul>
    </div>
    <div id="describe">
      <span id="shoucang">★收藏商品（6281人气）</span>
      <span id="jubao">举报</span>
    </div>
  </div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  
  data:function(){
      return {object:[],
        pic1: require("../assets/img/left01.jpg"),}
  },
  name: 'xinlang',
  mounted(){
    Vue.axios.get(`http://localhost:8888/goods`).then((response) => {
        this.object=response.data
        console.log(response.data)
    
})
  },
  props: {
    
  },
  
  methods:{
    fun:function(){
      this.$router.push()
    }
    
  }
}
</script>

<style scoped>
@import '../assets/style/leftBar.css';

</style>