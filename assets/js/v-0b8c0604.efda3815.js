"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[9898],{7997:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-0b8c0604",path:"/SpringCloud/7-communication/7-3-Ribbon.html",title:"7-3 基于 Ribbon 的服务调用（负载均衡）",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何使用 Ribbon",slug:"如何使用-ribbon",children:[{level:3,title:"1、项目中引入依赖",slug:"_1、项目中引入依赖",children:[]},{level:3,title:"2、查看 consul client 中依赖的 Ribbon",slug:"_2、查看-consul-client-中依赖的-ribbon",children:[]},{level:3,title:"3、使用 restTemplate + ribbon进行服务调用",slug:"_3、使用-resttemplate-ribbon进行服务调用",children:[]}]},{level:2,title:"使用 restTemplate + ribbon进行服务调用",slug:"使用-resttemplate-ribbon进行服务调用",children:[{level:3,title:"方法二：使用 loadBalance Client 形式调用",slug:"方法二-使用-loadbalance-client-形式调用",children:[]},{level:3,title:"方法三：使用 @loadBalanced",slug:"方法三-使用-loadbalanced",children:[]}]}],filePathRelative:"SpringCloud/7-communication/7-3-Ribbon.md",git:{updatedTime:1638145972e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:2}]}}},8152:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(6252);const p=(0,t._)("h1",{id:"_7-3-基于-ribbon-的服务调用-负载均衡",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_7-3-基于-ribbon-的服务调用-负载均衡","aria-hidden":"true"},"#"),(0,t.Uk)(" 7-3 基于 Ribbon 的服务调用（负载均衡）")],-1),e={class:"table-of-contents"},o=(0,t.Uk)("如何使用 Ribbon"),c=(0,t.Uk)("1、项目中引入依赖"),l=(0,t.Uk)("2、查看 consul client 中依赖的 Ribbon"),u=(0,t.Uk)("3、使用 restTemplate + ribbon进行服务调用"),i=(0,t.Uk)("使用 restTemplate + ribbon进行服务调用"),r=(0,t.Uk)("方法二：使用 loadBalance Client 形式调用"),k=(0,t.Uk)("方法三：使用 @loadBalanced"),b=(0,t.Uk)("官方网址："),d={href:"https://github.com/Netflix/ribbon",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("https://github.com/Netflix/ribbon"),g=(0,t.uE)('<p>Spring Cloud Ribbon 是一个基于 HTTP 和 TCP 的客户端负载均衡工具，它基于 Netflix Ribbon 实现。通过 Spring Cloud 的封装，可以让我们轻松地将面向服务的 REST 模版请求自动转换成客户端负载均衡的服务调用。</p><p>Ribbon 服务调用，结合 <code>restTemplate</code> 完成负载均衡。</p><h2 id="如何使用-ribbon" tabindex="-1"><a class="header-anchor" href="#如何使用-ribbon" aria-hidden="true">#</a> 如何使用 Ribbon</h2><h3 id="_1、项目中引入依赖" tabindex="-1"><a class="header-anchor" href="#_1、项目中引入依赖" aria-hidden="true">#</a> 1、项目中引入依赖</h3><p>说明：</p><ul><li>如果使用的是 <code>Eureka Client</code> 和 <code>Consul client</code>，无须引入依赖，因为在 Eureka，Consul 中默认集成了 Ribbon 组件；</li><li>如果使用的 client 中没有 Ribbon 依赖需要显式引入如下依赖。</li></ul><blockquote><p>Consul 中默认集成了 Ribbon 组件，所以不需要显式引入依赖。</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引入 ribbon 依赖--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-ribbon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2、查看-consul-client-中依赖的-ribbon" tabindex="-1"><a class="header-anchor" href="#_2、查看-consul-client-中依赖的-ribbon" aria-hidden="true">#</a> 2、查看 consul client 中依赖的 Ribbon</h3><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jirkmaj328o0a2goi.jpg" alt="image-20200713140804414"></p><h3 id="_3、使用-resttemplate-ribbon进行服务调用" tabindex="-1"><a class="header-anchor" href="#_3、使用-resttemplate-ribbon进行服务调用" aria-hidden="true">#</a> 3、使用 restTemplate + ribbon进行服务调用</h3><ul><li>方法一：使用 <code>discovery client</code> 进行客户端调用</li><li>方法二：使用 <code>loadBalanceClient</code> 进行客户端调用</li><li>方法三：使用 <code>@loadBalanced</code> 进行客户端调用</li></ul><h2 id="使用-resttemplate-ribbon进行服务调用" tabindex="-1"><a class="header-anchor" href="#使用-resttemplate-ribbon进行服务调用" aria-hidden="true">#</a> 使用 restTemplate + ribbon进行服务调用</h2><h4 id="方法一-使用-discovery-client-形式调用" tabindex="-1"><a class="header-anchor" href="#方法一-使用-discovery-client-形式调用" aria-hidden="true">#</a> 方法一：使用 <code>discovery Client</code> 形式调用</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// http://localhost:9999/user/findAll</span>\n<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user/findAll&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ServiceInstance</span><span class="token punctuation">&gt;</span></span> <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;调用用户服务...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ServiceInstance</span><span class="token punctuation">&gt;</span></span> serviceInstances <span class="token operator">=</span> discoveryClient<span class="token punctuation">.</span><span class="token function">getInstances</span><span class="token punctuation">(</span><span class="token string">&quot;products&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ServiceInstance</span> serviceInstance <span class="token operator">:</span> serviceInstances<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务主机:[{}]&quot;</span><span class="token punctuation">,</span> serviceInstance<span class="token punctuation">.</span><span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务端口:[{}]&quot;</span><span class="token punctuation">,</span> serviceInstance<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务地址:[{}]&quot;</span><span class="token punctuation">,</span> serviceInstance<span class="token punctuation">.</span><span class="token function">getUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;====================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> serviceInstances<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>访问：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://localhost:9999/user/findAll\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>页面上显示</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// 20211127190740</span>\n<span class="token comment">// http://localhost:9999/user/findAll</span>\n\n<span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">&quot;instanceId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;products-9997&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;serviceId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;products&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.1.7&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">9997</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;uri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://192.168.1.7:9997&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;scheme&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">&quot;instanceId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;products-9998&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;serviceId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;products&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.1.7&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">9998</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;metadata&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;secure&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;uri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://192.168.1.7:9998&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;scheme&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>代码：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">DiscoveryClient</span> discoveryClient<span class="token punctuation">;</span>\n\n<span class="token comment">// 获取服务列表</span>\n<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ServiceInstance</span><span class="token punctuation">&gt;</span></span> products <span class="token operator">=</span> discoveryClient<span class="token punctuation">.</span><span class="token function">getInstances</span><span class="token punctuation">(</span><span class="token string">&quot;服务ID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ServiceInstance</span> product <span class="token operator">:</span> products<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务主机:[{}]&quot;</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务端口:[{}]&quot;</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务地址:[{}]&quot;</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;====================================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="方法二-使用-loadbalance-client-形式调用" tabindex="-1"><a class="header-anchor" href="#方法二-使用-loadbalance-client-形式调用" aria-hidden="true">#</a> 方法二：使用 <code>loadBalance Client</code> 形式调用</h3><blockquote><p><code>LoadBalancerClient</code> 可以实现 <strong>负载均衡</strong>。</p></blockquote><p>代码：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">LoadBalancerClient</span> loadBalancerClient<span class="token punctuation">;</span>\n\n<span class="token comment">//根据负载均衡策略选取某一个服务调用</span>\n<span class="token class-name">ServiceInstance</span> product <span class="token operator">=</span> loadBalancerClient<span class="token punctuation">.</span><span class="token function">choose</span><span class="token punctuation">(</span><span class="token string">&quot;服务ID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//地址  轮询策略</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务主机:[{}]&quot;</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务端口:[{}]&quot;</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;服务地址:[{}]&quot;</span><span class="token punctuation">,</span>product<span class="token punctuation">.</span><span class="token function">getUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="方法三-使用-loadbalanced" tabindex="-1"><a class="header-anchor" href="#方法三-使用-loadbalanced" aria-hidden="true">#</a> 方法三：使用 <code>@loadBalanced</code></h3><p>代码：</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// 1. 整合 restTemplate + ribbon</span>\n<span class="token annotation punctuation">@Bean</span>\n<span class="token annotation punctuation">@LoadBalanced</span>\n<span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">getRestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 2. 调用服务位置注入RestTemplate</span>\n<span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">;</span>\n\n<span class="token comment">// 3. 调用</span>\n<span class="token class-name">String</span> forObject <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token string">&quot;http://服务ID/hello/hello?name=&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',28),q={},h=(0,a(3744).Z)(q,[["render",function(n,s){const a=(0,t.up)("RouterLink"),q=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("nav",e,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#如何使用-ribbon"},{default:(0,t.w5)((()=>[o])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_1、项目中引入依赖"},{default:(0,t.w5)((()=>[c])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_2、查看-consul-client-中依赖的-ribbon"},{default:(0,t.w5)((()=>[l])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#_3、使用-resttemplate-ribbon进行服务调用"},{default:(0,t.w5)((()=>[u])),_:1})])])]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#使用-resttemplate-ribbon进行服务调用"},{default:(0,t.w5)((()=>[i])),_:1}),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#方法二-使用-loadbalance-client-形式调用"},{default:(0,t.w5)((()=>[r])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#方法三-使用-loadbalanced"},{default:(0,t.w5)((()=>[k])),_:1})])])])])]),(0,t._)("p",null,[b,(0,t._)("a",d,[m,(0,t.Wm)(q)])]),g],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);