<template>
  <div class="customer">
    <ol class="nav">
      <li>＜</li>
      <li>
          <span>一面而就</span>
          <span>客服会话</span>
      </li>
      <li></li>
    </ol>
    <div class="center"></div>
    <ol class="footer">
        <li>
            <input type="text"/>
        </li>
        <li>
            <span>😀</span>
            <span>+</span>
        </li>
    </ol>
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

 .customer{
   width:100%;
   height:100%;
   display:flex;
   flex-direction:column;
   background:#ededed;
}
.nav{
  width:100%;
  height:30px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  padding:10px;
  border-bottom:1px solid #d1d1d1;
  padding:15px 10px;
}
.nav li{
    font-size:20px;
    padding:10px 0;
    color:#666666;
}
.nav li:first-of-type{
    font-size:18px;
    font-family: "楷体"
}
.nav li:nth-of-type(2){
   display:flex;
   flex-direction:column;
   margin-left:10px;
}
.nav li:nth-of-type(2) span{
    font-size:16px;
    display: block;
    color:#181818
}
.nav li:nth-of-type(2) spa:last-of-type{
    margin-top:5px;
    color:#999999
}
.center{
    flex:1;
    display:flex;
    flex-direction: column;
}
.footer{
   display:flex;
   justify-content:space-between;
   align-items: center;
   background:#f7f7f7;
   padding:10px;
}
.footer li:first-of-type{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0 5px;
}
.footer li:first-of-type input{
    flex:1;
    border:0;
    background:0;
    background:#fff;
    font-size:14px;
    border-radius: 5px;
}
.footer li:last-of-type{
  display:flex;
}
.footer li:last-of-type span{
    display:inline-block;
    font-size:20px;
    width:30px;
    height:30px;
    border:1px solid #000000;
    border-radius:50%;
    margin:0 10px;
    text-align: center;
    line-height: 30px;
}
.footer li:last-of-type span:first-of-type{
  border:0;
}
.footer li:last-of-type span:last-of-type{
    margin-left:10px;
   
}
</style>
