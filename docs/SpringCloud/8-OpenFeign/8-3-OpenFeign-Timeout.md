
# 8-3 OpenFeign 超时设置

```markdown
# 0.超时说明
- 默认情况下,openFiegn在进行服务调用时,要求服务提供方处理业务逻辑时间必须在1S内返回,如果超过1S没有返回则OpenFeign会直接报错,不会等待服务执行,但是往往在处理复杂业务逻辑是可能会超过1S,因此需要修改OpenFeign的默认服务调用超时时间。
- 调用超时会出现如下错误：
```

```markdown
# 1.模拟超时
- 服务提供方加入线程等待阻塞
```

![image-20200713213322984](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7nsh440j325s0fg0yg.jpg)

```markdown
# 2.进行客户端调用
```

![image-20200713213415230](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7nweywvj32160gq78y.jpg)

```markdown
# 3.修改OpenFeign默认超时时间
```

```properties
feign.client.config.PRODUCTS.connectTimeout=5000  #配置指定服务连接超时
feign.client.config.PRODUCTS.readTimeout=5000		  #配置指定服务等待超时
#feign.client.config.default.connectTimeout=5000  #配置所有服务连接超时
#feign.client.config.default.readTimeout=5000			#配置所有服务等待超时
```
