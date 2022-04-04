
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

export const findAppByRoute = (router) => {
    return filterApp('activeRule', router)
}

const filterApp = (key, value) => {
    const currentApp = getList().filter(item => item[key] === value)
    return currentApp && currentApp.length ? currentApp[0] : {}
}


// 子应用是否做了切换
export const  isTurnChild = () => {
    window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__
    if(window.__CURRENT_SUB_APP__ === window.location.pathname) {
        return false
    }
    const currentApp = window.location.pathname.match(/(\/\w+)/)
    if(!currentApp) {
        return false
    }
    window.__CURRENT_SUB_APP__ = currentApp[0]
    return true

}
