

## 9-7 Hystrix Dashboard

Hystrix Dashboard 的一个主要优点是它收集了关于每个 HystrixCommand 的一组度量。Hystrix 仪表板以高效的方式显示每个断路器的运行状况。

![image-20200716161556743](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7ycbgbgj31v00h2jvm.jpg)

1. 项目中引入依赖

```xml
<!-- 引入 hystrix dashboard 依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
</dependency>
```

2. 入口类中开启 hystrix dashboard

```java
@SpringBootApplication
// 开启监控面板
@EnableHystrixDashboard
public class Hystrixdashboard9990Application {
	public static void main(String[] args) {
		SpringApplication.run(Hystrixdashboard9990Application.class, args);
  }
}
```

![image-20200717154912206](https://tva1.sinaimg.cn/large/008i3skNgy1gvu802if6aj31sy0co40o.jpg)

![image-20200717155059512](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7yf1gvbj32fs0tgq7e.jpg)

3. 端口号改成 9990





3. 启动 hystrix dashboard 应用

- http://localhost:9990(dashboard端口)/hystrix

```markdown
# 4.监控的项目中入口类中加入监控路径配置[新版本坑],并启动监控项目
```

```java
@Bean
public ServletRegistrationBean getServlet() {
  HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
  ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
  registrationBean.setLoadOnStartup(1);
  registrationBean.addUrlMappings("/hystrix.stream");
  registrationBean.setName("HystrixMetricsStreamServlet");
  return registrationBean;
}
```

![image-20200717155120335](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7zu2vwsj32140doq6y.jpg)

![image-20211127221253767](https://tva1.sinaimg.cn/large/008i3skNgy1gwu2e0t7gvj31lh0u0n0w.jpg)


```markdown


# 5.通过监控界面监控
```

![image-20200717155258994](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7yhx6zwj31u20fgade.jpg)

```markdown
# 6.点击监控,一致loading,打开控制台发现报错[特别坑]
```

![image-20200717155555786](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7yktfdpj31w60u0tcz.jpg)

```markdown
# 解决方案
- 新版本中springcloud将jquery版本升级为3.4.1，定位到monitor.ftlh文件中，js的写法如下：
	$(window).load(function() 
- jquery 3.4.1已经废弃上面写法

- 修改方案 修改monitor.ftlh为如下调用方式：
	$(window).on("load",function()
	
- 编译jar源文件，重新打包引入后，界面正常响应。
```

![image-20200717160636218](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7ypdktgj32ju0g20vr.jpg)

