import './lib/gulu.scss'
import './index.scss'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'




const app = createApp(App);
import {router} from './router'

app.use(router);
app.mount('#app');
