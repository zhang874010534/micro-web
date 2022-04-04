import {setList,getList} from "./const/subApps";
import {currentApp} from "./util";
import {rewriteRouter} from "./router/rewriteRouter";
import {setMainLifeCycle} from "./const/mainLifeCycle.js";
rewriteRouter()
export const registerMicroApps = (appList, lifeCycle) => {
    setList(appList)
    lifeCycle.beforeLoad[0]()
    setMainLifeCycle(lifeCycle)
};

// 启动微前端框架
export const start = () => {
    const apps = getList()
    if(!apps.length) {
        throw Error('子应用列表为空')
    }
    const app = currentApp()
    console.log(app)
    if(app) {
        const { pathname, hash} = window.location
        const url = pathname + hash
        window.history.pushState('', '', url)
        window.__CURRENT_SUB_APP__ = app.activeRule
    }
}
