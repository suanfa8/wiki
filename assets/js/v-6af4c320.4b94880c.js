"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[1356],{7990:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-6af4c320",path:"/SpringCloud/8-OpenFeign/8-1-OpenFeign.html",title:"8-1 OpenFeign 组件的使用",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"存在问题：",slug:"存在问题",children:[]},{level:2,title:"OpenFeign 组件",slug:"openfeign-组件",children:[]}],filePathRelative:"SpringCloud/8-OpenFeign/8-1-OpenFeign.md",git:{updatedTime:1638150153e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},9225:(n,a,s)=>{s.r(a),s.d(a,{default:()=>k});var e=s(6252);const p=(0,e._)("h1",{id:"_8-1-openfeign-组件的使用",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_8-1-openfeign-组件的使用","aria-hidden":"true"},"#"),(0,e.Uk)(" 8-1 OpenFeign 组件的使用")],-1),t={class:"table-of-contents"},l=(0,e.Uk)("存在问题："),c=(0,e.Uk)("OpenFeign 组件"),o=(0,e.uE)('<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwvq5z8dhyj319e0bu0un.jpg" alt="image-20211129084106785"></p><div class="custom-container tip"><p class="custom-container-title">思考</p><p>使用 <code>RestTemplate + ribbon</code> 已经可以完成服务间的调用，为什么还要使用 <code>feign</code>？</p></div><details class="custom-container details"><summary>答案</summary><p>频繁写商品路径会造成代码冗余。</p></details><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> restTemplateForObject <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token string">&quot;http://服务名/url?参数&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="存在问题" tabindex="-1"><a class="header-anchor" href="#存在问题" aria-hidden="true">#</a> 存在问题：</h2><ul><li>每次调用服务都需要写这些代码，存在大量的代码冗余；</li><li>服务地址如果修改，维护成本增高；</li><li>使用时不够灵活。</li></ul><h2 id="openfeign-组件" tabindex="-1"><a class="header-anchor" href="#openfeign-组件" aria-hidden="true">#</a> OpenFeign 组件</h2>',7),i=(0,e.Uk)("官方网址："),u={href:"https://cloud.spring.io/spring-cloud-openfeign/reference/html/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("https://cloud.spring.io/spring-cloud-openfeign/reference/html/"),g=(0,e.uE)('<blockquote><p><code>Feign</code> 是一个声明式的伪 <code>Http</code> 客户端，它使得写 Http 客户端变得更简单。使用 Feign，只需要创建一个接口并注解。它具有可插拔的注解特性(可以使用springmvc的注解)，可使用Feign 注解和JAX-RS注解。Feign支持可插拔的编码器和解码器。Feign默认集成了Ribbon，默认实现了负载均衡的效果并且springcloud为feign添加了springmvc注解的支持。</p></blockquote><h4 id="案例-openfeign-服务调用" tabindex="-1"><a class="header-anchor" href="#案例-openfeign-服务调用" aria-hidden="true">#</a> 案例：openFeign 服务调用</h4><blockquote><p>还是通过「用户服务」调用「商品服务」。</p></blockquote><h5 id="_1、服务调用方法引入依赖openfeign依赖" tabindex="-1"><a class="header-anchor" href="#_1、服务调用方法引入依赖openfeign依赖" aria-hidden="true">#</a> 1、服务调用方法引入依赖OpenFeign依赖</h5><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- Open Feign 依赖--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7m7v4ejj324g07kta9.jpg" alt="image-20200713201342374"></p><h5 id="_2、入口类加入注解开启-openfeign-支持" tabindex="-1"><a class="header-anchor" href="#_2、入口类加入注解开启-openfeign-支持" aria-hidden="true">#</a> 2、入口类加入注解开启 <code>OpenFeign</code> 支持</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>\n<span class="token comment">// 开启 openfeign 支持</span>\n<span class="token annotation punctuation">@EnableFeignClients</span>   \n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Users9999Application</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Users9999Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mandwjj31vq0a8ac0.jpg" alt="image-20200713201602139"></p><h5 id="_3、创建一个客户端调用接口" tabindex="-1"><a class="header-anchor" href="#_3、创建一个客户端调用接口" aria-hidden="true">#</a> 3、创建一个客户端调用接口</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//value属性用来指定:调用服务名称</span>\n<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">&quot;PRODUCTS&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductClient</span> <span class="token punctuation">{</span>\n  \n    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/product/findAll&quot;</span><span class="token punctuation">)</span> <span class="token comment">//书写服务调用路径</span>\n    <span class="token class-name">String</span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7meb81gj31yo0b8abn.jpg" alt="image-20200713202133954"></p><h5 id="_4、使用-feignclient-客户端对象调用服务" tabindex="-1"><a class="header-anchor" href="#_4、使用-feignclient-客户端对象调用服务" aria-hidden="true">#</a> 4、使用 <code>feignClient</code> 客户端对象调用服务</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 注入客户端对象</span>\n<span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">ProductClient</span> productClient<span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user/findAllFeignClient&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">findAllFeignClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;通过使用OpenFeign组件调用商品服务...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token class-name">String</span> msg <span class="token operator">=</span> productClient<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> msg<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mh4atxj321u0e0778.jpg" alt="image-20200713202615159"></p><h5 id="_5、访问并测试服务" tabindex="-1"><a class="header-anchor" href="#_5、访问并测试服务" aria-hidden="true">#</a> 5、访问并测试服务</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:9999/user/findAllFeignClient\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7q9yk12j329s0actam.jpg" alt="image-20200713202802056"></p>',18),d={},k=(0,s(3744).Z)(d,[["render",function(n,a){const s=(0,e.up)("RouterLink"),d=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("nav",t,[(0,e._)("ul",null,[(0,e._)("li",null,[(0,e.Wm)(s,{to:"#存在问题"},{default:(0,e.w5)((()=>[l])),_:1})]),(0,e._)("li",null,[(0,e.Wm)(s,{to:"#openfeign-组件"},{default:(0,e.w5)((()=>[c])),_:1})])])]),o,(0,e._)("p",null,[i,(0,e._)("a",u,[r,(0,e.Wm)(d)])]),g],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);