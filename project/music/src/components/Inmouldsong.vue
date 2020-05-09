<template>
  <li class="Inmouldsong" @click="setCurrentSongId(item, index, all)">
    <div class="left" v-if="index !== undefined">{{ index + 1 }}</div>
    <dl class="center">
      {{ item.name }}
      <dd v-if="item.song">
        <span>SQ</span>
        {{ item.song.artists[0].name }}-{{ item.song.album.name }}
      </dd>
      <dd v-else>
        <span>SQ</span>
        {{ item.ar[0].name }}-{{ item.al.name }}
      </dd>
    </dl>
    <div class="right"><i class="fa fa-play-circle-o"></i></div>
  </li>
</template>

<script>
export default {
  props: ["item", "index", "all"],
  methods: {
    setCurrentSongId(item, index,all) {
      this.$emit("translate-currentid", {
        item: item,
        index: index,
        all: all
      });
    }
  }
};
</script>

<style lang="less">
.Inmouldsong {
  display: flex;
  list-style: none;
  margin: 0 0 10px 10px;
  .center {
    flex: 1;
    dd {
      font-size: 12px;
      color: #888;
      span {
        display: inline-block;
        color: #fe672e;
        border: 1px solid #fe672e;
        transform: scale(0.6);
      }
    }
  }
  .right {
    margin-right: 15px;
  }
  .left,
  .right {
    width: 30px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #888;
    i {
      font-size: 24px;
      color: #aaa;
    }
  }
}
</style>
