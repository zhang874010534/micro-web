// 执行js脚本
export const performScriptForFunction = (script, appName) => {
  const scriptText = `
    ${script}
    return window['${appName}']
  `
  return new Function(scriptText).call(window, window)
}

export const performScriptForEval = (script, appName) => {
  // library window.appName
  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `
  return eval(scriptText).call(window, window)
}
