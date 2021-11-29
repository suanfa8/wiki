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