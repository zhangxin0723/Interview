import {sign} from '@/service'
// 模块所有的状态
const state = {
   viewList:[]
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
        const res = await sign(payload);
        res.data.map(item => {
          item.address = JSON.parse(item.address);
          item.start_time = new Date(Number(item.start_time)).toLocaleString();
      })
      if (payload.page === 1) {
          state.viewList = res.data
      } else {
          state.viewList = [...state.viewList, ...res.data];
      }
       console.log(res.data,'888')
    }
   }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }