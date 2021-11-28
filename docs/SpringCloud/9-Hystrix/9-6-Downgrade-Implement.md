## 9-6 服务降级的实现

1. 客户端 `openfeign` + `hystrix` 实现服务降级实现

- 引入 `hystrix` 依赖
- 配置文件开启 `feign` 支持 `hystrix`
- 在 `feign` 客户端调用加入 fallback 指定降级处理
- 开发降级处理方法

2. 开启 `openfeign` 支持服务降级

```properties
# 开启 openfeign 支持降级
feign.hystrix.enabled=true 
```

3. 在 `openfeign` 客户端中加如 `Hystrix`

```java
@FeignClient(value = "PRODUCTS",fallback = ProductFallBack.class)
public interface ProductClient {
    @GetMapping("/product/hystrix")
    String testHystrix(@RequestParam("name") String name);
}
```

![image-20200716101101091](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7y65e6lj31n407odhu.jpg)

4. 开发 `fallback` 处理类

```java
@Component
public class ProductFallBack implements ProductClient {
    @Override
    public String testHystrix(String name) {
        return "我是客户端的Hystrix服务实现!!!";
    }
}
```

![image-20200717101921108](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7y8zzbmj31jk06ogmk.jpg)

!> 注意：如果服务端降级和客户端降级同时开启，要求服务端降级方法的返回值必须与客户端方法降级的返回值一致！
