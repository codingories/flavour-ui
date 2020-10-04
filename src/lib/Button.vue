<template>
  <div :size="size">
    <button v-bind="rest" >
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
  export default {
    inheritAttrs: false,
    props: {
      size: String,
      disabled: Boolean,
    },
    setup(props, context){
      console.log('props',{...props});
      console.log({...context.attrs});
      const {size, ...rest} = context.attrs;
      return {size, rest}
    }
  };
</script>
<style lang="scss" scoped>
  div{
    border: 1px solid red;
  }
</style>
