import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance:any = null
const render = () => {
    instance = createApp(App)
    console.log(instance)
    instance.use(store).use(router).mount('#vue3-app')
}
// render()

if(!window.__MICRO_WEB__) {
    render()
}

// 开始加载结构
export const bootstrap = () => {
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
