import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const render = () => {
  new Vue({
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
  console.log('渲染成功')
}

export const unmount = () => {
  console.log('卸载成功')
}
