# 1-Docker 方式安装

1. 获取镜像

```
docker pull elasticsearch:7.14.0
```

![image-20211125110148743](https://tva1.sinaimg.cn/large/008i3skNgy1gwr7r55pohj310y08omxj.jpg)

2. 运行 es

```
docker run -d -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.14.0
```

+ `-d`：后台方式启动。

3. 访问 ES

```

```

```
docker logs -f 容器id
```



访问：`http://192.168.64.2:9200/`，看到：

```
// 20211125110637
// http://192.168.64.2:9200/

{
  "name": "48eb58a615e3",
  "cluster_name": "docker-cluster",
  "cluster_uuid": "ZNnCChNNR667BHydDGTWBg",
  "version": {
    "number": "7.14.0",
    "build_flavor": "default",
    "build_type": "docker",
    "build_hash": "dd5a0a2acaa2045ff9624f3729fc8a6f40835aa1",
    "build_date": "2021-07-29T20:49:32.864135063Z",
    "build_snapshot": false,
    "lucene_version": "8.9.0",
    "minimum_wire_compatibility_version": "6.8.0",
    "minimum_index_compatibility_version": "6.0.0-beta1"
  },
  "tagline": "You Know, for Search"
}
```

