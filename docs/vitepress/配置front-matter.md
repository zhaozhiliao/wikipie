# Front Matter 配置
## 说明
在 VitePress 中，Front Matter 配置是放置在 Markdown 文件的顶部，位于两组 ---（三个短横线）之间。这个部分通常包含一些元数据和配置，用于影响页面的展示和行为。

以下是一个简单的例子，展示了一个 Markdown 文件的 Front Matter 配置：
```markdown
---
title: My Page
description: This is a description of my page.
sidebar: auto
---

# 正文开始
这里是页面的正文内容。

```

在这个例子中，`title`、`description`、`sidebar` 等属性就属于 Front Matter。你可以在这里配置诸如页面标题、描述、自动生成侧边栏等信息。

请注意，`---` 之间的内容必须放在文件的开头，而且不能有其他文字或空行插入。Front Matter 配置部分通常使用 `YAML`语法，但在 VitePress 中也支持 `JSON` 格式。使用哪种语法取决于你个人的喜好。

Front Matter 配置的具体选项可以根据你的需求和 VitePress 主题的支持而有所不同。你可以查阅 VitePress 的官方文档或相关主题的文档，了解支持的配置项以及如何使用它们。


## 配置项
VitePress 的 Front Matter 元数据支持非常灵活，以下是一些常用的配置项：
```yaml
---
# 页面标题
title: My Page

# 页面描述
description: This is a description of my page.

# 页面图标（显示在浏览器标签上）
icon: /path/to/icon.png

# 是否在侧边栏中显示
sidebar: auto
# auto: 根据文件系统自动生成
# true: 显示在侧边栏
# false: 不显示在侧边栏

# 是否在导航栏中显示
navbar: true
# true: 显示在导航栏
# false: 不显示在导航栏

# 是否在页面底部显示“编辑此页面”链接
editLink: true
# 或者指定自定义的编辑链接
# editLink: /custom/edit/link

# 显示页面最后更新的时间
lastUpdated: 'Last Updated'

# 上一篇文章的链接
prev: /path/to/previous/page

# 下一篇文章的链接
next: /path/to/next/page

# 页面的标签
tags:
  - tag1
  - tag2
---

```