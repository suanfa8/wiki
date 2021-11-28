# 6-4 Consul

consul  服务注册中心  启动consul服务注册中心  运行 

consul 客户端 将springcloud 客户端(微服务)

## consul 简介

官方网址：https://www.consul.io

consul是一个可以提供服务发现，健康检查，多数据中心，Key/Value存储等功能的分布式服务框架，用于实现分布式系统的服务发现与配置。与其他分布式服务注册与发现的方案，使用起来也较为简单。Consul 用 Golang实现，因此具有天然可移植性（支持 Linux、Windows 和 Mac OS X）；安装包仅包含一个可执行文件，方便部署。


## 安装 consul

官方安装视频地址： https://learn.hashicorp.com/consul/getting-started/install.html

下载 consul：https://www.consul.io/downloads

![输入图片说明](https://tva1.sinaimg.cn/large/008i3skNgy1gwtu1iofvpj32380fmwhe.jpg "屏幕截图.png")

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/213326_064129de_426516.png "屏幕截图.png")



解压之后发现 consul 只有一个脚本文件


![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/213410_3cd92362_426516.png "屏幕截图.png")

### 根据解压缩目录配置环境变量

- 根据安装目录进行环境变量配置 [这里是 macos 和 linux 系统配置]

```
vim ~/.zshrc

export CONSUL_HOME=/Users/liwei/app/consul
export PATH=$PATH:$CONSUL_HOME

source ~/.zshrc
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/1027/213340_5f264ed0_426516.png "屏幕截图.png")

### 查看 consul 环境变量是否配置成功，执行命令出现如下信息代表成功

```
consul -v
```




![image-20200710105449741](https://tva1.sinaimg.cn/large/008i3skNgy1gvu74azyluj32ae05cmyj.jpg)

### 启动 consul 服务

```
consul agent -dev
```




![image-20200710105654356](https://tva1.sinaimg.cn/large/008i3skNgy1gvu755119pj32i20d6n1e.jpg)

### 访问 consul 的 web 服务端口

```
http://localhost:8500
```

+ consul 默认服务端口是 8500

![image-20200710105912943](https://tva1.sinaimg.cn/large/008i3skNgy1gvu75rxsnoj32ki0fmjtn.jpg)





