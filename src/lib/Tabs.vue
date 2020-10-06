<template>
  <div>
    Tabs组件
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
  </div>
</template>
<script lang="ts">
  import Tab from './Tab.vue'
  export default {
    setup(props, context){
      // 每一个.vue文件就是一个对象
      const defaults = context.slots.default();
      defaults.forEach((tag)=>{
        if(tag.type !== Tab){
          throw new Error('Tabs 子标签必须是 Tab')
        }
      });
      console.log(defaults[0].type === Tab);
      return {
        defaults
      }
    }
  }
</script>
