# 第 2 章 RabbitMQ 的引言

[[TOC]]

## 2.1-RabbitMQ 

+ 官网: https://www.rabbitmq.com/
+ 官方教程: https://www.rabbitmq.com/#getstarted

> 基于`AMQP`协议，erlang 语言开发，是部署最广泛的开源消息中间件，是最受欢迎的开源消息中间件之一。

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175302_df8ceaad_426516.png "屏幕截图.png")

+ AMQP 协议

AMQP（advanced message queuing protocol）在 2003 年时被提出，最早用于解决金融领不同平台之间的消息传递交互问题。

顾名思义，AMQP 是一种协议，更准确的说是一种 binary wire-level protocol（链接协议）。这是其和 JMS 的本质差别， **AMQP 不从 API 层进行限定，而是直接定义网络交换的数据格式** 。这使得实现了 AMQP 的 provider 天然性就是跨平台的。以下是 AMQP 协议模型:

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175427_0c561bad_426516.png "屏幕截图.png")

## 2.2-RabbitMQ 的安装

### 2.2.1 下载

+ 官网下载地址: https://www.rabbitmq.com/download.html

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175532_37127f33_426516.png "屏幕截图.png")

最新版本：3.7.18



### 2.2.2 下载的安装包

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175610_f3f002dd_426516.png "屏幕截图.png")

注意：这里的安装包是 centos7 安装的包。

### 2.2.3 安装步骤

```markdown
# 1.将rabbitmq安装包上传到linux系统中
	erlang-22.0.7-1.el7.x86_64.rpm
	rabbitmq-server-3.7.18-1.el7.noarch.rpm

# 2.安装Erlang依赖包
	rpm -ivh erlang-22.0.7-1.el7.x86_64.rpm

# 3.安装RabbitMQ安装包(需要联网)
	yum install -y rabbitmq-server-3.7.18-1.el7.noarch.rpm
		注意:默认安装完成后配置文件模板在:/usr/share/doc/rabbitmq-server-3.7.18/rabbitmq.config.example目录中,需要	
				将配置文件复制到/etc/rabbitmq/目录中,并修改名称为rabbitmq.config
# 4.复制配置文件
	cp /usr/share/doc/rabbitmq-server-3.7.18/rabbitmq.config.example /etc/rabbitmq/rabbitmq.config

# 5.查看配置文件位置
	ls /etc/rabbitmq/rabbitmq.config

# 6.修改配置文件(参见下图:)
	vim /etc/rabbitmq/rabbitmq.config 
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175643_da2cbacb_426516.png "屏幕截图.png")


将上图中配置文件中红色部分去掉`%%`,以及最后的`,`逗号 修改为下图:

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175702_c73a4938_426516.png "屏幕截图.png")

```markdown
# 7.执行如下命令,启动rabbitmq中的插件管理
	rabbitmq-plugins enable rabbitmq_management
	
	出现如下说明:
		Enabling plugins on node rabbit@localhost:
    rabbitmq_management
    The following plugins have been configured:
      rabbitmq_management
      rabbitmq_management_agent
      rabbitmq_web_dispatch
    Applying plugin configuration to rabbit@localhost...
    The following plugins have been enabled:
      rabbitmq_management
      rabbitmq_management_agent
      rabbitmq_web_dispatch

    set 3 plugins.
    Offline change; changes will take effect at broker restart.

# 8.启动RabbitMQ的服务
	systemctl start rabbitmq-server
	systemctl restart rabbitmq-server
	systemctl stop rabbitmq-server
	

# 9.查看服务状态(见下图:)
	systemctl status rabbitmq-server
  ● rabbitmq-server.service - RabbitMQ broker
     Loaded: loaded (/usr/lib/systemd/system/rabbitmq-server.service; disabled; vendor preset: disabled)
     Active: active (running) since 三 2019-09-25 22:26:35 CST; 7s ago
   Main PID: 2904 (beam.smp)
     Status: "Initialized"
     CGroup: /system.slice/rabbitmq-server.service
             ├─2904 /usr/lib64/erlang/erts-10.4.4/bin/beam.smp -W w -A 64 -MBas ageffcbf -MHas ageffcbf -
             MBlmbcs...
             ├─3220 erl_child_setup 32768
             ├─3243 inet_gethost 4
             └─3244 inet_gethost 4
      .........
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175724_56c30fbb_426516.png "屏幕截图.png")

```markdown
# 10.关闭防火墙服务
	systemctl disable firewalld
    Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.
    Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.
	systemctl stop firewalld   

# 11.访问web管理界面
	http://10.15.0.8:15672/
```

 ![image-20190926194738708](RibbitMQ 实战教程.assets/image-20190926194738708-3836601.png)

```markdown
# 12.登录管理界面
	username:  guest
	password:  guest
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/175752_0a615455_426516.png "屏幕截图.png")



