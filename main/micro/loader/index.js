import {fetchResource} from "../util/fetchResource";


// 加载html的方法
export const loadHtml = async (app) => {
  // 第一个子应用需要显示在哪里
  let container = app.container
  // 子应用入口
  let entry = app.entry

  const html = await parseHtml(entry)

  const ct = document.querySelector(container)
  if(!ct) {
    throw new Error('容器不存在，请查看')
  }
  ct.innerHTML = html
  return app
}

export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)
  // console.log(html,'--------')
  let allScripts = []
  const div = document.createElement('div')
  div.innerHTML = html
  // 标签、link、script
  const [dom, scriptUrl, script] = await getResources(div, entry)
  console.log(dom, scriptUrl, script)
  const fetchedScripts = await Promise.all(scriptUrl.map(async item => await fetchResource(item)))
  allScripts = script.concat(fetchedScripts)
  return [dom, allScripts]
}

export const getResources = async (root, entry) => {
  const scriptUrl = []
  const script = []
  const dom = root.outerHTML
   // 深度解析
  function deepParse(element) {
    const children = element.children
    const parent = element.parent
    // 第一步处理位于 script 中的内容
    if(element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src')
      if(!src) {
        script.push(element.outerHTML)
      }else {
         if(src.startsWith('http')) {
           scriptUrl.push(src)
         }else {
           scriptUrl.push(`http:${entry}${src}`)
         }
      }
      if(parent) {
        parent.replaceChild(document.createComment('此js文件已经被微前端替换'))
      }
    }
    // link 也会有js的内容
    if(element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href')

      if(href.endsWith('.js')) {
        if(href.startsWith('http')) {
          scriptUrl.push(href)
        }else {
          scriptUrl.push(`http:${entry}${href}`)
        }
      }
    }

    for (let i = 0; i < children.length; i++) {
      deepParse(children[i])
    }
  }
  deepParse(root)
  return [dom, scriptUrl, script]
}
