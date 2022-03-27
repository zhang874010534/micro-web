
// 给路由打补丁
import {getList} from "../const/subApps";

export const patchRouter = (event, eventName) => {
    return function () {
        event.apply(this, arguments)
        const e = new Event(eventName)
        window.dispatchEvent(e)
    }
}

export const currentApp = () => {
    const currentUrl = window.location.pathname
    return filterApp('activeRule', currentUrl)
}

const filterApp = (key, value) => {
    const currentApp = getList().filter(item => item[key] === value)
    return currentApp && currentApp.length ? currentApp[0] : {}
}

// 子应用是否做了切换
export const  isTurnChild = () => {
    return window.__CURRENT_SUB_APP__ !== window.location.pathname;

}
