# 15-Redis实现分布式Session管理

### 15.1 管理机制

> Redis 的 Session 管理是利用 Spring 提供的 Session 管理解决方案，将一个应用 Session 交给 Redis 存储，整个应用中所有 Session 的请求都会去 Redis 中获取对应的 Session 数据。

![image-20200628201643358](https://tva1.sinaimg.cn/large/008i3skNgy1gwtp0j37thj31ok0gs0w8.jpg)

### 15.2 开发 Session 管理

1. 引入依赖

```xml
<dependency>
    <groupId>org.springframework.session</groupId>
    <artifactId>spring-session-data-redis</artifactId>
</dependency>
```

2. 开发 Session 管理配置类

```java
@Configuration
@EnableRedisHttpSession
public class RedisSessionManager {
   
}
```

3. 打包测试即可
