<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'
export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 800 ? false : true);
    provide("menuVisible", menuVisible); // set
  }
}
</script>
