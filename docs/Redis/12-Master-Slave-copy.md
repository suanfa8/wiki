# 12. Redis 主从复制

### 12.1 主从复制（只是完成了备份的工作）

+ 主从复制架构 **仅仅用来解决数据的冗余备份**，从节点仅仅用来同步数据；
+ 无法解决：1. master节点出现故障的自动故障转移（使用哨兵机制，让从节点顶替主节点）。

****

### 12.2 主从复制架构图

![image-20200627201722700](https://tva1.sinaimg.cn/large/008i3skNgy1gw4jgx6g4uj31g20iymxz.jpg)

+ **从节点是只读的**。

### 12.3 搭建主从复制

1. 准备 3 台机器并修改配置

```markdown
- master
	port 6379
	bind 0.0.0.0
	
- slave1
	port 6380
	bind 0.0.0.0
	slaveof masterip masterport

- slave2
	port 6381
	bind 0.0.0.0
	slaveof masterip masterport
```

![image-20200627202443388](https://tva1.sinaimg.cn/large/008i3skNgy1gw4jojw7cbj321m08cdit.jpg)


2. 启动 3 台机器进行测试 

```markdown
cd /usr/redis/bin
./redis-server /root/master/redis.conf
./redis-server /root/slave1/redis.conf
./redis-server /root/slave2/redis.conf
```

