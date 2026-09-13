# 试跑编码报告（三）：Coaster Carnage Agent 日志

> **目的**：第三个案例编码，验证"协作模式"的跨案例变异
> **数据**：`/Users/xz33/Downloads/agent-development-log (2).md`（110行）+ `(3).md`（413行，与 4–11 重复）
> **日期**：2026-08-15
> **案例**：Coaster Carnage（Savanna，大学营，Session 001–014，2026-06-11 → 06-24）

---

## 一、与前两个案例的结构差异

| 维度 | 帆船（高中） | Darkroom（大学） | **Coaster（大学）** |
|------|-------------|-----------------|---------------------|
| 交互数 | 2 | 142 | **14（Session 制）** |
| 反思日志 | 1（强制学生栏） | 0 | **1（情感体验反思）** |
| 日志字段 | Student Request/Decision | Student Prompt/Follow-up | **Date/Stage/What happened/Error/Cause/Fix** |
| AI 角色主导 | 实现 | 实现+自我审计+设计提案 | **实现+调试助手** |
| 协作特征 | 中间态 | 线性推进 | **高反复、试错-推翻** |

**发现 A：三个案例用了三种日志模板**——夏校没有强制统一的日志格式。这是研究设计层面的发现：**证据标准化不足**，也说明日志格式本身是"协作协议"的一部分，会随项目演化。

---

## 二、编码结果

| 编码 | 判定 | 证据 |
|------|------|------|
| `PATH-emotion` | ✅ | 过山车恐惧+肾上腺素（情感路径，非领域路径） |
| `LE-clear` | ✅ | "the fear and adrenaline of riding a rollercoaster for the first time" |
| `EM-clear` | ✅ | 恐惧→肾上腺素→好奇→失控想象 |
| `ME-aligned` | ✅✅ | 关键：cart-forward 架构强化情感（见发现 2） |
| `DATA-clear` | ✅ | HP/PT/RT 三变量 |
| `CHAL-dim` | ✅ | 障碍物类型（bird/crab/rat/cheese）作为挑战维度 |
| `AI-code` | ✅✅ | 创建 5 个脚本 + 大量 bug 修复 |
| `AI-design` | ✅ | AI 加无敌帧、自动收集、难度缩放（见发现 1） |
| `AI-autonomy` | 中 | 无自我审计，但主动做设计假设 |
| `DECISION-reversal`（新增） | ✅✅✅ | **大量推翻重来**：duck 加→删、W/S 加→删、Fly 加→修→修→砍 |
| `REF-strong` | ✅ | Session 004 反思明确论证"架构变更如何强化情感"（见发现 2） |
| `PLAY-verified` | ✅ | 学生实际玩测（Level 1 完成、Level 2 近完成） |

---

## 三、关键发现（第三个案例的增量）

### 发现 1：AI 自主做设计假设，且被明确标注"原图没有"

Session 001 记录 AI 的 "Design decisions made / assumptions"：
- Dodge 加短暂无敌窗口（"**not in original diagram** — added for game feel; easy to remove"）
- 自动收集金币
- 难度缩放（每关 spawn 间隔减 15%）

**对比 Darkroom**：Darkroom 的 AI 设计提案被学生拒绝（13 个想法）；Coaster 的 AI 设计假设**被学生部分接受**（无敌帧保留、自动收集保留）。说明 AI 的设计越界在不同项目中命运不同。

### 发现 2：学生反思明确论证"架构变更强化情感"（最珍贵的情感证据）

Session 004 反思 "Does the game still express the original life experience?"：
> "The cart-forward model actually strengthens the emotional core: **the player is not steering the ride, the ride is taking them.** That feeling of being carried along, slightly out of control, is exactly what the original life experience description was about."

这是三个案例中**唯一一个学生明确论证"技术决策如何服务情感目标"**的证据。Session 003 学生主动把架构从"障碍物移向玩家"改为"cart 向前冲"——这不是技术选择，是情感驱动的设计决策。**这直接支撑 RQ2（决策归属）和论文的"协作即学习"论点。**

### 发现 3：高反复的"试错-推翻"协作模式（与前两案例都不同）

| 机制 | 命运 |
|------|------|
| Duck（S 键） | Session 005 AI 加 → Session 006 学生删 |
| W/S 轨道偏移 | Session 009 加 → Session 011 删 |
| Fly 飞弧（F 键） | Session 009 加 → 010 修 bug → 011 修 bug → **012 砍掉** |

**三种协作模式的清晰分化**：
- 帆船 = 中间态（AI 交付、学生未确认）
- Darkroom = 线性推进（AI 提案→学生裁决→执行）
- **Coaster = 高反复试错（AI 加→学生删/改→AI 重做）**

这构成论文 Findings 的核心变异轴：**协作模式不是单一的，而是随项目、学生能力、设计目标而分化的谱系。**

### 发现 4：学生独立修改 AI 代码（决策权的强证据）

Session 006 记录："the designer made several independent changes"——学生**脱离 AI 独立改了代码**：pointGoal 10→5、移除 duck、改碰撞路由、新增 InstructionScreen 和 Bird-Animation 脚本。AI 日志诚实记录"These differ from the AI-generated originals"。

这是"决策归属在学生"的最强证据：**学生不仅裁决 AI 提案，还直接动手改代码**，AI 角色退化为"记录者"。

### 发现 5：AI 作为"调试助手"的角色（区别于前两案例）

Coaster 的 AI 大量时间在做 bug 诊断：类名冲突（Session 002）、轴错误（003）、无敌帧冲突（010）、按钮失效（013）。**AI 角色 = 调试助手 + 记录者**，而非 Darkroom 的"设计伙伴"。

---

## 四、三案例对比矩阵（论文核心发现）

| 维度 | 帆船（高中） | Darkroom（大学） | Coaster（大学） |
|------|-------------|-----------------|-----------------|
| 协作模式 | 中间态 | 线性推进 | 高反复试错 |
| AI 角色 | 实现者 | 设计伙伴+自我审计 | 调试助手+记录者 |
| 学生决策权 | 待决（TBD） | 裁决（13 拒 4 改） | **直接改代码** |
| 情感-机制对齐 | 领域转译（读风） | 曝光=脆弱信任 | **cart-forward=被带着走** |
| 反思 | 强制栏（AI 代管） | 缺失 | **学生主动论证** |
| 证据形态 | 未玩测 | 玩测+发布 | 玩测+迭代 |

**核心发现**：三个案例展示"人机协同设计"不是一个模式，而是一个**协作模式谱系**——AI 的自主性、学生的决策权、情感-机制的耦合方式，都随项目与个体差异而分化。这正是论文要论证的"协作过程模式"的实质。

---

## 五、试跑编码总结（三案例完成）

- 累计发现：帆船 4 + Darkroom 4 + Coaster 5 = **13 个跨案例发现**
- 新增编码：`AI-autonomy`、`DECISION-pending`、`DECISION-reversal`（推翻重来）
- **数据强度已完全足够支撑 Findings**——三案例构成"协作模式谱系"的完整变异集
- 下一步可进入 RQ 反向校准，然后开始写 Findings 大纲

---

_试跑编码 v1.0 — 2026-08-15_
