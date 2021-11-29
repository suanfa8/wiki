# Hexo

李威整理的安装 Hexo 关键步骤笔记

```
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```



安装 nodejs

切换 nam 为淘宝镜像

```
npm config set registry https://registry.npm.taobao.org
```



```
npm info underscore # 如果上面配置正确这个命令会有字符串response
```



安装 hexo-cli

```
npm uninstall heao-cli -g

npm install heao-cli -g
```



安装 Git 否则会提示 ：Deployer not found: git

npm install hexo-deployer-git --save

默认的首页的内容



![image-20211128112128080](https://tva1.sinaimg.cn/large/008i3skNgy1gwup6ig8j2j30b20ost9e.jpg)

Hexo 中文文档：

代码高亮：highlight

[https://josephxy.com/2017/11/26/Hexo_highlight.js%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE/](https://josephxy.com/2017/11/26/Hexo_highlight.js代码高亮/)

可用主题：

https://highlightjs.org/static/demo/

themes/hexo-theme-matery/layout/layout.ejs

[https://eggsywelsh.github.io/2016/11/10/hexo%E4%BB%A3%E7%A0%81%E9%AB%98%E4%BA%AE/](https://eggsywelsh.github.io/2016/11/10/hexo代码高亮/)

------

Hexo 中文文档：https://hexo.io/zh-cn/docs/

### 部署笔记

看配置文件最后的部分：

注意：这里逗号后面是分支名。

![image-20211128111638869](https://tva1.sinaimg.cn/large/008i3skNgy1gwup1iab0fj31u409mace.jpg)

![image-20211128111704578](https://tva1.sinaimg.cn/large/008i3skNgy1gwup1y7mq4j31uc09eadh.jpg)

最后发布到：

1、GitHub：

https://liweiwei1419.github.io/blog/

2、coding：

注意：发布以后可能要重新部署一下。

http://lw_power.coding.me/blog/

### hexo 配置

```
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: 李威威的博客
subtitle:
description: 快乐生活每一天！
author: 李威威
# 新增字段设置头像
avatar: https://github.com/liwei1419/git_helper/raw/master/images/25143182.png
language: zh-Hans
timezone: Asia/Shanghai

# 集成第三方服务
# 多说评论
duoshuo_shortname: liweiwei

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://codes.liwei.party/
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
filename_case: 0
render_drafts: false
# 设置为 false 就不会写 hexo new 的时候同时创建一个同标题的文件夹
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:

# Category & Tag
default_category: uncategorized
category_map:
  Java基础: java-core
  日记: life
  笔记: notes
tag_map:

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
## 默认的主题名称：landscape
## 我使用过的主题名称: next Yelee maupassant
theme: next

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
- type: git
  repository: https://git.coding.net/lw_power/lw_power.git
  branch: master
## - type: git
##   repo: https://github.com/weimingge14/weimingge14.github.io.git
##   branch: master
## - type: git
##   repository: https://git.oschina.net/weimingge/Pages.git
##   branch: master
```

