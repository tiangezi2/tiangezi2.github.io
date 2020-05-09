<template>
  <div class="recommend">
    <Inmouldlabel>推荐歌单</Inmouldlabel>
    <ul class="card">
      <Inmouldcard
        v-for="(item, index) in songcard"
        :key="index"
        :item="item"
      ></Inmouldcard>
    </ul>
    <Inmouldlabel>最新音乐</Inmouldlabel>
    <Inmouldsong
      v-for="(item, index) in songlist"
      :key="index"
      :item="item"
      :index="index"
      :all='songlist'
      @translate-currentid="$emit('translate-currentid', $event)"
    ></Inmouldsong>
  </div>
</template>

<script>
// @ is an alias to /src
import Inmouldlabel from "@/components/Inmouldlabel.vue";
import Inmouldcard from "@/components/Inmouldcard.vue";
import Inmouldsong from "@/components/Inmouldsong.vue";

export default {
  name: "Homerecommend",
  components: {
    Inmouldlabel,
    Inmouldcard,
    Inmouldsong
  },
  data() {
    return {
      songcard: [],
      songlist: []
    };
  },
  methods: {
    getSongcard() {
      this.axios
        .get("http://musicapi.leanapp.cn/personalized?limit=6")
        .then(response => {
          ({ result: this.songcard } = response.data);
          // window.console.log(response)
        });
    },
    getSonglist() {
      this.axios
        .get(
          "http://api.kele8.cn/agent/http://musicapi.leanapp.cn/personalized/newsong"
        )
        .then(response => {
          ({ result: this.songlist } = response.data);
          // window.console.log(response);
        });
    }
  },
  created() {
    // 组件创建完成 拿数据
    this.getSongcard();
    this.getSonglist();
  }
};
</script>
<style lang="less">
ul.card {
  display: flex;
  flex-wrap: wrap;
  li.card {
    flex: 1 0 30%;
    &:nth-child(3n + 2) {
      margin: 0 5px;
    }
  }
}
</style>
