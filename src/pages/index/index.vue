<template>
  <div @click="clickHandle" class="wrap">
     <map></map>
    <div class="emil">
      <ul>
         <li>地址</li>
         <li>我的</li>
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
    bindViewTap () {
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
page,view,map{
  width:100%;
  height:100%;
}
.emil{
  position:absolute;
  width:100%;
  height:100px;
  left:0;
  top: 94%;
}
.emil ul{
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.emil ul li:first-of-type{
  font-size:15px;
  text-align:left;
  padding-left:15px;
}
.emil ul li:last-of-type{
  font-size:15px;
  text-align:right;
  padding-right:15px;
}
</style>
