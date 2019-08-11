<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 11:56:17
 * @LastEditTime: 2019-08-11 19:19:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="interviewDetail">
    <form action>
      <label for>
        <span>面试地址：</span>
        <p>{{interviewState.address}}</p>
      </label>
      <label for>
        <span>面试时间：</span>
        <p>{{interviewState.start_time}}</p>
      </label>
      <label for>
        <span>联系方式：</span>
        <p>{{interviewState.phone}}</p>
      </label>
      <label for>
        <span>是否提醒：</span>
        <p>{{remind}}</p>
      </label>
      <label for>
        <span>面试状态：</span>
        <p>{{status}}</p>
      </label>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      interviewState:state=>state.interview.interviewState
    }),
    remind(){
      let str='';
      if(this.interviewState.remind === -1){
        str='未提醒'
      }else{
        str='已提醒'
      }
      return str
    },
    status(){
      let str='';
      if(this.interviewState.status === -1){
        str = '未开始'
      }else if(this.interviewState.status === 0){
        str = '已打卡'
      }else{
        str = '已放弃'
      }
      return str
    }
  },
  methods: {},
  created() {
  },
  mounted() {}
};
</script>
<style scoped lang="">
form {
  display: inline-block;
  width: 100%;
  padding-left: 40rpx;
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
}
label {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  border-bottom: 1rpx solid #eee;
}
label span {
  width: 22%;
  text-align: center;
  color: #9b9b9b;
}
label input {
  height: 100%;
  padding-left: 30rpx;
}
label:nth-last-child(1) {
  border-bottom: none;
}
label p {
  flex: 1;
  height: 100%;
  line-height: 100rpx;
  padding-left: 10rpx;
  padding-right: 30rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>