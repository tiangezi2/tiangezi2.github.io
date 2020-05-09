<template>
  <div class="classify">
    <van-row type="flex" justify="space-around">
      <van-col span="4" @click="$router.push('MyBookShelf')"
        ><i style="background-position:0 -60px;"></i>
        <h4>书架</h4></van-col
      >
      <van-col span="4" @click="$router.push('RankingList')"
        ><i style="background-position:0 0;"></i>
        <h4>排行榜</h4></van-col
      >
      <van-col span="4" @click="$router.push('HomeMale')"
        ><i style="background-position:-30px -30px;"></i>
        <h4>VIP</h4></van-col
      >
      <van-col span="4" @click="$router.push('Recharge')"
        ><i style="background-position:0 -30px;"></i>
        <h4>充值</h4></van-col
      >
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.classify {
  padding: 1rem 0;
  .van-col {
    text-align: center;
    i {
      margin: 0 auto;
      display: block;
      width: 26px;
      height: 26px;
      background-image: url("/sprite@2x.f5569.png");
      background-size: 87px 87px;
    }
    h4 {
      margin: 0;
      line-height: 2rem;
    }
  }
}
</style>
