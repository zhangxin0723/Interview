<template>
  <div @click="clickHandle" class="wrap">
     <map></map>
    <div class="emil">
      <ul>
         <li class="icon iconfont icon-dizhiguanli"></li>
         <li class="icon iconfont icon-wode" @click="handMy"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
 

  components: {
    card
  },

  methods: {
    handMy () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
@import "../../font/iconfont.css";
page,view,map{
  width:100%;
  height:100%;
}
.emil{
  position:absolute;
  width:100%;
  height:100px;
  left:0;
  top: 90%;
}
.emil ul{
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.emil ul li:first-of-type{
  font-size:30px;
  text-align:left;
  padding-left:15px;
  color:#197dbf;
  font-weight: 800
}
.emil ul li:last-of-type{
  font-size:30px;
  text-align:right;
  padding-right:15px;
   color:#197dbf;
   font-weight: 800
}
</style>
