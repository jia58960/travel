import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/reset.css'
import './assets/border.css'
import  './assets/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
FastClick.attach(document.body)

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
