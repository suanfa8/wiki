# 6-1 Eureka 服务端开发

## 1、Eureka 简介

网址：https://github.com/Netflix/eureka/wiki

Eureka 是 Netflix 开发的服务发现框架，本身是一个基于 REST 的服务。SpringCloud 将它集成在其子项目 Spring-Cloud-Netflix中，以实现 SpringCloud 的服务注册和发现功能。

Eureka 包含两个组件：

+ Eureka Server；
+ Eureka Client。


单体应用  ------>  分类服务、商品服务、订单服务、用户服务......

+ Eureka Server 组件： **服务注册中心组件**，管理所有服务，支持所有服务注册；
+ Eureka Client 组件：例如：分类服务、商品服务、订单服务（具体业务微服务）。

## 2、实践：开发 Eureka Server

> 所有工具集的使用流程：
>
> 1. 引入依赖
> 2. 写配置文件
> 3. 加注解

1. 创建项目并引入 Eureka Server 依赖

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtryvmcmbj31320mojsy.jpg "屏幕截图.png")

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtryya26rj30zi0u0gov.jpg "屏幕截图.png")


```xml
<!--引入 Eureka Server-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/212526_1aaa8a65_426516.png "屏幕截图.png")

2. 编写配置 application.properties

这个名字很重要：

```properties
spring.application.name=eurekaserver 
```



```properties
# 执行服务端口
server.port=8761
# 指定服务名称，唯一标识
spring.application.name=eurekaserver
# 指定服务注册中心的地址
eureka.client.service-url.defaultZone=http://localhost:8761/eureka
```

3. 开启 Eureka Server，入口类加入注解

```java
@SpringBootApplication
@EnableEurekaServer
public class Eurekaserver8761Application {
    public static void main(String[] args) {
        SpringApplication.run(Eurekaserver8761Application.class, args);
    }
}
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/212603_64443851_426516.png "屏幕截图.png")


4. 访问 Eureka 的服务注册页面

- http://localhost:8761

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtspk64ixj31vd0u0gqm.jpg "屏幕截图.png")

5. 虽然能看到管理界面为什么项目启动控制台报错？

+ eureka server 服务注册中心 & client 微服务

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/212633_8af655a4_426516.png "屏幕截图.png")

- 出现上述问题原因：`Eureka` 组件包含 `Eurekaserver` 和 `eurekaclient`。Server 是一个服务注册中心，用来接受客户端的注册。Client 的特性会让当前启动的服务把自己作为 Eureka 的客户端进行服务中心的注册，当项目启动时服务注册中心还没有创建好，所以找我不到服务的客户端组件就直接报错了，当启动成功服务注册中心创建好了，日后 Client 也能进行注册，就不再报错啦！

6. （作为 `Eureka`  的服务端）关闭 `Eureka` 自己注册自己

```properties
eureka.client.fetch-registry=false
```

表示不要立即注册。


```properties
server.port=8761
spring.application.name=eurekaserver
eureka.client.service-url.defaultZone=http://localhost:8761/eureka
# 不再将自己同时作为客户端进行注册  
eureka.client.register-with-eureka=false
# 关闭作为客户端时从 eureka server 获取服务信息 
eureka.client.fetch-registry=false				  
```

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtrz65y0mj320w07imzu.jpg "屏幕截图.png")


7. 再次启动，当前应用就是一个单纯 Eureka Server，控制器也不再报错

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtrz7lz3jj32c608w432.jpg "屏幕截图.png")

## 总结



1. 每一个 POM 文件里都可以配置 `dependencyManagement` 标签

```
<!-- 全局管理 SpringCloud 版本，并不会引入具体依赖-->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring.cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

2. JDK 选择 1.8 ，SpringBoot 的版本选择 `2.2.5.RELEASE`；
3. 启动类上配置 `@EnableEurekaServer`；
4. 配置文件里面配置（尤其是后面两个配置）。

编写配置文件 `application.properties`:

```properties
server.port=8761
spring.application.name=eurekaserver
eureka.client.service-url.defaultZone=http://localhost:8761/eureka
# 不再将自己同时作为客户端进行注册  
eureka.client.register-with-eureka=false
# 关闭作为客户端时从 eureka server 获取服务信息 
eureka.client.fetch-registry=false				  
```

+ `spring.application.name` 在微服务里面要配置服务，告诉别人自己是谁。
