<!-- prettier-ignore -->
<template lang="pug">
  v-card
    form(@submit.prevent="handleSubmit")
      v-alert(:value="error.join" type="error") {{error.join}}
      v-text-field(
        placeholder="email"
        type="email"
        v-model="email"
      )
      v-text-field(
        placeholder="password"
        type="password"
        v-model="password"
      )
      br
      v-btn(type="submit" color="light-blue accent-2") Join
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ViewJoin',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapState('auth', ['error']),
  },
  methods: {
    ...mapActions('auth', ['signUp']),
    handleSubmit() {
      this.signUp({
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.v-card {
  padding: 24px;
  margin: 0;
  @media only screen and (max-width: 959px) {
    padding: 16px;
  }
}
</style>
