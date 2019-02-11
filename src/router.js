import Vue from 'vue'
import Router from 'vue-router'

import ViewLogin from './components/auth/ViewLogin.vue'
import ViewJoin from './components/auth/ViewJoin.vue'
import ViewJournal from './components/journal/ViewJournal.vue'
import ViewEntry from './components/entry/ViewEntry.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: ViewLogin,
      //compenent: ViewLogin,
    },
    {
      path: '/join',
      name: 'join',
      component: ViewJoin,
    },
    {
      path: '/journal',
      name: 'journal',
      component: ViewJournal,
    },
    {
      path: '/home',
      redirect: '/journal',
    },
    {
      path: '/entry/:entryId',
      component: ViewEntry,
    },
  ],
})
