"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[5826],{2180:(e,t,l)=>{l.r(t),l.d(t,{data:()=>r});const r={key:"v-0cd171a9",path:"/SpringCloud/6-center/6-0-zhuce-center.html",title:"6-0 什么是「服务注册中心」？",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"常用的注册中心",slug:"常用的注册中心",children:[]}],filePathRelative:"SpringCloud/6-center/6-0-zhuce-center.md",git:{updatedTime:1638143942e3,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:1}]}}},7994:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});const r=(0,l(6252).uE)('<h1 id="_6-0-什么是「服务注册中心」" tabindex="-1"><a class="header-anchor" href="#_6-0-什么是「服务注册中心」" aria-hidden="true">#</a> 6-0 什么是「服务注册中心」？</h1><p>所谓服务注册中心就是在整个的微服务架构中单独提出一个服务，这个服务 <strong>不完成系统的任何的业务功能</strong> ，仅仅用来完成对整个微服务系统的服务注册和服务发现，以及对服务健康状态的监控和管理功能。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtrpnchzcj31qg0jmjus.jpg" alt="输入图片说明" title="屏幕截图.png"></p><p>服务注册中心：</p><ul><li>可以对所有的微服务的信息进行存储，如微服务的名称、IP、端口等；</li><li>可以在进行服务调用时通过服务发现查询可用的微服务列表及网络地址进行服务调用；</li><li>可以对所有的微服务进行 <strong>心跳检测</strong>，如发现某实例长时间无法访问，就会从服务注册表移除该实例。</li></ul><h2 id="常用的注册中心" tabindex="-1"><a class="header-anchor" href="#常用的注册中心" aria-hidden="true">#</a> 常用的注册中心</h2><p>SpringCloud 支持的多种注册中心：</p><ul><li>Eureka（Netflix）</li><li>Consul</li><li>Zookeeper</li><li>以及阿里巴巴推出 Nacos 组件</li></ul><p>这些注册中心在本质上都是用来管理服务的注册和发现以及服务状态的检查的。</p>',9),i={},n=(0,l(3744).Z)(i,[["render",function(e,t){return r}]])},3744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,r]of t)l[e]=r;return l}}}]);