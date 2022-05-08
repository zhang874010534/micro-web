import {getList} from "../const/subApps";
import {parseHtml} from "./index";

export const prefetch = async () => {
  // 获取所有子应用
  const list = getList().filter(item => !window.location.pathname.startsWith(item.activeRule))

  // 预加载
  await Promise.all(list.map(async item => await parseHtml(item.entry, item.name)))
}
