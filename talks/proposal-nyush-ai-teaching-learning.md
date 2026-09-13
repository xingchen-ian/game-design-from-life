# Proposal：NYU Shanghai「AI & Teaching & Learning」系列

> 提交对象：Office of Academic Affairs + Library 全年的 faculty 分享系列
> 提交方式：Google Form
> 对应演讲：19 页版《Prompt？不，是系统描述！》（`/Users/xz33/Documents/NYU/AI_GameCreator/presentation.html`）
> 撰写日期：2026-09-05

---

## 表单建议填法（摘要以外的字段）

| 字段 | 建议内容 |
|------|---------|
| **Title** | Not a Prompt, a System Description: What's Left to Teach When AI Can Build |
| **Presenter** | Xingchen Zhang (张星晨), Assistant Professor of Arts, Interactive Media Arts; Deputy Director, Digital Heritage Lab, NYU Shanghai |
| **Format** | Presentation（20 分钟报告 + 10 分钟问答）；备选：60–75 分钟工作坊 |
| **Audience** | 全校教师，不限技术背景、不需编程经验 |
| **Tech needs** | 投影 + 网络（学生作品在线可玩，含 45 秒 showreel） |

---

## Abstract（英文主版 — 精简版）

The bottleneck is not the model: 10,400 single-pass attempts to generate Unity code produced zero runnable builds; frontier coding agents scored 41% on complete playable games. Generating code is not delivering a designed system. So what is left to teach?

That students need not better prompting but the ability to write a **system description** — a structured specification of variables, rules, feedback, and intended experience. A game is not described; it is specified.

Two NYU Shanghai IMA summer offerings tested this. In a high-school program, 60 students with no coding background built 50+ playable browser games in three sessions — each first writing a brief and a hand-drawn system graph setting the novice misconception ("point the boat at the goal") against expert judgment ("read the wind"). In a university course the same pipeline started from lived experience instead: *The Darkroom* turned "photos never capture what you actually saw" into four variables, 51 scripts, and 72 logged human–AI interactions.

Three things transfer. Structuring what you know well enough to specify it is a foundational literacy, teachable in three sessions. The development log (request / AI response / student decision) doubles as an assessment instrument, making the boundary between human judgment and AI execution inspectable. And judgment stays human: one student went back to ask whether the rebuilt game still expressed the feeling they started from — a question AI will not ask for you.

---

## Abstract（备用长版，约 285 words — 若表单允许且想多给细节）

Recent benchmarks suggest the bottleneck is not the model: 10,400 single-pass attempts to generate Unity code yielded zero runnable builds; frontier coding agents scored 41% on complete, playable games. Generating code is not delivering a designed system. So what is left to teach?

This session argues students need not better prompting but the ability to write a **system description** — a structured specification of a system's variables, rules, feedback, and intended experience. A game is not described; it is specified.

I draw on two NYU Shanghai IMA summer offerings. In a high-school program, 60 students with essentially no coding background built 50+ playable browser games in three sessions; each chose a domain they had genuinely learned — sailing, skateboarding, curling — and before any AI handoff wrote a brief and a hand-drawn system graph encoding the novice misconception ("point the boat at the goal") against expert judgment ("read the wind"). In a university course, the same pipeline ran on the lived-experience path: *The Darkroom*, a photographic-exposure game specified as four variables and built into 51 scripts across 72 logged human–AI interactions — starting not from a skill but from a feeling: photos never capture what you actually saw.

Three things transfer to any discipline. Structuring what you know well enough to specify it is a foundational literacy — teachable in three sessions, scalable over a semester. The development log (student request / AI response / student decision) doubles as an assessment instrument, making the boundary between human judgment and AI execution inspectable — though it needs in-process checkpoints: one project shipped 17 scripts while logging a single interaction. And judgment stays human: one student went back to ask whether the game still expressed the feeling they started from — a question AI will not ask for you.

---

## 中文对照版（供理解/校内沟通）

瓶颈不在模型：一项研究中，10,400 次单趟生成代码的尝试无一产出可运行版本；另一项中，前沿编码智能体做完整游戏仅得 41%。生成代码不等于交付一个被设计过的系统——那么，还有什么值得教？

本演讲主张：学生需要的不是提示词技巧，而是撰写**系统描述**的能力——把系统的变量、规则、反馈与目标体验写成结构化规格。游戏不是被"描述"的，是被"规定"的。

报告基于上海纽约大学 IMA 的两个暑期项目。**高中生夏校**：60 名几乎零编程基础的学生，三个 session 做出 50 多款可玩网页游戏；每人选择一个自己真正学过的领域（帆船、滑板、冰壶），在交给 AI 之前先写开发摘要与手绘系统图，把"新手误解"（把船头对准目标）与"专家判断"（读风、迎风之字航行）写进规格。**大学生暑期课**：同一套流程走的是生活经验路径——《The Darkroom》把"照片永远拍不出你当时看到的"这种感受写成四个变量，最终实现为 51 个脚本、72 次人机交互日志。

三点可迁移到任何学科：其一，把所知结构化到"能被规定"的程度，是 AI 时代的基础素养——三节课可教会，一学期可规模化。其二，人机开发日志（学生请求／AI 回应／学生决定）本身就是评估工具，让"人的判断"与"AI 的执行"可被分开检视——但它需要过程性检查点：有项目做了 17 个脚本，日志只记录了 1 次交互。其三，判断仍在人：有学生回头问"改了之后，这游戏还表达我最初的感受吗"——这个问题 AI 不会替你问。

---

## 为什么这份 proposal 契合 CFP（三处呼应）

1. **「How should we prepare students for an AI-infused world?」** → 直接回答：要教的不是工具操作，而是"系统描述"这一结构化素养，且有**两个学生群体**（60 名高中生 + 大学生课程 7 项目）的实证说明它可教、可规模化。
2. **「assessment strategies（评估策略）」** → 最强卖点：人机开发日志把"人的设计决策"与"AI 的执行"分离开，让过程可检视；且我们**诚实报告了工具的局限**（17 脚本只记录 1 次交互 → 需要每周过程性检查点）——这不是吹嘘工具完美，而是给在座教师一条可直接带走的做法。
3. **「proposals need not focus on the use of AI… an antidote to technology」** → 我们的立场恰恰不是"多用 AI"，而是"守住 AI 不能替人做的那部分"（领域判断、价值取舍、情感验证）；半个演讲在论证 AI 目前的真实天花板（0/10,400、41%）。

---

## 演讲前建议调整（针对 faculty 教学场合）

**已完成（2026-09-05 deck 已更新）**：
- ✅ P1 数据墙：更新为真实数据（60 / ≈0 / 3 / 50+）+ 大学生一行（7 项目 · Darkroom 51 脚本 / 72 次交互）
- ✅ P16：改为「两类学生、两条路径」——高中生 62 领域作品墙 + 底部 Darkroom 四格横条（生活经验→规格→输入→机制）
- ✅ P17 洞见：02 加入大学生规模证据；03 加入 Coaster Carnage 学生反思（"还表达我最初的感受吗？"）
- ✅ P18：新增第三张卡「过程性检查点」（评估发现，直接回应 assessment strategies）

**仍待办**：
- **P6–P7 双文献谱系**（MDA / 模式库 / Iosup / Resonance / 锯齿前沿 / 自动化依赖）：对全校教师偏学术，建议压缩为一页"为什么这件事没人教"，把时间让给教学实践与证据。
- **P12 三份文件**：这一页要讲透——它是评估论点的理论基础。
- **补一页"跨学科迁移"**（可选）：给非技术学科教师一个抓手（比如：写一份实验课的"系统描述"、一篇论文的结构化提纲），回应"这跟我有什么关系"。
- **结尾可行动的邀请**：如果反响好，可顺势提出后续开一场教师工作坊（现场写一份系统描述）。
