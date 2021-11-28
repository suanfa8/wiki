###### 4. 常用路由predicate(断言,验证)

```markdown
# 1.Gateway支持多种方式的predicate
```

![image-20200721112751340](https://tva1.sinaimg.cn/large/008i3skNgy1gvu869i1mjj323m0lk7bh.jpg)

```markdown
- After=2020-07-21T11:33:33.993+08:00[Asia/Shanghai]  			`指定日期之后的请求进行路由
- Before=2020-07-21T11:33:33.993+08:00[Asia/Shanghai]       `指定日期之前的请求进行路由
- Between=2017-01-20T17:42:47.789-07:00[America/Denver], 2017-01-21T17:42:47.789-07:00[America/Denver]
- Cookie=username,chenyn																		`基于指定cookie的请求进行路由
- Cookie=username,[A-Za-z0-9]+															`基于指定cookie的请求进行路由	
	`curl http://localhost:8989/user/findAll --cookie "username=zhangsna"
- Header=X-Request-Id, \d+																 ``基于请求头中的指定属性的正则匹配路由(这里全是整数)
	`curl http://localhost:8989/user/findAll -H "X-Request-Id:11"
- Method=GET,POST																						 `基于指定的请求方式请求进行路由

- 官方更多: https://cloud.spring.io/spring-cloud-static/spring-cloud-gateway/2.2.3.RELEASE/reference/html/#the-cookie-route-predicate-factory
```

```markdown
# 2.使用predicate
```

```yml
spring:
  application:
    name: gateway
  cloud:
    consul:
      host: localhost
      port: 8500
    gateway:
      routes:
        - id: user_route
          #uri: http://localhost:9999/
          uri: lb://users
          predicates:
            - Path=/user/**
            - After=2020-07-21T11:39:33.993+08:00[Asia/Shanghai]
            - Cookie=username,[A-Za-z0-9]+
            - Header=X-Request-Id, \d+
```

![image-20200721152720455](https://tva1.sinaimg.cn/large/008i3skNgy1gvu86e389nj32fe0ca413.jpg)

