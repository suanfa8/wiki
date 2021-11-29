module.exports = {
  title: '算法吧',
  description: '欢迎来到算法吧',
  base: '/wiki/',
  
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    darkMode: false,
    repo: 'https://github.com/suanfa8/wiki',
    navbar: [
      { text: '微服务 SpringCloud', link: '/SpringCloud/' },
      { text: '算法', children: ['/LeetBook/', '/LeetCode/'] },

      { text: 'Group', children: ['/group/foo.md', '/group/bar.md'] },
      '/tools/vuepress.md'
    ],

    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: {
      // SpringCould 基础知识
      '/SpringCloud/': [
        {
          text: '第 1 - 5 章 基础知识', 
          children: [
            '/SpringCloud/1-5/1-Microservice.md',
            '/SpringCloud/1-5/2-Why-are-microservices.md',
            '/SpringCloud/1-5/3-microservices-solutions.md',
            '/SpringCloud/1-5/4-what-is-SpringCloud.md',
            '/SpringCloud/1-5/5-environment-setup.md'
          ]
        },
        {
          text: '第 6 章 服务注册中心', 
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
        {
          text: '第 7 章 服务间通信方式（Ribbon）', 
          children: [
            '/SpringCloud/7-communication/7-1-service-communication.md',
            '/SpringCloud/7-communication/7-2-RestTemplate.md',
            '/SpringCloud/7-communication/7-2-1-copy-config-as-a-service.md',
            '/SpringCloud/7-communication/7-3-Ribbon.md',
            '/SpringCloud/7-communication/7-4-Ribbon-loadBalancer.md',
          ]
        },
        {
          text: '第 8 章 OpenFeign 组件的使用', 
          children: [
            '/SpringCloud/8-OpenFeign/8-1-OpenFeign.md',
            '/SpringCloud/8-OpenFeign/8-2-OpenFeign-param.md',
            '/SpringCloud/8-OpenFeign/8-3-OpenFeign-Timeout.md',
            '/SpringCloud/8-OpenFeign/8-4-OpenFeign-log.md'
          ]
        },
        {
          text: '第 9 章 Hystrix 组件使用', 
          children: [
            'SpringCloud/9-Hystrix/9-1-Hystrix-intro.md',
            'SpringCloud/9-Hystrix/9-2-Fuse.md',
            'SpringCloud/9-Hystrix/9-3-Downgrade.md',
            'SpringCloud/9-Hystrix/9-4-Summarize.md',
            'SpringCloud/9-Hystrix/9-5-Fuse-Implement.md',
            'SpringCloud/9-Hystrix/9-6-Downgrade-Implement.md',
            'SpringCloud/9-Hystrix/9-7-Hystrix-Dashboard.md',
            'SpringCloud/9-Hystrix/9-8-Hystrix-stop.md'
          ]
        },
      ],
      '/LeetBook/': [
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
}