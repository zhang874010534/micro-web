const path = require('path')
const {name} = require('./package.json')
const {defineConfig} = require('@vue/cli-service')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 9005

module.exports = defineConfig({
  outputDir: 'dist',// 打包的目录
  assetsDir: 'static',// 打包的静态资源
  filenameHashing: true,//  打包出来的文件，会带有hash信息
  publicPath: 'http://localhost:9005',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    // disableHostCheck: true,
    allowedHosts: 'all',
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      libraryTarget: 'umd',
      // fileName: 'vue3.js',
      library: 'vue3', // 此选项将决定使用哪个全局对象来挂载 library
      // jsonpCallback: `webpackJsonp_${name}` 多个 webpack 运行时可能会在同一个 HTML 页面上发生冲突，因为它们使用同一个全局变量进行代码块加载。为了解决这个问题，需要为 output.jsonpFunction 配置提供一个自定义的名称。
      // Webpack 5 确实会从 package.json name 中自动推断出一个唯一的构建名称
    }
  }
})
