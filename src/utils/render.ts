import marked from 'marked'
import highlight from 'highlight.js'
import yaml from 'js-yaml'

const renderer = new marked.Renderer()
renderer.heading = (text, level) => {
  const slug = text.replace(/<(?:.|\n)*?>/gm, '').toLowerCase().replace(/[\s\n\t]+/g, '-')
  return `<h${level} id="${slug}">${text}</h${level}>`
}

renderer.code = (code, lang) => {
  const highlightResult = highlight.highlightAuto(code).value;
  return `<pre><code class="lang-${lang}">${highlightResult}</code></pre>`
}
marked.setOptions({
  renderer,
  breaks: true,
  gfm: true
})


// 添加元数据支持

function splitInput(str: string) {
	if (str.slice(0, 3) !== '---') return

	let matcher = /\n(\.{3}|-{3})/g
	let metaEnd = matcher.exec(str)

	return metaEnd && [str.slice(0, metaEnd.index), str.slice(matcher.lastIndex)]
}

function metaMarked(src: string) {
  let mySplitInput = splitInput(src)
  return mySplitInput ? {
    meta: yaml.safeLoad(mySplitInput[0]),
    html : marked(mySplitInput[1]),
    markdown: mySplitInput[1]
  } : {
    meta : null,
    html : marked(src),
    markdown: src
  }
}


export default metaMarked