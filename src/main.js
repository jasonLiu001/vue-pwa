import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// 支持的字体预设 https://github.com/vuetifyjs/vuetify/blob/dev/src/components/Vuetify/mixins/icons.js
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: {App}
})
