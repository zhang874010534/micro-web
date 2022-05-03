import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// @ts-ignore
import { setMain } from "./utils/main";

let instance:any = null
const render = () => {
    instance = createApp(App)
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

export const mount = (app: any) => {
    // window.custom.on('test1',(data:any) => {
    //     console.log(data,'test11111')
    // })
    const storeData = window.store.getStore()
    window.store.update({
        ...storeData,
        a: 1
    })
    // app.appInfo.header.changeHeader(false)
    // window.custom.emit('test','emitTest')
    setMain(app)
    render()
    console.log('渲染成功')
}

export const unmount = () => {
    // instance
    console.log('卸载成功')
}
