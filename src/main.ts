import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import allDirectives from './directives'

const app = createApp(App)

app.use(router)
app.use(ui)

Object.entries(allDirectives).forEach(([name, directive]) => {
  app.directive(name, directive)
})

app.mount('#app')
