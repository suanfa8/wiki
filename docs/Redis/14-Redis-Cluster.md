# 14-Redis集群

### 14.1 集群

Redis 在 3.0 后开始支持 Cluster 模式，目前 Redis 的集群支持节点的自动发现，支持 slave-master 选举和容错，支持在线分片（sharding shard）等特性。

reshard

### 14.2 集群架构图

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozlpzpkj311b0u0jtr.jpg)

### 14.3 集群细节


- 所有的 Redis 节点彼此互联（PING-PONG 机制），内部使用二进制协议优化传输速度和带宽；
- 节点的 `fail` 是通过集群中超过半数的节点检测失效时才生效；
- 客户端与 Redis 节点直连，不需要中间 proxy 层。客户端不需要连接集群所有节点，连接集群中任何一个可用节点即可；
- `redis-cluster` 把所有的物理节点映射到[0-16383]slot上，`cluster` 负责维护 `node<->slot<->value`。

![image-20200629165226329](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozq0fu2j31520u0wkr.jpg)

### 14.4 集群搭建

判断一个是集群中的节点是否可用,是集群中的所用主节点选举过程,如果半数以上的节点认为当前节点挂掉,那么当前节点就是挂掉了,所以搭建redis集群时建议节点数最好为奇数，**搭建集群至少需要三个主节点,三个从节点,至少需要6个节点**。

```markdown
# 1.准备环境安装ruby以及redis集群依赖
- yum install -y ruby rubygems
- gem install redis-xxx.gem

```

![image-20200627193219366](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozoxbvuj31ke0b4wis.jpg)

![image-20200627193348905](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozqql00j31iq01i74e.jpg)

```markdown
# 2.在一台机器创建7个目录
```

![image-20200627193849867](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozmc5ojj32cs0o2n3c.jpg)

```markdown
# 3.每个目录复制一份配置文件
[root@localhost ~]# cp redis-4.0.10/redis.conf 7000/
[root@localhost ~]# cp redis-4.0.10/redis.conf 7001/
[root@localhost ~]# cp redis-4.0.10/redis.conf 7002/
[root@localhost ~]# cp redis-4.0.10/redis.conf 7003/
[root@localhost ~]# cp redis-4.0.10/redis.conf 7004/
[root@localhost ~]# cp redis-4.0.10/redis.conf 7005/
[root@localhost ~]# cp redis-4.0.10/redis.conf 7006/
```

![image-20200627194103354](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozkpkl8j31wa0a041g.jpg)

```markdown
# 4.修改不同目录配置文件
- port 	6379 .....                		 //修改端口
- bind  0.0.0.0                   		 //开启远程连接
- cluster-enabled  yes 	        			 //开启集群模式
- cluster-config-file  nodes-port.conf //集群节点配置文件
- cluster-node-timeout  5000      	   //集群节点超时时间
- appendonly  yes   		               //开启AOF持久化

# 5.指定不同目录配置文件启动七个节点
- [root@localhost bin]# ./redis-server  /root/7000/redis.conf
- [root@localhost bin]# ./redis-server  /root/7001/redis.conf
- [root@localhost bin]# ./redis-server  /root/7002/redis.conf
- [root@localhost bin]# ./redis-server  /root/7003/redis.conf
- [root@localhost bin]# ./redis-server  /root/7004/redis.conf
- [root@localhost bin]# ./redis-server  /root/7005/redis.conf
- [root@localhost bin]# ./redis-server  /root/7006/redis.conf
```

![image-20200627194913866](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozny7v4j31o70u0k3s.jpg)

```markdown
# 6.查看进程
- [root@localhost bin]# ps aux|grep redis
```

![image-20200627194954143](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozhd53bj32eo0ewgs8.jpg)

#### 1.创建集群

```markdown
# 1.复制集群操作脚本到bin目录中
- [root@localhost bin]# cp /root/redis-4.0.10/src/redis-trib.rb .

# 2.创建集群
- ./redis-trib.rb create --replicas 1 192.168.202.205:7000 192.168.202.205:7001 192.168.202.205:7002 192.168.202.205:7003 192.168.202.205:7004 192.168.202.205:7005
```

![image-20200627195601307](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozibvpgj31so0u07e4.jpg)

```markdown
# 3.集群创建成功出现如下提示
```

![image-20200627195647767](https://tva1.sinaimg.cn/large/008i3skNgy1gwtozjnmwyj31cs0u0n4m.jpg)

#### 2.查看集群状态

```markdown
# 1.查看集群状态 check [原始集群中任意节点] [无]
- ./redis-trib.rb check 192.168.202.205:7000

# 2.集群节点状态说明
- 主节点 
	主节点存在hash slots,且主节点的hash slots 没有交叉
	主节点不能删除
	一个主节点可以有多个从节点
	主节点宕机时多个副本之间自动选举主节点

- 从节点
	从节点没有hash slots
	从节点可以删除
	从节点不负责数据的写,只负责数据的同步
```

#### 3.添加主节点

```markdown
# 1.添加主节点 add-node [新加入节点] [原始集群中任意节点]
- ./redis-trib.rb  add-node 192.168.1.158:7006  192.168.1.158:7005
- 注意:
	1.该节点必须以集群模式启动
	2.默认情况下该节点就是以master节点形式添加
```

#### 4.添加从节点

```markdown
# 1.添加从节点 add-node --slave [新加入节点] [集群中任意节点]
- ./redis-trib.rb  add-node --slave 192.168.1.158:7006 192.168.1.158:7000
- 注意:
	当添加副本节点时没有指定主节点,redis会随机给副本节点较少的主节点添加当前副本节点
	
# 2.为确定的master节点添加主节点 add-node --slave --master-id master节点id [新加入节点] [集群任意节点]
- ./redis-trib.rb  add-node --slave --master-id 3c3a0c74aae0b56170ccb03a76b60cfe7dc1912e 127.0.0.1:7006  127.0.0.1:7000
```

#### 5.删除副本节点

```markdown
# 1.删除节点 del-node [集群中任意节点] [删除节点id]
- ./redis-trib.rb  del-node 127.0.0.1:7002 0ca3f102ecf0c888fc7a7ce43a13e9be9f6d3dd1
- 注意:
 1.被删除的节点必须是从节点或没有被分配hash slots的节点
```

#### 6.集群在线分片

```markdown
# 1.在线分片 reshard [集群中任意节点] [无]
- ./redis-trib.rb  reshard  192.168.1.158:7000
```

----

## 