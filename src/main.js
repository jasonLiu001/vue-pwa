import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

// enable router support
Vue.use(Router)

// define some routes
const routes = [
  {
    path: '/',
    component: HomePage
  }, {
    path: '/About',
    component: AboutPage
  }
]

// defined a router
const router = new Router({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App></App>',
  components: {
    App, HomeComponent: HomePage, AboutComponent: AboutPage
  }
})
