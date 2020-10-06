<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <div>你好</div>
        <div>hi</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show Dialog</Button>

  </div>
</template>
<script lang="ts">
  import Dialog from '../lib/Dialog.vue'
  import Button from '../lib/Button.vue'
  import {openDialog} from '../lib/openDialog'
import {ref} from 'vue'
  export default {
    components: {
      Dialog,Button
    },
    setup(){
      const x = ref(false);
      const toggle = ()=>{
        x.value = !x.value
      };
      const f1 = ()=>{
        return false
        // return false 就让ok关不掉
      };
      const f2 = ()=>{};
      const showDialog = ()=>{
        openDialog({title: '标题', content: '你好',
          ok(){
            console.log('ok')
          },
          cancel(){
            console.log('cancel')
          }
        })
      };
      return {x, toggle, f1, f2, showDialog}
    }
  }
</script>
