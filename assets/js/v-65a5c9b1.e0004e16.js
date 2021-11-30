"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[4464],{4565:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-65a5c9b1",path:"/Blog/Hexo.html",title:"Hexo",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"部署笔记",slug:"部署笔记",children:[]},{level:3,title:"hexo 配置",slug:"hexo-配置",children:[]}],filePathRelative:"Blog/Hexo.md",git:{updatedTime:1638202506e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},8168:(n,s,e)=>{e.r(s),e.d(s,{default:()=>g});var a=e(6252);const r=(0,a.uE)('<h1 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo" aria-hidden="true">#</a> Hexo</h1><p>李威整理的安装 Hexo 关键步骤笔记</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install hexo-cli -g\nhexo init blog\ncd blog\nnpm install\nhexo server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>安装 nodejs</p><p>切换 nam 为淘宝镜像</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm info underscore # 如果上面配置正确这个命令会有字符串response\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装 hexo-cli</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm uninstall heao-cli -g\n\nnpm install heao-cli -g\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>安装 Git 否则会提示 ：Deployer not found: git</p><p>npm install hexo-deployer-git --save</p><p>默认的首页的内容</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwup6ig8j2j30b20ost9e.jpg" alt="image-20211128112128080"></p><p>Hexo 中文文档：</p><p>代码高亮：highlight</p>',15),l={href:"https://josephxy.com/2017/11/26/Hexo_highlight.js%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE/",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("https://josephxy.com/2017/11/26/Hexo_highlight.js%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE/"),i=(0,a._)("p",null,"可用主题：",-1),t=(0,a._)("p",null,"https://highlightjs.org/static/demo/",-1),b=(0,a._)("p",null,"themes/hexo-theme-matery/layout/layout.ejs",-1),c={href:"https://eggsywelsh.github.io/2016/11/10/hexo%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE/",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("https://eggsywelsh.github.io/2016/11/10/hexo%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE/"),o=(0,a.uE)('<hr><p>Hexo 中文文档：https://hexo.io/zh-cn/docs/</p><h3 id="部署笔记" tabindex="-1"><a class="header-anchor" href="#部署笔记" aria-hidden="true">#</a> 部署笔记</h3><p>看配置文件最后的部分：</p><p>注意：这里逗号后面是分支名。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwup1iab0fj31u409mace.jpg" alt="image-20211128111638869"></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwup1y7mq4j31uc09eadh.jpg" alt="image-20211128111704578"></p><p>最后发布到：</p><p>1、GitHub：</p><p>https://liweiwei1419.github.io/blog/</p><p>2、coding：</p><p>注意：发布以后可能要重新部署一下。</p><p>http://lw_power.coding.me/blog/</p><h3 id="hexo-配置" tabindex="-1"><a class="header-anchor" href="#hexo-配置" aria-hidden="true">#</a> hexo 配置</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Hexo Configuration\n## Docs: https://hexo.io/docs/configuration.html\n## Source: https://github.com/hexojs/hexo/\n\n# Site\ntitle: 李威威的博客\nsubtitle:\ndescription: 快乐生活每一天！\nauthor: 李威威\n# 新增字段设置头像\navatar: https://github.com/liwei1419/git_helper/raw/master/images/25143182.png\nlanguage: zh-Hans\ntimezone: Asia/Shanghai\n\n# 集成第三方服务\n# 多说评论\nduoshuo_shortname: liweiwei\n\n# URL\n## If your site is put in a subdirectory, set url as &#39;http://yoursite.com/child&#39; and root as &#39;/child/&#39;\nurl: http://codes.liwei.party/\nroot: /\npermalink: :year/:month/:day/:title/\npermalink_defaults:\n\n# Directory\nsource_dir: source\npublic_dir: public\ntag_dir: tags\narchive_dir: archives\ncategory_dir: categories\ncode_dir: downloads/code\ni18n_dir: :lang\nskip_render:\n\n# Writing\nnew_post_name: :title.md # File name of new posts\ndefault_layout: post\ntitlecase: false # Transform title into titlecase\nexternal_link: true # Open external links in new tab\nfilename_case: 0\nrender_drafts: false\n# 设置为 false 就不会写 hexo new 的时候同时创建一个同标题的文件夹\npost_asset_folder: false\nrelative_link: false\nfuture: true\nhighlight:\n  enable: true\n  line_number: true\n  auto_detect: false\n  tab_replace:\n\n# Category &amp; Tag\ndefault_category: uncategorized\ncategory_map:\n  Java基础: java-core\n  日记: life\n  笔记: notes\ntag_map:\n\n# Date / Time format\n## Hexo uses Moment.js to parse and display date\n## You can customize the date format as defined in\n## http://momentjs.com/docs/#/displaying/format/\ndate_format: YYYY-MM-DD\ntime_format: HH:mm:ss\n\n# Pagination\n## Set per_page to 0 to disable pagination\nper_page: 10\npagination_dir: page\n\n# Extensions\n## Plugins: https://hexo.io/plugins/\n## Themes: https://hexo.io/themes/\n## 默认的主题名称：landscape\n## 我使用过的主题名称: next Yelee maupassant\ntheme: next\n\n# Deployment\n## Docs: https://hexo.io/docs/deployment.html\ndeploy:\n- type: git\n  repository: https://git.coding.net/lw_power/lw_power.git\n  branch: master\n## - type: git\n##   repo: https://github.com/weimingge14/weimingge14.github.io.git\n##   branch: master\n## - type: git\n##   repository: https://git.oschina.net/weimingge/Pages.git\n##   branch: master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div>',15),m={},g=(0,e(3744).Z)(m,[["render",function(n,s){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("a",l,[p,(0,a.Wm)(e)])]),i,t,b,(0,a._)("p",null,[(0,a._)("a",c,[u,(0,a.Wm)(e)])]),o],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);