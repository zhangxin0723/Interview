/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 07:54:01
 * @LastEditTime: 2019-08-09 10:38:53
 * @LastEditors: Please set LastEditors
 */
import fly from '@/utils/request'

// 添加面试
export let addSign = params=>{
  return fly.post('/sign', params);
} 
// 获取面试列表
export let sign = (params) => {
  return fly.get('/sign',params)
}
export let signCont = () => {
  return fly.get('/sign')
}
//获取面试详情
export let signDetail = params => {
  return fly.get(`/sign/${params}`, ) 
}
