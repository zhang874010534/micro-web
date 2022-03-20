import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance = null
const render = () => {
    instance = createApp(App)
    instance.use(store).use(router).mount('#app')
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
    render()
    console.log('渲染成功')
}

export const unmount = () => {
    // instance
    console.log('卸载成功')
}
