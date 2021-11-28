## 12-4 指定服务刷新配置

默认情况下使用

```
curl -X POST http://localhost:7878/actuator/bus-refresh
```

这种方式刷新配置是全部广播形式，也就是所有的微服务都能接收到刷新配置通知，但有时我们修改的仅仅是某个服务的配置，这个时候对于其他服务的通知是多余的,因此就需要指定服务进行通知。

### 指定服务刷新配置实现

- 指定端口刷新某个具体服务

```
curl -X POST http://localhost:7878/actuator/bus-refresh/configclient:9090
```

- 指定服务 id 刷新服务集群节点

```
curl -X POST http://localhost:7878/actuator/bus-refresh/configclient
```

注意：`configclient` 代表刷新服务的唯一标识。

### 