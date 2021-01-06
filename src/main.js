import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'popper.js'


import { setHeaderToken } from "./headeraxios/auth";

var token = localStorage.getItem('token');

if (token) {
  setHeaderToken(token);
}




import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


import axios from 'axios'
axios.defaults.baseURL = 'http://localhost/situpil/'


import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } })

import Toasted from 'vue-toasted';
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
