# 7-Redis 安装（重点）

[[TOC]]

## 准备环境

- vmware15.x+
- centos7.x+

### 1、下载 redis 源码包

- https://redis.io/

![image-20200623121621195](https://tva1.sinaimg.cn/large/008i3skNgy1gw3je592tfj31qi0b076y.jpg)

### 2、下载完整源码包

- redis-4.0.10.tar.gz

![image-20200623123918876](https://tva1.sinaimg.cn/large/008i3skNgy1gw3jfdxfjrj31lo01cwel.jpg)

3. ### 将下载 redis 资料包上传到 Linux 中

![image-20200623124327319](https://tva1.sinaimg.cn/large/008i3skNgy1gw3jfp3ad5j31wg03caad.jpg)

4. ### 解压缩文件

```shell
tar -zxvf redis-4.0.10.tar.gz
ll
```

![image-20200623124522026](https://tva1.sinaimg.cn/large/008i3skNgy1gw3jh4nojcj323i06kjsq.jpg)


5. ### 安装 gcc  

```bash
yum install -y gcc
```


6. ### 进入解压缩目录执行如下命令
```bash
make MALLOC=libc
```

7. ### 编译完成后执行如下命令
```bash
make install PREFIX=/usr/redis
```

8. ### 进入/usr/redis目录启动redis服务 
```bash
./redis-server
```

显示如下信息：

![image-20200623125420505](https://tva1.sinaimg.cn/large/008i3skNgy1gwtj3rt40aj320i0u0wka.jpg)

9. ### `Redis` 服务端口默认是 `6379`
10. ### 进入 `bin` 目录执行客户端连接操作

```bash
./redis-cli –p 6379
```


![image-20200623125716013](https://tva1.sinaimg.cn/large/008i3skNgy1gwtj3su95jj31sw054gm3.jpg)

11. ### 连接成功出现上面界面连接成功

---

我的操作：

```
scp /Users/liweiwei1419/redis-6.2.6.tar.gz root@192.168.47.129:/opt
tar -zxvf redis-6.2.6.tar.gz
yum install -y gcc
cd redis-6.2.6
make install PREFIX=/usr/redis
cd /usr/redis/bin
./redis-server
# 重新开一个连接
./redis-cli -p 6379

# 
cp /opt/redis-6.2.6/redis.conf /usr/redis/

后台启动：把配置文件里的 daemonize no 改成 yes

./redis-server ../redis.conf 
```

![image-20211105040303197](https://tva1.sinaimg.cn/large/008i3skNgy1gwtj3xc347j31sk0q0791.jpg)

