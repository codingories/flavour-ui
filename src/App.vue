<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'
export default {
  name: 'App',
  setup(){
    const menuVisible = ref(false); //  ref理解成盒子,里面有个值false
    provide('xxx', menuVisible) // set,标记为所有子组件都可以用
  }
}
</script>
