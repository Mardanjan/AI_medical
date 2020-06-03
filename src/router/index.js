import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/', component: Foo },
    { path: '/bar', component: Bar }
  ]

const router = routes


export default router