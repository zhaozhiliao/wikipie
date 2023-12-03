import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.cf60f399.js";const A=JSON.parse('{"title":"Front Matter 配置","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress/配置front-matter.md","filePath":"vitepress/配置front-matter.md","lastUpdated":1701583058000}'),l={name:"vitepress/配置front-matter.md"},e=p(`<h1 id="front-matter-配置" tabindex="-1">Front Matter 配置 <a class="header-anchor" href="#front-matter-配置" aria-label="Permalink to &quot;Front Matter 配置&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>在 VitePress 中，Front Matter 配置是放置在 Markdown 文件的顶部，位于两组 ---（三个短横线）之间。这个部分通常包含一些元数据和配置，用于影响页面的展示和行为。</p><p>以下是一个简单的例子，展示了一个 Markdown 文件的 Front Matter 配置：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">My Page</span></span>
<span class="line"><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">This is a description of my page.</span></span>
<span class="line"><span style="color:#85E89D;">sidebar</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">auto</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># 正文开始</span></span>
<span class="line"><span style="color:#E1E4E8;">这里是页面的正文内容。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">My Page</span></span>
<span class="line"><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">This is a description of my page.</span></span>
<span class="line"><span style="color:#22863A;">sidebar</span><span style="color:#24292E;">: </span><span style="color:#032F62;">auto</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># 正文开始</span></span>
<span class="line"><span style="color:#24292E;">这里是页面的正文内容。</span></span></code></pre></div><p>在这个例子中，<code>title</code>、<code>description</code>、<code>sidebar</code> 等属性就属于 Front Matter。你可以在这里配置诸如页面标题、描述、自动生成侧边栏等信息。</p><p>请注意，<code>---</code> 之间的内容必须放在文件的开头，而且不能有其他文字或空行插入。Front Matter 配置部分通常使用 <code>YAML</code>语法，但在 VitePress 中也支持 <code>JSON</code> 格式。使用哪种语法取决于你个人的喜好。</p><p>Front Matter 配置的具体选项可以根据你的需求和 VitePress 主题的支持而有所不同。你可以查阅 VitePress 的官方文档或相关主题的文档，了解支持的配置项以及如何使用它们。</p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><p>VitePress 的 Front Matter 元数据支持非常灵活，以下是一些常用的配置项：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">My Page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 页面描述</span></span>
<span class="line"><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">This is a description of my page.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 页面图标（显示在浏览器标签上）</span></span>
<span class="line"><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/path/to/icon.png</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在侧边栏中显示</span></span>
<span class="line"><span style="color:#85E89D;">sidebar</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">auto</span></span>
<span class="line"><span style="color:#6A737D;"># auto: 根据文件系统自动生成</span></span>
<span class="line"><span style="color:#6A737D;"># true: 显示在侧边栏</span></span>
<span class="line"><span style="color:#6A737D;"># false: 不显示在侧边栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在导航栏中显示</span></span>
<span class="line"><span style="color:#85E89D;">navbar</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#6A737D;"># true: 显示在导航栏</span></span>
<span class="line"><span style="color:#6A737D;"># false: 不显示在导航栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在页面底部显示“编辑此页面”链接</span></span>
<span class="line"><span style="color:#85E89D;">editLink</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#6A737D;"># 或者指定自定义的编辑链接</span></span>
<span class="line"><span style="color:#6A737D;"># editLink: /custom/edit/link</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示页面最后更新的时间</span></span>
<span class="line"><span style="color:#85E89D;">lastUpdated</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Last Updated&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上一篇文章的链接</span></span>
<span class="line"><span style="color:#85E89D;">prev</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/path/to/previous/page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下一篇文章的链接</span></span>
<span class="line"><span style="color:#85E89D;">next</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/path/to/next/page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 页面的标签</span></span>
<span class="line"><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">tag1</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">tag2</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">My Page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 页面描述</span></span>
<span class="line"><span style="color:#22863A;">description</span><span style="color:#24292E;">: </span><span style="color:#032F62;">This is a description of my page.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 页面图标（显示在浏览器标签上）</span></span>
<span class="line"><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/path/to/icon.png</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在侧边栏中显示</span></span>
<span class="line"><span style="color:#22863A;">sidebar</span><span style="color:#24292E;">: </span><span style="color:#032F62;">auto</span></span>
<span class="line"><span style="color:#6A737D;"># auto: 根据文件系统自动生成</span></span>
<span class="line"><span style="color:#6A737D;"># true: 显示在侧边栏</span></span>
<span class="line"><span style="color:#6A737D;"># false: 不显示在侧边栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在导航栏中显示</span></span>
<span class="line"><span style="color:#22863A;">navbar</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6A737D;"># true: 显示在导航栏</span></span>
<span class="line"><span style="color:#6A737D;"># false: 不显示在导航栏</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 是否在页面底部显示“编辑此页面”链接</span></span>
<span class="line"><span style="color:#22863A;">editLink</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6A737D;"># 或者指定自定义的编辑链接</span></span>
<span class="line"><span style="color:#6A737D;"># editLink: /custom/edit/link</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示页面最后更新的时间</span></span>
<span class="line"><span style="color:#22863A;">lastUpdated</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Last Updated&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上一篇文章的链接</span></span>
<span class="line"><span style="color:#22863A;">prev</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/path/to/previous/page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下一篇文章的链接</span></span>
<span class="line"><span style="color:#22863A;">next</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/path/to/next/page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 页面的标签</span></span>
<span class="line"><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">tag1</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">tag2</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div>`,11),o=[e];function t(c,r,i,y,E,d){return n(),a("div",null,o)}const D=s(l,[["render",t]]);export{A as __pageData,D as default};
