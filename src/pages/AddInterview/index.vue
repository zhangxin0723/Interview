<template>
  <div class="addInterview">
    <div class="title">面试信息</div>
    <form action>
      <label for>
        <span>公司名称：</span>
        <input type="text" placeholder="请输入公司名称" v-model="company"/>
      </label>
      <label for>
        <span>公司电话：</span>
        <input type="text" placeholder="请输入面试联系人电话" v-model="phone" />
      </label>
      <label for>
        <span>面试时间：</span>
        <!-- <input type="text" placeholder="2019-08-06 17:00" /> -->
        <p>
          <view class="section">
            <picker mode="date" value="date" start="2015-09-01" end="2020-09-01" @change="bindDateChange">
              <view class="picker">
                {{date}}
              </view>
            </picker>
          </view>
        </p>
        <i class="icon" @click="toast">!</i>
      </label>
      <label for>
        <span>面试地址：</span>
        <p @click="toAddress">{{checkAddress}}</p>
      </label>
    </form>
    <div class="title">备注信息</div>
    <textarea name id cols="30" rows="10" class="comment" placeholder="备注信息（可选，100个字以内" v-model="description"></textarea>
    <button class="cure" @click="cure">确认</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {
      company: "",
      phone: "",
      date: new Date().toLocaleDateString().replace(/\//g,"-"),
      description:""
    };
  },
  computed: {
    ...mapState({
      checkAddress:state=>state.address.checkAddress,
      checkAddressLocation: state=>state.address.checkAddressLocation
    })
  },
  methods: {
    //确认
    cure(){
      console.log(this.checkAddressLocation)
      if(this.company===""&&this.phone===""){
        wx.showToast({
          title: '请完善您的面试信息！！',
          icon: 'none',
          duration: 2000
        })
         return
      }
      console.log(this.company,this.phone,this.description)
      let that= this;
      wx.showModal({
        title: '温馨提示',
        content: '添加面试成功！',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定',that.company)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    //提示
    toast(){
      wx.showToast({
        title: '我们会在提前一个小时通知您！',
        icon: 'none',
        duration: 2000
      })
    },
    //跳转
    toAddress(){
      wx.navigateTo({
          url:"/pages/Address/main",
          success(res) {
              console.log(res,'res...')
          }
      })
    },
    //日期
     bindDateChange: function(e) {
      this.date= e.mp.detail.value
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.title {
  width: 100%;
  line-height: 80rpx;
  background: #f6f6f6;
  padding: 0 25rpx;
  font-weight: bold;
}
form {
  display: inline-block;
  width: 100%;
  padding-left: 40rpx;
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
  font-size: 32rpx
}
label input {
  height: 100%;
  padding-left: 20rpx;
}
label p {
  flex: 1;
  height: 100%;
  line-height: 100rpx;
  padding-left: 20rpx;
}
label:nth-last-child(1) {
  border-bottom: none;
}
.icon {
  display: inline-block;
  width: 50rpx;
  height: 50rpx;
  border-radius: 50%;
  background: #197dbf;
  text-align: center;
  line-height: 50rpx;
  color: #fff;
  margin-right: 90rpx;
}
.cure {
  width: 100%;
  height: 100rpx;
  background: #999999;
  text-align: center;
  line-height: 100rpx;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 0;
}
.comment {
  width: 90%;
  height: 250rpx;
  border: 1rpx solid #999999;
  margin: 40rpx 5%;
  border-radius: 2%;
  padding: 10rpx;
  box-sizing: border-box;
}
</style>