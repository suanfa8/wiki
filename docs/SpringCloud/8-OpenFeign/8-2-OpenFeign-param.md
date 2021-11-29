# 8-2 调用服务并传参

[[toc]]

服务和服务之间通信，不仅仅是调用，往往在调用过程中还伴随着参数传递，接下来重点来看看 `OpenFeign` 在调用服务时如何传递参数。

## GET 方式调用服务传递参数

GET 方式调用服务传递参数：

- 在商品服务中加入需要传递参数的服务方法来进行测试；
- 在用户服务中进行调用商品服务中需要传递参数的服务方法进行测试。

### 1、商品服务中添加如下方法

```java
@GetMapping("/product/findOne")
public Map<String, Object> findOne(String productId) {
    log.info("商品服务查询商品信息调用成功, 当前服务端口：[{}]", port);
    log.info("当前接收商品信息的 id：[{}]", productId);
    Map<String, Object> map = new HashMap<>();
    map.put("msg", "商品服务查询商品信息调用成功,当前服务端口: " + port);
    map.put("status", true);
    map.put("productId", productId);
    return map;
}
```

![image-20200713203833730](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mkve1cj322g0e8q7o.jpg)

### 2、在用户服务中声明 product 客户端中的方法

::: danger 注意

使用 openfeign 的 GET 方式传递参数，参数变量必须通过 `@requestParam` 注解进行修饰。
如果不加入该注解会出现：`feign.FeignException$MethodNotAllowed: [405]`。

:::

代码：

```java
@FeignClient("PRODUCTS")
public interface ProductClient { 
	  @GetMapping("/product/findOne")
 	  String findOne(@RequestParam("productId") String productId);
}
```

![image-20200713204301830](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mo8uv0j323a08ytac.jpg)

### 3、用户服务中调用并传递参数

代码：


```java
// 注入客户端对象
@Autowired
private ProductClient productClient;

@GetMapping("/feign/test1")
public Map<String,Object> test1(String id){
  log.info("用来测试Openfiegn的GET方式参数传递");
  Map<String, Object> msg = productClient.findOne(id);
  log.info("调用返回信息:[{}]",msg);
  return msg;
}
```

![image-20200728173210751](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mr25v9j31vg0a2n02.jpg)

测试访问：

![image-20200713204827577](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mtvna8j321g0gojv9.jpg)

![image-20200713204851383](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mxhgloj31uw03cwg0.jpg)

###### post 方式调用服务传递参数

```markdown
# 2.post方式调用服务传递参数
- 在商品服务中加入需要传递参数的服务方法来进行测试
- 在用户服务中进行调用商品服务中需要传递参数的服务方法进行测试
```

```java
//1.商品服务加入post方式请求并接受name
@PostMapping("/product/save")
public Map<String,Object> save(String name){
  log.info("商品服务保存商品调用成功,当前服务端口:[{}]",port);
  log.info("当前接收商品名称:[{}]",name);
  Map<String, Object> map = new HashMap<String,Object>();
  map.put("msg","商品服务查询商品信息调用成功,当前服务端口: "+port);
  map.put("status",true);
  map.put("name",name);
  return map;
}
```

![image-20200713205125242](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7mzz1zkj321w0eg78m.jpg)

```java
//2.用户服务中在product客户端中声明方法
//value属性用来指定:调用服务名称
@FeignClient("PRODUCTS")
public interface ProductClient {
    @PostMapping("/product/save")
    String save(@RequestParam("name") String name);
}
```

![image-20200713205734920](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7n2b83yj325607adhe.jpg)

```java
//3.用户服务中调用并传递参数
@Autowired
private ProductClient productClient;

@GetMapping("/user/save")
public String save(String productName){
  log.info("接收到的商品信息名称:[{}]",productName);
  String save = productClient.save(productName);
  log.info("调用成功返回结果: "+save);
  return save;
}
```

![image-20200713205823467](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7n42c6cj31ye0e0tbu.jpg)

```markdown
# 测试访问
```

![image-20200713205919054](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7n6zp97j31xo0fydjz.jpg)

![image-20200713210001477](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7na8qwtj31mi036gn3.jpg)

```markdown



# 2.传递对象类型参数
- 商品服务定义对象
- 商品服务定义对象接收方法
- 用户服务调用商品服务定义对象参数方法进行参数传递
```

```java
//1.商品服务定义对象
@Data
public class Product {
    private Integer id;
    private String name;
    private Date bir;
}
```

![image-20200713210437488](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7nd0zpzj31pk084q3t.jpg)

```java
//2.商品服务定义接收对象的方法
@PostMapping("/product/saveProduct")
public Map<String,Object> saveProduct(@RequestBody Product product){
  log.info("商品服务保存商品信息调用成功,当前服务端口:[{}]",port);
  log.info("当前接收商品名称:[{}]",product);
  Map<String, Object> map = new HashMap<String,Object>();
  map.put("msg","商品服务查询商品信息调用成功,当前服务端口: "+port);
  map.put("status",true);
  map.put("product",product);
  return map;
}

```

![image-20200713210641668](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7ng7l30j31tu0dyaeu.jpg)

```java
//3.将商品对象复制到用户服务中
//4.用户服务中在product客户端中声明方法
@FeignClient("PRODUCTS")
public interface ProductClient {
  @PostMapping("/product/saveProduct")
  String saveProduct(@RequestBody Product product);
}
//注意:服务提供方和调用方一定要加入@RequestBody注解 
```

![image-20200713211213241](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7nj2dyoj31vm07amyp.jpg)

```java
// 5.在用户服务中调用保存商品信息服务
//注入客户端对象
@Autowired
private ProductClient productClient;

@GetMapping("/user/saveProduct")
public String saveProduct(Product product){
  log.info("接收到的商品信息:[{}]",product);
  String save = productClient.saveProduct(product);
  log.info("调用成功返回结果: "+save);
  return save;
}
```

![image-20200713211308524](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7nk59pxj31ua0fun0h.jpg)

```markdown
# 测试
```

![image-20200713211338475](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7nlxezmj32f40m4wl5.jpg)

![image-20200713211402844](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7nol3c6j32ay032tah.jpg)

