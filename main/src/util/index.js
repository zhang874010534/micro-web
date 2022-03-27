import {registerMicroApps, start} from '../../micro'
export const registerApp = (list) => {
    registerMicroApps(list)
    start()
}
