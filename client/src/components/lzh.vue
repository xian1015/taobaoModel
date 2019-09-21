<template>
  <div class="bigbox" v-title data-title="Zara官方旗舰店-淘宝搜索">
    <div class="smallbox" v-for="(item,index) in object " :key="index" @click="fun">
      <router-link :to="{path:'/goods'}">
        <img class="image" :src="item.url" />
        <div class="price">¥{{item.price}}</div>
        <div class="text">{{item.text}}</div>
        <div class="shops">Zara官方旗舰店</div>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  data: function() {
    return { object: [] };
  },
  name: "xinlang",
  mounted() {
    Vue.axios.get(`http://localhost:8888/index`).then(response => {
      this.object = response.data;
    });
  },
  methods: {
    fun: function() {
      this.$router.push();
    }
  }
};
</script>
<style scoped>
.bigbox {
  width: 1000px;
  height: 700px;
  margin: 40px auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.smallbox {
  margin-right: 20px;
  width: 220px;
  height: 324px;
  border: 0.1px solid lightgrey;
  padding: 1px;
}
.image {
  margin-bottom: 6px;
  width: 100%;
  height: 220px;
}
.price {
  margin: 0 auto;
  width: 180px;
  font-size: 18px;
  font-weight: 600;
  color: red;
}
a {
  text-decoration: none;
}
.text {
  width: 190px;
  margin: 0 auto;
  color: black;
  font-size: 12px;
}
.shops {
  width: 190px;
  margin: 0 auto;
  color: gray;
  font-size: 12px;
  padding-top: 6px;
}
</style>