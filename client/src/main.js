// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

import goods from './components/goods'
import newworld from './components/newworld'
import leftBar from './components/leftBar'
import rightBar from './components/rightBar'
import lzh from './components/lzh'


Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const routes = [
  {path:'/goods',component:goods},
  {path:'/newworld',component:newworld},
  {path:'/leftBar',component:leftBar},
  {path:'/rightBar',component:rightBar},
  
  {path:'/lzh',component:lzh}

]
const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
