<template>
  <div class="Songlist">
    <div class="go-back" @click="$router.go(-1)">
      <i class="fa fa-chevron-left"></i>
    </div>
    <!-- 有更新的时候 -->
    <div class="bbnew" v-if="songlistupdateFrequency">
      <div
        class="bg"
        :style="{
          'background-image': 'url(' + songlistbackgroundCoverUrl + ')'
        }"
      ></div>
      <div class="wrap">
        <div class="name">
          <h3 style="margin-top: 20px;">{{ songlistname }}</h3>
          <h5>{{ songlistupdateFrequency }}</h5>
          <h4>{{ songlistdescription }}</h4>
        </div>
      </div>
    </div>
    <!-- 没有更新的时候 -->
    <div class="bb" v-else-if="!songlistupdateFrequency">
      <div
        class="bg"
        :style="{ 'background-image': 'url(' + songlistcoverImgUrl + ')' }"
      ></div>
      <div class="wrap">
        <div class="img">
          <img :src="songlistcoverImgUrl" alt="" /> <span>歌单</span>
          <i class="fa fa-headphones">{{
            translatePlayCount(songlistplayCount)
          }}</i>
        </div>
        <div class="name">
          <h3>{{ songlistname }}</h3>
          <div>
            <a href="">
              <img :src="songlistavatarUrl" alt="" /> {{ songlistnickname }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="tags" v-if="!songlistupdateFrequency">
      标签:
      <em>{{ songlisttage[0] }}</em>
      <em>{{ songlisttage[1] }}</em>
      <em>{{ songlisttage[2] }}</em>
      <div class="intro">简介:</div>
    </div>

    <div>
      <div class="item">歌曲列表</div>
      <ol>
        <Inmouldsong
          v-for="(item, index) in songlisttracks"
          :key="index"
          :item="item"
          :index="index"
          :all='songlisttracks'
          @translate-currentid="$emit('translate-currentid', $event)"
        ></Inmouldsong>
      </ol>
    </div>
  </div>
</template>

<script>
import Inmouldsong from "@/components/Inmouldsong.vue";
export default {
  components: {
    Inmouldsong
  },
  data() {
    return {
      songlisttracks: null,
      songlistcoverImgUrl: null,
      songlistavatarUrl: null,
      songlistnickname: null,
      songlistname: null,
      songlisttage: [],
      songlistintro: null,
      songlistupdateFrequency: null,
      songlistdescription: null,
      songlistbackgroundCoverUrl: null,
      songlistplayCount: null
    };
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
    getSonglist(id) {
      this.axios
        .get("http://musicapi.leanapp.cn/playlist/detail", {
          params: {
            id: id
          }
        })
        .then(reponse => {
          // window.console.log(reponse.data.playlist);
          ({ tracks: this.songlisttracks } = reponse.data.playlist);
          ({ coverImgUrl: this.songlistcoverImgUrl } = reponse.data.playlist);
          ({
            avatarUrl: this.songlistavatarUrl
          } = reponse.data.playlist.creator);
          ({ nickname: this.songlistnickname } = reponse.data.playlist.creator);
          ({ name: this.songlistname } = reponse.data.playlist);
          ({ tags: this.songlisttage } = reponse.data.playlist);
          ({ description: this.songlistintro } = reponse.data.playlist);
          ({
            updateFrequency: this.songlistupdateFrequency
          } = reponse.data.playlist);
          ({ description: this.songlistdescription } = reponse.data.playlist);
          ({
            backgroundCoverUrl: this.songlistbackgroundCoverUrl
          } = reponse.data.playlist);
          ({ playCount: this.songlistplayCount } = reponse.data.playlist);
        });
    }
  },
  created() {
    window.console.log("创建");
  },
  beforeRouteEnter(to, from, next) {
    // window.console.log(to);
    // 路由进入 当前组件实例化之前就 拿数据
    // beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建
    next(vm => {
      vm.getSonglist(to.query.id);
    });
  }
};
</script>
<style lang="less">
.Songlist {
  .go-back {
    position: absolute;
    top: 5px;
    left: 15px;
    z-index: 1;
    i {
      font-size: 20px;
      color: #fff;
    }
  }
  .bbnew {
    height: 210px;
    position: relative;
    overflow: hidden;
    .bg {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .name {
      height: 100%;
      padding: 30px 15px;
      h3 {
        color: #fff;
      }
      h5 {
        display: inline-block;
        background-color: hsla(0, 0%, 100%, 0.2);
        font-size: 10px;
        color: hsla(0, 0%, 100%, 0.6);
        margin-top: 10px;
        padding: 0 3px;
      }
      h4 {
        margin-top: 20px;
        font-size: 16px;
        color: hsla(0, 0%, 100%, 0.8);
      }
    }
  }

  .bb {
    position: relative;
    overflow: hidden;
    .bg {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      filter: blur(20px);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .wrap {
      height: 100%;
      position: relative;
      padding: 30px 15px;
      display: flex;
      .img {
        position: relative;
        width: 126px;
        height: 126px;
        img {
          width: 100%;
        }
        i {
          position: absolute;
          top: 5px;
          right: 5px;
          color: white;
          font-size: 10px;
        }
        span {
          position: absolute;
          left: 0;
          top: 15px;
          font-size: 9px;
          line-height: 17px;
          background-color: rgba(217, 48, 48, 0.8);
          color: #fff;
          border-top-right-radius: 17px;
          border-bottom-right-radius: 17px;
          padding: 0 8px;
        }
      }
      .name {
        h3 {
          color: #fff;
        }
        h5 {
          display: inline-block;
          background-color: hsla(0, 0%, 100%, 0.2);
          font-size: 10px;
          color: hsla(0, 0%, 100%, 0.6);
          margin-top: 10px;
          padding: 0 3px;
        }
        h4 {
          margin-top: 20px;
          font-size: 16px;
          color: hsla(0, 0%, 100%, 0.8);
        }
        margin-left: 16px;
        flex: 1;
        div {
          margin-top: 20px;
          line-height: 14px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: normal;
          a {
            line-height: 14px;
            text-decoration: none;
            color: #fff;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: inline-block;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
  .tags {
    margin: 10px;
    font-size: 14px;
    color: #666;
    em {
      padding: 1px 8px;
      margin: 0 10px 0 0;
    }
    .intro {
      margin: 10px 0;
      // margin-left: 10px;
      font-size: 14px;
      color: #666;
    }
  }

  .item {
    padding: 0 5px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    background: #eeeff0;
  }
}
</style>
