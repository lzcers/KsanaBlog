import marked from 'marked'
import highlight from 'highlight.js'
import yaml from 'js-yaml'

interface tocNode {
  nodeID: string;
  nodeLevel: number;
  childrenNode: tocNode[];
}

// 解析 Tokens 生成 TOC Tree
function parseTokensGenTOC(tokens: marked.TokensList) {
  const tocNodes: tocNode[] = tokens
  .filter(t => t.type == "heading")
  .map((e: any) => ({
    nodeID: e.text.replace(/<(?:.|\n)*?>/gm, '').toLowerCase().replace(/[\s\n\t]+/g, '-'),
    nodeLevel: e.depth, 
    childrenNode: []
  }))
  const rootNode: tocNode = {nodeID: "root", nodeLevel: 0, childrenNode: []}
  function createTOCTree(root: tocNode, node: tocNode) {
    let nextNode: tocNode | undefined
    for (let i of root.childrenNode) {
      if (node.nodeLevel > i.nodeLevel) nextNode = i
    }
    nextNode == undefined ? root.childrenNode.push(node) : createTOCTree(nextNode, node)
  }
  for (let n of tocNodes) {
    createTOCTree(rootNode, n)
  }
  return rootNode
}

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
  const mySplitInput = splitInput(src)
  const markdown = mySplitInput ?  mySplitInput[1] : src
  const tokens = marked.lexer(markdown)
  const tocTree = parseTokensGenTOC(tokens)
  const meta = mySplitInput ? yaml.safeLoad(mySplitInput[0]) : null
  const html = marked.parser(tokens)
  return {meta, html, markdown, tocTree}
}

export default metaMarked