<template>
  <div class="player">
    <audio :src="currentSongSrc" controls autoplay></audio>
    <div class="myplayer">
      <div class="img" @click="showFullPlayer = true">
        <img :class="{ stop: !condition }" :src="playerpicUrl" alt="" />
      </div>
      <h3 @click="showFullPlayer = true">
        {{ playerName }}-{{ playerArName }}
      </h3>
      <div>
        <i class="fa fa-play" v-if="!condition" @click="condition = true"></i>
        <i
          class="fa fa-pause"
          v-else-if="condition"
          @click="condition = false"
        ></i>
      </div>
      <i class="fa fa-list-ul"></i>
    </div>
    <template v-if="showFullPlayer">
      <div class="bb" :style="{ 'background-image': `url(${playerpicUrl})` }">
        <div
          class="showFullPlayer"
          :style="{ 'background-image': `url(${playerpicUrl})` }"
        ></div>
        <div class="ab">
          <i
            class="fa fa-chevron-left goback"
            @click="showFullPlayer = false"
          ></i>
          <div class="img">
            <img class="img" src="/needle-ip6.png" alt="" />
            <div class="bg" @click="condition = !condition">
              <img class="play" v-if="!condition" src="/下载.png" alt="" />
              <img
                class="playerpic"
                :src="playerpicUrl"
                alt=""
                :class="{ stop: !condition }"
              />
            </div>
          </div>
          <div class="songlrc">
            <h3 class="songname">
              <span>{{ playerName }}</span
              >-
              <p>{{ playerArName }}</p>
            </h3>
            <div class="lrc">32123123123123121</div>
          </div>
          <div class="bar" @click="clickBar">
            <div :style="{ width: ` ${currentTime}` }"></div>
            <span :style="{ left: `${currentTime}` }"></span>
          </div>
          <div class="control">
            <i></i>
            <i @click="prev"></i>
            <i
              v-if="!condition"
              @click="condition = !condition"
              style="background-position: 0 0;"
            ></i>
            <i
              v-else-if="condition"
              @click="condition = !condition"
              style="background-position: -35px 0;"
            ></i>
            <i @click="next"></i>
            <i></i>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: ["currentSongId"],
  data() {
    return {
      currentSongDetail: null,
      condition: true,
      showFullPlayer: false,
      playerpicUrl: null,
      playerName: null,
      playerArName: null,
      currentTime: 0,
      animateId: null
    };
  },
  computed: {
    //拿歌
    currentSongSrc() {
      return (
        "https://music.163.com/song/media/outer/url?id=" +
        this.currentSongId.all[this.currentSongId.index].id +
        ".mp3"
      );
    }
  },
  methods: {
    // 拿数据
    getSonglist() {
      this.axios
        .get("http://musicapi.leanapp.cn/song/detail", {
          params: {
            ids: this.currentSongId.all[this.currentSongId.index].id
          }
        })
        .then(response => {
          // window.console.log(response);
          ({ picUrl: this.playerpicUrl } = response.data.songs[0].al);
          ({ name: this.playerName } = response.data.songs[0]);
          ({ name: this.playerArName } = response.data.songs[0].ar[0]);
          this.currentSongDetail = response.data.songs[0];
        });
    },
    // 暂停播放
    audioPlayPause() {
      let audio = this.$el.querySelector("audio");
      if (!this.condition) {
        audio.pause();
        // window.console.log("zzzzz");
        this.$el.querySelector("img").classList.add("stop");
      } else {
        audio.play();
        this.$el.querySelector("img").classList.remove("stop");
    
      }
    },
    //更新进度条
    updatedWidthLeft() {
      let audio = this.$el.querySelector("audio");
      let id = window.setInterval(() => {
        // window.console.log("tt");
        this.currentTime = (audio.currentTime / audio.duration) * 100 + "%";
      }, 500);
      return id;
    },
    //点击滚动条
    clickBar(e) {
      // window.console.log(e);
      let audio = this.$el.querySelector("audio");
      audio.currentTime = (e.offsetX / 335) * audio.duration;
      this.currentTime = (e.offsetX / 355) * 100 + "%";
    },
    //下一首
    next() {
      if (this.currentSongId.index > this.currentSongId.all.length - 1) {
        this.currentSongId.index;
      } else {
        this.currentSongId.index++;
      }
      this.getSonglist();
      this.condition = true;
    },
    //上一首
    prev() {
      if (this.currentSongId.index < 1) {
        this.currentSongId.index;
      } else {
        this.currentSongId.index--;
      }
      this.getSonglist();
      this.condition = true;
    }
  },
  // 开始拿数据
  created() {
    this.getSonglist();
  },
  watch: {
    //监听拿数据
    currentSongId: function() {
      this.getSonglist();
    },
    //监听播放时间
    currentTime() {
      if (this.currentTime == "100%") {
        this.next();
      }
    },
    //监听播放状态
    condition() {
      this.audioPlayPause();
      if (!this.condition) {
        window.clearInterval(this.animateId);
      } else {
        window.clearInterval(this.animateId);
        this.animateId = this.updatedWidthLeft();
      }
    },
    currentSongDetail() {
      // 第一次进入 后面每次更新
      this.$nextTick(function() {
        window.clearInterval(this.animateId);
        this.animateId = this.updatedWidthLeft();
      });
    }
  }
};
</script>
<style lang="less">
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  // audio {
  //   height: 60px;
  //   width: 100%;
  // }
  .myplayer {
    border-radius: 36px;
    display: flex;
    border-top: 1px solid lightgray;
    background: rgba(255, 255, 255, 0.95);
    padding: 7px 10px;
    line-height: 36px;
    .img {
      position: relative;
      width: 50px;
      height: 36px;
      img {
        width: 100%;
        border-radius: 50%;
        position: absolute;
        top: -16px;
        left: 0;
        animation: tian 5s linear infinite;
        &.stop {
          animation-play-state: paused;
        }
      }
      @keyframes tian {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    h3 {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      flex: 1;
      margin: 0 10px;
    }
    i {
      margin: auto 10px;
    }
  }
  .bb {
    position: relative;
    .showFullPlayer {
      width: 100vw;
      height: 100vh;
      background-color: #161824;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      transform: scale(1.5);
      transform-origin: center top;
      position: relative;
      filter: blur(5px);
      &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
    .ab {
      width: 100%;
      position: absolute;
      top: 0;
      .goback {
        position: absolute;
        top: 15px;
        left: 15px;
        color: #fff;
        font-size: 20px;
      }
      .img {
        width: 100%;
        img.img {
          position: absolute;
          top: 0;
          left: 170px;
          width: 96px;
          height: 137px;
          z-index: 2;
        }
        .bg {
          background-image: url("/disc-ip6.png");
          position: relative;
          margin: 0 auto;
          margin-top: 70px;
          width: 300px;
          height: 300px;
          background-size: 100%;
          display: flex;
          .play {
            position: absolute;
            z-index: 2;
            width: 56px;
            height: 56px;
            pointer-events: none;
            font-size: 50px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .playerpic {
            margin: auto;
            width: 62%;
            border-radius: 50%;
            animation: tian 10s linear infinite;
            &.stop {
              animation-play-state: paused;
            }
          }
        }
      }
    }
    .songlrc {
      margin-top: 25px;
      text-align: center;
      color: #fff;
      width: 100%;
      height: 120px;
      span {
        font-size: 20px;
      }
      p {
        display: inline;
      }
    }
    .bar {
      position: relative;
      margin: 50px 20px;
      height: 10px;
      background: rgba(255, 0, 0, 0.5);
      border-radius: 10px;
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 10px;
        background: rgba(255, 0, 0, 0.8);
        border-radius: 10px;
        transition: all 0.5s;
      }
      span {
        position: absolute;
        top: 50%;
        left: 0;
        width: 15px;
        height: 15px;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.5s;
        transform: translate(0, -50%);
      }
    }
    .control {
      display: flex;
      i {
        flex: 1;
        width: 40px;
        height: 40px;
        margin: 0 20px;
        background-image: url("/player.png");
        background-repeat: no-repeat;
        background-size: 300%;
        //56 163 183
        &:nth-child(1) {
          height: 20px;
          background-position: 0 -163px;
        }
        &:nth-child(2) {
          height: 30px;
          background-size: 480%;
          background-position: 0 -35px;
        }
        &:nth-child(3) {
          background-size: 500%;
          background-position: 0 0;
        }
        &:nth-child(4) {
          height: 30px;
          background-size: 480%;
          background-position: 0 -64px;
        }

        &:nth-child(5) {
          height: 20px;
          background-position: 0 -204px;
        }
      }
    }
  }
}
</style>
