<template>
  <div class="Interview">
    <div class="nav">
      <span>＜</span>
      <span>面试列表</span>
      <span></span>
    </div>
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

export default {
  components: {
    card
  },

 


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
.nav{
  width:100%;
  height:30px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  padding:10px;
  background:#fff;
  border-bottom:1px solid #eeeeee;
  padding:10px;
}
.nav span{
    font-size:20px;
    padding:10px 0;
    color:#666666;
}
.nav span:nth-of-type(2){
  margin-left:10px;
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
