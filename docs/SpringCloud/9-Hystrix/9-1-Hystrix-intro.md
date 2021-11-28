## 9-1 Hystrix 组件使用

### Hystrix 组件

![image-20200715123359665](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7z4q2hzj31e80cwwfv.jpg)

> In a distributed environment, inevitably some of the many service dependencies will fail. Hystrix is a library that helps you control the interactions between these distributed services by adding latency tolerance and fault tolerance logic. Hystrix does this by isolating points of access between the services, stopping cascading failures across them, and providing fallback options, all of which improve your system’s overall resiliency.														--[摘自官方]

官方网站：https://github.com/Netflix/Hystrix

- 译：在分布式环境中，许多服务依赖项不可避免地会失败。Hystrix 是一个库，它通过添加延迟容忍和容错逻辑来帮助您控制这些分布式服务之间的交互。Hystrix 通过隔离服务之间的访问点、停止它们之间的级联故障以及提供后备选项来实现这一点，所有这些都可以提高系统的整体弹性。

- 通俗定义：Hystrix 是一个用于处理分布式系统的延迟和容错的开源库，在分布式系统中，许多依赖不可避免的会调用失败，超时、异常等，Hystrix 能够保证在一个依赖出问题的情况下，不会导致整体服务失败，避免级联故障（服务雪崩现象），提高分布式系统的弹性。


### 服务雪崩（级联调用不可用）

在微服务之间进行服务调用是由于某一个服务故障，**导致级联服务故障的现象** ，称为雪崩效应。

> 雪崩效应描述的是 **提供方不可用**，导致消费方不可用并将不可用逐渐放大的过程。

图解雪崩效应

- 如存在如下调用链路:


![image-20200715151728240](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xfs2kcj31hi05mgm0.jpg)

而此时，Service A 的流量波动很大，流量经常会突然性增加！

那么在这种情况下，就算 Service A 能扛得住请求，Service B 和 Service C 未必能扛得住这突发的请求。

此时，如果 Service C 因为抗不住请求，变得不可用。那么 Service B 的请求也会阻塞，慢慢耗尽 Service B 的线程资源，Service B 就会变得不可用。紧接着，Service A 也会不可用，这一过程如下图所示：


![image-20200715152623313](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xj0iwjj31r00hwjud.jpg)

并发测试工具：https://jmeter.apache.org/
