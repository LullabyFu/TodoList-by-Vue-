import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Article from './views/Article.vue'
import TodaySZ from './views/TodaySZ.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todolist',
      name: 'todolist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Todolist.vue')
    },
    {
      path: '/article',
      name: 'hello-world',
      component: Article
    },
    {
      path:'/TodaySZ',
      name: 'todaysz',
      component: TodaySZ
    }
  ]
})
