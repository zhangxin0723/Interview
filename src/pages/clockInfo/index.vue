<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 10:30:49
 * @LastEditTime: 2019-08-12 11:18:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="clock">
    <plat></plat>
    <div class="emil">
      <ul>
        <li class="icon iconfont" @click="location">&#xe63b;</li>
      </ul>
      <p @click="toAdd">添加面试</p>
    </div>
  </div>
</template>
<script>
import "@/font/iconfont.css"
import plat from "../plat";
import { mapActions } from 'vuex'
export default {
  props: {},
  components: {
    plat
  },
  data() {
    return {};
  },
  computed: {
   
  },
  methods: {
    ...mapActions({
      location: 'home/getLocation',
    }),
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.clock {
  width: 100%;
  height: 100%;
}
.emil {
  position: fixed;
  width: 100%;
  height: 143rpx;
  left: 0;
  bottom: 9%;
  z-index: 1;
}
.emil ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
}
.emil ul li {
  font-size: 56rpx;
  color: #197dbf;
}
.emil ul li:first-of-type {
  text-align: left;
  padding-left: 28rpx;
  font-weight: 800;
  font-size: 66rpx;
}
.emil > p {
  width: 100%;
  height: 106rpx;
  background: #000;
  line-height: 106rpx;
  text-align: center;
  font-size: 37rpx;
  color: #fff;
}
</style>