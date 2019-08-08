<template>
  <div class="Interview">
   <ul class="carded">
      <li v-for="(item,index) in data" :key=index @click="clockId(index,colorId=0,whole,item.status)" :class = "{active:colorId==index}"> {{item.name}} </li>
   </ul>
    <div class="footer">
      <ul v-for="(item,index) in viewList" :key=index @click="detil(item)">
         <li>{{item.company}}</li>
         <li>{{item.address.address}}</li>
         <li>
           <span>面试时间:{{item.start_time}}</span>
           <span>{{item.remind}}</span>
           <span>{{item.name}}</span>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import {sing,signCont} from '@/service/interview.js'
import {mapState, mapActions} from 'vuex';
export default {
  data() {
    return {
        data:[{
              "name":"未开始",
              "status":-1
            },{
            "name":"已打卡",
            "status":0
            },{
            "name":"已放弃",
            "status":1
            },{
            "name":"全部",
            "status":2
            }],
        colorId:0,
        whole:false,
        status_Id:0,
    }
  },
  computed: {
     ...mapState({
      viewList: state=>state.interview.viewList,
      list: state=>state.list.list,
    }),
    
  },
  methods: {
   ...mapActions({
      sign: 'interview/getLocation',
      signCont:'interview/getLocation'
    }),
    
  goDetail:()=>{
      const url = '../detail/main'
       mpvue.navigateTo({url})
   },
   clockId:function(index,colorId,whole,status){//tab切换
        this.colorId = index;
        this.viewList.splice(0);
        this.sign({status:status})
        if(status===2){
             this.list()
        }
        this.status_Id=status
        
    },
    detil:function(item){
      //address.address 地址
      //.start_time 时间
      //phone//手机号
      //name/提醒
      //remind放弃
      //跳转详情
      wx.navigateTo({
      url: '/pages/information/main?address=' + item.address.address + '&startTime=' + item.start_time+'&phone='+item.phone+'&name='+item.name+'&remind='+item.remind+'&statusIId='+this.status_Id
    })
    }
  },
  created() {
  }
};
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
  padding: 0 35rpx;

}
.carded li{
  font-size:30rpx;
  padding:20rpx 0;
}
.active{
  color:#197dbf;
  border-bottom:1rpx solid #197dbf;
}
.footer{
   flex:1;
   display:flex;
   flex-direction: column;
   background:#fff;
   margin-top:10rpx;
   overflow-y: auto;
}
.footer ul{
  display:flex;
  flex-direction:column;
  padding:20rpx;
}
.footer ul li{
  font-size:40rpx;
}
.footer ul li:first-of-type{
  color:#000000;
}
.footer ul li:nth-of-type(2){
  font-size:16px;
  color:#999999;
  margin:10px 0;
  width: 74%;

}
.footer ul li:last-of-type{
 display:flex;
 justify-content: space-between;
 align-items: center;
}
.footer ul li:last-of-type span:first-of-type{
  font-size:30rpx;
  color:#666666;
}
.footer ul li:last-of-type span:last-of-type{
  margin-right:2%;
}
.footer ul li:last-of-type span:last-of-type,.footer ul li:last-of-type span:nth-of-type(2){
  font-size: 28rpx;
  color: #f56c6c;
  padding: 15rpx 20rpx;
  background: #fef0f0;
  border-radius: 5rpx;
}
.footer ul li:last-of-type{
  position:relative;
}
.footer ul li:last-of-type span:nth-of-type(2){
    position: absolut;
    margin-right: -39%;
    margin-top: -30%;
    background: #f4f6f9;
    color:#909399;
}
</style>
