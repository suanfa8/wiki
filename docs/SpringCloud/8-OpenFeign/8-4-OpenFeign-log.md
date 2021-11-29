# 8-4 OpenFeign 调用详细日志展示

[[toc]]

## 说明

+ 往往在服务调用时我们需要详细展示 feign 的日志，**默认 feign 在调用是并不是最详细日志输出**，因此在调试程序时应该开启 feign 的详细日志展示；
+ feign 对日志的处理非常灵活，可为每个 feign 客户端指定日志记录策略，每个客户端都会创建一个 logger 。默认情况下 logger 的名称是 feign 的全限定名需要注意的是，feign日志的打印只会 DEBUG 级别做出响应；
+ 我们可以为 feign 客户端配置各自的 `logger.level` 对象，告诉 feign 记录哪些日志 `logger.lever` 有以下的几种值：

|           |                                               |
| --------- | --------------------------------------------- |
| `NONE`    | 不记录任何日志                                |
| `BASIC`   | 仅仅记录请求方法、url、响应状态代码及执行时间 |
| `HEADERS` | 记录Basic级别的基础上，记录请求和响应的header |
| `FULL`    | 记录请求和响应的header，body和元数据          |

### 1、开启日志展示

```properties
feign.client.config.PRODUCTS.loggerLevel=full  #开启指定服务日志展示
#feign.client.config.default.loggerLevel=full  #全局开启服务日志展示
logging.level.com.baizhi.feignclients=debug    #指定feign调用客户端对象所在包,必须是debug级别
```

### 2、测试服务调用查看日志

![image-20200713215108861](https://tva1.sinaimg.cn/large/008i3skNgy1gvuhc5oytaj32880fgn7y.jpg)

