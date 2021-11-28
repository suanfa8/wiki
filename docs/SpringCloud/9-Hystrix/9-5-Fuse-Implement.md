## 9-5 服务熔断的实现

!> 其实是一个开关装置。如果我们的断路器频繁地被打开，即使是正常的请求，都会触发断路器。如果有正常的请求来，发现可以了，就可以放行断路器。

> 案例：

服务熔断的实现思路：

- （**在服务提供方**）引入 `hystrix` 依赖，并开启熔断器(断路器)
- 模拟降级方法
- 进行调用测试

1. 项目中引入 `hystrix` 依赖

```xml
<!-- 引入 hystrix -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
</dependency>
```

![image-20200716090932981](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xod82yj31zi07edhf.jpg)

2. 开启断路器

```java
@SpringBootApplication
// 用来开启断路器
@EnableCircuitBreaker  
public class Products9998Application {
    public static void main(String[] args) {
        SpringApplication.run(Products9998Application.class, args);
    }
}
```

![image-20200716094200460](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xr0ekfj328m07ewgl.jpg)

3. 使用 `HystrixCommand` 注解实现断路

```java
// 服务熔断
@GetMapping("/product/break")
@HystrixCommand(fallbackMethod = "testBreakFall" )
public String testBreak(int id){
  log.info("接收的商品id为: "+ id);
  if(id<=0){
    throw new RuntimeException("数据不合法!!!");
  }
  return "当前接收商品id: "+id;
}

public String testBreakFall(int id){
  return "当前数据不合法: "+id;
}
```

![image-20200717090743474](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xsxszcj31zq0k8gqx.jpg)

4. 访问测试

- 正常参数访问
- 错误参数访问



![image-20200717090841831](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xvckjdj322e06m3zp.jpg)

![image-20200717091028876](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7xy556fj31tu05ogml.jpg)

5. 总结

从上面演示过程中会发现如果触发一定条件断路器会自动打开，过了一点时间正常之后又会关闭。那么断路器打开条件是什么呢？

6. 断路器打开条件

官网：https://cloud.spring.io/spring-cloud-netflix/2.2.x/reference/html/#circuit-breaker-spring-cloud-circuit-breaker-with-hystrix

```markdown

```

A service failure in the lower level of services can cause cascading failure all the way up to the user. When calls to a particular service exceed `circuitBreaker.requestVolumeThreshold` (default: 20 requests) and the failure percentage is greater than `circuitBreaker.errorThresholdPercentage` (default: >50%) in a rolling window defined by `metrics.rollingStats.timeInMilliseconds` (default: 10 seconds), the circuit opens and the call is not made. In cases of error and an open circuit, a fallback can be provided by the developer.																		--摘自官方

原文翻译之后,总结打开关闭的条件：

1. 当满足一定的阀值的时候（默认 10 秒内超过 20 个请求次数）；
2. 当失败率达到一定的时候（默认 10 秒内超过 50% 的请求失败）；
3. 到达以上阀值，断路器将会开启；
4. 当开启的时候，所有请求都不会进行转发；
5. 一段时间之后（默认是 5 秒），这个时候断路器是半开状态，会让其中一个请求进行转发。如果成功，断路器会关闭，若失败，继续开启。重复 4 和 5。

![image-20200717092819616](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7y0f60ij31qs0g60v9.jpg)

7. 默认的服务 FallBack 处理方法

如果为每一个服务方法开发一个降级，对于我们来说，可能会出现大量的代码的冗余，不利于维护。这个时候就需要加入默认服务降级处理方法。 

```java
@GetMapping("/product/hystrix")
@HystrixCommand(fallbackMethod = "testHystrixFallBack") //通过HystrixCommand降级处理 指定出错的方法
public String testHystrix(String name) {
  log.info("接收名称为: " + name);
  int n = 1/0;
  return "服务[" + port + "]响应成功,当前接收名称为:" + name;
}
//服务降级处理
public String testHystrixFallBack(String name) {
  return port + "当前服务已经被降级处理!!!,接收名称为: "+name;
}
```

![image-20200716095016332](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7y2yi52j322m0hujw0.jpg)

