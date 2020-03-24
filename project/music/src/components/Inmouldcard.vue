<template>
  <li class="card" @click="cardClick(item.id)">
    <div class="img">
      <img :src="item.picUrl" alt="" />
      <i class="fa fa-headphones">{{ translatePlayCount(item.playCount) }}</i>
    </div>
    <div class="name">{{ item.name }}</div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    translatePlayCount(n) {
      if (n > 99999999) {
        return (n / 100000000).toFixed(2) + "亿";
      }
      if (n > 9999) {
        return (n / 10000).toFixed(1) + "万";
      }
    },
    cardClick(param) {
      this.$router.push({ path: "Songlist", query: { id: param } });
    }
  }
};
</script>

<style lang="less">
.card {
  .img {
    position: relative;
    i {
      position: absolute;
      top: 5px;
      right: 5px;
      color: white;
      font-size: 10px;
    }
  }
  .name {
    color: #333;
    display: -webkit-box;
    font-size: 14px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 5px 10px 5px;
  }
}
</style>
