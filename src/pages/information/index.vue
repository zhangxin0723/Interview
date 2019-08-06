<template>
  <div class="information">
    <div class="nav">
      <span>＜</span>
      <span>八位研究学院</span>
    </div>
    <ul class="add_emil">
        <li>
            <span>面试地址:</span>
            <span>北京八维学校</span>
        </li>
        <li>
            <span>面试时间:</span>
            <span>2019-08-06 17：00</span>
        </li>
        <li>
            <span>联系方式:</span>
            <span>18701083253</span>
        </li>
        <li>
            <span>是否提醒:</span>
            <span>未提醒</span>
        </li>
        <li>
            <span>面试状态:</span>
            <span>已放弃</span>
        </li>
    </ul>
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
 .information{
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
    color:#000;
}
.nav span:nth-of-type(2){
  margin-left:10px;
}
.add_emil{
    display:flex;
    flex-direction: column;
    padding:10px;
    background:#fff;
}
.add_emil li{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:15px 0;
     border-bottom:1px solid #eeeeee;
}
.add_emil li span{
    font-size:18px;
    color:#666666;
    margin-right:5px; 
    margin-right:20px;
}
.add_emil li span:last-of-type{
    flex:1;
}
</style>
