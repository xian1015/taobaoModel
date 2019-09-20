<template>
  <div id="box">
   <div id="leftBarBox">
    <leftBar></leftBar>
   </div>
   <div id="rightBarBox">
    <rightBar></rightBar>
   </div>
  </div>
</template>

<script>
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
