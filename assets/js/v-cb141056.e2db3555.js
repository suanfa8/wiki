"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[6709],{5023:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l={key:"v-cb141056",path:"/SpringCloud/9-Hystrix/9-2-Fuse.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"9-2 服务熔断",slug:"_9-2-服务熔断",children:[{level:3,title:"服务熔断",slug:"服务熔断",children:[]},{level:3,title:"服务熔断图示",slug:"服务熔断图示",children:[]}]}],filePathRelative:"SpringCloud/9-Hystrix/9-2-Fuse.md",git:{updatedTime:1638143942e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},5851:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const l=(0,a(6252).uE)('<h2 id="_9-2-服务熔断" tabindex="-1"><a class="header-anchor" href="#_9-2-服务熔断" aria-hidden="true">#</a> 9-2 服务熔断</h2><h3 id="服务熔断" tabindex="-1"><a class="header-anchor" href="#服务熔断" aria-hidden="true">#</a> 服务熔断</h3><ul><li>「熔断器」本身是一种开关装置，当某个服务单元发生故障之后，通过断路器的故障监控，某个异常条件被触发，直接熔断整个服务。</li><li><strong>向调用方法返回一个符合预期的、可处理的备选响应（FallBack）</strong> ，而不是长时间的等待或者抛出调用方法无法处理的异常，就保证了服务调用方的线程不会被长时间占用，避免故障在分布式系统中蔓延，乃至雪崩。如果目标服务情况好转则恢复调用；</li><li><strong>服务熔断是解决服务雪崩的重要手段</strong> 。</li></ul><h3 id="服务熔断图示" tabindex="-1"><a class="header-anchor" href="#服务熔断图示" aria-hidden="true">#</a> 服务熔断图示</h3><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xk4q9zj31oq0hmtbn.jpg" alt="image-20200717085946385"></p>',5),r={},i=(0,a(3744).Z)(r,[["render",function(e,t){return l}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,l]of t)a[e]=l;return a}}}]);