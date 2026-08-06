# 来自生活的游戏设计

> 游戏是艺术，创新源于生活。

本项目是一个关于"来自生活的游戏设计"方法论的研究仓库，包含学术论文、文献整理、教学材料等内容。

- **线上网站**：https://xingchen-ian.github.io/game-design-from-life/
- **夏令营站点**：https://xingchen-ian.github.io/domain-learning-camp/（62 个学生作品可在线试玩）
- **仓库可见性**：PUBLIC（2026-08-06 曾短暂转私有后恢复公开）

## 项目总览

- **本地网页入口**：[docs/project-index.html](./docs/project-index.html) — 项目总览索引，汇总研究、方法论、课程证据、文献库和展示页面。
- **公开展示首页**：[docs/index.html](./docs/index.html) — 面向汇报和对外沟通的项目介绍。
- **论文主框架**：[PAPER_FRAMEWORK.md](./PAPER_FRAMEWORK.md) — V02.1 双路径方法论论文框架。
- **方法论权威说明**：[methodology/methodology-v2.md](./methodology/methodology-v2.md) — 研究、教学、创作三用的 V02.1 方法文档。

## 核心理念

本项目的关键框架更新是：**“来自生活的游戏设计”不是单一路径，而是一个总方法论。** 真实生活经验既可以表现为情感事件，也可以表现为进入某个真实领域时发生的认知变化和技能学习。

**总框架**：

```
真实生活经验
├── 情感经验路径：生活事件 → 情感结构/情感原型 → 挑战空间设计 → 游戏机制
└── 领域学习路径：领域学习 → 认知/技能结构 → 挑战空间设计 → 游戏机制
```

**情感经验路径**：
```
现实生活过程 → 提取核心情感 → 转化为游戏语言(玩家输入 + 挑战设计) → 游戏过程体验
```

情感是这一路径的桥梁：指导如何将现实的输入/挑战转化为游戏的输入/挑战，实现情感层面的等价转换。

**领域学习路径**：
```
领域学习体验 → 新手/高手认知差异 → 技能与反馈结构 → 挑战空间设计 → 游戏机制
```

这一路径面向帆船、攀岩、摄影、急救、咖啡、城市骑行等真实领域。它关注的不是知识问答，也不是题材换皮，而是让玩家体验“开始看懂一个领域”的过程。
其中“挑战空间设计”用于把风向、风力、浪、洋流、路径、时间压力等系统因素组合成关卡、任务和学习曲线。

## 项目结构

```
.
├── README.md                          # 本文件
├── PAPER_FRAMEWORK.md                 # 学术论文主框架
├── research_report_queue_game_design.md # 排队游戏设计研究报告
├── docs/                              # 本地/公开展示网页
│   ├── project-index.html             # 项目总览索引
│   ├── index.html                     # 展示首页
│   ├── practice.html                  # 设计实践
│   ├── domain-learning.html           # 领域学习路径课堂网页
│   ├── research.html                  # 课程研究档案
│   └── paper.html                     # 论文阅读页
├── methodology/                       # V02.1 方法论与课堂工具
│   ├── methodology-v2.md              # 双路径方法论权威说明
│   ├── design-questions.md            # 中文问题清单
│   ├── design-questions-en.md         # 英文问题清单
│   ├── domain-learning-to-game-system.md # 领域学习路径方法说明
│   ├── domain-learning-design-questions.md # 领域学习学生问题清单
│   ├── domain-learning-design-questions-en.md # 领域学习英文学生问题清单
│   ├── domain-learning-design-questions-google-form.gs # 领域学习 Google Form 脚本
│   ├── domain-learning-design-questions-google-form.md # 领域学习 Google Form 使用说明
│   ├── emotion-prototypes.md          # 情感原型库
│   ├── lovart-card-prompts/           # 桌游原型牌提示词与数据
│   └── printable/                     # 可打印课堂讲义
├── course-tracking/                   # 课程追踪与学生项目证据
│   ├── analysis-framework.md          # 项目分析框架
│   ├── student-repos.md               # 学生仓库索引
│   ├── system-design-summaries.md     # 系统设计图摘要
│   ├── weekly-progress.md             # 周进展记录
│   └── canva-screenshots/             # 学生系统设计图截图
├── literature/                        # 文献库
│   ├── README.md                      # 文献索引
│   ├── literature-review-game-mechanics-lived-experience.md
│   ├── foundational/
│   ├── affective-design/
│   ├── transformational-games/
│   ├── hci-player-experience/
│   └── design-research/
└── design-journal/                    # 设计日志模板与记录入口
```

## 情感原型示例

| 原型 | 生活场景 | 游戏转化 |
|------|---------|---------|
| 绝处逢生 | 绝境中找到出路 | 背水一战机制 |
| 三顾茅庐 | 反复尝试后成功 | Roguelike进步机制 |
| 遗憾 | 错过机会的后悔 | 不可逆选择 |
| 惊喜 | 意外发现的美好 | 隐藏内容设计 |

[查看完整的情感原型库 →](./methodology/emotion-prototypes.md)

## 文献资源

已整理的核心文献：

1. **Rules of Play** - Salen & Zimmerman, 2003
   - 游戏设计奠基性教材
   - "有意义游戏"框架

2. **Emotion Design for Video Games** - 2023
   - 情感交互设计框架
   - 情感设计的系统性方法

3. **Reflective Play Framework** - CHI 2024
   - 反思性游戏设计
   - 游戏促进反思的机制

[查看完整文献库 →](./literature/)

## 使用指南

### 对于研究者

1. 阅读 [PAPER_FRAMEWORK.md](./PAPER_FRAMEWORK.md) 了解论文结构
2. 查阅 [literature/](./literature/) 获取相关文献
3. 参考 [methodology/](./methodology/) 了解方法论细节

### 对于教师

1. 使用情感原型库设计课程内容
2. 参考设计流程组织工作坊
3. 使用 `methodology/domain-learning-to-game-system.md` 和 `docs/domain-learning.html` 组织“从领域学习到游戏系统”的高中生夏令营
4. 根据案例研究准备教学材料

### 对于学生/设计师

1. 从生活中识别情感体验
2. 在情感原型库中找到对应原型
3. 按照设计流程转化为游戏机制
4. 测试并迭代
5. 如果从真实领域学习出发，则先比较新手/高手差异，再设计技能反馈循环和挑战空间

## 贡献

本项目持续更新中。欢迎通过以下方式参与：

- 补充新的情感原型
- 分享应用案例
- 提供文献推荐
- 反馈使用体验

## 许可

[待确定]

## 联系

[待添加]

---

*最后更新：2026-07-05*
