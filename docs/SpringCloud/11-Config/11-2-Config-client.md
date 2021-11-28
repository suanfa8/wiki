## 11-2 Config Client 开发

1. 项目中引入 config client 依赖

```xml
<!-- 引入config client -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```

2. 编写配置文件

```properties
# 开启统一配置中心服务
spring.cloud.config.discovery.enabled=true
# 指定统一配置服务中心的服务唯一标识              
spring.cloud.config.discovery.service-id=configserver
# 指定从仓库的那个分支拉取配置    
spring.cloud.config.label=master
# 指定拉取配置文件的名称                                                  
spring.cloud.config.name=client
# 指定拉取配置文件的环境                                                     
spring.cloud.config.profile=dev                                                     
```

3. 远程仓库创建配置文件

- `client.properties`（用来存放公共配置）

```
spring.application.name=configclient
spring.cloud.consul.host=localhost
spring.cloud.consul.port=8500
```

+ `client-dev.properties`，用来存放研发相关配置，注意:这里端口为例，以后不同配置分别存放

```
server.port=9099
```

+ `client-prod.properties`，用来存放生产相关配置

```
server.port=9098	
```

![image-20200722102322149](https://tva1.sinaimg.cn/large/008i3skNgy1gvu82jthsrj31du0b2wge.jpg)

4. 启动客户端服务进行远程配置拉取测试

直接启动过程中发现无法启动直接报错。

![image-20200722102851999](https://tva1.sinaimg.cn/large/008i3skNgy1gvu82mkle4j32c606wq6u.jpg)![image-20200722102901146](https://tva1.sinaimg.cn/large/008i3skNgy1gvu82rq02rj32am08uafx.jpg)

报错原因：项目中目前使用的是 `application.properties` 启动项目，使用这个配置文件在 springboot 项目启动过程中不会等待远程配置拉取，直接根据配置文件中内容启动，因此当需要注册中心,服务端口等信息时,远程配置还没有拉取到,所以直接报错

![image-20200722103435260](https://tva1.sinaimg.cn/large/008i3skNgy1gvu82wodp6j32b20b8wiw.jpg)



解决方案：

+ 应该在项目启动时先等待拉取远程配置，拉取远程配置成功之后再根据远程配置信息启动即可；
+ 为了完成上述要求 SpringBoot 官方提供了一种解决方案，就是在使用统一配置中心时应该将微服务的配置文件名修改为 `bootstrap.(properties|yml)`；
+ `bootstrap.properties` 作为配置启动项目时,会优先拉取远程配置,远程配置拉取成功之后根据远程配置启动当前应用。




![image-20200722103823678](https://tva1.sinaimg.cn/large/008i3skNgy1gvu8315kaqj32ds0bggq2.jpg)

再次启动服务。

![image-20200722103913142](https://tva1.sinaimg.cn/large/008i3skNgy1gvu834eacmj31ny086tcr.jpg)

![image-20200722104031932](https://tva1.sinaimg.cn/large/008i3skNgy1gvu837alp0j31cq08w424.jpg)

!> 新问题：希望配置文件 **立即生效**。