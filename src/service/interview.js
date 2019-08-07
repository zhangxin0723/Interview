import fly from '@/utils/request'
// 获取面试列表
export let sign = () => {
  return fly.get('/sign')
}