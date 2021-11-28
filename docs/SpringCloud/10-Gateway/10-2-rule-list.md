## 10-2 查看网关路由规则列表

gateway 提供路由访问规则列表的 web 界面，但是默认是关闭的，如果想要查看服务路由规则可以在配置文件中开启。


```yml
management:
  endpoints:
    web:
      exposure:
        # 开启所有 web 端点暴露
        include: "*"   
```


- 访问路由管理列表地址：http://localhost:8989/actuator/gateway/routes

```
// 20211127233703
// http://localhost:8989/actuator/gateway/routes

[
  {
    "predicate": "Paths: [/feign/**], match trailing slash: true",
    "route_id": "user_route",
    "filters": [
      
    ],
    "uri": "http://localhost:9999/",
    "order": 0
  },
  {
    "predicate": "Paths: [/product/**], match trailing slash: true",
    "route_id": "product_route",
    "filters": [
      
    ],
    "uri": "http://localhost:9997/",
    "order": 0
  }
]
```

![image-20200720220647899](https://tva1.sinaimg.cn/large/008i3skNgy1gvu85ykxm4j31a00j3juk.jpg)
