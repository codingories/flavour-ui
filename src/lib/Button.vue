<template>
  <button class="gulu-button"
          :class="classes"
  >
    <slot />
  </button>
</template>
<script lang="ts">
  import { computed } from 'vue';
  export default {
    props: {
      theme: {
        type:String,
        default: 'button'
      },
      size: {
        type: String,
        default: 'normal'
      }
    },
    setup(props){
      const {theme,size} = props
      const classes = computed(()=>{
        // Vue3的计算属性
        console.log('arg',
          { [`gulu-theme-${theme}`]: theme,
            [`gulu-theme-${size}`]: size}
        )
        return {
          [`gulu-theme-${theme}`]: theme,
          [`gulu-size-${size}`]: size
        }
      })
      return {classes}
      // 注意:这个地方的要加return 不能忘记
    }
  };
</script>
<style lang="scss">
  $h: 32px;
  $border-color: #d9d9d9;
  $color: #333;
  $blue: #40a9ff;
  $radius: 4px;
  .gulu-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    /*如果不知道fade-out可以搜一下scss的fade out函数*/
    & + & {
      /*这句话的意思是gulu-button+gulu-button,也就是除了第一个gulu-button的剩下所有gulu-button*/
      margin-left: 8px;
    }
    &:hover,
    &:focus {
      color: $blue;
      border-color: $blue;
    }
    &:focus {
      outline: none;
      // 这句话在fireFox中兼容不是很好，所以写了下面一段
    }
    &::-moz-focus-inner {
      /*上面这句话是为了兼容FireFox*/
      border: 0;
    }

    &.gulu-theme-link{
      border-color: transparent;
      box-shadow: none;
      color: $blue;
      &:hover,&:focus{
        color: lighten($blue, 10%);
      }
    }
    &.gulu-theme-text{
      border-color: transparent;
      box-shadow: none;
      color: inherit;
      &:hover,&:focus{
        background: darken(white, 5%);;
      }
    }
    &.gulu-theme-button{
      &.gulu-size-big{
        font-size: 24px;
        height: 48px;
        padding: 0 16px
      }
      &.gulu-size-small{
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
      }
    }
  }
</style>
