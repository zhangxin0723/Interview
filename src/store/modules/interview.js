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
      console.log(payload,'8989')
        const res = await sign(payload);
        res.data.map(item => {
          item.address = JSON.parse(item.address);
          item.start_time = new Date(Number(item.start_time)).toLocaleString();
          
          if(payload.status===0){
              item.name='已打卡',
              item.remind=''
          }else if(payload.status===1){
             console.log(item.start_time)
            if(parseInt(item.sign_time)-parseInt(item.create_time)>parseInt(item.create_time)){
              item.name='已提醒',
              item.remind='已放弃'
            }else{
              item.name='已提醒',
              item.remind='已放弃'
            }
            
          }else if(payload.status===-1){
            item.name='未提醒',
            item.remind='未开始'
          }
      })
      if (payload.page === 1) {
          state.viewList = res.data
      } else {
          state.viewList = [...state.viewList, ...res.data];
      }
      
    }
   }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }