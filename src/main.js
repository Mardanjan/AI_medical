import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import '@/styles/index.css' // global css
// import jlPopup from './CustomComponents/Popup.vue';
import jlPopup from './components/Dialog/index2.vue';
import ConnectUs from './components/Dialog/connectUs.vue'
Vue.component('ConnectUs', ConnectUs)
Vue.component('jlPopup', jlPopup)

Vue.use(VueRouter)

  
const routes = [
  {
    path: '/',
    component: () => import('@/views/index/index'),
    name: 'index',
    meta: { title: '首页' }
  },
  {
    path: '/about',
    component: () => import('@/views/about/index'),
    name: 'about',
    meta: { title: '关于我们' }
  },
  {
    path: '/server',
    component: () => import('@/views/server/index'),
    name: 'server',
    meta: { title: '服务' }
  },
  {
    path: '/case',
    component: () => import('@/views/case/index'),
    name: 'case',
    meta: { title: '案列' }
  },
  {
    path: '/hezuoyiyuan',
    component: () => import('./views/hezuoyiyuan/index'),
    meta: { title: '合作医院' }
  }, {
    path: '/login', component: () => import('./views/system/login')
  },
  {path: '/fenxi', component: () => import('./views/system/fenxi')},
  {path: '/register', component: () => import('./views/system/zhuce')},
  {path: '/bingli' , component: ()=> import('./views/bingli/bingli')},
  {path: '/data' , component: ()=> import('./views/bingli/data')},
  {path: '/detail' , component: ()=> import('./views/bingli/detail')},
  {path: '/datas' , component: ()=> import('./views/bingli/datas')},
  
]


const router = new VueRouter({
  // mode: 'history',
  routes
})

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
