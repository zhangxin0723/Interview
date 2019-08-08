import fly from '@/utils/request'

// 添加面试
export let addSign = params=>{
  return fly.post('/sign', params);
} 
// 获取面试列表
export let sign = (params) => {
  return fly.get('/sign',params)
}
