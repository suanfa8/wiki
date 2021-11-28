

## 9-8 Hystrix停止维护

![image-20200717161223806](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7ysa0fqj31oe0dqgpm.jpg)

![image-20200717161400285](https://tva1.sinaimg.cn/large/008i3skNgy1gvu7yv8yt9j31dm078myk.jpg)


官方地址：https://github.com/Netflix/Hystrix
- 翻译：Hystrix（版本1.5.18）足够稳定，可以满足Netflix对我们现有应用的需求。同时，我们的重点已经转移到对应用程序的实时性能作出反应的更具适应性的实现，而不是预先配置的设置（例如，通过自适应并发限制）。对于像Hystrix这样的东西有意义的情况，我们打算继续在现有的应用程序中使用Hystrix，并在新的内部项目中利用诸如resilience4j这样的开放和活跃的项目。我们开始建议其他人也这样做。
- Dashboard也被废弃