# DESIGN · XJTLU 2026 Talk

> 风格：学术风（design-principle.academic）— 可信、证据驱动，**NYU 紫白克制**
> 画布：1280×720，安全边距 40，C 区背景 #FFFFFF / #FAF8FC
> 字体：思源黑（Source Han Sans / Noto Sans CJK）为主；英文长 title 用 Source Serif Pro 衬线

## 1. 色板（NYU Violet + 白）

色值取自 NYU MarComm 官方品牌规范
<https://www.nyu.edu/employees/resources-and-services/media-and-communications/nyu-brand-guidelines/designing-in-our-style/nyu-colors.html>

| 角色 | hex | 官方名 / 出处 | 用途 |
|---|---|---|---|
| 主紫 | **#57068C** | NYU Violet · PMS 2597 C · RGB 87/6/140 | 顶条、编号、强调、页码、左边框 |
| 深紫 | **#330662** | Deep Violet · PMS 2685 C · RGB 51/6/98 | 深色底、章节、重点卡片 |
| 中紫 | **#7B5AA6** | Medium Violet 2 · RGB 123/90/166 | 次强调、标签、图表第二色 |
| 浅紫 | **#EEE6F3** | Light Violet 2 · RGB 238/230/243 | 深底上的浅色文字 |
| 浅紫底 | #F6F1FA / #FAF8FC | Violet 极浅调（Light Violet 2 → 白） | 卡片底、表头浅底 |
| 警示红 | #D9534F | 非 NYU 色，**语义保留** | 关键词、风险；单页 ≤3% |
| 数据黄 | #FFC107 | 非 NYU 色，**语义保留** | 数字高亮、关键金句；单页 ≤3% |
| 文本主 | #1A2230 | — | 主文字 |
| 文本副 | #4A5568 | — | 副文、注脚 |
| 文本弱 | #8B97A8 | — | 单位、来源 |
| 线框 | #D9D0E4 / #E4DCEC | 紫色调描边 | 描边、分隔线 |
| 背景 | #FFFFFF | — | 主背景 |
| 背景次 | #FAF8FC | — | 卡片底 |

配色比：紫族 35–55%，白底 30–55%，浅紫 0–35%，红+黄 ≤5%。
**禁**：橙绿青大色块、彩虹渐变、纯黑大底、非 NYU 的紫色近似色（全部紫必须出自上表四档）。

### 对比度自检（WCAG，相对亮度法）

| 组合 | 比值 | 结论 |
|---|---|---|
| 白字 on #57068C | 11.6:1 | AAA |
| 白字 on #330662 | 15.6:1 | AAA |
| #57068C on 白底 | 11.6:1 | AAA |
| #57068C on #F6F1FA | 10.5:1 | AAA |
| #7B5AA6 on 白底 | 5.45:1 | AA（正文合格） |
| #330662 on #FFC107 | 9.6:1 | AAA |

紫版对比度全面优于原蓝版（原主蓝 #1E4FA8 on 白 = 7.27:1）。

## 2. 字体

| 层级 | px | 字重 | 用途 |
|---|---|---|---|
| 封面英文长 title | 48 | Bold Serif (Source Serif Pro) | 学术论文式标题 |
| 章节大数字 | 200 | Bold | 扉页 01/02/03 |
| 页主标 (A3/B 区) | 32 | Bold (Source Han Sans) | 每页标题 |
| 副标题 | 20 | Medium | 副标 / 一行导语 |
| 卡内小标 | 24 | Bold | 卡片标题 |
| 正文 | 22 | Regular | 段落 |
| KPI 巨数字 | 96 | Bold | 数据强调 |
| 脚注 / 来源 | 14 | Regular | 单位、来源、页码 |

字体家族 ≤2 套（思源黑 / Source Serif Pro）。

## 3. 母版

- A 模式：A3（深紫顶条 #330662 + 浅色低透明分隔线）作为内容页默认；封面用 A1（深紫实色顶条 + 中央居中标题）；扉页用 A2（浅紫顶条 #F6F1FA + 主紫分隔线 #57068C）。
- B 标题块：y 60–120，主标 32px Bold。
- C 内容区：y 140–640，宽 1200，padding 20。
- D 页脚：y 660–700，左：Xingchen Zhang · NYU Shanghai · XJTLU 2026 · Panel 11  14px 灰；右：NN/16 页码 14px 主紫。

## 4. 章节扉页 → 页面映射

| 编号 | 类型 | 页 | 标题 |
|---|---|---|---|
| — | cover | 01 | From Lived Experience to Playable Systems: AI-Assisted Game Design as a Pedagogical Method |
| — | catalog | 02 | Outline |
| 01 | section | 03 | 01 · Setting the scene |
| — | content | 04 | "A game in one sentence" became a benchmark |
| — | content | 05 | It compiles. It runs. It is structurally vacuous. |
| — | content | 06 | Why this matters in an NYU Shanghai classroom |
| 02 | section | 07 | 02 · The method |
| — | content | 08 | Game Design from Life, in six steps |
| — | content | 09 | From one prompt to guided interview |
| — | content | 10 | What AI did, what was kept, what was rejected |
| 03 | section | 11 | 03 · What we learned |
| — | content (hero) | 12 | 30 playable games, made in two weeks, by zero-coding high-schoolers |
| — | content | 13 | One student's system description |
| — | content | 14 | Three things we saw |
| — | content | 15 | What this asks of the next generation of tools |
| — | ending | 16 | When making a game becomes easy… |

## 5. 资源映射

| 文件 | 用途 | 出现页 |
|---|---|---|
| assets/student-games-reel.mp4 | 36s 学生作品蒙太奇（H.264 960×540，无音轨，704KB） | 12 |
| assets/case-darkroom-canva.png | The Darkroom 系统图（634KB） | 13 |
| assets/example-golf.png | 高中学生 Golf 游戏截图（87KB） | 9（可选） |
| assets/example-horseback.png | 高中学生骑马游戏截图（205KB） | 13（可选） |
| assets/30plus-games-contact.png | 30+ 学生作品接触表（293KB） | 12（视频首帧替代） |

## 6. 页面布局速查

| 页 | role | layout | visual_role | 备注 |
|---|---|---|---|---|
| 01 | hero | 全幅图+骑线文字 | anchor（标题） | 封面 |
| 02 | supporting | 左标题+右内容 | atmosphere | 目录 |
| 03 | transition | 居中金句/巨型数字 | anchor | 01 扉页 |
| 04 | supporting | 非对称双栏（60:40） | evidence | KPI 右栏 |
| 05 | supporting | 巨型数字+洞察 | anchor | 4 KPI |
| 06 | supporting | 左标题+右内容 | evidence | NYU 描述 |
| 07 | transition | 居中金句/巨型数字 | anchor | 02 扉页 |
| 08 | supporting | 上大图+下方卡片 | evidence | 六步时间轴 |
| 09 | supporting | 非对称双栏（60:40） | evidence | 核心对照页 |
| 10 | supporting | 上大图+下方卡片 | evidence | 三段式日志 |
| 11 | transition | 居中金句/巨型数字 | anchor | 03 扉页 |
| 12 | hero | 全幅图+骑线文字 | anchor | 视频 |
| 13 | supporting | 上大图+下方卡片 | evidence | 案例 |
| 14 | supporting | 左标题+右内容 | evidence | 三条 |
| 15 | supporting | 非对称双栏（60:40） | evidence | 趋势 |
| 16 | hero | 居中金句/巨型数字 | anchor | 收尾 |

非对称占比：6/13 ≈ 46%（≥ 40%）。N 卡片横排：0（全篇无对称 3+ 卡横排）。

## 7. 硬约束（自检）

- 全篇 L1 视觉类型 = 真实学生作品截图 + 系统图，统一。
- 单页红+黄 ≤3%，单页强调色 ≤15%。
- 正文 ≥22px，卡内标题 ≥24px。
- 数据页必有"判断句"。
- 占位文本、装饰图、TODO 全部清零。
- arXiv 编号与会议名称以 STORY 引用清单为准。
