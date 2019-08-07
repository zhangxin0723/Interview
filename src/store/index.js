import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

// 引入store子模块
import home from './modules/home'
//面试列表
import interview from './modules/interview'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    interview
  },
  plugins: [CreateLogger()]
})
