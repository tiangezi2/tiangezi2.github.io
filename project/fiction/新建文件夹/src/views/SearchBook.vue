<template>
  <div class="search">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    >
      <van-icon name="notes-o" slot="right" />
      <van-icon name="wap-home-o" slot="right" />
    </van-nav-bar>
    <form action="/">
      <van-search
        v-model.trim="value"
        placeholder="请输入搜索关键词"
        show-action
      />
    </form>

    <template v-if="!value">
      <div class="hotSearch">
        <h5>热门搜索</h5>
        <ul class="content">
          <li v-for="(item, index) in searchHotWords" :key="index">
            {{ item.word }}
          </li>
        </ul>
      </div>
      <div class="hotBooks">
        <h5>热门书籍</h5>
        <ul class="content">
          <li
            v-for="(item, index) in newHotWords"
            :key="index"
            @click="getCurrentBookKeyword(item.book)"
          >
            {{ item.word }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchHotWords: null,
      value: null,
      search: null,
      newHotWords: null
    };
  },
  methods: {
    getHotSearchWord() {
      this.axios.get("http://novel.kele8.cn/search-hotwords").then(response => {
        // window.console.log(response);
        ({ searchHotWords: this.searchHotWords } = response.data);
        this.searchHotWords = this.searchHotWords.slice(0, 6);
      });
    },
    getHotSearchBooks() {
      this.axios.get("http://novel.kele8.cn/hot-books").then(response => {
        // window.console.log(response);
        ({ newHotWords: this.newHotWords } = response.data);
      });
    },
    getCurrentBookKeyword(id) {
      // 跳转路由
      this.$router.push({
        path: "/BookDescription",
        query: { id: id }
      });
    }
  },
  created() {
    this.getHotSearchWord();
    this.getHotSearchBooks();
  }
};
</script>

<style lang="less" scoped>
.search {
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
  form {
    .van-search {
      .van-search__content {
        border-radius: 34px;
      }
    }
  }
  .hotSearch {
    padding: 15px 9px 0;
    h5 {
      font-size: 12px;
      line-height: 12px;
      color: #666;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 7px;
      li {
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 30px;
        color: #333;
        border: 1px solid #d3d4da;
        border-radius: 15px;
      }
    }
  }
  .hotBooks {
    padding: 15px 9px 0;
    h5 {
      font-size: 12px;
      line-height: 12px;
      color: #666;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 7px;
      li {
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 14px;
        font-size: 14px;
        line-height: 30px;
        color: #333;
        border: 1px solid #d3d4da;
        border-radius: 15px;
      }
    }
  }
}
</style>
