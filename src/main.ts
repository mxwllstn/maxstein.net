import { createApp } from 'vue'
import VueGtag from 'vue-gtag-next'
import App from './App.vue'
import './assets/css/style.css'

const app = createApp(App)

app.use(VueGtag, {
  property: {
    id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  },
})

app.mount('#app')
