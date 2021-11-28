# 6-3 Eureka 自我保护机制

## 服务频繁启动时 EurekaServer 出现警告

> EMERGENCY! EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY'RE NOT. RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEING EXPIRED JUST TO BE SAFE.


![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwttrsds89j32j2064q5g.jpg "屏幕截图.png")

## 自我保护机制

官网地址：https://github.com/Netflix/eureka/wiki/Server-Self-Preservation-Mode

+ 默认情况下，如果 Eureka Server 在一定时间内（默认 90 秒）没有接收到某个微服务实例的 **心跳**，Eureka Server 将会移除该实例；
+ 但是当网络分区故障发生时，微服务与 Eureka Server 之间无法正常通信，而微服务本身是正常运行的，此时不应该移除这个微服务，所以引入了自我保护机制；
+ Eureka Server 在运行期间会去统计心跳失败比例在 15 分钟之内是否低于 85%，如果低于 85%，Eureka Server 会将这些实例保护起来，让这些实例不会过期；
+ 这种设计的哲学原理就是「**宁可信其有不可信其无**」！。自我保护模式正是一种针对网络异常波动的安全保护措施，使用自我保护模式能使 Eureka 集群更加的健壮、稳定的运行。

## 在 Eureka Server 端关闭自我保护机制


```properties
# 关闭自我保护
eureka.server.enable-self-preservation=false
# 超时 3s 自动清除
eureka.server.eviction-interval-timer-in-ms=3000
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/213207_ab7cf696_426516.png "屏幕截图.png")

## 微服务修改减短服务心跳的时间


```properties
# 用来修改 eureka server 默认接受心跳的最大时间 默认是 90s
eureka.instance.lease-expiration-duration-in-seconds=10 
# 指定客户端多久向 eureka server 发送一次心跳 默认是 30s
eureka.instance.lease-renewal-interval-in-seconds=5     
```

## 尽管如此关闭自我保护机制还是会出现警告

```
THE SELF PRESERVATION MODE IS TURNED OFF. THIS MAY NOT PROTECT INSTANCE EXPIRY IN CASE OF NETWORK/OTHER PROBLEMS.
```

##  官方并不建议在生产情况下关闭

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/213221_41010e1e_426516.png "屏幕截图.png")


## Eureka 停止更新

官方停止更新说明：https://github.com/Netflix/eureka/wiki

在 1.x 版本项目还是活跃的，但是在 2.x 版本中停止维护，出现问题后果自负。


![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtttjk80dj31k209ymzn.jpg "屏幕截图.png")