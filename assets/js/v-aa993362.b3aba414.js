"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[8646],{4132:(e,i,t)=>{t.r(i),t.d(i,{data:()=>r});const r={key:"v-aa993362",path:"/SpringCloud/9-Hystrix/9-1-Hystrix-intro.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"9-1 Hystrix 组件使用",slug:"_9-1-hystrix-组件使用",children:[{level:3,title:"Hystrix 组件",slug:"hystrix-组件",children:[]},{level:3,title:"服务雪崩（级联调用不可用）",slug:"服务雪崩-级联调用不可用",children:[]}]}],filePathRelative:"SpringCloud/9-Hystrix/9-1-Hystrix-intro.md",git:{updatedTime:1638143942e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},6340:(e,i,t)=>{t.r(i),t.d(i,{default:()=>a});const r=(0,t(6252).uE)('<h2 id="_9-1-hystrix-组件使用" tabindex="-1"><a class="header-anchor" href="#_9-1-hystrix-组件使用" aria-hidden="true">#</a> 9-1 Hystrix 组件使用</h2><h3 id="hystrix-组件" tabindex="-1"><a class="header-anchor" href="#hystrix-组件" aria-hidden="true">#</a> Hystrix 组件</h3><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7z4q2hzj31e80cwwfv.jpg" alt="image-20200715123359665"></p><blockquote><p>In a distributed environment, inevitably some of the many service dependencies will fail. Hystrix is a library that helps you control the interactions between these distributed services by adding latency tolerance and fault tolerance logic. Hystrix does this by isolating points of access between the services, stopping cascading failures across them, and providing fallback options, all of which improve your system’s overall resiliency. --[摘自官方]</p></blockquote><p>官方网站：https://github.com/Netflix/Hystrix</p><ul><li><p>译：在分布式环境中，许多服务依赖项不可避免地会失败。Hystrix 是一个库，它通过添加延迟容忍和容错逻辑来帮助您控制这些分布式服务之间的交互。Hystrix 通过隔离服务之间的访问点、停止它们之间的级联故障以及提供后备选项来实现这一点，所有这些都可以提高系统的整体弹性。</p></li><li><p>通俗定义：Hystrix 是一个用于处理分布式系统的延迟和容错的开源库，在分布式系统中，许多依赖不可避免的会调用失败，超时、异常等，Hystrix 能够保证在一个依赖出问题的情况下，不会导致整体服务失败，避免级联故障（服务雪崩现象），提高分布式系统的弹性。</p></li></ul><h3 id="服务雪崩-级联调用不可用" tabindex="-1"><a class="header-anchor" href="#服务雪崩-级联调用不可用" aria-hidden="true">#</a> 服务雪崩（级联调用不可用）</h3><p>在微服务之间进行服务调用是由于某一个服务故障，<strong>导致级联服务故障的现象</strong> ，称为雪崩效应。</p><blockquote><p>雪崩效应描述的是 <strong>提供方不可用</strong>，导致消费方不可用并将不可用逐渐放大的过程。</p></blockquote><p>图解雪崩效应</p><ul><li>如存在如下调用链路:</li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xfs2kcj31hi05mgm0.jpg" alt="image-20200715151728240"></p><p>而此时，Service A 的流量波动很大，流量经常会突然性增加！</p><p>那么在这种情况下，就算 Service A 能扛得住请求，Service B 和 Service C 未必能扛得住这突发的请求。</p><p>此时，如果 Service C 因为抗不住请求，变得不可用。那么 Service B 的请求也会阻塞，慢慢耗尽 Service B 的线程资源，Service B 就会变得不可用。紧接着，Service A 也会不可用，这一过程如下图所示：</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xj0iwjj31r00hwjud.jpg" alt="image-20200715152623313"></p><p>并发测试工具：https://jmeter.apache.org/</p>',17),s={},a=(0,t(3744).Z)(s,[["render",function(e,i){return r}]])},3744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,r]of i)t[e]=r;return t}}}]);