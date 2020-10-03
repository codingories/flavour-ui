<template>
  <div>
    <button :class="{checked: x}"><span></span> </button>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  export default {
    setup(){
      const x = ref(false); // 默认x没有选中, true和false决定是否有checked类
      return {x}
    }
  }
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button{
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: $h2 / 2;
  }
  button.checked{
    background-color: blue;
  }
  button.checked > span {
    left: calc(100% - #{$h2} - 2px)
  }
</style>
