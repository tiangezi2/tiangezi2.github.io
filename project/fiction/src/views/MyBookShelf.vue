<template>
  <div class="mybookshelf">
    <van-nav-bar
      title="我的书架"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    >
      <van-icon name="notes-o" slot="right" />
      <van-icon name="wap-home-o" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="我的书架">
        <div class="book">
          <div class="img">
            <img
              src="http://img.1391.com/api/v1/bookcenter/cover/1/2217899/2217899_290f653eb89649acbec46b2a74aed913.jpg"
              alt=""
            />
          </div>
          <div class="title">
            <h6>都市之最强狂兵（又名：都市狂枭）</h6>
            <p>阅读到第一章</p>
          </div>
          <van-icon name="todo-list-o" @click="$router.push({ path: 'BookDescription', query: { id: '59305ea9eeecff1975986572' }})"/>
        </div>
        <hr />
        <div class="book">
          <div class="img">
            <img
              src="http://img.1391.com/api/v1/bookcenter/cover/1/3394426/3394426_30bf065d3fe14492be534ddf47251d69.png"
              alt=""
            />
          </div>
          <div class="title">
            <h6>龙王殿</h6>
            <p>阅读到第一章</p>
          </div>
          <van-icon name="todo-list-o" @click="$router.push({ path: 'BookDescription', query: { id: '5d177739412b1f0f004f4be9' }})"/>
        </div>
        <hr />
        <div class="book">
          <div class="img">
            <img
              src="http://img.1391.com/api/v1/bookcenter/cover/1/683354/683354_996a2602a15d41ffac563490c2f9e5c1.jpg"
              alt=""
            />
          </div>
          <div class="title">
            <h6>最强狂兵</h6>
            <p>阅读到第一章</p>
          </div>
          <van-icon name="todo-list-o" @click="$router.push({ path: 'BookDescription', query: { id: '548d9c17eb0337ee6df738f5' }})"/>
        </div>
      </van-tab>
      <van-tab title="阅读记录"
        ><div class="record">
          <h5>还没有阅读记录去书城逛逛吧！</h5>
        </div></van-tab
      >
    </van-tabs>
    <a href=""><i>去书城随便逛逛</i></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:''
    }
  },
};
</script>

<style lang="less" scoped>
.mybookshelf {
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

  .book {
    display: flex;
    padding: 15px 15px 0 0;
    .img {
      flex: 0.25;
      img {
        width: 100%;
      }
    }
    .title {
      flex: 1;
      h6,
      p {
        margin: 0 0 0 15px;
      }
      h6 {
        color: black;
      }
      p {
        color: #999;
      }
    }
    .van-icon {
      line-height: 85px;
      font-size: 21px;
      flex: 0.1;
    }
  }
  .record {
    text-align: center;
  }
  a {
    display: block;
    margin: 25px 85px 0;
    i {
      padding: 10px 30px;
      color: #cf1b1b;
      font-style: normal;
      display: inline-block;
      border: #cf1b1b 1px solid;
    }
  }
}
</style>
