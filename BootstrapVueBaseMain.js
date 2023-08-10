import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App)
// Make BootstrapVue available throughout your project
.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
.use(IconsPlugin)
.mount('#app')
