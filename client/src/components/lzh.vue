<template>
<div class="bigbox">
  
  <div class="smallbox" v-for="(item,index) in object " :key="index" @click="fun">
    <a href="/goods">
      <img class="imge" :src="item.url">
      <div class="price">
      ¥{{item.price}}
      </div>
      <div class="text">{{item.text}}</div>
    </a>
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
  width: 180px;
  height: 324px;
 
}
.imge{
  width: 180px;
  height: 220px;
}
.price{
  font-size: 24px;
  color:red;
}

</style>