import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/Male",
    children: [
      {
        path: "male",
        component: () => import("../views/HomeMale.vue")
      },
      {
        path: "female",
        component: () => import("../views/HomeFemale.vue")
      }
    ]
  },
  {
    path: "/bookdescription",
    component: () => import("../views/BookDescription.vue")
  },
  {
    path: "/mybookshelf",
    component: () => import("../views/MyBookShelf.vue")
  },
  {
    path: "/rankinglist",
    component: () => import("../views/RankingList.vue")
  },
  {
    path: "/recharge",
    component: () => import("../views/Recharge.vue")
  },
  {
    path: "/reading",
    component: () => import("../views/Reading.vue")
  },
  {
    path: "/searchbook",
    component: () => import("../views/SearchBook.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
