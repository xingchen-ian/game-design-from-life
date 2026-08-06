# GitHub Pages 部署指南

> **状态：✅ 已上线（2026-08-06，转私有后恢复公开）**
> - 线上地址：https://xingchen-ian.github.io/game-design-from-life/
> - 仓库：https://github.com/xingchen-ian/game-design-from-life（PUBLIC）
> - Pages 配置：main 分支 /docs 目录（legacy build type）
> - 注意：转 private 会删除 Pages 站点配置，恢复 public 后需重新 `POST /pages` 配置
> - 以下为部署步骤记录，供日后修改部署或复现时参考。

## 快速开始（5步完成部署）

### 第一步：在 GitHub 创建新仓库

1. 打开 [github.com/new](https://github.com/new)
2. 仓库名建议填：`game-design-from-life`
3. 勾选 **Public**（公开，GitHub Pages 免费版要求公开）
4. 点击 **Create repository**

---

### 第二步：将本地文件夹初始化为 Git 仓库

打开终端，进入项目文件夹：

```bash
cd "/Users/xz33/WorkBuddy/来自生活的游戏设计"
git init
git add .
git commit -m "初始化：来自生活的游戏设计网站"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/game-design-from-life.git
git push -u origin main
```

> 将 `YOUR_GITHUB_USERNAME` 替换为你的实际 GitHub 用户名。

---

### 第三步：配置 GitHub Pages

1. 进入仓库页面，点击 **Settings**
2. 左侧菜单找到 **Pages**
3. Source 选择 **Deploy from a branch**
4. Branch 选 **main**，文件夹选 **/docs**
5. 点击 **Save**

大约 1-3 分钟后，你的网站将上线，地址格式为：

```
https://YOUR_GITHUB_USERNAME.github.io/game-design-from-life/
```

---

### 第四步：修改 paper.js 中的配置

打开 `docs/assets/paper.js`，修改顶部的两行：

```js
const GITHUB_USER = 'YOUR_GITHUB_USERNAME';   // ← 填你的 GitHub 用户名
const GITHUB_REPO = 'game-design-from-life';   // ← 填你的仓库名（如果改了就改这里）
```

保存后提交：

```bash
git add docs/assets/paper.js
git commit -m "配置论文加载地址"
git push
```

---

### 第五步：完成 ✅

访问你的网站地址，论文页面将自动从 GitHub 加载 `PAPER_FRAMEWORK.md` 的内容。

---

## 日常更新流程

### 更新论文内容

直接编辑 `PAPER_FRAMEWORK.md`，然后：

```bash
git add PAPER_FRAMEWORK.md
git commit -m "更新论文：[简要描述]"
git push
```

推送后约 1 分钟，网站论文页面自动同步。

### 更新设计实践

编辑 `docs/practice.html`，然后提交推送。

### 添加新板块

1. 在 `docs/` 目录新建 HTML 文件
2. 在每个页面的导航栏 (`nav-links`) 中添加对应链接
3. 提交推送

---

## 本地预览

如需在本地预览效果（而不是直接推 GitHub），运行：

```bash
# 安装一次即可
npm install -g serve

# 启动本地服务器
serve /Users/xz33/WorkBuddy/来自生活的游戏设计/docs
```

然后打开 `http://localhost:3000`。

> **注意**：直接双击 HTML 文件（`file://` 协议）打开时，论文页面的内容加载会失败（浏览器安全限制），需要通过本地服务器或 GitHub Pages 访问。

---

## 文件结构

```
来自生活的游戏设计/
├── PAPER_FRAMEWORK.md        ← 论文内容（论文页面自动加载这个文件）
├── docs/                     ← GitHub Pages 根目录
│   ├── index.html            ← 首页
│   ├── practice.html         ← 设计实践页
│   ├── paper.html            ← 论文内容页
│   ├── _config.yml           ← GitHub Pages 配置
│   └── assets/
│       ├── style.css         ← 全局样式
│       ├── main.js           ← 导航 & 动画
│       └── paper.js          ← 论文 Markdown 加载 & 渲染
├── design-journal/           ← 设计日志
└── ...
```
