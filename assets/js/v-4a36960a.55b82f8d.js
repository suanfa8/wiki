"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[340],{7803:(s,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-4a36960a",path:"/SpringCloud/12-Bus/12-3-bus-auto-flush.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"12-3 实现自动配置刷新",slug:"_12-3-实现自动配置刷新",children:[]}],filePathRelative:"SpringCloud/12-Bus/12-3-bus-auto-flush.md",git:{updatedTime:1638143942e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},1152:(s,a,n)=>{n.r(a),n.d(a,{default:()=>e});const t=(0,n(6252).uE)('<h2 id="_12-3-实现自动配置刷新" tabindex="-1"><a class="header-anchor" href="#_12-3-实现自动配置刷新" aria-hidden="true">#</a> 12-3 实现自动配置刷新</h2><p>第 1 步：在所有项目中引入 bus 依赖</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- 引入 bus 依赖 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-bus-amqp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu88qrbnrj31ks074jsw.jpg" alt="image-20200723104333906"></p><p>第 2 步：配置统一配置中心连接到 MQ</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">spring.rabbitmq.host</span><span class="token punctuation">=</span><span class="token attr-value">localhost\t\t\t\t\t\t\t\t\t\t\t#连接主机</span>\n<span class="token attr-name">spring.rabbitmq.port</span><span class="token punctuation">=</span><span class="token attr-value">5672\t\t\t\t\t\t\t\t\t\t\t\t\t\t#连接mq端口</span>\n<span class="token attr-name">spring.rabbitmq.username</span><span class="token punctuation">=</span><span class="token attr-value">user\t\t\t\t\t\t\t\t\t\t\t\t#连接mq用户名</span>\n<span class="token attr-name">spring.rabbitmq.password</span><span class="token punctuation">=</span><span class="token attr-value">password\t\t\t\t\t\t\t\t\t\t#连接mq密码</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 3 步：远端配置中加入连接 MQ 配置</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu88t4iayj31vq0d0gnx.jpg" alt="image-20200723105645915"></p><p>第 4 步： 启动统一配置中心服务</p><p>正常启动。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu88x2ki8j322m06mdk6.jpg" alt="image-20200723111220198"></p><p>第 5 步：启动客户端服务</p><ul><li>加入 bus 组件之后客户端启动报错；</li></ul><ul><li>原因 SpringCloud 中默认链接不到远程服务器不会报错，但是在使用 bus 消息总线时必须开启连接远程服务失败报错。</li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu88zkl55j31y60bamz5.jpg" alt="image-20200723111312496"></p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">spring.cloud.config.fail-fast</span><span class="token punctuation">=</span><span class="token attr-value">true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu8920ictj31p80baaej.jpg" alt="image-20200723111754187"></p><p>第 6 步：修改远程配置后在配置中心服务通过执行 post 接口刷新配置</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>curl -X POST http://localhost:7878/actuator/bus-refresh\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwunz9ppi6j31si02ojrv.jpg" alt="image-20200723112316476"></p><p>第 7 步：通过上述配置就实现了配置统一刷新</p>',21),p={},e=(0,n(3744).Z)(p,[["render",function(s,a){return t}]])},3744:(s,a)=>{a.Z=(s,a)=>{const n=s.__vccOpts||s;for(const[s,t]of a)n[s]=t;return n}}}]);