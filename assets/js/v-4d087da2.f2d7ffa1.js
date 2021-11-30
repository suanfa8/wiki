"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[5435],{3581:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l={key:"v-4d087da2",path:"/RabbitMQ/6-application/6.1-asynchronous.html",title:"第 6 章 MQ的应用场景",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"6.1 异步处理",slug:"_6-1-异步处理",children:[]}],filePathRelative:"RabbitMQ/6-application/6.1-asynchronous.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},6790:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(6252);const i=(0,l._)("h1",{id:"第-6-章-mq的应用场景",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#第-6-章-mq的应用场景","aria-hidden":"true"},"#"),(0,l.Uk)(" 第 6 章 MQ的应用场景")],-1),s={class:"table-of-contents"},o=(0,l.Uk)("6.1 异步处理"),n=(0,l.uE)('<h3 id="_6-1-异步处理" tabindex="-1"><a class="header-anchor" href="#_6-1-异步处理" aria-hidden="true">#</a> 6.1 异步处理</h3><p><code>场景说明：用户注册后，需要发注册邮件和注册短信,传统的做法有两种 1.串行的方式 2.并行的方式</code></p><ul><li><code>串行方式:</code> 将注册信息写入数据库后,发送注册邮件,再发送注册短信,以上三个任务全部完成后才返回给客户端。 这有一个问题是,邮件,短信并不是必须的,它只是一个通知,而这种做法让客户端等待没有必要等待的东西.</li></ul><p><img src="https://images.gitee.com/uploads/images/2021/1027/193517_d5046f53_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><ul><li><code>并行方式: </code>将注册信息写入数据库后,发送邮件的同时,发送短信,以上三个任务完成后,返回给客户端,并行的方式能提高处理的时间。</li></ul><p><img src="https://images.gitee.com/uploads/images/2021/1027/193527_427abaf5_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><ul><li><code>消息队列:</code>假设三个业务节点分别使用50ms,串行方式使用时间150ms,并行使用时间100ms。虽然并行已经提高的处理时间,但是,前面说过,邮件和短信对我正常的使用网站没有任何影响，客户端没有必要等着其发送完成才显示注册成功,应该是写入数据库后就返回. <code>消息队列</code>: 引入消息队列后，把发送邮件,短信不是必须的业务逻辑异步处理</li></ul><p><img src="https://images.gitee.com/uploads/images/2021/1027/193633_16f152be_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><p>由此可以看出,引入消息队列后，用户的响应时间就等于写入数据库的时间+写入消息队列的时间(可以忽略不计),引入消息队列后处理后,响应时间是串行的3倍,是并行的2倍。</p>',9),c={},d=(0,a(3744).Z)(c,[["render",function(e,t){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("nav",s,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:"#_6-1-异步处理"},{default:(0,l.w5)((()=>[o])),_:1})])])]),n],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,l]of t)a[e]=l;return a}}}]);