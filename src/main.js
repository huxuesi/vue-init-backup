// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './config'
import Vue from 'vue'
import router from './router'
import store from './vueX'
import axios from './axios'
import sockets from './socket'
import App from './App'

// 导航控制
import navigation from 'vue-navigation'
Vue.use(navigation, {router, store, keyName: 'randomKey'})
Vue.navigation.on('forward', (to, from) => { console.log('forward')})
Vue.navigation.once('back', (to, from) => { console.log('back')})
Vue.navigation.on('replace', (to, from) => { console.log('replace')})
Vue.navigation.off('refresh', (to, from) => { console.log('refresh')})
Vue.navigation.on('reset', () => { console.log('reset')})

// 路由跳转
import {goTo} from './common/js/goTo'
Vue.prototype.$goto = goTo

// 自定义指令
import clickOutSide from './common/directives/clickOutSide'
import scrollUnique from './common/directives/scrollUnique'
import onlyNum from './common/directives/onlyNum'
Vue.directive('clickOutSide', clickOutSide)
Vue.directive('scrollUnique', scrollUnique)
Vue.directive('onlyNum', onlyNum)

// ajax
import { ajax } from './common/js/ajax'
Vue.prototype.$ajax = ajax

// 基本样式
import './common/stylus/base.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
