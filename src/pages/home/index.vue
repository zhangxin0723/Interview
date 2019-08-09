<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 20:10:01
 * @LastEditTime: 2019-08-10 07:55:41
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div @click="clickHandle" class="wrap">
    <map
      id="map"
      show-location
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
    ></map>
    <div class="emil">
      <ul>
         <li class="icon iconfont"  @click="location">&#xe63b;</li>
         <li class="icon iconfont"  @click="handMy">&#xe678;</li>
      </ul>
      <p @click="toAdd">添加面试</p>
    </div>
    <button v-show='flag' class="authorization" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button>
    <button class="setting" open-type="openSetting" @opensetting="callback" v-if="showFlag">打开设置页</button>
  </div>
</template>

<script>

import { mapState , mapActions } from 'vuex';
export default {
  components: {
    
  },
  data(){
    return {
      showFlag:false
    }
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude,
      code: state => state.user.code,
    }),
    flag(){
      if(this.code===0){
        return false
      }
      return true
    }
  },
  
  methods: {
    ...mapActions({
      location: 'home/getLocation',
      decrypt: 'user/decrypt'
    }),
    handMy:e=> {
      wx.navigateTo({
        url: "/pages/logs/main" 
      })
    },
    //跳转添加面试
    toAdd(){
      wx.navigateTo({
        url: "/pages/AddInterview/main" 
      })
    },
    //获取手机
    getPhoneNumber (e) {
      // console.log(e.target,this.decrypt)
      let { encryptedData, iv } = e.target;
      if(encryptedData){
        this.decrypt({ encryptedData, iv })
      } else {
        this.showFlag = true
        wx.openSetting({
          success(res){
            console.log(res.authSetting)
          }
        })
      }
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
@import "../../font/iconfont.css";
page,
view,
map,
.wrap{
  width: 100%;
  height: 100%;
}
.emil {
  position: fixed;
  width: 100%;
  height: 143rpx;
  left: 0;
  bottom: 8%;
  z-index: 1;

}
.emil ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;

}
.emil ul li{
  font-size: 56rpx;
  color: #197dbf;
}
.emil ul li:first-of-type {
  text-align: left;
  padding-left: 28rpx;
  font-weight: 800;
  font-size: 66rpx;

}
.emil ul li:last-of-type {
    width: 100rpx;
    height: 90rpx;
    line-height: 100rpx;
    background: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25rpx;
}
.emil >p{
  width: 100%;
  height: 106rpx;
  background: #000;
  line-height: 106rpx;
  text-align: center;
  font-size: 37rpx;
  color: #fff;
}
.authorization{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
}
.setting{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
