import {isTurnChild} from "../util";

export const turnApp = (e) => {
    if(!isTurnChild()) {
        return
    }
    console.log('路由切换')

}
