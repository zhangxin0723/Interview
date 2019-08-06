<template>
  <div class="interviewDetail">
    <form action>
      <label for>
        <span>面试地址：</span>
        <input type="text" placeholder="请输入公司名称" />
      </label>
      <label for>
        <span>面试时间：</span>
        <input type="text" placeholder="2019-08-06 17:00" />
      </label>
      <label for>
        <span>联系方式：</span>
        <input type="text" placeholder="13835973692" />
      </label>
      <label for>
        <span>是否提醒：</span>
        <p>未提醒</p>
      </label>
      <label for>
        <span>面试状态：</span>
        <p>未开始</p>
      </label>
    </form>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
form {
  display: inline-block;
  width: 100%;
  padding-left: 40rpx;
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
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
}
label input {
  height: 100%;
  padding-left: 30rpx;
}
label:nth-last-child(1) {
  border-bottom: none;
}
label p {
  flex: 1;
  height: 100%;
  line-height: 100rpx;
  padding-left: 30rpx;
}
</style>