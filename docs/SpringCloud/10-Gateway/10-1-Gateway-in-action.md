## 10-1 开发网关动态路由

> 实现了网关的路由转发功能。

![输入图片说明](https://images.gitee.com/uploads/images/2021/1029/135012_e8552113_426516.png "屏幕截图.png")

网关配置有两种方式：

+ 一种是快捷方式；
+ 一种是完全展开方式。

### 创建项目引入网关依赖


```xml
<!-- 引入 gateway 网关依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

![image-20200720175051402](https://tva1.sinaimg.cn/large/008i3skNgy1gvu859tt0kj31pk07ign5.jpg)

还需要引入 consul 依赖，和 actuator 健康检查依赖。

![输入图片说明](https://images.gitee.com/uploads/images/2021/1029/134003_b0ba0ff7_426516.png "屏幕截图.png")

方式一：快捷方式配置路由


2. 编写网关配置

`application.yml` 文件。



```yml
server:
  port: 8989

spring:
  application:
    name: gateway
  cloud:
    consul:
      port: 8500
      host: localhost
      discovery:
        service-name: ${spring.application.name}
    gateway:
      routes:
        - id: user_route
          uri: http://localhost:9999/
          predicates:
            - Path=/feign/**
        - id: product_route
          uri: http://localhost:9998/
          predicates:
            - Path=/product/**
```



删除依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```








```yml
server:
  port: 8989

spring:
  application:
    name: gateway
  cloud:
    consul:
      host: localhost
      port: 8500
    gateway:
      routes:
        # 指定路由唯一标识
        - id: user_route
          # 指定路由服务的地址						
          uri: http://localhost:9999/ 
          predicates:
            # 指定路由规则
            - Path=/feign/**					  

        - id: product_route
          uri: http://localhost:9998/
          predicates:
            - Path=/product/**
```

> 访问：http://localhost:8989/feign/test/findAll 就会转发
>
> http://localhost:8989/feign/test1?id=1419




3. 启动 gateway 网关项目

直接启动报错：

![image-20200720212535357](https://tva1.sinaimg.cn/large/008i3skNgy1gvu85g9k5tj329i0d641g.jpg)


在启动日志中发现，gateway 为了效率使用 webflux 进行异步非阻塞模型的实现，因此和原来的 web 包冲突，去掉原来的 web 即可。


![image-20200720212653494](https://tva1.sinaimg.cn/large/008i3skNgy1gvu85jtj0rj327u086gnp.jpg)


- 再次启动成功启动


![image-20200720213657788](https://tva1.sinaimg.cn/large/008i3skNgy1gvu85ns27bj318n0bo3zg.jpg)


4. 测试网关路由转发

- 测试通过网关访问用户服务: http://localhost:8989/user/findOne?productId=21
- 测试通过网关访问商品服务: http://localhost:8989/product/findOne?productId=1

### Java 方式配置路由

```java
@Configuration
public class GatewayConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("order_route", r -> r.path("/order/**")
                        .uri("http://localhost:9997/"))
                .build();
    }
}
```

![image-20200721103141491](https://tva1.sinaimg.cn/large/008i3skNgy1gvu85sccnmj31v80cyju3.jpg)

