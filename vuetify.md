# Como utilizar o Vuetify
Primeiro precisamos instalar no projeto. Use o comando:
yarn add vuetify@^3.3.6

Precisamos também instalar a biblioteca de ícones. Use o comando:
yarn add @mdi/font -D 

## Configurando o Vuetify
Agora no arquivo main.js delete tudo e copie o código abaixo:

----- COMEÇA AQUI --------
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
})

createApp(App).use(vuetify).mount('#app')
------- TERMINA AQUI --------
