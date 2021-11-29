## 核心概念

### 索引

![image-20211125151937056](https://tva1.sinaimg.cn/large/008i3skNgy1gwrf7eph93j31a00u0tc5.jpg)



```
# 创建索引
PUT /products
```



```
#! Elasticsearch built-in security features are not enabled. Without authentication, your cluster could be accessible to anyone. See https://www.elastic.co/guide/en/elasticsearch/reference/7.14/security-minimal-setup.html to enable security.
health status index                           uuid                   pri rep docs.count docs.deleted store.size pri.store.size
green  open   .geoip_databases                I7AzIyzHQI6ln06RtBdnKA   1   0         42            0     40.8mb         40.8mb
green  open   .kibana-event-log-7.14.0-000001 Ljja3tywQ2uT8KtqRuYvpA   1   0          1            0      5.6kb          5.6kb
green  open   .kibana_7.14.0_001              Cwl-zRx5S1mFRY_8zuJCEg   1   0         29            7      2.2mb          2.2mb
green  open   .apm-custom-link                lKWfc2f4QjCmZRn_DPU3aA   1   0          0            0       208b           208b
green  open   .apm-agent-configuration        UfhVPVU4QqWMxivJwu7TNA   1   0          0            0       208b           208b
green  open   .kibana_task_manager_7.14.0_001 qmRtbb1-S8egBtNssyIDsg   1   0         14         2232    291.1kb        291.1kb
yellow open   products                        3IP02KeLQY61L9-sKO-1AQ   1   1          0            0       208b           208b
```



![image-20211125152349908](https://tva1.sinaimg.cn/large/008i3skNgy1gwrfbrlrmhj30mc0kwq40.jpg)

### 