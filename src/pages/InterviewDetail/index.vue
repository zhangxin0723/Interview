<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 08:08:01
 * @LastEditTime: 2019-08-09 11:00:14
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="interviewDetail">
    <form action>
      <label for>
        <span>面试地址：</span>
        <p>{{signDetailData.company}}</p>
      </label>
      <label for>
        <span>面试时间：</span>
        <p>{{signDetailData.start_time}}</p>
      </label>
      <label for>
        <span>联系方式：</span>
        <p>{{signDetailData.phone}}</p>
      </label>
      <label for>
        <span>是否提醒：</span>
        <p>{{remind}}</p>
      </label>
      <label for>
        <span>面试状态：</span>
        <p>{{status}}</p>
      </label>
      <label for>
        <span>取消提醒：</span>
        <p><switch @change="switch1Change"/></p>
      </label>
    </form>
    <div class="choose">
      <button>去打卡</button>
      <button>放弃面试</button>
    </div>
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
      signDetailData: state => state.interview.signDetailData,
    }),
    remind(){
      let str='';
      if(this.signDetailData.remind === -1){
        str='未提醒'
      }else{
        str='已提醒'
      }
      return str
    },
    status(){
      let str='';
      if(this.signDetailData.status === -1){
        str = '未开始'
      }else if(this.signDetailData.status === 0){
        str = '已打卡'
      }else{
        str = '已放弃'
      }
      return str
    }
  },
  methods: {
    switch1Change(e){
      console.log('switch1 发生 change 事件，携带值为', e.mp.detail.value)
    },
  },
  created() {},
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
  padding-left: 30rpx;
}
.choose {
  width: 100%;
  display: flex;
  padding: 0 20rpx;
  margin-top: 80rpx;
}
.choose button {
  flex: 1;
  margin-right: 30rpx;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 0;
}
.choose button:nth-child(1){
  background: #197dbf;
}
.choose button:nth-child(2){
  background: #c30;
}
</style>