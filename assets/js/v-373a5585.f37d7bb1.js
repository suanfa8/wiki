"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[2915],{4896:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-373a5585",path:"/RabbitMQ/3-config.html",title:"第 3 章 RabiitMQ 配置",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"3.1-RabbitMQ 管理命令行",slug:"_3-1-rabbitmq-管理命令行",children:[]},{level:2,title:"3.2-web管理界面介绍",slug:"_3-2-web管理界面介绍",children:[{level:3,title:"3.2.1 overview 概览",slug:"_3-2-1-overview-概览",children:[]},{level:3,title:"3.2.2 Admin 用户和虚拟主机管理",slug:"_3-2-2-admin-用户和虚拟主机管理",children:[]}]}],filePathRelative:"RabbitMQ/3-config.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},5295:(e,a,i)=>{i.r(a),i.d(a,{default:()=>u});var l=i(6252);const t=(0,l._)("h1",{id:"第-3-章-rabiitmq-配置",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#第-3-章-rabiitmq-配置","aria-hidden":"true"},"#"),(0,l.Uk)(" 第 3 章 RabiitMQ 配置")],-1),n={class:"table-of-contents"},s=(0,l.Uk)("3.1-RabbitMQ 管理命令行"),r=(0,l.Uk)("3.2-web管理界面介绍"),d=(0,l.Uk)("3.2.1 overview 概览"),p=(0,l.Uk)("3.2.2 Admin 用户和虚拟主机管理"),c=(0,l.uE)('<h2 id="_3-1-rabbitmq-管理命令行" tabindex="-1"><a class="header-anchor" href="#_3-1-rabbitmq-管理命令行" aria-hidden="true">#</a> 3.1-RabbitMQ 管理命令行</h2><ul><li>1.服务启动相关</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start|restart|stop|status rabbitmq-server\t\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>2.管理命令行</li></ul><p>用来在不使用 web 管理界面情况下命令操作 RabbitMQ</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rabbitmqctl help \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以查看更多命令。</p><ul><li>3.插件管理命令行</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rabbitmq-plugins enable|list|disable \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3-2-web管理界面介绍" tabindex="-1"><a class="header-anchor" href="#_3-2-web管理界面介绍" aria-hidden="true">#</a> 3.2-web管理界面介绍</h2><h3 id="_3-2-1-overview-概览" tabindex="-1"><a class="header-anchor" href="#_3-2-1-overview-概览" aria-hidden="true">#</a> 3.2.1 overview 概览</h3><p><img src="https://images.gitee.com/uploads/images/2021/1027/180225_3900cd5a_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><ul><li><p><code>connections</code>：无论生产者还是消费者，都需要与 RabbitMQ 建立连接后才可以完成消息的生产和消费，在这里可以查看连接情况。</p></li><li><p><code>channels</code>：通道，建立连接后，会形成通道，消息的投递获取依赖通道；</p></li><li><p><code>Exchanges</code>：交换机，用来实现消息的路由；</p></li><li><p><code>Queues</code>：队列，即消息队列，消息存放在队列中，等待消费，消费后被移除队列。</p></li></ul><h3 id="_3-2-2-admin-用户和虚拟主机管理" tabindex="-1"><a class="header-anchor" href="#_3-2-2-admin-用户和虚拟主机管理" aria-hidden="true">#</a> 3.2.2 Admin 用户和虚拟主机管理</h3><h4 id="_1-添加用户" tabindex="-1"><a class="header-anchor" href="#_1-添加用户" aria-hidden="true">#</a> 1. 添加用户</h4><p><img src="https://images.gitee.com/uploads/images/2021/1027/180317_b6a21b1f_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><p>上面的Tags选项，其实是指定用户的角色，可选的有以下几个：</p><ul><li><p>超级管理员(administrator)</p><p>可登陆管理控制台，可查看所有的信息，并且可以对用户，策略(policy)进行操作。</p></li><li><p>监控者(monitoring)</p><p>可登陆管理控制台，同时可以查看rabbitmq节点的相关信息(进程数，内存使用情况，磁盘使用情况等)</p></li><li><p>策略制定者(policymaker)</p><p>可登陆管理控制台, 同时可以对policy进行管理。但无法查看节点的相关信息(上图红框标识的部分)。</p></li><li><p>普通管理者(management)</p><p>仅可登陆管理控制台，无法看到节点信息，也无法对策略进行管理。</p></li><li><p>其他</p><p>无法登陆管理控制台，通常就是普通的生产者和消费者。</p></li></ul><h4 id="_2-创建虚拟主机" tabindex="-1"><a class="header-anchor" href="#_2-创建虚拟主机" aria-hidden="true">#</a> 2. 创建虚拟主机</h4><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 虚拟主机</span>\n\t为了让各个用户可以互不干扰的工作，RabbitMQ添加了虚拟主机（Virtual Hosts）的概念。其实就是一个独立的访问路径，不同用户使用不同路径，各自有自己的队列、交换机，互相不会影响。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://images.gitee.com/uploads/images/2021/1027/180346_e57a8de8_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><h4 id="_3-绑定虚拟主机和用户" tabindex="-1"><a class="header-anchor" href="#_3-绑定虚拟主机和用户" aria-hidden="true">#</a> 3. 绑定虚拟主机和用户</h4><p>创建好虚拟主机，我们还要给用户添加访问权限：</p><p>点击添加好的虚拟主机：</p><p><img src="https://images.gitee.com/uploads/images/2021/1027/180401_c1ccc36e_426516.png" alt="输入图片说明" title="屏幕截图.png"></p><p>进入虚拟机设置界面:</p><p><img src="https://images.gitee.com/uploads/images/2021/1027/180414_bcb603c3_426516.png" alt="输入图片说明" title="屏幕截图.png"></p>',27),o={},u=(0,i(3744).Z)(o,[["render",function(e,a){const i=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[t,(0,l._)("nav",n,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(i,{to:"#_3-1-rabbitmq-管理命令行"},{default:(0,l.w5)((()=>[s])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(i,{to:"#_3-2-web管理界面介绍"},{default:(0,l.w5)((()=>[r])),_:1}),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(i,{to:"#_3-2-1-overview-概览"},{default:(0,l.w5)((()=>[d])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(i,{to:"#_3-2-2-admin-用户和虚拟主机管理"},{default:(0,l.w5)((()=>[p])),_:1})])])])])]),c],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,l]of a)i[e]=l;return i}}}]);