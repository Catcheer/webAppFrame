// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import Vuex from 'vuex'

import store from './store/store'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: 'small'
})
// 注册组件后即可使用

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
