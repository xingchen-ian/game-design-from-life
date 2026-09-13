# 数据收集优化方案：下一轮游戏设计课

> **目的**：基于三案例试跑编码（帆船/Darkroom/Coaster）的教训，优化下一轮课的过程数据收集
> **日期**：2026-08-15
> **关联**：`submission-readiness-and-roadmap.md`、三份 pilot-coding 报告
> **核心原则**：让数据在产生时就"可分析"，而不是事后补救

---

## 一、三案例编码暴露的数据痛点（要解决的）

| 痛点 | 案例证据 | 后果 |
|------|---------|------|
| **日志模板不统一** | 帆船七段式 / Darkroom 六段式 / Coaster Session 制 | 跨案例编码困难，无法对比 |
| **反思缺失或代管** | Darkroom 0 反思；帆船强制栏但学生留空 | "协作即学习"论点缺证据 |
| **日志事后重建** | Darkroom 从 git 时间戳+会话历史重构 | 研究效度被质疑（非实时观测） |
| **学生决策证据缺失** | 帆船全部 TBD，无真实决策记录 | RQ2（决策归属）证据弱 |
| **玩测反馈缺失** | 帆船"No real playtest by Xiao yet" | 无法验证"情感-机制对齐" |
| **学生独立改动没记录** | Coaster Session 006 是事后学生上传脚本才发现 | 最强的决策权证据差点丢失 |
| **概念漂移无记录** | Wuwei 概念漂移，日志未说明原因 | 异常案例无法解释 |

---

## 二、优化后的数据收集清单（学生要交什么）

每个学生/小组最终应提交的**研究证据包**（Research Evidence Package）：

### 1. 统一日志模板（强制，替代现在的三种格式）

使用单一模板，关键字段**不可省略**：

```markdown
## Interaction NN
- Time:
- Student Input:（学生给AI的原始输入——需求/系统图/brief）
- AI Output:（AI做了什么，含AI自主添加的设计决策）
- AI Design Assumptions:（AI自主做的、原设计文档没有的决策——逐项列出）
- Files Changed:（代码/资源变化）
- Student Decision:（接受/拒绝/修改/推迟——必须明确，不能留TBD）
- Playtest Note:（本阶段是否试玩？发现了什么？）
```

**强制规则**：`Student Decision` 和 `AI Design Assumptions` 不允许写 "TBD" 或留空——这是 Coaster 案例证明最有价值的证据来源。

### 2. 阶段反思（强制，每次 Milestone 后）

每次阶段完成后，**学生本人**必须回答（AI 不得代答）：

```
1. Does the game still express the original life experience? 
   （游戏是否仍表达原初生活体验？变强了/变弱了/不同了？）
2. Which AI suggestion did you accept / reject / change, and why?
   （哪个AI建议你接受了/拒绝了/改了，为什么？）
3. Did you change anything WITHOUT asking AI? What and why?
   （有没有没问AI就自己改的东西？什么？为什么？）
```

> 说明：这 3 问直接来自三案例中最有价值的证据——Coaster 的情感论证、帆船的防 AI 代答机制、Coaster 的独立改动。第 3 问是新增的，专门捕获"学生脱离 AI 的决策"。

### 3. 三证据对照（完整对齐）

| 证据 | 格式 | 对应关系 |
|------|------|---------|
| 系统设计图 | PNG（Canva 或系统描述图） | 图上的变量/规则 → 代码中的对应 |
| 代码产物 | GitHub 仓库 | 每个 Milestone 打 tag（m1/m2...） |
| agent 日志 | 统一模板 .md | 日志 Interaction 编号 ↔ git commit 对应 |

**新要求**：日志里每条 Interaction 标注对应的 git commit hash（Darkroom 已部分做到，帆船没有）。这让"AI 做了什么 → 代码如何变化"可追溯。

### 4. 可玩原型 + 试玩记录

- 可玩链接或构建包（如 Coaster 的 `syc9459-ui.github.io/Coaster-Carnage-Website/`）
- 简单试玩记录：谁玩的、几分钟、玩家最强烈的反应是什么（一句话即可）

### 5. 概念漂移记录（新增）

如果项目中途换方向（如 Wuwei），必须单独记录：
```
- 原概念：
- 新概念：
- 漂移发生的原因：
- AI 在其中扮演的角色：
```

---

## 三、优化后的采集流程（时间线）

```
开课 Day 0
  ├─ 发放《知情同意书》（研究用途说明）← 伦理硬门槛
  └─ 发放统一日志模板 + 3 个反思问题

每个 Session/Milestone 结束
  ├─ 学生实时填 Interaction（当场，不超过课后 24h）← 解决"事后重建"
  ├─ 学生填阶段反思 3 问（AI 不得代答）
  └─ git commit 打 tag（m1/m2...）

期中检查（课程中段）
  ├─ 教师检查日志完整性（是否有空字段、是否有 Student Decision）
  └─ 缺漏的现场补（这是 Phase 0 发现的"日志滞后"问题的对策）

结课 Day N
  └─ 收齐：系统图 + GitHub 仓库 + 统一日志 + 试玩记录 + 概念漂移记录
```

---

## 四、伦理合规（必须做）

**开课前发放《知情同意书》**，包含：
- 研究目的：本课程的过程数据（日志、代码、作品）可能用于学术研究发表
- 数据使用范围：期刊论文（双盲评审）、会议报告
- 匿名化：发表时用项目代号（P01/P02）而非真实姓名
- 学生权利：可随时撤回，不影响成绩
- 监护人同意：如涉及未成年人（高中生营）需监护人签字

> 这是 Phase 0 风险清单里的硬门槛，一票否决。建议用 Google Form 收集电子签名。

---

## 五、给你的 3 个立即可用工具

### 工具 1：学生日志模板（可直接发）

文件：`data/student-log-template.md`（我下一步可生成完整版）

### 工具 2：教师期中检查清单

```
□ 每个项目有统一模板日志
□ 每条 Interaction 有 Student Decision（非TBD）
□ 每条 Interaction 有 AI Design Assumptions 列项
□ 每个 Milestone 有反思 3 问
□ 日志 Interaction ↔ git tag 对应
□ 有玩测记录
```

### 工具 3：三证据对照检查表

```
项目代号：____
系统图 ↔ 代码变量对应？□ 是 □ 否
日志 Interaction 01 ↔ git tag m1？□ 是 □ 否
...
```

---

## 六、一个研究价值提示

这次"数据收集优化"本身可以成为论文的一个**方法论小节**：*"从第一轮（三案例：模板不统一/反思缺失/事后重建）到第二轮（强制模板/强制反思/实时记录）的数据收集改进"*——这展示你对研究方法的自我修正，是 CoDesign 欣赏的"研究反思性（reflexivity）"。

下一轮课的数据若能体现这些改进，论文方法章节会更扎实。

---

_方案 v1.0 — 2026-08-15_
