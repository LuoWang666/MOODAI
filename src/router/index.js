import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout/index.vue'),
    children: [
      {
        path: '/home', //默认子路由
        name: 'home',
        component: () => import('../views/Home/HomeView.vue')
      },

      {
        path: '/test',
        name: 'test',
        component: () => import('../views/Test/index2.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/My/index3.vue')
      }
    ]
  },
  {
    path: '/counseling',
    name: 'counseling',
    component: () => import('../views/Counseling/index1.vue')
  },
  {
    path: '/user/profile',
    name: 'user-profile',
    component: () => import('../views/user-profile')
  }
]

const router = new VueRouter({
  routes
})

export default router
