import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseInput from './components/UI/BaseInput.vue'
import '../scss/app.scss'
import i18n from './i18n'
import router from './router'
import store from './store'


Vue.component('base-button', BaseButton)
Vue.component('base-input', BaseInput)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
