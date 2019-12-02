import Vue from 'vue'
import App from './App.vue'

import './assets/scss/main.scss'

Vue.config.productionTip = false

console.log('ENV', process.env.NODE_ENV)

new Vue({
  render: h => h(App),
}).$mount('#app')
