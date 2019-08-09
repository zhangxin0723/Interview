/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 07:46:54
 * @LastEditTime: 2019-08-09 15:05:54
 * @LastEditors: Please set LastEditors
 */
import { sign, addSign, signDetail } from '@/service'

const moment = require('moment')
function formatTime(start_time) {
  return moment(start_time * 1).format('YYYY-MM-DD HH:mm')
}

// 模块所有的状态
const state = {
  viewList: [],
  interviewState: {},
  signDetailData: {}
}


// 模块内的同步改变
const mutations = {
  updateSign(state, payload) {
    payload.map(item => {
      item.start_time = formatTime(item.start_time)
      return item
    });
    state.viewList = payload;
  },
  upInterviewState( state, payload ){
    state.interviewState = payload
  },
  //面试详情数据
  upSignDetail(state, payload){
    payload.start_time = formatTime(payload.start_time)
    state.signDetailData = payload
  }
}

// 模块内的异步改变
const actions = {
  async getLocation({ commit }, payload) {
    const res = await sign(payload);
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
        duration: 4000
      })
      wx.navigateTo({
        url: "/pages/interview/main"
      })
    }
  },
  //获取面试详情
  async signDetail({ commit }, payload){
    let res = await signDetail(payload)
    commit('upSignDetail', res.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}