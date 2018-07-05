import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/Home'
import AboutPage from '../pages/About'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: HomePage
  }, {
    path: '/About',
    component: AboutPage
  }
]

export default new Router({
  routes: routes
})
