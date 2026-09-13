# 试跑编码报告（二）：The Darkroom Agent 日志

> **目的**：验证深案例（大学营最强项目）能否产出比浅案例更丰富的发现
> **数据**：`data/the-darkroom-agent-log.md`（3874 行，从 GitHub 拉取）
> **日期**：2026-08-15
> **案例**：The Darkroom（Boyan Peng，Claude Code / Claude Fable 5，2026-06-10 → ongoing）

---

## 一、与帆船日志的结构差异（重要发现）

| 维度 | 帆船（高中生营） | The Darkroom（大学营） |
|------|-----------------|----------------------|
| 交互数 | 2（145 行） | **142**（3874 行） |
| 反思日志 | 1 条（含强制学生反思栏） | **0 条** |
| AI 工具 | WorkBuddy | **Claude Code（Claude Fable 5）** |
| 字段命名 | Student Request / Student Decision | **Student Prompt / Student Follow-up** |
| 日志约定 | 七段式固定模板 | "Raw Logs 自动追加；Reflection 仅学生要求才生成" |
| 项目阶段 | 第一版可玩原型（未玩测） | **完整开发全周期**（Milestone 1→28，含发布） |

**关键发现 A：日志模板由课程/教师设计，学生转交给 AI 执行**
Interaction 记录学生"Forwarded the professor's 'Generate Development Log Prompt' PDF"——即日志格式是**教师（Ian）预设的规范**，学生把 PDF 转给 AI 执行。这证明：**"人机协同设计"的协作结构，是被课程预先制度化的**，日志模板本身就是研究者的设计干预。

**关键发现 B：反思的"按需 vs 强制"差异**
帆船日志有强制学生反思栏（且 AI 不得代答）；Darkroom 日志约定"Reflection 仅学生要求才生成"，结果 0 条反思。这揭示：**反思不是自然发生的，依赖模板约束**。这本身是方法论发现——夏校若想要反思证据，必须强制而非放任。

**关键发现 C：日志的"重建"性质（方法论警示）**
Interaction 记录"Created this file, reconstructing all prior interactions from the session history and git timestamps, including the unflattering parts"——日志**并非实时记录，而是事后从会话历史和 git 时间戳重建的**。这是研究效度必须交代的点：日志是"事后重构的过程叙事"，非"实时观测"。

---

## 二、编码结果（沿用 analysis-framework + 新增两码）

| 编码 | 判定 | 证据 |
|------|------|------|
| `PATH-emotion` | ✅ | 核心情感明确："fragile trust... caution first, then mastery" |
| `LE-clear` | ✅ | "Developing photographs in a darkroom — an image only exists where light has touched the paper" |
| `EM-clear` | ✅ | 有情感轨迹（谨慎→掌握），非单一情绪词 |
| `ME-aligned` | ✅ | 曝光状态改变"什么可站"→ 直接编码"脆弱信任" |
| `DATA-clear` | ✅✅ | 完整数据模型：11 RoomDef 表、ExposureManager 的 solidity matrix、TrailSystem 3-stroke budget |
| `CHAL-dim` / `CHAL-combo` / `CHAL-curve` | ✅ | 单房间教一个 idea → 再组合（教学曲线重构） |
| `AI-code` | ✅✅✅ | AI 写了 23 个脚本 + 三阶段验证管线（csc 编译 / Unity batchmode / 数据验证器） |
| `AI-design` | ⚠️ 大量 | AI 提出 13 个想法（被学生拒绝）、多个叙事/机制方案 |
| `AI-autonomy`（新增） | ✅✅✅ | **AI 自我审计**：14-agent audit 发现自己的 9 个 bug（2 major）；7-agent 设计工作流（3 提案×对抗批评×合成） |
| `DECISION-pending`（新增） | ✅ | 学生"deferred"发布/分发等决策 |
| `REF-thin` | ✅ | **0 条反思日志**——学生从未主动要求 |
| `PLAY-verified` | ✅ | 学生实际玩测并反馈（不是"待玩测"） |

---

## 三、关键发现（与帆船对比后的增量，均可写入论文）

### 发现 1：学生纠错 AI 的完整闭环（帆船没有，最珍贵）

Interaction 04 记录：
> "The student was right and **the agent's own walkthrough advice was wrong**... the guide now teaches 'draw an arch *through* the apex, not a point *at* it'"

学生玩测发现 Room 3 跳不上 → 数学验证证明 **AI 自己写的攻略是错的** → AI 承认并双线修正（代码 + 攻略）。这是**人机双向纠错**的铁证：协作不是"学生提需求、AI 实现"的单向流，而是**学生验证 AI 产出、AI 修正自己的错误**。

### 发现 2：学生的决策权是实质性的，且被逐条记录

- Interaction 232：接受 Esc 暂停 + M 静音；**拒绝**双语提示（保持纯英文）；**推迟**构建发布
- Interaction 336：**拒绝 AI 第一版计划，附 4 条修订**
- Interaction 391：**13 个诱惑性想法被明确拒绝，且记录原因**（收集系统、TRAILS→ROLL 改名、双关语等）
- Interaction 479：在 AI 承认两个批评后，学生在"曝光控制电梯"和"改造 R9"之间**主动选择**

**对比帆船**：帆船的所有决策都是"TBD/pending"（学生未确认）；Darkroom 的决策是**真实发生且被逐条记录**。这说明：**大学营的协作闭环完成了，高中生营的停在中间态**——这本身是"协作成熟度"的跨案例差异。

### 发现 3：AI 自主性极高，但决策权仍归还学生

- AI 自我审计（14-agent，发现 9 bug）
- AI 设计工作流（7-agent：3 提案视角 × 对抗批评 × 合成 S/M/L 包）
- 但最终：**13 个想法被学生拒绝、4 条修订、方向选择在学生**——AI 提供广度，学生做裁决

**这是"AI 越界"的反面证据**：AI 的高度自主（多 agent 审计、主动提 13 个方案）并没有侵蚀学生决策权，因为日志模板和课程规范把"裁决"环节显式保留给了学生。

### 发现 4：反思缺失 = 研究设计的缺口（反向发现）

0 条反思日志 vs 帆船的强制反思栏。如果论文要论证"协同设计也是学习过程"（epistemic agency），Darkroom 恰恰**缺少反思证据**——它展示了强协作但弱反思。这是论文 Findings 里必须诚实讨论的变异：**协作深度与反思深度并非同步**。

---

## 四、对论文研究设计的直接启示

| 启示 | 说明 |
|------|------|
| 案例对比价值巨大 | 帆船（高中·中间态·有反思）vs Darkroom（大学·完成态·无反思）构成天然对照：协作成熟度 × 反思制度化的 2×2 |
| RQ2 要升格 | "决策归属"在 Darkroom 里不是"谁说了算"，而是"AI 提方案（13 个）→ 学生裁决（拒绝/接受/推迟）→ AI 执行并记录原因"的**裁决链** |
| 新增两个编码必须保留 | `AI-autonomy`（AI 自我审计/多 agent 工作流）、`DECISION-pending`（推迟决策） |
| 方法论章节必须交代 | 日志是"事后重建"（reconstructed），非实时记录；反思是"按需"而非"强制" |

---

## 五、试跑结论

**双案例试跑完成，编码框架充分验证，且产出了 8 个跨案例发现（帆船 4 个 + Darkroom 4 个增量）。数据强度远超预期——这篇论文的 Findings 有扎实素材支撑。**

下一步：编码对比案例（Wuwei 概念漂移 / One More Sip 日志滞后），形成完整的多案例变异集。

---

_试跑编码 v1.0 — 2026-08-15_
_日志存档：`data/the-darkroom-agent-log.md`（GitHub 拉取）_
