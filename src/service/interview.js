import fly from '@/utils/request'
// 获取面试列表
export let sign = (params) => {
  return fly.get('/sign',params)
}
export let signCont = () => {
  return fly.get('/sign')
}
