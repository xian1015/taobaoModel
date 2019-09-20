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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/style/goods.css';

</style>
