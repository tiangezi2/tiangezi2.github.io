<template>
  <div class="home">
    <header>
      <div>
        <img src="../assets/371087999.jpeg" alt="" />
        <b>车载音乐</b>
      </div>
    </header>
    <ul id="nav">
      <li><router-link to="/recommend">每日推荐</router-link></li>
      <li><router-link to="/hot">热歌榜</router-link></li>
      <li><router-link to="/search">搜索</router-link></li>
    </ul>
    <keep-alive>
      <router-view
        @translate-currentid="$emit('translate-currentid', $event)"
      ></router-view>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {}
};
</script>
<style lang="less">
div.home {
  header {
    padding: 0 10px;
    display: flex;
    width: 100%;
    height: 84px;
    background-color: #d43c33;
    div {
      margin: auto;
      width: 100%;
      height: 25px;
      line-height: 25px;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
        margin-right: 10px;
      }
      b {
        display: inline-block;
        color: #fff;
        font-size: 20px;
      }
    }
  }
  ul#nav {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      a {
        text-decoration: none;
        display: inline-block;
        line-height: 40px;
        color: #333333;
        &.router-link-exact-active {
          color: red;
          border-bottom: 2px solid red;
        }
      }
    }
  }
}
</style>
