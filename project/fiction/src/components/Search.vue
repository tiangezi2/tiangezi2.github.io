<template>
  <div class="Search">
    <van-search
      disabled="true"
      placeholder="亏成首富从游戏开始"
      v-model="value"
      @click="$router.push('SearchBook')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:null
    }
  },
};
</script>

<style lang="less" scoped>
.van-search {
  text-align: center;
  .van-search__content {
    border-radius: 10px;
    i {
      line-height: 2rem;
    }
    input {
      line-height: 2rem;
      &::placeholder {
        font-size: 1rem;
        text-align: center;
      }
    }
  }
}
</style>
