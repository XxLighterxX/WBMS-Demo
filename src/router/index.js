import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import("../views/Login.vue"),
  },
  {
    path: '/WorkPage',
    name: 'WorkPage',
    component: () => import("../views/WorkPage.vue"),
    children: [
      {
        path: 'index',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
        name: 'index',
        component: () => import("../components/work/index/index.vue"),
      },
    ]
  },
  {
    path: '/College',
    name: 'College',
    component: () => import("../views/College.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
