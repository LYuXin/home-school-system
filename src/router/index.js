import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/modules/user'
import Home from '@/pages/home/index'
import Admin from '@/pages/admin/index'
import userDataManage from '@/pages/admin/user-data-manage/index'
import userInfoManage from '@/pages/admin/user-info-manage/index'
import adminManage from '@/pages/admin/admin-manage/index'
import newsManage from '@/pages/admin/news-manage/index'
import Dynamic from '@/pages/dynamic/dynamic'
import AdminLogin from '@/pages/admin-login/index'

import postdynam from '@/pages/dynamic/PostDynamci'
import personalCenter from '@/pages/PersonalCenter/PersonalCenter'
import index2 from '@/pages/lyx/index2'
import dongtai from '@/pages/lyx/dongtai'
import tabbar from '@/components/public/tabbar/tabbar'
import header from '@/components/public/header/header-share'
// import guanzhu from '@/pages/lyx/guanzhu'
// import guanzhu1 from '@/pages/lyx/guanzhu.1'
// import starguanzhu from '@/pages/lyx/starguanzhu'
// import allguanzhu from '@/pages/lyx/allguanzhu'
import personalinformation from '@/pages/lyx/personal_information'
import personal from '@/pages/lyx/personal'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: AdminLogin
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/personal',
      name: 'personal',
      component: personalCenter
    },
    {
      path: '/postdynam',
      name: postdynam,
      component: postdynam
    },
    {
      path: '/index2',
      name: 'index2',
      component: index2
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: tabbar
    },
    {path: '/header', component: header},
    {path: '/dongtai', component: dongtai},
    // {path: '/guanzhu', component: guanzhu},
    // {path: '/guanzhu1', component: guanzhu1},
    // {path: '/starguanzhu', component: starguanzhu},
    // {path: '/allguanzhu', component: allguanzhu},
    {path: '/personalinformation', component: personalinformation},
    {path: '/personal', component: personal}
  ],
  linkActiveClass: 'mui-active'
})

const asyncRouterMap = [{
  path: '/admin',
  component: Admin,
  children: [
    {
      path: '',
      component: userDataManage
    },
    {
      path: 'userInfo',
      component: userInfoManage
    },
    {
      path: 'allAdmins',
      component: adminManage
    },
    {
      path: 'news',
      component: newsManage
    }
  ]
}]

let addFlag = false

router.beforeEach((to, from, next) => {
  let isAdmin = store.state.userInfo.userRole === 'admin'
  if (isAdmin && !addFlag) {
    router.addRoutes(asyncRouterMap)
    addFlag = true
    next({...to, replace: true})
  } else if (isAdmin && to.path === '/adminLogin') {
    next('/admin')
  } else if (!isAdmin && to.path === '/admin') {
    next('/adminLogin')
  } else {
    next()
  }
})

export default router
