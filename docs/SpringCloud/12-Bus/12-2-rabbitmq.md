## 12-2 实现配置刷新原理

![image-20200723150335451](https://tva1.sinaimg.cn/large/008i3skNgy1gvu8860w1zj31py0sm78r.jpg)

### 搭建 RabbitMQ 服务

第 0 步：下载 RabbitMQ 安装包（可以直接使用 Docker 安装更方便）

官方安装包下载：https://www.rabbitmq.com/install-rpm.html#downloads

注意：这里安装包只能用于 Centos7.x 系统。


![image-20190925220343521](https://tva1.sinaimg.cn/large/008i3skNgy1gvu888kenfj317k04k3z6.jpg)



第 1 步：将 RabbitMQ 安装包上传到 Linux 系统中

```
erlang-22.0.7-1.el7.x86_64.rpm
rabbitmq-server-3.7.18-1.el7.noarch.rpm
```

第 2 步：安装 Erlang 依赖包

```
rpm -ivh erlang-22.0.7-1.el7.x86_64.rpm
```

第 3 步：安装 RabbitMQ 安装包（需要联网）

```
yum install -y rabbitmq-server-3.7.18-1.el7.noarch.rpm
```

注意：默认安装完成后配置文件模板在：`/usr/share/doc/rabbitmq-server-3.7.18/rabbitmq.config.example` 目录中，需要将配置文件复制到 `/etc/rabbitmq/` 目录中，并修改名称为 `rabbitmq.config`。

第 4 步：复制配置文件

```
cp /usr/share/doc/rabbitmq-server-3.7.18/rabbitmq.config.example /etc/rabbitmq/rabbitmq.config
```

第 5 步：查看配置文件位置

```
ls /etc/rabbitmq/rabbitmq.config
```

第 6 步：修改配置文件（参见下图）

```
vim /etc/rabbitmq/rabbitmq.config 
```


![image-20190925222230260](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88ayegdj31mw0c2jwi.jpg)

将上图中配置文件中红色部分去掉 `%%`，以及最后的 `,` 逗号修改为下图：

![image-20190925222329200](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88caofkj31my088tb2.jpg)

第 7 步：执行如下命令，启动 RabbitMQ 中的插件管理

```
rabbitmq-plugins enable rabbitmq_management
```

出现如下说明：

```
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
```

第 8 步：启动 RabbitMQ 的服务

```
systemctl start rabbitmq-server
systemctl restart rabbitmq-server
systemctl stop rabbitmq-server
```

第 9 步：查看服务状态（见下图）

```
systemctl status rabbitmq-server
```








```markdown
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

![image-20190925222743776](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88gpiivj31dh0u0wm1.jpg)

第 10 步：关闭防火墙服务

```
systemctl disable firewalld
```

```
Removed symlink /etc/systemd/system/multi-user.target.wants/firewalld.service.
Removed symlink /etc/systemd/system/dbus-org.fedoraproject.FirewallD1.service.
```



```
systemctl stop firewalld   
```

第 11 步：访问 web 管理界面

```
http://10.15.0.8:15672/
```

 ![image-20190926194738708](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88kvjbsj320y0ggwgk.jpg)

第 12 步：登录管理界面

```markdown
username:  guest
password:  guest
```

![image-20190926194954822](https://tva1.sinaimg.cn/large/008i3skNgy1gvu88nkkv8j31n00u0wii.jpg)

第 13 步：MQ 服务搭建成功