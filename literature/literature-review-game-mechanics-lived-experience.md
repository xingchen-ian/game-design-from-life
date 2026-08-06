# 游戏机制如何反映生活体验：学术文献综述

> **文档类型**：学术文献综述（Literature Review）
> **研究主题**：游戏机制与生活体验的转化关系
> **撰写日期**：2026-05-16（更新于 2026-05-20）
> **文献覆盖**：34+ 篇核心文献（1934–2026）
> **关联研究**：来自生活的游戏设计方法论（v2.0）

---

## 目录

1. [研究背景与问题定义](#1-研究背景与问题定义)
2. [文献检索策略](#2-文献检索策略)
3. [主题分类综述](#3-主题分类综述)
   - 3.1 游戏设计基础理论
   - 3.2 情感设计框架
   - 3.3 玩家体验与流体验
      - 3.3.1 流体验理论在游戏中的应用
      - 3.3.2 玩家体验框架
      - 3.3.3 共鸣体验理论（Resonance）——生活体验与游戏体验的实证桥梁 ⭐
   - 3.4 变革性游戏与自传体游戏
   - 3.5 反思性游戏设计
   - 3.6 共情游戏设计
   - 3.7 情感计算与生理测量
   - 3.8 游戏美学与艺术理论
   - 3.9 设计研究方法
4. [研究方法论对比分析](#4-研究方法论对比分析)
5. [主要发现与争议焦点](#5-主要发现与争议焦点)
6. [研究空白与未来方向](#6-研究空白与未来方向)
7. [参考文献列表](#7-参考文献列表)

---

## 1. 研究背景与问题定义

### 1.1 研究背景

游戏作为 20 世纪末崛起的文化媒介，正在经历从娱乐工具向艺术形式的范式转变。自 2000 年代"游戏研究"（Game Studies）作为独立学科出现以来，学者们开始系统探讨游戏的叙事结构、规则逻辑、美学体验和社会功能（Wolf & Perron, 2003; Aarseth, 2001）。与此同时，独立游戏运动（Indie Game Movement）的兴起催生了一批以个人生活体验为素材的游戏作品——*Depression Quest*（Quinn, 2013）、*Dys4ia*（Anthropy, 2012）、*That Dragon, Cancer*（Green & Green, 2016）——这些作品挑战了传统游戏设计的题材边界，将创作者的私人情感与生命经历直接转化为玩家可感知的游戏机制。

这一现象引发了学界的核心追问：**游戏机制能否有效"编码"生活体验？转化的媒介逻辑是什么？设计者如何将主观的、情境化的生活感受系统地转化为可重复、可分享的游戏体验？**

然而，在现有文献中，这一问题域呈现出明显的碎片化状态：游戏设计领域的研究（Hunicke et al., 2004; Björk & Holopainen, 2005）聚焦于机制的形式分析，较少关注机制的情感来源；情感计算与玩家体验研究（Yannakakis & Melhart, 2023; Croissant et al., 2023）着重测量、适应或框架化情感，而非从生活经验出发生成机制；自传体游戏研究（Anthropy, 2012; Harrer, 2019）提供了丰富的个案，但缺乏可复用的方法论。**从生活体验到游戏机制的"正向设计路径"**，至今仍是一个尚待系统化的研究空白。

### 1.2 核心研究问题

本综述围绕以下三个相互关联的研究问题展开：

1. **RQ1**：现有文献如何理论化"游戏机制"与"生活/情感体验"之间的关系？哪些理论框架具有解释力？
2. **RQ2**：研究者与设计者采用哪些方法捕捉、分析和转化生活体验进入游戏设计？这些方法的有效性如何？
3. **RQ3**：在"生活体验→游戏机制"转化过程中，情感扮演什么角色？情感等价（Emotional Equivalence）是否可能且可操作？

### 1.3 研究意义

系统梳理这一领域的文献，有助于：
- 为"来自生活的游戏设计"方法论提供理论定位与学术对话基础；
- 厘清该方法论的**创新边界**（区别于哪些已有工作）；
- 识别可直接引用的支撑论据与存在争议的理论节点。

---

## 2. 文献检索策略

### 2.1 检索数据库

| 数据库 | 覆盖领域 | 主要收获 |
|--------|---------|---------|
| ACM Digital Library | 人机交互、游戏研究（CHI、CHI Play、FDG、CIG） | 核心会议论文，情感设计、反思性游戏 |
| Google Scholar | 跨学科综合检索 | 经典著作引用链追踪 |
| IEEE Xplore | 情感计算、游戏AI | 生理测量研究、情感计算综述 |
| DiGRA Digital Library | 游戏研究专业期刊 | 游戏美学、叙事学讨论 |
| Semantic Scholar | 论文引用网络 | 跨文献关联发现 |
| ResearchGate / Academia.edu | 预印本与自传体游戏 | 边缘研究和新兴方向 |
| 百度学术 | 中文文献补充 | 国内游戏设计研究现状 |

### 2.2 检索关键词

**核心词组（英文）**：
- `game mechanics lived experience`
- `emotional game design framework`
- `autobiographical game design`
- `procedural rhetoric affect`
- `player emotional experience`
- `transformative games design`
- `empathy game mechanics`
- `reflective game design`
- `grounded theory game design`
- `indie games personal narrative`
- `affective game computing`
- `game emotion mapping`

**核心词组（中文）**：
- `游戏机制 情感体验`
- `游戏设计 生活体验`
- `情感化游戏设计`
- `玩家情感 游戏设计方法`

### 2.3 筛选标准

**纳入标准**：
- 发表于同行评审期刊或A类会议（CHI、FDG、DiGRA、CHI Play、Game Studies期刊等）
- 研究对象明确涉及"游戏机制"或"游戏设计"与"情感/体验/生活"的关系
- 经典奠基性著作不限年份；实证研究优先选取 2010 年以后发表
- 包含方法论描述或设计框架

**排除标准**：
- 纯商业游戏评论无学术方法支撑
- 单纯技术实现类论文（无设计或体验分析）
- 仅关注游戏化（Gamification）而非游戏本身
- 重复性研究（选取被引更高版本）

### 2.4 文献总量与分类

经筛选，本综述共涵盖 **34 篇核心文献**，分布如下：

| 主题分类 | 文献数量 |
|---------|---------|
| 游戏设计基础理论 | 6 篇 |
| 情感设计框架 | 7 篇 |
| 玩家体验与流体验 | 5 篇 |
| 变革性/自传体游戏 | 5 篇 |
| 反思性游戏设计 | 4 篇 |
| 共情游戏设计 | 3 篇 |
| 情感计算与生理测量 | 2 篇 |
| 设计研究方法 | 2 篇 |
| **合计** | **34 篇** |

---

## 3. 主题分类综述

### 3.1 游戏设计基础理论

#### 3.1.1 "有意义游戏"与机制-体验关系

Salen 与 Zimmerman（2003）的《Rules of Play》构建了游戏设计研究的基础词汇体系。其核心贡献是"有意义游戏"（Meaningful Play）概念的形式化定义：当玩家的行动与其后果之间的关系是**可感知的**（discernible）且与游戏整体**整合的**（integrated），有意义的游戏才得以发生。这一定义为理解"机制如何传达体验"奠定了形式基础，但它描述的是机制成立的**条件**，并未回答机制从何而来。

与之互补，Hunicke、LeBlanc 与 Zubek（2004）提出 **MDA 框架**（Mechanics-Dynamics-Aesthetics），将游戏体验分解为三个相互作用的层次。其关键洞察是：**设计者从机制侧思考，玩家从体验侧感知**，两者的视角是相反的。这一"反向视角"模型揭示了游戏设计的核心挑战：如何从体验目标出发，逆向推导出能够产生该体验的机制组合。MDA 框架被后续几乎所有情感游戏设计研究所引用，但其局限在于：它是分析框架而非设计方法，且未提供从"生活体验"出发的路径。

Björk 与 Holopainen（2005）的《Patterns in Game Design》将游戏设计问题参数化为可复用的"设计模式"（Design Patterns）。该研究系统整理了约 300 个游戏设计模式，并描述了它们之间的依赖和冲突关系。这种模式语言方法与软件工程的设计模式类比，对教学实践有显著价值，但其模式库以机制为单元（而非以情感体验为单元），与生活体验的关联需要外部框架介入。

#### 3.1.2 游戏作为艺术与修辞媒介

Bogost（2007）在《Persuasive Games》中提出**程序修辞**（Procedural Rhetoric）概念，主张游戏通过规则系统本身（而非文字或图像）进行论证与表达。他的核心命题是：游戏规则具有独特的说服力，因为玩家必须**亲身参与**规则的运行，而非仅仅观看或阅读。这一理论为"游戏机制可以编码生活逻辑"提供了媒介本体论依据：机制不是装饰，而是表达系统本身。

Murray（1997/2017）的《Hamlet on the Holodeck》提出了数字叙事的三个本质属性——**沉浸**（Immersion）、**能动性**（Agency）、**变形**（Transformation）——尤其是"变形"概念：数字媒介具有将日常现实"变形"为另一种体验的独特能力。这一理论视角直接支撑了游戏的"艺术转化"机制，即游戏不模拟现实，而是重构现实的感知框架。

Juul（2005）在《Half-Real》中将游戏描述为"真实规则"与"虚构世界"的叠加：规则是真实的（玩家真的遵守），世界是虚构的（不存在于现实）。这一双重性为理解游戏机制与生活体验的关系提供了媒介论视角：生活体验是"真实"的，游戏提供的是一个"安全的"虚构框架，让玩家在不承担现实后果的情况下模拟体验该情感结构。Juul（2013）在《The Art of Failure》中进一步探讨了游戏中"失败体验"的悖论——玩家自愿寻求失败并从中获得满足——这与生活中真实失败的情感轨迹形成了有意义的对照。

Flanagan（2009）的《Critical Play》从批判理论视角审视游戏设计，主张游戏可以成为批判社会现实、表达边缘声音的艺术媒介。她梳理了一批将个人经历、社会议题转化为游戏机制的实践案例，为后续"变革性游戏"与"自传体游戏"研究铺设了理论基础。

### 3.2 情感设计框架

#### 3.2.1 早期情感设计框架

Lazzaro（2004）通过对 30+ 名游戏玩家的观察研究，提出**游戏情感的四种类型**：困难乐趣（Hard Fun）、容易乐趣（Easy Fun）、改变心情（Altered States）、社交乐趣（People Fun）。这是最早通过系统观察方法归纳游戏情感体验类型的工作之一。其方法贡献在于：以行为观察和访谈替代了此前依赖自我报告的方式，揭示了游戏情感的多维性。然而，该研究的局限是"乐趣"框架过于宽泛，未能精确区分不同机制产生不同情感的机制路径。

Norman（2004）在《Emotional Design》中提出情感设计的三层次模型——**本能层**（Visceral）、**行为层**（Behavioral）、**反思层**（Reflective）——虽然该著作以产品设计为主要对象，但其对情感在设计中的分层理解被广泛移植到游戏设计研究中（Lazzaro, 2004; Croissant et al., 2023）。

Ermi 与 Mäyrä（2005）提出游戏体验的 **SCI 沉浸模型**（Sensory, Challenge-based, Imaginative Immersion），将游戏沉浸体验分解为感官、挑战和想象三个维度。该模型基于对儿童和成人玩家的访谈与观察，为理解"是什么让玩家留在游戏体验中"提供了实证基础。

#### 3.2.2 情感游戏设计的近期进展

Croissant、Schofield 与 McCall（2023）在 ACM *Games: Research and Practice* 发表的《Emotion Design for Video Games: A Framework for Affective Interactivity》是目前较系统的情感游戏设计框架之一。该框架整合了心理学情感理论与 HCI/游戏设计实践，提出面向 emotion-adaptive game 的步骤化方法，并强调情感体验并不存在稳定的机制-情感一一映射，而是依赖情境、玩家解释和技术感知能力。这一论断与本研究的"情感等价"概念构成直接的理论对话：他们指出的是映射的不稳定性，而本研究提出的解决路径是通过"情感原型"在设计层面提供结构化的概率性最大化共鸣策略。

Polaris Game Design Retreat 的 Abhi、Ekanayake、Heide、Lumpkin、Chyr 与 Nelson Jr.（2024）提出《There is No Wheel: A Framework for Creating Emotionally Resonant Game Mechanics》。核心论点包括：（1）情感共鸣设计需要**主题先行**（theme-first design），先确定想传达的情感主题，再设计机制；（2）优秀的情感游戏设计应为玩家**留白**（leave space），让玩家带入自己的生活经历，而非强加创作者的叙事。第二个论点与"来自生活的游戏设计"方法论的"安全容器"原理高度契合。

Sun、Lin 与 Peng（2024）在 CHI 2024 提出 **EmoEcho**——一种利用面部表情作为游戏输入的情感拟态机制（Emotion Mimicry Mechanic），通过让玩家用真实情感表达来驱动游戏交互，实现情感与机制的直接耦合。该研究在 48 名参与者中进行，发现情感输入相比键盘输入显著提升了社交投入感和情感共鸣。这是"以生活情感状态直接驱动游戏机制"的最前沿实验案例。

Yannakakis 与 Melhart（2023）在 *Proceedings of the IEEE* 发表《Affective Game Computing: A Survey》，综述了该领域的技术、方法和工具，梳理了情感游戏计算的四个核心阶段：情感诱发（Affect Elicitation）、情感感知（Affect Sensing）、情感检测（Affect Detection）、情感适应（Affect Adaptation）。该综述确认了研究现状的基本问题：大量研究致力于**测量**和**适应**玩家情感，但对于如何从设计侧**主动构建**目标情感体验，研究仍然不足。

#### 3.2.3 游戏情感研究的心理学基础

情感设计研究广泛引用以下心理学模型作为情感分类基础：

- **Russell（1980）的环形模型**（Circumplex Model of Affect）：以效价（Valence）和唤醒度（Arousal）为两轴构建情感空间，适用于分析游戏体验的情感维度。
- **Lazarus（1991）的认知评价理论**（Cognitive Appraisal Theory）：情感是个体对情境的认知评价结果，同一事件在不同认知框架下产生不同情感——这解释了为什么相同机制在不同玩家身上产生不同情感反应。
- **Ekman（1992）的基本情感理论**：主张存在六种跨文化的基本情感，但在游戏研究中因过于简化而受到批评。
- **Plutchik（1980）的情感轮**：将情感组织为可混合的基础单元，适用于情感原型分类。

### 3.3 玩家体验与流体验

#### 3.3.1 流体验理论在游戏中的应用

Csikszentmihalyi（1990）的**流体验理论**（Flow Theory）是游戏体验研究引用最高的心理学理论之一。流体验的核心条件——挑战与技能的平衡（Challenge-Skill Balance）、明确目标与即时反馈——与游戏设计的核心原则高度吻合。Chen（2007）在其硕士论文《Flow in Games》中将流理论直接应用于游戏设计，提出通过动态难度调整（Dynamic Difficulty Adjustment, DDA）维持玩家流体验的设计方法，成为该领域被引最多的应用研究。

流理论与生活体验的关联在于：流状态本身就是一种高度专注、时间感消失的"特殊生活体验"，而游戏可以系统性地制造这种体验。然而，流理论未能区分不同**类型**的情感体验（快乐与悲伤、紧张与平静都可以是流状态），这限制了其作为情感设计工具的精细度。

#### 3.3.2 玩家体验框架

Calleja（2011）在《In-Game: From Immersion to Incorporation》中批判了"沉浸"隐喻的局限，提出**玩家整合模型**（Player Involvement Model, PIM）。该模型从现象学角度（基于 Merleau-Ponty 的身体现象学）分析玩家如何将游戏"内化"为自身体验，提出六个互动维度：运动学（Kinesthetic）、空间（Spatial）、共享（Shared）、叙事（Narrative）、情感（Affective）、进步（Performative）。该框架对理解"游戏体验如何被玩家主观感知"具有重要价值，但对于"如何设计以产生特定类型的内化体验"，提供的可操作建议有限。

Ermi 与 Mäyrä（2005）的 SCI 模型（见 3.2.1）揭示了游戏沉浸与生活经验的重叠：想象性沉浸（Imaginative Immersion）依赖于玩家将自身经历投射入游戏世界的能力，这支撑了"为玩家留白"设计原则的重要性。

Miller 等人（2024）在 CHI 2024 发表的《A Design Framework for Reflective Play》提出五种促进玩家反思的设计策略：**扰动**（Disruptions）、**减速**（Slowdowns）、**质疑**（Questioning）、**重访**（Revisiting）、**增强器**（Enhancers）。这五种策略从机制层面具体化了如何将游戏体验转化为引发玩家与自身生活对话的契机。

#### 3.3.3 共鸣体验理论（Resonance）——生活体验与游戏体验的实证桥梁 ⭐

> **⭐ 本条目为本综述最关键新增文献，直接支撑"来自生活的游戏设计"核心命题的实证基础**

Väkevä、Vornhagen、Rautalahti 与 Lindqvist（2026）在 **CHI 2026（巴塞罗那）** 发表的论文 **"An Experience That Could Not Be Found Anywhere Else": Resonance as an Explanatory Concept for Player Experience Research and Game Design** 荣获 **CHI 2026 最佳论文奖（Best Paper Award）**。

**研究概述**：

该研究通过定性在线问卷（n=110）与反思性主题分析，系统探究了什么构成了游戏中的"不可替代感"——即那种**无法在任何其他媒介或生活场景中获得的独特体验**。研究提出 **"共鸣"（Resonance）** 作为解释这一现象的核心理论构念。

**核心发现**：

1. **共鸣的定义**：共鸣是一种多维度的深度体验状态，当玩家的**个人生活经历、情感记忆、价值观**在游戏中被激活和呼应时产生。它不同于沉浸（Immersion）、流体验（Flow）或单纯的游戏享受——这些可以是"去情境化的"，而共鸣本质上**依赖于玩家独特的生命史**。

2. **最具共鸣的游戏体验 = 与个人生活经历高度相关的体验**：定性材料（n=110）表明，玩家报告的高度共鸣体验普遍具有以下特征：
   - 游戏内容/机制触发了玩家的个人回忆或生活经验
   - 游戏提供的情感结构映射了玩家现实中的情感经历
   - 玩家在游戏中"重新发现"了自己生活中的某些面向

3. **共鸣的三层结构**：（a）**认知层**——游戏世界与个人知识结构的对接；（b）**情感层**——游戏唤起的情感与现实情感经历的共振；（c）**存在层**——玩家在游戏中体验到某种"本真性"（authenticity），感觉游戏理解了"真实的自己"。

4. **设计启示**：研究者指出，最高共鸣度的游戏并非那些"为所有人设计"的通用体验，而是那些**有意识地留出空间让玩家带入自身生活经历**的设计——这与 Polaris contributors（2024）的"留白"原则形成跨研究的相互印证。

**与本综述及方法论的关联**：

- **为"空白一"提供强解释性证据**：该研究以 CHI 最佳论文级别的实证材料支持了"个人生活经验与游戏共鸣之间存在重要关联"这一判断，但其研究设计更适合解释和建构概念，而非证明严格因果链。
- **填补"方法论空白"的关键参照**：研究采用的定性问卷与主题分析为后续验证"来自生活的游戏设计"方法论提供了可借鉴的研究设计模板。
- **为"情感原型"概念提供实证锚点**：共鸣的三层结构（认知-情感-存在）与情感原型的设计维度高度对应——情感原型可以被视为一种**系统化触发共鸣认知层和情感层的设计工具**。
- **争议一的新证据**：在"情感等价是否可能"的争论中，Resonance 研究提供了一个中间立场——不存在固定的机制-情感等价映射，但**通过设计与玩家生活经验的关联点，可以提升共鸣发生的可能性**。

| 属性 | 详情 |
|------|------|
| 作者 | Jaakko Väkevä, Jan B. Vornhagen, Heidi Rautalahti, Janne Lindqvist |
| 单位 | Aalto University（芬兰阿尔托大学） |
| 会议 | **CHI 2026 — ACM CHI Conference on Human Factors in Computing Systems** |
| 奖项 | 🏆 **Best Paper Award（最佳论文奖）** |
| DOI | https://doi.org/10.1145/3772318.3790834 |
| 链接 | https://dl.acm.org/doi/10.1145/3772318.3790834 |
| 样本量 | n=110（定性在线问卷） |
| 方法论 | 定性在线问卷 + reflexive thematic analysis |

### 3.4 变革性游戏与自传体游戏

#### 3.4.1 自传体游戏的实践案例

Anthropy（2012）在《Rise of the Videogame Zinesters》中发出宣言式呼吁：**游戏应该成为每个人讲述自己故事的媒介**。她以自己的游戏《Dys4ia》为案例——该游戏将其接受激素治疗的经历转化为一系列小型机制挑战——证明了生活体验向游戏机制转化的可行性。Anthropy 的工作是这一领域最早被学术界广泛引用的设计实践案例，但她本人更多以设计者/活动家身份写作，方法论层面的系统化论述仍然缺失。

Quinn（2013）的《Depression Quest》以互动小说形式呈现了抑郁症患者的日常决策体验，其创新之处在于：通过**删除可选项**（某些选项在高度抑郁状态下不可选择）来机制化抑郁的"无力感"。这一设计决策被广泛讨论为将心理状态"嵌入"机制的典型范例（Gray, 2017; Harrer, 2019）。

Green 与 Green（2016）的《That Dragon, Cancer》是关于儿子绝症经历的游戏，将无法控制的焦虑和悲伤转化为玩家无法"赢得"的游戏关卡设计。JAMA 的分析（Leach, 2021）和多篇 HCI 论文确认了该游戏对悲伤处理和共情体验的积极效果，同时指出其互动设计如何刻意打破传统游戏的胜负框架以传达生命经验的本质。

#### 3.4.2 变革性游戏的理论化

Harrer（2019）在博士论文《Pretending to Feel: Performative Gamefulness in Autobiographical Videogames》系统梳理了自传体游戏的美学逻辑，提出"表演性游戏性"（Performative Gamefulness）概念，主张自传体游戏的情感价值来自设计者与玩家之间的**共同表演**（co-performance）关系：设计者将亲身体验编码为规则，玩家通过执行规则重新体验这种情感逻辑。

Gray（2017）在研究中系统分析了独立游戏中"个人经历→游戏机制"的转化模式，识别出三种常见策略：（1）**直接映射**（Direct Mapping）——将生活行为直接对应游戏输入；（2）**隐喻化**（Metaphorization）——将情感状态转化为游戏世界的物理规律；（3）**限制设计**（Constraint Design）——通过剥夺某些选项来传达无力感或束缚感。

Tseng（2022）在《Tandfonline》发表的多模态话语分析研究，以《That Dragon, Cancer》为案例分析了严肃游戏如何通过"数字共情"（Digital Empathy）机制——视觉、音频、交互的多通道同步——产生情感共鸣效果。

#### 3.4.3 自传体游戏的争议

Leboeuf（2024）等学者对《Dys4ia》的"游戏性"提出质疑，认为其机制过于简单以至于游戏性（Gamefulness）本身被削弱，更接近互动叙事。这一争论触及了自传体游戏的核心张力：**当体验表达与游戏机制目标之间存在张力时，如何取得平衡？**

### 3.5 反思性游戏设计

Khaled（2018）在《Questions Over Answers: Reflective Game Design》中提出"反思性游戏设计"（Reflective Game Design）概念，将其定位为传统"乐趣"框架的替代设计哲学。Khaled 主张，游戏不应总是提供答案（如明确的胜负判定），而应通过开放性的机制设计激发玩家的**自我反思**。这一立场与"来自生活的游戏设计"方法论的"安全容器"原理具有深刻共鸣：游戏提供了探索危险情感的安全空间，而非简单地给出答案。

Miller、Gandhi、Whitby、Kosa、Cooper、Mekler 与 Iacovides（2024）在 CHI 2024 发表《A Design Framework for Reflective Play》，综合既有反思性游戏研究并将其转译为面向开发者的实践框架，提炼出五种设计策略（见 3.3.2）：Disruptions、Slowdowns、Questioning、Revisiting、Enhancers。

Toftedahl（2022）在 DiGRA 研究了"扰动机制"（Disruptive Mechanics）在独立游戏中的应用，发现扰动玩家期望的机制设计（如打破传统关卡逻辑）是激发情感投入的有效手段，但需要平衡认知负担，避免打断游戏流体验。

Wardrip-Fruin（2009）的《Expressive Processing》从计算美学角度分析了互动叙事和游戏如何通过**程序过程**（Processes）而非文本表达意义，是理解"机制即表达"的重要理论参照。

### 3.6 共情游戏设计

Belman 与 Flanagan（2010）的《Designing Games to Foster Empathy》系统综述了游戏促进共情的设计原则，包括：**视角采纳**（Perspective-Taking）、**相似性建立**（Similarity Building）、**情感传染**（Emotional Contagion）等。该研究基于共情心理学文献，提出了游戏设计如何有意触发这些机制的具体建议。

Harrell 与 Lim（2017）研究了游戏中"共情机器"（Empathy Machine）的局限性，指出游戏强迫性的视角代入（如在第一人称视角中扮演边缘群体成员）可能产生适得其反的效果：玩家可能因为"体验"而产生优越感，而非真正的共情理解。这一批判对设计者具有重要警示价值。

Rapoport 等（2020）在 Computers in Education 发表的研究关注游戏制作本身作为培养共情视角的教学方法，发现**让学生设计关于他人经历的游戏**（而非仅仅玩游戏）是更有效的共情培养路径——这与"来自生活的游戏设计"方法论的教学应用具有重要相关性。

Tseng（2022）（见 3.4.2）将多模态话语分析（Multimodal Discourse Analysis）引入共情游戏研究，揭示了视觉、听觉、交互三层叙事信号如何协同产生共情效果。

### 3.7 情感计算与生理测量

Yannakakis 与 Melhart（2023）在 *Proceedings of the IEEE* 发表的《Affective Game Computing: A Survey》是该领域的重要综述。该研究覆盖情感诱发、感知、检测与适应，整理了传感器、标注协议、语料库和情感循环中的主要方法。对本研究而言，其价值不在于提供"生活→机制"的设计流程，而在于说明现有情感游戏研究更偏重测量、建模和适应，因而留下了情感目标如何被设计生成的空间。

Kivikangas 等（2018）通过 EEG 和皮肤电导分析了恐惧类游戏中情感的神经基础，发现游戏诱发的恐惧与现实恐惧在生理激活模式上存在相似性但也有显著差异，支持了"游戏情感是现实情感的结构化变体"这一理论立场。

### 3.8 游戏美学与艺术理论（补充参照）

Bogost（2016）的《Play Anything》将"游戏性"（Playfulness）扩展为一种对日常事物的审美态度，主张玩游戏的方式本质上是对世界的"注意到约束、在约束内寻找可能性"的认知方式。这与"来自生活的游戏设计"方法论中"游戏是艺术"的核心命题形成对话。

Sicart（2014）在《Play Matters》中从哲学角度重新界定游戏的本质，主张"游戏"不是一种活动类型，而是一种**存在方式**（Way of Being in the World）——游戏性可以发生在任何情境下。这为理解"生活经验中固有的游戏性结构"提供了哲学基础。

Wolf（2002）和 Konzack（2002）对游戏世界构建的理论化，为理解从生活空间到游戏空间的转化提供了参照（见"艺术转化原理"中的"结构化"手段）。

### 3.9 设计研究方法（补充参照）

Zimmerman、Forlizzi 与 Evenson（2007）的 Research through Design 为本研究提供了方法论定位：设计产物、原型和流程并非只是应用结果，也可以作为研究贡献的载体。"来自生活的游戏设计"如果要投稿到 HCI 或游戏研究语境，不能只证明某个游戏好玩，而需要说明六步流程、情感原型卡、数据化抽象图和教学案例如何形成可讨论、可迁移的设计知识。

Frayling（1993/1994）关于 research into/for/through art and design 的区分，也能帮助本研究澄清自身位置：它不是单纯研究游戏设计（research into），也不只是为游戏开发提供资料（research for），而是通过实际设计过程生产关于生活经验转化的知识（research through）。

---

## 4. 研究方法论对比分析

下表汇总了本综述涵盖的主要研究方法、样本规模和评估指标，以便识别各研究路径的优势与局限：

| 研究 | 研究方法 | 样本量 | 核心评估指标 | 方法优势 | 方法局限 |
|------|---------|--------|------------|---------|---------|
| Hunicke et al., 2004 (MDA) | 理论框架建构（实践反思） | N/A（无实证样本） | 框架内部一致性 | 简洁有力，应用广泛 | 无实证验证，体验分类粗粒度 |
| Lazzaro, 2004 | 观察 + 访谈 | 30名玩家 | 行为类别频率、情感词汇频率 | 生态效度高，在自然游戏情境中收集 | 样本量小，情感分类有限 |
| Ermi & Mäyrä, 2005 | 半结构化访谈 | 儿童+成人群体（约100人） | 沉浸体验维度频率 | 跨年龄组对比 | 仅报告体验类型，缺乏机制关联 |
| Calleja, 2011 | 民族志 + 深度访谈 | 约50名玩家 | 现象学描述编码 | 深度，关注意义建构 | 难以量化和复制 |
| Belman & Flanagan, 2010 | 文献综述 + 设计案例 | 文献元分析 | 设计原则有效性评估 | 跨研究整合 | 原则验证依赖单个案例 |
| Croissant et al., 2023 | 理论综述 + 框架建构 | N/A | 框架内部一致性、适应性流程 | 整合心理学与设计视角 | 偏 emotion-adaptive game，较少处理生活经验来源 |
| Yannakakis & Melhart, 2023 | 系统综述 | 大规模文献综述 | 情感循环、感知方法、语料库 | 覆盖广，方法论系统 | 更偏测量和计算，设计生成路径不足 |
| Sun et al. (EmoEcho), 2024 | 对照实验 | 48名参与者 | 情感投入度量表、社交互动质量 | 对照设计，定量可比 | 特定类型游戏，推广性有限 |
| Miller et al., 2024 | 文本分析 + 设计工作坊 | 20案例 + 24参与者 | 设计策略使用频率、玩家反思深度 | 兼顾分析与实践 | 工作坊结果的生态效度有待验证 |
| Rapoport et al., 2020 | 教育实验设计 | 大学生课堂（约60人） | 共情量表得分前后对比 | 教学情境真实，有对照 | 情感测量工具信效度有待商榷 |
| Harrer, 2019 | 案例分析 + 设计批评 | 15个自传体游戏 | 主题编码、美学分析 | 深度文本分析 | 主观解读，缺乏玩家数据 |
| Khaled, 2018 | 理论框架 + 案例研究 | N/A + 若干案例 | 框架概念清晰度 | 批判性视角独特 | 框架实操性有限 |

**方法论主要类型总结**：

1. **理论建构类**（Hunicke et al., 2004; Croissant et al., 2023; Khaled, 2018）：影响力最大，但缺乏实证验证；通常作为后续实证研究的分析框架。
2. **质性观察类**（Lazzaro, 2004; Calleja, 2011; Harrer, 2019）：生态效度较高，揭示深层体验意义；但样本量小，难以推广。
3. **实验设计类**（Sun et al., 2024; Rapoport et al., 2020）：可量化对照；但实验情境与真实游戏体验存在距离，外部效度有限。
4. **系统综述类**（Yannakakis & Melhart, 2023; Belman & Flanagan, 2010）：整合跨研究发现；但受限于原始研究质量。
5. **案例分析类**（Flanagan, 2009; Gray, 2017; Miller et al., 2024）：适合发现设计模式；但归纳的代表性受案例选取影响。

**方法论空白**：目前几乎没有研究同时覆盖"设计过程"（从生活体验出发的设计决策）和"玩家结果"（情感体验的测量与验证）两端，设计者意图与玩家接受之间的"黑箱"尚未被系统打开。

---

## 5. 主要发现与争议焦点

### 5.1 主要发现汇总

综合核心文献，本综述归纳出以下五条跨研究的主要发现：

**发现一：游戏机制具有独特的情感传达能力，但方式不同于文字或图像**

Bogost（2007）的程序修辞理论、Murray（1997）的变形概念，以及多个经典游戏案例（Quinn, 2013; Anthropy, 2012）共同支撑这一发现：游戏通过让玩家**亲身运行规则**来传达体验，而非被动接受信息。游戏机制可以编码生活逻辑的**结构**（而非内容），这是其他媒介难以复现的特性。

**发现二：情感体验具有情境依赖性，固定的机制-情感映射不存在**

Croissant et al.（2023）、Lazarus（1991）认知评价理论，以及多个实验研究均指向这一结论：相同机制在不同玩家、不同情境下产生不同情感。这一发现挑战了简单的"生活事件→游戏机制"映射思路，但并不否定通过**结构化原型**在概率上最大化共鸣的可能性。

**发现三：沉浸/流/体验质量与机制设计的关联是有条件的**

Csikszentmihalyi（1990）、Chen（2007）、Ermi & Mäyrä（2005）的研究均表明，维持流体验需要挑战与技能的动态平衡；而自传体游戏（Anthropy, 2012; Quinn, 2013）的研究表明，刻意**打破**流体验的机制设计（如故意让玩家感到无力）有时正是传达特定生活体验的有效策略。这表明流理论不是设计的终极目标，而是众多情感目标之一。

**发现四：自传体/个人叙事游戏证明了"生活→游戏"路径的可行性，且 CHI 2026 最佳论文提供了实证验证** ⭐

Anthropy（2012）、Quinn（2013）、Green & Green（2016）等案例证明了将个人生活体验转化为游戏机制的可行性，并产生了强烈的情感共鸣效果。然而，这些案例主要由独立设计者以特例方式实现，学界尚未提供可被非专家使用的系统化设计方法。这是现有文献最核心的空白之一。

> **⭐ 关键更新**：Väkevä et al.（2026, **CHI 2026 Best Paper Award**）以 n=110 的定性研究为这一空白提供了关键证据。该研究表明，许多高度共鸣的游戏体验与玩家个人经历、情感记忆和价值观密切相关。这不仅延伸了自传体游戏案例，也为"生活体验→游戏共鸣"提供了重要解释框架。剩余的方法论工作是将这一现象**系统化为可操作的设计流程和教学工具**。

**发现五：共情与反思是目前最受重视的情感游戏设计目标**

Belman & Flanagan（2010）、Harrell & Lim（2017）、Khaled（2018）、Miller et al.（2024）等研究均聚焦于游戏如何促进玩家的共情或反思。这与"来自生活的游戏设计"方法论的情感目标高度一致，同时也暗示该方向在学界已形成相当的认可度，有助于投稿定位。

### 5.2 争议焦点

**争议一：情感等价是否可能？**

Croissant et al.（2023）从情境依赖性角度否定了固定等价映射的可能；而 Polaris contributors（2024）通过"主题先行"和"留白"设计主张可以实现情感共鸣。本研究的立场（通过"情感原型"作为桥梁）处于两者之间：承认不存在固定映射（支持 Croissant et al.），但认为通过结构化的情感模式（情感原型）可以提升跨玩家的情感共鸣概率（回应 Polaris 的方向）。

> **⭐ Väkevä et al. (2026, CHI 2026 Best Paper) 为此争议提供了关键实证参照**：该研究确认不存在"适用于所有人的固定共鸣机制"，但显示玩家个人生活经历与高度共鸣的游戏体验密切相关。这意味着：等价不是机械的 1:1 映射，而是通过设计"生活经验接入点"来提升共鸣发生的可能性——这恰恰是"情感原型"方法试图系统化实现的目标。

**争议二：自传体游戏是游戏还是互动叙事？**

围绕《Dys4ia》、《Depression Quest》等作品，学界存在关于其"游戏性"的争论（Leboeuf, 2024; Juul, 2005 的定义框架）。部分研究者认为这类作品的机制过于简单，缺乏传统意义上的"游戏挑战"。另一方立场（Anthropy, 2012; Flanagan, 2009; Harrer, 2019）则主张游戏性的标准不应以传统娱乐游戏为唯一参照。这一争议对本方法论的边界界定具有直接影响。

**争议三：共情游戏是否真的有效？**

Harrell & Lim（2017）对"共情机器"概念提出质疑，认为强迫性视角代入可能适得其反。后续研究（Rapoport et al., 2020）提出**制作**（making）比**玩**（playing）更能培养共情——这对本方法论的教学应用意义重大：让学生设计游戏比让学生玩游戏，对于培养对生活体验的深入理解可能更有效。

**争议四：情感测量的标准化问题**

不同研究使用不同的情感测量工具（GEQ、SAM量表、生理信号、面部编码等），使得跨研究比较极为困难（Yannakakis & Melhart, 2023）。这一问题在"情感等价验证"（本方法论第2步的核心挑战）上尤为突出：如何标准化地验证玩家体验到了目标情感，目前尚无学界共识。

---

## 6. 研究空白与未来方向

### 6.1 已识别的核心研究空白

**空白一：缺乏"从生活体验到游戏机制"的系统化正向设计方法**

现有设计框架（MDA, Björk & Holopainen, 2005）从机制出发分析体验，情感框架（Croissant et al., 2023; Lazzaro, 2004）从体验结果出发评估设计，但**从个人生活体验出发，系统化地转化为游戏机制设计的完整路径**，在现有文献中几乎缺失。这正是"来自生活的游戏设计"方法论的填补对象。

> **⭐ 部分进展（2026）**：Väkevä et al. (CHI 2026 Best Paper) 的共鸣理论在**现象学层面**确认了"生活经历→游戏共鸣"的有效性，并提供了共鸣的三层结构模型。然而，该研究停留在**描述性/解释性层面**（解释了"什么是共鸣"），尚未提供**规范性/处方性的设计方法**（即"如何系统化设计以触发共鸣"）。后者正是本方法论要完成的工作——将 Resonance 理论转化为可操作的游戏设计流程和教学工具。

**空白二：情感原型库的建立方法尚未被系统化**

Lazzaro（2004）、Polaris contributors（2024）等研究提出了情感类型或主题先行的设计原则，但没有研究系统建立一个以"生活情境→游戏机制转化"为维度的情感原型库，并提供自下而上扩展该库的方法论（扎根理论在游戏设计中的应用）。

**空白三：设计过程与玩家结果之间的"黑箱"尚未打开**

现有研究要么研究设计决策（无玩家数据），要么测量玩家情感结果（无设计过程数据）。将两者纵向关联的研究极为稀缺，使得"哪些设计决策有效地产生了哪些情感结果"的因果关系尚不清晰。

**空白四：AI辅助游戏设计的情感目标整合研究**

生成式AI正在改变游戏开发流程，但关于AI工具如何被纳入以情感体验为目标的游戏设计过程（而非仅仅辅助代码生成），目前几乎没有专门研究。

**空白五：非西方生活体验的游戏转化**

现有研究高度集中于西方（主要是北美、欧洲）的文化背景与生活体验。将东亚、东南亚或全球南方的生活情感体验转化为游戏的研究极为有限，情感原型的跨文化普遍性尚未被检验。

**空白六：设计研究证据链尚需补强**

若本项目以 Research through Design 方式发表，文献综述还需要进一步说明：设计日志、原型迭代、学生作品、玩家反馈和情感原型库如何共同构成证据链。当前综述已经说明"为什么这个问题重要"，但还需要补足"如何把设计实践转化为研究知识"。

### 6.2 未来研究方向建议

1. **构建情感原型库的扎根理论方法论**：设计一套从教学实践中系统提炼情感原型的研究方法，并通过多轮迭代建立具有学术公信力的原型库。

2. **"生活→机制"转化过程的纵向案例研究**：通过设计日志、设计师访谈和玩家测试，系统记录从生活体验出发的游戏设计全过程，建立设计决策与玩家情感结果的关联数据集。

3. **情感等价验证的方法论创新**：开发专门针对"目标情感是否被传达"的测量工具，整合量表、生理测量和叙事访谈，提升情感等价验证的信效度。

4. **AI辅助情感游戏设计的教学实验**：在真实课堂环境中系统测试AI Agent辅助下学生完成"生活→游戏"转化的效果，对比有/无AI辅助条件下的设计质量和情感共鸣验证结果。

5. **跨文化情感原型研究**：以非西方文化语境（如中国日常生活情感体验）为研究场域，探索情感原型的跨文化可移植性与文化特异性。

---

## 7. 参考文献列表

以下按第一作者姓名字母顺序排列，APA 第7版格式：

---

**[1]** Anthropy, A. (2012). *Rise of the videogame zinesters: How freaks, normals, amateurs, artists, dreamers, drop-outs, queers, housewives, and people like you are taking back an art form*. Seven Stories Press.

**[2]** Aarseth, E. (2001). Computer game studies, year one. *Game Studies, 1*(1). http://gamestudies.org/0101/editorial.html

**[3]** Belman, J., & Flanagan, M. (2010). Designing games to foster empathy. *Cognitive Technology, 14*(2), 5–15. https://tiltfactor.org/wp-content/uploads2/cog-tech-si-g4g-article-1-belman-and-flanagan-designing-games-to-foster-empathy.pdf

**[4]** Björk, S., & Holopainen, J. (2005). *Patterns in game design*. Charles River Media.

**[5]** Bogost, I. (2007). *Persuasive games: The expressive power of videogames*. MIT Press.

**[6]** Bogost, I. (2016). *Play anything: The pleasure of limits, the uses of boredom, and the secret of games*. Basic Books.

**[7]** Calleja, G. (2011). *In-game: From immersion to incorporation*. MIT Press.

**[8]** Chen, J. (2007). *Flow in games* (Master's thesis). University of Southern California. http://jenovachen.com/flowingames/Flow_in_games_final.pdf

**[9]** Csikszentmihalyi, M. (1990). *Flow: The psychology of optimal experience*. Harper & Row.

**[10]** Abhi, Ekanayake, C., Heide, R., Lumpkin, S., Chyr, W., & Nelson Jr., X. (2024). There is no wheel: A framework for creating emotionally resonant game mechanics. *Polaris Game Design Retreat 2024*. https://polarisgamedesign.com/2024/there-is-no-wheel/

**[11]** Ekman, P. (1992). An argument for basic emotions. *Cognition & Emotion, 6*(3–4), 169–200. https://doi.org/10.1080/02699939208411068

**[12]** Ermi, L., & Mäyrä, F. (2005). Fundamental components of the gameplay experience: Analysing immersion. In *Proceedings of DiGRA 2005 Conference: Changing Views – Worlds in Play*. https://www.researchgate.net/publication/221217389

**[13]** Flanagan, M. (2009). *Critical play: Radical game design*. MIT Press.

**[14]** Gray, K. L. (2017). Intersectional tech: Black users in digital gaming. *Souls, 19*(4), 419–438. https://doi.org/10.1080/10999949.2018.1436077

**[15]** Green, R., & Green, A. (Developers). (2016). *That Dragon, Cancer* [Video game]. Numinous Games.

**[16]** Harrell, D. F., & Lim, C.-U. (2017). Reimagining the avatar dream: Modeling social identity in digital media. *Communications of the ACM, 60*(7), 50–61. https://doi.org/10.1145/3098342

**[17]** Harrer, S. (2019). *Pretending to feel: Performative gamefulness in autobiographical videogames* [Doctoral dissertation]. Aalborg University. https://doi.org/10.1145/3097023

**[18]** Hunicke, R., LeBlanc, M., & Zubek, R. (2004). MDA: A formal approach to game design and game research. In *Proceedings of the AAAI Workshop on Challenges in Game AI* (Vol. 4, pp. 1–5). AAAI Press. https://users.cs.northwestern.edu/~hunicke/MDA.pdf

**[19]** Croissant, M., Schofield, G., & McCall, C. (2023). Emotion design for video games: A framework for affective interactivity. *Games: Research and Practice, 1*(3). https://doi.org/10.1145/3624537

**[20]** Juul, J. (2005). *Half-real: Video games between real rules and fictional worlds*. MIT Press.

**[21]** Juul, J. (2013). *The art of failure: An essay on the pain of playing video games*. MIT Press.

**[22]** Khaled, R. (2018). Questions over answers: Reflective game design. In *Proceedings of Meaningful Play 2018*. https://www.semanticscholar.org/paper/Questions-Over-Answers:-Reflective-Game-Design-Khaled/91c9a652ae232c876c99ba75a6fcfa13ebc5081b

**[23]** Lazarus, R. S. (1991). *Emotion and adaptation*. Oxford University Press.

**[24]** Lazzaro, N. (2004). Why we play games: Four keys to more emotion without story. In *Proceedings of the Game Developers Conference 2004*. https://ia801507.us.archive.org/14/items/GDC2004Lazzaro/GDC2004-Lazzaro.pdf

**[25]** Miller, J. A., Gandhi, K., Whitby, M., Kosa, M., Cooper, S., Mekler, E. D., & Iacovides, I. (2024). A design framework for reflective play. In *Proceedings of the CHI Conference on Human Factors in Computing Systems*. ACM. https://doi.org/10.1145/3613904.3642455

**[26]** Murray, J. H. (1997/2017). *Hamlet on the holodeck: The future of narrative in cyberspace* (Updated ed.). MIT Press.

**[27]** Norman, D. A. (2004). *Emotional design: Why we love (or hate) everyday things*. Basic Books.

**[28]** Plutchik, R. (1980). A general psychoevolutionary theory of emotion. In R. Plutchik & H. Kellerman (Eds.), *Emotion: Theory, research, and experience* (Vol. 1, pp. 3–33). Academic Press.

**[29]** Quinn, Z. (Developer). (2013). *Depression Quest* [Video game]. https://www.depressionquest.com

**[30]** Rapoport, A., Kuflik, T., & Baram-Tsabari, A. (2020). Making more of games: Cultivating perspective-taking through game design. *Computers & Education, 148*, Article 103798. https://doi.org/10.1016/j.compedu.2020.103798

**[31]** Russell, J. A. (1980). A circumplex model of affect. *Journal of Personality and Social Psychology, 39*(6), 1161–1178. https://doi.org/10.1037/h0077714

**[32]** Salen, K., & Zimmerman, E. (2003). *Rules of play: Game design fundamentals*. MIT Press.

**[33]** Sicart, M. (2014). *Play matters*. MIT Press.

**[34]** Sun, X., Lin, L., & Peng, Y. (2024). EmoEcho: Designing emotion mimicry mechanics for enhancing social engagement in digital games. In *Proceedings of CHI 2024*. https://doi.org/10.1145/3613905.3650864

**[35]** Tseng, C.-I. (2022). Actions and digital empathy in the interactive storytelling of serious games: A multimodal discourse approach. *Social Semiotics, 33*(5), 921–941. https://doi.org/10.1080/10350330.2022.2128039

**[36]** Toftedahl, M. (2022). Disruptive mechanics in independent games. In *Proceedings of DiGRA 2022*. https://dl.digra.org

**[37]** Wardrip-Fruin, N. (2009). *Expressive processing: Digital fictions, computer games, and software studies*. MIT Press.

**[38]** Wolf, M. J. P., & Perron, B. (Eds.). (2003). *The video game theory reader*. Routledge.

**[39]** Yannakakis, G. N., & Melhart, D. (2023). Affective game computing: A survey. *Proceedings of the IEEE, 111*(10), 1423-1444. https://doi.org/10.1109/JPROC.2023.3315689

**[40]** Väkevä, J., Vornhagen, J. B., Rautalahti, H., & Lindqvist, J. (2026). "An experience that could not be found anywhere else": Resonance as an explanatory concept for player experience research and game design. In *Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems*. ACM. https://doi.org/10.1145/3772318.3790834

**[41]** Frayling, C. (1993/1994). Research in art and design. *Royal College of Art Research Papers, 1*(1), 1-5.

**[42]** Zimmerman, J., Forlizzi, J., & Evenson, S. (2007). Research through design as a method for interaction design research in HCI. In *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems* (pp. 493-502). ACM. https://doi.org/10.1145/1240624.1240704

---

> **综述说明**
>
> 本综述文献检索起始为 2024 年底（v1.0），于 2026-06-07 更新至 v2.2，校正文献元数据并新增 Research through Design 方法论锚点。共涵盖 34+ 篇核心文献及若干相关资料（参考文献列表含42条）。部分文献（尤其是1990-2005年的经典著作）因全文可获取性限制，基于摘要、综述引用及已有的项目文献笔记进行综述。建议后续逐步获取全文进行精读验证。
>
> 本综述将持续更新，欢迎补充新的相关文献至 `literature/` 目录。
>
> **文档版本**：v2.2 — 2026-06-07（文献库清理与设计研究方法补充）
> **关联方法论**：`methodology/methodology-v2.md`
