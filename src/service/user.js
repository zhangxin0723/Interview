/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 20:10:01
 * @LastEditTime: 2019-08-10 07:55:05
 * @LastEditors: Please set LastEditors
 */
import fly from '@/utils/request'

// 登陆接口
export let login = code => {
  return fly.post('/user/code2session', { code })
}
//解密手机号
export let decrypt = params => {
  return fly.post('/user/decrypt', params)
}
//更新手机号
export let updatePhone = params => {
  return fly.post('/user/updatePhone', params)
}
