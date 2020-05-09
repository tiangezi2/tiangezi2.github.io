<template>
  <div v-if="item" class="BookDetails">
    <div class="details">
      <div class="img">
        <img
          :src="'http://statics.zhuishushenqi.com' + `${item.cover}`"
          alt=""
        />
      </div>
      <div class="desc">
        <h3>{{ item.title }}</h3>
        <span>{{ item.author }}</span
        >| <span>{{ item.minorCate }}</span
        >|
        <span>{{ parseInt(item.wordCount / 10000) }}万字</span>
        <p>最后更新时间{{ item.updated.slice(0, 10) }}</p>
      </div>
    </div>
    <div class="button">
      <a href=""><i>加入书架</i></a>
      <a href="" @click="$router.push('Reading')"><i>开始阅读</i></a>
    </div>
    <hr />
    <div class="popularity">
      <p>
        <span>追人气</span
        ><span>{{ parseInt(item.latelyFollower / 10000) }}万</span>
      </p>
      <p>
        <span>读者留存率</span><span>{{ item.retentionRatio }}%</span>
      </p>
      <p>
        <span>日更字数/天</span><span>{{ item.serializeWordCount }}</span>
      </p>
    </div>
    <hr />
    <div class="intro">
      <p>{{ item.longIntro }}</p>
      <van-icon name="arrow-down" @click="unfold" />
    </div>
    <hr />
    <div class="section">
      目录
      <span>[{{ item.updated.slice(0, 10) }} ]{{ item.lastChapter }}</span>
      <van-icon name="arrow" />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      condition: true,
    };
  },
  methods: {
    unfold() {
      if (this.condition) {
        this.$el.querySelector(".intro p").classList.add("active");
        this.condition = false;
      } else {
        this.$el.querySelector(".intro p").classList.remove("active");
        this.condition = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.BookDetails {
  padding: 15px 0;
  .details {
    margin-bottom: 15px;
    display: flex;
    .img {
      flex: 1;
      img {
        width: 130%;
      }
    }
    .desc {
      margin-left: 30px;
      flex: 3;
      span:nth-of-type(1) {
        color: #b93321;
      }
    }
  }
  .button {
    margin-bottom: 30px;
    a {
      float: left;
      text-align: center;
      &:nth-child(2) {
        float: right;
      }
      i {
        font-style: normal;
        display: inline-block;
        border: 1px solid #b93321;
        padding: 10px 40px;
        border-radius: 5px;
      }
      &:nth-child(1) {
        i {
          color: #b93321;
        }
      }
      &:nth-child(2) {
        i {
          background: #b93321;
          color: #fff;
        }
      }
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .popularity {
    display: flex;
    text-align: center;
    p {
      flex: 1;
      span {
        display: block;
        margin-bottom: 5px;
        &:nth-of-type(1) {
          color: #999;
        }
        &:nth-of-type(2) {
          color: #000;
        }
      }
    }
  }
  .intro {
    position: relative;
    p {
      line-height: 24px;
      font-size: 13px;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    p.active {
      display: block;
    }
    .van-icon {
      position: absolute;
      right: 0;
      bottom: -10px;
      color: #999;
    }
  }
  .section {
    position: relative;
    color: #000;
    span {
      margin-right: 15px;
      float: right;
      max-width: 60%;
      font-size: 13px;
      color: #999;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .van-icon {
      position: absolute;
      top: 0;
      right: 0;
      color: #999;
    }
  }
}
</style>
