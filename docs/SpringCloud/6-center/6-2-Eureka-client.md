# 6-2 Eureka 客户端开发

开发 Eureka Client 

> 每一个 Eureka 的客户端就是一个一个的微服务。

1. 创建项目并引入 Eureka Client 依赖


```xml
<!-- 引入 Eureka Client -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtthdu1s3j31yo07mmyu.jpg "屏幕截图.png")


2. 编写配置文件 `application.properties`


```properties
# 服务端口号
server.port=8888
# 服务名称唯一标识
spring.application.name=eurekaclient8888
# eureka 注册中心地址
eureka.client.service-url.defaultZone=http://localhost:8761/eureka
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/212803_42751277_426516.png "屏幕截图.png")


3. 开启 Eureka 客户端加入注解


```java
@SpringBootApplication
@EnableEurekaClient
public class Eurekaclient8888Application {
    public static void main(String[] args) {
        SpringApplication.run(Eurekaclient8888Application.class, args);
    }
}
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/212815_16e68e23_426516.png "屏幕截图.png")


4. 先启动之前的 `8761` 的服务注册中心，再启动 `Eureka` 客户端服务


![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/212913_158e40c5_426516.png "屏幕截图.png")


5. 查看 `Eureka Server` 的服务注册情况

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/212927_5618ee85_426516.png "屏幕截图.png")

