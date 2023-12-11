import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // 设计工程
  '/uidesign/': [
    {
      text: '设计系统',
      items: [
        { text: '由此开始', link: '/uidesign/设计系统/getting-started' },
        { text: '色彩体系',
          collapsed:false,
          items: [
            { text: '色彩层级', link: '/uidesign/设计系统/色彩体系/色彩层级' },
            { text: '命名规范', link: '/uidesign/设计系统/色彩体系/命名规范' },
            { text: '交付', link: '/uidesign/设计系统/色彩体系/交付' },
          ]
        },
        { text: '相关资源', link: '/uidesign/设计系统/design-token-resource' },
      ],
    },
  ],
  // 设计工程
  '/marketing/': [
    {
      text: '由此开始',
      collapsed:false,
      items: [
            { text: '关于', link: '/uidesign/设计系统/色彩体系/色彩层级' },
            { text: '认识营销', link: '/uidesign/设计系统/色彩体系/命名规范' },
            { text: '系统设计', link: '/uidesign/设计系统/色彩体系/交付' },
          ],
    }
  ],
  // vitepress
  
}