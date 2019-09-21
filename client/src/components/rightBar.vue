<template>
  <div id="rightNavBox">
    <div class="r_title">
      <p class="r_titleIfor">ZARA新款 女装 印花迷你连衣裙 07901227620</p>
    </div>
    <div class="r_price">
      <div class="r_priceTitle">价格</div>
      <div class="r_priceBox">
        ￥
        <span class="r_priceNum">259.00</span>
      </div>
    </div>
    <div class="r_area">
      <div class="r_areaTitle">运费</div>
      <div class="r_areaBox">
        <select>
          <option>北京</option>
          <option>四川</option>
          <option>上海</option>
        </select>
      </div>
    </div>
    <div class="r_infor">
      <div class="r_inforComment">
        <span class="r_inforComment_infor">累计评价</span>
        <span class="r_inforComment_num">165</span>
      </div>
      <div class="r_inforScore">
        <span class="r_inforScore_infor">送天猫积分</span>
        <span class="r_inforScore_num">129</span>
      </div>
    </div>
    <div class="r_buy">
      <div class="r_buyInfor">
        <div class="r_buySizeBox">
          <div class="r_buySize_title r_buy_title">尺码</div>
          <ul class="r_buySize_conBox">
            <li
              class="r_buySize_listingItem"
              v-for="(item,index) in object "
              :key="index"
              @click="fun"
            >{{item.size}}</li>
          </ul>
        </div>
        <div class="r_buyColorBox">
          <div class="r_buyColor_title r_buy_title">颜色选择</div>
          <ul class="r_buyColor_conBox">
            <li class="r_buyColor_listingItem" v-for="item in colors" v-bind:key="index">
              <img :src="item.src" :alt="item.alt" />
            </li>
          </ul>
        </div>
        <div class="r_buyNumBox">
          <div class="r_buyNum_title r_buy_title">数量</div>
          <div class="r_buyNum_con">
            <input class="r_buyNum_input" value="1" />
          </div>
        </div>
      </div>
      <div class="r_action">
        <div class="r_action_buyNow">
          <a href="#">立即购买</a>
        </div>
        <div class="r_action_buyCar">
          <a href="#">加入购物车</a>
        </div>
      </div>
    </div>
    <div class="r_promise">
      <dl class="r_proListing">
        <dd
          class="r_proListing_title"
          v-for="(item,index) in object "
          :key="index"
          @click="fun"
        >{{item.span}}</dd>
      </dl>
      <div class="r_promise_warning">检测到您当前处于非安全网络环境，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息。</div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "rightNavBox",
  data() {
    return {
      object: [],
      colors: [
        {
          src:
            "//img.alicdn.com/imgextra/i3/2228361831/O1CN012fuXPh1POdkUlxrWQ_!!2228361831.jpg_430x430q90.jpg",
          alt: "粉红色"
        }
      ]
    };
  },
  mounted() {
    Vue.axios.get(`http://localhost:8888/goods`).then(response => {
      this.object = response.data;
    });
  }
};
</script>

<style scoped>
@import "../assets/style/rightBar";
</style>