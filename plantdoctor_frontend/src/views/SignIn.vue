<template>
  <div>
    <v-row>
      <v-col cols="4"/>
      <v-col cols="4">
        <h1>Sign In</h1>
        <v-text-field label="email" v-model="email" />
        <v-text-field label="password" type="password" v-model="password" />
        <v-btn @click="signin">Einloggen</v-btn>
      </v-col>
      <v-col cols="4"/>
    </v-row>

    <v-snackbar v-model="snackbar" color="error">'Das Stimmte leider nicht'</v-snackbar>
  </div>
</template>

<script>
import { pick } from 'lodash';
import {SET_AUTH, SET_USER} from "@/store/mutations";

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: '',
      snackbar: false,
    }
  },
  methods: {
    signin() {
      this.$axios.post('/auth/sign_in', { email: this.email, password: this.password })
        .then((response) => {
          const authHeaders = pick(response.headers, ["access-token","client","expiry","uid","token-type"]);
          console.log('test: ', response)
          this.$store.commit(SET_AUTH, authHeaders)
          this.$store.commit(SET_USER, response.data.data)

          // Write both the response headers and the current user data to the cookie.
          const contents = {
            tokens: authHeaders,
            user: response.data.data
          }
          this.$cookie.set('session', JSON.stringify(contents), { expires: '14D' });

          this.$router.push({ name: 'Home' })
        })
        .catch(() => {
          this.snackbar = true;
        });
    }
  }
}
</script>

<style scoped>

</style>