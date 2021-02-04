const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '高中笔记',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '分享我的高中笔记',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/gtn1024/Notes',
    editLinks: false,
    docsDir: '',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: false,
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '语文',
        link: '/chi/'
      },
      {
        text: '生物',
        link: '/bio/'
      },
      {
        text: '地理',
        link: '/geo/'
      }
    ],
    sidebar: {
      '/chi/': [
        {
          title: '专题',
          collapsable: false,
          children: [
            '论证特点',
            {
              title: '小说',
              collapsable: true,
              children: ['小说总述', '赏析小说环境描写的文字', '情节表达技巧']
            }
          ]
        }
      ],
      '/bio/': [
        {
          title: '专题',
          collapsable: false,
          children: []
        }
      ],
      '/geo/': [
        {
          title: '区域地理',
          collapsable: false,
          children: ['中亚', '东南亚']
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/google-analytics', { ga: '261133161' }],
    ['vuepress-plugin-baidu-tongji-analytics', { key: '9d594ed638a637cc52e7b8241534209d' }],
    [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ]
  ]
};
