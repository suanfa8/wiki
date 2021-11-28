## 10-3 配置路由服务负载均衡

!> 本节要点： **网关在路由转发的时候也要实现负载均衡。** 

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwu4zem51pj310u09idgu.jpg "屏幕截图.png")

现有路由配置方式，都是基于服务地址写死的路由转发，能不能  **根据服务名称**  进行路由转发同时实现负载均衡的呢？

### 动态路由以及负载均衡转发配置

```yml
spring:
  application:
    name: gateway
  cloud:
    consul:
      host: localhost
      port: 8500
    gateway:
      routes:
        - id: user_route
          # uri: http://localhost:9999/ # 没有负载均衡的配置
          # lb 代表转发后台服务使用负载均衡，users 代表服务注册中心上的服务名
          uri: lb://users							
          predicates:
            - Path=/user/**

        - id: product_route
          # uri: http://localhost:9998/
          # lb(loadbalance) 代表负载均衡转发路由
          uri: lb://products          
          predicates:
            - Path=/product/**
      discovery:
        locator:
          # 开启根据服务名动态获取路由
          enabled: true 							
```

注意：`discovery.locator.enabled` 配置必须开启。


![image-20200721110013966](https://tva1.sinaimg.cn/large/008i3skNgy1gvu862rvsdj32ay0tcafa.jpg)

![image-20200721110040104](https://tva1.sinaimg.cn/large/008i3skNgy1gvu8660q3zj32h60gkta5.jpg)

