# 7-3 基于 Ribbon 的服务调用（负载均衡）

[[toc]]

官方网址：[https://github.com/Netflix/ribbon](https://github.com/Netflix/ribbon)

Spring Cloud Ribbon 是一个基于 HTTP 和 TCP 的客户端负载均衡工具，它基于 Netflix Ribbon 实现。通过 Spring Cloud 的封装，可以让我们轻松地将面向服务的 REST 模版请求自动转换成客户端负载均衡的服务调用。

Ribbon 服务调用，结合 `restTemplate` 完成负载均衡。

## 如何使用 Ribbon 

### 1、项目中引入依赖

说明：

+ 如果使用的是 `Eureka Client` 和 `Consul client`，无须引入依赖，因为在 Eureka，Consul 中默认集成了 Ribbon 组件；
+ 如果使用的 client 中没有 Ribbon 依赖需要显式引入如下依赖。

> Consul 中默认集成了 Ribbon 组件，所以不需要显式引入依赖。


```xml
<!-- 引入 ribbon 依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
</dependency>
```

### 2、查看 consul client 中依赖的 Ribbon

![image-20200713140804414](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jirkmaj328o0a2goi.jpg)

### 3、使用 restTemplate + ribbon进行服务调用

- 方法一：使用 `discovery client` 进行客户端调用
- 方法二：使用 `loadBalanceClient` 进行客户端调用
- 方法三：使用 `@loadBalanced` 进行客户端调用

## 使用 restTemplate + ribbon进行服务调用

#### 方法一：使用 `discovery Client`  形式调用

```java
// http://localhost:9999/user/findAll
@GetMapping("/user/findAll")
public List<ServiceInstance> findAll() {
    log.info("调用用户服务...");
    List<ServiceInstance> serviceInstances = discoveryClient.getInstances("products");
    for (ServiceInstance serviceInstance : serviceInstances) {
        log.info("服务主机:[{}]", serviceInstance.getHost());
        log.info("服务端口:[{}]", serviceInstance.getPort());
        log.info("服务地址:[{}]", serviceInstance.getUri());
        log.info("====================================");
    }
    return serviceInstances;
}
```

访问：

```
http://localhost:9999/user/findAll
```

页面上显示

```json
// 20211127190740
// http://localhost:9999/user/findAll

[
  {
    "instanceId": "products-9997",
    "serviceId": "products",
    "host": "192.168.1.7",
    "port": 9997,
    "secure": false,
    "metadata": {
      "secure": "false"
    },
    "uri": "http://192.168.1.7:9997",
    "scheme": null
  },
  {
    "instanceId": "products-9998",
    "serviceId": "products",
    "host": "192.168.1.7",
    "port": 9998,
    "secure": false,
    "metadata": {
      "secure": "false"
    },
    "uri": "http://192.168.1.7:9998",
    "scheme": null
  }
]
```

代码：


```java
@Autowired
private DiscoveryClient discoveryClient;

// 获取服务列表
List<ServiceInstance> products = discoveryClient.getInstances("服务ID");
for (ServiceInstance product : products) {
  log.info("服务主机:[{}]",product.getHost());
  log.info("服务端口:[{}]",product.getPort());
  log.info("服务地址:[{}]",product.getUri());
  log.info("====================================");
}
```

### 方法二：使用 `loadBalance Client` 形式调用

> `LoadBalancerClient` 可以实现 **负载均衡**。

代码：

```java
@Autowired
private LoadBalancerClient loadBalancerClient;

//根据负载均衡策略选取某一个服务调用
ServiceInstance product = loadBalancerClient.choose("服务ID");//地址  轮询策略
log.info("服务主机:[{}]",product.getHost());
log.info("服务端口:[{}]",product.getPort());
log.info("服务地址:[{}]",product.getUri());
```

### 方法三：使用 `@loadBalanced`

代码：

```java
// 1. 整合 restTemplate + ribbon
@Bean
@LoadBalanced
public RestTemplate getRestTemplate(){
  return new RestTemplate();
}

// 2. 调用服务位置注入RestTemplate
@Autowired
private RestTemplate restTemplate;

// 3. 调用
String forObject = restTemplate.getForObject("http://服务ID/hello/hello?name=" + name, String.class);
```

