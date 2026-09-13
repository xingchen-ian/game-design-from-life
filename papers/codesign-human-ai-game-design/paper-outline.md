# 论文工作文档（CoDesign 投稿）

> **状态**：骨架 v0.1 —— 试跑编码完成，进入写作阶段
> **目标期刊**：CoDesign - International Journal of CoCreation in Design and the Arts
> **更新日期**：2026-08-15
> **工作方式**：本文档是唯一的主工作对象，后续所有写作在此逐步完善（中文构思 → AI 英文升格 → Ian 审核）

---

## 一、元信息

| 项 | 内容 |
|----|------|
| 中文方向 | 人机协同设计游戏：夏校中"系统描述"作为边界对象的实证研究 |
| 英文方向（候选） | Human-AI Co-Design of Games: "System Description" as a Boundary Object in a Summer School |
| 英文副题（候选） | How Novice Students and AI Agents Divide Labour and Make Design Decisions |
| 目标期刊 | CoDesign（双盲，AHCI） |
| 研究方法 | 多案例定性研究（3 深案例 + 变异案例） |
| 数据 | 双夏校（大学营 7 项目 + 高中生营 30+ 作品） |
| 范式 | Research through Design + 多案例研究（Yin） |

---

## 二、核心论点（一句话）

> 在夏校的人机协同设计游戏中，学生与 AI 通过"系统描述"（系统图 + 开发摘要 + agent 日志）这一边界对象进行分工：AI 提供实现的广度，学生保留设计的裁决权——而协作模式并非单一，是一个随项目与个体差异分化的谱系。

---

## 三、研究问题（用 13 个发现校准后）

| RQ | 校准前（framework v0.1） | 校准后（基于试跑发现） |
|----|------------------------|----------------------|
| RQ1 | 学生与 AI 如何分工？ | **通过什么接口分工？"系统描述"如何作为边界对象运作？** |
| RQ2 | 设计决策归属谁？ | **决策权如何分配与行使？AI 自主决策 / 学生裁决 / 学生独立决策各在何时出现？** |
| RQ3 | 协作模式如何演化？ | **协作模式如何随项目与个体差异而分化？形成怎样的谱系？** |

> 原 RQ4（可教性）降级为 Discussion 的一个论点，不再单独设问——三案例已充分证明可教性，无需作为开放问题。

---

## 四、理论框架（三透镜，见 framework.md 第 3 节）

```
透镜1 协同设计理论（co-design / participatory design）
透镜2 人机协作 / CSCW（boundary objects + articulation work + symmetry of ignorance）
透镜3 学习理论（epistemic agency，协作即学习）
核心贡献：系统描述作为人机边界对象（经验发现，非理论框架）
```

---

## 五、论文结构大纲

### 1. Introduction（引言）

| 要点 | 素材 | 状态 |
|------|------|------|
| AI 时代游戏设计的协作问题（prompt 的局限） | 演讲论点"不是 Prompt，是系统描述" | ✅ 已有（talks/） |
| 研究空白：无人研究"学生+AI 协同设计游戏的人机分工与决策归属" | 与 An & Oogjes、Lee-Remond 的差异定位 | ✅ 已有（framework 1.3） |
| 研究问题 RQ1-3 | 本文档第三节 | ✅ 已校准 |
| 贡献声明 | 三案例谱系 + 系统描述接口 | 🟡 待写 |

### 2. Related Work（相关研究）

| 小节 | 素材 | 状态 |
|------|------|------|
| 2.1 co-design / participatory design | Sanders & Stappers 2008、Visser 2005、Brandt 2008 | 🟡 需检索精读 |
| 2.2 human-AI collaboration / CSCW | boundary objects（Star & Griesemer）、articulation work（Schmidt & Bannon）、symmetry of ignorance | 🟡 需检索精读 |
| 2.3 游戏设计教育中的 AI | Huang et al. 2024（AIGC 设计流程）、Lee-Remond 2026 | 🟡 部分已有 |
| 2.4 与相邻论文的差异 | An & Oogjes 2026（已精读）、Lee-Remond 2026（摘要已读） | ✅ 已有 |

### 3. Methods（方法）

| 小节 | 素材 | 状态 |
|------|------|------|
| 3.1 研究情境：双夏校 | 大学营（7 项目）+ 高中生营（30+ 作品） | ✅ 已有 |
| 3.2 数据收集：三证据对照 | 系统图 ↔ GitHub 产物 ↔ agent 日志 | ✅ 已有 |
| **3.3 数据收集改进 v1→v2** | **见本文档第七节表格** | ✅ 已有（放这里） |
| 3.4 分析方法：编码框架 | analysis-framework + 新增 3 编码 | ✅ 已有 |
| 3.5 伦理合规 | 知情同意书（待起草） | 🟡 待办 |
| 3.6 研究反思性 | 日志是"事后重建"、反思是"按需"的局限交代 | ✅ 已有（编码报告发现） |

### 4. Findings（发现）

| 小节 | 素材 | 状态 |
|------|------|------|
| 4.1 协作模式谱系（三案例对比矩阵） | 见本文档第六节 | ✅ 已有 |
| 4.2 系统描述作为边界对象 | 帆船发现 1（系统图→AI复述→实现） | ✅ 已有 |
| 4.3 AI 自主决策（AI-autonomy） | Darkroom 14-agent 审计、Coaster 无敌帧、帆船 4 决策 | ✅ 已有 |
| 4.4 决策归属的三种形态 | 学生裁决（Darkroom 13拒）/ 学生独立改（Coaster）/ 待决（帆船） | ✅ 已有 |
| 4.5 情感-机制对齐 | Coaster 反思"被带着走"、Darkroom"曝光=脆弱信任" | ✅ 已有 |
| 4.6 反思的制度化差异 | 帆船强制 vs Darkroom 缺失 vs Coaster 主动 | ✅ 已有 |

### 5. Discussion（讨论）

| 小节 | 素材 | 状态 |
|------|------|------|
| 5.1 系统描述作为人机协作接口（原创贡献） | 演讲论点 + 三案例证据 | 🟡 待写 |
| 5.2 与 An & Oogjes 的差异 | "AI 帮表达审美 vs AI 帮实现系统" | ✅ 已分析 |
| 5.3 对 AI 工具设计的含义 | prompt 框 → 系统编辑器 | 🟡 待写 |
| 5.4 教育含义（可教性，原RQ4） | 0 基础高中生产出 30+ 可玩游戏 | ✅ 已有 |
| 5.5 局限 | 样本小、单一文化、日志重建性质 | 🟡 待写 |

### 6. Conclusion（结论）

| 要点 | 状态 |
|------|------|
| 回顾 RQ1-3 的答案 | 🟡 待写 |
| 贡献重申 | 🟡 待写 |
| 未来方向 | 🟡 待写 |

---

## 六、核心表格 1：三案例对比矩阵（Findings 4.1）

| 维度 | 帆船（高中营） | The Darkroom（大学营） | Coaster Carnage（大学营） |
|------|--------------|----------------------|-------------------------|
| 协作模式 | 中间态 | 线性推进 | 高反复试错 |
| AI 角色 | 实现者 | 设计伙伴+自我审计 | 调试助手+记录者 |
| 学生决策权 | 待决（TBD） | 裁决（13拒4改） | 直接改代码 |
| 情感-机制对齐 | 领域转译（读风） | 曝光=脆弱信任 | cart-forward=被带着走 |
| 反思 | 强制栏（AI代管） | 缺失（0条） | 学生主动论证 |
| 证据形态 | 未玩测 | 玩测+发布 | 玩测+迭代 |
| 日志模板 | 七段式 | 六段式 | Session制 |

**核心发现句**：人机协同设计不是单一模式，而是一个协作模式谱系——AI 自主性、学生决策权、情感-机制耦合方式随项目与个体分化。

---

## 七、核心表格 2：数据收集改进 v1→v2（Methods 3.3）

| v1 痛点 | v2 对策 | 案例证据 |
|---------|---------|---------|
| 反思"按需"生成 → 缺失 | 改为每个 Milestone 强制生成 | Darkroom 0 反思 |
| Student Follow-up 允许留空 | 明确不得写 TBD | 帆船全部 TBD |
| AI 自主决策散落 | 新增 AI Design Assumptions 必填字段 | Coaster 无敌帧混在 assumptions |
| 未捕获学生独立改动 | 新增 Student Independent Changes 反思字段 | Coaster Session 006 独立改代码 |
| 无概念漂移记录 | 新增 Concept Drift Record | Wuwei 漂移 |
| 日志↔代码不可追溯 | 每条标注 git tag | 帆船无对应 |
| 日志事后重建 | 改为实时记录（≤24h） | Darkroom 从 git 时间戳重构 |

> 此表同时论证论文的"研究反思性"：数据收集方法随第一轮教训而演进，第二轮数据（下一期课）将作为对比验证。

---

## 八、待办清单（按优先级）

### 近期（进入写作前）
- [ ] 起草知情同意书（伦理硬门槛）
- [ ] RQ 措辞最终定稿（英文）
- [ ] 检索精读 co-design / CSCW 文献（2.1、2.2 小节）

### 写作阶段（Phase 3）
- [ ] Introduction 贡献声明
- [ ] Related Work 全文
- [ ] Methods 全文（含 v1→v2 表）
- [ ] Findings 全文（用 4.1-4.6 素材展开）
- [ ] Discussion 全文

### 数据补充（下一期课后）
- [ ] 用 v2 Prompt 收集第二轮数据
- [ ] 编码第二轮数据，作为 v1 的对比验证

---

_论文骨架 v0.1 — 2026-08-15_
_关联文件：framework.md（理论框架）、3 份 pilot-coding 报告（发现）、submission-readiness-and-roadmap.md（路线）_
