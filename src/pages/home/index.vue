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
      <p @click="Interview">添加面试</p>
    </div>
  </div>
</template>

<script>

import { mapState , mapActions } from 'vuex';
export default {
  components: {
    
  },

  computed: {
    ...mapState({
      longitude: state=>state.home.longitude,
      latitude: state=>state.home.latitude
    })
  },
  
  methods: {
    ...mapActions({
      location: 'home/getLocation'
    }),
    handMy:e=> {
      wx.navigateTo({
        url: "/pages/logs/main"
         
      })
       
    },
    //添加面试
   Interview :e=> {
      wx.navigateTo({
        url: "/pages/AddInterview/main"
         
      })
       
    },
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
map {
  width: 100%;
  height: 100%;
}
.emil {
  position: fixed;
  width: 100%;
  height: 143rpx;
  left: 0;
  bottom: 9%;

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
    width: 80rpx;
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    text-align: right;
    padding-right: 15rpx;
    font-weight: 800;
    background: #000;
    border-radius: 50%;
    margin-right: 28rpx;


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
</style>
