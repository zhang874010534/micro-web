// 代理沙箱

const defaultValue = {} // 子应用的沙箱容器

class ProxySandbox {
  constructor() {
    this.proxy = null
  }
  // 沙箱激活
  active() {
    this.proxy = new Proxy(window, {
      get() {},
      set(target,key,value) {
        defaultValue[key] = value
      }
    })
  }
  // 沙箱销毁
  inactive() {

  }
}
