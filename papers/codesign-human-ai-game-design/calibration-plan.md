# CoDesign 论文校准方案（Calibration Plan）

> **版本**：v1.0（2026-09-13）
> **用途**：把现有 `framework.md`（v0.1）与 `paper-outline.md`（v0.1）对齐到三件新事实——
> ① 方法论已重构为 v3.1 单路径；② CoDesign 的期刊要求已明确；③ 秋季 CGDD 课成为第二轮数据源。
> **受众**：Ian
> **关联**：`framework.md`、`paper-outline.md`、`submission-readiness-and-roadmap.md`

---

## 0. 校准的目标与一条原则

校准不是重写，而是**对齐口径**。现有骨架（三透镜、RQ1–3、三案例矩阵）方向正确，问题在于它是在方法论还是「双路径 v2.1」时写的，而方法论已经变了。

**一条原则**：全文守住三层区分——

| 层 | 是什么 | 在论文中的位置 |
|---|---|---|
| **情境 Context** | 「来自生活的游戏设计」方法论 + 夏校课程设计 | Methods 3.1 |
| **焦点 Focus** | 学生与 AI Agent 协同设计的过程（分工 / 决策归属 / 模式分化） | RQ + Findings |
| **贡献 Contribution** | 「系统描述」作为人机协同设计的边界对象（boundary object） | Discussion 5.1 |

**红线**：方法论不是本论文的研究成果。凡出现「本方法论证明……」的段落，都要改为「在本方法论的课程情境中，观察到……」——否则会被 CoDesign 编辑判定 theme misfit（主题不契合）。

---

## 1. 口径校准（Terminology Alignment）

方法论 v3.1 的核心变化是**取消双路径并列**，论文里凡涉及教学情境的表述必须同步。

| 旧口径（v2.1 时期，论文现稿可能仍在用） | 新口径（v3.1，必须替换） | 英文 |
|---|---|---|
| 情感经验路径 / 领域学习路径（两条并列） | 同一段**有难度的生活过程**的两面 | two faces of one difficult lived process |
| 六步流程 | 双运动：**冷凝** + **展开** | condensation / expansion |
| Step 6 游戏世界拓展（三层方向稿） | Step 6 **四拍**：机制变体 / 场所物化 / 世界规则 / 审美契约 | mechanic variation / place materialization / world rules / aesthetic contract |
| 领域学习路径（第二条方法论） | **教学适配器**（teaching adapter，青少年入口的问题清单） | — |
| 「完整游戏 = 内容量」 | 完整游戏 = **五层同时成立** | — |

**为什么必须改**：如果论文写「双路径」，而学生实际拿到的是 v3.1 单路径课程材料，审稿人一旦对比就会怀疑研究记录与教学实际不符——这属于方法可信度问题，比语言问题严重得多。

**建议做法**：在 Methods 3.1 用一段话交代方法论演化（v2.1 双路径 → v3.1 单路径），并说明数据收集期间使用的是 v2.1——**把版本差异写成研究反思性（reflexivity）的证据，而不是隐藏它**。这与 CoDesign 重视「方法论反思」的偏好一致。

---

## 2. 定位校准（Positioning）

### 2.1 三透镜更新

| 透镜 | 现状 | 需补 |
|---|---|---|
| **透镜 1 协同设计（co-design / participatory design）** | 只有 An & Oogjes、Lee-Remond | Sanders & Stappers (2008)、Visser et al. (2005)、Brandt et al. (2008) design games、Ehn（斯堪的纳维亚 PD 传统） |
| **透镜 2 人机协作 / CSCW** | **空**（仅有概念名，无检索） | boundary objects（Star & Griesemer, 1989；Leigh Star, 2010 的修正）、articulation work（Strauss, 1985；Schmidt & Bannon, 1992）、symmetry of ignorance（Fischer, 2000）、近年应用（AI LEGO, 2025） |
| **透镜 3 学习理论** | epistemic agency（Lee-Remond, 2026） | 接上 v3.1 的新表述：**判断变化（judgment shift）** 与 **情感轨迹（emotional trajectory）** 是同一过程的两面——这正是「协作即学习」的机制说明 |

**优先级**：透镜 2（CSCW）是唯一空缺，也是「系统描述作为边界对象」这个核心贡献的直接理论来源 → **先跑这条文献线**。

### 2.2 与两篇相邻论文的差异定位（保持不变，但要写进 Intro）

| 维度 | An & Oogjes (2026) | Lee-Remond et al. (2026) | 本研究 |
|---|---|---|---|
| 协作主体 | 设计师 + 非专家客户 | 学生 + 学生（peer） | **学生 + AI Agent** |
| AI 介入深度 | 仅 Ideate 阶段的可视化 | 无 AI | **全程设计实现伙伴** |
| 接口 | Prompt | 课堂协作 | **系统描述（system description）** |
| 理论 | Authenticity（表达） | 教学法（epistemic agency） | **Boundary objects（协作机制）** |

一句话差异：An & Oogjes 研究「AI 帮非专家**表达审美**」，本研究研究「AI 帮非专家**实现系统设计**」。

---

## 3. 结构校准（对照 CoDesign 要求）

CoDesign 的评审哲学是「**过程重于产物**、方法论创新是录用关键」。逐节校准：

### 3.1 Introduction
- **现状**：从「AI 时代游戏设计」讲起（偏技术）
- **校准**：改从**协作问题**讲起——非专家想做游戏、AI 能实现，但「谁设计、谁实现、谁裁决」没有答案
- **必加**：贡献声明（contribution statement），至少一条必须是对**协同设计理论/工具**的贡献

### 3.2 Related Work（当前最大空缺）
按**漏斗结构**四小节，终点落在研究空缺：

```
2.1 co-design / 参与式设计谱系（最宽）
     Sanders & Stappers / Visser / Brandt (design games) / Ehn
     → 落点：非专家如何靠「中介物」参与
2.2 人机协作与中介物（CSCW，枢纽）← 待跑文献线
     boundary objects / articulation work / symmetry of ignorance + AI LEGO 2025
     → 落点：多方与人机协作靠什么中介、谁做衔接工作
2.3 学生 / 非专家与 AI 协同设计游戏（最窄）
     An & Oogjes 2026 / Lee-Remond 2026 / Wikberg-Nilsson 2026
     → 落点：两者之间空出本研究的位置
2.4 研究空缺（gap）
     一句话收束：无人研究「学生+AI 协同设计游戏时，系统描述作为边界对象如何运作」
```

**每小节结尾必须有一句「这一支的共识是 X，但都没有 Y」**——Related Work 是论证缺口，不是文献罗列。

### 3.3 Methods
CoDesign 特别看三样，现有 outline 缺两样：

| 项 | 现状 | 校准动作 |
|---|---|---|
| 三证据对照 | 已有 | **明确命名为 triangulation（三角验证）**，不要只描述做法 |
| **研究者反思性 reflexivity** | **缺** | 新增：三重身份（课程教师 / 日志模板设计者 / 方法论作者）如何塑造了协作结构；如何避免把自己的立场读进学生日志。**注意**：日志模板本身是「被课程制度化」的协作结构——这是重要的方法发现，不是瑕疵 |
| **伦理 ethics** | 已起草同意书，未发放 | 新增小节：知情同意、匿名化（P 代号）、可撤回；未成年人需监护人签字 |
| 数据收集改进 v1→v2 | 已有表 | 保留在 3.3；同时说明 **CGDD 课即第二轮数据**（见第 4 节） |

### 3.4 Findings
- 每个发现都要回答一个**协作问题**（怎么分工 / 谁决策 / 模式如何分化），不回答「游戏做得好不好」
- **突出悖论性发现（paradoxical findings）**——CoDesign 明确偏爱。「Darkroom 的 AI 自主性极高（14-agent 自我审计）却同时伴随最强的学生裁决权（13 个想法被拒）」就是天然的张力，比「AI 帮了忙」有力得多

### 3.5 Discussion
- **5.1 贡献**：系统描述作为边界对象（原创贡献，用 CSCW 理论背书）
- **5.2 与方法论反思**：v1→v2 数据收集的方法自我修正——这是研究反思性，CoDesign 高度认可
- **5.3 对 AI 工具设计的含义**：prompt 框 → 系统编辑器
- **5.4 教育含义**：可教性（原 RQ4，降级为论点）
- **5.5 局限**：样本小、单一文化、日志的「事后重建」性质

### 3.6 Conclusion
克制：回顾 RQ → 贡献重申 → 一条未来方向。不喊口号。

---

## 4. 证据校准（新增：CGDD 课是第二轮数据）

这是本轮校准最重要的发现。

`submission-readiness-and-roadmap.md` 的 Phase 3 / 待办里写过一句：

> 用 v2 Prompt 收集第二轮数据，编码第二轮数据，作为 v1 的对比验证

**秋季 CGDD 课（INTM-SHU 247）就是这个第二轮（v2）数据集**，而且不是原本设想的「复现」，是一次**方法升级后的复现**：

| v1（夏校，2026 夏） | v2（CGDD，2026 秋） | 论文中的价值 |
|---|---|---|
| 日志反思「按需」→ Darkroom 0 反思 | 反思改为**每 Milestone 强制** | 直接修复 v1 最严重的证据缺口 |
| Student Follow-up 可留空（帆船全 TBD） | **禁止写 TBD** | 决策归属证据不再丢失 |
| AI 自主决策散落 | 新增 **AI Design Assumptions** 必填字段 | 「AI-autonomy」编码有稳定来源 |
| 未捕获学生独立改动 | 新增 **Student Independent Changes** | Coaster Session 006 类证据不再差点丢失 |
| 无概念漂移记录 | 新增 **Concept Drift Record** | Wuwei 类案例有据可查 |
| 无第三方验证（全部学生自述） | **三轮同伴试玩协议** | 全项目第一批第三方验证数据 |
| — | 问题清晰度 5 星评分 + CSV 导出 | 新增可量化数据 |

**同时可用**：`course-materials/playtest-protocol-3rounds.md` 的 Round 2（出声思考）把「领域词 vs 数值词」变成**可量化**指标——这直接对应 v3.1「判断变化」那一面，可作为一个 Findings 小节。

**要在论文里怎么说**：这与 Method 3.3 的 v1→v2 表是同一件事的两半——表是「方法怎么改的」，CGDD 是「改完之后实际的效果」。两者合起来支撑「研究反思性」这一节。

**需要 Ian 决策**：CGDD 数据在论文里的角色——是作为**实证对比**（需要等一学期数据收齐），还是仅作 **future work / 方法演进说明**？这决定论文能不能今年投。

---

## 5. 待决策项（需 Ian 拍板）

| # | 决策 | 影响 |
|---|---|---|
| D1 | CGDD 是「实证对比」还是「future work」 | 决定投稿时间（等一学期 vs 现在） |
| D2 | 案例集范围（建议：帆船 + Darkroom + Coaster + 1–2 个 CGDD 案例） | 决定 Findings 规模 |
| D3 | 伦理：知情同意何时发放；**现有公开暴露如何处理**（见下） | 一票否决项 |
| D4 | 目标栏目：常规投稿（已确认无契合 special issue，投稿前需复查） | 投稿路径 |
| D5 | 英文写作流程：中文起草 → AI 升格 → 专业润色，是否请母语者通读 Discussion | 语言风险 |

### ⚠️ D3 详情：现有公开暴露

公开仓库 `xingchen-ian/game-design-from-life`（public，Pages 需要）**已包含可识别的学生信息**：

- `course-tracking/student-repos.md`：学生名 + **完整 GitHub 用户名与仓库链接**（P01–P04）
- `docs/research.html`：同一批信息**线上公开可访问**
- `course-tracking/*.md`（4 个文件）：学生姓名、项目、生活体验、情感

而 `papers/codesign-human-ai-game-design/data/the-darkroom-agent-log.md` 含**全名 + GitHub 用户名**。

**关键事实**：知情同意书已起草但**尚未发放**（`data/consent-form.md`），而同意书自己承诺的做法正是「项目代号 P01/P02 替代姓名，移除 GitHub 用户名」。

**三个可选处理**：
1. **匿名化后公开**（与同意书承诺一致）：把已公开文件里的姓名/用户名改为 P 代号，Papers 数据同步匿名化
2. **研究数据转私有仓库**：`papers/` 拆到 private repo，公开仓库只留课程网站内容
3. **先补同意**：发放同意书，取得授权后再决定

**注意**：GitHub 历史一旦公开，即使后续删除，仍可能被 fork / 缓存。所以**投公开仓库前要谨慎**——这也是本次 commit 只做本地、未 push 的原因。

---

## 6. 执行顺序（建议）

```
第 1 步  跑 CSCW 文献线（boundary objects / articulation work）
         → 立起 Related Work 2.2，补齐透镜 2
第 2 步  口径校准：把论文里的「双路径」全部改为 v3.1 单路径
         → 同时写出 Methods 3.1 的方法论演化段
第 3 步  补 Related Work 2.1（co-design 谱系）与 2.3（相邻论文对比）
         → 2.4 缺口自然浮现
第 4 步  写 Methods 全文（含 reflexivity / triangulation / ethics 三小节）
第 5 步  决策 D1（CGDD 角色）与 D3（伦理暴露处理）
第 6 步  Findings 展开（4.1–4.6 素材已有）+ Discussion 贡献节
```

**第 1 步与第 2 步可并行**，且第 1 步是唯一「不依赖 Ian 决策」就能立刻推进的。

---

_校准方案 v1.0 — 2026-09-13_
