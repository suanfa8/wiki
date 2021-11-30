"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[9101],{4635:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-e7283c6e",path:"/RabbitMQ/5-SpringBoot/5.2-work-quene.html",title:"5.2-第二种 work 模型使用",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"开发生产者",slug:"开发生产者",children:[]},{level:2,title:"开发消费者",slug:"开发消费者",children:[]}],filePathRelative:"RabbitMQ/5-SpringBoot/5.2-work-quene.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},6226:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var t=a(6252);const p=(0,t._)("h1",{id:"_5-2-第二种-work-模型使用",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#_5-2-第二种-work-模型使用","aria-hidden":"true"},"#"),(0,t.Uk)(" 5.2-第二种 work 模型使用")],-1),e={class:"table-of-contents"},o=(0,t.Uk)("开发生产者"),c=(0,t.Uk)("开发消费者"),l=(0,t.uE)('<h2 id="开发生产者" tabindex="-1"><a class="header-anchor" href="#开发生产者" aria-hidden="true">#</a> 开发生产者</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Test</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testWork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;work&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello work!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="开发消费者" tabindex="-1"><a class="header-anchor" href="#开发消费者" aria-hidden="true">#</a> 开发消费者</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorkCustomer</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token string">&quot;work&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive1</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;work message1 = &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queuesToDeclare <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token string">&quot;work&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive2</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;work message2 = &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p><code>说明:默认在Spring AMQP实现中Work这种方式就是公平调度,如果需要实现能者多劳需要额外配置</code></p></blockquote>',5),u={},i=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("nav",e,[(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(a,{to:"#开发生产者"},{default:(0,t.w5)((()=>[o])),_:1})]),(0,t._)("li",null,[(0,t.Wm)(a,{to:"#开发消费者"},{default:(0,t.w5)((()=>[c])),_:1})])])]),l],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);