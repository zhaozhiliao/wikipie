import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: "导航", link: "/nav/" },
      { text: "博客", link: "/posts/" },
      { text: "营销系统", link: "/marketing/" },
      { text: "设计工程", link: "/uidesign/" },
      {
        text: "产品设计",
        items: [
          { text: "用户端", link: "/good-list" },
          { text: "服务端", link: "/aboutme" },
        ],
      },
      {
        text: "学习",
        items: [
          {
            items: [{ text: "AI GO", link: "./aigo/关于" }],
          },
          {
            items: [{ text: "Web3", link: "./web3/" }],
          },
          {
            // 部分标题.
            text: "编程",
            items: [
              { text: "SwiftUI", link: "..." },
              { text: "Vitepress", link: "./vitepress/" },
            ],
          },
        ],
      },
      {
        text: "更多",
        items: [
          { text: "好物推荐", link: "/good-list" },
          { text: "关于我", link: "/aboutme" },
        ],
      }
]