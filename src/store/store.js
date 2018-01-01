import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LoadingShow: false,
  },
  mutations: {
    hideLoading(state) {
      state.LoadingShow = false
    },
    showLoading(state) {
        state.LoadingShow = true
      }
  },
})
