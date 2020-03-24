import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: '/recommend',
    children: [
      {
        path: "recommend",
        component: () => import("../views/Homerecommend.vue")
      },
      {
        path: "hot",
        component: () => import("../views/Homehot.vue")
      },
      {
        path: "search",
        component: () => import("../views/Homesearch.vue")
      }
    ]
  },
  {
    path: "/Songlist",
    component: () => import("../views/Songlist.vue")
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import( '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
