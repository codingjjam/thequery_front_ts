import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import api from './util/api'
import common from './util/common'

const app = createApp(App)
loadFonts()
api(app.config.globalProperties)
common(app.config.globalProperties)
app
  .use(router)
  .use(vuetify)
  .mount('#app')
