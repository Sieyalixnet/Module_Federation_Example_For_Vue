import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "./Home.vue"
import News from "./News.vue"
import routes_user from "RemoteOrder/routes_user";

const routes_local = [
  { path: '/home', component: Home, name: "home" },
  { path: '/news', component: News, name: "news" },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes_local,...routes_user],
})
export default router
