import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
let instance = null
const render = () => {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
// render()
if(!window.__MICRO_WEB__) {
  render()
}

// 开始加载结构
export const boot = () => {
  console.log('开始加载')
}

export const mount = () => {
  console.log('vue2')
  window.custom.emit('test1',{
    name: 'vue2触发'
  })
  render()
  console.log('渲染成功111')
}

export const unmount = () => {
  // instance
  console.log('卸载成功')
}
