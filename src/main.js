// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'

import router from './router'
import store from './store/store'
import App from './components/App'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

window.firebase = firebase // for dev

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  store,
  router,
})
