<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item
        @click="getCurrentBookKeyword('54ffbbdca671a65907cb264e')"
      ></van-swipe-item>
      <van-swipe-item
        @click="getCurrentBookKeyword('5c6fd0e2dae38c4f0189cacd')"
      ></van-swipe-item>
      <van-swipe-item
        @click="getCurrentBookKeyword('5a683fd73f334879bf296326')"
      ></van-swipe-item>
      <van-swipe-item
        @click="getCurrentBookKeyword('5c090e92f4347c3f4064243c')"
      ></van-swipe-item>
      <van-swipe-item
        @click="getCurrentBookKeyword('5dd6638f473248e8a0eb99d3')"
      ></van-swipe-item>
      <van-swipe-item
        @click="getCurrentBookKeyword('5ddb316c66ecace5aee7ebfb')"
      ></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  methods: {
    getCurrentBookKeyword(id) {
      // 跳转路由
      this.$router.push({
        path: "/BookDescription",
        query: { id: id }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.swipe {
  .van-swipe {
    width: 100%;
    height: 40vw;
    .van-swipe-item {
      &:nth-child(1) {
        background: url("https://plf-new.zhuishushenqi.com/management/images/20191227/44b8da9d857448229a14894fbc9a08a5.jpg")
          no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(2) {
        background: url("https://plf-new.zhuishushenqi.com/management/images/20191218/8ff1cffb162446149bf9cf268a075347.jpg")
          no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(3) {
        background: url("https://plf-new.zhuishushenqi.com/management/images/20191227/65382c7e86c143448daa840031c47069.jpg")
          no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(4) {
        background: url("https://plf-new.zhuishushenqi.com/management/images/20191218/3e86af2d9d374766b1a843eb9520dd15.jpg")
          no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(5) {
        background: url("https://plf-new.zhuishushenqi.com/management/images/20191227/ea1ed1f79327419087fcf3cce35c91ce.jpg")
          no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(6) {
        background: url("https://plf-new.zhuishushenqi.com/management/images/20191210/ad193aca91b14f7293c931d15bd75b91.jpg")
          no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
