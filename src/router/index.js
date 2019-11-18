import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import Result from "@/views/result/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/result",
    name: "result",
    component: Result
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
