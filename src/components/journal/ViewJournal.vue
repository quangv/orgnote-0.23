<!-- prettier-ignore -->
<template lang="pug">
  v-content
    v-container(fluid)
      v-layout
        v-flex
          v-card
            h1.display-3 Journal
            v-alert(
              v-if="error"
              type="error"
            ) {{error}}
            JournalInput
            JournalEntries
</template>
<script>
import { mapActions, mapState } from 'vuex'

import JournalInput from './JournalInput'
import JournalEntries from './JournalEntries'

export default {
  name: 'JournalView',
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('journal', ['error']),
  },
  methods: {
    ...mapActions('auth', ['signOut']),
  },
  components: {
    JournalInput,
    JournalEntries,
  },
  created() {
    if (!this.user) {
      this.signOut()
    }
  },
}
</script>

<style lang="scss">
.container.fluid {
  padding: 0;
}
.v-card {
  padding: 1em 1.5em;
  h1 {
    padding-left: 0;
    padding-right: 0;
    margin: 14px 0 18px;
    line-height: 1 !important;
  }
  ul {
    padding: 0;
    list-style-position: inside;
  }
}
</style>
