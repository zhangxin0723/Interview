<template>
  <div class="address">
      <div class='header'>
          <span>北京</span>
          <input type="text" placeholder="面试地址" v-model="city" @input="search">
      </div>
      <div class="addressList">
          <dl @click="checkAdd(item)"  
           v-for="item in addressData" 
           :key="item.id">
            <dt><span class="icon iconfont">&#xe647;</span></dt>
            <dd>
              <h1>{{item.title}}</h1>
              <p>{{item.address}}</p>
            </dd>
          </dl>
      </div>
  </div>
</template>
<script>
import { mapActions , mapState , mapMutations} from 'vuex'
import "../../../font/iconfont.css"
import  throttle from  "@/utils/debounce"
export default {
  props:{
    
  },
  components:{

  },
  data(){
    return {
      city:""
    }
  },
  computed:{
    ...mapState({
      addressData: state=>state.address.addressData
    })
  },
  methods:{
    ...mapActions({
      getSuggestion: 'address/getSuggestion'
    }),
    ...mapMutations({
      checkAddress: 'address/checkAddress'
    }),
    //搜索地址
    search(){
      throttle(()=>{this.getSuggestion(this.city)},2000)
    },
    //确认地址
    checkAdd(item){
      wx.navigateBack({
        delta: 1
      })
      this.checkAddress(item.address)
    }
  },
  created(){
    
  },
  mounted(){

  }
}
</script>
<style scoped lang="scss">
  .address{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 100%;
    border-top: 1rpx solid #eee;
    border-bottom: 1rpx solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20rpx 10rpx;
    span{
      width: 20%;
      text-align: center;
      border-right: 1rpx solid #eee;
    }
    input{
      flex:1;
      margin-left: 5%;
    }
  }
  .addressList{
    width: 100%;
    flex:1;
    overflow-y: scroll;
    dl{
      width: 100%;
      display: flex;
      padding: 10rpx 0;
      border-bottom: 1rpx solid #eee;
        dt{
          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #197dbf;
          font-weight: bold;
          span{
           font-size: 40rpx;
          }
        }
        dd{
          flex:1;
          padding: 1% ;
          h1{
            font-size: 36rpx;
          }
          p{
            font-size: 24rpx;
            color: #e7e7e7;
          }
        }
    }
  }
</style>