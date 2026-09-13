# CoDesign 投稿框架：《夏校中的人机协同设计游戏》

> **版本**：v0.1（框架草案，待讨论）
> **日期**：2026-08-15
> **目标期刊**：CoDesign - International Journal of CoCreation in Design and the Arts（T&F，AHCI，IF 2.6）
> **研究主题**：夏校（暑期课程 + 高中生夏令营）中，学生与 AI Agent 协同设计游戏的过程与成果
> **与"来自生活的游戏设计"方法论的关系**：方法论是教学框架（context），协同设计过程是研究对象（research focus）

---

## 0. 一句话定位

> 在夏校环境中，非专家设计者（学生）与 AI Agent 如何协同设计游戏？论文以两份夏校数据（大学暑期课 7 项目 + 高中生夏令营 30+ 作品）为证据，揭示人机协作的**过程模式**：学生提供"系统描述"，AI 提供实现，**设计决策归属学生**。这一分工协议（working contract）是协同设计可规模化的关键。

---

## 1. 为什么是 CoDesign（期刊契合度）

### 1.1 选题踩中期刊 2026 热点
CoDesign 2026 年正在密集发表"设计 + AI"方向论文，说明编辑部与审稿人群体正在形成对这一主题的接受度：

| 论文 | 方向 | 与本研究关系 |
|------|------|-------------|
| **An & Oogjes (2026)**《Authenticity in co-design: empowering non-design-expert clients in practice》，DOI: 10.1080/15710882.2026.2665406 | 非专家客户 + AI 生成工具 + Authenticity 理论 | ⭐ **最强同构锚点**：学生即"非专家"，生活体验即"authentic experience" |
| **Lee-Remond et al. (2026)**《Designing together: student co-design of educational games》，DOI: 10.1080/15710882.2026.2655696 | 学生协同设计教育游戏（三年纵向，跨学科课程） | ⭐ **最接近场景**：学生设计游戏，但**无 AI** |
| Wikberg-Nilsson & Hammarberg (2026)《Augmented codesign?》 | AI 支持的协同设计方法论 | 方法对话 |
| Kang et al. (2026)《human-agent co-design in traditional craft》 | 人与智能体协同设计 | 人-agent 协作过程 |
| Liu & Shi (2026)《Co-experiencing digital play… gaming》 | 游戏体验协同设计（中国场景） | 游戏 + co-design 有存在感 |
| Brandt, Binder & Messeter (2008)《Formatting Design Dialogues: Games and Participation》 | design games 作为协同设计对话载体 | 理论源头，必须引用 |

### 1.2 机会窗口判断
2026 年是 CoDesign 对"设计+AI"最开放的阶段。已有同构论文（An & Oogjes）恰恰证明：**编辑在找的就是这个方向的新证据**。本研究的差异化价值在于：
- 研究对象是**游戏设计**（CoDesign 上较稀缺的领域，但 Brandt 2008 已开先河）
- 场景是**教育/夏校**（非专家成规模参与，30+ 作品 = 可规模化的证据）
- 核心机制是**"系统描述"作为人机协作接口**（一个新的、具体的协作工具形态）

### 1.3 关键定位：与两篇相邻论文的差异（必须写清楚）

| 维度 | **An & Oogjes (2026)** | **Lee-Remond et al. (2026)** | **本研究（差异化）** |
|------|------------------------|------------------------------|----------------------|
| 协作主体 | 设计师 + 非专家客户 | 学生 + 学生（peer） | **学生 + AI Agent** |
| 设计对象 | 定制设计（旅游体验等） | 教育游戏 | 生活体验转译的游戏 |
| 理论框架 | Authenticity 理论 | 教学法（epistemic agency） | **系统描述作为人机接口** |
| 协作接口 | AI 生成工具（Midjourney 等） | 课堂协作 | **系统图 + 开发摘要 + agent 日志** |
| 规模/时长 | 单点案例（Airbnb 场景） | 三年纵向（2023–2025） | 双夏校（大学课程 + 高中生营） |
| 核心证据 | 客户决策主导 | 考试数据 + 情感弧线 | **agent 日志 = 协作过程证据** |
| AI 角色 | 可视化辅助 | 无 AI | **实现/审计/批评/反思等多角色** |

**一句话定位**：An & Oogjes 证明"非专家 + AI 可做真设计"，Lee-Remond 证明"学生可协同设计游戏"——但**没有人研究"学生与 AI 协同设计游戏时，人机分工和决策归属如何运作"**。这正是本研究的空缺。

---

## 2. 核心研究问题（RQ）

基于用户确认的"协作过程模式"方向：

**RQ1（协作分工）**：在夏校人机协同设计流程中，学生与 AI Agent 如何分工？各环节（概念、系统图、实现、调试、反思）由谁承担？
**RQ2（决策归属）**：设计决策（机制取舍、变量定义、情感目标）最终归属于谁？AI 何时被接受/拒绝/修正？
**RQ3（协作演进）**：协作模式如何随项目推进而演化？概念漂移（如 Wuwei）何时发生、由谁触发？
**RQ4（可教性）**：这种分工协议能否被非专家学生掌握？证据：0 编程基础高中生产出 30+ 可玩游戏。

---

## 3. 理论框架（三个已有理论透镜）

> **定位原则（2026-08-15 确认）**："系统描述接口"**不作为理论框架**——它没有文献基础，是自创概念，当框架会被审稿人质疑"理论依据何在"。正确位置是**核心研究贡献**（从 agent 日志中提炼的经验发现），用已有理论概念为其提供合法性。

```
透镜1 协同设计理论（co-design / participatory design）
  ├─ Brandt et al. (2008) design games → 系统图+开发摘要 = 新的设计对话格式
  ├─ An & Oogjes (2026) Authenticity → 学生生活体验 = authentic source，AI 不取代
  └─ Sanders & Stappers（参与式设计谱系）

透镜2 人机协作 / CSCW（human-AI collaboration）
  ├─ ⭐ Boundary Objects（Star & Griesemer, 1989）→ 系统描述 = 学生与AI之间的共享表征
  ├─ ⭐ Articulation Work（Schmidt & Bannon, 1992）→ 学生写系统描述 = 衔接工作
  ├─ ⭐ Symmetry of Ignorance（Rittel, 1984; Fischer, 2000）→ 学生不懂实现、AI不懂生活体验
  ├─ 先例：AI LEGO（2025, arXiv:2505.10300）已用同一套理论分析跨职能AI协作
  └─ 已有编码：AI-code / AI-design / AI-reflect（analysis-framework.md）；AI角色谱系

透镜3 学习理论（learning through co-design）
  ├─ Epistemic Agency（Lee-Remond et al., 2026 的核心概念）→ 协作即学习
  ├─ Learning-by-doing / legitimate peripheral participation（Lave & Wenger, 1991）
  └─ 回答"为什么值得教"：协同设计过程本身在教系统化设计
```

### 核心贡献（研究贡献，非理论框架）

**系统描述（System Description）作为人机协同设计的边界对象**——理论化路径：
- 学生在与 AI 协同设计中，实际生产"系统图 + 开发摘要 + agent 日志"作为协作中介
- 用 boundary objects / articulation work / symmetry of ignorance 三个已有概念为其提供合法性
- 定位：对 boundary objects 文献在「游戏设计 × 人机协作 × 教育」场景下的新证据与具体实例

---

## 4. 数据与方法（两份夏校数据）

### 4.1 数据集 A：大学暑期课程（NYU上海IMA）
- 来源：`course-tracking/`（P00–P06 七项目）
- 证据：Canva 系统设计图 ↔ GitHub 产物 ↔ `agent-development-log.md`（三证据对照）
- 特色案例：The Darkroom（72 条交互日志，AI 全角色）、Wuwei（概念漂移）、One More Sip（日志滞后=协作未记录）

### 4.2 数据集 B：高中生夏令营（domain-learning-camp）
- 来源：`distribution/domain-learning-camp/`（30+ 作品）
- 证据：系统图（PNG）+ 开发摘要（Markdown）+ agent 日志 + 可玩 demo
- 特色案例：帆船（日志 Interaction 01/02 完整记录学生请求/AI复述/学生确认三层结构）

### 4.3 分析方法
| 分析层 | 方法 | 对应 RQ |
|--------|------|---------|
| 过程证据 | agent 日志叙事分析（log as process data） | RQ1, RQ3 |
| 编码分析 | 已有分析框架编码（PATH/LE/EM/ME/DATA/DOMAIN/CHAL/AI/REF/PLAY） | RQ1, RQ2 |
| 决策归属 | 追踪每个设计决策的提出者→接受/拒绝/修改 | RQ2 |
| 概念漂移 | 三证据对照（Canva图 vs repo vs log 的差异） | RQ3 |
| 可教性 | 0 编程基础 × 产出可玩游戏 = 能力证据 | RQ4 |

---

## 5. 论文结构草案（CoDesign 格式）

```
1. 引言：AI 时代游戏设计的协作问题（prompt 的局限 → 需要协作接口）
2. 相关研究：co-design 理论 / AI 协同设计 / design games / 游戏设计教育
3. 研究情境与方法：两份夏校、数据、三证据对照、分析框架
4. 发现
   4.1 分工协议：系统描述从哪里来，AI 做什么
   4.2 决策归属：谁说了算（学生判断 vs AI 推断，含 Wuwei 的 AI 推断案例）
   4.3 协作演进：日志中的角色变化、概念漂移、修正
   4.4 可教性与规模化：30+ 作品的证据
5. 讨论
   5.1 系统描述作为人机协作接口（原创贡献）
   5.2 与 An & Oogjes 的差异：他们用 Authenticity 理论，我们给出具体接口工具
   5.3 对 AI 工具设计的含义（prompt 框 → 系统编辑器）
6. 局限与未来
7. 结论
```

---

## 6. 需要精读/补充的文献

| 优先级 | 文献 | 用途 |
|--------|------|------|
| 🔴 必须 | An & Oogjes (2026)，DOI 10.1080/15710882.2026.2665406 | 最强锚点，定位差异（预印本 arXiv:2503.14714 可获取） |
| 🔴 必须 | Lee-Remond et al. (2026)，DOI 10.1080/15710882.2026.2655696 | 场景最接近（学生设计游戏、无AI），摘要已获取 |
| 🟡 应读 | Brandt et al. (2008) design games | 理论源头 |
| 🟡 应读 | Wikberg-Nilsson & Hammarberg (2026) augmented codesign | 方法对话 |
| 🟢 补充 | Sanders & Stappers (2008) Co-creation and the new landscapes of design | 参与式设计谱系经典 |
| 🟢 补充 | Zimmerman et al. (2007) RtD | 方法范式（已有笔记） |

---

## 7. 下一步

- [ ] 精读 An & Oogjes 全文（arXiv 预印本可获取：《Authenticity as Aesthetics: Enabling the Client to Dominate Decision-making in Co-design》，arXiv:2503.14714）
- [ ] 获取 Lee-Remond et al. (2026) 摘要/全文
- [ ] 抽样编码 2–3 份 agent 日志（帆船 + Darkroom + Wuwei），试跑分析框架
- [ ] 起草引言与文献综述
- [ ] 与演讲材料互相复用（"不是 Prompt，是系统描述"论证链可直接平移）

---

_框架 v0.1 — 2026-08-15_
