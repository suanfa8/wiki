# 5-环境搭建

## 版本命名

- 官网地址：https://spring.io/projects/spring-cloud

Spring Cloud is an umbrella(伞) project consisting of independent projects with, in principle, different release cadences. To manage the portfolio a BOM (Bill of Materials) is published with a curated set of dependencies on the individual project (see below). The release trains have names, not versions, to avoid confusion with the sub-projects. The names are an alphabetic sequence (so you can sort them chronologically) with names of London Tube stations ("Angel" is the first release, "Brixton" is the second). When point releases of the individual projects accumulate to a critical mass, or if there is a critical bug in one of them that needs to be available to everyone, the release train will push out "service releases" with names ending ".SRX", where "X" is a number.     ---[摘自官网]

### 翻译

- SpringCloud 版本管理方式: 命名方式
  + Angel.SR1~6
  + Brixton.SR1~6
  + Camden.SR1~6

- SpringCloud 是一个由众多独立子项目组成的大型综合项目，原则每个子项目上有不同的发布节奏，都维护自己发布版本号。为了更好的管理 SpringCloud 的版本，通过一个资源清单 BOM（Bill of Materials)，为避免与子项目的发布号混淆，所以没有采用版本号的方式，而是通过命名的方式。这些名字是按字母顺序排列的。如伦敦地铁站的名称（「天使」是第一个版本，「布里斯顿」是第二个版本，「卡姆登」是第三个版本）。当单个项目的点发布累积到一个临界量，或者其中一个项目中有一个关键缺陷需要每个人都可以使用时，发布序列将推出名称以「.SRX」结尾的「服务发布」，其中「X」是一个数字。

### 伦敦地铁站名称 [了解]

- Angel、Brixton、Camden、Dalston、Edgware、Finchley、Greenwich、Hoxton、


## 版本选择

### 版本选择官方建议

https://spring.io/projects/spring-cloud

- Angel 版本：基于 Springboot 1.2.x 版本构建与 1.3 版本不兼容；
- Brixton 版本：基于 Springboot 1.3.x 版本构建与 1.2 版本不兼容，2017 年 Brixton and Angel release 官方宣布报废；
- Camden 版本：基于 Springboot 1.4.x 版本构建并在 1.5 版本通过测试，2018 年 Camden release 官方宣布报废；
- Dalston、Edgware 版本：基于 Springboot1.5.x 版本构建目前不能再 Springboot 2.0.x 版本中使用，Dalston（达尔斯顿）将于 2018 年 12 月官方宣布报废。Edgware 将遵循 Spring Boot 1.5.x 的生命周期结束；
- Finchley 版本：基于 springboot 2.0.x 版本进行构建，不能兼容 1.x 版本；
- Greenwich 版本：基于 springboot 2.1.x 版本进行构建，不能兼容 1.x 版本；
- Hoxton 版本：基于 springboot 2.2.x 版本进行构建。

![image-20200709112427684](https://tva1.sinaimg.cn/large/008i3skNgy1gvu9p7wqpxj320q0dujs8.jpg)

## SpringCloud 环境搭建

### 说明

- springboot 2.2.x.RELEASE+
- springcloud Hoxton SR1~6
- java8+
- maven 3.3.6+
- idea 2018.3.5+

### 1、创建 Springboot 项目指定版本为 2.2.5 版本

![image-20200709115802270](https://tva1.sinaimg.cn/large/008i3skNgy1gvu9p68iiuj328u0gsjya.jpg)

### 2、引入 SpringCloud 的版本管理

```xml
<!--定义springcloud使用版本号-->
<properties>
    <java.version>1.8</java.version>
    <spring-cloud.version>Hoxton.SR6</spring-cloud.version>
</properties>
<!--全局管理springcloud版本,并不会引入具体依赖-->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
    		</dependency>
  	</dependencies>
</dependencyManagement>
```

![image-20200709120120478](https://tva1.sinaimg.cn/large/008i3skNgy1gvu9panhdfj31pe06mjsw.jpg)

![image-20200709120209047](https://tva1.sinaimg.cn/large/008i3skNgy1gvu9pewsdhj320g0h2ae5.jpg)

完成上述操作 SpringBoot 与 SpringCloud 环境搭建完成。接下来就是使用到具体的 SpringCloud 组件，在项目中引入具体的组件即可。

