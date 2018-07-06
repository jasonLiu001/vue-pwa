import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: {App}
})
