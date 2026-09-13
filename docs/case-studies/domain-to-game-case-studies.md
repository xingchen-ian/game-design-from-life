# 代表作品深度案例分析：领域知识 → 游戏系统

> **数据来源**：GameDesign Class-1 Submissions（腾讯问卷 18 条提交）→ 对照本地 `GameDesignFinal_Day1/` 与 `gamedesignfinal-thu/` 完整项目文件
> **分析标准**：领域学习路径（novice misconception → core learning shift → Observe-Judge-Act-Feedback-Adjust 循环 → 数据模型 → 挑战空间）
> **分析时间**：2026-08-07

---

## 一、为什么选这三个

从 18 个提交中，以下三个同时满足「领域结构完整 + 文档证据充分 + 机制-领域映射干净」：

| | Crocheting Rhythm | How to Skateboarding | To the End |
|---|---|---|---|
| **学生** | Qingrong Jiang (G2) | Wang Yiran (G4) | Hanson Liu (G2) |
| **领域** | 钩针编织 | 滑板 | 骑行 |
| **领域类型** | 手工技能（非运动） | 运动 | 运动 |
| **AI Agent** | WorkBuddy | WorkBuddy | Codex |
| **文档完整度** | ★★★★★（brief + 16 条 agent log + level design + 系统图） | ★★★★（brief + 3 条 agent log + 系统图） | ★★★（brief/README，无 agent log） |
| **选择理由** | 方法论内化最彻底，唯一非运动领域，差异化最高 | 机制-领域映射最干净，物理引擎最完整 | 变量映射最直白（档位/心率/体力↔骑行），跨 Agent 对比 |

---

## 二、案例一：Crocheting Rhythm（钩针编织）— 最强案例

### 2.1 领域学习结构（来自 development-brief.md）

**真实经历**："当我第一次自学钩针时，很难——我不知道从哪里开始一圈。有些技法我根本不知道存在。它像一门语言，许多元素以特定方式组合。"

**Novice misconception（新手误解）**：初学者以为下一圈应该从上一圈的第一针开始钩。

**Core learning shift（核心学习转变）**：
- 新手：无法发现自己钩错了、读不懂钩针图解 → 失败
- 专家：知道哪些是关键错误，并做出调整避免它们

**OJAFA 循环**：
- **Observe**：钩针图解、成品形状、针数
- **Judge**：成品形状、针法使用、预期针数
- **Act**：切换针法、下针位置、毛线颜色
- **Read feedback**：每圈/每行后出现"对/错"的形态信号
- **Adjust**：针数不对 → 重新开始该圈；某针错了 → 重钩该针

**数据模型**：
- 环境数据：钩针图解、总形状、针数
- 玩家控制数据：针法种类、下针位置、毛线颜色
- 系统计算结果：形状 + 对错信号
- 反馈转译：针数不对→该圈在图解中变红；用错针法→并排展示正确/错误针法让玩家选；下一圈起点错位→箭头指向错针

**关键证据——主动拒绝题材化**（brief §7 原文）：
> "Do not convert the project into a generic mini-game that only uses the domain as a theme."
> （不要把它做成一个只拿领域当皮肤的通用小游戏。）

**这是一个零基础高中生自己写出来的设计要求** —— 方法论内化的最强证据。

### 2.2 游戏演化轨迹（agent-development-log.md，16 个 interaction）

这个项目的日志呈现了教科书级的人机协作演化，值得完整梳理：

| 阶段 | Interaction | 学生决策 / 需求 | AI 角色 | 产物 |
|---|---|---|---|---|
| 核心循环 | 01-04 | "把系统图变成可玩的循环" | 映射 5 种针法到 A/S/D/J/K 键，Canvas 2D，BPM 控制节奏 | 3 级节奏游戏 + 织物可视化（错针留红边）+ HUD |
| 难度分层 | 05-06 | "Level 2 太难" | 放宽判定窗口 ±40→±70px，加 "OK" 档（30% 分） | 判定宽容化，"允许掉 2 针" |
| 规则设计 | 06 | "什么算 Game Over？" | 2 次失误内通过，超过重来 | 失败条件定量化 |
| **领域锚定** | 09-10 | **"用英语，按 granny square 真实构造设计 3 关"** | 3 关 → 5 圈（Magic Ring → First Shell → Growing Sides → Colour Change → Final Border），织物面板跨圈持续生长 | 从"节奏游戏"变成"真的在钩一条祖母方格毯" |
| **自主扩张** | 11 | **"能不能加更多花片甚至毯子？比如圣殿（你可以搜索）"** | 在线研究"圣殿"→识别为 Cathedral Window 花片；研究拼接技法 | 10 圈 4 阶段双花片毯（SQ1 + Cathedral Window + 拼接 + 花边） |
| 视觉主题 | 12 | "主题色要珊瑚粉" | 6 色珊瑚粉+海洋调色板 | 全站视觉统一 |
| **内容规模化** | 13 | **"加至少 20 种不同花片让玩家选"** | 调研 300+ 花片 → 设计 24 种（3 难度档）× 7 种通用布局函数（ring/square/polygon/star/heart/spiral） | 花片选择库 |
| **闭环收束** | 14-15 | **"完成一个花片后给一个实物图来结束一轮"** | ImageGen 生成 24 张实物参考图，关卡按实物图重新校准 | 节奏游戏 → 织物面板 → 实物图参照闭环 |
| 可用性 | 16 | 跳关 bug / 教程 / 鼓励 | 修 bug（banner 回调）、加 Tutorial 花片、失败鼓励文案 | 25 花片库（含教程）+ 温暖失败反馈 |

**演化逻辑总结**：从"3 级节奏小游戏"→"5 圈真祖母方格"→"10 圈双花片毯"→"25 花片可选集 + 实物图闭环"。**每个扩张都由学生自己发起**，且都往"更贴近真实钩针工艺"的方向走——这正是领域学习路径想要的（玩家/作者开始像领域学习者一样判断）。

### 2.3 为什么它是"领域知识转换"的最强代表

1. **非运动手工领域**：18 个提交以运动类为主，钩针是唯一的精细手工技能，差异化价值最高；
2. **"像语言"的领域洞察**：brief 里"元素按特定方式组合"的类比，触及了钩针（及一切图解式工艺）的认知本质——读码；
3. **novice misconception 极其具体**（"下一圈从上一圈第一针开始"），且能被机制直接表达（下针位置选择 + 箭头纠错）；
4. **主动拒绝题材化**：方法论的反例防线（"别只当皮肤"）被学生内化；
5. **演化方向 = 领域真实性增强**：从节奏玩法 → 真实构造 → 圣殿花片 → 实物图，每一步都在加深"领域判断"而非"操作爽感"。

---

## 三、案例二：How to Skateboarding（滑板）— 机制映射最干净

### 3.1 领域学习结构（development-brief.md）

**真实经历**："多年前妈妈送我一块滑板，我发现成功滑行并不容易。它完全在于不断调整动作和重心——取决于速度、角度和地形。"

**Novice misconception**：初学者忽视重力/摩擦对平衡的影响，以为站上板就能平衡。

**Core learning shift**：
- 新手：滑板 = 站上板，尽量远地滑而不摔
- 专家：滑板 = 读地形，并据此调整速度、重心和平衡

**OJAFA 循环**：
- **Observe**：地形、重心、风向
- **Judge**：能量够不够到坡顶、身形是否保持平衡
- **Act**：升降重心高度
- **Read feedback**：没摔 / 到达目的地
- **Adjust**：能量不足 → 调初始速度；摔了 → 调重心位置

**数据模型**：
- 环境数据：地形、重心、风向
- 玩家控制数据：重心升降
- 系统计算结果：是否摔倒、是否到达
- 反馈转译：速度（能否爬坡）、平衡（身形倾斜预警）、稳定性（卡住/能量不足/轮子材质）

### 3.2 物理引擎 = 领域变量的直接编码（agent log Interaction 02）

AI 实现的物理模型**逐条对应 brief 的领域变量**：

| 领域变量 | 游戏物理 |
|---|---|
| 摩擦（轮子材质） | 每种轮子的 friction 值 + controlFactor（冰轮滑、蛋糕轮抓地） |
| 重力/地形 | 上坡减速、下坡加速（`sin²(πt)` 平滑山丘） |
| 重心 | `coreHeight` vs `idealCore` 差值 |
| 重心 × 地形 | 上坡重心错 → 额外能量损失；下坡重心错 → 平衡下降且速度放大误差 |
| 能量 | energy pads（L3） |

**AI 对设计的实质贡献**（log 中如实记录）：`controlFactor`（每种轮子的操控系数）**不在 brief 里**，是 AI 提出让三关"机制性不同"的——并且这一条被记录为"AI 引入的设计方向"，学生接受。

**挑战空间**（三关变量组合）：
1. 平地 + 普通轮 + 正常摩擦（学基础）
2. 一坡 + 冰轮 + 低摩擦（0.45）低操控（体验打滑）
3. 三坡 + 蛋糕轮 + 高摩擦（1.3）高操控 + 能量垫（综合）

### 3.3 价值

滑板是"物理直觉类领域"的代表：**领域知识不是事实记忆，而是本体感觉（重心/速度/地形的关系）**。它示范了——把不可言说的运动感觉转译成可读的 HUD（ideal core 指示器 + 彩色重心点），正是"数据化抽象"能力在学生身上的体现。

---

## 四、案例三：To the End（骑行）— 变量映射最直白

### 4.1 领域学习结构（README.md + 游戏实现）

**Core learning shift**（README 原文）：
> "Beginners think biking uphill means pedaling hard to force their way up; experts know biking uphill means reading the incline and adjusting the gear, pedaling speed, and power in relation to it."
> （新手以为上坡 = 猛蹬硬上；专家知道上坡 = 读坡度，然后调整档位、踏频和功率。）

### 4.2 游戏变量 ↔ 领域变量 一一映射

这是三个案例中**映射最直白**的——每个游戏输入/输出都有真实骑行对应物：

| 游戏系统 | 骑行领域 |
|---|---|
| 档位 1-8 | 变速器 |
| 踏频滑块（RPM） | 踩踏速度 |
| 功率滑块 | 肌肉发力 |
| 骑行姿势（正常/前倾） | 风阻姿态（顶风前倾有效、顺风无效） |
| 心率（185 bpm 红线，2 秒 = 失败） | 生理极限 |
| 体力 | 能量储备（陡坡+高档位消耗更快） |
| 坡度可视化（斜线段路面） | 读坡 |
| 风阻（正=顶风、负=顺风） | 气象 |

**挑战空间**（README 原文）：
- L1：500 m，平路，无风，小坡 → 学"档位-坡度"关系
- L2：1 km，平路，30 节顶风，大坡，400 s 时限 → 风阻 + 心率管理
- L3：1.5 km，烂路，20 节顺风，极陡坡，570 s 时限 → 综合

### 4.3 研究价值：跨 Agent 对比样本

To the End 使用 **Codex**，前两个案例用 **WorkBuddy**。虽然缺少 agent log（唯一遗憾），但它提供：
- 同一边教学法（brief 模板）下不同 AI Agent 的产出质量对比样本；
- 心率动力学（5-10s 延迟 → 15s 波动 → 稳定）说明领域知识进入了**数值建模层面**（不只是题材贴图）。

---

## 五、横向对比：三个案例如何覆盖"领域学习路径"的三种转化深度

| 转化深度 | 标准 | Crocheting Rhythm | Skateboarding | To the End |
|---|---|---|---|---|
| **浅层**（题材+普通机制） | 领域只是皮肤 | ✗ 主动拒绝 | ✗ | ✗ |
| **中层**（流程+操作模拟） | 模拟领域操作 | ✓ 读图+数针+下针 | ✓ 重心控制 | ✓ 换挡+踏频 |
| **深层**（领域认知方式+技能反馈循环） | 玩家开始像领域学习者一样判断 | ✓✓ **读码-找错-修正** | ✓✓ **读地形-调重心** | ✓✓ **读坡-调档-管心率** |

**结论**：三个案例全部达到深层转译——这本身是方法论的强验证：**零基础高中生 + 领域学习路径模板 + AI 辅助，可以在 3 天里产出深层转译的可玩游戏**。

---

## 六、给研究/演讲的建议用法

1. **Crocheting Rhythm**：作为"领域学习路径 + AI 协作"双主题的主案例——
   - 展示 brief → 系统图 → 16 条 agent log 的完整证据链；
   - 亮点故事："圣殿"搜索 → Cathedral Window 识别 → 24 花片库（学生自主扩张）；
   - 与帆船 Sailer Game（group-04）并列，形成"运动/手工"双领域互补。
2. **Skateboarding**：作为"数据化抽象"（Step 3）教学案例——不可言说的重心感觉 → HUD 可读变量；
3. **To the End**：作为"变量映射表"教学案例——领域变量↔游戏变量一一对应，最适合课堂讲解。

---

## 附录：证据文件索引

| 项目 | 文件 |
|---|---|
| Crocheting Rhythm | `gamedesignfinal-thu/Qingrong Jiang/2026-Camp-Group-02-GrannySquareRhythm/`：development-brief.md / agent-development-log.md（16 interactions）/ granny-square-level-design.md / system-graph.png / exhibition/ |
| Skateboarding | `GameDesignFinal_Day1/Wang Yiran- How to skateboarding/Wang Yiran  How to Skateboarding/`：development-brief.md / agent-development-log.md / system-graph.png / how-to-skateboarding.md |
| To the End | `gamedesignfinal-thu/To the end- Group2 Hanson Liu/to-the-end/`：README.md / exhibition/（game.js 含完整变量模型）/ system-graph.png |
