### 映射

映射的类型：

```
字符串类型: keyword（不分词）、text（分词）
数字类型: integer long 
小数类型: float double
布尔类型: boolean
日期类型：date
```

![image-20211125161430726](https://tva1.sinaimg.cn/large/008i3skNgy1gwrgsi6oe5j312u0rw0v8.jpg)

```json
GET /_cat/indices?v

# 创建索引
PUT /products

# 删除索引
DELETE /products

# 创建索引的时候指定映射信息
PUT /products
{
  "settings": {
    "number_of_replicas": 0,
    "number_of_shards": 1
  },
  "mappings": {
    "properties": {
      "id": {
        "type": "integer"
      },
      "title":{
        "type": "keyword"
      },
      "price":{
        "type": "double"
      },
      "create_at":{
        "type": "date"
      },
      "description":{
        "type": "text"
      }
    }
  }
}
```

查看某个 **索引** 的映射信息

```
GET /products/_mapping
```

注意：映射不可以删除和修改，只能创建索引的时候设置。

