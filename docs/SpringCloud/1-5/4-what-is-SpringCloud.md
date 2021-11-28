# 4-什么是 SpringCloud

> 是一个微服务工具集，一个一个学习工具集，应用于一个完整的项目中。

## 官方定义

- 官方网址: https://cloud.spring.io/spring-cloud-static/Hoxton.SR5/reference/html/

**Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems** (e.g. `configuration management`,` service discovery`, `circuit breakers, intelligent routing, micro-proxy, control bus`). Coordination of distributed systems leads to boiler plate patterns, and using Spring Cloud developers can quickly stand up services and applications that implement those patterns.  -------[摘自官网]

### 翻译

- SpringCloud 为开发人员提供了在分布式系统中快速构建一些通用模式的工具（例如配置管理、服务发现、断路器、智能路由、微代理、控制总线）。分布式系统的协调导致了锅炉板模式，使用 SpringCloud 开发人员可以快速地建立实现这些模式的服务和应用程序。

### 通俗理解

- SpringCloud 是一个含概多个子项目的开发工具集，集合了众多的开源框架，他利用了 Spring Boot 开发的便利性实现了很多功能，如服务注册，服务注册发现，负载均衡等。SpringCloud 在整合过程中主要是针对 Netflix（耐非）开源组件的封装。SpringCloud 的出现真正的简化了分布式架构的开发；

- NetFlix 是美国的一个在线视频网站，微服务业的翘楚，他是公认的大规模生产级微服务的杰出实践者，NetFlix 的开源组件已经在他大规模分布式微服务环境中经过多年的生产实战验证，因此 Spring Cloud 中很多组件都是基于 NetFlix 组件的封装。

### 微服务架构下存在的问题

- 基于独立业务拆分成一个微小的服务，每个服务独立部署运行在自己的进程里面。 **服务之间使用 http rest的方式进行通信**；
-   单体应用  分类模块  视频模块  用户模块    产生  测试    前端 pc  app  统一入口 localhost:8989
-   微服务架构应用   分类服务 8080  视频服务 8081  用户服务 8082 8083  .....

### 问题

1. 要有个组件帮助我们记录服务，监控服务，服务发现。服务注册和发现组件：注册中心；

> 注册中心就是一个服务的统一管理者。就是一个网页看一看有多少服务。

2. 服务调用问题 http rest 方式调用。-- 如何调用? 服务调用时如何实现服务负载均衡?

3. 服务熔断以及服务雪崩效应?  

4. 服务配置文件管理?   

> 实现配置文件统一管理。

5. 网关组件?    


## 核心架构及其组件

### 核心组件说明

| 组件名称  | 用途 |
|---|---|
| eurekaserver、consul（go 语言写的）、nacos（阿里巴巴出品） | 服务注册中心组件 |
| rabbion & openfeign | 服务负载均衡 和 服务调用组件 |
| hystrix & hystrix dashboard（仪表盘）  | 服务断路器 和 服务监控组件  |
| zuul、gateway | 服务网关组件 |
| config | 统一配置中心组件 |
| bus | 消息总线组件（实现统一配置中心组件的自动刷新） |
| stream 组件 | 解决消息中间件不一致问题 |
| ...... | |


![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/211403_59174a77_426516.png "屏幕截图.png")

看看有几大组件。

![输入图片说明](https://images.gitee.com/uploads/images/2021/1028/004218_9ac406a9_426516.png "屏幕截图.png")
