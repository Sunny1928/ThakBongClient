import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLoading from 'vuejs-loading-plugin'
import JsonExcel from 'vue-json-excel';

Vue.use(VueLoading)

Vue.component("downloadExcel", JsonExcel);

const myCustomLightTheme = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#1467a9',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  }
}).$mount('#app')
