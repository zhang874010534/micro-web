// 执行js脚本
export const performScriptForFunction = (script, appName, global) => {
  window.proxy = global
  const scriptText = `
    return ((window) => {
      ${script}
      return window['${appName}']
    })(window.proxy)
  `
  return new Function(scriptText)
}

export const performScriptForEval = (script, appName, global) => {
  // library window.appName
  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `
  return eval(scriptText).call(global, global)
}
