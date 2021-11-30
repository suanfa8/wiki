"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[5572],{8460:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-71c22dfb",path:"/SpringCloud/6-center/6-5-consul-client.html",title:"6-5 开发 consul 客户端即微服务",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"创建项目并引入 consul 客户端依赖",slug:"创建项目并引入-consul-客户端依赖",children:[]},{level:3,title:"注解（可加，也可以不加）",slug:"注解-可加-也可以不加",children:[]},{level:3,title:"编写 properties 配置",slug:"编写-properties-配置",children:[]},{level:3,title:"启动服务查看 consul 界面服务信息",slug:"启动服务查看-consul-界面服务信息",children:[]},{level:3,title:"consul 开启健康监控检查",slug:"consul-开启健康监控检查",children:[]}],filePathRelative:"SpringCloud/6-center/6-5-consul-client.md",git:{updatedTime:1638143942e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},6391:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="_6-5-开发-consul-客户端即微服务" tabindex="-1"><a class="header-anchor" href="#_6-5-开发-consul-客户端即微服务" aria-hidden="true">#</a> 6-5 开发 consul 客户端即微服务</h1><p>官方网站：https://spring.io/projects/spring-cloud-consul</p><h3 id="创建项目并引入-consul-客户端依赖" tabindex="-1"><a class="header-anchor" href="#创建项目并引入-consul-客户端依赖" aria-hidden="true">#</a> 创建项目并引入 consul 客户端依赖</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引入 consul 依赖--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-consul-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu764p2kmj31wo07y402.jpg" alt="image-20200710113855944"></p><h3 id="注解-可加-也可以不加" tabindex="-1"><a class="header-anchor" href="#注解-可加-也可以不加" aria-hidden="true">#</a> 注解（可加，也可以不加）</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableDiscoveryClient</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="编写-properties-配置" tabindex="-1"><a class="header-anchor" href="#编写-properties-配置" aria-hidden="true">#</a> 编写 properties 配置</h3><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">server.port</span><span class="token punctuation">=</span><span class="token attr-value">8889</span>\n<span class="token attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token attr-value">consulclient8889</span>\n<span class="token comment"># 注册 consul 服务的主机</span>\n<span class="token attr-name">spring.cloud.consul.host</span><span class="token punctuation">=</span><span class="token attr-value">localhost</span>\n<span class="token comment"># 注册 consul 服务的端口号</span>\n<span class="token attr-name">spring.cloud.consul.port</span><span class="token punctuation">=</span><span class="token attr-value">8500\t</span>\n<span class="token comment"># 关闭 consul 服务的健康检查[不推荐]</span>\n<span class="token attr-name">spring.cloud.consul.discovery.register-health-check</span><span class="token punctuation">=</span><span class="token attr-value">false\t    </span>\n<span class="token comment"># 指定注册的服务名称 默认就是应用名</span>\n<span class="token attr-name">spring.cloud.consul.discovery.service-name</span><span class="token punctuation">=</span><span class="token attr-value">${spring.application.name} </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvuf42eqkzj32bw05gdhh.jpg" alt="image-20200713135437947"></p><p>!&gt; 注意：健康检查一定要打开。</p><h3 id="启动服务查看-consul-界面服务信息" tabindex="-1"><a class="header-anchor" href="#启动服务查看-consul-界面服务信息" aria-hidden="true">#</a> 启动服务查看 consul 界面服务信息</h3><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu76midbzj32ks0iqq68.jpg" alt="image-20200713135359150"></p><h3 id="consul-开启健康监控检查" tabindex="-1"><a class="header-anchor" href="#consul-开启健康监控检查" aria-hidden="true">#</a> consul 开启健康监控检查</h3><p>开启 consul 健康监控。</p><p>默认情况加 consul 监控健康是开启的，但是必须依赖健康监控依赖才能正确监控健康状态所以直接启动会显示错误，引入健康监控依赖之后服务正常。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- 这个包是用做健康度监控的 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu789pi8gj32hy0iewhe.jpg" alt="image-20200713140146813"></p><h5 id="consul-关闭健康监控检查" tabindex="-1"><a class="header-anchor" href="#consul-关闭健康监控检查" aria-hidden="true">#</a> consul 关闭健康监控检查</h5><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">server.port</span><span class="token punctuation">=</span><span class="token attr-value">8889</span>\n<span class="token attr-name">spring.application.name</span><span class="token punctuation">=</span><span class="token attr-value">consulclient8889</span>\n<span class="token comment"># 注册 consul 服务的主机</span>\n<span class="token attr-name">spring.cloud.consul.host</span><span class="token punctuation">=</span><span class="token attr-value">localhost</span>\n<span class="token comment"># 注册 consul 服务的端口号</span>\n<span class="token attr-name">spring.cloud.consul.port</span><span class="token punctuation">=</span><span class="token attr-value">8500\t</span>\n<span class="token comment"># 关闭 consul 服务的健康检查[不推荐]</span>\n<span class="token attr-name">spring.cloud.consul.discovery.register-health-check</span><span class="token punctuation">=</span><span class="token attr-value">true\t</span>\n<span class="token comment"># 指定注册的服务名称 默认就是应用名</span>\n<span class="token attr-name">spring.cloud.consul.discovery.service-name</span><span class="token punctuation">=</span><span class="token attr-value">${spring.application.name} </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu79uq28aj328o072go5.jpg" alt="image-20200710114321913"></p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu79vwjhfj32jy0j0got.jpg" alt="image-20200710121728014"></p><p><img src="https://images.gitee.com/uploads/images/2021/1028/021338_61f21717_426516.png" alt="输入图片说明" title="屏幕截图.png"></p>',23),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);