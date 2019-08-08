<template>
  <li @click="clockId(index,colorId=0,item)" :class = "{active:colorId==index}"> {{item}}</li>
</template>

<script>
export default {
  data(){
    return{
       Index:0,
       colorId:0,
       ItemName:null
    }
  },
  methods:{
    clockId:function(index,colorId,item){
        this.colorId=index
        this.Index=index
        this.ItemName=item
        this.$emit('close',this.Index,this.colorId,this.ItemName)
   }
  },
  props: ['item','index'],
 
};
</script>

<style  scoped>
  .carded li{
  font-size:30rpx;
   padding:20rpx 0;
}
.active{
  color:#197dbf;
  border-bottom:1px solid #197dbf;
}
</style>
