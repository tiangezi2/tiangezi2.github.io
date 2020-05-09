<template>
  <div class="home">
    <ul>
      <li @click="boyGirl = true" class="active">
        <router-link to="/male">生男</router-link>
      </li>
      <li @click="boyGirl = false">
        <router-link to="/female">生女</router-link>
      </li>
    </ul>
    <van-nav-bar left-text="三国" v-if="boyGirl">
      <van-icon name="friends-o" slot="right" />
      <van-icon name="notes-o" slot="right" />
    </van-nav-bar>
    <van-nav-bar left-text="红楼" v-else-if="!boyGirl">
      <van-icon name="friends-o" slot="right" />
      <van-icon name="notes-o" slot="right" />
    </van-nav-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      boyGirl: true
    };
  }
};
</script>

<style lang="less" scoped>
div.home {
  position: relative;
  padding: 5px 5px;
  ul {
    text-align: center;
    position: absolute;
    top: 14px;
    left: 0;
    right: 0;
    z-index: 2;
    li {
      display: inline-block;
      padding: 0 0.75rem;
      border: 1px solid #ed424b;
      border-radius: 4px 0 0 4px;
      &:nth-child(2) {
        border-radius: 0 4px 4px 0;
      }
      a {
        font-size: 1.25rem;
        color: #ed424b;
      }
      &.active {
        background-color: #ed424b;
        a {
          color: white;
        }
      }
    }
  }
  .van-nav-bar {
    padding: 0 5px;
    span {
      font-size: 1.5rem;
      color: black;
      font-weight: 900;
    }
    i {
      font-size: 2rem;
      color: #ed424b;
    }
  }
}
</style>
