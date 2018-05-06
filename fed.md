---
Title: 前端面试问题一箩筐
Tags: 前端
Published: false
---
经常能够看到很多前端面试的文章，有些问题确实很精巧，能够充分考察出面试者的水平，也有些问题简直是瞎搞，面试刷题是对的，至少意味着你对此的重视，但是背题就是愚蠢了，很多问题仔细思考来能弥补不少知识盲点，这里整理了一些面试题和一些自己的解答。

# HTML元素
* doctype 是什么？
`<!doctype>`声明必须处于 HTML 文档的头部，在 标签之前。
这玩意不是一个 HTML 标签，用于告诉浏览器当前的 HTML版本，现代浏览器通过这个标签来决定使用兼容模式还是标准模式对文档进行渲染。HTML5 不用指定DTD，HTML4.01 中这个标签声明指向一个DTD。
HTML5这样声明  `<!doctype html>`

* `<keygen>` 是正确的HTML5标签吗？
`<keygen>` 标签规定用于表单的密钥对生成器字段，当提交表单时，私钥存储在本地，公钥发送到服务器。是HTML5 标签。

* figure 标签是啥？ 
`<figure>` 标签规定独立的流内容（图像、图表、照片、代码等等），figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响，使用`<figcaption>`元素为figure添加标题（caption）。

* HTML5 支持块级超链接吗？
例如：
```
 <article>
     <a href="#">
         <h1>Hello</h1>
         <p>I am some text</p>
     </a>
 </article>
```
HTML5中 `<a>` 元素表现为一个超链接，支持任何行内元素和块级元素。

* `<input>`和`<textarea>`有啥区别？
在 Chrome 上会是 inline-block，但是 FF 上会是 block。
`<input>`是一个单行输入框，有value属性（value属性指定初始值），但是它不能自动换行；用来放置字数较少的单行文字内容
`<textarea>`是一个多行输入框，没有value属性，但是它能自动换行；一般让用户可以输入多行文字,输入的文字信息量相比较大

* 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img


### HTML属性
* img 标签的 title 和 alt 属性有啥区别？
title 为图片添加附加描述信息，鼠标到图片上会弹出小白框的描述信息， alt 是图片的等价描述，用于图片加载不出来的使用。

* HTML 中 img 标签的资源加载会因为 CSS 隐藏属性设置而取消吗？
不会，不论 CSS 设置元素是否显示隐藏都会触发资源加载。

* HTML 全局属性
好多，常用的就 class、id、style、title、data-*、dragable等，看 MDN 文档最靠谱。

* bdo 标签是否可以改变文本方向？
可以，标签允许你指定文字方向并重载用于文本方向计算的双向算法，配合dir属性。
 text-align（设置对象中文本的对齐方式）
 writing-mode (设置文本的书写方向)
 dir (direction) 设置文本方向的属性

* 下列代码中scope 属性是做什么的？
```
 <article>
     <h1>Hello World</h1>
     <style scoped>
         p {
             color: #FF0;
         }
     </style>
     <p>This is my text</p>
 </article>

 <article>
     <h1>This is awesome</h1>
     <p>I am some other text</p>
 </article>
```
scoped 属性是一个布尔属性，如果使用该属性，则样式仅仅应用到 `style` 元素的父元素及其子元素。
 
* read-only 和 disable 的区别？
readonly 属性规定输入字段为只读。
只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本。
disabled 属性规定应该禁用 input 元素。
被禁用的 input 元素既不可用，也不可点击。可以设置 disabled 属性，直到满足某些其他的条件为止（比如选择了一个复选框等等）。然后，就需要通过 JavaScript 来删除 disabled 值，将 input 元素的值切换为可用。
disabled 的值在表单提交中不会传递到后端。

* HTML5新增了哪些内容或API，使用过哪些
canvas, video

* HTML5 新特性
 * 画布（Canvas）
 * 地理（Geolocation）
 * 音频、视频（audio，video）
 * localStorage 和 sessionStorage
 * webworker，websoket
 * header、nav、footer、aside、article、section

* 用一个div模拟textarea的实现
利用editable属性，人员选择框，编辑器可能利用了这个属性，同时结合了textare

* 简述一下src与href的区别
href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

* select 和 input 的描述，以及一些 HTML5 新增的类型，比如 number, Date

### HTML语义化等
* 什么是 Web 语义化，有啥好处？
一个良好的页面标准是去掉样式之后依旧可读，Web 语义化后意味着 HTML 标记本身包含信息，语言化意味着 CSS 命名语义化，HTML 标签语义化，通过恰当正确的使用包含语义的标签，去掉杨时候页面呈现的结构依旧清晰，盲人读屏器更好阅读，搜索引擎更好理解和收录，构建语义网，达成万维网设计的初衷，团队更好运维。

* 如何为有功能限制的浏览器提供网页？
两个方案，渐进增强和优雅降级，如果使用渐进增强，意味着我们针对低版本浏览器进行构建出一个具备基本功能的原型，然后再为高级浏览器提供优化以追加功能达到更好的用户体验。优雅降级意味着我们构建是基于高版本的，为低版本只提供功能受限刚好够用的服务，通过特性检测，浏览器版本检测来实施。

* tite 与 h1 的区别
title 描述的是网站的标题，或者说是当前页面的标题，会在标签上显示，放在 head 标签里面， h1 标签一般用来描述文章标题大小

* b 与 strong 的区别
strong 用于加粗，b（bold）二者表现形式都是加粗，但是一个语义是强调和标明重点，一个语义就是粗体，强调的话用斜体也可以表达这个语义，比如 i 标签，
盲人朋友使用阅读设备阅读网络时：`<strong>`会重读，`<b>`不会，无障碍浏览

* i 与 em 的区别 
i 表示强调，一般用于某些学术名词，会用斜体字表示，是 italic 的简写， em(emphasize) 也是强调，但是一般用来强调整段内用，会用斜体表示

* dl、dt、dd 语义
`<dl> <dt> <dd>`是一组合标签，使用了dt dd最外层就必须使用dl包裹,默认dd列表内容会一定缩进。dl(definition list),dt(definition title),通常用于描述术语定义,比如词汇表。

* table,tr,th,td 语义
与上面类似, tr(table-row), th(table-head), td(data cell)

## CSS
### 盒子模型
* box-sizing 
因为 W3C 和 IE 盒子模型存在差异， W3C 盒模型的宽度是内容宽度，IE 的宽度包括 border-padding-content 宽度。

*  垂直居中的方法
 * 行内元素垂直水平居中： line-height、text-align、vertical-align
   text-align：设置块元素中行内元素的水平对齐方式
   line-height: 通过将其设置为与父容器高度一致从而实现垂直居中
   vertical-align: 基于基线的垂直对齐

 * 块元素垂直水平居中：
  父容器与子容器宽高未知：absolute + translate。
  子容器宽高已知：absolute + margin负边距。
  flex设置父容器：justify-content: center; align-items: center;
  甚至可以用 calc 来计算水平垂直偏移

* IFC 

* BFC
块级格式化上下文，是页面上一个独立的渲染区域，容器内的子元素不会在布局上影响外面的元素。可以用来清除内部浮动造成的高度坍塌，清除边距叠加等。通过 float、 overflow: 非visible、 display: inline-block / table-cell 或 position：absolute / fixed 可以创建。

* 啥是外边距折叠
相邻两个或多个 margin 会合并成一个 margin，取其中较大的值，而不是相加，解决办法创建 BFC。margin collapsing仅仅发生在BFC，IFC不会，当把元素的float属性设为left，它们都不在正常流中，更不在BFC中了，同样不论水平还是竖直方向，都不会发生叠加。

* 浮动清除
三种办法， 新增 clear属性标标签，伪元素设置 clear 属性，如 `clearfix:after { clear: both; }`，触发浮动元素父元素的BFC来闭合浮动。

* position为absolute元素的包含块
position: absolute 通过指定元素相对于最近的非 static 定位祖先元素的偏移
如果是该元素 'position: absolute'，他的包含块是最近的position为absolute、relative、fixed的祖先元素组成（不一定是块元素）
如果最近的position为absolute、relative、fixed的祖先元素是一个行级元素，那么包含块是 围绕着第一行与最后一行的padding boxes构成的一个盒，还可能受到direction的值影响。
其他情况下（最近的position为absolute、relative、fixed的祖先元素不是一个行级元素）那么，包含块为position为absolute、relative、fixed祖先元素的padding边界构成。
最后如果没有找到定位了的祖先元素的话，那么包含块就是初始包含块（ initial containing block）。

* 浮动原理
浮动出现的最开始出现的意义是用来让文字环绕图片而已，浮动会脱离文档流，创建 BFC。

* 为什么浮动会造成高度坍塌？
因为浮动元素脱离文档流，创造独立 BFC，若盒元素没有高度能撑开容器就会坍塌。

### 文本排版
* direction 属性
direction 属性规定文本的方向 / 书写方向。

* CSS 的 unicode-bidi 属性和 direction 属性一起决定了如何处理文档中的双向文本（bidirectional text）
双向文本，用于处理某教阿拉伯文和希伯来文这种左行的文字和右行文字一起出现时如何处理的问题

*  writing-mode (设置文本的书写方向)
writing-mode原本设计的是控制内联元素的显示的（即所谓的文本布局-Text Layout）。因为在亚洲，尤其像中国这样的东亚国家，存在文字的排版不是水平式的，而是垂直的，例如中国的古诗古文。writing-mode: vertical-rl(lr)。

* base line
line-height(行高)，相邻文本行基线间的距离。那什么是基线呢？对于文字“Benjamin-xx工程师”，来说基线（base line）并不是汉字文字的下端沿，而是英文字母“x”的下端沿。

* white-space
CSS 属性是用来设置如何处理元素中的空白，连续的空白符会被合并，换行符会被当作空白符来处理。填充line盒子时，必要的话会换行。

* word-break
指定了怎样在单词内断行, 比如某些情况下单词很长，那么就会出现单独为这个单词设一行，然后上一行单词结尾处留下大段空白的情况，还有写多语言混写情况下的断行。

* 未知宽高居中

* 对栅格的理解

### 选择器
* CSS 选择器有哪些？
 * 通用选择器
 * #X id 选择器
 * .X class 选择器
 * X Y 后代选择器
 * X 元素选择器
 * X > Y 子元素选择器
 * X + Y 直接兄弟选择器
 * X ~ Y 之后所有兄弟选择器
 * 属性选择器和一些匹配属性选择器
 * [:checked] 选择框、复选框、下拉框选中状态下的元素
 * 一些伪类选择器
 * 一些伪元素选择器

* 伪类和伪元素的区别
伪类是逻辑上存在但在文档树中没标识的分类，伪元素代表某个元素的子元素但不存在与文档树中，伪元素要用双冒号。

* 选择器的优先级怎么规定呢？ 
一般而言，选择器越特殊，优先级越高，选择器指向越准确，优先级越高，!important > ID 选择器 > 类选择器 > 标签选择器。

* only 选择器的作用是？
`@media only screen and (max-width: 1024px) {argin: 0;}`停止旧版本浏览器解析选择器的其余部分，only 用来定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。其实only很多时候是用来对那些不支持Media Query 但却支持Media Type 的设备隐藏样式表的。

### 属性
* em 和 rem 
rem 相对根元素的字体大小， em 相对当前元素的字体大小。

* postion 的值
absolute, fixed, relative, static, sticky。

* 选择器优先级问题，，比如将style标签写在body后与body前有什么区别，比如同一dom应用多个class其应该如何表现，比如class a定义颜色为blue，class b定义颜色为red，同时应用到dom上，dom作何显示。
style 写在 body 前意味着在浏览器默认样式应用之前生效，可以避免页面 fouc （无样式内容闪烁），写在后面就会出问题了。
a,b 样式谁前谁后，选择器解析是从右向左的，同优先级后面的样式会覆盖前面的。

* css sprite 是啥？ 有什么优缺点
CSS 精灵， 减少请求，但是难维护，但是更换风格方便，改一张图就行，图片合并麻烦。

* `display: none;` 与 `visibility: hidden; ` 的区别
display: none; 让元素完全从渲染树中消失，渲染时不占据空间，visibility: hidden;不会让元素从渲染树中消失，只是内容不可见，但是依旧占据空间，display: none;是非继承属性，visibility 是继承的。

* css hack 原理及常用 hack
原理：利用不同浏览器对 CSS 的支持和解析结果不一样编写针对特定浏览器的样式。常见 hack 有 IE 条件注释，选择器 hack 、属性 hack。

* specified value、computed value、used value 计算方法
 * specified value： 如果样式表设置了值就用样式表的，没有，若这个属性是继承的就从父元素继承，否则就用 CSS 规范指定的初始值。
 * computed value：根据规范定义的行为进行计算，如 em、rem，百分比。
 * used value：属性计算后的最终值，大多数可以通过 window.getComputedStyle
 获得。

* link 与 @import 的区别
link 是 HTML 的方式， @import 是 CSS 的方式，link 支持最大程度的并行下载，@import 过多嵌套会导致串行下载。link 优先级更高。

* link 的 rel ="alternate stylesheet" 是啥？
可以用来指定候选样式，通过 disabled 属性来确定是否生效，实现皮肤切换，夜间模式等。

* block 和 inline 元素的区别？
block 元素处于常规流中，如果 width 没有设置，会自动充满父容器，可以应用 `margin/padding`， 独占一个水平空间，vertical-align 无效。
inline 元素不会换行，margin/padding 垂直方向无效，height 由 line-height 确定，浮动或者绝对定位会转 block 。

* PNG、GIF、JPG 区别和选择
GIF 有动画需求，支持透明，JPEG 有损压缩，不支持透明，适合张片，PNG 质量高支持透明，适合图标、背景、按钮，谷歌家新的webp结合了 jpeg 和 png 的优点。

* CSS 有哪些继承属性
文字排版：font，text-align，vertical-align 等， color、cursor、line-height、visibility。

* IE6 常见 BUG
不支持 min-height


* 什么是 FOUC？如何避免
默认样式先生效，然后自定义样式表加载后生效造成页面闪一下，办法就是把样式表放到 head， script 标签放 Body 后是为了避免 JS 的 DOM 操作堵塞渲染。

* CSS 属性区分大小写吗？
HTML，CSS 都对大小写不敏感。

* 行内(inline)元素 设置margin-top和margin-bottom 是否起作用？
不起作用。

* 对内联元素设置padding-top和padding-bottom是否会增加它的高度？
不起作用。

* 设置p的 font-size:10rem，当用户重置或拖曳浏览器窗口时，文本大小是否会也随着变化？
不会。

* [:checked] 作用哪些？
选择框（select）、复选框（checkbox）、下拉框、radio。

* 在HTML文本中，伪类:root总是指向html元素？
可能不是，如果是片段 HTML 的话则为片段的根。

* translate()方法能移动一个元素在z轴上的位置？
不能，translate()方法只能改变x轴，y轴上的位移。

* 描述下 “reset” CSS 文件的作用和使用它的好处
作用以及好处：因为各个浏览器默认对CSS的渲染有差异，"reset" CSS 通过重新定义标签样式，对浏览器进行默认样式“清零”重置，样式保持一致，减少程序猿的心里负担，我没设置就没效果。不足在于增加 css 文件，多此一举。

* 如何优化网页的打印样式？
`<link rel="stylesheet" type="text/css" media="print" href="yyy.css" />`打印样式表中最好不要用背景图片，因为打印机不能打印CSS中的背景。

* 书写高效 CSS 时会有哪些问题需要考虑？
样式是：从右向左的解析一个选择器，ID最快，Universal最慢 有四种类型的key selector，解析速度由快到慢依次是：ID、class、tag和universal。

* 你最喜欢的图片替换方法是什么？ 
iconfont, 伪元素，backgroud

* CSS 实现列表逆序
`<ol reversed>` 使用 reversed 属性，仅 H5 支持。

* CSS 做埋点追踪分析
简单来说就是通过一些特殊的选择器或者 CSS的一些媒体查询等与语法还有 Hack 来判断状态，利用资源请求的跨域性向后端发信息。

* display:table-cell 作用
设置了display:table-cell的元素对宽度高度敏感，对margin值无反应，响应padding属性，基本上就是活脱脱的一个td标签元素了。
    1. display:table-cell与大小不固定元素的垂直居中
    text-align:center; vertical-align:middle; display:table-cell;
    2. display:table-cell 与两栏自适应布局
    ie6 使用 display:inline-block 替代
    3. display:table-cell下的等高布局
    table表格中的单元格最大的特点之一就是同一行列表元素都等高。所以，很多时候，我们需要等高布局的时候，就可以借助display:table-cell属性。说到table-cell的布局，不得不说一下“匿名表格元素创建规则”：
    4. display:table-cell下的列表布局，可以替代 float

    使用table-cell还可以实现很多的布局，需要自己去发挥想象。总结下来也就需要记住几点，设置了display:table-cell的元素具有以下特性。
    * text-align、vertical-align等对齐属性起作用，margin不起作用。宽高百分比值不起作用。
    * 会生成虚拟的table、tr把自己包裹住，如果有相邻的兄弟元素也被设置了table-cell,则会跟兄弟元素一起生成虚拟的table、tr把自己包裹住，并一行等高显示
    * 多个table-cell元素会占满被设置了display: table的元素的宽度，如果一个元素被设置了宽度，那么其他剩余的table-cell元素会占满剩下的宽度。当然，如果只有一个table-cell元素，就算设置了宽度也会占满table元素的宽度。
    * 对设置了float、absolute的元素不起作用。且IE6、7不支持
    这就是所谓的table布局大法。

## CSSOM
* window.getComputedStyle(element, [pseudoElt])
Window.getComputedStyle() 方法给出应用活动样式表后的元素的所有CSS属性的值，并解析这些值可能包含的任何基本计算,这些值是实时的，第二个参数可以传伪元素标签，浏览器F12里面查看CSS模型的值应该就是这样来的。getComputedStyle 的返回值是 resolved values,  通常跟CSS2.1中的computed values是相同的值。 但对于一些旧的属性，比如width, height, padding 它们的值又为 used values。 

* Element.getBoundingClientRect()
方法返回元素的大小及其相对于视口的位置。

* Element.getClientRects() 
方法返回一个指向客户端中每一个盒子的边界矩形的矩形集合。就是TextRectangleList对象。TextRectangle对象包含了 top left bottom right width height 六个属性。

* offsetWidth/clientWidth/scrollWidth 区别
offset 包括 content + padding + border 
client 包括 content + padding
scroll 包括 content + padding + 溢出内容的尺寸

* HTMLElement.offsetLeft 
是一个只读属性，返回当前元素左上角相对于  HTMLElement.offsetParent 节点的左边界偏移的像素值。


# JS
** 理解几个重要概念，闭包、作用域、原型链 **

1. symbol、map、set  
对象的 key 只能是字符串和 symbol， 而 map 的 key 可以是任意值。set 允许存储任何类型的唯一值，set 对象是值的集合，而且值都是唯一的。symbol 是一种特殊的不可变数据类型，可以作为对象属性的标识符使用。symbol 在 for in 中不可枚举。 for of 用来遍历类数组对象，set、map 字符串都可以遍历， for in 遍历对象。

2. apply、call、bind 区别  

apply、call 都是把一个函数应用到其他对象上，都是修改函数的上下文（this 指向），并且立即执行，bind 返回一个指向新上下文的函数，不是立即执行。apply 接受数组参数，call 接受逗号分割的参数列表。

3. typeof 操作符返回值有那些？
typeof 返回 undefined、boolean、string、number、object、function、symbol。对于Array、function 等对象一律返回 object，对于 undefined 返回 undefined、 null 返回 object 、NaN 返回 number。

4. let、const、var 区别  
let、const 是块级作用域，var 是函数作用域，let 不存在变量提升，必须先声明后使用，const 类似，但 const 必须在声明时就赋值，且不可改变，指的是引用的地址不可变。let、const、class 声明的全局变量不是全局对象的属性。

5. 箭头函数
箭头函数的 this 是绑定词法作用域的，而且不能通过 bind、call、apply 改变，没有一般函数的 arguments 隐藏对象，不能当作 generator 使用。

6. js 严格模式下有什么不同?
    * 不能使用 with 语句
    * 匿名函数的 this 不会指向 window 而是 undefined
    * 不能使用 var 创建全局变量
    * 不可以在 if 内部声明函数
    * 对象属性名必须唯一
    * 不可对变量使用 delete
    * 不可对对象的只读属性赋值
    * 函数中不可以有重名参数
    * arguments.callee 和 arguments.caller

7. setTimeout 和 setInterval 区别？  
setTimeout 只会执行一次，不会造成内存泄漏， setInterval 每隔一段时间调用，忘了清除则可能造成内存泄漏，而且不会计算代码的执行时间，因此setInterval 可能会同时多次执行，用 setTimeout 可以模拟 setInterval。

8. js 继承  
js 可以使用原型来继承，但是原型可以直接修改导致继承链终端，继承的实现无外乎利用 prototype 或 call, apply, bind 改变调用时的上下文。 

9. 懒加载  
一般用于图片或者文章列表的加载， 触发一般通过滚动，滑动到底部来触发以此来获得更好的用户体验，同时要配合节流函数。

10. 函数节流（throttle）和防抖（debounce）

11. 什么是深度拷贝，什么是浅拷贝？  
Object.assigin() 是浅拷贝，意味对于对象只会拷贝第一层的值，引用对象也是拷贝的引用，只是复制对象的引用，而深拷贝是把所有对象都复制一遍，包括引用的，简单的可以直接 JSON.stringify() 取巧深度拷贝，复杂的就要自己写递归函数遍历了。

12. 原生的字符串方法有哪些？  
substr、slice、replace、split、toLowerCase、toUpperCase 等方法，看 MDN 文档最靠谱。

13. SVG 和 Canvas 区别？  
SVG 用 xml 绘制， Canvas 用 js 绘制。

14. service worker
代理前端请求，多线程。

15. mouseover / mouseout 与 mouseenter / mouselevel 区别  
mouseover / mouseout 是标准事件，冒泡，enter / level 不冒泡。

16. js 有几种方法定义函数?  
4种，函数声明， new Function构造，function 操作符，箭头函数

17. 有几种办法定义对象？  
3种，对象字面量，构造函数，Object.create()

18. === 的判断流程是怎么样的？  
类型不相同，不相等，类型相同是基础类型就判断字面量咯，是对象等引用类型就判断引用是否相等。

19. == 判断流程  
== 会做类型转换，转成原始值，然后判断，比如 null == undefined ，某些字符串和数字相等，JS 的万恶之源。

20. arguments 是啥？  
是函数内部的局部变量，是实参的列表，可以获取实参的个数，length 只能获取形参个数，这个变量在箭头函数里面没有。

21. WebSocket  
WebSocket 使用 ws 或者 wss 协议， WebSocket 是一个持久化的协议，再整个连接期间任意时刻，客户端和服务端都可以相互推送消息。WebSocket  不限于 Ajax 通信，WebSocket 可以跨域通信。

22. 什么是类数组对象  
有 length 属性 和索引属性的对象，可以通过 Array.from（）转。

23. new 操作符具体做了什么  
创建空对象，设置这个空对象的 obj.__proto__ 为 targetObj.prototype，return targetObj.call(obj, args)。

24. ES6 module 和 require/exports 的区别  
ES6 module 是静态的，import 必须放在文件最顶部，导入导出是建立符号映射，便于依赖分析和优化。commonJS 是运行时的，导入导出是通过值复制来达成。

25. 原型链的顶端是 Object 再往上就是 undefiend。

26. instanceof、isPrototypeOf  如何确定原型和实例之间的关系  
通过回溯 obj.__proto__.__proto__... == Constructor.prototype 来验证 obj 是否是 Constructor 的实例，instanceof 只能用于判断对象和函数，不能用来判断字符和数字。
isPrototypeOf 用来检测一个对象是不是在另一个对象的原型链上。

27. 实现一个类型判断函数，需要鉴别基本类型、function、null、NaN、数组、对象  
typeof 只能返回基本类型，进一步判断需要 instanceof，Object.prototype.toString() 或者 Array.isArray 等方法。

28. 作用域与 sitTimeout 考察
```
var a = 6;
setTimeout(function () {
    alert(a);
    a = 666;
}, 1000);
a = 66;
// alert(66)
如果函数中的a = 666 => var a 666 那结果就是 undefiend ，因为变量提升
```

### 异步
1. async、promise、generator、co

2. 哪些场景是异步的？
    * 事件监听
    * 定时器
    * Ajax 请求
    * 函数回调

## 算法
1. Promise 实现原理  

2. 如何实现一个双向数据绑定？  
Object.defineProperty，Object.proxy，脏检查

3. 如何实现一个前端模板引擎？

4. JS 编写数组去重的方法？  
    1. 可以用 ES6 的最简单方法 [...new Set(<array>)]
    2. 也可以采用另外的写法 
    ```
    [3,2,2,1,1].filter((e, i, arr) => arr.indexOf(e) == i ? true : false)
    ```
5. 统计页面用了多少种不同的标签？去重变种问题
    1. 面试官最期待的答案
    ```
    [...new Set([...document.querySelectorAll("*")].map(e => e.nodeName))].length
    ```
    2. 也可以遍历检测HTML规范定义的标签，这样就可以完全抛开页面DOM节点的数量，但是对自定义标签无解
    3. 暴力遍历DOM树，塞入集合去重然后再统计

6. JS 实现图片中取特定颜色的色块坐标  
先要求运行环境提供这个图片的像素 ByteArray （在 web 运行环境下即是 context.getImageData() ），然后循环取各像素的色值，得出红块的坐标区域。

7. 希望获取到页面中所有的checkbox怎么做？(原生JS)  
checkbox 是一种 input 元素，拿到所有 input 元素后遍历判断其 type 是否为 checkbox。

8. JSONP 的原理，postMessage原理  

10. 如何编写一个上传组件  

11. 如何用 promise 实现一个信号灯  
使用递归或 promise 的 finally，finally 是 ES2018 引入的标准。

12. 实现一个网页加载进度条？  
页面加载进度一直以来都是一个常见而又晦涩的需求，常见是因为它在某些“重”网页（特别是网页游戏）的应用特别重要；晦涩是因为web的特性，各种零散资源决定它很难是“真实”的进度，只能是一种“假”的进度，至少在逻辑代码加载完成之前，我们都不能统计到进度，而逻辑代码自身的进度也无法统计。另外，我们不可能监控到所有资源的加载情况。
所以页面的加载进度都是“假”的，它存在的目的是为了提高用户体验，使用户不至于在打开页面之后长时间面对一片空白，导致用户流失。
既然是“假”的，我们就要做到“仿真”才有用。仿真是有意义的，事实上用户并不在乎某一刻你是不是真的加载到了百分之几，他只关心你还要load多久。所以接

13. 实现图片懒加载

14. setTimeout何时执行，requestAnimationFrame的优点

15. 手写parseInt的实现  
要求简单一些，把字符串型的数字转化为真正的数字即可，但不能使用JS原生的字符串转数字的API，比如Number()

## DOM

### 原生 DOM 操作 
    * 节点获取的方法有 getElementById/ClassName/TagName/Name、querySelector、querySelectorAll
    * 对元素属性进行操作的有 getAttribute，setAttribute，removeAttribute 方法。
    * 节点进行增删改查的有 appendChild、insertBefore，replaceChild、removeChild、createElement。
    * 替换 HTML DOM 中的元素用 replaceChild(newNode, oldonde)
    * 从父元素中删除子元素 parent.removeChild(child)
    * insertBefore(newItem, existingItem) 在指定已有节点前插入新的子节点
    * appendChild(newListItem) 向元素添加新的子节点

### 事件模型
在浏览器中实际有3中事件模型，一种是 **DOM 0 级**事件模型，即直接绑定声明在 HTML 节点上的事件，或者 JS 代码指定属性值绑定事件处理方式。
```
<input type="button" onclick="func()">
 btn.onclick = func
```
**IE 事件模型**  
这个模型共两个过程，事件处理阶段，事件冒泡阶段，使用 attachEvent() 绑定监听函数。  
**DOM 2级模型**  
属于W3C标准， 现代浏览器，IE8以上都支持，该模型中有三个过程。事件捕获阶段，时间从 document 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。事件处理阶段，事件达到目标元素，触发目标元素的监听函数。事件冒泡阶段，事件冒泡阶段从目标元素冒泡到 docuemnt， 依次检查经过的节点是否绑定了事件监听函数。 

1. addEventListener 第三个参数默认是 false 及冒泡阶段捕获，那么同时绑定冒泡和捕获的回调函数，哪个会先触发？  
直觉上，应该是捕获阶段先触发，冒泡其次触发，但是如果一个DOM同时绑定了冒泡和捕获，那就应该就谁先定义谁先出发。

2. 事件对象是什么？  
当 DOM 上触发某个事件的时候会生成一个 event 对象，这个对象包含事件的一些信息，比如触发事件的DOM，事件的类型，事件的相关信息，其中比较重要的有
preventDefault function 取消事件默认行为
stopPropagation function 取消事件冒泡
e.target 指向触发事件监听的对象。(不变)
e.currentTarget 指向添加监听事件的对象。(会因为绑定的事件函数不同而不同)

3. JS 事件 target 与 currentTarget 区别  
e.target 指向触发事件监听的对象。
e.currentTarget 指向添加监听事件的对象。
target 是事件流的目标阶段，currentTarget 是捕获阶段，只有事件流在目标阶段时二者才一致。

4. 不会冒泡的事件  
blur: 失去焦点时候触发，不会冒泡
focus: 获取焦点时候触发，不会冒泡

5. 事件委托
立即事件冒泡机制，我们可以把事件加到父级上，通过 event.target.nodeName 判断子元素。

6. 如何阻止默认事件和冒泡？
stopPropagation()，preventDefault()， IE 下设置 cancelBuble = true 来阻止冒泡， returnValue = false 阻止默认事件。

7. addEventListener 有哪些参数
三个参数，addEventListener(<eventType>, <function>, [true || false])，第三个参数用来设置冒泡阶段还是捕获阶段处理。

8. 事件捕获的应用
全局性的事件拦截，事件合成层

9. 事件队列

## 网络

1. Restful 
Restful（Representational State Transfer）表征状态转移，是充分利用 HTTP 方法实现风格统一的接口服务的方法论。主要 CRUD 对应 POST、GET、PUT、DELETE 四个方法，GET 应该是幂等的，FACEBOOK 又出新玩意了 GraphQL 。

2. 怎么解决跨域问题
    * 同源策源，同端口，同域名、同协议，script、image、iframe、src 不受同源策略影响，因此    有 JSONP，原理是动态创建 script 标签，返回的 JSON 数据被包在返回的回调函数里，缺点是   只支持 Get。
    * document.domain 跨子域
    * CORS
    * 后端反向代理

3. fetch 和 ajax 有什么不同  
ajax 是 XHR 请求，本质就是 XMLHtppRequest ，fetch 是 fetch 请求类型，返回的是 Promise 对象，是全新的web API，对 async、generator 友好，面向未来，相对而言接口更友好。

4. script 标签中的 async 和 defer 的区别  
defer 和 async 都是并行下载，下载过程不会产生堵塞，区别在于 async 是加载完后就自动执行， defer 需要等待页面完成后执行，即 DOMContentLoaded 事件触发之前，所有元素解析完成之后。

5. cookie 属性
    * httpOnly： 告知浏览器该 cookie 不能通过 document.cookie、XMHttpRequest 和 Request API 访问，防止跨站脚本攻击（XSS）。
    * domain：指定 cookie 可送达的主机名，默认是当前文档地址中的主机部分（不含子域名），假定指定域名就相当与各子域名也包含在内，属性设置多个 web 服务器共享 cookie。
    * path： 指定一个 URL 路径，只要该路径匹配请求的资源路径才发送 Cookie 首部。
    * secure： 只允许 HTTPS/SSL 协议时才发送 cookie ，所以保密信息尽量不要在 cookie 中存储。
    * expires： 是一个符合 HTTP-date 规范的时间戳，是一个绝对时间，没设置就意味着这是一个会话期 cookie ，如果客户端和服务端时间不同步就会出现问题。
    * max-age：是一个以秒为单位的数字，设置为 cookie 失效之前要经过的秒数，是一个相对文档被访问后的时间。

6. ajax 原理
就是 new XMLHTTPRequest() 然后绑定 stateChange 事件。

7. ajax 的 readySate 有几个状态？
5个吧，0代表还没 open ，4 代表接收完成。

## 缓存
1. 强缓存和协商协商缓存的差别  
强缓存不发送请求到服务端，协商缓存会发，如字面意思，与服务端协商。

2. F5 和 Crtl + F5 的区别  
F5 无论如何都会发送请求到服务器，服务器看情况返回 304 触发协商缓存。
Ctrl + F5 不会发送 If-Modified-Since 和 If-None-Match（Etag），甚至还会加 Pragma: no-cache、max-age = 0
 让缓存强制失效，连协商缓存都不要，找服务器重新要一份数据。 

3. 缓存，存储相关（cookie、web storage、session）   
cookie 和 session 区别， 一个存客户端，一个存服务端。一般建立 session 需要两个一起用，如果用户没有cookie 则可以把 session 放到 url 上，通过 pathRewrite 保持。cookie 有数量和长度限制，20条，每条 4kb，容易被拦截。
localStorage 可以在同源文档之间共享，sessionStorage 不能共享。

4. 页面缓存的原理

## 框架与工具
### webpack 
1. loader 和 plugin 的区别
loader 用于资源转换，只关注转换文件，plugin 用于扩展 webpack 功能，不仅局限于资源加载，loader 只能处理单一文件的输入输出，而 plugin 可以对整个打包过程进行处理，从而获得更多灵活性。

2. 什么是 chunk
webpack 加载的模块单位， 可以从过 Code Splitting 功能分割模块，可以通过 requre.ensure 定义分割点从而实现按需加载。

3. 如何开发一个 loader ?
a loader is a node module exporting a function。

4. 打包原理
webpack 打包最基本的实现方式，是把所有模块代码放到一个数组里，通过数组 ID 来引用不同的模块。webpack 通过 webpack_require 方法引用不同的索引函数。

5. webpack 和 gulp 的区别
webpack 是一个模块化的打包工具， gulp 提供的是一个工作流平台，但是 webpack 可以通过 plugin 和 loader 做到同样的事情。

6. webpack 打包后体积太大？打包太慢？
抽取公共代码模块，提取第三方库打包，代码压缩，使用 cdn，source-map 打进 js 也会很慢，打生产包可以去掉，使用 Vue 的话用 Only-Rutime 生产版本，使用 dllPlugin 避免一些不变的内容重复打包。
打包太慢可以使用多线程 loader 如 happyPack，webpack2 针对不同 loader 自动采用多线程编译了，dllPlugin 避免不不要的打包，使用 hot reload，开发环境避免一些不要的东西打进去。

### React 和 Vue
1. react 和 vue 的区别  
二者都是数据驱动，都只提供视图层，都支持服务端渲染，都有 Virtual DOM，前者使用 JSX 组织代码，后者使用 .vue 文件组织代码， HTML、CSS、JS 分开写在不同的标签内，而 JSX 都写在一起，前者推崇函数式编程，不可变状态，Vue 更倾向命令式编程。 Vue 数据是双向绑定，React 单向数据流。

2. jsx 的优点？  
表达能力与简单的模板语言不一样，具备完全的编程能力，本质是对 JS 的一种扩展，可以对 UI 的渲染做非常精细的控制，最终会被编译成 CreateElement。

3. jsx 的缺点？  
与传统的 web 开发理念相悖，HTML、CSS、JS 混写到了 JSX 内，结构、样式、行为关注点没有分离，不易阅读理解。

4. DOM Diff 算法和 Vitrual DOM   
这两个技术的应用意味着不论状态如何变换，总能以最小的代价更新 DOM，即每次只更新发生变化的 DOM 。DOM Diff 算法需要依赖 Key 来保证效率，Vitrual DOM 的出现主要是避免频繁操作真实 DOM 导致的性能问题。  
标准的的Diff算法复杂度需要O(n^3)，这显然无法满足性能要求。要达到每次界面都可以整体刷新界面的目的，势必需要对算法进行优化。这看上去非常有难度，然而Facebook工程师却做到了，他们结合Web界面的特点做出了两个简单的假设，使得Diff算法复杂度直接降低到O(n)
    1. 两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构；
    2. 对于同一层次的一组子节点，它们可以通过唯一的id进行区分。

5. React，Vue 中父子组件通信  
从父组件 => 子组件 通过属性传递消息，子组件 => 父组件通过父组件传入的回调函数通信，或者通过触发事件来通信，比如 Vue 中的 emit 方法，组件层级太深的节点间通信需要上 Redux 等状态管理库，在 Vue 可以考虑创建 Event Bus。兄弟组件不能直接通信，但可以依赖父组件共享数据。

6. 无状态组件或者函数式组件  
指的是没有内部状态组件，组件的表现由传入的 Props 唯一确定，就是一个纯粹的 Render 函数。无状态组件不会创建对象，故比较省内存，没有复杂的生命周期方法调用，故流程简单，能用无状态组件的地方就用无状态组件。

7. 高阶组件（HOC）  
如果把组件看作一个函数，则高阶组件就是高阶函数，其入参是一个函数，出参也是一个函数，类似与装饰器。取代取代了一部分 mixin 的场景。

8. React、Vue 的合成事件层和传统事件层的区别  
React 和 Vue 都各自实现了一套合成事件层机制，以保证该事件模型与 W3C 标准一致，消除了 IE 与 W3C 标准之间的兼容问题，所以不用担心啥诡异的用法。
React 自己实现了一套事件冒泡机制，所以不能用 event.stopPropagation() 来停止事件传播，应该使用event.preventDefault()。React 的所有事件都绑定到了 document 节点，而不是组件对应的节点，简化了 DOM 原生事件，减少了内存开销。

9. React、Vue 生命周期与组件更新  
componentWillReceiveProps(nextProps) ，只要 父组件 render 触发，这个方法都会被调用，不论是否 props 是否更新，SetState() 触发的更新不会调用此方法。
 
10. Vue 双向绑定机制的原理  
Vue 采用数据劫持方式，结合发布订阅者模式，通过 Object.DefineProperty() 来劫持各个属性的 setter，getter 以监听属性变化，数据变化时发布消息给订阅者，触发相应的监听回调，后面据说会改用 Proxy 。

11. Vue 的虚拟 DOM 和 React 的区别  
Vue 会跟踪依赖变化，不会重新渲染整个子组件树，React 会，或者需要手动通过ShouldComponentUpdate 去控制。

12. v-if 和 v-show 的区别  
v-show 只是设置了 display: none; 属性，节点还存在内存中，v-if 会把节点从 dom 里干掉。

13. Vue 的组件通信  
非父子组件通信考虑引入 Vuex， 或者 EventBus，也可以使用this.$refs，this.$parent 但是要考虑其代价，或者 $emit 。

14. 如何评价 Vue  
Vue 这个框架不错，下限低，上限高，即使初次接触前端 MVVM 的人也能很快入手，而不会像 React 那样撞到编程范式转换的墙上，取各家之所长，本身只专注 View 层，即便不上全家桶，也可以把它当作一个简单 Library 使用，上手曲线平滑。

15. MVVM 的理解  
VM(ViewModel) 是一个同步 Model => View 的对象，核心是思想是数据驱动视图，而这个驱动是框架本身提供的能理，让用户只关注数据的变化，从手动操纵
 DOM 的工作中解放出来。

16. Vue 为什么选择 Vue  
下限低，利于传统的前端开发人员上手，其本身开发模式也不像 React 那样走向函数式编程的极端，而且很多语法糖指令，单文件的组织方式很爽，HTML/CSS/JS
 依旧是关注点分离的。

17. Vue 中 mixin 和 extend 的区别  
mixin 用来分发组件中可复用的功能，mixin 可以包含任意组件选项，混合组件中同名钩子函数会变成数组，都会被调用，并且混合对象的钩子函数会在组件自身钩子函数之前被调用。值为对象的属性，如 methods , components，directives 将被混合为同一个对象，键名冲突时，取组件属性对象的键值对。混合可以对单个组件混合，也可以全局混合，这样将影响之后所有创建的对象，谨慎使用，可以考虑用 Plugins 机制。extends 仅用于扩展另一个组件，主要是便于扩展单文件组件，和 mixins 类似，区别在于组件自身的选项会被要扩展的源组件具备更高的优先级，Vue.extend()也使用同样的策略进行合并。

18. 单向数据绑定和双向绑定的优缺点  
双向绑定不需要去操行那些 CRUD 操作，特别是在输入类控件需要实时响应的场景上非常方便。双向绑定的状态是自动管理的，在实际需要手动处理状态变化的逻辑时就难搞了，而且状态的变化不易追踪，导致数据问题的源头难以定位。二者差别只在于双向绑定把数据变更的操作用一套固定的逻辑隐藏在框架内部，让操作者不能直接感知，但是 Vue 同样可以使用 Vuex 来做单向数据流， v - model 的逻辑可以自己定义。

19. 前端路由的实现方式  
基于 HTML5 新增的两个 API：history.pushState 和 history.repalceState，两个 API 都会操作浏览器的历史记录，而不会引起页面刷新。
还有一个就是 Hash 路由，监听 hashchange 时间即可，window.location 处理哈希时不会导致页面重新渲染。
这样做的好处很多，页面不刷新意味着不会向后端发送请求，从而减少服务器压力，提升用户体验，前后端分离。

20. 谈谈对组件的看法  
一个组件应该具备可组合性，可重用性，可维护性，可测试性。

21. babel 原理  
和编译器类似，source code -> AST -> generator -> source code。

22. VUE实现原理  
响应式机制，VitrualDOM

23. JQuery操作是一个怎样的过程  

### 前端单元测试
* Mocha 

## HTTP协议
1. HTTP2 和 HTTPS
    * HTTP2 采用二进制格式，而非文本格式，解析效率更高。
    * HTTP2 完全多路复用，即一个 TCP 连接上允许跑多个 HTTP 请求。
    * 报头压缩，降低了传输开销
    * HTTP2 让服务器可以响应主动“推送”到客户端缓存中，支持服务端推送，就是说服务器可以对一个   客户端请求发送多个响应。
    * HTTPS 协议由 SSL + HTTP 协议构建的加密传输、身份认证网络协议。TLS/SSL 中使用了非对称   加密，对称加密以及 HASH 算法，比 HTTP 协议更安全。

2. 什么是 keep-alive 模式  
保持连接，持久连接，连接复用，当出现对服务器的后继请求时，keep-alive 可以避免连接的重复建立。

3. GET，POST，PUT，DELETE
    * GET 查询数据使用，幂等，使用 URL 传递参数，有长度限制，2000 个字符。
    * POST 想服务器发送数据，相对安全，但不会被缓存
    * PUT 修改数据内容，不新增内容
    * Delete 用来删除操作

4. GET 和 POST 的区别
传递数据的方式不一样，一个放在 URL  一个放在 HTTP Body，相对来说安全，GET 请求一般要求幂等，所以建议用在资源请求时。

5. HTTP 状态码
    * 2 是成功状态，3 重定向，缓存 4 客户端错误， 5 服务器错误
    * 200 请求成功
    * 301 永久重定向
    * 304 内容没变，你从缓存取吧
    * 400 错误请求
    * 401 未授权
    * 403 拒绝
    * 404 未找到
    * 405 方法禁用
    * 500 内部错误
    * 501 服务器不具备完成请求的功能
    * 502 网关或者代理错误
    * 503 服务不可用
    * 504 超时

6. HTTP 请求报头有哪些
    1. Accept 
    2. Cache-Control
    3. Host
    4. User-Agent
    5. Accenp-Language

    ```
    GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
    Host: www.w3.org
    Connection: keep-alive
    Cache-Control: max-age=0
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
    Referer: https://www.google.com.hk/
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
    Cookie: authorstyle=yes
    If-None-Match: "2cc8-3e3073913b100"
    If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

    name=qiu&age=25
    ```

    首行是请求方法，请求 URL，协议版本，然后是若干请求头，比如是否保持连接，缓存控制，请求资源类型，浏览器版本，源，编码，语言，Cookie 等


7. HTTP 响应报头
    1. Cache-Control： max-age
    2. Content-Type
    3. Date
    4. Expires
    5. Last-Modified 

    ```
    HTTP/1.1 200 OK
    Date: Tue, 08 Jul 2014 05:28:43 GMT
    Server: Apache/2
    Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
    ETag: "40d7-3e3073913b100"
    Accept-Ranges: bytes
    Content-Length: 16599
    Cache-Control: max-age=21600
    Expires: Tue, 08 Jul 2014 11:28:43 GMT
    P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
    Content-Type: text/html; charset=iso-8859-1

    {"name": "qiu", "age": 25}
    ```

    首行状态行，版本号,状态码 状态描述，然后是日期，服务器，资源的最后修改时间，Etag，内容长度，过期时间，内容类型

8. HTTP method 有哪些？  
除了常见的增删改查四个（GET、POST、PUT、 DELETE），还有 HADE 返回报文头部，OPTIONS 和 TRACE。

## 性能优化
1. 页面DOM节点太多，会出现什么问题？如何优化？  
渲染慢，DOM 操作导致重绘或者重排会卡顿 

2. CDN 工作原理  
CDN 做两件事情，让用户访问最近节点和从缓存活着源站获取资源，原理是通过 DNS 服务器来实现优质节点的选择，通过缓存减少源站压力。

3. 网络优化和性能优化  
性能优化无外乎，减少请求数量，减少请求的体积，代码优化。
    * 减少请求数量： 合并CSS，JS，图片，开启缓存，开CDN
    * 减少请求体积： 压缩CSS，JS，图片或转base64,开gzip
    * 代码优化： DNS 预解析、预连接、页面预加载、预渲染。适当使用懒加载和预加载技术，少用全局变量，减少作用域查找，缓存 DOM 查找结果，避免使用 with, eval 等，减少 DOM 操作次数，尽量使用 CSS3 动画代替 JS 动画等，*  用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能，少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
    * 服务端 使用 CDN ，加 Cache-Control，减少 Cookie 大小，资源下放到不同域名下去

4. 首屏优化  
适当加一些 loading 和 transition 效果，避免白屏，内联 css 渲染，懒加载和预加载，服务端渲染。

5. 前端渲染优势  
局部刷新，懒加载，富交互，节约服务器成本。

6. 服务端渲染  
更好的 seo ，首屏性能好，不需要下载一堆 js 和 css，减少客户端耗电。


## 网络安全
1. TCP 协议
2. 代理和反向代理

3. XSS 和 CSRF 的区别  
XSS 和 CSRF 都是跨站攻击，XSS 本质都是让对方浏览器执行你插入的 JS，从而获取 cookie 等信息，CSRF 借用用户身份，向服务器发送请求，XSS分为存储型和反射型。

4. XSS 防范  
    * 输入白名单，只允许合法输入其他一律过滤掉
    * 对用户输入做变换，去掉高危险节点，对 url 参数过滤，敏感 cookie 设置 httpOnly ，设置 CSP 策略。

5. CSRF 防范  
    * 验真 Http Referer 字段，判断请求来源
    * 加 token 验证，在每个请求中加 token ，token 不存在 cookie 中
    * 在 http 头中加自定义属性验证，比如把 token 放自定义头属性中去
    * 使用手机验证码啊
    * 用 post 请求


## 异常监控
1. 前端异常监控思路  
浏览器提供了 window.onerror 方法， error.stack，压缩过后的代码利用 sourceMap， 支持自定义上报异常(常常与`try...catch`配合)，Ajax Error 通过 axios 做全局 Hook。

## 浏览器原理
1. 浏览器渲染原理解析
    1. 处理 HTML 标记并构建 DOM 树。
    2. 处理 CSS 标记并构建 CSSOM 树。
    3. 将 DOM 与 CSSOM 合并成一颗渲染树。
    4. 根据渲染树来布局，以计算每个节点的几何信息。（Layout、Flow）
    5. 将各个节点绘制到屏幕上。（paint）
    postion 属性设为 absolute 或 fixed 等使得元素脱离文档流，它的变化不会影响其他元素，这样就可以避免重排，从而减少重绘（Repaint）。


## 其他 
1. SPA 应用的优点
    * 页面不用频繁刷新，因而没有白屏堵塞，用户体验好，减少后端压力，提高性能
    * 前后端分离
    * SPA 应用的缺点
    * 不利于 SEO，因为蜘蛛不会执行JS，但是可以通过服务端渲染解决
    * 初次加载耗时多
    * 页面开发复杂度提升，需要学习一些技术框架和状态管理的工具
    * 导航不可用，但是有解决方法

2. 关于前端工程化的理解  
将优秀的实践规范化，标准化，流程化，自动化，这意味着制定开发规范，采用模块化开发，组件化开发，使用构建工具，持续集成工具，自动化测试，性能优化，部署，敏捷开发，脚手架等。

3. 什么是同构  
前后端运行同一套代码，一般后端指的是Node.js。比如前后端都用 JS、TS、Clojure。

4. 浏览器内核有那些？  
webKit 对应 crhome，safari，Gecko 对应 firefox，Presto 对应 Opera。
 
5. 介绍下 PWA  
用了 webService 代理了前端所有请求，将大部分内容直接从本地缓存取，以此获得和非常快的用户体验，加上浏览器支持，可以添加快捷方式到桌面。加强版的微信小程序，也许未来会取代它。

6. chrome 的 JS 引擎是啥 ? 做了哪些优化为什么快？  
用C++开发的，JIT（just-in-time）实时编译成机器语言，不会产生中间码，垃圾回收算法用了精确回收很吊，属性访问很快。

7. 将静态资源放到其他域名的目的是什么？  
避免 DNS 污染，请求是不会发 cookie 节省流量，cookie 默认是会发给子域名的，浏览器对同一域名会有请求次数限制。

8. UV 和 PV 的统计？  
UV 分析 IP 日志，PV 分析页面 url 日志

9. 从输入 URL 到页面发生了啥？  

10. 移动端遇到的一些诡异问题？
移动端的 touch 会默认触发一些 mouse 的事件，而且移动端点击是有多点触控的，选择事件时要找到对应的触发点。

11. 移动端 Click300 毫秒点击延迟
iphone设计了双击放大显示的功能--这就是300ms延迟的来源：如果用户一次点击后300ms内没有其他操作，则认为是个单击行为；否则为双击放大行为。
