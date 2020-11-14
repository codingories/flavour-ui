import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.scss'
import 'github-markdown-css'
// @ts-ignore
import Markdown from './components/markdown.vue'


const app = createApp(App);
import {router} from './router'

app.use(router);
app.mount('#app');
app.component("Markdown",Markdown);
