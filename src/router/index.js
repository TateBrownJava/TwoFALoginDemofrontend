import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect:'/login',
    },
    {
      path:'/login',
      component:()=>import('@/views/login/login.vue'),
      name:'login',
      desc:'登录',
      meta:{allowBack:false},
    },
    {
      path:'/hello',
      component:()=>import('@/views/hello.vue'),
      name:'hello',
      desc:'你好',
    }
  ]
})
