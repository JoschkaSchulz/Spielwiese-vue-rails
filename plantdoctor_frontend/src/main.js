import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import vueCookie from 'vue-cookie'
import {SET_AUTH, SET_USER} from "@/store/mutations"
import { pick } from 'lodash'
import status from 'http-status'

Vue.config.productionTip = false

Vue.use(vueCookie);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
  created() {
    this.$axios.interceptors.request.use((config) => {
      const headers = store.state.auth;

      config.headers = headers;
      return config;
    });

    this.$axios.interceptors.response.use((response) => {
      if (response.headers['access-token']) {
        const authHeaders = pick(response.headers, ["access-token", "client", "expiry", "uid", "token-type"])
        store.commit(SET_AUTH, authHeaders);

        let session = vueCookie.get('session');

        if (session) {
          session = JSON.parse(session)
          session['tokens'] = authHeaders

          vueCookie.set('session', JSON.stringify(session), {expires: '14D'})
        }
      }

      return response;
    }, (error) => {
      if (router.currentRoute.name !== 'signin' && error.response.status === status.UNAUTHORIZED) {
        store.commit(SET_USER, null);
        router.push({ name: 'signin' });
      }

      return Promise.reject(error)
    });
  },
}).$mount('#app')
