

### ElasticSearch 的客户端工具

> ElasticSearch 是一个服务，所以使用 ElasticSearch 需要一些客户端工具。

# Kibana

Kibana 是一个针对 ElasticSearch 的开源分析及可视化平台，使用 Kibana 可以查询、查看并与存储在 ES 索引的数据进行交互操作，使用 Kibana 能执行高级的数据分析，并能以图表、表格和地图的形式查看数据。



```
http://192.168.64.2:9200/_cat
```

![image-20211125111343010](https://tva1.sinaimg.cn/large/008i3skNgy1gwr83jnf1pj30p00he403.jpg)

### Docker 方式安装 Kibana

1. 获取镜像

```
docker pull kibana:7.14.0
```

2. 运行 Kibana

```
docker run -d --name kibana -p 5601:5601 kibana:7.14.0
docker exec -it 6a498c15 bash

在 `/usr/share/kibana/config` 目录下找到 kibana.yml 文件，把它复制出来

docker cp 6a498c15:/usr/share/kibana/config/kibana.yml /opt/docker-kibana/
```

3. 进入容器连接到 ES，重启 Kibana 容器，访问

```
http://192.168.64.2:5601
```

4. 基于数据卷加载配置文件方式运行
   + 从容器复制 Kibana 配置文件出来
   + 修改配置文件 `elasticsearch.hosts: [ "http://192.168.64.2:9200" ]`
   + 修改配置文件为对应ES服务器地址   

5. 通过数据卷加载配置文件方式启动

```
docker run -d --name kibana -p 5601:5601 -v /opt/docker-kibana/kibana.yml:/usr/share/kibana/config/kibana.yml kibana:7.14.0
```

 ![image-20211125112618145](https://tva1.sinaimg.cn/large/008i3skNgy1gwr8gmnhaqj31ag0dmq6q.jpg)

### 