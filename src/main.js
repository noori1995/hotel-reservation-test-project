import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

import './app.scss'
import i18n from './i18n'

Vue.use(BootstrapVue)
new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
