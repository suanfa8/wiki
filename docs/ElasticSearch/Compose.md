### Compose 方式安装



```
vim docker-compose.yml
```

 

```
version: "3.8"
volumes:
  data:
  config:
  plugin:
networks:
  es:
services:
  elasticsearch:
    image: elasticsearch:7.14.0
    ports:
      - "9200:9200"
      - "9300:9300"
    networks:
      - "es"  
    environment:
      - "discovery.type=single-node"
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    volumes:
      - data:/usr/share/elasticsearch/data
      - config:/usr/share/elasticsearch/config 
      - plugin:/usr/share/elasticsearch/plugins
  kibana:
    image: kibana:7.14.0
    ports:
      - "5601:5601"
    networks:
      - "es"
    volumes:
      - ./kibana.yml:/usr/share/kibana/config/kibana.yml
```



```
# kiana 配置文件，连接到 ES
server.host: "0"
server.shutdownTimeout: "5s"
elasticsearch.hosts: [ "http://elasticsearch:9200" ]
monitoring.ui.container.elasticsearch.enabled: true
```

+ 因为在一个网关里，所以 ip 地址写成服务名就可以了。





安装地址：https://github.com/docker/compose

```
docker-composs -v

docker-composs up -d
```



![image-20211125123101918](https://tva1.sinaimg.cn/large/008i3skNgy1gwrabzilhrj319u0k4th1.jpg)

## 