"use strict";(self.webpackChunkblog_tools=self.webpackChunkblog_tools||[]).push([[5490],{1483:(a,e,s)=>{s.r(e),s.d(e,{data:()=>n});const n={key:"v-5d7b4342",path:"/Redis/9-AOF.html",title:"9-持久化机制",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"9.1 快照（Snapshot）",slug:"_9-1-快照-snapshot",children:[]},{level:3,title:"9.2 AOF 只追加日志文件",slug:"_9-2-aof-只追加日志文件",children:[]},{level:3,title:"9.3 AOF文件的重写",slug:"_9-3-aof文件的重写",children:[]},{level:3,title:"9.4 持久化总结",slug:"_9-4-持久化总结",children:[]}],filePathRelative:"Redis/9-AOF.md",git:{updatedTime:163819854e4,contributors:[{name:"suanfa8",email:"45396320+suanfa8@users.noreply.github.com",commits:3}]}}},1024:(a,e,s)=>{s.r(e),s.d(e,{default:()=>t});const n=(0,s(6252).uE)('<h1 id="_9-持久化机制" tabindex="-1"><a class="header-anchor" href="#_9-持久化机制" aria-hidden="true">#</a> 9-持久化机制</h1><p>client redis[内存] -----&gt; 内存数据- 数据持久化--&gt;磁盘</p><p>Redis官方提供了两种不同的持久化方法来将数据存储到硬盘里面分别是:</p><ul><li>快照：Snapshot</li><li>AOF ：Append Only File，只追加日志文件</li></ul><h3 id="_9-1-快照-snapshot" tabindex="-1"><a class="header-anchor" href="#_9-1-快照-snapshot" aria-hidden="true">#</a> 9.1 快照（Snapshot）</h3><h4 id="_1-特点" tabindex="-1"><a class="header-anchor" href="#_1-特点" aria-hidden="true">#</a> 1. 特点</h4><p>这种方式可以将某一时刻的所有数据都写入硬盘中，当然这也是 <strong>redis的默认开启持久化方式</strong>，保存的文件是以 <code>.rdb</code> 形式结尾的文件因此这种方式也称之为 RDB 方式。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj67r4sxj30sj07xwew.jpg" alt="image-20200623204303074"></p><h4 id="_2-快照生成方式" tabindex="-1"><a class="header-anchor" href="#_2-快照生成方式" aria-hidden="true">#</a> 2. 快照生成方式</h4><ul><li>客户端方式：<code>BGSAVE</code> 和 <code>SAVE</code> 指令</li><li>服务器配置自动触发</li></ul><ol><li>客户端方式之 BGSAVE</li></ol><p>a. 客户端可以使用 <code>BGSAVE</code> 命令来创建一个快照，当接收到客户端的 <code>BGSAVE</code> 命令时，redis 会调用 fork¹ 来创建一个子进程，然后子进程负责将快照写入磁盘中，而父进程则继续处理命令请求。</p><p>名词解释：</p><p><code>fork</code> 当一个进程创建子进程的时候，底层的操作系统会创建该进程的一个副本，在类 unix 系统中创建子进程的操作会进行优化：在刚开始的时候，父子进程共享相同内存，直到父进程或子进程对内存进行了写之后，对被写入的内存的共享才会结束服务。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj6atq6dj30tz0byq3x.jpg" alt="image-20200623205132460"></p><h1 id="_2-客户端方式之-save" tabindex="-1"><a class="header-anchor" href="#_2-客户端方式之-save" aria-hidden="true">#</a> 2.客户端方式之 SAVE</h1><ul><li>b. 客户端还可以使用SAVE命令来创建一个快照,接收到SAVE命令的redis服务器在快照创建完毕之前将不再响应任何其他的命令</li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj6dz8p5j30y0090my6.jpg" alt="image-20200623205444101"></p><ul><li><strong>注意: SAVE命令并不常用,使用SAVE命令在快照创建完毕之前,redis处于阻塞状态,无法对外服务</strong></li></ul><h1 id="_3-服务器配置方式之满足配置自动触发" tabindex="-1"><a class="header-anchor" href="#_3-服务器配置方式之满足配置自动触发" aria-hidden="true">#</a> 3.服务器配置方式之满足配置自动触发</h1><ul><li>如果用户在 <code>redis.conf</code> 中设置了 <code>save</code> 配置选项，<code>redis</code> 会在 <code>save</code> 选项条件满足之后自动触发一次BGSAVE命令,如果设置多个save配置选项,当任意一个save配置选项条件满足,redis也会触发一次BGSAVE命令</li></ul><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj6hydwvj31oe0u011k.jpg" alt="image-20200623210021012"></p><h1 id="_4-服务器接收客户端-shutdown-指令" tabindex="-1"><a class="header-anchor" href="#_4-服务器接收客户端-shutdown-指令" aria-hidden="true">#</a> 4.服务器接收客户端 <code>shutdown</code> 指令</h1><ul><li>当redis通过shutdown指令接收到关闭服务器的请求时,会执行一个save命令,阻塞所有的客户端,不再执行客户端执行发送的任何命令,并且在save命令执行完毕之后关闭服务器</li></ul><h4 id="_3-配置生成快照名称和位置" tabindex="-1"><a class="header-anchor" href="#_3-配置生成快照名称和位置" aria-hidden="true">#</a> 3.配置生成快照名称和位置</h4><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span>1.修改生成快照名称</span>\n<span class="token list punctuation">-</span> dbfilename dump.rdb\n\n<span class="token title important"><span class="token punctuation">#</span> 2.修改生成位置</span>\n<span class="token list punctuation">-</span> dir ./\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj6lqoakj327u0jojxm.jpg" alt="image-20200623210352448"></p><hr><h3 id="_9-2-aof-只追加日志文件" tabindex="-1"><a class="header-anchor" href="#_9-2-aof-只追加日志文件" aria-hidden="true">#</a> 9.2 AOF 只追加日志文件</h3><ul><li>AOF 持久化：通过记录写命令，恢复数据集，好处就是数据不会丢失。</li></ul><h4 id="_1-特点-1" tabindex="-1"><a class="header-anchor" href="#_1-特点-1" aria-hidden="true">#</a> 1. 特点</h4><p>这种方式可以将所有客户端执行的写命令记录到日志文件中，AOF 持久化会将被执行的写命令写到 AOF 的文件末尾，以此来记录数据发生的变化，因此只要 Redis 从头到尾执行一次 AOF 文件所包含的所有写命令，就可以恢复 AOF 文件的记录的数据集。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj6q9fvgj30ug07ndgk.jpg" alt="image-20200623211330798"></p><h4 id="_2-开启-aof-持久化" tabindex="-1"><a class="header-anchor" href="#_2-开启-aof-持久化" aria-hidden="true">#</a> 2. 开启 AOF 持久化</h4><p>在 Redis 的默认配置中 AOF 持久化机制是没有开启的，需要在配置中开启：</p><p>操作：开启 AOF 持久化，修改配置文件：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>修改 appendonly yes 开启持久化\n修改 appendfilename &quot;appendonly.aof&quot; 指定生成文件名称\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如下图所示：</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gw47hatc3jj324q0iwq9r.jpg" alt="image-20200623211508987"></p><h4 id="_3-日志追加频率" tabindex="-1"><a class="header-anchor" href="#_3-日志追加频率" aria-hidden="true">#</a> 3. 日志追加频率</h4><h5 id="always-【谨慎使用】" tabindex="-1"><a class="header-anchor" href="#always-【谨慎使用】" aria-hidden="true">#</a> always 【<strong>谨慎使用</strong>】</h5><ul><li>说明: <strong>每个 Redis 写命令都要同步写入硬盘，严重降低 Redis 速度</strong>。</li><li>解释: 如果用户使用了 always 选项，那么每个 Redis 写命令都会被写入硬盘，从而将发生系统崩溃时出现的数据丢失减到最少；遗憾的是，因为这种同步策略需要对硬盘进行大量的写入操作，所以 Redis 处理命令的速度会受到硬盘性能的限制；</li><li>注意：转盘式硬盘在这种频率下 200 左右个命令/s ; 固态硬盘（SSD）几百万个命令/s;</li><li>警告：使用 SSD 用户请谨慎使用 always 选项，这种模式不断写入少量数据的做法有可能会引发严重的写入放大问题，导致将固态硬盘的寿命从原来的几年降低为几个月。</li></ul><h5 id="everysec-【推荐】" tabindex="-1"><a class="header-anchor" href="#everysec-【推荐】" aria-hidden="true">#</a> everysec 【推荐】</h5><ul><li>说明: 每秒执行一次同步显式的将多个写命令同步到磁盘</li><li>解释： 为了兼顾数据安全和写入性能,用户可以考虑使用everysec选项,让redis每秒一次的频率对AOF文件进行同步;redis每秒同步一次AOF文件时性能和不使用任何持久化特性时的性能相差无几,而通过每秒同步一次AOF文件,redis可以保证,即使系统崩溃,用户最多丢失一秒之内产生的数据。</li></ul><h5 id="no【不推荐】" tabindex="-1"><a class="header-anchor" href="#no【不推荐】" aria-hidden="true">#</a> no【不推荐】</h5><ul><li>说明: 由操作系统决定何时同步；</li><li>解释：最后使用 no 选项，将完全有操作系统决定什么时候同步 AOF 日志文件，这个选项不会对 Redis 性能带来影响，但是系统崩溃时，会丢失不定数量的数据，另外如果用户硬盘处理写入操作不够快的话，当缓冲区被等待写入硬盘数据填满时，Redis 会处于阻塞状态，并导致 Redis 的处理命令请求的速度变慢。</li></ul><h4 id="_4-修改同步频率" tabindex="-1"><a class="header-anchor" href="#_4-修改同步频率" aria-hidden="true">#</a> 4. 修改同步频率</h4><p>修改日志同步频率：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>修改 appendfsync everysec|always|no 指定\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj6x83hzj322w06875d.jpg" alt="image-20200623211658910"></p><hr><h3 id="_9-3-aof文件的重写" tabindex="-1"><a class="header-anchor" href="#_9-3-aof文件的重写" aria-hidden="true">#</a> 9.3 AOF文件的重写</h3><h4 id="_1-aof-带来的问题" tabindex="-1"><a class="header-anchor" href="#_1-aof-带来的问题" aria-hidden="true">#</a> 1. AOF 带来的问题</h4><p>AOF 的方式也同时带来了另一个问题。持久化文件会变的越来越大。例如我们调用 incr test 命令100次，文件中必须保存全部的100条命令，其实有99条都是多余的。因为要恢复数据库的状态其实文件中保存一条set test 100就够了。为了压缩aof的持久化文件Redis提供了AOF重写(ReWriter)机制。</p><h4 id="_2-aof-重写" tabindex="-1"><a class="header-anchor" href="#_2-aof-重写" aria-hidden="true">#</a> 2. AOF 重写</h4><p>用来在一定程度上减小AOF文件的体积</p><h4 id="_3-触发重写方式" tabindex="-1"><a class="header-anchor" href="#_3-触发重写方式" aria-hidden="true">#</a> 3. 触发重写方式</h4><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 1.客户端方式触发重写</span>\n<span class="token list punctuation">-</span> 执行BGREWRITEAOF命令  不会阻塞redis的服务\n\n<span class="token title important"><span class="token punctuation">#</span> 2.服务器配置方式自动触发</span>\n<span class="token list punctuation">-</span> 配置redis.conf中的auto-aof-rewrite-percentage选项 参加下图↓↓↓\n<span class="token list punctuation">-</span> 如果设置auto-aof-rewrite-percentage值为100和auto-aof-rewrite-min-size 64mb,并且启用的AOF持久化时,那么当AOF文件体积大于64M,并且AOF文件的体积比上一次重写之后体积大了至少一倍(100%)时,会自动触发,如果重写过于频繁,用户可以考虑将auto-aof-rewrite-percentage设置为更大\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj70ckrfj31wn0u0dto.jpg" alt="image-20200623212547775"></p><h4 id="_4-重写原理" tabindex="-1"><a class="header-anchor" href="#_4-重写原理" aria-hidden="true">#</a> 4. 重写原理</h4><p><strong>注意：重写aof文件的操作，并没有读取旧的aof文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的aof文件,替换原有的文件这点和快照有点类似。</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 重写流程</span>\n<span class="token list punctuation">-</span> <span class="token list punctuation">1.</span> redis调用fork ，现在有父子两个进程 子进程根据内存中的数据库快照，往临时文件中写入重建数据库状态的命令\n<span class="token list punctuation">-</span> <span class="token list punctuation">2.</span> 父进程继续处理client请求，除了把写命令写入到原来的aof文件中。同时把收到的写命令缓存起来。这样就能保证如果子进程重写失败的话并不会出问题。\n<span class="token list punctuation">-</span> <span class="token list punctuation">3.</span> 当子进程把快照内容写入已命令方式写到临时文件中后，子进程发信号通知父进程。然后父进程把缓存的写命令也写入到临时文件。\n<span class="token list punctuation">-</span> <span class="token list punctuation">4.</span> 现在父进程可以使用临时文件替换老的aof文件，并重命名，后面收到的写命令也开始往新的aof文件中追加。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gwtj74b355j311w0ha0va.jpg" alt="image-20200623214843123"></p><hr><h3 id="_9-4-持久化总结" tabindex="-1"><a class="header-anchor" href="#_9-4-持久化总结" aria-hidden="true">#</a> 9.4 持久化总结</h3><p>两种持久化方案既可以同时使用(aof),又可以单独使用,在某种情况下也可以都不使用,具体使用那种持久化方案取决于用户的数据和应用决定。</p><p>无论使用AOF还是快照机制持久化,将数据持久化到硬盘都是有必要的,除了持久化外,用户还应该对持久化的文件进行备份(最好备份在多个不同地方)。</p><hr>',68),i={},t=(0,s(3744).Z)(i,[["render",function(a,e){return n}]])},3744:(a,e)=>{e.Z=(a,e)=>{const s=a.__vccOpts||a;for(const[a,n]of e)s[a]=n;return s}}}]);