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
      <p>添加面试</p>
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
      latitude: state=>state.home.latitude,
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
   
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
page,
view,
map {
  width: 100%;
  height: 100%;
}
.emil {
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  top: 73%;
}
.emil ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;

}
.emil ul li:first-of-type {
  font-size: 30px;
  text-align: left;
  padding-left: 15px;
  color: #197dbf;
  font-weight: 800;
}
.emil ul li:last-of-type {
  font-size: 30px;
  text-align: right;
  padding-right: 15px;
  color: #197dbf;
  font-weight: 800;
}
.emil >p{
  width:100%;
  height:80px;
  background:#000;
  line-height:60px;
  text-align:center;
  font-size:18px;
  color:#fff;
}
</style>
