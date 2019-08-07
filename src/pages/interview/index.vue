<template>
  <div class="Interview">
   
    <ul class="carded">
      <li class="active">未开始</li>
      <li>已打卡</li>
      <li>已放弃</li>
      <li>全部</li>
    </ul>
    <div class="footer">
      <ul>
         <li>北京八维研究学院</li>
         <li>北京海淀上地软件园87号</li>
         <li>
           <span>面试时间:2019-08-06 17:00</span>
           <span>为提醒</span>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import {sing} from '@/service/user.js'
export default {
  components: {
    card
  },
   created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    
    // 调用登陆接口
    wx.request({
      success:function(res){
        console.log('999', res);
      }
    })
  }
}
</script>

<style  scoped>
 .Interview{
   width:100%;
   height:100%;
   display:flex;
   flex-direction:column;
   background:#eeeeee;
}

.carded{
  display:flex;
  justify-content: space-between;
  align-items: center;
  background:#fff;
  padding:0 10px;
}
.carded li{
  font-size:13px;
  padding:10px 0;
}
.active{
  color:#197dbf;
  border-bottom:1px solid #197dbf;
}
.footer{
   flex:1;
   display:flex;
   flex-direction: column;
   background:#fff;
   margin-top:10px;
}
.footer ul{
  display:flex;
  flex-direction:column;
  padding:10px;
}
.footer ul li{
  font-size:20px;
}
.footer ul li:first-of-type{
  color:#000000;
}
.footer ul li:nth-of-type(2){
  font-size:16px;
  color:#999999;
  margin:10px 0;
}
.footer ul li:last-of-type{
 display:flex;
 justify-content: space-between;
 align-items: center;
}
.footer ul li:last-of-type span:first-of-type{
  font-size:20px;
  color:#666666;
}
.footer ul li:last-of-type span:last-of-type{
  font-size:15px;
  color:#f56c6c;
  padding:4px 10px;
  background:#fef0f0;
  border-radius:5px;
}
</style>
