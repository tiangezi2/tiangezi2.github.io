<template>
  <div class="rankinglist">
    <van-nav-bar
      title="书籍详情"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    >
      <van-icon name="notes-o" slot="right" />
      <van-icon name="wap-home-o" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="男频">
        <RankingListBooks></RankingListBooks>
      </van-tab>
      <van-tab title="女频">
        <RankingListBooks></RankingListBooks>
      </van-tab>
      <van-tab title="出版">
        <RankingListBooks></RankingListBooks>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import RankingListBooks from "@/components/RankingListBooks.vue";
export default {
  components: {
    RankingListBooks
  },
  data() {
    return {
      active: ""
    };
  }
};
</script>

<style lang="less" scoped>
.rankinglist {
//   padding: 0 15px;
  .van-nav-bar {
    .van-nav-bar__title {
      font-weight: 900;
      color: #999;
    }
    .van-nav-bar__text {
      margin-left: -30px;
    }
    .van-icon {
      left: -10px;
      font-size: 20px;
      &:nth-of-type(2) {
        left: 0px;
      }
    }
  }
}
</style>
