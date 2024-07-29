import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueParticles from "vue3-particles"
import 'bootstrap/dist/css/bootstrap.css'

createApp(App)
    .use(VueParticles)
    .mount('#app')
