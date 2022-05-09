import {registerMicroApps, start,} from 'qiankun'
import {loading} from "../store";

// const store = createStore()
//
// window.store = store
// const storeData = store.getStore()
// store.subscribe((newValue, oldValue) => {
//
// })
// store.update({
//   ...storeData,
//   a: 1
// })
export const registerApp = (list) => {
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        loading.changeLoading(true)
        console.log('开始加载')
      }
    ],
    afterMount: [
      () => {
        loading.changeLoading(false  )
        console.log('渲染完成')
      }
    ],
    afterUnmount: [
      () => {
        console.log('卸载完成')
      }
    ]
  })
  start()
}
