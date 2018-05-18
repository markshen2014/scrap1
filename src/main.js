// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'
import { store } from './store'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')
window.$ajax = window.$.ajax
// window.url = 'http://iybcons.iyb.ca:8484/marks'
window.url = 'https://iybcons2.scrapitsoftware.com:4443/marks'

Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB3kSJXQ9f9igOmJId3507QIJameWHf8NA',
      authDomain: 'iybtest423.firebaseapp.com',
      databaseURL: 'https://iybtest423.firebaseio.com',
      projectId: 'iybtest423',
      storageBucket: ''

    })
  }
})
