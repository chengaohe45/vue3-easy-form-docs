module.exports = {
  title: 'esForm文档',
  description: '后台自动化平台',
  base: "/vue-easy-form-docs/dist/",
  dest: "./dist",
  themeConfig: {
    // lastUpdated: '最后更新',
    nav: [
      { text: '指南', link: '/' },
      {
        text: '版本',
        items: [
          {
            text: '版本总览',
            link: '/version/overview'
          },
          {
            text: '1.5.*',
            link: '/version/1.5.all'
          },
          {
            text: '1.4.*',
            link: '/version/1.4.all'
          }
        ]
      },
      { text: '捐赠', link: '/donate' },
      { text: 'GitHub', link: 'https://github.com/chengaohe45/vue-easy-form' },
      { text: 'esForm例子', link: 'https://chengaohe45.github.io/vue-easy-form-docs/demo' }
    ],
    sidebar: {
      '/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'base/install',
            'base/settings',
            'base/explain',
            'base/com-format',
            'base/com-standard',
            'base/console',
            'base/form',
            'base/form-value',
            'base/array',
            'base/auto-match',
            'base/schema',
            'base/rules'
          ]
        },
        {
          title: '可组件化属性详解',
          collapsable: false,
          children: [
            'base/component',
            'base/label',
            'base/title',
            'base/help',
            'base/unit',
            'base/desc'
          ]
        }
      ],
      '/version/': ['overview', '1.4.all']
    }
  }
};
