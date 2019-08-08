<template>
  <div class="Interview">
   
    <ul class="carded">
      <li v-for="(item,index) in data" :key=index @click="clockId(index,colorId=0,whole)" :class = "{active:colorId==index}"> {{item}} </li>
   </ul>
    <div class="footer">
    
      <ul v-for="(item,index) in viewList" :key=index>
         <li>{{item.company}}</li>
         <li>{{item.address?item.address:item.address.address}}</li>
         <li>
           <span>面试时间:2019-08-06 17:00</span>
           <span>{{item.create_time-start_time>start_time?'未提醒':'提醒'}}</span>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import {sing} from '@/service/user.js'
import {mapState, mapActions} from 'vuex';
export default {
  data() {
    return {
        data:["未开始","已打卡","已放弃","全部"],
        colorId:0,
        whole:false
    };
  },
  computed: {
     ...mapState({
      viewList: state=>state.interview.viewList,
    })
  },
  methods: {
      ...mapActions({
      sign: 'interview/getLocation'
    }),
  goDetail:()=>{
      const url = '../detail/main'
       mpvue.navigateTo({url})
   },
   clockId:function(index,colorId,whole){
        this.colorId = index;
        console.log(whole)
   }
  },
  created() {
   this.sign()
  
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
