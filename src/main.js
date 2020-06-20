import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import '@/styles/index.css' // global css
Vue.use(VueRouter)

const routes = [
  { path: '/', component: () => import('@/views/index/index') },
  { path: '/about', component: () => import('@/views/about/index') },
  { path: '/server', component: () => import('@/views/server/index') },
  { path: '/case', component: () => import('@/views/case/index') },
  { path: '/hezuoyiyuan', component: () => import('./views/hezuoyiyuan/index') },
  { path: '/login', component: () => import('./views/system/login') },
  { path: '/register', component: () => import('./views/system/zhuce') },
  { path: '/bingli' , component: ()=> import('./views/bingli/bingli') },
  { path: '/data' , component: ()=> import('./views/bingli/data') },
  { path: '/detail' , component: ()=> import('./views/bingli/detail') },
  { path: '/datas' , component: ()=> import('./views/bingli/datas') },
  { path: '/fenxi', component: () => import('./views/system/fenxi')}
]

const router = new VueRouter({ routes })

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
