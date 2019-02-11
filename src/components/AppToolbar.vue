<!-- prettier-ignore -->
<template lang="pug">
  v-toolbar(color="brown" dark)
    v-toolbar-title OrgNote
    v-spacer
    v-toolbar-items
      template(v-if="user")
        div.email #[span {{ user.email }}]
        v-btn(@click="signOut" flat) Logout
      template(v-else)
        v-btn(to="/" flat) Login
        v-btn(to="/join" flat) Join
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app-toolbar',

  computed: {
    ...mapState('auth', ['user']),
  },

  methods: {
    ...mapActions('auth', ['signOut']),
  },
}
</script>

<style lang="scss">
.v-toolbar {
  .email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 1em;
  }
}
</style>
