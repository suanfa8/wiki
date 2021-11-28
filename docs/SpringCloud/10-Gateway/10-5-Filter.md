###### 5. 常用的 Filter 以及自定义 filter

Route filters allow the modification of the incoming HTTP request or outgoing HTTP response in some manner. Route filters are scoped to a particular route. Spring Cloud Gateway includes many built-in GatewayFilter Factories.


1. 原文翻译
- 官网：https://cloud.spring.io/spring-cloud-static/spring-cloud-gateway/2.2.3.RELEASE/reference/html/#gatewayfilter-factories
	
- 路由过滤器允许以某种方式修改传入的 HTTP 请求或传出的 HTTP 响应。路由筛选器的作用域是特定路由。springcloudgateway 包括许多内置的 GatewayFilter 工厂。

2. 作用

- 当我们有很多个服务时，比如下图中的 user-service、order-service、product-service 等服务，客户端请求各个服务的 Api 时，每个服务都需要做相同的事情，比如鉴权、限流、日志输出等。

![image-20200721161002001](https://tva1.sinaimg.cn/large/008i3skNgy1gvu86hacb4j31ra0ew0u3.jpg)

![image-20200721161421845](https://tva1.sinaimg.cn/large/008i3skNgy1gvu86kf5glj31us0fqwfw.jpg)


2. 使用内置过滤器


![image-20200721152425733](https://tva1.sinaimg.cn/large/008i3skNgy1gvu86n5ivkj31jq0u0qc8.jpg)

- 更多参考官网：https://cloud.spring.io/spring-cloud-static/spring-cloud-gateway/2.2.3.RELEASE/reference/html/#gatewayfilter-factories

- 使用方式如下:


```yml
spring:
  application:
    name: gateway
  cloud:
    gateway:
      routes:
        - id: product_route
          #uri: http://localhost:9998/
          uri: lb://products     # lb: 使用负载均衡策略   products代表注册中心的具体服务名
          predicates:
            - Path=/product/**
            #- After=2020-07-30T09:45:49.078+08:00[Asia/Shanghai]
          filters:
            - AddRequestParameter=id,34
            - AddResponseHeader=username,chenyn
```

```markdown
# 3.使用自定义filter
```

```java
@Configuration
@Slf4j
public class CustomGlobalFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        log.info("进入自定义的filter");
        if(exchange.getRequest().getQueryParams().get("username")!=null){
            log.info("用户身份信息合法,放行请求继续执行!!!");
            return chain.filter(exchange);
        }
        log.info("非法用户,拒绝访问!!!");
       return exchange.getResponse().setComplete();
    }

    @Override
    public int getOrder() {  //filter 数字越小filter越先执行
        return -1;           //-1  最先执行
    }
}
```

![image-20200721164304994](https://tva1.sinaimg.cn/large/008i3skNgy1gvu86r68tqj32600my0yo.jpg)


![输入图片说明](https://images.gitee.com/uploads/images/2021/1029/155200_d023cf22_426516.png "屏幕截图.png")


![输入图片说明](https://images.gitee.com/uploads/images/2021/1029/155417_c3c8f006_426516.png "屏幕截图.png")