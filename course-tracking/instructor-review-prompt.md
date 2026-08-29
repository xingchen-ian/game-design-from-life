# Instructor Review Prompt · Game One

> 固定检查提示词。每次要看学生作业时，把学生 repo 克隆到本地（或在 AI IDE 里打开该文件夹），
> 把下面 **§Prompt** 整段发给 AI，一次得到一份结构一致的报告。
>
> 状态：v1 · 2026-08-29 ｜ 配套：`student-repos.md`（索引）、`analysis-framework.md`（研究视角分析）

---

## 使用说明（给老师）

1. 拿到学生 repo 地址（`student-repos.md` 里有），克隆到本地：
   `gh repo clone <owner>/<repo> ~/course-check/<repo>`
   或直接 `git clone`，并 `git pull` 到最新。
2. 在 AI IDE（Cursor / Claude Code / Codex 等）里打开这个文件夹，把整段 Prompt 贴进去。
3. 把报告存成 `course-tracking/reviews/2026-<mm>-<dd>-<student>.md`，方便下次对比进度。
4. **不要跳过 §3 和 §4**——这两节是这门课的评分重点：学生是否真的做了设计决策，以及 AI 有没有把
   游戏带偏成一个普通小游戏。

### 两个版本

- **完整版**（下面 §Prompt）：第一次看、期中、期末用。
- **快速版**（扫一遍只要红黄绿）：在 Prompt 开头加一句
  `Quick pass only. Output just the verdict line and the red flags, under 150 words.`

---

## Prompt

```text
You are reviewing a student's Game One project for a university course called
"Game Design from Everyday Life" (CGDD, INTM-SHU 247). The student built a small
browser game out of a real domain they personally know, working alongside an AI
coding agent.

The pedagogical goal is NOT code quality. It is whether the student made real
domain judgments, and whether those judgments survived into the playable game.
AI is expected to have written most of the code — that is by design. What I need
from you is evidence about the student's thinking.

Work through the repo in this order and report under the headings below.

---

## 0. Inventory (mechanical, no interpretation)

List which of these exist. Mark MISSING for anything absent. Give file paths.

- brief.md (the 16-section development brief exported from the workbook)
- system-graph.png, or a graph link inside a markdown file
- ratings.csv (exported question ratings)
- game/ (playable source)
- website/ (project site)
- development-log/ or agent-development-log.md
- README.md

If the development log is missing or has fewer than 3 entries, say so plainly
and stop after §1 — there is not enough process evidence to review.

---

## 1. What is this game, in one sentence?

State: the original life experience or domain, the novice→expert judgment the
player is supposed to learn, and the core mechanic. Quote the brief; do not
paraphrase it into something more impressive than it is. If the brief does not
actually state all three, say which one is missing.

---

## 2. Brief vs. implementation

For each row below, compare what the brief DECLARED against what the game
ACTUALLY DOES. Read the game code — do not trust the brief or the README.
Verdict per row: MATCHED / PARTIAL / NOT IMPLEMENTED / CONTRADICTS BRIEF.
Cite file:line for the implementing code, or say "no implementation found."

| Declared in brief | Actually in the game |
|---|---|
| Core mechanic | |
| Main data / variables | |
| Feedback priorities (what the player learns to read) | |
| Challenge presets (how they differ) | |
| Visual & camera approach | |
| Stated human–AI boundary | |

Then answer in one line: what is the single biggest gap between the design and
the build?

---

## 3. Evidence of the student's own decisions

This is the most important section. Read every Reflection Log entry.

a) Quote up to 5 passages verbatim (with file:line) that read like genuine
   student decisions — specific, first-person, naming a concrete thing that was
   accepted, rejected, or changed.

b) Then flag AI-written filler. Typical signs:
   - passive voice or third person ("it was decided that…")
   - no concrete nouns: no file names, no variable names, no numbers
   - the reflection contains ZERO rejections of AI suggestions (a real process
     almost always has at least one)
   - generic learning language ("I learned a lot about game design")
   - the section headers are filled in but the bodies are near-empty or repeat
     the header
   - the Required Student Reflection has clearly been answered BY the AI

c) Verdict: STRONG / THIN / FABRICATED evidence of student authorship.
   Explain the verdict in two sentences. Do not soften it.

---

## 4. AI-drift check

Has the AI turned this into a generic game? Check for these red flags and report
each as PRESENT or ABSENT, with file:line where relevant:

- The core mechanic has been replaced by a generic loop (score attack, endless
  runner, reaction-timing).
- Challenge presets differ only by numbers — speed, HP, spawn rate — rather than
  by variables, relationships, information, or constraints.
- The original life experience is no longer traceable in the game; nothing in
  the build points back to it.
- Visual polish is clearly more developed than the mechanic (e.g. particle
  effects and themed assets on top of a one-button game).
- The domain's actual feedback channels were replaced with a score and a timer.

Then: if drift is present, name the earliest commit or log entry where the
project stopped being about the student's domain. (Use `git log`.)

---

## 5. Timeline

Run `git log --date=short --pretty=format:'%ad %s'`. Report:

- first commit date, last commit date, total commits
- whether work is spread out or crammed (e.g. 90% of commits in the last 48h
  before a deadline)
- whether commit messages describe real changes or are noise ("update", "fix",
  "asdf")

---

## 6. Verdict and what to say to the student

- Traffic light: GREEN (on track) / YELLOW (recoverable) / RED (needs
  intervention or a redo), with one sentence of justification.
- The ONE thing this student most needs to fix, ranked by pedagogical value,
  not by technical severity.
- Three sentences of feedback written so they can be pasted straight into a
  comment to the student. Direct, specific, no praise padding, no "great job."
  Name the artifact you are referring to.

---

## Rules

- Cite file:line for every claim. If you cannot find it, write NOT FOUND.
- Never infer that something happened because it "probably" did.
- Do not praise effort, polish, or code quality. This review is about whether
  domain judgment survived into the design.
- If the repo is empty or nearly empty, say so in one line and stop.
- Be honest and specific. The purpose is not to confirm the student is doing
  well; it is to tell me what is actually there.
```

---

## 输出字段速查

| 节 | 回答什么问题 | 老师看什么 |
|---|---|---|
| 0 Inventory | 交了没有 | 缺哪份文件，直接点名 |
| 1 一句话 | 学生自己说清了吗 | Brief 里三要素是否都在 |
| 2 Brief vs 实现 | 设计和成品对得上吗 | 最大的一处落差 |
| **3 学生决策证据** | **这是学生做的还是 AI 做的** | **STRONG / THIN / FABRICATED** |
| **4 AI 带偏** | **有没有变成普通小游戏** | **最早在哪一次跑偏** |
| 5 时间线 | 是做过程还是赶deadline | 提交分布、commit 信息质量 |
| 6 结论 | 下次课说什么 | 红黄绿 + 一条最该改的 + 三句话反馈 |

---

## 常见误判提醒

- **代码写得糙 ≠ 做得差。** 这门课不考核编程。代码粗糙但 Reflection 里有真实取舍，是 GREEN。
- **画面漂亮 ≠ 做得好。** 视觉精细度超过机制清晰度，本身就是 §4 的红旗之一。
- **Brief 写得漂亮也不算数。** Brief 由 Workbook 答案生成，要对照 §2 看它有没有真的落进代码。
- **Reflection 里一条"我拒绝了 AI 的建议"都没有，基本可以判定是 AI 代笔。** 真实过程几乎必然有至少一次拒绝。

---

## 与 analysis-framework.md 的分工

- `instructor-review-prompt.md`（本文件）：**单次作业检查**，每次看作业时用，输出红黄绿 + 反馈。
- `analysis-framework.md`：**跨项目研究分析**，把所有学生项目当成研究证据做比较（情感路径 vs
  领域路径、挑战空间设计等）。

先看本文件，攒够样本再进 analysis 层。
