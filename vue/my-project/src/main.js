// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Layout from './components/Layout'
import router from './router/index'
import vueresource from './router/index'
import elementUI from  './router/index'
import VueResource from 'vue-resource'
import ElementtUI  from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementtUI)


new Vue({
  el: '#app',
  router,
  vueresource,
  elementUI,
  components: { Layout },
  template: '<Layout/>'
})
