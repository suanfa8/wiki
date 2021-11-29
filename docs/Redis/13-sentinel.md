# 13-Redis 哨兵机制

## 13.1 哨兵Sentinel机制

Sentinel（哨兵）是Redis 的高可用性解决方案：由一个或多个Sentinel 实例 组成的Sentinel 系统可以监视任意多个主服务器，以及这些主服务器属下的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器属下的某个从服务器升级为新的主服务器。简单的说哨兵就是带有**自动故障转移功能的主从架构**。

**无法解决: 1.单节点并发压力问题   2.单节点内存和磁盘物理上限**

### 13.2 哨兵架构原理

![image-20200627204422750](https://tva1.sinaimg.cn/large/008i3skNgy1gwtoyy92doj32js0ootfc.jpg)

### 13.3 搭建哨兵架构

```markdown
# 1.在主节点上创建哨兵配置
- 在Master对应redis.conf同目录下新建sentinel.conf文件，名字绝对不能错；

# 2.配置哨兵，在sentinel.conf文件中填入内容：
- sentinel monitor 被监控数据库名字（自己起名字） ip port 1

# 3.启动哨兵模式进行测试
- redis-sentinel  /root/sentinel/sentinel.conf
	说明:这个后面的数字2,是指当有两个及以上的sentinel服务检测到master宕机，才会去执行主从切换的功能。
```

### 13.4 通过springboot操作哨兵

```properties
# redis sentinel 配置
# master书写是使用哨兵监听的那个名称
spring.redis.sentinel.master=mymaster
# 连接的不再是一个具体redis主机,书写的是多个哨兵节点
spring.redis.sentinel.nodes=192.168.202.206:26379
```

- **注意:如果连接过程中出现如下错误:RedisConnectionException: DENIED Redis is running in protected mode because protected mode is enabled, no bind address was specified, no authentication password is requested to clients. In this mode connections are only accepted from the loopback interface. If you want to connect from external computers to Redis you may adopt one of the following solutions: 1) Just disable protected mode sending the command 'CONFIG SET protected-mode no' from the loopback interface by connecting to Redis from the same host the server is running, however MAKE SURE Redis is not publicly accessible from internet if you do so. Use CONFIG REWRITE to make this change permanent. 2)**
- **解决方案:在哨兵的配置文件中加入bind 0.0.0.0 开启远程连接权限**

![image-20200629154647970](https://tva1.sinaimg.cn/large/008i3skNgy1gwtoz2924rj31zo0f0787.jpg)

## 