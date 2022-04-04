import {isTurnChild} from "../util";
import {lifeCycle} from "../lifeCycle";

export const turnApp = async (e) => {
    if(!isTurnChild()) {
        return
    }
    // console.log('路由切换')
    // 微前端的生命周期执行
    await lifeCycle()
}
