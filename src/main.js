import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
        

library.add(faCoffee, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
