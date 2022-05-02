import {findAppByRoute} from "../util";
import {getMainLifeCycle} from "../const/mainLifeCycle";
import {loadHtml} from "../loader";
export const lifeCycle = async () => {
  // 获取到上一个子应用
  const prevApp = findAppByRoute(window.__ORIGIN_APP__)
  // 获取到要跳转到的子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__)
  // console.log(prevApp,nextApp,'app')
  if(!nextApp) {
    return
  }
  if(prevApp && prevApp.unmount) {
    if(prevApp.proxy) {
      prevApp.proxy.inactive() // 将沙箱销毁
    }
    await destroyed(prevApp)
  }
  const app = await beforeLoad(nextApp)

  await mounted(app)
}

export const beforeLoad = async (app) => {
  await runMainLiftCycle('beforeLoad')

  app && app.beforeLoad && app.beforeLoad()

  const subApp = await loadHtml(app)
  subApp && subApp.beforeLoad && subApp.beforeLoad()
  return subApp
}

export const mounted = async (app) => {
  app && app.mount && app.mount({
    appInfo: app.appInfo,
    entry: app.entry
  })

  await runMainLiftCycle('mounted')
}

export const destroyed = async (app) => {
  app && app.unmount && app.unmount()
  // 对应的执行以下主应用的生命周期
  await runMainLiftCycle('destroyed')
}

export const runMainLiftCycle = async (type) => {
  const mainLife = getMainLifeCycle()
  await Promise.all(mainLife[type].map(async item => await item()))
}
