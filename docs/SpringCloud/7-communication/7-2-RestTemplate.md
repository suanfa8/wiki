## 基于 RestTemplate 的服务调用

说明：Spring 框架提供的 RestTemplate 类可用于在应用中调用 rest 服务，它简化了与 http 服务的通信方式，统一了 RESTful 的标准，封装了 http 链接，我们只需要传入 url 及返回值类型即可。相较于之前常用的 HttpClient，RestTemplate 是一种更优雅的调用 RESTful 服务的方式。


### RestTemplate 服务调用

创建两个服务并注册到 consul 注册中心中。

- users：代表用户服务，端口为 9999
- products：代表商品服务，端口为 9998

注意：这里服务仅仅用来测试，没有实际业务意义。

![image-20200713101224125](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7j0zzy5j31cs030dg4.jpg)

![image-20200713101422031](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7j2mapxj32ak07kwi2.jpg)





```properties
server.port=9999
spring.application.name=users

spring.cloud.consul.port=8500
spring.cloud.consul.host=localhost
spring.cloud.consul.discovery.service-name=${spring.application.name}
```



```properties
server.port=9998
spring.application.name=products

spring.cloud.consul.port=8500
spring.cloud.consul.host=localhost
spring.cloud.consul.discovery.service-name=${spring.application.name}
```





### 在商品服务中提供服务方法

```java
@RestController
@Slf4j
public class ProductController {
    @Value("${server.port}")
    private int port;
    @GetMapping("/product/findAll")
    public Map<String,Object> findAll(){
        log.info("商品服务查询所有调用成功,当前服务端口:[{}]",port);
        Map<String, Object> map = new HashMap<String,Object>();
        map.put("msg","服务调用成功,服务提供端口为: "+port);
        map.put("status",true);
        return map;
    }
}
```

![image-20200713101553893](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7j6191uj325u0m6jvx.jpg)

### 在用户服务中使用 RestTemplate 进行调用


![image-20200713102053530](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7j7myugj32bc0i6gpc.jpg)

```java
@RestController
@Slf4j
public class UserController {
    @GetMapping("/user/findAll")
    public String findAll(){
        log.info("调用用户服务...");
        //1.使用restTemplate调用商品服务
        RestTemplate restTemplate = new RestTemplate();
        String forObject = restTemplate.getForObject("http://localhost:9998/product/findAll", 
                                                     String.class);
        return forObject;
    }
}
```

### 启动服务


![image-20200713102320469](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jagx03j32bc05kwf4.jpg)

![image-20200713140350189](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jcbauxj32ji0n8ju5.jpg)

### 测试服务调用

浏览器访问用户服务

```
http://localhost:9999/user/findAll
```



![image-20200713102454337](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jf7wdyj31x40e6tbn.jpg)

![image-20200713102616311](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7l54pzwj31sg03ata0.jpg)

### 总结

RestTemplate 是直接基于服务地址调用没有在服务注册中心获取服务,也没有办法完成服务的负载均衡如果需要实现服务的负载均衡需要自己书写服务负载均衡策略。

### RestTemplate 直接调用存在问题

> 使用 




-  直接使用 `restTemplate` 方式调用没有经过服务注册中心获取服务地址，代码写死不利于维护，当服务宕机时不能高效剔除
-  调用服务时 **没有负载均衡** 需要自己实现负载均衡策略

---



第 1 步：

![image-20211127184454676](https://tva1.sinaimg.cn/large/008i3skNgy1gwtwdo5jqsj316s0nogqp.jpg)

第 2 步：

```
-Dserver.port=9997
```

![image-20211127185044844](https://tva1.sinaimg.cn/large/008i3skNgy1gwtwjopuysj30xc0m2mzr.jpg)

![image-20211127185111421](https://tva1.sinaimg.cn/large/008i3skNgy1gwtwk4zclzj30xi0gcjtl.jpg)

![image-20211127185420486](https://tva1.sinaimg.cn/large/008i3skNgy1gwtwnewesqj30oi0c8gm1.jpg)