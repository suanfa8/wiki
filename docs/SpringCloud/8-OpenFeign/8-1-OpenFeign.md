# 8-1 OpenFeign 组件的使用

![image-20211129084106785](https://tva1.sinaimg.cn/large/008i3skNgy1gwvq5z8dhyj319e0bu0un.jpg)

::: tip 思考

使用 `RestTemplate + ribbon` 已经可以完成服务间的调用，为什么还要使用 `feign`？

:::

::: details 答案

频繁写商品路径会造成代码冗余。

:::

```java
String restTemplateForObject = restTemplate.getForObject("http://服务名/url?参数" + name, String.class);
```

## 存在问题：

+ 每次调用服务都需要写这些代码，存在大量的代码冗余；
+ 服务地址如果修改，维护成本增高；
+ 使用时不够灵活。


## OpenFeign 组件

官方网址：[https://cloud.spring.io/spring-cloud-openfeign/reference/html/](https://cloud.spring.io/spring-cloud-openfeign/reference/html/)

> `Feign` 是一个声明式的伪 `Http` 客户端，它使得写 Http 客户端变得更简单。使用 Feign，只需要创建一个接口并注解。它具有可插拔的注解特性(可以使用springmvc的注解)，可使用Feign 注解和JAX-RS注解。Feign支持可插拔的编码器和解码器。Feign默认集成了Ribbon，默认实现了负载均衡的效果并且springcloud为feign添加了springmvc注解的支持。

#### 案例：openFeign 服务调用

> 还是通过「用户服务」调用「商品服务」。

##### 1、服务调用方法引入依赖OpenFeign依赖

```xml
<!-- Open Feign 依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

![image-20200713201342374](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7m7v4ejj324g07kta9.jpg)

##### 2、入口类加入注解开启 `OpenFeign` 支持

```java
@SpringBootApplication
// 开启 openfeign 支持
@EnableFeignClients   
public class Users9999Application {
    public static void main(String[] args) {
        SpringApplication.run(Users9999Application.class, args);
    }
}
```

![image-20200713201602139](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mandwjj31vq0a8ac0.jpg)

##### 3、创建一个客户端调用接口

```java
//value属性用来指定:调用服务名称
@FeignClient("PRODUCTS")
public interface ProductClient {
  
    @GetMapping("/product/findAll") //书写服务调用路径
    String findAll();
}
```

![image-20200713202133954](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7meb81gj31yo0b8abn.jpg)

##### 4、使用 `feignClient` 客户端对象调用服务

```java
// 注入客户端对象
@Autowired
private ProductClient productClient;

@GetMapping("/user/findAllFeignClient")
public String findAllFeignClient(){
  log.info("通过使用OpenFeign组件调用商品服务...");
  String msg = productClient.findAll();
  return msg;
}
```

![image-20200713202615159](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mh4atxj321u0e0778.jpg)

##### 5、访问并测试服务

```
http://localhost:9999/user/findAllFeignClient
```

![image-20200713202802056](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7q9yk12j329s0actam.jpg)

