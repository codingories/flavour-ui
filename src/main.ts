import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.scss'
import 'github-markdown-css'


const app = createApp(App);
import {router} from './router'

app.use(router);
app.mount('#app');
