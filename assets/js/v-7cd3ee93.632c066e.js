"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[5507],{8632:(e,s,a)=>{a.r(s),a.d(s,{data:()=>l});const l={key:"v-7cd3ee93",path:"/Redis/7-Redis-install.html",title:"7-Redis 安装（重点）",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"准备环境",slug:"准备环境",children:[{level:3,title:"1、下载 redis 源码包",slug:"_1、下载-redis-源码包",children:[]},{level:3,title:"2、下载完整源码包",slug:"_2、下载完整源码包",children:[]},{level:3,title:"将下载 redis 资料包上传到 Linux 中",slug:"将下载-redis-资料包上传到-linux-中",children:[]},{level:3,title:"解压缩文件",slug:"解压缩文件",children:[]},{level:3,title:"安装 gcc",slug:"安装-gcc",children:[]},{level:3,title:"进入解压缩目录执行如下命令",slug:"进入解压缩目录执行如下命令",children:[]},{level:3,title:"编译完成后执行如下命令",slug:"编译完成后执行如下命令",children:[]},{level:3,title:"进入/usr/redis目录启动redis服务",slug:"进入-usr-redis目录启动redis服务",children:[]},{level:3,title:"Redis 服务端口默认是 6379",slug:"redis-服务端口默认是-6379",children:[]},{level:3,title:"进入 bin 目录执行客户端连接操作",slug:"进入-bin-目录执行客户端连接操作",children:[]},{level:3,title:"连接成功出现上面界面连接成功",slug:"连接成功出现上面界面连接成功",children:[]}]}],filePathRelative:"Redis/7-Redis-install.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},3911:(e,s,a)=>{a.r(s),a.d(s,{default:()=>k});var l=a(6252);const n=(0,l._)("h1",{id:"_7-redis-安装-重点",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#_7-redis-安装-重点","aria-hidden":"true"},"#"),(0,l.Uk)(" 7-Redis 安装（重点）")],-1),i={class:"table-of-contents"},r=(0,l.Uk)("准备环境"),d=(0,l.Uk)("1、下载 redis 源码包"),t=(0,l.Uk)("2、下载完整源码包"),c=(0,l.Uk)("将下载 redis 资料包上传到 Linux 中"),u=(0,l.Uk)("解压缩文件"),p=(0,l.Uk)("安装 gcc"),h=(0,l.Uk)("进入解压缩目录执行如下命令"),o=(0,l.Uk)("编译完成后执行如下命令"),g=(0,l.Uk)("进入/usr/redis目录启动redis服务"),b=(0,l.Uk)("Redis 服务端口默认是 6379"),m=(0,l.Uk)("进入 bin 目录执行客户端连接操作"),v=(0,l.Uk)("连接成功出现上面界面连接成功"),f=(0,l.uE)('<h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境" aria-hidden="true">#</a> 准备环境</h2><ul><li>vmware15.x+</li><li>centos7.x+</li></ul><h3 id="_1、下载-redis-源码包" tabindex="-1"><a class="header-anchor" href="#_1、下载-redis-源码包" aria-hidden="true">#</a> 1、下载 redis 源码包</h3><ul><li>https://redis.io/</li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw3je592tfj31qi0b076y.jpg" alt="image-20200623121621195"></p><h3 id="_2、下载完整源码包" tabindex="-1"><a class="header-anchor" href="#_2、下载完整源码包" aria-hidden="true">#</a> 2、下载完整源码包</h3><ul><li>redis-4.0.10.tar.gz</li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw3jfdxfjrj31lo01cwel.jpg" alt="image-20200623123918876"></p><ol start="3"><li><h3 id="将下载-redis-资料包上传到-linux-中" tabindex="-1"><a class="header-anchor" href="#将下载-redis-资料包上传到-linux-中" aria-hidden="true">#</a> 将下载 redis 资料包上传到 Linux 中</h3></li></ol><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw3jfp3ad5j31wg03caad.jpg" alt="image-20200623124327319"></p><ol start="4"><li><h3 id="解压缩文件" tabindex="-1"><a class="header-anchor" href="#解压缩文件" aria-hidden="true">#</a> 解压缩文件</h3></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> -zxvf redis-4.0.10.tar.gz\nll\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw3jh4nojcj323i06kjsq.jpg" alt="image-20200623124522026"></p><ol start="5"><li><h3 id="安装-gcc" tabindex="-1"><a class="header-anchor" href="#安装-gcc" aria-hidden="true">#</a> 安装 gcc</h3></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y gcc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="6"><li><h3 id="进入解压缩目录执行如下命令" tabindex="-1"><a class="header-anchor" href="#进入解压缩目录执行如下命令" aria-hidden="true">#</a> 进入解压缩目录执行如下命令</h3></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token assign-left variable">MALLOC</span><span class="token operator">=</span>libc\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="7"><li><h3 id="编译完成后执行如下命令" tabindex="-1"><a class="header-anchor" href="#编译完成后执行如下命令" aria-hidden="true">#</a> 编译完成后执行如下命令</h3></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="8"><li><h3 id="进入-usr-redis目录启动redis服务" tabindex="-1"><a class="header-anchor" href="#进入-usr-redis目录启动redis服务" aria-hidden="true">#</a> 进入/usr/redis目录启动redis服务</h3></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./redis-server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>显示如下信息：</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj3rt40aj320i0u0wka.jpg" alt="image-20200623125420505"></p><ol start="9"><li><h3 id="redis-服务端口默认是-6379" tabindex="-1"><a class="header-anchor" href="#redis-服务端口默认是-6379" aria-hidden="true">#</a> <code>Redis</code> 服务端口默认是 <code>6379</code></h3></li><li><h3 id="进入-bin-目录执行客户端连接操作" tabindex="-1"><a class="header-anchor" href="#进入-bin-目录执行客户端连接操作" aria-hidden="true">#</a> 进入 <code>bin</code> 目录执行客户端连接操作</h3></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./redis-cli –p <span class="token number">6379</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj3su95jj31sw054gm3.jpg" alt="image-20200623125716013"></p><ol start="11"><li><h3 id="连接成功出现上面界面连接成功" tabindex="-1"><a class="header-anchor" href="#连接成功出现上面界面连接成功" aria-hidden="true">#</a> 连接成功出现上面界面连接成功</h3></li></ol><hr><p>我的操作：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scp /Users/liweiwei1419/redis-6.2.6.tar.gz root@192.168.47.129:/opt\ntar -zxvf redis-6.2.6.tar.gz\nyum install -y gcc\ncd redis-6.2.6\nmake install PREFIX=/usr/redis\ncd /usr/redis/bin\n./redis-server\n# 重新开一个连接\n./redis-cli -p 6379\n\n# \ncp /opt/redis-6.2.6/redis.conf /usr/redis/\n\n后台启动：把配置文件里的 daemonize no 改成 yes\n\n./redis-server ../redis.conf \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj3xc347j31sk0q0791.jpg" alt="image-20211105040303197"></p>',31),_={},k=(0,a(3744).Z)(_,[["render",function(e,s){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[n,(0,l._)("nav",i,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:"#准备环境"},{default:(0,l.w5)((()=>[r])),_:1}),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(a,{to:"#_1、下载-redis-源码包"},{default:(0,l.w5)((()=>[d])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#_2、下载完整源码包"},{default:(0,l.w5)((()=>[t])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#将下载-redis-资料包上传到-linux-中"},{default:(0,l.w5)((()=>[c])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#解压缩文件"},{default:(0,l.w5)((()=>[u])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#安装-gcc"},{default:(0,l.w5)((()=>[p])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#进入解压缩目录执行如下命令"},{default:(0,l.w5)((()=>[h])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#编译完成后执行如下命令"},{default:(0,l.w5)((()=>[o])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#进入-usr-redis目录启动redis服务"},{default:(0,l.w5)((()=>[g])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#redis-服务端口默认是-6379"},{default:(0,l.w5)((()=>[b])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#进入-bin-目录执行客户端连接操作"},{default:(0,l.w5)((()=>[m])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(a,{to:"#连接成功出现上面界面连接成功"},{default:(0,l.w5)((()=>[v])),_:1})])])])])]),f],64)}]])},3744:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,l]of s)a[e]=l;return a}}}]);