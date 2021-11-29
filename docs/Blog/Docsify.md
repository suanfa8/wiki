# Docsify

## 参考资料

+ 官网：https://docsify.js.org/#/
+ 参考资料：https://segmentfault.com/a/1190000017576714
+ 进阶教程 1：https://juejin.cn/post/7004816405258305573
+ 进阶教程 2：[远程部署到 pages 服务](https://lewky.cn/posts/docsify-0.html/#%E8%BF%9C%E7%A8%8B%E9%83%A8%E7%BD%B2%E5%88%B0pages%E6%9C%8D%E5%8A%A1)
+ 进阶教程 3：https://xhemj.js.org/#/
+ 插件列表集合：https://xhhdd.cc/index.php/archives/80/

## 使用 docsify-cli 来开发

```
npm i docsify-cli -g
docsify init ./docs
docsify serve docs
```


## index.html 页面的各种插件设置

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="description" content="Description">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  

  <!-- 主题切换 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
  <!-- <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/buble.css"> -->
  <!-- <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/dark.css"> -->
  <!-- <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/pure.css"> -->
  <!-- <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/dolphin.css"> -->

  <!-- <link rel="stylesheet" href="https://unpkg.com/docsify-toc@1.0.0/dist/toc.css"> -->

  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css"/>

  <!-- <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar.min.css" /> -->
  
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/sidebar-folder.min.css" />

  <!-- 引入了自定义的 icon -->
  <link rel="icon" href="_media/avatar.png">
  <!-- <style>
    :root {
      --docsifytabs-border-color: #ededed;
      --docsifytabs-tab-highlight-color: purple;
    }
  </style> -->
</head>
<body>
  <div id="app">自定义加载文字</div>
  <script>
    window.$docsify = {
      name: '使用「力扣」学习 <br> 算法与数据结构',
      repo: 'suanfa8/suanfa8.github.io',
      // 定制侧边栏
      loadSidebar: true,
      loadNavbar: true,
      // subMaxLevel: 2 表示只显示 h1~h2 的标题，对应 # 和 ##
      subMaxLevel: 4,

      coverpage: false,
      
      // 定制导航栏
      loadNavbar: true,
      // pagination: {
      //   previousText: "上一篇",
      //   nextText: "下一篇",
      //   crossChapter: true,
      //   crossChapterText: true,
      // },
      // tabs: {
      //   persist    : true,      // default
      //   sync       : true,      // default
      //   theme      : 'classic', // default
      //   tabComments: true,      // default
      //   tabHeadings: true       // default
      // }, 
      // 字数插件
      // count:{
      //     countable: true,
      //     position: 'top',
      //     margin: '10px',
      //     float: 'right',
      //     fontsize:'0.9em',
      //     color:'rgb(90,90,90)',
      //     language:'chinese',
      //     localization: {
      //         words: "",
      //         minute: ""
      //     },
      //     isExpected: true
      // },

      // 主题颜色
      // themeColor: '#c30aff',

      // 设置外链打开方式，_blank 表示在新标签页中打开
      externalLinkTarget: '_blank',

      // 搜索插件
      search: 'auto',
      // toc: {
      //   scope: '.markdown-section',
      //   headings: 'h1, h2, h3, h4, h5, h6',
      //   title: 'Table of Contents',
      // },
    }
  </script>
  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
  <!-- CDN files for docsify-katex -->
  <script src="//cdn.jsdelivr.net/npm/docsify-katex@latest/dist/docsify-katex.js"></script>
  <!-- or <script src="//cdn.jsdelivr.net/gh/upupming/docsify-katex@latest/dist/docsify-katex.js"></script> -->

  <!-- Docsify v4 -->
  <script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
  <script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-bash.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-php.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-java.min.js"></script>
  
  <!-- 图片放大只要引入这个插件 -->
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
  
  <!-- 代码复制到剪切板 -->
  <script src="//cdn.jsdelivr.net/npm/docsify-copy-code@2.1.1/dist/docsify-copy-code.min.js"></script>

  <!-- docsify-tabs (latest v1.x.x) -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/docsify-tabs@1"></script> -->

  <!-- <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script> -->


  <!-- 分页导航 -->
  <!-- <script src="//unpkg.com/docsify-pagination/dist/docsify-pagination.min.js"></script> -->

  <!-- 侧边栏扩展与折叠 -->
  <!-- <script src="//cdn.jsdelivr.net/npm/docsify-sidebar-collapse/dist/docsify-sidebar-collapse.min.js"></script> -->

  <!-- 字数插件 -->
  <!-- <script src="https://cdn.jsdelivr.net/npm/docsify-count@latest/dist/countable.min.js"></script> -->


  <!-- <script src="https://unpkg.com/docsify-toc@1.0.0/dist/toc.js"></script> -->


  <script src="https://unpkg.com/docsify-plugin-flexible-alerts"></script>
<!--   <nav>
    <a href="#/">算法教程</a>
    <a href="#/docker/">Docker 教程</a>
  </nav>
  -->

</body>
</html>
```


## 特殊格式


```
# 欢迎来到算法吧

> 这是一个神奇的项目。


本站使用 [docsify](https://docsify.js.org/#/) 框架搭建，这是一个静态网站，部署在 [GitHub](https://github.com/) 上，使用 GitHub Pages 功能。

插件：

+ [docsify-tabs](https://jhildenbiddle.github.io/docsify-tabs/#/)


!> 注意：这是一个注意。


1111111111111111111

---

> [!tip]
> 填写你要的内容

---

!> 注意：这是一个注意。


> [!note]
> 填写你要的内容


---


## 2222222222222222222

---

> [!warning]
> 填写你要的内容


33333333333333333

---



> [!attention]
> 填写你要的内容




```


## 首页配置

文件名：`_coverpage.md`

```
<!-- _coverpage.md -->

![logo](_media/基因算法.svg)

# 算法吧 <small>1.0</small>

> 这是一个专门为初学者设计的算法教程。

- 解释算法的思想和由来；
- 精简了内容，只写最重要的部分；
- 代码规范，配图生动。

[GitHub](https://github.com/suanfa8/algo)
[开始学习吧（过程不一定愉快哦）](#欢迎来到算法吧)
```
