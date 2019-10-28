import Vue from 'vue'
import { Kalendar } from 'kalendar-vue'
import 'kalendar-vue/dist/KalendarVue.css'

const ClientKalendar = {
  install(Vue, options) {
    Vue.component('kalendar', Kalendar)
  }
}

Vue.use(ClientKalendar)

export default ClientKalendar
