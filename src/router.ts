import {createWebHashHistory, createRouter} from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Doc from './views/Doc.vue'
// @ts-ignore
import SwitchDemo from "./components/SwitchDemo.vue";
// @ts-ignore
import ButtonDemo from "./components/ButtonDemo.vue";
// @ts-ignore
import DialogDemo from "./components/DialogDemo.vue";
// @ts-ignore
import TabsDemo from "./components/TabsDemo.vue";
// @ts-ignore
import DocDemo from "./components/DocDemo.vue";
// @ts-ignore
import Intro from './views/Intro.vue';
// @ts-ignore
import GetStarted from './views/GetStarted.vue';
// @ts-ignore
import Install from './views/Install.vue';
import { h } from 'vue';
// @ts-ignore
import Markdown from './components/Markdown.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history:history,
  routes: [
    {path:'/', component: Home},
    {path:'/doc', component: Doc,children: [
      { path: "", component: DocDemo }, // 二级组件的根路由
      {path: "intro", component: h(Markdown,{path:'../markdown/intro.md'}) },
      {path: "install", component: h(Markdown,{path:'../markdown/install.md'}) },
      {path: "get-started", component: h(Markdown,{path:'../markdown/get-started.md'}) },
      { path: "switch", component: SwitchDemo },
      { path: "button", component: ButtonDemo },
      { path: "dialog", component: DialogDemo },
      { path: "tabs", component: TabsDemo }
    ],
    }
  ]
});
