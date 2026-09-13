# STORY · XJTLU 2026 Talk

> 主题：From Lived Experience to Playable Systems: AI-Assisted Game Design as a Pedagogical Method
> 作者：Xingchen Zhang, NYU Shanghai
> 场次：Panel 11 — Human-Guided AI Pedagogy · Day 2, 09:00–10:30 · Room C (IA121)
> 时长：10 分钟

## ① 用户意图对齐

- **目标受众**：XJTLU 2026 会议「Artificial Intelligence, Communication, and Social Transformation」Panel 11 听众——传播学/AI 教育研究者。Panel 11 共 5 篇论文（同 panel 含 NYU Shanghai 同事 Nicole C. Wang、DKU Jiang Long、HKMU Sunny Lam、BFSU Monica Bezzegato），共享关键词 "human-guided AI pedagogy"。本篇是该 panel 中聚焦"游戏设计 / 创造性表达"的那一篇。
- **核心目标**：让听众相信三件事并记住一句收尾——
  1. 一句话生成式 AI 已经存在，但实证证据说明它解决不了"游戏感"的问题（quality lives in play, not in code）。
  2. 在教育场景里，关键门槛不是技术，而是"把生活经验结构化表达出来"的意图能力；AI 越强，意图问题越显眼。
  3. "引导式问答 + 开发日志"是一种可教、可问责的回应，它让 AI 成为实现与反思伙伴而非替代者。
  - **收尾金句**：When making a game becomes easy, the hard part is knowing what you want players to feel. AI can't do that for you — but it can help you ask it clearly.
- **PPT 长度**：16 页（封面 1 + 目录 1 + 三章节扉页 3 + 正文 9 + 视频 1 + 收尾 1；含 1 个视频页，1 个收尾金句页）。10 分钟演讲。
- **视觉调性**：scholarly, calm, honest, demonstrative, hopeful。蓝白学术风。
- **内容边界**：
  - **必讲**：会议 Panel 11 语境呼应、"一句话做游戏"的实证失效、NYU Shanghai 课程定位、六步法、引导式问答 vs 提示词的对照、开发日志三段式、The Darkroom 与 Coaster Carnage 两个学生案例、36 秒学生作品蒙太奇、三条发现、下一步方向。
  - **不展开**：六步法的细节操作、AI_GameCreator 引擎架构、纽约/上海场地细节、Ian 个人传记。
  - **禁碰**：营销/夸大、不可追溯的统计数字、对学生作品的成败做价值评判、Unity/团结引擎以外的实现细节。

## ② 页面布局骨架

**章节数：3 章**（N = 3；目录 3 条 ↔ 3 个 section 扉页一一对应，编号 01/02/03 连续）。

| 章节 | 扉页 | 涵盖内容（页） | 节奏定位 |
|---|---|---|---|
| 01 · Setting the scene | 第 3 页 | 4 一句话趋势 / 5 实证失效数据 / 6 NYU Shanghai 定位 | valley → valley → peak（NYU 是第一章高潮） |
| 02 · The method | 第 7 页 | 8 六步法一图 / 9 引导式问答 vs 提示词 / 10 开发日志三段式 | transition → peak（9 是全篇主图）→ valley |
| 03 · What we learned | 第 11 页 | 12 视频 / 13 The Darkroom 案例 + Coaster 引用 / 14 三条发现 / 15 下一步 / 16 收尾金句 | transition → anchor（视频）→ peak（案例）→ valley → peak（金句） |

**Hero 页（共 3 个 = 19% ≤ 25%）**：封面（第 1）、视频页（第 12）、收尾金句页（第 16）。间隔 1 个以上 Supporting 页。

**非对称版式占比**：8/13 = 62% ≥ 40% ✓

**rhythm 曲线**：3-4-5 valley-valley-peak；6 peak；7 transition；8-9-10 valley-peak-valley；11 transition；12 anchor；13 peak；14 valley；15 valley；16 peak。无连续 ≥3 valley。

**数据落点（必带判断）**：
- 0/10,400 单趟编译成功 → 说明失败在结构与架构，不在语法（含义解释）
- 41.46% 端到端基准分 → "可辨认机制，做不出完整游戏"（含义解释）
- +37.1pt playtest 回路增益 → 闭环验证是当前可证的最大单一增益（管理启示）
- 30+ 高中学生 × 0 编程基础 → 民主化在 demo 维度是真实的（业务影响）

## ③ 页面大纲

### Slide 01 — Cover
- title: From Lived Experience to Playable Systems: AI-Assisted Game Design as a Pedagogical Method
- type: cover · role: hero · rhythm: peak · layout: 全幅图+骑线文字（用深蓝实色顶条 + 居中标题）
- visual: L3 学术风顶条 / NYU Shanghai 单位
- density: 标题 1 行 + 副标 1 行 + 单位 + 汇报人 + 时间
- anti_pattern: 禁止用 30+ 学生作品接触表作底图（封面应克制）、禁装饰渐变
- description: 学术封面，深蓝顶条 + 居中英文长 title + 副标"AI as implementation & reflection partner" + Xingchen Zhang / NYU Shanghai / XJTLU 2026 Panel 11 / 2026-09-05

### Slide 02 — Catalog
- title: Outline
- type: catalog · role: supporting · rhythm: valley · layout: 左标题+右内容
- visual: L3 编号 + 章节标题
- density: 3 条目，约 60 字
- anti_pattern: 禁止 4+ 卡片横排、禁止圆球编号
- description: 三章：01 Setting the scene / 02 The method / 03 What we learned。深蓝编号方块 + 标题 + 一行导语

### Slide 03 — Section 1 cover
- title: 01 · Setting the scene
- type: section · role: transition · rhythm: transition · layout: 居中金句/巨型数字
- visual: 巨型数字 01 + 章节标题 + 2–3 个导语要点
- density: 约 60 字
- anti_pattern: 禁止铺满正文段落
- description: 章节扉页"01"。一句话做游戏的兴起与其失效证据；为什么这事在 NYU Shanghai 教室里值得谈

### Slide 04 — One-prompt trend (Hook)
- title: "A game in one sentence" became a benchmark
- type: content · role: supporting · rhythm: valley · layout: 非对称双栏（左 60% 文 + 右 40% 数据）
- visual: 右栏 KPI 大数字 0/10,400（编译失败数）
- density: 字数约 130 / 留白约 20%
- anti_pattern: 禁止等宽三卡横排
- description: 2025–26 一句话生成式游戏成为模型能力验证手段：Rosebud、Summer Engine、UE 5.8 MCP、Unity 7 编码代理。Demo 维度的民主化真实可见

### Slide 05 — The empirical diagnosis
- title: It compiles. It runs. It is structurally vacuous.
- type: content · role: supporting · rhythm: valley · layout: 巨型数字+洞察
- visual: 4 个 KPI 数字（0/10,400、F1≈0.12、80.4→5.7%、+37.1pt）来源：Mage / JAMER / GameCraft-Bench / Play2Code
- density: 字数约 110 / 留白约 25%
- anti_pattern: 禁止把数字塞进图表卡角落、禁止等宽四卡
- description: 编译通过率与功能正确性反相关；F1≈0.12 与 do-nothing 基线无异；80.4→5.7% 是规模悬崖；端到端 41.46%；playtest 回路带来 +37.1pt（最大可证单一增益）。结论：失败在结构与架构，不在语法

### Slide 06 — Our setting: NYU Shanghai
- title: Why this matters in an NYU Shanghai classroom
- type: content · role: supporting · rhythm: peak · layout: 左标题+右内容（窄标题 + 宽内容）
- visual: 右侧三段文字卡（学生构成 / 选课意图 / 两个后果）
- density: 字数约 220 / 留白约 15%
- anti_pattern: 禁止 50:50 等分双栏、禁装饰大图
- description: IMA 跨学科，中美学生混合，编程基础参差。课程不是培养游戏开发者，而是"用系统表达经验的能力"。两个后果：(a) 评价标准不是"好不好玩"，是"转译是否成功"；(b) AI 在这里是合法的（技术非目标），但意图与情感结构不能外包

### Slide 07 — Section 2 cover
- title: 02 · The method
- type: section · role: transition · rhythm: transition · layout: 居中金句/巨型数字
- visual: 巨型数字 02 + 章节标题 + 导语
- density: 约 50 字
- anti_pattern: 禁止四卡预览
- description: 章节扉页"02"。介绍 Game Design from Life 六步法，并把"引导式问答 vs 提示词"作为核心对照

### Slide 08 — Six steps in one picture
- title: Game Design from Life, in six steps
- type: content · role: supporting · rhythm: valley · layout: 上大图+下方卡片（自定义 Diagram 时间轴）
- visual: 上半：六步时间轴（生活感受 → 情感分析 → 数据化抽象 → 系统结构图 → Unity 搭建 → AI 辅助与世界拓展）；下半：每步一句话注脚
- density: 字数约 150 / 留白约 15%
- anti_pattern: 禁止等宽六卡、禁止纯文字列表
- description: 步骤 1 选生活经验中那段"被卡住"的情绪；2 拆出情感结构；3 把结构映射为可调变量；3.5 画成系统图；4 在 Unity 搭最小可玩原型；5 用 AI 协助实现与反思；6 把核心机制拓展成完整世界

### Slide 09 — Guided interview vs one prompt
- title: From one prompt to guided interview
- type: content · role: supporting · rhythm: peak · layout: 非对称双栏（60:40）— 本页全篇核心对照
- visual: 左栏"Prompt"三要素短（意图压缩 / 一次性 / 无问责）；右栏"Guided interview"四要素长（结构化问题清单 / 迭代展开 / 系统描述产出 / 日志可追溯）
- density: 字数约 180 / 留白约 10%
- anti_pattern: 禁止上下等分双栏、禁止把两条都用卡片装
- description: 关键转换——我们不写提示词，我们做结构化访谈。意图不是被压缩在 5 个字里，而是被问题清单逐层展开，直到形成可被验证的系统描述。这是"系统描述 vs Prompt"的核心论点

### Slide 10 — Accountability: the development log
- title: What AI did, what was kept, what was rejected
- type: content · role: supporting · rhythm: valley · layout: 上大图+下方卡片（带方向箭头的三段式示意）
- visual: 三列节点：Student Request → Agent Response → Student Decision，附箭头标注
- density: 字数约 150 / 留白约 15%
- anti_pattern: 禁止 3 等宽卡横排
- description: 开发日志不是工程文档，是问责机制。三段式记录：学生请求、AI 响应摘要、学生决定（接受/拒绝/改写）。The Darkroom 项目 72 次这样的对话；Coaster Carnage 学生在反思中写下"AI 生成的障碍生成器我替换成车厢前进架构，反而更贴过山车'被推着走'的情感"

### Slide 11 — Section 3 cover
- title: 03 · What we learned
- type: section · role: transition · rhythm: transition · layout: 居中金句/巨型数字
- visual: 巨型数字 03 + 章节标题 + 导语
- density: 约 50 字
- anti_pattern: 禁止铺满正文
- description: 章节扉页"03"。证据：两个夏校，一个案例，三条发现，下一步

### Slide 12 — Video: 30+ student games
- title: 30 playable games, made in two weeks, by zero-coding high-schoolers
- type: content · role: hero · rhythm: anchor · layout: 全幅视频 + 骑线文字（上沿 + 下沿）
- visual: L1 = 36s 视频蒙太奇（assets/student-games-reel.mp4）；下沿一行数据锚
- density: 文字 ≤ 30 / 视频 36s
- anti_pattern: 禁止配装饰小图、禁止用文字描述代替视频
- description: 36 秒蒙太奇：滑冰、攀岩、冰壶、高尔夫、滑雪、骑行、射箭、大提琴、钩针、诊断、厨房、折纸——12 个领域，30+ 学生作品

### Slide 13 — Case: The Darkroom
- title: One student's system description
- type: content · role: supporting · rhythm: peak · layout: 上大图+下方卡片（图 50–60% 来自 P03 Canva 系统图 + 下方 Coaster 引用 + 底部数据条）
- visual: L1 = assets/case-darkroom-canva.png（The Darkroom 系统图）
- density: 字数约 170 / 留白约 10%
- anti_pattern: 禁止 50:50 等分双栏
- description: Boyan 的 The Darkroom：长曝光摄影的"对焦失败"经验 → ES/LT/TD/GT 四个变量 → 51 个 Unity 脚本、72 次开发日志对话。系统图把生活经验和游戏机制用结构化语言对接起来，这是引导式访谈的产出形态

### Slide 14 — Three findings
- title: Three things we saw
- type: content · role: supporting · rhythm: valley · layout: 左标题+右内容（编号 1/2/3 三段）
- visual: L3 编号 + 标题 + 一段说明
- density: 字数约 220 / 留白约 15%
- anti_pattern: 禁止等宽三卡横排
- description: F1 可行——零基础学生可在几天内做出符合创作者目的的可玩 demo（democratization 是真的）。F2 验证不对称——AI 能验证系统是否跑通，但不能验证情感是否成立（与 CHI 2026 Best Paper Väkevä et al. 的 resonance 概念对话）。F3 学习在实验中发生——代价是问题太多、反馈非实时

### Slide 15 — Where this is going
- title: What this asks of the next generation of tools
- type: content · role: supporting · rhythm: valley · layout: 非对称双栏（左 60% 文 + 右 40% 三条趋势）
- visual: 右栏三条趋势标签
- density: 字数约 180 / 留白约 15%
- anti_pattern: 禁止 4+ 卡片
- description: 三条趋势——游戏化创作的门槛进一步降低、案例库快速扩大、专业且一站式的 AI 辅助游戏设计工具需求上升。第四条升维：从"AI 辅助做游戏"到"系统化表达能力成为 AI 时代的基础素养"——游戏是这种素养的天然训练场

### Slide 16 — Closing
- title: When making a game becomes easy…
- type: ending · role: hero · rhythm: peak · layout: 居中金句/巨型数字
- visual: 居中英文长金句
- density: 约 40 字
- anti_pattern: 禁装饰渐变、禁装饰小图
- description: "When making a game becomes easy, the hard part is knowing what you want players to feel. AI can't do that for you — but it can help you ask it clearly." 下方一行：Xingchen Zhang · NYU Shanghai · 致谢（学生 / Panel 11 chair / Summer Camp team / XJTLU）

---

## 引用清单（演讲中口述或在脚注/页底带过）

- Hunicke, LeBlanc & Zubek (2004). MDA framework.
- Liapis, Smith & Shaker (2016). Mixed-Initiative Content Creation.
- Sentient Sketchbook (Liapis et al., 2013).
- DreamGarden (CHI 2025 Best Paper, NYU × Microsoft).
- ChatGE (ACL 2025).
- AIIDE 2025 design language co-construction.
- Mage (arXiv:2605.07342) — mechanism fidelity F1≈0.12.
- JAMER (arXiv:2606.19830) — 80.4→5.7% runtime cliff.
- GameCraft-Bench (arXiv:2606.17861) — 41.46% end-to-end.
- Play2Code (arXiv:2605.28258) — +37.1pt playtest-in-loop.
- Väkevä et al. (CHI 2026 Best Paper) — resonance in player experience.
- GDC 2026 State of the Industry — 52% adoption / 5% player-facing.
- UniGen / G-KMS / AutoUE / Generative Ontology (2025–26).
- NYU Shanghai IMA + Game Design from Life methodology (Zhang 2026 working paper).

## 致谢（slide 16 脚注或口述）
NYU Shanghai IMA 同事 Nicole C. Wang（同 panel 论文）、夏令营学生与导师、GameDesignFinal_Day1 课程学生、Panel 11 主席 Dharma Adhikari 与 XJTLU 主办方。

## 风险与回退
- 视频：H.264 MP4，960×540，36s，704KB，已就绪；若现场 PowerPoint 拒绝嵌入，回退方案为在浏览器打开 .mp4 旁路播放 + 视频页只放静态首帧。
- 学生结构：slide 6 中 IMA 描述以"用户核实后再发"为前提，placeholder 文本在制作时已写 Ian 公开口径，Ian 现场可口头补具体数字。
- arXiv 编号：2605.07342 / 2606.19830 / 2606.17861 / 2605.28258 来自 AI_GameCreator/research-survey.html 第 §6 来源清单，已在演讲中以"Mage/JAMER/GameCraft-Bench/Play2Code"名称引用。
