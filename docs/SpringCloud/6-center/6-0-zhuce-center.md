# 6-0 什么是「服务注册中心」？

所谓服务注册中心就是在整个的微服务架构中单独提出一个服务，这个服务  **不完成系统的任何的业务功能** ，仅仅用来完成对整个微服务系统的服务注册和服务发现，以及对服务健康状态的监控和管理功能。

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtrpnchzcj31qg0jmjus.jpg "屏幕截图.png")

服务注册中心：

- 可以对所有的微服务的信息进行存储，如微服务的名称、IP、端口等；
- 可以在进行服务调用时通过服务发现查询可用的微服务列表及网络地址进行服务调用；
- 可以对所有的微服务进行 **心跳检测**，如发现某实例长时间无法访问，就会从服务注册表移除该实例。


## 常用的注册中心

SpringCloud 支持的多种注册中心：

+ Eureka（Netflix）
+ Consul
+ Zookeeper
+ 以及阿里巴巴推出 Nacos 组件

这些注册中心在本质上都是用来管理服务的注册和发现以及服务状态的检查的。