<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 10:00:33
 * @LastEditTime: 2019-08-12 10:24:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <map
      id="map"
      show-location 
      :markers="markers"
      :longitude="longitude"
      :latitude="latitude"
    ></map>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    }),
  },
  methods:{

  },
  created(){
    
  },
  mounted(){

  }
}
</script>
<style scoped lang="">
  map{
    width: 100%;
    height: 100%;
  }
</style>