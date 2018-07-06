import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// 支持的字体预设 https://github.com/vuetifyjs/vuetify/blob/dev/src/components/Vuetify/mixins/icons.js
Vue.use(Vuetify, {
  iconfont: 'mdi' // 使用materialdesignicons.com字体图标支持，其他字体:如Font-Awesome的值需要同时修改 'md' || 'mdi' || 'fa' || 'fa4'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App></App>',
  components: {App}
})
