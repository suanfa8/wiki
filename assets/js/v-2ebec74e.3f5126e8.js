"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[4622],{4993:(e,l,t)=>{t.r(l),t.d(l,{data:()=>r});const r={key:"v-2ebec74e",path:"/SpringCloud/9-Hystrix/9-4-Summarize.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"9-4 降级和熔断总结",slug:"_9-4-降级和熔断总结",children:[{level:3,title:"共同点",slug:"共同点",children:[]},{level:3,title:"异同点",slug:"异同点",children:[]},{level:3,title:"总结",slug:"总结",children:[]}]}],filePathRelative:"SpringCloud/9-Hystrix/9-4-Summarize.md",git:{updatedTime:1638143942e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},8937:(e,l,t)=>{t.r(l),t.d(l,{default:()=>a});const r=(0,t(6252).uE)('<h2 id="_9-4-降级和熔断总结" tabindex="-1"><a class="header-anchor" href="#_9-4-降级和熔断总结" aria-hidden="true">#</a> 9-4 降级和熔断总结</h2><blockquote><p>熔断：自动触发</p><p>降级：人工干预</p></blockquote><h3 id="共同点" tabindex="-1"><a class="header-anchor" href="#共同点" aria-hidden="true">#</a> 共同点</h3><ul><li>目的很一致，都是从可用性可靠性着想，为防止系统的整体缓慢甚至崩溃，采用的技术手段；</li><li>最终表现类似，对于两者来说，最终让用户体验到的是某些功能暂时不可达或不可用；</li><li>粒度一般都是服务级别，当然，业界也有不少更细粒度的做法，比如做到数据持久层（允许查询，不允许增删改）；</li><li>自治性要求很高， <strong>熔断模式一般都是服务基于策略的自动触发，降级虽说可人工干预，但在微服务架构下，完全靠人显然不可能，开关预置、配置中心都是必要手段</strong> ；</li></ul><h3 id="异同点" tabindex="-1"><a class="header-anchor" href="#异同点" aria-hidden="true">#</a> 异同点</h3><ul><li><p>触发原因不太一样，服务熔断一般是某个服务（下游服务）故障引起，而服务降级一般是从整体负荷考虑；</p></li><li><p>管理目标的层次不太一样，熔断其实是一个框架级的处理，每个微服务都需要（无层级之分），而降级一般需要对业务有层级之分（比如降级一般是从最外围服务开始）。</p></li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p><strong>熔断必会触发降级，所以熔断也是降级一种</strong>，区别在于 <strong>熔断是对调用链路的保护，而降级是对系统过载的一种保护处理</strong> 。</p>',8),i={},a=(0,t(3744).Z)(i,[["render",function(e,l){return r}]])},3744:(e,l)=>{l.Z=(e,l)=>{const t=e.__vccOpts||e;for(const[e,r]of l)t[e]=r;return t}}}]);