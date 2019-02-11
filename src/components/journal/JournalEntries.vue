<!-- prettier-ignore -->
<template lang="pug">
div
  transition-group(tag="ul" name="fade")
    li(
      v-for="entry in entries",
      :key="entry.id"
    ) {{entry.note}} - #[router-link(:to="editLink(entry)") edit]
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'JournalEntries',
  computed: {
    ...mapState('journal', ['entries']),
    ...mapState('auth', ['user']),
  },

  created() {
    this.init()
  },

  methods: {
    ...mapActions('journal', ['init']),
    editLink(entry) {
      return `entry/${entry.id}`
    },
  },
}
</script>

<style scoped>
li {
  white-space: pre;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-14px);
}
</style>
