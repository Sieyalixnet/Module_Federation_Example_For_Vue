import { createRouter, createWebHashHistory } from 'vue-router'
//createWebHashHistory,createWebHistory
import User from "./User.vue"


const routes = [
  { path: '/user', component: User, name: "user" },
]

export default routes
