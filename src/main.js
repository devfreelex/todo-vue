import Vue from "vue";
import VueRx from 'vue-rx'
import Rx from 'vue-rx'
import VueFire from 'vuefire'

import App from "./App.vue";
import store from "./store/store";
import './db/firebase.js'


import './assets/css/reset.css'
import './assets/css/global.css'

Vue.config.productionTip = false;



Vue.use(VueRx, Rx)
Vue.use(VueFire)


new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
