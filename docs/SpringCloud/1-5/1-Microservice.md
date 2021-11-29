# 1-什么是微服务

官网：[https://www.martinfowler.com/articles/microservices.html](https://www.martinfowler.com/articles/microservices.html)

::: tip 以下内容摘自官网
In short, the microservice architectural style is an approach to developing a single application as  **a suite of small services** , each  **running in its own process** and communicating with lightweight mechanisms, often an HTTP resource API. These services are **built around business capabilities**  and  **independently deployable** by fully automated deployment machinery.  **There is a bare minimum of centralized management of these services**, which may be written in different programming languages and use different data storage technologies.                    
:::

| 关键字 | 翻译 |
|---|---|
| a suite of small services | 一系列微小服务 |
| running in its own process  | 运行在自己的进程里  |
| built around business capabilities  | 围绕自己的业务开发 |
| independently deployable  | 独立部署 |
| bare minimum of centralized management of these services  | 基于分布式管理 |

## 官方定义

微服务就是由一系列围绕自己业务开发的微小服务构成，他们独立部署运行在自己的进程里，基于分布式的管理。

## 通俗定义

微服务是一种架构，这种架构是将单个的整体应用程序分割成更小的项目关联的独立的服务。一个服务通常实现一组独立的特性或功能，包含自己的业务逻辑和适配器。各个微服务之间的关联通过暴露 api 来实现。这些独立的微服务不需要部署在同一个虚拟机，同一个系统和同一个应用服务器中。


---

笔记：

>  App 应学项目  分类模块   视频模块 评论模块  用户模块  统计模块...    单体应用
>   

拆分：

> 分类服务     独立应用  ---> 计算进程里面 --->  独立部署   
>
>   视频服务                                                                                     基于分布式服务管理
>
>   评论服务
>
>   用户服务
>
>   ....服务

