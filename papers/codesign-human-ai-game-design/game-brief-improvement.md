# Session 2 问题与 Game Design Brief 改进评估

> **评估对象**：Session 2 workbook 的引导问题（Step 1–6）+ 由其生成的 game design brief（development-brief.md 前 6 节）
> **评估依据**：三案例试跑编码（帆船/Darkroom/Coaster）暴露的证据缺口
> **日期**：2026-08-28

---

## 一、问题链路（先对齐）

```
methodology/domain-learning-design-questions.md（Step 1–10 完整问题清单）
        ↓ 取 Step 1–6
Session 2 workbook（网页，35 页，每页一个问题）
        ↓ 学生回答 → 生成
development-brief.md 前 6 节（学生填写部分）
        ↓ AI Agent 据此构建
可玩游戏 + 网站 + agent 日志
```

| brief 章节 | 来源问题 |
|-----------|---------|
| §1 Project Identity | Before You Start（姓名/标题/领域/AI工具） |
| §2 Design Summary | Step 1（领域采样）+ Step 2（新手/高手差异） |
| §3 Core Player Learning Loop | Step 3（技能循环） |
| §4 Data Model | Step 5（数据化）+ Step 4（反馈表） |
| §5 Rules/Boundaries/Outcomes | Step 5（成功/失败/阈值） |
| §6 Feedback Priorities | Step 4（延迟/即时反馈） |

---

## 二、核心发现：workbook 只覆盖 Step 1–6，遗漏了三个关键步骤

方法论 `domain-learning-design-questions.md` 里有 **Step 1–10**，但 workbook 只做到 Step 6。遗漏的恰好是三个与"人机协作"最相关的步骤：

| 遗漏步骤 | 内容 | 为什么关键 |
|---------|------|-----------|
| **Step 7 挑战空间设计** | 从领域因素推导挑战、挑战维度表、挑战组合表 | 帆船 brief 的"3 个挑战预设"就来自这里，但学生没被引导系统化设计它 |
| **Step 9 AI 辅助开发** | "你接受/拒绝/修改了 AI 哪些建议？最终决策谁做？" | **这正是三案例编码最需要的证据**（决策归属、AI 越界） |
| **Step 10 试玩与反思** | 试玩记录、领域判断是否学会、设计目标是否一致 | 验证"情感-机制对齐"的关键证据 |

**关键洞察**：方法论里 Step 9 其实已经问了很好的问题——"你修改或拒绝了 AI 的哪些建议？为什么？""这次设计中，最终决策是谁做的？"——但这些问题在 Step 9，而 workbook 只到 Step 6，所以**学生从未被问到**。三案例里"决策归属"证据的缺失（帆船全 TBD、Coaster 独立改动差点丢失），根源就在这里。

---

## 三、具体改进建议

### 改进 1：把 Step 9 的"AI 协作"问题前移进 workbook

在 workbook 的 Step 5 之后、Step 6（系统图）之前，新增一个简短页面（Step 5.5），问 3 个问题：

```
1. 你希望 AI 帮你解决什么？（规则整理/变量/代码/素材/调试/反馈）
2. 如果 AI 把你的设计改成了"普通小游戏"（只是题材换皮），你会怎么发现？
3. 最终的设计决策（核心机制、挑战、胜负条件）由谁做？你怎么确保是你而不是 AI 在做？
```

> 理由：这是三案例最需要的证据。让学生在设计阶段就"预演"人机分工，而不是等 AI 越界后才被动记录。

### 改进 2：brief 增加独立的 "Challenge Space" 章节

现在挑战信息散落在 §2 的 "Most important domain challenge" 和系统图里，没有一个结构化的挑战章节。建议在 brief 的 §4 之后新增：

```markdown
## 4.5 Challenge Space（挑战空间）
| 领域因素 | 简单状态 | 困难状态 | 考验的能力 |
|---------|---------|---------|-----------|
| （如风向） | （顺风/侧风） | （逆风目标） | （路线规划） |

### Challenge Presets（2–3 个递进挑战）
| 挑战名 | 因素组合 | 玩家局面 | 考验能力 |
|-------|---------|---------|---------|
```

> 理由：对应方法论 Step 7。现在帆船的 3 个挑战预设是 AI 从系统图"读"出来的，而不是学生在 brief 里显式定义的——这给了 AI 过大的解释空间。

### 改进 3：brief 增加 "AI Collaboration Contract"（人机协作约定）

在 brief 的 §2 Design Summary 末尾，增加一段简短的"协作约定"（学生填写，2 行）：

```markdown
**AI collaboration boundary（人机协作边界）:**
- 我保留的决策（AI 不得擅自改）：核心机制 / 学习转变 / 胜负条件
- 我允许 AI 自主做的：技术实现 / 代码结构 / 视觉微调
```

> 理由：三案例里 AI 越界（Darkroom 叙事、Coaster 无敌帧、帆船 no-go falloff）的根源，是 brief 从未要求学生声明"哪些是我的、哪些交给 AI"。

### 改进 4：brief 的 §2 压缩不要丢失"新手误解"和"核心学习转变"的独立性

现在 §2 把 Step 1 + Step 2 压缩成一段，但"新手误解"和"核心学习转变"是两件不同的事，压缩后容易混。建议 §2 明确保留两个独立小节：

```markdown
**Novice misconception（新手误解）:** （Step 2 问题 1）
**Core learning shift（核心学习转变）:** （Step 2 问题 6，一句话）
```

> 理由：帆船的 brief 里这两者有，但 Darkroom/Coaster 走的是情感路径，压缩后"情感轨迹"和"机制"的对应关系容易丢失。这是论文 RQ（情感-机制对齐）的证据来源，必须清晰保留。

### 改进 5（可选）：workbook 补 Step 10 的"试玩"引导

如果课程时间允许，在 Step 6 后加一个简短的"试玩检查"页：

```
试玩后问自己：玩家是在"追求分数"还是"进入了领域思维"？
```

> 理由：帆船案例停在"未玩测"，直接导致"情感-机制对齐"无法验证。一个轻量试玩引导能显著提升证据完整度。

---

## 四、一张表总结

| 改进 | 对象 | 解决的证据缺口 |
|------|------|---------------|
| 1 前移 AI 协作问题（Step 5.5） | workbook | 决策归属证据缺失（三案例共性） |
| 2 新增 Challenge Space 章节 | brief | 挑战设计散落、AI 解释空间过大 |
| 3 新增 AI Collaboration Contract | brief | AI 越界无约束 |
| 4 保留新手误解/核心转变独立小节 | brief | 情感-机制对齐证据丢失 |
| 5 补试玩引导 | workbook | 帆船"未玩测"问题 |

---

## 五、与"development log prompt"改进的边界（避免再次混淆）

- **本评估**：改的是**设计阶段**（学生填什么、brief 生成什么）——回答"游戏该怎么设计、人机怎么分工"
- **之前的 v2 prompt**：改的是**记录阶段**（日志怎么记）——回答"协作过程怎么留痕"

两者互补，不重叠。本评估的改进 1（前移 AI 协作问题）和 v2 prompt 的"AI Design Assumptions 字段"是同一诉求在两个阶段的落地。

---

_评估 v2.0 — 2026-08-28（修正 v1.0 的对象混淆）_
