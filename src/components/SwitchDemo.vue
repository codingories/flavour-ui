<template>
  <div>
    <Switch :value="y" @input="y = $event"></Switch>
<!--    @input表示变化的时候让y为最新的值, 最新的值就是$event-->
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: {Switch},
  setup(){
    const y = ref(false)
    return {y}
    // 给value 默认值y ，y为true ，
  }
}
</script>
