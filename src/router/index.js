import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }, {
      path: '/wordManager',
      name: 'wordManager',
      component: () => import('@/views/word/index'),
    }, {
      path: '/neo4j',
      name: 'neo4j',
      component: () => import('@/views/neo4j/index'),
    }, {
      path: '/excel',
      name: 'excel',
      component: () => import('@/views/excel/index'),
    }, {
      path: '/testWebSocket',
      name: 'websocket',
      component: () => import('@/views/websocket/index'),
    },
  ]
})
