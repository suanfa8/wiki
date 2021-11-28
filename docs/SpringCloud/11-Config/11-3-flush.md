### 11-3 手动配置刷新

!> 发送一个 POST 请求。

1. 说明

+ 在生产环境中，微服务可能非常多，每次修改完远端配置之后，不可能对所有服务进行重新启动；
+ 这个时候需要让修改配置的服务能够刷新远端修改之后的配置，从而不要每次重启服务才能生效，进一步提高微服务系统的维护效率；
+ 在 SpringCloud 中也为我们提供了手动刷新配置和自动刷新配置两种策略，这里我们先试用手动配置文件刷新。

2. 在 config client 端加入刷新暴露端点

```properties
# 开启所有 web 端点暴露（推荐使用这种）
management.endpoints.web.exposure.include=*            
```

![image-20200730161148097](https://tva1.sinaimg.cn/large/008i3skNgy1gvu83b3d6tj31zs07yn0k.jpg)

3. 在需要刷新代码的类中加入刷新配置的注解

```java
@RestController
@RefreshScope
@Slf4j
public class TestController {
    @Value("${name}")
    private String name;
    @GetMapping("/test/test")
    public String test(){
      log.info("当前加载配置文件信息为:[{}]",name);
      return name;
    }
}
```

![image-20200722153537692](https://tva1.sinaimg.cn/large/008i3skNgy1gvu83drihhj324g0hqjv0.jpg)

4. 在远程配置中加入 name 并启动测试

![image-20200722153731602](https://tva1.sinaimg.cn/large/008i3skNgy1gvu83h50m4j31y60haju3.jpg)

5. 启动之后直接访问

![image-20200722153806932](https://tva1.sinaimg.cn/large/008i3skNgy1gvu83njggej31hw05mjs6.jpg)

6. 修改远程配置

![image-20200722203225968](https://tva1.sinaimg.cn/large/008i3skNgy1gvu83ra4bjj31wc07q3zh.jpg)

7. 修改之后在访问

- 发现并没有自动刷新配置?
- 必须调用刷新配置接口才能刷新配置


![image-20200722203317795](https://tva1.sinaimg.cn/large/008i3skNgy1gvu83usnbyj31qi05gq3s.jpg)

8. 手动调用刷新配置接口

!> 注意：这个 `url` 是写死的。 


```
curl -X POST http://localhost:9099/actuator/refresh
```

![image-20200722203417879](https://tva1.sinaimg.cn/large/008i3skNgy1gvu847t1haj31sy04a3z6.jpg)

9. 在次访问发现配置已经成功刷新

![image-20200722203452506](https://tva1.sinaimg.cn/large/008i3skNgy1gvu83zt8pgj31s606ajsf.jpg)

