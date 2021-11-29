# 0-简介

## 什么是 ElasticSearch

+ Elasticsearch 简称 ES，是基于 Apache Lucene 构建的开源搜索引擎；

+ 是当前最流行的企业级搜索引擎。 Lucene 本身就可以被认为迄今为止性能最好的一款开源搜索引擎工具包，但是 Lucene 的 API 相对复杂，需要深厚的搜索理论。很难集成到实际的应用中去。ES 是采用 Java 语言编写,提供了简单易用的 RestfulAPI，开发者可以使用其简单的 RestfulAPI，开发相关的搜索功能，从而避免 Lucene的复杂性。

## Elasticsearch 诞生

+ 原来是项目中的一个工具；
+ 现在成为了一个服务。

## 全文检索

全文检索是计算机程序通过扫描文章中的每一个词，对每一个词建立一个索引，指明 **该词在文章中出现的次数和位置**。

当用户查询时根据建立的索引查找，类似于通过字典的检索字表查字的过程。

+ 索：建立索引文本 - 分词 - 切分 - 词 -> **文章出现过出现多少次**；
+ 检索：全文检索（Full-text Retrieval），以文本作为检索对象，找出含有指定词汇的文本。

---

全面、准确 和快速是衡量全文检索系统的关键指标：

+ 只处理文本、**不处理语义**；
+ 搜索时 **英文不区分大小写**；
+ 结果列表 **有相关度排序**。