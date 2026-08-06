# 来自生活的游戏设计 · GitHub Pages 网站

## 概述

这是一个为研究项目「来自生活的游戏设计」搭建的 GitHub Pages 网站。采用**纯静态 HTML + CSS + JavaScript**架构，无需构建工具，论文内容与本地 Markdown 文件**实时同步**。

---

## 核心特性

### 1. **四大页面**

- **首页** (`index.html`)：项目介绍、核心理念、亮点总结、情感原型库
- **设计实践** (`practice.html`)：展示进行中的「排队」项目，包含机制设计、时间线等
- **课程研究** (`research.html`)：汇总学生项目、系统设计图、研究问题与证据链
- **论文内容** (`paper.html`)：动态渲染 `PAPER_FRAMEWORK.md`，带自动生成目录和平滑导航

### 2. **论文自动同步**

编辑本地 `PAPER_FRAMEWORK.md` → `git push` → 网站自动更新。无需手动操作。

**实现原理**：`paper.js` 通过 GitHub Raw URL 加载 Markdown 文件，使用 marked.js 渲染为 HTML。

### 3. **响应式设计**

- 深色主题，金色 (`#c8a96e`) 点缀
- 适配所有设备：桌面、平板、手机
- 流畅的动画与交互

### 4. **简洁架构**

```
docs/
├── index.html          ← 首页
├── practice.html       ← 实践页
├── research.html       ← 课程研究页
├── paper.html          ← 论文页
├── DEPLOY.md           ← 部署指南
├── assets/
│   ├── style.css       ← 900+ 行样式
│   ├── main.js         ← 导航 & 动画
│   ├── paper.js        ← Markdown 加载
│   └── course-screenshots/ ← 学生系统设计图截图
└── _config.yml         ← GitHub Pages 配置
```

---

## 快速部署（3 步）

### 步骤 1：创建 GitHub 仓库

访问 [github.com/new](https://github.com/new)，创建仓库：

- **仓库名**：`game-design-from-life`
- **可见性**：Public（GitHub Pages 需要）

### 步骤 2：上传文件

```bash
cd "/Users/xz33/WorkBuddy/来自生活的游戏设计"

git init
git add .
git commit -m "初始化网站"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/game-design-from-life.git
git push -u origin main
```

### 步骤 3：配置 GitHub Pages

1. 进入仓库 → **Settings**
2. 左侧 **Pages**
3. **Branch** = `main`，**Folder** = `/docs`
4. 点击 **Save**

网站在 1-3 分钟内上线：
```
https://YOUR_USERNAME.github.io/game-design-from-life/
```

### 步骤 4：配置论文加载

编辑 `docs/assets/paper.js`，修改顶部：

```js
const GITHUB_USER = 'YOUR_USERNAME';            // ← 填你的用户名
const GITHUB_REPO = 'game-design-from-life';    // ← 填仓库名
```

提交推送：

```bash
git add docs/assets/paper.js
git commit -m "配置论文加载"
git push
```

完成！✅

---

## 日常工作流

### 更新论文内容

只需编辑 `PAPER_FRAMEWORK.md`，然后：

```bash
git add PAPER_FRAMEWORK.md
git commit -m "论文更新：[内容描述]"
git push
```

**约 1 分钟后**，网站论文页面自动更新。

### 更新设计实践

编辑 `docs/practice.html` 中的 "进行中" 项目区域，例如：

- 修改进度时间线
- 更新机制卡片
- 补充新的设计问题

然后 `git push`。

### 添加新板块

1. 在 `docs/` 创建新 HTML 文件（复制 `index.html` 作为模板）
2. 在所有页面的 `.nav-links` 中加入新链接：

```html
<a href="new-page.html" class="nav-link">新板块</a>
```

3. 提交推送

---

## 本地预览

若想在本地测试（推荐！），无需 GitHub：

```bash
npx serve /Users/xz33/WorkBuddy/来自生活的游戏设计/docs

# 然后打开 http://localhost:3000
```

> **注意**：直接用文件管理器打开 HTML 会导致论文页面无法加载（浏览器安全限制）。必须通过 HTTP 服务器访问。

---

## 结构说明

### `paper.js` 论文加载器

**工作流程**：

1. 页面加载时，尝试从 GitHub Raw URL 获取 `PAPER_FRAMEWORK.md`
2. 如果网络不可用，尝试本地 Markdown 文件
3. 使用 marked.js 渲染为 HTML
4. 自动为所有标题（h1-h4）生成锚点
5. 自动生成目录（TOC），点击可导航
6. 目录项随滚动高亮

**配置常量**（需根据你的 GitHub 信息修改）：

```js
const GITHUB_USER   = 'YOUR_GITHUB_USERNAME';
const GITHUB_REPO   = 'game-design-from-life';
const GITHUB_BRANCH = 'main';
const PAPER_FILE    = 'PAPER_FRAMEWORK.md';
```

### CSS 主题变量

所有颜色都在 `style.css` 的 `:root` 中定义，易于自定义：

```css
--bg: #0e0f13;              /* 背景色 */
--accent: #c8a96e;          /* 主题色（金色） */
--text: #e8e6e0;            /* 文本色 */
--serif: 'Noto Serif SC';   /* 中文衬线体 */
--sans: 'Noto Sans SC';     /* 中文无衬线体 */
```

---

## 常见问题

### Q: 论文页面显示"无法加载"？

**A**：通常是 GitHub 仓库未公开。检查：

1. 仓库是否设为 **Public**？
2. `paper.js` 中 `GITHUB_USER` 和 `GITHUB_REPO` 是否正确？
3. 网络连接是否正常？

如在本地开发，使用 `npx serve` 启动服务器，本地 Markdown 会自动加载。

### Q: 如何添加新的情感原型到首页？

**A**：编辑 `index.html` 中的 `.prototypes-grid` 部分：

```html
<div class="prototype-card" data-emotion="新情感">
  <div class="proto-emoji">🎯</div>
  <div class="proto-zh">情感名字</div>
  <div class="proto-en">English Name</div>
  <div class="proto-desc">情感描述</div>
</div>
```

### Q: 如何改变主题色（不是金色）？

**A**：在 `style.css` 顶部改 `--accent` 变量：

```css
--accent: #your-color;
--accent-2: #lighter-variant;
```

### Q: 网站可以离线工作吗？

**A**：不完全可以。论文页面需要从 GitHub 加载 Markdown（除非你本地启动 HTTP 服务器）。其他页面和资源都在本地 `docs/` 中。

---

## 技术栈

- **HTML5**：语义化结构
- **CSS3**：Grid、Flex、变量、渐变、动画
- **JavaScript**：Vanilla（无框架）
  - marked.js 库：Markdown 解析和渲染
- **Fonts**：Google Fonts（Noto Serif/Sans SC, JetBrains Mono）
- **Hosting**：GitHub Pages（免费）

---

## 后续拓展建议

1. **添加博客页面**：定期更新设计思考笔记
2. **增加图库**：展示设计原型照片或截图
3. **项目档案**：完成的项目归档，按时间线或情感原型分类
4. **互动演示**：嵌入小游戏演示或设计原理可视化
5. **英文版本**：自动双语切换
6. **评论功能**：集成 GitHub Issues 或 Disqus 作为讨论区

---

## 许可

网站代码采用 MIT 开源许可。研究内容版权所有。

---

## 联系

有任何问题或建议，请直接编辑 `docs/` 中的文件，或提交 GitHub Issue。

祝研究顺利！✨
