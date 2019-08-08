<template>
  <div class="information">
    
    <ul class="add_emil">
        <li>
            <span>面试地址:</span>
            <span>{{address}}</span>
        </li>
        <li>
            <span>面试时间:</span>
            <span>{{startTime}}</span>
        </li>
        <li>
            <span>联系方式:</span>
            <span>{{phone}}</span>
        </li>
        <li>
            <span>是否提醒:</span>
            <span>{{name}}</span>
        </li>
        <li>
            <span>面试状态:</span>
            <span>{{remind}}</span>
        </li>
        <li class="statu_remind" v-if='this.status_Id===-1&&ok'>
           <div class="status_remind">
                <div class="status_cancel">
                    <span>取消提醒:</span>
                    <switch bindchange="changeTap"></switch>
                </div>
                <div class="button">
                    <button>去打卡</button>
                    <button>放弃面试</button>
                </div>
           </div>
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
  data:{
    address:null,
    name:null,
    phone:null,
    remind:null,
    startTime:null,
    status_Id:0,
    ok:false,
    blean:true
  },
    onLoad: function (option){
        var that=this
        this.address=option.address
        this.name=option.name
        this.phone=option.phone
        this.remind=option.remind
        this.startTime=option.startTime
        this.status_Id=option.statusIId
       console.log(this.status_Id,'90')
    },
   changeTap:function(e){
       console.log(e)
   }

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
.add_emil .statu_remind,.add_emil .status_remind{
    width:100%;
    display:flex;
    flex-direction:column;
}
.add_emil .status_remind{
    padding:15px 0;
}
.add_emil .statu_remind .status_remind .button{
     display:flex;
     justify-content: center;
     align-items: center;
     margin-top:5%;
}
.add_emil .statu_remind .status_remind .button button{
    display:inline-block;
    width:310rpx;
    height: 94rpx;
    line-height: 94rpx;
    text-align: center;
    color: #fff;
    margin-top: 21rpx;
    border-radius: 0;
   
}
.add_emil .statu_remind .status_remind .status_cancel{
    margin-top: -36rpx;
    border-bottom: 2rpx solid #eeeeee;
    padding-bottom: 19rpx;
}
.add_emil .statu_remind .status_remind .button button:first-of-type{
    background:#197dbf;
}
.add_emil .statu_remind .status_remind .button button:last-of-type{
    background:#dc4e42;
}
.add_emil li:last-of-type{
    border:0
}
</style>
