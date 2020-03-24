<template>
  <div class="bookdescription">
    <van-nav-bar title="书籍详情" left-text="返回" left-arrow @click-left="$router.go(-1)">
      <van-icon name="notes-o" slot="right" />
      <van-icon name="wap-home-o" slot="right" />
    </van-nav-bar>
    <BookDetails :item="item"></BookDetails>
  </div>
</template>

<script>
import BookDetails from "@/components/BookDetails.vue";
export default {
  components: {
    BookDetails
  },
  data() {
    return {
      item: null
    };
  },
  methods: {
    getBookDescription() {
      this.axios
        .get(
          "http://api.kele8.cn/agent/http://api.zhuishushenqi.com/book/" +
            this.$route.query.id
        )
        .then(response => {
          window.console.log(response);
          ({ data: this.item } = response);
        });
    }
  },
  created() {
    this.getBookDescription();
  }
};
</script>

<style lang="less" scoped>
.bookdescription {
  padding: 0 15px;
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
