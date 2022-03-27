import {patchRouter} from "../util";
import {turnApp} from "./routerHandle";

// 重写路由的跳转
export const rewriteRouter = () => {
    window.history.pushState = patchRouter(window.history.pushState,'micro_push')
    window.history.replaceState = patchRouter(window.history.replaceState,'micro_replace')

    window.addEventListener('micro_push',turnApp)
    window.addEventListener('micro_replace',turnApp)
    window.onpopstate = () => {
        turnApp()
    }
}
