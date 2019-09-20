<template>
<div id="box">
    <div>列表界面</div>
</div>
    
</template>
<script>

export default {
    name:'newworld',
    methods: {
        href(){
          this.$router.push('./some')
        }
    }
}
</script>
<style scoped>

    .box{
        width: 300px;
        height: 300px;
        background-color: green;
        font-size:30px;
        color: white;
        text-align: center;
        line-height: 300px
    }
</style>