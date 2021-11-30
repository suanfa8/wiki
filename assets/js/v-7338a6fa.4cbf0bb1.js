"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[6633],{5098:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-7338a6fa",path:"/RabbitMQ/4-hello-world/4.5-fanout.html",title:"4.5 第三种模型（fanout）",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"RabbitMQ/4-hello-world/4.5-fanout.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},3774:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="_4-5-第三种模型-fanout" tabindex="-1"><a class="header-anchor" href="#_4-5-第三种模型-fanout" aria-hidden="true">#</a> 4.5 第三种模型（fanout）</h1><nav class="table-of-contents"><ul></ul></nav><p><code>fanout 扇出 也称为广播</code></p><p><img src="https://images.gitee.com/uploads/images/2021/1027/181456_3820597d_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><p>在广播模式下，消息发送流程是这样的：</p><ul><li>可以有多个消费者</li><li>每个<strong>消费者有自己的queue</strong>（队列）</li><li>每个<strong>队列都要绑定到Exchange</strong>（交换机）</li><li><strong>生产者发送的消息，只能发送到交换机</strong>，交换机来决定要发给哪个队列，生产者无法决定。</li><li>交换机把消息发送给绑定过的所有队列</li><li>队列的消费者都能拿到消息。实现一条消息被多个消费者消费</li></ul><h5 id="_1-开发生产者" tabindex="-1"><a class="header-anchor" href="#_1-开发生产者" aria-hidden="true">#</a> 1. 开发生产者</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//声明交换机</span>\nchannel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//广播 一条消息多个消费者同时消费</span>\n<span class="token comment">//发布消息</span>\nchannel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_2-开发消费者-1" tabindex="-1"><a class="header-anchor" href="#_2-开发消费者-1" aria-hidden="true">#</a> 2. 开发消费者-1</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//绑定交换机</span>\nchannel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//创建临时队列</span>\n<span class="token class-name">String</span> queue <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//将临时队列绑定exchange</span>\nchannel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//处理消息</span>\nchannel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消费者1: &quot;</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h5 id="_3-开发消费者-2" tabindex="-1"><a class="header-anchor" href="#_3-开发消费者-2" aria-hidden="true">#</a> 3. 开发消费者-2</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//绑定交换机</span>\nchannel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//创建临时队列</span>\n<span class="token class-name">String</span> queue <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//将临时队列绑定exchange</span>\nchannel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//处理消息</span>\nchannel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消费者2: &quot;</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h5 id="_4-开发消费者-3" tabindex="-1"><a class="header-anchor" href="#_4-开发消费者-3" aria-hidden="true">#</a> 4.开发消费者-3</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//绑定交换机</span>\nchannel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;fanout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//创建临时队列</span>\n<span class="token class-name">String</span> queue <span class="token operator">=</span> channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//将临时队列绑定exchange</span>\nchannel<span class="token punctuation">.</span><span class="token function">queueBind</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token string">&quot;logs&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//处理消息</span>\nchannel<span class="token punctuation">.</span><span class="token function">basicConsume</span><span class="token punctuation">(</span>queue<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">DefaultConsumer</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token annotation punctuation">@Override</span>\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handleDelivery</span><span class="token punctuation">(</span><span class="token class-name">String</span> consumerTag<span class="token punctuation">,</span> <span class="token class-name">Envelope</span> envelope<span class="token punctuation">,</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> properties<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消费者3: &quot;</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h5 id="_5-测试结果" tabindex="-1"><a class="header-anchor" href="#_5-测试结果" aria-hidden="true">#</a> 5. 测试结果</h5><p><img src="https://images.gitee.com/uploads/images/2021/1027/181508_b72c5872_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><p><img src="https://images.gitee.com/uploads/images/2021/1027/181517_8309f59a_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><p><img src="https://images.gitee.com/uploads/images/2021/1027/181526_8dc48e44_426516.png" alt="输入图片说明" title="屏幕截图.png"></p>',18),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);