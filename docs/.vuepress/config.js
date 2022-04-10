const sidebar = require('../../utils/sidebar');

module.exports = {
  lang: 'zh-CN',
  title: 'linux手册',
  description: 'linux从入门到跑路',
  base: '/linux-book/dist/',
  dest: './dist',
  themeConfig: {
    sidebar,
    navbar: [
      {
        text: '博客',
        link: 'https://www.cnblogs.com/dshvv',
      },
      {
        text: '语雀',
        link: 'https://www.yuque.com/dingshaohua',
      },
      {
        text: '关于我',
        link: 'https://www.baidu.com/s?wd=甲乙丙丁少',
      }
    ]
  }
}