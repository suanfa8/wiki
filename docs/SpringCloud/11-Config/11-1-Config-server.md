## 11-1 Config 组件使用

### 什么是 Config

官方网址：https://cloud.spring.io/spring-cloud-static/spring-cloud-config/2.2.3.RELEASE/reference/html/#_spring_cloud_config_server

config（配置）又称为「统一配置中心」。顾名思义，就是将配置统一管理，配置统一管理的好处是在日后大规模集群部署服务应用时相同的服务配置一致，日后再修改配置只需要统一修改全部同步，不需要一个一个服务手动维护。

统一配置中心组件流程图

![统一配置中心组件流程图](https://tva1.sinaimg.cn/large/008i3skNgy1gvu81rfri5j31q40g876c.jpg)

### Config Server 开发

1. 引入依赖


```xml
<!-- 引入统一配置中心 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>

<!-- 引入 consul 依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-consul-discovery</artifactId>
</dependency>

<!-- 这个包是用做健康度监控的 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

2. 开启统一配置中心服务 `@EnableConfigServer`


```java
@SpringBootApplication
@EnableConfigServer
public class Configserver7878Application {
    public static void main(String[] args) {
        SpringApplication.run(Configserver7878Application.class, args);
    }
}
```

![image-20200721182003376](https://tva1.sinaimg.cn/large/008i3skNgy1gvu81uid2pj3290080taw.jpg)


3. 修改配置文件


```properties
server.port=7878
spring.application.name=configserver
spring.cloud.consul.host=localhost
spring.cloud.consul.port=8500
spring.cloud.consul.discovery.service-name=${spring.application.name}
```

![image-20200721182105648](https://tva1.sinaimg.cn/large/008i3skNgy1gvu81wlmunj31rq04ywg5.jpg)


4. 直接启动服务报错

-  没有指定远程仓库的相关配置


![image-20200721182142000](https://tva1.sinaimg.cn/large/008i3skNgy1gvu81ytrnoj32480dw76c.jpg)


5. 创建远程仓库

- github创建一个仓库


![image-20200721183541178](https://tva1.sinaimg.cn/large/008i3skNgy1gvu822m6onj31eq0lumz6.jpg)


6. 复制仓库地址

- https://github.com/chenyn-java/configservers.git


![image-20200721183727767](https://tva1.sinaimg.cn/large/008i3skNgy1gvu825qp6bj31xa0be0uz.jpg)


7. 在统一配置中心服务中修改配置文件指向远程仓库地址


```properties
spring.cloud.config.server.git.uri=https://github.com/chenyn-java/configservers.git
#spring.cloud.config.server.git.username=私有仓库访问用户名       
#spring.cloud.config.server.git.password=私有仓库访问密码				
```


8. 再次启动统一配置中心


![image-20200721221656436](https://tva1.sinaimg.cn/large/008i3skNgy1gvu828v1kij320q06odka.jpg)


9. 拉取远端配置 [三种方式][]

- 1. http://localhost:7878/test-xxxx.properties
- 2. http://localhost:7878/test-xxxx.json
- 3. http://localhost:7878/test-xxxx.yml



```
http://localhost:7878/main/order.properties
http://localhost:7878/main/order-xxx.properties
http://localhost:7878/main/order-dev.properties
http://localhost:7878/main/order-prod.properties

http://localhost:7878/order/dev
http://localhost:7878/order/prod
```








![image-20200721221951670](https://tva1.sinaimg.cn/large/008i3skNgy1gvu82b6rwoj31v80dadi7.jpg)


10. 拉取远端配置规则

```
label/name-profiles.yml
```

+ `label` 代表：去那个分支获取，默认使用 `master`分支
+ `name` 代表：读取那个具体的配置文件文件名称
+ `profile` 代表：读取配置文件环境


![image-20200722105313716](https://tva1.sinaimg.cn/large/008i3skNgy1gvu82dskj6j31ni07qaax.jpg)


11. 查看拉取配置详细信息

- http://localhost:7878/client/dev       [client:代表远端配置名称][dev:代表远程配置的环境]


![image-20200722105950808](https://tva1.sinaimg.cn/large/008i3skNgy1gvu82fqf7cj31nk0u0dlq.jpg)


12. 指定分支和本地仓库位置


```properties
# 一定要是一个空目录，在首次会将该目录清空
spring.cloud.config.server.git.basedir=/localresp
# 指定使用远程仓库中那个分支中内容
spring.cloud.config.server.git.default-label=master
```