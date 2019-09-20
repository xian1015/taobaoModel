// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

import HelloWorld from './components/HelloWorld'
import newworld from './components/newworld'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

const routes = [
  {path:'/HelloWorld',component:HelloWorld},
  {path:'/newworld',component:newworld}
]
const router = new VueRouter({
    routes
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
