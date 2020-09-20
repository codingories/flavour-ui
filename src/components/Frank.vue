<template>
  <h1>你好，我是第一个组件</h1>
</template>

<script>
export default {
  name: 'Frank',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
