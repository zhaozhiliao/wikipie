import{_ as s,o as a,c as i,R as n}from"./chunks/framework.rW_MhUre.js";const g=JSON.parse('{"title":"Front Matter 配置","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress/配置front-matter.md","filePath":"vitepress/配置front-matter.md","lastUpdated":1702022615000}'),t={name:"vitepress/配置front-matter.md"},p=n(`<h1 id="front-matter-配置" tabindex="-1">Front Matter 配置 <a class="header-anchor" href="#front-matter-配置" aria-label="Permalink to &quot;Front Matter 配置&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>在 VitePress 中，Front Matter 配置是放置在 Markdown 文件的顶部，位于两组 ---（三个短横线）之间。这个部分通常包含一些元数据和配置，用于影响页面的展示和行为。</p><p>以下是一个简单的例子，展示了一个 Markdown 文件的 Front Matter 配置：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">My Page</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">This is a description of my page.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># 正文开始</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">这里是页面的正文内容。</span></span></code></pre></div><p>在这个例子中，<code>title</code>、<code>description</code>、<code>sidebar</code> 等属性就属于 Front Matter。你可以在这里配置诸如页面标题、描述、自动生成侧边栏等信息。</p><p>请注意，<code>---</code> 之间的内容必须放在文件的开头，而且不能有其他文字或空行插入。Front Matter 配置部分通常使用 <code>YAML</code>语法，但在 VitePress 中也支持 <code>JSON</code> 格式。使用哪种语法取决于你个人的喜好。</p><p>Front Matter 配置的具体选项可以根据你的需求和 VitePress 主题的支持而有所不同。你可以查阅 VitePress 的官方文档或相关主题的文档，了解支持的配置项以及如何使用它们。</p><h2 id="配置项" tabindex="-1">配置项 <a class="header-anchor" href="#配置项" aria-label="Permalink to &quot;配置项&quot;">​</a></h2><p>VitePress 的 Front Matter 元数据支持非常灵活，以下是一些常用的配置项：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面标题</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">My Page</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面描述</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">This is a description of my page.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面图标（显示在浏览器标签上）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/path/to/icon.png</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在侧边栏中显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># auto: 根据文件系统自动生成</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># true: 显示在侧边栏</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># false: 不显示在侧边栏</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在导航栏中显示</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">navbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># true: 显示在导航栏</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># false: 不显示在导航栏</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 是否在页面底部显示“编辑此页面”链接</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者指定自定义的编辑链接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># editLink: /custom/edit/link</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示页面最后更新的时间</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Last Updated&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上一篇文章的链接</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/path/to/previous/page</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下一篇文章的链接</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/path/to/next/page</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 页面的标签</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">tag2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,11),l=[p];function e(h,k,r,d,c,o){return a(),i("div",null,l)}const y=s(t,[["render",e]]);export{g as __pageData,y as default};
