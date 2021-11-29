# 所有的静态网站构建工具

## 域名相关配置

域名相关配置

GitHub 上配置个性域名的步骤：

1、万网的操作面板上添加 cname；我使用的是 codes 二级域名

2、在项目中添加 CNAME 文件

3、还要在 _config.yml 中修改 URL 的配置；

![95F5B601-1693-46BE-A9E2-BA6E89CEDDB5](https://tva1.sinaimg.cn/large/008i3skNgy1gwup4v47y4j31la0hm0w1.jpg)

conding 上配置个性域名的步骤：

1、万网的操作面板上添加 cname；我使用的是 www 二级域名

2、在 conding 开启 对 www 的支持。

目前域名的设置

www.liwei.party 对应 lw_power.coding.me

codes.liwei.party 对应 weimingge14.github.io

## NPM 切换淘宝源

镜像使用方法（三种办法任意一种都能解决问题，建议使用第三种，将配置写死，下次用的时候配置还在）:

1. 通过config命令

```
npm config set registry https://registry.npm.taobao.org
npm info underscore #如果上面配置正确这个命令会有字符串response
```

2. 命令行指定

```
npm --registry https://registry.npm.taobao.org info underscore
```

3. 编辑 ~/.npmrc 加入下面内容

```
registry = https://registry.npm.taobao.org
```



