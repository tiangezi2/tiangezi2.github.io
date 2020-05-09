<template>
  <div class="hot">
    <div class="bg">
      <div class="hotop">
        <div class="img"></div>

        <!-- <img src="/index_icon_2x.png" alt="" /> -->
        <p>更新日期:01月02日</p>
      </div>
    </div>
    <Inmouldsong
      v-for="(item, index) in hotsong"
      :key="index"
      :item="item"
      :index="index"
      :all="hotsong"
      @translate-currentid="$emit('translate-currentid', $event)"
    ></Inmouldsong>
  </div>
</template>

<script>
// @ is an alias to /src
import Inmouldsong from "@/components/Inmouldsong.vue";
export default {
  components: {
    Inmouldsong
  },
  data() {
    return {
      hotsong: null
    };
  },
  methods: {
    getHotSong() {
      this.axios
        .get("http://musicapi.leanapp.cn/top/list?idx=1")
        .then(response => {
          ({ tracks: this.hotsong } = response.data.playlist);
          // window.console.log(this.hotsong);
        });
    }
  },
  created() {
    // 组件创建完成 拿数据
    this.getHotSong();
  }
};
</script>
<style lang="less">
.hot {
  .bg {
    height: 146px;
    position: relative;
    background-image: url("/hot_music_bg_3x.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: flex;
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .hotop {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 2;
      padding-left: 20px;
      .img {
        background-image: url("/index_icon_2x.png");
        background-repeat: no-repeat;
        background-size: 166px 97px;
        width: 142px;
        height: 67px;
        background-position: -24px -30px;
      }
      p {
        margin-top: 10px;
        color: hsla(0, 0%, 100%, 0.8);
        font-size: 12px;
      }
    }
  }
}
</style>
