/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:20:15
 * @LastEditTime: 2019-08-10 08:01:37
 * @LastEditors: Please set LastEditors
 */
import { decrypt, updatePhone } from '@/service'
function formPhone(tel) {
  tel = "" + tel;
  let reg = /(\d{3})\d{4}(\d{4})/;
  let tel1 = tel.replace(reg, "$1****$2")
  return tel1
}
// 模块所有的状态
const state = {
  phone: '',
  code: null
}

// 模块内的同步改变
const mutations = {
  upPhone(state, payload) {
    state.phone = formPhone(payload.data.phoneNumber)
    state.code = payload.code
  }
}

// 模块内的异步改变
const actions = {
  //解密
  async decrypt({ commit }, payload) {
    let res = await decrypt(payload)
    commit('upPhone', res)
    if (res.code === 0) {
      await updatePhone({ phone: (res.data.phoneNumber) * 1 })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
