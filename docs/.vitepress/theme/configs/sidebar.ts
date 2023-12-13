import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  // designToken
  '/designToken/': [
    {
      // text: 'DesignToken',
      items: [
        { text: '关于 DesignToken', link: '/designToken/' },
        { text: '色彩',
          collapsed:false,
          items: [
            { text: '简述', link: '/designToken/色彩/简述' },
            { text: '色彩层级', link: '/designToken/色彩/色彩层级' },
            { text: '命名规范', link: '/designToken/色彩/命名规范' },
            { text: '交付', link: '/designToken/色彩/交付' },
          ]
        },
        { text: '相关资源', link: '/uidesign/设计系统/design-token-resource' },
      ],
    },
  ],
  // designExercise
  '/uidesign/': [
    {
      // text: 'designExercise',
      items: [
        { text: '说明', link: '/uidesign/designExercise/' },
        { text: '小组件临摹', link: '/uidesign/designExercise/componentDesignExercise' },
        { text: '页面临摹', link: '/uidesign/designExercise/pageDesignExercise' },
      ],
    },
  ],
  // vitepress
  '/vitepress/': [
    {
      // text: 'vitepress',
      items: [
        { text: '什么是 VitePress？', link: '/vitepress/' },
        { text: '快速上手', link: '/vitepress/快速上手' },
        { text: '配置front-matter', link: '/vitepress/配置front-matter' },
        { text: '线上自动化部署', link: '/vitepress/线上自动化部署' },
      ],
    },
  ],
  // 营销系统
  '/marketing/': [
    {
      text: '前言', 
      collapsed:true,
      items: [
        { text: '由此开始', link: '/marketing/前言/由此开始' },
        { text: '认识营销', link: '/marketing/前言/认识营销' },
        { text: '系统设计', link: '/marketing/前言/系统设计' },          
      ],
    },
    {
      text: '第一章 流量与用户', 
      collapsed:false,
      items: [
        { text: '流量篇',
          items: [
            { text: '流量分析', link: '/marketing/第一章 流量与用户/流量/流量分析' },       
          ],},
        { text: '用户篇' ,
          collapsed:false,
          items: [
            { text: '用户信息化', link: '/marketing/第一章 流量与用户/用户信息化' },
            { text: '用户画像', link: '/marketing/第一章 流量与用户/用户画像' },
            { text: '分层分群', link: '/marketing/第一章 流量与用户/分层分群' },          
          ],},        
      ],
    },
    {
      text: '第二章 用户触达', 
      collapsed:false,
      items: [
        { text: 'Push',
          items: [
            { text: '目录', link: '/marketing/第二章 用户触达/push/目录' },
            { text: '概述', link: '/marketing/第二章 用户触达/push/概述' },
            { text: '前端设计', link: '/marketing/第二章 用户触达/push/前端设计' },
            { text: '后台设计', link: '/marketing/第二章 用户触达/push/后台设计' },
            { text: '更多能力', link: '/marketing/第二章 用户触达/push/更多能力' },
            { text: '评估与优化', link: '/marketing/第二章 用户触达/push/评估与优化' },
          ],},
        { text: '短信' ,
          collapsed:false,
          items: [
            { text: '用户信息化', link: '/marketing/第一章 流量与用户/用户信息化' },
            { text: '用户画像', link: '/marketing/第一章 流量与用户/用户画像' },
            { text: '分层分群', link: '/marketing/第一章 流量与用户/分层分群' },          
          ],},
        { text: '其他' ,
          collapsed:false,
          items: [
            { text: '用户信息化', link: '/marketing/第一章 流量与用户/用户信息化' },
            { text: '用户画像', link: '/marketing/第一章 流量与用户/用户画像' },
            { text: '分层分群', link: '/marketing/第一章 流量与用户/分层分群' },          
          ],},
        { text: '触达工具' ,
          collapsed:false,
          items: [
            { text: '用户信息化', link: '/marketing/第一章 流量与用户/用户信息化' },
            { text: '用户画像', link: '/marketing/第一章 流量与用户/用户画像' },
            { text: '分层分群', link: '/marketing/第一章 流量与用户/分层分群' },          
          ],},
      ],
    },
    {
      text: '第三章 营销策略', 
      collapsed:false,
      items: [
        { text: '流量篇',
          items: [
            { text: '流量分析', link: '/marketing/第一章 流量与用户/流量/流量分析' },       
          ],},
        { text: '用户篇' ,
          collapsed:false,
          items: [
            { text: '用户信息化', link: '/marketing/第一章 流量与用户/用户信息化' },
            { text: '用户画像', link: '/marketing/第一章 流量与用户/用户画像' },
            { text: '分层分群', link: '/marketing/第一章 流量与用户/分层分群' },          
          ],},        
      ],
    },
    {
      text: '第四章 用户转化', 
      collapsed:false,
      items: [
        { text: '流量篇',
          items: [
            { text: '流量分析', link: '/marketing/第一章 流量与用户/流量/流量分析' },       
          ],},
        { text: '用户篇' ,
          collapsed:false,
          items: [
            { text: '用户信息化', link: '/marketing/第一章 流量与用户/用户信息化' },
            { text: '用户画像', link: '/marketing/第一章 流量与用户/用户画像' },
            { text: '分层分群', link: '/marketing/第一章 流量与用户/分层分群' },          
          ],},        
      ],
    },
    {
      text: '第五章 策略与活动', 
      collapsed:false,
      items: [
        { text: '流量篇',
          items: [
            { text: '流量分析', link: '/marketing/第一章 流量与用户/流量/流量分析' },       
          ],},
        { text: '用户篇' ,
          collapsed:false,
          items: [
            { text: '用户信息化', link: '/marketing/第一章 流量与用户/用户信息化' },
            { text: '用户画像', link: '/marketing/第一章 流量与用户/用户画像' },
            { text: '分层分群', link: '/marketing/第一章 流量与用户/分层分群' },          
          ],},        
      ],
    },
  ],
  // 
}