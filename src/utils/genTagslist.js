const fs = require('fs');
const path = require('path');
const fm = require('front-matter');

const postsDir = path.format({
  dir: path.resolve(),
  base: '/dist/posts'
});

// 拿到所有的文章
const arrPosts = fs.readdirSync(postsDir);

// 过滤出所有的.md文件
const getFrontMatters = arrPosts.filter(p => /.md/.test(p))
// 读每个文件, 处理每个文件的frontMatter
.map(i => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.format({dir: postsDir, base: i}), 'utf8', (err, data) => {
      if (err) reject(err);
      const { attributes, body } = fm(data);
      resolve(attributes);
    })    
  })
});

Promise.all(getFrontMatters)
.then(data => {
  // 构造tagsList
  return data.reduce((pre, cur) => {
    // 拿到每篇文章的所有tags
    const tags = cur.Tags.split('|').map(i => i.trim());
    tags.forEach(e => pre[e] != undefined ? pre[e].push(cur.Title) : pre[e] = new Array(cur.Title));
    return pre;
  }, {}); 
})
// 把结果写入tags.json
.then(tagsList => {
  fs.writeFile(path.format({dir: path.resolve(), base: postsDir + '/tags.json'}), 
  JSON.stringify(tagsList, null,"  "), 
  'utf8',
  err => {
    if(err) throw err 
    console.log('tagsList created success...');
  });
})
