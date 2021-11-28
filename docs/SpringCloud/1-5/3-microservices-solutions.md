# 3-微服务的解决方案

## 第 1 大解决方案：Dubbo（阿里系）

#### 初出茅庐

2011 年末，阿里巴巴在 GitHub 上开源了基于 Java 的分布式服务治理框架 Dubbo，之后它成为了国内该类开源项目的佼佼者，许多开发者对其表示青睐。同时，先后有不少公司在实践中基于 Dubbo 进行分布式系统架构，目前在 GitHub 上，它的 fork、star 数均已破万。Dubbo 致力于提供高性能和透明化的 RPC 远程服务调用方案，以及 SOA 服务治理方案，使得应用可通过高性能 RPC 实现服务的输出、输入功能和 Spring 框架无缝集成。Dubbo 包含远程通讯、集群容错和自动发现三个核心部分。

#### 停止维护

从 2012 年 10 月 23 日 Dubbo 2.5.3 发布后，在 Dubbo 开源将满一周年之际，阿里基本停止了对 Dubbo 的主要升级。只在之后的 2013 年和 2014 年更新过 2 次对 Dubbo 2.4 的维护版本，然后停止了所有维护工作。Dubbo 对 Spring 的支持也停留在了 Spring 2.5.6 版本上。

#### 死而复生

多年漫长的等待，随着微服务的火热兴起，在国内外开发者对阿里不再升级维护 Dubbo 的吐槽声中，阿里终于开始重新对 Dubbo 的升级和维护工作。在 2017 年 9 月 7 日，阿里发布了 Dubbo 的 2.5.4 版本，距离上一个版本 2.5.3 发布已经接近快 5 年时间了。在随后的几个月中，阿里 Dubbo 开发团队以差不多每月一版本的速度开始快速升级迭代，修补了 Dubbo 老版本多年来存在的诸多 bug ，并对 Spring 等组件的支持进行了全面升级。

2018 年 1 月 8 日，Dubbo 创始人之一梁飞在 Dubbo 交流群里透露了 Dubbo 3.0 正在动工的消息。Dubbo 3.0 内核与 Dubbo 2.0 完全不同，但兼容 Dubbo 2.0。Dubbo 3.0 将以 Streaming 为内核，不再是 Dubbo 时代的 RPC，但是 RPC 会在 Dubbo 3.0 中变成远程 Streaming 对接的一种可选形态。从 Dubbo 新版本的路线规划上可以看出，新版本的 Dubbo 在原有服务治理的功能基础上，将全面拥抱微服务解决方案。

#### 结论

当前由于 RPC 协议、注册中心元数据不匹配等问题，在面临微服务基础框架选型时Dubbo与Spring Cloud是只能二选一，这也是为什么大家总是拿 Dubbo 和 Spring Cloud 做对比的原因之一。Dubbo 之后会积极寻求适配到 Spring Cloud 生态，比如作为 Spring Cloud 的二进制通信方案来发挥 Dubbo 的性能优势，或者 Dubbo 通过模块化以及对 http 的支持适配到 Spring Cloud。

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwts6emmopj31n807wq3t.jpg "屏幕截图.png")

## 第 2 大解决方案：Spring Cloud

- Spring Cloud NetFlix（美国 在线视频网站）：基于美国 Netflix 公司开源的组件进行封装，提供了微服务一栈式的解决方案。 G 版本以后变化很大，Netflix 很多组件不再开源，SpringCloud 官方自己开发；
- Spring Cloud Alibaba：在 Spring Cloud Netflix 基础上封装了阿里巴巴的微服务解决方案；	
- Spring Cloud：目前 Spring 官方趋势正在逐渐吸收 Netflix 组件的精华，并在此基础进行二次封装优化，打造 Spring 专有的解决方案。
