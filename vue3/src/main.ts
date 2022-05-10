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

if(!window.__POWERED_BY_QIANKUN__) {
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
    // props.onGlobalStateChange((state, prev) => {
    //     // state: 变更后的状态; prev 变更前的状态
    //     console.log(state, prev);
    // });
    // props.setGlobalState({
    //     a: 2,
    //     b: 3
    // });
    setMain(app)
    render()
    console.log('渲染成功')
}

export const unmount = () => {
    // instance
    console.log('卸载成功')
}
