import fly from '@/utils/request'
// 获取面试列表
export let sign = () => {
  return fly.get('/sign')
}
// 添加面试
export let addSign = params=>{
  return fly.post('/sign', params);
} 