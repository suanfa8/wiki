"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[5504],{5544:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-2fdc74fc",path:"/RabbitMQ/5-SpringBoot/5.4-route.html",title:"5.4-Route 路由模型",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"RabbitMQ/5-SpringBoot/5.4-route.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},3161:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="_5-4-route-路由模型" tabindex="-1"><a class="header-anchor" href="#_5-4-route-路由模型" aria-hidden="true">#</a> 5.4-Route 路由模型</h1><nav class="table-of-contents"><ul></ul></nav><h5 id="开发生产者" tabindex="-1"><a class="header-anchor" href="#开发生产者" aria-hidden="true">#</a> 开发生产者</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>\n<span class="token keyword">private</span> <span class="token class-name">RabbitTemplate</span> rabbitTemplate<span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Test</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  rabbitTemplate<span class="token punctuation">.</span><span class="token function">convertAndSend</span><span class="token punctuation">(</span><span class="token string">&quot;directs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;error 的日志信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h5 id="开发消费者" tabindex="-1"><a class="header-anchor" href="#开发消费者" aria-hidden="true">#</a> 开发消费者</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectCustomer</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>\n                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&quot;directs&quot;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive1</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;message1 = &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>bindings <span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token annotation punctuation">@QueueBinding</span><span class="token punctuation">(</span>\n                    value <span class="token operator">=</span> <span class="token annotation punctuation">@Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                    exchange <span class="token operator">=</span> <span class="token annotation punctuation">@Exchange</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>name<span class="token operator">=</span><span class="token string">&quot;directs&quot;</span><span class="token punctuation">)</span>\n            <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive2</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;message2 = &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>',6),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);