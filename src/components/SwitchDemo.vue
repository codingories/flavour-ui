<template>
  <div>
    <Switch v-model:value="bool" ></Switch>
    <!--   v-model等于就是简化了这句话 @update:value="y = $event"-->
  </div>
</template>
<script lang="ts">
  import Switch from '../lib/Switch.vue'
  import { ref } from 'vue'
  export default {
    components: {Switch},
    setup(){
      const bool = ref(false);
      return {bool}
      // 给value 默认值y ，y为true ，
    }
  }
</script>
