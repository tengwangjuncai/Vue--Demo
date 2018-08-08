// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './TodoList'
// import router from './router'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  // router,
  components: { TodoList },
  template: '<TodoList/>'
})
