## 12-3 实现自动配置刷新

第 1 步：在所有项目中引入 bus 依赖

```xml
<!-- 引入 bus 依赖 -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bus-amqp</artifactId>
</dependency>
```

![image-20200723104333906](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88qrbnrj31ks074jsw.jpg)

第 2 步：配置统一配置中心连接到 MQ

```properties
spring.rabbitmq.host=localhost											#连接主机
spring.rabbitmq.port=5672														#连接mq端口
spring.rabbitmq.username=user												#连接mq用户名
spring.rabbitmq.password=password										#连接mq密码
```

第 3 步：远端配置中加入连接 MQ 配置

![image-20200723105645915](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88t4iayj31vq0d0gnx.jpg)


第 4 步： 启动统一配置中心服务

正常启动。

![image-20200723111220198](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88x2ki8j322m06mdk6.jpg)

第 5 步：启动客户端服务

+ 加入 bus 组件之后客户端启动报错；

- 原因 SpringCloud 中默认链接不到远程服务器不会报错，但是在使用 bus 消息总线时必须开启连接远程服务失败报错。

![image-20200723111312496](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88zkl55j31y60bamz5.jpg)

```properties
spring.cloud.config.fail-fast=true
```

![image-20200723111754187](https://tva1.sinaimg.cn/large/008i3skNgy1gvu8920ictj31p80baaej.jpg)


第 6 步：修改远程配置后在配置中心服务通过执行 post 接口刷新配置

```markdown
curl -X POST http://localhost:7878/actuator/bus-refresh
```

![image-20200723112316476](https://tva1.sinaimg.cn/large/008i3skNgy1gwunz9ppi6j31si02ojrv.jpg)

第 7 步：通过上述配置就实现了配置统一刷新

