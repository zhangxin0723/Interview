<template>
  <div class="Interview">
   <ul class="carded">
      <li v-for="(item,index) in data" :key=index @click="clockId(index,colorId=0,whole,item.status)" :class = "{active:colorId==index}"> {{item.name}} </li>
   </ul>
    <div class="footer">
      <ul v-for="(item,index) in viewList" :key=index >
         <li>{{item.company}}</li>
         <li>{{item.address.address}}</li>
         <li>
           <span>面试时间:{{item.start_time}}</span>
           <span>{{item.company}}</span>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
import {sing} from '@/service/interview.js'
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
        address:null,
    };
  },
  computed: {
     
     ...mapState({
      viewList: state=>state.interview.viewList,
    }),
    
  },
  methods: {
   
      ...mapActions({
      sign: 'interview/getLocation',
      
    }),
    
  goDetail:()=>{
      const url = '../detail/main'
       mpvue.navigateTo({url})
   },
   clockId:function(index,colorId,whole,status){
        this.colorId = index;
          this.viewList.splice(0)
        this.sign({status:status})
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
   overflow-y: auto;
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
