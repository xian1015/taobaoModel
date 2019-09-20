<template>
  <div>
    <div id="leftBar">
      <img id="img" :src="pic1" />
    </div>
    <div id="item">
      <ul id="itemUl">
        <a href @mouseover="mouseOver">
          <li id="itemLi">
            <img id="img" :src="pic1" />
            <div id="itemImg">
              <img id="img" :src="pic1" />
            </div>
          </li>
        </a>

        <a href>
          <li id="itemLi">
            <img id="img" :src="pic2" />
            <div id="itemImg">
              <img id="img" :src="pic2" />
            </div>
          </li>
        </a>
        <a href>
          <li id="itemLi">
            <img id="img" :src="pic3" />
            <div id="itemImg">
              <img id="img" :src="pic3" />
            </div>
          </li>
          
        </a>
        <a href>
          <li id="itemLi">
            <img id="img" :src="pic4" />
            <div id="itemImg">
              <img id="img" :src="pic4" />
            </div>
          </li>
          
        </a>
        <a href>
          <li id="itemLi">
            <img id="img" :src="pic5" />
            <div id="itemImg">
              <img id="img" :src="pic5" />
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
export default {
  name: "leftBar",
  data() {
    return {
      pic1: require("../assets/img/left01.jpg"),
      pic2: require("../assets/img/left02.jpg"),
      pic3: require("../assets/img/left03.jpg"),
      pic4: require("../assets/img/left04.jpg"),
      pic5: require("../assets/img/left05.jpg")
    };
  },
  methods: {
    mouseOver() {
      this.active = "background-color:black";
      // 操作dom 获取p标签改变其样式
    }
  },
  components: {}
};
</script>

<style scoped>
@import '../assets/style/leftBar.css';

</style>