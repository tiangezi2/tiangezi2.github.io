<template>
  <div class="homemale">
    <AllSwipe></AllSwipe>
    <Search ></Search>
    <Classify></Classify>
    <BookLabel>热门小说</BookLabel>
    <van-swipe :loop="false" :width="80" :show-indicators="false">
      <van-swipe-item
        v-for="(item, index) in maletopbooksslice"
        :key="index"
        :item="item"
        :index="index"
        @click="getCurrentBookKeyword(item._id)"
      >
        <div>
          <img
            :src="'http://statics.zhuishushenqi.com' + `${item.cover}`"
            alt=""
          />
          <h6>{{ item.title }}</h6>
          <p>{{ item.author }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- <BookListSwipe :maletopbooksslice="maletopbooksslice"></BookListSwipe> -->
    <BookLabel>排行榜</BookLabel>
    <van-tabs type="card">
      <van-tab title="玄幻奇幻">
        <van-swipe :loop="false" :width="80" :show-indicators="false">
          <van-swipe-item
            v-for="(item, index) in malefantasybooks"
            :key="index"
            :item="item"
            :index="index"
            @click="getCurrentBookKeyword(item._id)"
          >
            <div>
              <img
                :src="'http://statics.zhuishushenqi.com' + `${item.cover}`"
                alt=""
              />
              <h6>{{ item.title }}</h6>
              <p>{{ item.author }}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab title="武侠仙侠 ">
        <van-swipe :loop="false" :width="80" :show-indicators="false">
          <van-swipe-item
            v-for="(item, index) in malexianxiabooks"
            :key="index"
            :item="item"
            :index="index"
            @click="getCurrentBookKeyword(item._id)"
          >
            <div>
              <img
                :src="'http://statics.zhuishushenqi.com' + `${item.cover}`"
                alt=""
              />
              <h6>{{ item.title }}</h6>
              <p>{{ item.author }}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </van-tab>
      <van-tab title="科幻悬疑 ">
        <van-swipe :loop="false" :width="80" :show-indicators="false">
          <van-swipe-item
            v-for="(item, index) in malesciencebooks"
            :key="index"
            :item="item"
            :index="index"
            @click="getCurrentBookKeyword(item._id)"
          >
            <div>
              <img
                :src="'http://statics.zhuishushenqi.com' + `${item.cover}`"
                alt=""
              />
              <h6>{{ item.title }}</h6>
              <p>{{ item.author }}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </van-tab>
    </van-tabs>
    <BookLabel>新书抢先</BookLabel>
    <van-swipe :loop="false" :width="80" :show-indicators="false">
      <van-swipe-item
        v-for="(item, index) in doneTodosCount"
        :key="index"
        :item="item"
        :index="index"
        @click="getCurrentBookKeyword(item._id)"
      >
        <div>
          <img
            :src="'http://statics.zhuishushenqi.com' + `${item.cover}`"
            alt=""
          />
          <h6>{{ item.title }}</h6>
          <p>{{ item.author }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <BookLabel>畅销完本</BookLabel>
    <van-swipe :loop="false" :width="80" :show-indicators="false">
      <van-swipe-item
        v-for="(item, index) in maleoverbooksslice"
        :key="index"
        :item="item"
        :index="index"
        @click="getCurrentBookKeyword(item._id)"
      >
        <div>
          <img
            :src="'http://statics.zhuishushenqi.com' + `${item.cover}`"
            alt=""
          />
          <h6>{{ item.title }}</h6>
          <p>{{ item.author }}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
    <BookLabel>分类推荐</BookLabel>
  </div>
</template>

<script>
// @ is an alias to /src
import AllSwipe from "@/components/AllSwipe.vue";
import Search from "@/components/Search.vue";
import Classify from "@/components/Classify.vue";
import BookLabel from "@/components/BookLabel.vue";
export default {
  components: {
    AllSwipe,
    Search,
    Classify,
    BookLabel
  },
  computed: {
    doneTodosCount() {
      return this.$store.state.malenewbooksslice;
    }
  },
  data() {
    return {
      value: "",
      index: 0,
      maletopid: null,
      maletopbooks: null,
      maletopbooksslice: null,
      maleoverid: null,
      maleoverbooks: null,
      maleoverbooksslice: null,
      malenewid: null,
      malenewbooks: null,
      malenewbooksslice: null,
      malefantasy: null,
      maleorientalfantasy: null,
      malefantasybooks: null,
      malexianxia: null,
      maleclassicalxianxia: null,
      malexianxiabooks: null,
      malescience: null,
      malesciencestarwars: null,
      malesciencebooks: null
    };
  },
  methods: {
    //拿热门ID 拿书单
    getTopList() {
      this.axios
        .get(
          "http://api.kele8.cn/agent/http://api.zhuishushenqi.com/ranking/gender"
        )
        .then(response => {
          // window.console.log(response);
          ({ _id: this.maletopid } = response.data.male[0]);
          this.getBookList(this.maletopid, "top");
          ({ _id: this.maleoverid } = response.data.male[5]);
          this.getBookList(this.maleoverid, "over");
          ({ _id: this.malenewid } = response.data.picture[3]);
          this.getBookList(this.malenewid, "new");
        });
    },
    //拿书单
    getBookList(id, name) {
      this.axios
        .get(
          "http://api.kele8.cn/agent/http://api.zhuishushenqi.com/ranking/" + id
        )
        .then(response => {
          // window.console.log(response);
          if (name == "top") {
            this.maletopbooks = response.data.ranking.books;
            this.maletopbooksslice = this.maletopbooks.slice(0, 8);
          }
          if (name == "over") {
            this.maleoverbooks = response.data.ranking.books;
            this.maleoverbooksslice = this.maleoverbooks.slice(0, 8);
          }
          if (name == "new") {
            this.malenewbooks = response.data.ranking.books;
            this.malenewbooksslice = this.malenewbooks.slice(0, 8);
            this.$store.commit({
              type: "getmalenewbooksslice",
              amount: this.malenewbooksslice
            });
          }
        });
    },
    getClassifyList() {
      this.axios
        .get("http://api.kele8.cn/agent/http://api.zhuishushenqi.com/cats/lv2")
        .then(response => {
          // window.console.log(response);
          ({ major: this.malefantasy } = response.data.male[0]);
          ({ mins: this.maleorientalfantasy } = response.data.male[0].mins[0]);
          this.getClassifyBookList(
            this.malefantasy,
            this.maleorientalfantasy,
            "fantasy"
          );
          ({ major: this.malexianxia } = response.data.male[3]);
          ({ mins: this.maleclassicalxianxia } = response.data.male[3].mins[0]);
          this.getClassifyBookList(
            this.malexianxia,
            this.maleclassicalxianxia,
            "xianxia"
          );
          ({ major: this.malescience } = response.data.male[10]);
          ({ mins: this.malesciencestarwars } = response.data.male[10].mins[0]);
          this.getClassifyBookList(
            this.malescience,
            this.malesciencestarwars,
            "science"
          );
        });
    },
    //拿取标签书单
    getClassifyBookList(major, mins, name) {
      this.axios
        .get(
          "http://api.kele8.cn/agent/http://api.zhuishushenqi.com/book/by-categories",
          {
            params: {
              gender: "male",
              type: "hot",
              major: major,
              minor: mins,
              start: 0,
              limit: 8
            }
          }
        )
        .then(response => {
          // window.console.log(response);
          if (name == "fantasy") {
            this.malefantasybooks = response.data.books;
          }
          if (name == "xianxia") {
            this.malexianxiabooks = response.data.books;
          }
          if (name == "science") {
            this.malesciencebooks = response.data.books;
          }
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
    this.getTopList();
    this.getClassifyList();
  }
};
</script>
<style lang="less" scoped>
.homemale {
  .van-swipe-item {
    div {
      padding: 5px;
      text-align: center;
      img {
        width: 100%;
      }
      h6 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0;
        font-size: 13px;
      }
      p {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0;
        font-size: 0.75rem;
      }
    }
  }

  ul.ranking {
    width: 100%;
    text-align: center;
    display: flex;
    li {
      flex: 1;
      display: inline-block;
      padding: 0 0.75rem;
      border: 1px solid #ed424b;
      border-radius: 4px 0 0 4px;
      &:nth-child(3) {
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
}
</style>
