## 什么是 IK 分词器

分词：把一段中文或者别的划分成一个个的关键字，我们在搜索时候会把自己的信息进行分词，会把数据库中或者索引库中的数据进行分词，然后进行一个匹配操作，默认的中文分词是将每个字看成一个词。

### 两个分词算法

IK 分词器提供了两个分词算法：`ik_smart` 和 `ik_max_word`

+ `ik_smart`：最少切分；
+ `ik_max_word`：为最细粒度划分。



> 想一想 Docker 如何安装 IK 分词器。



启动 ES，发现插件被加载：

![image-20211126094710310](https://tva1.sinaimg.cn/large/008i3skNgy1gwsb7sfdhlj30mi0423z5.jpg)



查看 ik 分词器是否加载。

```
elasticsearch-plugin list
```

### 选择不同分词器配置示例

+ 最少切分：`ik_smart`

![image-20211126094917789](https://tva1.sinaimg.cn/large/008i3skNgy1gwsba02f7tj315g09sq3y.jpg)

+ 最细粒度划分：`ik_max_word`

![image-20211126094939721](https://tva1.sinaimg.cn/large/008i3skNgy1gwsbadhefwj31520dc76b.jpg)

### 为 IK 分词器添加自己的词典

![image-20211126095837428](https://tva1.sinaimg.cn/large/008i3skNgy1gwsbjpg96cj30xc0f242l.jpg)