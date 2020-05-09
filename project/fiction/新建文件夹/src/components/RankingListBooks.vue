<template>
  <div class="RankingListBooks">
    <van-tree-select
      height="120vw"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <van-image
          v-if="activeIndex === 0"
          src="https://img.yzcdn.cn/vant/apple-1.jpg"
        />
        <van-image
          v-if="activeIndex === 8"
          src="https://img.yzcdn.cn/vant/apple-2.jpg"
        />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "畅销榜" },
        { text: "最热榜" },
        { text: "潜力榜" },
        { text: "飙升榜" },
        { text: "热搜榜" },
        { text: "完结榜" },
        { text: "好评榜" },
        { text: "VIP榜" },
        { text: "留存榜" }
      ]
    };
  }
};
</script>

<style lang="less" scoped></style>
