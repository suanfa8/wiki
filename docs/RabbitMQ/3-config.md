# 第 3 章 RabiitMQ 配置

[[TOC]]

## 3.1-RabbitMQ 管理命令行

+ 1.服务启动相关

```
systemctl start|restart|stop|status rabbitmq-server	
```

+ 2.管理命令行  

用来在不使用 web 管理界面情况下命令操作 RabbitMQ

```
rabbitmqctl help 
```

可以查看更多命令。


+ 3.插件管理命令行
	
```
rabbitmq-plugins enable|list|disable 
```


## 3.2-web管理界面介绍

### 3.2.1 overview 概览

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/180225_3900cd5a_426516.png "屏幕截图.png")

- `connections`：无论生产者还是消费者，都需要与 RabbitMQ 建立连接后才可以完成消息的生产和消费，在这里可以查看连接情况。

- `channels`：通道，建立连接后，会形成通道，消息的投递获取依赖通道；

- `Exchanges`：交换机，用来实现消息的路由；

- `Queues`：队列，即消息队列，消息存放在队列中，等待消费，消费后被移除队列。

### 3.2.2 Admin 用户和虚拟主机管理

#### 1. 添加用户

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/180317_b6a21b1f_426516.png "屏幕截图.png")

上面的Tags选项，其实是指定用户的角色，可选的有以下几个：

- 超级管理员(administrator)

  可登陆管理控制台，可查看所有的信息，并且可以对用户，策略(policy)进行操作。

- 监控者(monitoring)

  可登陆管理控制台，同时可以查看rabbitmq节点的相关信息(进程数，内存使用情况，磁盘使用情况等)

- 策略制定者(policymaker)

  可登陆管理控制台, 同时可以对policy进行管理。但无法查看节点的相关信息(上图红框标识的部分)。

- 普通管理者(management)

  仅可登陆管理控制台，无法看到节点信息，也无法对策略进行管理。

- 其他

  无法登陆管理控制台，通常就是普通的生产者和消费者。

#### 2. 创建虚拟主机

```markdown
# 虚拟主机
	为了让各个用户可以互不干扰的工作，RabbitMQ添加了虚拟主机（Virtual Hosts）的概念。其实就是一个独立的访问路径，不同用户使用不同路径，各自有自己的队列、交换机，互相不会影响。
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/180346_e57a8de8_426516.png "屏幕截图.png")

#### 3. 绑定虚拟主机和用户

创建好虚拟主机，我们还要给用户添加访问权限：

点击添加好的虚拟主机：

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/180401_c1ccc36e_426516.png "屏幕截图.png")

进入虚拟机设置界面:

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/180414_bcb603c3_426516.png "屏幕截图.png")