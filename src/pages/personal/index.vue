<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 20:10:01
 * @LastEditTime: 2019-08-09 15:46:16
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="login">
    <div class="nav">
      <span>＜</span>
      <span>个人中心</span>
      <span></span>
    </div>
     <ul class="header">
       <li></li>
       <li>{{phone}}</li>
     </ul>
     <div class="footer">
       <ol>
         <li>
           <span>!</span>
           <span>我的面试</span>
         </li>
         <li>></li>
       </ol>
       <ol>
         <li>
           <span>!</span>
           <span>客服中心</span>
         </li>
         <li>></li>
       </ol>
     </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {

  },
  computed: {
    ...mapState({
      phone: state => state.user.phone,
    }),
  },
 


}
</script>

<style  scoped>
 .login{
   width:100%;
   height:100%;
   display:flex;
   flex-direction:column;
}
.nav{
  width:100%;
  height:30px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
}
.nav span{
    font-size:14px;
    padding:10px 0;
    color:#666666;
}
.header{
    width:100%;
    height:100px;
    background: #f4f6f9;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding-top:20px;
    padding-bottom:20px;
}
.header li:first-of-type{
   width:80px;
   height:80px;
   display:inline-block;
   border-radius:50%;
   background:#fff;
}
.header li:last-of-type{
   font-size:20px;
   margin-top:20px;
   text-align:center;
   color:#000000;
}
.footer{
  flex:1;
  display:flex;
  flex-direction: column;
  padding:0 10px;
}

.footer ol{
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #eeeeee;
  padding:10px 0;
}
.footer ol li span,.footer ol li:last-of-type{
   padding:10px;
}
.footer ol li:first-of-type span:first-of-type{
   display: inline-block;
   width:10px;
   height:10px;
   background:#10aeff;
   border-radius: 50%;
   margin-right:10px;
   color:#fff;
   font-size:13px;
   line-height:10px;
   text-align: center;
}
.footer ol li:first-of-type span:last-of-type{
   font-size:18px;
   color:#666666;
}
.footer ol li:last-of-type{
  color:#666666;
  font-family: "楷体";
  font-size:20px;
}
</style>
