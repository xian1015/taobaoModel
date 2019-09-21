<template>
<div class="bigbox" v-title data-title="Zara官方旗舰店-淘宝搜索">
  <div class="smallbox" v-for="(item,index) in object " :key="index" @click="fun">
   
    <router-link :to="{path:'/goods'}">
      <img class="imge" :src="item.url">
      <div class="price">
      ¥{{item.price}}
      </div>
      <div class="text">{{item.text}}</div>
    </router-link>
  </div>
  
 
 
  <router-view> </router-view>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  
  data:function(){
      return {object:[]}
  },
  name: 'xinlang',
  mounted(){
    Vue.axios.get(`http://localhost:8888/index`).then((response) => {
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
.bigbox{
  width: 800px;
  height: 700px;
  margin: 40px auto;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap
}
.smallbox{
  width: 200px;
  height: 324px;
 
}
.imge{
  width: 100%;
  height: 220px;
}
.price{
  margin: 0 auto;
  width: 170px;
  font-size: 22px;
  color:red;
}
a{
  text-decoration: none;

}
.text{
  width: 170px;
  margin: 0 auto;
  color: black;
  font-size: 13px;
  
}

</style>