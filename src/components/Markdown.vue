<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>
<script lang="ts">
  import {ref} from 'vue'
  export default {
    props: {
      path: {
        type: String,
        required: true
      }
    },
    setup(props){
      const content = ref < string >(null) // 刚开始content 容器是空，等一会有内容
      import(props.path).then(
        result=>{
          // setTimeout(()=>{  // 这个setTimeout证明了一开始没有值，通过异步获取
          //   console.log('content',content)
          //   content.value = result.default
          // },3000)
          console.log('content',content)
          content.value = result.default
        }
      ) // 异步的去请求markdown
      return {content}
    }
  }
</script>
