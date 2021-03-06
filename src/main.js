import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
import router from "@/router/router";
import store from './store'

Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
