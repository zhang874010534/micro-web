import {registerMicroApps, start, createStore} from 'micro-web-npm '
import {loading} from "../store";

const store = createStore()

window.store = store
const storeData = store.getStore()
store.subscribe((newValue, oldValue) => {

})
store.update({
  ...storeData,
  a: 1
})
export const registerApp = (list) => {
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        loading.changeLoading(true)
        console.log('开始加载')
      }
    ],
    mounted: [
      () => {
        loading.changeLoading(false  )
        console.log('渲染完成')
      }
    ],
    destroyed: [
      () => {
        console.log('卸载完成')
      }
    ]
  })
  start()
}
