<template>
  <v-app>
    <app-toolbar />
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import AppToolbar from './AppToolbar.vue'

export default {
  name: 'App',
  components: {
    'app-toolbar': AppToolbar,
  },
  methods: {
    ...mapActions('auth', ['init', 'signIn']),
  },
  created() {
    this.init()
    // auto-login to dev account on dev
    if (document.domain !== 'org.now.sh') {
      this.signIn({
        email: 'dev@absentsoft.com',
        password: 'password',
      })
    }
  },
}
</script>
