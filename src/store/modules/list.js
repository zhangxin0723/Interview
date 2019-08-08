import {sign} from '@/service'
// 模块所有的状态
const state = {
   list:[]
  }
  
  
  // 模块内的同步改变
  const mutations = {
    updateSign(state, payload){
      state.list = payload;
      }
  }

  // 模块内的异步改变
  const actions = {
    async getLocation({commit},payload){
        const res = await getViewList(params);
        
        res.data.map(item => {
            item.address = JSON.parse(item.address);
            item.start_time = new Date(Number(item.start_time)).toLocaleString();
        })
        if (payload.page === 1) {
            state.list = res.data
        } else {
            state.list = [...state.list, ...res.data];
        }
    }
   }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }