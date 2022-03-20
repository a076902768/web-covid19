import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import '../src/assets/scss/all.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')