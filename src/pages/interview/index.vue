<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 20:10:01
 * @LastEditTime: 2019-08-12 09:54:52
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="Interview">
    <ul class="carded">
      <li
        v-for="(item,index) in data"
        :key="index"
        @click="clockId(index,item.status)"
        :class="{active:colorId==index}"
      >
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="footer">
      <div v-if="viewList.length>0">
        <ul v-for="(item,index) in viewList" :key="index" @click="detil(item)">
          <li>
            <span>{{item.company}}</span>
            <span :class="{blues:item.status===0,pinks:item.status===1}">{{status}}</span>
          </li>
          <li>{{item.address}}</li>
          <li>
            <span>面试时间：{{item.start_time}}</span>
            <span
              :class="{grays:item.status === 1,blues:item.status===-1}"
            >{{item.remind === -1 ? "未提醒" : "已提醒"}}</span>
          </li>
        </ul>
      </div>
      <div v-else class="none">当前分类没有面试！</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      data: [
        {
          name: "未开始",
          status: -1
        },
        {
          name: "已打卡",
          status: 0
        },
        {
          name: "已放弃",
          status: 1
        },
        {
          name: "全部",
          status: null
        }
      ],
      colorId: 0
    };
  },
  computed: {
    ...mapState({
      viewList: state => state.interview.viewList
    }),
    //判断state  -1表示未开始，0表示已打卡，1表示已放弃
    status() {
      let str = "";
      this.viewList.forEach(item => {
        if (item.status === -1) {
          str = "未开始";
        } else if (item.status === 1) {
          str = "已放弃";
        } else {
          str = "已打卡";
        }
      });
      return str;
    }
  },
  methods: {
    ...mapActions({
      sign: "interview/getLocation",
      signCont: "interview/getLocation",
      signDetail: "interview/signDetailData"
    }),
    ...mapMutations({
      upInterviewState: "interview/upInterviewState"
    }),
    clockId: function(index, status) {
      this.colorId = index;
      this.sign({ status: status, pageSize: 1000});
    },
    detil(item) {
      this.upInterviewState(item);
      this.signDetail(item.id);
      wx.navigateTo({
        url: "/pages/InterviewDetail/main"
      });
    }
  },
  created() {},
  onShow() {
    this.sign({ status: -1, pageSize: 1000});
  },
  onReachBottom() {
    console.log("上拉加载")
    // if (this.hasMore) {
    //   this.updatePage({ page: this.page + 1 });
    // }
    // this.getList();
  }
};
</script>

<style  scoped>
.Interview {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
}

.carded {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  /* padding: 0 35rpx; */
}
.carded li {
  flex: 1;
  text-align: center;
}
.active span {
  display: inline-block;
  height: 100%;
  color: #197dbf;
  border-bottom: 1rpx solid #197dbf;
}
.footer {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow: hidden;
  margin-top: 20rpx;
}
.footer div:nth-child(1){
  /* width: 100%;
  height: 100%;
  overflow-y: auto; */
}
.footer ul {
  display: flex;
  flex-direction: column;
  padding: 20rpx;
}
.footer ul li {
  font-size: 40rpx;
}
.footer ul li:first-of-type {
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer ul li:first-of-type span:nth-child(2) {
  padding: 12rpx 15rpx;
  /* background: #eee;
  color: #999999; */
  font-size: 24rpx;
}
.footer ul li:nth-of-type(2) {
  font-size: 16px;
  color: #999999;
  margin: 10px 0;
}
.footer ul li:last-of-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer ul li:last-of-type span:first-of-type {
  font-size: 30rpx;
  /* color: #666666; */
}
.footer ul li:last-of-type span:last-of-type,
.footer ul li:last-of-type span:nth-of-type(2) {
  font-size: 25rpx;
  /* color: #f56c6c; */
  padding: 15rpx 20rpx;
  /* background: #fef0f0; */
  border-radius: 5rpx;
}
.none {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 30%;
  color: #333;
}
.blues {
  font-size: 34rpx;
  padding: 8rpx 16rpx;
  border: solid 1px #cae4ff;
  color: #409eff;
  background: #ecf5ff;
}
.pinks {
  font-size: 34rpx;
  padding: 8rpx 16rpx;
  border: solid 1px #fef0f0;
  color: #f56c6c;
  background: #fef0f0;
}
.grays {
  font-size: 34rpx;
  padding: 8rpx 16rpx;
  border: solid 1px #cae4ff;
  color: red;
  background: #ecf5ff;
}
</style>
