import {findAppByRoute} from "../util";
export const lifeCycle = () => {
  // 获取到上一个子应用
  const prevApp = findAppByRoute(window.__ORIGIN_APP__)
  // 获取到要跳转到的子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__)
  console.log(prevApp,nextApp,'appppp')
}
