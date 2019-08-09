/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 20:10:01
 * @LastEditTime: 2019-08-09 15:21:11
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

// 引入store子模块
import home from './modules/home'
import address from './modules/address'

//面试列表
import interview from './modules/interview'
import list from './modules/list'
//用户
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    interview,
    address,
    list,
    user
  },
  plugins: [CreateLogger()]
})
