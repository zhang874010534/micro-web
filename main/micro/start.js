import {setList, getList} from "./const/subApps";
import {currentApp} from "./util";
import {rewriteRouter} from "./router/rewriteRouter";
import {setMainLifeCycle} from "./const/mainLifeCycle.js";
import {Custom} from './customevent'
import {prefetch} from "./loader/prefetch";
const custom = new Custom()
custom.on('test', (data) => {
  console.log(data,'test')
})
window.custom = custom
// 路由拦截
rewriteRouter()
export const registerMicroApps = (appList, lifeCycle) => {
  setList(appList)
  lifeCycle.beforeLoad[0]()
  setMainLifeCycle(lifeCycle)
};

// 启动微前端框架
export const start = () => {
  const apps = getList()
  if (!apps.length) {
    throw Error('子应用列表为空')
  }
  const app = currentApp()
  if (app) {
    const {pathname, hash} = window.location
    const url = pathname + hash
    window.history.pushState('', '', url)
    window.__CURRENT_SUB_APP__ = app.activeRule
  }

  // 预加载
  prefetch()
}
