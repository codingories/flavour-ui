// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild' // 把typescript变成js
import vue from 'rollup-plugin-vue' // 把vue结尾变成js
import scss from 'rollup-plugin-scss' // 把scss结尾变成js
import dartSass from 'sass';  // 用来支持上面的插件
import { terser } from "rollup-plugin-terser" //把js代码变丑

export default {
  input: 'src/lib/index.ts', // 输入
  output: {
    globals: {
      vue: 'Vue' // 告诉rollup实际仓库依赖vue
    },
    name: 'CrabVue3UI', // 仓库名字
    file: 'dist/lib/CrabVue3UI.js', // 生成文件名字
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/,
    })
  ],
}
