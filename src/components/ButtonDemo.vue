<template>
  <div>
    <div>button 示例</div>
    <h1>示例1</h1>
    <div>
      <Button @click="onClick"
              @focus="onClick"
              @mouseover="onClick"
              size="small"
      >你好</Button>
<!--      Vue 直接帮我们把onClick传到了根元素-->
    </div>
  </div>
</template>
<script lang="ts">
  import Button from '../lib/Button.vue'
  export default {
    components: {Button},
    setup(){
      const onClick = ()=>{
        console.log('hi')
      };
      return {onClick}
    }
  }
</script>
