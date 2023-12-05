import { defineConfig } from 'vitepress'
import { nav } from './theme/configs/nav'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      // 插件添加与管理
      AutoSidebar({
        collapsed: false,
        ignoreList: [".DS_Store","attachments"],
        ignoreIndexItem: true,
        titleFromFile: true,
        beforeCreateSideBarItems: (fileNames) => {
          // 按文件名中的数字升序排序
          const sortedFileNames = fileNames.sort((a, b) => {
            const numA = parseInt(a.match(/\d+/), 10) || 0; // 提取数字部分，如果没有数字，默认为0
            const numB = parseInt(b.match(/\d+/), 10) || 0;
            return numA - numB;
          });
        
          return sortedFileNames;
        }        
      })
    ]
  },
  // 配置环境变量
  base:
    process.env.DEPLOY_ENV === "VERCEL"
      ? "/" // 在 Vercel 上部署时的基本路径
      : process.env.DEPLOY_ENV === "NETLIFY"
      ? "/" // 在 Netlify 上部署时的基本路径
      : "/wikipie/", // 在 GitHub Pages 上部署时的基本路径
  // 基础设置
  lang: "zh-CN",
  title: "WikiPie",
  description: "个人知识库网站",
  titleTemplate:"个人知识库",
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  //颜色模式默认浅色且开启切换
  appearance: true, 
  lastUpdated: true,
  // 禁用死链接检查
  ignoreDeadLinks: true,
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    // siteTitle: false 时，隐藏站点标题，siteTitle: "Hypothesis"启用时，会覆盖原title
    siteTitle: "Hypothesis",
    // 开启搜索支持
    search: {
      provider: "local",
    },
    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录', 
    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部', 
    // 指定大纲的级别为2
    outline: [2, 6], 
    //大纲顶部标题
    outlineTitle:'目录', 
    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页',},
    // 顶部导航配置
    nav,
    // 侧边栏配置
    // sidebar,

    // 社交链接配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhaozhiliao' },
      { icon: 'twitter', link: 'https://twitter.com/' }, 
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },  
    ],
    // 配置footer
    footer: {
      message: "内容原创 - 严禁转载",
      copyright: "MIT Licensed | Copyright © 2016-present zhaodong",
    },
    // 配置广告
    // carbonAds: { 
    //   code: 'your-carbon-code', 
    //   placement: 'your-carbon-placement', 
    // },
  }

})
