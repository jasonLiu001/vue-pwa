import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'

import Vuetify from 'vuetify'
// index.js or main.js
// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

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
