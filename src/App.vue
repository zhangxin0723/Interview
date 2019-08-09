<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 20:10:00
 * @LastEditTime: 2019-08-09 08:50:40
 * @LastEditors: Please set LastEditors
 -->
<script>
import { login } from '@/service/index';
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let openid = wx.getStorageSync('openid');
     // 调用登陆接口
    wx.login({
      success: async (res)=>{ 
        console.log(res)
        if (res.code) {
          //发起网络请求
          let data = await login(res.code);
          wx.setStorageSync('openid', data.data.openid);
          // console.log('res...', data);
        } else {
          // console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
page{
    width:100%;
    height:100%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
  margin:0;
  padding:0;
  text-decoration:none;
  box-sizing: border-box ;
}
page, page>view{
  height: 100%;
}
</style>
