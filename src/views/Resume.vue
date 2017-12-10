<template>
  <div class="resume-body">
    <div class="basicinfo">
      <h3>个人信息</h3>
        <li>个人信息： 李志成 Zack / 男</li>
        <li>工作年限： 3年</li>
        <li>博客： https://ksana.net</li>
        <li>GitHub: https://github.com/lzcers</li>
        <li>职位： 前端工程师</li>
        <li>学历： 大专</li>
    </div>
    <div class="contact">
      <h3>联系方式</h3>
      <li>微信: avernusk</li>
      <li>Email: lzcers@gmail.com</li>
    </div>
    <div class="skill">
      <h3>前端</h3>
      <li>HTML/CSS：能够编写语义化的 HTML 结构，了解 BEM 等 CSS 编写实践，能够编写模块化的 CSS ，完成较复杂的布局，了解 postcss 等预处理器的使用</li>
      <br />
      <li>JavaScript：熟悉原生 JavaScript，了解相关 DOM 操作相关的原生处理方式，能够不依赖 JQuery 等第三方库完成开发工作，日常使用 ES6+ 开发，了解且能使用 TypeScript 作为开发语言
      </li>
      <br />
      <li>框架以及工具掌握：熟练使用 Vue.JS 进行开发，有过 React.JS 的项目使用经验，熟悉前端工程化开发的相关工具链，如 WebPack, Gulp 等
      </li>
    </div>
    <div class="experience">
      <h3>华为技术有限公司(2014.12 - 2017.12)</h3>
        <h4>工具类应用</h4>
        <li>负责带领供方团队完成华为内部 ESCP 系统的开发交付，该工具系统承载服务类基础数据，提供服务鉴权查询、支撑存量经营、订单履行。承担了部分面向公司内部的页面开发工作，
        独立完成华为企业服务微信公众号上维保查询功能的前后端开发，主要涉及技术, JQuery，Amaze UI。
        </li>
        <br />
        <li>负责内部 RDMMS 系统的开发工作，这是一个用于研发物料管理的系统，该系统采用账目数据为中心的设计，交付极大提高物料获取效率和利用率，且能及时发现异常。在该系统交付过程中做了部分前端页面开发工作，涉及技术有JQuery，Echarts用于呈现账目报表，
          使用ES6的新语法特性处理大量报表数据并发加载的问题。 
        </li>
        <h4>平台类系统</h4>
        <li>Unicloud： 内部变革项目，该系统支撑公司内部业务流程端到端打通，支撑华为运营商业务，支撑产品配置与报价，参与系统的前后端开发工作。前端使用 webix 框架，
          参与了PDE模块的前端配置引擎的预研开发工作，期间学习了规则引擎原理和相关的算法，开发了一个在前端编写规则进行产品配置的 Demo。</li>
        <br />
        <li>EUI： 基于卡片概念创建 portal 页面的应用，用户可以按照开发规范开发卡片，上传至卡片市场，使用时从卡片市场中拖拽卡片至布局管理器从而构建portal页面。
          主要涉及开发技术有 React.js, Redux, React-Router。参与了卡片市场的前端开发工作，搭建项目脚手架，引入开源代码, 参与卡片开发规范制定，解决了卡片远程动态加载等技术问题。
        </li>
        <br />        
        <li>AppBuilder: 应用开发工厂是一个采用图形化布局、拖拉拽操作、配置化设置，通过对大量可复用的应用元数据（如UI、模板、逻辑等）采用积木式组装，实现快速、高效构建应用的在线开发平台。
          参与了其中 web 构建器的开发工作，搭建项目，编写 WebPack 构建配置，独立完成了 Web 构建器公有云版从设计到 Demo 的实现，完成了基于元数据渲染页面的技术实现，引入了开源代码提升开发效率，带领新人开发组件。
          主要涉及技术有 Vue.js，WebPack 等前端工具链。
        </li>
      <h3>湖南海翼电子商务股份有限公司(2014.7 - 2014.9 实习)</h3>
        <li>维护公司内部的售后邮箱管理系统，处理问题单，使用 Laraval 框架开发 IT 资产管理系统。</li>
    </div>
    <div class="other">
      <h3>其他</h3>
      <li>在校期间自学了清华大学 MOOC 在线课程《数据结构》通过考试并取得了<strong><a href="http://www.xuetangx.com/check_credential/0e3e84c12f9e5f1666a76442733801ca">证书</a></strong></li>
      <li>在校期间看书《Orange’S:一个操作系统的实现》捣鼓过操作系统实现，并自学过汇编语言，给学校做过校园助手（Android应用）、学校微信公众号（Python+Djiango）、资产管理系统等玩具。</li>
      <li>在华为参与过华为首届黑客马拉松拿了二等奖，拿过华为的明日之星奖，参与过 Scrum 等技能培训，当过部门总体技术组的执行秘书，组织会议、技术分享、讨论等活动。</li>
    </div>
    <div class="about"></div>
      <h3>关于个人</h3>
      <p>
        有点儿强迫症，啥都想学，是一个不可救药的以有涯随无涯者，搜索引擎用得还算好，能搜到就能处理，与人沟通表达无碍，能侃能扯，
        除了喜欢折腾电脑以外还不小心入了摄影坑，风景拍的还算马虎，自认为还能看，人像摄影因为没对象所以拍不好，脱坑二次元的宅，仍关注AB站.....
      </p>
  </div>
</template>

<style>
  .resume-body {
    width: 60%;
    margin-top: 20px;
    color: #333;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px #eee;
    padding: 5% 5%;
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
