// 执行js脚本
export const performScriptForFunction = (script, appName, global) => {
  const scriptText = `
    ${script}
    return window['${appName}']
  `
  return new Function(scriptText).call(global, global)
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
