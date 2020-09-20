import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
// @ts-ignore
import Frank from './components/Frank.vue'
// @ts-ignore
import Frank2 from './components/Frank2.vue'

const history = createWebHashHistory();
const router = createRouter({
  history:history,
  routes: [
    {path:'/', component: Frank},
    {path:'/xxx', component: Frank2}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
