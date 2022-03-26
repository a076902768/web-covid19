import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import VueApexCharts from "vue3-apexcharts";
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import '../src/assets/scss/all.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueApexCharts);
app.mount('#app')