<template>
  <div id="box" v-title data-title="Zara碎花裙-商品详情">
   <div id="leftBarBox">
    <leftBar></leftBar>
   </div>
   <div id="rightBarBox">
    <rightBar></rightBar>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import leftBar from './leftBar'
import rightBar from './rightBar'
export default {
  name: 'box',
  components:{
   leftBar,
   rightBar
  }
}
</script>

<style scoped>
@import '../assets/style/goods.css';

</style>
