import { createRouter, createWebHashHistory } from 'vue-router'
//createWebHashHistory,createWebHistory
import Home from "./Home.vue"
import News from "./News.vue"
import User from "./User.vue"

const router = createRouter({

  history: createWebHashHistory(),
  routes: [
    { path: '/home', component: Home, name: "home" },
    { path: '/user', component: User, name: "user" },
    { path: '/news', component: News, name: "news" },
  ],


})
export default router
