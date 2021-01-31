import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jwt_decode from 'jwt-decode'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'popper.js'


import Rupiah from 'rupiah-format'
Vue.prototype.rupiah = Rupiah //kalau seperti ini kita menset package rupiah menjadi global , dengan kata lain semua components baik components,views dan lainya bisa mengakses rupiah

const moment = require('moment')
require('moment/locale/id')
Vue.use(require('vue-moment'),{
  moment
});



var token = localStorage.getItem('token');

if (token) { 
  const datauser = jwt_decode(token)
  store.commit('isiDataUser', datauser)
  setHeaderToken(token) 
}




import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

console.log(`Versi Vue => ${Vue.version}`)

import { setHeaderToken,sebelumrequesaxios,sesudahresponsedatang } from "./headeraxios/auth";

import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost/situpil/'

  sebelumrequesaxios()

  sesudahresponsedatang()
  
Vue.prototype.axios = Axios; // set global axios

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamicDefault: { draggable: true, resizable: true } })

import Toasted from 'vue-toasted';
Vue.use(Toasted)

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
