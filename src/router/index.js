import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EchartsPage from '../components/EchartsPage'
import User from '../components/User'
import EchartsMenu from '../components/EchartsMenu'
import EchartsContent from '../components/EchartsContent'

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/echarts',
      // name: 'EchartsMenu',
      component: EchartsPage,
      children: [{
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: '',
        name: 'EchartsMenu',
        component: EchartsMenu
      }, {
        path: 'content/:id',
        name: 'content',
        component: EchartsContent
      }]
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})



router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router
