// const pluginConf = require('../../config/pluginConfig.js');
const navConf = require('../../config/navConfig.js');
const sidebarConf = require('../../config/sidebarConfig.js');

module.exports = {
  title: '算法吧',
  description: '欢迎来到算法吧',
  base: '/wiki/',
  
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    darkMode: false,
    repo: 'https://github.com/suanfa8/wiki',
    navbar: navConf,
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: sidebarConf,
    sidebarDepth: 0
  },
}