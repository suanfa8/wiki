"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[644],{9319:(e,a,i)=>{i.r(a),i.d(a,{data:()=>t});const t={key:"v-11d9dafa",path:"/ElasticSearch/8-IK%20%E5%88%86%E8%AF%8D%E5%99%A8.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"7-什么是 IK 分词器",slug:"_7-什么是-ik-分词器",children:[{level:3,title:"两个分词算法",slug:"两个分词算法",children:[]},{level:3,title:"选择不同分词器配置示例",slug:"选择不同分词器配置示例",children:[]},{level:3,title:"为 IK 分词器添加自己的词典",slug:"为-ik-分词器添加自己的词典",children:[]}]}],filePathRelative:"ElasticSearch/8-IK 分词器.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},5092:(e,a,i)=>{i.r(a),i.d(a,{default:()=>s});const t=(0,i(6252).uE)('<h2 id="_7-什么是-ik-分词器" tabindex="-1"><a class="header-anchor" href="#_7-什么是-ik-分词器" aria-hidden="true">#</a> 7-什么是 IK 分词器</h2><p>分词：把一段中文或者别的划分成一个个的关键字，我们在搜索时候会把自己的信息进行分词，会把数据库中或者索引库中的数据进行分词，然后进行一个匹配操作，默认的中文分词是将每个字看成一个词。</p><h3 id="两个分词算法" tabindex="-1"><a class="header-anchor" href="#两个分词算法" aria-hidden="true">#</a> 两个分词算法</h3><p>IK 分词器提供了两个分词算法：<code>ik_smart</code> 和 <code>ik_max_word</code></p><ul><li><code>ik_smart</code>：最少切分；</li><li><code>ik_max_word</code>：为最细粒度划分。</li></ul><blockquote><p>想一想 Docker 如何安装 IK 分词器。</p></blockquote><p>启动 ES，发现插件被加载：</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwsb7sfdhlj30mi0423z5.jpg" alt="image-20211126094710310"></p><p>查看 ik 分词器是否加载。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>elasticsearch-plugin list\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="选择不同分词器配置示例" tabindex="-1"><a class="header-anchor" href="#选择不同分词器配置示例" aria-hidden="true">#</a> 选择不同分词器配置示例</h3><ul><li>最少切分：<code>ik_smart</code></li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwsba02f7tj315g09sq3y.jpg" alt="image-20211126094917789"></p><ul><li>最细粒度划分：<code>ik_max_word</code></li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwsbadhefwj31520dc76b.jpg" alt="image-20211126094939721"></p><h3 id="为-ik-分词器添加自己的词典" tabindex="-1"><a class="header-anchor" href="#为-ik-分词器添加自己的词典" aria-hidden="true">#</a> 为 IK 分词器添加自己的词典</h3><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwsbjpg96cj30xc0f242l.jpg" alt="image-20211126095837428"></p>',17),l={},s=(0,i(3744).Z)(l,[["render",function(e,a){return t}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,t]of a)i[e]=t;return i}}}]);