import { sign, addSign } from '@/service'

const moment = require('moment')
function formatTime(start_time) {
  return moment(start_time * 1).format('YYYY-MM-DD HH:mm')
}

// 模块所有的状态
const state = {
  viewList: [],
}


// 模块内的同步改变
const mutations = {
  updateSign(state, payload) {
    payload.map(item => {
      item.start_time = formatTime(item.start_time)
      return item
    });
    console.log(payload)
    state.viewList = payload;
  }
}

// 模块内的异步改变
const actions = {
  async getLocation({ commit }, payload) {
    const res = await sign(payload);
    console.log(res.data);
    commit('updateSign',res.data)
    // res.data.map(item => {
    //   item.address = JSON.parse(item.address);
    //   item.start_time = new Date(Number(item.start_time)).toLocaleString();
    //   if (parseInt(item.sign_time) - parseInt(item.create_time) < item.create_time) {
    //     item.name = '未提醒',
    //       item.remind = '已放弃'
    //   } else {
    //     item.name = '已提醒',
    //       item.remind = ''
    //   }
    // })
    // if (payload.page === 1) {
    //   state.viewList = res.data
    // } else {
    //   state.viewList = [...state.viewList, ...res.data];
    // }
  },
  //添加面试
  async addSign({ commit }, payload) {
    let res = await addSign(payload);
    if (res.code === 0) {
      wx.showToast({
        title: res.msg,
        icon: 'success',
        duration: 2000
      })
      wx.navigateTo({
        url: "/pages/interview/main"
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}