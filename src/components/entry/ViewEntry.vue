<!-- prettier-ignore -->
<template lang="pug">
  div
    textarea( v-model="note" )
    .control
      div
        v-btn(
          color="light-blue accent-2",
          :disabled="!isDirty"
          @click="handleSaveButtonClick"
        ) Save
      div
        v-btn(@click="handleCancelButtonClick") {{ cancelText }}
        v-btn(@click="handleDeleteButtonClick" flat class="delete-button") Delete

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ViewEntry',

  data: function() {
    return {
      note: '',
    }
  },

  computed: {
    ...mapState('entry', ['entry']),
    isDirty() {
      if (this.entry) {
        return this.note !== this.entry.note
      }
      return false
    },
    cancelText() {
      if (this.isDirty) {
        return 'Cancel'
      }
      return 'Back'
    },
    entryId() {
      return this.$route.params.entryId
    },
  },

  watch: {
    entry(entry) {
      // Overwrite note if not is empty
      // usually on init
      if (!this.note) {
        this.note = entry.note
      }
    },
  },

  created() {
    this.init({ entryId: this.entryId })
  },

  methods: {
    ...mapActions('entry', ['init', 'updateEntry', 'deleteEntry']),
    handleSaveButtonClick() {
      this.updateEntry({
        note: this.note,
        entryId: this.entryId,
      })
    },
    handleCancelButtonClick() {
      // TODO handle isDirty warning...
      this.$router.push('/journal')
    },
    handleDeleteButtonClick() {
      const confirmed = confirm('Are you sure you want to delete this entry?')
      if (confirmed) {
        this.deleteEntry({
          entryId: this.entryId,
        })
        this.$router.push('/journal')
      }
    },
  },
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
  border: 1px solid black;
}
.control {
  display: flex;
  justify-content: space-between;
}
.delete-button {
  text-transform: lowercase;
}
</style>
