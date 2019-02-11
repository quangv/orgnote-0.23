<!-- prettier-ignore -->
<template lang="pug">
  textarea(
    v-model="input"
    autofocus
    class="elevation-1"
    placeholder="add thoughts"
    @keydown.enter.prevent="handleEnter"
  )
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'JournalInput',

  computed: {
    input: {
      get() {
        return this.$store.state.journal.input
      },
      set(value) {
        this.$store.commit('journal/setInput', value)
      },
    },
  },

  methods: {
    ...mapActions('journal', ['add']),
    handleEnter(event) {
      const value = event.target.value

      // don't submit if just white-space
      if (value.trim()) {
        this.add({
          value,
        })
      }
    },
  },
}
</script>

<style scoped>
textarea {
  display: block;
  border: 1px solid black;
  border-bottom-width: 0;
  border-right-width: 0;
  width: 100%;
  height: 3.5em;
  margin: 1.5em 0;
  padding: 0.5em 1em;
}
</style>
