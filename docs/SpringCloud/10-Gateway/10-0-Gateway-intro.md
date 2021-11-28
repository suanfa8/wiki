## 10-0 Gateway 组件使用

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwu2h4c95vj317m0acdgz.jpg "屏幕截图.png")

> 有点拦截器的意思。

### 什么是服务网关

- 网关统一服务入口，可方便实现对平台众多服务接口进行管控，对访问服务的身份认证、防报文重放与防数据篡改、功能调用的业务鉴权、响应数据的脱敏、流量与并发控制，甚至基于 API 调用的计量或者计费等等。

-  **网关 =  路由转发 + 过滤器** 

  + 路由转发：接收一切外界请求，转发到后端的微服务上去；
  + 在服务网关中可以完成一系列的横切功能，例如权限校验、限流以及监控等，这些都可以通过过滤器完成。
	

### 为什么需要网关

 - **网关可以实现服务的统一管理**；
 - 网关可以解决微服务中通用代码的冗余问题（如权限控制、流量监控、限流等）。

网关组件在微服务中的架构

**网关统一拦截转发（过滤作用）** ：

![image-20200720171205828](https://tva1.sinaimg.cn/large/008i3skNgy1gvu854rq9wj31yq0jw40p.jpg)

### 服务网关组件

#### zuul：https://github.com/Netflix/zuul/wiki

> Zuul is the front door for all requests from devices and web sites to the backend of the Netflix streaming application. As an edge service application, Zuul is built to enable dynamic routing, monitoring, resiliency and security.

原文翻译

- `zuul` 是从设备和网站到 Netflix 流媒体应用程序后端的所有请求的前门。作为一个边缘服务应用程序，zuul 被构建为支持动态路由、监视、弹性和安全性。

#### zuul 版本说明

目前 zuul 组件已经从 1.0 更新到 2.0，但是作为 Spring Cloud 官方不再推荐使用 zuul2.0，但是依然支持 zuul2；

Spring Cloud 官方集成 zuul 文档：https://cloud.spring.io/spring-cloud-netflix/2.2.x/reference/html/#netflix-zuul-starter

#### gateway

官网：https://spring.io/projects/spring-cloud-gateway

> This project provides a library for building an API Gateway on top of Spring MVC. Spring Cloud Gateway aims to provide a simple, yet effective way to route to APIs and provide cross cutting concerns to them such as: security, monitoring/metrics, and resiliency.

原文翻译：

这个项目提供了一个在 SpringMVC 之上构建 API 网关的库。Spring Cloud gateway 旨在提供一种简单而有效的方法来路由到 api，并为 api 提供横切关注点，比如：安全性、监控/度量和弹性。

特性

- 基于 SpringBoot2.x 和 Spring WebFlux 和 Reactor 构建 响应式异步非阻塞 IO 模型；
- 动态路由；
- 请求过滤。

