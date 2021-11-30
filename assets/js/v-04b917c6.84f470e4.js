"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[2066],{6439:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r={key:"v-04b917c6",path:"/SpringCloud/9-Hystrix/9-3-Downgrade.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"9-3 服务降级",slug:"_9-3-服务降级",children:[]}],filePathRelative:"SpringCloud/9-Hystrix/9-3-Downgrade.md",git:{updatedTime:1638143942e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},4920:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});const r=(0,t(6252).uE)('<h3 id="_9-3-服务降级" tabindex="-1"><a class="header-anchor" href="#_9-3-服务降级" aria-hidden="true">#</a> 9-3 服务降级</h3><h4 id="服务降级说明" tabindex="-1"><a class="header-anchor" href="#服务降级说明" aria-hidden="true">#</a> 服务降级说明</h4><ul><li>服务压力剧增的时候根据当前的业务情况及流量对一些服务和页面有策略的降级，以此环节服务器的压力，以保证核心任务的进行。同时保证部分甚至大部分任务客户能得到正确的相应。也就是当前的请求处理不了了或者出错了，给一个默认的返回。</li></ul><blockquote><p>通俗解释：关闭系统中边缘服务，保证系统核心服务的正常运行 ，称之为「服务降级」。</p></blockquote><p>例如：双 12，淘宝，删除地址，确认收货，删除订单，取消支付，<strong>把这些服务都删掉，可以节省 cpu，内存</strong>。</p><h4 id="服务降级图示" tabindex="-1"><a class="header-anchor" href="#服务降级图示" aria-hidden="true">#</a> 服务降级图示</h4><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xkz0bjj31rs0dg75h.jpg" alt="image-20200717112327729"></p>',7),n={},i=(0,t(3744).Z)(n,[["render",function(e,a){return r}]])},3744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,r]of a)t[e]=r;return t}}}]);