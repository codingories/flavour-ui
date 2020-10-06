// @ts-ignore
import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'
export const openDialog = (options)=>{
  const {title, content, ok, cancel} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = ()=>{
    app.unmount(div)
    div.remove()
  }
  console.log('title, content',title, content)
  const app = createApp({
    render(){
      return h(Dialog, {visible: true,
        'onUpdate:visible': (newVisible)=>{
          console.log(newVisible)
          if(newVisible===false){
            // @ts-ignore
            close();
          }
        },
        ok, cancel
      }, {
        title,content
      })
    }
  })
  app.mount(div)
}
