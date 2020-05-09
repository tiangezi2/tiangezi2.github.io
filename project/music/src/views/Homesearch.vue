<template>
  <div class="search">
    <form class="search-input">
      <input
        type="text"
        v-model.trim="inputValue"
        placeholder="搜索歌曲、歌手、专辑"
      />
      <button
        v-if="inputValue"
        @click="inputValue = null"
        class="reset"
      ></button>
    </form>

    <template v-if="!inputValue">
      <div class="hotSearch">
        <h5>热门搜索</h5>
        <ul class="content">
          <li v-for="(item, index) in hotSearch" :key="index">
            {{ item.first }}
          </li>
        </ul>
      </div>
      <div class="history">历史记录</div>
    </template>

    <template v-if="inputValue && !searchMultimatch">
      <ul>
        <li v-for="(item, index) in searchSuggests" :key="index">
          {{ item.keyword }}
        </li>
      </ul>
    </template>

    <template>
      <div class="Inmouldsong">
        <!-- <Inmouldsong></Inmouldsong> -->
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
// import Inmouldsong from "@/components/Inmouldsong.vue";
export default {
  components: {
    // Inmouldsong
  },
  data() {
    return {
      loading: false,
      hotSearch: [],
      inputValue: null,
      searchSuggests: [],
      searchMultimatch: null
    };
  },
  methods: {
    getHotSearch() {
      this.axios.get("http://musicapi.leanapp.cn/search/hot").then(response => {
        ({ hots: this.hotSearch } = response.data.result);
      });
    },
    getSearchSuggest() {
      this.loading = true;
      this.axios
        .get("http://music.kele8.cn/search/suggest", {
          params: {
            keywords: this.inputValue,
            type: "mobile"
          }
        })
        .then(response => {
          window.console.log(response);

          ({ allMatch: this.searchSuggests } = response.data.result);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },

  getSearchMultimatch() {
    this.loading = true;
    this.axios
      .get("http://music.kele8.cn/search/multimatch", {
        params: {
          keywords: this.inputValue
        }
      })
      .then(response => {
        ({ result: this.searchMultimatch } = response.data);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  created() {
    this.getHotSearch();
  },
  watch: {
    inputValue(newValue) {
      if (newValue) {
        this.getSearchSuggest();
      }
    }
  }
};
</script>
<style lang="less">
.search {
  .search-input {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    padding: 15px 10px;
    input {
      background-color: rgb(235, 236, 236);
      color: #333;
      width: 100%;
      height: 30px;
      padding: 0 30px;
      border-radius: 15px;
      border: none;
      outline: none;
      &::placeholder {
        color: #c9c9c9;
      }
    }
    &::before,
    .reset {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      top: 23px;
      left: 15px;
      background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==");
    }
    .reset {
      left: auto;
      right: 15px;
      border: none;
      outline: none;
      background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==");
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
}
</style>
