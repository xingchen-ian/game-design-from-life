# Authenticity in Co-design: Empowering Non-Design-Expert Clients in Practice

## 基本信息

- **标题**: Authenticity in co-design: empowering non-design-expert clients in practice
- **作者**: Jingrui An (江南大学), Doenja Oogjes (埃因霍温理工大学)
- **年份**: 2026（在线发表于 2026-05-11）
- **出处**: CoDesign - International Journal of CoCreation in Design and the Arts
- **DOI**: https://doi.org/10.1080/15710882.2026.2665406
- **预印本**: An, J. (2025). Authenticity as Aesthetics: Enabling the Client to Dominate Decision-making in Co-design. arXiv:2503.14714（DIS 2024 Workshop 前身）

## 核心论点

如何与**非设计专家客户**共创，让设计由其**真实体验（authentic experiences）**赋能。批判设计师主观经验可能带来的偏见。提出框架：**将 AI 生成工具（AIGC）整合进协作流程 + 用 Authenticity 理论精炼设计过程每个阶段**。

关键主张（来自作者 LinkedIn 传播及引用者转述）：
- "foregrounding participants' judgements rather than designers' rationales... challenges the assumption that design value primarily resides in expert interpretation"
- "designer expertise remains important as a form of translation, scaffolding, and feasibility work... but do not retain exclusive control over what counts as an appropriate outcome"
- "individuals are the experts in their own lives"

## 方法论

- 五阶段 bespoke 设计流程：Empathy → Define → Ideate → Prototype & Test
- 明确划分客户与设计师在不同阶段的角色与责任
- AIGC 工具（如 Midjourney）在 Ideate 阶段用于快速可视化
- 应用场景：Airbnb 民宿主人等非设计专家客户

## 精读笔记（2026-08-15，基于预印本 arXiv:2503.14714v2）

### 五阶段角色分工（虚线框 = 主导角色）

| 阶段 | 主导者 | 内容 | AI 介入 |
|------|--------|------|---------|
| 1. Empathy 共情 | 设计师 | 观察+访谈+拍摄，客户自我披露分享轶事 | 无 |
| 2. Define 定义 | 设计师 | 概念草图沟通功能/交互/意图，客户选择偏好 | 无 |
| 3. Ideate 构思（两小步） | 3.3.1 **客户主导**；3.3.2 设计师主导 | 3.3.1 形式与美学：客户用 AIGC 生成概念渲染；3.3.2 情境交互：低保真模型/Figma | **AIGC 仅在 3.3.1**（Midjourney/Stable Diffusion/ChatGPT 生成渲染图） |
| 4. Prototype & Test | 设计师 | 高保真、独立运作产品，真实场景测商业标准 | 无 |

### 关键结论
1. **AIGC 角色很窄**：只在 Ideate 的"形式与美学"小步，用于客户可视化表达审美。AI = 可视化辅助工具，不是实现伙伴。
2. **接口是 Prompt**：客户给 AIGC 的接口是文本 Prompt 或与 ChatGPT 对话。
3. **理论基础**："Authenticity as Aesthetics"（真实性作为美学）；"individuals are the experts in their own lives"（Clark & Statham 2005）；批判"design savior complex"（Irani & Silberman 2016）。
4. **框架来源**：建立在 Huang et al. (2024) 的 AIGC-enabled design process（empathy/define/ideate/prototype/test）之上。
5. **重要局限**：预印本为 DIS 2024 workshop 短论文（7页），Airbnb 案例只有一句提及，**无详细案例数据**。完整案例应在 CoDesign 正式版（22页）。

### 与本研究的三重本质差异（写作时须明确）

| 维度 | An & Oogjes | 本研究 |
|------|-------------|--------|
| AI 介入深度 | 仅 Ideate 阶段，可视化辅助 | **全程**（系统图→实现→调试→反思），设计实现伙伴 |
| 人机接口 | Prompt（文本） | **系统描述**（系统图+开发摘要+agent日志） |
| 理论取向 | Authenticity（美学哲学，关注"表达真实性"） | Boundary Objects + Articulation Work（CSCW，关注"协作机制"） |

**一句话定位**：An & Oogjes 研究"AI 帮非专家**表达**审美"，本研究研究"AI 帮非专家**实现**系统设计"——而"系统描述 vs Prompt"的接口对比正是核心贡献（与演讲论题直接呼应）。

## 与本研究（夏校人机协同设计游戏）的相关性

⭐ **最强同构锚点**：
1. 学生 = 非设计专家；生活体验 = authentic experience（与"来自生活的游戏设计"方法论完全对应）
2. AI 工具不取代人，而是扩展表达与可视化能力
3. "参与者判断优先于设计者/专家解释" = 与"设计决策归属学生"的主张一致

### 差异定位（可用于论文贡献阐述）
- 他们用 Authenticity 理论作为框架，研究的是**一般定制设计**；
- 本研究聚焦**游戏设计**，给出具体协作接口（系统图 + 开发摘要 + agent 日志），并研究**人机分工与决策归属**这一过程性机制。
- 他们偏哲学/理论（authenticity），我们偏过程证据（agent 日志编码）。

## 可引用观点

> "Moving from designing for users to designing with users can create more authentic and meaningful outcomes. Especially today, with AI empowering more people to create, visualize and participate in design processes, this shift may be more possible and relevant than ever."

## 后续行动

- [ ] 精读 arXiv:2503.14714 预印本全文，提取五阶段框架细节与案例描述
- [ ] 通过作者邮箱（j.an@tue.nl）或江南大学机构访问获取正式版
- [ ] 将"authenticity / participants' judgement"与分析方法（决策归属编码）对应
- [ ] 注意：本文理论支柱是 Authenticity 理论——可作为"边界对象/boundary objects"之外的互补视角；但我们的理论框架主线仍是 co-design + human-AI collaboration（boundary objects），Authenticity 作为引用对话对象而非主框架

## 理论定位补充（2026-08-15）

本文是 CoDesign 上"非专家 + AI + 真实体验"的最强锚点，但**不要把它当主理论框架**：
- 它的理论是 Authenticity（哲学/美学取向），我们的核心贡献是"系统描述作为人机边界对象"（CSCW 取向）
- 可引用其"individuals are the experts in their own lives"来支撑"学生生活体验的权威性"，但分析透镜仍用 boundary objects / articulation work / symmetry of ignorance

## APA 7 参考文献

An, J., & Oogjes, D. (2026). Authenticity in co-design: Empowering non-design-expert clients in practice. *CoDesign*, 1–22. https://doi.org/10.1080/15710882.2026.2665406
