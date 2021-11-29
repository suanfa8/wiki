# 7-4 Ribbon 负载均衡策略

[[toc]]

::: tip 提示

Ribbon 的负载均衡是基于客户端的负载均衡。

:::

## Ribbon 负载均衡算法（规则很多）

- `RoundRobinRule`：**轮训策略（默认规则）**，按顺序循环选择 Server 
- `RandomRule`：随机策略，随机选择 Server  
- `AvailabilityFilteringRule`：可用过滤策略（应用较多）

会先过滤由于多次访问故障而处于断路器跳闸状态的服务，还有并发的连接数量超过阈值的服务，然后对剩余的服务列表按照轮询策略进行访问。

![image-20200713162940968](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jnn2asj326s0m80w2.jpg)

- `WeightedResponseTimeRule`：响应时间加权策略 （应用较多）

根据平均响应的时间计算所有服务的权重，响应时间越快服务权重越大被选中的概率越高，刚启动时如果统计信息不足，则使用 RoundRobinRule策略，等统计信息足够会切换到。

- RetryRule：重试策略

先按照 `RoundRobinRule` 的策略获取服务，如果获取失败则在制定时间内进行重试，获取可用的服务。
- BestAviableRule：最低并发策略

会先过滤掉由于多次访问故障而处于断路器跳闸状态的服务，然后选择一个并发量最小的服务。

## 如何修改负载负载均衡策略

### 修改服务的默认负载均衡策略（在客户端进行配置）

修改服务默认随机策略，配置的写法如下：

```
服务id.ribbon.NFLoadBalancerRuleClassName=com.netflix.loadbalancer.RandomRule
```


例如：下面的 `products` 为服务的唯一标识


```properties
products.ribbon.NFLoadBalancerRuleClassName=com.netflix.loadbalancer.RandomRule
```

![image-20200713163722927](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jpgouzj320407yq5m.jpg)

## Ribbon 停止维护

官方停止维护说明：[https://github.com/Netflix/ribbon](https://github.com/Netflix/ribbon)


![image-20200713195706787](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7jscibvj324m0rcq9m.jpg)

