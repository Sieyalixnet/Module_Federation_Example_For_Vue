import { createRouter, createWebHashHistory } from 'vue-router'
//createWebHashHistory,createWebHistory
import Home from "./Home.vue"
import News from "./News.vue"
import User from "./User.vue"
const routes1 = [{ path: '/home', component: Home, name: "home" },
{ path: '/user', component: User, name: "user" }]
const routes2 = [{ path: '/news', component: News, name: "news" }]

const router = createRouter({

  history: createWebHashHistory(),
  routes: [
    ...routes1,...routes2
  ],


})


export default router
