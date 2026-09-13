# Agent Development Log（统一模板）

> **使用说明**：每个开发会话后填写。`Student Decision` 和 `AI Design Assumptions` 不得留空或写 TBD。
> **规则**：反思部分必须由学生本人回答，AI 不得代答。

- **Project Title:**
- **Student / Team:**
- **AI Agent Used:**（如 Claude Code / WorkBuddy / Cursor 等，注明模型版本）
- **Development Period:** 开始日期 → （进行中填 ongoing）
- **Project Code:**（研究用代号，如 P01，由教师分配）

---

## 项目设定（开课填一次）

- **Original Life Experience:**（原始生活体验，1-2 句）
- **Core Emotion / Learning Shift:**（核心情感 或 领域学习转变）
- **Core Mechanic:**（核心机制一句话）
- **System Graph:**（系统图文件名）

---

## Interaction Log（每个开发会话一条，实时填写）

### Interaction 01

- **Time:**
- **Stage:**（如：初始搭建 / 新机制 / bug修复 / 打磨）
- **Git Tag:**（本阶段对应的 git tag，如 m1）

**Student Input:**
（你给 AI 的原始输入——需求描述、系统图、设计文档）

**AI Output:**
（AI 做了什么）

**AI Design Assumptions:**（⚠️ 关键字段）
（AI 自主做的、你的原设计文档里**没有**的决策。逐项列出，如"加了无敌帧""改了难度缩放"。没有就写"无"）

**Files Changed:**
（代码/资源/文档的变化）

**Student Decision:**（⚠️ 关键字段，不得留空）
（你对 AI 产出的裁决：接受了什么 / 拒绝了什么 / 改了什么 / 推迟了什么）

**Playtest Note:**
（本阶段是否试玩？玩了几分钟？发现什么？）

---

### Interaction 02

（同上格式复制）

---

## Milestone Reflection（每个阶段完成后，学生本人填写）

> ⚠️ 本部分必须由学生回答。AI 可协助整理语言，但**不得代答内容**。

### Milestone 01 Reflection（覆盖 Interaction __–__）

**1. Does the game still express the original life experience?**
（游戏是否仍表达原初生活体验？与上一阶段相比变强了 / 变弱了 / 不同了？哪里不同？）

**2. Which AI suggestion did you accept / reject / change, and why?**
（哪个 AI 建议你接受了 / 拒绝了 / 改了？为什么？）

**3. Did you change anything WITHOUT asking AI? What and why?**
（有没有没问 AI 就自己改的东西？改了什么？为什么？）

---

## 概念漂移记录（仅当项目换方向时填写）

- **原概念：**
- **新概念：**
- **漂移发生的原因：**
- **AI 在其中扮演的角色：**

---

## 结课提交清单（核对）

- [ ] 本日志（统一模板，无空关键字段）
- [ ] 系统设计图（PNG）
- [ ] GitHub 仓库链接（含 git tag: m1, m2...）
- [ ] 可玩原型链接或构建包
- [ ] 试玩记录（谁玩的、时长、最强烈反应一句话）
- [ ] （如有）概念漂移记录
