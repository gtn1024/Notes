const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Taoning's Senior High Notes",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Nothing matter, but to share.',

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
      { text: '首页', link: '/' },
      { text: '语文', link: '/chi/' },
      { text: '生物', link: '/bio/' },
      { text: '地理', link: '/geo/' },
      { text: '站长博客', link: 'https://getaoning.com' }
    ],
    sidebar: {
      '/chi/': [
        {
          title: '专题',
          collapsable: false,
          children: [
            '论证特点',
            '标点符号',
            '改写句子',
            {
              title: '小说',
              collapsable: false,
              children: ['小说总述', '赏析小说环境描写的文字', '情节表达技巧']
            },
            {
              title: '散文',
              collapsable: false,
              children: ['散文语段的作用', '散文标题']
            }
          ]
        }
      ],
      '/bio/': [
        {
          title: '专题',
          collapsable: false,
          children: [
            {
              title: '细胞的分子组成和基本结构',
              collapsable: false,
              children: ['组成细胞的分子', '细胞的结构与功能']
            }
          ]
        }
      ],
      '/geo/': [
        {
          title: '区域地理',
          collapsable: false,
          children: ['中亚', '东南亚', '南亚', '西亚和北非']
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
