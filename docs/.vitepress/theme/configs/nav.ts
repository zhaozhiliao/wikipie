import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: "导航", link: "/nav/" },
      { text: "博客", link: "/posts/" },
      { text: "产品", link: "/product/" },
      { text: "营销", link: "/marketing/" },
      { text: "设计", link: "/uidesign/" },
      { text: "AI GO", link: "/aigo/" },
      { text: "Web3", link: "/web3/" },
      { text: "Vitepress", link: "/vitepress/" },
      {
        text: "更多",
        items: [
          { text: "好物推荐", link: "/good-list" },
          { text: "关于我", link: "/about" },
        ],
      }
]