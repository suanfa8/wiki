# 6-5 开发 consul 客户端即微服务

官方网站：https://spring.io/projects/spring-cloud-consul

### 创建项目并引入 consul 客户端依赖


```xml
<!-- 引入 consul 依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-consul-discovery</artifactId>
</dependency>
```

![image-20200710113855944](https://tva1.sinaimg.cn/large/008i3skNgy1gvu764p2kmj31wo07y402.jpg)

### 注解（可加，也可以不加）

```java
@EnableDiscoveryClient
```

### 编写 properties 配置


```properties
server.port=8889
spring.application.name=consulclient8889
# 注册 consul 服务的主机
spring.cloud.consul.host=localhost
# 注册 consul 服务的端口号
spring.cloud.consul.port=8500	
# 关闭 consul 服务的健康检查[不推荐]
spring.cloud.consul.discovery.register-health-check=false	    
# 指定注册的服务名称 默认就是应用名
spring.cloud.consul.discovery.service-name=${spring.application.name} 
```


![image-20200713135437947](https://tva1.sinaimg.cn/large/008i3skNgy1gvuf42eqkzj32bw05gdhh.jpg)



!> 注意：健康检查一定要打开。

### 启动服务查看 consul 界面服务信息


![image-20200713135359150](https://tva1.sinaimg.cn/large/008i3skNgy1gvu76midbzj32ks0iqq68.jpg)


### consul 开启健康监控检查

开启 consul 健康监控。

默认情况加 consul 监控健康是开启的，但是必须依赖健康监控依赖才能正确监控健康状态所以直接启动会显示错误，引入健康监控依赖之后服务正常。


```xml
<!-- 这个包是用做健康度监控的 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

![image-20200713140146813](https://tva1.sinaimg.cn/large/008i3skNgy1gvu789pi8gj32hy0iewhe.jpg)


##### consul 关闭健康监控检查

```properties
server.port=8889
spring.application.name=consulclient8889
# 注册 consul 服务的主机
spring.cloud.consul.host=localhost
# 注册 consul 服务的端口号
spring.cloud.consul.port=8500	
# 关闭 consul 服务的健康检查[不推荐]
spring.cloud.consul.discovery.register-health-check=true	
# 指定注册的服务名称 默认就是应用名
spring.cloud.consul.discovery.service-name=${spring.application.name} 
```

![image-20200710114321913](https://tva1.sinaimg.cn/large/008i3skNgy1gvu79uq28aj328o072go5.jpg)

![image-20200710121728014](https://tva1.sinaimg.cn/large/008i3skNgy1gvu79vwjhfj32jy0j0got.jpg)

![输入图片说明](https://images.gitee.com/uploads/images/2021/1028/021338_61f21717_426516.png "屏幕截图.png")
