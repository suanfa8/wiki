# 4-文档



```
# 查看 ES 中的索引
GET _cat/indices

# 查看 ES 中的索引
GET _cat/indices?v
```

添加文档



![image-20211125162733407](https://tva1.sinaimg.cn/large/008i3skNgy1gwrh63cm9zj319y0ouwgy.jpg)

查询文档



```
查询文档
GET /products/_doc/1
```

删除文档

![image-20211125180059779](https://tva1.sinaimg.cn/large/008i3skNgy1gwrjvccxl2j30we074dgh.jpg)

更新文档

![image-20211125180146546](https://tva1.sinaimg.cn/large/008i3skNgy1gwrjw441ddj31b40bigmm.jpg)

注意：其它字段没有了。

![image-20211125180321819](https://tva1.sinaimg.cn/large/008i3skNgy1gwrjxrrv3xj31bs0dqt9u.jpg)



![image-20211125180427126](https://tva1.sinaimg.cn/large/008i3skNgy1gwrjywhvxuj30j208ejrt.jpg)

### 



# 文档的批量操作

+ 传 `index` 是添加；
+ 传 `update` 是更新。

![image-20211125181521245](https://tva1.sinaimg.cn/large/008i3skNgy1gwrkaa2adcj31am0tsdku.jpg)



![image-20211125202755259](https://tva1.sinaimg.cn/large/008i3skNgy1gwro46jnocj30y20ji40i.jpg)

!> 注意：这里不能格式化。

必须写成下面这个样子：

![image-20211125202858307](https://tva1.sinaimg.cn/large/008i3skNgy1gwro59mu2ij31ji078404.jpg) 



![image-20211125203221276](https://tva1.sinaimg.cn/large/008i3skNgy1gwro8spjlaj31ho0a6abl.jpg)