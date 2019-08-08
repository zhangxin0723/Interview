import { sign, addSign } from '@/service'
// 模块所有的状态
const state = {
   viewList: [],
  }
  
  
  // 模块内的同步改变
  const mutations = {
    updateSign(state, payload){
      state.viewList = payload;
    }
  }

  // 模块内的异步改变
  const actions = {
    async getLocation({commit},payload){
        const res = await sign();
        commit("updateSign",res.data);
    },
    //添加面试
    async addSign({ commit },payload){
      let res = await addSign(payload);
      if(res.code===0){
        wx.showToast({
          title: res.msg,
          icon: 'success',
          duration: 2000
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