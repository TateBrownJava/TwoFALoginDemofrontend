// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import {Loading,MessageBox,Message} from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

import VueCookie from 'vue-cookie'
import '@/assets/scss/index.scss'
import 'font-awesome/css/font-awesome.min.css'
import axois from '@/common/http'
import i18n from './lang' // Internationalization
import store from './store'
import '@/icons'
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueCookie);
Vue.use(Loading.directive);
Vue.prototype.$http = axois;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
