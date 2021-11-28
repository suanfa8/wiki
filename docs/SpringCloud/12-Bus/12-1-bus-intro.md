## 12-1 Bus 组件的使用

### 什么是 Bus

官方网站：https://spring.io/projects/spring-cloud-bus

> Spring Cloud Bus links nodes of a distributed system with a lightweight message broker. This can then be used to broadcast state changes (e.g. configuration changes) or other management instructions. AMQP and Kafka broker implementations are included with the project. Alternatively, any [Spring Cloud Stream](https://spring.io/projects/spring-cloud-stream) binder found on the classpath will work out of the box as a transport.   
>
> -- 摘自官网

+ Spring Cloud Bus 使用轻量级消息代理将分布式系统的节点连接起来。然后，可以使用它来广播状态更改（例如配置更改）或其他管理指令。AMQP 和 Kafka broker 实现包含在项目中。或者，在类路径上找到的任何 Spring Cloud Stream 绑定器都可以作为传输使用；

- 通俗定义：bus 称之为 SpringCloud 中消息总线，主要用来在微服务系统中实现远端配置更新时通过广播形式通知所有客户端刷新配置信息，避免手动重启服务的工作。