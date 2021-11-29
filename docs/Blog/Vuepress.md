# Vuepress

安装

```
sudo npm install -g vuepress
```

启动：

```
sudo vuepress build
npm run docs:dev

sudo vuepress dev
```



```
module.exports = {
  title: '算法吧',
  description: '欢迎来到算法吧',
  base: '/wiki/',
  
  themeConfig: {
    logo: 'https://suanfa8.com/wiki/logo.png',
    darkMode: false,
    repo: 'https://github.com/suanfa8/wiki',
    
    nav: [
      { text: 'SpringCloud', link: '/SpringCloud/' },
      { text: 'vuepress', link: '/tools/vuepress.md' },
    ],

    // nav: [
    //   // NavbarItem
    //   {
    //     text: '微服务 SpringCloud',
    //     link: '/SpringCloud/',
    //   },
    //   // NavbarGroup
    //   // {
    //   //   text: 'Group',
    //   //   items: ['/group/foo.md', '/group/bar.md'],
    //   // },
    //   // 字符串 - 页面文件路径
    //   '/tools/vuepress.md'
    // ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      // SpringCould 基础知识
      '/SpringCloud/': [
        {
          title: '第 1 - 5 章 基础知识', 
          collapsable: true,
          sidebarDepth: 0,
          children: [
            '/SpringCloud/1-5/1-Microservice.md',
            '/SpringCloud/1-5/2-Why-are-microservices.md',
            '/SpringCloud/1-5/3-microservices-solutions.md',
            '/SpringCloud/1-5/4-what-is-SpringCloud.md',
            '/SpringCloud/1-5/5-environment-setup.md'
          ]
        },
        {
          title: '第 6 章 服务注册中心', 
          collapsable: true,
          sidebarDepth: 0,
          children: [
            '/SpringCloud/6-center/6-0-zhuce-center.md',
            '/SpringCloud/6-center/6-1-Eureka-server.md',
            '/SpringCloud/6-center/6-2-Eureka-client',
            '/SpringCloud/6-center/6-3-Eureka-Server-Self-Preservation',
            '/SpringCloud/6-center/6-4-Consul.md',
            '/SpringCloud/6-center/6-5-consul-client.md',
            '/SpringCloud/6-center/6-6-compare.md'
          ]
        },
      ],
      '/algo/': [
        {
          text: 'LeetBook - 广度优先遍历',
          collapsable: true,
          children : [
            '/LeetBook/BFS/01.md',
            '/LeetBook/BFS/02.md',
            '/LeetBook/BFS/03.md',
            '/LeetBook/BFS/04.md',
            '/LeetBook/BFS/05.md'
          ]
        },
        {
          text: 'LeetBook - 贪心算法',
          collapsable: true,
          children : [
            '/LeetBook/greedy-algorithm/LeetBook 第 0 节 - 概述.md',
            '/LeetBook/greedy-algorithm/LeetBook 第 1 节 - 贪心算法的理论知识.md',
            '/LeetBook/greedy-algorithm/LeetBook 第 2 节 - 找零钱问题.md',
            '/LeetBook/greedy-algorithm/LeetBook 第 3 节 - 区间选择问题.md',
            '/LeetBook/greedy-algorithm/LeetBook 第 4 节 - 跳跃问题.md',
            '/LeetBook/greedy-algorithm/LeetBook 第 5 节 - 总结.md'
          ]
        },
      ],
      '/': ['']
    },
    sidebarDepth: 0
  },

  plugins: [

    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine', 
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'mqMDM2jkdekHlk3GRbuUPjoG-gzGzoHsz',
    //       appKey: '8kmH8Wx6Dh5ewLScMuafVH9o'
    //     }
    //   }
    // ]

    // [
    //   'gitalk-maker',
    //   {
    //     gitalkConfig: {
    //       clientID: 'aedcd7ce058c3863703e',
    //       clientSecret: '0402f4637c00e8636e9fd8c75cfa73c504102f34',
    //       repo: 'wiki',
    //       owner: 'suanfa8',
    //       admin: ['suanfa8'],
    //       // id: location.pathname, // 无法配置默认用 location.pathname
    //       distractionFreeMode: false, // Facebook-like distraction free mode
    //     },
    //   },
    // ],

    // [
    //   'vuepress-plugin-mygitalk', {
    //     // 是否启用(关闭请设置为false)(default: true)
    //     enable: true,
    //     // 是否开启首页评论(default: true)
    //     home: true,
    //     // Gitalk配置
    //     gitalk: {
    //       // GitHub Application Client ID.
    //       clientID: 'aedcd7ce058c3863703e',
    //       // GitHub Application Client Secret.
    //       clientSecret: '0402f4637c00e8636e9fd8c75cfa73c504102f34',
    //       // GitHub repository. 存储评论的 repo
    //       repo: 'wiki',
    //       // GitHub repository 所有者，可以是个人或者组织。
    //       owner: 'suanfa8',
    //       // 设置语言(default: zh-CN)
    //       language: 'zh-CN',
    //     }
    //   }
    // ],

    // [
    //   'vuepress-plugin-comment-plus',
    //   {
    //     choosen: 'valine', 
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'mqMDM2jkdekHlk3GRbuUPjoG-gzGzoHsz',
    //       appKey: '8kmH8Wx6Dh5ewLScMuafVH9o'
    //     }
    //   }
    // ],

  ]
}
```

