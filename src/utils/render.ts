import marked from 'marked';
import highlight from 'highlight.js';

const renderer = new marked.Renderer()
renderer.heading = (text, level) => {
  const slug = text.replace(/<(?:.|\n)*?>/gm, '').toLowerCase().replace(/[\s\n\t]+/g, '-')
  return `<h${level} id="${slug}">${text}</h${level}>`
}

renderer.code = (code, lang) => {
  const highlightResult = highlight.highlightAuto(code).value;
  return `<pre><code class="lang-${lang}">${highlightResult}</code></pre>`;
}
marked.setOptions({
  renderer,
  breaks: true,
  gfm: true
})

export default marked;
